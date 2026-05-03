export const metadata = {
  title: "Contact Labor Sync Group",
  description:
    "Contact Labor Sync Group for staffing solutions, workforce support, or job opportunities.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="industry-hero trades-bg">
        <div className="industry-overlay">
          <p className="eyebrow">CONTACT US</p>

          <h1>
            Let's Build Your Workforce
          </h1>

          <p className="industry-lead">
            Need staffing support or have questions about opportunities?
            Our team is ready to help.
          </p>
        </div>
      </section>

      <section className="section">
        <form className="lead-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <textarea
            rows={5}
            placeholder="How can we help?"
          />

          <button
            type="submit"
            className="btn-primary form-btn"
          >
            Submit Message
          </button>

        </form>

        <div
          style={{
            marginTop: "50px",
            textAlign: "center",
          }}
        >
          <h3>Labor Sync Group</h3>

          <p>(757) 231-6809</p>

          <p>info@laborsyncgroup.com</p>

          <p>Hampton Roads, Virginia</p>
        </div>
      </section>
    </main>
  );
}