import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("http://localhost:3000/api/notify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "employer_request",
      company_name: "Test Company",
      contact_name: "Test Contact",
      email: "test@example.com",
      phone: "7575551234",
      industry: "Healthcare",
      positions_needed: "CNA",
      number_of_workers: "3",
      hiring_type: "Temporary",
      message: "This is a test notification.",
    }),
  });

  const data = await response.json();

  return NextResponse.json(data);
}