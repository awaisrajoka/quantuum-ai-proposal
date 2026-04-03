"use client";

const phases = [
  {
    num: "01",
    title: "Foundation & KPI Engine",
    weeks: "Weeks 1-3",
    start: 0,
    span: 3,
    color: "bg-accent",
    items: [
      "Project scaffolding & CI/CD pipeline",
      "Database schema & entity models",
      "KPI CRUD with governed fields",
      "Hierarchy engine (Company \u2192 Asset \u2192 Function)",
      "Manual data input forms",
    ],
    milestone: "KPI Engine operational with manual input",
  },
  {
    num: "02",
    title: "Reporting & Visualisation",
    weeks: "Weeks 3-5",
    start: 2,
    span: 3,
    color: "bg-blue-500",
    items: [
      "Executive dashboard with KPI overview",
      "Asset-level dashboard with drill-down",
      "RAG threshold logic & visual indicators",
      "Filtering by entity, time range, status",
      "Chart components (line, bar, gauge)",
    ],
    milestone: "Dashboards live with real KPI data",
  },
  {
    num: "03",
    title: "Action Management & Integration",
    weeks: "Weeks 5-7",
    start: 4,
    span: 3,
    color: "bg-purple-500",
    items: [
      "Action creation from KPI breaches",
      "Owner/assignee assignment & notifications",
      "Status lifecycle & approval workflow",
      "API ingestion framework",
      "Field mapping admin interface",
    ],
    milestone: "Full action lifecycle with API ingestion",
  },
  {
    num: "04",
    title: "Polish, Security & Handoff",
    weeks: "Weeks 7-8",
    start: 6,
    span: 2,
    color: "bg-amber-500",
    items: [
      "RBAC implementation & row-level security",
      "Audit trail & logging",
      "Performance optimization",
      "Documentation & runbooks",
      "Handoff & knowledge transfer",
    ],
    milestone: "Production-ready MVP delivered",
  },
];

export default function Delivery() {
  return (
    <section id="delivery" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            {"// DELIVERY"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Four Phases. Eight Weeks.
          </h2>
        </div>

        {/* Gantt Chart */}
        <div
          className="mt-12 bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8 overflow-x-auto"
        >
          {/* Week headers */}
          <div className="min-w-[600px]">
            <div className="grid grid-cols-8 gap-1 mb-6">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="text-center font-mono text-xs text-white/30">
                  W{i + 1}
                </div>
              ))}
            </div>

            {/* Phase bars */}
            <div className="space-y-3">
              {phases.map((phase) => (
                <div key={phase.num} className="grid grid-cols-8 gap-1 items-center">
                  {Array.from({ length: 8 }, (_, i) => {
                    const inRange = i >= phase.start && i < phase.start + phase.span;
                    const isStart = i === phase.start;
                    const isEnd = i === phase.start + phase.span - 1;
                    return (
                      <div
                        key={i}
                        className={`h-10 flex items-center justify-center text-xs font-medium ${
                          inRange
                            ? `${phase.color}/80 text-white ${isStart ? "rounded-l-lg" : ""} ${isEnd ? "rounded-r-lg" : ""}`
                            : "bg-transparent"
                        }`}
                      >
                        {isStart && (
                          <span className="truncate px-2 text-xs">{phase.title}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Phase Details */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.num}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-2xl font-bold text-white/10">{phase.num}</span>
                <div>
                  <h3 className="text-white font-semibold">{phase.title}</h3>
                  <span className="text-xs font-mono text-white/40">{phase.weeks}</span>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/60 text-sm">
                    <span className="text-white/20 mt-1.5 shrink-0 w-1 h-1 rounded-full bg-white/30" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-white/5">
                <span className="font-mono text-xs text-accent uppercase tracking-wider">Milestone: </span>
                <span className="text-white/70 text-sm">{phase.milestone}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
