"use client";

export default function ErroBoundary({ error }: { error: Error }) {
  return <h1>{error.message}</h1>;
}
