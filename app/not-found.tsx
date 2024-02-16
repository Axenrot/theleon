"use client"; // Error components must be Client Components

import { Aperture } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        router.push("/");
      }, 200);
    }
  }, [router]);

  return (
    <body className="flex items-center justify-center w-full h-screen overflow-hidden">
      <span
        onClick={() => router.push("/")}
        className="animate-spin w-fit h-fit"
      >
        <Aperture size={36} />
      </span>
    </body>
  );
}
