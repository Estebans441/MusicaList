const integrantes = document.querySelectorAll('.integrante-lista');
const integrantesDetalle = document.querySelectorAll('.integrante');

integrantes.forEach(integrante => {
  integrante.addEventListener('click', () => {
    // Remove the 'selected' class from all integrantes
    integrantesDetalle.forEach(detalle => detalle.classList.remove('selected'));
    integrantes.forEach(detalle => detalle.classList.remove('selected'));
    const detalle = document.getElementById(`${integrante.id}-detalle`);
    // Add the 'selected' class to the selected integrante
    detalle.classList.add('selected');
    integrante.classList.add('selected');
  });
});