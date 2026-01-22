import type { PageLoad } from './$types';
import { m9sFightConfig, m9sStrats } from './data';

export const load: PageLoad = () => {
  return {
    strats: m9sStrats,
    config: m9sFightConfig
  };
};
