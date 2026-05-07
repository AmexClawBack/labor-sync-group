"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/index";

export default function EmployerRequestForm() {
  const supabase = createClient();

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setLoading(true);

    const employerRequest = {
      company_name: formData.get("company_name") as string,
      contact_name: formData.get("contact_name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      industry: formData.get("industry") as string,
      positions_needed: formData.get("positions_needed") as string,
      number_of_workers: formData.get("number_of_workers") as string,
      hiring_type: formData.get("hiring_type") as string,
      message: formData.get("message") as string,
      status: "New",
    };

    const { error } = await supabase
      .from("employer_requests")
      .insert([employerRequest]);

    setLoading(false);

    if (error) {
      console.error("Employer request error:", error);
      alert(error.message || "Something went wrong.");
      return;
    }

    form.reset();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2>Request Submitted</h2>
        <p>
          Thank you. Labor Sync Group received your staffing request and will
          follow up shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <input name="company_name" type="text" placeholder="Company Name" required />

      <input name="contact_name" type="text" placeholder="Contact Name" required />

      <input name="email" type="email" placeholder="Email Address" required />

      <input name="phone" type="tel" placeholder="Phone Number" required />

      <select name="industry" required>
        <option value="">Select Industry</option>
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

      <select name="hiring_type" required>
        <option value="">Hiring Type</option>
        <option>Temporary</option>
        <option>Temp-to-Hire</option>
        <option>Direct Hire</option>
      </select>

      <textarea
        name="message"
        rows={5}
        placeholder="Tell us about your staffing needs..."
      />

      <button type="submit" className="btn-primary form-btn" disabled={loading}>
        {loading ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}