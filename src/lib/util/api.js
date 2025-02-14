class AgenduApi {
	/** @type {string} */
	#baseUrl;
	/** @type {string} */
	#authToken = '';

	#endpoints = {
		resources: {
			post: () => `${this.#baseUrl}/resource/create`,
			get: () => `${this.#baseUrl}/resource/listAll`
		},
		classes: {
			post: () => `${this.#baseUrl}/class/create`,
			get: () => `${this.#baseUrl}/class/listAll`
		contracts: {
			get: () => `${this.#baseUrl}/contract/listAll`
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

	postClass(/** @type {{ name: string }} */ classData) {
		return fetch(this.#endpoints.classes.post(), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: this.#authToken
			},
			body: JSON.stringify(classData)
		});
	}

	getClasses() {
		return fetch(this.#endpoints.classes.get(), {
	getContracts() {
		return fetch(this.#endpoints.contracts.get(), {
			headers: {
				authorization: this.#authToken
			}
		});
	}
}

export const api = new AgenduApi('http://localhost:8080');
