import type { PageLoad } from './$types';
import { m10sFightConfig, m10sStrats } from './data';

export const load: PageLoad = () => {
    return {
        strats: m10sStrats,
        config: m10sFightConfig
    };
};
