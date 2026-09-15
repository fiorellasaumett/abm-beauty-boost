import { useState } from "react";
import { MessageCircle, CheckCircle2, Workflow, GaugeCircle } from "lucide-react";

type Touchpoint = { n: string; title: string; what: string; how: string[]; result: string[] };

const CUSTOMER_SERVICE: Touchpoint[] = [
  {
    n: "01",
    title: "Contact reception",
    what: "The customer contacts MONTOC through WhatsApp Business.",
    how: [
      "Reply within a maximum of 5 minutes during business hours.",
      "Use the company's standard greeting.",
      "Introduce yourself by name.",
      "Ask for the customer's name and the reason for contacting the company.",
    ],
    result: [
      "The customer receives a quick and polite response.",
      "The initial information is recorded.",
      "The customer's need is correctly identified.",
    ],
  },
  {
    n: "02",
    title: "Identifying the customer's need",
    what: "The customer's inquiry, request or claim is identified.",
    how: [
      "Listen to or read the customer's message carefully.",
      "Do not interrupt or respond aggressively.",
      "Classify the case as inquiry, request or claim.",
      "Check the available information in the catalog or system.",
    ],
    result: [
      "The case is correctly classified.",
      "The advisor understands the customer's need.",
      "Incorrect information is avoided.",
    ],
  },
  {
    n: "03",
    title: "Providing a solution",
    what: "The inquiry is answered or a solution is proposed.",
    how: [
      "Explain the information using simple language.",
      "Provide accurate information about products, prices and availability.",
      "For a claim, show empathy and request the necessary information.",
      "Escalate to the appropriate department when the advisor cannot solve the case.",
      "Do not promise solutions that the company cannot provide.",
    ],
    result: [
      "The customer receives a clear and useful answer.",
      "The solution corresponds to the customer's need.",
      "Claims are handled formally and respectfully.",
    ],
  },
  {
    n: "04",
    title: "Closing and follow-up",
    what: "The solution is confirmed and the interaction is closed.",
    how: [
      "Ask if the customer needs any additional information.",
      "Confirm the agreements, orders or commitments.",
      "Record the result of the interaction.",
      "Say goodbye using a polite message.",
      "Follow up when the case is still pending.",
    ],
    result: [
      "The customer knows what to do next.",
      "The interaction is properly documented.",
      "Customer satisfaction is maintained.",
    ],
  },
];

const SALES: Touchpoint[] = [
  {
    n: "01",
    title: "Customer contact and attraction",
    what: "Contact is established with a potential customer.",
    how: [
      "Reply to the message politely.",
      "Briefly introduce MONTOC Cosmetic Tools.",
      "Ask what type of product the customer is looking for.",
      "Avoid sending advertising before understanding the customer's needs.",
      "Use only images and prices authorized by the company.",
    ],
    result: [
      "The customer understands who MONTOC is.",
      "The customer's initial interest is identified.",
      "Communication is personalized and not invasive.",
    ],
  },
  {
    n: "02",
    title: "Identifying customer needs",
    what: "The customer's needs are analyzed in order to offer an appropriate product.",
    how: [
      "Ask whether the customer is a professional makeup artist or a regular consumer.",
      "Identify the type of tool the customer is looking for.",
      "Ask about quantity, budget and intended use.",
      "Recommend products according to the customer's real needs.",
      "Do not exaggerate product characteristics or promise impossible results.",
    ],
    result: [
      "The recommendation matches the customer's profile.",
      "The customer receives useful options.",
      "The possibility of a satisfactory purchase increases.",
    ],
  },
  {
    n: "03",
    title: "Presenting the offer",
    what: "Products that may interest the customer are presented.",
    how: [
      "Send the product name, photograph, price and main characteristics.",
      "Explain the benefits of each product.",
      "Inform the customer about availability and estimated delivery time.",
      "Clearly present current promotions.",
      "Compare options without criticizing other products.",
    ],
    result: [
      "The customer has enough information to make a decision.",
      "The offer is clear, updated and attractive.",
      "False or incomplete information is not provided.",
    ],
  },
  {
    n: "04",
    title: "Confirming the sale",
    what: "The customer decides to buy and the order details are recorded.",
    how: [
      "Confirm the product, quantity, price and total value.",
      "Verify the delivery information.",
      "Inform the customer about the authorized payment methods.",
      "Record the order in the established system or format.",
      "Repeat the information before finishing to avoid mistakes.",
    ],
    result: [
      "The order is correctly recorded.",
      "The customer knows the purchasing conditions.",
      "Errors involving products, quantities and addresses are reduced.",
    ],
  },
  {
    n: "05",
    title: "Follow-up and customer loyalty",
    what: "The result of the sale is verified and the relationship with the customer is maintained.",
    how: [
      "Confirm that the order was received.",
      "Ask whether the product arrived in good condition.",
      "Solve any questions after the purchase.",
      "Ask for an opinion or evaluation of the service.",
      "Share future updates only when they are relevant.",
    ],
    result: [
      "The relationship with the customer is strengthened.",
      "Opportunities for future purchases are identified.",
      "MONTOC receives information to improve its service.",
    ],
  },
];

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
      "To promote MONTOC products, identify customers' needs and increase sales through personalized service using WhatsApp Business.",
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
      "Response to potential customers: maximum 10 minutes during business hours.",
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

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:flex-row sm:items-center">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ backgroundImage: "var(--gradient-brand)" }}>
            <MessageCircle className="h-6 w-6 text-primary-foreground" />
          </span>
          <div>
            <p className="font-semibold text-abm-navy">Chosen contact channel: WhatsApp Business</p>
            <p className="text-sm text-muted-foreground">
              It allows the team to answer questions, receive orders, send product information and keep direct communication
              with MONTOC customers.
            </p>
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
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Touchpoints</p>

            <div className="mt-4 grid grid-cols-[190px_1fr_300px] gap-4">
              <div className="rounded-xl border-2 border-abm-blue py-3 text-center text-sm font-bold uppercase tracking-wider text-abm-blue">
                What
              </div>
              <div className="rounded-xl border-2 border-abm-blue py-3 text-center text-sm font-bold uppercase tracking-wider text-abm-blue">
                How — Protocols
              </div>
              <div className="rounded-xl border-2 border-abm-blue py-3 text-center text-sm font-bold uppercase tracking-wider text-abm-blue">
                Expected result — Quality standards
              </div>
            </div>

            {data.touchpoints.map((tp, i) => (
              <div key={tp.n} className="mt-4 grid grid-cols-[190px_1fr_300px] items-stretch gap-4">
                <div className="flex flex-col">
                  <div className="rounded-xl px-3 py-4 text-center shadow-[var(--shadow-soft)]" style={{ backgroundImage: "var(--gradient-brand)" }}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground/80">
                      {i === 0 ? "Start" : `Step ${i + 1}`}
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


        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <h3 className="flex items-center gap-2 text-lg font-bold text-abm-navy">
              <GaugeCircle className="h-5 w-5 text-abm-purple" /> Service quality standards
            </h3>
            <ul className="mt-4 grid gap-2">
              {data.standards.map((s) => (
                <li key={s} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-abm-blue" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <h3 className="text-lg font-bold text-abm-navy">Process route vs. flow chart</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              They are not the same. A process route explains what happens at each touchpoint, how the employee should act and
              what the expected result is, organized as <strong className="text-abm-purple">WHAT → HOW → EXPECTED RESULT</strong>.
              A flow chart represents the process visually using symbols, arrows and decisions. First the process route is
              defined, and then the flow chart is created.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Customer Service and Sales &amp; Marketing allow MONTOC to properly assist its customers, promote its products and
              increase sales. WhatsApp Business makes communication quick and direct, protocols standardize service, and quality
              standards make it possible to measure every process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
