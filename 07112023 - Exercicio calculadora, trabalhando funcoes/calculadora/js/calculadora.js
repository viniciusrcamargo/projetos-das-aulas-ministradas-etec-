const mostraResultado = document.getElementById('result');


function soma(){
const num1 = parseInt(document.getElementById("num1").value)
const num2 = parseInt(document.getElementById("num2").value)

const resultado = num1 + num2;
mostraResultado.innerHTML = `Resultado: ${resultado}`
}

function subtracao(){
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    
    const resultado = num1 - num2;
    mostraResultado.innerHTML = `Resultado: ${resultado}`
}
    
function multiplicacao(){
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    
    const resultado = num1 * num2;
    mostraResultado.innerHTML = `Resultado: ${resultado}`
}

function divisao(){
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)

    if(num1 == 0 || num2 == 0){
        alert("Não é possível dividir por 0, tente novamente!")
        limpaCampos();
        return
    }
    const resultado = num1 / num2;
    mostraResultado.innerHTML = `Resultado: ${resultado}`
}

function limpaCampos(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    mostraResultado.innerHTML = "";
}