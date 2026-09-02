"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// These MUST match the grid CSS classes exactly
const CELL_SIZE = 16; // w-4 = 16px
const CELL_GAP = 4; // gap-1 = 4px
const CELL_STRIDE = CELL_SIZE + CELL_GAP; // 20px total per column

function getContributionColor(count) {
  if (count === 0) return "contribution-empty";
  if (count <= 3) return "bg-green-300";
  if (count <= 6) return "bg-green-400";
  if (count <= 9) return "bg-green-600";
  return "bg-green-800";
}

function getMonthLabels(weeks) {
  const labels = [];
  let lastMonth = -1;

  weeks.forEach((week, weekIndex) => {
    const firstDayOfWeek = week.contributionDays[0];
    if (!firstDayOfWeek) return;

    const month = new Date(firstDayOfWeek.date + "T00:00:00").getMonth();

    if (month !== lastMonth) {
      labels.push({ month: MONTHS[month], weekIndex });
      lastMonth = month;
    }
  });

  return labels;
}

export default function GitHubContributions() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch(
          `/api/github-contributions?year=${currentYear}`,
        );
        const json = await res.json();

        if (!res.ok) {
          throw new Error(json.error || "Failed to fetch");
        }

        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, [currentYear]);

  if (loading) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 animate-pulse">
          <div className="h-6 w-48 bg-white/10 rounded mb-6" />
          <div className="h-32 bg-white/5 rounded" />
        </div>
      </section>
    );
  }

  if (error || !data) {
    return null;
  }

  const { totalContributions, weeks, username, year } = data;
  const monthLabels = getMonthLabels(weeks);
  const gridWidth = weeks.length * CELL_STRIDE - CELL_GAP;

  return (
    <section className="max-w-6xl mx-auto px-4 pb-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="theme-card rounded-2xl backdrop-blur-md overflow-hidden"
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-foreground shrink-0" />
              <h3 className="text-xl font-bold">
                GitHub <span className="font-semibold">Contributions</span>
              </h3>
            </div>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors"
            >
              @{username}
            </a>
          </div>

          {/* Scrollable graph */}
          <div className="overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
            <div style={{ minWidth: gridWidth + 24 }}>
              {/* Month labels row */}
              <div className="relative h-4 mb-2" style={{ width: gridWidth }}>
                {monthLabels.map((label, i) => (
                  <span
                    key={i}
                    className="absolute leading-none"
                    style={{ left: label.weekIndex * CELL_STRIDE }}
                  >
                    {label.month}
                  </span>
                ))}
              </div>

              {/* Grid — stride here MUST equal CELL_STRIDE (20px) */}
              <div className="flex gap-1">
                {weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-1">
                    {week.contributionDays.map((day, di) => (
                      <div
                        key={di}
                        title={`${day.contributionCount} contributions on ${day.date}`}
                        className={`w-4 h-4 rounded-xs ${getContributionColor(
                          day.contributionCount,
                        )} transition-colors hover:ring-1 hover:ring-white/30`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contribution count */}
          <p className="text-sm my-4">
            <span className=" font-semibold">
              {totalContributions.toLocaleString()}
            </span>{" "}
            contributions in {year}
          </p>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 text-[10px]">
            <span>Less</span>
            <div className="contribution-empty w-4 h-4 rounded-xs" />
            <div className="w-4 h-4 rounded-xs bg-green-300" />
            <div className="w-4 h-4 rounded-xs bg-green-400" />
            <div className="w-4 h-4 rounded-xs bg-green-600" />
            <div className="w-4 h-4 rounded-xs bg-green-800" />
            <span>More</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
