function validarFormulario() {
  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("Edad").value);
  const mensaje = document.getElementById("mensaje").value;

  // Verificar el campo nombre
  if (nombre.length > 200) {
    mostrarError("El nombre no puede tener más de 200 caracteres.");
    return false;
  }

  // Verificar el campo edad
  if (isNaN(edad) || edad < 1 || edad > 100) {
    mostrarError("La edad debe ser un número válido entre 1 y 100.");
    return false;
  }

  // Verificar el cuerpo del mensaje
  if (mensaje.length > 500) {
    mostrarError("El mensaje no puede tener más de 500000 caracteres.");
    return false;
  }

  // Si todo está bien, enviar el formulario
  return true;
}

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
  const errorDiv = document.getElementById("error-message");
  errorDiv.innerText = mensaje;
  errorDiv.style.display = "block";

  // Ocultar el mensaje de error después de 5 segundos
  setTimeout(() => {
    errorDiv.style.display = "none";
  }, 5000);
}