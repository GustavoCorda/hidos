document.addEventListener('DOMContentLoaded', () => {
    // Escuchar eventos de clic en las imágenes para abrir el modal
    document.querySelectorAll('.gallery-img').forEach(image => {
        image.addEventListener('click', function(event) {
            // Evitar el comportamiento por defecto (seguir el enlace)
            event.preventDefault();

            // Obtener la URL de la imagen desde el atributo 'src'
            const imageUrl = this.getAttribute('src');
            
            // Establecer la imagen en el modal
            const modalImage = document.getElementById('modalImage');
            modalImage.src = imageUrl;
            
            // Abrir el modal usando Bootstrap
            const modal = new bootstrap.Modal(document.getElementById('imageModal'));
            modal.show();
        });
    });

    // Añadir la clase 'active' a los enlaces del menú de navegación
    const navLinks = document.querySelectorAll('nav ul a');
    const currentPage = window.location.pathname;

    navLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Asegurarse de que el modal se cierra correctamente y se elimina el backdrop
    const closeButton = document.querySelector('.btn-close');
    closeButton.addEventListener('click', () => {
        const modal = new bootstrap.Modal(document.getElementById('imageModal'));
        modal.hide(); // Cerrar el modal explícitamente
    });

    // Escuchar el evento de cierre del modal para eliminar el backdrop
    const imageModal = document.getElementById('imageModal');
    imageModal.addEventListener('hidden.bs.modal', () => {
        // Esto asegura que el backdrop sea eliminado después de que el modal se cierre
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.remove(); // Eliminar el backdrop manualmente
        }
    });
});
