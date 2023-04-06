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
        switch (value) {
            case 1:
                link[0].style.visibility = 'visible';
                autor[0].style.visibility = 'visible';
                break;
            case 2:
                link[1].style.visibility = 'visible';
                autor[1].style.visibility = 'visible';
                break;
            case 3:
                link[2].style.visibility = 'visible';
                autor[2].style.visibility = 'visible';
                break;
            case 4:
                link[3].style.visibility = 'visible';
                autor[3].style.visibility = 'visible';
                break;
            default:
                console.log('erro');
        }
    }

}

function desapareceLinkAutor(value) {
    const link = document.querySelectorAll('.link');
    const autor = document.querySelectorAll('.autor');
    if(window.innerWidth > 700) {
        switch (value) {
            case 1:
                link[0].style.visibility = 'hidden';
                autor[0].style.visibility = 'hidden';
                break;
            case 2:
                link[1].style.visibility = 'hidden';
                autor[1].style.visibility = 'hidden';
                break;
            case 3:
                link[2].style.visibility = 'hidden';
                autor[2].style.visibility = 'hidden';
                break;
            case 4:
                link[3].style.visibility = 'hidden';
                autor[3].style.visibility = 'hidden';
                break;
            default:
                console.log('erro');
        }
    }
}

function aparaceTexto(value) {
    const para = document.querySelectorAll('.texto-conjunto');
    const opacityImg = document.querySelectorAll('#conteudo-principal div figure .imagem-conteudo');
    switch (value) {
        case 1:
            para[0].style.display = 'block';
            opacityImg[0].style.opacity = '0.5';
            break;
        case 2:
            para[1].style.display = 'block';
            opacityImg[1].style.opacity = '0.5';
            break;
        case 3:
            para[2].style.display = 'block';
            opacityImg[2].style.opacity = '0.5';
            break;
        case 4:
            para[3].style.display = 'block';
            opacityImg[3].style.opacity = '0.5';
            break;
        default:
        console.log('erro');
        }
}

function retiraTexto(value) {
    const para = document.querySelectorAll('.texto-conjunto');
    const opacityImg = document.querySelectorAll('#conteudo-principal div figure .imagem-conteudo');
    switch (value) {
        case 1:
            para[0].style.display = 'none';
            opacityImg[0].style.opacity = '1';
            break;
        case 2:
            para[1].style.display = 'none';
            opacityImg[1].style.opacity = '1';
            break;
        case 3:
            para[2].style.display = 'none';
            opacityImg[2].style.opacity = '1';
            break;
        case 4:
            para[3].style.display = 'none';
            opacityImg[3].style.opacity = '1';
            break;
        default:
        console.log('erro 1');
        }
}