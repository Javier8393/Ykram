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
      resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'gr8393@gmail.com',
        subject: 'Nuevo mensaje recibido',
        html: `<p>name: <strong>${name}</strong>!</p>
        <p>email: <strong>${email}</strong>!</p>
        <p>message: <strong>${message}</strong>!</p>
        `
      });
      return `Exito!`
    }
  })
}