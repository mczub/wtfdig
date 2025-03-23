import type { Reroute } from '@sveltejs/kit';

export const reroute: Reroute = ({ url }) => {
    console.log(url.pathname)
	if (url.pathname === '/') {
		return '/71/chaotic';
	}
};