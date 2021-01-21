var cadena = window.location.search.substr(1).split('&');
var usuario = cadena[0].split('=')[1];
var contrasena = cadena[1].split('=')[1];
document.write("Hola "+usuario+" de contraseña "+contrasena);




