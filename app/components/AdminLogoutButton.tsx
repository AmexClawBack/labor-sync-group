"use client";

import { createClient } from "@/lib/supabase/index";
import { useRouter } from "next/navigation";

export default function AdminLogoutButton() {
  const supabase = createClient();
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();

    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
  onClick={handleLogout}
  className="btn-primary"
  style={{
    padding: "10px 16px",
    margin: 0,
  }}
>
  Log Out
</button>
  );
}