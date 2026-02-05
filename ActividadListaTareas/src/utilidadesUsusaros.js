import { get } from "./peticiones.js";

export function pedirUsusarios(username, password){
    
    get("/usuarios"+"?email="+username.value, (e)=>{
        if(e[0].email === username.value && e[0].password === password.value){
            sessionStorage.setItem("id", e[0].id)
            window.location.assign("./tareas.html");
        }
    }, (e)=>{
        document.querySelector("header").after(document.createElement("h2").textContent = " Usuario y/o contraseña incorrectos " + e);
    })
}

export function logOut(){
    sessionStorage.removeItem("id")
    window.location.assign("./index.html")
}
