function verificar(){
    const data = new Date();
    var ano = Number(data.getFullYear());
    const fAno = Number(document.querySelector('input#txtano').value);
    const res = document.querySelector('div#res');
    if (fAno == 0 || (fAno) > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!');
    } else {
        const fSex = document.getElementsByName('radSex');
        const idade = ano - fAno;
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fSex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'images/homem-crianca.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'images/homem-jovem.jpg');
            } else if (idade < 50) {
                img.setAttribute('src','images/homem.jpg');
            } else {
                img.setAttribute('src', 'images/homem-idoso.jpg');
            }
        } else {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'images/mulher-crianca.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'images/mulher-jovem.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'images/mulher.jpg');
            } else {
                img.setAttribute('src', 'images/mulher-idosa.jpg');
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
