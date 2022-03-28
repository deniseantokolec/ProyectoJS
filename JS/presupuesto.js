let semanas = document.getElementById("semmax")
let producto = document.getElementById("opciones") 
let p = document.getElementById("datos")



let valorHora = 1500
let valorSeo = 50
let valorDominio = 199
let diasyhoras= 40
let porcentaje = 0.9

function semmax (e) {
    let final = Number(e.target.value)
    semanas.onchange = () => {
        final
        console.log(final);
     
    }
    
}


function valorinput () {
    let valor = Number(Array.from(producto.value))
    producto.onchange = () => {
        valor
        console.log(valor);
    
    }
    
    
    const arreglo = JSON.stringify(valor)
    console.log(arreglo);
    localStorage.setItem('valores',arreglo)
    const arreglo2 = JSON.parse(localStorage.getItem('valores'))
    console.log(arreglo2); 
    const arreglo3 = Number(arreglo2)
    console.log(arreglo3);
}




class valores {
    producto1(){
        return valorHora*diasyhoras*semmax()
    }
    producto2(){
        return valorHora*diasyhoras*semmax()+valorDominio+((valorHora*diasyhoras*semmax())*porcentaje)
    }
    producto3(){
        return valorHora*diasyhoras*semmax()+valorDominio+((valorHora*diasyhoras*semmax())*porcentaje)+valorSeo
    }
    
}

