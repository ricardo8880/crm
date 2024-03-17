document.addEventListener('DOMContentLoaded', function() {
    const coresItems = document.querySelectorAll('.cores-modal-item');
    const configPaginaInicial = document.querySelector('.config-pagina-inicial');

    if (coresItems && configPaginaInicial) {
        coresItems.forEach(item => {
            item.addEventListener('click', function() {
                const classeCor = this.classList[1]; // Obtém a segunda classe da lista de classes
                const cor = getComputedStyle(this).backgroundColor;
                
                // Constrói a regra de estilo correspondente
                const estilo = `
                    .${configPaginaInicial.classList[0]} {
                        background: ${cor};
                    }
                `;

                // Cria uma tag style temporária para aplicar a regra de estilo
                const styleTemporario = document.createElement('style');
                styleTemporario.textContent = estilo;

                // Adiciona a tag style temporária ao head do documento
                document.head.appendChild(styleTemporario);
            });
        });
    }
});
