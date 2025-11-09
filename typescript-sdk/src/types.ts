export type ClassificationCode = 'GIC' | 'DIC';

export interface RawSubsector {
  id: string;
  label: string;
}

export interface RawSector {
  id: string;
  label: string;
  subsectors: RawSubsector[];
}

export interface RawIndustry {
  id: string;
  label: string;
  classification: ClassificationCode;
  sectors: RawSector[];
}

export interface RawclassificationData {
  dmcs_version: string;
  release_date: string;
  description: string;
  industries: RawIndustry[];
}

export interface Subsector extends RawSubsector {
  sector_id: string;
  industry_id: string;
  classification: ClassificationCode;
}

export interface Sector extends RawSector {
  industry_id: string;
  classification: ClassificationCode;
  subsectors: Subsector[];
}

export interface Industry {
  id: string;
  label: string;
  classification: ClassificationCode;
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
  gic_industries: number;
  dic_industries: number;
}

export type Classification = Industry | Sector | Subsector;
