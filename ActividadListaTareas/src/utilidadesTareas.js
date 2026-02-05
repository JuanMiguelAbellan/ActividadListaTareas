export { pintarTareas, addTarea, añadirTarea, borrarTarea, actualizarTarea};
import { post, deletE, patch } from "./peticiones.js";

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

    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.checked = tarea.acabada
    checkbox.addEventListener("change", actualizarTarea)
    li.prepend(checkbox)
    
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
    
    post("/tareas", tarea, (e)=>{addTarea(ol, e)}, (error)=>{console.log("No se ha podido insertar la tarea por: " + error)})
}

function borrarTarea(e){
    const id = e.target.parentElement.id;
    
    deletE("/tareas/"+id, ()=>{e.target.parentElement.remove()}, (e)=>{console.log("No se ha podido borrar por que: " +e)})
}

function actualizarTarea(e){
    const id = e.target.parentElement.id;
    const checkbox = e.target
    patch("/tareas/"+id, {acabada:e.target.checked}, (res)=>{
        checkbox.checked = res.acabada
    },(error)=>{
        console.log("No se ha podido actualizar por: " + error);
        checkbox.checked = !e.target.checked
    })
}


