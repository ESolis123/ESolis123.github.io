document.addEventListener("DOMContentLoaded", ()=>{
    agregarEventos();
    cargarPagina("/contenido/main.html");

})

function agregarEventos(){
    let dict = new Map();
    dict.set("nav-inicio", "/contenido/main.html");
    dict.set("nav-paginas-web", "/contenido/paginas-web.html");
    dict.set("nav-videojuegos", "/contenido/videojuegos.html");
    dict.set("nav-programas-escritorio", "/contenido/programas.html");
    dict.set("nav-diseño-grafico", "/contenido/diseño-grafico.html");
    dict.set("nav-sobre-mi", "/contenido/about-me.html");

    let botones = [];

    for(let [id, value] of dict.entries()){
        let button = document.querySelector("#" + id);
        botones.push(button);
    }

    for(let [id, value] of dict.entries()){
        let otrosBotones = botones.filter(boton => boton.id !== id);
        let button = document.querySelector("#" + id);

        button.addEventListener("click", ()=>{
            cargarPagina(value);
            button.dataset.seleccionado = "true";

            for(let boton of otrosBotones)
                boton.dataset.seleccionado = "false";
        })
    }
}

async function cargarPagina(nombre){
    let contenido = document.getElementById("contenido");
    await fetch(`${nombre}`).then(data => data.text())
    .then(html => contenido.innerHTML = html);
    CambiarLabels();
}