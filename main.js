let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click", function() {
    if (contador == 0) {
        enlaces.push.className = ('enlaces');
        contador = 1;

    } else {

    }
})

window.addEventListener('resize', function() {
    if (screen.width > 750) {
        contador = 0;
    }
})