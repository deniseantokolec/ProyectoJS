console.log("Este es el comienzo del proyecto final");

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
let entrega = parseInt(prompt ("Escribir el tiempo máximo para la entrega en semanas"))

function semanasmaximas (n){
    return (m) => m<=n
}
semanasmaximas(5) (1)
let cincosemanas = semanasmaximas (5)



if (entrega>= cincosemanas(5)){
    function cantidadhoras() {
        let horas = entrega*diasyhoras
        return horas
        }
}else {
    alert ("El valor ingresado no es correcto")
}



function valorhora(a,b) {
    return a*b
}

function valordominio() {
    alert ("El valor de dominio por mes es:" + "$199")
    


}

function testing(a,b) {
    let testeo = a*b
    return testeo
     
}
function seo () {
    alert ("El valor de SEO es: " + "$50")
    
}

valorhora (valorHora,cantidadhoras())
valordominio ()
testing(valorhora(valorHora,cantidadhoras()),0.9)
seo ()


const sumar = (a,b,c,d) => a+b+c+d

let total = sumar (valorhora(valorHora,cantidadhoras()),valorDominio,testing(valorhora(valorHora,cantidadhoras()),0.9),valorSeo)
console.log(total);
let valortotal = alert ("El valor total presupuestado es: " + "$" + total)

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


const Contact = new Contacto(nombre = prompt("ingrese su nombre"), apellido = prompt("ingrse su apellido"), motivo = prompt("ingrese la razon de contacto"), descripcion = prompt("ingrese el motivo de contacto"));

alert ("Nombre: "+ nombre + " " + "Apellido: " + apellido + " " +"Motivo: " + motivo + " " + "Texto: " + descripcion)



for (const key in Contact) {
    console.log(key, Contact[key]);

}

const info = ['Nombre', 'Apellido', 'Razon de contacto', 'Descripción']
const contactar = []

for (const datos of info) {
    let information = prompt(`Datos de contacto ${datos}`)
    information = info
    contactar.push(new Contacto(nombre,apellido,motivo,descripcion))
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