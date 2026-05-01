import type { PageLoad } from './$types';
import { ex8FightConfig, ex8Strats } from './data';

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
    strats: ex8Strats,
    config: ex8FightConfig
  };
};
