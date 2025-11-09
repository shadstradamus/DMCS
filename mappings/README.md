# DMCS Mapping Tables

Cross-reference tables for migrating from legacy classification systems to DMCS.

## Overview

These mapping tables help organizations transition from existing industry classification standards to DMCS. Each table provides approximate mappings based on business model and operational characteristics.

**Important Notes:**
- Mappings are **approximate guidance**, not 1:1 equivalents
- Companies should validate classifications based on actual revenue/activity mix
- When in doubt, refer to DMCS materiality rules (≥25-30% threshold for secondary)
- Store both legacy and DMCS codes during transition for audit trails

## Available Mappings

### GICS (Global Industry Classification Standard)
- **Source:** [GICS to DMCS Mapping](./gics-to-dmcs.md)
- **Coverage:** S&P 500, MSCI indices
- **Use Case:** Equity research, portfolio management
- **Structure:** 11 sectors → 25 industry groups → 74 industries → 163 sub-industries

### ICB (Industry Classification Benchmark)
- **Source:** [ICB to DMCS Mapping](./icb-to-dmcs.md)
- **Coverage:** FTSE indices, European markets
- **Use Case:** International equity benchmarking
- **Structure:** 11 industries → 20 supersectors → 45 sectors → 173 subsectors


### TRBC (Refinitiv Business Classification)
- **Source:** [TRBC to DMCS Mapping](./trbc-to-dmcs.md)
- **Coverage:** Refinitiv/LSEG data, global corporate universe
- **Use Case:** Financial data platforms, risk analytics
- **Structure:** 10 economic sectors → 28 business sectors → 54 industry groups → 136 industries

### NAICS (North American Industry Classification System)
- **Source:** [NAICS to DMCS Mapping](./naics-to-dmcs.md)
- **Coverage:** US/Canada government statistics, regulatory filings
- **Use Case:** Government data, economic analysis, compliance
- **Structure:** 20 sectors → 99 subsectors → 311 industry groups → 709 industries

## How to Use

1. **Identify your legacy classification**: Look up the current GICS/ICB/TRBC/NAICS code
2. **Find DMCS equivalent**: Reference the appropriate mapping table
3. **Validate materiality**: Confirm the DMCS classification matches ≥70% of revenue/activity
4. **Check for secondary**: If another industry represents ≥25-30%, assign as secondary
5. **Document both codes**: Store legacy + DMCS codes for transition tracking

## Mapping Format

Each mapping table includes:
- **Legacy Code & Label**: Original classification system identifier
- **DMCS Primary**: Recommended primary classification
- **DMCS Secondary**: Common secondary classifications (if applicable)
- **Notes**: Key differences, edge cases, materiality guidance

## Contributing

Found an issue or have a better mapping suggestion?
1. Open an issue describing the discrepancy
2. Provide context: company examples, revenue mix, rationale
3. Community review and discussion
4. Accepted improvements merged into official mappings

## Disclaimer

These mappings are provided as **guidance only**. DMCS and the legacy systems have different philosophies and granularity levels. Always:
- Review actual company business models
- Apply DMCS materiality rules
- Consult official DMCS taxonomy documentation when uncertain
- Document classification decisions for audit purposes

For questions about specific mappings, open a GitHub discussion or issue.
