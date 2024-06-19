//yeu cau 9 //
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("email-form");
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("error-message");
  const infoContainer = document.getElementById("info-container");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = emailInput.value;

    if (!isValidEmail(email)) {
      errorMessage.classList.remove("hide");
    } else {
      errorMessage.classList.add("hide");
      form.classList.add("hide");
      infoContainer.classList.remove("hide");
    }
  });

  function isValidEmail(email) {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }
});

// yeu cau 10 //
document.addEventListener("DOMContentLoaded", function () {
  const skills = document.querySelectorAll(".skill");

  skills.forEach((skill) => {
    const header = skill.querySelector(".skill-header");
    const content = skill.querySelector(".skill-content");
    const button = skill.querySelector(".toggle-button");

    header.addEventListener("mouseover", function () {
      button.style.display = "inline-block";
    });

    header.addEventListener("mouseleave", function () {
      if (content.style.display !== "block") {
        button.style.display = "none";
      }
    });

    button.addEventListener("click", function () {
      if (content.style.display === "block") {
        content.style.display = "none";
        button.textContent = "View More";
      } else {
        content.style.display = "block";
        button.textContent = "View Less";
      }
    });
  });
});
