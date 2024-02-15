    // Tema Dark


    document.addEventListener('DOMContentLoaded', () => {
        let tema_dark = document.querySelector("#tema-dark");
        let menu_lateral = document.querySelector("#menu-lateral");
        // Verificar e aplicar o tema dark baseado no valor armazenado
        const temaDarkAtivo = localStorage.getItem('temaDark') === 'true';
        
        if (temaDarkAtivo) {
            menu_lateral.classList.add('tema-dark');
        }

        tema_dark.addEventListener('click', () => {
            // Alternar o estado do tema dark
            const estaAtivo = menu_lateral.classList.contains('tema-dark');
            if (estaAtivo) {
                localStorage.setItem('temaDark', 'false');
                menu_lateral.classList.remove('tema-dark');
            } else {
                localStorage.setItem('temaDark', 'true');
                menu_lateral.classList.add('tema-dark');
            }
        });

    });

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
   
      
   