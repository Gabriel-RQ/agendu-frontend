export { Stack } from './stack.js';
export { clickOutside } from './click_outside.js';

/**Remove acentos de strings*/
export const removeAccents = (/** @type {string}*/str) => 
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');