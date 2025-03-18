//Menu responsive


var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces")

    //Click abrir
    btnMenuOpen.addEventListener("click", function(){
        menuResponsive.classList.add("active");
    });

    // Click cerrar
    btnMenuClose.addEventListener("click", function(){
        menuResponsive.classList.remove("active");
    });

    //Cerrar menu con enlaces
    enlaces.addEventListener("click", function(){
        menuResponsive.style.transitionDelay = "0.5s"
        menuResponsive.classList.remove("active");
    })