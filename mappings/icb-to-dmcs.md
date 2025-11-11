# ICB to DMCS Mapping

Mapping from Industry Classification Benchmark (ICB) to DMCS classification.

## About ICB

ICB is maintained by FTSE Russell and used across FTSE indices and European markets. It classifies companies into 11 industries, 20 supersectors, 45 sectors, and 173 subsectors.

**ICB Industries:**
- 0001 - Energy
- 1000 - Basic Materials
- 2000 - Industrials
- 3000 - Consumer Discretionary
- 4000 - Consumer Staples
- 5000 - Health Care
- 6000 - Financials
- 7000 - Technology
- 8000 - Telecommunications
- 9000 - Utilities
- 9500 - Real Estate

## High-Level Industry Mapping

| ICB Code | ICB Industry | DMCS Industry | Notes |
|----------|--------------|---------------|-------|
| 0001 | Energy | 01 (Energy) | Direct alignment; DMCS adds renewable granularity |
| 1000 | Basic Materials | 02 (Basic Materials) | Strong alignment |
| 2000 | Industrials | 03 (Industrials) | DMCS separates aerospace, logistics explicitly |
| 3000 | Consumer Discretionary | 04 (Consumer Discretionary) | DMCS includes e-commerce detail |
| 4000 | Consumer Staples | 05 (Consumer Staples) | Close alignment |
| 5000 | Health Care | 06 (Healthcare) | DMCS adds digital health subsectors |
| 6000 | Financials | 07 (Financial Services) | DMCS includes crypto/DeFi |
| 7000 | Technology | 09 (Technology) | DMCS splits hardware/software/platforms |
| 8000 | Telecommunications | 10 (Communications & Media) | DMCS merges with media/content |
| 9000 | Utilities | 11 (Utilities) | Direct mapping |
| 9500 | Real Estate | 08 (Real Estate) | DMCS adds digital real estate |

## Detailed Subsector Examples

### Energy (ICB 0001 → DMCS 01)

| ICB Code | ICB Subsector | DMCS Primary | DMCS Secondary | Notes |
|----------|---------------|--------------|----------------|-------|
| 00010505 | Oil: Crude Producers | 01.01.001 - Conventional Oil & Gas | - | Upstream producers with conventional reservoirs |
| 00010510 | Exploration & Production | 01.01.001 - Conventional Oil & Gas | 01.01.002 - Unconventional / Shale | Use shale secondary when horizontal/fracking is ≥25% |
| 00010515 | Integrated Oil & Gas | 01.01.001 - Conventional Oil & Gas | 01.03.001 - Refineries | Integrated majors earn material downstream revenue |
| 00010520 | Oil: Offshore Services | 01.01.004 - Oilfield Services & Drilling | - | Offshore rigs and service contractors |
| 00010525 | Oil Equipment & Services | 01.01.004 - Oilfield Services & Drilling | - | Equipment suppliers, service providers |
| 00010530 | Pipelines | 01.02.001 - Pipelines | 01.02.003 - Marine Energy Transport | Marine secondary if fleet-based |
| 00010535 | Refining & Marketing | 01.03.001 - Refineries | 01.03.002 - Fuel Retail & Stations | Retail networks meet materiality threshold |
| 00053510 | Renewable Energy Equipment | 01.04.004 - Storage & Grid Integrators | 01.04.001 - Utility-Scale Solar | Secondary when OEM also owns solar assets |
| 00053515 | Alternative Fuels | 01.04.003 - Bioenergy & Waste-to-Energy | - | Biofuels and biogas operators |

### Technology (ICB 7000 → DMCS 09)

| ICB Code | ICB Subsector | DMCS Primary | DMCS Secondary | Notes |
|----------|---------------|--------------|----------------|-------|
| 70101010 | Computer Services | 09.03.001 - IT Consulting | 09.03.002 - Managed Services | Advisory vs managed operations split |
| 70101015 | Internet | 10.03.004 - Search & Digital Platforms | 10.03.001 - Social Networks | Choose by core monetization model |
| 70101020 | Software | 09.01.002 - Enterprise SaaS | 09.01.001 - Application Software | Enterprise-first vs mixed consumer focus |
| 70201020 | Computer Hardware | 09.02.005 - Consumer Devices & Ecosystems | - | End-user hardware manufacturers |
| 70201030 | Electronic Office Equipment | 09.02.007 - Imaging, Sensors & Components | - | Peripherals, imaging and component makers |
| 70203010 | Semiconductors | 09.02.001 - Semiconductors — Design (Fabless & IP) | 09.02.002 - Semiconductors — Manufacturing (Foundry & IDM) | Map based on fabless vs IDM business mix |
| 70203015 | Semiconductor Equipment | 09.02.003 - Semiconductor Equipment | - | Capital equipment suppliers |

### Telecommunications (ICB 8000 → DMCS 10)

| ICB Code | ICB Subsector | DMCS Primary | DMCS Secondary | Notes |
|----------|---------------|--------------|----------------|-------|
| 80101010 | Fixed Line Telecommunications | 10.01.002 - Fixed-Line & Broadband | 10.02.002 - Broadcasting & Networks | Secondary if video distribution is material |
| 80101015 | Mobile Telecommunications | 10.01.001 - Mobile Network Operators | - | Wireless carriers |

### Financials (ICB 6000 → DMCS 07)

| ICB Code | ICB Subsector | DMCS Primary | DMCS Secondary | Notes |
|----------|---------------|--------------|----------------|-------|
| 60101010 | Banks | 07.01.001 - Retail Banking | 07.01.002 - Commercial / SME Lending | Secondary when corporate lending ≥30% |
| 60101015 | Consumer Lending | 07.01.003 - Consumer Finance / Cards | - | Credit card and specialty consumer lenders |
| 60201020 | Full Line Insurance | 07.02.001 - Life & Health Insurance | 07.02.002 - Property & Casualty | Split by dominant underwriting line |
| 60201025 | Insurance Brokers | 07.02.003 - Reinsurance & Specialty | - | Brokerage aligns with specialty/reinsurance markets |
| 60201030 | Property & Casualty Insurance | 07.02.002 - Property & Casualty | - | P&C carriers |
| 60201035 | Reinsurance | 07.02.003 - Reinsurance & Specialty | - | Reinsurance specialists |
| 60201040 | Life Insurance | 07.02.001 - Life & Health Insurance | - | Life and annuity carriers |
| 60301010 | Real Estate Investment Trusts | 08.01.xxx - REIT (match asset class) | - | Pick 08.01.001-08.01.004 based on property focus |
| 60301020 | Real Estate Holding & Development | 08.02.002 - Commercial Development | 08.02.001 - Residential Development | Assign primary by dominant pipeline |
| 60301030 | Real Estate Services | 08.03.001 - Brokerage & Advisory | 08.03.002 - Property Management | Select subsector by service mix |
| 60401010 | Asset Managers | 07.03.001 - Asset & Wealth Management | - | Traditional asset & wealth managers |
| 60401015 | Private Equity | 07.03.004 - Holding / Investment Companies | - | Balance sheet investors |
| 60401020 | Investment Services | 07.03.003 - Investment Banking | 07.03.002 - Brokerage & Trading Venues | Primary based on advisory vs execution |
| 60401025 | Mortgage Finance | 07.01.003 - Consumer Finance / Cards | - | Mortgage lenders and servicers |
| 60401030 | Specialty Finance | 07.04.004 - Digital Payments | 07.04.003 - Merchant Acquiring | Map according to payments vs acquiring blend |

### Consumer Discretionary (ICB 3000 → DMCS 04)

| ICB Code | ICB Subsector | DMCS Primary | DMCS Secondary | Notes |
|----------|---------------|--------------|----------------|-------|
| 30101010 | Automobiles | 04.01.001 - Automakers | - | Vehicle OEMs |
| 30101020 | Auto Parts | 04.01.002 - Auto Parts & Components | - | Tier-one and aftermarket suppliers |
| 30201020 | Clothing & Accessories | 04.03.001 - Apparel Brands | 04.03.002 - Sportswear & Footwear | Assign secondary when athleisure dominates |
| 30201030 | Footwear | 04.03.002 - Sportswear & Footwear | - | Footwear brands |
| 30201040 | Personal Products | 05.02.002 - Personal Care & Beauty | - | Moves to Consumer Staples in DMCS |
| 30301010 | Consumer Electronics | 04.02.003 - Consumer Electronics | - | Home and personal electronics |
| 30301020 | Household Appliances | 04.02.001 - Home Appliances | - | Major and small appliances |

### Health Care (ICB 5000 → DMCS 06)

| ICB Code | ICB Subsector | DMCS Primary | DMCS Secondary | Notes |
|----------|---------------|--------------|----------------|-------|
| 50101010 | Medical Equipment | 06.02.001 | - | Medical Devices |
| 50101015 | Medical Supplies | 06.02.002 | - | Diagnostics & Lab Services |
| 50201010 | Pharmaceuticals | 06.01.001 | - | Pharmaceuticals |
| 50201020 | Biotechnology | 06.01.002 | - | Biotechnology |
| 50301010 | Health Care Providers | 06.03.001 | - | Hospitals & Health Systems |
| 50301020 | Medical Services | 06.03.002 | - | Outpatient & Specialty Care |

### Industrials (ICB 2000 → DMCS 03)

| ICB Code | ICB Subsector | DMCS Primary | DMCS Secondary | Notes |
|----------|---------------|--------------|----------------|-------|
| 20101010 | Aerospace | 03.01.001 | - | Aerospace & Defense |
| 20101015 | Defense | 03.01.001 | - | Aerospace & Defense |
| 20201010 | Containers & Packaging | 03.02.003 | - | Packaging & Containers |
| 20201020 | Diversified Industrials | 03.02.001 | - | Diversified Manufacturers |
| 20201050 | Electrical Components & Equipment | 03.02.002 | - | Electrical Equipment & Automation |
| 20201070 | Industrial Machinery | 03.02.002 | - | Electrical Equipment & Automation |
| 20301010 | Delivery Services | 03.03.002 | - | Freight & Logistics |
| 20301020 | Marine Transportation | 03.03.002 | - | Freight & Logistics |
| 20301030 | Railroads | 03.03.001 | - | Transportation Infrastructure |
| 20301040 | Transportation Services | 03.03.002 | - | Freight & Logistics |
| 20301050 | Trucking | 03.03.002 | - | Freight & Logistics |
| 20302010 | Airlines | 03.03.003 | - | Airlines & Aviation Services |
| 20302020 | Gambling | 04.04.003 | - | Gaming & Casinos |
| 20302030 | Hotels | 04.04.001 | - | Hotels & Resorts |
| 20302035 | Recreational Services | 04.04.004 | - | Entertainment Venues & Events |
| 20302040 | Restaurants & Bars | 04.06.002 - Casual / Full-Service | 04.06.001 - Quick Service Restaurants | Assign secondary when QSR formats dominate |
| 20303010 | Broadcasting & Entertainment | 10.02.002 | - | Publishing & Content Production |
| 20303020 | Media Agencies | 10.02.001 | - | Advertising & Marketing Services |
| 20303030 | Publishing | 10.02.002 | - | Publishing & Content Production |

## Migration Checklist

When converting from ICB to DMCS:

1. **Identify ICB code**: Look up current ICB subsector (8-digit code)
2. **Map to DMCS subsector**: Use table above for approximate mapping
3. **Validate revenue mix**: Confirm DMCS primary represents ≥70% of activity
4. **Check for secondary**: If company has material operations in different industry (≥25-30%), assign secondary
5. **Document both codes**: Store ICB + DMCS for transition audit trail
6. **Review quarterly**: Update when revenue mix shifts or strategy changes

## Edge Cases & Notes

**ICB Media/Telecom Split**
- ICB separates Telecommunications (8000) from Media (under Industrials 20303xxx)
- DMCS merges both into 10 (Communications & Media) for platform-era companies
- Example: Comcast → DMCS 10.01.001 (Wireline & Broadband) + 10.04.002 (Streaming & OTT)

**Real Estate as Top-Level**
- ICB added Real Estate (9500) as standalone industry in 2019
- DMCS treats it as Industry 08 from inception
- Strong alignment for traditional REITs and property developers

**Digital Assets**
- Not covered in ICB
- Use DMCS 13 (Digital Assets & Blockchain) for crypto-native companies
- For fintech hybrids, use DMCS 07.04 (Fintech & Digital Banking)

**European Market Focus**
- ICB widely used in Europe/UK; DMCS designed for global applicability
- Brexit-era UK companies may need materiality review if operations span EU/UK

## Resources

- [ICB Structure](https://www.ftserussell.com/data/industry-classification-benchmark-icb)
- [DMCS classification](../classification.md)
- [DMCS Materiality Rules](../README.md#materiality-rule)

For questions or suggested improvements, open a [GitHub issue](https://github.com/shadstradamus/DMCS/issues).
