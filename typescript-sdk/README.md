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
import { Taxonomy } from 'dmcs-sdk';

const dmcs = new Taxonomy();

// Get stats
console.log(dmcs.stats());
// {
//   version: '1.0.3',
//   release_date: '2025-11-08',
//   industries: 13,
//   sectors: 55,
//   subsectors: 191,
//   p_tax_industries: 12,
//   d_tax_industries: 1
// }

// Lookup by ID
const tech = dmcs.getById('09');
console.log(tech);
// { id: '09', label: 'Technology', taxonomy: 'P-TAX', sectors: [...] }

const saas = dmcs.getById('09.01.002');
console.log(saas);
// { id: '09.01.002', label: 'Enterprise SaaS', ... }

// Search by text
const results = dmcs.search('blockchain');
results.forEach(result => console.log(result));

// Filter by taxonomy
const pTax = dmcs.getPTax();  // Traditional economy (01-12)
const dTax = dmcs.getDTax();  // Digital assets (13)

console.log(`P-TAX has ${pTax.length} industries`);
console.log(`D-TAX has ${dTax.length} industries`);
```

## JavaScript (CommonJS)

```javascript
const { Taxonomy } = require('dmcs-sdk');

const dmcs = new Taxonomy();

// Get all Technology subsectors
const tech = dmcs.getById('09');
tech.sectors.forEach(sector => {
  console.log(`${sector.id}: ${sector.label}`);
});
```

## API Reference

### `Taxonomy`

Main class for loading and querying DMCS data.

**Properties:**
- `version: string` - DMCS version
- `releaseDate: string` - Release date
- `description: string` - Taxonomy description
- `industries: Industry[]` - All industries

**Methods:**
- `getById(id: string): Classification | null` - Lookup industry, sector, or subsector by ID
- `search(query: string, caseSensitive?: boolean): Classification[]` - Search classifications by label
- `filterByTaxonomy(taxonomy: 'P-TAX' | 'D-TAX'): Industry[]` - Get industries by taxonomy
- `getPTax(): Industry[]` - Get all P-TAX industries
- `getDTax(): Industry[]` - Get all D-TAX industries
- `stats(): TaxonomyStats` - Get taxonomy statistics

### Types

**Industry**
```typescript
interface Industry {
  id: string;
  label: string;
  taxonomy: 'P-TAX' | 'D-TAX';
  sectors: Sector[];
}
```

**Sector**
```typescript
interface Sector {
  id: string;
  label: string;
  industry_id: string;
  taxonomy: 'P-TAX' | 'D-TAX';
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
  taxonomy: 'P-TAX' | 'D-TAX';
}
```

## Examples

### Classify a company

```typescript
import { Taxonomy } from 'dmcs-sdk';

const dmcs = new Taxonomy();

// Amazon: Primary = Online Marketplaces, Secondary = Cloud Platforms
const primary = dmcs.getById('04.05.002');
const secondary = dmcs.getById('09.01.004');

console.log(`Amazon Primary: ${primary?.label}`);
console.log(`Amazon Secondary: ${secondary?.label}`);
```

### Iterate through all classifications

```typescript
import { Taxonomy } from 'dmcs-sdk';

const dmcs = new Taxonomy();

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
import { Taxonomy } from 'dmcs-sdk';

const dmcs = new Taxonomy();

const blockchain = dmcs.search('blockchain');
blockchain.forEach(item => {
  console.log(`${item.id} — ${item.label}`);
});
```

## License

Apache 2.0 License - see [LICENSE](../LICENSE)
