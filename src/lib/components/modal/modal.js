import { Stack } from '$lib/util';
import { writable } from 'svelte/store';

/** @typedef { {component: import("svelte").ComponentType, props?: any} } ModalProps */
/** @typedef { Stack<ModalProps> } ModalStack */

/** @type {import("svelte/store").Writable<ModalStack>} */
export const modalStack = writable(new Stack());

export function showModal(/** @type {ModalProps} */ modal) {
	modalStack.update((stack) => {
		stack.add(modal);
		return stack;
	});
}

export function hideModal() {
	modalStack.update((stack) => {
		stack.pop();
		return stack;
	});
}
