/* Navegação esconde-mostra */
const btnHeader = document.querySelector('.nav-menu');
const btnArrow = document.querySelector('.nav-flecha');
const navHeader = document.querySelector('.header');

function apareceBarraNav() {
    navHeader.classList.toggle('nav-menu');
    if (navHeader === document.querySelector('.nav-menu')) {
        btnHeader.style.display = 'none';
    } else {
        btnHeader.style.display = 'flex';
    }
}

btnHeader.addEventListener('click', apareceBarraNav);
btnArrow.addEventListener('click', apareceBarraNav);

function apareceLinkAutor(value) {
    const link = document.querySelectorAll('.link');
    const autor = document.querySelectorAll('.autor');
    if(window.innerWidth > 700) {
        link[value].style.visibility = 'visible';
        autor[value].style.visibility = 'visible';  
    }
}

function desapareceLinkAutor(value) {
    const link = document.querySelectorAll('.link');
    const autor = document.querySelectorAll('.autor');
    if(window.innerWidth > 700) {
        link[value].style.visibility = 'hidden';
        autor[value].style.visibility = 'hidden';
    }
}

function aparaceTexto(value) {
    const para = document.querySelectorAll('.texto-conjunto');
    const opacityImg = document.querySelectorAll('#conteudo-principal div figure .imagem-conteudo');
    if (para[value].style.display === 'none' || !para[value].getAttribute('style')) {
        para[value].style.display = 'block';
        opacityImg[value].style.opacity = '0.5';
    } else {
        para[value].style.display = 'none';
        opacityImg[value].style.opacity = '1';
    }
}
