//Array que irá armazenar nomes
let amigos = [];

//Função para adicionar amigos

function adicionarAmigo() {
    let adicionarNomes = document.querySelector('input');
    let nome = adicionarNomes.value.trim();

if(nome == '') {
    alert ('O campo está vazio! Por favor insira um nome.');
} else {
    amigos.push(nome);
}

limparCampo();
atualizarLista();
}

//Função para Atualizar Lista

function atualizarLista() {
    let lista = document.getElementById ('listaAmigos');
    lista.innerHTML = '';

    for(nomeAmigo of amigos) {
        let escolhido = document.createElement('li');
        escolhido.innerHTML = nomeAmigo;
        lista.appendChild(escolhido);
    }
}

//Função para limpar o campo
function limparCampo() {
   let adicionarNomes = document.querySelector('input');
    adicionarNomes.value = '';
}

