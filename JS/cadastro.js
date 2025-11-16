import { mostrarAlerta, validarCPF, validarTelefone, validarCEP } from "./utils.js";

export function configurarFormulario() {
    const form = document.querySelector("#formCadastro");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const cpf = form.cpf.value.trim();
        const telefone = form.telefone.value.trim();
        const cep = form.cep.value.trim();

        if (!nome) return mostrarAlerta("Preencha o nome.");
        if (!email) return mostrarAlerta("Preencha o e-mail.");
        if (!validarCPF(cpf)) return mostrarAlerta("CPF inválido.");
        if (!validarTelefone(telefone)) return mostrarAlerta("Telefone inválido.");
        if (!validarCEP(cep)) return mostrarAlerta("CEP inválido.");

        mostrarAlerta("Cadastro realizado com sucesso!", "sucesso");
        form.reset();
    });
}
