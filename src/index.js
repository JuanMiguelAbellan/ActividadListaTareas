import { comprobarUsuario } from "./utilidadesUsuario.js"

document.addEventListener("DOMContentLoaded", listeners)

function listeners(){
    document.querySelector("#btnLogin").addEventListener("click", comprobarUsuario)
}

