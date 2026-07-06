document
  .getElementById("incidentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(emailValue)) {
      emailInput.style.borderColor = "red";

      $("#dialog-text")
        .text("Пожалуйста, введите корректный email.")
        .css("font-size", "42px");

      $("#dialog-message").dialog({
        modal: true,
        buttons: {
          OK: function () {
            $(this).dialog("close");
          },
        },
      });
    } else {
      emailInput.style.borderColor = "green";

      $("#dialog-text")
        .text("Инцидент успешно отправлен.")
        .css("font-size", "42px");

      $("#dialog-message").dialog({
        modal: true,
        buttons: {
          OK: function () {
            $(this).dialog("close");
          },
        },
      });
    }
  });

const statusEl = document.getElementById("status");
const statuses = document.querySelectorAll(".status");

statusEl.addEventListener("change", function () {
  statuses.forEach((stat) => {
    stat.classList.remove("active-status");
    stat.classList.add("status");
  });
  switch (this.value) {
    case "Отключение":
      document.getElementById("off").classList.remove("status");
      document.getElementById("off").classList.add("active-status");
      break;
    case "Ремонт":
      document.getElementById("repair").classList.remove("status");
      document.getElementById("repair").classList.add("active-status");
      break;
    case "Выход из ремонта":
      document.getElementById("outOfRepair").classList.remove("status");
      document.getElementById("outOfRepair").classList.add("active-status");
      break;
    case "Обжиг":
      document.getElementById("firing").classList.remove("status");
      document.getElementById("firing").classList.add("active-status");
      break;
    case "Пуск":
      document.getElementById("on").classList.remove("status");
      document.getElementById("on").classList.add("active-status");
      break;
  }
});
