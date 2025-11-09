<p align="center">
  <img src="assets/dmcs-logo.svg" alt="DMCS Logo" width="800">
</p>

**Version 1.0.0** · Effective Date: 2025-11-08 · **License:** Apache 2.0

## Overview

DMCS (Dynamic Multi-Dimensional Classification Standard) is an open-source, hierarchical classification system for the modern economy. It provides:

- **13 industries**, **55 sectors**, and **191 subsectors** covering traditional and digital business models
- **P-TAX** (01-12): Primary Taxonomy for the traditional economy
- **D-TAX** (13): Digital Asset Taxonomy for blockchain and crypto-native companies
- **Materiality rules** for classifying diversified conglomerates with multiple business lines
- **Stable IDs** that never change, with predictable evolution via public changelogs

## Why DMCS?

Modern companies don't fit legacy classification systems:

- **Conglomerates** run material businesses across multiple industries
- **Platforms** monetize in more than one way (e.g., cloud + advertising)
- **Digital-asset organizations** have no home in older taxonomies

DMCS solves this with:

1. **Explicit materiality threshold** (≥25-30% revenue or strategic) for secondary classifications
2. **Digital-first design** treating blockchain/crypto as a first-class economic sector
3. **Extensible namespace** (DMCS-CUST) so implementers can add detail without forking
4. **Predictable releases** (structural: 2×/year; thematic: monthly/quarterly) with full changelogs

## Structure

### Hierarchy

```
Industry (II) → Sector (II.SS) → Subsector (II.SS.SSS)
```

**Example:**
- `09` — Technology
- `09.01` — Software & Platforms
- `09.01.002` — Enterprise SaaS

### ID Rules

- **Immutable:** IDs never change; labels may evolve
- **Hierarchical:** Trimming from the right gives the parent
- **Numeric:** All official nodes use numeric codes

### Industries (13)

| ID | Industry |
|----|----------|
| 01 | Energy |
| 02 | Basic Materials |
| 03 | Industrials |
| 04 | Consumer Discretionary |
| 05 | Consumer Staples |
| 06 | Healthcare |
| 07 | Financial Services |
| 08 | Real Estate |
| 09 | Technology |
| 10 | Communications & Media |
| 11 | Utilities |
| 12 | Government / Public / Education |
| 13 | Digital Assets & Blockchain |

## Quick Examples

| Entity | Primary Classification | Secondary |
|--------|------------------------|-----------|
| Apple | 09.02.002 (Consumer Devices & Ecosystems) | — |
| Amazon | 04.05.002 (Online Marketplaces) | 09.01.004 (Cloud Platforms / PaaS) |
| Meta | 10.03.001 (Social Networks) | 09.04.004 (Spatial / XR Platforms) |
| Tether (USDT) | 13.02.004 (Stablecoin Issuers) | — |
| Bitcoin (BTC) | 13.01.001 (Layer-1 Protocols) | — |
| Chainlink (LINK) | 13.01.004 (Node / Infra Services) | — |

## Materiality Rule

- **Primary** (required): Largest revenue/activity line
- **Secondary** (optional, max 1): Only if in a **different industry** and ≥25-30% revenue **or** declared strategic/growth
- **Persistence**: Add/remove after 2 consecutive periods meeting/failing the test

## Migration from Legacy Systems

DMCS provides mapping guidance from:

- **GICS** (Global Industry Classification Standard)
- **ICB** (Industry Classification Benchmark)
- **TRBC** (Refinitiv Business Classification)
- **NAICS** (North American Industry Classification System)

Store both the DMCS ID and the source classification for audit trails.

## Extension Namespace

Need more granularity? Use **DMCS-CUST** nodes under official parents:

```
Official:  09.01.002 — Enterprise SaaS
Custom:    09.01.C01 — Public Sector SaaS (DMCS-CUST, parent: 09.01.002)
```

Popular CUST nodes can be promoted to DMCS-STD in future releases.

## Governance

| Release Type | Frequency | Contents |
|--------------|-----------|----------|
| Structural | As needed (typically 1-2×/year) | New sectors/subsectors, taxonomy expansions |
| Thematic | As needed | Label refinements, no ID changes |
| Changelog | Every release | All additions, changes, effective dates |

All changes are versioned and documented. Community proposals via pull requests are reviewed openly.

## Data Access

### Human-Readable
- **[TAXONOMY.md](./TAXONOMY.md)** — Complete reference with all 13 industries, 55 sectors, and 190 subsectors

### Machine-Readable
- **[data/taxonomy.json](./data/taxonomy.json)** — Hierarchical JSON structure for programmatic access
- **[data/taxonomy.csv](./data/taxonomy.csv)** — Flat CSV table for database imports and analytics

### Usage Examples

**Python:**
```python
import json

with open('data/taxonomy.json') as f:
    dmcs = json.load(f)
    
# Find all Technology subsectors
tech = next(i for i in dmcs['industries'] if i['id'] == '09')
for sector in tech['sectors']:
    print(f"{sector['id']}: {sector['label']}")
```

**SQL (PostgreSQL):**
```sql
COPY dmcs_taxonomy(level, id, label, parent_id, industry_id, sector_id, taxonomy)
FROM '/path/to/taxonomy.csv' 
DELIMITER ',' 
CSV HEADER;
```

**JavaScript:**
```javascript
fetch('data/taxonomy.json')
  .then(res => res.json())
  .then(dmcs => {
    const dtax = dmcs.industries.find(i => i.taxonomy === 'D-TAX');
    console.log('Digital Assets Sectors:', dtax.sectors.length);
  });
```

## License

Apache 2.0 License — see [LICENSE](./LICENSE)

## Contributing

This is the initial public release (v1.0). Contribution guidelines and governance processes will be published in future updates.

For questions, feedback, or mapping support, open an issue or discussion.

## Open Source & Governance

**DMCS is fully open source under the Apache 2.0 License.**

### What You Can Do (No Permission Required)

- ✅ **Use DMCS freely** in any project, commercial or non-commercial
- ✅ **Fork and modify** the taxonomy for your own purposes
- ✅ **Create derivative works** and custom classification systems based on DMCS
- ✅ **Build products and services** that implement DMCS (APIs, databases, analytics tools, etc.)
- ✅ **Extend DMCS** using the DMCS-CUST namespace for organization-specific classifications
- ✅ **Redistribute** in any format (JSON, CSV, SQL, API endpoints, etc.)
- ✅ **Contribute improvements** via pull requests - all constructive contributions are welcome!

### Official DMCS Standard

This repository (https://github.com/shadstradamus/DMCS) is the **canonical source** for the official DMCS taxonomy. 

**Trademark usage:** The "DMCS" name refers specifically to the taxonomy maintained in this repository. If you fork and significantly modify the standard:
- You're free to use the data and ID structure
- Please clearly indicate it's a derivative/modified version (e.g., "Based on DMCS" or "MyCompany Custom Classification derived from DMCS")
- Don't imply your fork is the "official DMCS" standard

**Contributing to the official standard:**
1. Fork this repository
2. Submit a pull request with proposed additions or improvements
3. Community discussion and review happens in the open
4. Quality contributions that align with DMCS design principles are merged
5. Official releases happen as needed based on the governance model

**Goal:** Keep DMCS open, collaborative, trustworthy and anyone can use it, everyone can contribute, and there's one stable reference version.



