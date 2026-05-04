import PublicJobBoard from "@/app/components/PublicJobBoard";
import { createClient } from "@/lib/supabase/index";
export default async function JobsPage() {
const supabase = createClient();
  const { data: jobs, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  console.log("Jobs error:", error);

  return (
    <main>
      <section className="section">
        {error && <p style={{ color: "red" }}>{error.message}</p>}
        <PublicJobBoard jobs={jobs || []} />
      </section>
    </main>
  );
}