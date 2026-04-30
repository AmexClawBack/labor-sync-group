export const metadata = {
  title: "Manufacturing Staffing | Labor Sync Group",
  description:
    "Manufacturing staffing for production workers, machine operators, assembly support, maintenance, and plant labor.",
};

export default function ManufacturingStaffing() {
  return (
    <main>
      <section className="industry-hero manufacturing-bg">
        <div className="industry-overlay">
          <p className="eyebrow">MANUFACTURING STAFFING</p>
          <h1>Manufacturing Staffing Built for Production</h1>
          <p className="industry-lead">
            Labor Sync Group helps manufacturers fill production, assembly,
            maintenance, and plant support roles.
          </p>
          <a href="/employers" className="btn-primary">
            Request Manufacturing Staff
          </a>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Keep Your Operation Moving</h2>
        <p className="section-lead">
          We support manufacturing companies with flexible staffing solutions
          for production demand, shift coverage, and workforce growth.
        </p>

        <div className="grid">
          {["Production Workers", "Machine Operators", "Assembly Support", "Maintenance Support", "Quality Control Support", "Plant Labor"].map((item) => (
            <div className="card" key={item}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}