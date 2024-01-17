document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navegacao a");

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        let offset = window.innerHeight / 2 - targetElement.offsetHeight / 2;

        // Ajuste específico para a seção "sobremim"
        if (targetId === "sobremim") {
          offset = window.innerHeight / 4; //ajustar esse valor conforme necessário
        }

        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth",
        });
      }
    });
  });
});
