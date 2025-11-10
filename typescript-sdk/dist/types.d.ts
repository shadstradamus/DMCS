export type ClassificationCode = 'GIC' | 'DIC';
export type ClassificationLevel = 'industry' | 'sector' | 'subsector' | 'segment';
export type NodeStatus = 'active' | 'deprecated' | 'retired';
export interface RawSegment {
    id: string;
    label: string;
    level: 'segment';
    parent_id: string;
    subsector_id: string;
    sector_id: string;
    industry_id: string;
    classification: ClassificationCode;
    segment_code?: string;
    since?: string;
    status?: NodeStatus;
}
export interface RawSubsector {
    id: string;
    label: string;
    level: 'subsector';
    parent_id: string;
    sector_id: string;
    industry_id: string;
    classification: ClassificationCode;
    segments?: RawSegment[];
    since?: string;
    status?: NodeStatus;
}
export interface RawSector {
    id: string;
    label: string;
    level: 'sector';
    parent_id: string;
    industry_id: string;
    classification: ClassificationCode;
    subsectors: RawSubsector[];
    since?: string;
    status?: NodeStatus;
}
export interface RawIndustry {
    id: string;
    label: string;
    level: 'industry';
    parent_id: string | null;
    classification: ClassificationCode;
    sectors: RawSector[];
    since?: string;
    status?: NodeStatus;
}
export interface RawclassificationData {
    dmcs_version: string;
    release_date: string;
    description: string;
    industries: RawIndustry[];
}
export interface Segment extends RawSegment {
}
export interface Subsector extends RawSubsector {
    segments: Segment[];
}
export interface Sector extends RawSector {
    subsectors: Subsector[];
}
export interface Industry extends RawIndustry {
    sectors: Sector[];
}
export interface classificationData {
    dmcs_version: string;
    release_date: string;
    description: string;
    industries: Industry[];
}
export interface classificationStats {
    version: string;
    release_date: string;
    industries: number;
    sectors: number;
    subsectors: number;
    segments: number;
    gic_industries: number;
    dic_industries: number;
}
export type Classification = Industry | Sector | Subsector | Segment;
