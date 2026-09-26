import { ArrowDown, Banknote, Crown, Headphones, Network, ShoppingBag, Users } from "lucide-react";

type Member = {
  name: string;
  role: string;
  area: string;
  icon: React.ComponentType<{ className?: string }>;
};

const CEO: Member = { name: "Mabel Rodriguez", role: "Chief Executive Officer", area: "General Management", icon: Crown };
const OPS: Member = { name: "Jesus Martinez", role: "Operations Manager", area: "Operations", icon: Network };

const DIRECTORS: Member[] = [
  { name: "Valentina Fuentes", role: "Finance Director", area: "Finance", icon: Banknote },
  { name: "Fiorella Saumett Romero", role: "Sales & Marketing Lead", area: "Sales & Marketing — Front Office", icon: ShoppingBag },
  { name: "Juan Esteban Guzman", role: "Customer Service Lead", area: "Customer Service — Front Office", icon: Headphones },
];

const TEAMS = [
  { lead: "Valentina Fuentes", unit: "Finance & Administration", detail: "Budget control, financial model and reporting for the MONTOC campaign." },
  { lead: "Fiorella Saumett Romero", unit: "Sales & Marketing team", detail: "Sales advisors running the WhatsApp Business sales route, quotations and follow-up." },
  { lead: "Juan Esteban Guzman", unit: "Customer Service team", detail: "Agents handling inquiries, requests and claims under the service quality standards." },
];

function Connector({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center text-abm-purple ${className}`} aria-hidden="true">
      <ArrowDown className="h-5 w-5" />
    </div>
  );
}

function MemberCard({ member, highlight = false }: { member: Member; highlight?: boolean }) {
  return (
    <div
      className={`mx-auto w-full max-w-xs rounded-2xl border-2 px-5 py-4 text-center shadow-[var(--shadow-soft)] ${
        highlight ? "border-abm-purple bg-accent" : "border-abm-blue/60 bg-card"
      }`}
    >
      <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground">
        <member.icon className="h-5 w-5" />
      </div>
      <p className="mt-3 text-sm font-extrabold text-abm-navy">{member.name}</p>
      <p className="mt-0.5 text-xs font-bold uppercase tracking-wide text-abm-purple">{member.role}</p>
      <p className="mt-1 text-[11px] font-semibold text-muted-foreground">{member.area}</p>
    </div>
  );
}

export function OrgChart() {
  return (
    <section id="org-chart" className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundImage: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-[11px] font-semibold uppercase text-abm-purple">
            <Network className="h-3.5 w-3.5" /> Organizational chart
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-abm-navy sm:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            How <span className="text-gradient-brand">ABM</span> is organized.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A clear hierarchy keeps the MONTOC campaign accountable: general management, operations coordination, and the three areas that deliver every result.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl rounded-2xl border border-border bg-card/60 p-6 shadow-[var(--shadow-card)] sm:p-10">
          <MemberCard member={CEO} highlight />
          <Connector className="my-3" />
          <MemberCard member={OPS} />
          <Connector className="my-3" />

          <div className="grid gap-6 md:grid-cols-3">
            {DIRECTORS.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>

          <Connector className="my-3" />

          <div className="grid gap-5 md:grid-cols-3">
            {TEAMS.map((team) => (
              <div key={team.unit} className="rounded-xl border border-border bg-card p-5 text-center shadow-[var(--shadow-soft)]">
                <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-accent text-abm-purple">
                  <Users className="h-5 w-5" />
                </div>
                <p className="mt-3 text-sm font-bold text-abm-navy">{team.unit}</p>
                <p className="mt-0.5 text-[11px] font-semibold uppercase text-muted-foreground">Reports to: {team.lead}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{team.detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-border pt-5 text-center text-xs leading-relaxed text-muted-foreground">
            Front-office teams (Customer Service and Sales &amp; Marketing) operate the MONTOC campaign on WhatsApp Business and email,
            coordinated by Operations and supported by Finance.
          </p>
        </div>
      </div>
    </section>
  );
}
