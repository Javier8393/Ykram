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
      message: z.string()
    }),
    handler: async ({name, email, message}) => {
      const { data, error} = await resend.emails.send({
        from: 'contacto@ykramstudio.com',
        to: 'ykramstudio@gmail.com',
        subject: 'Nuevo mensaje recibido',
        html: `<p><strong>Nombre: </strong>${name}</p>
        <p><strong>Email: </strong>${email}</p>
        <p><strong>Mensaje: </strong>${message}</p>
        `
      });

    }
  })
}