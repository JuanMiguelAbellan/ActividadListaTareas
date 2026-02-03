import { get } from "./peticiones.js";


export function validarForm(){
    let validado=false;

    const form = document.querySelector("#formRegistro")
    const nombre = document.querySelector("#nombre")
    const apellidos = document.querySelector("#apellidos")
    const email = document.querySelector("#email")
    const password= document.querySelector("#password")
    const repetirPassword = document.querySelector("#repetirPassword")
    const condiciones = document.querySelector("#condiciones")
    const novedades = document.querySelector("#news")

    
    
    nombre.addEventListener("blur", ()=>{
        if(nombre.value.length < 3 || nombre.value[0] !== nombre.value[0].toUpperCase()){
            validado=false;
            nombre.setAttribute("class", "resaltado");
        }else{
            validado = true;
        }
    })

    apellidos.addEventListener("blur", ()=>{
        if(apellidos.value.length < 3 || apellidos.value[0] !== apellidos.value[0].toUpperCase()){
            validado=false;
            apellidos.setAttribute("class", "resaltado");
        }else{
            validado = true;
        }
    })

    const regexEmail = new RegExp("/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/")
    if(regexEmail.test(email.value)){
        get("/usuarios?email=" + email.value, (e)=>{
            if(e.length > 1){
                alert("Ya esta ese correo")
            }
        }, (e)=>{alert(e)})
    }

    form.addEventListener("submit", (e)=>{
        e.preventDefault;
        if(validado){
            alert("todo correcto")
        }
    })
}
function validarNombre(){}

export function registrarUsuario(){
    const nombre = document.querySelector("#nombre").value
    const apellidos = document.querySelector("#apellidos").value
    const email = document.querySelector("#email").value
    const password= document.querySelector("#password").value
    const repetirPassword = document.querySelector("#repetirPassword").value
    const condiciones = document.querySelector("#condiciones").checked
    const novedades = document.querySelector("#news").checked
}