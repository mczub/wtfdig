import type { PageLoad } from './$types';
import { ex3FightConfig, ex3Strats } from './data';

export const load: PageLoad = () => {
  return {
    strats: ex3Strats,
    config: ex3FightConfig
  };
};
