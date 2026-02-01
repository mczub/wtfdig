import type { PageLoad } from './$types';
import { m1sFightConfig, m1sStrats } from './data';

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
    strats: m1sStrats,
    config: m1sFightConfig
  };
};
