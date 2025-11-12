<p align="center">
  <img src="assets/dmcs-logo.svg" alt="DMCS Logo" width="800">
</p>

**Version 1.2.1** · Effective Date: 2025-11-12 · **License:** Apache 2.0

# DMCS — Open Source Industry Classification Standard

DMCS (Dynamic Multi-Dimensional Classification Standard) is a free, open-source taxonomy for classifying companies, cryptocurrencies, and business models across the modern economy.

**Built for everyone — from hobby projects to enterprise platforms like Yahoo Finance.**

**Why choose DMCS?**

- **Digital-native coverage** — First-class support for blockchain, crypto, SaaS, and platform business models
- **Stable, immutable IDs** — Never break your historical data; IDs are permanent and versioned
- **Free to use** — Apache 2.0 license for commercial and non-commercial projects
- **Community-driven** — Submit proposals via GitHub issues; transparent governance and public changelog
- **Extensible** — Add custom classifications (DMCS-CUST) without forking the standard

## What You Get

**Core Taxonomy**
- **14 industries** · **59 sectors** · **221 subsectors** · **71 segments**
- Coverage spans traditional economy (**GIC**: General Industry Classification, 01-12,14) and digital/onchain economy (**DIC**: Digital Industry Classification, 13)
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

## Hierarchy & ID Rules

### Visual Structure

```
┌─────────────────────────────────────────────────────────────┐
│  Industry (II)                                 Example: 09  │
│  └─ Sector (II.SS)                             Example: 09.01│
│     └─ Subsector (II.SS.SSS)                   Example: 09.01.002│
│        └─ Segment (II.SS.SSS.SS) [optional]    Example: 09.01.002.03│
└─────────────────────────────────────────────────────────────┘

Example Chain:
  09                → Technology (Industry)
  09.01             → Software & Platforms (Sector)
  09.01.004         → Cloud Platforms / PaaS (Subsector)
  09.01.004.02      → API / Integration (Segment)
```

**Hierarchy Levels**
- **Industry** (mandatory) — two digits defining the broad economic domain.
- **Sector** (mandatory) — adds a two-digit suffix to separate adjacent business groups.
- **Subsector** (mandatory) — adds a three-digit suffix representing distinct value chains.
- **Segment** (optional) — two-digit suffix for discrete products/services within a subsector.

**ID Guarantees**
- **Immutable** — IDs never change; labels may evolve with public change notes.
- **Hierarchical** — truncating the rightmost component returns the parent (e.g., `09.01.002.03` → `09.01.002`).
- **Numeric & Fixed width** — Regex enforced: `^\d{2}\.\d{2}\.\d{3}(\.\d{2})?$`.
- **Lifecycle metadata** — Every node carries `since`, `status`, optional `sunset`, and provenance details.

## Coverage Snapshot (v1.2.0)

**14 industries** · **59 sectors** · **221 subsectors** · **71 segments**

### All Industries

**GIC (General Industry Classification)** — Traditional economy industries (01-12, 14)  
**DIC (Digital Industry Classification)** — Digital and onchain economy (13)

| ID | Industry | Classification | Coverage |
|----|----------|----------------|----------|
| 01 | Energy | GIC | Hydrocarbons, renewables, storage |
| 02 | Basic Materials | GIC | Metals, chemicals, forestry |
| 03 | Industrials | GIC | Manufacturing, logistics, aerospace |
| 04 | Consumer Discretionary | GIC | Retail, leisure, consumer services |
| 05 | Consumer Staples | GIC | Food, beverages, household |
| 06 | Healthcare | GIC | Providers, pharma, biotech |
| 07 | Financial Services | GIC | Banking, markets, insurance |
| 08 | Real Estate | GIC | REITs, development, property ops |
| 09 | Technology | GIC | Software, hardware, semiconductors, services |
| 10 | Communications & Media | GIC | Networks, media, advertising |
| 11 | Utilities | GIC | Power, water, grid services |
| 12 | Government / Public / Education | GIC | Public sector, NGOs, education |
| 13 | Digital & Onchain Economy | DIC | Crypto-native, DeFi, blockchain infrastructure |
| 14 | Professional & Business Services | GIC | Consulting, outsourcing, data & marketing services |

## DMCS vs. Legacy Classification Systems

| Feature | DMCS | GICS / ICB | NAICS | TRBC |
|---------|------|------------|-------|------|
| **License** | Apache 2.0 (Free) | Proprietary ($$$) | Public Domain | Proprietary ($$$) |
| **Digital Economy Coverage** | ✅ Native DIC industry (13) | ❌ Limited | ❌ Limited | ❌ Limited |
| **Crypto/Blockchain** | ✅ DeFi, L1/L2, stablecoins, NFTs | ❌ None | ❌ None | ❌ Minimal |
| **SaaS Granularity** | ✅ 7 software subsectors + segments | ⚠️ Basic | ⚠️ Basic | ⚠️ Basic |
| **Platform Business Models** | ✅ Multi-classification support | ⚠️ Limited | ❌ Single-class | ⚠️ Limited |
| **ID Stability** | ✅ Immutable, versioned | ⚠️ Periodic changes | ⚠️ 5-year updates | ⚠️ Annual updates |
| **Open Data Access** | ✅ JSON, CSV, SDKs | ❌ License required | ✅ Public | ❌ License required |
| **Community Input** | ✅ GitHub issues/PRs | ❌ Closed | ❌ Gov agency | ❌ Closed |
| **Custom Extensions** | ✅ DMCS-CUST namespace | ❌ Not supported | ❌ Not supported | ❌ Not supported |
| **Commercial Use** | ✅ Unlimited | 💰 Fee + restrictions | ✅ Free | 💰 Fee + restrictions |
| **API/SDK Support** | ✅ TypeScript, Python | 💰 Paid only | ❌ None | 💰 Paid only |
| **Update Frequency** | As needed (community-driven) | Annual | Every 5 years | Annual |
| **Conglomerate Support** | ✅ Primary + Secondary | ⚠️ Primary only | ⚠️ Primary only | ⚠️ Limited |

**Bottom Line:** DMCS is purpose-built for modern, digital-first businesses with free access, stable IDs, and community governance—no licensing fees or vendor lock-in.

## How Classification Works

**Primary Classification**
- Follow the published determination order: (1) external revenue share (target ≥50–60%), (2) earnings contribution (gross or operating profit), (3) asset base for balance-sheet-driven entities (banks, insurers, REITs), and (4) management discussion / market perception when financial signals are inconclusive.

**Secondary Classification (Optional)**
- Only assigned if the entity operates materially in a **different industry**
- Requires ≥25-30% of revenue **or** declared strategic priority
- Limited to one secondary classification per entity

**Persistence Rule**
- Add or remove classifications after 2 consecutive reporting periods meet or fail the threshold (unless a transformative corporate action occurs)
- Prevents rapid reclassification from one-time events

**Boundary Guidance**
Review [docs/boundaries.md](./docs/boundaries.md) for complete scope notes. Snapshot of common calls:

| Scenario | Primary In Scope | Primary Out of Scope | Notes |
|----------|------------------|----------------------|-------|
| Data centers | 08.04.001 Data Centers (powered shell, REIT-style) | 09.03.003 Data Center Services (managed colo, IXPs) | Start with revenue mix; use operating profit when within ±3pp. |
| Ad-funded platforms | 10.03 Advertising & Attention Platforms | 09.01 Software & Platforms | Advertising ≥50–60% keeps primary in Industry 10; SaaS contracts stay in Industry 09. |
| Mobility | 04.07 Mobility Platforms | 03.03 Transportation & Logistics | Marketplace-led operators vs asset-heavy carriage; assign secondary if both ≥25–30%. |
| Facilities services | 08.03.003 Facilities & Property Operations | 03.04.004 Industrial Maintenance & Services | Follow the asset base: real-estate portfolios vs plant/process sites. |
| Game distribution | 10.02.005.02 Interactive Platforms & Distribution | 10.03.002 Creator & UGC Platforms | Game stores/launchers (Steam, Epic, console) stay in 10.02; creator-first UGC hubs belong in Industry 10.03. |
| Video distribution | 10.02.002 Broadcasting & Networks | 10.02.001 Film, TV & Entertainment | MVPDs and cable/satellite operators stay in 10.02.002; pure-play OTT video belongs in 10.02.001 streaming segments. |
| Betting & iGaming | 10.02.006 Betting & iGaming | 04.04.003 Casinos & Gaming Venues | Venue-heavy mixes remain Consumer Discretionary; online platforms lead to Industry 10. |
| DePIN | 13.01.007 DePIN Infrastructure | 13.03.005 DePIN Applications | Classify by where revenue is earned—resource supply vs downstream client app. |

**Example: Amazon**
- Primary: `04.05.002` (Online Marketplaces) — e-commerce is largest revenue
- Secondary: `09.01.004` (Cloud Platforms / PaaS) — AWS meets ≥25% revenue threshold and operates in a different industry (Technology vs Consumer Discretionary)

## Governance & Updates

**How DMCS Evolves**

DMCS updates through community proposals submitted via [GitHub Issues](https://github.com/shadstradamus/DMCS/issues/new/Quick comparison table — Show DMCS vs GICS/ICB/NAICS side-by-side highlighting key differences (open-source, digital coverage, immutable IDs, no fees)choose) using the **Taxonomy Proposal** template:

1. **Submit a Proposal** — Describe the business model, provide real-world examples, and explain why existing nodes are insufficient
2. **Community Review** — Maintainers and community members discuss the rationale and impact
3. **Decision & Implementation** — Accepted proposals are added in the next structural release
4. **Changelog Documentation** — All changes are documented with effective dates and migration notes

**Release Types**
- **Structural releases** (as needed) — Add new industries, sectors, subsectors, or segments when community proposals are accepted
- **Thematic releases** (as needed) — Label refinements and metadata updates without new IDs

**Transparency Guarantee**
- All decisions are public and documented in `CHANGELOG.md`
- IDs never change or get reused — immutability is a core principle
- Community participation is welcome via issues and pull requests

## Getting Started

**1. Browse the Taxonomy**
- View complete hierarchy in [CLASSIFICATION.md](./CLASSIFICATION.md)
- See full details in `data/classification.json` or `data/classification.csv`

**2. Install an SDK (Optional)**

TypeScript/JavaScript:
```bash
npm install dmcs-sdk
```

Python:
```bash
pip install "git+https://github.com/shadstradamus/DMCS.git#subdirectory=python-sdk"
```

**3. Use in Your Project**

TypeScript:
```typescript
import { Classification } from 'dmcs-sdk';

const dmcs = new Classification();

// Get stats
console.log(dmcs.stats());
// { version: '1.2.0', industries: 14, sectors: 59, subsectors: 221, segments: 71 }

// Lookup by ID
const cloudPlatforms = dmcs.getById('09.01.004');
console.log(cloudPlatforms.label); // "Cloud Platforms / PaaS"

// Search
const results = dmcs.search('blockchain');
```

Python:
```python
from dmcs_sdk import classification

dmcs = classification()

# Get stats
print(dmcs.stats())

# Lookup by ID
tech = dmcs.get_by_id('09')
print(tech)  # 09 — Technology (4 sectors, GIC)

# Search
results = dmcs.search('stablecoin')
```

**4. Reference the Mappings**

If you're migrating from another system, check:
- `mappings/gics-to-dmcs.md`
- `mappings/icb-to-dmcs.md`
- `mappings/naics-to-dmcs.md`
- `mappings/trbc-to-dmcs.md`

## Migration Guide: Switching from Legacy Systems

### Quick Start (3 Steps)

**Step 1: Download the Mapping File**

Choose your current system:
- GICS → `mappings/gics-to-dmcs.md`
- ICB → `mappings/icb-to-dmcs.md`
- NAICS → `mappings/naics-to-dmcs.md`
- TRBC → `mappings/trbc-to-dmcs.md`

**Step 2: Map Your Data**

Each mapping file provides:
- Source code → Target DMCS ID(s)
- Rationale for the mapping
- Notes on edge cases

Example (GICS to DMCS):
```
GICS 45102010 (IT Services) → DMCS 09.03.001 (IT Consulting)
GICS 45103010 (Application Software) → DMCS 09.01.002 (Enterprise SaaS)
```

**Step 3: Validate**

Use the SDK to verify your mappings:

```python
from dmcs_sdk import classification

dmcs = classification()

# Verify mapped ID exists
node = dmcs.get_by_id('09.01.002')
print(node)  # Confirms valid DMCS node
```

### Handling Edge Cases

**Conglomerates / Multi-Business Entities**

Legacy systems typically force a single classification. DMCS supports:
- **Primary** classification for dominant business line
- **Secondary** classification for material operations in a different industry (≥25-30% revenue)

Example:
```
Amazon in GICS: 25504010 (Internet & Direct Marketing Retail)
Amazon in DMCS: 
  Primary: 04.05.002 (Online Marketplaces)
  Secondary: 09.01.004 (Cloud Platforms / PaaS)
```

**Digital/Platform Businesses**

Legacy systems lack digital-native categories. Map to DMCS Industry 09 (Technology) or 13 (Digital & Onchain Economy):

```
Coinbase (no GICS equivalent) → DMCS 13.02.001 (Centralized Exchanges)
Uniswap (no GICS equivalent) → DMCS 13.02.002 (Decentralized Exchanges)
Stripe (GICS 45203020) → DMCS 07.02.003 (Payment Processing)
```

### Dual-Coding Strategy (Recommended)

Store both classifications during transition:

| Entity | Legacy Code | Legacy System | DMCS Primary | DMCS Secondary |
|--------|-------------|---------------|--------------|----------------|
| Apple | 45202030 | GICS | 09.02.005 | — |
| Amazon | 25504010 | GICS | 04.05.002 | 09.01.004 |
| Tether | — | — | 13.02.004 | — |

Benefits:
- Maintain backward compatibility
- Compare classifications side-by-side
- Gradual migration path

## Custom Extensions (DMCS-CUST)

Need more granularity than the standard taxonomy provides? **DMCS-CUST** lets you add custom classifications without forking the repository.

**How It Works**

Use custom IDs with a **C** prefix under official parent nodes:

- **Subsector-level:** `II.SS.CXXX` (e.g., `09.01.C01`)
- **Segment-level:** `II.SS.SSS.CXX` (e.g., `09.01.003.C01`)

**Example: Financial Services Firm**

```
Official:  07.01.001 — Retail Banking
Custom:    07.01.C01 — Private Banking (DMCS-CUST, parent: 07.01.001)
Custom:    07.01.C02 — Corporate Banking (DMCS-CUST, parent: 07.01.001)

Official:  07.03.003 — Investment Banking
Custom:    07.03.C01 — Equity Capital Markets (DMCS-CUST, parent: 07.03.003)
Custom:    07.03.C02 — Debt Capital Markets (DMCS-CUST, parent: 07.03.003)
```

**Example: Technology Platform**

```
Official:  09.01.002 — Enterprise SaaS
Custom:    09.01.C01 — Public Sector SaaS (DMCS-CUST, parent: 09.01.002)
Custom:    09.01.C02 — Healthcare SaaS (DMCS-CUST, parent: 09.01.002)
Custom:    09.01.C03 — Financial Services SaaS (DMCS-CUST, parent: 09.01.002)
```

**Rules for Custom Nodes**

1. **Always reference a valid parent** — Custom nodes must extend official DMCS nodes
2. **Use sequential numbering** — C01, C02, C03... within your organization
3. **Document internally** — Maintain clear definitions for each custom node
4. **Avoid conflicts** — Coordinate IDs within your organization to prevent duplicates
5. **Subsector ≠ Segment** — `09.01.C01` (subsector extension) is different from `09.01.001.C01` (segment extension under an official subsector)

**Promotion to Official DMCS**

If your custom node gains widespread adoption, you can propose adding it to the official taxonomy via a [GitHub Issue](https://github.com/shadstradamus/DMCS/issues/new/choose). Popular CUST nodes can be promoted through the governance process.

**When to Use DMCS-CUST**

✅ **Use custom nodes when:**
- You need industry-specific detail (e.g., "Islamic Banking" under Retail Banking)
- Internal reporting requires finer segments than DMCS provides
- Business model innovations don't fit existing categories
- You're building product-line analytics requiring specialized breakdowns

❌ **Don't create custom nodes when:**
- Official DMCS nodes already cover your use case
- You're trying to reclassify across industries (use secondary classification instead)
- The distinction is organizational structure rather than business model

## Who Uses DMCS?

DMCS is designed to scale from personal projects to enterprise platforms:

### For Hobbyists & Side Projects
- 🎨 **Portfolio websites** — Classify companies in your stock tracking app
- 📊 **Data visualizations** — Build industry charts and sector analysis
- 🤖 **Learning projects** — Train ML models on business classification
- 📱 **Crypto trackers** — Organize DeFi protocols and blockchain projects
- **No fees, no limits** — Use freely without worrying about licensing

### For Startups & Developers
- 🚀 **Fintech apps** — Add industry filters to investment platforms
- 🔍 **Search & discovery** — Build company directories with DMCS categories
- 📈 **Analytics dashboards** — Compare companies within precise subsectors
- 🏦 **Compliance tools** — Classify entities for regulatory reporting
- **SDK support** — TypeScript and Python libraries for rapid integration

### For Enterprise & Financial Services
- 💼 **Financial platforms** (like Yahoo Finance, Bloomberg alternatives) — Classify thousands of equities, crypto assets, and private companies
- 🏢 **Asset managers** — Build custom fund classifications and benchmark indices
- 📊 **Data vendors** — Distribute standardized classifications to clients
- 🌐 **Global exchanges** — Organize listed companies and digital assets
- **Scalable & stable** — Immutable IDs protect historical data across millions of records

### For Researchers & Analysts
- 📚 **Academic research** — Study industry evolution and business model trends
- 📰 **Market analysis** — Track emerging sectors (DeFi, AI, quantum computing)
- 📖 **Publications** — Cite DMCS as an open standard with DOI-style versioning
- **Full transparency** — All data, governance, and changes are public

## Use Cases

**For Website Builders**
- Classify companies, products, or services with consistent IDs
- Display industry/sector badges that never break
- Build filterable directories or taxonomies

**For AI Training**
- Label training datasets with stable, versioned classifications
- Map diverse business models to structured categories
- Track entity classifications over time without data drift

**For Analytics & Research**
- Analyze portfolios across traditional and digital economy
- Compare companies within precise subsectors and segments
- Build industry benchmarks with granular peer groups

**For Data Teams**
- Import flat CSV into SQL databases or data warehouses
- Use SDKs for programmatic access in Python/TypeScript pipelines
- Maintain backward compatibility through immutable IDs

**For Crypto/Blockchain Projects**
- First taxonomy with native support for DeFi, L1/L2, stablecoins, and onchain apps
- Classify protocols, exchanges, and infrastructure with precision
- Map digital assets to appropriate business model categories

## Example: Technology Decision Tree (Industry 09)

Need help classifying a technology company? Use this decision tree to find the right subsector:

```
Start
├─ Software-led revenue?
│   ├─ Application suite core? → 09.01.001 Application Software
│   ├─ Horizontal SaaS platform? → 09.01.002 Enterprise SaaS
│   ├─ Security-first? → 09.01.003 Cybersecurity Software
│   ├─ Developer & cloud platform? → 09.01.004 Cloud Platforms / PaaS
│   ├─ Data infrastructure core? → 09.01.005 Data & Database Platforms
│   ├─ Customer engagement focus? → 09.01.006 CRM & Customer Platforms
│   └─ AI platform delivery? → 09.01.007 AI & ML Platforms
├─ Hardware & devices primary?
│   ├─ Consumer devices? → 09.02.005 Consumer Devices & Ecosystems
│   ├─ Network & telecom infrastructure? → 09.02.006 Network & Telecom Equipment
│   ├─ Imaging/sensors/components? → 09.02.007 Imaging, Sensors & Components
│   └─ Semiconductor supply chain?
│         ├─ Fabless design & IP? → 09.02.001 Semiconductors — Design
│         ├─ Foundry/IDM manufacturing? → 09.02.002 Semiconductors — Manufacturing
│         ├─ Capital equipment? → 09.02.003 Semiconductor Equipment
│         └─ Materials, gases & consumables? → 09.02.004 Semiconductor Materials
├─ Services-led revenue?
│   ├─ Consulting & integration? → 09.03.001 IT Consulting
│   ├─ Managed operations? → 09.03.002 Managed Services
│   ├─ Colocation/hosting? → 09.03.003 Data Center Services
│   └─ Security services? → 09.03.004 Cybersecurity Services
├─ Emerging tech bets?
│   ├─ Robotics & automation hardware? → 09.04.001 Robotics & Automation
│   ├─ IoT platforms & edge? → 09.04.002 IoT Platforms
│   ├─ Advanced/experimental tech? → 09.04.003 Advanced / Experimental Tech
│   └─ Spatial computing / XR? → 09.04.004 Spatial / XR Platforms
└─ Otherwise: assess adjacent industries (e.g., Communications 10, Industrials 03)
```

**More decision trees** for other industries are available in the full [CLASSIFICATION.md](./CLASSIFICATION.md) documentation.

## Real-World Examples

| Entity | Primary | Secondary | Rationale |
|--------|---------|-----------|-----------|
| Apple | 09.02.005 (Consumer Devices & Ecosystems) | — | Hardware-led revenue (iPhone, Mac, iPad) is the dominant business line |
| Amazon | 04.05.002 (Online Marketplaces) | 09.01.004 (Cloud Platforms / PaaS) | E-commerce is primary, AWS qualifies as secondary (≥25% revenue, different industry) |
| Meta | 10.03.001 (Social Networks) | 09.04.004 (Spatial / XR Platforms) | Social media primary, Reality Labs emerging tech secondary |
| Tether (USDT) | 13.02.004 (Stablecoin / Digital Currency) | — | Pure-play stablecoin issuer in digital assets industry |
| NVIDIA | 09.02.001 (Semiconductors — Design) | — | Fabless GPU/accelerator design is core business |
| Microsoft | 09.01.002 (Enterprise SaaS) | — | Note: Both in same industry (Technology), so only primary assigned per materiality rules |

## Quality & Testing

DMCS maintains data quality through automated validation:

- **Schema validation** — Ensures all nodes have required fields and proper parent references
- **Coverage checks** — Verifies published statistics match actual counts
- **SDK tests** — TypeScript and Python SDKs include comprehensive test suites
- **Audit reports** — Periodic reviews documented in `tooling/AUDIT_REPORT.txt`

Run validation yourself:
```bash
cd tooling/scripts
node audit-taxonomy.js
```

## Frequently Asked Questions (FAQ)

### How is DMCS different from GICS?

**GICS** is a proprietary system owned by S&P and MSCI, requiring paid licenses for commercial use. It was designed for traditional public equities and lacks coverage for modern digital business models.

**DMCS** is:
- **Open source** (Apache 2.0) — free for any use, no licensing fees
- **Digital-native** — includes dedicated Industry 13 for crypto/blockchain/DeFi
- **Platform-friendly** — supports multi-classification for conglomerates (primary + secondary)
- **Immutable IDs** — guaranteed stability; IDs never change or get reused
- **Community-driven** — anyone can propose changes via GitHub

### Can I use DMCS commercially?

**Yes, absolutely.** DMCS is licensed under Apache 2.0, which allows:
- ✅ Commercial use without fees or royalties
- ✅ Modification and redistribution
- ✅ Building paid products/services using DMCS
- ✅ Training AI models on DMCS data
- ✅ Integration into proprietary databases or platforms

**Real-world applications:**
- Financial platforms (stock screeners, portfolio trackers, market data APIs)
- Enterprise data vendors and analytics services
- AI/ML training datasets for business intelligence
- Mobile apps and SaaS products
- Internal classification systems at Fortune 500 companies

The only requirement is attribution (keeping license notices in place). No usage limits, no approval needed, no revenue sharing.

### How often does DMCS change?

**IDs never change.** Once assigned, a DMCS ID is permanent and immutable—`09.01.002` will always mean the same thing.

**What can change:**
- **Labels** may be refined for clarity (e.g., "Cloud Platforms / PaaS" → "Cloud Infrastructure Platforms")
- **New nodes** are added via structural releases (as needed, based on community proposals)
- **Metadata** like `status` can evolve (e.g., `active` → `deprecated` → `retired`)

All changes are documented in `CHANGELOG.md` with effective dates and migration guidance.

### What happens if I need a category that doesn't exist?

You have two options:

**1. Use DMCS-CUST (Custom Extensions)**

Add your own custom classifications immediately without waiting:
- Create subsector extensions: `II.SS.CXXX` (e.g., `09.01.C01` for "Public Sector SaaS")
- Create segment extensions: `II.SS.SSS.CXX` (e.g., `09.01.003.C01` for "Mobile EDR")
- Keep using them indefinitely within your organization

**2. Propose Official Addition**

Submit a [Taxonomy Proposal](https://github.com/shadstradamus/DMCS/issues/new/choose) via GitHub Issues:
1. Describe the business model and provide real-world examples
2. Explain why existing nodes are insufficient
3. Community reviews and discusses
4. If accepted, it's added to the official taxonomy in the next release

Popular DMCS-CUST nodes can be promoted to official standard through this process.

### How stable are the IDs really?

**Guaranteed immutable.** This is a core design principle:

- **No reuse** — Retired IDs are never reassigned to different business models
- **No renumbering** — The hierarchy never gets reorganized or collapsed
- **Version tracking** — Every node has a `since` field recording when it was added
- **Lifecycle management** — Nodes can be deprecated or retired, but IDs remain reserved

Example:
```json
{
  "id": "10.02.005",
  "label": "Cable TV",
  "status": "retired",
  "since": "2024-01-15",
  "sunset": "2025-06-01"
}
```

Even retired IDs remain in the data model for historical lookups. Your 2020 dataset classified with DMCS v1.0 will still work with DMCS v2.0+.

### Is DMCS only for public companies?

**No.** DMCS works for any entity with identifiable business models:
- Public & private companies
- Startups and scaleups
- Crypto protocols and DAOs
- Government agencies (Industry 12)
- Non-profits and foundations
- Products, divisions, or business units

The classification focuses on **what the entity does** (business model), not legal structure or funding stage.

### Do I need to use the SDKs?

**No, but they help.** The core taxonomy is available as:
- `data/classification.json` — Load directly into any JSON parser
- `data/classification.csv` — Import into Excel, SQL databases, or analytics tools
- `CLASSIFICATION.md` — Human-readable reference for manual lookup

The SDKs (TypeScript, Python) add convenience features like search, filtering, and validation, but you can work with raw data files if you prefer.

### How do I stay updated on changes?

- ⭐ **Star the repository** — Get notifications when new releases are published
- 📖 **Watch** `CHANGELOG.md` — All structural and thematic changes are logged here
- 🔔 **Subscribe to Issues** — Follow taxonomy proposal discussions
- 📊 **Check version metadata** — SDK `.stats()` method shows current version

Each release is tagged in Git (e.g., `v1.1.3`) for easy comparison and rollback if needed.

## What's Next

**Future Enhancements**
- Decision trees for all 14 industries (currently have Technology)
- Enhanced materiality guidance and examples
- Additional mapping documentation for niche classification systems
- Community-contributed case studies and classification rationales

**Get Involved**
- ⭐ Star the repository to follow updates
- 💡 Submit classification proposals via [GitHub Issues](https://github.com/shadstradamus/DMCS/issues/new/choose)
- 🐛 Report bugs or data inconsistencies
- 📖 Improve documentation and examples
- 🤝 Share how you're using DMCS in your project

## Contributing

DMCS is community-driven and welcomes contributions:

**Ways to Contribute**
1. **Propose taxonomy changes** — Use the [Taxonomy Proposal](https://github.com/shadstradamus/DMCS/issues/new/choose) issue template
2. **Improve documentation** — Fix typos, clarify examples, add use cases
3. **Enhance tooling** — Improve SDK features, add validation scripts, build utilities
4. **Share feedback** — Open issues for bugs, questions, or suggestions

**Development Setup**
```bash
# Clone the repository
git clone https://github.com/shadstradamus/DMCS.git
cd DMCS

# Install tooling dependencies
cd tooling
npm install

# Run validation
npm run audit

# Install Python SDK for development
cd ../python-sdk
pip install -e .
pytest
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

## License & Usage

**License:** Apache 2.0

✅ **You can:**
- Use DMCS in any project (commercial or non-commercial)
- Modify and redistribute the data
- Build products and services using DMCS
- Create derivative works
- Extend with DMCS-CUST custom classifications

**Trademark:** "DMCS" refers to the official taxonomy maintained in this repository. If you fork and significantly modify the standard, please label it as "Based on DMCS" or similar to avoid confusion.

---

**Questions?** Open an [issue](https://github.com/shadstradamus/DMCS/issues) or discussion.

**Repository:** [github.com/shadstradamus/DMCS](https://github.com/shadstradamus/DMCS)
