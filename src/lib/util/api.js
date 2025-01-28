class AgenduApi {
	/** @type {string} */
	#baseUrl;
	/** @type {string} */
	#authToken = '';

	#endpoints = {
		resources: {
			post: () => `${this.#baseUrl}/resource/create`,
			get: () => `${this.#baseUrl}/resource/listAll`
		}
	};

	constructor(/** @type {String} */ baseUrl) {
		this.#baseUrl = baseUrl;
	}

	setAuthToken(/** @type {string | undefined} */ token) {
		this.#authToken = token ?? '';
	}

	postResource(/** @type {{ name: string }} */ resource) {
		return fetch(this.#endpoints.resources.post(), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: this.#authToken
			},
			body: JSON.stringify(resource)
		});
	}

	getResources() {
		return fetch(this.#endpoints.resources.get(), {
			headers: {
				authorization: this.#authToken
			}
		});
	}
}

export const api = new AgenduApi('http://localhost:8080');
