import Link from "next/link";
import AdminLogoutButton from "@/app/components/AdminLogoutButton";

export default function AdminNav() {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        padding: "14px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      <Link
        href="/admin"
        style={{
          fontWeight: 800,
          fontSize: "18px",
          textDecoration: "none",
          color: "#111827",
        }}
      >
        Labor Sync Admin
      </Link>

      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <Link href="/admin/jobs" style={navLink}>
          Jobs
        </Link>

        <Link href="/admin/jobs/new" style={navLink}>
          Create Job
        </Link>

        <Link href="/admin/applications" style={navLink}>
          Applications
        </Link>

        <AdminLogoutButton />
      </nav>
    </div>
  );
}

const navLink = {
  textDecoration: "none",
  color: "#111827",
  fontWeight: 600,
};