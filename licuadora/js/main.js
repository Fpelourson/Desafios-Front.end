var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound")
var bottonLicuadora = document.getElementById("blender-button-sound")
var licuadora = document.getElementById("blender")

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendida";
        hacerBrr();
        licuadora.classList.add("active");
        /* console.log("me prendiste"); */
    } else {
        estadoLicuadora = "apagada"
        hacerBrr();
        licuadora.classList.remove("active")
        /* console.log("me apagaste"); */
    }
}

function hacerBrr() {
    if( sonidoLicuadora.paused ) {
        bottonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        bottonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}