console.log("Este es el comienzo del proyecto final-otras secciones");

//Aca empieza la seccion nosotros

let parrafo1 = document.getElementById("nosotrostexto")
parrafo1.innerText = "Net Web es una empresa dedicada al desarrollo web fundada por Denise Antokolec. Inicio su carrera en el mundo de la programación luego de recibirse de Licenciada en Administración de empresas, buscando una salida laboral que le permita desafiar la imaginación y el pensamiento en el día a día. Por eso realizó en Code House los cursos de Desarrollo Web y Javascript para poder brindar a sus clientes lo que buscan en base a sus necesidades y las de los usuarios de sus páginas web, considerando sus comnocimientos empresariales teniendo asi la posibilidad de aportar valor."

console.log(parrafo1.innerText);

//Aca termina la seccion nosotros




//Acá empieza la seccion presupuesto

console.log("Este es el comienzo del proyecto final-presupuesto");
let presup = document.getElementById("presupuestotext")

presup.innerHTML = "<p>En esta seccion podrás pedir tu presupuesto en base a los productos que ofrecemos. Si quieres otro producto te invito a que nos envies un mensaje con la descripción del trabajo a realizar para poder enviar el mismo.</p>"


//1. pedir periodo máximo de entrega
//2. calcular el precio de armar web con el valor ingresado + constante valor hora
//3. dar el precio estimado de dominio
//4. sumar precio de dominio
//5. dar precio de testing
//6. sumar el precio de testing a todo lo anterior
//7. dar precio de SEO
//8. precio final


let valorHora = 1500
let valorSeo = 50
let valorDominio = 199
let diasyhoras= 40
let semanas = document.getElementById("semmax").value
let producto = document.getElementById("opciones").value
const calculo = document.getElementById("resultado")
const boton = document.getElementById("calcular")
const log = document.getElementById("valores").innerHTML

let entrega = Number(semanas)


//let tiempo;
//tiempo = parseFloat(semanas.value)
//tiempo = semanas.valueAsNumber

// semanas.addEventListener('input',(e) => {  
//     log.textContent = e.srcElement.value
//     console.log(log);
// })

//Se realizara evemnto para poder mediante la elecciomn de producto y cantidad de semanmas para la emtrega el presupuesto final, el cual se expondrá en el imput id: resultado.

boton.addEventListener('click', (e) =>{
    e.preventDefault()
    alert (opciones)
    presupuesto(producto)
    console.log('Presupuesto $: ' + resultado);
    
})
let resultado = calculo.value
 

function presupuesto (producto) {
 

    alert(producto)
    if (producto == 2){
        calculo.innerHTML = (valorHora*diasyhoras*entrega)
    }
    else if (producto == 3){
        calculo.innerHTML = (valorHora*diasyhoras*entrega+valorDominio+((valorHora*diasyhoras*entrega)*0.9))
    }  
    else if (producto == 4){
        calculo.innerHTML = (valorHora*diasyhoras*entrega+valorDominio+((valorHora*diasyhoras*entrega)*0.9)+valorSeo)
    }else{
        calculo.innerHTML= '<p>Si encuentra que no esta lo que requiere pase a la dejar una descripcion de lo que desea</p>'
    }
    console.log(calculo.value);
}


let nuevo = document.getElementById("pedido")
let btn = document.getElementById("envio")

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    nuevo.innerHTML
    console.log(nuevo.value);
})

console.log(entrega);
 
//Acá termmina la seccion presupuesto



//Acá emmpieza la seccion de contacto
console.log('Este es el comienza del proyecto final - Contacto');



const enviar = document.getElementById("enviar")
enviar.addEventListener("click",contacto)
const contactoform = [{id: 1, nombre: document.getElementById("nombrec").innerText},
                     {id: 2, apellido: document.getElementById("apellidoc").innerText},
                     {id: 3, email: document.getElementById("emailc").innerText},
                     {id: 4, telefono: document.getElementById("telefonoc").innerText},
                     {id:5, codpost:document.getElementById("codigopostalc").innerText},
                     {id: 6, ciudad: document.getElementById("ciudadc").innerText},
                     {id: 7, razon: document.getElementById("descripcion1").innerText},
                     {id: 8, motivo: document.getElementById("descripcion").innerText}];

function contacto (e) {
    e.preventDefault()
    console.log("Se activo el Prevemnt Default");
}

//import {datajason} from './data.js'

const contactojason = JSON.stringify(contactoform)
console.log(contactojason);
console.log(typeof contactoform);
console.log(typeof contactojason);
localStorage.setItem('contacto',contactojason)

const datos = JSON.parse(localStorage.getItem('contacto'))
console.log(datos);

//Acá termina la seccion contacto

//Acá empieza la seecioón Faqs
console.log('Este es el comienza del proyecto final - Faqs');

let Faqs = document.getElementById("faqs")
let faqs = document.getElementById("faqs2")
let presentacion = document.getElementById("faqs1")
presentacion.innerText = "En esta sección encontraras las preguntas que pueden responder cuestiones recurrentes. En caso de tener una consulta que no se encuentre en las respuestas a continuación, enviarla completando los datos en la sección Contacto."

faqs.innerHTML = "<h4>¿Se puede solo realizar el diseño, sin el hosting y dominio?</h4> <p>Si se puede pero eso se deberá pagar aparte en caso de querer hacerlo luego.</p> <h4>¿Que pasa si contrate un producto pero luego quiero cambiar?</h4> <p>En caso de seleccionar un producto con menos opciones se ofrece la adicion de los servcios faltantes con el adicional correspondiente, men caso de querer un producto con menos servicios se analizara la situación y se llegará a un acuerdo con el cliente</p>"

console.log(presentacion.innerText);
console.log(faqs.innerHTML);

//Acá termina la sección Faqs

//chat box
function gettime() {
    let today = new Date()
    hours = today.getHours()
    minutes = today.getMinutes()
    
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let time = hours + ":" + minutes;
    return time
}
function firstBotMessage () {
    let firstMessage = "Hola! ¿En que puedo ayudarte?"
    document.getElementsByClassName("client-chat").innerHTML='<p class= "botText"><Span>'+ firstMessage + '<Span></p>';
}
