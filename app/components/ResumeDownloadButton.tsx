"use client";

import { createClient } from "@/lib/supabase/index";

export default function ResumeDownloadButton({
  resumePath,
  fileName,
}: {
  resumePath: string;
  fileName: string;
}) {
  const supabase = createClient();

  async function openResume() {
    const { data, error } = await supabase.storage
      .from("resumes")
      .createSignedUrl(resumePath, 60 * 10);

    if (error || !data?.signedUrl) {
      alert(error?.message || "Could not open resume.");
      return;
    }

    window.open(data.signedUrl, "_blank");
  }

  return (
    <button type="button" className="btn-primary" onClick={openResume}>
      Open Resume: {fileName || "View File"}
    </button>
  );
}