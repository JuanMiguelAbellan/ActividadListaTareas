import { get, post } from "./peticiones.js";

export function pedirUsusarios(username, password){
    console.log(username.value, password.value);
    
    get("/usuarios"+"?email="+username.value, (e)=>{
        if(e[0].email === username.value && e[0].password === password.value){
            sessionStorage.setItem("id", e[0].id)
            window.location.assign("./tareas.html");
        }
    }, (e)=>{
        alert("Usuario y/o contraseña incorrectos" + e);
    })
}

export function logOut(){
    sessionStorage.removeItem("id")
    window.location.assign("./index.html")
}
