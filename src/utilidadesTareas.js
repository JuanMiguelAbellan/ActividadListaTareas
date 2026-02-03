export { pintarTareas, añadirTarea, borrarTarea };

import { post, get, deletE} from "./peticiones.js";

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
    button.setAttribute("id", "btnBorrar")
    button.addEventListener("click", borrarTarea)
    li.append(button)
    ol.append(li)
}

function añadirTarea(){
    let ol = document.querySelector("#lista");
    let tarea = {
        nombre:prompt("Dime el nombre de la tarea:"),
        acabada:false,
        id_user:sessionStorage.getItem("id")
    }
    
    post("/tareas", tarea, (e)=>{addTarea(ol, e)}, (error)=>{alert("No se ha podido insertar la tarea por: " + error)})
}

function borrarTarea(e){
    const id = e.target.parentElement.id;
    
    deletE("/tareas/"+id, ()=>{e.target.parentElement.remove()}, (e)=>{alert("No se ha podido borrar por que: " +e)})
}


