//Haz tú validación en javascript acá


const boton_enviar = document.querySelector(".formcontato__botao");
var input_nombre = document.querySelector("#nombre");
var input_email = document.querySelector("#email");
var input_asunto = document.querySelector("#asunto");
var input_mensaje = document.querySelector("#mensagem");




boton_enviar.addEventListener("click", function() {

    if (input_nombre, input_asunto, input_email, input_mensaje != "") {


        if (input_nombre.value == " " || input_nombre.value == "" || input_nombre.length > 51) {
            alert("El campo nombre no puede estar vacio ni contener mas de 50 caracteres");
        } else {
            console.log(input_nombre.value);
        }


        //var validar = new RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)
        //| input_email.value != validar



        if (input_email.value == " " || input_email.value == "") {
            alert("El campo e-mail no puede estar vacio y debe contener '@'");
        } else {
            console.log(input_email.value);
        }


        if (input_asunto.value == " " || input_asunto.value == "" || input_asunto.length > 51) {
            alert("El campo asunto no puede estar vacio ni contener mas de 50 caracteres");
        } else {
            console.log(input_asunto.value);
        }

        if (input_mensaje.value == " " || input_mensaje.value == "" || input_mensaje.length > 301) {
            alert("El campo asunto no puede estar vacio ni contener mas de 50 caracteres");
        } else {
            console.log(input_mensaje.value);
        }
    } else { alert("Debe completar los campos antes de enviar") };










    //console.log(input_email.value)
    //console.log(input_asunto.value)
    //console.log(input_mensaje.value)
    //alert("Mensaje enviado con exito!");



})