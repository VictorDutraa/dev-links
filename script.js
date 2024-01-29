var button = document.getElementById('switch-button');

button.addEventListener('click', AlterarTema);

function AlterarTema() {
    const html = document.documentElement;
    const image = document.getElementsByClassName('profile__photo')[0];
    html.classList.toggle('light');

    if(html.classList.contains('light')) {
        image.setAttribute('src', './assets/pc-dia.jpg');
        image.setAttribute('alt', 'foto de dia');
    }
    else{
        image.setAttribute('src', './assets/pc-noite.jpg');
    }
}