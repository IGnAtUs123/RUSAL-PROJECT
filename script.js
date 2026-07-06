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
