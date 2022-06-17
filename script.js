function carregar(){

let mensagem = document.getElementById('mensagem');
let foto = document.getElementById('foto')
let frase = document.getElementById('frase')
let data = new Date();
let hora = data.getHours();
mensagem.innerHTML= `Agora são ${hora} horas.`

if(hora >= 6 && hora < 12){
    foto.src = "manha.jpg";
    frase.innerText = "O dia está começando, prepare um café e aproveite!";
    document.body.style.background = '#a5e7ff';
}

else if (hora >= 12 && hora <= 18){
    foto.src = "tarde.jpg";
    frase.innerText = "Agora é tarde, uma boa hora para ler um livro e relaxar.";
    document.body.style.background = '#e89200';
}

else {
    foto.src = "noite.jpg";
    frase.innerText = "A noite chegou e com ela as estrelas. Admire o céu por um momento."
    document.body.style.background = '#6600ba';
}


}

