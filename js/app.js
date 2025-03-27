//Menu responsive de 650px

var btnMenuOpen = document.getElementById("btnMenuOpen"),
  btnMenuClose = document.getElementById("btnMenuClose"),
  menuResponsive = document.getElementById("menuBar"),
  enlaces = document.getElementById("enlaces");

//Click abrir
btnMenuOpen.addEventListener("click", function () {
  menuResponsive.classList.add("active");
});

// Click cerrar
btnMenuClose.addEventListener("click", function () {
  menuResponsive.classList.remove("active");
});

//Cerrar menu con enlaces
enlaces.addEventListener("click", function () {
  menuResponsive.style.transitionDelay = "0.5s";
  menuResponsive.classList.remove("active");
});

//Slider de productos
var contenedor = document.querySelector(".slider"),
  btnIzquierdo = document.getElementById("btn-izquierdo"),
  btnDerecho = document.getElementById("btn-derecho");

//Evento Boton derecho
btnDerecho.addEventListener("click", function () {
  contenedor.scrollLeft += contenedor.offsetWidth;
});

//Evento Boton izquierdo
btnIzquierdo.addEventListener("click", function () {
  contenedor.scrollLeft -= contenedor.offsetWidth;
});

//Validacion de formulario
var formulario = document.getElementById("formulario");

function validar(e) {
  var inputNombre = document.getElementById("nombre"),
    inputEmail = document.getElementById("email"),
    inputComments = document.getElementById("comentarios"),
    alertSuccess = document.getElementById("alertSuccess"),
    alertError = document.getElementById("alertError");

  if (
    inputNombre.value == 0 ||
    inputEmail.value == 0 ||
    inputComments.value == 0
  ) {
    e.preventDefault();
    alertError.classList.remove("hide");
    alertError.classList.add("show");

    setTimeout(() => {
      alertError.classList.remove("show");
      alertError.classList.add("hide");

    }, 2000);



  } else {
    e.preventDefault();
    alertSuccess.classList.remove("hide");
    alertSuccess.classList.add("show");


    setTimeout(() => {
      alertSuccess.classList.remove("show");
      alertSuccess.classList.add("hide");

    }, 2000);



    inputNombre.value = "";
    inputEmail.value = "";
    inputComments.value = "";
  }
}

formulario.addEventListener("submit", validar);
