"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/index";
import { useRouter } from "next/navigation";

export default function JobActiveToggle({
  jobId,
  initialActive,
}: {
  jobId: string;
  initialActive: boolean;
}) {
  const supabase = createClient();
  const router = useRouter();

  const [active, setActive] = useState(initialActive);
  const [loading, setLoading] = useState(false);

  async function handleToggle() {
    const newStatus = !active;

    setLoading(true);

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
    alert(`Job marked as ${newStatus ? "Active" : "Inactive"}.`);
    router.refresh();
  }

  return (
    <label style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={active}
        onChange={handleToggle}
        disabled={loading}
      />

      {active ? "Active" : "Inactive"}
    </label>
  );
}