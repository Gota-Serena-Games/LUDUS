//Scripts sistema LUDUS

//Essa função verifica se nome e senha do usuario estão registradas no localStorage
//Caso sim, o sistema efetua login. Caso não, exibe um alert avisando o erro

function efetuarLogin(nome, senha){
	var nome = document.getElementById("inputLogin").value;
	var senha = document.getElementById("inputSenha").value;
	var user = localStorage.getItem("nome");
	var pass = localStorage.getItem("senha");
				
	if(user === nome && pass === senha){
		window.open("boasVindas.html", "_self");
	}
	else{
		alert("Erro ao efetuar login! Nome de usuário e senha não conferem!");
	}
}
var botao = document.getElementById("botaoEntrar");
botao.addEventListener("click", efetuarLogin);
				




