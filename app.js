document.addEventListener('DOMContentLoaded', () => {
    // Manejar las imágenes de la galería
    const galleryContainer = document.getElementById('gallery-container');
    for (let i = 1; i <= 122; i++) {
        const imgElement = document.createElement('img');
        imgElement.src = `./assets/galeria particulares/particulares (${i}).jpg`;
        imgElement.alt = `Imagen ${i}`;
        imgElement.className = 'gallery-img';
        imgElement.setAttribute('data-bs-toggle', 'modal');
        imgElement.setAttribute('data-bs-target', '#imageModal');
        galleryContainer.appendChild(imgElement);
    }

    const galleryContainer2 = document.getElementById('gallery-container2');
    if (galleryContainer2) {
        for (let i = 1; i <= 9; i++) {
            const imgElement = document.createElement('img');
            imgElement.src = `./assets/galeria rampa/rampa (${i}).jpg`;
            imgElement.alt = `Imagen ${i}`;
            imgElement.className = 'gallery-img';
            imgElement.setAttribute('data-bs-toggle', 'modal');
            imgElement.setAttribute('data-bs-target', '#imageModal');
            galleryContainer2.appendChild(imgElement);
        }
    }

    // Añadir evento para abrir modal al hacer clic en una imagen
    document.querySelectorAll('.gallery-img').forEach(image => {
        image.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar el comportamiento por defecto

            // Obtener la URL de la imagen
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
    const currentPage = window.location.pathname.split('/').pop(); // Obtener solo el nombre de la página actual

    navLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Manejar el evento de cierre del modal
    const imageModal = document.getElementById('imageModal');
    imageModal.addEventListener('hidden.bs.modal', () => {
        // Asegurarse de que el backdrop sea eliminado
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.remove(); // Eliminar el backdrop manualmente
        }

        // Asegurarse de que la clase modal-open sea eliminada del body
        document.body.classList.remove('modal-open');

        // Reestablecer el overflow del body para mostrar la barra de desplazamiento
        document.body.style.overflow = '';
    });
});
