import Link from "next/link";
import { createClient } from "@/lib/supabase/index";
import AdminNav from "@/app/components/AdminNav";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Applications | Labor Sync Group",
};

export default async function AdminApplicationsPage() {
  const supabase = createClient();

  const { data: applications, error } = await supabase
    .from("applications")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main>
      <AdminNav />

      <section className="section">
        <p className="eyebrow center">ADMIN</p>
        <h1 className="section-title">Candidate Applications</h1>

        {error && (
          <p style={{ color: "red" }}>
            Error loading applications: {error.message}
          </p>
        )}

        <div className="grid">
          {applications?.map((app: any) => (
            <Link
              href={`/admin/applications/${app.id}`}
              className="card linked-card"
              key={app.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>{app.full_name}</h3>

              <p>
                <strong>Email:</strong> {app.email}
              </p>

              <p>
                <strong>Phone:</strong> {app.phone}
              </p>

              <p>
                <strong>Industry:</strong> {app.industry}
              </p>

              <p>
                <strong>Applied For:</strong> {app.job_slug}
              </p>

              <p>
                <strong>Status:</strong> {app.status || "New"}
              </p>

              {app.resume_file_name && (
                <p>
                  <strong>Resume:</strong> {app.resume_file_name}
                </p>
              )}

              <span>View Application →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}