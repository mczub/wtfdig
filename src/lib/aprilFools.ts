import type { FightConfig, Strat, PhaseStrats } from './types';

const WORDS = [
  'Hector',
  'JP',
  'Braindead',
  'Uptime',
  'Bilibili',
  'Better',
  'Optimal',
  'Bald',
  'WTFDIG',
  'Normal',
  'PF'
];

function generateJokeStratName(): string {
  const shuffled = [...WORDS].sort(() => Math.random() - 0.5);
  const count = 3 + Math.floor(Math.random() * 2); // 3 or 4 words
  return shuffled.slice(0, count).join(' ');
}

function generateJokePhases(strats: Strat[]): PhaseStrats[] {
  if (strats.length === 0) return [];
  // Use the strat with the most phases as the template
  const baseStrat = strats.reduce((a, b) => (a.strats.length >= b.strats.length ? a : b));

  return baseStrat.strats.map((_, index) => {
    const candidates = strats.filter((s) => s.strats[index] !== undefined);
    const randomStrat = candidates[Math.floor(Math.random() * candidates.length)];
    return randomStrat.strats[index];
  });
}

export function isAprilFools(): boolean {
  const now = new Date();
  // Convert to Pacific time
  const pacific = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
  const month = pacific.getMonth(); // 0-indexed: 2 = March, 3 = April
  const date = pacific.getDate();
  const hour = pacific.getHours();

  // Start: 6pm Pacific on March 31
  // End: midnight Pacific on April 2 (i.e., all of April 1)
  if (month === 2 && date === 31 && hour >= 18) return true;
  if (month === 3 && date === 1) return true;
  return false;
}

export function generateAprilFoolsData(
  strats: Strat[],
  configStrats: FightConfig['strats']
): {
  strat: Strat;
  configEntry: FightConfig['strats'][string];
} {
  const name = generateJokeStratName();
  const phases = generateJokePhases(strats);

  // Collect all possible values for each default key across strats, then pick one randomly per key
  const valuesByKey: Record<string, string[]> = {};
  for (const entry of Object.values(configStrats)) {
    if (!entry.defaults) continue;
    for (const [key, value] of Object.entries(entry.defaults)) {
      (valuesByKey[key] ??= []).push(value);
    }
  }
  const defaults: Record<string, string> = {};
  for (const [key, values] of Object.entries(valuesByKey)) {
    const unique = [...new Set(values)];
    defaults[key] = unique[Math.floor(Math.random() * unique.length)];
  }

  return {
    strat: {
      stratName: 'aprilfools',
      description: '🏆 The Most Optimal, Perfect Strat',
      stratUrl: '',
      strats: phases
    },
    configEntry: {
      label: name,
      badges: [{ text: '🏆', class: 'trophy-badge' }],
      defaults
    }
  };
}
