"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classification = void 0;
const ClassificationData = __importStar(require("./data/classification.json"));
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
        this.data = normalizeClassification(ClassificationData);
    }
    /**
     * Get Classification version
     */
    get version() {
        return this.data.dmcs_version;
    }
    /**
     * Get release date
     */
    get releaseDate() {
        return this.data.release_date;
    }
    /**
     * Get description
     */
    get description() {
        return this.data.description;
    }
    /**
     * Get all industries
     */
    get industries() {
        return this.data.industries;
    }
    /**
     * Lookup classification by ID
     * @param id - Industry (II), Sector (II.SS), or Subsector (II.SS.SSS) ID
     */
    getById(id) {
        const parts = id.split('.');
        // Industry lookup
        if (parts.length === 1) {
            return this.industries.find(i => i.id === id) || null;
        }
        // Sector lookup
        if (parts.length === 2) {
            const industry = this.getById(parts[0]);
            if (!industry)
                return null;
            return industry.sectors.find(s => s.id === id) || null;
        }
        // Subsector lookup
        if (parts.length === 3) {
            const sector = this.getById(`${parts[0]}.${parts[1]}`);
            if (!sector)
                return null;
            return sector.subsectors.find(s => s.id === id) || null;
        }
        return null;
    }
    /**
     * Search classifications by label text
     * @param query - Search query
     * @param caseSensitive - Whether search should be case-sensitive (default: false)
     */
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
    /**
     * Filter industries by classification
     * @param classification - "GIC" or "DIC"
     */
    filterByClassification(classification) {
        return this.industries.filter(i => i.classification === classification);
    }
    /**
     * Get all GIC (General Industry Classification) industries
     */
    getGIC() {
        return this.filterByClassification('GIC');
    }
    /**
     * Get all DIC (Digital Industry Classification) industries
     */
    getDIC() {
        return this.filterByClassification('DIC');
    }
    /**
     * Get Classification statistics
     */
    stats() {
        const totalSectors = this.industries.reduce((sum, ind) => sum + ind.sectors.length, 0);
        const totalSubsectors = this.industries.reduce((sum, ind) => sum + ind.sectors.reduce((s, sec) => s + sec.subsectors.length, 0), 0);
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
exports.Classification = Classification;
__exportStar(require("./types"), exports);
