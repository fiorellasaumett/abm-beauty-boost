import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  CircleDot,
  GitBranch,
  Headphones,
  Mail,
  MessageCircle,
  RotateCcw,
  ShoppingBag,
  UserRoundCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Service = "customer" | "sales";

function FlowArrow({ label }: { label?: string }) {
  return (
    <div className="flex h-12 flex-col items-center justify-center text-abm-purple" aria-hidden="true">
      {label && <span className="mb-0.5 text-[10px] font-bold uppercase text-abm-purple">{label}</span>}
      <ArrowDown className="h-6 w-6" />
    </div>
  );
}

function Terminator({ children, end = false }: { children: React.ReactNode; end?: boolean }) {
  return (
    <div
      className={`mx-auto flex min-h-14 w-full max-w-sm items-center justify-center rounded-full border-2 px-6 py-3 text-center text-sm font-bold shadow-[var(--shadow-soft)] ${
        end ? "border-abm-purple bg-accent text-abm-purple" : "border-abm-blue bg-card text-abm-navy"
      }`}
    >
      {children}
    </div>
  );
}

function Activity({ title, owner }: { title: string; owner: string }) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-xl border-2 border-abm-blue bg-card px-5 py-4 text-center shadow-[var(--shadow-soft)]">
      <p className="text-sm font-bold text-abm-navy">{title}</p>
      <p className="mt-1 text-[11px] font-semibold uppercase text-muted-foreground">Responsible: {owner}</p>
    </div>
  );
}

function Decision({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto my-6 flex h-40 w-40 rotate-45 items-center justify-center border-2 border-abm-purple bg-accent shadow-[var(--shadow-soft)]">
      <p className="w-28 -rotate-45 text-center text-sm font-bold leading-snug text-abm-purple">{children}</p>
    </div>
  );
}

function BranchCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative min-w-0 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-abm-purple px-3 py-1 text-[10px] font-bold uppercase text-primary-foreground">
        {label}
      </span>
      <div className="pt-2 text-center text-sm font-semibold leading-relaxed text-abm-navy">{children}</div>
    </div>
  );
}

function CustomerServiceChart() {
  return (
    <div aria-label="Customer Service flow chart" className="mx-auto max-w-4xl">
      <Terminator>Start: customer contacts MONTOC on WhatsApp Business</Terminator>
      <FlowArrow />
      <Activity title="Receive, greet and record the contact" owner="Customer Service agent" />
      <FlowArrow />
      <Decision>What type of case is it?</Decision>
      <div className="grid gap-5 md:grid-cols-3">
        <BranchCard label="Inquiry">Check the catalog or system and provide accurate information.</BranchCard>
        <BranchCard label="Request">Validate the details and complete or route the requested action.</BranchCard>
        <BranchCard label="Claim">Show empathy, collect evidence and formally register the claim.</BranchCard>
      </div>
      <FlowArrow />
      <Activity title="Provide the answer or proposed solution" owner="Customer Service agent" />
      <FlowArrow />
      <Decision>Can the agent resolve it?</Decision>
      <div className="grid gap-5 md:grid-cols-2">
        <BranchCard label="Yes">Confirm the solution with the customer and document the result.</BranchCard>
        <BranchCard label="No">Escalate the case to the appropriate specialist or support area.</BranchCard>
      </div>
      <FlowArrow />
      <Activity title="Follow up on any pending commitment" owner="Agent / support area" />
      <FlowArrow />
      <Decision>Is the customer satisfied?</Decision>
      <div className="grid gap-5 md:grid-cols-2">
        <BranchCard label="Yes">Close the interaction and record the final outcome.</BranchCard>
        <BranchCard label="No">Reopen, reassess and escalate the case for a new solution.</BranchCard>
      </div>
      <FlowArrow />
      <Terminator end>End: case resolved, documented and closed</Terminator>
    </div>
  );
}

function SalesChart() {
  return (
    <div aria-label="Sales and Marketing flow chart" className="mx-auto max-w-4xl">
      <Terminator>Start: potential customer contacts MONTOC on WhatsApp Business</Terminator>
      <FlowArrow />
      <Activity title="Greet and identify the product of interest" owner="Sales advisor" />
      <FlowArrow />
      <Activity title="Qualify profile, need, quantity, budget and intended use" owner="Sales advisor" />
      <FlowArrow />
      <Decision>Is there a suitable product?</Decision>
      <div className="grid gap-5 md:grid-cols-2">
        <BranchCard label="Yes">Present authorized photos, price, benefits, availability and delivery time.</BranchCard>
        <BranchCard label="No">Offer a relevant alternative or record the need for future follow-up.</BranchCard>
      </div>
      <FlowArrow />
      <Activity title="Send the personalized offer or quotation" owner="Sales advisor" />
      <FlowArrow />
      <Decision>Does the customer accept?</Decision>
      <div className="grid gap-5 md:grid-cols-2">
        <BranchCard label="Yes">Confirm product, quantity, total, delivery details and payment method.</BranchCard>
        <BranchCard label="No">Clarify objections once and request permission for relevant follow-up.</BranchCard>
      </div>
      <FlowArrow />
      <Decision>Was an order confirmed?</Decision>
      <div className="grid gap-5 md:grid-cols-2">
        <BranchCard label="Yes">Register the order and send confirmation to the customer.</BranchCard>
        <BranchCard label="No">Record the opportunity and close the conversation respectfully.</BranchCard>
      </div>
      <FlowArrow />
      <Activity title="Confirm delivery, product condition and satisfaction" owner="Sales advisor" />
      <FlowArrow />
      <Terminator end>End: sale completed or opportunity documented for follow-up</Terminator>
    </div>
  );
}

const LEGEND = [
  { label: "Start / end", icon: CircleDot, shape: "rounded-full" },
  { label: "Activity", icon: CheckCircle2, shape: "rounded-lg" },
  { label: "Decision", icon: GitBranch, shape: "rotate-45" },
  { label: "Flow direction", icon: ArrowRight, shape: "rounded-full" },
  { label: "Responsible role", icon: UserRoundCheck, shape: "rounded-full" },
];

export function FlowCharts() {
  const [service, setService] = useState<Service>("customer");

  return (
    <section id="flow-charts" className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-[11px] font-semibold uppercase text-abm-purple">
            <GitBranch className="h-3.5 w-3.5" /> Flow charts
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-abm-navy sm:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            Visual service flows for <span className="text-gradient-brand">MONTOC</span>.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Each chart shows the sequence, responsible role and decision paths followed by the ABM team.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-2 rounded-xl border border-border bg-card p-2 shadow-[var(--shadow-soft)]">
          <Button
            type="button"
            variant={service === "customer" ? "default" : "ghost"}
            onClick={() => setService("customer")}
            className="h-auto min-h-12 gap-2 whitespace-normal px-3 py-2 text-xs sm:text-sm"
          >
            <Headphones className="h-4 w-4 shrink-0" /> Customer Service
          </Button>
          <Button
            type="button"
            variant={service === "sales" ? "default" : "ghost"}
            onClick={() => setService("sales")}
            className="h-auto min-h-12 gap-2 whitespace-normal px-3 py-2 text-xs sm:text-sm"
          >
            <ShoppingBag className="h-4 w-4 shrink-0" /> Sales &amp; Marketing
          </Button>
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-border bg-card/60 p-4 shadow-[var(--shadow-card)] sm:p-8">
          <div className="mb-10 grid gap-3 border-b border-border pb-6 sm:grid-cols-2 lg:grid-cols-5">
            {LEGEND.map((item) => (
              <div key={item.label} className="flex min-w-0 items-center gap-2 text-xs font-semibold text-muted-foreground">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center border border-abm-purple bg-accent ${item.shape}`}>
                  <item.icon className={`h-4 w-4 text-abm-purple ${item.shape === "rotate-45" ? "-rotate-45" : ""}`} />
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mb-8 grid gap-3 rounded-xl border border-abm-blue/30 bg-accent/40 p-4 sm:grid-cols-2">
            <div className="flex min-w-0 items-center gap-3">
              <MessageCircle className="h-5 w-5 shrink-0 text-abm-blue" />
              <div className="min-w-0">
                <p className="text-sm font-bold text-abm-navy">Primary channel: WhatsApp Business</p>
                <p className="text-xs text-muted-foreground">Real-time assistance and orders</p>
              </div>
            </div>
            <div className="flex min-w-0 items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-abm-purple" />
              <div className="min-w-0">
                <p className="text-sm font-bold text-abm-navy">Secondary channel: Email</p>
                <p className="text-xs text-muted-foreground">Formal communication and written follow-up</p>
              </div>
            </div>
          </div>

          {service === "customer" ? <CustomerServiceChart /> : <SalesChart />}
        </div>
      </div>
    </section>
  );
}