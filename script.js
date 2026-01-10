
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyxSCub4Ro0nOdPJzyA7PunoWhD0phxWVV7zEfFCYA-JAR-1Q-G6c_HwzJp2dEs7-xSXQ/exec";

document.getElementById("enviar").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !apellido) {
    alert("Por favor escribe tu nombre y apellido.");
    return;
  }

  fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify({ nombre, apellido, mensaje })
  })
  .then(() => {
    document.getElementById("popup").classList.remove("hidden");
  })
  .catch(() => alert("Error al enviar"));
});

function cerrarPopup() {
  document.getElementById("popup").classList.add("hidden");
}
