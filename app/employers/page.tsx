export const metadata = {
  title: "Request Talent | Labor Sync Group",
  description:
    "Request healthcare, skilled trades, manufacturing, logistics, or construction staffing solutions.",
};

export default function EmployersPage() {
  return (
    <main>
      <section className="industry-hero trades-bg">
        <div className="industry-overlay">
          <p className="eyebrow">EMPLOYER SOLUTIONS</p>

          <h1>Request Talent</h1>

          <p className="industry-lead">
            Tell us about your workforce needs and Labor Sync Group will help
            connect you with qualified candidates.
          </p>
        </div>
      </section>

      <section className="section">
        <form className="lead-form">
          <input type="text" placeholder="Company Name" />

          <input type="text" placeholder="Contact Name" />

          <input type="email" placeholder="Email Address" />

          <input type="tel" placeholder="Phone Number" />

          <select>
            <option>Select Industry</option>
            <option>Healthcare</option>
            <option>Skilled Trades</option>
            <option>Manufacturing</option>
            <option>Logistics & Warehouse</option>
            <option>Construction Labor</option>
          </select>

          <input type="text" placeholder="Positions Needed" />

          <input type="text" placeholder="Number of Workers Needed" />

          <select>
            <option>Hiring Type</option>
            <option>Temporary</option>
            <option>Temp-to-Hire</option>
            <option>Direct Hire</option>
          </select>

          <textarea
            rows={5}
            placeholder="Tell us about your staffing needs..."
          />

          <button type="submit" className="btn-primary form-btn">
            Submit Request
          </button>
        </form>
      </section>
    </main>
  );
}