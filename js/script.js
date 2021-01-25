//listener botones
document.getElementById("btnreg").addEventListener("click",registerBtn);
document.getElementById("btnlog").addEventListener("click",loginBtn);


// Variables
var contLoginRegister = document.querySelector(".login-register");
var formularioLogin = document.querySelector(".formLogin");
var formularioRegister = document.querySelector(".formRegister");
var backboxLogin = document.querySelector(".loginbox");
var backboxRegister = document.querySelector(".registerbox");



// Funcion de "Mover" El form
function registerBtn()
{
    
    if (window.innerWidth>850) {
        formularioRegister.style.display = "block";
        contLoginRegister.style.left = "460px";
        formularioLogin.style.display = "none";
        backboxRegister.style.opacity = 0;
        backboxLogin.style.opacity = 1;  
    }
    else{
        formularioRegister.style.display = "block";
        contLoginRegister.style.left = "0px";
        formularioLogin.style.display = "none";
        backboxRegister.style.display = "none";
        backboxLogin.style.display = "block";  
    }
}
function loginBtn()
{
    if (window.innerWidth>850) {
        formularioRegister.style.display = "none";
        contLoginRegister.style.left = "10px";
        formularioLogin.style.display = "block";
        backboxRegister.style.opacity = 1;
        backboxLogin.style.opacity = 0; 
    }
    else{
        formularioRegister.style.display = "none";
        contLoginRegister.style.left = "0px";
        formularioLogin.style.display = "block";
        backboxRegister.style.display = "block";
        backboxLogin.style.display = "none"; 
    }
}


//login
function login(usuario,contrasena)
{
    if (localStorage.getItem(usuario)!=null&&usuario!=""&&contrasena!="") 
    {
        if (contrasena==localStorage.getItem(usuario)) {
            alert("Inicio exitoso, bienvenido a la galeria"); 
        }
        else{
            alert("Contraseña erronea");
        }
    }
    else{
        alert("Cuenta no registrada");
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
    else{
        alert("Error en el registro");
    }
}



