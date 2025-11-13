document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formularioid");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío automático

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const comentarios = document.getElementById("comentarios").value.trim();

    const telRegex = /^[0-9+\s-]{7,15}$/;

    // --- VALIDACIONES ---

    // Validar nombre
    if (nombre === "") {
      alert("Por favor, ingresa tu nombre.");
      document.getElementById("nombre").focus();
      return;
    }

    // Validar correo vacío o formato incorrecto
    if (email === "") {
      alert("Por favor, ingresa tu correo electrónico.");
      document.getElementById("email").focus();
      return;
    } else if (email.indexOf("@") === -1) {
      alert("El correo debe contener '@'.");
      document.getElementById("email").focus();
      return;
    } else if (
      !(
        email.endsWith(".com") ||
        email.endsWith(".mx") ||
        email.endsWith(".org") ||
        email.endsWith(".edu")
      )
    ) {
      alert("El correo debe terminar en '.com', '.mx', '.org' o '.edu'.");
      document.getElementById("email").focus();
      return;
    }

    // Validar teléfono (opcional)
    if (telefono !== "" && !telRegex.test(telefono)) {
      alert("El número de teléfono no es válido.");
      document.getElementById("telefono").focus();
      return;
    }

    // Validar comentarios
    if (comentarios === "") {
      alert("Por favor, ingresa tus comentarios o solicitud.");
      document.getElementById("comentarios").focus();
      return;
    }

    // --- SI TODO ESTÁ BIEN ---
    alert("¡Formulario enviado con éxito!");
    form.reset();
  });
});
