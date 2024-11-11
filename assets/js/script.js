// Download do Currículo
function downloadFile() {
  const link = document.createElement("a");
  link.href = "Documentos/curriculo.pdf";
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
     container.style.boxShadow = "0 0 3px #1e90ff"
     container.style.borderRadius = "10px"
  });

  container.addEventListener("mouseleave", () => {
    img.style.filter = "brightness(1)";
    plusIcon.style.display = "none";
     container.style.boxShadow = "none"
  });
});


const contactButton = document.querySelector(".contact-button").addEventListener("click", openModal);

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