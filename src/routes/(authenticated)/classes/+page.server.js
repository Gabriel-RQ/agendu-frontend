import { api } from '$lib/util';
import { error, fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, cookies }) {
	if (!locals.user) {
		redirect(302, '/login');
	}

	try {
		api.setAuthToken(cookies.get('Authorization'));
		const classes = await api.getClasses().then((res) => res.json());
		return { classes };
	} catch (err) {
		if (err instanceof Error) {
			error(500, err.message);
		}
	}
}

/** @satisfies {import('./$types').Actions} */
export const actions = {
	classes: async ({ request, cookies }) => {
		const data = await request.formData();
		const name = data.get('class-name');

		if (typeof name !== 'string' || !name) {
			return fail(400, { error: 'Nome da classe não informado' });
		}

		api.setAuthToken(cookies.get('Authorization'));
		const response = await api.postClass({ name });

		if (!response.ok) {
			return fail(response.status, { error: 'Erro ao criar classe' });
		}
	}
};
