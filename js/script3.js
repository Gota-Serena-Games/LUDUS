//Essa função verifica se os campos senha e repeteSenha estão devidamente preenchidos
//Se sim, substitui a senha existente no localStorage pela nova senha digitada
//Se não, emite um alert avisando se os campos não conferem ou se existem campos em branco que devem ser preenchidos

function alterarSenha(senha, repeteSenha){
					var senha = document.getElementById("senha").value;
					var repeteSenha = document.getElementById("repeteSenha").value;
					var novaSenha = '';
					
					if(senha !== '' && repeteSenha !== ''){
						if(senha === repeteSenha){
							novaSenha = localStorage.setItem("senha", senha);
							alert("Senha alterada com sucesso!");
							window.open("paginaLogin.html", "_self");
						}
						else{
							alert("As senhas não conferem!");
							document.getElementById("senha").value = '';
							document.getElementById("repeteSenha").value = '';
						}
					}
					else{
						alert("Todos os campos precisam estar preenchidos!");
					}
				}
				var botao = document.getElementById("botao");
				botao.addEventListener("click", alterarSenha);