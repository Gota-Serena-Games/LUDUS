//Usando localStorage para armazenar dados da página

var logon, logout;

function efetuarLogin(){
	var login = document.getElementById("inputLogin").value;
	var senha = document.getElementById("inputSenha").value;
	var user = localStorage.getItem("usuario");
	var password = localStorage.getItem("senha");

	if(user === login && password === senha){
		logon = window.open('index.html', '_self');
	}
	else{
		alert("Erro ao efetuar login!");
		logon = window.open('paginaLogin.html', '_self');
	}
}

function efetuarLogout(){
	logout = window.open('paginaLogin.html', '_self');
	logout.close();
}

function registrarUsuario(){
	var user = document.getElementById("nome").value;
	if(user != null){
		localStorage.setItem("login", user);
	}
	else{
		alert("digite um nome válido!");
	}
}

var botaoLogin = document.getElementById("botaoEntrar");
botaoLogin.addEventListener("click", efetuarLogin);

var botaoLogout = document.getElementById("logout");
botaoLogout.addEventListener("click", efetuarLogout);

var botaoRegistrar = document.getElementById("botao");
botaoRegistrar.addEventListener("click", registrarUsuario);
