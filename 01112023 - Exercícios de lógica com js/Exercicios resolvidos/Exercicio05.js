var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
var qtdeImpares = 0;

for(var i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 != 0){
        qtdeImpares = qtdeImpares + 1
    }
}

console.log("Quantidade de números ímpares = " + qtdeImpares);