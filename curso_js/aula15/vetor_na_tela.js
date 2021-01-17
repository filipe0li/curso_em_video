let valores = [8, 1, 7, 4, 2, 9];
//JEITO BURRÃO!

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

// JEITO ESPERTO!

for(let pos = 0; pos < valores.length; pos++){ // ENQUANTO POS FOR MENOR QUE O TAMANHO DA ARRAY, POS == POS + 1
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
};


// JEITO PRO!

for(let pos in valores){ // LEITURA == PARA CADA POSIÇÃO NA ARRAY FAÇA {}
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
};

//---------------------------------------

