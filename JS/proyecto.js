console.log("Este es el comienzo del proyecto final-otras secciones");

//Aca empieza la seccion nosotros

let nosotros = document.getElementById("nosotros")
let parrafo1 = document.getElementById("nosotrostexto")
parrafo1.innerText = "Net Web es una empresa dedicada al desarrollo web fundada por Denise Antokolec. Inicio su carrera en el mundo de la programación luego de recibirse de Licenciada en Administración de empresas, buscando una salida laboral que le permita desafiar la imaginación y el pensamiento en el día a día. Por eso realizó en Code House los cursos de Desarrollo Web y Javascript para poder brindar a sus clientes lo que buscan en base a sus necesidades y las de los usuarios de sus páginas web, considerando sus comnocimientos empresariales teniendo asi la posibilidad de aportar valor."

console.log(parrafo1.innerText);

//Aca termina la seccion nosotros




//Acá empieza la seccion presupuesto

console.log("Este es el comienzo del proyecto final-presupuesto");

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
let calculo = document.getElementById("resultado")
const boton = document.getElementById("calcular")
boton.addEventListener("click",presupuesto)

function presupuesto () {
    if (producto == [1]){
        calculo.innerHTML = valorHora*diasyhoras*semanas
    }
    else if (producto == [2]){
        calculo.innerHTML = valorHora*diasyhoras*semanas+valorDominio+((valorHora*diasyhoras*semanas)*0.9)
    }
    else if (producto == [3]){
        calculo.innerHTML = valorHora*diasyhoras*semanas+valorDominio+((valorHora*diasyhoras*semanas)*0.9)+valorSeo
    }else{
        alert("Los valores que ingreso no son los corresctos, por favor vuelva a ingresar para porder brindarle el resultado.")
    }
}



//Acá termmina la seccion presupuesto



//Acá emmpieza la seccion de contacto



let nombre = document.getElementById("nombrec")
let surname = document.getElementById("apellidoc")
let reason = document.getElementById("descripcion1")
let description = document.getElementById("descripcion")
let email = document.getElementById("email")
let telefono = document.getElementById("telefonoc")
let codpost = document.getElementById("codigopostalc")
let ciudad = document.getElementById ("ciudadc")

const enviar = document.getElementById("enviar")
enviar.addEventListener("submit",contacto)

function contacto (e) {
    console.log("Este es el comienzo del proyecto final-contacto");
    e.preventDefault()
    console.log("Se activo el Prevemnt Default");
}


formulario.addEventListener('formdata',(e) => {
    
    const formulario = [nombre,surname,email,telefono,codpost,ciudad,reason,description]
    const datos = formulario.innerHTML.value
    datos.innerText = e
    console.log(e);
})    


//Acá termina la seccion contacto

//Acá empieza la seecioón Faqs

let Faqs = document.getElementById("faqs")
let faqs = document.getElementById("faqs2")
let presentacion = document.getElementById("faqs1")
presentacion.innerText = "En esta sección encontraras las preguntas que pueden responder cuestiones recurrentes. En caso de tener una consulta que no se encuentre en las respuestas a continuación, enviarla completando los datos en la sección Contacto."

faqs.innerHTML = "<h4>¿Se puede solo realizar el diseño, sin el hosting y dominio?</h4> <p>Si se puede pero eso se deberá pagar aparte en caso de querer hacerlo luego.</p> <h4>¿Que pasa si contrate un producto pero luego quiero cambiar?</h4> <p>En caso de seleccionar un producto con menos opciones se ofrece la adicion de los servcios faltantes con el adicional correspondiente, men caso de querer un producto con menos servicios se analizara la situación y se llegará a un acuerdo con el cliente</p>"

console.log(presentacion.innerText);
console.log(faqs.innerHTML);

//Acá termina la sección Faqs