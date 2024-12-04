import { fail, redirect } from '@sveltejs/kit';

/** @satisfies {import('./$types').PageServerLoad} */
export function load({ locals }) {
	if (locals.user) {
		return redirect(302, '/home');
	}
}

/** @satisfies {import('./$types').Actions} */
export const actions = {
	default: async ({ request, fetch, cookies }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
			return fail(400, { error: 'Preencha os dados de login' });
		}

		let response;

		try {
			response = await fetch('http://localhost:8080/users/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email: data.get('email'), password: data.get('password') })
			});
		} catch {
			return fail(500, { error: 'Erro ao processar login' });
		}

		if (response.ok) {
			const tokenResponse = await response.json();
			const token = await tokenResponse.token;
			cookies.set('Authorization', `Bearer ${token}`, {
				httpOnly: true,
				path: '/',
				secure: true,
				sameSite: 'strict',
				maxAge: 60 * 60 * 24 // 24 hours
			});
			redirect(303, '/home');
		}

		return fail(401, { error: 'Usuário ou senha inválidos' });
	}
};
