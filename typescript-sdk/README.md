# DMCS TypeScript SDK

TypeScript/JavaScript library for working with the Dynamic Multi-Dimensional Classification Standard (DMCS).

## Installation

```bash
npm install dmcs-sdk
```

Or install from the repository:

```bash
npm install git+https://github.com/shadstradamus/DMCS.git#subdirectory=typescript-sdk
```

## Quick Start

```typescript
import { Classification } from 'dmcs-sdk';

const dmcs = new Classification();

// Get stats
console.log(dmcs.stats());
// {
//   version: '1.1.0',
//   release_date: '2025-11-09',
//   industries: 13,
//   sectors: 55,
//   subsectors: 190,
//   segments: 14,
//   gic_industries: 12,
//   dic_industries: 1
// }

// Lookup by ID
const tech = dmcs.getById('09');
console.log(tech);
// { id: '09', label: 'Technology', classification: 'GIC', sectors: [...] }

const saas = dmcs.getById('09.01.002');
console.log(saas);
// { id: '09.01.002', label: 'Enterprise SaaS', ... }

// Search by text
const results = dmcs.search('blockchain');
results.forEach(result => console.log(result));

// Filter by classification
const gic = dmcs.getGIC();  // Traditional economy (01-12)
const dic = dmcs.getDIC();  // Digital assets (13)

console.log(`GIC has ${gic.length} industries`);
console.log(`DIC has ${dic.length} industries`);
```

## JavaScript (CommonJS)

```javascript
const { Classification } = require('dmcs-sdk');

const dmcs = new Classification();

// Get all Technology subsectors
const tech = dmcs.getById('09');
tech.sectors.forEach(sector => {
  console.log(`${sector.id}: ${sector.label}`);
});
```

## API Reference

### `Classification`

Main class for loading and querying DMCS data.

**Properties:**
- `version: string` - DMCS version
- `releaseDate: string` - Release date
- `description: string` - Classification description
- `industries: Industry[]` - All industries

**Methods:**
- `getById(id: string): Classification | null` - Lookup industry, sector, subsector, or segment by ID
- `search(query: string, caseSensitive?: boolean): Classification[]` - Search classifications by label
- `filterByClassification(classification: 'GIC' | 'DIC'): Industry[]` - Get industries by classification
- `getGIC(): Industry[]` - Get all GIC industries
- `getDIC(): Industry[]` - Get all DIC industries
- `stats(): ClassificationStats` - Get classification statistics

### Types

**Industry**
```typescript
interface Industry {
  id: string;
  label: string;
  classification: 'GIC' | 'DIC';
  sectors: Sector[];
}
```

**Sector**
```typescript
interface Sector {
  id: string;
  label: string;
  industry_id: string;
  classification: 'GIC' | 'DIC';
  subsectors: Subsector[];
}
```

**Subsector**
```typescript
interface Subsector {
  id: string;
  label: string;
  sector_id: string;
  industry_id: string;
  classification: 'GIC' | 'DIC';
  segments: Segment[];
}
```

**Segment**
```typescript
interface Segment {
  id: string;
  label: string;
  subsector_id: string;
  sector_id: string;
  industry_id: string;
  classification: 'GIC' | 'DIC';
}
```

## Examples

### Classify a company

```typescript
import { Classification } from 'dmcs-sdk';

const dmcs = new Classification();

// Amazon: Primary = Online Marketplaces, Secondary = Cloud Platforms
const primary = dmcs.getById('04.05.002');
const secondary = dmcs.getById('09.01.004');

console.log(`Amazon Primary: ${primary?.label}`);
console.log(`Amazon Secondary: ${secondary?.label}`);
```

### Iterate through all classifications

```typescript
import { Classification } from 'dmcs-sdk';

const dmcs = new Classification();

for (const industry of dmcs.industries) {
  console.log(`\n${industry.id} — ${industry.label}`);
  for (const sector of industry.sectors) {
    console.log(`  ${sector.id} — ${sector.label}`);
    for (const subsector of sector.subsectors) {
      console.log(`    ${subsector.id} — ${subsector.label}`);
    }
  }
}
```

### Find all blockchain-related classifications

```typescript
import { Classification } from 'dmcs-sdk';

const dmcs = new Classification();

const blockchain = dmcs.search('blockchain');
blockchain.forEach(item => {
  console.log(`${item.id} — ${item.label}`);
});
```

## License

Apache 2.0 License - see [LICENSE](../LICENSE)
