/**
 * Detecta cliques fora de um nó DOM e dispara um evento `click_outside`.
 *
 * @param {HTMLElement} node - O elemento DOM a ser monitorado.
 * @returns {{ destroy: () => void }} - Objeto contendo a função `destroy` para remover o evento.
 */
export function clickOutside(node) {
    const handleClick = (/** @type {any} */event) => {
        // Verifica se o clique foi fora do nó e se o evento não foi prevenido.
        if (node && !node.contains(event.target) && !event.defaultPrevented) {
            node.dispatchEvent(
                new CustomEvent('clickOutside', { detail: { target: event.target } })
            );
        }
    };

    // Adiciona o listener de clique no documento.
    document.addEventListener('click', handleClick, true);

    return {
        // Remove o listener de clique no documento.
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    };
}


