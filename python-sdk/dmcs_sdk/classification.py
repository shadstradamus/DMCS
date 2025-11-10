"""Core Classification data structures and query functionality"""

import json
from importlib import resources
from pathlib import Path
from typing import List, Optional, Dict, Any
from dataclasses import dataclass, field


@dataclass
class Segment:
    """Represents a DMCS segment (II.SS.SSS.SS)"""
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
        """Check if this segment is active"""
        return self.status == "active"


@dataclass
class Subsector:
    """Represents a DMCS subsector (II.SS.SSS)"""
    id: str
    label: str
    level: str
    parent_id: str
    sector_id: str
    industry_id: str
    classification: str  # GIC or DIC
    segments: List[Segment] = field(default_factory=list)
    since: Optional[str] = None
    status: str = "active"

    def __repr__(self):
        return f"{self.id} — {self.label}"

    def get_segment(self, segment_id: str) -> Optional[Segment]:
        """Get segment by ID"""
        return next((s for s in self.segments if s.id == segment_id), None)
    
    def is_active(self) -> bool:
        """Check if this subsector is active"""
        return self.status == "active"


@dataclass
class Sector:
    """Represents a DMCS sector (II.SS)"""
    id: str
    label: str
    level: str
    parent_id: str
    industry_id: str
    classification: str  # GIC or DIC
    subsectors: List[Subsector]
    since: Optional[str] = None
    status: str = "active"

    def __repr__(self):
        return f"{self.id} — {self.label} ({len(self.subsectors)} subsectors)"

    def get_subsector(self, subsector_id: str) -> Optional[Subsector]:
        """Get subsector by ID"""
        return next((s for s in self.subsectors if s.id == subsector_id), None)
    
    def is_active(self) -> bool:
        """Check if this sector is active"""
        return self.status == "active"


@dataclass
class Industry:
    """Represents a DMCS industry (II)"""
    id: str
    label: str
    level: str
    parent_id: Optional[str]
    classification: str  # GIC or DIC
    sectors: List[Sector]
    since: Optional[str] = None
    status: str = "active"

    def __repr__(self):
        return f"{self.id} — {self.label} ({len(self.sectors)} sectors, {self.classification})"

    def get_sector(self, sector_id: str) -> Optional[Sector]:
        """Get sector by ID"""
        return next((s for s in self.sectors if s.id == sector_id), None)

    @property
    def subsector_count(self) -> int:
        """Total subsectors in this industry"""
        return sum(len(s.subsectors) for s in self.sectors)
    
    def is_active(self) -> bool:
        """Check if this industry is active"""
        return self.status == "active"


class classification:
    """DMCS Classification - main interface for querying classification data"""

    def __init__(self, data_path: Optional[Path] = None):
        """Initialize DMCS Classification from the packaged JSON or a custom path."""

        if data_path is None:
            data = self._load_packaged_Classification()
        else:
            with open(data_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
        
        self.version = data['dmcs_version']
        self.release_date = data['release_date']
        self.description = data['description']
        self.industries = self._load_industries(data['industries'])

    @staticmethod
    def _load_packaged_Classification() -> Dict[str, Any]:
        """Load classification JSON bundled with the package."""

        try:
            json_text = resources.files('dmcs_sdk.data').joinpath('classification.json').read_text(encoding='utf-8')
        except AttributeError:  # Python 3.8 compatibility
            with resources.open_text('dmcs_sdk.data', 'classification.json', encoding='utf-8') as f:
                return json.load(f)

        return json.loads(json_text)

    def _load_industries(self, industries_data: List[Dict]) -> List[Industry]:
        """Parse JSON into Industry objects"""
        industries = []
        for ind_data in industries_data:
            sectors = []
            for sec_data in ind_data['sectors']:
                subsectors = [
                    Subsector(
                        id=sub['id'],
                        label=sub['label'],
                        level=sub.get('level', 'subsector'),
                        parent_id=sub.get('parent_id', sec_data['id']),
                        sector_id=sec_data['id'],
                        industry_id=ind_data['id'],
                        classification=sub.get('classification', ind_data['classification']),
                        segments=[
                            Segment(
                                id=seg['id'],
                                label=seg['label'],
                                level=seg.get('level', 'segment'),
                                parent_id=seg.get('parent_id', sub['id']),
                                subsector_id=sub['id'],
                                sector_id=sec_data['id'],
                                industry_id=ind_data['id'],
                                classification=seg.get('classification', ind_data['classification']),
                                segment_code=seg.get('segment_code')
                            )
                            for seg in sub.get('segments', [])
                        ]
                    )
                    for sub in sec_data['subsectors']
                ]
                sectors.append(Sector(
                    id=sec_data['id'],
                    label=sec_data['label'],
                    level=sec_data.get('level', 'sector'),
                    parent_id=sec_data.get('parent_id', ind_data['id']),
                    industry_id=ind_data['id'],
                    classification=sec_data.get('classification', ind_data['classification']),
                    subsectors=subsectors
                ))
            industries.append(Industry(
                id=ind_data['id'],
                label=ind_data['label'],
                level=ind_data.get('level', 'industry'),
                parent_id=ind_data.get('parent_id'),
                classification=ind_data.get('classification', 'GIC'),
                sectors=sectors
            ))
        return industries

    def get_by_id(self, classification_id: str) -> Optional[Any]:
        """
        Lookup any classification by ID
        
        Args:
            classification_id: Industry (II), Sector (II.SS), or Subsector (II.SS.SSS) ID
            
        Returns:
            Industry, Sector, or Subsector object, or None if not found
        """
        parts = classification_id.split('.')
        
        # Industry lookup (e.g., "09")
        if len(parts) == 1:
            return next((i for i in self.industries if i.id == classification_id), None)
        
        # Sector lookup (e.g., "09.01")
        elif len(parts) == 2:
            industry = self.get_by_id(parts[0])
            if industry:
                return industry.get_sector(classification_id)
        
        # Subsector lookup (e.g., "09.01.002")
        elif len(parts) == 3:
            sector = self.get_by_id(f"{parts[0]}.{parts[1]}")
            if sector:
                return sector.get_subsector(classification_id)
        
        # Segment lookup (e.g., "09.01.002.03")
        elif len(parts) == 4:
            subsector = self.get_by_id(f"{parts[0]}.{parts[1]}.{parts[2]}")
            if isinstance(subsector, Subsector):
                return subsector.get_segment(classification_id)

        return None

    def search(self, query: str, case_sensitive: bool = False) -> List[Any]:
        """
        Search for classifications by label text
        
        Args:
            query: Text to search for in labels
            case_sensitive: Whether search should be case-sensitive
            
        Returns:
            List of matching Industry, Sector, or Subsector objects
        """
        results = []
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

    def filter_by_classification(self, classification: str) -> List[Industry]:
        """
        Get all industries in a specific classification
        
        Args:
            classification: "GIC" or "DIC"
            
        Returns:
            List of Industry objects
        """
        return [i for i in self.industries if i.classification == classification]

    def get_GIC(self) -> List[Industry]:
        """Get all GIC (General Industry Classification) industries (01-12)"""
        return self.filter_by_classification("GIC")

    def get_DIC(self) -> List[Industry]:
        """Get all DIC (Digital Industry Classification) industries (13)"""
        return self.filter_by_classification("DIC")

    @property
    def total_industries(self) -> int:
        """Total number of industries"""
        return len(self.industries)

    @property
    def total_sectors(self) -> int:
        """Total number of sectors across all industries"""
        return sum(len(i.sectors) for i in self.industries)

    @property
    def total_subsectors(self) -> int:
        """Total number of subsectors across all industries"""
        return sum(i.subsector_count for i in self.industries)

    @property
    def total_segments(self) -> int:
        """Total number of segments across all industries"""
        return sum(
            len(sub.segments)
            for ind in self.industries
            for sec in ind.sectors
            for sub in sec.subsectors
        )

    def stats(self) -> Dict[str, int]:
        """Get classification statistics"""
        return {
            "version": self.version,
            "release_date": self.release_date,
            "industries": self.total_industries,
            "sectors": self.total_sectors,
            "subsectors": self.total_subsectors,
            "segments": self.total_segments,
            "gic_industries": len(self.get_GIC()),
            "dic_industries": len(self.get_DIC())
        }
    
    def get_active(self) -> List[Any]:
        """Get all active nodes (industries, sectors, subsectors, segments)"""
        active_nodes = []
        for industry in self.industries:
            if industry.is_active():
                active_nodes.append(industry)
            for sector in industry.sectors:
                if sector.is_active():
                    active_nodes.append(sector)
                for subsector in sector.subsectors:
                    if subsector.is_active():
                        active_nodes.append(subsector)
                    for segment in subsector.segments:
                        if segment.is_active():
                            active_nodes.append(segment)
        return active_nodes
    
    def get_by_status(self, status: str) -> List[Any]:
        """Get all nodes with the specified status ('active', 'deprecated', or 'retired')"""
        nodes = []
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
        return f"DMCS v{self.version} ({self.total_industries} industries, {self.total_sectors} sectors, {self.total_subsectors} subsectors)"
