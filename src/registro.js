import { registrarUsuario, validarForm } from "./utilidadesRegistro.js";


document.addEventListener("DOMContentLoaded", listeners)

function listeners(){
    validarForm()
    const form = document.querySelector("#formRegistro")
    form.addEventListener("submit", (e)=>{
        e.preventDefault;
        if(validarForm()){
            registrarUsuario();
        }else{

        }
    })
    
}