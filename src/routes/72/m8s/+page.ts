import type { PageLoad } from './$types';
import { m8sStrats, m8sFightConfig } from './data';

export const load: PageLoad = ({ params }) => {
        return {
                strats: m8sStrats,
                config: m8sFightConfig
        }
}
