export default function WhyUs() {
  const reasons = [
    {
      title: "Fast Response",
      text: "Open shifts and unfilled roles cost money. We focus on fast communication and quick workforce support.",
    },
    {
      title: "Pre-Screened Talent",
      text: "Candidates are reviewed for experience, reliability, professionalism, and fit before placement.",
    },
    {
      title: "Industry Knowledge",
      text: "We understand healthcare staffing, construction labor, logistics, manufacturing, and skilled trades environments.",
    },
    {
      title: "Flexible Staffing Models",
      text: "Temporary, temp-to-hire, direct hire, and project-based workforce support built around your needs.",
    },
    {
      title: "Professional Process",
      text: "Clear communication, organized onboarding, and employer-focused support from first contact to placement.",
    },
    {
      title: "Built to Scale",
      text: "A modern staffing partner designed to grow with your workforce demand across multiple industries.",
    },
  ];

  return (
    <section className="section">
      <p className="eyebrow center">WHY LABOR SYNC GROUP</p>
      <h2 className="section-title">
        Reliable Staffing Built Around Your Business
      </h2>
      <p className="section-lead">
        We combine speed, screening, and industry-focused recruiting to help
        employers fill critical workforce gaps.
      </p>

      <div className="grid">
        {reasons.map((reason) => (
          <div className="card" key={reason.title}>
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}