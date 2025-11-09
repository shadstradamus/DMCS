import { Industry, Sector, Subsector, classificationStats } from './types';
export declare class Classification {
    private data;
    constructor();
    /**
     * Get Classification version
     */
    get version(): string;
    /**
     * Get release date
     */
    get releaseDate(): string;
    /**
     * Get description
     */
    get description(): string;
    /**
     * Get all industries
     */
    get industries(): Industry[];
    /**
     * Lookup classification by ID
     * @param id - Industry (II), Sector (II.SS), or Subsector (II.SS.SSS) ID
     */
    getById(id: string): Industry | Sector | Subsector | null;
    /**
     * Search classifications by label text
     * @param query - Search query
     * @param caseSensitive - Whether search should be case-sensitive (default: false)
     */
    search(query: string, caseSensitive?: boolean): Array<Industry | Sector | Subsector>;
    /**
     * Filter industries by classification
     * @param classification - "GIC" or "DIC"
     */
    filterByClassification(classification: 'GIC' | 'DIC'): Industry[];
    /**
     * Get all GIC (General Industry Classification) industries
     */
    getGIC(): Industry[];
    /**
     * Get all DIC (Digital Industry Classification) industries
     */
    getDIC(): Industry[];
    /**
     * Get Classification statistics
     */
    stats(): classificationStats;
}
export * from './types';
