"use client";

export default function AvailabilityBadge({
  status = "available",
  text = "Open for opportunities",
}) {
  const isAvailable = status === "available";

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
      <span className="relative flex h-2.5 w-2.5">
        {isAvailable && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            isAvailable ? "bg-green-500" : "bg-gray-500"
          }`}
        />
      </span>
      <span className="text-sm text-gray-300">{isAvailable ? text : "Not available"}</span>
    </div>
  );
}
