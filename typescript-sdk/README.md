# DMCS TypeScript SDK

TypeScript/JavaScript library for working with the Dynamic Multi-Dimensional Classification Standard (DMCS).

The SDK bundles the taxonomy and does not require a network request for normal lookups.

## Installation

The repository is the authoritative distribution source for the current SDK code. Clone the repository and build the TypeScript package locally:

```bash
git clone https://github.com/shadstradamus/DMCS.git
cd DMCS/typescript-sdk
npm ci
npm run build
```

The package name is `dmcs-sdk`. Registry publishing should only be documented as available after a corresponding npm release has been verified.

## Quick Start

```typescript
import { Classification } from './dist';

const dmcs = new Classification();

console.log(dmcs.stats());
// {
//   version: '1.3.3',
//   release_date: '2025-11-13',
//   industries: 14,
//   sectors: 60,
//   subsectors: 241,
//   segments: 143,
//   gic_industries: 13,
//   dic_industries: 1
// }

const tech = dmcs.getById('09');
console.log(tech?.label);
// Technology

const saas = dmcs.getById('09.01.002');
console.log(saas?.label);
// Enterprise SaaS

const results = dmcs.search('blockchain');
results.forEach(result => console.log(`${result.id} — ${result.label}`));

// GIC includes industries 01-12 and 14.
const gic = dmcs.getGIC();
// DIC is the Digital & Onchain Economy, industry 13.
const dic = dmcs.getDIC();
```

## Lookup Levels

```typescript
const industry = dmcs.getById('09');
const sector = dmcs.getById('09.01');
const subsector = dmcs.getById('09.01.001');
const segment = dmcs.getById('09.01.001.02');

console.log(segment?.label);
// Supply Chain & Procurement Software
```

DMCS IDs use these forms:

- Industry: `II`
- Sector: `II.SS`
- Subsector: `II.SS.SSS`
- Segment: `II.SS.SSS.SS`

## Lifecycle Metadata

Normalized SDK objects preserve canonical lifecycle metadata:

```typescript
const segment = dmcs.getById('01.01.004.01');
console.log(segment?.since);
// 2025-11-13
console.log(segment?.status);
// active

const active = dmcs.getActive();
const sunset = dmcs.getByStatus('sunset');
```

Valid lifecycle states are `active`, `deprecated`, and `sunset`.

## API Reference

### `Classification`

Properties:

- `version: string`
- `releaseDate: string`
- `description: string`
- `industries: Industry[]`

Methods:

- `getById(id)` — lookup any hierarchy level
- `search(query, caseSensitive?)` — search labels across all hierarchy levels
- `filterByClassification(code)` — filter industries by `GIC` or `DIC`
- `getGIC()` — return all GIC industries
- `getDIC()` — return all DIC industries
- `stats()` — return release metadata and hierarchy counts
- `getActive()` — return all active nodes
- `getByStatus(status)` — filter by lifecycle status

The package exports `Industry`, `Sector`, `Subsector`, `Segment`, `ClassificationCode`, `ClassificationLevel`, `NodeStatus`, and the related raw-data interfaces from `src/types.ts`.

## CommonJS

After building:

```javascript
const { Classification } = require('./dist/index.js');

const dmcs = new Classification();
console.log(dmcs.getById('13.01'));
```

## Development

From the repository root, synchronize SDK data after canonical taxonomy changes:

```bash
python scripts/sync_sdk_data.py
python scripts/validate_release.py
```

Build the TypeScript SDK:

```bash
npm ci --prefix typescript-sdk
npm run build --prefix typescript-sdk
```

The generated `dist/` directory and `node_modules/` are build artifacts and are intentionally not source-controlled. GitHub Actions rebuilds the SDK from source on pushes and pull requests.

## Canonical Data

The TypeScript source copy of the taxonomy lives at `src/data/classification.json`, but it is generated from the repository's canonical `data/classification.json`. Do not edit the SDK copy independently.

## License

Apache 2.0 License — see [LICENSE](../LICENSE).
