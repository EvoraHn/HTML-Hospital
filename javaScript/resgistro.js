function registro()
{
    
    const usuario =
    [
        {
            nombre: document.getElementsByName("name")[0].value,
            correo: document.getElementsByName("email")[0].value,
            contraseña1: document.getElementsByName("password1")[0].value,
            contraseña2: document.getElementsByName("password2")[0].value,

        }
    ];
    if(usuario[0].contraseña1 === usuario[0].contraseña2)
    {
        alert(`Te has registrado correctamente ${usuario[0].nombre}`);
        return true;
       
    }
    else{
        alert(`Verifica que la contraseña y la confirmacion sean iguales`)
        return false;
    }
   
}