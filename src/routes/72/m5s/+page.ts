import type { PageLoad } from './$types';
import { m5sFightConfig, m5sStrats } from './data';

export const load: PageLoad = () => {
  return {
    strats: m5sStrats,
    config: m5sFightConfig
  };
};
