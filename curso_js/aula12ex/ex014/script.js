function carregar(){
const msg = document.querySelector('div#msg');
const img = document.querySelector('img#imagem');
const data = new Date();
const atual = data.getHours();
msg.innerHTML = `Agora são ${atual} horas`;
    if (atual >= 0 && atual < 12) {
        img.src = 'images/manha.jpg';
        document.body.style.background = 'rgb(224, 211, 192)';
    } else if (atual >= 12 && atual < 18){
        img.src = 'images/tarde.jpg';
        document.body.style.background = 'rgb(247, 169, 0)';
    } else {
        img.src = 'images/noite.jpg';
        document.body.style.background = 'rgb(39, 39, 41)'
    }
}