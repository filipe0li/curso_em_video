let num = [5, 8, 2, 9, 3];
console.log(`Noso vetor é o ${num}`);
console.log(`Noso vetor tem ${num.length} posições`);
console.log(`O primeiro valor do array é ${num[1]}`);
num.push(1); // ADICIONA VALOR NO FINAL DA ARRAY
console.log(`Noso vetor é o ${num}`);
num.sort(); // DEIXA VAOLRES DENTRO DO ARRAY EM ORDEM CRESCENTE
console.log(`Noso vetor é o ${num}`);

console.log(num.indexOf(9));// FALA POSIÇÃO DO VALOR NA ARRAY
console.log(num.indexOf(10));// SE NÃO TIVER RETORNA -1

let pos = num.indexOf(3);
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O está na posição ${pos}`)
}