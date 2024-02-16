"use client"; // Error components must be Client Components

import { Aperture } from "lucide-react";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
    if (typeof window !== "undefined") {
      setTimeout(() => {
        reset();
      }, 200);
    }
  }, [error, reset]);

  return (
    <body className="flex items-center justify-center w-full h-screen overflow-hidden">
      <span onClick={() => reset()} className="animate-spin w-fit h-fit">
        <Aperture size={36} />
      </span>
    </body>
  );
}
