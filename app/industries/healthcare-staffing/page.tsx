export const metadata = {
  title:
    "Healthcare Staffing Agency in Virginia | Nurses, CNAs & Medical Staffing | Labor Sync Group",
  description:
    "Labor Sync Group provides healthcare staffing solutions across Virginia, North Carolina, and surrounding markets. We help hospitals, nursing homes, assisted living facilities, home health agencies, and clinics hire nurses, CNAs, caregivers, and medical support staff.",
};

export default function HealthcareStaffing() {
  return (
    <main>
      {/* HERO */}
      <section className="industry-hero healthcare-bg">
        <div className="industry-overlay">
          <p className="eyebrow">HEALTHCARE STAFFING</p>

          <h1>
            Healthcare Staffing Solutions Built for Virginia’s Workforce
            Shortage
          </h1>

          <p className="industry-lead">
            Virginia healthcare employers are facing critical staffing shortages
            in nursing, long-term care, assisted living, and medical support
            roles. Labor Sync Group helps facilities fill urgent openings with
            dependable healthcare professionals.
          </p>

          <a href="/employers" className="btn-primary">
            Request Healthcare Staff
          </a>
        </div>
      </section>

      {/* MARKET PROBLEM */}
      <section className="section">
        <p className="eyebrow center">HEALTHCARE LABOR MARKET</p>

        <h2 className="section-title">
          Virginia Healthcare Employers Need Talent—Fast
        </h2>

        <p className="section-lead">
          Virginia continues to experience severe shortages in nurses, CNAs,
          patient care staff, and support personnel. With thousands of
          healthcare positions unfilled across the Commonwealth, hospitals,
          nursing homes, assisted living communities, rehabilitation centers,
          and home health providers need staffing partners who move quickly.
        </p>

        <div className="grid">
          <div className="card">
            <h3>17,000+ RN Positions Needed</h3>
            <p>
              Virginia workforce studies show major shortages in nursing talent.
            </p>
          </div>

          <div className="card">
            <h3>Growing CNA Demand</h3>
            <p>
              Nursing homes, assisted living, and home health providers continue
              to struggle filling CNA roles.
            </p>
          </div>

          <div className="card">
            <h3>Burnout & Retirements</h3>
            <p>
              Workforce exits are increasing pressure on healthcare employers.
            </p>
          </div>

          <div className="card">
            <h3>Faster Hiring Needed</h3>
            <p>
              Open shifts directly impact patient care, compliance, and revenue.
            </p>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="section section-light">
        <p className="eyebrow center">POSITIONS WE HELP STAFF</p>

        <h2 className="section-title">
          Healthcare Professionals We Recruit
        </h2>

        <div className="grid">
          {[
            "Registered Nurses (RN)",
            "Licensed Practical Nurses (LPN)",
            "Certified Nursing Assistants (CNA)",
            "Patient Care Technicians",
            "Medical Assistants",
            "Caregivers",
            "Home Health Aides",
            "Administrative Medical Support",
          ].map((role) => (
            <div className="card" key={role}>
              <h3>{role}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="section">
        <p className="eyebrow center">FACILITIES WE SUPPORT</p>

        <h2 className="section-title">
          Healthcare Employers We Work With
        </h2>

        <div className="grid">
          {[
            "Hospitals",
            "Nursing Homes",
            "Assisted Living Facilities",
            "Home Health Agencies",
            "Rehabilitation Centers",
            "Behavioral Health Facilities",
            "Outpatient Clinics",
            "Veteran Care Centers",
          ].map((facility) => (
            <div className="card" key={facility}>
              <h3>{facility}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="section section-light">
        <p className="eyebrow center">WHY LABOR SYNC GROUP</p>

        <h2 className="section-title">
          A Staffing Partner Built for Healthcare
        </h2>

        <div className="grid">
          <div className="card">
            <h3>Fast Turnaround</h3>
            <p>
              We understand missed shifts impact patient care and compliance.
            </p>
          </div>

          <div className="card">
            <h3>Pre-Screened Candidates</h3>
            <p>
              We focus on dependable professionals who fit your facility.
            </p>
          </div>

          <div className="card">
            <h3>Flexible Staffing Models</h3>
            <p>
              Temporary, temp-to-hire, direct hire, and project staffing.
            </p>
          </div>

          <div className="card">
            <h3>Regional Coverage</h3>
            <p>
              Virginia, North Carolina, Maryland, and expanding markets.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="job-seeker-section">
        <p className="eyebrow center">NEED HEALTHCARE STAFF?</p>

        <h2 className="section-title white-text">
          Fill Critical Healthcare Roles Faster
        </h2>

        <p className="section-lead white-text">
          Whether you need nurses, CNAs, caregivers, or support staff, Labor
          Sync Group helps healthcare employers build dependable teams.
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