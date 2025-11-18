// PREENCHIMENTO AUTOMÁTICO DO CADASTRO

export function aplicarMascaras() {
    const cpf = document.getElementById("cpf");
    const tel = document.getElementById("telefone");
    const cep = document.getElementById("cep");

    if (cpf) cpf.addEventListener("input", mascaraCPF);
    if (tel) tel.addEventListener("input", mascaraTelefone);
    if (cep) cep.addEventListener("input", mascaraCEP);
}

// CPF

function mascaraCPF(e) {
    let v = e.target.value.replace(/\D/g, "");

    if (v.length > 11) v = v.slice(0, 11);

    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    e.target.value = v;
}

// TELEFONE

function mascaraTelefone(e) {
    let v = e.target.value.replace(/\D/g, "");

    if (v.length > 11) v = v.slice(0, 11);

    v = v.replace(/(\d{2})(\d)/, "($1) $2");
    v = v.replace(/(\d{5})(\d)/, "$1-$2");

    e.target.value = v;
}

// CEP

function mascaraCEP(e) {
    let v = e.target.value.replace(/\D/g, "");

    if (v.length > 8) v = v.slice(0, 8);

    v = v.replace(/(\d{5})(\d)/, "$1-$2");

    e.target.value = v;
}

// SCROLL DA PÁGINA

export function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;

    const navbar = document.querySelector("header");
    const offset = navbar ? navbar.offsetHeight + 20 : 80;

    const top = el.offsetTop - offset;

    window.scrollTo({
        top,
        behavior: "smooth"
    });
}