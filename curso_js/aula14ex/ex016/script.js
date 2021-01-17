function contar(){
    var inicio = document.querySelector('input#inicio').value;
    const fim = document.querySelector('input#fim').value;
    var passo = document.querySelector('input#passo').value;
    const legenda = document.querySelector('div#legenda');
    const res = document.querySelector('div#res');
    legenda.innerHTML = '';
    if (inicio == '' || fim == '') {
        res.innerHTML = 'Impossivel contar!';
    } else if (Number(passo) == 0) {
        alert('Passo inválidao, considerando passo 1');
        res.innerHTML = '';
        legenda.innerHTML = 'Contando...'
        while(Number(inicio) <= Number(fim)){
        res.innerHTML += `${inicio}&#x1F3C3; `;
        inicio++;
    }
    res.innerHTML += '&#x1F3C1;';
    } else if (Number(inicio) > Number(fim)){
        res.innerHTML = '';
        legenda.innerHTML = 'Contando...'
        while(Number(inicio) >= Number(fim)){
        res.innerHTML += `${inicio}&#x1F3C3; `;
        inicio=Number(inicio)-Number(passo);
    }
    res.innerHTML += '&#x1F3C1;';
    } else {
        res.innerHTML = '';
        legenda.innerHTML = 'Contando...'
        while(Number(inicio) <= Number(fim)){
        res.innerHTML += `${inicio}&#x1F3C3; `;
        inicio=Number(inicio)+Number(passo);
    }
    res.innerHTML += '&#x1F3C1;';
}
}