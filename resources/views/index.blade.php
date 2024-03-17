@include('/inc/header')

<div class="config-pagina-inicial">
    <div id="menu-lateral">       
        @include('/inc/menu-esquerdo')
    </div>
    
    
    <div class="conteudo-home">
      
    
    
      <div class="conteudo-home-centro">
        <div class="conteudo-home-centro-topo">
          <div class="tempo-topo">
            <p class="horas"></p>
            <p class="data"></p>
          </div>
          <div class="pesquisa">
            <p><input type="text" name="pesquisa" placeholder="Explore nosso conteúdo..."></p>
          </div>
        </div>
      </div>
      
      <div class="conteudo-home-direito">
        <div class="menu-direito">
            @include('/inc/menu-direito')
            
        </div>
      </div>

    </div>
</div>





























@include('/inc/footer')