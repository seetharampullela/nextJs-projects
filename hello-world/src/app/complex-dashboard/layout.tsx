"use client";
import React from "react";

import { useSearchParams } from "next/navigation";

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: Readonly<{
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}>) {
  const routeParams = useSearchParams();
  const loginSuccesss = routeParams.get("logInSuccess");
  const loggedIn = loginSuccesss === "true";

  return loggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex" }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}
