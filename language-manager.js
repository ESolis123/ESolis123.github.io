
document.addEventListener("DOMContentLoaded", async ()=>{
    await fetch("/languages.json").then(response => response.json())
    .then(data => sessionStorage.setItem("lenguajes", JSON.stringify(data)))

    let lenguajes = sessionStorage.getItem("lenguajes");
    console.log(JSON.parse(lenguajes));
    lenguajes = JSON.parse(lenguajes);

    let buttonSpain = document.querySelector(".spain-button");
    buttonSpain.addEventListener("click", ()=>{
        sessionStorage.setItem("lenguaje-seleccionado", lenguajes.es)
        buttonSpain.dataset.seleccionado = "true";
        buttonEngland.dataset.seleccionado = "false";

        for(let id in lenguajes.es){
            let label =  document.querySelector(id);
            label.innerText = lenguajes.es[id];
        }
    })

    let buttonEngland = document.querySelector(".england-button");
    buttonEngland.addEventListener("click", ()=>{
        sessionStorage.setItem("lenguaje-seleccionado", lenguajes.en)
        buttonSpain.dataset.seleccionado = "false";
        buttonEngland.dataset.seleccionado = "true";
        for(let id in lenguajes.en){
            let label =  document.querySelector(id);
            label.innerText = lenguajes.en[id];
        }

    })
})