import type { ArenaDiagramData } from '$lib/arena';

export interface ResolvedPosterSection {
  title: string;
  col: number;
  row: number;
  w: number;
  h: number;
  accentColor: string;
  arena: ArenaDiagramData;
  highlight?: string[];
}
