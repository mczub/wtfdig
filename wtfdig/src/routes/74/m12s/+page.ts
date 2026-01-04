import type { PageLoad } from './$types';
import { m12sFightConfig } from './data';

export const load: PageLoad = () => {
    return {
        config: m12sFightConfig
    };
};
