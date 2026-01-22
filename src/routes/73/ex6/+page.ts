import type { PageLoad } from './$types';
import { ex6FightConfig, ex6Strats } from './data';

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
    strats: ex6Strats,
    config: ex6FightConfig
  };
};
