"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/index";

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
    const formData = new FormData(form);

    setLoading(true);

    const full_name = formData.get("full_name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const industry = formData.get("industry") as string;
    const experience = formData.get("experience") as string;
    const certifications = formData.get("certifications") as string;
    const message = formData.get("message") as string;

    const resume = formData.get("resume") as File | null;

    let resumePath = "";
    let resumeFileName = "";

    if (resume && resume.size > 0) {
      resumeFileName = resume.name;

      const safeFileName = resume.name.replace(/[^a-zA-Z0-9.-]/g, "-");
      const filePath = `applications/${Date.now()}-${safeFileName}`;

      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(filePath, resume);

      if (uploadError) {
        setLoading(false);
        alert(uploadError.message);
        return;
      }

      resumePath = filePath;
    }

    const application = {
      job_id: jobId,
      job_slug: jobSlug || "general-application",
      full_name,
      email,
      phone,
      industry,
      experience,
      certifications,
      message,
      status: "New",
      resume_url: resumePath,
      resume_file_name: resumeFileName,
    };

    const { error } = await supabase
      .from("applications")
      .insert([application]);

    if (error) {
      setLoading(false);
      alert(error.message);
      console.error("Application error:", error);
      return;
    }

    try {
      console.log("Sending notification...");

      const notifyResponse = await fetch("/api/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: jobSlug ? "application" : "resume",
          full_name,
          email,
          phone,
          industry,
          message,
          job_slug: jobSlug || "General Resume Submission",
          resume_file_name: resumeFileName,
        }),
      });

      const notifyData = await notifyResponse.json();

      console.log("Notify response:", notifyData);

      if (!notifyResponse.ok || !notifyData.success) {
        alert("Application saved, but notification failed. Check console.");
      }
    } catch (notifyError) {
      console.error("Notification error:", notifyError);
      alert("Application saved, but notification failed. Check console.");
    }

    setLoading(false);
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

      {!jobSlug && (
        <div className="card">
          <h3>General Resume Submission</h3>
          <p>
            Upload your resume to be considered for future opportunities with
            Labor Sync Group.
          </p>
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

      <input name="resume" type="file" accept=".pdf,.doc,.docx" required />

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