"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ApplyForm() {
  const searchParams = useSearchParams();
  const jobSlug = searchParams.get("job") || "";
  const jobId = searchParams.get("job_id") || null;

  const supabase = createClient();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    const form = event.currentTarget;
    setLoading(true);

    const formData = new FormData(form);

    const application = {
      job_id: jobId,
      job_slug: jobSlug,
      full_name: formData.get("full_name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      industry: formData.get("industry") as string,
      experience: formData.get("experience") as string,
      certifications: formData.get("certifications") as string,
      message: formData.get("message") as string,
      status: "New",
    };

    const { error } = await supabase.from("applications").insert([application]);

    setLoading(false);

    if (error) {
      console.error("Application error:", error);
      alert(error.message || "Something went wrong. Please try again.");
      return;
    }

    form.reset();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2>Application Submitted</h2>
        <p>
          Thank you for applying with Labor Sync Group. Our team will review your
          information and follow up if there is a fit.
        </p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      {jobSlug && (
        <div className="card">
          <h3>Applying For</h3>
          <p>{jobSlug.replaceAll("-", " ")}</p>
        </div>
      )}

      <input name="full_name" type="text" placeholder="Full Name" required />
      <input name="email" type="email" placeholder="Email Address" required />
      <input name="phone" type="tel" placeholder="Phone Number" required />

      <select name="industry" required>
        <option value="">Industry Interested In</option>
        <option>Healthcare</option>
        <option>Skilled Trades</option>
        <option>Manufacturing</option>
        <option>Logistics & Warehouse</option>
        <option>Construction Labor</option>
      </select>

      <input name="experience" type="text" placeholder="Years of Experience" />

      <input
        name="certifications"
        type="text"
        placeholder="Certifications / Licenses"
      />

      <textarea
        name="message"
        rows={5}
        placeholder="Tell us about your experience..."
      />

      <button type="submit" className="btn-primary form-btn" disabled={loading}>
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}