function calcularIMC (){
    // OBTENER VALOR DEL CAMPO ALTURA
    let altura = document.getElementById('altura').value;
    // OBTENER VALOR DEL CAMPO PESO
    let peso = document.getElementById('peso').value;
    console.log(altura+" y " + peso);
    // CALCULAR VALOR NUMÉRICO DEL IMC
    let imc = (peso / (altura ** 2));
    console.log(imc);
    // MOSTRAR IMC EN PANTALLA --> HOOK EN #imc_container
    let contenedor_imc = document.getElementById('imc_container');
    contenedor_imc.innerHTML = "Su IMC (Índice de Masa Corporal) es de <span>" + imc + "</span>";
    // TRADUCIR VALOR IMC A ESTADO
    if (imc < 16) {
        console.log("desnutrido");
        var atributo_src = "desnutrido.jpg";
    }
    else if (imc <= 18) {
        console.log("delgado");
        var atributo_src = "delgado.jpg";
    }
    else if (imc < 25) {
        console.log("ideal");
        var atributo_src = "ideal.jpg";
    }
    else if (imc < 31) {
        console.log("sobrepeso");
        var atributo_src = "sobrepeso.jpg";
    }
    else if (imc >= 31) {
        console.log("obeso");
        var atributo_src = "obeso.jpg";
    }
    else  {
        
    }
    // MOSTRAR IMAGEN: HOOK #image_container
    let contenedor_imagen = document.getElementById('image_container');
    contenedor_imagen.innerHTML = "<img src='" + atributo_src + "' alt='imc' >";

}