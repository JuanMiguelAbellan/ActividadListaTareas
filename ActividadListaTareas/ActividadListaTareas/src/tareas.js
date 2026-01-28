import { get } from "./peticiones.js";
import { pintarTareas } from "./utilidades.js";

document.addEventListener("DOMContentLoaded", listeners)

function listeners(){
    get("/tareas", pintarTareas, (error)=>{console.log(error)})
}