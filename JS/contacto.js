console.log("Este es el comienzo del proyecto final-contacto");


//Acá emmpieza la seccion de contacto

let nombre = document.getElementById("nombrec")
let surname = document.getElementById("apellidoc")
let reason = document.getElementById("descripcion1")
let description = document.getElementById("descripcion")
let email = document.getElementById("email")
let telefono = document.getElementById("telefonoc")
let codpost = document.getElementById("codigopostalc")
let ciudad = document.getElementById ("ciudadc")

const enviar = document.getElementById("calcular")
enviar.addEventListener("submit",contacto)

function contacto () {
    const datos = [nombre,surname,email,telefono,ciudad,codpost,reason,description]
    console.log(datos);
    
}








//Acá termina la seccion contacto
