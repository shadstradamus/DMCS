"""Core DMCS classification data structures and query functionality."""

import json
from pathlib import Path
from typing import Any, Dict, List, Optional
from dataclasses import dataclass, field


@dataclass
class Segment:
    """Represents a DMCS segment (II.SS.SSS.SS)."""

    id: str
    label: str
    level: str
    parent_id: str
    subsector_id: str
    sector_id: str
    industry_id: str
    classification: str
    segment_code: Optional[str] = None
    since: Optional[str] = None
    status: str = "active"

    def __repr__(self):
        return f"{self.id} — {self.label}"

    def is_active(self) -> bool:
        """Return True when this segment is active."""
        return self.status == "active"


@dataclass
class Subsector:
    """Represents a DMCS subsector (II.SS.SSS)."""

    id: str
    label: str
    level: str
    parent_id: str
    sector_id: str
    industry_id: str
    classification: str
    segments: List[Segment] = field(default_factory=list)
    since: Optional[str] = None
    status: str = "active"

    def __repr__(self):
        return f"{self.id} — {self.label}"

    def get_segment(self, segment_id: str) -> Optional[Segment]:
        """Get a segment by ID."""
        return next((segment for segment in self.segments if segment.id == segment_id), None)

    def is_active(self) -> bool:
        """Return True when this subsector is active."""
        return self.status == "active"


@dataclass
class Sector:
    """Represents a DMCS sector (II.SS)."""

    id: str
    label: str
    level: str
    parent_id: str
    industry_id: str
    classification: str
    subsectors: List[Subsector]
    since: Optional[str] = None
    status: str = "active"

    def __repr__(self):
        return f"{self.id} — {self.label} ({len(self.subsectors)} subsectors)"

    def get_subsector(self, subsector_id: str) -> Optional[Subsector]:
        """Get a subsector by ID."""
        return next((subsector for subsector in self.subsectors if subsector.id == subsector_id), None)

    def is_active(self) -> bool:
        """Return True when this sector is active."""
        return self.status == "active"


@dataclass
class Industry:
    """Represents a DMCS industry (II)."""

    id: str
    label: str
    level: str
    parent_id: Optional[str]
    classification: str
    sectors: List[Sector]
    since: Optional[str] = None
    status: str = "active"

    def __repr__(self):
        return f"{self.id} — {self.label} ({len(self.sectors)} sectors, {self.classification})"

    def get_sector(self, sector_id: str) -> Optional[Sector]:
        """Get a sector by ID."""
        return next((sector for sector in self.sectors if sector.id == sector_id), None)

    @property
    def subsector_count(self) -> int:
        """Return the total number of subsectors in this industry."""
        return sum(len(sector.subsectors) for sector in self.sectors)

    def is_active(self) -> bool:
        """Return True when this industry is active."""
        return self.status == "active"


class classification:
    """Main interface for loading and querying the DMCS classification."""

    def __init__(self, data_path: Optional[Path] = None):
        """Initialize DMCS from the bundled JSON or a custom JSON path."""
        if data_path is None:
            data = self._load_packaged_Classification()
        else:
            with open(data_path, "r", encoding="utf-8") as fh:
                data = json.load(fh)

        self.version = data["dmcs_version"]
        self.release_date = data["release_date"]
        self.description = data["description"]
        self.industries = self._load_industries(data["industries"])

    @staticmethod
    def _load_packaged_Classification() -> Dict[str, Any]:
        """Load the classification JSON bundled with the package."""
        data_path = Path(__file__).resolve().parent / "data" / "classification.json"
        with open(data_path, "r", encoding="utf-8") as fh:
            return json.load(fh)

    def _load_industries(self, industries_data: List[Dict[str, Any]]) -> List[Industry]:
        """Parse raw JSON records into DMCS data objects."""
        industries: List[Industry] = []

        for ind_data in industries_data:
            sectors: List[Sector] = []

            for sec_data in ind_data["sectors"]:
                subsectors: List[Subsector] = []

                for sub_data in sec_data["subsectors"]:
                    segments = [
                        Segment(
                            id=seg_data["id"],
                            label=seg_data["label"],
                            level=seg_data.get("level", "segment"),
                            parent_id=seg_data.get("parent_id", sub_data["id"]),
                            subsector_id=seg_data.get("subsector_id", sub_data["id"]),
                            sector_id=seg_data.get("sector_id", sec_data["id"]),
                            industry_id=seg_data.get("industry_id", ind_data["id"]),
                            classification=seg_data.get("classification", ind_data["classification"]),
                            segment_code=seg_data.get("segment_code"),
                            since=seg_data.get("since"),
                            status=seg_data.get("status", "active"),
                        )
                        for seg_data in sub_data.get("segments", [])
                    ]

                    subsectors.append(
                        Subsector(
                            id=sub_data["id"],
                            label=sub_data["label"],
                            level=sub_data.get("level", "subsector"),
                            parent_id=sub_data.get("parent_id", sec_data["id"]),
                            sector_id=sub_data.get("sector_id", sec_data["id"]),
                            industry_id=sub_data.get("industry_id", ind_data["id"]),
                            classification=sub_data.get("classification", ind_data["classification"]),
                            segments=segments,
                            since=sub_data.get("since"),
                            status=sub_data.get("status", "active"),
                        )
                    )

                sectors.append(
                    Sector(
                        id=sec_data["id"],
                        label=sec_data["label"],
                        level=sec_data.get("level", "sector"),
                        parent_id=sec_data.get("parent_id", ind_data["id"]),
                        industry_id=sec_data.get("industry_id", ind_data["id"]),
                        classification=sec_data.get("classification", ind_data["classification"]),
                        subsectors=subsectors,
                        since=sec_data.get("since"),
                        status=sec_data.get("status", "active"),
                    )
                )

            industries.append(
                Industry(
                    id=ind_data["id"],
                    label=ind_data["label"],
                    level=ind_data.get("level", "industry"),
                    parent_id=ind_data.get("parent_id"),
                    classification=ind_data.get("classification", "GIC"),
                    sectors=sectors,
                    since=ind_data.get("since"),
                    status=ind_data.get("status", "active"),
                )
            )

        return industries

    def get_by_id(self, classification_id: str) -> Optional[Any]:
        """Look up an industry, sector, subsector, or segment by ID."""
        parts = classification_id.split(".")

        if len(parts) == 1:
            return next((industry for industry in self.industries if industry.id == classification_id), None)

        if len(parts) == 2:
            industry = self.get_by_id(parts[0])
            if isinstance(industry, Industry):
                return industry.get_sector(classification_id)

        if len(parts) == 3:
            sector = self.get_by_id(f"{parts[0]}.{parts[1]}")
            if isinstance(sector, Sector):
                return sector.get_subsector(classification_id)

        if len(parts) == 4:
            subsector = self.get_by_id(f"{parts[0]}.{parts[1]}.{parts[2]}")
            if isinstance(subsector, Subsector):
                return subsector.get_segment(classification_id)

        return None

    def search(self, query: str, case_sensitive: bool = False) -> List[Any]:
        """Search all classification labels for text."""
        results: List[Any] = []
        search_query = query if case_sensitive else query.lower()

        for industry in self.industries:
            label = industry.label if case_sensitive else industry.label.lower()
            if search_query in label:
                results.append(industry)

            for sector in industry.sectors:
                label = sector.label if case_sensitive else sector.label.lower()
                if search_query in label:
                    results.append(sector)

                for subsector in sector.subsectors:
                    label = subsector.label if case_sensitive else subsector.label.lower()
                    if search_query in label:
                        results.append(subsector)

                    for segment in subsector.segments:
                        label = segment.label if case_sensitive else segment.label.lower()
                        if search_query in label:
                            results.append(segment)

        return results

    def filter_by_classification(self, classification_code: str) -> List[Industry]:
        """Return industries belonging to GIC or DIC."""
        return [industry for industry in self.industries if industry.classification == classification_code]

    def get_GIC(self) -> List[Industry]:
        """Return all General Industry Classification (GIC) industries."""
        return self.filter_by_classification("GIC")

    def get_DIC(self) -> List[Industry]:
        """Return all Digital Industry Classification (DIC) industries."""
        return self.filter_by_classification("DIC")

    @property
    def total_industries(self) -> int:
        """Return the number of industries."""
        return len(self.industries)

    @property
    def total_sectors(self) -> int:
        """Return the number of sectors."""
        return sum(len(industry.sectors) for industry in self.industries)

    @property
    def total_subsectors(self) -> int:
        """Return the number of subsectors."""
        return sum(industry.subsector_count for industry in self.industries)

    @property
    def total_segments(self) -> int:
        """Return the number of segments."""
        return sum(
            len(subsector.segments)
            for industry in self.industries
            for sector in industry.sectors
            for subsector in sector.subsectors
        )

    def stats(self) -> Dict[str, Any]:
        """Return summary statistics for the loaded taxonomy."""
        return {
            "version": self.version,
            "release_date": self.release_date,
            "industries": self.total_industries,
            "sectors": self.total_sectors,
            "subsectors": self.total_subsectors,
            "segments": self.total_segments,
            "gic_industries": len(self.get_GIC()),
            "dic_industries": len(self.get_DIC()),
        }

    def get_active(self) -> List[Any]:
        """Return all nodes whose status is active."""
        return self.get_by_status("active")

    def get_by_status(self, status: str) -> List[Any]:
        """Return nodes with status active, deprecated, or sunset."""
        nodes: List[Any] = []

        for industry in self.industries:
            if industry.status == status:
                nodes.append(industry)
            for sector in industry.sectors:
                if sector.status == status:
                    nodes.append(sector)
                for subsector in sector.subsectors:
                    if subsector.status == status:
                        nodes.append(subsector)
                    for segment in subsector.segments:
                        if segment.status == status:
                            nodes.append(segment)

        return nodes

    def __repr__(self):
        return (
            f"DMCS v{self.version} ({self.total_industries} industries, "
            f"{self.total_sectors} sectors, {self.total_subsectors} subsectors)"
        )
