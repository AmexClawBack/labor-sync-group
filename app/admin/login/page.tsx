import AdminLoginForm from "../../components/AdminLoginForm";
import AdminNav from "@/app/components/AdminNav";
export const metadata = {
  title: "Admin Login | Labor Sync Group",
};

export default function AdminLoginPage() {
  return (
    <main>
      <section className="section">
        <h1 className="section-title">Admin Login</h1>
        <p className="section-lead">
          Log in to manage job postings and applications.
        </p>

        <AdminLoginForm />
      </section>
    </main>
  );
}