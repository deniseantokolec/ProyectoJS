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
let entrega = parseInt(document.getElementById("semmax"))

function calcular () {
    if (entrega>= 5){
        function cantidadhoras() {
            let horas = entrega*diasyhoras
            return horas
        }
    }else {
        alert ("El valor ingresado no es correcto")
            
    }
    function valorhora(valorHora,cantidadhoras) {
        let horasvalue = valorHora*cantidadhoras
        return horasvalue
    }

    function testing(valorhora) {
        let testeo = valorhora*0.9
        return testeo
    }    
    const sumar = (a,b,c,d) => a+b+c+d

    let total = sumar (valorhora(),valorDominio,testing(),valorSeo)
    console.log(total);
 
    return total
}

function calcular2 () {
    if (entrega>= 5){
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
        if (document.getElementById("opciones3")=document.getElementById("opciones3"))
        alert ("El valor de dominio por mes es:" + "$199")
    }
    function testing(valorhora,cantidadhoras) {
        let testeo = valorhora*cantidadhoras
        return testeo
    }    
    const sumar = (a,b,c,d) => a+b+c+d
    let total2 = sumar (valorhora,cantidadhoras(),valorDominio,testing())

    function alert (valortotal2) {
        let valortotal2 = alert ("El valor total presupuestado es: " + "$" + total2)
        return valortotal2
    }



    
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