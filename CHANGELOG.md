# Changelog

All notable changes to the DMCS (Dynamic Multi-Dimensional Classification Standard) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

- CSV format expanded from 7 to 9 columns: added `since` and `status` fields
- Updated build scripts to handle optional lifecycle fields (backwards compatible)
- Enhanced README with "Node Lifecycle Tracking" section explaining immutability guarantees

### Technical

- All nodes default to `status='active'` in current release
- IDs remain immutable; lifecycle tracking enables future deprecation (e.g., dying industries like Cable TV)
- Historical data validity preserved through temporal metadata
- Both SDKs maintain full backwards compatibility with v1.1.0 structure

## [1.1.0] - 2025-11-10

### Added

- Introduced **34 official segments** to form the optional fourth hierarchy level (`II.SS.SSS.SS`)
  - **13 GIC segments** in Technology sector (09.01) covering enterprise software subsegments (ERP, CRM, HCM, Cybersecurity, DevTools, etc.)
  - **18 DIC segments** across Digital & Onchain Economy covering L1/L2 infrastructure, exchanges, custody, stablecoins, and DeFi protocols
  - **3 consumer device segments** (Smartphones, PCs/Tablets, Wearables) under 09.02.002
- Added **2 new subsectors** to Industry 13:
  - `13.01.005 - Enterprise / Permissioned DLT` for Hyperledger, Corda, Quorum deployments
  - `13.01.006 - Cross-chain Infrastructure` for Polkadot, Cosmos, LayerZero, Wormhole

### Changed

- **Industry 13 renamed**: "Digital Assets & Blockchain" → **"Digital & Onchain Economy"**
- **Sector structure enhanced** with detailed DIC taxonomy:
  - `13.01 - DLT & Blockchain Infrastructure` (6 subsectors, 6 segments)
  - `13.02 - Centralized Exchanges & Trading` (7 subsectors, 10 segments)
  - `13.03 - Onchain Applications & Experiences` (4 subsectors, 4 segments)
  - `13.04 - Onchain Services, Security & Compliance` (4 subsectors)
- Expanded from **v1.0.4 base**: 13 industries, 55 sectors, 191 subsectors → **193 subsectors + 34 segments**
- Updated JSON and CSV exports, Python/TypeScript SDKs to surface segment metadata with proper field ordering
- Enhanced SDK statistics to report segment counts (now shows `segments: 34`)

### Fixed

- **Critical fix**: Moved consumer device segments (Smartphones, PCs/Tablets, Wearables) from incorrect subsector `09.03.001 IT Consulting` to correct subsector `09.02.002 Consumer Devices & Ecosystems`
- Field ordering now strictly follows specification: `label → id → level → segment_code → parent_id → hierarchy → classification`
- All 295 nodes validated with zero duplicates and proper parent-child relationships

## [1.0.4] - 2025-11-09

### Changed

- **Major terminology update**: Renamed "Taxonomy" → "Classification" across entire codebase
- Renamed field names: `P-TAX` → `GIC` (General Industry Classification), `D-TAX` → `DIC` (Digital Industry Classification)
- Updated TypeScript SDK: `getPTax()` → `getGIC()`, `getDTax()` → `getDIC()`
- Updated stats fields: `p_tax_industries` → `gic_industries`, `d_tax_industries` → `dic_industries`
- Renamed all files: `taxonomy.json` → `classification.json`, `taxonomy.py` → `classification.py`, `TAXONOMY.md` → `CLASSIFICATION.md`
- Updated all documentation, READMEs, and code comments to reflect new terminology
- Rebuilt browser bundle with corrected classification field structure

### Fixed

- TypeScript SDK compilation errors due to type capitalization inconsistencies
- Website badge display now correctly shows purple DIC badges for Digital Assets industry
- Data flow alignment between JSON schema and consuming code

## [1.0.3] - 2025-11-08

### Added

- Security policy (`SECURITY.md`) with GitHub private vulnerability reporting workflow
- GitHub issue templates for general issues, classification proposals, mapping updates, and docs/SDK enhancements

### Changed

- Bumped all published artifacts (classification data, SDK metadata, documentation) to version 1.0.3 for consistency with public releases
- Aligned governance wording across README and contributing guide with current release cadence

### Notes

- No structural classification changes; classification remains 13 industries, 55 sectors, 191 subsectors

## [1.0.2] - 2025-11-08

### Added

- Public DMCS website (`Website/`) with live market data feeds, AI-assisted classification demo, and product overview
- Additional documentation highlighting web experience features and usage guidance

### Notes

- classification data unchanged; release focused on outreach and reference experience

## [1.0.1] - 2025-11-08

### Added

- TypeScript SDK with normalized classification types and metadata derivation
- GICS to DMCS mapping documentation (`mappings/gics-to-dmcs.md`)
- ICB to DMCS mapping documentation (`mappings/icb-to-dmcs.md`)
- TRBC to DMCS mapping documentation (`mappings/trbc-to-dmcs.md`)
- NAICS to DMCS mapping documentation (`mappings/naics-to-dmcs.md`)

### Fixed

- Corrected telecom subsector codes in all mapping files (`mappings/*.md`) so 10.01.001 = Mobile and 10.01.002 = Fixed-Line
- Updated design documentation (`Documentation/DMCS Documentation.txt`) to reflect the correct 191 subsectors and release notes for 1.0.1
- Verified every mapping example against the official DMCS design specification and classification data (no structural changes)

### Notes

- classification structure remains 13 industries, 55 sectors, 191 subsectors; this patch release focuses on tooling and documentation accuracy

## [1.0.0] - 2025-11-08

### Added

**Initial public release of DMCS v1.0**

- **13 Industries** covering traditional and digital economy
- **55 Sectors** providing coherent activity groupings
- **191 Subsectors** representing concrete business models
- **GIC (01-12)**: General Industry Classification for traditional/real economy
- **DIC (13)**: Digital Industry Classification for blockchain and crypto-native organizations
- **Materiality rule**: Secondary classification threshold (≥25-30% revenue or strategic designation)
- **Extension namespace** (DMCS-CUST): Custom nodes under official parents
- **Migration guidance**: Mapping principles from GICS, ICB, TRBC, NAICS

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

[1.1.1]: https://github.com/shadstradamus/DMCS/releases/tag/v1.1.1
[1.1.0]: https://github.com/shadstradamus/DMCS/releases/tag/v1.1.0
[1.0.4]: https://github.com/shadstradamus/DMCS/releases/tag/v1.0.4
[1.0.3]: https://github.com/shadstradamus/DMCS/releases/tag/v1.0.3
[1.0.2]: https://github.com/shadstradamus/DMCS/releases/tag/v1.0.2
[1.0.1]: https://github.com/shadstradamus/DMCS/releases/tag/v1.0.1
[1.0.0]: https://github.com/shadstradamus/DMCS/releases/tag/v1.0.0
