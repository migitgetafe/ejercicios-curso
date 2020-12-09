// EJERCICIO: hacer página web que permite hallar la letra del DNI dado el número

// Creo función para calcular letra DNI principal
function calcularLetraDNI() {
    // recoger el valor de la caja de texto
    var caja_numero_dni = document.getElementById("numerodni");
    var numero_dni = caja_numero_dni.value;
    console.log(numero_dni);

    // Calculo DNI/23
    var division = numero_dni/23; //este numero no se usa
    // Hallo el resto 
    var resto = numero_dni % 23;
    console.log(resto);
    // Comparamos
    if (resto == 0) {
        var letra_clave="T";
    }
    else if (resto == 1) {
        var letra_clave="R";
    }
    else if (resto == 2) {
        var letra_clave="W";
    }
    else if (resto == 3) {
        var letra_clave="A";
    }
    else if (resto == 4) {
        var letra_clave="G";
    }
    else if (resto == 5) {
        var letra_clave="M";
    }
    else if (resto == 6) {
        var letra_clave="Y";
    }
    else if (resto == 7) {
        var letra_clave="F";
    }
    else if (resto == 8) {
        var letra_clave="P";
    }
    else if (resto == 9) {
        var letra_clave="D";
    }
    else if (resto == 10) {
        var letra_clave="X";
    }
    else if (resto == 11) {
        var letra_clave="B";
    }
    else if (resto == 12) {
        var letra_clave="N";
    }
    else if (resto == 13) {
        var letra_clave="J";
    }
    else if (resto == 14) {
        var letra_clave="Z";
    }
    else if (resto == 15) {
        var letra_clave="S";
    }
    else if (resto == 16) {
        var letra_clave="Q";
    }
    else if (resto == 17) {
        var letra_clave="V";
    }
    else if (resto == 18) {
        var letra_clave="H";
    }
    else if (resto == 19) {
        var letra_clave="L";
    }
    else if (resto == 20) {
        var letra_clave="C";
    }
    else if (resto == 21) {
        var letra_clave="K";
    }
    else if (resto == 22) {
        var letra_clave="E";
    }
    else {
        var letra_clave="DNI incorrecto";
        //
    }
    // Muestro resultado en pantalla
    document.getElementById('resultado').innerHTML = "Tu DNI completo es " + numero_dni + "<span>" + letra_clave + "</span>" ;
}


