let semanas = document.getElementById("semmax")
let producto = document.getElementById("opciones") 




let valorHora = 1500
let valorSeo = 50
let valorDominio = 199
let diasyhoras= 40
let porcentaje = 0.9


class presupuestado1 {
    constructor (){
        this.valorinput = producto.value
        this.semmax = semanas.value

    }
}


semanas.onchange = (e) => {
    this.semmax = e.target.value
    console.log(semmax);
}

producto.onchange = (p) => {
    this.valorinput = p.target.value
    console.log(valorinput);
}



    