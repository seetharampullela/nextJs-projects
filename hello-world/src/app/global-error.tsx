"use client";

export default function GlobalError() {
  return (
    <div>
      <h2>something went wrong</h2>
      <button
        onClick={() => {
          window.location.reload();
        }}
        className="bg-blue-500 text-white rounded p-2"
      >
        Refresh
      </button>
    </div>
  );
}

// "use client";

// export default function GlobalError({
//   error,
//   reset,
// }: {
//   error: Error & { digest?: string };
//   reset: () => void;
// }) {
//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Something went wrong</h2>

//       <button
//         onClick={() => reset()}
//         style={{
//           background: "blue",
//           color: "white",
//           padding: "8px 12px",
//           borderRadius: 4,
//         }}
//       >
//         Try again
//       </button>
//     </div>
//   );
// }
