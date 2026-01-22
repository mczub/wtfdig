import{g as e,f as s}from"../chunks/OoLlb2nt.js";import"../chunks/CWj6FrbW.js";import{p as b,c as h}from"../chunks/B2MXvhv6.js";import{M as w}from"../chunks/Bht_AvwO.js";function l(r,a,o,p){var d;let n={};for(const[m,g]of Object.entries(r)){const c=g[a];p?n[m]=((d=c[p])==null?void 0:d[o])||"":n[m]=c[o]||""}return n}function t(r,a){return[{role:"Tank",party:1,description:l(r,a,"description","MT"),imageUrl:l(r,a,"imageUrl","MT")},{role:"Tank",party:2,description:l(r,a,"description","OT"),imageUrl:l(r,a,"imageUrl","OT")},{role:"Healer",party:1,description:l(r,a,"description","H1"),imageUrl:l(r,a,"imageUrl","H1")},{role:"Healer",party:2,description:l(r,a,"description","H2"),imageUrl:l(r,a,"imageUrl","H2")},{role:"Melee",party:1,description:l(r,a,"description","M1"),imageUrl:l(r,a,"imageUrl","M1")},{role:"Melee",party:2,description:l(r,a,"description","M2"),imageUrl:l(r,a,"imageUrl","M2")},{role:"Ranged",party:1,description:l(r,a,"description","R1"),imageUrl:l(r,a,"imageUrl","R1")},{role:"Ranged",party:2,description:l(r,a,"description","R2"),imageUrl:l(r,a,"imageUrl","R2")}]}const u=[{mechName:"Start",mechType:"Start",startTimeMs:0},{mechName:"Mousse Mural",mechType:"Raidwide",startTimeMs:11970},{mechName:"Color Riot",mechType:"Tankbuster",startTimeMs:23149},{mechName:"Wingmark (Cast)",mechType:"StoredMechanic",startTimeMs:35784},{mechName:"Wingmark + Clash",mechType:"Mechanic",startTimeMs:56784},{mechName:"Sticky Mousse",mechType:"Mechanic",startTimeMs:70872},{mechName:"Color Riot",mechType:"Tankbuster",startTimeMs:82663},{mechName:"Desert",mechType:"Phase",startTimeMs:91200},{mechName:"Cactus Dodges",mechType:"Mechanic",startTimeMs:107545},{mechName:"Brulee (Tank + DPS)",mechType:"Mechanic",startTimeMs:142318},{mechName:"Sticky Mousse",mechType:"Mechanic",startTimeMs:150435},{mechName:"Brulee (Healers)",mechType:"Mechanic",startTimeMs:177539},{mechName:"Bombs",mechType:"Mechanic",startTimeMs:191002},{mechName:"Mousse Mural",mechType:"Raidwide",startTimeMs:200135},{mechName:"Color Riot",mechType:"Tankbuster",startTimeMs:208280},{mechName:"Adds",mechType:"Phase",startTimeMs:218532},{mechName:"Adds Wave 1",mechType:"Mechanic",startTimeMs:228798},{mechName:"Adds Wave 2",mechType:"Mechanic",startTimeMs:257987},{mechName:"Adds Wave 3",mechType:"Mechanic",startTimeMs:280149},{mechName:"Jabber 1 Targetable",mechType:"Mechanic",startTimeMs:288248},{mechName:"Ready Ore Not",mechType:"Raidwide",startTimeMs:307192},{mechName:"Adds Wave 4",mechType:"Mechanic",startTimeMs:319455},{mechName:"Jabber 2 Targetable",mechType:"Mechanic",startTimeMs:327648},{mechName:"Ready Ore Not",mechType:"Raidwide",startTimeMs:390497},{mechName:"Color Riot",mechType:"Tankbuster",startTimeMs:412855},{mechName:"Mousse Mural",mechType:"Raidwide",startTimeMs:421004},{mechName:"River",mechType:"Phase",startTimeMs:429535},{mechName:"Double Style (Cast)",mechType:"StoredMechanic",startTimeMs:444697},{mechName:"Fire/Lightning",mechType:"Mechanic",startTimeMs:454866},{mechName:"Thunderstorm 1",mechType:"Mechanic",startTimeMs:481012},{mechName:"Thunderstorm 2",mechType:"Mechanic",startTimeMs:491751},{mechName:"Thunderstorm 3",mechType:"Mechanic",startTimeMs:502298},{mechName:"Thunderstorm 4",mechType:"Mechanic",startTimeMs:513125},{mechName:"Pudding Party",mechType:"Raidwide",startTimeMs:518217},{mechName:"Lava",mechType:"Phase",startTimeMs:531646},{mechName:"Puddles x4",mechType:"Mechanic",startTimeMs:548778},{mechName:"Towers 1",mechType:"Mechanic",startTimeMs:567843},{mechName:"Wingmark (Cast)",mechType:"StoredMechanic",startTimeMs:572104},{mechName:"Wingmark",mechType:"Mechanic",startTimeMs:582104},{mechName:"Towers 2",mechType:"Mechanic",startTimeMs:594372},{mechName:"Mousse Mural",mechType:"Raidwide",startTimeMs:599304},{mechName:"Sticky Mousse",mechType:"Mechanic",startTimeMs:609860},{mechName:"Color Riot",mechType:"Tankbuster",startTimeMs:621624},{mechName:"Wingmark (Cast)",mechType:"StoredMechanic",startTimeMs:634276},{mechName:"Wingmark + Clash",mechType:"Mechanic",startTimeMs:651276},{mechName:"Enrage",mechType:"Enrage",startTimeMs:684419}],y={wave1:{MT:{role:"Tank",party:1,description:"Grab squirrels East, tank between C and 3",imageUrl:"./m6s/adds/toxic-wave1.webp"},OT:{role:"Tank",party:2,description:"Grab Yan West",imageUrl:"./m6s/adds/toxic-wave1.webp"},H1:{role:"Healer",party:1,description:"Stack on Boss + Squirrels to bait Cat, AOE Squirrels",imageUrl:"./m6s/adds/toxic-wave1.webp"},H2:{role:"Healer",party:2,description:"Stack on Boss + Squirrels to bait Cat, AOE Squirrels",imageUrl:"./m6s/adds/toxic-wave1.webp"},M1:{role:"Melee",party:1,description:"Hit Yan",imageUrl:"./m6s/adds/toxic-wave1.webp"},M2:{role:"Melee",party:2,description:"Hit Yan",imageUrl:"./m6s/adds/toxic-wave1.webp"},R1:{role:"Ranged",party:1,description:"Stack on Boss + Squirrels to bait Cat, kill Cat",imageUrl:"./m6s/adds/toxic-wave1.webp"},R2:{role:"Ranged",party:2,description:"Stack on Boss + Squirrels to bait Cat, kill Cat",imageUrl:"./m6s/adds/toxic-wave1.webp"}},wave2:{MT:{role:"Tank",party:1,description:"Pick up Squirrels South, bring them to NE Manta as soon as possible",imageUrl:"./m6s/adds/toxic-wave2.webp"},OT:{role:"Tank",party:2,description:`If Yan is alive, bring it to NW Manta
After Yan dies, Kill NW Manta then NE Manta`,imageUrl:"./m6s/adds/toxic-wave2.webp"},H1:{role:"Healer",party:1,description:`Stand NE with Squirrels
Kill NW Manta first, then cleave NE Manta`,imageUrl:"./m6s/adds/toxic-wave2.webp"},H2:{role:"Healer",party:2,description:`Stand NE with Squirrels
Kill NW Manta first, then cleave NE Manta`,imageUrl:"./m6s/adds/toxic-wave2.webp"},M1:{role:"Melee",party:1,description:`Make sure Yan dies
Kill NW Manta first, then cleave NE Manta
Cleave the squirrels as much as possible`,imageUrl:"./m6s/adds/toxic-wave2.webp"},M2:{role:"Melee",party:2,description:`Make sure Yan dies
Kill NW Manta first, then cleave NE Manta
Cleave the squirrels as much as possible`,imageUrl:"./m6s/adds/toxic-wave2.webp"},R1:{role:"Ranged",party:1,description:`Take NE Manta
Drop first puddle in NE corner, then move South
Kill NW Manta first, then cleave NE Manta`,imageUrl:"./m6s/adds/toxic-wave2.webp"},R2:{role:"Ranged",party:2,description:`Take NW Manta
Drop first puddle in NW corner, then move South
Kill NW Manta first, then cleave NE Manta`,imageUrl:"./m6s/adds/toxic-wave2.webp"}},wave3:{MT:{role:"Tank",party:1,description:`Take squirrels to South, then to Jabber spawn West
First stun on Jabber
Kill remaining Squirrels`,imageUrl:"./m6s/adds/toxic-wave3.webp"},OT:{role:"Tank",party:2,description:"Pick up Yan North and chill",imageUrl:"./m6s/adds/toxic-wave3.webp"},H1:{role:"Healer",party:1,description:`If targeted by Jabber, go Southeast and single target
Kill Jabber, then Squirrels, then Cat`,imageUrl:"./m6s/adds/toxic-wave3.webp"},H2:{role:"Healer",party:2,description:`If targeted by Jabber, go Southeast and single target
Kill Jabber, then Squirrels, then Cat`,imageUrl:"./m6s/adds/toxic-wave3.webp"},M1:{role:"Melee",party:1,description:`Damage squirrels until Jabber spawns
Prioritize Jabber, take second stun
Kill remaining Squirrels`,imageUrl:"./m6s/adds/toxic-wave3.webp"},M2:{role:"Melee",party:2,description:`Damage squirrels until Jabber spawns
Prioritize Jabber, take third stun
Kill remaining Squirrels`,imageUrl:"./m6s/adds/toxic-wave3.webp"},R1:{role:"Ranged",party:1,description:`Damage squirrels until Jabber spawns
Prioritize Jabber
Kill remaining Squirrels before enrage
Kill cat before enrage`,imageUrl:"./m6s/adds/toxic-wave3.webp"},R2:{role:"Ranged",party:2,description:`Damage squirrels until Jabber spawns
Prioritize Jabber
Kill remaining Squirrels before enrage
Kill cat before enrage`,imageUrl:"./m6s/adds/toxic-wave3.webp"}},wave4:{MT:{role:"Tank",party:1,description:`Take Squirrels to 2 marker, then to Jabber
Prioritize Jabber, take first stun
Stack and kill SE Manta
Stack and kill SW Manta
Kill Squirrels
Kill Yans`,imageUrl:"./m6s/adds/toxic-wave4.webp"},OT:{role:"Tank",party:2,description:`Take Yans to 4 marker
Once Jabber dies, take Yans deep into SW corner
After Squirrels die, take Yans to boss and kill
CURRENT OBJECTIVE: SURVIVE`,imageUrl:"./m6s/adds/toxic-wave4.webp"},H1:{role:"Healer",party:1,description:`If targeted by Jabber, go Southeast and single target
Make sure to keep OT alive
Kill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/toxic-wave4.webp"},H2:{role:"Healer",party:2,description:`If targeted by Jabber, go Southeast and single target
Make sure to keep OT alive
Kill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/toxic-wave4.webp"},M1:{role:"Melee",party:1,description:`Hit Squirrels until Jabber spawns
Prioritize Jabber, take second stun
Kill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/toxic-wave4.webp"},M2:{role:"Melee",party:2,description:`Hit Squirrels until Jabber spawns
Prioritize Jabber, take second stun
Kill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/toxic-wave4.webp"},R1:{role:"Ranged",party:1,description:`Take SW Manta
Keep deep SW clear of puddles, feel free to use North
Hit Squirrels until Jabber spawns
Prioritize Jabber
Kill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/toxic-wave4.webp"},R2:{role:"Ranged",party:2,description:`Take SE Manta
Drop puddles along East wall
Hit Squirrels until Jabber spawns
Prioritize Jabber
Kill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/toxic-wave4.webp"}}},k={wave1:{MT:{role:"Tank",party:1,description:`1. Pull boss and 2 squirrels east
2. Mitigate and AoE
3. If cat jumps near, dodge AoE.`,imageUrl:"./m6s/adds/latte-mt.webp"},OT:{role:"Tank",party:2,description:`1. Pull ram away from adds to avoid buffs.
2. Mitigate and focus the ram until dead.
3. If cat jumps near, focus the cat instead.`,imageUrl:"./m6s/adds/latte-ot.webp"},H1:{role:"Healer",party:1,description:`1. Focus the cat.
2. Once cat is dead, focus the ram.
3. Then, join the MT and AoE the squirrels.`,imageUrl:"./m6s/adds/latte-healer.webp"},H2:{role:"Healer",party:2,description:`1. Focus the cat.
2. Once cat is dead, focus the ram.
3. Then, join the MT and AoE the squirrels.`,imageUrl:"./m6s/adds/latte-healer.webp"},M1:{role:"Melee",party:1,description:`1. Focus the ram.
2. If cat jumps near ram, focus the cat instead.
3. Then, join the MT and AoE the squirrels.`,imageUrl:"./m6s/adds/latte-melee.webp"},M2:{role:"Melee",party:2,description:`1. Focus the ram.
2. If cat jumps near ram, focus the cat instead.
3. Then, join the MT and AoE the squirrels.`,imageUrl:"./m6s/adds/latte-melee.webp"},R1:{role:"Ranged",party:1,description:`1. Focus the cat.
2. Once cat is dead, focus the ram.
3. Then, join the MT and AoE the squirrels.`,imageUrl:"./m6s/adds/latte-ranged.webp"},R2:{role:"Ranged",party:2,description:`1. Focus the cat.
2. Once cat is dead, focus the ram.
3. Then, join the MT and AoE the squirrels.`,imageUrl:"./m6s/adds/latte-ranged.webp"}},wave2:{MT:{role:"Tank",party:1,description:`1. Grab 2 new squirrels.
2. Wait for ranged to tether East ray.
3. Bring everything to that ray.
4. Mitigate and AoE.
5. If you have AoE damage reduction on actions, target the rays.`,imageUrl:""},OT:{role:"Tank",party:2,description:`1. Once ram is dead, help AoE boss/squirrels.
2. Wait for ranged to tether east ray.
3. Kill east ray.
4. Help ranged kill west ray.
5. If you have AoE damage reduction on actions, target rays.`,imageUrl:""},H1:{role:"Healer",party:1,description:`1. Once ray targets a ranged, join MT and AoE all of them.
2. Once this ray is dead, focus the other ray.`,imageUrl:""},H2:{role:"Healer",party:2,description:`1. Once ray targets a ranged, join MT and AoE all of them.
2. Once this ray is dead, focus the other ray.`,imageUrl:""},M1:{role:"Melee",party:1,description:`1. Once ray targets a ranged, join MT and AoE all of them.
2. Once this ray is dead, focus the other ray.`,imageUrl:""},M2:{role:"Melee",party:2,description:`1. Once ray targets a ranged, join MT and AoE all of them.
2. Once this ray is dead, focus the other ray.`,imageUrl:""},R1:{role:"Ranged",party:1,description:`1. Target Northwest ray.
2. Bait puddles from north to south on the arena sides while attacking rays.
3. If your targeted ray is dead, focus the other.
4. Join MT and AoE squirrels until third spawn.`,imageUrl:""},R2:{role:"Ranged",party:2,description:`1. Target Northeast ray.
2. Bait puddles from north to south on the arena sides while attacking rays.
3. If your targeted ray is ead, focus the other.
4. Join MT and AoE squirrels until third spawn.`,imageUrl:""}},wave3:{MT:{role:"Tank",party:1,description:`1. Jabber becomes targetable, bring adds and ST focus.
2. Make sure ram is dead so it doesn't buff your adds.
3. Stun priority is MT --> M1 --> M2.
4. Kill squirrels before enrage.
5. Kill cat.`,imageUrl:""},OT:{role:"Tank",party:2,description:`1. The party will deal with the jabber.
2. Focus the new ram that spawns.`,imageUrl:""},H1:{role:"Healer",party:1,description:`1. If targeted by jabber, camp southeast.
2. Free healer will ST jabber until dead.
3. If out of range of any add, heal others.
4. When within range, ST the jabber.
5. AoE when jabber is dead.`,imageUrl:""},H2:{role:"Healer",party:2,description:`1. If targeted by jabber, camp southeast.
2. Free healer will ST jabber until dead.
3. If out of range of any add, heal others.
4. When within range, ST the jabber.
5. AoE when jabber is dead.`,imageUrl:""},M1:{role:"Melee",party:1,description:`1. Jabber becomes targetable, ST focus.
2. Make sure ram is dead so it doesn't buff your adds.
3. Stun priority is MT --> M1 --> M2.
4. Kill squirrels before enrage. 5. Kill cat.`,imageUrl:""},M2:{role:"Melee",party:2,description:`1. Jabber becomes targetable, ST focus.
2. Make sure ram is dead so it doesn't buff your adds.
3. Stun priority is MT --> M1 --> M2.
4. Kill squirrels before enrage. 5. Kill cat.`,imageUrl:""},R1:{role:"Ranged",party:1,description:`1. Jabber becomes targetable, ST focus.
2. Make sure ram is dead so it doesn't buff your adds.
3. Kill squirrels before enrage.
4. Kill cat before fourth spawn.`,imageUrl:""},R2:{role:"Ranged",party:2,description:`1. Jabber becomes targetable, ST focus.
2. Make sure ram is dead so it doesn't buff your adds.
3. Kill squirrels before enrage.
4. Kill cat before fourth spawn.`,imageUrl:""}},wave4:{MT:{role:"Tank",party:1,description:`1. Pull boss and 2 new squirrels to the new jabber NORTH.
2. Mitigate and AoE.
3. Focus the jabber.
4. Same stun priority.
5. After jabber, kill east ray.
6. Kill cat then Southwest ray.
7. Dodge lines then focus rams.`,imageUrl:""},OT:{role:"Tank",party:2,description:`1. Another ram will spawn.
2. Pull both rams SW to avoid buffs on other adds.
3. Wait till every other add is dead (squirrels last to die), then bring rams to boss.
CURRENT OBJECTIVE: SURVIVE`,imageUrl:""},H1:{role:"Healer",party:1,description:`1. Another jabber will spawn, ignore cat.
2. If targeted by jabber,  camp southeast again.
3. ST jabber and/or AoE anyone you can within range.
4. Targeted healer leaves corner when jabber is dead.
5. After jabber, focus east ray, then cat, then west ray.
6. Mitigate/heal raidwide, dodge lines, then AoE rams.`,imageUrl:""},H2:{role:"Healer",party:2,description:`1. Another jabber will spawn, ignore cat.
2. If targeted by jabber,  camp southeast again.
3. ST jabber and/or AoE anyone you can within range.
4. Targeted healer leaves corner when jabber is dead.
5. After jabber, focus east ray, then cat, then west ray.
6. Mitigate/heal raidwide, dodge lines, then AoE rams.`,imageUrl:""},M1:{role:"Melee",party:1,description:`1. Assist MT in killing new squirrels.
2. ST focus the jabber once targetable.
3. Same stun priority.
4. After jabber, kill east ray.
5. Kill cat then Southwest ray.
6. Dodge lines then focus rams.`,imageUrl:""},M2:{role:"Melee",party:2,description:`1. Assist MT in killing new squirrels.
2. ST focus the jabber once targetable.
3. Same stun priority.
4. After jabber, kill east ray.
5. Kill cat then Southwest ray.
6. Dodge lines then focus rams.`,imageUrl:""},R1:{role:"Ranged",party:1,description:`1. Ignore cat.
2. New rays spawn, take Southwest ray.
3. Continue baiting the puddles.
4. When jabber is targetable, ST focus it.
5. After jabber is dead, focus Southeast ray.
6. Kill cat then Southwest ray.
7. Dodge lines, AoE rams.`,imageUrl:""},R2:{role:"Ranged",party:2,description:`1. Ignore cat.
2. New rays spawn, take Southeast ray.
3. Continue baiting the puddles.
4. When jabber is targetable, ST focus it.
5. After jabber is dead, focus Southeast ray.
6. Kill cat then Southwest ray.
7. Dodge lines, AoE rams.`,imageUrl:""}}},M={wave1:{MT:{role:"Tank",party:1,description:"Tank boss and Squirrels East"},OT:{role:"Tank",party:2,description:"Tank Yan West"},H1:{role:"Healer",party:1,description:`Stack on Yan to bait Cat jump
Focus Cat, then focus Yan`},H2:{role:"Healer",party:2,description:`Stack on Yan to bait Cat jump
Focus Cat, then focus Yan`},M1:{role:"Melee",party:1,description:`Stack on Yan to bait Cat jump
Focus Cat if in range, if not focus Yan`},M2:{role:"Melee",party:2,description:`Stack on Yan to bait Cat jump
Focus Cat if in range, if not focus Yan`},R1:{role:"Ranged",party:1,description:`Stack on Yan to bait Cat jump
Focus Cat, then focus Yan`},R2:{role:"Ranged",party:2,description:`Stack on Yan to bait Cat jump
Focus Cat, then focus Yan`}},wave2:{MT:{role:"Tank",party:1,description:`Pick up Squirrels South, bring them to NE Manta as soon as possible
`},OT:{role:"Tank",party:2,description:`If Yan is alive, bring it to NW Manta
After Yan dies, Kill NE Manta while cleaving Squirrels
Kill NW Manta, then move North for Wave 3`},H1:{role:"Healer",party:1,description:`Stand NE with Squirrels
Kill NE Manta while cleaving Squirrels, then kill NW Manta`},H2:{role:"Healer",party:2,description:`Stand NE with Squirrels
Kill NE Manta while cleaving Squirrels, then kill NW Manta`},M1:{role:"Melee",party:1,description:`Stand NE with Squirrels
Kill NE Manta while cleaving Squirrels, then continue cleaving Squirrels`},M2:{role:"Melee",party:2,description:`Stand NE with Squirrels
Kill NE Manta while cleaving Squirrels, then continue cleaving Squirrels`},R1:{role:"Ranged",party:1,description:`Take NW Manta
Drop first puddle Northwest-ish, but leave room in the far corner for the second
Kill NE Manta first while cleaving, then kill NW Manta`},R2:{role:"Ranged",party:2,description:`Take NE Manta
Drop first puddle Northeast, move south if a second drops
Kill NE Manta first while cleaving, then kill NW Manta`}},wave3:{MT:{role:"Tank",party:1,description:`Take squirrels to South, then to Jabber spawn West
First stun on Jabber
Once Jabber is dead, kill remaining Squirrels before they enrage`},OT:{role:"Tank",party:2,description:"Pick up Yan North and chill"},H1:{role:"Healer",party:1,description:`If targeted by Jabber, go Southeast and single target
Kill Jabber
Kill Squirrels before they enrage
Kill Cat before 4th wave`},H2:{role:"Healer",party:2,description:`If targeted by Jabber, go Southeast and single target
Kill Jabber
Kill Squirrels before they enrage
Kill Cat before 4th wave`},M1:{role:"Melee",party:1,description:`Damage squirrels until Jabber spawns
Prioritize Jabber, take second stun
Kill Squirrels before they enrage
Kill Cat before 4th wave`},M2:{role:"Melee",party:2,description:`Damage squirrels until Jabber spawns
Prioritize Jabber, take second stun
Kill Squirrels before they enrage
Kill Cat before 4th wave`},R1:{role:"Ranged",party:1,description:`Damage squirrels until Jabber spawns
Prioritize Jabber
Kill Squirrels before they enrage
Kill Cat before 4th wave`},R2:{role:"Ranged",party:2,description:`Damage squirrels until Jabber spawns
Prioritize Jabber
Kill Squirrels before they enrage
Kill Cat before 4th wave`}},wave4:{MT:{role:"Tank",party:1,description:`Pick up new Squirrels, take them to Jabber
Prioritize Jabber, take first stun
Stack and kill SE Manta
Stack and kill SW Manta and Cat in either order
Kill Squirrels
Kill Yans`},OT:{role:"Tank",party:2,description:`Pick up new Yan, take them to 4 marker
Once Jabber dies, take Yans deep into SW corner
After Squirrels die, take Yans to boss and kill
CURRENT OBJECTIVE: SURVIVE`},H1:{role:"Healer",party:1,description:`If targeted by Jabber, go Southeast and single target
Make sure to keep OT alive
Kill Jabber, SE Manta, SW Manta + Cat in either order, Squirrels, Yans`},H2:{role:"Healer",party:2,description:`If targeted by Jabber, go Southeast and single target
Make sure to keep OT alive
Kill Jabber, SE Manta, SW Manta + Cat in either order, Squirrels, Yans`},M1:{role:"Melee",party:1,description:`Hit Squirrels until Jabber spawns
Prioritize Jabber, take second stun
Kill Jabber, SE Manta, Cat, Squirrels, Yans`},M2:{role:"Melee",party:2,description:`Hit Squirrels until Jabber spawns
Prioritize Jabber, take second stun
Kill Jabber, SE Manta, Cat, Squirrels, Yans`},R1:{role:"Ranged",party:1,description:`Take SW Manta
Keep deep SW clear of puddles, feel free to use North
Hit Squirrels until Jabber spawns
Prioritize Jabber
Kill Jabber, SE Manta, SW Manta + Cat in either order, Squirrels, Yans`},R2:{role:"Ranged",party:2,description:`Take SE Manta
Drop puddles along East wall
Hit Squirrels until Jabber spawns
Prioritize Jabber
Kill Jabber, SE Manta, SW Manta + Cat in either order, Squirrels, Yans`}}},f={wave1:{MT:{role:"Tank",party:1,description:"Tank boss and Squirrels East",imageUrl:"./m6s/adds/cleave-wave1.webp"},OT:{role:"Tank",party:2,description:"Tank Yan West",imageUrl:"./m6s/adds/cleave-wave1.webp"},H1:{role:"Healer",party:1,description:`Stack on Yan to bait Cat jump
Focus Yan, then focus Cat`,imageUrl:"./m6s/adds/cleave-wave1.webp"},H2:{role:"Healer",party:2,description:`Stack on Yan to bait Cat jump
Focus Yan, then focus Cat`,imageUrl:"./m6s/adds/cleave-wave1.webp"},M1:{role:"Melee",party:1,description:`Stack on Yan to bait Cat jump
Focus Yan, then focus Cat`,imageUrl:"./m6s/adds/cleave-wave1.webp"},M2:{role:"Melee",party:2,description:`Stack on Yan to bait Cat jump
Focus Yan, then focus Cat`,imageUrl:"./m6s/adds/cleave-wave1.webp"},R1:{role:"Ranged",party:1,description:`Stack on Yan to bait Cat jump
Focus Yan, then focus Cat`,imageUrl:"./m6s/adds/cleave-wave1.webp"},R2:{role:"Ranged",party:2,description:`Stack on Yan to bait Cat jump
Focus Yan, then focus Cat`,imageUrl:"./m6s/adds/cleave-wave1.webp"}},wave2:{MT:{role:"Tank",party:1,description:`Pick up Squirrels South, bring them to NE Manta as soon as possible
Bring Squirrels to NW Manta when NE Manta dies`,imageUrl:"./m6s/adds/cleave-wave2.webp"},OT:{role:"Tank",party:2,description:`Kill NE Manta while cleaving Squirrels
Kill NW Manta, then move North for Wave 3`,imageUrl:"./m6s/adds/cleave-wave2.webp"},H1:{role:"Healer",party:1,description:`One healer take NE Manta
Drop first puddle Northeast, move south if a second drops
If not taking Manta, stand NE with Squirrels
Kill NE Manta while cleaving Squirrels, then kill NW Manta`,imageUrl:"./m6s/adds/cleave-wave2.webp"},H2:{role:"Healer",party:2,description:`One healer take NE Manta
Drop first puddle Northeast, move south if a second drops
If not taking Manta, stand NE with Squirrels
Kill NE Manta while cleaving Squirrels, then kill NW Manta`,imageUrl:"./m6s/adds/cleave-wave2.webp"},M1:{role:"Melee",party:1,description:`Stand NE with Squirrels
Kill NE Manta while cleaving Squirrels, then kill NW Manta
Continue cleaving Squirrels`,imageUrl:"./m6s/adds/cleave-wave2.webp"},M2:{role:"Melee",party:2,description:`Stand NE with Squirrels
Kill NE Manta while cleaving Squirrels, then kill NW Manta
Continue cleaving Squirrels`,imageUrl:"./m6s/adds/cleave-wave2.webp"},R1:{role:"Ranged",party:1,description:"Kill NE Manta first while cleaving, then kill NW Manta",imageUrl:"./m6s/adds/cleave-wave2.webp"},R2:{role:"Ranged",party:2,description:`Take NW Manta
Drop first puddle Northwest-ish, but leave room in the far corner for the second
Kill NE Manta first while cleaving, then kill NW Manta`,imageUrl:"./m6s/adds/cleave-wave2.webp"}},wave3:{MT:{role:"Tank",party:1,description:`Take squirrels to South, then to Jabber spawn West
First stun on Jabber
Once Jabber is dead, kill remaining Squirrels before they enrage`,imageUrl:"./m6s/adds/cleave-wave3.webp"},OT:{role:"Tank",party:2,description:"Pick up Yan North and chill",imageUrl:"./m6s/adds/cleave-wave3.webp"},H1:{role:"Healer",party:1,description:`If targeted by Jabber, go Southeast and single target
Kill Jabber
Kill Squirrels before they enrage
Kill Cat before 4th wave`,imageUrl:"./m6s/adds/cleave-wave3.webp"},H2:{role:"Healer",party:2,description:`If targeted by Jabber, go Southeast and single target
Kill Jabber
Kill Squirrels before they enrage
Kill Cat before 4th wave`,imageUrl:"./m6s/adds/cleave-wave3.webp"},M1:{role:"Melee",party:1,description:`Damage squirrels until Jabber spawns
Prioritize Jabber, take second stun
Kill Squirrels before they enrage
Kill Cat before 4th wave
Hit boss if you can't hit the Cat`,imageUrl:"./m6s/adds/cleave-wave3.webp"},M2:{role:"Melee",party:2,description:`Damage squirrels until Jabber spawns
Prioritize Jabber, take second stun
Kill Squirrels before they enrage
Kill Cat before 4th wave
Hit boss if you can't hit the Cat`,imageUrl:"./m6s/adds/cleave-wave3.webp"},R1:{role:"Ranged",party:1,description:`Damage squirrels until Jabber spawns
Prioritize Jabber
Kill Squirrels before they enrage
Kill Cat before 4th wave`,imageUrl:"./m6s/adds/cleave-wave3.webp"},R2:{role:"Ranged",party:2,description:`Damage squirrels until Jabber spawns
Prioritize Jabber
Kill Squirrels before they enrage
Kill Cat before 4th wave`,imageUrl:"./m6s/adds/cleave-wave3.webp"}},wave4:{MT:{role:"Tank",party:1,description:`Pick up new Squirrels, take them to Jabber
Prioritize Jabber, take first stun
Stack and kill SE Manta
Stack and kill SW Manta and Cat in either order
Kill Squirrels
Kill Yans`,imageUrl:"./m6s/adds/cleave-wave4.webp"},OT:{role:"Tank",party:2,description:`Pick up new Yan, take them to 4 marker
Don't get hit by Manta puddles
After Squirrels die, take Yans to boss and kill
CURRENT OBJECTIVE: SURVIVE`,imageUrl:"./m6s/adds/cleave-wave4.webp"},H1:{role:"Healer",party:1,description:`If targeted by Jabber, go South and single target
Make sure to keep OT alive
Kill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/cleave-wave4.webp"},H2:{role:"Healer",party:2,description:`If targeted by Jabber, go South and single target
Make sure to keep OT alive
Kill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/cleave-wave4.webp"},M1:{role:"Melee",party:1,description:`Hit Squirrels until Jabber spawns
Prioritize Jabber, take second stun
Kill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/cleave-wave4.webp"},M2:{role:"Melee",party:2,description:`Hit Squirrels until Jabber spawns
Prioritize Jabber, take second stun
Kill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/cleave-wave4.webp"},R1:{role:"Ranged",party:1,description:`Take SW Manta
Drop puddles along West wall, then go East once you hit the corner
Hit Squirrels until Jabber spawns
Prioritize Jabber
Kill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/cleave-wave4.webp"},R2:{role:"Ranged",party:2,description:`Take SE Manta
Drop puddles along East wall, then go West once you hit the corner
Hit Squirrels until Jabber spawns
Prioritize Jabber
Kill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/cleave-wave4.webp"}}},S={wave1:{MT:{role:"Tank",party:1,description:"Tank boss and Squirrels Southeast",imageUrl:"./m6s/adds/game8-wave1.webp"},OT:{role:"Tank",party:2,description:"Tank Yan West",imageUrl:"./m6s/adds/game8-wave1.webp"},H1:{role:"Healer",party:1,description:`Stack on Yan to bait Cat jump
Focus Yan, then focus Cat`,imageUrl:"./m6s/adds/game8-wave1.webp"},H2:{role:"Healer",party:2,description:`Stack on Yan to bait Cat jump
Focus Yan, then focus Cat`,imageUrl:"./m6s/adds/game8-wave1.webp"},M1:{role:"Melee",party:1,description:`Stack on Yan to bait Cat jump
Focus Yan, then focus Cat`,imageUrl:"./m6s/adds/game8-wave1.webp"},M2:{role:"Melee",party:2,description:`Stack on Yan to bait Cat jump
Focus Yan, then focus Cat`,imageUrl:"./m6s/adds/game8-wave1.webp"},R1:{role:"Ranged",party:1,description:`Stack on Yan to bait Cat jump
Focus Cat, but help with Yan if needed`,imageUrl:"./m6s/adds/game8-wave1.webp"},R2:{role:"Ranged",party:2,description:`Stack on Yan to bait Cat jump
Focus Cat, but help with Yan if needed`,imageUrl:"./m6s/adds/game8-wave1.webp"}},wave2:{MT:{role:"Tank",party:1,description:`Pick up Squirrels South, bring them to NE Manta as soon as possible
Bring Squirrels to NW Manta when NE Manta dies`,imageUrl:"./m6s/adds/game8-wave2.webp"},OT:{role:"Tank",party:2,description:`Kill NE Manta while cleaving Squirrels
Kill NW Manta, then move North for Wave 3`,imageUrl:"./m6s/adds/game8-wave2.webp"},H1:{role:"Healer",party:1,description:`Stand NE with Squirrels
Kill NE Manta while cleaving Squirrels, then kill NW Manta`,imageUrl:"./m6s/adds/game8-wave2.webp"},H2:{role:"Healer",party:2,description:`Take NE Manta
Drop first puddle Northeast, move south if a second drops
If not taking Manta, stand NE with Squirrels
Kill NE Manta while cleaving Squirrels, then kill NW Manta`,imageUrl:"./m6s/adds/game8-wave2.webp"},M1:{role:"Melee",party:1,description:`Stand NE with Squirrels
Kill NE Manta while cleaving Squirrels, then kill NW Manta
Continue cleaving Squirrels`,imageUrl:"./m6s/adds/game8-wave2.webp"},M2:{role:"Melee",party:2,description:`Stand NE with Squirrels
Kill NE Manta while cleaving Squirrels, then kill NW Manta
Continue cleaving Squirrels`,imageUrl:"./m6s/adds/game8-wave2.webp"},R1:{role:"Ranged",party:1,description:`Take NW Manta
Drop first puddle Northwest, then move south for the second `,imageUrl:"./m6s/adds/game8-wave2.webp"},R2:{role:"Ranged",party:2,description:"Kill NE Manta first while cleaving, then kill NW Manta",imageUrl:"./m6s/adds/game8-wave2.webp"}},wave3:{MT:{role:"Tank",party:1,description:`Take squirrels away from North, then to Jabber spawn West
First stun on Jabber
Once Jabber is dead, kill remaining Squirrels before they enrage`,imageUrl:"./m6s/adds/game8-wave3.webp"},OT:{role:"Tank",party:2,description:"Pick up Yan North and chill",imageUrl:"./m6s/adds/game8-wave3.webp"},H1:{role:"Healer",party:1,description:`If targeted by Jabber, go Southeast and single target
Kill Jabber
Kill Squirrels before they enrage`,imageUrl:"./m6s/adds/game8-wave3.webp"},H2:{role:"Healer",party:2,description:`If targeted by Jabber, go Southeast and single target
Kill Jabber
Kill Squirrels before they enrage`,imageUrl:"./m6s/adds/game8-wave3.webp"},M1:{role:"Melee",party:1,description:`Damage squirrels until Jabber spawns
Prioritize Jabber, take second stun
Kill Squirrels before they enrage`,imageUrl:"./m6s/adds/game8-wave3.webp"},M2:{role:"Melee",party:2,description:`Damage squirrels until Jabber spawns
Prioritize Jabber, take second stun
Kill Squirrels before they enrage`,imageUrl:"./m6s/adds/game8-wave3.webp"},R1:{role:"Ranged",party:1,description:`Prioritize Cat
Hit Jabber if it's dying slowly
Kill Squirrels before they enrage `,imageUrl:"./m6s/adds/game8-wave3.webp"},R2:{role:"Ranged",party:2,description:`Damage Cat until Jabber spawns
Prioritize Jabber, then Cat
Kill Squirrels before they enrage`,imageUrl:"./m6s/adds/game8-wave3.webp"}},wave4:{MT:{role:"Tank",party:1,description:`Pick up new Squirrels, take them to SE Manta
Stack and kill SE Manta
Stack and kill SW Manta
Kill Squirrels
Kill Yans`,imageUrl:"./m6s/adds/game8-wave4.webp"},OT:{role:"Tank",party:2,description:`Pick up new Yan, stay North
Take first Jabber stun
After Squirrels die, take Yans to boss and kill
CURRENT OBJECTIVE: SURVIVE`,imageUrl:"./m6s/adds/game8-wave4.webp"},H1:{role:"Healer",party:1,description:`If targeted by Jabber, go South and single target
Make sure to keep OT alive
Kill Jabber, SE Manta, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/game8-wave4.webp"},H2:{role:"Healer",party:2,description:`If targeted by Jabber, go South and single target
Make sure to keep OT alive
Kill Jabber, SE Manta, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/game8-wave4.webp"},M1:{role:"Melee",party:1,description:`Hit Squirrels until Jabber spawns
Prioritize Jabber, take second stun
Kill Jabber, SE Manta, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/game8-wave4.webp"},M2:{role:"Melee",party:2,description:`Hit Squirrels until Jabber spawns
Prioritize Jabber, take third stun
Kill Jabber, SE Manta, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/game8-wave4.webp"},R1:{role:"Ranged",party:1,description:`Take SW Manta
Drop puddles along West wall, then along South wall, then loop back up
Prioritize Cat
Hit Jabber if it's dying slowly
Kill Cat, Jabber, SE Manta, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/game8-wave4.webp"},R2:{role:"Ranged",party:2,description:`Take SE Manta
Drop first puddle Southeast, then up along East wall
Kill Jabber, Cat, SE Manta, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/game8-wave4.webp"}}},U={wave1:{MT:{role:"Tank",party:1,description:"Tank boss and Squirrels Southeast",imageUrl:"./m6s/adds/mr-wave1.webp"},OT:{role:"Tank",party:2,description:"Tank Yan West",imageUrl:"./m6s/adds/mr-wave1.webp"},H1:{role:"Healer",party:1,description:`Stack on Yan to bait Cat jump
DoT Cat, then kill Yan`,imageUrl:"./m6s/adds/mr-wave1.webp"},H2:{role:"Healer",party:2,description:`Stack on Yan to bait Cat jump
DoT Cat, then kill Yan`,imageUrl:"./m6s/adds/mr-wave1.webp"},M1:{role:"Melee",party:1,description:`Stack on Yan to bait Cat jump
Focus Yan`,imageUrl:"./m6s/adds/mr-wave1.webp"},M2:{role:"Melee",party:2,description:`Stack on Yan to bait Cat jump
Focus Yan`,imageUrl:"./m6s/adds/mr-wave1.webp"},R1:{role:"Ranged",party:1,description:`Stack on Yan to bait Cat jump
Focus Cat, then kill Yan`,imageUrl:"./m6s/adds/mr-wave1.webp"},R2:{role:"Ranged",party:2,description:`Stack on Yan to bait Cat jump
Focus Cat, then kill Yan`,imageUrl:"./m6s/adds/mr-wave1.webp"}},wave2:{MT:{role:"Tank",party:1,description:`Pick up Squirrels South, bring them to NE Manta as soon as possible
Bring Squirrels to NW Manta when NE Manta dies`,imageUrl:"./m6s/adds/mr-wave2.webp"},OT:{role:"Tank",party:2,description:`Drag Yan away from NE if still alive
Kill NE Manta while cleaving Squirrels
Kill NW Manta, then move North for Wave 3`,imageUrl:"./m6s/adds/mr-wave2.webp"},H1:{role:"Healer",party:1,description:`Take NE Manta
Drop first puddle Northeast, move south if a second drops
Kill NE Manta while cleaving Squirrels, then kill NW Manta`,imageUrl:"./m6s/adds/mr-wave2.webp"},H2:{role:"Healer",party:2,description:`Stand NE with Squirrels
Kill NE Manta while cleaving Squirrels, then kill NW Manta`,imageUrl:"./m6s/adds/mr-wave2.webp"},M1:{role:"Melee",party:1,description:`Stand NE with Squirrels
Kill NE Manta while cleaving Squirrels, then kill NW Manta
Continue cleaving Squirrels`,imageUrl:"./m6s/adds/mr-wave2.webp"},M2:{role:"Melee",party:2,description:`Stand NE with Squirrels
Kill NE Manta while cleaving Squirrels, then kill NW Manta
Continue cleaving Squirrels`,imageUrl:"./m6s/adds/mr-wave2.webp"},R1:{role:"Ranged",party:1,description:`Take NW Manta
Drop first puddle Northwest, then move south for the second `,imageUrl:"./m6s/adds/mr-wave2.webp"},R2:{role:"Ranged",party:2,description:"Kill NE Manta first while cleaving, then kill NW Manta",imageUrl:"./m6s/adds/mr-wave2.webp"}},wave3:{MT:{role:"Tank",party:1,description:`Take squirrels to Jabber spawn West
First stun on Jabber
Once Jabber is dead, kill remaining Squirrels before they enrage`,imageUrl:"./m6s/adds/mr-wave3.webp"},OT:{role:"Tank",party:2,description:"Pick up Yan North and chill",imageUrl:"./m6s/adds/mr-wave3.webp"},H1:{role:"Healer",party:1,description:`If targeted by Jabber, go Southeast and single target
Kill Jabber
Kill Squirrels before they enrage`,imageUrl:"./m6s/adds/mr-wave3.webp"},H2:{role:"Healer",party:2,description:`If targeted by Jabber, go Southeast and single target
Kill Jabber
Kill Squirrels before they enrage`,imageUrl:"./m6s/adds/mr-wave3.webp"},M1:{role:"Melee",party:1,description:`Damage squirrels until Jabber spawns
Prioritize Jabber, take second stun
Kill Squirrels before they enrage`,imageUrl:"./m6s/adds/mr-wave3.webp"},M2:{role:"Melee",party:2,description:`Damage squirrels until Jabber spawns
Prioritize Jabber, take third stun
Kill Squirrels before they enrage`,imageUrl:"./m6s/adds/mr-wave3.webp"},R1:{role:"Ranged",party:1,description:`Kill Jabber
Kill squirrels before enrage
Kill cat before meteor cast`,imageUrl:"./m6s/adds/mr-wave3.webp"},R2:{role:"Ranged",party:2,description:`Kill Jabber
Kill squirrels before enrage
Kill cat before meteor cast`,imageUrl:"./m6s/adds/mr-wave3.webp"}},wave4:{MT:{role:"Tank",party:1,description:`Pick up new Squirrels, take them to SE Manta
Stack and kill SE Manta
Stack and kill SW Manta
Kill Squirrels
Kill Yans`,imageUrl:"./m6s/adds/mr-wave4.webp"},OT:{role:"Tank",party:2,description:`Pick up new Yan, stay North
Take first Jabber stun
After Squirrels die, take Yans to boss and kill
CURRENT OBJECTIVE: SURVIVE`,imageUrl:"./m6s/adds/mr-wave4.webp"},H1:{role:"Healer",party:1,description:`If targeted by Jabber, go Southeast and single target
Make sure to keep OT alive
Kill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/mr-wave4.webp"},H2:{role:"Healer",party:2,description:`If targeted by Jabber, go Southeast and single target
Make sure to keep OT alive
Kill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/mr-wave4.webp"},M1:{role:"Melee",party:1,description:`Hit Squirrels until Jabber spawns
Prioritize Jabber, take second stun
Kill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/mr-wave4.webp"},M2:{role:"Melee",party:2,description:`Hit Squirrels until Jabber spawns
Prioritize Jabber, take third stun
Kill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/mr-wave4.webp"},R1:{role:"Ranged",party:1,description:`Take SW Manta
Drop puddles along West wall, then along South wall, then loop back up
Kill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/mr-wave4.webp"},R2:{role:"Ranged",party:2,description:`Take SE Manta
Drop puddles along East wall
Kill Jabber, SE Manta, Cat, SW Manta, Squirrels, Yans`,imageUrl:"./m6s/adds/mr-wave4.webp"}}},i={toxic:y,latte:k,yukizuri:M,cleave:f,game8:S,mr:U},T={stratName:"latte",description:"Source: Raidplan by Lalatte Latte",notes:"",stratUrl:"https://raidplan.io/plan/0066fd3CVp1_G36R",strats:[{phaseName:"Wingmark/Double Style",mechs:[{mechanic:"Light Parties",description:"G1 Left, G2 Right Facing Boss",strats:[{role:"Tank",party:1,description:"Left",imageUrl:"./m6s/toxic/double-lps.webp"},{role:"Tank",party:2,description:"Right",imageUrl:"./m6s/toxic/double-lps.webp"},{role:"Healer",party:1,description:"Left",imageUrl:"./m6s/toxic/double-lps.webp"},{role:"Healer",party:2,description:"Right",imageUrl:"./m6s/toxic/double-lps.webp"},{role:"Melee",party:1,description:"Left",imageUrl:"./m6s/toxic/double-lps.webp"},{role:"Melee",party:2,description:"Right",imageUrl:"./m6s/toxic/double-lps.webp"},{role:"Ranged",party:1,description:"Left",imageUrl:"./m6s/toxic/double-lps.webp"},{role:"Ranged",party:2,description:"Right",imageUrl:"./m6s/toxic/double-lps.webp"}]},{mechanic:"Partners",strats:[{role:"Tank",party:1,description:"Front with M1",imageUrl:"./m6s/latte/double-partners.webp"},{role:"Tank",party:2,description:"Back with M2",imageUrl:"./m6s/latte/double-partners.webp"},{role:"Healer",party:1,description:"Left with R1",imageUrl:"./m6s/latte/double-partners.webp"},{role:"Healer",party:2,description:"Right with R2",imageUrl:"./m6s/latte/double-partners.webp"},{role:"Melee",party:1,description:"Front with MT",imageUrl:"./m6s/latte/double-partners.webp"},{role:"Melee",party:2,description:"Back with OT",imageUrl:"./m6s/latte/double-partners.webp"},{role:"Ranged",party:1,description:"Left with H1",imageUrl:"./m6s/latte/double-partners.webp"},{role:"Ranged",party:2,description:"Right with H2",imageUrl:"./m6s/latte/double-partners.webp"}]}]},{phaseName:"Sticky Mousse",description:"Modified clocks, Tanks stack center",mechs:[{mechanic:"Stacks",description:"Distance prio, use eyes",imageUrl:"./m6s/latte/sticky.webp"}]},{phaseName:"Cactus Dodges",mechs:[{mechanic:"Dodges",description:"North-ish, then stack Center",imageUrl:"./m6s/latte/desert-dodges.webp"},{mechanic:"Short Defamations",description:"Tanks NW-ish, DPS NE-ish",imageUrl:"./m6s/latte/desert-dodges.webp"}]},{phaseName:"Quicksand + Healer Defamations",description:"True North, H1 West, H2 East",mechs:[{mechanic:"Party + Healer Defamations",strats:[{role:"Tank",party:1,description:"Across from unsafe corner",imageUrl:"./m6s/latte/desert-healers.webp"},{role:"Tank",party:2,description:"Across from unsafe corner",imageUrl:"./m6s/latte/desert-healers.webp"},{role:"Healer",party:1,description:"West corner next to cactus",imageUrl:"./m6s/latte/desert-healers.webp"},{role:"Healer",party:2,description:"East corner next to cactus",imageUrl:"./m6s/latte/desert-healers.webp"},{role:"Melee",party:1,description:"Across from unsafe corner",imageUrl:"./m6s/latte/desert-healers.webp"},{role:"Melee",party:2,description:"Across from unsafe corner",imageUrl:"./m6s/latte/desert-healers.webp"},{role:"Ranged",party:1,description:"Across from unsafe corner",imageUrl:"./m6s/latte/desert-healers.webp"},{role:"Ranged",party:2,description:"Across from unsafe corner",imageUrl:"./m6s/latte/desert-healers.webp"}]}]},{phaseName:"Quicksand + Bombs",description:`True North RMMR
Blue tether goes in quicksand`,mechs:[{mechanic:"Bombs",strats:[{role:"Tank",party:1,description:"West close to boss",imageUrl:"./m6s/latte/desert-bombs.webp"},{role:"Tank",party:2,description:"East close to boss",imageUrl:"./m6s/latte/desert-bombs.webp"},{role:"Healer",party:1,description:"West far from boss",imageUrl:"./m6s/latte/desert-bombs.webp"},{role:"Healer",party:2,description:"East far from boss",imageUrl:"./m6s/latte/desert-bombs.webp"},{role:"Melee",party:1,description:"West close to boss",imageUrl:"./m6s/latte/desert-bombs.webp"},{role:"Melee",party:2,description:"East close to boss",imageUrl:"./m6s/latte/desert-bombs.webp"},{role:"Ranged",party:1,description:"West far from boss",imageUrl:"./m6s/latte/desert-bombs.webp"},{role:"Ranged",party:2,description:"East far from boss",imageUrl:"./m6s/latte/desert-bombs.webp"}]}]},{phaseName:"Adds",tag:"adds",description:"",mechs:[{mechanic:"Wave 1",strats:t(i,"wave1")},{mechanic:"Wave 2",strats:t(i,"wave2")},{mechanic:"Wave 3",strats:t(i,"wave3")},{mechanic:"Wave 4",strats:t(i,"wave4")}]},{phaseName:"Sugarscape (River)",description:"",mechs:[{mechanic:"Lightning (Spreads)",description:"Modified clocks",strats:[{role:"Tank",party:1,description:"Center",imageUrl:"./m6s/latte/river-lightning.webp"},{role:"Tank",party:2,description:"North (near A marker)",imageUrl:"./m6s/latte/river-lightning.webp"},{role:"Healer",party:1,description:"Southwest (near 4 marker)",imageUrl:"./m6s/latte/river-lightning.webp"},{role:"Healer",party:2,description:"Southeast (near 3 marker)",imageUrl:"./m6s/latte/river-lightning.webp"},{role:"Melee",party:1,description:"West (near D marker)",imageUrl:"./m6s/latte/river-lightning.webp"},{role:"Melee",party:2,description:"East (near B marker)",imageUrl:"./m6s/latte/river-lightning.webp"},{role:"Ranged",party:1,description:"Northwest (near 1 marker)",imageUrl:"./m6s/latte/river-lightning.webp"},{role:"Ranged",party:2,description:"Northeast (near 2 marker)",imageUrl:"./m6s/latte/river-lightning.webp"}]},{mechanic:"Fire (Stacks)",description:"MT H1 Melee Center, OT H2 Ranged Far",strats:[{role:"Tank",party:1,description:"Middle",imageUrl:"./m6s/latte/river-fire.webp"},{role:"Tank",party:2,description:"Far",imageUrl:"./m6s/latte/river-fire.webp"},{role:"Healer",party:1,description:"Middle",imageUrl:"./m6s/latte/river-fire.webp"},{role:"Healer",party:2,description:"Far",imageUrl:"./m6s/latte/river-fire.webp"},{role:"Melee",party:1,description:"Middle",imageUrl:"./m6s/latte/river-fire.webp"},{role:"Melee",party:2,description:"Middle",imageUrl:"./m6s/latte/river-fire.webp"},{role:"Ranged",party:1,description:"Far",imageUrl:"./m6s/latte/river-fire.webp"},{role:"Ranged",party:2,description:"Far",imageUrl:"./m6s/latte/river-fire.webp"}]}]},{phaseName:"Lightning Storm",description:`Party stays on bridge
Facing cloud, Supports Left, DPS Right`,imageUrl:"./m6s/latte/storm.webp"},{phaseName:"Pudding Party",description:`True North
G1 West G2 East`,mechs:[{mechanic:"Towers",notes:"Remember to bait the Twister-style AoE when the Lightning flash happens",strats:[{role:"Tank",party:1,description:"Take Left tower closest to wall",imageUrl:"./m6s/latte/pudding-towers.webp"},{role:"Tank",party:2,description:"Take Right tower closest to wall",imageUrl:"./m6s/latte/pudding-towers.webp"},{role:"Healer",party:1,description:`West platform
Take the tower closest to the final puddle drop`,imageUrl:"./m6s/latte/pudding-towers.webp"},{role:"Healer",party:2,description:`East platform
Take the tower closest to the final puddle drop`,imageUrl:"./m6s/latte/pudding-towers.webp"},{role:"Melee",party:1,description:"Take Left tower near marker",imageUrl:"./m6s/latte/pudding-towers.webp"},{role:"Melee",party:2,description:"Take Right tower near marker",imageUrl:"./m6s/latte/pudding-towers.webp"},{role:"Ranged",party:1,description:`West platform
Take the tower furthest from the final puddle drop`,imageUrl:"./m6s/latte/pudding-towers.webp"},{role:"Ranged",party:2,description:`East platform
Take the tower furthest from the final puddle drop`,imageUrl:"./m6s/latte/pudding-towers.webp"}]}]},{phaseName:"Wingmark + Towers",description:`Melees + Tanks in the 4 tower platform
Everyone rotate the same direction`,mechs:[{mechanic:"4-2-2",description:"Healers + Melees closest to river",strats:[{role:"Tank",party:1,description:"Take Left tower furthest from river",imageUrl:"./m6s/latte/pudding-422.webp"},{role:"Tank",party:2,description:"Take Right tower furthest from river",imageUrl:"./m6s/latte/pudding-422.webp"},{role:"Healer",party:1,description:`Left platform
Take the tower closest to river`,imageUrl:"./m6s/latte/pudding-422.webp"},{role:"Healer",party:2,description:`Right platform
Take the tower closest to river`,imageUrl:"./m6s/latte/pudding-422.webp"},{role:"Melee",party:1,description:"Take Left tower closest to river",imageUrl:"./m6s/latte/pudding-422.webp"},{role:"Melee",party:2,description:"Take Right tower closest to river",imageUrl:"./m6s/latte/pudding-422.webp"},{role:"Ranged",party:1,description:`Left platform
Take the tower furthest from river`,imageUrl:"./m6s/latte/pudding-422.webp"},{role:"Ranged",party:2,description:`Right platform
Take the tower furthest from river`,imageUrl:"./m6s/latte/pudding-422.webp"}]},{mechanic:"8-0-0",description:"True North",strats:[{role:"Tank",party:1,description:"West",imageUrl:"./m6s/latte/pudding-800.webp"},{role:"Tank",party:2,description:"Center South",imageUrl:"./m6s/latte/pudding-800.webp"},{role:"Healer",party:1,description:"Close South East",imageUrl:"./m6s/latte/pudding-800.webp"},{role:"Healer",party:2,description:"Center North",imageUrl:"./m6s/latte/pudding-800.webp"},{role:"Melee",party:1,description:"Close South West",imageUrl:"./m6s/latte/pudding-800.webp"},{role:"Melee",party:2,description:"Close North West",imageUrl:"./m6s/latte/pudding-800.webp"},{role:"Ranged",party:1,description:"Far North East",imageUrl:"./m6s/latte/pudding-800.webp"},{role:"Ranged",party:2,description:"Far South East",imageUrl:"./m6s/latte/pudding-800.webp"}]}]}]},v={stratName:"yukizuri",description:"Source: Video by Yukizuri",notes:"",stratUrl:"https://www.youtube.com/watch?v=3IXGB5fqC4A",strats:[{phaseName:"Adds",tag:"adds",description:"",mechs:[{mechanic:"Wave 1",strats:t(i,"wave1")},{mechanic:"Wave 2",strats:t(i,"wave2")},{mechanic:"Wave 3",strats:t(i,"wave3")},{mechanic:"Wave 4",strats:t(i,"wave4")}]},{phaseName:"Under Construction"}]},N={stratName:"toxic",description:"Source: Raidplan by Cute Animal @ Omega and Toxic Friends",notes:"",stratUrl:{"Start + Adds":"https://raidplan.io/plan/Pgj53K49w8LAZpI6",Desert:"https://raidplan.io/plan/NWiAOP4kdekXg9mg",Bridges:"https://raidplan.io/plan/f0forhkOQMkVL3-I"},strats:[{phaseName:"Wingmark/Double Style",mechs:[{mechanic:"Light Parties",description:"G1 Left, G2 Right Facing Boss",strats:[{role:"Tank",party:1,description:"Left",imageUrl:"./m6s/toxic/double-lps.webp",mask:e(31.4,13.14,8.8)},{role:"Tank",party:2,description:"Right",imageUrl:"./m6s/toxic/double-lps.webp",mask:e(13.02,28.94,8.8)},{role:"Healer",party:1,description:"Left",imageUrl:"./m6s/toxic/double-lps.webp",mask:e(31.4,13.14,8.8)},{role:"Healer",party:2,description:"Right",imageUrl:"./m6s/toxic/double-lps.webp",mask:e(13.02,28.94,8.8)},{role:"Melee",party:1,description:"Left",imageUrl:"./m6s/toxic/double-lps.webp",mask:e(31.4,13.14,8.8)},{role:"Melee",party:2,description:"Right",imageUrl:"./m6s/toxic/double-lps.webp",mask:e(13.02,28.94,8.8)},{role:"Ranged",party:1,description:"Left",imageUrl:"./m6s/toxic/double-lps.webp",mask:e(31.4,13.14,8.8)},{role:"Ranged",party:2,description:"Right",imageUrl:"./m6s/toxic/double-lps.webp",mask:e(13.02,28.94,8.8)}]},{mechanic:"Partners",strats:[{role:"Tank",party:1,description:"Front with M1",imageUrl:"./m6s/toxic/double-partners.webp",mask:e(24.62,24.35,8.8)},{role:"Tank",party:2,description:"Back with M2",imageUrl:"./m6s/toxic/double-partners.webp",mask:e(11.36,11.35,8.8)},{role:"Healer",party:1,description:"Left with R1",imageUrl:"./m6s/toxic/double-partners.webp",mask:e(41.09,9.32,8.8)},{role:"Healer",party:2,description:"Right with R2",imageUrl:"./m6s/toxic/double-partners.webp",mask:e(9.19,38.89,8.8)},{role:"Melee",party:1,description:"Front with MT",imageUrl:"./m6s/toxic/double-partners.webp",mask:e(24.62,24.35,8.8)},{role:"Melee",party:2,description:"Back with OT",imageUrl:"./m6s/toxic/double-partners.webp",mask:e(11.36,11.35,8.8)},{role:"Ranged",party:1,description:"Left with H1",imageUrl:"./m6s/toxic/double-partners.webp",mask:e(41.09,9.32,8.8)},{role:"Ranged",party:2,description:"Right with H2",imageUrl:"./m6s/toxic/double-partners.webp",mask:e(9.19,38.89,8.8)}]}]},{phaseName:"Sticky Mousse",mechs:[{mechanic:"Stacks",description:"LP prio, use eyes",imageUrl:"./m6s/toxic/sticky.webp"}]},{phaseName:"Cactus Dodges",mechs:[{mechanic:"Stack + Short Defamations",notes:"This is the only difference between Toxic and Hector strats",description:`Toxic: Stack North, Tanks SW, DPS SE
Hector: Stack Mid, Tanks NW, DPS SW`,imageUrl:"./m6s/toxic/desert-dodges.webp"}]},{phaseName:"Quicksand + Healer Defamations",description:"H1 CW, H2 CCW from cactus",mechs:[{mechanic:"Party + Healer Defamations",strats:[{role:"Tank",party:1,description:"Across from unsafe corner",imageUrl:"./m6s/toxic/desert-healers.webp",mask:e(89.8,13.2,8)},{role:"Tank",party:2,description:"Across from unsafe corner",imageUrl:"./m6s/toxic/desert-healers.webp",mask:e(89.8,13.2,8)},{role:"Healer",party:1,description:"Clockwise from cactus corner",imageUrl:"./m6s/toxic/desert-healers.webp",mask:e(11.7,11.7,6)},{role:"Healer",party:2,description:"Counter-Clockwise from cactus corner",imageUrl:"./m6s/toxic/desert-healers.webp",mask:e(88.5,87.4,6)},{role:"Melee",party:1,description:"Across from unsafe corner",imageUrl:"./m6s/toxic/desert-healers.webp",mask:e(89.8,13.2,8)},{role:"Melee",party:2,description:"Across from unsafe corner",imageUrl:"./m6s/toxic/desert-healers.webp",mask:e(89.8,13.2,8)},{role:"Ranged",party:1,description:"Across from unsafe corner",imageUrl:"./m6s/toxic/desert-healers.webp",mask:e(89.8,13.2,8)},{role:"Ranged",party:2,description:"Across from unsafe corner",imageUrl:"./m6s/toxic/desert-healers.webp",mask:e(89.8,13.2,8)}]}]},{phaseName:"Quicksand + Bombs",description:`True North
G1 W, G2 E, RMMR`,mechs:[{mechanic:"Bombs",strats:[{role:"Tank",party:1,description:"West close to boss",imageUrl:"./m6s/toxic/desert-bombs.webp",mask:e(41.45,54.71,6)},{role:"Tank",party:2,description:"East close to boss",imageUrl:"./m6s/toxic/desert-bombs.webp",mask:e(59.69,54.58,6)},{role:"Healer",party:1,description:"West far from boss",imageUrl:"./m6s/toxic/desert-bombs.webp",mask:e(23.35,56.49,6)},{role:"Healer",party:2,description:"East far from boss",imageUrl:"./m6s/toxic/desert-bombs.webp",mask:e(79.97,57.9,6)},{role:"Melee",party:1,description:"West close to boss",imageUrl:"./m6s/toxic/desert-bombs.webp",mask:e(40.69,36.6,6)},{role:"Melee",party:2,description:"East close to boss",imageUrl:"./m6s/toxic/desert-bombs.webp",mask:e(60.07,36.48,6)},{role:"Ranged",party:1,description:"West far from boss",imageUrl:"./m6s/toxic/desert-bombs.webp",mask:e(19.9,37.12,6)},{role:"Ranged",party:2,description:"East far from boss",imageUrl:"./m6s/toxic/desert-bombs.webp",mask:e(80.23,38.01,6)}]}]},{phaseName:"Adds",tag:"adds",description:"",mechs:[{mechanic:"Wave 1",strats:t(i,"wave1")},{mechanic:"Wave 2",strats:t(i,"wave2")},{mechanic:"Wave 3",strats:t(i,"wave3")},{mechanic:"Wave 4",strats:t(i,"wave4")}]},{phaseName:"Sugarscape (River)",description:"",mechs:[{mechanic:"Lightning (Spreads)",description:"",strats:[{role:"Tank",party:1,description:"Northwest",imageUrl:"./m6s/toxic/river-lightning.webp",mask:s([16.39,51.39,7],[69.71,42.47,7])},{role:"Tank",party:2,description:"Northwest",imageUrl:"./m6s/toxic/river-lightning.webp",mask:s([10.72,21.81,7],[59.63,19.26,7])},{role:"Healer",party:1,description:"Northeast",imageUrl:"./m6s/toxic/river-lightning.webp",mask:s([42.66,29.21,7],[86.29,15.31,7])},{role:"Healer",party:2,description:"South",imageUrl:"./m6s/toxic/river-lightning.webp",mask:s([13.91,83.91,7],[70.03,75.24,7])},{role:"Melee",party:1,description:"Northwest",imageUrl:"./m6s/toxic/river-lightning.webp",mask:s([17.35,34.05,7],[59.82,42.09,7])},{role:"Melee",party:2,description:"Northwest",imageUrl:"./m6s/toxic/river-lightning.webp",mask:s([26.47,32.78,7],[69.52,19.01,7])},{role:"Ranged",party:1,description:"Northeast",imageUrl:"./m6s/toxic/river-lightning.webp",mask:s([42.44,53.31,7],[85.71,45.53,7])},{role:"Ranged",party:2,description:"South",imageUrl:"./m6s/toxic/river-lightning.webp",mask:s([28.12,84.17,7],[83.93,76.77,7])}]},{mechanic:"Fire (Stacks)",description:"",strats:[{role:"Tank",party:1,description:"Middle",imageUrl:"./m6s/toxic/river-fire.webp",mask:s([28.32,54.57,10],[74.4,46.3,10])},{role:"Tank",party:2,description:"Far behind safe bridge",imageUrl:"./m6s/toxic/river-fire.webp",mask:s([11.54,59.8,10],[57.9,68.37,10])},{role:"Healer",party:1,description:"Middle",imageUrl:"./m6s/toxic/river-fire.webp",mask:s([28.32,54.57,10],[74.4,46.3,10])},{role:"Healer",party:2,description:"Far behind safe bridge",imageUrl:"./m6s/toxic/river-fire.webp",mask:s([11.54,59.8,10],[57.9,68.37,10])},{role:"Melee",party:1,description:"Middle",imageUrl:"./m6s/toxic/river-fire.webp",mask:s([28.32,54.57,10],[74.4,46.3,10])},{role:"Melee",party:2,description:"Middle",imageUrl:"./m6s/toxic/river-fire.webp",mask:s([28.32,54.57,10],[74.4,46.3,10])},{role:"Ranged",party:1,description:"Far behind safe bridge",imageUrl:"./m6s/toxic/river-fire.webp",mask:s([11.54,59.8,10],[57.9,68.37,10])},{role:"Ranged",party:2,description:"Far behind safe bridge",imageUrl:"./m6s/toxic/river-fire.webp",mask:s([11.54,59.8,10],[57.9,68.37,10])}]}]},{phaseName:"Lightning Storm",description:`Party stays on bridge
DPS CCW, Support CW`,imageUrl:"./m6s/toxic/storm.webp"},{phaseName:"Pudding Party",description:`True North
G1 West G2 East`,mechs:[{mechanic:"Towers",notes:"Remember to bait the Twister-style AoE when the Lightning flash happens",strats:[{role:"Tank",party:1,description:`Bait proteans
Take West tower closest to wall`,imageUrl:"./m6s/toxic/pudding-towers.webp",mask:e(33.2,85.1,8)},{role:"Tank",party:2,description:`Bait proteans
Take East tower closest to wall`,imageUrl:"./m6s/toxic/pudding-towers.webp",mask:e(62.9,86,8)},{role:"Healer",party:1,description:`West platform
Take the tower closer to the middle`,imageUrl:"./m6s/toxic/pudding-towers.webp",mask:e(34.8,39.6,8)},{role:"Healer",party:2,description:`East platform
Take the tower closer to the middle`,imageUrl:"./m6s/toxic/pudding-towers.webp",mask:e(69.9,38.7,8)},{role:"Melee",party:1,description:`Bait proteans
Take West tower near marker`,imageUrl:"./m6s/toxic/pudding-towers.webp",mask:e(35,69.4,8)},{role:"Melee",party:2,description:`Bait proteans
Take East tower near marker`,imageUrl:"./m6s/toxic/pudding-towers.webp",mask:e(62.3,70.9,8)},{role:"Ranged",party:1,description:`West platform
Take the tower further from the middle`,imageUrl:"./m6s/toxic/pudding-towers.webp",mask:e(16.1,52.9,8)},{role:"Ranged",party:2,description:`East platform
Take the tower further from the middle`,imageUrl:"./m6s/toxic/pudding-towers.webp",mask:e(85.9,33.9,8)}]}]},{phaseName:"Wingmark + Towers",description:`Melees + Tanks in the 4 tower platform
Everyone rotate the same direction`,mechs:[{mechanic:"4-2-2",description:"Healers + Melees closest to river",strats:[{role:"Tank",party:1,description:"Take Left tower furthest from river",imageUrl:"./m6s/toxic/pudding-422.webp",mask:e(85.8,15.2,8)},{role:"Tank",party:2,description:"Take Right tower furthest from river",imageUrl:"./m6s/toxic/pudding-422.webp",mask:e(87.6,59.6,8)},{role:"Healer",party:1,description:`Left platform
Take the tower closest to river`,imageUrl:"./m6s/toxic/pudding-422.webp",mask:e(59.6,72.3,8)},{role:"Healer",party:2,description:`Right platform
Take the tower closest to river`,imageUrl:"./m6s/toxic/pudding-422.webp",mask:e(28.2,43.8,8)},{role:"Melee",party:1,description:"Take Left tower closest to river",imageUrl:"./m6s/toxic/pudding-422.webp",mask:e(71.6,26.6,8)},{role:"Melee",party:2,description:"Take Right tower closest to river",imageUrl:"./m6s/toxic/pudding-422.webp",mask:e(72.4,44.6,8)},{role:"Ranged",party:1,description:`Left platform
Take the tower furthest from river`,imageUrl:"./m6s/toxic/pudding-422.webp",mask:e(29.5,86.1,8)},{role:"Ranged",party:2,description:`Right platform
Take the tower furthest from river`,imageUrl:"./m6s/toxic/pudding-422.webp",mask:e(16.6,22.9,8)}]},{mechanic:"8-0-0",description:"Static positions",strats:[{role:"Tank",party:1,description:"Far West",imageUrl:"./m6s/toxic/pudding-800.webp",mask:e(12.6,83.7,8)},{role:"Tank",party:2,description:"Center South",imageUrl:"./m6s/toxic/pudding-800.webp",mask:e(46.3,84.8,8)},{role:"Healer",party:1,description:"Close Southeast",imageUrl:"./m6s/toxic/pudding-800.webp",mask:e(63.3,86.2,8)},{role:"Healer",party:2,description:"Center North",imageUrl:"./m6s/toxic/pudding-800.webp",mask:e(46.7,68.6,8)},{role:"Melee",party:1,description:"Close Southwest",imageUrl:"./m6s/toxic/pudding-800.webp",mask:e(29.5,86.1,8)},{role:"Melee",party:2,description:"Close Northwest (near 4 marker)",imageUrl:"./m6s/toxic/pudding-800.webp",mask:e(28,70,8)},{role:"Ranged",party:1,description:"Far East",imageUrl:"./m6s/toxic/pudding-800.webp",mask:e(79.3,83.9,8)},{role:"Ranged",party:2,description:"Close Northeast (near 3 marker)",imageUrl:"./m6s/toxic/pudding-800.webp",mask:e(66.1,69.9,8)}]}]}]},R={stratName:"game8",description:"Source: Game8",notes:"",stratUrl:"https://game8.jp/ff14/681086",strats:[{phaseName:"Wingmark/Double Style",mechs:[{mechanic:"Light Parties",description:"G1 Left, G2 Right Facing Boss",strats:[{role:"Tank",party:1,description:"Left",imageUrl:"./m6s/game8/double-lps.webp"},{role:"Tank",party:2,description:"Right",imageUrl:"./m6s/game8/double-lps.webp"},{role:"Healer",party:1,description:"Left",imageUrl:"./m6s/game8/double-lps.webp"},{role:"Healer",party:2,description:"Right",imageUrl:"./m6s/game8/double-lps.webp"},{role:"Melee",party:1,description:"Left",imageUrl:"./m6s/game8/double-lps.webp"},{role:"Melee",party:2,description:"Right",imageUrl:"./m6s/game8/double-lps.webp"},{role:"Ranged",party:1,description:"Left",imageUrl:"./m6s/game8/double-lps.webp"},{role:"Ranged",party:2,description:"Right",imageUrl:"./m6s/game8/double-lps.webp"}]},{mechanic:"Partners",strats:[{role:"Tank",party:1,description:"Front with D1",imageUrl:"./m6s/game8/double-partners.webp"},{role:"Tank",party:2,description:"Back with D2",imageUrl:"./m6s/game8/double-partners.webp"},{role:"Healer",party:1,description:"Left with D3",imageUrl:"./m6s/game8/double-partners.webp"},{role:"Healer",party:2,description:"Right with D4",imageUrl:"./m6s/game8/double-partners.webp"},{role:"Melee",party:1,description:"Front with MT",imageUrl:"./m6s/game8/double-partners.webp"},{role:"Melee",party:2,description:"Back with ST",imageUrl:"./m6s/game8/double-partners.webp"},{role:"Ranged",party:1,description:"Left with H1",imageUrl:"./m6s/game8/double-partners.webp"},{role:"Ranged",party:2,description:"Right with H2",imageUrl:"./m6s/game8/double-partners.webp"}]}]},{phaseName:"Sticky Mousse",mechs:[{mechanic:"Stacks",description:"Modified clocks, Tanks stack center",imageUrl:"./m6s/game8/sticky.webp"}]},{phaseName:"Cactus Dodges",mechs:[{mechanic:"Stack + Short Defamations",description:"Stack North"}]},{phaseName:"Quicksand + Healer Defamations",description:`H1 NW, H2 SE, Party NE
SW if unsafe`,mechs:[{mechanic:"Party + Healer Defamations",strats:[{role:"Tank",party:1,description:"NE, SW if unsafe",imageUrl:"./m6s/game8/desert-healers.webp"},{role:"Tank",party:2,description:"NE, SW if unsafe",imageUrl:"./m6s/game8/desert-healers.webp"},{role:"Healer",party:1,description:"NW, SW if unsafe",imageUrl:"./m6s/game8/desert-healers.webp"},{role:"Healer",party:2,description:"SE, SW if unsafe",imageUrl:"./m6s/game8/desert-healers.webp"},{role:"Melee",party:1,description:"NE, SW if unsafe",imageUrl:"./m6s/game8/desert-healers.webp"},{role:"Melee",party:2,description:"NE, SW if unsafe",imageUrl:"./m6s/game8/desert-healers.webp"},{role:"Ranged",party:1,description:"NE, SW if unsafe",imageUrl:"./m6s/game8/desert-healers.webp"},{role:"Ranged",party:2,description:"NE, SW if unsafe",imageUrl:"./m6s/game8/desert-healers.webp"}]}]},{phaseName:"Quicksand + Bombs",description:`Quicksand is new North
G1 Left, G2 Right, RMMR`,mechs:[{mechanic:"Bombs",strats:[{role:"Tank",party:1,description:"Left close to boss",imageUrl:"./m6s/game8/desert-bombs.webp"},{role:"Tank",party:2,description:"Right close to boss",imageUrl:"./m6s/game8/desert-bombs.webp"},{role:"Healer",party:1,description:"Left far from boss",imageUrl:"./m6s/game8/desert-bombs.webp"},{role:"Healer",party:2,description:"Right far from boss",imageUrl:"./m6s/game8/desert-bombs.webp"},{role:"Melee",party:1,description:"Left close to boss",imageUrl:"./m6s/game8/desert-bombs.webp"},{role:"Melee",party:2,description:"Right close to boss",imageUrl:"./m6s/game8/desert-bombs.webp"},{role:"Ranged",party:1,description:"Left far from boss",imageUrl:"./m6s/game8/desert-bombs.webp"},{role:"Ranged",party:2,description:"Right far from boss",imageUrl:"./m6s/game8/desert-bombs.webp"}]}]},{phaseName:"Adds",tag:"adds",description:"",mechs:[{mechanic:"Wave 1",strats:t(i,"wave1")},{mechanic:"Wave 2",strats:t(i,"wave2")},{mechanic:"Wave 3",strats:t(i,"wave3")},{mechanic:"Wave 4",strats:t(i,"wave4")}]},{phaseName:"Sugarscape (River)",description:"",mechs:[{mechanic:"Lightning (Spreads)",description:"",strats:[{role:"Tank",party:1,description:"North",imageUrl:"./m6s/game8/river-lightning.webp"},{role:"Tank",party:2,description:"South",imageUrl:"./m6s/game8/river-lightning.webp"},{role:"Healer",party:1,description:"West",imageUrl:"./m6s/game8/river-lightning.webp"},{role:"Healer",party:2,description:"East",imageUrl:"./m6s/game8/river-lightning.webp"},{role:"Melee",party:1,description:"Southwest",imageUrl:"./m6s/game8/river-lightning.webp"},{role:"Melee",party:2,description:"Southeast",imageUrl:"./m6s/game8/river-lightning.webp"},{role:"Ranged",party:1,description:"Northwest",imageUrl:"./m6s/game8/river-lightning.webp"},{role:"Ranged",party:2,description:"Northeast",imageUrl:"./m6s/game8/river-lightning.webp"}]},{mechanic:"Fire (Stacks)",description:"",strats:[{role:"Tank",party:1,description:"Middle",imageUrl:"./m6s/game8/river-fire.webp"},{role:"Tank",party:2,description:"Far behind SW bridge",imageUrl:"./m6s/game8/river-fire.webp"},{role:"Healer",party:1,description:"Middle",imageUrl:"./m6s/game8/river-fire.webp"},{role:"Healer",party:2,description:"Far behind SW bridge",imageUrl:"./m6s/game8/river-fire.webp"},{role:"Melee",party:1,description:"Middle",imageUrl:"./m6s/game8/river-fire.webp"},{role:"Melee",party:2,description:"Middle",imageUrl:"./m6s/game8/river-fire.webp"},{role:"Ranged",party:1,description:"Far behind SW bridge",imageUrl:"./m6s/game8/river-fire.webp"},{role:"Ranged",party:2,description:"Far behind SW bridge",imageUrl:"./m6s/game8/river-fire.webp"}]}]},{phaseName:"Lightning Storm",description:`Party stays on bridge
Supports Left, DPS Right facing cloud`,imageUrl:"./m6s/game8/storm.webp"},{phaseName:"Pudding Party",description:`True North
G1 West G2 East`,mechs:[{mechanic:"Towers",notes:"Remember to bait the Twister-style AoE when the Lightning flash happens",strats:[{role:"Tank",party:1,description:`Bait proteans
Take West tower further from wall`,imageUrl:"./m6s/game8/pudding-towers.webp"},{role:"Tank",party:2,description:`Bait proteans
Take East tower further from wall`,imageUrl:"./m6s/game8/pudding-towers.webp"},{role:"Healer",party:1,description:`West island
Bait stacks far
Take right tower facing boss`,imageUrl:"./m6s/game8/pudding-towers.webp"},{role:"Healer",party:2,description:`East island
Bait stacks far
Take right tower facing boss`,imageUrl:"./m6s/game8/pudding-towers.webp"},{role:"Melee",party:1,description:`Bait proteans
Take West tower close to wall`,imageUrl:"./m6s/game8/pudding-towers.webp"},{role:"Melee",party:2,description:`Bait proteans
Take West tower close to wall`,imageUrl:"./m6s/game8/pudding-towers.webp"},{role:"Ranged",party:1,description:`West island
Stay close to let healers bait stacks
Take left tower facing boss`,imageUrl:"./m6s/game8/pudding-towers.webp"},{role:"Ranged",party:2,description:`East island
Stay close to let healers bait stacks
Take left tower facing boss`,imageUrl:"./m6s/game8/pudding-towers.webp"}]}]},{phaseName:"Wingmark + Towers",description:`Melees + Tanks in the 4 tower platform
Everyone rotate the same direction`,mechs:[{mechanic:"4-2-2",description:"",strats:[{role:"Tank",party:1,description:"Take right inner tower",imageUrl:"./m6s/game8/pudding-422.webp"},{role:"Tank",party:2,description:"Take left inner tower",imageUrl:"./m6s/game8/pudding-422.webp"},{role:"Healer",party:1,description:`Left island
Take right tower facing boss`,imageUrl:"./m6s/game8/pudding-422.webp"},{role:"Healer",party:2,description:`Right island
Take right tower facing boss`,imageUrl:"./m6s/game8/pudding-422.webp"},{role:"Melee",party:1,description:"Take right outer tower",imageUrl:"./m6s/game8/pudding-422.webp"},{role:"Melee",party:2,description:"Take left outer tower",imageUrl:"./m6s/game8/pudding-422.webp"},{role:"Ranged",party:1,description:`Left island
Take left tower facing boss`,imageUrl:"./m6s/game8/pudding-422.webp"},{role:"Ranged",party:2,description:`Right island
Take left tower facing boss`,imageUrl:"./m6s/game8/pudding-422.webp"}]},{mechanic:"8-0-0",description:"Static positions",strats:[{role:"Tank",party:1,description:"South",imageUrl:"./m6s/game8/pudding-800.webp"},{role:"Tank",party:2,description:"Southeast",imageUrl:"./m6s/game8/pudding-800.webp"},{role:"Healer",party:1,description:"Far West",imageUrl:"./m6s/game8/pudding-800.webp"},{role:"Healer",party:2,description:"Northwest",imageUrl:"./m6s/game8/pudding-800.webp"},{role:"Melee",party:1,description:"Southwest",imageUrl:"./m6s/game8/pudding-800.webp"},{role:"Melee",party:2,description:"Far East",imageUrl:"./m6s/game8/pudding-800.webp"},{role:"Ranged",party:1,description:"North",imageUrl:"./m6s/game8/pudding-800.webp"},{role:"Ranged",party:2,description:"Northeast",imageUrl:"./m6s/game8/pudding-800.webp"}]}]}]},E={stratName:"mr",description:"Source: Materia Raiding",notes:"",stratUrl:{"Materia Raiding":"https://materiaraiding.com/savage/m6s","Start + Adds":"https://raidplan.io/plan/LjZsRWUJahEe1fdM",Desert:"https://raidplan.io/plan/PqngLnEaS1I214wO",Bridges:"https://raidplan.io/plan/9mcgjmDLobOka-P5"},strats:[{phaseName:"Wingmark/Double Style",mechs:[{mechanic:"Light Parties",description:"G1 Left, G2 Right Facing Boss",strats:[{role:"Tank",party:1,description:"Left",imageUrl:"./m6s/mr/double-lps.webp"},{role:"Tank",party:2,description:"Right",imageUrl:"./m6s/mr/double-lps.webp"},{role:"Healer",party:1,description:"Left",imageUrl:"./m6s/mr/double-lps.webp"},{role:"Healer",party:2,description:"Right",imageUrl:"./m6s/mr/double-lps.webp"},{role:"Melee",party:1,description:"Left",imageUrl:"./m6s/mr/double-lps.webp"},{role:"Melee",party:2,description:"Right",imageUrl:"./m6s/mr/double-lps.webp"},{role:"Ranged",party:1,description:"Left",imageUrl:"./m6s/mr/double-lps.webp"},{role:"Ranged",party:2,description:"Right",imageUrl:"./m6s/mr/double-lps.webp"}]},{mechanic:"Partners",strats:[{role:"Tank",party:1,description:"Front with D1",imageUrl:"./m6s/mr/double-partners.webp"},{role:"Tank",party:2,description:"Back with D2",imageUrl:"./m6s/mr/double-partners.webp"},{role:"Healer",party:1,description:"Left with D3",imageUrl:"./m6s/mr/double-partners.webp"},{role:"Healer",party:2,description:"Right with D4",imageUrl:"./m6s/mr/double-partners.webp"},{role:"Melee",party:1,description:"Front with MT",imageUrl:"./m6s/mr/double-partners.webp"},{role:"Melee",party:2,description:"Back with ST",imageUrl:"./m6s/mr/double-partners.webp"},{role:"Ranged",party:1,description:"Left with H1",imageUrl:"./m6s/mr/double-partners.webp"},{role:"Ranged",party:2,description:"Right with H2",imageUrl:"./m6s/mr/double-partners.webp"}]}]},{phaseName:"Sticky Mousse",mechs:[{mechanic:"Stacks",description:"Start in clock spots, LPs or use eyes",imageUrl:"./m6s/mr/sticky.webp"}]},{phaseName:"Cactus Dodges",mechs:[{mechanic:"Stack + Short Defamations",description:`Stack North
Tank Defam W, DPS Defam E`,imageUrl:"./m6s/mr/desert-dodges.webp"}]},{phaseName:"Quicksand + Healer Defamations",description:"H1 CW, H2 CCW from cactus",mechs:[{mechanic:"Party + Healer Defamations",strats:[{role:"Tank",party:1,description:"Across from unsafe corner",imageUrl:"./m6s/mr/desert-healers.webp"},{role:"Tank",party:2,description:"Across from unsafe corner",imageUrl:"./m6s/mr/desert-healers.webp"},{role:"Healer",party:1,description:"Clockwise from cactus corner",imageUrl:"./m6s/mr/desert-healers.webp"},{role:"Healer",party:2,description:"Counter-Clockwise from cactus corner",imageUrl:"./m6s/mr/desert-healers.webp"},{role:"Melee",party:1,description:"Across from unsafe corner",imageUrl:"./m6s/mr/desert-healers.webp"},{role:"Melee",party:2,description:"Across from unsafe corner",imageUrl:"./m6s/mr/desert-healers.webp"},{role:"Ranged",party:1,description:"Across from unsafe corner",imageUrl:"./m6s/mr/desert-healers.webp"},{role:"Ranged",party:2,description:"Across from unsafe corner",imageUrl:"./m6s/mr/desert-healers.webp"}]}]},{phaseName:"Quicksand + Bombs",description:`True North
G1 W, G2 E, RMMR`,mechs:[{mechanic:"Bombs",strats:[{role:"Tank",party:1,description:"West close to boss",imageUrl:"./m6s/mr/desert-bombs.webp"},{role:"Tank",party:2,description:"East close to boss",imageUrl:"./m6s/mr/desert-bombs.webp"},{role:"Healer",party:1,description:"West far from boss",imageUrl:"./m6s/mr/desert-bombs.webp"},{role:"Healer",party:2,description:"East far from boss",imageUrl:"./m6s/mr/desert-bombs.webp"},{role:"Melee",party:1,description:"West close to boss",imageUrl:"./m6s/mr/desert-bombs.webp"},{role:"Melee",party:2,description:"East close to boss",imageUrl:"./m6s/mr/desert-bombs.webp"},{role:"Ranged",party:1,description:"West far from boss",imageUrl:"./m6s/mr/desert-bombs.webp"},{role:"Ranged",party:2,description:"East far from boss",imageUrl:"./m6s/mr/desert-bombs.webp"}]}]},{phaseName:"Adds",tag:"adds",description:"",mechs:[{mechanic:"Wave 1",strats:t(i,"wave1")},{mechanic:"Wave 2",strats:t(i,"wave2")},{mechanic:"Wave 3",strats:t(i,"wave3")},{mechanic:"Wave 4",strats:t(i,"wave4")}]},{phaseName:"Sugarscape (River)",description:"",mechs:[{mechanic:"Lightning (Spreads)",description:"",strats:[{role:"Tank",party:1,description:"Northwest",imageUrl:"./m6s/mr/river-lightning.webp"},{role:"Tank",party:2,description:"North",imageUrl:"./m6s/mr/river-lightning.webp"},{role:"Healer",party:1,description:"South",imageUrl:"./m6s/mr/river-lightning.webp"},{role:"Healer",party:2,description:"East",imageUrl:"./m6s/mr/river-lightning.webp"},{role:"Melee",party:1,description:"West",imageUrl:"./m6s/mr/river-lightning.webp"},{role:"Melee",party:2,description:"Mid or Northwest",imageUrl:"./m6s/mr/river-lightning.webp"},{role:"Ranged",party:1,description:"Southwest",imageUrl:"./m6s/mr/river-lightning.webp"},{role:"Ranged",party:2,description:"Northeast",imageUrl:"./m6s/mr/river-lightning.webp"}]},{mechanic:"Fire (Stacks)",description:"",strats:[{role:"Tank",party:1,description:"Middle",imageUrl:"./m6s/mr/river-fire.webp"},{role:"Tank",party:2,description:"Far behind SW bridge",imageUrl:"./m6s/mr/river-fire.webp"},{role:"Healer",party:1,description:"Middle",imageUrl:"./m6s/mr/river-fire.webp"},{role:"Healer",party:2,description:"Far behind SW bridge",imageUrl:"./m6s/mr/river-fire.webp"},{role:"Melee",party:1,description:"Middle",imageUrl:"./m6s/mr/river-fire.webp"},{role:"Melee",party:2,description:"Middle",imageUrl:"./m6s/mr/river-fire.webp"},{role:"Ranged",party:1,description:"Far behind SW bridge",imageUrl:"./m6s/mr/river-fire.webp"},{role:"Ranged",party:2,description:"Far behind SW bridge",imageUrl:"./m6s/mr/river-fire.webp"}]}]},{phaseName:"Lightning Storm",description:`Party stays on bridge
Supports CW, DPS CCW`,imageUrl:"./m6s/mr/storm.webp"},{phaseName:"Pudding Party",description:`True North
G1 West G2 East`,mechs:[{mechanic:"Towers",notes:"Remember to bait the Twister-style AoE when the Lightning flash happens",strats:[{role:"Tank",party:1,description:`Bait proteans
Take West tower close to wall`,imageUrl:"./m6s/mr/pudding-towers.webp"},{role:"Tank",party:2,description:`Bait proteans
Take East tower close to wall`,imageUrl:"./m6s/mr/pudding-towers.webp"},{role:"Healer",party:1,description:`West island
Stay close to let ranged bait stacks
Take tower closer to middle`,imageUrl:"./m6s/mr/pudding-towers.webp"},{role:"Healer",party:2,description:`East island
Stay close to let ranged bait stacks
Take tower closer to middle`,imageUrl:"./m6s/mr/pudding-towers.webp"},{role:"Melee",party:1,description:`Bait proteans
Take West tower further from wall`,imageUrl:"./m6s/mr/pudding-towers.webp"},{role:"Melee",party:2,description:`Bait proteans
Take West tower further from wall`,imageUrl:"./m6s/mr/pudding-towers.webp"},{role:"Ranged",party:1,description:`West island
Bait stacks far
Take tower closer to edge`,imageUrl:"./m6s/mr/pudding-towers.webp"},{role:"Ranged",party:2,description:`East island
Bait stacks far
Take tower closer to edge`,imageUrl:"./m6s/mr/pudding-towers.webp"}]}]},{phaseName:"Wingmark + Towers",description:`Melees + Tanks in the 4 tower platform
Everyone rotate the same direction`,mechs:[{mechanic:"4-2-2",description:"",strats:[{role:"Tank",party:1,description:"Take North-most tower",imageUrl:"./m6s/mr/pudding-422.webp"},{role:"Tank",party:2,description:"Take South-most tower",imageUrl:"./m6s/mr/pudding-422.webp"},{role:"Healer",party:1,description:`Left island
Take tower closer to middle`,imageUrl:"./m6s/mr/pudding-422.webp"},{role:"Healer",party:2,description:`Right island
Take tower closer to middle`,imageUrl:"./m6s/mr/pudding-422.webp"},{role:"Melee",party:1,description:"Take 2nd tower from North",imageUrl:"./m6s/mr/pudding-422.webp"},{role:"Melee",party:2,description:"Take 2nd tower from South",imageUrl:"./m6s/mr/pudding-422.webp"},{role:"Ranged",party:1,description:`Left island
Take tower further from middle`,imageUrl:"./m6s/mr/pudding-422.webp"},{role:"Ranged",party:2,description:`Right island
Take tower further from middle`,imageUrl:"./m6s/mr/pudding-422.webp"}]},{mechanic:"8-0-0",description:"Static positions",strats:[{role:"Tank",party:1,description:"West",imageUrl:"./m6s/mr/pudding-800.webp"},{role:"Tank",party:2,description:"South",imageUrl:"./m6s/mr/pudding-800.webp"},{role:"Healer",party:1,description:"Southeast",imageUrl:"./m6s/mr/pudding-800.webp"},{role:"Healer",party:2,description:"North",imageUrl:"./m6s/mr/pudding-800.webp"},{role:"Melee",party:1,description:"Southwest",imageUrl:"./m6s/mr/pudding-800.webp"},{role:"Melee",party:2,description:"Northwest",imageUrl:"./m6s/mr/pudding-800.webp"},{role:"Ranged",party:1,description:"East",imageUrl:"./m6s/mr/pudding-800.webp"},{role:"Ranged",party:2,description:"Northeast",imageUrl:"./m6s/mr/pudding-800.webp"}]}]}]},H=[N,R,E,T,v],W={fightKey:"m6s",title:"AAC Cruiserweight M2 (Savage)",abbreviatedTitle:"M6S",subtitle:"M6S Patch 7.2",cheatsheetTitle:"M6S Cheatsheet",cheatsheetLayout:{rows:3,columns:7},strats:{latte:{label:"Latte",defaults:{adds:"latte"}},yukizuri:{label:"Yukizuri",defaults:{adds:"yukizuri"}},toxic:{label:"Hector/Toxic",badges:[{text:"NA",class:"na-badge"},{text:"EU",class:"eu-badge"}],defaults:{adds:"cleave"}},game8:{label:"Game8",badges:[{text:"JP",class:"jp-badge"}],jpRoles:!0,defaults:{adds:"game8"}},mr:{label:"MR",badges:[{text:"OCE",class:"oce-badge"}],jpRoles:!0,defaults:{adds:"mr"}}},toggles:[{key:"adds",label:"Adds",defaultValue:null,options:[{value:"cleave",label:"Cleavemaxxing",badges:[{text:"NA",class:"na-badge"},{text:"EU",class:"eu-badge"}],url:{name:"Cleavemaxxing Adds",url:"https://raidplan.io/plan/ywV9cu6GRQ68SQLy"}},{value:"game8",label:"Game8",badges:[{text:"JP",class:"jp-badge"}],url:{name:"Game8 Adds",url:"https://game8.jp/ff14/681086"}},{value:"mr",label:"MR",badges:[{text:"OCE",class:"oce-badge"}],url:{name:"MR Adds",url:"https://raidplan.io/plan/LjZsRWUJahEe1fdM"}},{value:"toxic",label:"Hector/Toxic",url:{name:"Toxic Adds",url:"https://raidplan.io/plan/Pgj53K49w8LAZpI6"}},{value:"latte",label:"Latte",url:{name:"Latte Adds",url:"https://raidplan.io/plan/0066fd3CVp1_G36R"}},{value:"yukizuri",label:"Yukizuri",url:{name:"Yukizuri Adds",url:"https://www.youtube.com/watch?v=1LQ2OzMn7EE"}}]}],timeline:u},q=()=>({strats:H,config:W}),Y=Object.freeze(Object.defineProperty({__proto__:null,load:q},Symbol.toStringTag,{value:"Module"}));function P(r,a){b(a,!0),w(r,{get config(){return a.data.config},get strats(){return a.data.strats}}),h()}export{P as component,Y as universal};
