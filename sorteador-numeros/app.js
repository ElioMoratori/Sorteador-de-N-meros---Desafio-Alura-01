
function sortear() {
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);

    let numeroMinimo = parseInt(document.getElementById('de').value);

    let numeroMaximo = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    
    for(let i = 0; i < quantidadeNumeros; i++) {
        let numeroSorteado = sorteio(numeroMinimo, numeroMaximo);


        while(sorteados.includes(numeroSorteado)) {
            numeroSorteado = sorteio(numeroMinimo, numeroMaximo);
        }

        sorteados.push(numeroSorteado);
    }
    
    let textoParagrafo = document.getElementById('resultado');
    textoParagrafo.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`
    
  
    mudarStatusBotao();
}

function sorteio (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mudarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.add('container__botao-desabilitado');
        botao.classList.remove('container__botao');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    mudarStatusBotao();
}