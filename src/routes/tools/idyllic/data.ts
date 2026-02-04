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
    N: '<strong>N Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-red-600">Top Right (A/1 + CW)</span>\nStack on <span class="font-bold text-red-600">1 (North)</span>',
    NE: '<strong>NE Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-yellow-400">Bottom Right (B/2 + CW)</span>\nStack on <span class="font-bold text-red-600">1 (North)</span>',
    E: '<strong>E Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-blue-500">Bottom Left (C/3 + CW)</span>\nStack on <span class="font-bold text-blue-500">3 (South)</span>',
    SE: '<strong>SE Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-purple-500">Top Left (D/4 + CW)</span>\nStack on <span class="font-bold text-blue-500">3 (South)</span>',
    S: '<strong>S Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-red-600">Top Right (A/1 + CW)</span>\nFIRST DEFAM on <span class="font-bold text-yellow-400">B (East)</span>\nStack on <span class="font-bold text-red-600">1 (North)</span>',
    SW: '<strong>SW Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-yellow-400">Bottom Right (B/2 + CW)</span>\nSECOND DEFAM on <span class="font-bold text-yellow-400">B (East)</span>\nStack on <span class="font-bold text-red-600">1 (North)</span>',
    W: '<strong>W Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-blue-500">Bottom Left (C/3 + CW)</span>\nFIRST DEFAM on <span class="font-bold text-purple-500">D (West)</span>\nStack on <span class="font-bold text-blue-500">3 (South)</span>',
    NW: '<strong>NW Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-purple-500">Top Left (D/4 + CW)</span>\nSECOND DEFAM on <span class="font-bold text-purple-500">D (West)</span>\nStack on <span class="font-bold text-blue-500">3 (South)</span>'
};

const caroTetherDescriptions: Record<TetherPosition, string> = {
    N: '<strong>N Clone</strong><span class="font-bold text-red-600">Red</span> <span class="font-bold text-purple-500">Defamation</span> for boss tethers\n1st Defam on <span class="font-bold text-red-600">A</span>\n<span class="font-bold text-yellow-400">Stack</span> on <span class="font-bold text-yellow-400">B</span>',
    NE: '<strong>NE Clone</strong><span class="font-bold text-red-600">Red</span> <span class="font-bold text-yellow-400">Stack</span> for boss tethers\n<span class="font-bold text-yellow-400">Stack</span> on <span class="font-bold text-yellow-400">B</span>',
    E: '<strong>E Clone</strong><span class="font-bold text-yellow-400">Yellow</span> <span class="font-bold text-yellow-400">Stack</span> for boss tethers\n<span class="font-bold text-yellow-400">Stack</span> on <span class="font-bold text-yellow-400">B</span>',
    SE: '<strong>SE Clone</strong><span class="font-bold text-yellow-400">Yellow</span> <span class="font-bold text-purple-500">Defamation</span> for boss tethers\n2nd Defam on <span class="font-bold text-red-600">A</span>\n<span class="font-bold text-yellow-400">Stack</span> on <span class="font-bold text-yellow-400">B</span>',
    S: '<strong>S Clone</strong><span class="font-bold text-blue-500">Blue</span> <span class="font-bold text-purple-500">Defamation</span> for boss tethers\n1st Defam on <span class="font-bold text-blue-500">C</span>\n<span class="font-bold text-yellow-400">Stack</span> on <span class="font-bold text-purple-500">D</span>',
    SW: '<strong>SW Clone</strong><span class="font-bold text-blue-500">Blue</span> <span class="font-bold text-yellow-400">Stack</span> for boss tethers\n<span class="font-bold text-yellow-400">Stack</span> on <span class="font-bold text-purple-500">D</span>',
    W: '<strong>W Clone</strong><span class="font-bold text-purple-500">Purple</span> <span class="font-bold text-yellow-400">Stack</span> for boss tethers\n<span class="font-bold text-yellow-400">Stack</span> on <span class="font-bold text-purple-500">D</span>',
    NW: '<strong>NW Clone</strong><span class="font-bold text-purple-500">Purple</span> <span class="font-bold text-purple-500">Defamation</span> for boss tethers\n2nd Defam on <span class="font-bold text-blue-500">C</span>\n<span class="font-bold text-yellow-400">Stack</span> on <span class="font-bold text-purple-500">D</span>'
};

const cozyTetherDescriptions: Record<TetherPosition, string> = {
    N: '<strong>N Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-red-600">Top Right (A/1 + CW)</span>\nStack on <span class="font-bold text-red-600">1 (North)</span>',
    NE: '<strong>NE Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-yellow-400">Bottom Right (B/2 + CW)</span>\nStack on <span class="font-bold text-red-600">1 (North)</span>',
    E: '<strong>E Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-blue-500">Bottom Left (C/3 + CW)</span>\nStack on <span class="font-bold text-yellow-400">2 (East)</span>',
    SE: '<strong>SE Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-purple-500">Top Left (D/4 + CW)</span>\nStack on <span class="font-bold text-yellow-400">2 (East)</span>',
    S: '<strong>S Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-red-600">Top Right (A/1 + CW)</span>\nFIRST DEFAM on <span class="font-bold text-blue-500">South (C)</span>\nStack on <span class="font-bold text-yellow-400">2 (East)</span>',
    SW: '<strong>SW Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-yellow-400">Bottom Right (B/2 + CW)</span>\nSECOND DEFAM on <span class="font-bold text-blue-500">South (C)</span>\nStack on <span class="font-bold text-yellow-400">2 (East)</span>',
    W: '<strong>W Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-yellow-400">Bottom Right (B/2 + CW)</span>\nFIRST DEFAM on <span class="font-bold text-purple-500">West (D)</span>\nStack on <span class="font-bold text-red-600">1 (North)</span>',
    NW: '<strong>NW Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-purple-500">Top Left (D/4 + CW)</span>\nSECOND DEFAM on <span class="font-bold text-purple-500">West (D)</span>\nStack on <span class="font-bold text-red-600">1 (North)</span>'
};

const emTetherDescriptions: Record<TetherPosition, string> = {
    N: '<strong>N Clone</strong>Take <span class="font-bold text-yellow-400">Stack</span> boss tether, swap partner is <span class="font-bold text-red-600">South (A)</span>',
    NE: '<strong>NE Clone</strong>Take <span class="font-bold text-purple-500">Defam</span> boss tether, swap partner is <span class="font-bold text-yellow-400">East (B)</span>',
    E: '<strong>E Clone</strong>Take <span class="font-bold text-yellow-400">Stack</span> boss tether, swap partner is <span class="font-bold text-yellow-400">Northeast (2)</span>',
    SE: '<strong>SE Clone</strong>Take <span class="font-bold text-purple-500">Defam</span> boss tether, swap partner is <span class="font-bold text-blue-500">South (C)</span>',
    S: '<strong>S Clone</strong>Take <span class="font-bold text-purple-500">Defam</span> boss tether, swap partner is <span class="font-bold text-red-600">North (A)</span>',
    SW: '<strong>SW Clone</strong>Take <span class="font-bold text-yellow-400">Stack</span> boss tether, swap partner is <span class="font-bold text-blue-500">Southeast (3)</span>',
    W: '<strong>W Clone</strong>Take <span class="font-bold text-purple-500">Defam</span> boss tether, swap partner is <span class="font-bold text-red-600">Northwest (1)</span>',
    NW: '<strong>NW Clone</strong>Take <span class="font-bold text-yellow-400">Stack</span> boss tether, swap partner is West <span class="font-bold text-purple-500">(D)</span>'
};

const dnUptimeTetherDescriptions: Record<TetherPosition, string> = {
    N: '<strong>N Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-red-600">Top Right (A/1 + CW)</span>\nStack on <span class="font-bold text-yellow-400">2 (East)</span>',
    NE: '<strong>NE Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-yellow-400">Bottom Right (B/2 + CW)</span>\nStack on <span class="font-bold text-yellow-400">2 (East)</span>',
    E: '<strong>E Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-blue-500">Bottom Left (C/3 + CW)</span>\nStack on <span class="font-bold text-purple-500">4 (West)</span>',
    SE: '<strong>SE Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-purple-500">Top Left (D/4 + CW)</span>\nStack on <span class="font-bold text-purple-500">4 (West)</span>',
    S: '<strong>S Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-red-600">Top Right (A/1 + CW)</span>\nFIRST DEFAM Northeast (between <span class="font-bold text-red-600">A</span> + <span class="font-bold text-yellow-400">B</span>)\nStack on <span class="font-bold text-yellow-400">2 (East)</span>',
    SW: '<strong>SW Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-yellow-400">Bottom Right (B/2 + CW)</span>\nSECOND DEFAM Northeast (between <span class="font-bold text-red-600">A</span> + <span class="font-bold text-yellow-400">B</span>)\nStack on <span class="font-bold text-yellow-400">2 (East)</span>',
    W: '<strong>W Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-blue-500">Bottom Left (C/3 + CW)</span>\nFIRST DEFAM Northwest (between <span class="font-bold text-purple-500">D</span> + <span class="font-bold text-red-600">A</span>)\nStack on <span class="font-bold text-purple-500">4 (West)</span>',
    NW: '<strong>NW Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-purple-500">Top Left (D/4 + CW)</span>\nSECOND DEFAM Northwest (between <span class="font-bold text-purple-500">D</span> + <span class="font-bold text-red-600">A</span>)\nStack on <span class="font-bold text-purple-500">4 (West)</span>'
};

export const IDYLLIC_STRATEGIES: IdyllicStrategy[] = [
    {
        value: 'dn',
        label: 'DN',
        tetherDescriptions: dnTetherDescriptions
    },
    {
        value: 'dnuptime',
        label: 'DN Uptime/Better',
        tetherDescriptions: dnUptimeTetherDescriptions
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
