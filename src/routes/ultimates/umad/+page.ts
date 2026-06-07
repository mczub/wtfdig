import type { PageLoad } from './$types';
import { dancingMadFightConfig, dancingMadStrats } from './data';

export const load: PageLoad = () => {
  return {
    strats: dancingMadStrats,
    config: dancingMadFightConfig
  };
};
