document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  let operator = "";
  let value = "";

  document.querySelectorAll(".cal-btns").forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      value += buttonText;
      display.value = value;
    });
  });

  document.querySelectorAll(".operator").forEach((button) => {
    button.addEventListener("click", () => {
      if (value !== "") {
        operator += button.textContent;
        value += " " + operator + " ";
        display.value = value;
      }
    });
  });

  document.getElementById("calculate").addEventListener("click", () => {
    try {
      display.value = eval(value);
      value = display.value.toString();
      operator = "";
    } catch (e) {
      console.error(e);
      alert("Invalid operation");
    }
  });

  document.getElementById("clear").addEventListener("click", () => {
    value = "";
    operator = "";
    display.value = "";
  });
});

function toggleHide() {
  const mobNav = document.querySelector(".mob__nav");
  const computedStyle = window.getComputedStyle(mobNav);
  const top = computedStyle.getPropertyValue("top");
  const bodyOverflow = document.body.style.overflow;
  const menuIcon = document.querySelector(".menu");

  if (top === "0px" || top === "-1000px") {
    mobNav.style.top = top === "0px" ? "-1000px" : "0px";
    document.body.style.overflow = top === "0px" ? bodyOverflow : "hidden";
    menuIcon.src = top === "0px" ? "../assets/menu.svg" : "../assets/close.svg";
  } else {
    mobNav.style.top = "-1000px";
    document.body.style.overflow = bodyOverflow;
    menuIcon.src = "assets/menu.svg";
  }
}
