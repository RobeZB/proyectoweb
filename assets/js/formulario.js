function leerXML() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion(this);
    }
  };
  xhr.open("GET", "https://robezb.github.io/proyectoweb/assets/xml/registrados.xml", true);
  xhr.send();    
}


function miFuncion(xml) {
  var i;
  var usrNom;
  var usrPsw;
  var usuario = [];
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("usuario");
  var esCorrecto = false; //Esta variable comprobará si el usuario y la contraseñas puesta en el formulario esta en el XML
  var nomForm = document.forms["formularioLogin"]["Usuario"].value; //Guarda el nombre que se ha puesto en el formulario
  var passForm = document.forms["formularioLogin"]["Contraseña"].value; //Guarda la contraseña que se ha puesto en el formulario

  for (i = 0; i <x.length; i++) { 
    // leo las etiquetas que me interesan del objeto
    usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
    usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;

    //Compruebo si el usuario y la contraseña puesta en el formulario coincide con
    //alguno de los campos del XML
    if ((nomForm == usrNom) && (passForm == usrPsw)) {
        esCorrecto = true;
    }

  }

  //Si el nombre y la contraseña es correcto lo guarda en el sessionStorage y devuelve a la pagina
  if (esCorrecto == true) {
      sessionStorage.setItem("nomUser", document.forms["formularioLogin"]["Usuario"].value);
    window.location.href = 'index.html';
  } else {
      //Si no es correcto mando una alerta
      window.alert("Nombre y/o contraseña incorrectos.");
  }
  // muestro en consola el array de usuarios registrados
}

function cargarUsuario() {
    if (sessionStorage.getItem("nomUser") !== null) {
      $("#login").css("display","none");
      $("#logout").css("display","initial");
      document.getElementById('perfil').innerHTML = "Usuario- " + sessionStorage.getItem("nomUser");
}
}

function cerrarSesion() {
  sessionStorage.removeItem("nomUser");
  $("#logout").css("display","none");
  $("#login").css("display","initial");
}