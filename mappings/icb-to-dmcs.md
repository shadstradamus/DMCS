# ICB to DMCS Mapping

Mapping from Industry Classification Benchmark (ICB) to DMCS classification.

## About ICB

ICB is maintained by FTSE Russell and used across FTSE indices and European markets. It classifies companies into 11 industries, 20 supersectors, 45 sectors, and 173 subsectors.

**ICB Industries:**
- 0001 - Energy
- 1000 - Basic Materials
# ICB to DMCS Mapping

Reference table for mapping Industry Classification Benchmark (ICB) subsectors onto DMCS nodes. Focuses on tricky overlaps and incorporates current boundary guidance.

| Source Code | Source Label | DMCS Node | DMCS Label | Confidence | Rationale | Edge Notes |
|-------------|--------------|-----------|------------|------------|-----------|------------|
| 10101015 | Software | 09.01.001 | Application Software | High | Enterprise/vertical SaaS aligns directly. | If advertising is primary monetisation, inspect 10.03 platform nodes. |
| 10101020 | Consumer Digital Services | 10.03.001 | Advertising & Attention Platforms | Medium | Covers ad-funded consumer platforms per boundary rules. | Subscription-first streaming moves to 10.02.001 Film, TV & Entertainment. |
| 10102010 | Semiconductors | 09.02.001 | Semiconductors | High | DMCS keeps dedicated semiconductor ladder identical in scope. | None. |
| 40501010 | Airlines | 03.03.005 | Airlines | High | Direct mapping for scheduled passenger and cargo carriers. | Use 03.03.004 Parcel & Courier when vertical mobility or drone logistics dominate. |
| 40501040 | Restaurants and Bars | 04.03.001 | Restaurants | High | Maps into DMCS hospitality subsector. | Delivery marketplaces belong in 04.05.002 Online Marketplaces. |
| 35101010 | Real Estate Holding and Development | 08.02.001 | Real Estate Development | Medium | Aligns with DMCS landbanking & development groups. | If entity is primarily REIT structure, use 08.04.x nodes. |
| 35101015 | Real Estate Services | 08.03.001 | Brokerage & Advisory | Medium | Core brokerage, leasing, and advisory groups align here. | Shift to 08.03.004 PropTech & Real Estate Platforms when product is software/data-led. |
| 40501020 | Casinos and Gambling | 10.02.006 | Betting & iGaming | Medium | Online betting operations slot into DMCS gaming platform node. | Venue-first casinos remain in 04.04.003. |
| 30201020 | Consumer Lending | 07.01.003 | Consumer Finance / Cards | High | Credit card and instalment lenders map directly. | BNPL models may need 07.04.002 Digital Wallets / Neobanks if product-specific. |
| 10101010 | Computer Services | 09.03.003 | Data Center Services | Medium | Managed services, hosting, and colocation align with DMCS infrastructure ops. | Move to 08.04.001 if revenue dominated by REIT-style rents. |
| 50205025 | Business Training and Employment Agencies | 14.02.001 | Staffing & Employment Services | High | Staffing, recruitment, and HR outsourcers map to DMCS staffing subsector. | Apply segment `.02` for retained executive search specialists. |
| 50205015 | Transaction Processing Services | 14.02.003 | Corporate Support Services | Medium | Document storage, logistics, and shared-service operations align to the new corporate support node. | If operations skew industrial (maintenance/fabrication), evaluate 03.04.004. |
| 50205020 | Professional Business Support Services | 14.01.001 | Management & Strategy Consulting | Medium | Strategy, legal, audit, and specialist advisory groups sit in DMCS Industry 14. | Use 14.01.004 segments for HR/comp or ESG-focused mandates. |
| 60102020 | Renewable Energy Equipment | 01.03.002 | Solar & Distributed Energy | Medium | DMCS focuses on distributed infrastructure supply chain. | Utility-scale operators fall under 11.02.x instead. |

Submit additional ICB codes through the registry pipeline if you encounter unmapped activity combinations.
| ICB Code | ICB Subsector | DMCS Primary | DMCS Secondary | Notes |
|----------|---------------|--------------|----------------|-------|
| 15102015 | Telecommunications Services | 10.01.002 - Fixed-Line & Broadband | 10.02.002 - Broadcasting & Networks | Use for wireline-heavy carriers inside ICB's consolidated services bucket; add broadcasting secondary when video distribution is material |
| 15102015 | Telecommunications Services | 10.01.001 - Mobile Network Operators | - | ICB no longer separates mobile; treat wireless-led carriers as DMCS mobile network operators based on revenue mix |

### Financials (ICB 6000 → DMCS 07)

| ICB Code | ICB Subsector | DMCS Primary | DMCS Secondary | Notes |
|----------|---------------|--------------|----------------|-------|
| 30101010 | Banks | 07.01.001 - Retail Banking | 07.01.002 - Commercial / SME Lending | Secondary when corporate lending ≥30% |
| 30201020 | Consumer Lending | 07.01.003 - Consumer Finance / Cards | - | Credit card and specialty consumer lenders |
| 30201025 | Mortgage Finance | 07.01.003 - Consumer Finance / Cards | - | Mortgage lenders and servicers |
| 30201030 | Financial Data Providers | 07.04.004 - Digital Payments | 07.04.003 - Merchant Acquiring | Use DMCS fintech ladder for networks/processors; pure data vendors may fit 14.x corporate services |
| 30202000 | Diversified Financial Services | 07.03.004 - Holding / Investment Companies | - | Includes private equity and multi-strategy balance sheet investors |
| 30202010 | Asset Managers and Custodians | 07.03.001 - Asset & Wealth Management | - | Traditional asset & wealth managers and custody banks |
| 30202015 | Investment Services | 07.03.003 - Investment Banking | 07.03.002 - Brokerage & Trading Venues | Primary based on advisory vs execution |
| 30301010 | Life Insurance | 07.02.001 - Life & Health Insurance | - | Life and annuity carriers |
| 30302010 | Full Line Insurance | 07.02.001 - Life & Health Insurance | 07.02.002 - Property & Casualty | Split by dominant underwriting line |
| 30302015 | Insurance Brokers | 07.02.003 - Reinsurance & Specialty | - | Brokerage aligns with specialty/reinsurance markets |
| 30302020 | Reinsurance | 07.02.003 - Reinsurance & Specialty | - | Reinsurance specialists |
| 30302025 | Property and Casualty Insurance | 07.02.002 - Property & Casualty | - | P&C carriers |
| 35101010 | Real Estate Holding and Development | 08.02.002 - Commercial Development | 08.02.001 - Residential Development | Assign primary by dominant pipeline |
| 35101015 | Real Estate Services | 08.03.001 - Brokerage & Advisory | 08.03.002 - Property Management | Select subsector by service mix |
| 35102000 | Diversified REITs | 08.01.xxx - REIT (match asset class) | - | Pick 08.01.001-08.01.004 based on property focus |

### Consumer Discretionary (ICB 3000 → DMCS 04)

| ICB Code | ICB Subsector | DMCS Primary | DMCS Secondary | Notes |
|----------|---------------|--------------|----------------|-------|
| 40101020 | Automobiles | 04.01.001 - Automakers | - | Vehicle OEMs |
| 40101025 | Auto Parts | 04.01.002 - Auto Parts & Components | - | Tier-one and aftermarket suppliers |
| 40204020 | Clothing and Accessories | 04.03.001 - Apparel Brands | 04.03.002 - Sportswear & Footwear | Assign secondary when athleisure dominates |
| 40204025 | Footwear | 04.03.002 - Sportswear & Footwear | - | Footwear brands |
| 40204035 | Cosmetics | 05.02.002 - Personal Care & Beauty | - | Beauty-focused brands inside ICB personal goods bucket |
| 40203010 | Consumer Electronics | 04.02.003 - Consumer Electronics | - | Home and personal electronics |
| 40202020 | Household Appliance | 04.02.001 - Home Appliances | - | Major and small appliances |

### Health Care (ICB 5000 → DMCS 06)

| ICB Code | ICB Subsector | DMCS Primary | DMCS Secondary | Notes |
|----------|---------------|--------------|----------------|-------|
| 20102010 | Medical Equipment | 06.02.001 | - | Medical Devices |
| 20102015 | Medical Supplies | 06.05.001 - Life Sciences Equipment & Consumables | 06.02.002 - Diagnostics & Testing | Use new life sciences node for lab equipment/consumables; keep diagnostics secondary when labs operate facilities |
| 20103015 | Pharmaceuticals | 06.01.001 | - | Pharmaceuticals |
| 20103010 | Biotechnology | 06.01.002 | - | Biotechnology |
| 20101010 | Health Care Facilities | 06.03.001 | - | Hospitals & Health Systems |
| 20102020 | Medical Services | 06.05.002 - Contract Research & Manufacturing | 06.03.002 - Outpatient & Specialty Care | CRO/CDMO operators map to the new life sciences services node; keep provider classification when operating clinics |

### Industrials (ICB 2000 → DMCS 03)

| ICB Code | ICB Subsector | DMCS Primary | DMCS Secondary | Notes |
|----------|---------------|--------------|----------------|-------|
 | 50201010 | Aerospace | 03.01.001 | - | Aerospace & Defense |
| 50201020 | Defense | 03.01.001 | - | Aerospace & Defense |
| 50203030 | Containers and Packaging | 03.02.003 | - | Packaging & Containers |
| 50203000 | Diversified Industrials | 03.02.001 | - | Diversified Manufacturers |
| 50202010 | Electrical Components | 03.02.002 | - | Electrical Equipment & Automation |
| 50204000 | Machinery: Industrial | 03.02.002 | - | Electrical Equipment & Automation |
| 50206040 | Delivery Services | 03.03.002 | - | Freight & Logistics |
| 50206030 | Marine Transportation | 03.03.002 | - | Freight & Logistics |
| 50206020 | Railroads | 03.03.001 | - | Transportation Infrastructure |
| 50206060 | Transportation Services | 03.03.002 | - | Freight & Logistics |
| 50206010 | Trucking | 03.03.002 | - | Freight & Logistics |
| 40501010 | Airlines | 03.03.005 | - | Airlines & Aviation Services |
| 40501020 | Casinos and Gambling | 04.04.003 | - | Gaming & Casinos |
| 40501025 | Hotels and Motels | 04.04.001 | - | Hotels & Resorts |
| 40501030 | Recreational Services | 04.04.004 | - | Entertainment Venues & Events |
| 40501040 | Restaurants and Bars | 04.06.002 - Casual / Full-Service | 04.06.001 - Quick Service Restaurants | Assign secondary when QSR formats dominate |
| 40301010 | Entertainment | 10.02.002 | - | Publishing & Content Production |
| 40301020 | Media Agencies | 10.02.001 | - | Advertising & Marketing Services |
| 40301030 | Publishing | 10.02.002 | - | Publishing & Content Production |

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
- [DMCS Classification](../classification.md)
- [DMCS Materiality Rules](../README.md#materiality-rule)

For questions or suggested improvements, open a [GitHub issue](https://github.com/shadstradamus/DMCS/issues).
