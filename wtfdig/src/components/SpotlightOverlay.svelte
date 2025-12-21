<!-- @ts-nocheck -->

<script lang="ts">
	// @ts-nocheck
	import type { SpotlightMask } from '$lib/types';

	interface Props {
		mask: SpotlightMask | string | null | undefined;
		borderWidth?: number;
		overlayOpacity?: number;
	}

	let { mask, borderWidth = 4, overlayOpacity = 0.5 }: Props = $props();

	// Generate a unique ID for this mask instance
	const maskId = `spotlight-mask-${Math.random().toString(36).substring(2, 9)}`;

	// Parse old CSS mask format to new SpotlightMask format
	function parseMask(input: SpotlightMask | string | null | undefined): SpotlightMask | null {
		if (!input) return null;

		// Already a SpotlightMask object
		if (typeof input === 'object' && 'type' in input) {
			return input;
		}

		// Parse CSS string format: url('data:image/svg+xml...')
		if (typeof input === 'string') {
			// Try to extract circle parameters from the SVG data URL
			// Pattern: <circle cx="X%" cy="Y%" r="R%"
			const circleMatches = [
				...input.matchAll(/<circle cx="([^%]+)%" cy="([^%]+)%" r="([^%]+)%"/g)
			];

			if (circleMatches.length === 1) {
				const [, x, y, r] = circleMatches[0];
				return { type: 'circle', x: parseFloat(x), y: parseFloat(y), r: parseFloat(r) };
			} else if (circleMatches.length > 1) {
				return {
					type: 'circles',
					circles: circleMatches.map(([, x, y, r]) => ({
						x: parseFloat(x),
						y: parseFloat(y),
						r: parseFloat(r)
					}))
				};
			}

			// Try to parse rect: <rect x="X%" y="Y%" width="W%" height="H%"
			const rectMatch = input.match(
				/<rect x="([^%]+)%" y="([^%]+)%" width="([^%]+)%" height="([^%]+)%"/
			);
			if (rectMatch) {
				const [, x, y, width, height] = rectMatch;
				return {
					type: 'rect',
					x: parseFloat(x),
					y: parseFloat(y),
					width: parseFloat(width),
					height: parseFloat(height)
				};
			}
		}

		return null;
	}

	let parsedMask = $derived(parseMask(mask));
</script>

{#if parsedMask}
	<svg class="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
		<defs>
			<mask id={maskId}>
				<!-- White background = visible -->
				<rect width="100%" height="100%" fill="white" />
				<!-- Black shapes = cutouts (transparent in mask) -->
				{#if parsedMask.type === 'circle'}
					<circle cx="{parsedMask.x}%" cy="{parsedMask.y}%" r="{parsedMask.r}%" fill="black" />
				{:else if parsedMask.type === 'circles'}
					{#each parsedMask.circles as circle}
						<circle cx="{circle.x}%" cy="{circle.y}%" r="{circle.r}%" fill="black" />
					{/each}
				{:else if parsedMask.type === 'rect'}
					<rect
						x="{parsedMask.x}%"
						y="{parsedMask.y}%"
						width="{parsedMask.width}%"
						height="{parsedMask.height}%"
						fill="black"
					/>
				{/if}
			</mask>
		</defs>

		<!-- Dark overlay with cutout -->
		<rect width="100%" height="100%" fill="rgba(0,0,0,{overlayOpacity})" mask="url(#{maskId})" />

		<!-- White borders -->
		{#if parsedMask.type === 'circle'}
			<circle
				cx="{parsedMask.x}%"
				cy="{parsedMask.y}%"
				r="{parsedMask.r}%"
				fill="none"
				stroke="white"
				stroke-width={borderWidth}
			/>
		{:else if parsedMask.type === 'circles'}
			{#each parsedMask.circles as circle}
				<circle
					cx="{circle.x}%"
					cy="{circle.y}%"
					r="{circle.r}%"
					fill="none"
					stroke="white"
					stroke-width={borderWidth}
				/>
			{/each}
		{:else if parsedMask.type === 'rect'}
			<rect
				x="{parsedMask.x}%"
				y="{parsedMask.y}%"
				width="{parsedMask.width}%"
				height="{parsedMask.height}%"
				fill="none"
				stroke="white"
				stroke-width={borderWidth}
			/>
		{/if}
	</svg>
{/if}
