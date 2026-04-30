import Link from "next/link";

export default function Industries() {
  const industries = [
    {
      title: "Healthcare Staffing",
      href: "/industries/healthcare-staffing",
      text: "CNAs, nurses, caregivers, and medical support staff.",
    },
    {
      title: "Skilled Trades Staffing",
      href: "/industries/skilled-trades-staffing",
      text: "Welders, fabricators, ironworkers, and field support.",
    },
    {
      title: "Manufacturing Staffing",
      href: "/industries/manufacturing-staffing",
      text: "Production workers, machine operators, and assembly support.",
    },
    {
      title: "Logistics & Warehouse Staffing",
      href: "/industries/logistics-warehouse-staffing",
      text: "Forklift operators, pickers, packers, shipping, receiving, and warehouse support.",
    },
    {
      title: "Construction Labor Staffing",
      href: "/industries/construction-labor-staffing",
      text: "General labor, construction helpers, site support, and project-based crews.",
    },
  ];

  return (
    <section id="industries" className="section section-light">
      <p className="eyebrow center">INDUSTRIES</p>

      <h2 className="section-title">Industries We Serve</h2>

      <p className="section-lead">
        Labor Sync Group provides workforce solutions across healthcare,
        skilled trades, manufacturing, logistics, and construction.
      </p>

      <div className="grid">
        {industries.map((industry) => (
          <Link
            href={industry.href}
            className="card linked-card"
            key={industry.title}
          >
            <h3>{industry.title}</h3>

            <p>{industry.text}</p>

            <span>Learn More →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}