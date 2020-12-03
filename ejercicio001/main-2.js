// EJERCICIO: hacer página web que permite introducir la edad al usuario
// y le informe de si es mayor o menor de edad
// PRIMERO HACER LA PARTE ESTÁTICA: DEFINIR HTML Y CSS
// SEGUNDO HACER LA PARTE DINÁMICA: JS
const MAYORIA_DE_EDAD = 18;
function informarMayoriaEdad() {
    console.log("PULSADO");
    // recoger el valor de la caja de texto
    var caja_edad = document.getElementById("edad");
    console.log(caja_edad.id);
    var edad = caja_edad.value;
    console.log(edad);

    // si mayor de 18 informar que es mayor de edad

    if (edad >= MAYORIA_DE_EDAD) {
        document.getElementById('resultado').innerHTML = "Eres mayor de edad " + "(" + edad + " años)";
    }
    // si menor de 18 informar que es menor de edad
    else {
        document.getElementById('resultado').innerHTML = "Eres menor de edad " + "(" + edad + " años)";
    }
}


