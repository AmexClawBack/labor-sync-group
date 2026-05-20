"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/index";

export default function EmployerRequestForm() {
  const supabase = createClient();

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (loading) return;

    const form = event.currentTarget;

    const formData = new FormData(form);

    setLoading(true);

    /* =======================================================
       FORM VALUES
    ======================================================= */

    const company_name = formData.get(
      "company_name"
    ) as string;

    const contact_name = formData.get(
      "contact_name"
    ) as string;

    const email = formData.get("email") as string;

    const phone = formData.get("phone") as string;

    const industry = formData.get(
      "industry"
    ) as string;

    const positions_needed = formData.get(
      "positions_needed"
    ) as string;

    const number_of_workers = formData.get(
      "number_of_workers"
    ) as string;

    const hiring_type = formData.get(
      "hiring_type"
    ) as string;

    const message = formData.get(
      "message"
    ) as string;

    /* =======================================================
       EMPLOYER REQUEST OBJECT
    ======================================================= */

    const employerRequest = {
      company_name,

      contact_name,

      email,

      phone,

      industry,

      positions_needed,

      number_of_workers,

      hiring_type,

      message,

      status: "New",
    };

    /* =======================================================
       SAVE TO SUPABASE
    ======================================================= */

    const { error } = await supabase
      .from("employer_requests")
      .insert([employerRequest]);

    if (error) {
      setLoading(false);

      console.error(
        "Employer request error:",
        error
      );

      alert(
        error.message || "Something went wrong."
      );

      return;
    }

    /* =======================================================
       EMAIL + SMS ALERTS
    ======================================================= */

    try {
      await fetch("/api/notify", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          type: "employer_request",

          company_name,

          contact_name,

          email,

          phone,

          industry,

          positions_needed,

          number_of_workers,

          hiring_type,

          message,
        }),
      });
    } catch (notifyError) {
      console.error(
        "Notification error:",
        notifyError
      );
    }

    /* =======================================================
       SUCCESS STATE
    ======================================================= */

    setLoading(false);

    form.reset();

    setSubmitted(true);
  }

  /* =======================================================
     SUCCESS SCREEN
  ======================================================= */

  if (submitted) {
    return (
      <div
        className="card"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2>Request Submitted</h2>

        <p>
          Thank you. Labor Sync Group
          received your staffing request
          and will follow up shortly.
        </p>
      </div>
    );
  }

  /* =======================================================
     EMPLOYER REQUEST FORM
  ======================================================= */

  return (
    <form
      className="lead-form"
      onSubmit={handleSubmit}
    >
      <input
        name="company_name"
        type="text"
        placeholder="Company Name"
        required
      />

      <input
        name="contact_name"
        type="text"
        placeholder="Contact Name"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
      />

      <input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        required
      />

      <select name="industry" required>
        <option value="">
          Select Industry
        </option>

        <option>Healthcare</option>

        <option>Skilled Trades</option>

        <option>Manufacturing</option>

        <option>Logistics & Warehouse</option>

        <option>Construction Labor</option>
      </select>

      <input
        name="positions_needed"
        type="text"
        placeholder="Positions Needed"
        required
      />

      <input
        name="number_of_workers"
        type="text"
        placeholder="Number of Workers Needed"
        required
      />

      <select
        name="hiring_type"
        required
      >
        <option value="">
          Hiring Type
        </option>

        <option>Temporary</option>

        <option>Temp-to-Hire</option>

        <option>Direct Hire</option>
      </select>

      <textarea
        name="message"
        rows={5}
        placeholder="Tell us about your staffing needs..."
      />

      <button
        type="submit"
        className="btn-primary form-btn"
        disabled={loading}
      >
        {loading
          ? "Submitting..."
          : "Submit Request"}
      </button>
    </form>
  );
}