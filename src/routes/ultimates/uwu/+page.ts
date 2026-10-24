import type { PageLoad } from './$types';
import { uwuFightConfig, uwuStrats } from './data';

export const load: PageLoad = () => {
  return {
    strats: uwuStrats,
    config: uwuFightConfig
  };
};
