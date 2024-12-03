/** @template T */
export class Stack {
	constructor() {
		/** @type {T[]} */
		this.items = [];
	}

	/**
	 * @param {T} data
	 *  @returns T
	 * */
	add(data) {
		this.items.push(data);
	}

	pop() {
		return this.items.pop();
	}

	size() {
		return this.items.length;
	}

	isEmpty() {
		return this.items.length === 0;
	}

	peek() {
		return this.items[this.items.length - 1];
	}

	clear() {
		this.items = [];
	}
}
