import { pb } from '$lib/pocketbase';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	return {
		links: await pb.collection('broken_links').getFullList()
	};
}
