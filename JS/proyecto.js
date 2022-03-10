console.log("Este es el comienzo del proyecto final");

//Aca empieza la seccion nosotros

let nosotros = document.getElementById("nosotros")
let parrafo1 = document.getElementById("nosotrostexto")
parrafo1.innerText = "Net Web es una empresa dedicada al desarrollo web fundada por Denise Antokolec. Inicio su carrera en el mundo de la programación luego de recibirse de Licenciada en Administración de empresas, buscando una salida laboral que le permita desafiar la imaginación y el pensamiento en el día a día. Por eso realizó en Code House los cursos de Desarrollo Web y Javascript para poder brindar a sus clientes lo que buscan en base a sus necesidades y las de los usuarios de sus páginas web, considerando sus comnocimientos empresariales teniendo asi la posibilidad de aportar valor."

console.log(parrafo1.innerText);

//Aca termina la seccion nosotros


//Acá empieza la seccion presupuesto

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
let entrega = 5

function tiempoentrega () {
    let dato = parseInt(parent.document.getElementById ("semmax"))
    alert(dato)
    let texto = dato.innerText
    return texto
}

function boton (numero){
    alert(numero)
    if (numero == 1){
        calcular3()
    }
    else if (numero == 2){
        calcular2()
    }
    else if (numero == 3){
        calcular
    }
}
function calcular () {
    function cantidadhoras() {
        let horas = entrega*diasyhoras*valorHora
        return horas
    }

    if (entrega>= 5){
        cantidadhoras()
    }else {
        alert ("La cantidad de semanas no es la aceptada. Máximo 5 semanas válido.")
            
    }
 
    function testing(cantidadhoras) {
        let testeo = cantidadhoras*0.9
        return testeo
    }    
    const sumar = (a,b,c,d) => a+b+c+d

    let total = sumar (cantidadhoras(),valorDominio,testing(),valorSeo)
    console.log(total);
 
    return total
    
}
console.log(calcular());

function calcular2 () {
    function cantidadhoras() {
        let horas = entrega*diasyhoras*valorHora
        return horas
    }

    if (entrega>= 5){
      cantidadhoras ()
    }else {
        alert ("El valor ingresado no es correcto")
    }
    function testing(cantidadhoras) {
        let testeo = cantidadhoras*0.9
        return testeo
    }    
    const sumar = (a,b,c) => a+b+c
    let total2 = sumar (cantidadhoras(),valorDominio,testing())

    return total2
}


console.log(calcular2 ());

function calcular3 () {
    function cantidadhoras() {
        let horas = entrega*diasyhoras*valorHora
        return horas
    }

    if (entrega>= 5){
      cantidadhoras ()
    }else {
        alert ("El valor ingresado no es correcto")
    }
    function testing(cantidadhoras) {
        let testeo = cantidadhoras*0.9
        return testeo
    }    
    const sumar = (a,b) => a+b
    let total3 = sumar (cantidadhoras(),testing())

    return total3
}



//Acá termmina la seccion presupuesto


//Acá emmpieza la seccion de contacto
class   Contacto {
    constructor (nombre, apellido, motivo, descripcion){
        this.name = nombre
        this.surname = apellido
        this.reason = motivo
        this.description = descripcion
    }

}

let information = [nombre = document.getElementById("nombrec"),apellido = document.getElementById("apellidoc"),motivo = document.getElementById("descripcion1"),descripcion = document.getElementById("descripcion")]

const info = ["description","nombre","surname","reason","email","telefono","codigopostal","ciudad"]
const contactar = []

let datos = [nombre = document.getElementById("nombrec"),apellido = document.getElementById("apellidoc"),motivo = document.getElementById("descripcion1"),descripcion = document.getElementById("descripcion"), email = document.getElementById("emailc"), telefono = document.getElementById("telefomnoc"), codigopostal = document.getElementById("codigopostalc"), ciudad = document.getElementById("ciudadc")]

for (const datos of info) {
    let information =`${datos}`
    information = info
    contactar.push(new Contacto(nombre,apellido,motivo,descripcion,email,telefono,codigopostal,ciudad))
}

console.log(contactar);

contactar.forEach(elemento => {
console.log(elemento.name);
})

const contactarmap = contactar.map((e) => {return e.description})
console.log(contactarmap) 

const razon = contactar.find(razon => razon.reason === "Consulta")
console.log(razon);

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