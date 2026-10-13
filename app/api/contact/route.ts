import { NextResponse } from "next/server";

type Payload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { firstName, lastName, email, phone, message } = body;
  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // TODO: forward the enquiry to contact@brandthink.app using an email provider
  // (e.g. Resend, SendGrid or Nodemailer) or save it to a CRM/database.
  console.log("New contact enquiry:", { firstName, lastName, email, phone, message });

  return NextResponse.json({ ok: true });
}
