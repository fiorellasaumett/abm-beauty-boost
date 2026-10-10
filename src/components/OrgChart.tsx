import {
  Crown,
  Monitor,
  Network,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";
import customerServiceBrief from "@/assets/abm-customer-service-brief.jpeg.asset.json";
import salesMarketingBrief from "@/assets/abm-sales-marketing-brief.jpeg.asset.json";

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
    <div className="mx-auto flex flex-col items-center py-1" aria-hidden="true">
      <span className="h-4 w-px bg-abm-blue" />
      <span className="-mt-1 h-2 w-2 rotate-45 border-b-2 border-r-2 border-abm-blue" />
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
          <div className="min-w-[980px]">
            <div className="inline-flex rounded-xl border-2 border-abm-purple px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-abm-purple">
              Organization chart
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Chain of command — all directions and teams
            </p>

            {/* CEO */}
            <div
              className="mx-auto mt-5 w-fit rounded-xl px-8 py-4 text-center shadow-[var(--shadow-soft)]"
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

            {/* Connector: CEO -> four directions */}
            <div className="relative mx-auto h-11 w-[86%]" aria-hidden="true">
              <div className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 bg-abm-blue" />
              <div className="absolute left-[12.5%] right-[12.5%] top-5 h-px bg-abm-blue" />
              {["12.5%", "37.5%", "62.5%", "87.5%"].map((left) => (
                <div
                  key={left}
                  className="absolute top-5 flex -translate-x-1/2 flex-col items-center"
                  style={{ left }}
                >
                  <span className="h-4 w-px bg-abm-blue" />
                  <span className="-mt-1 h-2 w-2 rotate-45 border-b-2 border-r-2 border-abm-blue" />
                </div>
              ))}
            </div>

            {/* Four directions side by side */}
            <div className="grid grid-cols-4 gap-4">
              {BRANCHES.map((b) => (
                <div key={b.key} className="flex flex-col">
                  <div className="rounded-xl border-2 border-abm-blue py-3 text-center text-[11px] font-bold uppercase tracking-wider text-abm-blue">
                    {b.label}
                  </div>
                  {b.chain.map((level, i) => (
                    <div key={i}>
                      {i > 0 && <Link_down />}
                      <div className={`grid gap-2 ${level.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                        {level.map((node) => (
                          <OrgNode key={node.title} node={node} small={level.length > 1} />
                        ))}
                      </div>
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

export function CampaignBriefs() {
  return (
    <section id="briefs" className="relative overflow-hidden py-24 lg:py-32">
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
        <div className="mx-auto mt-10 grid max-w-7xl gap-6 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
            <img src={customerServiceBrief.url} alt="ABM Customer Service front-office campaign brief for MONTOC" className="h-auto w-full" />
            <figcaption className="border-t border-border px-5 py-4 text-sm font-bold text-abm-navy">Customer Service — Front Office</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
            <img src={salesMarketingBrief.url} alt="ABM Sales and Marketing front-office campaign brief for MONTOC" className="h-auto w-full" />
            <figcaption className="border-t border-border px-5 py-4 text-sm font-bold text-abm-navy">Sales &amp; Marketing — Front Office</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
