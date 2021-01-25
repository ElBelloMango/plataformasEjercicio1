//listener boton register
document.getElementById("btnreg").addEventListener("click",registerBtn);
document.getElementById("btnlog").addEventListener("click",loginBtn);

// Variables
var contLoginRegister = document.querySelector(".login-register");
var formularioLogin = document.querySelector(".formLogin");
var formularioRegister = document.querySelector(".formRegister");
var backboxLogin = document.querySelector(".loginbox");
var backboxRegister = document.querySelector(".registerbox");

//Funcion responsiva
function pagchange() {
    if (window.innerWidth > 850) {
        backboxRegister.style.display = "block";
        backboxLogin.style.display = "block";    
    }

}


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



