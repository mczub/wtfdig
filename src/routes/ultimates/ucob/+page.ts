import type { PageLoad } from './$types';
import { ucobFightConfig, ucobStrats } from './data';

export const load: PageLoad = () => {
  return {
    strats: ucobStrats,
    config: ucobFightConfig
  };
};
