"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AdminLoginForm() {
  const router = useRouter();

  const supabase = createClient();

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    router.push("/admin/jobs");
    router.refresh();
  }

  return (
    <form className="lead-form" onSubmit={handleLogin}>
      <input
        name="email"
        type="email"
        placeholder="Admin Email"
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        required
      />

      {errorMessage && (
        <p style={{ color: "red" }}>
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        className="btn-primary form-btn"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Log In"}
      </button>
    </form>
  );
}