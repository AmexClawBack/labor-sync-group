export default function CTA() {
  return (
    <>
      {/* Job Seeker CTA */}
      <section
        id="jobs"
        className="job-seeker-section"
      >
        <p className="eyebrow center">JOB SEEKERS</p>

        <h2 className="section-title white-text">
          Looking for Your Next Opportunity?
        </h2>

        <p className="section-lead white-text">
          Labor Sync Group connects candidates with opportunities in healthcare,
          skilled trades, manufacturing, logistics, and construction.
        </p>

        <div style={{ textAlign: "center" }}>
          <a href="/apply" className="btn-primary">
            Apply Now
          </a>
        </div>
      </section>

      {/* Employer / Contact CTA */}
      <section id="contact" className="section">
        <p className="eyebrow center">CONTACT US</p>

        <h2 className="section-title">
          Ready to Build Your Workforce?
        </h2>

        <p className="section-lead">
          Whether you need dependable workers or you're looking for your next
          opportunity, Labor Sync Group is ready to help.
        </p>

        <div style={{ textAlign: "center" }}>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}