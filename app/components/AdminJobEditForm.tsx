"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/index";
import { useRouter } from "next/navigation";

function createSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function AdminJobEditForm({ job }: { job: any }) {
  const supabase = createClient();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleUpdate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const title = formData.get("title") as string;

    setLoading(true);

    const updatedJob = {
      title,
      slug: createSlug(title),
      industry: formData.get("industry") as string,
      city: formData.get("city") as string,
      state: formData.get("state") as string,
      pay_range: formData.get("pay_range") as string,
      job_type: formData.get("job_type") as string,
      description: formData.get("description") as string,
      requirements: formData.get("requirements") as string,
    };

    const { error } = await supabase
      .from("jobs")
      .update(updatedJob)
      .eq("id", job.id);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Job updated.");
    router.refresh();
  }

  async function handleDelete() {
    const confirmed = confirm(
      "Are you sure you want to delete this job posting? This cannot be undone."
    );

    if (!confirmed) return;

    setLoading(true);

    const { error } = await supabase
      .from("jobs")
      .delete()
      .eq("id", job.id);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Job deleted.");
    router.push("/admin/jobs");
    router.refresh();
  }

  return (
    <form className="lead-form" onSubmit={handleUpdate}>
      <input name="title" type="text" defaultValue={job.title} required />

      <select name="industry" defaultValue={job.industry} required>
        <option value="">Select Industry</option>
        <option>Healthcare</option>
        <option>Skilled Trades</option>
        <option>Manufacturing</option>
        <option>Logistics & Warehouse</option>
        <option>Construction Labor</option>
      </select>

      <input name="city" type="text" defaultValue={job.city} required />
      <input name="state" type="text" defaultValue={job.state} required />
      <input name="pay_range" type="text" defaultValue={job.pay_range} />
      <input name="job_type" type="text" defaultValue={job.job_type} />

      <textarea
        name="description"
        rows={6}
        defaultValue={job.description}
        required
      />

      <textarea
        name="requirements"
        rows={6}
        defaultValue={job.requirements}
      />

      <button type="submit" className="btn-primary form-btn" disabled={loading}>
        {loading ? "Saving..." : "Save Job Changes"}
      </button>

      <button
        type="button"
        className="btn-secondary form-btn"
        onClick={handleDelete}
        disabled={loading}
        style={{ marginTop: "12px" }}
      >
        Delete Job
      </button>
    </form>
  );
}