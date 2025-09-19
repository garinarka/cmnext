"use client";

import { useState } from "react";
import { UserForm } from "@/components/user-form";
import { UserList } from "@/components/user-list";

export default function Home() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="max-w-lg mx-auto space-y-8">
      <h1 className="text-2xl font-bold">User Management</h1>
      <UserForm onUserCreated={() => setRefresh(!refresh)} />
      <UserList key={refresh.toString()} />
    </div>
  );
}
