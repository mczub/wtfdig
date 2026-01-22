import type { PageLoad } from './$types';
import { ex5FightConfig, ex5Strats } from './data';

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
    strats: ex5Strats,
    config: ex5FightConfig
  };
};
