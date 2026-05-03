import AdminJobForm from "@/app/components/AdminJobForm";
import AdminNav from "@/app/components/AdminNav";
export const metadata = {
  title: "Create Job | Labor Sync Group",
};

export default function CreateJobPage() {
  return (
    <main>
        <AdminNav />
      <section className="section">
        <p className="eyebrow center">ADMIN</p>

        <h1 className="section-title">
          Create New Job
        </h1>

        <AdminJobForm />
      </section>
    </main>
  );
}