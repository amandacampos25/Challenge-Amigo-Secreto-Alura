//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];


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
}