
const SCRIPT_URL = "PEGA_AQUI_TU_URL_DE_GOOGLE_SCRIPT";

let confirmado = false;

document.getElementById("confirmar").addEventListener("click", () => {
    confirmado = true;
    alert("Asistencia confirmada ✅");
});

document.getElementById("enviar").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim();
    if (!nombre || !confirmado) {
        alert("Por favor escribe tu nombre y confirma asistencia.");
        return;
    }

    fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({ nombre }),
    })
    .then(() => {
        document.getElementById("popup").classList.remove("hidden");
    })
    .catch(() => alert("Error al enviar respuesta"));
});

function cerrarPopup() {
    document.getElementById("popup").classList.add("hidden");
}
