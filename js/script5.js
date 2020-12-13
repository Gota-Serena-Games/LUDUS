/*
*********************************
*             CHAT              *
*********************************
*/

$("#bloco4").hide();
$("#bloco5").hide();
$("#badge").hide();


$("#chat").click(function(){
	$("#bloco4").toggle();
	$("#bloco5").hide();
})

function irConversa(){
	$("#bloco5").show();
}

function voltar(){
	$("#bloco4").show();
	$("#bloco5").hide();
}

class Msg{
	constructor(mensagem){
		this.mensagem = mensagem;
	}
}

let mensagem = new Msg();

function adicionarMensagem(){
	let message = document.getElementById("escreverMensagem").value;
	mensagem.mensagem = message;
	$("#bloco5").append('<div class="col s8 offset-s4 responseChat2 z-depth-5"><p>' + mensagem.mensagem + '</p></div>');
	document.getElementById("escreverMensagem").value = '';
}