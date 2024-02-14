    // Tema Dark
    // let tema_dark = document.querySelector("#tema-dark")
    // tema_dark.addEventListener('click', ()=>{
    //     let menu_lateral = document.querySelector('#menu-lateral')
    //     menu_lateral.classList.toggle('tema-dark')
    // })

    let contadorCliques = 0;

    let tema_dark = document.querySelector("#tema-dark");
    let menu_lateral = document.querySelector("#menu-lateral");
    console.log(menu_lateral)
    console.log(tema_dark)
    
    tema_dark.addEventListener('click', () => {
        contadorCliques++;
    
        if (contadorCliques % 2 === 0) {
            localStorage.setItem('valor', 'true');
            console.log('true');
        } else {
            localStorage.setItem('valor', 'false');
            console.log('false');
        }
    
        if (contadorCliques >= 2) {
            localStorage.removeItem('valor');
            contadorCliques = 0;
        }
    
        // Verifica se o valor armazenado é 'true' e adiciona a classe tema-dark ao #menu-lateral
        if (localStorage.getItem('valor') === 'true') {
            menu_lateral.classList.add('tema-dark');
        } else {
            // Caso contrário, remove a classe tema-dark do #menu-lateral
            menu_lateral.classList.remove('tema-dark');
        }
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
   
      
   