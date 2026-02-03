import { validarRegistro } from "./utilidadesUsusaros.js";
import { registroUsuario } from "./utilidadesUsusaros.js";

document.addEventListener("DOMContentLoaded", listeners);

function listeners(){
    let button = document.querySelector("#btnRegistrarUsuario");
    button.addEventListener("click", registro);
}

function registro(){
    let nombre = document.querySelector("#nombre").value;
    let apellidos = document.querySelector("#apellidos").value;
    let email = document.querySelector("#email").value;
    let repetirEmail = document.querySelector("#repetirEmail").value;
    let password = document.querySelector("#password").value;
    let repetirPassword = document.querySelector("#repetirPassword").value;
    let news = document.querySelector("#news").checked;
    let condiciones = document.querySelector("#condiciones").checked;

    let data = {
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        repetirEmail: repetirEmail,
        password: password,
        repetirPassword: repetirPassword,
        condiciones: condiciones,
        news: news
    };
    console.log(data);
    

    let mensaje = validarRegistro(data);
    if(mensaje === ""){
        registroUsuario(data);
    }else{
        alert(mensaje);
    }
}