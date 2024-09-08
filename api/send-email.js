// send-email.js

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {
    if (req.method === 'POST') {
        const { nombre, email, telefono, mensaje } = req.body;

        const msg = {
            to: 'tavocorda@gmail.com', // Tu dirección de correo electrónico
            from: 'tavocorda@gmail.com', // Una dirección verificada en SendGrid
            replyTo: email, // Dirección del usuario para responder
            subject: 'Nuevo mensaje de contacto',
            text: `Nombre: ${nombre}\nCorreo: ${email}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`,
        };

        try {
            await sgMail.send(msg);
            return res.status(200).json({ success: true, message: 'Correo enviado' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: 'Error al enviar correo' });
        }
    } else {
        return res.status(405).json({ message: 'Método no permitido' });
    }
}
