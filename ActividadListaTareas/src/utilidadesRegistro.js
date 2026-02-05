import { get, post } from "./peticiones.js";


export function validarForm(data){
    let validado=true;
    let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ ;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

    if(!emailRegex.test(data.email)){
         document.querySelector("#errorEmail").textContent = "Debe tener un formato valido\n"
        validado=false;
    }else{
        get("/usuarios", "?email="+data.email, (e)=>{
            if(e.length>0){
                document.querySelector("#errorEmail").textContent = "El email ya está registrado\n";
            }
        }, (e)=>{
            document.querySelector("#errorEmail").textContent = "Error al comprobar el email\n";
        })
    }
    if(data.nombre.length<3 || data.nombre[0] !== data.nombre[0].toUpperCase()){
        document.querySelector("#errorNombre").textContent = "El nombre debe tener al menos 3 caracteres y empezar por mayúscula\n"
        validado=false;
    }
    if(data.apellidos.length<3 || data.apellidos[0] !== data.apellidos[0].toUpperCase()){
        document.querySelector("#errorApellidos").textContent = "Los apellidos deben tener al menos 3 caracteres y empezar por mayúscula\n"
        validado=false;
    }
    if(data.email != data.repetirEmail){
        document.querySelector("#errorRepetirEmail").textContent = "Los emails no coinciden\n"
        validado=false;
    }
    if(!passwordRegex.test(data.password)){
        document.querySelector("#errorPassword").textContent = "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial\n"
        validado=false;
    }
    if(data.password != data.repetirPassword){
        document.querySelector("#errorRepetirPassword").textContent = "Las contraseñas no coinciden\n"
        validado=false;
    }
    if(!data.condiciones){
        document.querySelector("#errorCondiciones").textContent = "Debes aceptar las condiciones\n"
        validado=false;
    }
    return validado;
}

export function registroUsuario(data){
    post("/usuarios", data, (e)=>{
        sessionStorage.setItem("id", e.id)
        document.location.assign("tareas.html")
    }, (e)=>{
        document.querySelector("main").after(document.createElement("h2").textContent ="Algo ha salido mal por que " + e)
    })
}
