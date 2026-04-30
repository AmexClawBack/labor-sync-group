export const metadata = {
  title: "Construction Labor Staffing | Labor Sync Group",
  description:
    "Construction labor staffing for contractors needing general laborers, helpers, site support, and project-based crews.",
};

export default function ConstructionLaborStaffing() {
  return (
    <main>
      <section className="industry-hero construction-bg">
        <div className="industry-overlay">
          <p className="eyebrow">CONSTRUCTION LABOR STAFFING</p>
          <h1>Dependable Construction Labor When You Need It</h1>
          <p className="industry-lead">
            Labor Sync Group helps contractors fill project-based labor needs
            with dependable jobsite support.
          </p>
          <a href="/employers" className="btn-primary">
            Request Construction Labor
          </a>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Jobsite Labor Support for Contractors</h2>
        <p className="section-lead">
          We support contractors with flexible labor for construction projects,
          site support, cleanup, material handling, and general workforce needs.
        </p>

        <div className="grid">
          {["General Laborers", "Construction Helpers", "Site Support", "Material Handling", "Cleanup Crews", "Project-Based Labor"].map((item) => (
            <div className="card" key={item}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}