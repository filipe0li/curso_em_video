var save = [];
const d2 = document.querySelector('div#d2');

function adicionar() {
    const numero = document.querySelector('input#valores');
    var num = Number(numero.value)
    if (num < 1 || num > 100 || save.includes(num)) {
        alert('Valor Inválido ou já encontrado na lista');
    } else {
        d2.innerHTML = '';
        save.push(num);
        const tela = document.querySelector('select#tela');
        const item = document.createElement('option');
        item.text = `Valor ${num} adicionado.`;
        item.value = `tab${save.length}`;
        tela.appendChild(item);
    } numero.value = '';
    numero.focus();
}

function finalizar(){
    if (save == '') {
        alert('Adicione valores antes de finalizar!');
    } else {
        save.sort();
        var total = 0;
        for(var i  = 0; i < save.length; i++) {
            total += save[i];
        }
        d2.innerHTML = `<p>Ao todo, temos ${save.length} números cadastrados.</pr>
        <p>O maior valor informado foi ${save[save.length -1]}.</p>
        <p>O menor valor informado foi ${save[0]}.</p>
        <p>Somando todos  os valores, temos ${total}</p>
        <p>A média dos valores digitados é ${(total / save.length).toFixed(2)}</p>`;
    }
}