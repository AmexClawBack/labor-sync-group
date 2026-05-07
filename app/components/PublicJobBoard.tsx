"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Job = {
  id: string;
  title: string;
  slug: string;
  city: string;
  state: string;
  industry: string;
  pay_range: string;
  job_type: string;
};

export default function PublicJobBoard({ jobs }: { jobs: Job[] }) {
  const [search, setSearch] = useState("");
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const stateOptions = [...new Set(
    jobs.map((job) => job.state).filter(Boolean)
  )];

  const cityOptions = [...new Set(
    jobs.map((job) => job.city).filter(Boolean)
  )];

  const industryOptions = [...new Set(
    jobs.map((job) => job.industry).filter(Boolean)
  )];

  function toggleFilter(
    value: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  }

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title?.toLowerCase().includes(search.toLowerCase()) ||
        job.city?.toLowerCase().includes(search.toLowerCase()) ||
        job.state?.toLowerCase().includes(search.toLowerCase()) ||
        job.industry?.toLowerCase().includes(search.toLowerCase());

      const matchesState =
        states.length === 0 ||
        states.includes(job.state);

      const matchesCity =
        cities.length === 0 ||
        cities.includes(job.city);

      const matchesIndustry =
        industries.length === 0 ||
        industries.includes(job.industry);

      return (
        matchesSearch &&
        matchesState &&
        matchesCity &&
        matchesIndustry
      );
    });
  }, [jobs, search, states, cities, industries]);

  return (
    <div className="jobs-board-layout">
      <aside className="jobs-filter-sidebar card">
        <button
          type="button"
          className="job-filter-hamburger"
          onClick={() => setShowFilters(!showFilters)}
        >
          ☰ Job Filters
        </button>

        <div className={`filter-content ${showFilters ? "show" : ""}`}>
          <h3>Search Jobs</h3>

          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <FilterGroup
            title="State"
            options={stateOptions}
            selected={states}
            onToggle={(value) =>
              toggleFilter(value, states, setStates)
            }
          />

          <FilterGroup
            title="City"
            options={cityOptions}
            selected={cities}
            onToggle={(value) =>
              toggleFilter(value, cities, setCities)
            }
          />

          <FilterGroup
            title="Industry"
            options={industryOptions}
            selected={industries}
            onToggle={(value) =>
              toggleFilter(
                value,
                industries,
                setIndustries
              )
            }
          />

          <button
            type="button"
            className="btn-primary"
            style={{
              width: "100%",
              marginTop: "20px",
            }}
            onClick={() => {
              setSearch("");
              setStates([]);
              setCities([]);
              setIndustries([]);
            }}
          >
            Clear Filters
          </button>
        </div>
      </aside>

      <div>
        <p style={{ marginBottom: "20px" }}>
          Showing <strong>{filteredJobs.length}</strong> open jobs
        </p>

        <div className="grid">
          {filteredJobs.map((job) => (
            <Link
              key={job.id}
              href={`/jobs/${job.slug}`}
              className="card linked-card"
            >
              <h3>{job.title}</h3>

              <p>
                {job.city}, {job.state}
              </p>

              <p>{job.industry}</p>

              <p>{job.job_type}</p>

              <p>{job.pay_range}</p>

              <span>View Job →</span>
            </Link>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="card">
            <h3>No jobs found</h3>

            <p>
              Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterGroup({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <h4>{title}</h4>

      {options.map((option) => (
        <label
          key={option}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => onToggle(option)}
          />

          {option}
        </label>
      ))}
    </div>
  );
}