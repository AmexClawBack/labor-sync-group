import Link from "next/link";
import { createClient } from "@/lib/supabase/index";
import JobActiveToggle from "@/app/components/JobActiveToggle";
import AdminNav from "@/app/components/AdminNav";
import AdminJobEditForm from "@/app/components/AdminJobEditForm";

export const dynamic = "force-dynamic";

export default async function AdminJobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = createClient();

  const { data: job, error } = await supabase
    .from("jobs")
    .select(`
      *,
      applications(*)
    `)
    .eq("id", id)
    .maybeSingle();

  if (error || !job) {
    return (
      <main>
        <AdminNav />

        <section className="section">
          <Link href="/admin/jobs">← Back to Jobs</Link>
          <p>Job not found.</p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <AdminNav />

      <section className="section">
        <Link href="/admin/jobs">← Back to Jobs</Link>

        <h1 className="section-title">{job.title}</h1>

        <div className="card">
          <p>
            <strong>Location:</strong> {job.city}, {job.state}
          </p>

          <p>
            <strong>Industry:</strong> {job.industry}
          </p>

          <p>
            <strong>Pay:</strong> {job.pay_range}
          </p>

          <p>
            <strong>Job Type:</strong> {job.job_type}
          </p>

          <JobActiveToggle
            jobId={job.id}
            initialActive={job.is_active}
          />

          <p>
            <strong>Total Applications:</strong>{" "}
            {job.applications?.length || 0}
          </p>
        </div>

        <h2 style={{ marginTop: "40px" }}>
          Edit Job Posting
        </h2>

        <AdminJobEditForm job={job} />

        <h2 style={{ marginTop: "40px" }}>
          Applications
        </h2>

        <div className="grid">
          {job.applications?.map((application: any) => (
            <Link
              key={application.id}
              href={`/admin/applications/${application.id}`}
              className="card linked-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>{application.full_name}</h3>

              <p>
                <strong>Email:</strong> {application.email}
              </p>

              <p>
                <strong>Phone:</strong> {application.phone}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {application.status || "New"}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}