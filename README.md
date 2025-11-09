<p align="center">
  <img src="assets/dmcs-logo.svg" alt="DMCS Logo" width="800">
</p>

**Version 1.0.4** · Effective Date: 2025-11-09 · **License:** Apache 2.0

## Overview

DMCS (Dynamic Multi-Dimensional Classification Standard) is an open-source, hierarchical classification system for the modern economy. It provides:

- **13 industries**, **55 sectors**, and **191 subsectors** covering traditional and digital business models
- **GIC** (01-12): General Industry Classification for the traditional economy
- **DIC** (13): Digital Industry Classification for blockchain and crypto-native companies
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
4. **Predictable releases** (structural: 2×/year; thematic: monthly/quarterly) with full changelogs and as needed.

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

| ID | Industry | Classification |
|----|----------|----------------|
| 01 | Energy | GIC |
| 02 | Basic Materials | GIC |
| 03 | Industrials | GIC |
| 04 | Consumer Discretionary | GIC |
| 05 | Consumer Staples | GIC |
| 06 | Healthcare | GIC |
| 07 | Financial Services | GIC |
| 08 | Real Estate | GIC |
| 09 | Technology | GIC |
| 10 | Communications & Media | GIC |
| 11 | Utilities | GIC |
| 12 | Government / Public / Education | GIC |
| 13 | Digital Assets & Blockchain | DIC |

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

## Extension Namespace (DMCS-CUST)

Need more granularity for your specific use case? Use **DMCS-CUST** custom nodes under official parents. Custom nodes use **C** + numbers (e.g., C01, C02) in the subsector position.

### Structure

```
Official Parent:  II.SS.SSS
Custom Child:     II.SS.CXXX (where C = Custom, XXX = your sequential ID)
```

### Real-World Examples

**Financial Services Conglomerate**
```
Official:  07.01.001 — Retail Banking
Custom:    07.01.C01 — Private Banking (DMCS-CUST, parent: 07.01.001)
Custom:    07.01.C02 — Corporate Banking (DMCS-CUST, parent: 07.01.001)

Official:  07.03.003 — Investment Banking
Custom:    07.03.C01 — Equity Capital Markets (DMCS-CUST, parent: 07.03.003)
Custom:    07.03.C02 — Debt Capital Markets (DMCS-CUST, parent: 07.03.003)
```

**Healthcare System**
```
Official:  06.03.001 — Hospitals & Clinics
Custom:    06.03.C01 — Specialty Hospitals (DMCS-CUST, parent: 06.03.001)
Custom:    06.03.C02 — Outpatient Surgery Centers (DMCS-CUST, parent: 06.03.001)
Custom:    06.03.C03 — Emergency Care Centers (DMCS-CUST, parent: 06.03.001)
```

**Technology Platform**
```
Official:  09.01.002 — Enterprise SaaS
Custom:    09.01.C01 — Public Sector SaaS (DMCS-CUST, parent: 09.01.002)
Custom:    09.01.C02 — Healthcare SaaS (DMCS-CUST, parent: 09.01.002)
Custom:    09.01.C03 — Financial Services SaaS (DMCS-CUST, parent: 09.01.002)
```

**Diversified Conglomerate Example: "Global Industries Corp"**

A fictional conglomerate demonstrating multi-industry operations and custom extensions:

#### Business Unit Breakdown

| Business Unit | Revenue % | DMCS Classification | DMCS-CUST Extension |
|---------------|-----------|---------------------|---------------------|
| **Consumer Electronics** | 35% | 09.02.002 (Consumer Devices & Ecosystems) | — |
| **Cloud Infrastructure** | 28% | 09.01.004 (Cloud Platforms / PaaS) | 09.01.C10 (Hybrid Cloud) |
| **Retail Stores** | 15% | 04.05.001 (Multiline Retail) | 04.05.C05 (Experience Stores) |
| **Digital Banking** | 12% | 07.01.001 (Retail Banking) | 07.01.C20 (Digital-Only Banking) |
| **Content Streaming** | 10% | 10.02.001 (TV & Streaming) | 10.02.C08 (Interactive Streaming) |

#### Company-Level DMCS Classification

**Primary Classification:**
- **09.02.002** — Consumer Devices & Ecosystems
- **Rationale:** Largest revenue contributor at 35%
- **Industry:** 09 (Technology)

**Secondary Classification:**
- **09.01.004** — Cloud Platforms / PaaS  
- **Rationale:** 28% revenue from Cloud Infrastructure, meets materiality threshold (≥25%)
- **Industry:** 09 (Technology)
- **Note:** Both primary and secondary are in the same industry (Technology), so secondary is assigned due to materiality and strategic importance

#### Why Custom Extensions? (DMCS-CUST Usage)

Each division uses DMCS-CUST to capture business model nuances:

1. **Cloud (09.01.C10 - Hybrid Cloud)**
   - Parent: 09.01.004 (Cloud Platforms / PaaS)
   - Why: Distinguishes hybrid cloud (on-prem + public cloud) from pure public cloud providers
   
2. **Retail (04.05.C05 - Experience Stores)**
   - Parent: 04.05.001 (Multiline Retail)
   - Why: Flagship experiential retail with live demos differs from traditional department stores

3. **Banking (07.01.C20 - Digital-Only Banking)**
   - Parent: 07.01.001 (Retail Banking)
   - Why: No physical branches; app-only model differs from traditional retail banking

4. **Streaming (10.02.C08 - Interactive Streaming)**
   - Parent: 10.02.001 (TV & Streaming)
   - Why: Hybrid of video streaming + interactive gaming elements

#### Internal Reporting Hierarchy

```
Global Industries Corp
├─ Primary: 09.02.002 (Consumer Devices & Ecosystems)
├─ Secondary: 09.01.004 (Cloud Platforms / PaaS)
│
└─ Divisions (with DMCS-CUST granularity)
   ├─ Consumer Electronics: 09.02.002
   ├─ Cloud Infrastructure: 09.01.004 → 09.01.C10
   ├─ Retail Stores: 04.05.001 → 04.05.C05
   ├─ Digital Banking: 07.01.001 → 07.01.C20
   └─ Content Streaming: 10.02.001 → 10.02.C08
```

**Key Takeaway:** DMCS standard codes classify the entity at the company level, while DMCS-CUST extensions provide division-level granularity for internal analytics and reporting without requiring changes to the official taxonomy.

### Rules for DMCS-CUST

1. **Always specify parent:** Custom nodes must reference their official parent subsector
2. **Sequential numbering:** Use C01, C02, C03... within your organization
3. **Document clearly:** Maintain internal documentation of what each custom node represents
4. **No ID conflicts:** Coordinate custom IDs within your organization to avoid duplicates
5. **Promotion path:** Widely-used custom nodes can be proposed for inclusion in DMCS-STD

### When to Use DMCS-CUST

✅ **Use custom nodes when:**
- You need industry-specific granularity (e.g., "Islamic Banking" under Retail Banking)
- Internal reporting requires finer segments than DMCS provides
- Regional variations matter (e.g., "EU Financial Services" vs. "US Financial Services")
- Business model innovations don't fit existing categories

❌ **Don't create custom nodes when:**
- Official DMCS subsectors already cover your need
- You're trying to reclassify entities across industries (use secondary classification instead)
- The distinction is purely organizational rather than business-model based

Popular CUST nodes can be promoted to DMCS-STD in future releases through the governance process.

## Governance

| Release Type | Frequency | Contents |
|--------------|-----------|----------|
| Structural | As needed (typically 1-2×/year) | New sectors/subsectors, taxonomy expansions |
| Thematic | As needed | Label refinements, no ID changes |
| Changelog | Every release | All additions, changes, effective dates |

All changes are versioned and documented. Community proposals via pull requests are reviewed openly.

## Data Access

### Human-Readable
- **[CLASSIFICATION.md](./CLASSIFICATION.md)** — Complete reference with all 13 industries, 55 sectors, and 191 subsectors

### Machine-Readable
- **[data/classification.json](./data/classification.json)** — Hierarchical JSON structure for programmatic access
- **[data/classification.csv](./data/classification.csv)** — Flat CSV table for database imports and analytics

### SDKs

**Python SDK:**
```bash
pip install "git+https://github.com/shadstradamus/DMCS.git#subdirectory=python-sdk"
```

**TypeScript/JavaScript SDK:**
```bash
npm install dmcs-sdk
```

Or install from repository:
```bash
npm install git+https://github.com/shadstradamus/DMCS.git#subdirectory=typescript-sdk
```

See [python-sdk/README.md](./python-sdk/README.md) and [typescript-sdk/README.md](./typescript-sdk/README.md) for detailed documentation.

### Usage Examples

**Python:**
```python
from dmcs_sdk import classification

# Load the classification
dmcs = classification()

# Get stats
print(dmcs.stats())
# {'version': '1.0.4', 'release_date': '2025-11-09', 'industries': 13, 'sectors': 55, 'subsectors': 191}

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

# Filter by classification
gic_industries = dmcs.get_GIC()  # Traditional economy (01-12)
dic_industries = dmcs.get_DIC()  # Digital assets (13)
```

**TypeScript/JavaScript:**
```typescript
import { Classification } from 'dmcs-sdk';

const dmcs = new Classification();

// Get stats
console.log(dmcs.stats());
// {
//   version: '1.0.4',
//   release_date: '2025-11-09',
//   industries: 13,
//   sectors: 55,
//   subsectors: 191,
//   gic_industries: 12,
//   dic_industries: 1
// }

// Lookup by ID
const tech = dmcs.getById('09');
console.log(tech);
// { id: '09', label: 'Technology', classification: 'GIC', sectors: [...] }

const saas = dmcs.getById('09.01.002');
console.log(saas);
// { id: '09.01.002', label: 'Enterprise SaaS', ... }

// Search by text
const results = dmcs.search('blockchain');
results.forEach(result => console.log(result));

// Filter by classification
const gic = dmcs.getGIC();  // Traditional economy (01-12)
const dic = dmcs.getDIC();  // Digital assets (13)
```

**SQL (PostgreSQL):**
```sql
COPY dmcs_classification(level, id, label, parent_id, industry_id, sector_id, classification)
FROM '/path/to/classification.csv' 
DELIMITER ',' 
CSV HEADER;
```

**Direct JSON/CSV:**
```javascript
fetch('data/classification.json')
  .then(res => res.json())
  .then(dmcs => {
    const dic = dmcs.industries.find(i => i.classification === 'DIC');
    console.log('Digital Assets Sectors:', dic.sectors.length);
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
