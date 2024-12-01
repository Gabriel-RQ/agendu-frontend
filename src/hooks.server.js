import { jwtDecode } from 'jwt-decode';

/**
 * @typedef {Object} JwtBackendData
 * @property {string} idUsuario
 * @property {string} email
 * @property {string} regra
 *
 * @typedef {JwtBackendData & import('jwt-decode').JwtPayload} JwtData
 */

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const authCookie = event.cookies.get('Authorization');
	if (authCookie) {
		const token = authCookie.split(' ')[1];
		/** @type {JwtData} */
		const data = jwtDecode(token);
		const user = { id: data.idUsuario, email: data.email, role: data.regra };
		event.locals.user = user;
	}

	return resolve(event);
}
