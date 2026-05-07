import Industries from "@/app/components/Industries";

export const metadata = {
  title: "Industries We Serve | Labor Sync Group",
  description:
    "Healthcare staffing, skilled trades staffing, manufacturing staffing, logistics staffing, and construction labor solutions across Virginia and beyond.",
};

export default function IndustriesPage() {
  return (
    <main>
      <section className="industry-hero logistics-bg">
        <div className="industry-overlay">
          <p className="eyebrow">INDUSTRIES</p>

          <h1>Industries We Serve</h1>

          <p className="industry-lead">
            Labor Sync Group delivers workforce solutions across healthcare,
            skilled trades, manufacturing, logistics, warehouse, and
            construction industries.
          </p>
        </div>
      </section>

      <Industries />
    </main>
  );
}