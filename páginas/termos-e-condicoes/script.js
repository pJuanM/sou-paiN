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



function footerLista1() {
    let ulElements = document.querySelector(".ul1")
    let icon = document.querySelector(".icon1")

    if(ulElements.classList.contains("list-active")) {
        ulElements.classList.remove("list-active")
        icon.classList.remove("icon-rotate")
    }else {
        ulElements.classList.add("list-active")
        icon.classList.add("icon-rotate")
    }

}

function footerLista2() {
    let ulElements = document.querySelector(".ul2")
    let icon = document.querySelector(".icon2")


    if(ulElements.classList.contains("list-active")) {
        ulElements.classList.remove("list-active")
        icon.classList.remove("icon-rotate")
    }else {
        ulElements.classList.add("list-active")
        icon.classList.add("icon-rotate")

    }
}

function footerLista3() {
    let ulElements = document.querySelector(".ul3")
    let span = document.querySelector(".span")
    let icon = document.querySelector(".icon3")

    if(ulElements.classList.contains("list-active")) {
        ulElements.classList.remove("list-active")
        span.classList.remove("list-active")
        icon.classList.remove("icon-rotate")
    }else {
        ulElements.classList.add("list-active")
        span.classList.add("list-active")
        icon.classList.add("icon-rotate")
    }
}

function institucional() {
    let insti = document.querySelector(".mobile-header-navegacao-dropdown")
    let menu = document.querySelector(".mobile-menu")
    let categorias = document.querySelector(".mobile-categorias")

    
    if(insti.classList.contains("menu-active")) {
        categorias.classList.remove("menu-active")
        menu.classList.remove("menu-active")
        insti.classList.remove("menu-active")

    }else {
        menu.classList.add("menu-active")
        categorias.classList.add("menu-active")
        insti.classList.add("menu-active")

    }

    
}


const label = document.querySelector('label[for="select"]');
const selectMenu = document.querySelector('#select');

label.addEventListener('click', () => {
  if (selectMenu.style.display === 'none') {
    selectMenu.style.display = 'block';
  } else {
    selectMenu.style.display = 'none';
  }
});

// adiciona a seguinte linha para ocultar o select quando a página for carregada
selectMenu.style.display = 'none';