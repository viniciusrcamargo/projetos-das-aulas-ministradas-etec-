let altura = 1.78
let sexo = "masculino"
let resultado

function calculaImc(altura, sexo){
    if(sexo == "feminino"){
        return (62.1 * altura) - 44.7
    }
    return (72.7 * altura) - 58
}

console.log("O IMC ideal para o sexo " + sexo + " e a altura " + altura + " é: " + calculaImc(altura, sexo))