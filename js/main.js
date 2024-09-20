function changeLanguage() {
  const language = document.getElementById("language").value;
  const welcomeText = document.getElementById("welcome-text");
  const linkedinText = document.getElementById("linkedin-text");
  const footerText = document.getElementById("footer-text");

  if (language === "en") {
    welcomeText.textContent =
      "Welcome to my portfolio! Explore my projects, skills, and experiences in test automation.";
    linkedinText.innerHTML =
      'For more details, visit my <a href="https://www.linkedin.com/in/camaralucas/" target="_blank" rel="noopener noreferrer">LinkedIn</a> profile!';
    footerText.textContent =
      "© 2024 Lucas Câmara de Souza - All rights reserved.";
  } else {
    welcomeText.textContent =
      "Bem-vindo ao meu portfólio! Explore meus projetos, habilidades e experiências na área de automação de testes.";
    linkedinText.innerHTML =
      'Para mais detalhes, acesse meu perfil no <a href="https://www.linkedin.com/in/camaralucas/" target="_blank" rel="noopener noreferrer">LinkedIn</a>!';
    footerText.textContent =
      "© 2024 Lucas Câmara de Souza - Todos os direitos reservados.";
  }
}
