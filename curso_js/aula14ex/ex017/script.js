function tabuada(){
    const numero = document.querySelector('input#numero').value;
    const res = document.querySelector('tbody#res');
    var resultado = 0;
    res.innerHTML = '';
    if (numero == '') {
        alert('Por favor, digite um número!')
    } else {
    for (var i = 1; i <= 10 ; i++) {
        resultado = i * Number(numero);
        res.innerHTML += `<tr><td>${i} x ${numero} = ${resultado}</td></tr>`;
        }
    }
}