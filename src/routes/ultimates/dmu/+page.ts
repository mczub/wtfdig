import type { PageLoad } from './$types';
import { dancingMadFightConfig, dancingMadMessage } from './data';

export const load: PageLoad = () => {
  return {
    config: dancingMadFightConfig,
    message: dancingMadMessage
  };
};
