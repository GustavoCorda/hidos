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

    // Escuchar el evento de cierre del modal
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

        document.addEventListener('DOMContentLoaded', () => {
            // Seleccionar el contenedor de la galería
            const galleryContainer2 = document.getElementById('gallery-container2');
            
            // Verificar que exista el contenedor antes de intentar llenarlo
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
        
            // Agregar evento para abrir modal al hacer clic en una imagen
            document.addEventListener('click', (event) => {
                if (event.target.classList.contains('gallery-img')) {
                    const imageUrl = event.target.src;
                    const modalImage = document.getElementById('modalImage');
                    modalImage.src = imageUrl;
                }
            });
        });
        