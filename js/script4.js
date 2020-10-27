//Essa função verifica se o campo email não está vazio
//Se não, e se o email estiver registrado no localStorage, abre a página de redefinição de senha
//Caso o email não exista na base de dados emite um alert informando que o email não se encontra registrado no localStorage
//Se o campo email estiver vazio, emite um alert informando que o campo precisa estar preenchido


function enviarLink(email){
	var email = document.getElementById("email").value;
	var mail = localStorage.getItem("email");
					
	if(email !== ''){
		if(email === mail){
			window.open("redefinicao2.html", "_self");
		}
		else{
			alert("O email digitado não se encontra na base de dados!");
			document.getElementById("email").value = '';
		}
	}
	else{
		alert("É necessário um email válido para envio do link de redefinição!");
	}
}
var botao = document.getElementById("btn");
botao.addEventListener("click", enviarLink);