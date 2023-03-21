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
function teste(imagem) {
    // Seleciona todos os elementos <li> da lista
    const listaItens = document.querySelectorAll('.lado-esquerdo-lista-item');
    // Percorre todos os elementos <li> da lista
    for (let i = 0; i < listaItens.length; i++) {
      // Verifica se o elemento atual tem a classe "lista-active"
      if (listaItens[i].classList.contains('lista-active')) {
        // Remove a classe "lista-active" do elemento atual
        listaItens[i].classList.remove('lista-active');
      }
    }
    // Seleciona o elemento <li> que foi clicado
    const itemClicado = window.event.target.closest('.lado-esquerdo-lista-item');
    // Adiciona a classe "lista-active" ao elemento clicado
    itemClicado.classList.toggle('lista-active');
    // Seleciona a imagem principal
    const imagemPrincipal = document.getElementById("imagem-principal");
    // Altera o src da imagem principal para a imagem correspondente ao item clicado
    imagemPrincipal.src = imagem;
}


const handleZipCode = (event) => {
    let input = event.target
    input.value = zipCodeMask(input.value)
}
const zipCodeMask = (value) => {
if (!value) return ""
value = value.replace(/\D/g,'')
value = value.replace(/(\d{5})(\d)/,'$1-$2')
return value
}

// Seleciona os elementos relevantes do DOM
const detalhes = document.querySelector(".detalhes");
const entrega = document.querySelector(".entrega");
const lista1 = document.querySelector(".secundario-li1");
const lista2 = document.querySelector(".secundario-li2");
const lista3 = document.querySelector(".secundario-li3");

// Adiciona um listener de evento click para cada item da lista
lista1.addEventListener("click", function() {
  // Adiciona a classe "conteudo-secundario-active" no item clicado e remove dos outros
  lista1.classList.add("conteudo-secundario-active");
  lista2.classList.remove("conteudo-secundario-active");
  lista3.classList.remove("conteudo-secundario-active");

  // Adiciona a classe "secundario-active" no elemento "detalhes" e remove do elemento "entrega"
  detalhes.classList.add("secundario-active");
  detalhes.classList.remove("secundario-remover");
  entrega.classList.remove("secundario-active");
});

lista2.addEventListener("click", function() {
  lista1.classList.remove("conteudo-secundario-active");
  lista2.classList.add("conteudo-secundario-active");
  lista3.classList.remove("conteudo-secundario-active");

  detalhes.classList.remove("secundario-active");
  entrega.classList.add("secundario-remover");
  detalhes.classList.add("secundario-remover");
  entrega.classList.remove("secundario-active");
});

lista3.addEventListener("click", function() {
  lista1.classList.remove("conteudo-secundario-active");
  lista2.classList.remove("conteudo-secundario-active");
  lista3.classList.add("conteudo-secundario-active");

  detalhes.classList.remove("secundario-active");
  entrega.classList.remove("secundario-remover");
  detalhes.classList.add("secundario-remover");
  entrega.classList.add("secundario-active");
});

