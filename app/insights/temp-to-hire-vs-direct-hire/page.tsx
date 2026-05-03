export const metadata = {
  title:
    "Temp-to-Hire vs Direct Hire | Which Staffing Model Is Best?",
  description:
    "Compare temp-to-hire vs direct hire staffing models and discover which approach works best for your business.",
};

export default function TempVsDirect() {
  return (
    <main className="blog-page">
      <section className="section">
        <p className="eyebrow">STAFFING INSIGHTS</p>

        <h1>
          Temp-to-Hire vs Direct Hire: Which Staffing Model Is Best?
        </h1>

        <p className="section-lead">
          Choosing the right staffing model affects retention, hiring speed,
          payroll costs, and long-term workforce stability.
        </p>

        <h2>Temp-to-Hire Benefits</h2>

        <ul>
          <li>Lower hiring risk</li>
          <li>Evaluate candidates before permanent offers</li>
          <li>Flexible workforce scaling</li>
          <li>Faster placement timelines</li>
        </ul>

        <h2>Direct Hire Benefits</h2>

        <ul>
          <li>Long-term employee retention</li>
          <li>Leadership and specialized roles</li>
          <li>Reduced turnover risk</li>
          <li>Stronger culture alignment</li>
        </ul>

        <a href="/employers" className="btn-primary">
          Request Talent
        </a>
      </section>
    </main>
  );
}