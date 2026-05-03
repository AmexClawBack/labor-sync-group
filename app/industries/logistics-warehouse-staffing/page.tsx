export const metadata = {
  title:
    "Warehouse & Logistics Staffing Agency in Virginia | Forklift, Warehouse & Distribution Staffing | Labor Sync Group",
  description:
    "Labor Sync Group provides warehouse and logistics staffing across Virginia, North Carolina, and surrounding markets. We help distribution centers, warehouses, ports, and logistics companies hire dependable workers fast.",
};

export default function LogisticsWarehouseStaffing() {
  return (
    <main>
      {/* HERO */}
      <section className="industry-hero logistics-bg">
        <div className="industry-overlay">
          <p className="eyebrow">LOGISTICS & WAREHOUSE STAFFING</p>

          <h1>
            Warehouse Staffing Solutions Built for Virginia’s Labor Shortage
          </h1>

          <p className="industry-lead">
            Virginia warehouses, distribution centers, manufacturers, and supply
            chain operators are facing major labor shortages. Labor Sync Group
            helps logistics employers fill urgent warehouse positions with
            dependable workers.
          </p>

          <a href="/employers" className="btn-primary">
            Request Warehouse Staff
          </a>
        </div>
      </section>

      {/* MARKET DEMAND */}
      <section className="section">
        <p className="eyebrow center">WAREHOUSE LABOR MARKET</p>

        <h2 className="section-title">
          Virginia Warehouses Need Reliable Labor—Fast
        </h2>

        <p className="section-lead">
          With continued growth in port operations, manufacturing, e-commerce,
          and distribution, Virginia employers are competing for warehouse
          talent. Forklift operators, material handlers, inventory support, and
          shipping teams remain in high demand throughout Virginia and North
          Carolina.
        </p>

        <div className="grid">
          <div className="card">
            <h3>Port & Distribution Growth</h3>
            <p>
              Virginia’s logistics infrastructure continues expanding across key
              freight corridors.
            </p>
          </div>

          <div className="card">
            <h3>Warehouse Hiring Challenges</h3>
            <p>
              Employers are struggling to fill shifts and maintain production.
            </p>
          </div>

          <div className="card">
            <h3>Retention Challenges</h3>
            <p>
              High turnover continues impacting warehouse productivity.
            </p>
          </div>

          <div className="card">
            <h3>Faster Hiring Needed</h3>
            <p>
              Missed shifts create shipping delays, overtime costs, and customer
              service issues.
            </p>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="section section-light">
        <p className="eyebrow center">POSITIONS WE HELP STAFF</p>

        <h2 className="section-title">
          Warehouse & Logistics Professionals We Recruit
        </h2>

        <div className="grid">
          {[
            "Forklift Operators",
            "Material Handlers",
            "Warehouse Associates",
            "Pickers & Packers",
            "Shipping & Receiving",
            "Inventory Control Specialists",
            "Order Fulfillment Teams",
            "Distribution Center Support",
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
          Logistics Employers We Work With
        </h2>

        <div className="grid">
          {[
            "Warehouses",
            "Distribution Centers",
            "Manufacturing Facilities",
            "Cold Storage Facilities",
            "E-Commerce Fulfillment Centers",
            "Freight & Shipping Companies",
            "Port Operations",
            "Supply Chain Operations",
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
          A Staffing Partner Built for Warehouse Operations
        </h2>

        <div className="grid">
          <div className="card">
            <h3>Fast Shift Coverage</h3>
            <p>
              We help warehouses fill urgent openings before operations slow
              down.
            </p>
          </div>

          <div className="card">
            <h3>Pre-Screened Workers</h3>
            <p>
              Dependable workers who understand attendance, safety, and pace.
            </p>
          </div>

          <div className="card">
            <h3>Flexible Staffing Models</h3>
            <p>
              Temporary, temp-to-hire, direct hire, and seasonal staffing.
            </p>
          </div>

          <div className="card">
            <h3>Regional Coverage</h3>
            <p>
              Virginia, North Carolina, Maryland, DC, and expanding markets.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="job-seeker-section">
        <p className="eyebrow center">NEED WAREHOUSE STAFF?</p>

        <h2 className="section-title white-text">
          Build a More Reliable Warehouse Workforce
        </h2>

        <p className="section-lead white-text">
          Whether you need forklift operators, warehouse associates, or
          distribution labor, Labor Sync Group helps logistics employers fill
          critical positions fast.
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