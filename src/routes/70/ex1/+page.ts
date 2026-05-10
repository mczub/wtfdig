import type { PageLoad } from './$types';
import { ex1FightConfig, ex1Strats } from './data';

export const load: PageLoad = () => {
  return {
    strats: ex1Strats,
    config: ex1FightConfig
  };
};
