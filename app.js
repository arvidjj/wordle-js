let intentos = 6;
let palabra = "APPLE";

let intento = 0;
let palabraEscrita = "";
let posLetraActual = 0;

const teclas = document.querySelectorAll(".tecla");

function clicEnTecla(event) {
    const letra = event.target.textContent;
    escribirLetra(letra);
}

document.addEventListener("keydown", keyPressHandler);
function keyPressHandler(event) {
    const letraPresionada = event.key.toUpperCase();
    teclas.forEach((tecla) => {
        if (tecla.textContent.toUpperCase() === letraPresionada) {
            escribirLetra(letraPresionada);
        }
    });
}

teclas.forEach((tecla) => {
    tecla.addEventListener("click", clicEnTecla);
});

function escribirLetra(letra) {
    console.log(letra);
    if (!(posLetraActual >= 5)) {
        let letrasEnFila = filas[intento].children;
        letrasEnFila[posLetraActual].textContent = letra;
        posLetraActual++;
    } else {
        console.log("EQUIVOCADO!")
        chequearPalabraEscrita();
        intento++;
        posLetraActual = 0;
    }
}

function chequearPalabraEscrita() {
    palabraEscrita = "";
    let letrasEnFila = Array.from(filas[intento].children);
    letrasEnFila.forEach((l) => {
        palabraEscrita += l.textContent;
    });
    console.log(palabraEscrita)
}


const filas = document.querySelectorAll(".boardFila");
