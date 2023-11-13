var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var qtdePares = 0;

for(var i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 0){
        qtdePares = qtdePares + 1
    }
}

console.log("Quantidade de números pares = "+ qtdePares);