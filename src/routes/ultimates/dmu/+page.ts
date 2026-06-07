import type { PageLoad } from './$types';
import { dancingMadFightConfig, dancingMadStrats } from '../umad/data';

export const load: PageLoad = () => {
  return {
    strats: dancingMadStrats,
    config: dancingMadFightConfig
  };
};
