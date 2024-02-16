"use client"; // Error components must be Client Components

import { Aperture } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
    if (typeof window !== "undefined") {
      setTimeout(() => {
        router.push("/");
        window.location.reload();
      }, 200);
    }
  }, [error, router]);

  return (
    <body className="flex items-center justify-center w-full h-screen overflow-hidden">
      <span
        onClick={() => {
          router.push("/");
          window.location.reload();
        }}
        className="animate-spin w-fit h-fit"
      >
        <Aperture size={36} />
      </span>
    </body>
  );
}
