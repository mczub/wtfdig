import type { PageLoad } from './$types';
import { chaoticStrats, chaoticFightConfig } from './data';

export const load: PageLoad = () => {
  return {
    strats: chaoticStrats,
    config: chaoticFightConfig
  };
};
