import { pedirUsusarios } from "./utilidadesUsusaros.js";

document.addEventListener("DOMContentLoaded", listeners)

function listeners(){
    if(sessionStorage.getItem("id")){
        window.location.assign("./tareas.html");
    }
    let button = document.querySelector("#btnLogin")
    button.addEventListener("click", login)
}

function login(){
    let email = document.querySelector("#username")
    let password = document.querySelector("#password")
    pedirUsusarios(email, password)
}
