import type { TimelineItem } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  return {
    strats: [],
    timeline: []
  };
};

export type Role = 'Tank' | 'Healer' | 'Melee' | 'Ranged';
export type Alignment = 'original' | 'truenorth' | 'relative';
export type StratRecord = Record<string, string | Record<string, string | PlayerMechStrat>>;

export interface PlayerMechStrat {
  role: Role;
  party: number;
  description: string | Record<string, string>;
  imageUrl?: string | Record<string, string>;
  imageRotated?: string;
  mask?: string | Record<string, string>;
  transform?: string;
  alignmentTransforms?: Record<Alignment, string>;
  alignmentImages?: Record<Alignment, string>;
  alignmentMasks?: Record<Alignment, string>;
}

export interface MechanicStrat {
  mechanic: string;
  description?: string | Record<string, string>;
  notes?: string;
  strats?: PlayerMechStrat[];
  imageUrl?: string | Record<string, string>;
}

export interface PhaseStrats {
  phaseName: string;
  tag?: string;
  description?: string | Record<string, string>;
  imageUrl?: string | Record<string, string>;
  mask?: string | Record<string, string>;
  mechs?: MechanicStrat[];
}

export interface Strat {
  stratName: string;
  stratUrl: string | Record<string, string>;
  description: string | Record<string, string>;
  notes: string;
  strats: PhaseStrats[];
}
