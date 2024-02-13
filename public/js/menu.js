
    function menuFixo(menuFixoDados, colorMenu){
        if(menuFixoDados == true && colorMenu == true){
            menuFixoDados = '20%' 
            colorMenu = '#198754'
        }else if(menuFixoDados != true && colorMenu == false){
            menuFixoDados = '44px'  
            colorMenu = 'transparent'
        }
       

        let menu_lateral = document.querySelector("#menu-lateral")
        menu_lateral.style.width = !menuFixoDados ? '44px' : menuFixoDados 
        menu_lateral.style.minWidth = '44px'
    
        let categoriasMenu = document.querySelectorAll("#menu-lateral ul a span")
        categoriasMenu.forEach(categoria => {
            categoria.style.color = colorMenu
        });
      

        menu_lateral.addEventListener('mouseover', ()=>{
            menu_lateral.style.width = '20%'
            let categoriasMenu = document.querySelectorAll("#menu-lateral ul a span")
            categoriasMenu.forEach(categoria => {
                categoria.style.color = '#198754'
            });
    
        })
        menu_lateral.addEventListener('mouseout', ()=>{
            menu_lateral.style.width = !menuFixoDados ? '44px' : menuFixoDados 
            let categoriasMenu = document.querySelectorAll("#menu-lateral ul a span")
            categoriasMenu.forEach(categoria => {
                categoria.style.color = !colorMenu ? 'transparent' : colorMenu 
            });
        })


     }
     menuFixo()
