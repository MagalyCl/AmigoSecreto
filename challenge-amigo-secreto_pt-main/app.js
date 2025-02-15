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
    atualizarLista();
    limparCampo();
}

}

//Função para limpar campo
function limparCampo() {
    let adicionarNomes = document.querySelector('input');
     adicionarNomes.value = '';
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

//Função para sortear amigos

function sortearAmigo() {
    if (amigos.length == 0){
        alert('A lista de amigos está vazia. Por favor insira os nomes para o sorteio!');
    } else {
        let nomeAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoEscolhido = amigos[nomeAleatorio];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `A pessoa sorteada é : ${amigoEscolhido}`;
    }
    
}

function limparLista() {
    amigos = [];
    atualizarLista();
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}



