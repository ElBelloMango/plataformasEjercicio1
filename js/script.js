window.onload = onloadfunc();

function onloadfunc(){
    //listener botones
    document.getElementById("btnreg").addEventListener("click", registerBtn);
    document.getElementById("btnlog").addEventListener("click", loginBtn);
    document.getElementById("btnfor").addEventListener("click", forgotBtn);
    contLoginRegister = document.querySelector(".formularios");
    formularioLogin = document.querySelector(".formLogin");
    formularioRegister = document.querySelector(".formRegister");
    formularioForgot = document.querySelector(".formforgot");
    cajatraseralogin = document.querySelector(".cajatraseralogin");
    cajatraseraregistro = document.querySelector(".cajatraseraregistro");
    cajatraseraregistro = document.querySelector(".cajatraseraolvido");
    botongaleria = document.querySelector(".galeria");
}



// Variables
var contLoginRegister;
var formularioLogin;
var formularioRegister;
var formularioForgot;
var cajatraseralogin;
var cajatraseraregistro;
var cajatraseraregistro;
var botongaleria;



// Funcion de "Mover" El form
function registerBtn()
{
    formularioRegister.style.display = "block";
    contLoginRegister.style.left = "390px";
    formularioLogin.style.display = "none";
    formularioForgot.style.display = "none"
    cajatraseraregistro.style.opacity = 0;
    cajatraseralogin.style.opacity = 1;
    cajatraseraregistro.style.opacity = 1;
}
function loginBtn()
{
    formularioRegister.style.display = "none";
    formularioForgot.style.display = "none";
    contLoginRegister.style.left = "10px";
    formularioLogin.style.display = "block";
    cajatraseraregistro.style.opacity = 1;
    cajatraseraregistro.style.opacity = 1;
    cajatraseralogin.style.opacity = 0;
}
function forgotBtn() 
{
    formularioRegister.style.display = "none";
    contLoginRegister.style.left = "842px";
    formularioLogin.style.display = "none";
    formularioForgot.style.display = "block"
    cajatraseraregistro.style.opacity = 1;
    cajatraseralogin.style.opacity = 1;
    cajatraseraregistro.style.opacity = 0;
}



//login
function login(usuario,contrasena)
{
    if (localStorage.getItem(usuario)!=null&&usuario!=""&&contrasena!="") 
    {
        if (contrasena==localStorage.getItem(usuario)) {
            botongaleria.style.display = "inline-block";
            alert("Inicio exitoso, bienvenido a la galeria");
        }
        else{
            alert("Contraseña erronea");
        }
    }
}
//register
function register(correo,nombre,usuario,contrasena)
{
    if (localStorage.getItem(correo)==null&&correo!=""&&nombre!=""&&usuario!=""&&contrasena!="") 
    {
        localStorage.setItem(nombre,correo);
        localStorage.setItem(correo,usuario);
        localStorage.setItem(usuario,contrasena);
        alert("registro exitoso, ahora puedes iniciar sesion");
    }
}
// recordar
function remember(correo,nombre,usuario)
{
    if (correo!=""&&nombre!=""&&usuario!="") 
    {
        if (localStorage.getItem(nombre)==correo&&localStorage.getItem(correo)==usuario) 
        {
            alert("Su contraseña es: "+localStorage.getItem(usuario));    
        }
    }
}

