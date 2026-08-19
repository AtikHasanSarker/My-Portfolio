"use client";

import { MapPin } from "lucide-react";

export default function LocationBadge({
  location = "Noakhali, Bangladesh",
}) {
  return (
    <div className="inline-flex items-center gap-1.5">
      <MapPin className="w-4 h-4" />
      <span className="text-sm">{location}</span>
    </div>
  );
}
