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

export function registroUsuario(data){
    post("/usuarios", data, (e)=>{
        sessionStorage.setItem("id", e.id)
        document.location.assign("tareas.html")
    }, (e)=>{
        alert("Algo ha salido mal por que " + e)
    })
}

export function validarRegistro(data){
    let mensaje="";
    let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ ;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

    if(!emailRegex.test(data.email)){
        mensaje+="El email no es valido\n";
    }else{
        get("/usuarios", "?email="+data.email, (e)=>{
            if(e.length>0){
                mensaje+="El email ya está registrado\n";
            }
        }, (e)=>{
            mensaje+="Error al comprobar el email\n";
        })
    }
    if(data.nombre.length<3){
        mensaje+="El nombre debe tener al menos 3 caracteres\n";
    }
    if(data.nombre[0] !== data.nombre[0].toUpperCase()){
        mensaje+="La primera letra del nombre debe ser mayúscula\n";
    }
    if(data.apellidos.length<3){
        mensaje+="Los apellidos deben tener al menos 3 caracteres\n";
    }
    if(data.apellidos[0] !== data.apellidos[0].toUpperCase()){
        mensaje+="La primera letra de los apellidos debe ser mayúscula\n";
    }
    if(data.email != data.repetirEmail){
        mensaje+="Los emails no coinciden\n";
    }
    if(!passwordRegex.test(data.password)){
        mensaje+="La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial\n";
    }
    if(data.password != data.repetirPassword){
        mensaje+="Las contraseñas no coinciden\n";
    }
    if(!data.condiciones){
        mensaje+="Debe aceptar las condiciones de uso\n";
    }
    return mensaje;
}