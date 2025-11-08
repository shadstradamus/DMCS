# Contributing to DMCS

Thank you for your interest in contributing to the Dynamic Multi-Dimensional Classification Standard (DMCS)!

## How to Contribute

DMCS is an open-source classification standard designed to evolve with the modern economy. Contributions can take many forms:

### 1. Report Issues or Gaps

If you notice:
- A business model or industry segment that doesn't fit existing subsectors
- Classification edge cases or ambiguities
- Errors in the taxonomy or documentation
- Inconsistencies in ID assignments or labels

**→ Open an issue** describing the gap, including:
- The entity/business model you're trying to classify
- Why existing subsectors don't fit
- Suggested placement or new subsector name

### 2. Propose New Subsectors or Sectors

If you believe a new classification node is needed:

1. **Check existing taxonomy** — review [TAXONOMY.md](./TAXONOMY.md) to ensure it doesn't already exist
2. **Open an issue** with:
   - Proposed ID (leave blank if unsure)
   - Proposed label and parent sector/industry
   - 3-5 example entities that would use this classification
   - Business model description (how it differs from existing subsectors)
3. **Tag it** with `enhancement` or `taxonomy-proposal`

**Note:** New IDs are assigned by maintainers to avoid collisions. Popular DMCS-CUST nodes may be promoted to official status.

### 3. Improve Documentation

- Fix typos, unclear language, or broken links
- Add examples or use cases
- Improve migration guidance (GICS/ICB/TRBC/NAICS mapping)

**→ Submit a pull request** with your changes.

### 4. Contribute Mappings

Help build mapping tables from legacy systems:

- **GICS → DMCS**
- **ICB → DMCS**
- **TRBC → DMCS**
- **NAICS → DMCS**

Include source code, target DMCS ID, and reasoning for non-obvious mappings.

### 5. Build Tools and Integrations

We welcome:
- API wrappers or SDKs (Python, JavaScript, etc.)
- Data export scripts (JSON, CSV, SQL)
- Visualization tools
- Classification lookup utilities

Share your work in the Discussions or link from the README.

## Contribution Guidelines

### Code of Conduct

- Be respectful and constructive
- Focus on the classification logic, not individual companies
- Keep discussions technical and evidence-based

### Pull Request Process

1. **Fork the repository** and create a feature branch
2. **Make your changes** (documentation, data, examples)
3. **Test** — ensure no broken links or formatting issues
4. **Commit** with clear, descriptive messages:
   - `docs: fix typo in README.md`
   - `taxonomy: add example for 13.02.005`
   - `mapping: add GICS financials to DMCS 07.x`
5. **Submit PR** and describe what changed and why

### Review Process

- Maintainers review PRs for accuracy, consistency, and alignment with DMCS principles
- Taxonomy changes (new IDs, structural shifts) require discussion and may be batched into structural releases
- Documentation and mapping PRs are typically merged faster

## Governance

DMCS follows a predictable release schedule:

| Release Type | Frequency | Scope |
|--------------|-----------|-------|
| **Structural** | 2×/year | New sectors, subsectors, ID assignments |
| **Thematic** | Monthly/Quarterly | Label updates, theme additions (no ID changes) |

**Structural releases** are planned for:
- **Q2** (mid-year update)
- **Q4** (year-end update)

Community proposals are reviewed quarterly and incorporated into the next structural release if approved.

## Questions?

- Open an issue for taxonomy questions
- Use Discussions for general questions or ideas
- Email maintainers for sensitive or private matters (TBD)

Thank you for helping DMCS evolve with the modern economy!
