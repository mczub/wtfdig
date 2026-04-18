<script lang="ts">
  import { browser } from '$app/environment';
  import { page } from '$app/state';
  import { replaceState } from '$app/navigation';
  import { untrack } from 'svelte';
  import type { Alliance, Role, Strat } from '$lib/types';
  import { buildStratCode, parseStratHash } from '$lib/utils';

  interface Props {
    fightKey: string;
    strats?: Strat[];
    stratKeys?: string[];
    getStratMechs: (stratName: string) => Record<string, string | null>;
    allianceOptions?: Alliance[];
  }

  let { fightKey, strats = [], stratKeys = [], getStratMechs, allianceOptions }: Props = $props();

  const roleStorageKey = `${fightKey}-role`;
  const partyStorageKey = `${fightKey}-party`;
  const allianceStorageKey = `${fightKey}-alliance`;

  let stratName: string | undefined = $state();
  let stratState: Record<string, string | null> = $state({});
  let role: Role | undefined | null = $state();
  let party: number | undefined = $state();
  let alliance: Alliance | undefined = $state();
  let strat = $derived(getCurrentStrat());

  function getCurrentStrat(): Strat | undefined {
    if (!stratName) return undefined;
    return strats.find((item) => item.stratName === stratName);
  }

  $effect(() => {
    if (!browser) return;
    const storedRole = localStorage.getItem(roleStorageKey);
    const storedParty = localStorage.getItem(partyStorageKey);
    if (storedRole) {
      role = JSON.parse(storedRole);
    }
    if (storedParty) {
      party = JSON.parse(storedParty);
    }
    if (allianceOptions) {
      const storedAlliance = localStorage.getItem(allianceStorageKey);
      if (storedAlliance) {
        alliance = JSON.parse(storedAlliance);
      }
    }
  });

  $effect(() => {
    if (!browser) return;
    if (role) {
      localStorage.setItem(roleStorageKey, JSON.stringify(role));
    }
    if (party) {
      localStorage.setItem(partyStorageKey, JSON.stringify(party));
    }
    if (allianceOptions && alliance) {
      localStorage.setItem(allianceStorageKey, JSON.stringify(alliance));
    }
  });

  $effect(() => {
    if (!browser) return;
    let stratCode = '';
    untrack(() => {
      stratCode = buildStratCode({
        stratName,
        stratState,
        getStratMechs,
        keys: stratKeys
      });
    });
    const urlHash = page.url.hash.substring(1);
    if (!urlHash && stratCode) {
      syncHash();
      return;
    }
    if (urlHash !== stratCode) {
      untrack(() => {
        const parsed = parseStratHash({
          hash: urlHash,
          keys: stratKeys,
          getStratMechs
        });
        if (parsed.stratName) {
          stratName = parsed.stratName;
          stratState = parsed.stratState ?? getStratMechs(parsed.stratName) ?? {};
        } else if (parsed.stratState) {
          stratState = parsed.stratState;
        }
      });
    }
  });

  function syncHash() {
    if (!browser) return;
    const stratCode = buildStratCode({
      stratName,
      stratState,
      getStratMechs,
      keys: stratKeys
    });
    replaceState(`#${stratCode}`, {});
  }

  function selectStrat(value: string) {
    stratName = value;
    stratState = getStratMechs(value) ?? {};
    syncHash();
  }

  function updateStratState(key: string, value: string) {
    stratState[key] = value;
    syncHash();
  }

  function setRoleValue(value: Role | null) {
    role = value;
  }

  function setPartyValue(value: number) {
    party = value;
  }

  function setAllianceValue(value: Alliance) {
    alliance = value;
  }
</script>

<slot
  {stratName}
  {stratState}
  {role}
  {party}
  {alliance}
  {strat}
  {selectStrat}
  setStratState={updateStratState}
  setRole={setRoleValue}
  setParty={setPartyValue}
  setAlliance={setAllianceValue}
  {strats}
/>
