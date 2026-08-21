"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 transition-colors duration-300 mb-10 cursor-pointer"
    >
      <ArrowLeft size={18} />
      <span className="text-sm font-medium">Back to Projects</span>
    </button>
  );
}
