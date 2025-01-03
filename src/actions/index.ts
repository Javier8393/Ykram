import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      message: z.string(),
      recaptchaToken: z.string(),
    }),
    handler: async ({ name, email, message, recaptchaToken }) => {
       // Enviar solicitud a Google reCAPTCHA
      const recaptchaResponse = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: String(process.env.RECAPTCHA_SECRET_KEY || ""),
            response: String(recaptchaToken),
          }),
        }
      );
    
      // Respuesta de reCAPTCHA
      const recaptchaResult = await recaptchaResponse.json();
      console.log("Resultado de reCAPTCHA:", recaptchaResult);
    
      if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
        throw new Error("Validación de reCAPTCHA fallida.");
      }
    
      // Continuar con el envío de correo
      const { data, error } = await resend.emails.send({
        from: "contacto@ykramstudio.com",
        to: "gr8393@gmail.com",
        subject: "Nuevo mensaje recibido",
        html: `<p><strong>Nombre: </strong>${name}</p>
               <p><strong>Email: </strong>${email}</p>
               <p><strong>Mensaje: </strong>${message}</p>`,
      });
    
      if (error) {
        console.error("Error al enviar el correo:", error);
        throw new Error("No se pudo enviar el correo.");
      }
    
      return { success: true, message: "Correo enviado correctamente." };
    }
    
  }),
};
