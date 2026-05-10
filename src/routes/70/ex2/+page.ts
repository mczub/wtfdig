import type { PageLoad } from './$types';
import { ex2FightConfig, ex2Strats } from './data';

export const load: PageLoad = () => {
  return {
    strats: ex2Strats,
    config: ex2FightConfig
  };
};
