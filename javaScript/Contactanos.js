function validarContacto(){
    const contact =
    [{
        nombreCliente: document.getElementsByName("nombre")[0].value,
        correoCliente: document.getElementsByName("Correo")[0].value,
        asuntoCliente: document.getElementsByName("Asunto")[0].value,
        telefonoCliente: document.getElementsByName("Telefono")[0].value,
        mensajeCliente: document.getElementsByName("mensaje")[0].value,
    }]

    alert(`Formulario enviado satisfactoriamente ${contact[0].nombreCliente}`);
    return true;
    
}