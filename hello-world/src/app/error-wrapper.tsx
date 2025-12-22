"use client";
import "./globals.css";

import React from "react";

const ErrorSimulator = ({ message = "An Error Occured" }) => {
  const [error, setError] = React.useState("");

  if (error) throw new Error(error);

  return (
    <button
      title="Simulate Error"
      className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold "
      onClick={() => setError("Simulated Error!")}
    >
      Simulate Error
    </button>
  );
};

export const ErrorWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300">
      <div className="absolute top-2 right-2 -translate-y-1/2">
        <ErrorSimulator />
      </div>
      {children}
    </div>
  );
};
