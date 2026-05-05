const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
const cookieBanner = document.querySelector("#cookie-banner");
const acceptCookies = document.querySelector("#accept-cookies");
const requestForm = document.querySelector("#request-form");
const formNote = document.querySelector("#form-note");

menuButton?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteNav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

if (localStorage.getItem("aligrupp_cookie_notice") === "accepted") {
  cookieBanner.hidden = true;
}

acceptCookies?.addEventListener("click", () => {
  localStorage.setItem("aligrupp_cookie_notice", "accepted");
  cookieBanner.hidden = true;
});

requestForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(requestForm);
  const body = [
    `Имя: ${data.get("name") || ""}`,
    `Контакт: ${data.get("contact") || ""}`,
    "",
    `Задача: ${data.get("message") || ""}`,
  ].join("\n");

  formNote.textContent = "Откроется почтовый клиент для отправки заявки на ali.group.work@yandex.ru.";
  window.location.href = `mailto:ali.group.work@yandex.ru?subject=${encodeURIComponent("Заявка на расчет поставки техники")}&body=${encodeURIComponent(body)}`;
});
