export const metadata = {
  title:
    "Manufacturing Staffing Agency in Virginia | Production, Assembly & Plant Staffing | Labor Sync Group",
  description:
    "Labor Sync Group provides manufacturing staffing across Virginia, North Carolina, Maryland, DC, and surrounding markets. We help manufacturers hire production workers, machine operators, assembly support, maintenance staff, quality control support, and plant labor.",
};

export default function ManufacturingStaffing() {
  return (
    <main>
      {/* HERO */}
      <section className="industry-hero manufacturing-bg">
        <div className="industry-overlay">
          <p className="eyebrow">MANUFACTURING STAFFING</p>

          <h1>
            Manufacturing Staffing Built for Virginia’s Production Workforce
          </h1>

          <p className="industry-lead">
            Manufacturers across Virginia need dependable production workers,
            machine operators, assembly support, maintenance teams, and plant
            labor to keep operations moving. Labor Sync Group helps employers
            fill critical manufacturing roles fast.
          </p>

          <a href="/employers" className="btn-primary">
            Request Manufacturing Staff
          </a>
        </div>
      </section>

      {/* MARKET DEMAND */}
      <section className="section">
        <p className="eyebrow center">MANUFACTURING LABOR MARKET</p>

        <h2 className="section-title">
          Virginia Manufacturers Need Reliable Workers—Fast
        </h2>

        <p className="section-lead">
          Manufacturing employers continue facing hiring challenges caused by
          workforce shortages, turnover, production demand, and hard-to-fill
          skilled positions. Whether your facility needs shift coverage,
          temp-to-hire workers, or long-term production support, Labor Sync
          Group helps manufacturers build a dependable workforce.
        </p>

        <div className="grid">
          <div className="card">
            <h3>Production Demand</h3>
            <p>
              Staffing gaps can slow production schedules, reduce output, and
              increase overtime costs.
            </p>
          </div>

          <div className="card">
            <h3>Hard-to-Fill Roles</h3>
            <p>
              Machine operators, maintenance support, and quality workers remain
              difficult for many employers to recruit.
            </p>
          </div>

          <div className="card">
            <h3>Turnover Pressure</h3>
            <p>
              High turnover creates training costs, missed shifts, and
              inconsistent production performance.
            </p>
          </div>

          <div className="card">
            <h3>Flexible Workforce Needs</h3>
            <p>
              Manufacturers often need temporary, seasonal, temp-to-hire, and
              direct-hire staffing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="section section-light">
        <p className="eyebrow center">POSITIONS WE HELP STAFF</p>

        <h2 className="section-title">
          Manufacturing Workers We Recruit
        </h2>

        <div className="grid">
          {[
            "Production Workers",
            "Machine Operators",
            "Assembly Workers",
            "Maintenance Support",
            "Quality Control Support",
            "Plant Labor",
            "Packaging Workers",
            "Material Handling Support",
          ].map((role) => (
            <div className="card" key={role}>
              <h3>{role}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT TYPES */}
      <section className="section">
        <p className="eyebrow center">OPERATIONS WE SUPPORT</p>

        <h2 className="section-title">
          Manufacturing Employers We Work With
        </h2>

        <div className="grid">
          {[
            "Production Facilities",
            "Assembly Plants",
            "Industrial Manufacturers",
            "Food & Beverage Manufacturers",
            "Metal Fabrication Shops",
            "Packaging Operations",
            "Distribution-Linked Manufacturers",
            "Maintenance Departments",
          ].map((client) => (
            <div className="card" key={client}>
              <h3>{client}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="section section-light">
        <p className="eyebrow center">WHY LABOR SYNC GROUP</p>

        <h2 className="section-title">
          A Staffing Partner Built for Manufacturing
        </h2>

        <div className="grid">
          <div className="card">
            <h3>Fast Shift Coverage</h3>
            <p>
              We help manufacturers fill open roles quickly so production does
              not slow down.
            </p>
          </div>

          <div className="card">
            <h3>Pre-Screened Workers</h3>
            <p>
              Candidates are reviewed for reliability, work history, attendance,
              and fit before placement.
            </p>
          </div>

          <div className="card">
            <h3>Flexible Staffing Models</h3>
            <p>
              Temporary, temp-to-hire, direct hire, seasonal, and project-based
              staffing support.
            </p>
          </div>

          <div className="card">
            <h3>Regional Coverage</h3>
            <p>
              Virginia, North Carolina, Maryland, DC, and expanding industrial
              markets.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="job-seeker-section">
        <p className="eyebrow center">NEED MANUFACTURING STAFF?</p>

        <h2 className="section-title white-text">
          Keep Production Moving With Reliable Staffing
        </h2>

        <p className="section-lead white-text">
          Whether you need production workers, machine operators, assembly
          support, or maintenance labor, Labor Sync Group helps manufacturers
          fill critical roles fast.
        </p>

        <div style={{ textAlign: "center" }}>
          <a href="/employers" className="btn-primary">
            Request Talent
          </a>
        </div>
      </section>
    </main>
  );
}