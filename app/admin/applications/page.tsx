import { createClient } from "@/lib/supabase/client";
import AdminLogoutButton from "@/app/components/AdminLogoutButton";
import AdminNav from "@/app/components/AdminNav";

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

        <h1 className="section-title">
          Candidate Applications
        </h1>
       

        {error && (
          <p style={{ color: "red" }}>
            Error loading applications: {error.message}
          </p>
        )}

        <div className="grid">
          {applications?.map((app) => (
            <div className="card" key={app.id}>
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
                <strong>Experience:</strong> {app.experience}
              </p>

              <p>
                <strong>Certifications:</strong> {app.certifications}
              </p>

              <p>
                <strong>Applied For:</strong> {app.job_slug}
              </p>

              {app.message && (
                <p>
                  <strong>Notes:</strong> {app.message}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}