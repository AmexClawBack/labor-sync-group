import { NextResponse } from "next/server";
import { Resend } from "resend";
import twilio from "twilio";

const resend = new Resend(process.env.RESEND_API_KEY);

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("NOTIFY BODY:", body);

    const emailResult = await resend.emails.send({
  from: "Labor Sync Group <onboarding@resend.dev>",
  to: process.env.ALERT_EMAIL!,
  subject: "New Form Submission - Labor Sync Group",
  html: `
    <h2>You Have a New Form Submission</h2>

    <p>A new form submission has been received on the Labor Sync Group website.</p>

    <p>Please log in to your admin dashboard to review the details.</p>

    <p>
      <a href="https://www.laborsyncgroup.com/admin">
        Open Admin Dashboard
      </a>
    </p>
  `,
});
    const smsResult = await twilioClient.messages.create({
      body: "Test notification from Labor Sync Group website.",
      from: process.env.TWILIO_PHONE_NUMBER!,
      to: process.env.ALERT_PHONE!,
    });

    console.log("SMS RESULT:", smsResult);

    return NextResponse.json({
      success: true,
      emailResult,
      smsResult,
    });
  } catch (error: any) {
    console.error("NOTIFY ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        code: error.code,
        details: error,
      },
      { status: 500 }
    );
  }
}