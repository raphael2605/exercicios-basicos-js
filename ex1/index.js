/* Evento no clique

Task: Ter um quadrado azul quando clicar em um botão ele muda para amarelo */

const btnTrocaCor = document.querySelector(".btn-troca-cor")
const elementoAzul = document.querySelector(".azul")

btnTrocaCor.addEventListener("click", trocarCor);

function trocarCor() {
    elementoAzul.classList.add("amarelo")
    elementoAzul.classList.remove("azul")
}
