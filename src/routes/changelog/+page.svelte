<script lang="ts">
  interface Entry {
    // 'YYYY-MM-DD', or 'YYYY-MM' if the exact day wasn't recorded
    date: string;
    text: string;
  }

  const entries: Entry[] = [
    { date: '2026-08-24', text: 'added faq page, cleaned up the changelog' },
    { date: '2026-08-09', text: 'light mode!' },
    { date: '2026-08-04', text: 'p4 gaze updates, added 2-column p4 helper' },
    { date: '2026-06-30', text: 'update umad p4 + p5 with new kefkabin stuff' },
    {
      date: '2026-06-27',
      text: 'fixing some minor reported bugs: TEA LL tank wording, elinabin link replaced with NAUR, also some updates to the p4 helper'
    },
    {
      date: '2026-06-26',
      text: 'added new P3 changes: new stompy, 2 more black hole strats. kept the default as DSA singles for now, but can change later'
    },
    { date: '2026-06-23', text: 'free from freaky' },
    {
      date: '2026-06-21',
      text: "fix for ex7 error, added a concept of descriptions vs. actions + 'Show description' functionality and update some umad stuff to use it"
    },
    { date: '2026-06-18', text: 'minor fix to p4 helper logic, fix for infinite retry on dead image' },
    { date: '2026-06-15', text: 'umad p4 + p5, rotation feature, p4 helper' },
    { date: '2026-06-12', text: 'some small updates to p3, added additional black hole tether info' },
    { date: '2026-06-12', text: 'add p3, set defaults on kefkabin to freaky/kroxy/sg3k' },
    { date: '2026-06-08', text: 'added freaky arrows to p1' },
    { date: '2026-06-07', text: 'updated both p2 strats to use new marker baits' },
    { date: '2026-06-07', text: 'umad p1 and p2' },
    { date: '2026-05-07', text: 'ex 1, 2, 3' },
    { date: '2026-05-01', text: 'updated cheatsheet view' },
    { date: '2026-04-30', text: 'ex8' },
    { date: '2026-04-21', text: 'teage, ucob poster cheatsheet' },
    {
      date: '2026-04-18',
      text: 'cleanup and refactoring of ex4 + chaotic, add caro uptime to idyllic tool, moved everything to the new cheatsheet view, saves the most recently viewed strat'
    },
    { date: '2026-02-19', text: 'update BC rep2 to match raidplan update' },
    { date: '2026-02-04', text: '11 + 12 tweaks and fixes' },
    { date: '2026-02-02', text: 'm12s tweaks and fixes' },
    { date: '2026-02-01', text: 'add idyllic helper' },
    { date: '2026-01-31', text: 'added the hardest mechanic in ff14 history' },
    { date: '2026-01-24', text: 'm12s p2 stratstravaganza, added a ton a variants on stuff' },
    {
      date: '2026-01-22',
      text: 'add game8 en/jp m9s, add oce m9s and m10s, update some wording on m10s'
    },
    {
      date: '2026-01-19',
      text: 'm12s p2, special mech toggles, remove yolo aerial from 10, add fixed and uptime ecliptic to 11, added wdz split and EU standard to 11'
    },
    { date: '2026-01-16', text: "updated m11s hector to use hector's split" },
    {
      date: '2026-01-15',
      text: 'm12s p1, adding links to individual raidplan slides, m10s + m11s spotlights'
    },
    { date: '2026-01-11', text: 'fix some m11s typos' },
    {
      date: '2026-01-10',
      text: 'add m11s, add scrollbars to the image preview for now, updated kindred lineup'
    },
    { date: '2026-01-09', text: 'added parallel + updated nomnom' },
    { date: '2026-01-07', text: 'M10S' },
    { date: '2026-01-06', text: 'M9S' },
    { date: '2026-01-04', text: 'getting ready for 7.4 savage' },
    { date: '2025-12-31', text: 'game8 ex7, new cheatsheet for ex7 and ucob!' },
    { date: '2025-12-24', text: 'add ex7 cheese, allow toggles to switch out entire phases' },
    { date: '2025-12-23', text: 'ex7 strategy board links, thanks to Tvnareia again' },
    { date: '2025-12-22', text: 'lots of ex7 improvements, thank you Tvnareia Reksane@Seraph!' },
    { date: '2025-12-20', text: 'improved spotlight readability' },
    { date: '2025-12-19', text: 'add static stack/spreads for ex7' },
    { date: '2025-12-18', text: '7.4 release, add ex7' },
    { date: '2025-12-07', text: 'add m4s, make frontpage blocks collapsible' },
    {
      date: '2025-12-02',
      text: 'only use phase tabs for ultis, added some highlights for m6s hector'
    },
    { date: '2025-12-01', text: 'v2 launch' },
    { date: '2025-11-16', text: 'add ex6' },
    { date: '2025-07-08', text: 'updated toxic lightning spreads for m6s' },
    {
      date: '2025-07-07',
      text: 'we got cob; also each fight saves your role to localstorage, also adjusted some layout stuff on cheatsheets'
    },
    {
      date: '2025-06-09',
      text: "added a second line to m8s fering for people who don't understand what color partners means"
    },
    { date: '2025-05-19', text: 'add second pattern to m6s toxic/hector river' },
    { date: '2025-05-17', text: 'icons! and shorter urls!' },
    {
      date: '2025-05-10',
      text: 'some layout adjustment, add timelines to main pages, add pf descriptions'
    },
    { date: '2025-05-07', text: 'a bunch of formatting stuff! you can click on images!' },
    { date: '2025-05-05', text: 'redirecting mczub.github.io/wtfdig to wtfdig.info' },
    { date: '2025-05-04', text: 'add oce m6s + m7s, eu m8s' },
    {
      date: '2025-05-02',
      text: 'rearranged strats, added badges to indicate region standards, add game8 m6s + m7s, add oce m5s'
    },
    { date: '2025-05-01', text: 'updated fering decay diagrams, fix twofold line baits' },
    {
      date: '2025-04',
      text: 'highlights for m5s hector, split m7s p3 hector strat out into its own thing'
    },
    { date: '2025-04-27', text: 'add timeline for m8s, add cheatsheet for ex4' },
    { date: '2025-04-26', text: 'fix m7s stoneringers 2, add image previews in cheatsheet mode' },
    {
      date: '2025-04-25',
      text: 'update m6s toxic towers, made links bigger and added some disclaimers'
    },
    {
      date: '2025-04-24',
      text: 'some minor updates for m6s, clarify m7s p3 dd, add m7s stoneringers 2, rename uptime m7s p1 to kindred'
    },
    {
      date: '2025-04-22',
      text: 'fix m8s quad moon, add fixed seeds, update m6s latte 8-0-0 towers, split out original and caster se twofold'
    },
    { date: '2025-04-17', text: 'update m8s toxic p2 twofold' },
    { date: '2025-04-16', text: 'cheatsheet mode for 7 + 8' },
    { date: '2025-04-15', text: 'cheatsheet mode for 5 + 6, add locked seeds to 7' },
    { date: '2025-04-14', text: 'fixed some reported issues' },
    {
      date: '2025-04-12',
      text: 'm8s + renamed m6s toxic to hector/toxic, update ex4 hector bloom6 to match video, added ko-fi link'
    },
    { date: '2025-04-09', text: 'm7s improvements + fixed m5s toxic ride the wave' },
    { date: '2025-04-08', text: 'm7s' },
    { date: '2025-04-06', text: 'add some m6s adds variations' },
    { date: '2025-04-03', text: 'basic m6s support' },
    { date: '2025-04-02', text: 'sadly ucob was too good to live, however we have m5s now' },
    { date: '2025-03-30', text: 'added url support to share strats with PF!' },
    { date: '2025-03-28', text: 'improved ex4 support and bugfixes' },
    { date: '2025-03-27', text: 'ex4 support' },
    { date: '2025-03-21', text: 'updated to svelte v5 in preparation for 7.2' },
    {
      date: '2025-01-21',
      text: 'added warning for core-lateral and lateral-core swap in 7.16'
    },
    { date: '2025-01-20', text: 'added more comprehensive post-swap spots to HealerOut' },
    { date: '2025-01-20', text: 'fix idyll C postswap image rotation' },
    { date: '2025-01-19', text: 'added idyll/game8 strat - added by kizer' },
    { date: '2025-01-10', text: 'added more comprehensive post-swap spots to raidplan' },
    {
      date: '2025-01-09',
      text: 'switched melee spread spots for raidplan A+C, fixed text wrapping at high zoom'
    },
    {
      date: '2025-01-07',
      text: 'added HealerOut to the strat selector - added by Jake Hale @ Louisoux'
    },
    {
      date: '2025-01-05',
      text: 'fixed raidplan spread spots to match where people end up after tether breaks, added pair partners + cleaned up phrasing'
    },
    {
      date: '2025-01-03',
      text: 'added wfJ/o1Z to the raidplan selector, changed Add Relative to Wall Relative for CODCAR'
    },
    {
      date: '2025-01-02',
      text: 'Updated some styling to make the swap assignments more obvious (yes melees will sometimes need to take a ranged spot), added some info to footer'
    },
    {
      date: '2025-01-01',
      text: 'Added big overview image, rotated AOE spreads correctly for CODCAR, added post-swap locations for everyone starting on tiles'
    },
    {
      date: '2024-12-31',
      text: 'Added Alignment buttons (Original, True North, Add Relative) for CODCAR, added Wild Charges to CODCAR tile players, some improvements to responsive sizing'
    },
    { date: '2024-12-30', text: 'Initial Release' }
  ];

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  function formatDate(date: string): string {
    const [, month, day] = date.split('-');
    const name = monthNames[Number(month) - 1];
    return day ? `${name} ${Number(day)}` : name;
  }

  const years: { year: string; entries: Entry[] }[] = [];
  for (const entry of entries) {
    const year = entry.date.slice(0, 4);
    const group = years.at(-1);
    if (group?.year === year) {
      group.entries.push(entry);
    } else {
      years.push({ year, entries: [entry] });
    }
  }
</script>

<svelte:head>
  <title>Changelog - WTFDIG</title>
</svelte:head>

<div class="container grow mx-auto p-4 max-w-3xl">
  <header class="mb-6">
    <h1 class="h1 text-2xl">Changelog</h1>
  </header>
  <div class="flex flex-col gap-6">
    {#each years as group (group.year)}
      <section>
        <h2 class="text-lg font-bold mb-3">{group.year}</h2>
        <div
          class="card preset-filled-surface-100-900 border border-surface-200-800 divide-y divide-surface-200-800"
        >
          {#each group.entries as entry, index (index)}
            <div class="flex gap-4 px-5 py-3">
              <div class="w-14 shrink-0 text-sm text-surface-400 pt-0.5">
                {formatDate(entry.date)}
              </div>
              <div class="text-base">{entry.text}</div>
            </div>
          {/each}
        </div>
      </section>
    {/each}
  </div>
</div>
