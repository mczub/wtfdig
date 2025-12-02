import type { PageLoad } from './$types';
import { m6sStrats, m6sFightConfig } from './data';

export const load: PageLoad = () => {
    return {
        strats: m6sStrats,
        config: m6sFightConfig
    };
};
