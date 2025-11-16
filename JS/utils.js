export function mostrarAlerta(msg, tipo = "erro") {
    const alerta = document.querySelector("#alerta");
    alerta.style.display = "block";
    alerta.textContent = msg;

    alerta.className = "alert " + tipo;
}

export function validarCPF(cpf) {
    return /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/.test(cpf);
}

export function validarTelefone(telefone) {
    return /^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(telefone);
}

export function validarCEP(cep) {
    return /^[0-9]{5}-[0-9]{3}$/.test(cep);
}
