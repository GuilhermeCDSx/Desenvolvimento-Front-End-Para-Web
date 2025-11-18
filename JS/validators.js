
export function validarFormulario() {
    limparErros();

    let valido = true;

    valido &= validarCampoVazio("nome", "Digite seu nome completo.");
    valido &= validarEmail();
    valido &= validarCPF();
    valido &= validarTelefone();
    valido &= validarCampoVazio("nascimento", "Informe sua data de nascimento.");
    valido &= validarCampoVazio("endereco", "Digite seu endereço.");
    valido &= validarCEP();
    valido &= validarCampoVazio("cidade", "Informe sua cidade.");
    valido &= validarCampoVazio("estado", "Informe seu estado.");

    return Boolean(valido);
}

// ERRO, CASO CAMPO ESTEJA VAZIO

function validarCampoVazio(id, msg) {
    const input = document.getElementById(id);
    if (!input.value.trim()) {
        mostrarErro(input, msg);
        return false;
    }
    return true;
}

// EMAIL

function validarEmail() {
    const email = document.getElementById("email");
    const exp = /\S+@\S+\.\S+/;

    if (!exp.test(email.value)) {
        mostrarErro(email, "Digite um e-mail válido.");
        return false;
    }
    return true;
}

// CPF

function validarCPF() {
    const cpfInput = document.getElementById("cpf");
    let cpf = cpfInput.value.replace(/\D/g, "");

    if (cpf.length !== 11) {
        mostrarErro(cpfInput, "CPF deve ter 11 dígitos.");
        return false;
    }

    return true; // ACEITA QUALQUER CPF
}

// TELEFONE

function validarTelefone() {
    const tel = document.getElementById("telefone");
    if (tel.value.replace(/\D/g, "").length < 11) {
        mostrarErro(tel, "Número de telefone inválido.");
        return false;
    }
    return true;
}

// CEP

function validarCEP() {
    const cep = document.getElementById("cep");
    if (cep.value.replace(/\D/g, "").length !== 8) {
        mostrarErro(cep, "CEP inválido.");
        return false;
    }
    return true;
}

function mostrarErro(input, mensagem) {
    input.style.border = "2px solid red";

    const small = document.createElement("small");
    small.classList.add("erro-msg");
    small.style.color = "red";
    small.innerText = mensagem;

    input.insertAdjacentElement("afterend", small);
}

function limparErros() {
    document.querySelectorAll(".erro-msg").forEach(e => e.remove());
    document.querySelectorAll("input").forEach(inp => inp.style.border = "");
}
