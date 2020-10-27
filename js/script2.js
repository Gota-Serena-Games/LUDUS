//Essa função verifica se os campos digitados estão vazios
//Caso não estejam, ela verifica se os campos nome e email já existem no localStorage
//Se existirem um alert avisa ao usuário da existência dos dados
//Se não existirem o sistema salva os dados no localStorage
//Se algum dos campos estiver vazio um alert avisa ao usuário para preencher tais campos

function registrarUsuario(nome, email, senha){
	var nome = document.getElementById("nome").value;
	var email = document.getElementById("email").value;
	var senha = document.getElementById("senha").value;
	var user = localStorage.getItem("nome");
	var mail = localStorage.getItem("email");
					
	if(nome !== "" && email !== "" && senha !== ""){
		if(user === nome || mail === email){
			alert("Usuário já cadastrado na base de dados!");
		}
		else{
			localStorage.setItem("nome", nome);
			localStorage.setItem("email", email);
			localStorage.setItem("senha", senha);
						
			alert("Usuário registrado com  sucesso!");
						
			document.getElementById("nome").value = '';
			document.getElementById("email").value = '';
			document.getElementById("senha").value = '';
		}
	}
	else if(nome === ""){
		alert("Campo nome não pode estar vazio!");
	}
	else if(email === ""){
		alert("Campo email não pode estar vazio!");
	}
	else if(senha === ""){
		alert("Campo senha não pode estar vazio!");
	}
}
var botao2= document.getElementById("registrar");
botao2.addEventListener("click", registrarUsuario);