export default function Hero() {
  return (
    <section className="hero-slider">
      <div className="hero-slide slide-1"></div>
      <div className="hero-slide slide-2"></div>
      <div className="hero-slide slide-3"></div>

      <div className="hero-blue-overlay"></div>

      <div className="hero-content">
        <p className="eyebrow">LABOR SYNC GROUP</p>

        <h1>
          Workforce Solutions for Skilled Trades, Healthcare, Manufacturing &
          Logistics
        </h1>

        <p className="hero-lead">
          Reliable staffing solutions built for employers who can’t afford to
          miss a shift.
        </p>

        <div className="hero-actions">
          <a href="/employers" className="btn-primary">
  Request Talent
</a>

<a href="/apply" className="btn-secondary">
  Find Work
</a>
        </div>
      </div>
    </section>
  );
}