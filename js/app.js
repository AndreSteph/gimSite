const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__bottom");

// form
const form = document.getElementById("contact");
const clientName = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const msg = document.getElementById("message");
const overlay = document.querySelector(".overlay");
const crossForm = document.querySelector(".cross-form");

// image
const overlayImg = document.querySelector(".overlay--img");
const crossImg = document.querySelector(".cross-img");
const btnImg = document.querySelectorAll(".btn--img");

function toggleNav() {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav__bottom--toggle");
  });
}

function imgOverlay() {
  btnImg.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      imgsrc = e.target.parentElement.previousElementSibling.src;
      overlayImg.children[1].children[0].src = imgsrc;
      overlayImg.style.display = "flex";
      disableScroll();
    });
  });
}

function formSubmit() {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!clientName.value) {
      clientName.nextElementSibling.style.display = "inline-block";
    }
    if (!email.value) {
      email.nextElementSibling.style.display = "inline-block";
    }
    if (!number.value) {
      number.nextElementSibling.style.display = "inline-block";
    } else {
      overlay.style.display = "flex";
      disableScroll();
    }

    setTimeout(function () {
      clientName.nextElementSibling.style.display = "none";
      email.nextElementSibling.style.display = "none";
      number.nextElementSibling.style.display = "none";
    }, 3000);
  });
}

function disableOverlayForm() {
  crossForm.addEventListener("click", function () {
    overlay.style.display = "none";
    clientName.value = "";
    email.value = "";
    number.value = "";
    msg.value = "";
    enableScroll();
  });
}

function disableOverlayImg() {
  crossImg.addEventListener("click", function () {
    overlayImg.style.display = "none";
    enableScroll();
  });
}

function enableScroll() {
  document.body.style.overflow = "visible";
}

function disableScroll() {
  document.body.style.overflow = "hidden";
}

document.addEventListener("DOMContentLoaded", function () {
  toggleNav();
  formSubmit();
  disableOverlayForm();
  disableOverlayImg();
  imgOverlay();
});
