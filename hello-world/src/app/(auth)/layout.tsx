"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}
