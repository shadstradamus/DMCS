# GICS to DMCS Mapping

Structured guidance for migrating from the Global Industry Classification Standard (GICS) to DMCS. The table below focuses on common friction points. Use it alongside the boundary rules and DMCS materiality guidance.

| Source Code | Source Label | DMCS Node | DMCS Label | Confidence | Rationale | Edge Notes |
|-------------|--------------|-----------|------------|------------|-----------|------------|
| 45102010 | Application Software | 09.01.001 | Application Software | High | Direct alignment; both capture enterprise SaaS suites. | Use segments (`.01`–`.03`) when product mix is clearly ERP/CRM/HCM. |
| 45102030 | Systems Software | 09.01.004 | Cloud Platforms / PaaS | Medium | DMCS bundles cloud platforms, developer tooling, and integration. | Verify if ad-funded freemium models (>50–60% ads) should move to 10.03. |
| 45101010 | Internet & Direct Marketing Retail | 04.05.002 | Online Marketplaces | High | Marketplace-led consumer platforms map cleanly. | Apply 09.01 secondary if SaaS revenue ≥25–30%. |
| 45101020 | Data Processing & Outsourced Services | 09.03.003 | Data Center Services | Medium | Managed hosting/colocation services mirror DMCS data center services. | If bulk of revenue from owning powered-shell assets, use 08.04.001 per boundary rule. |
| 45203020 | Transaction & Payment Processing | 07.02.003 | Payment Processing | High | Payment rails, PSPs, and acquirers align directly. | For onchain processors, consider 13.02.004 as secondary. |
| 25301010 | Casinos & Gaming | 04.04.003 | Casinos & Gaming Venues | High | Venue-led casino operations stay in Consumer Discretionary. | Online-only operations belong in 10.02.006 Betting & iGaming. |
| 50202010 | Movies & Entertainment | 10.02.001 | Film, TV & Entertainment | Medium | DMCS differentiates segments for production, streaming, theatrical, ancillary. | Streaming-only platforms with ad-driven models may cross to 10.03 if ads dominate. |
| 50202510 | Interactive Home Entertainment | 10.02.005 | Video Games & Interactive Media | High | Naming retained; DMCS refines segment labels. | Check for esports/event operations that might require 10.02.004 secondary. |
| 60101010 | Diversified REITs | 08.04.001 | Data Centers | Medium | When diversified REITs skew to data centers, classify under DMCS data center REITs. | Use secondary for residual office/industrial holdings if ≥25–30%. |
| 60101040 | Specialized REITs (Other) | 08.04.002 | Specialized Residential Properties | Medium | Covers demographic-specific housing REITs (student, senior, co-living). | If service revenues dominate, check 08.03.003 Property Operations vs 09.03.003. |
| 50203010 | Interactive Media & Services | 10.03.001 | Advertising & Attention Platforms | Medium | Aligns with ad-funded consumer platforms. | If contracted SaaS revenue dominates, move to 09.01 subsectors. |
| 40402010 | Investment Banking & Brokerage | 07.03.003 | Investment Banking | High | Direct mapping for capital markets activities. | Custody-heavy models may warrant 13.02.003 secondary. |
| 20202020 | Research & Consulting Services | 14.01.001 | Management & Strategy Consulting | Medium | Strategy and management consultants align with DMCS professional services. | Add 14.01.004 secondary if firm derives substantial HR/ESG advisory fees. |
| 20202010 | Human Resource & Employment Services | 14.02.001 | Staffing & Employment Services | High | Staffing agencies and recruiters map directly to DMCS staffing subsector. | Use segment `.01` for temp/contract heavy models; `.02` for retained search specialists. |
| 20201070 | Diversified Support Services | 14.02.003 | Corporate Support Services | Medium | Facilities logistics, records management, and corporate support ops align here. | If work is plant/industrial-focused, consider 03.04.004 Industrial Maintenance & Services. |
| 20201050 | Environmental & Facilities Services | 03.04.003 | Facility & Support Services | Medium | Front-of-house facilities, janitorial, and soft services match the updated facilities subsector. | Shift to 03.04.004 when heavy industrial maintenance dominates. |
| 20201020 | Data Processing & Outsourced Services | 14.02.002 | Business Process Outsourcing (BPO) | Medium | BPO providers delivering corporate back-office functions fit DMCS BPO node. | If revenue comes from managed IT infrastructure, keep 09.03 managed services. |

> Need a code not listed here? Open an issue with revenue mix and business model details so we can extend the table.

| GICS Code | GICS Sub-Industry | DMCS Primary | DMCS Secondary | Notes |
|-----------|-------------------|--------------|----------------|-------|
| 10101010 | Oil & Gas Drilling | 01.01.004 - Oilfield Services & Drilling | - | Service providers supporting E&P |
| 10101020 | Oil & Gas Exploration & Production | 01.01.001 - Conventional Oil & Gas | 01.01.002 - Unconventional / Shale | Split primary by resource mix |
| 10102020 | Oil & Gas Equipment & Services | 01.01.004 - Oilfield Services & Drilling | - | Contract drillers and equipment |
| 10102030 | Oil & Gas Storage & Transportation | 01.02.001 - Pipelines | 01.02.003 - Marine Energy Transport | Use marine secondary if shipping heavy |
| 10102040 | Oil & Gas Refining & Marketing | 01.03.001 - Refineries | 01.03.002 - Fuel Retail & Stations | Secondary for downstream retail networks |
| 10102050 | Coal & Consumable Fuels | 02.01.001 - Diversified Mining | - | Coal producers map into Basic Materials mining |

### Information Technology (GICS 45 → DMCS 09)

| GICS Code | GICS Sub-Industry | DMCS Primary | DMCS Secondary | Notes |
|-----------|-------------------|--------------|----------------|-------|
| 45101010 | Internet Software & Services | 09.01.001 - Application Software | 09.01.002 - Enterprise SaaS | Classify by business model (consumer vs enterprise) |
| 45102010 | IT Consulting & Other Services | 09.03.001 - IT Consulting | - | System integrators and advisory |
| 45102020 | Data Processing & Outsourced Services | 09.03.002 - Managed Services | 09.01.004 - Cloud Platforms / PaaS | Managed services first, cloud as secondary if platform revenue significant |
| 45103010 | Application Software | 09.01.002 - Enterprise SaaS | - | Subscription or license revenue |
| 45103020 | Systems Software | 09.01.005 - Data & Database Platforms | - | Operating systems, middleware, database vendors |
| 45201020 | Semiconductor Equipment | 09.02.003 - Semiconductor Equipment | 09.02.004 - Semiconductor Materials | Equipment vendors with large materials businesses |
| 45203010 | Semiconductors | 09.02.001 - Semiconductors — Design (Fabless & IP) | 09.02.002 - Semiconductors — Manufacturing (Foundry & IDM) | Choose based on fabless vs IDM economics |
| 45203015 | Semiconductor Equipment | 09.02.003 - Semiconductor Equipment | - | Capital equipment suppliers |
| 45204010 | Communications Equipment | 09.02.006 - Network & Telecom Equipment | - | Networking hardware |
| 45301010 | Computer Hardware | 09.02.005 - Consumer Devices & Ecosystems | - | Personal systems and devices |

### Communication Services (GICS 50 → DMCS 10)

| GICS Code | GICS Sub-Industry | DMCS Primary | DMCS Secondary | Notes |
|-----------|-------------------|--------------|----------------|-------|
| 50101010 | Alternative Carriers | 10.01.002 - Fixed-Line & Broadband | - | Wireline, wholesale, MVNO operators |
| 50101020 | Integrated Telecommunication Services | 10.01.002 - Fixed-Line & Broadband | 10.01.001 - Mobile Network Operators | Apply secondary when wireless materially contributes |
| 50102010 | Wireless Telecommunication Services | 10.01.001 - Mobile Network Operators | - | Mobile-only operators |
| 50201010 | Advertising | 10.04.002 - Agencies & Brand Services | 10.04.001 - Ad Networks & Exchanges | Split creative vs programmatic revenue |
| 50201020 | Broadcasting | 10.02.002 - Broadcasting & Networks | - | Linear TV/radio networks and station groups |
| 50201030 | Cable & Satellite | 10.02.002 - Broadcasting & Networks | 10.01.002 - Fixed-Line & Broadband | Secondary when access network operations are material |
| 50201040 | Publishing | 10.02.004 - Diversified Entertainment | - | Traditional and digital publishing businesses |
| 50202020 | Interactive Home Entertainment | 10.02.005 - Video Games & Interactive Media | - | Gaming and interactive experiences |
| 50203010 | Interactive Media & Services | 10.03.004 - Search & Digital Platforms | 10.03.001 - Social Networks | Pick based on core monetization |

### Financials (GICS 40 → DMCS 07)

| GICS Code | GICS Sub-Industry | DMCS Primary | DMCS Secondary | Notes |
|-----------|-------------------|--------------|----------------|-------|
| 40101010 | Diversified Banks | 07.01.001 - Retail Banking | 07.01.002 - Commercial / SME Lending | Secondary if corporate lending is material |
| 40101015 | Regional Banks | 07.01.001 - Retail Banking | - | Community and regional lenders |
| 40102010 | Thrifts & Mortgage Finance | 07.01.003 - Consumer Finance / Cards | - | Mortgage-focused lenders |
| 40201020 | Other Diversified Financial Services | 07.03.004 - Holding / Investment Companies | - | Multi-line financial holding companies |
| 40201040 | Specialized Finance | 07.04.003 - Merchant Acquiring | 07.04.004 - Digital Payments | Choose based on acquiring vs payment processing mix |
| 40203010 | Asset Management & Custody Banks | 07.03.001 - Asset & Wealth Management | - | Traditional asset managers and custody banks |
| 40203020 | Investment Banking & Brokerage | 07.03.003 - Investment Banking | 07.03.002 - Brokerage & Trading Venues | Primary by underwriting/advisory, secondary if trading heavy |
| 40301010 | Insurance Brokers | 07.02.003 - Reinsurance & Specialty | 07.02.002 - Property & Casualty | Brokers align with specialty risk markets |
| 40301020 | Life & Health Insurance | 07.02.001 - Life & Health Insurance | - | Life, health, annuity carriers |
| 40301040 | Property & Casualty Insurance | 07.02.002 - Property & Casualty | - | P&C carriers |
| 40301050 | Reinsurance | 07.02.003 - Reinsurance & Specialty | - | Reinsurers and specialty carriers |

### Professional & Business Services (GICS 20 → DMCS 14)

| GICS Code | GICS Sub-Industry | DMCS Primary | DMCS Secondary | Notes |
|-----------|-------------------|--------------|----------------|-------|
| 20202020 | Research & Consulting Services | 14.01.001 - Management & Strategy Consulting | 14.01.004 - Specialized Advisory | Use segments `.01` and `.02` when HR/ESG advisory becomes material |
| 20202010 | Human Resource & Employment Services | 14.02.001 - Staffing & Employment Services | 14.02.001.02 - Permanent & Executive Search | Segment `.01` captures temp/contract agencies; `.02` covers retained executive search |
| 20201020 | Data Processing & Outsourced Services | 14.02.002 - Business Process Outsourcing (BPO) | 09.03.002 - Managed Services | Keep IT-managed services secondary when infrastructure work dominates |
| 20201070 | Diversified Support Services | 14.02.003 - Corporate Support Services | 03.04.003 - Facility & Support Services | Use secondary when operations include significant facilities work |
| 20201050 | Environmental & Facilities Services | 03.04.003 - Facility & Support Services | 03.04.004 - Industrial Maintenance & Services | Choose Industrial Maintenance when heavy plant turnaround work leads |

## Migration Checklist

When converting from GICS to DMCS:

1. **Identify GICS code**: Look up current GICS sub-industry (8-digit code)
2. **Map to DMCS subsector**: Use table above for approximate mapping
3. **Validate revenue mix**: Confirm DMCS primary represents ≥70% of activity
4. **Check for secondary**: If company has material operations in different industry (≥25-30%), assign secondary
5. **Document both codes**: Store GICS + DMCS for transition audit trail
6. **Review quarterly**: Update when revenue mix shifts or strategy changes

## Edge Cases & Notes

**Technology Conglomerates (e.g., Amazon, Alphabet)**
- GICS forces single classification
- DMCS allows primary + secondary for diversified models
- Example: Amazon → Primary 04.05.002 (Online Marketplaces), Secondary 09.01.004 (Cloud Platforms)

**Renewable Energy**
- GICS keeps renewables under traditional Energy
- DMCS separates at sector level: 01.04 (Renewables & Clean Power)

**Digital Finance / Crypto**
- Not covered in GICS
- Use DMCS 13 (Digital Assets & Blockchain) or 07.04 (Fintech & Digital Banking)

**Platform Companies**
- GICS struggles with multi-sided platforms
- DMCS provides explicit platform subsectors under Technology and Communications

## Resources

- [GICS Methodology](https://www.msci.com/our-solutions/indexes/gics)
- [DMCS classification](../classification.md)
- [DMCS Materiality Rules](../README.md#materiality-rule)

For questions or suggested improvements, open a [GitHub issue](https://github.com/shadstradamus/DMCS/issues).
