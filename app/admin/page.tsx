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

        <h1 className="section-title">Labor Sync Group Admin</h1>

        <p className="section-lead">
          Manage job postings, applications, and staffing activity.
        </p>

        <div className="grid">
          <a href="/admin/jobs" className="card linked-card">
            <h3>Manage Jobs</h3>
            <p>Add, edit, and deactivate job postings.</p>
            <span>Open Jobs →</span>
          </a>

          <a href="/admin/applications" className="card linked-card">
            <h3>View Applications</h3>
            <p>Review candidate applications and update status.</p>
            <span>Open Applications →</span>
          </a>
        </div>
      </section>
    </main>
  );
}