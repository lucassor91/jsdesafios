//let resultado = 0
function solicitarNombre(){
    let nombreIngresado = prompt("Ingresar nombre")
    alert ("El nombre Ingresado es " + nombreIngresado)
}

solicitarNombre()

//const suma = function(a,b) { return a + b }
const resta = function(a,b) { return a - b }
const division = function(a,b) {return a/b}
const multiplicar = function(a,b) {return a*b}
const promedio = function(a,b,c,d) {return a + b}

function saludar(){
        console.log("Hola Lucas")
}

let resultado
function sumar(primerNumero,segundoNumero){
     resultado = primerNumero + segundoNumero
     return resultado

    }


function calcularNotas(){
    let Nota1 = prompt("Ingresar primer Nota")
    let Nota2 = prompt("Ingresar Segunda Nota")
    let Nota3 = prompt("Ingresar Tercer Nota")
    let Nota4 = prompt("Ingresar Cuarta Nota")
    let notaFinal = sumar(Nota1,Nota2,nota3)
    alert ("Tu Suma es " + notaFinal)
}

calcularNotas()

    