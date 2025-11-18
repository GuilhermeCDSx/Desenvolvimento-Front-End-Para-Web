import { aplicarMascaras, scrollToSection } from "./utils.js";
import { validarFormulario } from "./validators.js";

document.addEventListener("DOMContentLoaded", () => {
    aplicarMascaras();
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const id = e.target.getAttribute("href").replace("#", "");
        scrollToSection(id);
    });
});

document.getElementById("formVoluntario").addEventListener("submit", e => {
    e.preventDefault();

    if (validarFormulario()) {
        alert("Cadastro enviado com sucesso!");
        e.target.reset();
    }
});

import { renderVoluntarios } from "../JS/template.js";

document.addEventListener("DOMContentLoaded", () => {
    aplicarMascaras();
    renderVoluntarios();  // <-- AQUI
});