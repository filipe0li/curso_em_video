var idade = 65;
if (idade < 18) {
    console.log('Menor de idade')
} else {
    console.log('Maior de idade')
}

if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 65){
        console.log('Voto opcinal')
} else {
        console.log('Vota')
    }