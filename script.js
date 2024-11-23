const form = document.querySelector("form");
const bodyTable = document.querySelector("tbody");
let res = document.getElementById("res");
res.textContent = ""; // Limpa a mensagem de erro

const contato = [];
const telefone = [];

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que a página recarregue

  const nomeAgenda = document.getElementById("name").value.trim();
  const telAgenda = document.getElementById("phoneNumber").value.trim();

  // Verifica se os campos foram preenchidos
  if (nomeAgenda === "" || telAgenda === "") {
    res.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  // Verifica se o contato ou número já foi adicionado
  if (contato.includes(nomeAgenda) || telefone.includes(telAgenda)) {
    res.textContent = "Contato ou número já adicionado";
    return;
  }

  // Adiciona o novo contato e telefone
  contato.push(nomeAgenda);
  telefone.push(telAgenda);

  // Cria a nova linha na tabela
  const novaLinha = document.createElement('tr');
  novaLinha.innerHTML = `
    <td>${nomeAgenda}</td>
    <td>${telAgenda}</td>
    <td>
      <button class="btn btn-danger btn-sm delete-btn">Excluir</button>
    </td>
  `;

  // Adiciona a linha na tabela
  bodyTable.appendChild(novaLinha);

  // Adiciona o evento de exclusão ao botão
  novaLinha.querySelector(".delete-btn").addEventListener("click", function () {
    // Remove a linha ao clicar no botão
    novaLinha.remove();

    // Também remove o contato e o telefone do array
    const index = contato.indexOf(nomeAgenda);
    if (index !== -1) {
      contato.splice(index, 1);
      telefone.splice(index, 1);
    }
  });

  // Limpa o formulário após adicionar
  form.reset();
});
