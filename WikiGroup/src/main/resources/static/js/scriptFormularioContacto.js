document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    if (validarFormulario()) {
        const formData = {
            nombreUsuario: document.getElementById("nombre").value,
            correo: document.getElementById("correo").value,
            edad: parseInt(document.getElementById("Edad").value),
            asunto: document.getElementById("asunto").value,
            mensaje: document.getElementById("mensaje").value,
        };

        fetch("http://localhost:8080/musicalist/api/contacto/enviar", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    // La solicitud se realizó con éxito
                } else {
                    mostrarError("Error al enviar la solicitud");
                }
            })
            .then((data) => {
                // La respuesta del servidor (éxito)
                mostrarMensajeExitoso(data);
                mostrarMensajeExitoso("Formulario registrado!")
            })
            .catch((error) => {
                // Captura y maneja los errores de la solicitud
                console.error(error);
                mostrarError("Error al enviar la solicitud");
            });
        mostrarMensajeExitoso("Formulario registrado!")
    }
});

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

function mostrarMensajeExitoso(mensaje) {
    const successDiv = document.getElementById("success-message");
    successDiv.innerText = mensaje;
    successDiv.style.display = "block";

    // Ocultar el mensaje de éxito después de 5 segundos
    setTimeout(() => {
        successDiv.style.display = "none";
    }, 5000);
}

// Función para verificar si el correo electrónico es válido
function esCorreoValido(correo) {
    const expresionRegularCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegularCorreo.test(correo);
}