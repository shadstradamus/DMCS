# DMCS Python SDK

Python library for working with the Dynamic Multi-Dimensional Classification Standard (DMCS).

## Installation

The SDK is not published to PyPI yet. Install directly from the repository:

```bash
pip install "git+https://github.com/shadstradamus/DMCS.git#subdirectory=python-sdk"
```

Or clone the repo and install in editable mode:

```bash
git clone https://github.com/shadstradamus/DMCS.git
cd DMCS/python-sdk
pip install -e .
```

## Quick Start

```python
from dmcs_sdk import classification

# Load the classification
dmcs = classification()

# Get stats
print(dmcs.stats())
# {'version': '1.1.0', 'release_date': '2025-11-09', 'industries': 13, 'sectors': 55, 'subsectors': 190, 'segments': 14, ...}

# Lookup by ID
tech = dmcs.get_by_id('09')
print(tech)
# 09 — Technology (4 sectors, GIC)

saas = dmcs.get_by_id('09.01.002')
print(saas)
# 09.01.002 — Enterprise SaaS

# Search by text
results = dmcs.search('blockchain')
for result in results:
    print(result)
# 13 — Digital Assets & Blockchain (4 sectors, DIC)
# 13.01 — DLT & Blockchain Infrastructure (4 subsectors)
# ...

# Filter by classification
gic = dmcs.get_GIC()  # Traditional economy (01-12)
dic = dmcs.get_DIC()  # Digital assets (13)

print(f"GIC has {len(gic)} industries")
print(f"DIC has {len(dic)} industries")
```

## API Reference

### `classification`

Main class for loading and querying DMCS data.

**Properties:**
- `version: str` - DMCS version
- `release_date: str` - Release date
- `description: str` - Classification description
- `industries: List[Industry]` - All industries
- `total_industries: int` - Count of all industries
- `total_sectors: int` - Count of all sectors
- `total_subsectors: int` - Count of all subsectors
- `total_segments: int` - Count of all segments

**Methods:**
- `get_by_id(classification_id: str) -> Industry | Sector | Subsector | Segment | None` - Lookup by ID
- `search(query: str, case_sensitive: bool = False) -> List` - Search by text
- `filter_by_classification(classification: str) -> List[Industry]` - Filter by GIC or DIC
- `get_GIC() -> List[Industry]` - Get all GIC industries (01-12)
- `get_DIC() -> List[Industry]` - Get all DIC industries (13)
- `stats() -> Dict` - Get classification statistics (industries, sectors, subsectors, segments)

### Data Classes

**Industry**
```python
@dataclass
class Industry:
    id: str
    label: str
    classification: str  # "GIC" or "DIC"
    sectors: List[Sector]
```

**Sector**
```python
@dataclass
class Sector:
    id: str
    label: str
    industry_id: str
    classification: str  # "GIC" or "DIC"
    subsectors: List[Subsector]
```

**Subsector**
```python
@dataclass
class Subsector:
    id: str
    label: str
    sector_id: str
    industry_id: str
    classification: str  # "GIC" or "DIC"
    segments: List[Segment]
```

**Segment**
```python
@dataclass
class Segment:
    id: str
    label: str
    subsector_id: str
    sector_id: str
    industry_id: str
    classification: str  # "GIC" or "DIC"
```

## Examples

### Classify a company

```python
from dmcs_sdk import classification

dmcs = classification()

# Amazon: Primary = Online Marketplaces, Secondary = Cloud Platforms
primary = dmcs.get_by_id('04.05.002')
secondary = dmcs.get_by_id('09.01.004')

print(f"Amazon Primary: {primary.label}")
print(f"Amazon Secondary: {secondary.label}")
```

### Iterate through all classifications

```python
from dmcs_sdk import classification

dmcs = classification()

for industry in dmcs.industries:
    print(f"\n{industry.id} — {industry.label} ({industry.classification})")
    for sector in industry.sectors:
        print(f"  {sector.id} — {sector.label}")
        for subsector in sector.subsectors:
            print(f"    {subsector.id} — {subsector.label}")
```

### Find all blockchain-related classifications

```python
from dmcs_sdk import classification

dmcs = classification()

blockchain = dmcs.search('blockchain')
for item in blockchain:
    print(f"{item.id} — {item.label}")
```

### Get all Digital Asset industries

```python
from dmcs_sdk import classification

dmcs = classification()

# Get DIC (Digital Industry Classification) industries
dic = dmcs.get_DIC()
for industry in dic:
    print(f"{industry.id} — {industry.label}")
    print(f"  Sectors: {len(industry.sectors)}")
    print(f"  Subsectors: {industry.subsector_count}")
```

### Load from custom file

```python
from dmcs_sdk import classification
from pathlib import Path

# Load from a custom JSON file
custom_path = Path('/path/to/custom/classification.json')
dmcs = classification(data_path=custom_path)

print(dmcs.stats())
```

## Development

### Run tests
```bash
pip install -e ".[dev]"
pytest
```

### Type checking
```bash
mypy dmcs_sdk
```

### Code formatting
```bash
black dmcs_sdk
```

## License

Apache 2.0 License - see [LICENSE](../LICENSE)
