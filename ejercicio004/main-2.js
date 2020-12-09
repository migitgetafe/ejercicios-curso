// IMAGEN SIN HOOK
function calcularIMC (){
    // OBTENER VALOR DEL CAMPO ALTURA
    let altura = document.getElementById('altura').value;
    // OBTENER VALOR DEL CAMPO PESO
    let peso = document.getElementById('peso').value;
    console.log(altura+" y " + peso);
    // CALCULAR VALOR NUMÉRICO DEL IMC
    let imc = (peso / (altura ** 2));
    console.log(imc);
    
    // TRADUCIR VALOR IMC A ESTADO
    if (imc < 16) {
        var denominacion_imc = "Desnutrido";
        var atributo_src = "desnutrido.jpg";
    }
    else if (imc <= 18) {
        var denominacion_imc = "Delgado";
        var atributo_src = "delgado.jpg";
    }
    else if (imc < 25) {
        var denominacion_imc = "Ideal";
        var atributo_src = "ideal.jpg";
    }
    else if (imc < 31) {
        var denominacion_imc = "Sobrepeso";
        var atributo_src = "sobrepeso.jpg";
    }
    else if (imc >= 31) {
        var denominacion_imc = "Obeso";
        var atributo_src = "obeso.jpg";
    }
    else  {
        
    }
    // MOSTRAR IMC EN PANTALLA --> HOOK EN #imc_container
    let contenedor_imc = document.getElementById('imc_container');
    contenedor_imc.innerHTML = "Su IMC (Índice de Masa Corporal) es de " + imc + ",es decir: <span>" + denominacion_imc + "</span>";
    //SELECCIONO LA IMAGEN (EXISTA O NO)
    var imagen = document.querySelector("img");
    //SI LA IMAGEN AUN NO EXISTE....
    if (imagen==null) { 
        imagen = document.createElement("img"); // CREAMOS <IMG>
        imagen.classList.add("imagen_imc"); // AÑADIMOS ATRIBUTO SRC
        var contenedor_imagen = document.getElementById('image_container'); // SELECCIONO EL CONTENEDOR DE LA IMAGEN
        contenedor_imagen.appendChild(imagen); //AÑADO IMAGEN AL CONTENEDOR DE LA IMAGEN
    }
    
    imagen.setAttribute('src',atributo_src); // CAMBIO EL ATRIBUTO SRC DE LA IMAGEN
}