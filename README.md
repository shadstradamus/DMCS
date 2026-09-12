<p align="center">
  <img src="assets/dmcs-logo.svg" alt="DMCS Logo" width="800">
</p>

**Version 1.3.3** | **Release Date:** 2025-11-13 | **License:** Apache 2.0

# DMCS — Dynamic Multi-Dimensional Classification Standard

DMCS is a free, open-source industry classification standard for companies, digital assets, and modern business models. It combines a stable four-level hierarchy with explicit lifecycle metadata, primary/secondary classification guidance, machine-readable data, legacy-system mappings, and SDKs for Python and TypeScript.

The standard is designed to cover both established industries and business models that traditional classification systems often handle poorly, including SaaS, platform businesses, digital marketplaces, blockchain infrastructure, digital-asset services, DeFi, and other onchain activity.

## Current Release

DMCS **1.3.3** contains:

| Level | Count |
| --- | ---: |
| Industries | 14 |
| Sectors | 60 |
| Subsectors | 241 |
| Segments | 143 |
| **Total nodes** | **458** |

The full human-readable tree is maintained in [CLASSIFICATION.md](./CLASSIFICATION.md). Canonical machine-readable data lives under [`data/`](./data).

## Classification Framework

DMCS uses two top-level classification families:

- **GIC — General Industry Classification:** industries 01-12 and 14
- **DIC — Digital Industry Classification:** industry 13, Digital & Onchain Economy

The current industries are:

| ID | Industry | Type |
| --- | --- | --- |
| 01 | Energy | GIC |
| 02 | Basic Materials | GIC |
| 03 | Industrials | GIC |
| 04 | Consumer Discretionary | GIC |
| 05 | Consumer Staples | GIC |
| 06 | Healthcare | GIC |
| 07 | Financial Services | GIC |
| 08 | Real Estate | GIC |
| 09 | Technology | GIC |
| 10 | Communications & Media | GIC |
| 11 | Utilities | GIC |
| 12 | Government / Public / Education | GIC |
| 13 | Digital & Onchain Economy | DIC |
| 14 | Professional & Business Services | GIC |

## Hierarchy and IDs

DMCS uses a four-level hierarchy with fixed-width numeric identifiers:

```text
Industry (II)
└─ Sector (II.SS)
   └─ Subsector (II.SS.SSS)
      └─ Segment (II.SS.SSS.SS) [optional]
```

Example:

```text
09                 Technology
09.01              Software & Platforms
09.01.001          Application Software
09.01.001.02       Supply Chain & Procurement Software
```

Valid IDs follow:

```regex
^\d{2}(\.\d{2})?(\.\d{3})?(\.\d{2})?$
```

DMCS IDs are intended to be stable. Existing IDs are not reassigned to unrelated concepts. A node may be relabeled through a documented release, while its lifecycle state records whether it remains current.

## Lifecycle Metadata

Canonical nodes carry hierarchy and lifecycle metadata such as:

```json
{
  "level": "segment",
  "id": "01.01.004.01",
  "label": "Oilfield Services",
  "parent_id": "01.01.004",
  "subsector_id": "01.01.004",
  "sector_id": "01.01",
  "industry_id": "01",
  "classification": "GIC",
  "since": "2025-11-13",
  "status": "active"
}
```

Lifecycle states are:

- `active` — current classification node
- `deprecated` — retained for compatibility but discouraged for new classification
- `sunset` — no longer current; ID remains reserved for historical continuity

## Canonical Files

| File | Purpose |
| --- | --- |
| [`data/classification.json`](./data/classification.json) | Canonical hierarchical taxonomy |
| [`data/classification.csv`](./data/classification.csv) | Canonical flat representation |
| [`data/release.json`](./data/release.json) | Release version, date, and expected counts |
| [CLASSIFICATION.md](./CLASSIFICATION.md) | Human-readable taxonomy reference |
| [`docs/boundaries.md`](./docs/boundaries.md) | Guidance for common classification edge cases |
| [`mappings/`](./mappings) | Crosswalk guidance for GICS, ICB, TRBC, and NAICS |

`data/release.json` and `data/classification.json` must agree on version and release date. The validation tooling also verifies that the recorded counts match the actual taxonomy.

## Classification Methodology

DMCS is intended to classify the economics of an entity rather than its branding alone. For mixed businesses, use the following order of evidence:

1. external revenue mix;
2. earnings contribution when revenue is inconclusive;
3. asset base for balance-sheet-driven businesses such as banks, insurers, and property companies; and
4. management emphasis and market perception as tie-breakers when the financial evidence remains unclear.

The primary classification should represent the dominant business. A materially different activity may receive a secondary classification when it meets the applicable DMCS materiality threshold. See [boundary guidance](./docs/boundaries.md) for examples involving data centers, mobility platforms, facilities services, advertising platforms, media distribution, betting, and DePIN.

## Python SDK

The Python SDK lives in [`python-sdk/`](./python-sdk) and ships with the taxonomy data it queries.

Install directly from the repository:

```bash
pip install "git+https://github.com/shadstradamus/DMCS.git#subdirectory=python-sdk"
```

Example:

```python
from dmcs_sdk import classification

DMCS = classification()
print(DMCS.version)
# 1.3.3

node = DMCS.get_by_id("09.01.001.02")
print(node.label)
# Supply Chain & Procurement Software

print(DMCS.stats())
```

See [python-sdk/README.md](./python-sdk/README.md) for the full SDK guide.

## TypeScript / JavaScript SDK

The TypeScript SDK lives in [`typescript-sdk/`](./typescript-sdk). The repository is the authoritative source for the current package code.

```bash
git clone https://github.com/shadstradamus/DMCS.git
cd DMCS/typescript-sdk
npm ci
npm run build
```

Example after building:

```javascript
const { Classification } = require('./dist/index.js');

const dmcs = new Classification();
console.log(dmcs.version);
// 1.3.3
```

See [typescript-sdk/README.md](./typescript-sdk/README.md) for API usage and build instructions.

## Mapping from Legacy Systems

DMCS includes crosswalk guidance for:

- GICS
- ICB
- TRBC
- NAICS

These mappings are approximate because the source systems differ in methodology and granularity. Always validate the recommended DMCS node against the actual entity and preserve the original classification during migration when auditability matters.

See [mappings/README.md](./mappings/README.md).

## Release Integrity

DMCS includes repository tooling to keep release metadata, canonical data, SDK copies, and package metadata synchronized.

After changing canonical taxonomy data or release metadata, run:

```bash
python scripts/sync_sdk_data.py
python scripts/validate_release.py
```

`sync_sdk_data.py` copies canonical taxonomy data into both SDKs and aligns TypeScript package metadata. `validate_release.py` checks:

- release version and date consistency;
- recorded versus actual node counts;
- unique and correctly formatted IDs;
- parent/child hierarchy relationships;
- GIC/DIC values;
- lifecycle status and `since` dates;
- JSON/CSV consistency;
- SDK data synchronization;
- TypeScript package versions; and
- README / classification-document release headers.

GitHub Actions runs release validation plus Python SDK tests and a TypeScript build/smoke test on pushes and pull requests.

## Development

Python:

```bash
python -m pip install -e "./python-sdk[dev]"
pytest python-sdk/tests
```

TypeScript:

```bash
npm ci --prefix typescript-sdk
npm run build --prefix typescript-sdk
```

Generated artifacts such as `node_modules/`, `dist/`, Python `__pycache__/`, and `*.egg-info/` are not source files and should not be committed.

## Governance and Contributions

DMCS accepts taxonomy proposals, mapping improvements, documentation corrections, and SDK changes through GitHub issues and pull requests. Official IDs are assigned by maintainers so that collisions and ID reuse are avoided.

Before contributing, read [CONTRIBUTING.md](./CONTRIBUTING.md). Security issues should follow [SECURITY.md](./SECURITY.md) and be reported privately rather than through a public issue.

## License

DMCS is licensed under the [Apache License 2.0](./LICENSE), including commercial use subject to the license terms.

## Project Status

DMCS 1.3.3 is the current stable taxonomy release. Repository maintenance changes may improve SDK correctness, release validation, documentation, and packaging without changing the taxonomy version. A new DMCS version should be reserved for a public taxonomy or release change rather than routine repository cleanup.
