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
    
