# NAICS to DMCS Mapping

Structured conversion support for NAICS 2022 codes that frequently appear during DMCS onboarding. Because NAICS often aggregates disparate activities, always validate revenue mix before finalizing a DMCS node.

| Source Code | Source Label | DMCS Node | DMCS Label | Confidence | Rationale | Edge Notes |
|-------------|--------------|-----------|------------|------------|-----------|------------|
| 518210 | Computing Infrastructure Providers, Data Processing, Web Hosting | 09.03.003 | Data Center Services | Medium | Managed hosting/colo operations align with DMCS infrastructure services. | If leasing powered shells dominates, prefer 08.04.001 Data Center REIT per boundary guidance. |
| 519130 | Internet Publishing & Broadcasting and Web Search Portals | 10.03.001 | Advertising & Attention Platforms | Medium | Ad-funded consumer platforms map per boundary guidance. | Subscription-first streaming should move to 10.02.001 Film, TV & Entertainment. |
| 523120 | Securities Brokerage | 07.03.003 | Investment Banking | Medium | Brokerage houses align with DMCS capital markets ladder. | Retail trading apps with social features may add 10.03 secondary. |
| 524210 | Insurance Agencies & Brokerages | 07.04.002 | Insurance Distribution | High | Distribution-focused insurance brokers align directly. | Underwriters belong in 07.04.001 Insurance Carriers. |
| 522320 | Financial Transactions Processing, Reserve, and Clearinghouse Activities | 07.02.003 | Payment Processing | High | Payment processors and acquiring banks fit DMCS payments node. | Crypto-native processors can add 13.02.004 DeFi Services secondary. |
| 454110 | Electronic Shopping and Mail-Order Houses | 04.05.002 | Online Marketplaces | Medium | DMCS differentiates marketplaces from owned-inventory retail. | If primarily 1P inventory with store footprint, use 04.02.x Retail nodes. |
| 713290 | Other Gambling Industries | 10.02.006 | Betting & iGaming | Medium | Covers online wagering platforms per DMCS segmentation. | Physical venues remain in 04.04.003 Casinos & Gaming Venues. |
| 621511 | Medical Laboratories | 06.02.002 | Diagnostics & Testing | High | Diagnostics labs align with DMCS healthcare diagnostics node. | Genomics-only labs may use 06.03.003 Genomics & Precision Medicine. |
| 811219 | Other Electronic & Precision Equipment Repair | 09.03.004 | Field & Managed Services | Medium | Enterprise-focused managed hardware services map here. | Consumer device repair → 04.06.001 Consumer Electronics Services. |
| 238210 | Electrical Contractors and Other Wiring Installation Contractors | 01.03.003 | Grid & Power Infrastructure | Low | DMCS treats specialised electrical installers as part of energy infrastructure. | For broad facilities maintenance mixes, check 03.04.003 Facility & Support Services instead. |
| 541611 | Administrative Management & General Consulting Services | 14.01.001 | Management & Strategy Consulting | Medium | Core management consultancies align with DMCS professional services. | Add 14.01.004 segment when HR/comp or ESG advisory dominates. |
| 541612 | Human Resources Consulting Services | 14.01.004 | Specialized Advisory | Medium | HR-focused advisory firms map to specialized advisory; pick segment `.01` for comp/benefits. | When services extend to staffing execution, consider 14.02.001 secondary. |
| 541613 | Marketing Consulting Services | 14.03.003 | Advertising & Marketing Agencies | Medium | Marketing and brand advisory aligns with the new agency subsector. | Use segment `.02` for PR-focused firms. |
| 541810 | Advertising Agencies | 14.03.003 | Advertising & Marketing Agencies | High | Creative and media agencies map cleanly to DMCS agency node. | Add 10.03 secondary if platform/media ownership is material. |
| 541715 | R&D in Physical, Engineering, and Life Sciences | 14.03.004 | Scientific & Technical Services | Medium | Contract R&D and testing labs map to the scientific services node. | If work supports pharma development end-to-end, evaluate 06.05.002 secondary. |
| 541380 | Testing Laboratories | 06.05.002 | Contract Research & Manufacturing | Medium | Independent labs running contract testing align with CRO/CDMO coverage. | For diagnostic services sold direct to patients, keep 06.02.002. |
| 561320 | Temporary Help Services | 14.02.001 | Staffing & Employment Services | High | Temp staffing agencies map to staffing subsector segment `.01`. | If firm runs executive search, pair with `.02` secondary. |
| 561312 | Executive Search Services | 14.02.001 | Staffing & Employment Services | Medium | Retained search firms align with staffing segment `.02`. | Add 14.01.004 secondary when work is primarily advisory. |
| 561110 | Office Administrative Services | 14.02.002 | Business Process Outsourcing (BPO) | Medium | Outsourced corporate back-office operations match the new BPO node. | If primarily IT-managed services, consider 09.03.002. |
| 531210 | Offices of Real Estate Agents & Brokers | 08.03.004 | PropTech & Real Estate Platforms | Low | Digital-first brokerages and transaction platforms fit the new PropTech node. | Traditional brokerage shops remain in 08.03.001 Brokerage & Advisory. |
| 541613 | Marketing Consulting Services | 14.03.003 | Advertising & Marketing Agencies | Medium | Marketing and brand advisory aligns with the new agency subsector. | Use segment `.02` for PR-focused firms. |

For aggregated NAICS counts (2- or 3-digit data), downgrade confidence to Medium unless you have separate revenue attribution. Escalate ambiguous cases with supporting financials when requesting registry updates.

## Resources

- [NAICS 2022 Manual](https://www.census.gov/naics/)
- [DMCS Classification](../classification.md)
- [DMCS Materiality Rules](../README.md#materiality-rule)

For questions or suggested improvements, open a [GitHub issue](https://github.com/shadstradamus/DMCS/issues).
