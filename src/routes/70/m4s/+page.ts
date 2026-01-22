import type { PageLoad } from './$types';
import { m4sFightConfig, m4sStrats } from './data';

export type {
  Alignment,
  PlayerMechStrat,
  MechanicStrat,
  PhaseStrats,
  Role,
  Strat,
  StratRecord
} from '$lib/types';

export const load: PageLoad = () => {
  return {
    strats: m4sStrats,
    config: m4sFightConfig
  };
};
