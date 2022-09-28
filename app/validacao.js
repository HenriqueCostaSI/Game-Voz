function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = parseInt(chute);

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return
    }

    if(numeroForMaiorOuMenor(numero)) {
        elementoChute.innerHTML +=  `<div>Valor inválido: fale um número entre o ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto é ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="botao">Jogar novamente </button>     
        `
    }else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior<i class="fa-solid fa-up-long"></i></div>`
    }



}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenor(numero) {
    return numero > maiorValor || numero< menorValor;
}

document.body.addEventListener('click', e => {
    if(e.terget.id == 'jogar-novamente') {
        windows.location.reload();
    }
})