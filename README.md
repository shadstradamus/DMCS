<p align="center">
  <img src="assets/dmcs-logo.svg" alt="DMCS Logo" width="800">
</p>

**Version 1.2.2** | **Release Date:** November 12, 2025 | **License:** Apache 2.0

---

# DMCS — Open Source Industry Classification Standard

The **Dynamic Multi-Dimensional Classification Standard (DMCS)** is a free, open-source taxonomy for classifying companies, digital assets, and business models across the modern economy. Built for everyone—from hobby projects to enterprise financial platforms like Yahoo Finance.

🌐 **[Try DMCS Interactive Browser](https://trydmcs.pages.dev/)** — Explore curated company classifications and browse the full taxonomy interactively.

**DMCS solves critical gaps in legacy classification systems:**

- **Digital-native coverage** — First-class support for blockchain, crypto, DeFi, SaaS, and platform business models
- **Stable, immutable IDs** — Never break your historical data; IDs are permanent and versioned
- **Free to use** — Apache 2.0 license for commercial and non-commercial projects
- **Community-driven** — Submit proposals via GitHub issues; transparent governance and public changelog
- **Extensible** — Add custom classifications (DMCS-CUST) without forking the standard
- **Multi-dimensional** — Primary and secondary classifications for conglomerates

---

## What You Get

**Core Taxonomy**
- **14 industries** · **60 sectors** · **230 subsectors** · **92 segments**
- Coverage spans traditional economy (**GIC**: General Industry Classification, 01-12, 14) and digital/onchain economy (**DIC**: Digital Industry Classification, 13)
- Every node includes lifecycle metadata (`since`, `status`) for tracking evolution

**Ready-to-Use Data**
- `data/classification.json` — Full hierarchical structure with metadata
- `data/classification.csv` — Flat table for databases and analytics tools
- `CLASSIFICATION.md` — Human-readable reference documentation

**SDKs for Developers**
- **TypeScript/JavaScript** — `npm install dmcs-sdk` (browser + Node.js)
- **Python** — `pip install dmcs-sdk` (pandas integration, search, and filtering)
- Full API documentation in each SDK's README

**Mapping Guidance**
- Pre-built crosswalks to GICS, ICB, NAICS, and TRBC
- Notes explaining where legacy systems fall short and DMCS alternatives

---

## Table of Contents

1. [Why DMCS?](#why-dmcs)
2. [DMCS vs. Legacy Systems](#dmcs-vs-legacy-systems)
3. [Hierarchy & ID Rules](#hierarchy--id-rules)
4. [Coverage & Taxonomy](#coverage--taxonomy)
5. [Classification Methodology](#classification-methodology)
6. [Getting Started](#getting-started)
7. [SDK Documentation](#sdk-documentation)
8. [Data Formats](#data-formats)
9. [Migration Guide](#migration-guide)
10. [Governance & Updates](#governance--updates)
11. [Contributing](#contributing)

---

## Why DMCS?

Traditional classification systems (GICS, ICB, TRBC, NAICS) were designed for 20th-century industrial economies. They struggle with:

- **Digital-native business models** — SaaS platforms, digital marketplaces, creator economies
- **Blockchain ecosystems** — Layer 1 protocols, DeFi applications, stablecoins, NFT platforms  
- **Platform conglomerates** — Companies operating materially across multiple industries
- **Rapid innovation** — Emerging technologies requiring timely classification updates

### The DMCS Solution

**1. Comprehensive Digital Coverage**

Industry 13 (Digital & Onchain Economy) provides native classification for:
- Blockchain infrastructure (Layer 1/Layer 2 protocols, validators, oracle networks)
- Digital asset exchanges (centralized, decentralized, derivatives)
- DeFi protocols (lending, yield, derivatives, stablecoins)
- Digital asset services (custody, payments, tokenization)
- Onchain applications (NFTs, gaming, DAOs, DePIN)

**2. Immutable ID Architecture**

Every DMCS ID is permanent and version-controlled:
```
ID: 09.01.004.02
Version: 1.2.2
Label: API / Integration
Since: 2025-11-10
Status: active
```

**Guarantees:**
- IDs never change or get reused
- Labels may evolve with documented change history
- Historical data remains valid indefinitely
- Forward compatibility across versions

**3. Multi-Dimensional Classification**

Support for conglomerates operating across multiple industries:

```
Amazon, Inc.
├─ Primary: 04.05.002 (Online Marketplaces)
│  └─ E-commerce generates majority revenue
└─ Secondary: 09.01.004 (Cloud Platforms / PaaS)
   └─ AWS represents ≥25% revenue in different industry
```

**4. Open Source & Free**

- No licensing fees for any use case
- Complete data access (JSON, CSV formats)
- Production-ready SDKs (TypeScript, Python)
- Commercial use explicitly permitted (Apache 2.0)
- No vendor lock-in

**5. Community Governance**

- Transparent proposal process via GitHub Issues
- Public discussion and review
- Documented decision rationale
- Regular updates based on market evolution

---

## DMCS vs. Legacy Systems

| Feature | DMCS | GICS / ICB | NAICS | TRBC |
|---------|------|------------|-------|------|
| **License** | Apache 2.0 (Free) | Proprietary ($$$) | Public Domain | Proprietary ($$$) |
| **Digital Economy Coverage** | ✓ Native DIC industry (13) | Limited | Limited | Minimal |
| **Crypto/Blockchain** | ✓ DeFi, L1/L2, stablecoins, NFTs | None | None | Minimal |
| **SaaS Granularity** | ✓ 7 software subsectors + segments | Basic | Basic | Basic |
| **Platform Business Models** | ✓ Multi-classification support | Limited | Single-class | Limited |
| **ID Stability** | ✓ Immutable, versioned | Periodic changes | 5-year updates | Annual updates |
| **Open Data Access** | ✓ JSON, CSV, SDKs | License required | ✓ Public | License required |
| **Community Input** | ✓ GitHub issues/PRs | Closed | Gov agency | Closed |
| **Custom Extensions** | ✓ DMCS-CUST namespace | Not supported | Not supported | Not supported |
| **Commercial Use** | ✓ Unlimited | Fee + restrictions | ✓ Free | Fee + restrictions |
| **API/SDK Support** | ✓ TypeScript, Python | Paid only | None | Paid only |
| **Update Frequency** | As needed (community) | Annual | Every 5 years | Annual |
| **Conglomerate Support** | ✓ Primary + Secondary | Primary only | Primary only | Limited |

**Bottom Line:** DMCS is purpose-built for modern, digital-first businesses with free access, stable IDs, and community governance—no licensing fees or vendor lock-in.

---

## Hierarchy & ID Rules

DMCS uses a four-level hierarchy with fixed-width numeric identifiers:

```
Industry (II)
    └─ Sector (II.SS)
        └─ Subsector (II.SS.SSS)
            └─ Segment (II.SS.SSS.SS) [Optional]
```

**Example Chain:**
```
09                 → Technology (Industry)
09.01              → Software & Platforms (Sector)
09.01.004          → Cloud Platforms / PaaS (Subsector)
09.01.004.02       → API / Integration (Segment)
```

### ID Format Specification

**Regular Expression:** `^\d{2}(\.\d{2})?(\.\d{3})?(\.\d{2})?$`

| Level | Format | Example | Required |
|-------|--------|---------|----------|
| Industry | `II` | `09` | ✓ |
| Sector | `II.SS` | `09.01` | ✓ |
| Subsector | `II.SS.SSS` | `09.01.004` | ✓ |
| Segment | `II.SS.SSS.SS` | `09.01.004.02` | Optional |

**Key Properties:**
- **Hierarchical Truncation**: Removing rightmost component yields parent (`09.01.004.02` → `09.01.004`)
- **Fixed Width**: Enables efficient indexing and sorting
- **Numeric Only**: Language-agnostic and culturally neutral
- **No Reuse**: Deprecated IDs remain reserved indefinitely

### Metadata Schema

Each classification node includes comprehensive metadata:

```json
{
  "level": "segment",
  "id": "09.01.004.02",
  "label": "API / Integration PaaS",
  "parent_id": "09.01.004",
  "industry_id": "09",
  "sector_id": "09.01",
  "classification": "GIC",
  "since": "2025-11-08",
  "status": "active"
}
```

**Field Definitions:**

| Field | Type | Description | Values |
|-------|------|-------------|--------|
| `level` | string | Hierarchy level | `industry`, `sector`, `subsector`, `segment` |
| `id` | string | Unique identifier | Format: `^\d{2}(\.\d{2})?(\.\d{3})?(\.\d{2})?$` |
| `label` | string | Human-readable name | Descriptive business model label |
| `parent_id` | string | Parent node ID | Empty for industries |
| `industry_id` | string | Top-level industry | Two-digit code |
| `sector_id` | string | Parent sector | Four-digit code (II.SS) |
| `classification` | string | Economic category | `GIC` (General) or `DIC` (Digital) |
| `since` | string | Effective date | ISO 8601 format (YYYY-MM-DD) |
| `status` | string | Lifecycle state | `active`, `deprecated`, `sunset` |

---

## Coverage & Taxonomy

### Statistical Summary (v1.2.2)

**Total Classification Nodes:** 396

| Level | Count | Description |
|-------|-------|-------------|
| Industries | 14 | Top-level economic domains |
| Sectors | 60 | Broad business categories |
| Subsectors | 230 | Specific business models |
| Segments | 92 | Granular product/service lines |

### Industry Classification Framework

DMCS divides the economy into two major categories:

**GIC (General Industry Classification)** — Traditional and digital-mature industries (01-12, 14)  
**DIC (Digital Industry Classification)** — Crypto-native and blockchain-based industries (13)

### Complete Industry List

| ID | Industry | Type | Coverage Highlights |
|----|----------|------|---------------------|
| **01** | **Energy** | GIC | Upstream/downstream oil & gas, renewables (solar, wind, hydro), battery storage, nuclear, hydrogen |
| **02** | **Basic Materials** | GIC | Metals & mining, chemicals & specialty materials, forestry & paper, industrial gases |
| **03** | **Industrials** | GIC | Aerospace & defense, machinery, transportation, logistics, waste management, professional equipment |
| **04** | **Consumer Discretionary** | GIC | Retail, e-commerce, automotive, leisure, hospitality, consumer services, mobility platforms |
| **05** | **Consumer Defensive** | GIC | Food & beverage, household products, agriculture, tobacco & cannabinoids, personal care |
| **06** | **Healthcare** | GIC | Healthcare providers, pharmaceuticals, biotechnology, medical devices, diagnostic services |
| **07** | **Financial Services** | GIC | Banking, capital markets, insurance, asset management, payments, fintech infrastructure |
| **08** | **Real Estate** | GIC | REITs, real estate development, property operations, data centers, infrastructure assets |
| **09** | **Technology** | GIC | Software platforms, semiconductors, hardware, IT services, emerging tech (AI, robotics, XR) |
| **10** | **Communications & Media** | GIC | Telecommunications networks, media & entertainment, advertising platforms, content distribution |
| **11** | **Utilities** | GIC | Electric utilities, gas distribution, water utilities, renewable utilities, transmission infrastructure |
| **12** | **Government / Public / Education** | GIC | Public sector entities, non-profits, educational institutions, government-sponsored enterprises |
| **13** | **Digital & Onchain Economy** | DIC | Blockchain infrastructure, digital asset exchanges, DeFi protocols, onchain applications, tokenization |
| **14** | **Professional & Business Services** | GIC | Consulting, outsourcing, staffing, marketing services, data & analytics services |

### Digital & Onchain Economy (Industry 13) — Detailed Breakdown

**Native blockchain and digital asset classification:**

#### 13.01 — DLT & Blockchain Infrastructure (7 subsectors, 6 segments)

- **13.01.001** — Public / Permissionless L1
  - 13.01.001.01 — EVM L1
  - 13.01.001.02 — Non-EVM L1
- **13.01.002** — L2 / Rollup Infrastructure
  - 13.01.002.01 — Optimistic Rollups
  - 13.01.002.02 — ZK Rollups
- **13.01.003** — Validator / Staking Services
  - 13.01.003.01 — Node / Validator Ops
  - 13.01.003.02 — Liquid Staking
- **13.01.004** — Interoperability & Data Indexing
- **13.01.005** — Enterprise / Permissioned DLT
- **13.01.006** — Cross-chain Infrastructure
- **13.01.007** — DePIN Infrastructure

#### 13.02 — Centralized Exchanges & Trading (7 subsectors, 10 segments)

- **13.02.001** — Centralized Exchanges (CEX)
  - 13.02.001.01 — Spot CEX
  - 13.02.001.02 — Derivatives CEX
  - 13.02.001.03 — Fiat On/Off Ramp CEX
- **13.02.002** — Decentralized Exchanges (DEX/AMM)
  - 13.02.002.01 — L1 DEX
  - 13.02.002.02 — L2 DEX
- **13.02.003** — Custody & Key Management
  - 13.02.003.01 — Institutional Custody
  - 13.02.003.02 — MPC / Wallet Infrastructure
- **13.02.004** — Stablecoin / Digital Currency Platforms
  - 13.02.004.01 — Fiat-backed Stablecoins
  - 13.02.004.02 — Crypto-collateralized Stablecoins
  - 13.02.004.03 — Platform-linked Stablecoins
- **13.02.005** — Tokenization & Digital Securities
- **13.02.006** — OTC / Prime Brokerage
- **13.02.007** — Market Making

#### 13.03 — Onchain Applications & Experiences (5 subsectors, 4 segments)

- **13.03.001** — DeFi (non-exchange)
  - 13.03.001.01 — Lending Protocols
  - 13.03.001.02 — Derivatives Protocols
  - 13.03.001.03 — Yield Aggregators
  - 13.03.001.04 — Options Protocols
- **13.03.002** — NFT / Digital Collectibles
- **13.03.003** — Onchain Gaming / GameFi
- **13.03.004** — Onchain Social
- **13.03.005** — DePIN Applications

#### 13.04 — Onchain Services, Security & Compliance (4 subsectors)

- **13.04.001** — Blockchain Data / Analytics
- **13.04.002** — Security / Audit Services
- **13.04.003** — Onchain Identity / Attestations
- **13.04.004** — Compliance / Travel Rule Providers

### Technology Industry (09) — SaaS & Platform Granularity

**Comprehensive software and platform classification:**

#### 09.01 — Software & Platforms (7 subsectors, 11 segments)

- **09.01.001** — Application Software
  - 09.01.001.01 — ERP / Finance Suites
  - 09.01.001.02 — Supply Chain & Procurement Software
  - 09.01.001.03 — HCM / Workforce
- **09.01.002** — Enterprise SaaS
  - 09.01.002.01 — Collaboration & Productivity
  - 09.01.002.02 — General Business Management
- **09.01.003** — Cybersecurity Software
  - 09.01.003.01 — Network Security
  - 09.01.003.02 — Endpoint Security
  - 09.01.003.03 — Identity & Access Management (IAM)
  - 09.01.003.04 — Cloud Security
- **09.01.004** — Cloud Platforms / PaaS
  - 09.01.004.01 — DevTools / DevOps
  - 09.01.004.02 — API / Integration
  - 09.01.004.03 — Observability & Monitoring Platforms
- **09.01.005** — Data & Database Platforms
  - 09.01.005.01 — Database Management Systems (DBMS)
  - 09.01.005.02 — Data Warehousing
  - 09.01.005.03 — BI & Analytics Platforms
- **09.01.006** — CRM & Customer Platforms
- **09.01.007** — AI & ML Platforms

---

## Classification Methodology

### Primary Classification Rules

Entities receive a **single primary classification** determined by the following decision hierarchy:

**1. Revenue Contribution (Primary Signal)**
- Target: ≥50-60% of total external revenue
- Use most recent four-quarter trailing period
- Segment-level disclosure preferred; consolidated acceptable if segment data unavailable

**2. Earnings Contribution (Secondary Signal)**
- Apply when revenue split is within ±3 percentage points
- Measure: Gross profit or operating profit margin by segment
- Higher-margin segment typically determines classification

**3. Asset Base (Financial Entities)**
- For balance-sheet-driven businesses: banks, insurers, REITs, asset managers
- Largest asset category determines classification
- Example: Loan portfolio composition for banks

**4. Management Discussion & Market Perception (Tiebreaker)**
- Review investor presentations, 10-K business descriptions
- Consider analyst coverage and industry association memberships
- Apply when quantitative signals are inconclusive

### Secondary Classification Criteria

Entities may receive **one secondary classification** when both conditions are met:

**Threshold Requirements:**
1. Secondary business operates in a **different industry** than primary
2. Secondary business represents ≥25-30% of total revenue **OR** management declares it a strategic priority

**Exclusions:**
- No secondary classification if both businesses are in the same industry
- Limit: Maximum one secondary classification per entity
- Apply persistence rule (two consecutive periods) before assignment

**Example: Alphabet Inc.**
```
Primary: 10.03.004 (Digital Ecosystems)
  → Search, YouTube, advertising = majority revenue (Industry 10)

Secondary: 09.01.004 (Cloud Platforms / PaaS)
  → Google Cloud = 10%+ revenue and strategic priority (Industry 09)
```

### Persistence Rule

**Prevents classification volatility from temporary fluctuations:**

- **New Classification**: Requires ≥2 consecutive reporting periods meeting threshold
- **Removal**: Requires ≥2 consecutive reporting periods below threshold
- **Exception**: Transformative corporate actions (M&A, spin-offs) trigger immediate reclassification

**Example Timeline:**
```
Q1 2025: Cloud revenue = 28% → No change (first period)
Q2 2025: Cloud revenue = 31% → Assign secondary (second period confirms)
Q3 2025: Cloud revenue = 22% → No change (first period below)
Q4 2025: Cloud revenue = 20% → Remove secondary (second period confirms)
```

### Boundary Guidance: Common Edge Cases

| Scenario | Classification A | Classification B | Decision Rule |
|----------|------------------|------------------|---------------|
| **Data Centers** | 08.04.001 (Data Centers - REIT) | 09.03.003 (Data Center Services) | Powered shell + lease model → 08.04; Managed colo + connectivity → 09.03 |
| **Ad-Funded Platforms** | 10.03 (Digital Platforms & Social) | 09.01 (Software & Platforms) | Ad revenue ≥50-60% → 10.03; SaaS subscription model → 09.01 |
| **Mobility Services** | 04.07 (Mobility Platforms) | 03.03 (Transportation & Logistics) | Marketplace-led (Uber, Lyft) → 04.07; Asset-heavy carriage → 03.03 |
| **Cloud Gaming** | 10.02.005.02 (Interactive Platforms & Distribution) | 09.01.007 (AI & ML Platforms) | Game distribution primary → 10.02; Cloud compute infrastructure → 09.01 |
| **Fintech Apps** | 07.04.004 (Digital Payments) | 09.01.002 (Enterprise SaaS) | Payment transaction revenue ≥50% → 07.04; Software licensing → 09.01 |
| **DePIN Projects** | 13.01.007 (DePIN Infrastructure) | 13.03.005 (DePIN Applications) | Resource supply layer → 13.01; End-user application → 13.03 |
| **Stablecoin Issuers** | 13.02.004 (Stablecoin / Digital Currency Platforms) | 07.04 (FinTech & Payments) | Crypto-native issuance → 13.02; Bank-issued digital currency → 07.04 |

---

## Integration Guide

### Quick Start (5 Minutes)

**Step 1: Choose Your Integration Method**

```
Download Data Files
├─ JSON: data/classification.json (hierarchical)
└─ CSV: data/classification.csv (flat table)

OR

Install SDK
├─ TypeScript: npm install dmcs-sdk
└─ Python: pip install dmcs-sdk
```

**Step 2: Import into Your System**

**Option A: Direct Database Import (CSV)**
```sql
-- PostgreSQL Example
CREATE TABLE dmcs_classification (
    level VARCHAR(20),
    id VARCHAR(20) PRIMARY KEY,
    label VARCHAR(200),
    parent_id VARCHAR(20),
    industry_id VARCHAR(2),
    sector_id VARCHAR(7),
    classification VARCHAR(3),
    since DATE,
    status VARCHAR(20)
);

COPY dmcs_classification FROM '/path/to/classification.csv' WITH CSV HEADER;

-- Query Example
SELECT * FROM dmcs_classification 
WHERE industry_id = '13' AND level = 'subsector';
```

**Option B: SDK Integration (TypeScript)**
```typescript
import { Classification } from 'dmcs-sdk';

const dmcs = new Classification();

// Get system statistics
console.log(dmcs.stats());
// Output: { version: '1.2.2', industries: 14, sectors: 60, subsectors: 230, segments: 92 }

// Lookup by ID
const cloudPlatforms = dmcs.getById('09.01.004');
console.log(cloudPlatforms);
// Output: { id: '09.01.004', label: 'Cloud Platforms / PaaS', level: 'subsector', ... }

// Get all children
const technologySectors = dmcs.getChildren('09');
console.log(technologySectors.length); // 4 sectors under Technology

// Search
const blockchainResults = dmcs.search('blockchain');
console.log(blockchainResults.length); // All nodes mentioning "blockchain"
```

**Option C: SDK Integration (Python)**
```python
from dmcs_sdk import classification

dmcs = classification()

# Get system statistics
print(dmcs.stats())
# Output: {'version': '1.2.2', 'industries': 14, 'sectors': 60, ...}

# Lookup by ID
tech = dmcs.get_by_id('09')
print(tech)  # 09 — Technology (4 sectors, GIC)

# Get all industries
industries = dmcs.get_by_level('industry')
print(len(industries))  # 14

# Search with filtering
defi = dmcs.search('DeFi', level='subsector')
for node in defi:
    print(f"{node['id']} — {node['label']}")
```

**Step 3: Classify Your First Entity**

```python
# Example: Classifying Coinbase
entity = {
    "name": "Coinbase Global, Inc.",
    "ticker": "COIN",
    "primary": "13.02.001",  # Centralized Exchanges
    "secondary": None,
    "rationale": "Cryptocurrency exchange platform with 80%+ revenue from trading fees"
}

# Validate classification exists
node = dmcs.get_by_id(entity['primary'])
assert node['status'] == 'active'
```

---

## SDK Documentation

### TypeScript / JavaScript SDK

**Installation:**
```bash
npm install dmcs-sdk
```

**Features:**
- Full taxonomy access (industries, sectors, subsectors, segments)
- Hierarchical navigation (parent/child relationships)
- Search and filtering capabilities
- TypeScript type definitions included
- Browser and Node.js compatible
- Zero dependencies
- Tree-shakeable ES modules

**Complete API Reference:**

```typescript
import { Classification } from 'dmcs-sdk';

const dmcs = new Classification();

// System Information
dmcs.stats(): Stats
// Returns: { version, industries, sectors, subsectors, segments, total }

dmcs.getVersion(): string
// Returns: "1.2.2"

dmcs.getReleaseDate(): string
// Returns: "2025-11-12"

// Lookup Methods
dmcs.getById(id: string): Node | undefined
// Get node by exact ID

dmcs.getByLevel(level: Level): Node[]
// Get all nodes at level: 'industry' | 'sector' | 'subsector' | 'segment'

dmcs.getChildren(parentId: string): Node[]
// Get all direct children of a node

dmcs.getParent(id: string): Node | undefined
// Get parent node

dmcs.getAncestors(id: string): Node[]
// Get all ancestors up to industry level

dmcs.getDescendants(id: string): Node[]
// Get all descendants recursively

// Search & Filter
dmcs.search(query: string, options?: SearchOptions): Node[]
// Search by label, ID, or any field
// Options: { level?, classification?, status? }

dmcs.filter(predicate: (node: Node) => boolean): Node[]
// Custom filtering with predicate function

// Hierarchical Queries
dmcs.getIndustries(): Node[]
// Shortcut for getByLevel('industry')

dmcs.getSectors(industryId?: string): Node[]
// Get all sectors or sectors within an industry

dmcs.getSubsectors(sectorId?: string): Node[]
// Get all subsectors or subsectors within a sector

dmcs.getSegments(subsectorId?: string): Node[]
// Get all segments or segments within a subsector

// Type Definitions
interface Node {
  level: Level;
  id: string;
  label: string;
  parent_id: string;
  industry_id: string;
  sector_id: string;
  classification: 'GIC' | 'DIC';
  since: string;
  status: 'active' | 'deprecated' | 'sunset';
}

type Level = 'industry' | 'sector' | 'subsector' | 'segment';

interface Stats {
  version: string;
  industries: number;
  sectors: number;
  subsectors: number;
  segments: number;
  total: number;
}

interface SearchOptions {
  level?: Level;
  classification?: 'GIC' | 'DIC';
  status?: 'active' | 'deprecated' | 'sunset';
}
```

**Browser Bundle (CDN):**
```html
<script src="https://unpkg.com/dmcs-sdk/dist/dmcs-bundle.js"></script>
<script>
  const dmcs = new DMCS.Classification();
  console.log(dmcs.stats());
</script>
```

### Python SDK

**Installation:**
```bash
pip install dmcs-sdk
```

**Features:**
- Full taxonomy access with Pythonic API
- Pandas DataFrame integration
- Search and filtering with regex support
- Type hints for IDE autocomplete
- JSON export capabilities
- Hierarchical navigation
- No external dependencies (stdlib only)

**Complete API Reference:**

```python
from dmcs_sdk import classification

dmcs = classification()

# System Information
dmcs.stats() -> dict
# Returns: {'version': '1.2.2', 'industries': 14, ...}

dmcs.get_version() -> str
# Returns: "1.2.2"

dmcs.get_release_date() -> str
# Returns: "2025-11-12"

# Lookup Methods
dmcs.get_by_id(id: str) -> dict | None
# Get node by exact ID

dmcs.get_by_level(level: str) -> list[dict]
# Get all nodes at level: 'industry', 'sector', 'subsector', 'segment'

dmcs.get_children(parent_id: str) -> list[dict]
# Get all direct children of a node

dmcs.get_parent(id: str) -> dict | None
# Get parent node

dmcs.get_ancestors(id: str) -> list[dict]
# Get all ancestors up to industry level

dmcs.get_descendants(id: str) -> list[dict]
# Get all descendants recursively

# Search & Filter
dmcs.search(query: str, **filters) -> list[dict]
# Search by label, ID, or any field
# Filters: level=None, classification=None, status=None

dmcs.filter(predicate: callable) -> list[dict]
# Custom filtering with lambda or function

# Hierarchical Queries
dmcs.get_industries() -> list[dict]
# Shortcut for get_by_level('industry')

dmcs.get_sectors(industry_id: str = None) -> list[dict]
# Get all sectors or sectors within an industry

dmcs.get_subsectors(sector_id: str = None) -> list[dict]
# Get all subsectors or subsectors within a sector

dmcs.get_segments(subsector_id: str = None) -> list[dict]
# Get all segments or segments within a subsector

# Pandas Integration
dmcs.to_dataframe() -> pd.DataFrame
# Convert full taxonomy to DataFrame

dmcs.to_csv(filepath: str)
# Export to CSV file

dmcs.to_json(filepath: str)
# Export to JSON file

# Advanced Queries
dmcs.get_industry_tree(industry_id: str) -> dict
# Get complete hierarchical tree for an industry

dmcs.validate_id(id: str) -> bool
# Check if ID format is valid

dmcs.validate_hierarchy(id: str) -> bool
# Check if node and all ancestors exist
```

**Pandas Integration Example:**
```python
import pandas as pd
from dmcs_sdk import classification

dmcs = classification()

# Convert to DataFrame
df = dmcs.to_dataframe()

# Filter and analyze
tech_subsectors = df[
    (df['industry_id'] == '09') & 
    (df['level'] == 'subsector')
]

print(tech_subsectors[['id', 'label']])

# Export filtered subset
tech_subsectors.to_csv('technology_subsectors.csv', index=False)
```

---

## Data Formats

### JSON Format (Hierarchical)

**File:** `data/classification.json`

**Structure:**
```json
{
  "dmcs_version": "1.2.2",
  "release_date": "2025-11-12",
  "industries": [
    {
      "level": "industry",
      "id": "09",
      "label": "Technology",
      "parent_id": "",
      "industry_id": "09",
      "sector_id": "",
      "classification": "GIC",
      "since": "2025-11-08",
      "status": "active",
      "sectors": [
        {
          "level": "sector",
          "id": "09.01",
          "label": "Software & Platforms",
          "parent_id": "09",
          "industry_id": "09",
          "sector_id": "09.01",
          "classification": "GIC",
          "since": "2025-11-08",
          "status": "active",
          "subsectors": [
            {
              "level": "subsector",
              "id": "09.01.004",
              "label": "Cloud Platforms / PaaS",
              "parent_id": "09.01",
              "industry_id": "09",
              "sector_id": "09.01",
              "classification": "GIC",
              "since": "2025-11-08",
              "status": "active",
              "segments": [
                {
                  "level": "segment",
                  "id": "09.01.004.02",
                  "label": "API / Integration",
                  "parent_id": "09.01.004",
                  "industry_id": "09",
                  "sector_id": "09.01",
                  "classification": "GIC",
                  "since": "2025-11-10",
                  "status": "active"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

**Use Cases:**
- Application consumption (SDKs, web apps)
- Hierarchical navigation interfaces
- Tree visualization components
- API responses

### CSV Format (Flat Table)

**File:** `data/classification.csv`

**Structure:**
```csv
level,id,label,parent_id,industry_id,sector_id,classification,since,status
industry,05,Consumer Staples,,,05,GIC,2025-11-08,active
sector,05.05,Tobacco & Cannabis,05,05,05.05,GIC,2025-11-12,active
subsector,05.05.002,Vapor & Electronic Products,05.05,05,05.05,GIC,2025-11-12,active
segment,05.05.002.01,Heated Tobacco Systems,05.05.002,05,05.05,GIC,2025-11-12,active
```

**Use Cases:**
- Database imports (SQL, NoSQL)
- Spreadsheet analysis (Excel, Google Sheets)
- Data pipeline ingestion (ETL tools)
- Analytics platforms (Tableau, Power BI)

### Markdown Documentation

**File:** `CLASSIFICATION.md`

**Purpose:** Human-readable reference documentation with:
- Complete industry/sector/subsector/segment hierarchy
- Statistical summaries
- Classification guidance
- Decision trees for complex industries

**Use Cases:**
- Developer reference
- Business analyst training
- Governance documentation
- Change review

---

## Migration & Crosswalks

### Migration Overview

Organizations transitioning from legacy classification systems can leverage DMCS crosswalk mappings to streamline the migration process.

**Available Crosswalks:**
- **GICS → DMCS** (`mappings/gics-to-dmcs.md`)
- **ICB → DMCS** (`mappings/icb-to-dmcs.md`)
- **NAICS → DMCS** (`mappings/naics-to-dmcs.md`)
- **TRBC → DMCS** (`mappings/trbc-to-dmcs.md`)

### Migration Strategy: Dual-Coding Approach

**Recommended for enterprise deployments:**

Maintain both legacy and DMCS classifications during transition period (6-12 months):

```sql
-- Example Database Schema
CREATE TABLE entity_classification (
    entity_id VARCHAR(50) PRIMARY KEY,
    entity_name VARCHAR(200),
    
    -- Legacy Classification
    gics_code VARCHAR(20),
    gics_label VARCHAR(200),
    
    -- DMCS Classification
    dmcs_primary VARCHAR(20),
    dmcs_primary_label VARCHAR(200),
    dmcs_secondary VARCHAR(20),
    dmcs_secondary_label VARCHAR(200),
    
    -- Metadata
    migration_date DATE,
    validation_status VARCHAR(20)
);
```

**Benefits:**
- Maintain backward compatibility with existing systems
- Enable parallel validation of DMCS classifications
- Support gradual cutover by business unit or product line
- Facilitate comparative analytics during transition

### Crosswalk Example: GICS to DMCS

**Mapping Patterns:**

| GICS Code | GICS Label | DMCS Primary | DMCS Label | Mapping Type |
|-----------|------------|--------------|------------|--------------|
| 45102010 | IT Consulting & Other Services | 09.03.001 | IT Consulting | 1:1 Direct |
| 45103010 | Application Software | 09.01.001, 09.01.002 | Application Software, Enterprise SaaS | 1:Many (Granular) |
| 45101010 | Internet & Direct Marketing Retail | 04.05.002, 10.03.004 | Online Marketplaces, Search & Digital Platforms | 1:Many (Multi-dimensional) |
| — | (No GICS Code) | 13.02.001 | Centralized Exchanges (CEX) | New Coverage |

**Mapping Types:**

1. **1:1 Direct**: Single GICS code maps to single DMCS code
2. **1:Many (Granular)**: Single GICS code splits into multiple DMCS codes based on business model detail
3. **1:Many (Multi-dimensional)**: Single GICS code maps to primary + secondary DMCS codes
4. **New Coverage**: DMCS classification exists with no GICS equivalent

**Note:** Automated mapping can be implemented using the crosswalk files in `/mappings/`. Complex cases (conglomerates, digital-native businesses) may require manual review during migration.

---

## Governance Model

### Classification Update Process

DMCS evolves through community-driven proposals with transparent governance:

```
Proposal Submission → Community Review → Maintainer Decision → Implementation → Changelog Publication
```

**Timeline:**
- **Proposal Submission**: Any contributor via GitHub Issues
- **Community Review**: 7-14 days for discussion
- **Maintainer Decision**: Accepted, rejected, or deferred with rationale
- **Implementation**: Included in next structural release
- **Changelog Publication**: Documented in CHANGELOG.md with effective date

### Release Types

**Structural Releases (As Needed)**
- Add new industries, sectors, subsectors, or segments
- Triggered by accepted community proposals
- Version increment: Major (x.0.0) or Minor (1.x.0)
- Backward compatible (no ID changes)

**Thematic Releases (As Needed)**
- Label refinements and clarifications
- Metadata updates (effective dates, status changes)
- Documentation improvements
- Version increment: Patch (1.2.x)

### Immutability Guarantee

**DMCS IDs never change or get reused:**

- **Deprecated nodes** retain their ID with `status: "deprecated"`
- **Sunset nodes** (removed from active use) remain in archive with `status: "sunset"`
- **Historical data integrity** preserved indefinitely
- **No breaking changes** across versions

**Example: Deprecation Process**
```json
{
  "id": "09.01.003.01",
  "label": "Endpoint / XDR (Deprecated → 09.01.003.02)",
  "status": "deprecated",
  "sunset": "2025-12-01",
  "replacement": "09.01.003.02",
  "rationale": "Merged into Endpoint Security for clarity"
}
```

### Transparency Commitment

All governance activities are public:

- **Proposals**: GitHub Issues (public discussion)
- **Decisions**: Documented in issue resolution
- **Changes**: CHANGELOG.md with full history
- **Data**: Open access (Apache 2.0 license)
- **Code**: Open source (SDKs, tooling)

---

## GitHub Issue Templates

### Available Templates

DMCS provides structured issue templates for community participation:

#### 1. Taxonomy Proposal

**When to use:** Request new industries, sectors, subsectors, or segments

**Template includes:**
- **Proposed Classification**: Exact label and suggested ID/parent
- **Business Model Description**: Detailed explanation of the classification
- **Real-World Examples**: 5-10 companies/entities that would fit this classification
- **Existing Gap**: Why current DMCS nodes are insufficient
- **Revenue/Market Size**: Estimated market size and number of entities
- **Competitive Landscape**: How this differs from adjacent classifications

**Example:**
```markdown
## Proposed Classification
**Level**: Subsector
**Suggested ID**: 09.01.008 (under Software & Platforms)
**Label**: No-Code / Low-Code Platforms

## Business Model Description
Platforms enabling non-technical users to build applications through visual interfaces...

## Real-World Examples
1. Airtable - Database-powered apps
2. Retool - Internal tool builder
3. Bubble - Web app development
...
```

#### 2. Mapping Update

**When to use:** Suggest corrections or additions to GICS, ICB, TRBC, or NAICS crosswalks

**Template includes:**
- **Source System**: Which legacy system (GICS, ICB, TRBC, NAICS)
- **Source Code**: Legacy classification code
- **Current Mapping**: Existing DMCS mapping (if any)
- **Proposed Mapping**: Suggested DMCS code
- **Rationale**: Why the change improves accuracy
- **Examples**: Entities affected by this mapping

#### 3. General Issue

**When to use:** Report taxonomy gaps, classification ambiguities, or bugs

**Template includes:**
- **Issue Type**: Gap, Ambiguity, Bug, Documentation
- **Description**: Clear explanation of the problem
- **Affected Nodes**: DMCS IDs involved
- **Suggested Resolution**: Proposed fix or clarification
- **Impact**: How many entities or use cases affected

### Issue Lifecycle

```
Open → Under Review → Accepted/Rejected/Deferred → Implemented → Closed
```

**Status Labels:**
- `taxonomy proposal`: New taxonomy proposal
- `mapping`: Crosswalk update request
- `bug`: Data or documentation error
- `enhancement`: Feature request for SDKs or tooling
- `under-review`: Active discussion
- `accepted`: Approved for implementation
- `deferred`: Valid but scheduled for future release
- `rejected`: Will not implement (with rationale)

---

## Contributing

DMCS is community-driven and welcomes contributions:

**Ways to Contribute**
1. **Propose taxonomy changes** — Use the [Taxonomy Proposal](https://github.com/shadstradamus/DMCS/issues/new/choose) issue template
2. **Report classification gaps** — Open a [General Issue](https://github.com/shadstradamus/DMCS/issues/new/choose) for ambiguities or bugs
3. **Suggest crosswalk improvements** — Submit [Mapping Updates](https://github.com/shadstradamus/DMCS/issues/new/choose) for GICS/ICB/TRBC/NAICS
4. **Improve documentation** — Fix typos, clarify examples, add use cases via pull requests
5. **Enhance tooling** — Contribute to SDK features, validation scripts, or build utilities
6. **Share feedback** — Open issues for questions or suggestions

### GitHub Issue Templates

**Taxonomy Proposal** — Request new industries, sectors, subsectors, or segments
- Describe the business model and provide 5-10 real-world examples
- Explain why existing nodes are insufficient
- Include market size estimates when available

**Mapping Update** — Suggest corrections to GICS, ICB, TRBC, or NAICS crosswalks
- Specify source system and codes
- Propose DMCS mapping with rationale
- List affected entities

**General Issue** — Report gaps, ambiguities, or bugs
- Clear description of the problem
- Affected DMCS IDs
- Suggested resolution

---

## Quality & Testing

DMCS maintains data quality through automated validation:

**Validation Checks:**
1. **Duplicate ID Detection** — Ensures all IDs are globally unique
2. **Label Uniqueness** — Validates labels are unique within each hierarchy level
3. **Parent-Child Relationships** — Verifies all parent IDs reference existing nodes
4. **ID Format Validation** — Enforces regex pattern `^\d{2}(\.\d{2})?(\.\d{3})?(\.\d{2})?$`
5. **Circular Reference Detection** — Prevents infinite loops in hierarchy
6. **Hierarchy Validation** — Ensures industry/sector/subsector IDs are valid in child records

All data files pass validation before each release.

---

## Versioning

DMCS follows semantic versioning (SemVer):

**Format:** `MAJOR.MINOR.PATCH`

- **MAJOR**: New industries added (rare)
- **MINOR**: New sectors, subsectors, or segments added
- **PATCH**: Label updates, metadata fixes, documentation improvements

**Current Version:** 1.2.2 (November 12, 2025)

---

## License

**Apache License 2.0**

Grants unlimited rights to:
- Use commercially or non-commercially
- Modify and create derivative works
- Distribute original or modified versions
- Sublicense to third parties

Requirements:
- Include copy of Apache 2.0 license
- State significant changes if modified

**No attribution required for using DMCS data** (optional but appreciated)

---

## Frequently Asked Questions

**Q: Can I use DMCS for commercial products?**  
A: Yes. The Apache 2.0 license permits unlimited commercial use without fees or restrictions.

**Q: How often does DMCS update?**  
A: As needed based on community proposals. Typical cadence: 2-4 structural releases per year.

**Q: Are DMCS IDs guaranteed to be stable?**  
A: Yes. IDs are immutable and never reused, even for deprecated or sunset classifications.

**Q: Can I create custom classifications?**  
A: Yes. Use the DMCS-CUST namespace (e.g., `09.01.C01`) to extend official nodes without forking.

**Q: How do I migrate from GICS/ICB/TRBC/NAICS?**  
A: Use the crosswalk mappings in `/mappings/` and follow the dual-coding migration strategy documented in this README.

**Q: Does DMCS support conglomerates?**  
A: Yes. Use primary classification for the dominant business line and secondary classification for material operations in a different industry (≥25% revenue).

---

### Changelog

See [CHANGELOG.md](CHANGELOG.md) for complete version history and detailed change notes.

### Citation

**Academic/Research Citation:**
```
DMCS. (2025). Dynamic Multi-Dimensional Classification Standard (Version 1.2.2) [Data set]. 
https://github.com/shadstradamus/DMCS
```

**BibTeX:**
```bibtex
@misc{dmcs2025,
  title = {Dynamic Multi-Dimensional Classification Standard},
  author = {{DMCS.}},
  year = {2025},
  version = {1.2.2},
  url = {https://github.com/shadstradamus/DMCS},
  note = {Apache License 2.0}
}
```

---

**Questions?** Open an [issue](https://github.com/shadstradamus/DMCS/issues) or discussion.

**Explore Classifications:** [trydmcs.pages.dev](https://trydmcs.pages.dev/) — Interactive browser with curated company examples

**Repository:** [github.com/shadstradamus/DMCS](https://github.com/shadstradamus/DMCS)
