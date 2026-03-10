function login(){

let usuario = document.getElementById("usuario").value;
let password = document.getElementById("password").value;

if(usuario === "admin" && password === "1234"){
    alert("Bienvenido " + usuario);
    window.location.href="inicio.html";
}else{
    document.getElementById("error").innerText="Usuario o contraseña incorrectos";
}

}