const questions = [
  {
    num: "01",
    title: "What does your current KPI data structure look like?",
    description:
      "How many KPIs are you tracking today? Are they defined in spreadsheets, the existing KPI tool, or somewhere else? This helps us design the migration path.",
  },
  {
    num: "02",
    title: "How many organisations and assets will the MVP serve initially?",
    description:
      "Single org with a few assets, or multi-org from Day 1? This shapes the data model and RBAC setup.",
  },
  {
    num: "03",
    title: "What does the existing API broker output look like?",
    description:
      "We know it feeds into Azure. Understanding the data format (JSON, CSV, XML) and schema helps us design the field mapping layer accurately.",
  },
  {
    num: "04",
    title: "Who are the primary dashboard users?",
    description:
      "Executives, asset managers, functional leads, or all three? This determines the default views and what \"executive-quality\" means for your context.",
  },
  {
    num: "05",
    title: "What does your current action/follow-up process look like?",
    description:
      "When a KPI breaches threshold today, what happens? Email? Meeting? Spreadsheet tracker? Understanding the current workflow helps us design the action layer to match how your teams actually work.",
  },
  {
    num: "06",
    title: "Are there compliance or audit requirements we should factor in?",
    description:
      "Oil and gas is safety-critical. If there are specific regulatory frameworks or audit standards the platform needs to support, we want to know early.",
  },
];

const steps = [
  { title: "Review this proposal", desc: "Align internally on scope and priorities" },
  { title: "30-min architecture walkthrough", desc: "We walk through the data model and tech decisions live" },
  { title: "Share sample KPI data", desc: "5-10 example KPIs so we can prototype the entity model" },
  { title: "Confirm engagement", desc: "Sign off on scope, timeline, and commercial terms" },
  { title: "Strike Team begins Phase 1", desc: "Within 48 hours of confirmation" },
];

export default function Questions() {
  return (
    <section id="questions" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Part A: Questions */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            {"// BEFORE WE START"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            A Few Questions for Your Team
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl text-lg">
            To nail the architecture on the first pass, we&apos;d like to understand a few things upfront.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((q) => (
            <div
              key={q.num}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-2xl font-bold text-white/10 shrink-0">
                  {q.num}
                </span>
                <div>
                  <h3 className="text-white font-semibold mb-2">{q.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{q.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Part B: Next Steps */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Recommended Next Steps
          </h2>

          <div className="mt-10 space-y-4 max-w-2xl">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-mono text-sm font-bold shrink-0">
                  {i + 1}
                </span>
                <div>
                  <p className="text-white font-semibold">{step.title}</p>
                  <p className="text-white/50 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="https://cal.com/hamad/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-black rounded-lg px-8 py-3 font-medium hover:brightness-110 transition text-center"
            >
              Book Architecture Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
