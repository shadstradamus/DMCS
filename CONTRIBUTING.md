# Contributing to DMCS

Thank you for contributing to the Dynamic Multi-Dimensional Classification Standard (DMCS). DMCS is an open-source classification standard, so taxonomy changes, mappings, documentation, and SDK changes all need to preserve stable IDs and reproducible releases.

## Start Here

1. Fork the repository.
2. Create a focused branch for your change.
3. Review [CLASSIFICATION.md](./CLASSIFICATION.md), the canonical data under [`data/`](./data), and [boundary guidance](./docs/boundaries.md) when relevant.
4. Make the smallest change that solves the problem.
5. Run the synchronization and validation commands below.
6. Submit a pull request explaining what changed, why it changed, and whether the change affects taxonomy IDs, labels, mappings, SDK behavior, or release metadata.

## Canonical Data and Generated Copies

The canonical release manifest is `data/release.json`. The canonical taxonomy is `data/classification.json`, with `data/classification.csv` as its flat representation.

The SDKs carry synchronized copies of the taxonomy so they can work without fetching data at runtime. Do not hand-edit those copies independently.

After changing canonical taxonomy data or release metadata, run:

```bash
python scripts/sync_sdk_data.py
python scripts/validate_release.py
```

The sync helper copies canonical data into the Python and TypeScript SDKs and aligns TypeScript package versions. The validator checks release metadata, hierarchy integrity, IDs, lifecycle metadata, CSV/JSON consistency, SDK copies, package versions, and documentation headers.

GitHub Actions runs the same release validation and builds/tests both SDKs on pushes and pull requests.

## Ways to Contribute

### Report a Classification Gap

Open an issue when a real business model cannot be represented cleanly by the existing taxonomy. Include the entity or activity you are trying to classify, the closest existing nodes, why those nodes are insufficient, and representative examples.

### Propose a Taxonomy Node

For a new sector, subsector, or segment, provide:

- proposed label and parent node;
- a concise business-model definition;
- at least three representative real-world examples when possible;
- why existing nodes do not fit;
- likely boundary conflicts; and
- whether the proposal changes only coverage or also requires mapping/documentation updates.

Maintainers assign official IDs. Do not repurpose or reuse an existing ID, including an ID that has been deprecated or sunset.

### Improve Documentation or Mappings

Documentation corrections, examples, boundary clarification, and GICS/ICB/TRBC/NAICS mapping improvements are welcome. Mapping changes should identify the source code, proposed DMCS target, confidence, rationale, and material edge cases.

### Contribute SDK Code

SDK contributions should preserve behavioral parity between Python and TypeScript where practical. Public lookup semantics, lifecycle metadata, classification codes, and release statistics should remain consistent across implementations.

## Taxonomy Rules

DMCS uses the hierarchy:

```text
Industry (II)
└─ Sector (II.SS)
   └─ Subsector (II.SS.SSS)
      └─ Segment (II.SS.SSS.SS) [optional]
```

IDs are stable. Once issued, an ID is never reassigned to a different concept. Labels may be clarified through a documented release, while lifecycle status communicates whether a node is `active`, `deprecated`, or `sunset`.

All nodes must preserve correct `parent_id`, `industry_id`, `sector_id`, and, for segments, `subsector_id` relationships. `since` dates use ISO `YYYY-MM-DD` format. Classification values are `GIC` or `DIC`.

## Primary and Secondary Classification

Use the DMCS methodology and boundary guidance rather than classifying by branding alone. Revenue mix is normally the first signal, followed by earnings contribution, asset base for balance-sheet-driven entities, and management emphasis when the financial signals remain inconclusive.

A materially different business line may receive a secondary classification when it meets the applicable DMCS materiality threshold. Document the rationale so the decision can be audited later.

## Pull Request Checklist

Before opening a PR, confirm that:

- IDs are unique and correctly formatted.
- Existing IDs were not reused.
- Parent and derived hierarchy fields are correct.
- `classification`, `since`, and `status` metadata are valid.
- `data/classification.json` and `data/classification.csv` agree.
- SDK copies are synchronized with canonical data.
- Python and TypeScript SDK behavior remains aligned.
- Documentation examples reference current IDs and labels.
- `python scripts/validate_release.py` passes.
- Python SDK tests pass with `pytest python-sdk/tests`.
- TypeScript builds with `npm ci --prefix typescript-sdk` followed by `npm run build --prefix typescript-sdk`.

## Change Categories

**Documentation or mapping correction:** No canonical ID changes. Usually suitable for a normal pull request after validation.

**Label refinement:** The ID remains stable. Update canonical data, documentation, mappings if affected, and the changelog.

**New segment or subsector:** Requires a taxonomy proposal and review. New IDs must follow the existing allocation pattern.

**Structural change:** New sectors, industries, large reorganization, or changes affecting classification methodology require public discussion and maintainer approval before implementation.

**Hotfix:** Reserved for clear data, packaging, or SDK defects where the intended taxonomy is already established.

## Review Principles

Contributions are evaluated for accuracy, consistency, clarity, interoperability, backward compatibility, and usefulness. Taxonomy proposals should be evidence-based and avoid creating overlapping nodes for short-lived market terminology.

DMCS seeks consensus through public discussion, while maintainers retain final responsibility for ID assignment, release integrity, and structural consistency.

## Security Issues

Do not report undisclosed security vulnerabilities in a public issue. Follow [SECURITY.md](./SECURITY.md) and use GitHub Private Vulnerability Reporting.

## License

By contributing, you agree that your contribution will be distributed under the repository's Apache 2.0 license.
