export const metadata = {
  title:
    "Construction Staffing Agency in Virginia | Construction Labor, Skilled Trades & Jobsite Staffing | Labor Sync Group",
  description:
    "Labor Sync Group provides construction staffing across Virginia, North Carolina, Maryland, DC, and surrounding markets. We help contractors hire general laborers, construction helpers, skilled trades, site support crews, and project-based workforce solutions.",
};

export default function ConstructionLaborStaffing() {
  return (
    <main>
      {/* HERO */}
      <section className="industry-hero construction-bg">
        <div className="industry-overlay">
          <p className="eyebrow">CONSTRUCTION LABOR STAFFING</p>

          <h1>
            Construction Staffing Built for Virginia’s Workforce Shortage
          </h1>

          <p className="industry-lead">
            Virginia contractors are facing labor shortages across commercial,
            industrial, infrastructure, utility, and civil construction
            projects. Labor Sync Group helps contractors fill critical jobsite
            positions with dependable construction professionals.
          </p>

          <a href="/employers" className="btn-primary">
            Request Construction Labor
          </a>
        </div>
      </section>

      {/* MARKET DEMAND */}
      <section className="section">
        <p className="eyebrow center">CONSTRUCTION LABOR MARKET</p>

        <h2 className="section-title">
          Virginia Contractors Need Reliable Labor—Fast
        </h2>

        <p className="section-lead">
          Construction employers across Virginia continue facing project delays,
          labor shortages, retirement-driven workforce gaps, and difficulty
          hiring dependable workers. From general labor to skilled trades,
          contractors need staffing partners who understand construction.
        </p>

        <div className="grid">
          <div className="card">
            <h3>Infrastructure Growth</h3>
            <p>
              Virginia continues investing in transportation, bridge, utility,
              and commercial construction projects.
            </p>
          </div>

          <div className="card">
            <h3>Skilled Worker Shortages</h3>
            <p>
              Contractors continue competing for dependable labor and trade
              talent.
            </p>
          </div>

          <div className="card">
            <h3>Retirements & Workforce Gaps</h3>
            <p>
              Experienced workers leaving the industry continue increasing
              hiring pressure.
            </p>
          </div>

          <div className="card">
            <h3>Faster Hiring Needed</h3>
            <p>
              Labor shortages create schedule delays, higher overtime costs, and
              project risk.
            </p>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="section section-light">
        <p className="eyebrow center">POSITIONS WE HELP STAFF</p>

        <h2 className="section-title">
          Construction Workers We Recruit
        </h2>

        <div className="grid">
          {[
            "General Laborers",
            "Construction Helpers",
            "Material Handling Support",
            "Cleanup Crews",
            "Skilled Trades Support",
            "Concrete Support Labor",
            "Utility Crew Support",
            "Project-Based Field Crews",
          ].map((role) => (
            <div className="card" key={role}>
              <h3>{role}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT TYPES */}
      <section className="section">
        <p className="eyebrow center">CONTRACTORS WE SUPPORT</p>

        <h2 className="section-title">
          Construction Employers We Work With
        </h2>

        <div className="grid">
          {[
            "General Contractors",
            "Civil Contractors",
            "Infrastructure Contractors",
            "Commercial Builders",
            "Industrial Contractors",
            "Utility Contractors",
            "Marine Construction Contractors",
            "Heavy Highway Contractors",
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
          A Staffing Partner Built for Construction
        </h2>

        <div className="grid">
          <div className="card">
            <h3>Field Experience Matters</h3>
            <p>
              We understand jobsite expectations, safety culture, attendance,
              and project demands.
            </p>
          </div>

          <div className="card">
            <h3>Fast Labor Deployment</h3>
            <p>
              We help contractors fill labor shortages before schedules are
              impacted.
            </p>
          </div>

          <div className="card">
            <h3>Flexible Staffing Models</h3>
            <p>
              Temporary, temp-to-hire, direct hire, shutdown, and project-based
              workforce solutions.
            </p>
          </div>

          <div className="card">
            <h3>Regional Coverage</h3>
            <p>
              Virginia, North Carolina, Maryland, DC, and expanding
              construction markets.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="job-seeker-section">
        <p className="eyebrow center">NEED CONSTRUCTION LABOR?</p>

        <h2 className="section-title white-text">
          Keep Your Projects Moving With Reliable Labor
        </h2>

        <p className="section-lead white-text">
          Whether you need general laborers, site support crews, skilled trades
          support, or project-based manpower, Labor Sync Group helps
          contractors fill critical positions fast.
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