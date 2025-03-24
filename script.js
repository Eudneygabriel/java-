// Adicionar interatividade, como mostrar/ocultar seções
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  // Exemplo de interação: clicar para expandir ou recolher a seção
  sections.forEach((section) => {
    section.addEventListener("click", () => {
      section.classList.toggle("expanded");
    });
  });
});
