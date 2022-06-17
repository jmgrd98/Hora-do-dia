function carregar(){

let mensagem = document.getElementById('mensagem');
let foto = document.getElementById('foto')
let data = new Date();
let hora = data.getHours();
mensagem.innerHTML= `Agora são ${hora} horas.`

if(hora >= 6 && hora < 12){
    foto.src = "manha.jpg";
}

else if (hora >= 12 && hora < 18){
    foto.src = "tarde.jpg";
}

else {
    foto.src = "noite.jpg";
}


}

