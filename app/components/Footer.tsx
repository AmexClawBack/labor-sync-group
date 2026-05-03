import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">

        {/* Company */}
        <div>
          <h3>Labor Sync Group</h3>

          <p>
            Workforce solutions for healthcare, skilled trades,
            manufacturing, logistics, and construction employers.
          </p>

          <p>
            Serving Virginia, North Carolina, Maryland, DC, and
            expanding markets.
          </p>
        </div>

        {/* Industries */}
        <div>
          <h4>Industries</h4>

          <div className="footer-links">
            <Link href="/industries/healthcare-staffing">
              Healthcare Staffing
            </Link>

            <Link href="/industries/skilled-trades-staffing">
              Skilled Trades Staffing
            </Link>

            <Link href="/industries/manufacturing-staffing">
              Manufacturing Staffing
            </Link>

            <Link href="/industries/logistics-warehouse-staffing">
              Logistics Staffing
            </Link>

            <Link href="/industries/construction-labor-staffing">
              Construction Staffing
            </Link>
          </div>
        </div>

        {/* Employers */}
        <div>
          <h4>Solutions</h4>

          <div className="footer-links">
            <Link href="/employers">
              Request Talent
            </Link>

            <Link href="/apply">
              Find Work
            </Link>

            <Link href="/locations/virginia/virginia-beach-staffing">
              Virginia Locations
            </Link>

            <Link href="/locations/north-carolina/charlotte-staffing">
              North Carolina Locations
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4>Contact</h4>

          <div className="footer-links">
            <a href="tel:7572316809">
              (757) 231-6809
            </a>

            <a href="mailto:info@laborsyncgroup.com">
              info@laborsyncgroup.com
            </a>

            <p>
              Hampton Roads, Virginia
            </p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Labor Sync Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}