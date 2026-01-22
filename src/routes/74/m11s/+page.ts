import type { PageLoad } from './$types';
import { m11sFightConfig, m11sStrats } from './data';

export const load: PageLoad = () => {
    return {
        strats: m11sStrats,
        config: m11sFightConfig
    };
};
