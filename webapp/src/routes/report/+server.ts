import { pb } from '$lib/pocketbase';
import { json } from '@sveltejs/kit';

export async function GET({ request }) {
	const { searchParams } = new URL(request.url);
	const { href, search, pathname } = new URL(searchParams.get('link'));
	const record = await pb.collection('broken_links').create({ href, search, pathname });
	return json({ bravo: record.id });
}
