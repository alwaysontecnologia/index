// CONFIGURE AQUI O WHATSAPP DA EMPRESA
// Exemplo: "5511999999999" = Brasil + DDD + número
const WHATSAPP_NUMBER = "5511999999999";

const DEFAULT_MESSAGE = "Olá, vim pelo site da Always On Tecnologia e quero falar sobre um projeto.";

function buildWhatsAppUrl(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function updateWhatsAppLinks() {
  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = buildWhatsAppUrl();
  });
}

function setupMenu() {
  const button = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");

  if (!button || !links) return;

  button.addEventListener("click", () => {
    const isOpen = links.classList.toggle("active");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("active");
      button.setAttribute("aria-expanded", "false");
    });
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const projectType = document.getElementById("projectType").value;
    const message = document.getElementById("message").value.trim();

    const text = `Olá, meu nome é ${name}. Quero falar sobre: ${projectType}. ${message}`;
    window.open(buildWhatsAppUrl(text), "_blank", "noopener");
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

updateWhatsAppLinks();
setupMenu();
setupContactForm();
