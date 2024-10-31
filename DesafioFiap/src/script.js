document.getElementById("groupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o reload da página
  
    // Obtém os valores dos campos do formulário
    const name = document.getElementById("name").value;
    const rm = document.getElementById("rm").value;
  
    // Exibe um alerta com os dados cadastrados
    alert(`Informações enviadas:\nNome: ${name}\nRM: ${rm}`);
  
    // Limpa os campos do formulário
    document.getElementById("groupForm").reset();
  
    // Altera a cor do botão para verde
    const button = document.querySelector("button");
    button.classList.add("sent");
    button.textContent = "Enviado";
  });
  