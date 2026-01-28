import { get } from "./peticiones.js"

document.addEventListener("DOMContentLoaded", listeners)

function listeners(){
    document.querySelector("#btnLogin").addEventListener("click", comprobarUsuario)
}

function comprobarUsuario(){
    let email = document.querySelector("#username").value
    
    let password = document.querySelector("#password").textContent
    get("/usuarios?email="+email, (e)=>{
        console.log(e);
        
        if(e.length > 0){
            alert("Ha encontrado a uno "+ e[0].email)
        }else if(e.length>1){
            alert("Ha encontrado a mas de uno")
        }else if(e.length <= 2){
            alert("No encontrado")
        }
    }, (e)=>{
        alert("Email incorrecto o no estas registrado" +e)
        })
}