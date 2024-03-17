    // // Tema Dark


    class Tema {
        constructor(temaDarkBtn, menuLateral) {
            this.temaDarkBtn = temaDarkBtn;
            this.menuLateral = menuLateral;
    
            // Verifica se o valor do localStorage está definido, caso contrário, define-o como 'false' para que o tema não seja escuro por padrão
            if (localStorage.getItem('valor') === null) {
                localStorage.setItem('valor', 'false');
            }
    
            // Adiciona o listener de evento ao botão do tema escuro
            this.temaDarkBtn.addEventListener('click', this.toggleTema.bind(this));
    
            // Aplica o tema escuro ao carregar a página, se o valor do localStorage for 'true'
            if (localStorage.getItem('valor') === 'true') {
                this.aplicarTema();
            }
        }
    
        toggleTema() {
            // Verifica se o tema atual é escuro ou claro
            const temaAtual = localStorage.getItem('valor') === 'true';
    
            // Alterna entre os temas escuro e claro
            if (temaAtual) {
                this.desativarTema();
            } else {
                this.ativarTema();
            }
        }
    
        ativarTema() {
            localStorage.setItem('valor', 'true'); // Define o valor como 'true' no localStorage
            this.menuLateral.classList.add('tema-dark'); // Adiciona a classe 'tema-dark'
        }
    
        desativarTema() {
            localStorage.setItem('valor', 'false'); // Define o valor como 'false' no localStorage
            this.menuLateral.classList.remove('tema-dark'); // Remove a classe 'tema-dark'
        }
    
        aplicarTema() {
            this.menuLateral.classList.add('tema-dark');
        }
    }
    
    // Instanciando a classe Tema com os elementos do DOM correspondentes
    const tema = new Tema(
        document.querySelector("#tema-dark"),
        document.querySelector("#menu-lateral")
    );


    class ElementosTemaDark {
        constructor() {
            this.elementos = [];
            
            // Verifica se o valor do localStorage está definido, caso contrário, define-o como 'false' para que o tema não seja escuro por padrão
            if (localStorage.getItem('temaDarkClicado') === null) {
                localStorage.setItem('temaDarkClicado', 'false');
            }
    
            // Adiciona um listener de evento ao botão de tema escuro
            const temaDarkBtn = document.querySelector("#tema-dark");
            if (temaDarkBtn) {
                temaDarkBtn.addEventListener('change', () => {
                    this.toggleTemaDark();
                });
            }
            
            // Verifica se o tema escuro foi clicado pela primeira vez e aplica o tema se necessário
            if (localStorage.getItem('temaDarkClicado') === 'true') {
                this.aplicarTemaDark();
            }
        }
    
        toggleTemaDark() {
            const temaDarkClicado = localStorage.getItem('temaDarkClicado') === 'true';
            localStorage.setItem('temaDarkClicado', (!temaDarkClicado).toString());
    
            // Aplica ou remove o tema escuro
            if (!temaDarkClicado) {
                this.aplicarTemaDark();
            } else {
                this.removerTemaDark();
            }
        }
    
        aplicarTemaDark() {
            this.elementos.forEach(elemento => {
                elemento.classList.add('tema-dark');
            });
        }
    
        removerTemaDark() {
            this.elementos.forEach(elemento => {
                elemento.classList.remove('tema-dark');
            });
        }
    
        adicionarElemento(selector) {
            const elemento = document.querySelector(selector);
            if (elemento) {
                this.elementos.push(elemento);
                // Verifica se o tema escuro foi clicado pela primeira vez e aplica o tema se necessário
                if (localStorage.getItem('temaDarkClicado') === 'true') {
                    elemento.classList.add('tema-dark');
                }
            } else {
                console.error(`Elemento não encontrado para o seletor: ${selector}`);
            }
        }
    }
    
    const temaDark = new ElementosTemaDark();
    
    // Adicionando elementos ao array
    temaDark.adicionarElemento("#elemento1");
    temaDark.adicionarElemento(".pesquisa p input");
    temaDark.adicionarElemento(".btn-primary");
    temaDark.adicionarElemento("body");
    