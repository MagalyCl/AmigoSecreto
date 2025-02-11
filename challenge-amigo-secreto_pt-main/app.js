//Array que irá armazenar nomes
let amigos = [];

//Função para adicionar amigos

function adicionarAmigo() {
    let adicionarNomes = document.querySelector('input');
    let nome = adicionarNomes.value;


if(nome == '') {
    alert ('O campo está vazio! Por favor insira um nome.');
} else {
    amigos.push(nome);
}

limparCampo();


}
function limparCampo() {
   let adicionarNomes = document.querySelector('input');
    adicionarNomes.value = '';
}

