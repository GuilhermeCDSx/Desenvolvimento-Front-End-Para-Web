const voluntarios = [
  { nome: "Marcelo", cidade: "Curitiba" },
  { nome: "Guilherme", cidade: "Colombo" },
  { nome: "Matheus", cidade: "Campo Largo"},
  { nome: "Ryan", cidade: "Goiânia"}
];

function templateVoluntario(v) {
  return `
    <div class="card">
      <h3>${v.nome}</h3>
      <p>${v.cidade}</p>
    </div>
  `;
}

export function renderVoluntarios() {
  const container = document.getElementById("cardsVoluntarios");
  container.innerHTML = voluntarios.map(templateVoluntario).join("");
}