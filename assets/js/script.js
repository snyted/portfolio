// Download do Currículo
function downloadFile() {
  const link = document.createElement("a");
  link.href = "assets/docs/curriculo.pdf";
  link.download = "Currículo.pdf";
  link.click();
}

// Portfolio Hover nas imagens
const containers = document.querySelectorAll(".img-hover");

containers.forEach((container) => {
  const img = container.querySelector(".img-project");

  // Cria o elemento de + e adiciona ao container
  const plusIcon = document.createElement("a");
  plusIcon.href = container.getAttribute("data-link");
  plusIcon.classList.add("plus-icon");
  plusIcon.textContent = "+";
  plusIcon.target = "_blank";
  container.appendChild(plusIcon);

  // Adiciona o evento de hover
  container.addEventListener("mouseenter", () => {
    img.style.filter = "brightness(0.3)";
    plusIcon.style.display = "block";
    container.style.boxShadow = "0 0 3px #1e90ff";
    container.style.borderRadius = "10px";
  });

  container.addEventListener("mouseleave", () => {
    img.style.filter = "brightness(1)";
    plusIcon.style.display = "none";
    container.style.boxShadow = "none";
  });
});

const contactButton = document
  .querySelector(".contact-button")
  .addEventListener("click", openModal);

function openModal() {
  // Abre o modal
  const contato = document.querySelector("#contato-modal");
  const closeModal = document.querySelector(".btn-close");
  contato.style.display = "flex";
  // Fecha o modal
  closeModal.addEventListener("click", () => {
    contato.style.display = "none";
  });
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const secondSection = document.querySelector(".tecnologias").offsetTop;
  if (document.body.scrollTop > secondSection || document.documentElement.scrollTop > secondSection) {
    document.querySelector(".back-to-top").style.display = "block";
  } else {
    document.querySelector(".back-to-top").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contatoForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Mensagem enviada!",
          text: "Obrigado por entrar em contato.",
          confirmButtonColor: "#1e90ff"
        });
        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Erro ao enviar",
          text: "Tente novamente mais tarde.",
          confirmButtonColor: "#ff4d4f"
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro inesperado",
        text: "Verifique sua conexão e tente de novo.",
      });
    }
  });
});