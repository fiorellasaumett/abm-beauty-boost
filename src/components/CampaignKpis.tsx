import { useState } from "react";
import {
  Activity,
  Banknote,
  CalendarCheck,
  Clock,
  Headset,
  Inbox,
  PhoneCall,
  Smile,
  Star,
  Target,
  Timer,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Service = "customer" | "sales";

type CapacityRow = {
  icon: typeof Users;
  label: string;
  value: string;
};

type KpiRow = {
  icon: typeof Target;
  name: string;
  target: string;
  note?: string;
};

const PERIOD = "Campaign period: January 1st to August 10th, 2026";

const CAMPAIGNS: Record<
  Service,
  { title: string; tagline: string; capacity: CapacityRow[]; kpis: KpiRow[] }
> = {
  customer: {
    title: "Customer Service",
    tagline: "Support targets for the MONTOC campaign.",
    capacity: [
      { icon: Users, label: "Agents", value: "18" },
      { icon: Clock, label: "Hours per day", value: "8 h" },
      { icon: Activity, label: "Cases per day", value: "88" },
      { icon: Headset, label: "Cases / agent / month", value: "1,056" },
      { icon: Inbox, label: "Contact volume", value: "9,900 cases" },
    ],
    kpis: [
      {
        icon: Zap,
        name: "First Contact Resolution (FCR)",
        target: ">= 80%",
      },
      {
        icon: Timer,
        name: "Average Handle Time (AHT)",
        target: "5 minutes and 30 seconds",
      },
      {
        icon: Smile,
        name: "Customer Satisfaction (CSAT)",
        target: ">= 90% or 4.2/5",
      },
      {
        icon: Star,
        name: "Quality Assurance Score",
        target: ">= 95%",
      },
      {
        icon: PhoneCall,
        name: "Service Level Agreement (SLA)",
        target: "80/20",
        note: "80% of calls answered within 20 seconds",
      },
      {
        icon: CalendarCheck,
        name: "Schedule Adherence",
        target: ">= 95%",
      },
    ],
  },
  sales: {
    title: "Sales & Marketing",
    tagline: "Commercial targets for the MONTOC campaign.",
    capacity: [
      { icon: Users, label: "Agents", value: "15" },
      { icon: Clock, label: "Hours per day", value: "8 h" },
      { icon: Activity, label: "Cases per day", value: "80" },
      { icon: Headset, label: "Cases / agent / month", value: "960" },
      { icon: Inbox, label: "Contact volume", value: "6,600 cases" },
    ],
    kpis: [
      {
        icon: Timer,
        name: "Average Handle Time (AHT)",
        target: "6 minutes",
      },
      {
        icon: Smile,
        name: "Customer Satisfaction (CSAT)",
        target: ">= 90%",
      },
      {
        icon: Star,
        name: "Quality Assurance Score",
        target: ">= 95%",
      },
      {
        icon: CalendarCheck,
        name: "Schedule Adherence",
        target: ">= 95%",
      },
      {
        icon: TrendingUp,
        name: "Sales Conversion Rate",
        target: ">= 12%",
      },
      {
        icon: Banknote,
        name: "Revenue",
        target: "$250,000,000 COP",
      },
      {
        icon: Users,
        name: "New Customers",
        target: "200 new customers",
      },
    ],
  },
};

function CapacityStrip({ capacity }: { capacity: CapacityRow[] }) {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
      {capacity.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-abm-blue/40 bg-accent px-3 py-3 text-center"
        >
          <item.icon className="mx-auto h-4 w-4 text-abm-blue" />
          <p className="mt-1.5 text-sm font-extrabold text-abm-navy sm:text-base">{item.value}</p>
          <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function KpiGrid({ kpis }: { kpis: KpiRow[] }) {
  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {kpis.map((kpi) => (
        <article
          key={kpi.name}
          className="flex flex-col rounded-2xl border border-abm-purple/30 bg-card px-5 py-4 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ backgroundImage: "var(--gradient-brand)" }}>
              <kpi.icon className="h-4 w-4 text-primary-foreground" />
            </span>
            <h4 className="text-sm font-extrabold leading-tight text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>
              {kpi.name}
            </h4>
          </div>
          <p className="mt-3 text-lg font-extrabold text-abm-purple">{kpi.target}</p>
          {kpi.note ? (
            <p className="mt-1 text-xs font-semibold text-muted-foreground">{kpi.note}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export function CampaignKpis() {
  const [service, setService] = useState<Service>("customer");
  const campaign = CAMPAIGNS[service];

  return (
    <section id="kpis" className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-[11px] font-semibold uppercase text-abm-purple">
            <Target className="h-3.5 w-3.5" /> Campaign KPIs
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-abm-navy sm:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            Measurable targets for <span className="text-gradient-brand">MONTOC</span>.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {PERIOD}. Every KPI below defines the standard the ABM team commits to.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-2 rounded-xl border border-border bg-card p-2 shadow-[var(--shadow-soft)]">
          <Button
            type="button"
            variant={service === "customer" ? "default" : "ghost"}
            onClick={() => setService("customer")}
            className="h-auto min-h-12 gap-2 whitespace-normal px-3 py-2 text-xs sm:text-sm"
          >
            <Headset className="h-4 w-4 shrink-0" /> Customer Service
          </Button>
          <Button
            type="button"
            variant={service === "sales" ? "default" : "ghost"}
            onClick={() => setService("sales")}
            className="h-auto min-h-12 gap-2 whitespace-normal px-3 py-2 text-xs sm:text-sm"
          >
            <TrendingUp className="h-4 w-4 shrink-0" /> Sales & Marketing
          </Button>
        </div>

        <div className="mt-6">
          <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] sm:p-7">
            <header className="text-center">
              <h3
                className="text-xl font-extrabold text-abm-navy sm:text-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {campaign.title}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-abm-purple">
                Client: MONTOC Cosmetic Tools
              </p>
            </header>

            <div className="mt-6">
              <CapacityStrip capacity={campaign.capacity} />
            </div>

            <div className="mt-8 flex items-center gap-2">
              <Target className="h-4 w-4 text-abm-purple" />
              <h4 className="text-sm font-extrabold uppercase tracking-wide text-abm-purple" style={{ fontFamily: "var(--font-display)" }}>
                Key Performance Indicators
              </h4>
            </div>
            <KpiGrid kpis={campaign.kpis} />
          </div>
        </div>
      </div>
    </section>
  );
}
