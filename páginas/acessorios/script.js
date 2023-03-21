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
    var menuMobile = document.querySelector(".mobile-menu")
    var hide = document.querySelector(".hide")
    var menu = document.querySelector(".menu")
    var line = document.querySelector(".line") 

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
    if(menuMobile.classList.contains("active")) {
        menuMobile.classList.remove("active")
        hide.classList.remove("mobile-fade")
        line.classList.remove("active")
        menu.classList.remove("active" ,"lingot")
    }
}



function toggleList(className, iconClassName) {
    const ulElements = document.querySelector(`.${className}`);
    const icon = document.querySelector(`.${iconClassName}`);
  
    if (ulElements.classList.contains("list-active")) {
      ulElements.classList.remove("list-active");
      icon.classList.remove("icon-rotate");
    } else {
      ulElements.classList.add("list-active");
      icon.classList.add("icon-rotate");
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