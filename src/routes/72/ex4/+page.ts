import type { PageLoad } from './$types';
import { ex4Strats, ex4FightConfig } from './data';

export const load: PageLoad = () => {
  return {
    strats: ex4Strats,
    config: ex4FightConfig
  };
};
