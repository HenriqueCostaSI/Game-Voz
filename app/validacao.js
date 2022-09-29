/**
 * It checks if the user's guess is valid, and if it is, it checks if the guess is correct, and if it's
 * not, it tells the user if the guess is too high or too low.
 * @param chute - the user's guess
 * @returns the value of the variable numeroSecreto.
 */
function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

   
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

/**
 * If the number is not a number, return true.
 * @param numero - The number to be tested.
 */
function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

/**
 * If the number is greater than the maximum value or less than the minimum value, return true.
 * @param numero - The number you want to check
 * @returns a boolean value.
 */
function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

/* It's reloading the page when the user clicks on the button with the id "jogar-novamente". */
document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})