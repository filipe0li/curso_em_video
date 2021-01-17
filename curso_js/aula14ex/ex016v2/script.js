function contar(){
    const inicio = document.querySelector('input#inicio').value;
    const fim = document.querySelector('input#fim').value;
    const passo = document.querySelector('input#passo').value;
    const res = document.querySelector('div#res');
    if (inicio.length == 0 || fim.length == 0) {
        res.innerHTML = 'impossivel contar'
    } else {
        res.innerHTML = 'Contando...<br>'
        var st = Number(inicio);
        var fi = Number(fim);
        var pa = Number(passo);
        if (pa <= 0) {
            alert('Passo inválidao, considerando passo 1');
            pa = 1;
        } if (st > fi) {
            for(var c = st; c >= fi; c -= pa) {//COTAGEM DECRESCENTE
                res.innerHTML += `${c}&#x1F3C3; `;
            }
        } else {
            for(var c = st; c <= fi; c += pa) {//COTAGEM CRESCENTE
                res.innerHTML += `${c}&#x1F3C3; `;
            }
        }

    }res.innerHTML += '&#x1F3C1;';

}