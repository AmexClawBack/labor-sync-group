"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function JobActiveToggle({
  jobId,
  initialActive,
}: {
  jobId: string;
  initialActive: boolean;
}) {
  const supabase = createClient();
  const [active, setActive] = useState(initialActive);
  const [loading, setLoading] = useState(false);

  async function handleToggle() {
    setLoading(true);

    const newStatus = !active;

    const { error } = await supabase
      .from("jobs")
      .update({ is_active: newStatus })
      .eq("id", jobId);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    setActive(newStatus);
  }

  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        margin: "20px 0",
        cursor: "pointer",
      }}
    >
      <input
        type="checkbox"
        checked={active}
        onChange={handleToggle}
        disabled={loading}
      />

      <span>{active ? "Active" : "Inactive"}</span>
    </label>
  );
}