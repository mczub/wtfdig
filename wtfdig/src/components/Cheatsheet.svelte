<svelte:options customElement={{shadow: 'none'}} ></svelte:options>
<script lang="ts">
    import { Modal, Tabs, Tooltip } from '@skeletonlabs/skeleton-svelte';
    import { Clock, Expand, ExternalLink, Shield, Siren, TriangleAlert, Wrench, X} from '@lucide/svelte/icons';

    let { title, stratName, stratState, getStratMechs, cheatsheetOpenState = $bindable(), individualStrat, spotlight, alignment, timeline, innerWidth, innerHeight, rows, columns, tabTags = null } = $props();
    
	function msToTime(timeInMs: number): string {
		const seconds = (Math.floor(timeInMs / 1000) % 60).toString().padStart(2, '0');
		const minutes = (Math.floor(timeInMs / 60000)).toString();

		return `${minutes}:${seconds}`;
	}

	function getFightPercentClass(timeInMs: number, index: number): string {
		if (useEvenTimelineSpacing) {
			return `${(Math.floor(index * 980 / timeline.length)/10).toString()}%`;
		}
		const enrageTime = timeline.find((item) => {return item.mechType === 'Enrage'})?.startTimeMs;
		if (!enrageTime) return '0';
		return `${(Math.floor(timeInMs * 980 / enrageTime)/10).toString()}%`;
	}

	function showMechType(mechType: string): boolean {
		if (mechType === 'Mechanic' || mechType === 'StoredMechanic') {
			return timelineFilters.mechs;
		}
		if (mechType === 'Raidwide') {
			return timelineFilters.raidwides;
		}
		if (mechType === 'Tankbuster') {
			return timelineFilters.tankbusters;
		}
		return true;
	}

    let tab = $state(tabTags ? Object.keys(tabTags)[0] : '');

	let useEvenTimelineSpacing = $derived(innerHeight <= 1024);
	let showFilterCaptions = $derived(innerWidth > 1280)
	let isCheatsheetEnabled = $derived(innerWidth > 1024 && innerHeight > 768);

	let timelineFilters = $state({
		"mechs": true,
		"raidwides": true,
		"tankbusters": true
	})

	function closeCheatsheet() {
		cheatsheetOpenState = false;
	}

    let imageOpenState = $state(false);
	let imageModalProps = $state({
		title: '',
		description: '',
		url: ''
	});

	function openImageModal(title: string, description: string, imgUrl: string) {
		imageModalProps = {
			title: title,
			description: description,
			url: imgUrl,
		}
		imageOpenState = true;
	}

	function closeImage() {
		imageModalProps = {
			title: '',
			description: '',
			url: ''
		};
		imageOpenState = false;
	}
</script>

<Modal
  open={imageOpenState}
  onOpenChange={(e) => (imageOpenState = e.open)}
  contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl flex flex-col"
  backdropClasses="backdrop-blur-sm"
  zIndex={"3000"}
>
	{#snippet content()}
		<header class="flex justify-between">
			<div class="text-lg 3xl:text-2xl">{imageModalProps.title}</div>
			<X onclick={closeImage} />
		</header>
		<div>
			<div class="whitespace-pre-wrap">{imageModalProps.description}</div>
			<img class="rounded-md mt-4" src={imageModalProps.url} />
		</div>
	{/snippet}
</Modal>


<Modal
  open={cheatsheetOpenState}
  onOpenChange={(e) => (cheatsheetOpenState = e.open)}
  contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl flex flex-col h-full w-full"
  contentClasses={imageOpenState ? 'blur-sm' : ''}
  backdropClasses="backdrop-blur-sm"
>
  {#snippet content()}
    <header class="flex justify-between">
      <div class="text-lg 3xl:text-2xl">{title}</div>
	  <X onclick={closeCheatsheet} />
    </header>
    
    {#if tabTags}
        <Tabs value={tab} onValueChange={(e) => (tab = e.value)} classes="m-0" listMargin="mb-1">
            {#snippet list()}
                {#each Object.keys(tabTags) as tabName}
                    <Tabs.Control value={tabName}>{tabName}</Tabs.Control>
                {/each}
            {/snippet}
        </Tabs>
    {/if}
        <div class={`grid gap-2 h-full`} style:grid-template-rows={`repeat(${rows}, minmax(0, 1fr))`} style:grid-template-columns={`repeat(${columns}, minmax(0, 1fr))`}>
        {#if timeline.length > 0}
        <div class="card border row-span-full border-surface-800 p-2 flex flex-col">
            <div class="flex mb-2 gap-1">
                <button class={`chip px-1 2xl:px-2 ${timelineFilters.mechs ? 'preset-outlined-warning-500 bg-warning-800' : 'preset-outlined-warning-500'}`} onclick={() => timelineFilters.mechs = !timelineFilters.mechs}><Wrench size={16} strokeWidth={2} />{showFilterCaptions ? 'Mech' : ''}</button>
                <button class={`chip px-1 2xl:px-2 ${timelineFilters.raidwides ? 'preset-outlined-secondary-500 bg-secondary-500' : 'preset-outlined-secondary-500'}`} onclick={() => timelineFilters.raidwides = !timelineFilters.raidwides}><Siren size={16} strokeWidth={2} />{showFilterCaptions ? 'Raidwide' : ''}</button>
                <button class={`chip px-1 2xl:px-2 ${timelineFilters.tankbusters ? 'preset-outlined-primary-500 bg-primary-500' : 'preset-outlined-primary-500'}`} onclick={() => timelineFilters.tankbusters = !timelineFilters.tankbusters}><Shield size={16} strokeWidth={2} />{showFilterCaptions ? 'TB' : ''}</button>
            </div>
            <div class="grow relative">
                {#each timeline as item, index}
                    {#if showMechType(item.mechType)}
                        <div style:top={getFightPercentClass(item.startTimeMs, index)} class="absolute flex text-xs w-full items-center" >
                            <div class="w-1/8">
                                {#if item.mechType === 'Raidwide'}
                                    <div class="grid bg-secondary-500 rounded-sm h-[16px] w-[16px] p-auto place-content-center">
                                        <Siren size={14} strokeWidth={2} />
                                    </div>
                                {/if}
                                {#if item.mechType === 'Mechanic'}
                                    <div class="grid bg-warning-800 rounded-sm h-[16px] w-[16px] p-auto place-content-center">
                                        <Wrench size={14} strokeWidth={2} />
                                    </div>
                                {/if}
                                {#if item.mechType === 'Tankbuster'}
                                    <div class="grid bg-primary-500 rounded-sm h-[16px] w-[16px] p-auto place-content-center">
                                        <Shield size={14} strokeWidth={2} />
                                    </div>
                                {/if}
                                {#if item.mechType === 'StoredMechanic'}
                                    <div class="grid bg-warning-800 rounded-sm h-[16px] w-[16px] p-auto place-content-center">
                                        <Clock size={14} strokeWidth={2} />
                                    </div>
                                {/if}
                            </div>
                            <div class="w-1/4">
                                {msToTime(item.startTimeMs)}
                            </div>
                            <div class="w-5/8 overflow-hidden text-nowrap">
                                {item.mechName}
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        </div>
        {/if}
        {#each individualStrat as phase}
            {#if (tabTags && tabTags[tab] ? tabTags[tab].includes(phase.tag) : true)}
                <div class="card border border-surface-800 p-2 h-0 min-h-full flex flex-col" style:grid-column={`span ${phase.mechs ? phase.mechs.length : 0}`}>
                    <div class="flex flex-row items-center">
                        <div class="capitalize font-bold text-sm 3xl:text-lg mb-0">{phase.phaseName}</div>
                        {#if phase?.tag && (stratState[phase.tag] !== getStratMechs(stratName)[phase.tag])}
                            <Tooltip
                                positioning={{ placement: 'top' }}
                                triggerBase="flex"
                                contentBase="card bg-surface-800 p-4"
                                classes="ml-2"
                                openDelay={200}
                                arrow
                                arrowBackground="!bg-surface-800"

                            >
                            {#snippet trigger()}<div class="text-warning-500 self-center"><TriangleAlert size={24}/></div>{/snippet}
                            {#snippet content()}This mechanic differs from what's in the selected guide.{/snippet}
                            </Tooltip>
                        {/if}
                    </div>
                    {#if phase?.description}<div class="text-xs 3xl:text-base whitespace-pre-wrap">{phase.description}</div>{/if}
                    {#if phase?.imageUrl}<img class="object-contain rounded-md min-h-0 h-full" style:mask-image={spotlight && phase.mask} src={phase.imageUrl} />{/if}
                    {#if phase?.mechs}
                        <div class="grid grid-flow-col auto-cols-fr auto-rows-fr gap-2 h-full" style:grid-column={`span ${phase.mechs.length}`}>
                            {#each phase.mechs as mech}
                                {#key [spotlight, alignment]}
                                <button class="flex flex-col h-0 min-h-full overflow-hidden group text-start" class:col-span-2={mech.alignmentImages && mech.alignmentImages[alignment]} onclick={() => openImageModal(mech.mechanic, (mech.description || ''), mech.imageUrl ? mech.imageUrl : mech.strats[0]?.imageUrl)}>
                                    <div class="flex justify-between capitalize font-semibold text-sm 3xl:text-base mb-0">
                                        {mech.mechanic}
                                        <span class="not-group-hover:hidden"><Expand size={16}/></span>
                                    </div> 
                                    {#if mech?.description}<div class="whitespace-pre-wrap text-xs 3xl:text-base mb-0">{mech.description}</div>{/if}
                                    {#if mech?.imageUrl}<img class="object-contain rounded-md mt-1 min-h-0 h-full" src={mech.imageUrl} />{/if}
                                    <div class="whitespace-pre-wrap text-xs 3xl:text-base mb-0">{mech?.strats && mech.strats[0].description}</div>
                                    
                                    {#if mech?.strats && mech.strats[0]?.imageUrl}
                                        <img class="object-contain rounded-md mt-1 min-h-0 h-full" style:mask-image={spotlight && mech.strats[0]?.mask} src={mech.strats[0].imageUrl} />
                                    {/if}
                                </button>
                                {/key}
                            {/each}
                        </div>
                    {/if}
                </div>
            {/if}
        {/each}
    </div>
    {/snippet}
</Modal>