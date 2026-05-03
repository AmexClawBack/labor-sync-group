import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/index";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PublicJobPostingPage({ params }: Props) {
  const { slug } = await params;
  const supabase = createClient();

  const { data: job } = await supabase
    .from("jobs")
    .select("*")
    .eq("slug", slug)
    .eq("is_active", true)
    .maybeSingle();

  if (!job) {
    return notFound();
  }

  return (
    <main>
      <section className="industry-hero healthcare-bg">
        <div className="industry-overlay">
          <p className="eyebrow">NOW HIRING</p>

          <h1>{job.title}</h1>

          <p className="industry-lead">
            {job.city}, {job.state} • {job.pay_range}
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Job Description</h2>

        <p className="section-lead">{job.description}</p>

        <div className="grid">
          <div className="card">
            <h3>Industry</h3>
            <p>{job.industry}</p>
          </div>

          <div className="card">
            <h3>Employment Type</h3>
            <p>{job.job_type}</p>
          </div>

          <div className="card">
            <h3>Requirements</h3>
            <p>{job.requirements}</p>
          </div>
        </div>
      </section>

      <section className="job-seeker-section">
        <p className="eyebrow center">READY TO APPLY?</p>

        <h2 className="section-title white-text">
          Start Your Application Today
        </h2>

        <div style={{ textAlign: "center" }}>
          <a
            href={`/apply?job=${job.slug}&job_id=${job.id}`}
            className="btn-primary"
          >
            Apply Now
          </a>
        </div>
      </section>
    </main>
  );
}