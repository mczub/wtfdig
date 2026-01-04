import type { PageLoad } from './$types';
import { m9sFightConfig } from './data';

export const load: PageLoad = () => {
    return {
        config: m9sFightConfig
    };
};
