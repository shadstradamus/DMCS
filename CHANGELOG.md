# Changelog


## [1.2.2] - 2025-11-12
### Added
- **New Sector (1):**
  - `05.05` Tobacco & Cannabinoid Products

- **New Subsectors (6):**
  - `05.05.001` Combustible Tobacco
  - `05.05.002` Reduced-Risk Nicotine (Heated & Vapor)
  - `05.05.003` Smokeless & Oral Nicotine
  - `05.05.004` Vertically-Integrated Cannabis (MSOs)
  - `05.05.005` Cannabis Products, Brands & Wellness
  - `05.05.006` Cannabis Cultivation & Supply Chain

- **New Segments (5):**
  - `05.05.002.01` Heated Tobacco Systems
  - `05.05.002.02` Closed-Pod Vapor
  - `05.05.002.03` Open-System Vapor
  - `05.05.006.01` Cultivation
  - `05.05.006.02` Extraction/Processing

- **Retail Segment:**
  - `05.03.003.01` Specialty Tobacco & Vape Retail

### Changed
- No changes

### Removed
- No removals

### Statistics
- Total Entries: 396
- Industries: 14
- Sectors: 60
- Subsectors: 230
- Segments: 92

### Summary
- **Focus:** Added comprehensive coverage for tobacco, nicotine alternatives, and cannabis industries with detailed product taxonomy and vertical integration classification

---

All notable changes to the DMCS (Dynamic Multi-Dimensional Classification Standard) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [1.2.1] - 2025-11-12

### Added

- **New Subsectors (2):**
  - `07.03.007` ESG Data Platforms (split from Carbon Exchanges & Data)
  - `08.04.004` Fiber Infrastructure (split from Cell Towers & Digital Infra)

- **New Segments (18):**
  - `06.01.003.01` General Biotech
  - `06.01.003.02` Cell & Gene Therapy
  - `06.01.003.03` Genomics & Precision Medicine
  - `06.01.003.04` Longevity & Anti-Aging
  - `09.01.003.04` Cloud Security
  - `09.01.005.01` Database Management Systems (DBMS)
  - `09.01.005.02` Data Warehousing
  - `09.01.005.03` BI & Analytics Platforms
  - `09.04.003.01` Quantum Computing
  - `09.04.003.02` AGI Research
  - `09.04.003.03` Advanced Materials
  - `09.04.003.04` Fusion Energy
  - `10.03.004.01` Search Engines
  - `10.03.004.02` Multi-Service Digital Ecosystems

### Changed

- **Subsector Splits:**
  - `07.03.006` Carbon Exchanges & Data → `07.03.006` Carbon Exchanges
  - `08.04.003` Cell Towers & Digital Infra → `08.04.003` Cell Towers

- **Subsector Renames:**
  - `09.04.003` Advanced / Experimental Tech → `09.04.003` Emerging & Deep Tech

- **Segment Renames:**
  - `09.01.002.01` General PaaS → `09.01.002.01` Infrastructure PaaS
  - `09.01.003.01` Endpoint / XDR → `09.01.003.01` Network Security
  - `09.01.003.02` Identity / IAM → `09.01.003.02` Endpoint Security
  - `09.01.003.03` Network / SASE → `09.01.003.03` Identity & Access Management (IAM)

### Summary
- **Total Entries:** 381 (up from 367)
- **New v1.2.1 Entries:** 23
- **Focus:** Eliminated "odd couples" (mixed business models), added granularity to high-value markets (cybersecurity, data platforms, biotech, emerging tech)


## [1.2.0] - 2025-11-11

### Added

- **Industry 14 — Professional & Business Services**
  - `14.01` Professional Services
    - `14.01.001` Management & Strategy Consulting
    - `14.01.002` Legal Services
    - `14.01.003` Accounting, Audit & Tax Services
    - `14.01.004` Specialized Advisory
      - `14.01.004.01` HR, Compensation & Benefits
      - `14.01.004.02` ESG, Risk & Sustainability
  - `14.02` Business Support & Outsourcing
    - `14.02.001` Staffing & Employment Services
      - `14.02.001.01` Temporary & Contract Staffing
      - `14.02.001.02` Permanent & Executive Search
    - `14.02.002` Business Process Outsourcing (BPO)
    - `14.02.003` Corporate Support Services
  - `14.03` Data, Information & Marketing Services
    - `14.03.001` Financial Data, Ratings & Analytics
    - `14.03.002` Market Research & General Data
    - `14.03.003` Advertising & Marketing Agencies
      - `14.03.003.01` Integrated Agencies & Holding Groups
      - `14.03.003.02` Public Relations Services
    - `14.03.004` Scientific & Technical Services
- **Life sciences expansion**
  - `06.05` Life Sciences Tools & Services
    - `06.05.001` Life Sciences Equipment & Consumables
      - `06.05.001.01` Analytical Instruments & Equipment
      - `06.05.001.02` Life Sciences Consumables & Reagents
    - `06.05.002` Contract Research & Manufacturing
      - `06.05.002.01` Contract Research Organizations (CROs)
      - `06.05.002.02` Contract Development & Manufacturing (CDMOs)
- **PropTech platform depth**
  - `08.03.004` PropTech & Real Estate Platforms
    - `08.03.004.01` Residential Platforms & Marketplaces
    - `08.03.004.02` Commercial Data & Analytics Platforms
    - `08.03.004.03` Property & Asset Management Software
    - `08.03.004.04` iBuyer & Direct Platforms
- **Industrial services expansion**
  - `03.04.004` Industrial Maintenance & Services
- **Vertical SaaS coverage**
  - `09.01.008` Vertical Industry SaaS

### Changed

- **Media interaction terminology**: retitled `10.02.005` from **Interactive Home Entertainment** to **Video Games & Interactive Media** to better reflect modern distribution and engagement models.
- **Industrial services split**: separated the former `03.04.003 Facility & Industrial Services` into `03.04.003 Facility & Support Services` and `03.04.004 Industrial Maintenance & Services` for clearer coverage boundaries.
- **Documentation & datasets**: regenerated `classification.json`, CSV exports, SDK payloads, and `CLASSIFICATION.md` to surface the new structure; refreshed README statistics, mapping guidance, and tooling mirrors.
- **Scale update**: DMCS now tracks **14 industries**, **59 sectors**, **221 subsectors**, and **71 segments**.

### Fixed

- **Version alignment**: bumped repository metadata to `v1.2.0` and synchronized release dates across tooling scripts and SDK distributions.

## [1.1.3] - 2025-11-11

### Added

- **Film, TV & entertainment segmentation**: introduced four segments beneath `10.02.001 Film, TV & Entertainment` to cover the full studio-to-distribution chain
  - `10.02.001.01` Film & TV Production & Licensing
  - `10.02.001.02` Streaming Video Platforms
  - `10.02.001.03` Theatrical Exhibition
  - `10.02.001.04` Media Production & Ancillary Services
- **Broadcast distribution granularity**: created four segments under `10.02.002 Broadcasting & Networks` to separate linear TV, radio, cable/satellite operators, and network programming
  - `10.02.002.01` Broadcast TV Networks & Station Groups
  - `10.02.002.02` Radio Networks & Stations
  - `10.02.002.03` Cable & Satellite TV Providers
  - `10.02.002.04` Cable Networks & Program Distribution

### Changed

- **Real estate services terminology**: retitled `08.03.003` → **Facilities & Property Operations** to align naming with published boundary guidance.

- **Media subsector renames**: retitled `10.02.001` → **Film, TV & Entertainment**, `10.02.002` → **Broadcasting & Networks**, and `10.02.005` → **Interactive Home Entertainment** to match the expanded scope
- **Music & gaming terminology refresh**: refined segment labels to better describe rights management, streaming, live services, technology platforms, and esports coverage
- **Specialized residential positioning**: retitled `08.04.002` to **Specialized Residential Properties** and aligned all child segments with their new housing terminology
- **Artifact regeneration**: bumped DMCS taxonomy metadata to **v1.1.3** and regenerated JSON, CSV, Markdown, and bundle outputs across repositories
- **Documentation alignment**: updated crosswalk references (GICS / ICB / NAICS) and end-user guides to reflect the revised media taxonomy terminology

### Fixed

- **README consistency**: corrected the hierarchy example to use `09.01.004` (Cloud Platforms / PaaS) and removed the improper secondary classification from the Microsoft case study.
- **Boundary documentation**: expanded the scope notes covering game distribution vs creator platforms and broadcasting vs OTT streaming, and refreshed facilities guidance to match the updated label.

## [1.1.2] - 2025-11-11

### Added

- **Technology hardware refresh**: split sector `09.02` into a full semiconductor supply chain
  - `09.02.001` Semiconductors — Design (Fabless & IP)
  - `09.02.002` Semiconductors — Manufacturing (Foundry & IDM)
  - `09.02.003` Semiconductor Equipment
  - `09.02.004` Semiconductor Materials
  - `09.02.005` Consumer Devices & Ecosystems (with refreshed segments)
  - `09.02.006` Network & Telecom Equipment
  - `09.02.007` Imaging, Sensors & Components
- **AI platform depth**: introduced three segments under `09.01.007 AI & ML Platforms`
  - `09.01.007.01` Foundation Model Platforms
  - `09.01.007.02` Model APIs & Orchestration
  - `09.01.007.03` Applied AI Applications
- **New green & digital economy subsectors**
  - `10.02.006` Betting & iGaming
  - `07.03.006` Carbon Exchanges & Data
  - `11.04.003` Carbon Project Services & Trading
  - `11.04.004` CCUS Equipment & Services
  - `13.01.007` DePIN Infrastructure (DIC)
  - `13.03.005` DePIN Applications (DIC)
  - `01.04.005` Electrolyzers & Hydrogen Equipment
  - `07.02.004` Digital Carriers & MGAs


### Changed

- **Classification totals**: now tracking 205 subsectors (+12) and 49 segments (+3) with release metadata updated to 2025-11-11
- **Artifact refresh**: regenerated CSV/Markdown exports and synchronised SDK data bundles plus tooling assets
- **Mapping alignment**: updated GICS, ICB, TRBC, and NAICS guides to the new semiconductor and hardware identifiers
- **Documentation refresh**: revised README decision tree, quick examples, API samples, and SDK snippets to reflect the hardware updates

### Fixed

- **Version metadata consistency**: restored alignment across README, SDKs, and API documentation after the structural refresh

## [1.1.1] - 2025-11-10

### Added

- **Node Lifecycle Tracking**: All 295 classification nodes now include temporal metadata
  - `since` field: ISO date (YYYY-MM-DD) indicating when node entered DMCS
  - `status` field: Enum of `'active'` | `'deprecated'` | `'retired'`
  - Backfilled dates: 257 v1.0.4 nodes dated `2025-11-08`, 38 v1.1.0 nodes dated `2025-11-10`
- **Python SDK lifecycle methods**:
  - `is_active()` method on all dataclasses (Industry, Sector, Subsector, Segment)
  - `get_active()` method returns all nodes with status='active' or undefined
  - `get_by_status(status: str)` method filters nodes by lifecycle status
- **TypeScript SDK lifecycle methods**:
  - `getActive()` method returns all active nodes
  - `getByStatus(status: NodeStatus)` method filters by status with type safety
  - `NodeStatus` type: `'active' | 'deprecated' | 'retired'`

### Changed

- **CSV schema expansion**: grew from 7 to 9 columns by adding `since` and `status` lifecycle fields
- **Build tooling updates**: adjusted scripts to handle optional lifecycle fields while remaining backwards compatible
- **Documentation enhancements**: expanded README with a "Node Lifecycle Tracking" section covering immutability guarantees

### Technical

- **Lifecycle defaults**: all nodes currently ship with `status='active'`
- **Immutable identifiers**: lifecycle tracking enables future deprecation without changing IDs (e.g., declining cable TV industries)
- **Temporal validity**: preserved historical accuracy through temporal metadata
- **SDK compatibility**: both TypeScript and Python SDKs remain fully backwards compatible with v1.1.0

## [1.1.0] - 2025-11-10

- **Segment expansion**: introduced 34 official segments to form the optional fourth hierarchy level (`II.SS.SSS.SS`)
  - `09.01` Software & Platforms
    - `09.01.001.01` ERP / Finance Suites
    - `09.01.001.02` CRM / CX
    - `09.01.001.03` HCM / Workforce
    - `09.01.002.01` General PaaS
    - `09.01.002.02` Data / AI Platforms
    - `09.01.003.01` Endpoint / XDR
    - `09.01.003.02` Identity / IAM
    - `09.01.003.03` Network / SASE
    - `09.01.004.01` DevTools / DevOps
    - `09.01.004.02` API / Integration
    - `09.01.004.03` Analytics / BI
  - `09.02` Hardware & Devices
    - `09.02.005.01` Smartphones
    - `09.02.005.02` PCs / Tablets
    - `09.02.005.03` Wearables
  - `13.01` DLT & Blockchain Infrastructure
    - `13.01.001.01` EVM L1
    - `13.01.001.02` Non-EVM L1
    - `13.01.002.01` Optimistic Rollups
    - `13.01.002.02` ZK Rollups
    - `13.01.003.01` Node / Validator Ops
    - `13.01.003.02` Liquid Staking
  - `13.02` Centralized Exchanges & Trading
    - `13.02.001.01` Spot CEX
    - `13.02.001.02` Derivatives CEX
    - `13.02.001.03` Fiat On/Off Ramp CEX
    - `13.02.002.01` L1 DEX
    - `13.02.002.02` L2 DEX
    - `13.02.003.01` Institutional Custody
    - `13.02.003.02` MPC / Wallet Infrastructure
    - `13.02.004.01` Fiat-backed Stablecoins
    - `13.02.004.02` Crypto-collateralized Stablecoins
    - `13.02.004.03` Platform-linked Stablecoins
  - `13.03` Onchain Applications & Experiences
    - `13.03.001.01` Lending Protocols
    - `13.03.001.02` Derivatives Protocols
    - `13.03.001.03` Yield Aggregators
    - `13.03.001.04` Options Protocols
- **Industry 13 depth**: added two new subsectors to extend Digital & Onchain coverage
  - `13.01.005` Enterprise / Permissioned DLT (Hyperledger, Corda, Quorum)
  - `13.01.006` Cross-chain Infrastructure (Polkadot, Cosmos, LayerZero, Wormhole)

### Changed

- **Industry 13 renamed**: "Digital Assets & Blockchain" → **"Digital & Onchain Economy"**
- **Sector structure enhanced** with detailed DIC taxonomy:
  - `13.01 - DLT & Blockchain Infrastructure` (6 subsectors, 6 segments)
  - `13.02 - Centralized Exchanges & Trading` (7 subsectors, 10 segments)
  - `13.03 - Onchain Applications & Experiences` (4 subsectors, 4 segments)
  - `13.04 - Onchain Services, Security & Compliance` (4 subsectors)
- **Scale update**: expanded from **v1.0.4 base** (13 industries, 55 sectors, 191 subsectors) to **193 subsectors + 34 segments**
- **Data export refresh**: updated JSON/CSV outputs plus TypeScript & Python SDKs to surface segment metadata with proper ordering
- **SDK statistics**: enhanced reporting to include segment counts (`segments: 34`)

### Fixed

- **Critical fix**: Moved consumer device segments (Smartphones, PCs/Tablets, Wearables) from incorrect subsector `09.03.001 IT Consulting` to correct subsector `09.02.002 Consumer Devices & Ecosystems`
- **Field ordering**: enforced specification sequence (`label → id → level → segment_code → parent_id → hierarchy → classification`)
- **Hierarchy validation**: confirmed all 295 nodes have zero duplicates and correct parent-child relationships

## [1.0.4] - 2025-11-09

### Changed

- **Major terminology update**: Renamed "Taxonomy" → "Classification" across entire codebase
- **Field name alignment**: updated `P-TAX` → `GIC` (General Industry Classification) and `D-TAX` → `DIC` (Digital Industry Classification)
- **TypeScript SDK terminology**: renamed API methods (`getPTax()` → `getGIC()`, `getDTax()` → `getDIC()`)
- **Statistics labels**: retitled metrics (`p_tax_industries` → `gic_industries`, `d_tax_industries` → `dic_industries`)
- **File renames**: migrated `taxonomy.*` assets to `classification.*` equivalents
- **Documentation alignment**: refreshed READMEs, guides, and comments with the new terminology
- **Browser bundle refresh**: rebuilt fallback bundle with corrected classification field structure

### Fixed

- **TypeScript SDK compilation**: resolved type capitalization inconsistencies
- **Website badges**: ensured purple DIC badges display correctly for Digital Assets industry
- **Schema consumption alignment**: tightened JSON schema usage across consuming code paths

## [1.0.3] - 2025-11-08

### Added

- **Security & collaboration tooling**: expanded governance assets to streamline reporting and feedback
  - `SECURITY.md` with GitHub private vulnerability reporting workflow
  - Issue templates covering general issues, classification proposals, mapping updates, and docs/SDK enhancements

### Changed

- **Artifact version alignment**: bumped classification data, SDK metadata, and documentation to version 1.0.3 for public release consistency
- **Governance wording**: synchronised README and contributing guide language with the current release cadence

### Notes

- **Structure unchanged**: classification remains 13 industries, 55 sectors, 191 subsectors

## [1.0.2] - 2025-11-08

### Added

- **Public website launch**: published `Website/` with live market data feeds, AI-assisted classification demo, and product overview
- **Experience documentation**: added guides highlighting the new web experience features and usage workflows

### Notes

- **Data unchanged**: release focused on outreach and reference experience

## [1.0.1] - 2025-11-08

### Added

- **TypeScript SDK release**: shipped normalized classification types with metadata derivation utilities
- **Crosswalk documentation**: published comparative references for major industry standards
  - `mappings/gics-to-dmcs.md`
  - `mappings/icb-to-dmcs.md`
  - `mappings/trbc-to-dmcs.md`
  - `mappings/naics-to-dmcs.md`

### Fixed

- **Telecom code corrections**: ensured mapping files (`mappings/*.md`) reflect 10.01.001 = Mobile and 10.01.002 = Fixed-Line
- **Design documentation alignment**: refreshed `Documentation/DMCS Documentation.txt` with the correct 191 subsectors and 1.0.1 release notes
- **Mapping validation**: verified every example against the official DMCS design specification and classification data (no structural changes)

### Notes

- **Structure unchanged**: classification remains 13 industries, 55 sectors, 191 subsectors; focus stayed on tooling and documentation accuracy

## [1.0.0] - 2025-11-08

### Added

- **Initial public release of DMCS v1.0**: established the baseline classification scope and guidance
  - **13 industries** covering traditional and digital economy segments
  - **55 sectors** providing coherent activity groupings
  - **191 subsectors** representing concrete business models
  - **GIC (01-12)** for traditional / real economy coverage
  - **DIC (13)** for blockchain and crypto-native organizations
  - **Materiality rule** defining ≥25-30% revenue or strategic designation threshold
  - **Extension namespace** (`DMCS-CUST`) for custom nodes under official parents
  - **Migration guidance** outlining mapping principles from GICS, ICB, TRBC, and NAICS

#### Industries

01. Energy
02. Basic Materials
03. Industrials
04. Consumer Discretionary
05. Consumer Staples
06. Healthcare
07. Financial Services
08. Real Estate
09. Technology
10. Communications & Media
11. Utilities
12. Government / Public / Education
13. Digital Assets & Blockchain

#### Key features

- Immutable IDs with hierarchical structure (II.SS.SSS)
- Digital-native design with first-class blockchain/crypto support
- Predictable governance model with structural releases as needed (typically 1-2×/year) and thematic updates as needed
- Full changelog commitment for version tracking
- Extension namespace (DMCS-CUST) for custom organization-specific classifications

#### SDKs and Tools

- Python SDK (`python-sdk/`) with bundled classification data
- FastAPI reference implementation (`api/`) for local use
- JSON and CSV exports of the full classification

#### Documentation

- Complete classification reference (classification.md)
- README with examples, materiality rules, and migration guidance
- Contributing guidelines (CONTRIBUTING.md)
- Apache 2.0 License for open-source distribution

### Notes

This release represents the foundational standard. Future structural releases will add new sectors/subsectors as the economy evolves, while maintaining ID stability and backward compatibility.

---

## Version Format

DMCS uses **semantic versioning**:

- **MAJOR.MINOR.PATCH** (e.g., 1.0.0)
  - **MAJOR**: Breaking changes to structure or governance
  - **MINOR**: New industries, sectors, or subsectors (structural releases)
  - **PATCH**: Label updates, documentation fixes, thematic additions

[1.1.2]: https://github.com/shadstradamus/DMCS/releases/tag/v1.1.2
[1.1.1]: https://github.com/shadstradamus/DMCS/releases/tag/v1.1.1
[1.1.0]: https://github.com/shadstradamus/DMCS/releases/tag/v1.1.0
[1.0.4]: https://github.com/shadstradamus/DMCS/releases/tag/v1.0.4
[1.0.3]: https://github.com/shadstradamus/DMCS/releases/tag/v1.0.3
[1.0.2]: https://github.com/shadstradamus/DMCS/releases/tag/v1.0.2
[1.0.1]: https://github.com/shadstradamus/DMCS/releases/tag/v1.0.1
[1.0.0]: https://github.com/shadstradamus/DMCS/releases/tag/v1.0.0
