// EJERCICIO: hacer página web que permite introducir la edad al usuario
        // y le informe de si es mayor o menor de edad
        // PRIMERO HACER LA PARTE ESTÁTICA: DEFINIR HTML Y CSS
        // SEGUNDO HACER LA PARTE DINÁMICA: JS
        var edad = prompt("Dime tu edad");
        document.write( edad );
        if (edad >= 18) {
            var mensaje = "Eres mayor de edad";
            document.getElementById('edad').innerHTML = mensaje + " " + "(" + edad+ " años)";
            console.log(mensaje);
        }
        else {
            var mensaje ="Eres MENOR de edad";
            document.getElementById('edad').innerHTML = mensaje + " " + "(" + edad+ " años)";
            console.log(mensaje);
        }

