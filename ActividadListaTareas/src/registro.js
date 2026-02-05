import { validarForm, registroUsuario } from "./utilidadesRegistro.js";

document.addEventListener("DOMContentLoaded", listeners);

function listeners(){
    let form = document.querySelector("#formRegistro");
    form.addEventListener("submit", registro);

    nombre.addEventListener("blur", ()=>{
        if(nombre.value.length < 3 || nombre.value[0] !== nombre.value[0].toUpperCase()){
            nombre.setAttribute("class", "resaltado");
        }else{
            nombre.removeAttribute("class", "resaltado");
        }
    })

    apellidos.addEventListener("blur", ()=>{
        if(apellidos.value.length < 3 || apellidos.value[0] !== apellidos.value[0].toUpperCase()){
            apellidos.setAttribute("class", "resaltado");
        }else{
            apellidos.removeAttribute("class", "resaltado");
        }
    })
}

function registro(e){
    e.preventDefault();
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
    

    if(condiciones){
        if(validarForm(data)){
            registroUsuario(data);
        }
    }else{
        document.querySelector("#errorCondiciones").textContent = "Debes aceptar las condiciones\n"
    }
}
