import { useEffect, useRef, useState } from "react";
import {
  Calendar,
  CalendarX,
  Clock,
  Crown,
  Globe,
  Headset,
  Monitor,
  Network,
  Repeat,
  ShieldCheck,
  ShoppingBag,
  Store,
  Target,
} from "lucide-react";

/* ---------------- Organization chart ---------------- */

type Node = {
  title: string;
  name?: string;
  detail?: string;
};

function OrgNode({ node, small = false, id, parent }: { node: Node; small?: boolean; id: string; parent: string }) {
  return (
    <div data-org-id={id} data-org-parent={parent}
      className={`rounded-xl border-2 border-abm-blue/50 bg-card text-center shadow-[var(--shadow-soft)] ${
        small ? "px-3 py-2.5" : "px-4 py-3"
      }`}
    >
      <p className={`font-extrabold uppercase tracking-wide text-abm-navy ${small ? "text-[11px]" : "text-xs"}`}>{node.title}</p>
      {node.name && <p className={`mt-0.5 font-bold text-abm-purple ${small ? "text-xs" : "text-sm"}`}>{node.name}</p>}
      {node.detail && <p className="mt-0.5 text-[10px] font-semibold text-muted-foreground">{node.detail}</p>}
    </div>
  );
}

const BRANCHES: { key: string; label: string; icon: React.ComponentType<{ className?: string }>; chain: Node[][] }[] = [
  {
    key: "cio",
    label: "Information",
    icon: Monitor,
    chain: [
      [{ title: "Chief Information Officer", name: "Juan Guzmán" }],
      [{ title: "IT Manager", name: "Daniel Torres" }],
      [
        { title: "Data Marshall", name: "Laura Gómez", small: true } as Node,
        { title: "Data Analysts", name: "Santiago Ruiz" },
        { title: "Systems & Security", name: "Camila Pérez" },
      ],
      [{ title: "Data Analysts — Crashplan & Data Entry", name: "Andrés López", detail: "Reports to Data Marshall" }],
    ],
  },
  {
    key: "coo",
    label: "Operations",
    icon: Network,
    chain: [
      [{ title: "Chief Operating Officer", name: "Jesús Martínez" }],
      [{ title: "Director of Operations", name: "Isabel Rojas" }],
      [{ title: "Account Manager", name: "Sebastián Vargas" }],
      [{ title: "Supervisor", name: "Paula Hernández" }],
      [
        { title: "Tech Support", name: "Mateo Rivera", detail: "Team Leader — 11 agents" },
        { title: "Customer Service", name: "Sara López", detail: "Team Leader — 12 agents" },
        { title: "Sales & Marketing", name: "Diego Hernández", detail: "Team Leader — 10 agents" },
        { title: "Back Office Services", name: "Sofía Castro", detail: "Team Leader — 8 agents" },
      ],
    ],
  },
  {
    key: "cmo",
    label: "Marketing",
    icon: ShoppingBag,
    chain: [
      [{ title: "Chief Marketing Officer", name: "Valentina Fuentes" }],
      [{ title: "Business Manager", name: "Andrés Calderón" }],
      [{ title: "Marketing & Relationship Promoters" }],
    ],
  },
  {
    key: "corp",
    label: "Corporate Affairs",
    icon: ShieldCheck,
    chain: [
      [{ title: "Corp. Affairs Director", name: "Fiorella Saumett Romero" }],
      [{ title: "HR & Talent Team", name: "Valeria García" }],
      [{ title: "Compliance Team", name: "Julián Rivas" }],
      [{ title: "Accounting Team", name: "Paula Mora" }],
    ],
  },
];

export function OrgChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<string[]>([]);
  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;
    const measure = () => {
      const root = chart.getBoundingClientRect();
      const next: string[] = [];
      chart.querySelectorAll<HTMLElement>("[data-org-parent]").forEach(child => {
        const parent = chart.querySelector<HTMLElement>(`[data-org-id="${child.dataset.orgParent}"]`);
        if (!parent) return;
        const a = parent.getBoundingClientRect(), b = child.getBoundingClientRect();
        const x1 = a.left + a.width / 2 - root.left, y1 = a.bottom - root.top;
        const x2 = b.left + b.width / 2 - root.left, y2 = b.top - root.top - 3;
        const mid = y1 + (y2 - y1) / 2;
        const siblings = Array.from(chart.querySelectorAll<HTMLElement>(`[data-org-parent="${child.dataset.orgParent}"]`));
        if (child.dataset.orgParent === "cio-2-0") {
          const side = Math.min(a.left, b.left) - root.left + 12;
          next.push(`M ${x1} ${y1} V ${y1 + 12} H ${side} V ${y2 - 12} H ${x2} V ${y2}`);
        } else if (siblings.length > 1 && child.dataset.orgParent !== "ceo") {
          const first = siblings[0]?.getBoundingClientRect();
          const firstY = first ? first.top - root.top : y2;
          const side = Math.min(...siblings.map(node => node.getBoundingClientRect().left - root.left)) - 12;
          const joint = y1 + Math.max(12, (firstY - y1) / 2);
          next.push(`M ${x1} ${y1} V ${joint} H ${side} V ${y2 - 12} H ${x2} V ${y2}`);
        } else {
          next.push(`M ${x1} ${y1} V ${mid} H ${x2} V ${y2}`);
        }
      });
      setPaths(next);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(chart);
    chart.querySelectorAll<HTMLElement>("[data-org-id]").forEach(node => observer.observe(node));
    measure();
    return () => observer.disconnect();
  }, []);
  return (
    <section id="org-chart" className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundImage: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-[11px] font-semibold uppercase text-abm-purple">
            <Network className="h-3.5 w-3.5" /> Organization chart
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-abm-navy sm:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            How <span className="text-gradient-brand">ABM</span> is structured.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Four corporate directions report to the CEO. The full chain of command, from the CEO down to the operation teams, at a glance.
          </p>
        </div>

        <div className="mx-auto mt-14 overflow-x-auto rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-card)] sm:p-8">
          <div ref={chartRef} className="relative min-w-[1120px]">
            <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible text-abm-blue" aria-label="Reporting connections">
              <defs><marker id="org-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" /></marker></defs>
              {paths.map((d, i) => <path key={i} d={d} fill="none" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#org-arrow)" />)}
            </svg>
            <div className="inline-flex rounded-xl border-2 border-abm-purple px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-abm-purple">
              Organization chart
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Chain of command — all directions and teams
            </p>

            {/* CEO */}
            <div
              data-org-id="ceo" className="relative mx-auto mt-5 w-fit rounded-xl px-8 py-4 text-center shadow-[var(--shadow-soft)]"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              <div className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/20">
                <Crown className="h-4 w-4 text-primary-foreground" />
              </div>
              <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground/80">
                Chief Executive Officer
              </p>
              <p className="text-sm font-bold text-primary-foreground">Mabel Rodriguez</p>
            </div>

            {/* Four directions side by side */}
            <div className="mt-14 grid grid-cols-4 gap-6">
              {BRANCHES.map((b) => (
                <div key={b.key} className="flex flex-col">
                  <div data-org-id={`${b.key}-direction`} data-org-parent="ceo" className="relative rounded-xl border-2 border-abm-blue bg-card py-3 text-center text-[11px] font-bold uppercase tracking-wider text-abm-blue">
                    {b.label}
                  </div>
                  {b.chain.map((level, i) => (
                    <div key={i} className="mt-10 grid gap-x-4 gap-y-10">
                      {level.map((node, j) => {
                        const parent = i === 0 ? `${b.key}-direction` : b.key === "cio" && i === 3 ? "cio-2-0" : `${b.key}-${i - 1}-0`;
                        return <div key={node.title} className={level.length > 1 ? "ml-8" : ""}>
                          <OrgNode node={node} id={`${b.key}-${i}-${j}`} parent={parent} small={level.length > 1} />
                        </div>;
                      })}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>


          <p className="mt-8 border-t border-border pt-5 text-center text-xs leading-relaxed text-muted-foreground">
            The MONTOC campaign is delivered by the Operations branch: Customer Service and Sales &amp; Marketing front-office teams,
            coordinated by the Supervisor and the Account Manager.
          </p>
        </div>
      </div>
    </section>
  );
}

type BriefRow = { icon: React.ComponentType<{ className?: string }>; label: string; value: string; multiline?: string[] };

const BRIEFS: { title: string; generalObjective: string; specificObjective: string; rows: BriefRow[] }[] = [
  {
    title: "Customer Service — Front Office",
    generalObjective:
      "To attend to and resolve MONTOC customers' inquiries, requests and claims in a clear, quick and respectful way, in order to guarantee their satisfaction and trust in the brand.",
    specificObjective:
      "To provide fast and personalized customer service through WhatsApp Business, resolving inquiries and requests efficiently.",
    rows: [
      { icon: Calendar, label: "Start date", value: "January 1, 2026" },
      { icon: CalendarX, label: "End date", value: "Indefinite" },
      { icon: Clock, label: "Operating hours", value: "Monday to Friday — 8:00 AM – 5:00 PM", multiline: ["Lunch: 12 PM – 1 PM"] },
      { icon: Store, label: "# Stations", value: "18" },
      { icon: Headset, label: "# Agents", value: "18" },
      { icon: Repeat, label: "Shifts", value: "1" },
      { icon: Globe, label: "Coverage", value: "Local" },
    ],
  },
  {
    title: "Sales & Marketing — Front Office",
    generalObjective:
      "To promote MONTOC products, identify customers' needs and increase sales through personalized service using WhatsApp Business, supported by email for formal follow-up.",
    specificObjective:
      "To identify customers' needs and recommend suitable MONTOC products through personalized service via WhatsApp Business.",
    rows: [
      { icon: Calendar, label: "Start date", value: "January 1, 2026" },
      { icon: CalendarX, label: "End date", value: "Indefinite" },
      { icon: Clock, label: "Operating hours", value: "Monday to Friday — 8:00 AM – 5:00 PM", multiline: ["Lunch: 12 PM – 1 PM"] },
      { icon: Store, label: "# Stations", value: "15" },
      { icon: Headset, label: "# Agents", value: "15" },
      { icon: Repeat, label: "Shifts", value: "1" },
      { icon: Globe, label: "Coverage", value: "Local" },
    ],
  },
];

function BriefCard({ brief }: { brief: (typeof BRIEFS)[number] }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
      <header className="px-6 py-5 text-center" style={{ backgroundImage: "var(--gradient-brand)" }}>
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary-foreground/80">Brief</p>
        <h3 className="text-lg font-extrabold text-primary-foreground sm:text-xl" style={{ fontFamily: "var(--font-display)" }}>
          {brief.title}
        </h3>
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
          Client: MONTOC Cosmetic Tools
        </p>
      </header>

      <div className="flex flex-1 flex-col gap-2.5 px-6 py-6">
        {brief.rows.map((row) => (
          <div key={row.label} className="grid grid-cols-[1fr_1.4fr] items-center gap-3">
            <div className="flex items-center gap-2.5 rounded-xl border border-abm-blue/40 bg-accent px-3 py-2.5">
              <row.icon className="h-4 w-4 shrink-0 text-abm-blue" />
              <span className="text-[11px] font-bold uppercase tracking-wide text-abm-navy">{row.label}</span>
            </div>
            <div className="rounded-xl border border-abm-purple/30 px-3 py-2.5 text-center">
              <p className="text-xs font-bold text-abm-navy sm:text-sm">{row.value}</p>
              {row.multiline?.map((line) => (
                <p key={line} className="mt-0.5 text-[11px] font-semibold text-muted-foreground">{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="border-t border-border px-6 py-6">
        <div className="flex items-center gap-2">
          <Target className="h-4 w-4 text-abm-purple" />
          <h4 className="text-sm font-extrabold uppercase tracking-wide text-abm-purple" style={{ fontFamily: "var(--font-display)" }}>
            General objective
          </h4>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{brief.generalObjective}</p>
        <div className="mt-5 flex items-center gap-2">
          <Target className="h-4 w-4 text-abm-blue" />
          <h4 className="text-sm font-extrabold uppercase tracking-wide text-abm-blue" style={{ fontFamily: "var(--font-display)" }}>
            Specific objective
          </h4>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{brief.specificObjective}</p>
      </footer>
    </article>
  );
}

export function CampaignBriefs() {
  return (
    <section id="briefs" className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundImage: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-[11px] font-semibold uppercase text-abm-purple">
            <ShoppingBag className="h-3.5 w-3.5" /> Campaign briefs
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-abm-navy sm:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            The <span className="text-gradient-brand">MONTOC</span> campaign briefs.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Client: MONTOC Cosmetic Tools. The approved Customer Service and Sales &amp; Marketing briefs are shown in full.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-7xl items-start gap-6 lg:grid-cols-2">
          {BRIEFS.map((brief) => (
            <BriefCard key={brief.title} brief={brief} />
          ))}
        </div>
      </div>
    </section>
  );
}
