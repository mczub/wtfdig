import type { PageLoad } from './$types';
import { dancingMadFightConfig, dancingMadMessage } from '../dmu/data';

export const load: PageLoad = () => {
  return {
    config: dancingMadFightConfig,
    message: dancingMadMessage
  };
};
