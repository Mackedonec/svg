const cow = document.querySelector(".cow");

cow.addEventListener("click", function () {
  cow.classList.toggle("activ");
});

const svgImg = document.querySelectorAll(".svg-img");
const alert = document.querySelectorAll(".alert");
const btnDanger = document.querySelector(".btn-1");
const btnPrimary = document.querySelector(".btn-2");
const btnSuccess = document.querySelector(".btn-3");
const alertDanger = document.querySelector(".alert-danger");
const alertPrimary = document.querySelector(".alert-primary");
const alertSuccess = document.querySelector(".alert-success");
const ufoRed = document.querySelector(".ufo-red");
const ufoBlue = document.querySelector(".ufo-blue");
const ufoGreen = document.querySelector(".ufo-green");

const removTwo = function () {
  return svgImg.forEach(function (i) {
    i.classList.remove("activ");
  });
};

const removOne = function () {
  return alert.forEach(function (i) {
    i.classList.remove("activ");
  });
};

btnDanger.addEventListener("click", function () {
  if (alertDanger.classList.contains("activ")) {
    removOne();
  } else {
    removOne();
    alertDanger.classList.toggle("activ");
  }
  if (ufoRed.classList.contains("activ")) {
    removTwo();
  } else {
    removTwo();
    ufoRed.classList.toggle("activ");
  }
});

btnPrimary.addEventListener("click", function () {
  if (alertPrimary.classList.contains("activ")) {
    removOne();
  } else {
    removOne();
    alertPrimary.classList.toggle("activ");
  }
  if (ufoBlue.classList.contains("activ")) {
    removTwo();
  } else {
    removTwo();
    ufoBlue.classList.toggle("activ");
  }
});

btnSuccess.addEventListener("click", function () {
  if (alertSuccess.classList.contains("activ")) {
    removOne();
  } else {
    removOne();
    alertSuccess.classList.toggle("activ");
  }
  if (ufoGreen.classList.contains("activ")) {
    removTwo();
  } else {
    removTwo();
    ufoGreen.classList.toggle("activ");
  }
});
