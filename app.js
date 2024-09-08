document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {
        nombre: formData.get('nombre'),
        email: formData.get('email'),
        telefono: formData.get('telefono'),
        mensaje: formData.get('mensaje'),
    };

    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Correo enviado con éxito.');
        } else {
            alert('Hubo un error al enviar el correo.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al enviar el correo.');
    }
});