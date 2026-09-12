// Build a standalone browser IIFE bundle from the compiled DMCS TypeScript SDK data.
const fs = require('fs');
const path = require('path');

const classificationData = require('./dist/data/classification.json');

const bundle = `
(function(window) {
  'use strict';

  const classificationData = ${JSON.stringify(classificationData, null, 2)};

  function normalizeClassification(raw) {
    const industries = raw.industries.map((industry) => {
      const sectors = industry.sectors.map((sector) => {
        const subsectors = sector.subsectors.map((subsector) => {
          const segments = (subsector.segments || []).map((segment) => ({
            ...segment,
            parent_id: segment.parent_id || subsector.id,
            subsector_id: segment.subsector_id || subsector.id,
            sector_id: segment.sector_id || sector.id,
            industry_id: segment.industry_id || industry.id,
            classification: segment.classification || industry.classification,
            status: segment.status || 'active'
          }));

          return {
            ...subsector,
            parent_id: subsector.parent_id || sector.id,
            sector_id: subsector.sector_id || sector.id,
            industry_id: subsector.industry_id || industry.id,
            classification: subsector.classification || industry.classification,
            status: subsector.status || 'active',
            segments
          };
        });

        return {
          ...sector,
          parent_id: sector.parent_id || industry.id,
          industry_id: sector.industry_id || industry.id,
          classification: sector.classification || industry.classification,
          status: sector.status || 'active',
          subsectors
        };
      });

      return {
        ...industry,
        status: industry.status || 'active',
        sectors
      };
    });

    return {
      dmcs_version: raw.dmcs_version,
      release_date: raw.release_date,
      description: raw.description,
      industries
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
        return this.industries.find((industry) => industry.id === id) || null;
      }

      if (parts.length === 2) {
        const industry = this.getById(parts[0]);
        return industry ? industry.sectors.find((sector) => sector.id === id) || null : null;
      }

      if (parts.length === 3) {
        const sector = this.getById(parts[0] + '.' + parts[1]);
        return sector ? sector.subsectors.find((subsector) => subsector.id === id) || null : null;
      }

      if (parts.length === 4) {
        const subsector = this.getById(parts[0] + '.' + parts[1] + '.' + parts[2]);
        return subsector ? (subsector.segments || []).find((segment) => segment.id === id) || null : null;
      }

      return null;
    }

    search(query, caseSensitive = false) {
      const results = [];
      const needle = caseSensitive ? query : query.toLowerCase();
      const matches = (label) => {
        const value = caseSensitive ? label : label.toLowerCase();
        return value.includes(needle);
      };

      for (const industry of this.industries) {
        if (matches(industry.label)) results.push(industry);
        for (const sector of industry.sectors) {
          if (matches(sector.label)) results.push(sector);
          for (const subsector of sector.subsectors) {
            if (matches(subsector.label)) results.push(subsector);
            for (const segment of subsector.segments || []) {
              if (matches(segment.label)) results.push(segment);
            }
          }
        }
      }

      return results;
    }

    filterByClassification(classification) {
      return this.industries.filter((industry) => industry.classification === classification);
    }

    getGIC() {
      return this.filterByClassification('GIC');
    }

    getDIC() {
      return this.filterByClassification('DIC');
    }

    getByStatus(status) {
      const results = [];
      for (const industry of this.industries) {
        if (industry.status === status) results.push(industry);
        for (const sector of industry.sectors) {
          if (sector.status === status) results.push(sector);
          for (const subsector of sector.subsectors) {
            if (subsector.status === status) results.push(subsector);
            for (const segment of subsector.segments || []) {
              if (segment.status === status) results.push(segment);
            }
          }
        }
      }
      return results;
    }

    getActive() {
      return this.getByStatus('active');
    }

    stats() {
      const sectors = this.industries.reduce((sum, industry) => sum + industry.sectors.length, 0);
      const subsectors = this.industries.reduce(
        (sum, industry) => sum + industry.sectors.reduce(
          (sectorSum, sector) => sectorSum + sector.subsectors.length,
          0
        ),
        0
      );
      const segments = this.industries.reduce(
        (sum, industry) => sum + industry.sectors.reduce(
          (sectorSum, sector) => sectorSum + sector.subsectors.reduce(
            (subsectorSum, subsector) => subsectorSum + (subsector.segments || []).length,
            0
          ),
          0
        ),
        0
      );

      return {
        version: this.version,
        release_date: this.releaseDate,
        industries: this.industries.length,
        sectors,
        subsectors,
        segments,
        gic_industries: this.getGIC().length,
        dic_industries: this.getDIC().length
      };
    }
  }

  window.DMCS_SDK = {
    Classification,
    taxonomy: new Classification()
  };
})(window);
`.trim();

const distDir = path.join(__dirname, 'dist');
fs.mkdirSync(distDir, { recursive: true });

const bundlePath = path.join(distDir, 'dmcs-bundle.js');
fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log(`Browser bundle created: ${bundlePath}`);
console.log(`Size: ${(Buffer.byteLength(bundle, 'utf8') / 1024).toFixed(1)} KB`);

const externalOutputDir = process.env.DMCS_BROWSER_OUTPUT_DIR;
if (externalOutputDir) {
  const resolvedOutputDir = path.resolve(externalOutputDir);
  fs.mkdirSync(resolvedOutputDir, { recursive: true });
  const externalPath = path.join(resolvedOutputDir, 'dmcs-bundle.js');
  fs.copyFileSync(bundlePath, externalPath);
  console.log(`Browser bundle copied to: ${externalPath}`);
}
