import type { PageLoad } from './$types';
import { m12sFightConfig, m12sStrats } from './data';

export const load: PageLoad = () => {
    return {
        strats: m12sStrats,
        config: m12sFightConfig
    };
};
