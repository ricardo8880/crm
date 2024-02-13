    let menu_lateral = document.querySelector("#menu-lateral")
    menu_lateral.addEventListener('mouseover', ()=>{
        menu_lateral.style.width = '20%'
        
        let categoriasMenu = document.querySelectorAll("#menu-lateral ul a span")
        categoriasMenu.forEach(categoria => {
            categoria.style.color = '#198754'
        });

    })
    menu_lateral.addEventListener('mouseout', ()=>{
        menu_lateral.style.width = '44px'
        let categoriasMenu = document.querySelectorAll("#menu-lateral ul a span")
        categoriasMenu.forEach(categoria => {
            categoria.style.color = 'transparent'
        });
    })


    
    let tema_dark = document.querySelector("#tema-dark")
    tema_dark.addEventListener('click', ()=>{
        let menu_lateral = document.querySelector('#menu-lateral')
        menu_lateral.classList.toggle('tema-dark')
        console.log(menu_lateral)

    })

