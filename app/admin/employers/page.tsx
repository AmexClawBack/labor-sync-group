import Link from "next/link";
import { createClient } from "@/lib/supabase/index";
import AdminNav from "@/app/components/AdminNav";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Employers | Labor Sync Group",
};

export default async function AdminEmployersPage() {
  const supabase = createClient();

  const { data: employers, error } = await supabase
    .from("employer_requests")
    .select("*, staffed_workers(id)")
    .order("created_at", { ascending: false });

  return (
    <main>
      <AdminNav />

      <section className="section">
        <p className="eyebrow center">ADMIN</p>
        <h1 className="section-title">Employer Requests</h1>

        {error && <p style={{ color: "red" }}>{error.message}</p>}

        <div className="grid">
          {employers?.map((employer: any) => (
            <Link
              key={employer.id}
              href={`/admin/employers/${employer.id}`}
              className="card linked-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>{employer.company_name}</h3>
              <p><strong>Contact:</strong> {employer.contact_name}</p>
              <p><strong>Industry:</strong> {employer.industry}</p>
              <p><strong>Positions:</strong> {employer.positions_needed}</p>
              <p><strong>Workers Needed:</strong> {employer.number_of_workers}</p>
              <p><strong>Status:</strong> {employer.status}</p>
              <p><strong>Staffed Workers:</strong> {employer.staffed_workers?.length || 0}</p>
              <span>View Employer →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}