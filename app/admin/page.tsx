import AdminNav from "@/app/components/AdminNav";

export const metadata = {
  title: "Admin Dashboard | Labor Sync Group",
};

export default function AdminDashboard() {
  return (
    <main>
      <AdminNav />

      <section className="section">
        <p className="eyebrow center">ADMIN DASHBOARD</p>

        <h1 className="section-title">
          Labor Sync Group Admin
        </h1>

        <p className="section-lead">
          Manage job postings, candidate applications, employer requests,
          and staffed workers across your recruiting pipeline.
        </p>

        <div className="grid">
          <a
            href="/admin/jobs"
            className="card linked-card"
          >
            <h3>Manage Jobs</h3>

            <p>
              Create, edit, activate, or deactivate job postings.
            </p>

            <span>Open Jobs →</span>
          </a>

          <a
            href="/admin/applications"
            className="card linked-card"
          >
            <h3>Applications</h3>

            <p>
              Review applicants, resumes, and update recruiting status.
            </p>

            <span>Open Applications →</span>
          </a>

          <a
            href="/admin/employers"
            className="card linked-card"
          >
            <h3>Employer Requests</h3>

            <p>
              View incoming staffing requests and employer hiring needs.
            </p>

            <span>Open Employers →</span>
          </a>

          <a
            href="/admin/staffed-workers"
            className="card linked-card"
          >
            <h3>Staffed Workers</h3>

            <p>
              Track placements, worker status, pay rates, and assignments.
            </p>

            <span>Open Staffed Workers →</span>
          </a>
        </div>
      </section>
    </main>
  );
}