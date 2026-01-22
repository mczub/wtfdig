import type { PageLoad } from './$types';
import { ex7FightConfig, ex7Strats } from './data';

export type {
    Alignment,
    PlayerMechStrat,
    MechanicStrat,
    PhaseStrats,
    Role,
    Strat,
    StratRecord
} from '$lib/types';

export const load: PageLoad = () => {
    return {
        strats: ex7Strats,
        config: ex7FightConfig
    };
};
