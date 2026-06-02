import type { PageLoad } from './$types';
import { fruFightConfig, fruStrats } from './data';

export const load: PageLoad = () => {
  return {
    strats: fruStrats,
    config: fruFightConfig
  };
};
