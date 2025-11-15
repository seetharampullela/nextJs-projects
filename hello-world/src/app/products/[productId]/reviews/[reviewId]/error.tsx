"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErroBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  /* Similar to Page Reload. Programmatic refresh */
  const router = useRouter();
  const reloadPage = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={() => reloadPage()}>Try again</button>
    </div>
  );
}
