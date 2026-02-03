import { get, post } from "./peticiones.js";


export function validarForm(data){
    let validado=true;
    let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ ;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

    if(!emailRegex.test(data.email)){
        validado=false;
    }else{
        get("/usuarios", "?email="+data.email, (e)=>{
            if(e.length>0){
                alert("El email ya está registrado\n");
            }
        }, (e)=>{
            alert("Error al comprobar el email\n");
        })
    }
    if(data.nombre.length<3 || data.nombre[0] !== data.nombre[0].toUpperCase()){
        alert("El nombre debe tener al menos 3 caracteres y empezar por mayúscula\n");
        validado=false;
    }
    else if(data.apellidos.length<3 || data.apellidos[0] !== data.apellidos[0].toUpperCase()){
        alert("Los apellidos deben tener al menos 3 caracteres y empezar por mayúscula\n");
        validado=false;
    }
    else if(data.email != data.repetirEmail){
        alert("Los emails no coinciden\n");
        validado=false;
    }
    else if(!passwordRegex.test(data.password)){
        alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial\n");
        validado=false;
    }
    else if(data.password != data.repetirPassword){
        alert("Las contraseñas no coinciden\n");
        validado=false;
    }
    else if(!data.condiciones){
        alert("Debe aceptar las condiciones\n");
        validado=false;
    }
    return validado;
}

export function registroUsuario(data){
    post("/usuarios", data, (e)=>{
        sessionStorage.setItem("id", e.id)
        document.location.assign("tareas.html")
    }, (e)=>{
        alert("Algo ha salido mal por que " + e)
    })
}
