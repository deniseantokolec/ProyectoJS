console.log("Este es el comienzo del proyecto final-presupuesto");


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