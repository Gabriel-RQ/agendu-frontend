import { api } from '$lib/util';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, cookies }) {
	if (!locals.user) {
		redirect(302, '/login');
	}

	const token = cookies.get('Authorization');
	api.setAuthToken(token);

	const res = await api.getContracts();

	if (!res.ok) {
		return { contracts: [] };
	}

	const contracts = await res.json();
	return {
		contracts
	};
}
