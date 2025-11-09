# Contributing to DMCS

Thank you for your interest in contributing to the Dynamic Multi-Dimensional Classification Standard (DMCS)!

DMCS is a community-driven open-source project. We welcome contributions from anyone who wants to improve classification for the modern economy.

## Quick Start

1. **Fork** the repository
2. **Create a branch** for your changes
3. **Make your changes** (new classifications, documentation, code, etc.)
4. **Submit a pull request** with a clear description
5. **Participate in review** and address feedback
6. **Get merged!** Quality contributions are welcomed

## Ways to Contribute

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
   - Proposed label and parent sector/industry
   - 3-5 example entities that would use this classification
   - Business model description (how it differs from existing subsectors)
3. **Tag it** with `enhancement` or `taxonomy-proposal`
4. **Community discussion** happens in the issue thread
5. If approved, maintainers assign the next available ID and merge

**Note:** New IDs are assigned by maintainers to avoid collisions. Popular DMCS-CUST nodes may be promoted to official status.

### 3. Improve Documentation

- Fix typos, unclear language, or broken links
- Add examples or use cases
- Improve migration guidance (GICS/ICB/TRBC/NAICS mapping)
- Enhance Python SDK or API documentation

**→ Submit a pull request** with your changes.

### 4. Contribute Code

- Improve Python SDK functionality
- Add new API endpoints
- Create SDKs for other languages (JavaScript/TypeScript, Rust, Go, etc.)
- Build tools and integrations

**→ Follow code quality standards** and submit a pull request.

### 5. Build Mapping Tables

Help build mapping tables from legacy systems:

- **GICS → DMCS**
- **ICB → DMCS**
- **TRBC → DMCS**
- **NAICS → DMCS**

Include source code, target DMCS ID, and reasoning for non-obvious mappings.

## Contribution Guidelines

### Code of Conduct

- **Be respectful and constructive** — Focus on improving the standard, not criticizing contributors
- **Evidence-based discussions** — Back proposals with examples, data, or business logic
- **Collaborative spirit** — Work together to find the best classification structure
- **Assume good intent** — We're all working toward the same goal

### Pull Request Process

1. **Fork the repository** and create a feature branch
2. **Make your changes** (taxonomy, documentation, code, examples)
3. **Test your changes**:
   - For taxonomy: Verify IDs don't conflict, hierarchy is correct
   - For code: Run tests, ensure code quality
   - For docs: Check for broken links, formatting issues
4. **Commit with clear messages**:
   - `feat: add subsector 10.03.003 Messaging & Communications Apps`
   - `docs: fix typo in README.md`
   - `sdk: add search by taxonomy filter`
5. **Submit PR** with a clear description of what changed and why
6. **Respond to feedback** — Maintainers or community may suggest improvements
7. **Get merged!** — Once approved, your contribution becomes part of DMCS

### Review Process

**Timeline:**
- Documentation/bug fixes: Typically reviewed within 1-3 days
- Code contributions: Reviewed within 3-5 days
- Taxonomy proposals: Require community discussion, typically 7-14 days

**Criteria for approval:**
- **Accuracy** — Changes are factually correct and well-researched
- **Consistency** — Follows existing patterns and design principles
- **Clarity** — Well-documented with examples where appropriate
- **Value** — Addresses a real need or improves the standard

## Governance Model

### Decision-Making Process

DMCS uses a **community-driven governance model** with the following principles:

1. **Open Discussion** — All major changes are discussed publicly in GitHub issues
2. **Consensus-Seeking** — We aim for broad agreement, not just majority vote
3. **Maintainer Discretion** — Core maintainers have final say on structural changes to preserve consistency
4. **Transparent Rationale** — Decisions are documented with clear reasoning

### Roles

**Contributors** (Anyone)
- Open issues, submit PRs, participate in discussions
- No special permissions required
- All constructive contributions are welcome

**Community Members** (Active Contributors)
- Regular contributors who have submitted quality PRs
- Participate in proposal reviews and discussions
- Help onboard new contributors

**Maintainers** (Core Team)
- Review and merge PRs
- Assign new classification IDs
- Make final decisions on taxonomy structure
- Coordinate releases
- Currently: Project founder and designated maintainers

### Taxonomy Change Process

**Minor Changes** (Label refinements, documentation, examples):
- Submit PR → Review → Merge
- No formal approval process needed
- Released in next thematic update

**Major Changes** (New subsectors, sectors, or structural reorganization):
1. **Proposal** — Open GitHub issue with `taxonomy-proposal` label
2. **Discussion** — Community weighs in (minimum 7 days for structural changes)
3. **Refinement** — Author updates proposal based on feedback
4. **Decision** — Maintainers approve or request changes
5. **Implementation** — Approved proposals are merged and ID is assigned
6. **Release** — Included in next structural release

**Criteria for Approval:**
- Addresses a genuine classification gap (3+ real-world examples)
- Fits logically within existing hierarchy
- Doesn't overlap with existing classifications
- Has clear business model definition
- Community consensus (no major objections)

## Governance

DMCS follows a flexible release schedule:

| Release Type | Frequency | Scope |
|--------------|-----------|-------|
| **Structural** | As needed (typically 1-2×/year) | New sectors, subsectors, ID assignments |
| **Thematic** | As needed | Label updates, refinements (no ID changes) |

**Release Philosophy:**
- We release when there's meaningful value, not on arbitrary schedules
- Structural releases typically happen 1-2× per year as the economy evolves
- Hotfixes for errors or critical gaps can be released immediately

### Becoming a Maintainer

Community members who consistently contribute quality work may be invited to join as maintainers. Criteria:
- Multiple merged PRs (taxonomy proposals, code, or documentation)
- Active participation in proposal discussions
- Demonstrated understanding of DMCS design principles
- Commitment to collaborative decision-making

## Questions?

- **GitHub Issues** — Taxonomy questions, bug reports, or feature requests
- **GitHub Discussions** — General questions, ideas, or community chat
- **Email** — For sensitive or private matters, contact the maintainers (see repository)

Thank you for helping DMCS evolve with the modern economy!
