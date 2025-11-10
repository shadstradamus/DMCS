const { Classification } = require('./dist');

const c = new Classification();

console.log('=== DMCS CLASSIFICATION SDK VALIDATION ===\n');

// Stats
console.log('Statistics:');
console.log(c.stats());
console.log('');

// Hierarchy traversal
console.log('=== Hierarchy Tests ===');
console.log('Industry 09:', c.getById('09').label);
console.log('Sector 09.01:', c.getById('09.01').label);
console.log('Subsector 09.01.001:', c.getById('09.01.001').label);
console.log('Segment 09.01.001.01:', c.getById('09.01.001.01').label);
console.log('');

console.log('Industry 13:', c.getById('13').label);
console.log('Sector 13.02:', c.getById('13.02').label);
console.log('Subsector 13.02.004:', c.getById('13.02.004').label);
console.log('Segment 13.02.004.02:', c.getById('13.02.004.02').label);
console.log('');

// Search test
console.log('=== Search Tests ===');
console.log('Search "stablecoin":', c.search('stablecoin').map(x => `${x.id} ${x.label}`));
console.log('Search "blockchain":', c.search('blockchain').map(x => `${x.id} ${x.label}`));
console.log('Search "software":', c.search('software').map(x => `${x.id} ${x.label}`));
console.log('');

// Classification filters
console.log('=== Classification Filters ===');
console.log('GIC industries count:', c.getGIC().length);
console.log('DIC industries count:', c.getDIC().length);
console.log('DIC industry:', c.getDIC()[0].label);
console.log('');

// Field structure validation
console.log('=== Field Structure Validation ===');
const segment = c.getById('13.01.001.01');
console.log('Segment object keys:', Object.keys(segment));
console.log('Segment structure:', segment);
console.log('');

const subsector = c.getById('13.01.001');
delete subsector.segments; // Remove for clarity
console.log('Subsector object keys:', Object.keys(subsector));
console.log('Subsector structure:', subsector);
console.log('');

const sector = c.getById('13.01');
delete sector.subsectors; // Remove for clarity
console.log('Sector object keys:', Object.keys(sector));
console.log('Sector structure:', sector);
console.log('');

const industry = c.getById('13');
delete industry.sectors; // Remove for clarity
console.log('Industry object keys:', Object.keys(industry));
console.log('Industry structure:', industry);
console.log('');

console.log('=== VALIDATION COMPLETE ===');
