import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export function load({ cookies }) {
	cookies.delete('Authorization', { path: '/' });
	redirect(302, '/login');
}
