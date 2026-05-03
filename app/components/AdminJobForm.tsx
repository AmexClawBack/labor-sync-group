"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/index";

function createSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function AdminJobForm() {
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (loading) return;

    const form = event.currentTarget;
    setLoading(true);

    try {
      // Check logged-in user first
      const {
        data: { user },
      } = await supabase.auth.getUser();

      console.log("Current user:", user);

      if (!user) {
        alert("Not logged in. Please log in again.");
        setLoading(false);
        return;
      }

      const formData = new FormData(form);

      const title = formData.get("title") as string;

      const job = {
        title,
        slug: createSlug(title),
        industry: formData.get("industry") as string,
        city: formData.get("city") as string,
        state: formData.get("state") as string,
        pay_range: formData.get("pay_range") as string,
        job_type: formData.get("job_type") as string,
        description: formData.get("description") as string,
        requirements: formData.get("requirements") as string,
        is_active: true,
      };

      const { error } = await supabase
        .from("jobs")
        .insert([job]);

      if (error) {
        throw error;
      }

      alert("Job added successfully.");

      form.reset();
      window.location.reload();

    } catch (error: any) {
      console.error("Job insert error:", error);
      alert(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Job Title"
        required
      />

      <select name="industry" required>
        <option value="">Select Industry</option>
        <option>Healthcare</option>
        <option>Skilled Trades</option>
        <option>Manufacturing</option>
        <option>Logistics & Warehouse</option>
        <option>Construction Labor</option>
      </select>

      <input
        name="city"
        type="text"
        placeholder="City"
        required
      />

      <input
        name="state"
        type="text"
        placeholder="State"
        required
      />

      <input
        name="pay_range"
        type="text"
        placeholder="Pay Range"
      />

      <input
        name="job_type"
        type="text"
        placeholder="Job Type"
      />

      <textarea
        name="description"
        rows={5}
        placeholder="Job Description"
        required
      />

      <textarea
        name="requirements"
        rows={5}
        placeholder="Requirements"
      />

      <button
        type="submit"
        className="btn-primary form-btn"
        disabled={loading}
      >
        {loading ? "Adding Job..." : "Add Job"}
      </button>
    </form>
  );
}