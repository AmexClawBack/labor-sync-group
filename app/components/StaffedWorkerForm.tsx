"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/index";

export default function StaffedWorkerForm({
  employerRequestId,
}: {
  employerRequestId: string;
}) {
  const supabase = createClient();

  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (loading) return;

    const form = event.currentTarget;

    const formData = new FormData(form);

    setLoading(true);

    const staffedWorker = {
      employer_request_id: employerRequestId,

      company_name: formData.get("company_name") as string,

      worker_name: formData.get("worker_name") as string,

      position: formData.get("position") as string,

      start_date: formData.get("start_date") as string,

      pay_rate: formData.get("pay_rate") as string,

      bill_rate: formData.get("bill_rate") as string,

      status: formData.get("status") as string,

      notes: formData.get("notes") as string,
    };

    const { error } = await supabase
      .from("staffed_workers")
      .insert([staffedWorker]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Staffed worker added successfully.");

    form.reset();

    window.location.reload();
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <input
        name="company_name"
        type="text"
        placeholder="Company / Facility Name"
        required
      />

      <input
        name="worker_name"
        type="text"
        placeholder="Worker Name"
        required
      />

      <input
        name="position"
        type="text"
        placeholder="Position / Role"
        required
      />

      <input
        name="start_date"
        type="date"
      />

      <input
        name="pay_rate"
        type="text"
        placeholder="Pay Rate (ex: $24/hr)"
      />

      <input
        name="bill_rate"
        type="text"
        placeholder="Bill Rate (ex: $38/hr)"
      />

      <select
        name="status"
        defaultValue="Active"
      >
        <option>Active</option>
        <option>Pending Start</option>
        <option>Staffed</option>
        <option>No Show</option>
        <option>Ended</option>
        <option>Replaced</option>
        <option>Terminated</option>
      </select>

      <textarea
        name="notes"
        rows={4}
        placeholder="Notes about assignment, shift, facility, schedule, etc."
      />

      <button
        type="submit"
        className="btn-primary form-btn"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Staffed Worker"}
      </button>
    </form>
  );
}