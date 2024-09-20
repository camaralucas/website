function changeLanguage() {
  const language = document.getElementById("language").value;
  const welcomeText = document.getElementById("welcome-text");
  const linkedinText = document.getElementById("linkedin-text");
  const footerText = document.getElementById("footer-text");

  switch (language) {
    case "en":
      welcomeText.textContent =
        "Welcome to my portfolio! Explore my projects, skills, and experiences in test automation.";
      linkedinText.innerHTML =
        'For more details, visit my <a href="https://www.linkedin.com/in/camaralucas/" target="_blank" rel="noopener noreferrer">LinkedIn</a> profile!';
      footerText.textContent =
        "© 2024 Lucas Câmara de Souza - All rights reserved.";
      break;
    case "pt":
      welcomeText.textContent =
        "Bem-vindo ao meu portfólio! Explore meus projetos, habilidades e experiências na área de automação de testes.";
      linkedinText.innerHTML =
        'Para mais detalhes, acesse meu perfil no <a href="https://www.linkedin.com/in/camaralucas/" target="_blank" rel="noopener noreferrer">LinkedIn</a>!';
      footerText.textContent =
        "© 2024 Lucas Câmara de Souza - Todos os direitos reservados.";
      break;
    case "es":
      welcomeText.textContent =
        "¡Bienvenido a mi portafolio! Explora mis proyectos, habilidades y experiencias en el área de automatización de pruebas.";
      linkedinText.innerHTML =
        'Para más detalles, visita mi perfil de <a href="https://www.linkedin.com/in/camaralucas/" target="_blank" rel="noopener noreferrer">LinkedIn</a>!';
      footerText.textContent =
        "© 2024 Lucas Câmara de Souza - Todos los derechos reservados.";
      break;
    case "de":
      welcomeText.textContent =
        "Willkommen in meinem Portfolio! Entdecken Sie meine Projekte, Fähigkeiten und Erfahrungen im Bereich Testautomatisierung.";
      linkedinText.innerHTML =
        'Für weitere Details besuchen Sie mein <a href="https://www.linkedin.com/in/camaralucas/" target="_blank" rel="noopener noreferrer">LinkedIn</a>-Profil!';
      footerText.textContent =
        "© 2024 Lucas Câmara de Souza - Alle Rechte vorbehalten.";
      break;
    case "fr":
      welcomeText.textContent =
        "Bienvenue dans mon portfolio ! Explorez mes projets, compétences et expériences dans le domaine de l'automatisation des tests.";
      linkedinText.innerHTML =
        'Pour plus de détails, visitez mon profil <a href="https://www.linkedin.com/in/camaralucas/" target="_blank" rel="noopener noreferrer">LinkedIn</a> !';
      footerText.textContent =
        "© 2024 Lucas Câmara de Souza - Tous droits réservés.";
      break;
    case "ja":
      welcomeText.textContent =
        "ポートフォリオへようこそ！テスト自動化分野における私のプロジェクト、スキル、経験をご覧ください。";
      linkedinText.innerHTML =
        '詳細については、私の<a href="https://www.linkedin.com/in/camaralucas/" target="_blank" rel="noopener noreferrer">LinkedIn</a>プロフィールをご覧ください！';
      footerText.textContent = "© 2024 Lucas Câmara de Souza - 全著作権所有。";
      break;
    case "zh":
      welcomeText.textContent =
        "欢迎来到我的作品集！探索我在测试自动化领域的项目、技能和经验。";
      linkedinText.innerHTML =
        '有关更多详细信息，请访问我的 <a href="https://www.linkedin.com/in/camaralucas/" target="_blank" rel="noopener noreferrer">LinkedIn</a> 个人资料！';
      footerText.textContent = "© 2024 Lucas Câmara de Souza - 版权所有。";
      break;
    case "ru":
      welcomeText.textContent =
        "Добро пожаловать в мое портфолио! Ознакомьтесь с моими проектами, навыками и опытом в области автоматизации тестирования.";
      linkedinText.innerHTML =
        'Для получения дополнительной информации посетите мой профиль в <a href="https://www.linkedin.com/in/camaralucas/" target="_blank" rel="noopener noreferrer">LinkedIn</a>!';
      footerText.textContent =
        "© 2024 Lucas Câmara de Souza - Все права защищены.";
      break;
  }
}
