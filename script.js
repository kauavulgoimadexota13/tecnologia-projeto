document.addEventListener("DOMContentLoaded", () => {
    // Adicionar rolagem suave aos links do menu
    const links = document.querySelectorAll("header nav ul li a");
  
    links.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  
    // Validação simples de formulário
    const form = document.querySelector("form");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();
  
      if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos!");
        return;
      }
  
      if (!validateEmail(email)) {
        alert("Por favor, insira um email válido!");
        return;
      }
  
      alert("Formulário enviado com sucesso!");
      form.reset();
    });
  
    // Função para validar email
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });
  