console.log("Este es el comienzo del proyecto final-otras secciones");
AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
});
AOS.refresh()

document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
});
  
  //document.addEventListener('aos:out', ({ detail }) => {
    //console.log('animated out', detail);
//});



//Aca empieza la seccion nosotros

let parrafo1 = document.getElementById("nosotrostexto")
parrafo1.innerText = "Net Web es una empresa dedicada al desarrollo web fundada por Denise Antokolec. Inicio su carrera en el mundo de la programación luego de recibirse de Licenciada en Administración de empresas, buscando una salida laboral que le permita desafiar la imaginación y el pensamiento en el día a día. Por eso realizó en Code House los cursos de Desarrollo Web y Javascript para poder brindar a sus clientes lo que buscan en base a sus necesidades y las de los usuarios de sus páginas web, considerando sus comnocimientos empresariales teniendo asi la posibilidad de aportar valor."

//console.log(parrafo1.innerText);

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

//Se realizara evento para poder mediante la eleccion de producto y cantidad de semanas para la entrega el presupuesto final, el cual se expondrá en el input id: resultado.

const calculo = document.getElementById("resultado")
const boton = document.getElementById("calcular")


boton.addEventListener('click', (e) =>{
    e.preventDefault()
    presupuesto()
    console.log('Presupuesto $: ' + calculo.innerText);

    
})



function presupuesto () {
  const presupuestojason = JSON.stringify(new presupuestado1)
  console.log(presupuestojason);
  const valores = localStorage.setItem('presupuesto1',presupuestojason)
  console.log(valores);
  const valor = JSON.parse(localStorage.getItem('presupuesto1'))
  console.log(valor);
  let numero = parseInt(this.valorinput)
  console.log(numero);
  let numero2 = parseInt(this.semmax)
  console.log(numero2);
  

  if (numero = 2){
    calculo.innerHTML = (valorHora*diasyhoras*numero2)
  }else if (numero = 3) {
    calculo.innerHTML = (valorHora*diasyhoras*numero2+(valorHora*diasyhoras*numero2)*porcentaje+valorDominio)
  }else if (numero = 4){
    calculo.innerHTML = (valorHora*diasyhoras*numero2+(valorHora*diasyhoras*numero2)*porcentaje+valorDominio+valorSeo)
  }else{
    calculo.innerHTML= '<p>Si encuentra que no esta lo que requiere pase a la dejar una descripcion de lo que desea</p>'
  }

  return   console.log(calculo.value);
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

const form = document.getElementById("contactoform")
const nombre = document.getElementById("nombrec")
const apellido = document.getElementById("apellidoc")
const email = document.getElementById("emailc")
const telefono = document.getElementById("telefonoc")
const codpost = document.getElementById("codigopostalc")
const ciudad = document.getElementById("ciudadc")
const razon = document.getElementById("descripcion1")
const motivo = document.getElementById("descripcion")

class contactos {
    constructor (){
        this.identidad = nombre.value
        this.surname = apellido.value
        this.mail = email.value
        this.telephone = telefono.value
        this.CP = codpost.value
        this.city = ciudad.value
        this.reason = razon.value
        this.motive = motivo.value
    }
}


nombre.onchange = (e) => {
    this.identidad = e.target.value
    console.log(identidad);
}

apellido.onchange = (e) => {
    this.surname = e.target.value
    console.log(surname);
}

email.onchange = (e) => {
    this.mail = e.target.value
    console.log(mail);
}

telefono.onchange = (e) => {
   this.telephone = e.target.value
    console.log(telephone);
}

codpost.onchange = (e) => {
    this.CP= e.target.value
    console.log(CP);
}

ciudad.onchange = (e) => {
    this.city = e.target.value
    console.log(city);
}

razon.onchange = (e) => {
    this.reason = e.target.value
    console.log(reason);
}

motivo.onchange = (e) => {
    this.motive = e.target.value
    console.log(motive);
}
  


const enviar = document.getElementById("enviar")
enviar.addEventListener("click",contacto)
function contacto (i) {
    i.preventDefault()
    console.log("Se activo el Prevent Default");
    console.log(new contactos());
    
    Swal.fire({
        title: '¿Desea enviar los datos de contacto ingresados?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        denyButtonText: `No Enviar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Enviado!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Los datos no se enviaron', '', 'info')
        }
    })

    const contactojason = JSON.stringify(new contactos)
    console.log(contactojason);
    const datos = localStorage.setItem('contacto',contactojason)
    console.log(datos);

    

}



//Acá termina la seccion contacto

//Acá empieza la seecioón Faqs
console.log('Este es el comienza del proyecto final - Faqs');

let Faqs = document.getElementById("faqs")
let faqs = document.getElementById("faqs2")
let presentacion = document.getElementById("faqs1")
presentacion.innerText = "En esta sección encontraras las preguntas que pueden responder cuestiones recurrentes. En caso de tener una consulta que no se encuentre en las respuestas a continuación, enviarla completando los datos en la sección Contacto."

faqs.innerHTML = "<h4>¿Se puede solo realizar el diseño, sin el hosting y dominio?</h4> <p>Si se puede pero eso se deberá pagar aparte en caso de querer hacerlo luego.</p> <h4>¿Que pasa si contrate un producto pero luego quiero cambiar?</h4> <p>En caso de seleccionar un producto con menos opciones se ofrece la adicion de los servcios faltantes con el adicional correspondiente, men caso de querer un producto con menos servicios se analizara la situación y se llegará a un acuerdo con el cliente</p>"

//console.log(presentacion.innerText);
//console.log(faqs.innerHTML);

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
