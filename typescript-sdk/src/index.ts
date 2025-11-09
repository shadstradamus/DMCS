import * as taxonomyData from './data/taxonomy.json';
import {
  Industry,
  Sector,
  Subsector,
  TaxonomyData,
  TaxonomyStats,
  Classification,
  RawTaxonomyData,
} from './types';

function normalizeTaxonomy(raw: RawTaxonomyData): TaxonomyData {
  const industries: Industry[] = raw.industries.map(industry => {
    const sectors: Sector[] = industry.sectors.map(sector => {
      const subsectors: Subsector[] = sector.subsectors.map(subsector => ({
        ...subsector,
        sector_id: sector.id,
        industry_id: industry.id,
        taxonomy: industry.taxonomy,
      }));

      return {
        ...sector,
        industry_id: industry.id,
        taxonomy: industry.taxonomy,
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

export class Taxonomy {
  private data: TaxonomyData;

  constructor() {
    this.data = normalizeTaxonomy(taxonomyData as RawTaxonomyData);
  }

  /**
   * Get taxonomy version
   */
  get version(): string {
    return this.data.dmcs_version;
  }

  /**
   * Get release date
   */
  get releaseDate(): string {
    return this.data.release_date;
  }

  /**
   * Get description
   */
  get description(): string {
    return this.data.description;
  }

  /**
   * Get all industries
   */
  get industries(): Industry[] {
    return this.data.industries;
  }

  /**
   * Lookup classification by ID
   * @param id - Industry (II), Sector (II.SS), or Subsector (II.SS.SSS) ID
   */
  getById(id: string): Classification | null {
    const parts = id.split('.');

    // Industry lookup
    if (parts.length === 1) {
      return this.industries.find(i => i.id === id) || null;
    }

    // Sector lookup
    if (parts.length === 2) {
      const industry = this.getById(parts[0]) as Industry | null;
      if (!industry) return null;
      return industry.sectors.find(s => s.id === id) || null;
    }

    // Subsector lookup
    if (parts.length === 3) {
      const sector = this.getById(`${parts[0]}.${parts[1]}`) as Sector | null;
      if (!sector) return null;
      return sector.subsectors.find(s => s.id === id) || null;
    }

    return null;
  }

  /**
   * Search classifications by label text
   * @param query - Search query
   * @param caseSensitive - Whether search should be case-sensitive (default: false)
   */
  search(query: string, caseSensitive = false): Classification[] {
    const results: Classification[] = [];
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

  /**
   * Filter industries by taxonomy
   * @param taxonomy - "P-TAX" or "D-TAX"
   */
  filterByTaxonomy(taxonomy: 'P-TAX' | 'D-TAX'): Industry[] {
    return this.industries.filter(i => i.taxonomy === taxonomy);
  }

  /**
   * Get all P-TAX industries
   */
  getPTax(): Industry[] {
    return this.filterByTaxonomy('P-TAX');
  }

  /**
   * Get all D-TAX industries
   */
  getDTax(): Industry[] {
    return this.filterByTaxonomy('D-TAX');
  }

  /**
   * Get taxonomy statistics
   */
  stats(): TaxonomyStats {
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
      p_tax_industries: this.getPTax().length,
      d_tax_industries: this.getDTax().length,
    };
  }
}

export * from './types';
