<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="container grid grow mx-auto my-6">
    <div class="grid place-content-center gap-4">
        <div class="flex justify-center">
            <img width="300px" src='{base}/wtfdig-icon-1024.png' />
        </div>
        <div class="card grid preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-sm p-4 text-center gap-4">
            <div>Patch 7.2</div>
            <a href="{base}/72/ex4" class="btn preset-tonal-secondary border border-secondary-500">Recollection (Extreme)</a>
            <a href="{base}/72/m5s" class="btn preset-tonal-secondary border border-secondary-500">AAC Cruiserweight M1 (Savage)</a>
            <a href="{base}/72/m6s" class="btn preset-tonal-secondary border border-secondary-500">AAC Cruiserweight M2 (Savage)</a>
            <a href="{base}/72/m7s" class="btn preset-tonal-secondary border border-secondary-500">AAC Cruiserweight M3 (Savage)</a>
            <a href="{base}/72/m8s" class="btn preset-tonal-secondary border border-secondary-500">AAC Cruiserweight M4 (Savage)</a>
        </div>
        <div class="card grid preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-sm p-4 text-center gap-4">
            <div>Patch 7.1</div>
            <a href="{base}/71/chaotic" class="btn preset-tonal-secondary border border-secondary-500">The Cloud of Darkness (Chaotic)</a>
        </div>
        <div class="card grid preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-sm p-4 text-center gap-4">
            <div>Ultimates</div>
            <a href="{base}/ultimates/ucob" class="btn preset-tonal-secondary border border-secondary-500">The Unending Coil of Bahamut (Ultimate)</a>
            <button class="btn preset-tonal-secondary border border-secondary-500 disabled">The Weapon's Refrain (Ultimate)</button>
            <button class="btn preset-tonal-secondary border border-secondary-500 disabled">The Epic of Alexander (Ultimate)</button>
            <button class="btn preset-tonal-secondary border border-secondary-500 disabled">Dragonsong's Reprise (Ultimate)</button>
            <button class="btn preset-tonal-secondary border border-secondary-500 disabled">The Omega Protocol (Ultimate)</button>
            <button class="btn preset-tonal-secondary border border-secondary-500 disabled">Futures Rewritten (Ultimate)</button>
        </div>
        
    </div>
	
</div>
