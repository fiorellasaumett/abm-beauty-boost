import { useState } from "react";
import { MessageCircle, Mail, CheckCircle2, Workflow, GaugeCircle, MoveRight } from "lucide-react";

import { CUSTOMER_SERVICE, SALES } from "@/lib/process-protocols";

const TABS = {
  service: {
    label: "Customer Service",
    objective:
      "To attend to and resolve MONTOC customers' inquiries, requests and claims in a clear, quick and respectful way, in order to guarantee their satisfaction and trust in the brand.",
    tasks: [
      "Answer questions about products and services.",
      "Provide information about prices, availability and purchasing methods.",
      "Handle claims and requests.",
      "Guide customers on how to use makeup tools.",
      "Record every interaction.",
      "Confirm that the customer received a solution.",
    ],
    touchpoints: CUSTOMER_SERVICE,
    standards: [
      "First response time: maximum 5 minutes during business hours.",
      "Correct and updated information: at least 98%.",
      "Correctly recorded cases: 100%.",
      "Respectful treatment and professional language: 100%.",
      "Claims answered within 24 hours.",
      "Customer satisfaction: at least 90%.",
    ],
  },
  sales: {
    label: "Sales & Marketing",
    objective:
      "To promote MONTOC products, identify customers' needs and increase sales through personalized service using WhatsApp Business, supported by email for formal follow-up.",
    tasks: [
      "Present products and their benefits.",
      "Identify the customer's needs.",
      "Recommend appropriate makeup tools.",
      "Send catalogs, photographs and updated prices.",
      "Prepare quotations.",
      "Record sales opportunities.",
      "Confirm orders and follow up.",
      "Promote campaigns and featured products.",
    ],
    touchpoints: SALES,
    standards: [
      "Response to potential customers: maximum 5 minutes during business hours.",
      "Updated product and price information: 100%.",
      "Orders recorded without errors: at least 98%.",
      "Quotations sent correctly: at least 95%.",
      "Order follow-up completed: 100%.",
      "Compliance with the conditions offered: 100%.",
      "Customer satisfaction: at least 90%.",
    ],
  },
} as const;

export function ProcessRoutes() {
  const [tab, setTab] = useState<keyof typeof TABS>("service");
  const data = TABS[tab];

  return (
    <section id="process-routes" className="relative py-24 lg:py-32" style={{ background: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-abm-purple">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundImage: "var(--gradient-brand)" }} />
            Process routes
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>
            Selected BPO services for <span className="text-gradient-brand">MONTOC</span>.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Customer Service and Sales &amp; Marketing are delivered as front-office operations. Each touchpoint defines what
            happens, how the advisor must act and the expected result.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:flex-row sm:items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ backgroundImage: "var(--gradient-brand)" }}>
              <MessageCircle className="h-6 w-6 text-primary-foreground" />
            </span>
            <div>
              <p className="flex flex-wrap items-center gap-2 font-semibold text-abm-navy">
                WhatsApp Business
                <span className="rounded-full bg-abm-purple/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-abm-purple">
                  Primary channel
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                It allows the team to answer questions, receive orders, send product information and keep direct, real-time
                communication with MONTOC customers.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:flex-row sm:items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-abm-blue/40 bg-accent">
              <Mail className="h-6 w-6 text-abm-blue" />
            </span>
            <div>
              <p className="flex flex-wrap items-center gap-2 font-semibold text-abm-navy">
                Email
                <span className="rounded-full bg-abm-blue/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-abm-blue">
                  Secondary channel
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                Used for formal communication: catalogs, quotations, order confirmations and written follow-up of requests
                and claims.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 inline-flex flex-wrap gap-2 rounded-2xl border border-border bg-card p-2 shadow-[var(--shadow-soft)]">
          {(Object.keys(TABS) as Array<keyof typeof TABS>).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                tab === key ? "text-primary-foreground shadow-[var(--shadow-glow)]" : "text-muted-foreground hover:text-abm-purple"
              }`}
              style={tab === key ? { backgroundImage: "var(--gradient-brand)" } : undefined}
            >
              {TABS[key].label} — Front Office
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <h3 className="text-lg font-bold text-abm-navy">Process objective</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{data.objective}</p>
          <h4 className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-abm-purple">
            <Workflow className="h-4 w-4" /> Main tasks
          </h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {data.tasks.map((t) => (
              <li key={t} className="flex gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-abm-blue" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Process route diagram */}
        <div className="mt-10 overflow-x-auto rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-card)] sm:p-8">
          <div className="min-w-[860px]">
            <div className="inline-flex rounded-xl border-2 border-abm-purple px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-abm-purple">
              Process route
            </div>
            <p className="mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Touchpoints
              <span className="inline-flex items-center gap-1 rounded-full border border-abm-purple/40 bg-accent/50 px-2 py-0.5 text-[10px] normal-case tracking-normal text-abm-purple">
                <MoveRight className="h-3 w-3" /> What and How go together
              </span>
            </p>

            <div className="mt-4 grid grid-cols-[190px_28px_1fr_300px] gap-4">
              <div className="rounded-xl border-2 border-abm-blue py-3 text-center text-sm font-bold uppercase tracking-wider text-abm-blue">
                What
              </div>
              <div />
              <div className="rounded-xl border-2 border-abm-blue py-3 text-center text-sm font-bold uppercase tracking-wider text-abm-blue">
                How — Protocols
              </div>
              <div className="rounded-xl border-2 border-abm-blue py-3 text-center text-sm font-bold uppercase tracking-wider text-abm-blue">
                Expected result — Quality standards
              </div>
            </div>

            {data.touchpoints.map((tp, i) => (
              <div key={tp.n} className="mt-4 grid grid-cols-[190px_28px_1fr_300px] items-stretch gap-4">
                <div className="flex flex-col">
                  <div className="rounded-xl px-3 py-4 text-center shadow-[var(--shadow-soft)]" style={{ backgroundImage: "var(--gradient-brand)" }}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground/80">
                      Step {i + 1}
                    </p>
                    <p className="mt-1 text-sm font-bold text-primary-foreground">{tp.title}</p>
                  </div>
                  <p className="mt-2 px-1 text-xs leading-relaxed text-muted-foreground">{tp.what}</p>
                  {i < data.touchpoints.length - 1 && (
                    <div className="mx-auto mt-auto flex flex-col items-center pt-3">
                      <span className="h-6 w-px bg-abm-blue" />
                      <span className="-mt-1 h-2 w-2 rotate-45 border-b-2 border-r-2 border-abm-blue" />
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-center">
                  <MoveRight className="h-5 w-5 text-abm-purple" />
                </div>

                <div className="rounded-xl border-2 border-dashed border-abm-purple/60 bg-accent/40 p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-abm-purple">Protocols</p>
                  <ul className="mt-2 space-y-1.5">
                    {tp.how.map((h) => (
                      <li key={h} className="text-sm text-muted-foreground">• {h}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border-2 border-abm-navy/30 p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-abm-navy">Quality standards</p>
                  <ul className="mt-2 space-y-1.5">
                    {tp.result.map((r) => (
                      <li key={r} className="text-sm text-muted-foreground">• {r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <h3 className="flex items-center gap-2 text-lg font-bold text-abm-navy">
            <GaugeCircle className="h-5 w-5 text-abm-purple" /> Service quality standards
          </h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {data.standards.map((s) => (
              <li key={s} className="flex gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-abm-blue" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Customer Service and Sales &amp; Marketing allow MONTOC to properly assist its customers, promote its products and
            increase sales. WhatsApp Business and email make communication quick and direct, protocols standardize service,
            and quality standards make it possible to measure every process.
          </p>
        </div>
      </div>
    </section>
  );
}
