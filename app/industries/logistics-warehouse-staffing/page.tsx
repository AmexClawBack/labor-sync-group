export const metadata = {
  title: "Logistics & Warehouse Staffing | Labor Sync Group",
  description:
    "Warehouse and logistics staffing for forklift operators, material handlers, pickers, packers, shipping, and receiving.",
};

export default function LogisticsWarehouseStaffing() {
  return (
    <main>
      <section className="industry-hero logistics-bg">
        <div className="industry-overlay">
          <p className="eyebrow">LOGISTICS & WAREHOUSE STAFFING</p>
          <h1>Warehouse Staffing That Keeps Distribution Moving</h1>
          <p className="industry-lead">
            Labor Sync Group supports warehouses, distribution centers, and
            logistics companies with reliable workforce solutions.
          </p>
          <a href="/employers" className="btn-primary">
            Request Warehouse Staff
          </a>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Flexible Labor for Warehouse Operations</h2>
        <p className="section-lead">
          From pickers and packers to forklift operators and shipping teams, we
          help logistics companies cover critical workforce needs.
        </p>

        <div className="grid">
          {["Forklift Operators", "Material Handlers", "Pickers & Packers", "Shipping & Receiving", "Inventory Support", "Warehouse Associates"].map((item) => (
            <div className="card" key={item}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}