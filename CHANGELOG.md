# Changelog

All notable changes to the DMCS (Dynamic Multi-Dimensional Classification Standard) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2025-11-08

### Added

- TypeScript SDK with normalized taxonomy types and metadata derivation
- GICS to DMCS mapping documentation (`mappings/gics-to-dmcs.md`)
- ICB to DMCS mapping documentation (`mappings/icb-to-dmcs.md`)
- TRBC to DMCS mapping documentation (`mappings/trbc-to-dmcs.md`)
- NAICS to DMCS mapping documentation (`mappings/naics-to-dmcs.md`)

### Fixed

- Corrected telecom subsector codes in all mapping files (`mappings/*.md`) so 10.01.001 = Mobile and 10.01.002 = Fixed-Line
- Updated design documentation (`Documentation/DMCS Documentation.txt`) to reflect the correct 191 subsectors and release notes for 1.0.1
- Verified every mapping example against the official DMCS design specification and taxonomy data (no structural changes)

### Notes

- Taxonomy structure remains 13 industries, 55 sectors, 191 subsectors; this patch release focuses on tooling and documentation accuracy

## [1.0.0] - 2025-11-08

### Added

**Initial public release of DMCS v1.0**

- **13 Industries** covering traditional and digital economy
- **55 Sectors** providing coherent activity groupings
- **191 Subsectors** representing concrete business models
- **P-TAX (01-12)**: Primary Taxonomy for traditional/real economy
- **D-TAX (13)**: Digital Asset Taxonomy for blockchain and crypto-native organizations
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

- Python SDK (`python-sdk/`) with bundled taxonomy data
- FastAPI reference implementation (`api/`) for local use
- JSON and CSV exports of the full taxonomy

#### Documentation

- Complete taxonomy reference (TAXONOMY.md)
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

[1.0.1]: https://github.com/yourusername/dmcs/releases/tag/v1.0.1
[1.0.0]: https://github.com/yourusername/dmcs/releases/tag/v1.0.0
