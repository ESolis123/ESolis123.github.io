   let dict = new Map();
    dict.set("nav-inicio", "/contenido/main.html");
    dict.set("nav-paginas-web", "/contenido/paginas-web.html");
    dict.set("nav-videojuegos", "/contenido/videojuegos.html");
    dict.set("nav-programas-escritorio", "/contenido/programas.html");
    dict.set("nav-diseño-grafico", "/contenido/diseño-grafico.html");
    dict.set("nav-sobre-mi", "/contenido/about-me.html");

document.addEventListener("DOMContentLoaded", ()=>{
    agregarEventos();
    cargarPagina("/contenido/main.html");
    let botonSubirArriba = document.querySelector("#boton-ir-arriba");
    botonSubirArriba.addEventListener("click", ()=>{
        subirScroll();
    })
})

window.addEventListener("scroll", ()=>{
    let botonArriba = document.querySelector("#boton-ir-arriba");
    if(scrollY === 0)
        botonArriba.dataset.habilitado = "false";
    else
        botonArriba.dataset.habilitado = "true";


})
function agregarEventos(){


    let botones = [];

    for(let [id, value] of dict.entries()){
        let button = document.querySelector("#" + id);
        botones.push(button);
    }

    for(let [id, value] of dict.entries()){
        let button = document.querySelector("#" + id);

        button.addEventListener("click", ()=>{
            cargarPagina(value);
        })
    }
}

async function cargarPagina(nombre){
    let contenido = document.getElementById("contenido");
    let pagina;
    let otrosBotones = [];
    dict.forEach((value, key) => {
        console.log(`Value: ${value} Key: ${key} Nombre: ${nombre} ${value===nombre}`)
        if(value === nombre)
            pagina = key

        else
            otrosBotones.push(document.querySelector("#"+key));
    });

    let navBoton = document.querySelector("#"+pagina);
    navBoton.dataset.seleccionado = "true";

    otrosBotones.forEach(boton => boton.dataset.seleccionado = "false");

    await fetch(`${nombre}`).then(data => data.text())
    .then(html => contenido.innerHTML = html);
    CambiarLabels();
    subirScroll();

}

function subirScroll(){
    window.scrollTo({ top: 0, behaviour: "smooth"})
}