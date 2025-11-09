# TRBC to DMCS Mapping

Mapping from Refinitiv Business Classification (TRBC) to DMCS classification.

## About TRBC

TRBC is maintained by Refinitiv (now LSEG) and used across financial data platforms. It classifies companies into 10 economic sectors, 28 business sectors, 54 industry groups, and 136 industries.

**TRBC Economic Sectors:**
- 50 - Energy
- 51 - Basic Materials
- 52 - Industrials
- 53 - Consumer Cyclicals
- 54 - Consumer Non-Cyclicals
- 55 - Financials
- 56 - Healthcare
- 57 - Technology
- 58 - Telecommunications Services
- 59 - Utilities

## High-Level Economic Sector Mapping

| TRBC Code | TRBC Economic Sector | DMCS Industry | Notes |
|-----------|----------------------|---------------|-------|
| 50 | Energy | 01 (Energy) | Direct alignment; DMCS separates renewables |
| 51 | Basic Materials | 02 (Basic Materials) | Strong alignment |
| 52 | Industrials | 03 (Industrials) | DMCS adds aerospace/defense/logistics detail |
| 53 | Consumer Cyclicals | 04 (Consumer Discretionary) | Closely aligned; DMCS includes e-commerce |
| 54 | Consumer Non-Cyclicals | 05 (Consumer Staples) | Direct mapping |
| 55 | Financials | 07 (Financial Services) + 08 (Real Estate) | TRBC includes Real Estate; DMCS separates it |
| 56 | Healthcare | 06 (Healthcare) | DMCS adds digital health |
| 57 | Technology | 09 (Technology) | DMCS splits hardware/software/platforms |
| 58 | Telecommunications Services | 10 (Communications & Media) | DMCS merges telecom with media/content |
| 59 | Utilities | 11 (Utilities) | Direct mapping |

## Detailed Industry Examples

### Energy (TRBC 50 → DMCS 01)

| TRBC Code | TRBC Industry | DMCS Primary | DMCS Secondary | Notes |
|-----------|---------------|--------------|----------------|-------|
| 5010101010 | Integrated Oil & Gas | 01.01.001 - Conventional Oil & Gas | 01.03.001 - Refineries | Upstream remains primary, downstream as secondary when ≥25% |
| 5010101011 | Oil & Gas Exploration and Production | 01.01.001 - Conventional Oil & Gas | 01.01.002 - Unconventional / Shale | Choose secondary when shale is material |
| 5010101012 | Oil & Gas Refining and Marketing | 01.03.001 - Refineries | 01.03.002 - Fuel Retail & Stations | Add downstream retail when present |
| 5010101013 | Oil & Gas Related Equipment and Services | 01.01.004 - Oilfield Services & Drilling | - | Service contractors and equipment |
| 5010101014 | Oil & Gas Transportation Services | 01.02.001 - Pipelines | 01.02.003 - Marine Energy Transport | Marine secondary if fleet operations dominate |
| 5010102011 | Coal | 02.01.001 - Diversified Mining | - | Coal extracted with other bulk commodities |
| 5020201011 | Renewable Energy | 01.04.xxx - Renewables & Clean Power | - | Select 01.04.001-01.04.004 based on technology |

### Technology (TRBC 57 → DMCS 09)

| TRBC Code | TRBC Industry | DMCS Primary | DMCS Secondary | Notes |
|-----------|---------------|--------------|----------------|-------|
| 5710101010 | Computer Services | 09.03.001 - IT Consulting | 09.03.002 - Managed Services | System integration vs managed operations |
| 5710101011 | Software | 09.01.002 - Enterprise SaaS | 09.01.001 - Application Software | Enterprise-first vs mixed models |
| 5710101012 | Internet Services | 10.03.004 - Search & Digital Platforms | 10.03.001 - Social Networks | Use DMCS Industry 10 for platform companies |
| 5720201011 | Semiconductors & Semiconductor Equipment | 09.02.001 - Semiconductors | - | Chip design, fabs, and capital equipment |
| 5720201012 | Communications & Networking | 09.02.003 - Network & Telecom Equipment | - | Communications hardware manufacturers |
| 5720201013 | Computers, Phones & Household Electronics | 09.02.002 - Consumer Devices & Ecosystems | - | Device OEMs |
| 5720201014 | Electronic Components | 09.02.004 - Imaging, Sensors & Components | - | Passive and active components |
| 5720201015 | Office Equipment | 09.02.004 - Imaging, Sensors & Components | - | Peripherals and printing |

### Financials (TRBC 55 → DMCS 07 and 08)

| TRBC Code | TRBC Industry | DMCS Primary | DMCS Secondary | Notes |
|-----------|---------------|--------------|----------------|-------|
| 5510101010 | Banking Services | 07.01.001 - Retail Banking | 07.01.002 - Commercial / SME Lending | Assign secondary when corporate lending ≥25% |
| 5510101011 | Regional Banks | 07.01.001 - Retail Banking | - | Community and regional lenders |
| 5510101012 | Diversified Banks | 07.01.001 - Retail Banking | 07.01.003 - Consumer Finance / Cards | Add consumer finance if cards dominate |
| 5510101013 | Consumer Lending | 07.01.003 - Consumer Finance / Cards | - | Credit card, auto, and specialty lenders |
| 5510201011 | Investment Banking & Investment Services | 07.03.003 - Investment Banking | 07.03.002 - Brokerage & Trading Venues | Primary by advisory/underwriting vs trading |
| 5510201013 | Private Equity | 07.03.004 - Holding / Investment Companies | - | Principal investors and buyout funds |
| 5510201015 | Trusts, Fiduciaries & Custody Activities | 07.03.001 - Asset & Wealth Management | - | Custody and wealth platforms |
| 5520301011 | Full Line Insurance | 07.02.001 - Life & Health Insurance | 07.02.002 - Property & Casualty | Split by underwriting mix |
| 5520301012 | Property & Casualty Insurance | 07.02.002 - Property & Casualty | - | P&C carriers |
| 5520301013 | Reinsurance | 07.02.003 - Reinsurance & Specialty | - | Reinsurance specialists |
| 5520301014 | Insurance Brokers & Services | 07.02.003 - Reinsurance & Specialty | - | Brokers align with specialty placement |
| 5530401011 | Real Estate Operations | 08.02.002 - Commercial Development | 08.02.001 - Residential Development | Choose subsector by pipeline |
| 5530401012 | Real Estate Services | 08.03.001 - Brokerage & Advisory | 08.03.002 - Property Management | Service-led groups |
| 5530401013 | Diversified REITs | 08.01.xxx - REIT (match asset class) | - | Select 08.01.001-08.01.004 based on holdings |

### Healthcare (TRBC 56 → DMCS 06)

| TRBC Code | TRBC Industry | DMCS Primary | DMCS Secondary | Notes |
|-----------|---------------|--------------|----------------|-------|
| 5610101010 | Pharmaceuticals | 06.01.001 - Branded Pharma | - | Branded and specialty pharma |
| 5610101011 | Biotechnology & Medical Research | 06.01.003 - Biotech & Cell/Gene | - | Aligns with DMCS biotech coverage |
| 5610101012 | Medical Equipment, Supplies & Distribution | 06.02.001 - Diagnostic Devices | 06.02.002 - Surgical & Ortho | Split by product mix |
| 5610201011 | Healthcare Providers & Services | 06.03.001 - Hospitals & Clinics | 06.03.002 - Managed Care & Payers | Add payer secondary if integrated |
| 5610201012 | Managed Healthcare | 06.03.002 - Managed Care & Payers | - | Health insurers and managed care |

### Consumer Cyclicals (TRBC 53 → DMCS 04)

| TRBC Code | TRBC Industry | DMCS Primary | DMCS Secondary | Notes |
|-----------|---------------|--------------|----------------|-------|
| 5310101010 | Automobiles & Auto Parts | 04.01.001 - Automakers | 04.01.002 - Auto Parts & Components | Split OEM vs component revenue |
| 5310201011 | Cyclical Consumer Products | 04.03.001 - Apparel Brands | 04.03.002 - Sportswear & Footwear | Use apparel vs sportswear mix |
| 5310201012 | Furnishings, Home & Office Products | 04.02.002 - Furniture & Home Décor | 04.02.001 - Home Appliances | Pick by dominant product |
| 5320401012 | E-commerce Discretionary | 04.05.002 - Online Marketplaces | 04.05.003 - Specialty Retail | Secondary for category-specific platforms |
| 5320401014 | Department Stores | 04.05.001 - Multiline Retail | - | Broadline retail |
| 5330501012 | Casinos & Gambling | 04.04.003 - Gaming & Casinos | - | Gaming operators |
| 5330501013 | Hotels & Entertainment Services | 04.04.001 - Hotels & Resorts | 04.04.002 - Travel Services | Secondary when travel services material |
| 5330501014 | Restaurants & Bars | 04.06.001 - Quick Service Restaurants | 04.06.002 - Casual / Full-Service | Choose based on service format |
| 5330501015 | Airlines | 03.03.005 - Airlines | - | Airlines reside in Industrials |

### Telecommunications Services (TRBC 58 → DMCS 10)

| TRBC Code | TRBC Industry | DMCS Primary | DMCS Secondary | Notes |
|-----------|---------------|--------------|----------------|-------|
| 5810101010 | Telecommunications Services | 10.01.002 - Fixed-Line & Broadband | 10.01.001 - Mobile Network Operators | Select primary by revenue mix |
| 5810101011 | Integrated Telecommunications Services | 10.01.002 - Fixed-Line & Broadband | 10.01.001 - Mobile Network Operators | Classic integrated incumbents |
| 5810101012 | Wireless Telecommunications Services | 10.01.001 - Mobile Network Operators | - | Wireless specialists |
| 5810101013 | Alternative Telecommunications Carriers | 10.01.002 - Fixed-Line & Broadband | - | Wholesale/backbone providers |

### Industrials (TRBC 52 → DMCS 03)

| TRBC Code | TRBC Industry | DMCS Primary | DMCS Secondary | Notes |
|-----------|---------------|--------------|----------------|-------|
| 5210101010 | Aerospace & Defense | 03.01.001 - Aerospace OEMs | 03.01.002 - Defense Systems | Assign secondary when defense dominates |
| 5210201011 | Industrial & Commercial Services | 03.04.003 - Facility & Industrial Services | 03.02.004 - Diversified Industrials | Services vs manufacturing mix |
| 5210301012 | Industrial Machinery & Equipment | 03.02.001 - Heavy Machinery | 03.02.002 - Electrical Equipment | Split mechanical vs electrical focus |
| 5220401011 | Freight & Logistics Services | 03.03.004 - Parcel & Courier | 03.03.002 - Trucking & Haulage | Choose based on mode |
| 5220401012 | Marine Freight & Logistics | 03.03.006 - Container & Liner Shipping | - | Ocean freight operators |
| 5220401013 | Air Freight & Logistics | 03.03.003 - Air Freight & Cargo | - | Air logistics |
| 5220401014 | Railroads & Railways | 03.03.001 - Rail & Transit | - | Rail infrastructure |
| 5220401015 | Trucking | 03.03.002 - Trucking & Haulage | - | Road freight |
| 5220501011 | Transportation Infrastructure | 03.03.001 - Rail & Transit | 03.03.004 - Parcel & Courier | Assign based on asset ownership |

### Utilities (TRBC 59 → DMCS 11)

| TRBC Code | TRBC Industry | DMCS Primary | DMCS Secondary | Notes |
|-----------|---------------|--------------|----------------|-------|
| 5910101010 | Conventional Electricity | 11.01.001 - Generation | 11.01.002 - Transmission & Distribution | Add secondary when owning wires |
| 5910101011 | Alternative Electricity | 11.01.001 - Generation | 01.04.xxx - Renewables & Clean Power | Use DIC only for digital-first assets |
| 5910101012 | Multi-Utilities | 11.04.001 - Multi-Utility Operations | 11.04.002 - Waste & Recycling | Secondary if environmental services significant |
| 5910201011 | Gas Distribution | 11.02.001 - Gas Utilities | - | Regulated gas utilities |
| 5910301011 | Water & Related Utilities | 11.03.001 - Water Supply | 11.03.002 - Wastewater Services | Add wastewater secondary when present |

## Migration Checklist

When converting from TRBC to DMCS:

1. **Identify TRBC code**: Look up current TRBC industry (10-digit code)
2. **Map to DMCS subsector**: Use table above for approximate mapping
3. **Validate revenue mix**: Confirm DMCS primary represents ≥70% of activity
4. **Check for secondary**: If company has material operations in different industry (≥25-30%), assign secondary
5. **Document both codes**: Store TRBC + DMCS for transition audit trail
6. **Review quarterly**: Update when revenue mix shifts or strategy changes

## Edge Cases & Notes

**Real Estate Treatment**
- TRBC includes Real Estate under Financials (5530401xxx)
- DMCS treats Real Estate as standalone Industry 08
- Mapping is straightforward but requires awareness of industry-level split

**Media vs. Telecommunications**
- TRBC separates Media (under Consumer Cyclicals) from Telecommunications
- DMCS merges both into Industry 10 (Communications & Media)
- Platform companies benefit from unified classification

**Digital Assets & Crypto**
- Not covered in TRBC
- Use DMCS 13 (Digital Assets & Blockchain) for crypto-native companies
- For fintech hybrids, use DMCS 07.04 (Fintech & Digital Banking)

**Renewable Energy**
- TRBC has "Alternative Electricity" (5910101011) and "Renewable Energy" (5020201011)
- DMCS consolidates into 01.04 (Renewables & Clean Power) or 11.01.002 (Renewable Energy Utilities)
- Choose based on whether company generates or distributes

**LSEG Data Integration**
- TRBC widely used in Refinitiv/LSEG datasets
- DMCS designed for integration alongside TRBC for enhanced classification
- Dual-coding recommended during transition

## Resources

- [TRBC Structure](https://www.lseg.com/en/data-analytics/financial-data/trbc)
- [DMCS classification](../classification.md)
- [DMCS Materiality Rules](../README.md#materiality-rule)

For questions or suggested improvements, open a [GitHub issue](https://github.com/shadstradamus/DMCS/issues).
