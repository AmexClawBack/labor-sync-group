export default function Resources() {
  const articles = [
    {
      title: "2026 Healthcare Staffing Outlook",
      text: "Hiring trends, retention strategies, and workforce demand in healthcare.",
    },
    {
      title: "How to Reduce No-Shows in Skilled Labor Staffing",
      text: "Strategies employers can use to improve attendance and workforce reliability.",
    },
    {
      title: "Temp-to-Hire vs Direct Hire",
      text: "Choosing the right staffing model for your operation and long-term growth.",
    },
    {
      title: "Warehouse Staffing Best Practices",
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
          <div className="card" key={article.title}>
            <h3>{article.title}</h3>
            <p>{article.text}</p>

            <a
              href="#"
              style={{
                color: "#00A99D",
                fontWeight: "bold",
              }}
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}