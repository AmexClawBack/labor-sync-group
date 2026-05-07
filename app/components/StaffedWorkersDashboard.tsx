"use client";

import { useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/index";

type StaffedWorker = {
  id: string;
  company_name: string;
  worker_name: string;
  position: string;
  start_date: string;
  pay_rate: string;
  bill_rate: string;
  status: string;
  notes: string;
  employer_requests?: {
    company_name: string;
    industry: string;
    city?: string;
    state?: string;
    hiring_type: string;
  };
};

export default function StaffedWorkersDashboard({
  workers,
}: {
  workers: StaffedWorker[];
}) {
  const [search, setSearch] = useState("");

  const filteredWorkers = useMemo(() => {
    return workers.filter((worker) => {
      const searchable = `
        ${worker.company_name}
        ${worker.worker_name}
        ${worker.position}
        ${worker.status}
        ${worker.notes}
        ${worker.employer_requests?.company_name}
        ${worker.employer_requests?.industry}
        ${worker.employer_requests?.city}
        ${worker.employer_requests?.state}
      `.toLowerCase();

      return searchable.includes(search.toLowerCase());
    });
  }, [workers, search]);

  return (
    <div>
      <div className="card" style={{ marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Search staffed workers, company, position, city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <p>
        Showing <strong>{filteredWorkers.length}</strong> staffed workers
      </p>

      <div className="grid">
        {filteredWorkers.map((worker) => (
          <EditableWorkerCard key={worker.id} worker={worker} />
        ))}
      </div>
    </div>
  );
}

function EditableWorkerCard({ worker }: { worker: StaffedWorker }) {
  const supabase = createClient();

  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    company_name:
      worker.company_name ||
      worker.employer_requests?.company_name ||
      "",
    worker_name: worker.worker_name || "",
    position: worker.position || "",
    start_date: worker.start_date || "",
    pay_rate: worker.pay_rate || "",
    bill_rate: worker.bill_rate || "",
    status: worker.status || "Active",
    notes: worker.notes || "",
  });

  function updateField(field: string, value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function saveChanges() {
    setLoading(true);

    const { error } = await supabase
      .from("staffed_workers")
      .update(form)
      .eq("id", worker.id);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    setEditing(false);
  }

  return (
    <div className="card">
      <h3>{form.worker_name || "Unnamed Worker"}</h3>

      {!editing ? (
        <>
          <p>
            <strong>Company / Facility:</strong>{" "}
            {form.company_name || "Not listed"}
          </p>

          <p>
            <strong>Position:</strong> {form.position || "Not listed"}
          </p>

          <p>
            <strong>Start Date:</strong> {form.start_date || "Not listed"}
          </p>

          <p>
            <strong>Pay Rate:</strong> {form.pay_rate || "Not listed"}
          </p>

          <p>
            <strong>Bill Rate:</strong> {form.bill_rate || "Not listed"}
          </p>

          <p>
            <strong>Status:</strong> {form.status || "Active"}
          </p>

          <p>
            <strong>Notes:</strong> {form.notes || "No notes"}
          </p>

          <button
            type="button"
            className="btn-primary form-btn"
            onClick={() => setEditing(true)}
          >
            Edit Worker
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={form.company_name}
            onChange={(e) => updateField("company_name", e.target.value)}
            placeholder="Company / Facility Name"
          />

          <input
            type="text"
            value={form.worker_name}
            onChange={(e) => updateField("worker_name", e.target.value)}
            placeholder="Worker Name"
          />

          <input
            type="text"
            value={form.position}
            onChange={(e) => updateField("position", e.target.value)}
            placeholder="Position"
          />

          <input
            type="date"
            value={form.start_date || ""}
            onChange={(e) => updateField("start_date", e.target.value)}
          />

          <input
            type="text"
            value={form.pay_rate}
            onChange={(e) => updateField("pay_rate", e.target.value)}
            placeholder="Pay Rate"
          />

          <input
            type="text"
            value={form.bill_rate}
            onChange={(e) => updateField("bill_rate", e.target.value)}
            placeholder="Bill Rate"
          />

          <select
            value={form.status}
            onChange={(e) => updateField("status", e.target.value)}
          >
            <option>Active</option>
            <option>Pending Start</option>
            <option>Staffed</option>
            <option>No Show</option>
            <option>Ended</option>
            <option>Replaced</option>
            <option>Terminated</option>
          </select>

          <textarea
            rows={4}
            value={form.notes}
            onChange={(e) => updateField("notes", e.target.value)}
            placeholder="Notes"
          />

          <button
            type="button"
            className="btn-primary form-btn"
            disabled={loading}
            onClick={saveChanges}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>

          <button
            type="button"
            className="btn-secondary form-btn"
            onClick={() => setEditing(false)}
          >
            Cancel
          </button>
        </>
      )}
    </div>
  );
}