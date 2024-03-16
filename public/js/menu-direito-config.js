    // Tema Dark


    // Tema Dark
    // let tema_dark = document.querySelector("#tema-dark")
    // tema_dark.addEventListener('click', ()=>{
    //     let menu_lateral = document.querySelector('#menu-lateral')
    //     menu_lateral.classList.toggle('tema-dark')
    // })

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

    // Menu lateral fixo

    let menuLateralFixo = document.querySelector("#menu-lateral-fixo");
    // Inicializa a variável fora do event listener para manter o estado entre cliques
    let menuFixoDados = false; // Começa como false para que o primeiro clique o defina como true
    let colorMenu = false;
    menuLateralFixo.addEventListener('click', () => {
        // Inverte o valor de menuFixoDados a cada clique
        menuFixoDados = !menuFixoDados;
        colorMenu = !colorMenu;

        menuFixo(menuFixoDados, colorMenu);
    });


    

    // seletores
    document.addEventListener('DOMContentLoaded', function() {
        // Lista de IDs dos checkboxes
        const checkboxes = ['tema-dark', 'menu-lateral-fixo', 'namespace-checkbox'];
    
        checkboxes.forEach(function(id) {
            let checkbox = document.getElementById(id);
    
            // Carregar o estado do checkbox a partir do localStorage
            if (checkbox) { // Verifica se o checkbox realmente existe
                checkbox.checked = localStorage.getItem(id) === 'true';
    
                checkbox.addEventListener('change', function() {
                    // Salvar o estado do checkbox no localStorage
                    localStorage.setItem(id, checkbox.checked);
                });
            }
        });
    });
   
      
   
   