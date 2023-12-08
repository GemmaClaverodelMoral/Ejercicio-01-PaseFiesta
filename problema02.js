function resolverProblema02() {
    var gratis = true;

    function agregarContenido(mensaje) {
        // Crear un nuevo elemento de párrafo
        var parrafo = document.createElement("p");
        // Agregar el mensaje como contenido de texto al párrafo
        parrafo.innerHTML = mensaje;
        // Agregar el párrafo al final del cuerpo del documento
        document.body.appendChild(parrafo);
    };
    function validarCliente () {
        setTimeout(function() { //para que cargue la imagen antes que los prompts
            let mensaje = "";
            let edad = prompt("Qual es tu edad?: ");
            if (edad >= 18) {
                    let hora = prompt("Que hora es?: ");
                    if (hora >= 2 && hora < 7 && gratis == true) {
                        mensaje = `Muy de buenas tio: Tienes ${edad} y entras gratis. Son las ${hora}`;
                        gratis = false;
                    } else {
                        mensaje = `Tienes ${edad} y puedes entrar. Son las ${hora} y tienes que pagar entrada`;
                    }
            
            } else {
                mensaje = `Que pena tio, crece un poquito. Solo tienes ${edad}`;
            };
            alert(mensaje);
            agregarContenido(mensaje);
        },100);
    };
    // validamos la entrada a la fiesta para 3 personas
    validarCliente();
    validarCliente();
    validarCliente();            
}