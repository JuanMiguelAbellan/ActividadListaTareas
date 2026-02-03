export { pintarTareas, addTarea, añadirTarea, borrarTarea, actualizarTarea, comprobarFrom };
import { post } from "./peticiones.js";
import { deletE } from "./peticiones.js";

function pintarTareas(tareas){
    let section = document.querySelector("#listaTareas");
    let ol = document.createElement("ol");
    ol.setAttribute("id", "lista")
    
    tareas.forEach(e => {
        addTarea(ol, e)
    })
    section.append(ol)
}

function addTarea(ol, tarea){
    let li = document.createElement("li")
    li.textContent = tarea.nombre
    li.setAttribute("id", tarea.id)
    let button = document.createElement("button")
    button.textContent = "Borrar tarea";
    button.setAttribute("class", "btnBorrarTarea")
    button.addEventListener("click", borrarTarea)
    li.append(button)
    ol.append(li)
}

function añadirTarea(){
    let ol = document.querySelector("#lista");
    let tarea = {
        nombre:prompt("Dime el nombre de la tarea:"),
        acabada:false,
        id_user: sessionStorage.getItem("id")
    }
    
    post("/tareas", tarea, (e)=>{addTarea(ol, e)}, (error)=>{alert("No se ha podido insertar la tarea por: " + error)})
}

function borrarTarea(e){
    deletE("/tareas/"+e.target.parentElement.id, ()=>{alert("Tarea borrada")}, (error)=>{alert("No se ha podido borrar la tarea por: " + error)})
    e.target.parentElement.remove()
}

function actualizarTarea(){
    //put jsonserver
}


