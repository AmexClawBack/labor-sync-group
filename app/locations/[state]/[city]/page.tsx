type Props = {
  params: Promise<{
    state: string;
    city: string;
  }>;
};

function formatSlug(slug: string) {
  return slug
    .replace("-staffing", "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default async function LocationPage({ params }: Props) {
  const { state, city } = await params;

  const stateName = formatSlug(state);
  const cityName = formatSlug(city);

  return (
    <main>
      <section className="industry-hero logistics-bg">
        <div className="industry-overlay">
          <p className="eyebrow">
            {cityName.toUpperCase()} STAFFING
          </p>

          <h1>
            Workforce Solutions in {cityName}, {stateName}
          </h1>

          <p className="industry-lead">
            Labor Sync Group provides staffing solutions for healthcare, skilled
            trades, logistics, manufacturing, and construction companies in{" "}
            {cityName}, {stateName}.
          </p>

          <a href="/employers" className="btn-primary">
            Request Talent
          </a>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">
          Staffing Solutions Built for {cityName} Employers
        </h2>

        <p className="section-lead">
          Whether you need nurses, welders, warehouse staff, or construction
          labor, Labor Sync Group helps employers in {cityName}, {stateName}
          fill critical workforce needs fast.
        </p>
      </section>
    </main>
  );
}