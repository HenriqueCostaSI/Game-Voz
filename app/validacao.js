function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = parseInt(chute);

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
    }

    if(numeroForMaiorOuMenor(numero)) {
        elementoChute.innerHTML +=  `<div>Valor inválido: fale um número entre o ${menorValor} e ${maiorValor}</div>`;
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto é ${numeroSecreto}</h3>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenor(numero) {
    return numero > maiorValor || numero< menorValor;
}