"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/index";

export default function ApplicationStatusForm({
  applicationId,
  initialStatus,
  initialNotes,
}: {
  applicationId: string;
  initialStatus: string;
  initialNotes: string;
}) {
  const supabase = createClient();

  const [status, setStatus] = useState(initialStatus || "New");
  const [notes, setNotes] = useState(initialNotes || "");
  const [loading, setLoading] = useState(false);

  async function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from("applications")
      .update({
        status,
        admin_notes: notes,
        updated_at: new Date().toISOString(),
      })
      .eq("id", applicationId);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Application updated.");
  }

  return (
    <form className="lead-form" onSubmit={handleSave}>
      <select
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >
        <option>New</option>
        <option>Approved</option>
        <option>Rejected</option>
        <option>Interview Setup</option>
        <option>Staffed</option>
        <option>On Hold</option>
        <option>Follow Up Needed</option>
      </select>

      <textarea
        rows={5}
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
        placeholder="Internal notes or response details..."
      />

      <button className="btn-primary form-btn" disabled={loading}>
        {loading ? "Saving..." : "Save Application Status"}
      </button>
    </form>
  );
}