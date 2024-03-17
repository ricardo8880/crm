class Horas {
    constructor() {
        this.horario = document.querySelector(".horas");
        this.atualizarTempo();
        setInterval(() => {this.atualizarTempo();}, 1000); // Atualiza a cada segundo (1000 milissegundos)
    }

    atualizarTempo() {
        const tempo = new Date(); // momento atual 
        this.horario.textContent = tempo.toLocaleTimeString('pt-BR');
    }
}

let horario = new Horas();