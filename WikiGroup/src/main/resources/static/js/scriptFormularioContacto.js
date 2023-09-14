function validarFormulario() {
  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("Edad").value);
  const correo = document.getElementById("correo").value;
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("mensaje").value;

  // Verificar el campo "nombre"
  if (nombre.length > 100) {
    mostrarError("El nombre no puede tener más de 100 caracteres.");
    return false;
  }

  // Verificar el campo edad
  if (isNaN(edad) || edad < 1 || edad > 100) {
    mostrarError("La edad debe ser un número válido entre 1 y 100.");
    return false;
  }

  // Verificar el campo correo
  if (!esCorreoValido(correo)) {
    mostrarError("El correo electrónico no es válido.");
    return false;
  }

  // Verificar el campo "asunto"
  if (asunto.length > 100) {
    mostrarError("El asunto no puede tener más de 100 caracteres.");
    return false;
  }

  // Verificar el cuerpo del mensaje
  if (mensaje.length > 500) {
    mostrarError("El mensaje no puede tener más de 500 caracteres.");
    return false;
  }

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

// Función para verificar si el correo electrónico es válido
function esCorreoValido(correo) {
  const expresionRegularCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expresionRegularCorreo.test(correo);
}