var active = document.querySelector(".header-usuario-sacola-abrir")
var fade = document.querySelector(".hide")
function abrir() {
    active.classList.add("header-active")
    if(active = document.querySelector(".header-active")) {
        fade.classList.add("fade")
    }else {
        console.log("Deu errado")
    }
}
function fechar() {
    active.classList.remove("header-active")
    fade.classList.remove("fade")
}
fade.addEventListener('click', function(e) {
  if (e.target == this) fechar();
});


var btn = document.querySelector(".to-top");
btn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});

function menuMobile() {
    let menuMobile = document.querySelector(".mobile-menu")
    let hide = document.querySelector(".hide")
    let menu = document.querySelector(".menu")
    let line = document.querySelector(".line") 

    if(menuMobile.classList.contains("active")) {
        menuMobile.classList.remove("active")
        hide.classList.remove("mobile-fade")
        line.classList.remove("active")
        menu.classList.remove("active" ,"lingot")
    }else {
        menuMobile.classList.add("active")
        hide.classList.add("mobile-fade")
        line.classList.add("active")
        menu.classList.add("active" ,"lingot")
    }

}
function fecharMobile() {
    let menuMobile = document.querySelector(".mobile-menu")
    let hide = document.querySelector(".hide")
    let menu = document.querySelector(".menu")
    let line = document.querySelector(".line") 

    if(menuMobile.classList.contains("active")) {
        menuMobile.classList.remove("active")
        hide.classList.remove("mobile-fade")
        line.classList.remove("active")
        menu.classList.remove("active" ,"lingot")
    }
}



function toggleList(e) {
    const ul = e.currentTarget.nextElementSibling;
    const svg = e.currentTarget.querySelector('svg');
    if (ul.classList.contains('list-active')) {
        ul.classList.remove('list-active');
        svg.classList.remove('icon-rotate');
    } else {
        ul.classList.add('list-active');
        svg.classList.add('icon-rotate');
    }
}

const listHeaders = document.querySelectorAll('.footer-mobile-lista h3');
listHeaders.forEach(header => {
    header.addEventListener('click', toggleList);
});


function abrirPanel(event) {
    let paragrafo = event.target.nextElementSibling;
    paragrafo.classList.toggle("active");
  }
  
  let botoes = document.querySelectorAll(".painel-botao");
  
  botoes.forEach(function(botao) {
    botao.addEventListener("click", abrirPanel);
  });