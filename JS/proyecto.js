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
let semanas = document.getElementById("semmax")
let producto = document.getElementById("opciones")
const calculo = document.getElementById("resultado")
const boton = document.getElementById("calcular")

let entrega
semanas.onchange = (m) => {
    entrega = m.target.value
    console.log(entrega);
}
let semmax = parseInt(entrega)
console.log(semmax);
let valorinput
producto.onchange = (j) => {
    valorinput = j.target.value
    console.log(valorinput);
}

//Se realizara evento para poder mediante la eleccion de producto y cantidad de semanas para la entrega el presupuesto final, el cual se expondrá en el input id: resultado.

let resultado = calculo.value

boton.addEventListener('click', (e) =>{
    e.preventDefault()
    presupuesto()
    console.log('Presupuesto $: ' + resultado);
    
})



function presupuesto () {
    if (valorinput == valorinput[2]){
        calculo.innerHTML = (valorHora*diasyhoras*semmax)
    }
    else if (valorinput == valorinput[3]){
        calculo.innerHTML = (valorHora*diasyhoras*semmax+valorDominio+((valorHora*diasyhoras*semmax)*0.9))
    }  
    else if (valorinput == valorinput[4]){
        calculo.innerHTML = (valorHora*diasyhoras*semmax+valorDominio+((valorHora*diasyhoras*semmax)*0.9)+valorSeo)
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


 
//Acá termmina la seccion presupuesto



//Acá emmpieza la seccion de contacto
console.log('Este es el comienza del proyecto final - Contacto');

const nombre = document.getElementById("nombrec")
const apellido = document.getElementById("apellidoc")
const email = document.getElementById("emailc")
const telefono = document.getElementById("telefonoc")
const codpost = document.getElementById("codigopostalc")
const ciudad = document.getElementById("ciudadc")
const razon = document.getElementById("descripcion1")
const motivo = document.getElementById("descripcion")



let identidad
nombre.onchange = (e) => {
    identidad = e.target.value
    console.log(identidad);
}
let surname
apellido.onchange = (e) => {
    surname = e.target.value
    console.log(surname);
}
let mail
email.onchange = (e) => {
    mail = e.target.value
    console.log(mail);
}
let telephone
telefono.onchange = (e) => {
    telephone = e.target.value
    console.log(telephone);
}
let CP
codpost.onchange = (e) => {
    CP= e.target.value
    console.log(CP);
}
let city
ciudad.onchange = (e) => {
    city = e.target.value
    console.log(city);
}
let reason
razon.onchange = (e) => {
    reason = e.target.value
    console.log(reason);
}
let motive
motivo.onchange = (e) => {
    motive = e.target.value
    console.log(motive);
}

const contactoform = [nombre, apellido, email, telefono, codpost, ciudad, razon, motivo]


const enviar = document.getElementById("enviar")
enviar.addEventListener("click",contacto)
function contacto (i) {
    i.preventDefault()
    console.log("Se activo el Prevemnt Default");
    const existe = contactoform.find(x => x.identidad === nombre)
    existe ? console.log('Los datos ingresados son: ' + (existe)) : console.log('Ingresar los datos requeridos');

}



const contactojason = JSON.stringify(contactoform)
console.log(contactojason);
console.log(typeof contactoform);
console.log(typeof contactojason);
localStorage.setItem('contacto',contactojason)

// const datos = JSON.parse(localStorage.getItem('contacto'))


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
