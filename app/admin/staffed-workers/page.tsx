import { createClient } from "@/lib/supabase/index";
import AdminNav from "@/app/components/AdminNav";
import StaffedWorkersDashboard from "@/app/components/StaffedWorkersDashboard";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Staffed Workers | Labor Sync Group",
};

export default async function StaffedWorkersPage() {
  const supabase = createClient();

  const { data: workers, error } = await supabase
    .from("staffed_workers")
    .select(`
      *,
      employer_requests (
        company_name,
        industry,
        city,
        state,
        hiring_type
      )
    `)
    .order("created_at", { ascending: false });

  return (
    <main>
      <AdminNav />

      <section className="section">
        <p className="eyebrow center">ADMIN</p>
        <h1 className="section-title">Staffed Workers</h1>

        {error && <p style={{ color: "red" }}>{error.message}</p>}

        <StaffedWorkersDashboard workers={workers || []} />
      </section>
    </main>
  );
}