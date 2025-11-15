document.addEventListener("DOMContentLoaded", ()=>{
    agregarEventos();
    cargarPagina("/main.html");

})

function agregarEventos(){
    let dict = new Map();
    dict.set("nav-inicio", "/main.html");
    dict.set("nav-paginas-web", "/paginas-web.html");
    dict.set("nav-videojuegos", "/videojuegos.html");
    dict.set("nav-programas-escritorio", "/programas.html");
    dict.set("nav-diseño-grafico", "/diseño-grafico.html");
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