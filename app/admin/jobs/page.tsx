import Link from "next/link";
import AdminLogoutButton from "@/app/components/AdminLogoutButton";
import { createClient } from "@/lib/supabase/server";
import AdminNav from "@/app/components/AdminNav";

export const metadata = {
  title: "Manage Jobs | Labor Sync Group",
};

export default async function AdminJobsPage() {
  const supabase = await createClient();

  const { data: jobs, error } = await supabase
    .from("jobs")
    .select(`
      *,
      applications(id)
    `)
    .order("created_at", { ascending: false });

  const groupedJobs =
    jobs?.reduce((groups: Record<string, any[]>, job: any) => {
      const industry = job.industry || "Other";

      if (!groups[industry]) {
        groups[industry] = [];
      }

      groups[industry].push(job);
      return groups;
    }, {}) || {};

  return (
    <main>
      <AdminNav />
      <section className="section">
        <p className="eyebrow center">ADMIN</p>
        <h1 className="section-title">Job Listings</h1>
      

        {error && (
          <p style={{ color: "red" }}>
            Error loading jobs: {error.message}
          </p>
        )}

        {Object.entries(groupedJobs).map(([industry, industryJobs]) => (
          <div key={industry} style={{ marginTop: "40px" }}>
            <h2>{industry}</h2>

            <div className="grid">
              {industryJobs.map((job: any) => (
                <Link
                  href={`/admin/jobs/${job.id}`}
                  className="card"
                  key={job.id}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h3>{job.title}</h3>

                  <p>
                    {job.city}, {job.state}
                  </p>

                  <p>{job.pay_range}</p>

                  <p>
                    <strong>Status:</strong>{" "}
                    {job.is_active ? "Active" : "Inactive"}
                  </p>

                  <p>
                    <strong>Applications:</strong>{" "}
                    {job.applications?.length || 0}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}