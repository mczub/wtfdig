<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { replaceState } from '$app/navigation';
	import { untrack } from 'svelte';
	import type { Role, Strat } from '$lib/types';
	import { buildStratCode, parseStratHash } from '$lib/utils';

	interface Props {
		fightKey: string;
		strats?: Strat[];
		stratKeys?: string[];
		getStratMechs: (stratName: string) => Record<string, string | null>;
	}

	let {
		fightKey,
		strats = [],
		stratKeys = [],
		getStratMechs,
	}: Props = $props();

	const roleStorageKey = `${fightKey}-role`;
	const partyStorageKey = `${fightKey}-party`;

	let stratName: string | undefined = $state();
	let stratState: Record<string, string | null> = $state({});
	let role: Role | undefined | null = $state();
	let party: number | undefined = $state();
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
	});

	$effect(() => {
		if (!browser) return;
		if (role) {
			localStorage.setItem(roleStorageKey, JSON.stringify(role));
		}
		if (party) {
			localStorage.setItem(partyStorageKey, JSON.stringify(party));
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
</script>

<slot
	stratName={stratName}
	stratState={stratState}
	role={role}
	party={party}
	strat={strat}
	selectStrat={selectStrat}
	setStratState={updateStratState}
	setRole={setRoleValue}
	setParty={setPartyValue}
	strats={strats}
/>
