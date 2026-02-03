import { URL_SERVER } from "./constantes.js"
export { get }
export { post }
export { deletE }
export { patch }

function get(url, callback, callbackError) {
    fetch(URL_SERVER+url)
    .then(response => {
        if(response.ok){
            return response.json()
        }else{
            throw new Error(response.statusText)
        }
    })
    .then(data => callback(data))
    .catch(error => callbackError(error))
}

function post(url, datos, callback, callbackError){
    const options = {
        method: "POST", 
        body: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json",
        }
    }
    fetch(URL_SERVER+url, options)
    .then(response => {
        if(response.ok){
            return response.json()
        }else{
            throw new Error(response.statusText)
        }
    })
    .then(data => callback(data))
    .catch(error => callbackError(error))
}

function deletE(url, callback, callbackError){
    const options = {
        method: "DELETE",
    }
    fetch(URL_SERVER+url, options)
    .then(response => {
        if(response.ok){
            return response.json()
        }else{
            throw new Error(response.statusText)
        }
    })
    .then(data => callback(data))
    .catch(error => callbackError(error))
}

function patch(url, datos, callback, callbackError){
    const options = {
        method: "PATCH", 
        body: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json",
        }
    }
    fetch(URL_SERVER+url, options)
    .then(response => {
        if(response.ok){
            return response.json()
        }else{
            throw new Error(response.statusText)
        }
    })
    .then(data => callback(data))
    .catch(error => callbackError(error))
}