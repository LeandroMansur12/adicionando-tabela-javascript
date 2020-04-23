

var botao = document.querySelector(".btn");

botao.addEventListener("click", function(){


var text = document.getElementById("frase").value;

var p = document.createElement("p");
p.innerHTML=text;


document.querySelector(".conteudo").appendChild(p);

frase.reset();

});
