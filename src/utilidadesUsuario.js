export { comprobarUsuario, logOut }


import {  get } from "./peticiones.js";

function comprobarUsuario(){
    let email = document.querySelector("#username").value
    let password = document.querySelector("#password").textContent
    
    get("/usuarios?email="+email, (e)=>{
        
        if(e.length > 0){
            if(e[0].email == email && e[0].password == password){
                sessionStorage.setItem("id", e[0].id)
                window.location.assign("./tareas.html")
            }else{
                alert("Contraseña y/o email incorrectos")
            }
        }else if(e.length>1){
            alert("Ha encontrado a mas de uno")
        }else if(e.length <= 2){
            alert("No encontrado")
        }
    }, (e)=>{
        alert("Email incorrecto o no estas registrado" +e)
        })
}

function logOut(){
    sessionStorage.removeItem("id")
    window.location.assign("./index.html")
}