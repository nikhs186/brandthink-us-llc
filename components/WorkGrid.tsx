"use client";

import { useState } from "react";
import { ProjectCard } from "./Sections";
import type { Project } from "@/lib/data";

const filters = ["All", "Website", "Web App", "E-commerce", "Design"] as const;

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              active === f
                ? "bg-ink text-white shadow-soft"
                : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-14 text-center text-slate-500">No projects in this category yet. Check back soon!</p>
      )}
    </>
  );
}
