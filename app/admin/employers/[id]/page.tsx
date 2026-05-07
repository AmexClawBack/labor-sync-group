import Link from "next/link";
import { createClient } from "@/lib/supabase/index";
import AdminNav from "@/app/components/AdminNav";
import StaffedWorkerForm from "@/app/components/StaffedWorkerForm";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Employer Details | Labor Sync Group",
};

export default async function EmployerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = createClient();

  const { data: employer, error } = await supabase
    .from("employer_requests")
    .select("*, staffed_workers(*)")
    .eq("id", id)
    .maybeSingle();

  if (error || !employer) {
    return (
      <main>
        <AdminNav />
        <section className="section">
          <Link href="/admin/employers">← Back to Employers</Link>
          <p>Employer request not found.</p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <AdminNav />

      <section className="section">
        <Link href="/admin/employers">← Back to Employers</Link>

        <h1 className="section-title">{employer.company_name}</h1>

        <div className="card">
          <p><strong>Contact:</strong> {employer.contact_name}</p>
          <p><strong>Email:</strong> {employer.email}</p>
          <p><strong>Phone:</strong> {employer.phone}</p>
          <p><strong>Industry:</strong> {employer.industry}</p>
          <p><strong>Positions Needed:</strong> {employer.positions_needed}</p>
          <p><strong>Number of Workers Needed:</strong> {employer.number_of_workers}</p>
          <p><strong>Hiring Type:</strong> {employer.hiring_type}</p>
          <p><strong>Status:</strong> {employer.status || "New"}</p>
          <p><strong>Message:</strong> {employer.message || "No message provided"}</p>
        </div>

        <h2 style={{ marginTop: "40px" }}>Staffed Workers</h2>

        <div className="grid">
          {employer.staffed_workers?.map((worker: any) => (
            <div className="card" key={worker.id}>
              <h3>{worker.worker_name}</h3>
              <p><strong>Position:</strong> {worker.position}</p>
              <p><strong>Start Date:</strong> {worker.start_date || "Not listed"}</p>
              <p><strong>Pay Rate:</strong> {worker.pay_rate || "Not listed"}</p>
              <p><strong>Bill Rate:</strong> {worker.bill_rate || "Not listed"}</p>
              <p><strong>Status:</strong> {worker.status}</p>
              <p><strong>Notes:</strong> {worker.notes || "No notes"}</p>
            </div>
          ))}
        </div>

        <h2 style={{ marginTop: "40px" }}>Add Staffed Worker</h2>

        <StaffedWorkerForm employerRequestId={employer.id} />
      </section>
    </main>
  );
}