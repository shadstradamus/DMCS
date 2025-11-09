# NAICS to DMCS Mapping

Mapping from North American Industry Classification System (NAICS) to DMCS taxonomy.

## About NAICS

NAICS is the standard used by US, Canada, and Mexico for classifying business establishments. It's used for government statistics, economic analysis, and regulatory compliance. The system has 20 sectors, 99 subsectors, 311 industry groups, and 709 NAICS industries.

**NAICS Sectors (2-digit):**
- 11 - Agriculture, Forestry, Fishing and Hunting
- 21 - Mining, Quarrying, and Oil and Gas Extraction
- 22 - Utilities
- 23 - Construction
- 31-33 - Manufacturing
- 42 - Wholesale Trade
- 44-45 - Retail Trade
- 48-49 - Transportation and Warehousing
- 51 - Information
- 52 - Finance and Insurance
- 53 - Real Estate and Rental and Leasing
- 54 - Professional, Scientific, and Technical Services
- 55 - Management of Companies and Enterprises
- 56 - Administrative and Support and Waste Management Services
- 61 - Educational Services
- 62 - Health Care and Social Assistance
- 71 - Arts, Entertainment, and Recreation
- 72 - Accommodation and Food Services
- 81 - Other Services (except Public Administration)
- 92 - Public Administration

## High-Level Sector Mapping

| NAICS Code | NAICS Sector | DMCS Industry | Notes |
|------------|--------------|---------------|-------|
| 11 | Agriculture, Forestry, Fishing and Hunting | 02 (Basic Materials) | DMCS 02.04 Agriculture & Forestry |
| 21 | Mining, Quarrying, and Oil and Gas Extraction | 01 (Energy) + 02 (Basic Materials) | Split: 01 for oil/gas, 02 for mining |
| 22 | Utilities | 11 (Utilities) | Direct mapping |
| 23 | Construction | 03 (Industrials) | DMCS 03.04 Construction & Engineering |
| 31-33 | Manufacturing | 02-06, 09 (varies by product) | Manufacturing spans multiple DMCS industries |
| 42 | Wholesale Trade | 03 (Industrials) | DMCS 03.02 Industrial & Commercial Equipment |
| 44-45 | Retail Trade | 04-05 (Consumer Discretionary/Staples) | Split by product type |
| 48-49 | Transportation and Warehousing | 03 (Industrials) | DMCS 03.03 Transportation & Logistics |
| 51 | Information | 09-10 (Technology / Communications & Media) | Split by media vs software |
| 52 | Finance and Insurance | 07 (Financial Services) | Direct mapping with subsector detail |
| 53 | Real Estate and Rental and Leasing | 08 (Real Estate) | Direct mapping |
| 54 | Professional, Scientific, and Technical Services | 09 (Technology) | DMCS 09.01 Software & Platforms |
| 55 | Management of Companies and Enterprises | 07 (Financial Services) | DMCS 07.02.003 Holding Companies |
| 56 | Administrative and Support Services | 03 (Industrials) | DMCS 03.02 Commercial Services |
| 61 | Educational Services | 12 (Government / Public / Education) | DMCS 12.03 Education |
| 62 | Health Care and Social Assistance | 06 (Healthcare) | Direct mapping |
| 71 | Arts, Entertainment, and Recreation | 04 (Consumer Discretionary) | DMCS 04.04 Leisure & Hospitality |
| 72 | Accommodation and Food Services | 04 (Consumer Discretionary) | DMCS 04.04 Leisure & Hospitality |
| 81 | Other Services | Varies | Case-by-case depending on activity |
| 92 | Public Administration | 12 (Government / Public / Education) | DMCS 12.01 Government & Public Sector |

## Detailed Industry Examples

### Mining, Quarrying, Oil & Gas (NAICS 21 → DMCS 01 + 02)

| NAICS Code | NAICS Industry | DMCS Primary | DMCS Secondary | Notes |
|------------|----------------|--------------|----------------|-------|
| 211120 | Crude Petroleum Extraction | 01.01.001 - Conventional Oil & Gas | - | Upstream crude producers |
| 211130 | Natural Gas Extraction | 01.01.001 - Conventional Oil & Gas | 01.01.002 - Unconventional / Shale | Add secondary when shale gas is material |
| 213111 | Drilling Oil and Gas Wells | 01.01.004 - Oilfield Services & Drilling | - | Contract drilling and services |
| 213112 | Support Activities for Oil and Gas Operations | 01.01.004 - Oilfield Services & Drilling | - | Well services and maintenance |
| 212111 | Bituminous Coal and Lignite Surface Mining | 02.01.001 - Diversified Mining | - | DMCS groups coal within Basic Materials |
| 212112 | Bituminous Coal Underground Mining | 02.01.001 - Diversified Mining | - | Underground coal operations |
| 212221 | Gold Ore Mining | 02.01.002 - Precious Metals | - | Gold mining |
| 212222 | Silver Ore Mining | 02.01.002 - Precious Metals | - | Silver mining |
| 212230 | Copper, Nickel, Lead, and Zinc Mining | 02.01.001 - Diversified Mining | - | Base metals move into diversified mining |
| 212299 | All Other Metal Ore Mining | 02.01.001 - Diversified Mining | - | Use DMCS-CUST for niche ores if needed |

### Utilities (NAICS 22 → DMCS 11)

| NAICS Code | NAICS Industry | DMCS Primary | DMCS Secondary | Notes |
|------------|----------------|--------------|----------------|-------|
| 221111 | Hydroelectric Power Generation | 11.01.001 - Generation | 01.04.001 - Utility-Scale Solar | Use 01.04.x secondaries for dedicated renewable assets |
| 221112 | Fossil Fuel Electric Power Generation | 11.01.001 - Generation | 11.01.003 - Retail Electric | Secondary when retail supply is ≥25% |
| 221113 | Nuclear Electric Power Generation | 11.01.001 - Generation | - | Nuclear generation assets |
| 221114 | Solar Electric Power Generation | 11.01.001 - Generation | 01.04.001 - Utility-Scale Solar | Solar operators combine utility + renewables |
| 221115 | Wind Electric Power Generation | 11.01.001 - Generation | 01.04.002 - Wind & Offshore Wind |  |
| 221116 | Geothermal Electric Power Generation | 11.01.001 - Generation | 01.04.003 - Bioenergy & Waste-to-Energy | Use geothermal-specific DMCS subsector |
| 221117 | Biomass Electric Power Generation | 11.01.001 - Generation | 01.04.003 - Bioenergy & Waste-to-Energy | Biomass aligns with DMCS bioenergy |
| 221210 | Natural Gas Distribution | 11.02.001 - Gas Utilities | 11.01.002 - Transmission & Distribution | Add secondary if owning electric wires |
| 221310 | Water Supply and Irrigation Systems | 11.03.001 - Water Supply | 11.03.002 - Wastewater Services | Include wastewater if material |
| 221320 | Sewage Treatment Facilities | 11.03.002 - Wastewater Services | 11.03.001 - Water Supply | Secondary when potable water operations exist |

### Information (NAICS 51 → DMCS 09 + 10)

| NAICS Code | NAICS Industry | DMCS Primary | DMCS Secondary | Notes |
|------------|----------------|--------------|----------------|-------|
| 511210 | Software Publishers | 09.01.002 - Enterprise SaaS | 09.01.001 - Application Software | Subscription vs license mix |
| 517311 | Wired Telecommunications Carriers | 10.01.002 - Fixed-Line & Broadband | 10.02.001 - TV & Streaming | Secondary for bundled video |
| 517312 | Wireless Telecommunications Carriers | 10.01.001 - Mobile Network Operators | - | Wireless carriers |
| 518210 | Data Processing, Hosting, and Related Services | 09.01.004 - Cloud Platforms / PaaS | 09.03.002 - Managed Services | Add managed services when operating customer workloads |
| 519130 | Internet Publishing and Broadcasting and Web Search Portals | 10.03.004 - Search & Digital Platforms | 10.03.001 - Social Networks | Pick based on primary engagement loop |
| 519190 | All Other Information Services | 09.01.005 - Data & Database Platforms | 10.03.002 - Creator / UGC Platforms | Split data vendors vs content platforms |

### Finance and Insurance (NAICS 52 → DMCS 07)

| NAICS Code | NAICS Industry | DMCS Primary | DMCS Secondary | Notes |
|------------|----------------|--------------|----------------|-------|
| 522110 | Commercial Banking | 07.01.001 - Retail Banking | 07.01.002 - Commercial / SME Lending | Add secondary for corporate-heavy mixes |
| 522120 | Savings Institutions | 07.01.001 - Retail Banking | - | Regional thrifts |
| 522130 | Credit Unions | 07.01.001 - Retail Banking | - | Cooperative retail banking |
| 522210 | Credit Card Issuing | 07.01.003 - Consumer Finance / Cards | - | Card issuers |
| 522220 | Sales Financing | 07.01.003 - Consumer Finance / Cards | - | Auto and point-of-sale finance |
| 522291 | Consumer Lending | 07.01.003 - Consumer Finance / Cards | - | Specialty consumer lenders |
| 522292 | Real Estate Credit | 07.01.003 - Consumer Finance / Cards | 07.01.002 - Commercial / SME Lending | Secondary when CRE lending dominates |
| 522310 | Mortgage and Nonmortgage Loan Brokers | 07.01.004 - Embedded / BaaS Lending | 07.01.003 - Consumer Finance / Cards | Brokers often power embedded credit |
| 523110 | Investment Banking and Securities Dealing | 07.03.003 - Investment Banking | 07.03.002 - Brokerage & Trading Venues | Split advisory vs execution |
| 523120 | Securities Brokerage | 07.03.002 - Brokerage & Trading Venues | 07.03.001 - Asset & Wealth Management | Add wealth secondary when AUM material |
| 523910 | Miscellaneous Intermediation | 07.03.002 - Brokerage & Trading Venues | 07.04.004 - Digital Payments | Use payments secondary for marketplaces |
| 523920 | Portfolio Management | 07.03.001 - Asset & Wealth Management | 07.03.005 - Digital Wealth / Robo | Add digital secondary for robo advisers |
| 523930 | Investment Advice | 07.03.001 - Asset & Wealth Management | - | Wealth advisory |
| 524113 | Direct Life Insurance Carriers | 07.02.001 - Life & Health Insurance | - | Life and annuity |
| 524114 | Direct Health and Medical Insurance Carriers | 07.02.001 - Life & Health Insurance | 06.03.002 - Managed Care & Payers | Include healthcare payer secondary when integrated |
| 524126 | Direct Property and Casualty Insurance Carriers | 07.02.002 - Property & Casualty | - | P&C underwriting |
| 524130 | Reinsurance Carriers | 07.02.003 - Reinsurance & Specialty | - | Reinsurance |
| 524210 | Insurance Agencies and Brokerages | 07.02.003 - Reinsurance & Specialty | - | Brokers and MGAs |
| 525910 | Open-End Investment Funds | 07.03.001 - Asset & Wealth Management | - | Fund complexes |
| 525920 | Trusts, Estates, and Agency Accounts | 07.03.001 - Asset & Wealth Management | - | Fiduciary services |

### Real Estate and Rental and Leasing (NAICS 53 → DMCS 08)

| NAICS Code | NAICS Industry | DMCS Primary | DMCS Secondary | Notes |
|------------|----------------|--------------|----------------|-------|
| 531110 | Lessors of Residential Buildings and Dwellings | 08.01.004 - Residential REITs | 08.04.002 - Student / Senior Housing | Choose secondary when specialized housing dominates |
| 531120 | Lessors of Nonresidential Buildings | 08.01.xxx - REIT (match asset class) | - | Map to 08.01.001-08.01.003 based on property type |
| 531190 | Lessors of Other Real Estate Property | 08.01.xxx - REIT (match asset class) | 08.02.003 - Mixed-Use Projects | Use mixed-use when portfolios blend asset types |
| 531210 | Offices of Real Estate Agents and Brokers | 08.03.001 - Brokerage & Advisory | 08.03.002 - Property Management | Add property management secondary when recurring |
| 531311 | Residential Property Managers | 08.03.002 - Property Management | - | Residential property managers |
| 531312 | Nonresidential Property Managers | 08.03.002 - Property Management | 08.03.001 - Brokerage & Advisory | Secondary for leasing brokerage |
| 531390 | Other Activities Related to Real Estate | 08.04.001 - Data Centers | 08.04.003 - Cell Towers & Digital Infra | Use the infrastructure subsector when relevant; otherwise select appropriate 08.03 service |
| 525930 | Real Estate Investment Trusts | 08.01.xxx - REIT (match asset class) | - | Select subsector per asset focus |

### Health Care and Social Assistance (NAICS 62 → DMCS 06)

| NAICS Code | NAICS Industry | DMCS Primary | DMCS Secondary | Notes |
|------------|----------------|--------------|----------------|-------|
| 621111 | Offices of Physicians (except Mental Health) | 06.03.001 - Hospitals & Clinics | 06.04.004 - Revenue Cycle / Admin Tech | Secondary when software-driven |
| 621112 | Offices of Physicians, Mental Health Specialists | 06.03.001 - Hospitals & Clinics | 06.04.001 - Telehealth Platforms | Use telehealth secondary for virtual-first providers |
| 621210 | Offices of Dentists | 06.03.001 - Hospitals & Clinics | - | Dental practices |
| 621310 | Offices of Chiropractors | 06.03.001 - Hospitals & Clinics | - | Outpatient chiropractic care |
| 621410 | Family Planning Centers | 06.03.001 - Hospitals & Clinics | - | Outpatient specialty clinics |
| 621420 | Outpatient Mental Health and Substance Abuse Centers | 06.03.001 - Hospitals & Clinics | 06.04.002 - Healthcare Data & Analytics | Secondary when analytics platforms offered |
| 621491 | HMO Medical Centers | 06.03.002 - Managed Care & Payers | 06.03.001 - Hospitals & Clinics | Integrated provider-payer systems |
| 621511 | Medical Laboratories | 06.03.003 - Labs & Imaging | - | Diagnostic labs |
| 621610 | Home Health Care Services | 06.03.001 - Hospitals & Clinics | 06.04.001 - Telehealth Platforms | Add telehealth secondary for remote monitoring |
| 621910 | Ambulance Services | 06.03.001 - Hospitals & Clinics | - | Emergency transport services |
| 622110 | General Medical and Surgical Hospitals | 06.03.001 - Hospitals & Clinics | - | Hospital operators |
| 622210 | Psychiatric and Substance Abuse Hospitals | 06.03.001 - Hospitals & Clinics | 06.04.002 - Healthcare Data & Analytics | Secondary if offering digital mental health platforms |
| 622310 | Specialty (except Psychiatric and Substance Abuse) Hospitals | 06.03.001 - Hospitals & Clinics | - | Specialty hospitals |
| 623110 | Nursing Care Facilities | 06.03.001 - Hospitals & Clinics | 06.03.002 - Managed Care & Payers | Use secondary when payer relationships drive economics |

### Professional, Scientific, and Technical Services (NAICS 54 → DMCS 09)

| NAICS Code | NAICS Industry | DMCS Primary | DMCS Secondary | Notes |
|------------|----------------|--------------|----------------|-------|
| 541511 | Custom Computer Programming Services | 09.03.001 - IT Consulting | 09.03.002 - Managed Services | Tailor secondary to managed operations |
| 541512 | Computer Systems Design Services | 09.03.001 - IT Consulting | 09.03.004 - Cybersecurity Services | Cyber secondary when security dominates |
| 541513 | Computer Facilities Management Services | 09.03.002 - Managed Services | 09.01.004 - Cloud Platforms / PaaS | Add cloud secondary for proprietary platforms |
| 541519 | Other Computer Related Services | 09.03.004 - Cybersecurity Services | 09.03.001 - IT Consulting | Use cybersecurity for MSSPs |

### Manufacturing (NAICS 31-33 → Various DMCS)

| NAICS Code | NAICS Industry | DMCS Primary | DMCS Secondary | Notes |
|------------|----------------|--------------|----------------|-------|
| 311111 | Dog and Cat Food Manufacturing | 05.01.001 - Packaged Foods | 05.01.004 - Snacks & Confectionery | Add secondary for treat-focused brands |
| 325412 | Pharmaceutical Preparation Manufacturing | 06.01.001 - Branded Pharma | 06.01.002 - Generics & Biosimilars | Companies often straddle both |
| 325620 | Toilet Preparation Manufacturing | 05.02.002 - Personal Care & Beauty | 05.02.001 - Household Products | Choose based on product line |
| 334111 | Electronic Computer Manufacturing | 09.02.002 - Consumer Devices & Ecosystems | 09.02.003 - Network & Telecom Equipment | Secondary for enterprise hardware |
| 334220 | Radio and Television Broadcasting and Wireless Communications Equipment | 09.02.003 - Network & Telecom Equipment | - | Communications hardware |
| 334413 | Semiconductor and Related Device Manufacturing | 09.02.001 - Semiconductors | - | Chip foundries and designers |
| 335110 | Electric Lamp Bulb and Part Manufacturing | 03.02.002 - Electrical Equipment | 03.02.004 - Diversified Industrials | Use secondary when broad product set |
| 336111 | Automobile Manufacturing | 04.01.001 - Automakers | 04.01.003 - EV & New Mobility | Secondary for EV-first OEMs |
| 336211 | Motor Vehicle Body Manufacturing | 04.01.002 - Auto Parts & Components | - | Auto body and parts suppliers |
| 336411 | Aircraft Manufacturing | 03.01.001 - Aerospace OEMs | 03.01.002 - Defense Systems | Added defense secondary when applicable |

### Retail Trade (NAICS 44-45 → DMCS 04 + 05)

| NAICS Code | NAICS Industry | DMCS Primary | DMCS Secondary | Notes |
|------------|----------------|--------------|----------------|-------|
| 441110 | New Car Dealers | 04.05.003 - Specialty Retail | 04.01.002 - Auto Parts & Components | Secondary for dealer-owned parts distribution |
| 442110 | Furniture Stores | 04.05.003 - Specialty Retail | 04.02.002 - Furniture & Home Décor | Use product subsector as secondary when manufacturing |
| 444110 | Home Centers | 04.05.001 - Multiline Retail | 04.05.003 - Specialty Retail | Mix of broad retail plus category specialization |
| 445110 | Supermarkets and Other Grocery Stores | 05.03.001 - Supermarkets & Hypermarkets | 05.03.003 - Convenience & Drug Retail | Secondary for c-store formats |
| 446110 | Pharmacies and Drug Stores | 05.03.003 - Convenience & Drug Retail | - | Drugstores and pharmacies |
| 448110 | Men's Clothing Stores | 04.05.003 - Specialty Retail | 04.03.001 - Apparel Brands | Add brand secondary when vertical integration |
| 448120 | Women's Clothing Stores | 04.05.003 - Specialty Retail | 04.03.001 - Apparel Brands | Same rationale as above |
| 451110 | Sporting Goods Stores | 04.05.003 - Specialty Retail | 04.03.002 - Sportswear & Footwear | Secondary for own-brand apparel |
| 452311 | Warehouse Clubs and Supercenters | 05.03.002 - Discount & Club Stores | 05.03.001 - Supermarkets & Hypermarkets | Secondary when grocery share high |
| 454111 | Electronic Shopping | 04.05.002 - Online Marketplaces | 10.03.004 - Search & Digital Platforms | Secondary for platform marketplaces |
| 454112 | Electronic Auctions | 04.05.002 - Online Marketplaces | 10.03.001 - Social Networks | Social commerce as secondary |
| 454113 | Mail-Order Houses | 04.05.002 - Online Marketplaces | - | Catalog and direct-to-consumer |

### Transportation and Warehousing (NAICS 48-49 → DMCS 03)

| NAICS Code | NAICS Industry | DMCS Primary | DMCS Secondary | Notes |
|------------|----------------|--------------|----------------|-------|
| 481111 | Scheduled Passenger Air Transportation | 03.03.005 - Airlines | - | Passenger carriers |
| 481112 | Scheduled Freight Air Transportation | 03.03.003 - Air Freight & Cargo | - | Dedicated air freight |
| 481211 | Nonscheduled Chartered Passenger Air Transportation | 03.03.005 - Airlines | 03.03.003 - Air Freight & Cargo | Use freight secondary if mixed operations |
| 481212 | Nonscheduled Chartered Freight Air Transportation | 03.03.003 - Air Freight & Cargo | - | Charter cargo operators |
| 482111 | Line-Haul Railroads | 03.03.001 - Rail & Transit | - | Rail operators |
| 483111 | Deep Sea Freight Transportation | 03.03.006 - Container & Liner Shipping | - | Ocean freight |
| 484110 | General Freight Trucking, Local | 03.03.002 - Trucking & Haulage | - | Local trucking |
| 484121 | General Freight Trucking, Long-Distance, Truckload | 03.03.002 - Trucking & Haulage | 03.03.004 - Parcel & Courier | Add secondary for parcel mix |
| 486110 | Pipeline Transportation of Crude Oil | 01.02.001 - Pipelines | 01.02.002 - LNG & Storage | Secondary for storage-heavy operators |
| 486210 | Pipeline Transportation of Natural Gas | 01.02.001 - Pipelines | - | Gas pipelines |
| 492110 | Couriers and Express Delivery Services | 03.03.004 - Parcel & Courier | 04.07.003 - Last-Mile Delivery Platforms | Use DMCS platform secondary when app-based |
| 493110 | General Warehousing and Storage | 03.03.002 - Trucking & Haulage | 03.03.004 - Parcel & Courier | Map based on logistics integration |

### Public Administration (NAICS 92 → DMCS 12)

| NAICS Code | NAICS Industry | DMCS Primary | DMCS Secondary | Notes |
|------------|----------------|--------------|----------------|-------|
| 921110 | Executive Offices | 12.01.001 - Central / Federal | 12.01.002 - State / Regional | Add secondary when state-level authority |
| 921120 | Legislative Bodies | 12.01.001 - Central / Federal | 12.01.003 - Municipal Services | Secondary for municipal legislatures |
| 921130 | Public Finance Activities | 12.01.001 - Central / Federal | 12.04.002 - Development Agencies | Secondary for development finance focus |
| 921140 | Executive and Legislative Offices, Combined | 12.01.001 - Central / Federal | 12.01.002 - State / Regional | Pick based on jurisdiction |
| 921150 | American Indian and Alaska Native Tribal Governments | 12.01.002 - State / Regional | 12.01.003 - Municipal Services | Tribal governance aligns with regional authority |
| 922110 | Courts | 12.01.001 - Central / Federal | 12.01.003 - Municipal Services | Select by court level |
| 922120 | Police Protection | 12.03.001 - Emergency & Response | 12.03.003 - Private Defense / Public Safety Contractors | Secondary when services are contracted |
| 922130 | Legal Counsel and Prosecution | 12.01.001 - Central / Federal | 12.03.002 - Contracted Gov Services | Secondary when outsourced |
| 922140 | Correctional Institutions | 12.01.002 - State / Regional | 12.03.002 - Contracted Gov Services | Choose secondary when private operators involved |
| 922150 | Parole Offices and Probation Offices | 12.01.002 - State / Regional | - | State-administered justice services |
| 922160 | Fire Protection | 12.03.001 - Emergency & Response | - | Fire and emergency responders |
| 923110 | Administration of Education Programs | 12.02.001 - K-12 Operators | 12.02.002 - Higher Education | Assign based on education level |
| 923120 | Administration of Public Health Programs | 12.01.001 - Central / Federal | 06.03.002 - Managed Care & Payers | Secondary when acting as payer |
| 924110 | Administration of Air and Water Resource and Solid Waste Management Programs | 12.01.001 - Central / Federal | 11.04.002 - Waste & Recycling | Secondary for environmental service delivery |
| 925110 | Administration of Housing Programs | 12.01.002 - State / Regional | 08.02.003 - Mixed-Use Projects | Secondary when operating housing developments |
| 926110 | Administration of General Economic Programs | 12.01.001 - Central / Federal | 12.04.002 - Development Agencies | Economic development authorities |
| 927110 | Space Research and Technology | 12.01.001 - Central / Federal | 03.01.001 - Aerospace OEMs | Secondary when partnering with aerospace contractors |
| 928110 | National Security | 12.03.003 - Private Defense / Public Safety Contractors | 03.01.002 - Defense Systems | Use DMCS Industry 03 for defense primes |

## Migration Checklist

When converting from NAICS to DMCS:

1. **Identify NAICS code**: Look up current NAICS code (2- to 6-digit)
2. **Map to DMCS subsector**: Use table above for approximate mapping
3. **Validate revenue mix**: Confirm DMCS primary represents ≥70% of activity
4. **Check for secondary**: If company has material operations in different industry (≥25-30%), assign secondary
5. **Document both codes**: Store NAICS + DMCS for transition audit trail
6. **Review quarterly**: Update when revenue mix shifts or strategy changes

## Edge Cases & Notes

**Government vs. Private Sector**
- NAICS explicitly covers government establishments (Sector 92)
- DMCS has dedicated Industry 12 (Government / Public / Education)
- Private contractors should use relevant industry (e.g., 03.01.001 for defense contractors)

**Multi-Unit Companies**
- NAICS assigns codes at the establishment level (physical location)
- DMCS classifies at the company/consolidated level based on revenue mix
- Conglomerates need materiality analysis across all units

**Digital/Platform Companies**
- NAICS has limited granularity for modern digital business models
- DMCS provides explicit e-commerce (04.05.002), cloud platforms (09.01.004), social networks (10.03.001)
- Platform companies benefit from DMCS secondary classification option

**Crypto & Digital Assets**
- Not covered in NAICS
- Use DMCS 13 (Digital Assets & Blockchain) for crypto-native companies
- For fintech hybrids, use DMCS 07.04 (Fintech & Digital Banking)

**Agriculture**
- NAICS Sector 11 covers full agricultural value chain
- DMCS places under 02.04 (Agriculture & Forestry) within Basic Materials
- Food processing moves to Consumer Staples in DMCS

**Regulatory/Compliance Use**
- NAICS required for US government filings (tax, labor statistics, contracts)
- DMCS is supplementary for business intelligence, not regulatory replacement
- Maintain NAICS codes alongside DMCS for compliance

## Resources

- [NAICS Official Site](https://www.census.gov/naics/)
- [DMCS Taxonomy](../TAXONOMY.md)
- [DMCS Materiality Rules](../README.md#materiality-rule)

For questions or suggested improvements, open a [GitHub issue](https://github.com/shadstradamus/DMCS/issues).

