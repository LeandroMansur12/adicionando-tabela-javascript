

var botao = document.querySelector(".btn");


botao.addEventListener("click", function(){

	var form=document.getElementById("adcionar-formulario");
	form.textContent;


	console.log(form);

var cliente =  obterConteudeForm(form)

	console.log(cliente);

	var clienteTr = criarTr(cliente);


	var tabela = document.querySelector(".tabelaCompleta");


	tabela.appendChild(clienteTr);




});


function obterConteudeForm(form)
{
	var cliente = {

		nome: form.nome.value,
		sobreNome: form.sobreNome.value,
		cpf: form.cpf.value
	}

	return cliente;
}


function criarTr(cliente)
{

	var clienteTr = document.createElement("tr");

	clienteTr.appendChild(criarTd(cliente.nome));
	clienteTr.appendChild(criarTd(cliente.sobreNome));
	clienteTr.appendChild(criarTd(cliente.cpf));


	return clienteTr;

}


function criarTd(dado)
{

	var clienteTd = document.createElement("td");
	clienteTd.textContent= dado;


	return clienteTd;



}