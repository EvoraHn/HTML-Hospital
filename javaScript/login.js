

function validacionDeLogin()
  {
   
    const login =
    [
      {
        nombreDeUsuario: document.getElementsByName("email")[0].value,
        contraseña: document.getElementsByName("password")[0].value,

      }
    ];
    //alert(login[0].nombreDeUsuario);


    if(login[0].nombreDeUsuario === "jgurrerofugon500@gmail.com"  && login[0].contraseña === "12345" )
    {
      alert("Acceso permitido");
      return true;
    }
    else
    {
      alert("Acceso denegado");
      return false;
    }
  };