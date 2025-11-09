import * as ClassificationData from './data/classification.json';
import {
  Industry,
  Sector,
  Subsector,
  classificationData as ClassificationDataType,
  classificationStats,
  ClassificationCode,
  RawclassificationData,
} from './types';

function normalizeClassification(raw: RawclassificationData): ClassificationDataType {
  const industries: Industry[] = raw.industries.map((industry: any) => {
    const sectors: Sector[] = industry.sectors.map((sector: any) => {
      const subsectors: Subsector[] = sector.subsectors.map((subsector: any) => ({
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

export class Classification {
  private data: ClassificationDataType;

  constructor() {
    this.data = normalizeClassification(ClassificationData as RawclassificationData);
  }

  /**
   * Get Classification version
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
  getById(id: string): Industry | Sector | Subsector | null {
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
  search(query: string, caseSensitive = false): Array<Industry | Sector | Subsector> {
    const results: Array<Industry | Sector | Subsector> = [];
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
   * Filter industries by classification
   * @param classification - "GIC" or "DIC"
   */
  filterByClassification(classification: 'GIC' | 'DIC'): Industry[] {
    return this.industries.filter(i => i.classification === classification);
  }

  /**
   * Get all GIC (General Industry Classification) industries
   */
  getGIC(): Industry[] {
    return this.filterByClassification('GIC');
  }

  /**
   * Get all DIC (Digital Industry Classification) industries
   */
  getDIC(): Industry[] {
    return this.filterByClassification('DIC');
  }

  /**
   * Get Classification statistics
   */
  stats(): classificationStats {
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

export * from './types';
