import PublicJobBoard from "@/app/components/PublicJobBoard";
import { createClient } from "@/lib/supabase/index";

export default async function JobsPage() {
  const supabase = createClient();

  const { data: jobs, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  return (
    <main>
      <section className="industry-hero logistics-bg">
        <div className="industry-overlay">
          <p className="eyebrow">CAREERS</p>

          <h1>Find Your Next Opportunity</h1>

          <p className="industry-lead">
            Browse open jobs in healthcare, skilled trades, manufacturing,
            logistics, and construction.
          </p>
        </div>
      </section>

      <section className="section">
        {error && <p style={{ color: "red" }}>{error.message}</p>}
        <PublicJobBoard jobs={jobs || []} />
      </section>
    </main>
  );
}