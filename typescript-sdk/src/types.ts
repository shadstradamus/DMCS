export type TaxonomyCode = 'P-TAX' | 'D-TAX';

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
  taxonomy: TaxonomyCode;
  sectors: RawSector[];
}

export interface RawTaxonomyData {
  dmcs_version: string;
  release_date: string;
  description: string;
  industries: RawIndustry[];
}

export interface Subsector extends RawSubsector {
  sector_id: string;
  industry_id: string;
  taxonomy: TaxonomyCode;
}

export interface Sector extends RawSector {
  industry_id: string;
  taxonomy: TaxonomyCode;
  subsectors: Subsector[];
}

export interface Industry {
  id: string;
  label: string;
  taxonomy: TaxonomyCode;
  sectors: Sector[];
}

export interface TaxonomyData {
  dmcs_version: string;
  release_date: string;
  description: string;
  industries: Industry[];
}

export interface TaxonomyStats {
  version: string;
  release_date: string;
  industries: number;
  sectors: number;
  subsectors: number;
  p_tax_industries: number;
  d_tax_industries: number;
}

export type Classification = Industry | Sector | Subsector;
