import { Industry, Sector, Subsector, Segment, classificationStats } from './types';
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
    * @param id - Industry (II), Sector (II.SS), Subsector (II.SS.SSS), or Segment (II.SS.SSS.SS) ID
     */
    getById(id: string): Industry | Sector | Subsector | Segment | null;
    /**
     * Search classifications by label text
     * @param query - Search query
     * @param caseSensitive - Whether search should be case-sensitive (default: false)
     */
    search(query: string, caseSensitive?: boolean): Array<Industry | Sector | Subsector | Segment>;
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
