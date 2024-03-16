    // Tema Dark


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


    












