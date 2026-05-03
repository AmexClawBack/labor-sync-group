export const metadata = {
  title:
    "Skilled Trades Staffing Agency in Virginia | Welders, Fabricators, Millwrights & Industrial Trades | Labor Sync Group",
  description:
    "Labor Sync Group provides skilled trades staffing across Virginia, North Carolina, Maryland, DC, and surrounding markets. We help contractors, manufacturers, shipyards, industrial employers, and facility operators hire welders, fabricators, millwrights, maintenance technicians, and field crews.",
};

export default function SkilledTradesStaffing() {
  return (
    <main>
      {/* HERO */}
      <section className="industry-hero trades-bg">
        <div className="industry-overlay">
          <p className="eyebrow">SKILLED TRADES STAFFING</p>

          <h1>
            Skilled Trades Staffing Built for Virginia’s Workforce Shortage
          </h1>

          <p className="industry-lead">
            Virginia employers are facing growing shortages in construction,
            maritime, manufacturing, industrial maintenance, and skilled trade
            roles. Labor Sync Group helps contractors and industrial employers
            fill critical workforce gaps with dependable tradespeople.
          </p>

          <a href="/employers" className="btn-primary">
            Request Skilled Trades Staff
          </a>
        </div>
      </section>

      {/* MARKET DEMAND */}
      <section className="section">
        <p className="eyebrow center">SKILLED TRADES LABOR MARKET</p>

        <h2 className="section-title">
          Virginia Contractors and Industrial Employers Need Skilled Labor—Fast
        </h2>

        <p className="section-lead">
          Skilled worker shortages are forcing Virginia employers to rethink
          how they recruit, retain, and staff critical trade positions. Across
          Hampton Roads, construction, maritime, industrial, manufacturing, and
          facility maintenance employers continue competing for qualified
          tradespeople who can show up, work safely, and keep projects moving.
        </p>

        <div className="grid">
          <div className="card">
            <h3>Construction & Infrastructure Demand</h3>
            <p>
              Contractors need dependable tradespeople to support active jobs,
              project backlogs, and field operations.
            </p>
          </div>

          <div className="card">
            <h3>Maritime & Industrial Workforce Needs</h3>
            <p>
              Hampton Roads employers continue facing demand for trained workers
              in construction, maritime, and industrial sectors.
            </p>
          </div>

          <div className="card">
            <h3>Manufacturing Skills Gap</h3>
            <p>
              Manufacturers continue needing welders, machinists, maintenance
              techs, and production support workers.
            </p>
          </div>

          <div className="card">
            <h3>Faster Hiring Needed</h3>
            <p>
              Open trade positions can delay projects, increase overtime costs,
              and create production bottlenecks.
            </p>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="section section-light">
        <p className="eyebrow center">POSITIONS WE HELP STAFF</p>

        <h2 className="section-title">
          Skilled Trades Professionals We Recruit
        </h2>

        <div className="grid">
          {[
            "Welders",
            "Fabricators",
            "Ironworkers",
            "Millwrights",
            "Maintenance Technicians",
            "Pipefitters",
            "Industrial Labor Support",
            "Field Crew Support",
          ].map((role) => (
            <div className="card" key={role}>
              <h3>{role}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT TYPES */}
      <section className="section">
        <p className="eyebrow center">EMPLOYERS WE SUPPORT</p>

        <h2 className="section-title">
          Skilled Trades Employers We Work With
        </h2>

        <div className="grid">
          {[
            "General Contractors",
            "Subcontractors",
            "Manufacturing Facilities",
            "Shipyards & Maritime Employers",
            "Industrial Plants",
            "Fabrication Shops",
            "Facility Maintenance Teams",
            "Infrastructure Contractors",
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
          A Staffing Partner Built for the Trades
        </h2>

        <div className="grid">
          <div className="card">
            <h3>Trade-Specific Recruiting</h3>
            <p>
              We understand the difference between general labor and skilled
              trades support.
            </p>
          </div>

          <div className="card">
            <h3>Field Experience Matters</h3>
            <p>
              Our background in real jobsite and industrial work helps us
              understand employer expectations.
            </p>
          </div>

          <div className="card">
            <h3>Flexible Staffing Models</h3>
            <p>
              Temporary, temp-to-hire, direct hire, shutdown, and project-based
              staffing support.
            </p>
          </div>

          <div className="card">
            <h3>Regional Coverage</h3>
            <p>
              Virginia, North Carolina, Maryland, DC, and expanding skilled
              trades markets.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="job-seeker-section">
        <p className="eyebrow center">NEED SKILLED TRADES STAFF?</p>

        <h2 className="section-title white-text">
          Fill Critical Trade Positions Faster
        </h2>

        <p className="section-lead white-text">
          Whether you need welders, fabricators, millwrights, maintenance
          technicians, or field crews, Labor Sync Group helps employers source
          dependable skilled trades professionals.
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