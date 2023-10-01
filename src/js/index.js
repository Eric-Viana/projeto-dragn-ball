const botoes = document.querySelector(".botao");

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEvrntlisner("click", () => {
   desselecionarbotao();
   desselecionarPersonagem();

        botao.classList.add("selecionar");
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarbotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado"); botaoSelecionado.classList.remove("selecionado");
}

