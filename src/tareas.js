import { get } from "./peticiones.js";
import { pintarTareas, añadirTarea } from "./utilidadesTareas.js";
import { logOut } from "./utilidadesUsuario.js";

document.addEventListener("DOMContentLoaded", listeners)

function listeners(){
    let id_user= sessionStorage.getItem("id")
    get("/tareas?id_user="+id_user, pintarTareas, (error)=>{console.log(error)})
    const btnAddtask= document.querySelector("#btnAddTask")
    btnAddtask.addEventListener("click", añadirTarea)

    const btnLogout= document.querySelector("#btnLogout")
    btnLogout.addEventListener("click", logOut)
}