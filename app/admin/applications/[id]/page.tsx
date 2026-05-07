import Link from "next/link";
import { createClient } from "@/lib/supabase/index";
import ApplicationStatusForm from "@/app/components/ApplicationStatusForm";
import AdminNav from "@/app/components/AdminNav";
import ResumeDownloadButton from "@/app/components/ResumeDownloadButton";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Application Details | Labor Sync Group",
};

export default async function ApplicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = createClient();

  const { data: application, error } = await supabase
    .from("applications")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error || !application) {
    return (
      <main>
        <AdminNav />

        <section className="section">
          <Link href="/admin/applications">
            ← Back to Applications
          </Link>

          <p>Application not found.</p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <AdminNav />

      <section className="section">
        <Link href="/admin/applications">
          ← Back to Applications
        </Link>

        <h1 className="section-title">
          {application.full_name}
        </h1>

        <div className="card">
          <p>
            <strong>Email:</strong> {application.email}
          </p>

          <p>
            <strong>Phone:</strong> {application.phone}
          </p>

          <p>
            <strong>Industry:</strong> {application.industry}
          </p>

          <p>
            <strong>Experience:</strong> {application.experience || "Not provided"}
          </p>

          <p>
            <strong>Certifications:</strong>{" "}
            {application.certifications || "Not provided"}
          </p>

          <p>
            <strong>Applied For:</strong>{" "}
            {application.job_slug || "General Resume Submission"}
          </p>

          <p>
            <strong>Message:</strong>{" "}
            {application.message || "No message provided"}
          </p>

          {application.resume_url && (
            <div style={{ marginTop: "25px" }}>
              <ResumeDownloadButton
                resumePath={application.resume_url}
                fileName={
                  application.resume_file_name || "Resume"
                }
              />
            </div>
          )}
        </div>

        <h2 style={{ marginTop: "40px" }}>
          Application Status
        </h2>

        <ApplicationStatusForm
          applicationId={application.id}
          initialStatus={application.status || "New"}
          initialNotes={application.admin_notes || ""}
        />
      </section>
    </main>
  );
}