// Idyllic Dream Solver Data
// Extracts and processes the tether assignment logic from M12S strategies

export type TetherPosition = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW';

export interface IdyllicStrategy {
    value: string;
    label: string;
    tetherDescriptions: Record<TetherPosition, string>;
}

// Strategy-specific tether descriptions
// These are extracted from the "What Does My Tether Do?" sections in m12s/data.ts
const dnTetherDescriptions: Record<TetherPosition, string> = {
    N: '<strong>N Clone</strong>Take STACK tether from Top Right (A/1 + CW)\nStack on 1 (North)',
    NE: '<strong>NE Clone</strong>Take STACK tether from Bottom Right (B/2 + CW)\nStack on 1 (North)',
    E: '<strong>E Clone</strong>Take STACK tether from Bottom Left (C/3 + CW)\nStack on 3 (South)',
    SE: '<strong>SE Clone</strong>Take STACK tether from Bottom Right (D/4 + CW)\nStack on 3 (South)',
    S: '<strong>S Clone</strong>Take DEFAM tether from Top Right (A/1 + CW)\nFIRST DEFAM on B\nStack on 1 (North)',
    SW: '<strong>SW Clone</strong>Take DEFAM tether from Bottom Right (B/2 + CW)\nSECOND DEFAM on B\nStack on 1 (North)',
    W: '<strong>W Clone</strong>Take DEFAM tether from Bottom Right (B/2 + CW)\nFIRST DEFAM on D\nStack on 3 (South)',
    NW: '<strong>NW Clone</strong>Take DEFAM tether from Top Left (D/4 + CW)\nSECOND DEFAM on D\nStack on 3 (South)'
};

const caroTetherDescriptions: Record<TetherPosition, string> = {
    N: '<strong>N Clone</strong>Red Defamation for boss tethers\n1st Defam on A\nStack on B',
    NE: '<strong>NE Clone</strong>Red Stack for boss tethers\nStack on B',
    E: '<strong>E Clone</strong>Yellow Stack for boss tethers\nStack on B',
    SE: '<strong>SE Clone</strong>Yellow Defamation for boss tethers\n2nd Defam on A\nStack on B',
    S: '<strong>S Clone</strong>Blue Defamation for boss tethers\n1st Defam on C\nStack on D',
    SW: '<strong>SW Clone</strong>Blue Stack for boss tethers\nStack on D',
    W: '<strong>W Clone</strong>Purple Stack for boss tethers\nStack on D',
    NW: '<strong>NW Clone</strong>Purple Defamation for boss tethers\n2nd Defam on C\nStack on D'
};

const cozyTetherDescriptions: Record<TetherPosition, string> = {
    N: '<strong>N Clone</strong>Take STACK tether from Top Right (A/1 + CW)\nStack North (1)',
    NE: '<strong>NE Clone</strong>Take STACK tether from Bottom Right (B/2 + CW)\nStack North (1)',
    E: '<strong>E Clone</strong>Take STACK tether from Bottom Left (C/3 + CW)\nStack East (2)',
    SE: '<strong>SE Clone</strong>Take STACK tether from Bottom Right (D/4 + CW)\nStack East (2)',
    S: '<strong>S Clone</strong>Take DEFAM tether from Top Right (A/1 + CW)\nFIRST DEFAM South (C)\nStack East (2)',
    SW: '<strong>SW Clone</strong>Take DEFAM tether from Bottom Right (B/2 + CW)\nSECOND DEFAM South (C)\nStack East (2)',
    W: '<strong>W Clone</strong>Take DEFAM tether from Bottom Right (B/2 + CW)\nFIRST DEFAM West (D)\nStack North (1)',
    NW: '<strong>NW Clone</strong>Take DEFAM tether from Top Left (D/4 + CW)\nSECOND DEFAM West (D)\nStack North (1)'
};

const emTetherDescriptions: Record<TetherPosition, string> = {
    N: '<strong>N Clone</strong>Take Stack boss tether, swap partner is South (A)',
    NE: '<strong>NE Clone</strong>Take Defam boss tether, swap partner is East (B)',
    E: '<strong>E Clone</strong>Take Stack boss tether, swap partner is Northeast (2)',
    SE: '<strong>SE Clone</strong>Take Defam boss tether, swap partner is South (C)',
    S: '<strong>S Clone</strong>Take Defam boss tether, swap partner is North (A)',
    SW: '<strong>SW Clone</strong>Take Stack boss tether, swap partner is Southeast (3)',
    W: '<strong>W Clone</strong>Take Defam boss tether, swap partner is Northwest (1)',
    NW: '<strong>NW Clone</strong>Take Stack boss tether, swap partner is West (D)'
};

const dnUptimeTetherDescriptions: Record<TetherPosition, string> = {
    N: '<strong>N Clone</strong>Take Stack tether from Top Right (A/1 + CW)\nStack East (2)',
    NE: '<strong>NE Clone</strong>Take Stack tether from Bottom Right (B/2 + CW)\nStack East (2)',
    E: '<strong>E Clone</strong>Take Stack tether from Bottom Left (C/3 + CW)\nStack West (4)',
    SE: '<strong>SE Clone</strong>Take Stack tether from Bottom Right (D/4 + CW)\nStack West (4)',
    S: '<strong>S Clone</strong>Take Defam tether from Top Right (A/1 + CW)\n1st Defam Northeast (between A + B)\nStack East (2)',
    SW: '<strong>SW Clone</strong>Take Defam tether from Bottom Right (B/2 + CW)\n2nd Defam Northeast (between A + B)\nStack East (2)',
    W: '<strong>W Clone</strong>Take Defam tether from Bottom Left (C/3 + CW)\n1st Defam Northwest (between D + A)\nStack West (4)',
    NW: '<strong>NW Clone</strong>Take Defam tether from Top Left (D/4 + CW)\n2nd Defam Northwest (between D + A)\nStack West (4)'
};

export const IDYLLIC_STRATEGIES: IdyllicStrategy[] = [
    {
        value: 'dn',
        label: 'DN',
        tetherDescriptions: dnTetherDescriptions
    },
    {
        value: 'caro',
        label: 'Caro (wqc)',
        tetherDescriptions: caroTetherDescriptions
    },
    {
        value: 'cozy',
        label: 'DN + Cozy Clone',
        tetherDescriptions: cozyTetherDescriptions
    },
    {
        value: 'dnuptime',
        label: 'DN w/ Uptime',
        tetherDescriptions: dnUptimeTetherDescriptions
    },
    {
        value: 'em',
        label: 'Emergency Meeting',
        tetherDescriptions: emTetherDescriptions
    }
];

export const TETHER_POSITIONS: TetherPosition[] = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

export function getTetherDescription(
    strategyValue: string,
    position: TetherPosition
): string {
    const strategy = IDYLLIC_STRATEGIES.find((s) => s.value === strategyValue);
    if (!strategy) return 'Select a strategy and tether position';
    return strategy.tetherDescriptions[position] || 'Unknown position';
}
