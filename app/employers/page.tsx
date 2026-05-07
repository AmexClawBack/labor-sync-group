import EmployerRequestForm from "@/app/components/EmployerRequestForm";

export const metadata = {
  title: "Request Talent | Labor Sync Group",
  description:
    "Request healthcare, skilled trades, manufacturing, logistics, or construction staffing solutions.",
};

export default function EmployersPage() {
  return (
    <main>
      <section className="industry-hero trades-bg">
        <div className="industry-overlay">
          <p className="eyebrow">EMPLOYER SOLUTIONS</p>

          <h1>Request Talent</h1>

          <p className="industry-lead">
            Tell us about your workforce needs and Labor Sync Group will help
            connect you with qualified candidates.
          </p>
        </div>
      </section>

      <section className="section">
        <EmployerRequestForm />
      </section>
    </main>
  );
}