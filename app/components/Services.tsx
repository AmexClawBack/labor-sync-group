import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Temporary Staffing",
      text: "Flexible workforce support for call-outs, short-term projects, seasonal demand, and urgent coverage.",
    },
    {
      title: "Temp-to-Hire",
      text: "Evaluate candidates on the job before making a long-term hiring decision.",
    },
    {
      title: "Direct Hire",
      text: "Recruit qualified candidates for permanent roles in healthcare, logistics, skilled trades, and manufacturing.",
    },
    {
      title: "Onsite Workforce Support",
      text: "Support for larger workforce needs, jobsite coordination, and high-volume staffing requirements.",
    },
  ];

  const industries = [
    {
      name: "Healthcare",
      href: "/industries/healthcare-staffing",
    },
    {
      name: "Skilled Trades",
      href: "/industries/skilled-trades-staffing",
    },
    {
      name: "Manufacturing",
      href: "/industries/manufacturing-staffing",
    },
    {
      name: "Logistics & Warehouse",
      href: "/industries/logistics-warehouse-staffing",
    },
    {
      name: "Construction Labor",
      href: "/industries/construction-labor-staffing",
    },
  ];

  return (
    <>
      <section className="trust-bar">
        {industries.map((industry) => (
          <Link
            href={industry.href}
            key={industry.name}
            className="trust-link"
          >
            {industry.name}
          </Link>
        ))}
      </section>

      <section id="hire" className="section">
        <p className="eyebrow center">EMPLOYER SOLUTIONS</p>

        <h2 className="section-title">
          Need dependable workers fast?
        </h2>

        <p className="section-lead">
          Labor Sync Group helps employers fill critical roles with qualified
          candidates for temporary, temp-to-hire, direct hire, and project-based
          workforce needs.
        </p>

        <div className="grid">
          {services.map((service) => (
            <div className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}