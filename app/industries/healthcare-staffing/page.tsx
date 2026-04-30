export const metadata = {
  title: "Healthcare Staffing | Labor Sync Group",
  description:
    "Healthcare staffing solutions for hospitals, nursing homes, clinics, and healthcare facilities.",
};

export default function HealthcareStaffing() {
  return (
    <main>
      {/* Hero */}
      <section className="industry-hero healthcare-bg">
        <div className="industry-overlay">
          <p className="eyebrow">HEALTHCARE STAFFING</p>

          <h1>
            Dependable Healthcare Staffing Solutions
          </h1>

          <p className="industry-lead">
            Labor Sync Group connects healthcare facilities with qualified
            nurses, CNAs, caregivers, and medical support staff.
          </p>

          <a href="/employers" className="btn-primary">
            Request Healthcare Staff
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <h2 className="section-title">
          Healthcare Talent When Reliability Matters
        </h2>

        <p className="section-lead">
          Whether you need short-term coverage, temp-to-hire staffing, or
          long-term workforce support, Labor Sync Group helps healthcare
          employers fill critical positions fast.
        </p>

        <div className="grid">
          <div className="card">
            <h3>Registered Nurses</h3>
          </div>

          <div className="card">
            <h3>Licensed Practical Nurses</h3>
          </div>

          <div className="card">
            <h3>Certified Nursing Assistants</h3>
          </div>

          <div className="card">
            <h3>Medical Support Staff</h3>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="job-seeker-section">
        <h2 className="section-title white-text">
          Need Healthcare Staff?
        </h2>

        <div style={{ textAlign: "center" }}>
          <a href="/employers" className="btn-primary">
            Request Talent
          </a>
        </div>
      </section>
    </main>
  );
}