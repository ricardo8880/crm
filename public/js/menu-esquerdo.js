

let menuLateralFixo = document.querySelector("#menu-lateral-fixo");

// Verifica se o valor no localStorage para o menu lateral fixo está definido, caso contrário, define-o como 'false'
if (localStorage.getItem('valor_menu-lateral-fixo') === null) {
    localStorage.setItem('valor_menu-lateral-fixo', 'false');
}

// Recupera o estado salvo no localStorage ou define como false se não estiver definido
let menuFixoDados = localStorage.getItem('valor_menu-lateral-fixo') === 'true';
let colorMenu = false;

// Atualiza o menu lateral fixo com o estado salvo
menuFixo(menuFixoDados, colorMenu);

menuLateralFixo.addEventListener('click', () => {
    // Inverte o valor de menuFixoDados a cada clique
    menuFixoDados = !menuFixoDados;
    colorMenu = !colorMenu;

    // Salva os estados no localStorage
    localStorage.setItem('valor_menu-lateral-fixo', menuFixoDados.toString());
    // Como colorMenu não precisa ser salvo, não é necessário atualizar o Local Storage para ele

    // Atualiza o menu lateral fixo
    menuFixo(menuFixoDados, colorMenu);
});

function menuFixo(menuFixoDados, colorMenu) {
    if(menuFixoDados === true){
        menuFixoDados = '20%'; 
        colorMenu = '#198754';
        // diminui o conteúdo central
        let conteudo_centro = document.querySelector('.conteudo-home-centro');
        conteudo_centro.style.paddingLeft = '20.5%'
        // --------------------------
    } else {
        menuFixoDados = '44px';
        colorMenu = 'transparent';
        // diminui o conteúdo central
        let conteudo_centro = document.querySelector('.conteudo-home-centro');
        conteudo_centro.style.paddingLeft = '53px';
        // --------------------------

    }

   
    let menu_lateral = document.querySelector("#menu-lateral");
    menu_lateral.style.width = menuFixoDados;
    menu_lateral.style.minWidth = '44px';

    let categoriasMenu = document.querySelectorAll("#menu-lateral ul a span");
    categoriasMenu.forEach(categoria => {
        categoria.style.color = colorMenu;
    });

    menu_lateral.addEventListener('mouseover', () => {
        menu_lateral.style.width = '20%';
        // diminui o conteúdo central
        let conteudo_centro = document.querySelector('.conteudo-home-centro');
        conteudo_centro.style.paddingLeft = '20.5%'
        // --------------------------
        categoriasMenu.forEach(categoria => {
            categoria.style.color = '#198754';
        });
    });

    menu_lateral.addEventListener('mouseout', () => {
        menu_lateral.style.width = menuFixoDados;
        // diminui o conteúdo central
        let conteudo_centro = document.querySelector('.conteudo-home-centro');
        conteudo_centro.style.paddingLeft = '53px'
        // --------------------------
        categoriasMenu.forEach(categoria => {
            categoria.style.color = colorMenu;
        });
    });


}



