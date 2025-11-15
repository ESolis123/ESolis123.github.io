
document.addEventListener("DOMContentLoaded", async ()=>{
    await fetch("/languages.json").then(response => response.json())
    .then(data => sessionStorage.setItem("lenguajes", JSON.stringify(data)))

    let lenguajes = sessionStorage.getItem("lenguajes");
    lenguajes = JSON.parse(lenguajes);

    let buttonSpain = document.querySelector(".spain-button");
    let buttonEngland = document.querySelector(".england-button");

    sessionStorage.setItem("lenguaje-seleccionado", JSON.stringify(lenguajes.en));
    buttonSpain.dataset.seleccionado = "false";
    buttonEngland.dataset.seleccionado = "true";

    CambiarLabels();


    buttonSpain.addEventListener("click", ()=>{
        sessionStorage.setItem("lenguaje-seleccionado", JSON.stringify(lenguajes.es))
        buttonSpain.dataset.seleccionado = "true";
        buttonEngland.dataset.seleccionado = "false";

        CambiarLabels()
    })


    buttonEngland.addEventListener("click", ()=>{
        sessionStorage.setItem("lenguaje-seleccionado", JSON.stringify(lenguajes.en))
        buttonSpain.dataset.seleccionado = "false";
        buttonEngland.dataset.seleccionado = "true";

        CambiarLabels()

    })
})

function CambiarLabels(){

    let lenguaje = sessionStorage.getItem("lenguaje-seleccionado");
    lenguaje = JSON.parse(lenguaje);
    console.log("Cambiar labels", lenguaje);

    for(let id in lenguaje){

        let label =  document.querySelector(id);
        console.log("ID: " + id);
        console.log("label:", label)
        if(label != null && label != undefined)
            label.innerText = lenguaje[id];
    }
}