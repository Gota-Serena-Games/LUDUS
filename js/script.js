//Usando localStorage para armazenar dados da página

localStorage.setItem('usuario', 'layonfigueiroa');
localStorage.setItem('senha', '12345');

var logon, logout;

function efetuarLogin(){
	var login = document.getElementById("inputLogin").value;
	var senha = document.getElementById("inputSenha").value;
	var user = localStorage.getItem("usuario");
	var pass = localStorage.getItem("senha");

	if(login != '' && senha != ''){
		if(user === login && pass === senha){
			logon = window.open('index.html', '_self');
		}
		else{
			alert("Erro ao efetuar login!");
			logon = window.open('paginaLogin.html', '_self');
		}
	}
	else{
		alert("Digite um login e senha válidos!");
	}
}
var botaoLogin = document.getElementById("botaoEntrar");
botaoLogin.addEventListener("click", efetuarLogin);

