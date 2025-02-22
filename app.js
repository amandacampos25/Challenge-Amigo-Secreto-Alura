//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let amigosDisponiveis = [];

function adicionarAmigo () {
    let nomeAmigo = document.querySelector('input').value; {
        //console.log('O botão foi clicado');
    };

    if (nomeAmigo === '') {
        alert('Insira um nome válido!')
        return;
        };
    
    if (amigos.includes(nomeAmigo)) {
         alert('Este amigo já está na lista!');
        return;
        };

    amigos.push(nomeAmigo);
    amigosDisponiveis = [...amigos];

    atualizarLista();
    document.querySelector('input').value = '';
};

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
        }
    );
};

function sortearAmigo() {
    if (amigos.length < 3) {
        alert ('Insira, no minimo, três nomes para realizar o sorteio');
        return;
    };

    if (amigosDisponiveis.length === 0) {
        alert('Todos os amigos já foram sorteados');
        return;
    }

    let nomeSorteado = Math.floor(Math.random() * amigosDisponiveis.length);
    let amigoSorteado = amigosDisponiveis[nomeSorteado];

    amigosDisponiveis.splice(nomeSorteado, 1);

    let resultadoDaLista = document.getElementById('resultado');
    resultadoDaLista.innerHTML = `<li>Seu amigo secreto é: ${amigoSorteado}!</li>`;
};