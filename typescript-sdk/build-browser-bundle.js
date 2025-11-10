// Build browser IIFE bundle from TypeScript SDK
const fs = require('fs');
const path = require('path');

// Read the compiled JS modules
const indexJs = fs.readFileSync(path.join(__dirname, 'dist', 'index.js'), 'utf8');
const classificationData = require('./dist/data/classification.json');

// Create IIFE bundle
const bundle = `
(function(window) {
  'use strict';
  
  // Embed classification data
  const classificationData = ${JSON.stringify(classificationData, null, 2)};
  
  // Classification types
  function normalizeClassification(raw) {
    const industries = raw.industries.map((industry) => {
      const sectors = industry.sectors.map((sector) => {
        const subsectors = sector.subsectors.map((subsector) => ({
          ...subsector,
          sector_id: sector.id,
          industry_id: industry.id,
          classification: industry.classification,
        }));
        return {
          ...sector,
          industry_id: industry.id,
          classification: industry.classification,
          subsectors,
        };
      });
      return {
        ...industry,
        sectors,
      };
    });
    return {
      dmcs_version: raw.dmcs_version,
      release_date: raw.release_date,
      description: raw.description,
      industries,
    };
  }
  
  class Classification {
    constructor() {
      this.data = normalizeClassification(classificationData);
    }
    
    get version() {
      return this.data.dmcs_version;
    }
    
    get releaseDate() {
      return this.data.release_date;
    }
    
    get description() {
      return this.data.description;
    }
    
    get industries() {
      return this.data.industries;
    }
    
    getById(id) {
      const parts = id.split('.');
      if (parts.length === 1) {
        return this.industries.find(i => i.id === id) || null;
      }
      if (parts.length === 2) {
        const industry = this.getById(parts[0]);
        if (!industry) return null;
        return industry.sectors.find(s => s.id === id) || null;
      }
      if (parts.length === 3) {
        const sector = this.getById(parts[0] + '.' + parts[1]);
        if (!sector) return null;
        return sector.subsectors.find(s => s.id === id) || null;
      }
      return null;
    }
    
    search(query, caseSensitive = false) {
      const results = [];
      const searchQuery = caseSensitive ? query : query.toLowerCase();
      for (const industry of this.industries) {
        const industryLabel = caseSensitive ? industry.label : industry.label.toLowerCase();
        if (industryLabel.includes(searchQuery)) {
          results.push(industry);
        }
        for (const sector of industry.sectors) {
          const sectorLabel = caseSensitive ? sector.label : sector.label.toLowerCase();
          if (sectorLabel.includes(searchQuery)) {
            results.push(sector);
          }
          for (const subsector of sector.subsectors) {
            const subsectorLabel = caseSensitive ? subsector.label : subsector.label.toLowerCase();
            if (subsectorLabel.includes(searchQuery)) {
              results.push(subsector);
            }
          }
        }
      }
      return results;
    }
    
    filterByClassification(classification) {
      return this.industries.filter(i => i.classification === classification);
    }
    
    getGIC() {
      return this.filterByClassification('GIC');
    }
    
    getDIC() {
      return this.filterByClassification('DIC');
    }
    
    stats() {
      const totalSectors = this.industries.reduce((sum, ind) => sum + ind.sectors.length, 0);
      const totalSubsectors = this.industries.reduce(
        (sum, ind) => sum + ind.sectors.reduce((s, sec) => s + sec.subsectors.length, 0),
        0
      );
      return {
        version: this.version,
        release_date: this.releaseDate,
        industries: this.industries.length,
        sectors: totalSectors,
        subsectors: totalSubsectors,
        gic_industries: this.getGIC().length,
        dic_industries: this.getDIC().length,
      };
    }
  }
  
  // Expose to window
  window.DMCS_SDK = {
    Classification: Classification,
    taxonomy: new Classification()
  };
  
})(window);
`.trim();

// Write bundle
const outputPath = path.join(__dirname, 'dist', 'dmcs-bundle.js');
fs.writeFileSync(outputPath, bundle, 'utf8');

console.log(`✅ Browser bundle created: ${outputPath}`);
console.log(`   Size: ${(bundle.length / 1024).toFixed(1)} KB`);
