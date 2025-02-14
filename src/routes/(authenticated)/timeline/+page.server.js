import { api } from '$lib/util';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export function load({ locals, cookies }) {
	api.setAuthToken(cookies.get('Authorization'));
	(async () => {
		console.log(await api.getSolve());
	})();

	if (!locals.user) {
		redirect(302, '/login');
	}
}
