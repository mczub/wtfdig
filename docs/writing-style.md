# Writing mechanics and phases

Style guide for the strings that go into `data.ts` files — `phaseName`, `mechanic`, `description`, and per-role descriptions. For repo-level technical rules see [../AGENTS.md](../AGENTS.md); for the file-by-file walkthrough see [adding-a-fight.md](adding-a-fight.md).

## Audience

Three readers, in roughly equal weight. Write so all three are served by the same sentence.

1. **The role-swapper.** Has cleared a few times, knows every mechanic. Tonight they're playing M2 instead of M1, or filling Fake Melee, and they need to know where _that_ slot stands.
2. **The returner.** Cleared a few weeks ago, took a break, now wants two or three muscle-memory reminders to get back in.
3. **The PF migrator.** Cleared Week 1 in a static, but the static's strat isn't the PF strat. They know the fight; they need the deltas.

Nobody is learning the fight here. Don't explain how a mechanic works, don't explain why a position is safe, don't write recovery instructions. If your sentence would only help a first-time prog player, cut it.

## Voice and brevity

- One or two sentences per description. If you need more, split into multiple `\n`-separated lines, each one a single action.
- Imperative, terse. "Bait North," not "You should bait the AoE on the north side of the arena."
- Newlines (`\n`) inside a single description string split discrete steps. The renderer treats each line as its own bullet — don't add `-` or `•` yourself.
- Per-role descriptions should usually be a single phrase: a position, a target, or a partner.

## Phase names

- Title Case.
- Use whatever framing reads clearest for that specific fight — state-based (`Fire Phase`, `Ice Phase`), dominant-mechanic (`Spikesicle`, `Adds`), or generic (`Setup`, `Enrage`) are all fine, and they can coexist in one fight.
- Don't number phases (`P1`, `P2`) unless the community already calls them that. `Setup` beats `P1` when both work.

## Mechanic names

- **In-game ability name** when it's well-known to the audience — `Calamitous Cry`, `Mortal Slayer`, `Akh Morn`. The audience has heard it called that in videos and in PF callouts.
- **Descriptive task name** when the in-game name is forgettable, awkward, or unrecognized — `Read Telegraph`, `Knockback Tower`, `Light Parties`, `Fire Stacks`.
- Title Case either way. No quotes, no italics.
- Pick one name per mechanic per strat and stick with it across phases.

## Directions

- **True North cardinal directions, capitalized**: `North`, `South`, `East`, `West`, `Northeast`, `Southwest`, `South-Southwest`, etc. Hyphenated when intermediate.
- **Relative directions, capitalized**: `Right`, `Left`, `Forward`, `Back`. (Also `Inside`, `Outside`, `Middle`, `Center`, `Inner`, `Outer`, `Far` when combined — `Far Northwest`, `Inner Northeast`.)
- Cardinal vs relative is a per-mechanic choice. Pick whichever frame the mechanic actually resolves in — knockbacks from boss usually want relative, fixed-arena AoEs usually want cardinal. Don't lean on the alignment toggle to fix an awkward frame; write it in the frame players are actually thinking in.
- Waymarks are bare characters: `A`, `B`, `C`, `D`, `1`, `2`, `3`, `4`. "1 waymark" is fine; "the 1-marker" isn't.

## Player references

The site renders the current player's role label automatically — when you reference _other_ players inside a description, use:

| Slot | NA / OCE (default) | JP (`jpRoles: true`) |
| --- | --- | --- |
| Main Tank | `MT` | `MT` |
| Off-tank | `OT` | `ST` |
| Healers | `H1`, `H2` | `H1`, `H2` |
| Melee | `M1`, `M2` | `M1`, `M2` |
| Ranged | `R1`, `R2` | `R1`, `R2` |
| Light parties | `G1`, `G2` | `G1`, `G2` |

- For strats written in JP notation, set `jpRoles: true` on the strat config in `FightConfig.strats` — that swaps the rendered abbreviation. The description text itself should still match: write `ST` in a JP strat, `OT` in an NA/OCE strat.
- `D1`–`D4` is acceptable when the mechanic doesn't distinguish melee from ranged. Prefer `M1`/`M2`/`R1`/`R2` when roles matter.
- Use `w/` for partners — `Center West w/ M1`. Don't write "with."

## Other canonical abbreviations

Use as-is, don't expand:

- `AoE`, `DoT`, `HoT`, `TB` (tank buster), `KB` (knockback), `KBI` (knockback immunity)
- `prox` (proximity AoE), `cone`, `donut`, `out` (point-blank AoE)
- `C/D` (clock / donut), `w/` (with), `vuln`
- Job abbreviations (`PCT`, `RDM`, `SCH`) when calling out a job-specific mitigation

## Description granularity

Two layers, with different jobs:

- `MechanicStrat.description` is the **shared** call: what every player needs to know about this mechanic regardless of role. Often a single line — direction to dodge, count of hits, what to look for.
- `MechanicStrat.strats[].description` is the **personal** call: this role's position, this role's partner, this role's debuff routing. One short phrase per slot.

If a mechanic is purely positional and the image makes the position obvious, leave per-role descriptions as empty strings — the image-only pattern is supported. Don't pad with redundant text.

## Duplicate mechanics

The same mechanic showing up twice in a phase or fight is not automatically worth two entries.

- **Don't re-list** a mechanic when it resolves identically to its first appearance. The reader saw it five seconds ago.
- **Do re-list** when:
  - Execution differs — different positions, different partners, different debuff order, different boss orientation.
  - Timing matters for the surrounding mechanics — the second resolution overlaps with another mechanic and that overlap is the whole reason to mention it.
- When you re-list, reuse the same `mechanic` name (don't invent `Spikesicle (Ice)`) and write a one-line delta description: what's different this time. The fact that it's nested under a later phase already implies "again."

## Tells

Don't paste in-game cast names or log tells (`Tell: Valigarmanda gathers its strength...`) into descriptions by default. The audience knows the mechanic.

The narrow exception: two visually identical mechanics whose only readable difference is the cast name. There use the tell sparingly, and prefer a single distinguishing word over the full log line.

## Emphasis

Reserve `<strong>` for the rare case where missing the note kills a player: a swap from the obvious read, a vuln-stacking gotcha, a one-frame timing issue. If three descriptions on a page have bold text, none of them stand out.

- `<b>`, `<u>`, `<em>` can appear unclosed for visual styling (Tier 1 doesn't enforce them) but should be just as rare as `<strong>`.
- `<strong>` _must_ balance — Tier 1 fails on unmatched tags.

## What to omit

- How the mechanic works in-game
- Why a position is safe
- Recovery instructions for missing the mechanic
- Numbers the player can read off the screen (cast time, damage values)
- Anything that only matters during prog

## Quick examples

**Good:**

```ts
{
  mechanic: 'Mountain Fire',
  description:
    'MT/OT alternate every soak (6 swaps)\nVuln + DoT — invuln cheese kills you (DoT outlasts)\n1st tower North — party hides directly behind tank\nBoss randomly shifts L/R after each — adjust behind tank from boss',
  imageUrl: './ex1/hector-mountain-fire.webp'
}
```

Imperative, sentence fragments, one fact per line, abbreviations canonical, `<strong>` not needed because the whole thing is already terse.

**Less good:**

```ts
{
  mechanic: 'Mountain Fire',
  description:
    'During Mountain Fire, the two tanks will need to take turns soaking the towers that drop on the arena. Both tanks should swap on every soak because the Vulnerability Up and Damage over Time effects mean an invulnerability skill will not save you — the DoT outlasts the invuln duration.',
}
```

Reads like a wiki. The audience already knows what Mountain Fire is.
