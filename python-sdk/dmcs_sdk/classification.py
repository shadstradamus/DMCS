"""Core Classification data structures and query functionality"""

import json
from importlib import resources
from pathlib import Path
from typing import List, Optional, Dict, Any
from dataclasses import dataclass


@dataclass
class Subsector:
    """Represents a DMCS subsector (II.SS.SSS)"""
    id: str
    label: str
    sector_id: str
    industry_id: str
    classification: str  # GIC or DIC

    def __repr__(self):
        return f"{self.id} — {self.label}"


@dataclass
class Sector:
    """Represents a DMCS sector (II.SS)"""
    id: str
    label: str
    industry_id: str
    classification: str  # GIC or DIC
    subsectors: List[Subsector]

    def __repr__(self):
        return f"{self.id} — {self.label} ({len(self.subsectors)} subsectors)"

    def get_subsector(self, subsector_id: str) -> Optional[Subsector]:
        """Get subsector by ID"""
        return next((s for s in self.subsectors if s.id == subsector_id), None)


@dataclass
class Industry:
    """Represents a DMCS industry (II)"""
    id: str
    label: str
    classification: str  # GIC or DIC
    sectors: List[Sector]

    def __repr__(self):
        return f"{self.id} — {self.label} ({len(self.sectors)} sectors, {self.Classification})"

    def get_sector(self, sector_id: str) -> Optional[Sector]:
        """Get sector by ID"""
        return next((s for s in self.sectors if s.id == sector_id), None)

    @property
    def subsector_count(self) -> int:
        """Total subsectors in this industry"""
        return sum(len(s.subsectors) for s in self.sectors)


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
        """Load Classification JSON bundled with the package."""

        try:
            json_text = resources.files('dmcs_sdk.data').joinpath('Classification.json').read_text(encoding='utf-8')
        except AttributeError:  # Python 3.8 compatibility
            with resources.open_text('dmcs_sdk.data', 'Classification.json', encoding='utf-8') as f:
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
                        sector_id=sec_data['id'],
                        industry_id=ind_data['id'],
                        Classification=ind_data['Classification']
                    )
                    for sub in sec_data['subsectors']
                ]
                sectors.append(Sector(
                    id=sec_data['id'],
                    label=sec_data['label'],
                    industry_id=ind_data['id'],
                    Classification=ind_data['Classification'],
                    subsectors=subsectors
                ))
            industries.append(Industry(
                id=ind_data['id'],
                label=ind_data['label'],
                Classification=ind_data['Classification'],
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
        
        return results

    def filter_by_Classification(self, classification: str) -> List[Industry]:
        """
        Get all industries in a specific Classification
        
        Args:
            classification: "GIC" or "DIC"
            
        Returns:
            List of Industry objects
        """
        return [i for i in self.industries if i.Classification == Classification]

    def get_p_tax(self) -> List[Industry]:
        """Get all P-TAX (General Industry Classification) industries (01-12)"""
        return self.filter_by_Classification("GIC")

    def get_d_tax(self) -> List[Industry]:
        """Get all D-TAX (Digital Industry Classification) industries (13)"""
        return self.filter_by_Classification("DIC")

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

    def stats(self) -> Dict[str, int]:
        """Get Classification statistics"""
        return {
            "version": self.version,
            "release_date": self.release_date,
            "industries": self.total_industries,
            "sectors": self.total_sectors,
            "subsectors": self.total_subsectors,
            "p_tax_industries": len(self.get_p_tax()),
            "d_tax_industries": len(self.get_d_tax())
        }

    def __repr__(self):
        return f"DMCS v{self.version} ({self.total_industries} industries, {self.total_sectors} sectors, {self.total_subsectors} subsectors)"
