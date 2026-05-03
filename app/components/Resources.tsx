import Link from "next/link";

export default function Resources() {
  const articles = [
    {
      title: "2026 Healthcare Staffing Outlook",
      href: "/insights/2026-healthcare-staffing-outlook",
      text: "Hiring trends, retention strategies, and workforce demand in healthcare.",
    },
    {
      title: "How to Reduce No-Shows in Skilled Labor Staffing",
      href: "/insights/reduce-no-shows-skilled-labor",
      text: "Strategies employers can use to improve attendance and workforce reliability.",
    },
    {
      title: "Temp-to-Hire vs Direct Hire",
      href: "/insights/temp-to-hire-vs-direct-hire",
      text: "Choosing the right staffing model for your operation and long-term growth.",
    },
    {
      title: "Warehouse Staffing Best Practices",
      href: "/insights/warehouse-staffing-best-practices",
      text: "How distribution centers can improve retention, safety, and productivity.",
    },
  ];

  return (
    <section className="section section-light">
      <p className="eyebrow center">INSIGHTS</p>
      <h2 className="section-title">Workforce Insights</h2>
      <p className="section-lead">
        Industry trends, hiring strategies, and workforce insights for employers
        navigating today’s labor market.
      </p>

      <div className="grid">
        {articles.map((article) => (
          <Link
            href={article.href}
            className="card linked-card"
            key={article.title}
          >
            <h3>{article.title}</h3>
            <p>{article.text}</p>
            <span>Read More →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}