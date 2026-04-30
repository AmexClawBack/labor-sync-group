export const metadata = {
  title: "Skilled Trades Staffing | Labor Sync Group",
  description:
    "Skilled trades staffing for welders, fabricators, ironworkers, millwrights, maintenance techs, and field crews.",
};

export default function SkilledTradesStaffing() {
  return (
    <main>
      <section className="industry-hero trades-bg">
        <div className="industry-overlay">
          <p className="eyebrow">SKILLED TRADES STAFFING</p>
          <h1>Reliable Skilled Trades Workforce Solutions</h1>
          <p className="industry-lead">
            Labor Sync Group connects contractors and industrial employers with
            dependable skilled trades professionals.
          </p>
          <a href="/employers" className="btn-primary">
            Request Skilled Trades Staff
          </a>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Tradespeople Ready for Demanding Work</h2>
        <p className="section-lead">
          From jobsite support to industrial projects, we help employers source
          skilled workers who understand safety, productivity, and reliability.
        </p>

        <div className="grid">
          {["Welders", "Fabricators", "Ironworkers", "Millwrights", "Maintenance Technicians", "Field Labor Support"].map((item) => (
            <div className="card" key={item}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}