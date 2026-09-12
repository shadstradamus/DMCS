# DMCS Mapping Tables

Cross-reference guidance for migrating from legacy classification systems to DMCS.

## Overview

These mappings help organizations translate existing industry classifications into DMCS. They are **guidance, not guaranteed 1:1 equivalents**: DMCS is entity- and business-model-oriented, while some source systems use different units, hierarchies, or classification rules.

When using a mapping:

- Validate the result against the entity's actual revenue and activity mix.
- Use DMCS materiality rules when deciding whether a secondary classification is warranted.
- Preserve the legacy code alongside the DMCS code during migration for auditability.
- Prefer a DMCS subsector unless a segment clearly matches the entity or product line.

## Available Mappings

### GICS (Global Industry Classification Standard)

- **Source:** [GICS to DMCS Mapping](./gics-to-dmcs.md)
- **Use case:** Equity research and portfolio classification

### ICB (Industry Classification Benchmark)

- **Source:** [ICB to DMCS Mapping](./icb-to-dmcs.md)
- **Use case:** International equity benchmarking and migration

### TRBC (Refinitiv Business Classification)

- **Source:** [TRBC to DMCS Mapping](./trbc-to-dmcs.md)
- **Use case:** Financial-data platforms and risk analytics

### NAICS (North American Industry Classification System)

- **Source:** [NAICS to DMCS Mapping](./naics-to-dmcs.md)
- **Use case:** Government data, economic analysis, and compliance workflows

> **Important:** NAICS is generally establishment-based while DMCS is designed for entity-level classification. Aggregate the relevant establishment activity before assigning the consolidated entity's DMCS classification.

## Recommended Migration Process

1. Identify the current legacy code and source-system level.
2. Locate the closest DMCS node in the corresponding mapping table.
3. Validate the placement against the entity's business model and external revenue mix.
4. Apply a secondary DMCS classification when another materially different activity meets the DMCS secondary-classification threshold.
5. Document the legacy code, DMCS code, effective date, and rationale.
6. Re-evaluate the classification after material acquisitions, divestitures, or sustained changes in revenue mix.

## Mapping Table Format

The mapping tables use a common schema where practical:

- **Source Code** — Legacy identifier
- **Source Label** — Legacy description
- **DMCS Node** — Recommended DMCS ID
- **DMCS Label** — Current DMCS label
- **Confidence** — High / Medium / Low structural fit
- **Rationale** — Why the mapping is appropriate
- **Edge Notes** — Known caveats or boundary guidance

## Segment-Level Guidance

DMCS v1.3.3 contains **143 segments** beneath its 241 subsectors. Legacy systems often do not provide an equivalent level of granularity, so mappings should normally resolve to a subsector first and only then be refined to a segment when the business line is unambiguous.

Example:

- **Legacy:** GICS 45102010 — Application Software
- **DMCS subsector:** `09.01.001` — Application Software
- **Possible DMCS segments:**
  - `09.01.001.01` — ERP / Finance Suites
  - `09.01.001.02` — Supply Chain & Procurement Software
  - `09.01.001.03` — HCM / Workforce

If the entity spans multiple segments or the available evidence does not support segment-level precision, retain the subsector classification.

Segments are especially useful for competitive analysis, product-line research, portfolio construction, and risk analysis where subsector-level grouping is too broad.

## Boundary Guidance

Mappings should be read together with [DMCS Boundary Guidance](../docs/boundaries.md), especially for business models that can reasonably fall into more than one industry. Revenue mix is the primary signal, followed by earnings contribution, asset base where relevant, and management emphasis when financial signals remain inconclusive.

## Contributing Mapping Improvements

If a mapping appears inaccurate or incomplete, open an issue with:

- the source system and code;
- the proposed DMCS node;
- one or more representative entities;
- the business-model rationale; and
- any known edge cases.

Accepted corrections should update the mapping table without changing canonical DMCS IDs unless a separate taxonomy proposal has been approved.

## Disclaimer

These tables are migration aids. DMCS and the referenced legacy systems use different methodologies and granularity, so organizations should validate classifications independently and document their decisions for audit purposes.
