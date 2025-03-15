// Captura de elemntos do html
const inputAmigo = document.getElementById('amigo');
const botaoAdicionar = document.querySelector('.button-add');
const listaAmigos = document.getElementById('listaAmigos');
const botaoSortear = document.querySelector('.button-draw');
const listaResultado = document.getElementById('resultado');

// Variáveis
let amigos = [];
let sorteioRealizado = false;

// Funções
function adicionarAmigo() {
    const nome = inputAmigo.value.trim();

    if (nome !== '' && !amigos.includes(nome)) { 
        amigos.push(nome);
        inputAmigo.value = ''; 
        atualizarListaAmigos();
        sorteioRealizado = false;
    }
}

function atualizarListaAmigos() {
    listaAmigos.innerHTML = ''; 

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortear(amigos) {
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    return amigos[indiceSorteado];
}

function sortearUmAmigo() {
    if (amigos.length < 3) {
        alert("Adicione pelo menos 3 amigos para realizar o sorteio!");
        return
    }
    const amigoSorteado = sortear(amigos);
    exibirResultado(amigoSorteado);
    sorteioRealizado = true;
}
function exibirResultado(amigoSorteado){
    listaResultado.innerHTML= ''
    const li = document.createElement('li');
    li.textContent = `O Amigo Sorteado Foi: ${amigoSorteado}`
    listaResultado.appendChild(li)
}
// lista de eventos
botaoAdicionar.addEventListener('click', adicionarAmigo);
botaoSortear.addEventListener('click', sortearUmAmigo);
