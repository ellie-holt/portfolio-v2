import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type SendContactEmailParams = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail({
  name,
  email,
  message,
}: SendContactEmailParams) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing Resend API key");
  }

  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL;

  if (!from || !to) {
    throw new Error("Missing email address environment variables");
  }

  const subject = `New contact message from ${name}`;
  const text = `You have received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      text,
      replyTo: email,
    });
    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error("Error sending contact email:", error);
    throw new Error("Failed to send contact email");
  }
}
