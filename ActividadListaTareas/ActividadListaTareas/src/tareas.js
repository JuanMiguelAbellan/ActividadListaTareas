import { get } from "./peticiones.js";
import { pintarTareas, borrarTarea, añadirTarea } from "./utilidadesTareas.js";

document.addEventListener("DOMContentLoaded", listeners)

function listeners(){
    let logOut = document.querySelector("#btnLogout")
    logOut.addEventListener("click", ()=>{
        sessionStorage.removeItem("id")
        document.location.assign("index.html")
    })
    let butAñadir = document.querySelector("#btnAddTask")
    butAñadir.addEventListener("click", añadirTarea)
    get("/tareas?id_user="+sessionStorage.getItem("id"), pintarTareas, (error)=>{console.log(error)})
    let botonBorrarTareas = document.querySelector(".btnBorrarTarea")
    botonBorrarTareas.addEventListener("click", (e)=>{borrarTarea(e)})
}