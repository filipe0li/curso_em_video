function tabuada(){
    const numero = document.querySelector('input#numero').value;
    const res = document.querySelector('select#seltab');
    if (numero.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var num = Number(numero);
        var c = 1;
        res.innerHTML = '';
        while(c <= 10){
            var item = document.createElement('option');
            item.text = `${num} x ${c} = ${num*c}`;
            item.value = `tab${c}`
            res.appendChild(item);
            c++
        }
    }
}