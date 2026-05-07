import { Suspense } from "react";
import ApplyForm from "@/app/components/ApplyForm";

export const metadata = {
  title: "Upload Resume | Labor Sync Group",
  description:
    "Upload your resume to be considered for healthcare, skilled trades, logistics, manufacturing, and construction jobs.",
};

export default function UploadResumePage() {
  return (
    <main>
      <section className="industry-hero logistics-bg">
        <div className="industry-overlay">
          <p className="eyebrow">JOB SEEKERS</p>

          <h1>Upload Your Resume</h1>

          <p className="industry-lead">
            Submit your resume to be added to our talent pool for current and
            future job opportunities.
          </p>
        </div>
      </section>

      <section className="section">
        <Suspense fallback={<p>Loading resume form...</p>}>
          <ApplyForm />
        </Suspense>
      </section>
    </main>
  );
}