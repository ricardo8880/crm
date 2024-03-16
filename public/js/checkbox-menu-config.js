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
   
      
   