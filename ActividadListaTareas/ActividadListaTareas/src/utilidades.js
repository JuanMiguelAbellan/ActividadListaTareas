export { pintarTareas };
import { post } from "./peticiones.js";

function pintarTareas(tareas){
    let section = document.querySelector("#listaTareas");
    let ol = document.createElement("ol");
    ol.setAttribute("id", "lista")
    let butAñadir = document.querySelector("#btnAddTask")
    butAñadir.addEventListener("click", añadirTarea)
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
    button.setAttribute("class", "boton")
    button.addEventListener("click", borrarTarea)
    li.append(button)
    ol.append(li)
}

function añadirTarea(){
    //post jsonserver
    let ol = document.querySelector("#lista");
    let tarea = {
        nombre:prompt("Dime el nombre de la tarea:"),
        acabada:false,
        id_user:1//sessionStorage
    }
    
    post("/tareas", tarea, (e)=>{addTarea(ol, e)}, (error)=>{alert("No se ha podido insertar la tarea por: " + error)})
}

function borrarTarea(e){
    //delete jsonserver
    e.target.parentElement.remove()
}
