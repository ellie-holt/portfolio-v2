// app/api/contact/route.ts
import { sendContactEmail } from "@/lib/email/send-contact-email";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

type ContactErrorCode =
  | "INVALID_JSON"
  | "MISSING_FIELDS"
  | "INVALID_EMAIL_FORMAT"
  | "FIELD_TOO_LONG"
  | "EMAIL_SEND_FAILED";

const MAX_NAME_LENGTH = 80;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 2000;

type ContactResponse =
  | { ok: true; message: string }
  | { ok: false; error: { code: ContactErrorCode; message: string } };

function errorResponse(
  code: ContactErrorCode,
  message: string,
  status = 400,
): Response {
  return Response.json(
    {
      ok: false as const,
      error: { code, message },
    } satisfies ContactResponse,
    { status },
  );
}

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return errorResponse(
      "INVALID_JSON",
      "Request body must be valid JSON",
      400,
    );
  }

  const name = typeof data.name === "string" ? data.name.trim() : undefined;
  const email = typeof data.email === "string" ? data.email.trim() : undefined;
  const message =
    typeof data.message === "string" ? data.message.trim() : undefined;

  if (!name || !email || !message) {
    return errorResponse(
      "MISSING_FIELDS",
      "Name, email, and message are required fields",
      422,
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return errorResponse("INVALID_EMAIL_FORMAT", "Invalid email format", 422);
  }

  if (name.length > MAX_NAME_LENGTH) {
    return errorResponse(
      "FIELD_TOO_LONG",
      `Name must be at most ${MAX_NAME_LENGTH} characters`,
      422,
    );
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    return errorResponse(
      "FIELD_TOO_LONG",
      `Email must be at most ${MAX_EMAIL_LENGTH} characters`,
      422,
    );
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return errorResponse(
      "FIELD_TOO_LONG",
      `Message must be at most ${MAX_MESSAGE_LENGTH} characters`,
      422,
    );
  }

  try {
    await sendContactEmail({ name, email, message });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return errorResponse(
      "EMAIL_SEND_FAILED",
      "Failed to send contact email. Please try again later.",
      500,
    );
  }

  return Response.json({
    ok: true,
    message: "Form submission received",
  } satisfies ContactResponse);
}
