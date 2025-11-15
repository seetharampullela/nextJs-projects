"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const routeMap = [
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
    { name: "Forgot Password", path: "/forgot-password" },
  ];

  const pathname = usePathname();
  const [input, setInput] = React.useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          style={{
            border: "1px solid white",
            margin: "1rem",
            padding: "0.5rem",
          }}
          placeholder="Search..."
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <header style={{ padding: "1rem" }}>
        <nav>
          <ul>
            {routeMap.map((route) => {
              const isActive = route.path === pathname;
              console.log("route", isActive);
              return (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className={
                      isActive ? "font-bold mt-8" : "color-grey-500 mt-8"
                    }
                  >
                    {route.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
}
