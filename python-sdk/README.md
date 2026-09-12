# DMCS Python SDK

Python library for working with the Dynamic Multi-Dimensional Classification Standard (DMCS).

The SDK ships with the DMCS taxonomy, so normal lookups do not require a network request.

## Installation

The Python SDK is not currently published to PyPI. Install it directly from the repository:

```bash
pip install "git+https://github.com/shadstradamus/DMCS.git#subdirectory=python-sdk"
```

For development:

```bash
git clone https://github.com/shadstradamus/DMCS.git
cd DMCS/python-sdk
pip install -e ".[dev]"
```

## Quick Start

```python
from dmcs_sdk import classification

# Load the bundled taxonomy
dmcs = classification()

print(dmcs.stats())
# {
#   'version': '1.3.3',
#   'release_date': '2025-11-13',
#   'industries': 14,
#   'sectors': 60,
#   'subsectors': 241,
#   'segments': 143,
#   'gic_industries': 13,
#   'dic_industries': 1
# }

tech = dmcs.get_by_id('09')
print(tech)
# 09 — Technology (... sectors, GIC)

saas = dmcs.get_by_id('09.01.002')
print(saas)
# 09.01.002 — Enterprise SaaS

results = dmcs.search('blockchain')
for result in results:
    print(result)

# GIC includes industries 01-12 and 14.
gic = dmcs.get_GIC()
# DIC is the Digital & Onchain Economy, industry 13.
dic = dmcs.get_DIC()
```

## Lookup Levels

DMCS supports lookups at every hierarchy level:

```python
industry = dmcs.get_by_id('09')
sector = dmcs.get_by_id('09.01')
subsector = dmcs.get_by_id('09.01.001')
segment = dmcs.get_by_id('09.01.001.02')

print(segment.label)
# Supply Chain & Procurement Software
```

IDs use these forms:

- Industry: `II`
- Sector: `II.SS`
- Subsector: `II.SS.SSS`
- Segment: `II.SS.SSS.SS`

## Lifecycle Metadata

SDK objects preserve the canonical `since` and `status` metadata:

```python
segment = dmcs.get_by_id('01.01.004.01')
print(segment.since)
# 2025-11-13
print(segment.status)
# active

active_nodes = dmcs.get_active()
sunset_nodes = dmcs.get_by_status('sunset')
```

Valid lifecycle states are `active`, `deprecated`, and `sunset`.

## API Reference

### `classification`

Main class for loading and querying DMCS data.

Properties:

- `version: str`
- `release_date: str`
- `description: str`
- `industries: List[Industry]`
- `total_industries: int`
- `total_sectors: int`
- `total_subsectors: int`
- `total_segments: int`

Methods:

- `get_by_id(classification_id)` — lookup an industry, sector, subsector, or segment
- `search(query, case_sensitive=False)` — search labels across all hierarchy levels
- `filter_by_classification(classification_code)` — filter industries by `GIC` or `DIC`
- `get_GIC()` — return all GIC industries
- `get_DIC()` — return all DIC industries
- `stats()` — return release metadata and hierarchy counts
- `get_active()` — return all active nodes
- `get_by_status(status)` — filter nodes by lifecycle status

## Data Objects

The SDK exposes `Industry`, `Sector`, `Subsector`, and `Segment` dataclasses. Every object includes its ID, label, hierarchy metadata, classification code, `since` date, and lifecycle `status`. Child collections are available on industries, sectors, and subsectors.

Example:

```python
from dmcs_sdk import classification

dmcs = classification()
segment = dmcs.get_by_id('09.01.001.02')

print(segment.id)
print(segment.label)
print(segment.parent_id)
print(segment.subsector_id)
print(segment.sector_id)
print(segment.industry_id)
print(segment.classification)
print(segment.since)
print(segment.status)
```

## Loading a Custom Taxonomy File

```python
from pathlib import Path
from dmcs_sdk import classification

custom = classification(data_path=Path('/path/to/classification.json'))
print(custom.stats())
```

Custom files should follow the canonical DMCS JSON schema and hierarchy rules.

## Development

From the repository root, synchronize SDK data after canonical taxonomy changes:

```bash
python scripts/sync_sdk_data.py
python scripts/validate_release.py
```

Run Python tests:

```bash
pip install -e "./python-sdk[dev]"
pytest python-sdk/tests
```

Type checking and formatting can be run from `python-sdk/`:

```bash
mypy dmcs_sdk
black dmcs_sdk tests
```

The package version is derived from the bundled `classification.json`, preventing a separate hard-coded Python package version from drifting away from the taxonomy it ships.

## License

Apache 2.0 License — see [LICENSE](../LICENSE).
