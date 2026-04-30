export const metadata = {
  title: "Apply | Labor Sync Group",
  description:
    "Apply for healthcare, skilled trades, manufacturing, logistics, and construction jobs.",
};

export default function ApplyPage() {
  return (
    <main>
      <section className="industry-hero healthcare-bg">
        <div className="industry-overlay">
          <p className="eyebrow">JOB SEEKERS</p>

          <h1>Find Your Next Opportunity</h1>

          <p className="industry-lead">
            Labor Sync Group connects candidates with opportunities across
            healthcare, skilled trades, manufacturing, logistics, and
            construction.
          </p>
        </div>
      </section>

      <section className="section">
        <form className="lead-form">
          <input type="text" placeholder="Full Name" />

          <input type="email" placeholder="Email Address" />

          <input type="tel" placeholder="Phone Number" />

          <select>
            <option>Industry Interested In</option>
            <option>Healthcare</option>
            <option>Skilled Trades</option>
            <option>Manufacturing</option>
            <option>Logistics & Warehouse</option>
            <option>Construction Labor</option>
          </select>

          <input type="text" placeholder="Years of Experience" />

          <input
            type="text"
            placeholder="Certifications / Licenses"
          />

          <textarea
            rows={5}
            placeholder="Tell us about your experience..."
          />

          <button type="submit" className="btn-primary form-btn">
            Submit Application
          </button>
        </form>
      </section>
    </main>
  );
}