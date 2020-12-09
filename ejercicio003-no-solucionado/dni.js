
const LETRAS_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";
var nuevo_elemento_div = document.createElement("div.resultado");
nuevo_elemento_div.innerHTML="";
var contenido_nuevo_elemento = nuevo_elemento_div.innerHTML;
console.log(contenido_nuevo_elemento);
function prepararNumero (letra, numero)
{
    let dni_num = '';//inicio a cadena vacía
        
        console.log("TIPO NUMERO = " +typeof numero);
        dni_num = letra+numero;

    return dni_num;
}

function mostrarResultado (letra_resultado)
{
    //CREAR UN NUEVO ELEMENTO
    //var nuevo_elemento_div = document.createElement("div.resultado");
    //nuevo_elemento_div.innerHTML="Tu letra es " + letra_resultado;
    //BIEN let caja_resultado = document.getElementById('caja_resultado');
    //BIEN caja_resultado.innerHTML="Tu letra es " + letra_resultado;
    //Y AÑADIRLO AL HTML
    //var etiqueta_body = document.getElementById("cuerpo");
    //etiqueta_body.appendChild(nuevo_elemento_div);
    if (contenido_nuevo_elemento="") {
        var etiqueta_body = document.getElementById("cuerpo");
        etiqueta_body.appendChild(nuevo_elemento_div);
        console.log(contenido_nuevo_elemento);
        
    } 
    else {
        nuevo_elemento_div.innerHTML="";
        var etiqueta_body = document.getElementById("cuerpo");
        etiqueta_body.appendChild(nuevo_elemento_div);
        console.log(contenido_nuevo_elemento);
    }



}

function calcularLetraDni ()
{
    console.log ("Ha introducido un dni");
    //tenemos que obtener el dni introducido
    var dni = document.getElementById("dni").value;
    console.log ("Ha introducido " + dni);
    //ejemplo de parseInt 
    let dni_numerico = parseInt(dni);
    console.log ("Ha introducido " + dni_numerico +  " " + typeof dni_numerico);
    let el_sel = document.querySelector('[name="prefijo"]:checked');
    console.log ("Letra =  " + el_sel.value);
    let dni_final = prepararNumero (el_sel.value, dni);
    var resto = (dni_final % 23);
    console.log ("Resto " + resto);
    let letradni = LETRAS_DNI.charAt(resto);
    console.log ("Tu letra es " + letradni);
    mostrarResultado (letradni);

}
// console.log ("Ha introducido " + dni);//AMBITO
// console.log ("Ha introducido " + LETRAS_DNI);