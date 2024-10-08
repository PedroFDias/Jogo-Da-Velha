
class Jogo {
    constructor(j1, j2) {
        this.tabuleiro = new Tabuleiro();
        this.jogadores = [j1, j2]
        this.jogadorAtual = 0;
    }
    jogar(poslinha, poscoluna, id) {
        if (this.tabuleiro.jogadaValida(poslinha, poscoluna)) {
            const jogador = this.jogadores[this.jogadorAtual];
            this.tabuleiro.tabuleiro[poslinha][poscoluna] = jogador.pecaEscolhida;
            document.getElementById(id).innerHTML = jogador.pecaEscolhida;
            this.jogadorAtual = (this.jogadorAtual + 1) % 2;  // Alterna entre 0 e 1
            this.VerificaFinalizacao();
        } else {
            alert("Escolha outra posição!");
        }
    }
    VerificaFinalizacao() {
        if (this.tabuleiro.Finalizado()) {
            alert("Jogo Acabou")
        
        }
    }
    ResetarTabu() {
        this.tabuleiro.ResetarTabuleiro();
    }

}

class Jogador {

    constructor(nome, pecaEscolhida) {
        this.nome = nome;
        this.pecaEscolhida = pecaEscolhida;
    }
}

class Tabuleiro {

    constructor() {
        this.tabuleiro = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        this.cheio = false;
    }
    jogadaValida(linha, coluna) {

        if (this.tabuleiro[linha][coluna] == 0)
            return true;
        else return false
    }
    Finalizado() {
        //Linhas
        if(this.tabuleiro[0][0]!=0 && this.tabuleiro[0][0] == this.tabuleiro[0][1] && this.tabuleiro[0][2] == this.tabuleiro[0][0]) return true
        if(this.tabuleiro[1][0]!=0 && this.tabuleiro[1][0] == this.tabuleiro[1][1] && this.tabuleiro[1][2] == this.tabuleiro[1][0]) return true
        if(this.tabuleiro[2][0]!=0 && this.tabuleiro[2][0] == this.tabuleiro[2][1] && this.tabuleiro[2][2] == this.tabuleiro[2][0]) return true

        //Colunas
        if(this.tabuleiro[0][0]!=0 && this.tabuleiro[0][0] == this.tabuleiro[1][0] && this.tabuleiro[2][0] == this.tabuleiro[0][0]) return true
        if(this.tabuleiro[0][1]!=0 && this.tabuleiro[0][1] == this.tabuleiro[1][1] && this.tabuleiro[2][1] == this.tabuleiro[0][1]) return true
        if(this.tabuleiro[0][2]!=0 && this.tabuleiro[0][2] == this.tabuleiro[1][2] && this.tabuleiro[2][2] == this.tabuleiro[0][2]) return true

        //Diagonais
        if(this.tabuleiro[0][0]!=0 && this.tabuleiro[0][0] == this.tabuleiro[1][1] && this.tabuleiro[2][2] == this.tabuleiro[1][1]) return true
        if(this.tabuleiro[0][2]!=0 && this.tabuleiro[0][2] == this.tabuleiro[1][1] && this.tabuleiro[2][0] == this.tabuleiro[1][1]) return true
        else return false;
    }
    ResetarTabuleiro() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.tabuleiro[i][j] = 0;
            }
        }
        for (let i = 1; i <= 9; i++) {
            let icon = document.getElementById(i)
            icon.innerHTML = '';
        }
        return true;
    }
    AtualizarTurno() {
        let jogadorAtual = jogo.jogadorAtual;
        if (jogadorAtual == 0) {
            let turno = document.getElementById(vezicon).value;
            turno.innerHTML = 'Turno X'
        }
        else {
            let turno = document.getElementById(vezicon).value;
            turno.innerHTML = 'Turno O'
        }

    }
}

let pecaX = '<i id="x" class="bi bi-x"></i>';
let pecaO = '<i id="O" class="bi bi-record-circle-fill"></i>';

let jogador1 = new Jogador("pedro", pecaX);

let jogador2 = new Jogador("lucas", pecaO);

const jogo = new Jogo(jogador1, jogador2);
window.jogo = jogo;
