import type { PageLoad } from './$types';
import { m7sFightConfig, m7sStrats } from './data';

export const load: PageLoad = () => {
    return {
        strats: m7sStrats,
        config: m7sFightConfig
    };
};
