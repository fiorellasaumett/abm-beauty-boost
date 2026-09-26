import { useState } from "react";
import {
  ArrowDown,
  Banknote,
  CalendarDays,
  Clock,
  Crown,
  Headphones,
  MapPin,
  Monitor,
  Network,
  ShieldCheck,
  ShoppingBag,
  Users,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ---------------- Organization chart ---------------- */

type Node = {
  title: string;
  name?: string;
  detail?: string;
};

function OrgNode({ node, small = false }: { node: Node; small?: boolean }) {
  return (
    <div
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

function Link_down() {
  return (
    <div className="flex justify-center py-1 text-abm-purple" aria-hidden="true">
      <ArrowDown className="h-4 w-4" />
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
      [{ title: "Corp. Affairs Director", name: "Fiorella Saumett" }],
      [{ title: "HR & Talent Team", name: "Valeria García" }],
      [{ title: "Compliance Team", name: "Julián Rivas" }],
      [{ title: "Accounting Team", name: "Paula Mora" }],
    ],
  },
];

export function OrgChart() {
  const [branch, setBranch] = useState("coo");
  const active = BRANCHES.find((b) => b.key === branch)!;

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
            Four corporate directions report to the CEO. Explore each branch to see the full chain of command down to the operation teams.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl rounded-2xl border border-border bg-card/60 p-6 shadow-[var(--shadow-card)] sm:p-10">
          <div className="mx-auto max-w-sm rounded-2xl border-2 border-abm-purple bg-accent px-6 py-4 text-center shadow-[var(--shadow-soft)]">
            <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground">
              <Crown className="h-5 w-5" />
            </div>
            <p className="mt-2 text-xs font-extrabold uppercase tracking-wide text-abm-navy">Chief Executive Officer</p>
            <p className="text-sm font-bold text-abm-purple">Mabel Rodriguez</p>
          </div>

          <Link_down />

          <div className="grid grid-cols-2 gap-2 rounded-xl border border-border bg-card p-2 shadow-[var(--shadow-soft)] lg:grid-cols-4">
            {BRANCHES.map((b) => (
              <Button
                key={b.key}
                type="button"
                variant={branch === b.key ? "default" : "ghost"}
                onClick={() => setBranch(b.key)}
                className="h-auto min-h-12 gap-2 whitespace-normal px-3 py-2 text-xs sm:text-sm"
              >
                <b.icon className="h-4 w-4 shrink-0" /> {b.label}
              </Button>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-md">
            {active.chain.map((level, i) => (
              <div key={i}>
                {i > 0 && <Link_down />}
                <div className={`grid gap-3 ${level.length > 1 ? "sm:grid-cols-2" : ""}`}>
                  {level.map((node) => (
                    <OrgNode key={node.title} node={node} small={level.length > 1} />
                  ))}
                </div>
              </div>
            ))}
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

/* ---------------- Campaign briefs ---------------- */

type Brief = {
  key: string;
  campaign: string;
  icon: React.ComponentType<{ className?: string }>;
  rows: { label: string; value: string; icon: React.ComponentType<{ className?: string }> }[];
  general: string;
  specific: string;
};

const BRIEFS: Brief[] = [
  {
    key: "customer",
    campaign: "Customer Service — Front Office",
    icon: Headphones,
    rows: [
      { label: "Start date", value: "January 1, 2026", icon: CalendarDays },
      { label: "End date", value: "Indefinite", icon: CalendarDays },
      { label: "Operating hours", value: "Monday to Friday, 8:00 AM – 6:00 PM", icon: Clock },
      { label: "Stations", value: "10", icon: Monitor },
      { label: "Agents", value: "18", icon: Users },
      { label: "Shifts", value: "1", icon: Clock },
      { label: "Coverage", value: "Local", icon: MapPin },
    ],
    general:
      "To attend to and resolve MONTOC customers' inquiries, requests and claims in a clear, quick and respectful way, in order to guarantee their satisfaction and trust in the brand.",
    specific:
      "To provide fast and personalized customer service through WhatsApp Business, resolving inquiries and requests efficiently.",
  },
  {
    key: "sales",
    campaign: "Sales and Marketing — Front Office",
    icon: ShoppingBag,
    rows: [
      { label: "Start date", value: "January 1, 2026", icon: CalendarDays },
      { label: "End date", value: "Indefinite", icon: CalendarDays },
      { label: "Operating hours", value: "Monday to Friday, 8:00 AM – 6:00 PM", icon: Clock },
      { label: "Stations", value: "8", icon: Monitor },
      { label: "Agents", value: "15", icon: Users },
      { label: "Shifts", value: "1", icon: Clock },
      { label: "Coverage", value: "Local", icon: MapPin },
    ],
    general:
      "To promote MONTOC products, identify customers' needs and increase sales through personalized service using WhatsApp Business, supported by email for formal follow-up.",
    specific:
      "To identify customers' needs and recommend suitable MONTOC products through personalized service via WhatsApp Business.",
  },
];

export function CampaignBriefs() {
  const [brief, setBrief] = useState("customer");
  const active = BRIEFS.find((b) => b.key === brief)!;

  return (
    <section id="briefs" className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-[11px] font-semibold uppercase text-abm-purple">
            <Banknote className="h-3.5 w-3.5" /> Campaign briefs
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-abm-navy sm:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            The <span className="text-gradient-brand">MONTOC</span> campaign briefs.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Client: MONTOC Cosmetic Tools. Each front-office campaign runs with its own staffing, schedule and objectives.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-2 rounded-xl border border-border bg-card p-2 shadow-[var(--shadow-soft)]">
          {BRIEFS.map((b) => (
            <Button
              key={b.key}
              type="button"
              variant={brief === b.key ? "default" : "ghost"}
              onClick={() => setBrief(b.key)}
              className="h-auto min-h-12 gap-2 whitespace-normal px-3 py-2 text-xs sm:text-sm"
            >
              <b.icon className="h-4 w-4 shrink-0" /> {b.campaign}
            </Button>
          ))}
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
            <h3 className="text-lg font-extrabold text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>
              Operation details
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {active.rows.map((row) => (
                <div key={row.label} className="flex items-center gap-3 rounded-xl border border-border bg-accent/40 px-4 py-3">
                  <row.icon className="h-4 w-4 shrink-0 text-abm-purple" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">{row.label}</p>
                    <p className="text-sm font-bold text-abm-navy">{row.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border-2 border-abm-blue/50 bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-2 text-abm-blue">
                <UsersRound className="h-4 w-4" />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em]">General objective</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-abm-navy">{active.general}</p>
            </div>
            <div className="rounded-2xl border-2 border-abm-purple/50 bg-accent p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-2 text-abm-purple">
                <ShieldCheck className="h-4 w-4" />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em]">Specific objective</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-abm-navy">{active.specific}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
