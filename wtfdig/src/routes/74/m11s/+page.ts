import type { PageLoad } from './$types';
import { m11sFightConfig } from './data';

export const load: PageLoad = () => {
    return {
        config: m11sFightConfig
    };
};
