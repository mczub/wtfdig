import type { PageLoad } from './$types';
import { teaFightConfig, teaStrats } from './data';

export const load: PageLoad = () => {
	return {
		strats: teaStrats,
		config: teaFightConfig
	};
};
