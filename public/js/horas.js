class Horas {
    constructor() {
        this.horario = document.querySelector(".horas");
        this.dataElemento = document.querySelector(".data"); // Referência para o elemento da data
        this.atualizarTempo();
        setInterval(() => {this.atualizarTempo();}, 1000); // Atualiza a cada segundo (1000 milissegundos)
    }

    atualizarTempo() {
        const tempo = new Date(); // momento atual 
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const horaFormatada = tempo.toLocaleTimeString('pt-BR');
        const dataFormatada = tempo.toLocaleDateString('pt-BR', options);
        this.horario.textContent = horaFormatada;
        this.dataElemento.textContent = dataFormatada;
    }
}

let horario = new Horas();