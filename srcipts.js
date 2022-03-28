let jogador, vencedor = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado')
let vencedorSelecionado = document.getElementById('vencedor-selecionado')
var quadrados = document.getElementsByClassName('quadrado')

mudarPlayer('X')

function escolherQuadrado(id) {
    if (vencedor != null) {
        return 
    }
    var quadro = document.getElementById(id)
    if (quadro.innerHTML !== '-') {
        return;
    }
    quadro.innerHTML = jogador
    quadro.style.color = '#000'

    if (jogador === 'X') {
        jogador = 'O'
    } else {
        jogador = 'X'
    }

    mudarPlayer(jogador)
    checkWinner()
}

function mudarPlayer(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checkWinner() {
    let Q1 = document.getElementById(1)
    let Q2 = document.getElementById(2)
    let Q3 = document.getElementById(3)
    let Q4 = document.getElementById(4)
    let Q5 = document.getElementById(5)
    let Q6 = document.getElementById(6)
    let Q7 = document.getElementById(7)
    let Q8 = document.getElementById(8)
    let Q9 = document.getElementById(9)
    
    if (checkSequencia(Q1, Q2, Q3)) {
        cor(Q1, Q2, Q3)
        mudarWinner(Q1)
        return
    }

    if (checkSequencia(Q4, Q5, Q6)) {
        cor(Q4, Q5, Q6)
        mudarWinner(Q4)
        return
    }

    if (checkSequencia(Q7, Q8, Q9)) {
       cor(Q7, Q8, Q9)
        mudarWinner(Q7)
        return
    }

    if (checkSequencia(Q1, Q5, Q9)) {
        cor(Q1, Q5, Q9)
        mudarWinner(Q1)
        return
    }

    if (checkSequencia(Q7, Q5, Q3)) {
        cor(Q7, Q5, Q3)
        mudarWinner(Q3)
        return
    }

    if (checkSequencia(Q1, Q4, Q7)) {
        cor(Q1, Q4, Q7)
        mudarWinner(Q4)
        return
    }

    if (checkSequencia(Q2, Q5, Q8)) {
        cor(Q2, Q5, Q8)
        mudarWinner(Q2)
        return
    }

    if (checkSequencia(Q3, Q6, Q9)) {
        cor(Q3, Q6, Q9)
        mudarWinner(Q3)
    }
}

function mudarWinner(Q){
    vencedor = Q.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function cor(Q1, Q2, Q3) {
    Q1.style.background = '#0f0'
    Q2.style.background = '#0f0'
    Q3.style.background = '#0f0'
}

function checkSequencia(Q1, Q2, Q3){
    var igual = false

    if (Q1.innerHTML != '-' && Q1.innerHTML === Q2.innerHTML && Q2.innerHTML === Q3.innerHTML) {
        igual = true
    }

    return igual
}

function reiniciar() {
    vencedor = null
    vencedorSelecionado.innerHTML = '';
    for (let i = 1; i <= 9; i++) {
       var quadrado = document.getElementById(i)
       quadrado.style.background = '#eee'
       quadrado.style.color = '#eee'
       quadrado.innerHTML = '-'
    }

    mudarPlayer('X')
}