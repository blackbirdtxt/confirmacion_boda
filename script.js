
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxfYv5lJQYrWzp7CnnkxeVJ-22IG6R0FJByBDjr1i4K-_eRb7i3wrBm6srsZ7rBLoV4/exec";

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
  // Mostrar popup
  document.getElementById("popup").classList.remove("hidden");

  // Limpiar campos
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("mensaje").value = "";
})

  .catch(() => alert("Error al enviar"));
});

function cerrarPopup() {
  document.getElementById("popup").classList.add("hidden");
}
