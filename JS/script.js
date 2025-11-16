import { homeTemplate, projetoTemplate, cadastroTemplate } from "./templates.js";
import { configurarFormulario } from "./cadastro.js";

const app = document.querySelector("#app");

/* ---------------- SPA ---------------- */

export function navegar(pagina) {
    if (pagina === "home") {
        app.innerHTML = homeTemplate;
        return;
    }

    if (pagina === "projeto") {
        app.innerHTML = projetoTemplate;
        return;
    }

    if (pagina === "cadastro") {
        app.innerHTML = cadastroTemplate;
        configurarFormulario();
        return;
    }
}

/* torna a função acessível no HTML */
window.navegar = navegar;

/* Carrega página inicial assim que abre o site */
navegar("home");

/* ---------------- MENU MOBILE ---------------- */
window.toggleMenu = function() {
    const menu = document.querySelector("#navMenu");
    menu.classList.toggle("ativo");
};
