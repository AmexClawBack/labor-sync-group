import Link from "next/link";

export default function Locations() {
  const locations = [
    {
      state: "Virginia",
      cities: [
        ["Virginia Beach", "/locations/virginia/virginia-beach-staffing"],
        ["Norfolk", "/locations/virginia/norfolk-staffing"],
        ["Chesapeake", "/locations/virginia/chesapeake-staffing"],
        ["Hampton", "/locations/virginia/hampton-staffing"],
        ["Newport News", "/locations/virginia/newport-news-staffing"],
        ["Richmond", "/locations/virginia/richmond-staffing"],
      ],
    },
    {
      state: "North Carolina",
      cities: [
        ["Charlotte", "/locations/north-carolina/charlotte-staffing"],
        ["Raleigh", "/locations/north-carolina/raleigh-staffing"],
        ["Greensboro", "/locations/north-carolina/greensboro-staffing"],
        ["Wilmington", "/locations/north-carolina/wilmington-staffing"],
      ],
    },
  ];

  return (
    <section className="section">
      <p className="eyebrow center">LOCATIONS</p>
      <h2 className="section-title">Areas We Serve</h2>
      <p className="section-lead">
        Labor Sync Group provides workforce solutions across Virginia, North
        Carolina, and surrounding markets.
      </p>

      <div className="location-grid">
        {locations.map((group) => (
          <div className="card" key={group.state}>
            <h3>{group.state}</h3>

            <div className="location-links">
              {group.cities.map(([city, href]) => (
                <Link href={href} key={city}>
                  {city} Staffing →
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}