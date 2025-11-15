document.addEventListener("DOMContentLoaded", ()=>{

    let lenguaje = sessionStorage.getItem("lenguaje-seleccionado");
    console.log(`cargar idioma: ${lenguaje}`);
    lenguaje = JSON.parse(lenguaje);
    console.log(`cargar idioma: ${lenguaje}`);
    CambiarLabels(lenguaje);
})
