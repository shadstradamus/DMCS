# Changelog


## [1.3.3] — 2025-11-13
**Scope:** Brought Industry 13 (Digital & Onchain Economy) to parity with the rest of DMCS by formalizing infrastructure, market structure, application, and compliance segments.

### Highlights
- Completed the DLT infrastructure stack with explicit oracle, indexing, cross-chain, and DePIN layers.
- Added tokenization, OTC/prime, and market-making coverage so centralized venues reflect institutional desks.
- Introduced NFT, GameFi, social, and compliance/service segments so onchain experiences can be tracked end-to-end.

### Added
**DLT & Blockchain Infrastructure**
- `13.01.004.01` Oracles & Data Feeds — Standardizes off-chain data relays.
- `13.01.004.02` Indexing & Query Protocols — Protocol-level data/query networks.
- `13.01.004.03` Cross-ledger Messaging / Interop Layers — State-bridge infrastructure.
- `13.01.005.01` Financial Institution / Capital Markets DLT — Banking and securities rails.
- `13.01.005.02` Industry / Consortium DLT — Trade, supply-chain, and manufacturing consortia platforms.
- `13.01.006.01` Bridge & Routing Infrastructure — Value-transfer bridges and routers.
- `13.01.006.02` Cross-network Hubs / Layer-0 Frameworks — Parachain and hub-and-zone frameworks.
- `13.01.007.01` Compute DePIN (GPU / AI / Rendering) — Distributed compute networks.
- `13.01.007.02` Storage DePIN — Storage-focused networks (Filecoin, Arweave, etc.).
- `13.01.007.03` Connectivity / Wireless DePIN — Wireless/connectivity DePIN operators.
- `13.01.007.04` Sensing / Mapping DePIN — Mapping, sensing, and data-capture networks.

**Exchanges, Tokenization & Market Services**
- `13.02.005.01` Tokenized Funds & Investment Products — Fund and yield wrappers.
- `13.02.005.02` Tokenized Debt & Credit Instruments — Bond/credit tokenization platforms.
- `13.02.005.03` Tokenized Real Assets & RWAs — Real-world asset tokenization hubs.
- `13.02.005.04` Digital Securities Issuance & Platforms — STO and issuance venues.
- `13.02.006.01` OTC Desks — Principal OTC trading.
- `13.02.006.02` Prime Brokerage Services — Institutional leverage/custody hybrids.
- `13.02.007.01` Proprietary / Principal Market Makers — Balance-sheet liquidity providers.
- `13.02.007.02` Electronic / Algorithmic Market Makers — Quant/liquidity network operators.

**Onchain Applications & Services**
- `13.03.002.01` NFT Marketplaces, `13.03.002.02` NFT Collections & IP Owners, `13.03.002.03` NFT Infrastructure & Tooling — Separates venues, IP, and tooling.
- `13.03.003.01` Game Platforms & Protocols and `13.03.003.02` Game Titles & IP — Distinguishes platform operators from individual titles.
- `13.03.004.01` Social Graph Protocols, `13.03.004.02` Creator Monetization Protocols, `13.03.004.03` Social Token & Fan Platforms — Covers the onchain social stack.
- `13.03.005.01` Consumer DePIN Applications, `13.03.005.02` Enterprise / API DePIN Applications, `13.03.005.03` DePIN Marketplaces & Aggregators — Differentiates end-user vs. enterprise DePIN demand.
- `13.04.001.01` Explorers & Basic Analytics and `13.04.001.02` Institutional Analytics & Risk Platforms — Tiered blockchain data coverage.
- `13.04.002.01` Smart Contract Audits & Code Review and `13.04.002.02` Monitoring, Bug Bounties & Incident Response — Completes the security lifecycle.
- `13.04.003.01` Identity & KYC Providers and `13.04.003.02` Credential & Reputation Protocols — Identity/attestation stack.
- `13.04.004.01` Travel Rule & Transaction Screening Providers and `13.04.004.02` Chain Monitoring & Forensics Platforms — Compliance and investigations layer.

### Changed
- None.

### Impact
- Digital asset researchers get explicit IDs for every stage of the infrastructure → market → application → compliance workflow.
- Tokenization, OTC, and prime brokerage desks can be benchmarked without shoehorning them into legacy finance nodes.
- DePIN builders now have separate infra vs. application homes, reducing mapping friction for hybrid networks.

### Rationale highlights
- **DLT infrastructure clarity:** Breaking out oracles, indexing, bridges, and Layer-0 hubs keeps L1/L2 discussions focused on economics instead of plumbing.
- **Institutional-grade markets:** Tokenized funds, debt, RWAs, OTC, and prime brokerage entries mirror how institutional desks book revenue.
- **Onchain experience taxonomy:** Dedicated NFT, GameFi, social, and DePIN application segments help downstream product teams track usage cohorts.
- **Risk & compliance coverage:** Analytics, audits, identity, and travel-rule providers finally have official DMCS homes, simplifying regulatory reporting.

### Scale snapshot
| Total entries | Industries | Sectors | Subsectors | Segments |
| --- | --- | --- | --- | --- |
| 458 | 14 | 60 | 241 | 143 |

---

## [1.3.2] — 2025-11-13
**Scope:** Segment expansion across energy contractors, automotive systems, hospitality, and beverages.

### Highlights
- Dedicated IDs for upstream energy services and equipment makers.
- Tiered view of the automotive stack, separating mass, premium, EV, and autonomy plays.
- Cruise lines, hotel platforms, and alcohol houses get their own points of reference.

### Added
**Energy & Infrastructure**
- `01.01.004.01` Oilfield Services — Contract drillers, completion crews, and reservoir partners.
- `01.01.004.02` Oilfield Equipment & Drilling — Capital equipment manufacturers serving upstream projects.

**Automotive Value Chain**
- `04.01.001.01` Mass Market Automakers — High-volume OEMs (Toyota, Ford, VW).
- `04.01.001.02` Premium & Luxury Automakers — Performance and luxury marques.
- `04.01.002.01` Tires & Rubber — Tire majors and rubber suppliers.
- `04.01.002.02` General Parts & Systems — Tier-1 and Tier-2 drivetrain, chassis, and electronics specialists.
- `04.01.003.01` EV & New Mobility OEMs — Battery-electric and advanced mobility manufacturers.
- `04.01.003.02` EV Charging & Infrastructure — Charging networks, hardware vendors, and platform operators.
- `04.01.003.03` Autonomous & Mobility Tech — ADAS, autonomy stacks, and mobility software.

**Hospitality & Beverages**
- `04.04.001.01` Hotels & Resorts — Global lodging groups and branded resorts.
- `04.04.001.02` Cruise Lines — Ocean and river cruise operators.
- `05.01.002.01` Alcoholic Beverages — Beer, wine, and spirits producers.

### Changed
- `04.04.001` retitled to **Hotels & Cruise Lines** so the subsector clearly spans both asset classes before segment detail.

### Impact
- Research teams can filter peers using the new segment IDs instead of manual keyword screens.
- Legacy IDs stay untouched; the fresh entries begin aggregating data from this release date forward.

### Rationale
- Splits energy contractors from capital equipment suppliers to reflect how upstream revenue is reported.
- Highlights the diverging strategies inside the automotive ecosystem (volume, premium, EV, autonomy).
- Gives hospitality and beverage specialists discrete buckets for benchmarking capital intensity and demand cycles.

### Scale snapshot
| Total entries | Industries | Sectors | Subsectors | Segments |
| --- | --- | --- | --- | --- |
| 420 | 14 | 60 | 241 | 105 |

---

## [1.3.1] — 2025-11-13
**Scope:** Pre-release snapshot that lifted automotive, hospitality, and beverage coverage before the segment totals locked.

### Highlights
- Paired automotive manufacturing tiers with supplier depth so analysts can split OEM comps instantly.
- Added cruise and hotel identification ahead of the rename finalized in 1.3.2.
- Rounded out beverages by distinguishing alcoholic vs. non-alcoholic portfolios.

### Added
- Same twelve automotive, hospitality, and beverage segments introduced in 1.3.2 plus `05.01.002.02` **Non-Alcoholic Beverages** for soda, juice, and hydration brands.

### Changed
- `04.04.001` renamed to **Hotels & Cruise Lines** to capture the combined leisure footprint.

### Impact
- Provided early IDs for partners preparing datasets prior to the 1.3.2 lock.

### Scale snapshot
| Total entries | Industries | Sectors | Subsectors | Segments |
| --- | --- | --- | --- | --- |
| 420 | 14 | 60 | 241 | 105 |

---

## [1.3.0] — 2025-11-13
**Scope:** Retail, infrastructure, and education refresh focused on missing subsectors and mislabeled groups.

### Highlights
- Eleven new subsectors give retail, infrastructure, and software analysts the coverage they were missing.
- Label clean-up removes ambiguous wording around home improvement, independent power, and professional education.

### Added
- `03.04.005` Waste & Environmental Services — Recycling, disposal, and environmental contractors.
- `04.05.004` Consumer Electronics Retail — Big-box and specialty electronics stores.
- `04.05.005` Off-Price & Apparel Retail — Discount and apparel-first retailers.
- `04.05.006` Automotive Retail & Parts — Vehicle dealers and aftermarket parts retailers.
- `04.05.007` Home Furnishings Retail — Furnishings-focused chains and marketplaces.
- `04.05.008` Miscellaneous & Other Specialty Retail — Specialty formats without existing homes.
- `09.01.009` EdTech Platforms & Services — Learning platforms and services providers.
- `08.04.005` Healthcare & Social Properties — Healthcare REITs and care-focused portfolios.
- `08.04.006` Farmland & Timberland — Agricultural and timber asset owners.
- `03.03.007` Transportation Infrastructure (Owners & Operators) — Toll roads, airports, seaports.
- `03.02.005` B2B Industrial Marketplaces — Industrial goods exchanges.

### Changed
- `04.05.003` → **Home Improvement Retail** for clarity versus other specialty formats.
- `11.04.002` → **Independent Power Producers** to reflect generation-focused businesses.
- `12.02.003` → **Professional & Continuing Education** to match coverage boundaries.
- `03.02.004` → **Industrial Conglomerates & Diversified** to distinguish from holding companies.

### Impact
- Retail analysts gain clean separation across every major storefront model.
- Infrastructure coverage now distinguishes asset owners from service operators.
- Education and industrial users see clearer taxonomy messaging, improving classification accuracy.

### Scale snapshot
| Total entries | Industries | Sectors | Subsectors | Segments |
| --- | --- | --- | --- | --- |
| 407 | 14 | 60 | 241 | 92 |

## [1.2.2] — 2025-11-12
**Scope:** Introduced a dedicated Tobacco & Cannabinoid Products sector plus clarity fixes across infrastructure, marketing tech, and enterprise software.

### Highlights
- Full-stack nicotine and cannabis coverage: new sector, six subsectors, five segments, and a specialty retail segment.
- Asset vs. service boundaries reinforced for carbon, data centers, and telecom infrastructure.
- Label conflicts removed in marketing, SaaS, and analytics so each ID represents a unique concept.

### Added
- `05.05` Tobacco & Cannabinoid Products industry tree with subsectors `05.05.001`–`05.05.006` covering combustible, reduced-risk, smokeless, vertically integrated cannabis, product brands, and cultivation supply chain.
- Segments: `05.05.002.01` Heated Tobacco Systems, `05.05.002.02` Closed-Pod Vapor, `05.05.002.03` Open-System Vapor, `05.05.006.01` Cultivation, `05.05.006.02` Extraction/Processing.
- `05.03.003.01` Specialty Tobacco & Vape Retail to capture retail storefronts.

### Changed
- Asset ownership clarifications: `11.04.003` → **Carbon Project Development & Services**, `08.04.001` → **Data Center REITs & Assets**, `09.03.003` → **Data Center Colocation & Services**, `08.04.003` → **Cell Tower REITs & Assets**, `08.04.004` → **Fiber Infrastructure REITs & Assets**.
- Marketing & software de-duplication: `10.04` → **Advertising & Marketing Technology**, `10.04.002` → **Marketing Automation & Data Platforms**, `09.01.001.02` → **Supply Chain & Procurement Software**, `09.01.002.01` → **Collaboration & Productivity**, `09.01.002.02` → **General Business Management**, `09.01.004.03` → **Observability & Monitoring Platforms**.

### Impact
- Nicotine and cannabis ecosystem now has a complete hierarchy for regulatory and financial analysis.
- Investors can distinguish asset-heavy REIT models from service operators without cross-referencing guidance notes.
- Software IDs are unique, preventing overlap between CRM, collaboration, and analytics categories.

### Scale snapshot
| Total entries | Industries | Sectors | Subsectors | Segments |
| --- | --- | --- | --- | --- |
| 396 | 14 | 60 | 230 | 92 |

---

## [1.2.1] — 2025-11-12
**Scope:** Eliminated "odd couples" in the taxonomy and added depth to biotech, cybersecurity, and digital media segments.

### Highlights
- Two new subsectors (ESG Data Platforms, Fiber Infrastructure) create clear homes for emerging providers.
- Eighteen new segments expand biotech pipelines, SaaS security, deep-tech research, and consumer internet platforms.
- Key subsectors/segments were split or renamed to resolve overlapping labels.

### Added
- `07.03.007` ESG Data Platforms and `08.04.004` Fiber Infrastructure.
- Biotech & life sciences segments (`06.01.003.01`–`06.01.003.04`).
- Enterprise software & security (`09.01.003.04`, `09.01.005.01`–`09.01.005.03`).
- Emerging tech & research (`09.04.003.01`–`09.04.003.04`).
- Consumer web platforms (`10.03.004.01` Search Engines, `10.03.004.02` Multi-Service Digital Ecosystems).

### Changed
- Subsector splits: Carbon Exchanges separated from ESG data; Cell Towers split from digital infra bundles.
- Renames: `09.04.003` → **Emerging & Deep Tech** plus refreshed segment names for security and IAM coverage.

### Impact
- Total entries reached 381 (+23 from prior release).
- Coverage teams gained clean distinctions for ESG data vendors, tower owners, and next-gen tech labs.

### Scale snapshot
| Total entries | Industries | Sectors | Subsectors | Segments |
| --- | --- | --- | --- | --- |
| 381 | 14 | 60 | 232 | 74 |

---

## [1.2.0] — 2025-11-11
**Scope:** Introduced Industry 14 (Professional & Business Services) and broadened life sciences, PropTech, industrial services, and vertical SaaS coverage.

### Highlights
- Comprehensive services industry tree (consulting, outsourcing, data services) now lives under Industry 14.
- Life sciences tools, CRO/CDMO services, PropTech platforms, and vertical SaaS all gained dedicated nodes.

### Added
- Industry 14 with sectors `14.01`–`14.03`, including consulting, legal, staffing, BPO, and data services branches.
- `06.05` Life Sciences Tools & Services (equipment, consumables, CROs/CDMOs).
- `08.03.004` PropTech & Real Estate Platforms plus residential/commercial/management/iBuyer segments.
- `03.04.004` Industrial Maintenance & Services and `09.01.008` Vertical Industry SaaS.

### Changed
- `10.02.005` retitled to **Video Games & Interactive Media**.
- `03.04.003` split into Facility & Support Services vs. Industrial Maintenance & Services.

### Impact
- DMCS expanded to 14 industries, 59 sectors, 221 subsectors, 71 segments.
- Services-focused users finally have parity with capital-intensive industries inside the taxonomy.

### Scale snapshot
| Total entries | Industries | Sectors | Subsectors | Segments |
| --- | --- | --- | --- | --- |
| 365 | 14 | 59 | 221 | 71 |

---

## [1.1.3] — 2025-11-11
**Scope:** Media & communications refresh with new entertainment segments, broadcasting depth, and supporting residential real estate tweaks.

### Highlights
- Four Film/TV segments capture production through distribution.
- Broadcasting & Networks now includes separate IDs for TV, radio, cable providers, and network programming.
- Residential real estate and hospitality terminology tightened.

### Added
- `10.02.001.01`–`10.02.001.04` Film/TV segments and `10.02.002.01`–`10.02.002.04` Broadcasting subsegments.

### Changed
- `08.03.003` → **Facilities & Property Operations**; residential property nomenclature refreshed.
- `10.02.001`/`10.02.002`/`10.02.005` renamed to align with their expanded scopes.
- Documentation and crosswalks updated to match the new names.

### Impact
- Media analysts can distinguish monetization models across production, distribution, and broadcasting.
- Real estate readers get clearer boundaries between facilities operations and residential specialties.

### Scale snapshot
| Total entries | Industries | Sectors | Subsectors | Segments |
| --- | --- | --- | --- | --- |
| 338 | 13 | 55 | 205 | 65 |

---

## [1.1.2] — 2025-11-11
**Scope:** Technology hardware overhaul plus new green/digital economy subsectors.

### Highlights
- Semiconductor supply chain split across design, manufacturing, equipment, materials, and devices.
- AI & ML platforms gained deeper segmentation for foundation models, APIs, and applied apps.
- Added DePIN, carbon, hydrogen, and betting/iGaming subsectors.

### Added
- `09.02.001`–`09.02.007` semiconductor subsectors plus new device segments.
- `09.01.007.01`–`09.01.007.03` AI platform segments.
- New subsectors for betting, carbon, CCUS, DePIN, hydrogen equipment, and digital carriers.

### Impact
- Total subsectors climbed to 205; segments to 49.
- Mapping guides and exports updated so hardware investors and DePIN teams see accurate categories.

### Scale snapshot
| Total entries | Industries | Sectors | Subsectors | Segments |
| --- | --- | --- | --- | --- |
| 322 | 13 | 55 | 205 | 49 |

---

## [1.1.1] — 2025-11-10
**Scope:** Introduced lifecycle tracking metadata and SDK helpers without changing node counts.

### Highlights
- Every node now carries `since` and `status` fields (active/deprecated/retired).
- Python and TypeScript SDKs expose lifecycle helpers for filtering active nodes.
- CSV schema expanded to include temporal columns.

### Impact
- Users can snapshot historical states or filter to active-only nodes with a single call.
- Lifecycle metadata sets the foundation for future deprecations without ID churn.

### Scale snapshot
| Total entries | Industries | Sectors | Subsectors | Segments |
| --- | --- | --- | --- | --- |
| 295 | 13 | 55 | 193 | 34 |

---

## [1.1.0] — 2025-11-10
**Scope:** First major segment expansion (34 new segments) plus deeper Digital & Onchain coverage.

### Highlights
- Software, hardware, and DIC industries gained formal segment IDs (DevTools, APIs, smartphones, stablecoins, DeFi primitives, etc.).
- Digital Assets & Blockchain industry renamed to **Digital & Onchain Economy** and restructured across four sectors.

### Added
- 34 official segments spanning enterprise software (`09.01`), hardware devices (`09.02`), and Digital & Onchain (`13.xx`).
- `13.01.005` Enterprise/Permissioned DLT and `13.01.006` Cross-chain Infrastructure subsectors.

### Changed
- DIC sector tree reorganized (DLT infrastructure, centralized trading, onchain applications, services/security).

### Impact
- Total subsectors reached 193 with the first set of formal DMCS segments.
- SDKs/export formats updated to surface segment metadata consistently.

### Scale snapshot
| Total entries | Industries | Sectors | Subsectors | Segments |
| --- | --- | --- | --- | --- |
| 295 | 13 | 55 | 193 | 34 |

---

## [1.0.4] — 2025-11-09
**Scope:** Terminology cleanup aligning everything on "classification" language.

### Highlights
- Replaced legacy "taxonomy" and P/D-TAX references with GIC/DIC naming throughout.
- Renamed SDK methods, statistics labels, and documentation accordingly.

### Impact
- Ensures all downstream consumers speak the same language (GIC/DIC) before the segment expansion landed in 1.1.0.

### Scale snapshot
| Total entries | Industries | Sectors | Subsectors | Segments |
| --- | --- | --- | --- | --- |
| 259 | 13 | 55 | 191 | 0 |

---

## [1.0.3] — 2025-11-08
**Scope:** Governance and security readiness release.

### Highlights
- Added `SECURITY.md` and GitHub issue templates for structured feedback.
- Synced artifact versions and contributing language to the 1.0.3 tag.

### Impact
- No structural changes; classification stayed at 13 industries, 55 sectors, 191 subsectors while community processes leveled up.

### Scale snapshot
| Total entries | Industries | Sectors | Subsectors | Segments |
| --- | --- | --- | --- | --- |
| 259 | 13 | 55 | 191 | 0 |

---

## [1.0.2] — 2025-11-08
**Scope:** Public website + documentation showcase.

### Highlights
- Shipped the public `Website/` experience with live data demos.
- Added docs explaining how to navigate the new experience.

### Impact
- Classification data stayed static; focus was on outreach and usability.

### Scale snapshot
| Total entries | Industries | Sectors | Subsectors | Segments |
| --- | --- | --- | --- | --- |
| 259 | 13 | 55 | 191 | 0 |

---

## [1.0.1] — 2025-11-08
**Scope:** TypeScript SDK debut plus mapping documentation.

### Highlights
- Published TS SDK with normalized types and helper utilities.
- Added mapping guides (GICS, ICB, TRBC, NAICS) so adopters can crosswalk from existing standards.
- Fixed telecom mapping references and refreshed documentation stats.

### Impact
- Structure remained 13 industries / 55 sectors / 191 subsectors; tooling accuracy improved.

### Scale snapshot
| Total entries | Industries | Sectors | Subsectors | Segments |
| --- | --- | --- | --- | --- |
| 259 | 13 | 55 | 191 | 0 |

---

## [1.0.0] — 2025-11-08
**Scope:** Initial public release establishing DMCS as a 13-industry, 55-sector, 191-subsector standard with optional segment namespace.

### Highlights
- Defined GIC (traditional) and DIC (digital) pillars, materiality rule, and immutable ID scheme.
- Provided JSON/CSV exports, SDKs, and governance docs so orgs could adopt DMCS out of the gate.

### Impact
- Set the baseline the rest of the changelog builds on; all subsequent releases focus on refinement, depth, and clarity.

### Scale snapshot
| Total entries | Industries | Sectors | Subsectors | Segments |
| --- | --- | --- | --- | --- |
| 259 | 13 | 55 | 191 | 0 |

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

All notable changes to the DMCS (Dynamic Multi-Dimensional Classification Standard) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
