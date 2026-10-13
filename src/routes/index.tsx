import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Sparkles, Headphones, TrendingUp, Bot, Zap, Globe2,
  MessageSquare, Mail, Phone, Users, BarChart3, ShieldCheck, Layers, Rocket,
  Target, HeartHandshake, Lightbulb, Menu, X, CheckCircle2, Send, Palette,
  FileText, AlertTriangle, Gavel, Scale, BadgeCheck, Building2, Server, Banknote,
  BookOpen, CircleAlert, Waypoints, ExternalLink,
} from "lucide-react";
import agentImg from "@/assets/agent.jpg";
import abmLogo from "@/assets/abm-logo.jpg.asset.json";
import montocFoundation from "@/assets/montoc-foundation.jpg.asset.json";
import montocShadows from "@/assets/montoc-shadows.jpg.asset.json";
import montocHighlighter from "@/assets/montoc-highlighter.png.asset.json";
import montocLipGloss from "@/assets/montoc-lip-gloss.jpg.asset.json";
import montocGlowFilter from "@/assets/montoc-glowfilter.jpg.asset.json";
import montocSunsoon from "@/assets/montoc-sunsoon.jpg.asset.json";
import montocFluffy from "@/assets/montoc-fluffy.jpg.asset.json";
import { ProcessRoutes } from "@/components/ProcessRoutes";
import { FlowCharts } from "@/components/FlowCharts";
import { CampaignBriefs, OrgChart } from "@/components/OrgChart";
import { CampaignKpis } from "@/components/CampaignKpis";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABM BPO | Customer Service & Sales" },
      { name: "description", content: "Apex Business Matrix delivers bilingual customer service and sales solutions for the beauty industry, with MONTOC as its corporate client." },
      { property: "og:title", content: "ABM BPO | Customer Service & Sales" },
      { property: "og:description", content: "Specialized BPO operations for the beauty industry from Barranquilla, Colombia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#inicio", label: "Home" },
  { href: "#nosotros", label: "Who we are" },
  { href: "#servicios", label: "Services" },
  { href: "#montoc", label: "MONTOC" },
  { href: "#process-routes", label: "Process routes" },
  { href: "#flow-charts", label: "Flow charts" },
  { href: "#org-chart", label: "Org chart" },
  { href: "#briefs", label: "Briefs" },
  { href: "#kpis", label: "KPIs" },
  { href: "#resultados", label: "Results" },
  { href: "#operations", label: "Operations" },
  { href: "#pqr", label: "PQR" },
  { href: "#contacto", label: "Contact" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BeautyFocus />
      <Montoc />
      <ProcessRoutes />
      <FlowCharts />
      <OrgChart />
      <CampaignBriefs />
      <CampaignKpis />
      <Results />
      <ProjectDepth />
      <WhyAbm />
      <Process />
      <TechStack />
      <CtaBanner />
      <Contact />
      <PQR />
      <Footer />
    </div>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all ${scrolled ? "" : ""}`}>
        <div className={`flex items-center justify-between gap-4 rounded-2xl px-4 sm:px-6 py-3 transition-all ${scrolled ? "glass-card shadow-[var(--shadow-soft)]" : "bg-transparent"}`}>
          <a href="#inicio" className="flex items-center gap-2 min-w-0">
            <Logo />
            <div className="hidden sm:block leading-tight">
              <div className="text-[13px] font-bold tracking-[0.15em] text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>APEX BUSINESS MATRIX</div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground">ABM BPO</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-foreground/80 hover:text-abm-purple transition-colors relative group">
                {n.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--gradient-brand)] transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contacto" className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]" style={{ backgroundImage: "var(--gradient-brand)" }}>
              Request a consultation <ArrowRight className="h-4 w-4" />
            </a>
            <button onClick={() => setOpen((v) => !v)} className="lg:hidden shrink-0 rounded-lg p-2 text-abm-navy" aria-label="Menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden mt-2 rounded-2xl glass-card p-4 shadow-[var(--shadow-card)] animate-fade-up">
            <div className="flex flex-col gap-1">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-accent">
                  {n.label}
                </a>
              ))}
              <a href="#contacto" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white" style={{ backgroundImage: "var(--gradient-brand)" }}>
                Request a consultation <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Logo() {
  return (
    <img src={abmLogo.url} alt="Apex Business Matrix logo" className="h-10 w-10 shrink-0 rounded-lg object-cover shadow-[var(--shadow-soft)]" />
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const logoElements = [
    { icon: Globe2, title: "The globe", text: "Expresses our commitment to growth, a forward-looking vision and the future of the services we deliver." },
    { icon: Waypoints, title: "Lines and nodes", text: "Represent continuous client-company communication, seamless integration and the local and international clients we seek to serve." },
    { icon: Palette, title: "Colors and 3D design", text: "Blue means trust; green means growth; purple means creativity and technology; yellow means optimism and teamwork. The 3D finish reflects a modern, innovative BPO." },
  ];
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-24" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center text-white">
        <div className="animate-fade-up">
          <img src={abmLogo.url} alt="Apex Business Matrix globe logo" className="mx-auto h-44 w-44 sm:h-56 sm:w-56 rounded-2xl object-cover shadow-[var(--shadow-glow)] ring-1 ring-white/20" />
          <div className="mt-7 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium tracking-wide">
            <Sparkles className="h-3.5 w-3.5 text-abm-blue" />
            Customer Service · Sales & Marketing
          </div>
          <h1 className="mx-auto mt-5 max-w-5xl text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08]" style={{ fontFamily: "var(--font-display)" }}>
            Apex Business Matrix <span className="text-gradient-brand">(ABM BPO)</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-xl sm:text-2xl font-semibold text-white/90">
            “More than outsourcing processes, we build connections that generate results.”
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 leading-relaxed">
            We chose this logo because it brings our purpose into one image: global ambition, connected service, human relationships and technology working together.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#nosotros" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-abm-navy bg-white hover:bg-white/90 transition-transform hover:scale-[1.03] shadow-[var(--shadow-soft)]">
              Who we are <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#servicios" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-abm-navy bg-white hover:bg-white/90 transition-transform hover:scale-[1.03] shadow-[var(--shadow-soft)]">
              Explore our services
            </a>
          </div>
        </div>
        <div className="mt-14 grid gap-4 text-left md:grid-cols-3">
          {logoElements.map((item) => (
            <div key={item.title} className="rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <item.icon className="h-6 w-6 text-abm-blue" />
              <h2 className="mt-4 text-lg font-bold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  const values = [
    { icon: ShieldCheck, title: "Trust & Reliability", text: "We protect every client relationship through dependable service, integrity and a workforce prepared to deliver quality." },
    { icon: Lightbulb, title: "Growth & Innovation", text: "We pursue continuous improvement, adaptability, creativity and the responsible integration of technologies such as artificial intelligence." },
    { icon: Users, title: "Optimism & Teamwork", text: "We build a positive organizational culture where collaboration, energy and shared responsibility strengthen every result." },
    { icon: Waypoints, title: "Seamless Connection", text: "We keep communication continuous and customer-centered through connected channels and strong local and international relationships." },
    { icon: BadgeCheck, title: "Excellence & Compliance", text: "We pursue COPC and ISO 27001 quality standards while complying with Colombian data protection requirements." },
  ];
  return (
    <section id="nosotros" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionEyebrow>Who we are</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>
          We transform customer experience through <span className="text-gradient-brand">technology and human talent</span>.
        </h2>
        <p className="mt-6 max-w-4xl text-lg text-muted-foreground leading-relaxed">
          Apex Business Matrix (ABM BPO) is a company specialized in Business Process Outsourcing solutions that optimize the relationship between brands and their customers. We combine highly trained human talent, technology, CRM, automation and omnichannel infrastructure to deliver efficient, reliable and customer-centric operations.
        </p>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {[
            { label: "Mission", title: "Transform customer experience", text: "To deliver comprehensive, high-quality BPO solutions by integrating artificial intelligence, process automation and omnichannel infrastructure across voice, chat and email. We turn innovation into cost reduction, faster response times and greater efficiency, supported by highly trained human talent and strict regulatory compliance." },
            { label: "Vision 2030", title: "Become an industry benchmark", text: "To establish ABM BPO as a national and international benchmark, achieve a 15% market share in outsourcing services for growing enterprises, and pursue COPC and ISO 27001 standards through adaptability, continuous innovation and sustainable human talent development." },
          ].map((item) => (
            <div key={item.label} className="relative overflow-hidden rounded-2xl p-8 text-white shadow-[var(--shadow-card)]" style={{ backgroundImage: "var(--gradient-hero)" }}>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">{item.label}</div>
              <h3 className="mt-3 text-2xl font-extrabold" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
              <p className="mt-4 leading-relaxed text-white/80">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <SectionEyebrow>Corporate values</SectionEyebrow>
          <h3 className="mt-4 max-w-2xl text-3xl sm:text-4xl font-extrabold text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>
            The principles behind <span className="text-gradient-brand">every connection</span>.
          </h3>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground"><value.icon className="h-5 w-5" /></div>
                <h4 className="mt-5 font-bold text-abm-navy">{value.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const svcs = [
    {
       icon: Headphones, title: "Customer Service", tag: "Inbound", color: "var(--abm-blue)",
       desc: "Tier 1 support and product guidance built around fast, clear and empathetic customer experiences.",
       bullets: ["Inbound support", "Product assistance", "Requests & complaints", "Omnichannel service", "CRM case management", "Customer loyalty"],
    },
    {
       icon: TrendingUp, title: "Sales & Marketing", tag: "Outbound", color: "var(--abm-purple)",
       desc: "Consultative sales and marketing campaigns that turn product guidance into measurable revenue growth.",
       bullets: ["Outbound sales", "Cross-selling & upselling", "Lead nurturing", "Personalized recommendations", "Campaign support", "Conversion optimization"],
    },
  ];
  return (
    <section id="servicios" className="relative py-24 lg:py-32" style={{ backgroundImage: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <SectionEyebrow>Services</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>
            Solutions designed to <span className="text-gradient-brand">grow your business</span>.
          </h2>
        </div>
         <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {svcs.map((s) => (
            <div key={s.title} className="group relative flex flex-col rounded-3xl bg-card p-8 border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all hover:-translate-y-1.5">
              <div className="flex items-center justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl text-white shadow-[var(--shadow-card)]" style={{ backgroundColor: s.color }}>
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-muted-foreground">{s.tag}</span>
              </div>
              <h3 className="mt-6 text-2xl font-extrabold text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-6 space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: s.color }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href={s.title === "Customer Service" ? "#customer-service-campaign" : "#sales-campaign"} className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-abm-navy group/link">
                View campaign details
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" style={{ color: s.color }} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Beauty Focus ---------------- */
function BeautyFocus() {
  const showcase = [
    { image: montocGlowFilter.url, name: "Glow Filter Luminous Pre-Base", className: "col-span-2 row-span-2" },
    { image: montocSunsoon.url, name: "Sunsoon Sunscreen SPF 50+", className: "col-span-1" },
    { image: montocFluffy.url, name: "Fluffy Brush Kit", className: "col-span-1" },
  ];
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="grid aspect-[4/3] grid-cols-3 grid-rows-2 gap-2 overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-[var(--shadow-card)]">
            {showcase.map((product) => (
              <div key={product.name} className={`group relative overflow-hidden rounded-xl bg-white ${product.className}`}>
                <img src={product.image} alt={`${product.name} by MONTOC`} width={900} height={900} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-abm-navy-deep/90 to-transparent p-3 pt-10 text-xs font-semibold text-white">{product.name}</div>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-2xl glass-card px-5 py-4 shadow-[var(--shadow-card)]">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Industry</div>
            <div className="text-sm font-bold text-abm-navy">Beauty & Skincare</div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionEyebrow>Specialization</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>
            Specialists in the <span className="text-gradient-brand">Beauty & Skincare</span> industry.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Our focus is on beauty, makeup and skincare brands, where speed, personalization and quality of service are essential to build lasting customer relationships.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">Official MONTOC product photography.</p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { l: "Beauty", c: "var(--abm-purple)" },
              { l: "Makeup", c: "var(--abm-blue)" },
               { l: "Skincare", c: "var(--abm-purple)" },
            ].map((x) => (
              <div key={x.l} className="rounded-2xl border border-border bg-card p-5 text-center hover:-translate-y-1 transition-transform">
                <div className="mx-auto h-2 w-8 rounded-full" style={{ backgroundColor: x.c }} />
                <div className="mt-3 font-bold text-abm-navy">{x.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MONTOC Case ---------------- */
function Montoc() {
  const tabs = [
    {
      key: "cs",
      label: "Customer Service",
      icon: Headphones,
      text: "A dedicated bilingual team centralizes voice, chat, email and CRM cases, combining product guidance with fast, empathetic issue resolution.",
      highlights: ["80% first-contact resolution target", "5:30 average handle time target", "4.2 / 5 minimum customer satisfaction"],
    },
    {
      key: "sales",
      label: "Sales & Marketing",
      icon: TrendingUp,
      text: "Consultative agents turn product questions into relevant recommendations through lead nurturing, campaign support, cross-selling and upselling.",
      highlights: ["200+ new-customer goal", "12% minimum conversion target", "COP 250M campaign sales goal"],
    },
  ];
  const [active, setActive] = useState(tabs[0].key);
  const cur = tabs.find((t) => t.key === active) ?? tabs[0];
  const needs = [
    "Centralize customer conversations across voice, chat, email and digital channels.",
    "Give buyers fast, accurate guidance on makeup tools, skincare accessories and product use.",
    "Reduce response and handling times while improving first-contact resolution.",
    "Convert qualified product interest into measurable customer and revenue growth.",
  ];
  const journey = [
    { step: "01", title: "Listen & diagnose", text: "Map recurring questions, buying barriers, service demand and the moments that most influence purchase decisions." },
    { step: "02", title: "Design the operation", text: "Assign specialized Customer Service and Sales & Marketing teams, supported by workforce planning and clear workflows." },
    { step: "03", title: "Connect every channel", text: "Use CRM case management and omnichannel communication to preserve context and create a consistent customer journey." },
    { step: "04", title: "Measure & improve", text: "Review service, quality and sales indicators continuously to coach agents and optimize MONTOC’s performance." },
  ];
  const products = [
    { name: "Humide Healthy Foundation", category: "Complexion", image: montocFoundation.url, href: "https://montoccosmetictools.com/products/base-humide" },
    { name: "Light Set Metallic Shadows", category: "Eyes", image: montocShadows.url, href: "https://montoccosmetictools.com/products/sombras-compactas-metalicas-light-set" },
    { name: "Light Set Highlighter", category: "Face", image: montocHighlighter.url, href: "https://montoccosmetictools.com/products/iluminador-light-set" },
    { name: "Juicy Lips Lip Gloss", category: "Lips", image: montocLipGloss.url, href: "https://montoccosmetictools.com/products/brillo-labial-juicy-lips-200" },
  ];
  return (
    <section id="montoc" className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-abm-purple/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-white">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <SectionEyebrow tone="light">Corporate client case</SectionEyebrow>
            <h2 className="mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              MONTOC: from product expertise to a <span className="text-gradient-brand">connected customer experience</span>.
            </h2>
            <p className="mt-6 max-w-3xl text-white/75 leading-relaxed">
              Founded in 2018 as a small multi-brand makeup store, MONTOC grew into a Colombian beauty company with its own line of practical, functional products. Its official website reports more than 20,000 satisfied customers and over 250 products—making every conversation a decisive moment for trust, guidance and conversion.
            </p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-sm font-semibold text-white"><BookOpen className="h-5 w-5 text-abm-blue" />The story</div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              ABM BPO became MONTOC’s strategic service partner to connect brand knowledge with disciplined customer care and consultative selling—without losing the personal attention expected in the beauty industry.
            </p>
          </div>
        </div>

        {/* Flow ABM -> MONTOC -> CUSTOMERS */}
        <div className="mt-12 grid gap-4 md:grid-cols-3 items-stretch">
          <FlowNode title="ABM BPO" sub="Strategic partner" icon={Layers} color="var(--abm-blue)" />
          <FlowNode title="MONTOC" sub="Corporate client" icon={Sparkles} color="var(--abm-purple)" />
          <FlowNode title="CUSTOMERS" sub="Optimized experience" icon={HeartHandshake} color="var(--abm-blue)" />
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-abm-blue">The brand in focus</div>
              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold" style={{ fontFamily: "var(--font-display)" }}>Real products. Informed conversations.</h3>
            </div>
            <a href="https://montoccosmetictools.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white">
              Visit MONTOC <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {products.map((product) => (
              <a key={product.name} href={product.href} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-lg border border-white/15 bg-white/5">
                <div className="aspect-square overflow-hidden bg-white">
                  <img src={product.image} alt={`${product.name} by MONTOC`} width={900} height={900} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-abm-blue">{product.category}</div>
                  <div className="mt-2 flex items-start justify-between gap-2 text-sm font-bold text-white"><span>{product.name}</span><ExternalLink className="h-3.5 w-3.5 shrink-0 text-white/45" /></div>
                </div>
              </a>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/45">Product names and photography sourced from MONTOC’s official website.</p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <div className="flex items-center gap-3 text-sm font-semibold"><CircleAlert className="h-5 w-5 text-abm-purple" />What MONTOC needed</div>
            <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold" style={{ fontFamily: "var(--font-display)" }}>Growth required a more structured customer operation.</h3>
            <div className="mt-7 space-y-3">
              {needs.map((need, index) => (
                <div key={need} className="flex gap-4 border-l-2 border-white/15 py-2 pl-4">
                  <span className="text-xs font-bold text-abm-blue">0{index + 1}</span>
                  <p className="text-sm leading-relaxed text-white/75">{need}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg glass-dark p-6 sm:p-8">
            <div className="flex items-center gap-3 text-sm font-semibold"><Waypoints className="h-5 w-5 text-abm-blue" />How ABM solved it</div>
            <div className="mt-6 grid gap-x-6 gap-y-7 sm:grid-cols-2">
              {journey.map((item) => (
                <div key={item.step} className="relative border-t border-white/15 pt-5">
                  <div className="text-xs font-bold text-abm-blue">{item.step}</div>
                  <h4 className="mt-2 font-bold">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service solution tabs */}
        <div className="mt-12 rounded-lg glass-dark p-6 sm:p-8">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-abm-blue">The solution in action</div>
            <h3 className="mt-3 text-2xl font-extrabold" style={{ fontFamily: "var(--font-display)" }}>Two specialized teams. One connected strategy.</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => {
              const activeT = t.key === active;
              return (
                <Button
                  key={t.key}
                  variant="ghost"
                  onClick={() => setActive(t.key)}
                  className={`mt-6 h-auto rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${activeT ? "text-abm-navy bg-white shadow-[var(--shadow-card)] hover:bg-white/90" : "text-white/80 border border-white/20 hover:bg-white/10 hover:text-white"}`}
                >
                  <t.icon className="h-4 w-4" />
                  {t.label}
                </Button>
              );
            })}
          </div>
          <div key={cur.key} className="mt-8 animate-fade-up">
            <div className="grid gap-7 lg:grid-cols-[1fr_1.1fr]">
              <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white" style={{ backgroundImage: "var(--gradient-brand)" }}>
                <cur.icon className="h-5 w-5" />
              </div>
                <p className="text-base text-white/85 leading-relaxed">{cur.text}</p>
              </div>
              <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
                {cur.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-3 text-sm text-white/80">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-abm-blue" />{highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <a href="#operations" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-abm-navy bg-white hover:scale-[1.03] transition-transform">
              See full strategy <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowNode({ title, sub, icon: Icon, color }: { title: string; sub: string; icon: any; color: string }) {
  return (
    <div className="relative rounded-2xl glass-dark p-6 flex items-center gap-4">
      <div className="grid h-14 w-14 place-items-center rounded-2xl text-white shrink-0" style={{ backgroundColor: color }}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-[0.25em] text-white/60">{sub}</div>
        <div className="font-extrabold text-lg text-white" style={{ fontFamily: "var(--font-display)" }}>{title}</div>
      </div>
      <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
    </div>
  );
}

/* ---------------- Results / Counters ---------------- */
function Counter({ value, suffix = "", prefix = "", decimals = 0, label, sub, color }: { value: number; suffix?: string; prefix?: string; decimals?: number; label: string; sub: string; color: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1600;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(value * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="group rounded-2xl bg-card border border-border p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all hover:-translate-y-1">
      <div className="h-1 w-10 rounded-full" style={{ backgroundColor: color }} />
      <div className="mt-4 text-3xl sm:text-4xl font-extrabold text-abm-navy tabular-nums" style={{ fontFamily: "var(--font-display)" }}>
        {prefix}{n.toFixed(decimals)}{suffix}
      </div>
      <div className="mt-2 text-sm font-semibold text-foreground/90">{label}</div>
      <div className="mt-0.5 text-xs text-muted-foreground">{sub}</div>
    </div>
  );
}

function Results() {
  return (
    <section id="resultados" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <SectionEyebrow>Dashboard</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>
            Results we can <span className="text-gradient-brand">measure</span>.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Our operating model is oriented toward measurable results, operational efficiency and customer satisfaction.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Counter value={80} suffix="%" label="Service level" sub="Operational target" color="var(--abm-blue)" />
          <Counter value={5.5} decimals={1} suffix=" min" label="AHT target" sub="Average handle time" color="var(--abm-purple)" />
          <Counter value={80} suffix="%" label="FCR target" sub="First-contact resolution" color="var(--abm-blue)" />
          <Counter value={4.2} decimals={1} suffix=" / 5" label="Minimum CSAT" sub="Customer satisfaction" color="var(--abm-purple)" />
          <Counter value={200} suffix="+" label="New customers" sub="Minimum acquisition goal" color="var(--abm-purple)" />
          <Counter value={12} suffix="%" label="Minimum conversion" sub="Close rate" color="var(--abm-blue)" />
          <Counter value={250} prefix="$" suffix="M COP" label="Sales revenue" sub="2026 campaign goal" color="var(--abm-purple)" />
          <Counter value={35} suffix="%" label="Cost reduction" sub="Value proposition" color="var(--abm-blue)" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Academic project framework ---------------- */
function ProjectDepth() {
  const [active, setActive] = useState("objectives");
  useEffect(() => {
    const selectLinkedCampaign = () => {
      if (window.location.hash === "#customer-service-campaign") setActive("customerService");
      if (window.location.hash === "#sales-campaign") setActive("sales");
    };
    selectLinkedCampaign();
    window.addEventListener("hashchange", selectLinkedCampaign);
    return () => window.removeEventListener("hashchange", selectLinkedCampaign);
  }, []);
  const panels = {
    objectives: {
      title: "2026 SMART objectives",
      icon: Target,
      intro: "From January 1 to August 10, 2026, ABM will operate against clear customer experience and growth commitments.",
      points: ["Answer 80% of inbound calls within 20 seconds", "Reduce AHT from 8:45 to 5:30", "Raise FCR from 55% to 80%", "Generate COP 250M in sales and acquire 200 customers"],
    },
    operations: {
      title: "Campaign operations",
      icon: Users,
      intro: "A bilingual operation runs Monday through Friday, 8:00 a.m. to 8:00 p.m., with 20% shrinkage built into staffing.",
      points: ["Customer Service: 10 seats and 18 agents", "Sales & Marketing: 8 seats and 15 agents", "42-hour legal workweek in Colombia", "English/Spanish talent at B2+ to C1 level"],
    },
    customerService: {
      title: "Customer Service campaign",
      icon: Headphones,
      intro: "The inbound campaign supports MONTOC customers with inquiries, requests, complaints and accurate product guidance across connected channels.",
      points: ["Campaign period: January 1 to August 10, 2026", "Monday–Friday, 8:00 a.m. to 8:00 p.m.", "9,900 estimated monthly cases", "18 agents, 10 active workstations and 5:30 AHT target"],
    },
    sales: {
      title: "Sales & Marketing campaign",
      icon: TrendingUp,
      intro: "The outbound team combines consultative product recommendations, lead nurturing, cross-selling and upselling to support MONTOC’s growth.",
      points: ["6,600 estimated monthly cases", "15 agents and 8 active workstations", "6-minute average interaction target", "COP 250M sales, 200 new customers and 12% conversion goals"],
    },
    quality: {
      title: "Quality & compliance",
      icon: BadgeCheck,
      intro: "Weekly QA reviews cover recorded calls, chat, email and CRM cases, protecting both experience and regulatory compliance.",
      points: ["QA score and schedule adherence targets of 95%+", "Law 1581 of 2012 data privacy controls", "Professional greetings, verification and active listening", "Product knowledge, accurate workflows and complete CRM logging"],
    },
    finance: {
      title: "Sustainable financial model",
      icon: Banknote,
      intro: "A fixed seat fee plus performance incentives creates predictable revenue while aligning ABM with MONTOC’s outcomes across the approved two-service scope.",
      points: ["COP 6.8M monthly fee per dedicated seat", "18 active seats across Customer Service and Sales", "Initial technology and facilities investment is planned through CAPEX", "Performance incentives connect revenue with SLA, QA and conversion results"],
    },
    continuity: {
      title: "Technology & continuity",
      icon: Server,
      intro: "ABM’s architecture keeps customer conversations available, secure and traceable through cloud tools and operational redundancy.",
      points: ["CRM integration with Salesforce or HubSpot", "Voice, chat, email and social channels", "Backup connectivity, UPS and 24-hour generator support", "Cloud telephony recovery and secure work-from-home contingency"],
    },
    market: {
      title: "Market & value proposition",
      icon: Building2,
      intro: "ABM is designed as an agile, specialized alternative for growing beauty and e-commerce brands that need measurable service without building an internal contact center.",
      points: ["Product-trained agents reduce purchase uncertainty", "Omnichannel records preserve context across every interaction", "Bilingual nearshore talent supports future expansion", "Flexible operations help lower internal administrative costs"],
    },
  };
  const current = panels[active as keyof typeof panels] ?? panels.objectives;
  return (
    <section id="operations" className="py-24 lg:py-32" style={{ backgroundImage: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionEyebrow>Project framework</SectionEyebrow>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>Built to operate with <span className="text-gradient-brand">discipline and proof</span>.</h2>
          <p className="text-muted-foreground leading-relaxed">The academic model combines measurable goals, workforce planning, rigorous quality controls and a financially sustainable delivery structure.</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
            {Object.entries(panels).map(([key, item]) => (
              <Button id={key === "customerService" ? "customer-service-campaign" : key === "sales" ? "sales-campaign" : undefined} key={key} variant="outline" onClick={() => setActive(key)} className={`h-auto justify-start gap-3 rounded-lg p-4 text-left ${active === key ? "border-primary bg-accent text-primary" : "bg-card"}`}>
                <item.icon className="h-5 w-5 shrink-0" /><span>{item.title}</span>
              </Button>
            ))}
          </div>
          <div className="rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-card)] sm:p-9">
            <div className="flex items-center gap-4"><div className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground"><current.icon className="h-5 w-5" /></div><h3 className="text-2xl font-bold text-abm-navy">{current.title}</h3></div>
            <p className="mt-5 text-muted-foreground leading-relaxed">{current.intro}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">{current.points.map((point) => <div key={point} className="flex gap-2.5 rounded-lg bg-muted p-4 text-sm text-foreground/80"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{point}</div>)}</div>
          </div>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <ProjectCard icon={Building2} title="Market opportunity" text="More than 70% of beauty e-commerce shoppers may abandon a purchase without immediate product guidance. ABM turns support into conversion." />
          <ProjectCard icon={Scale} title="Regulatory readiness" text="Processes are designed around Colombian data protection obligations and transparent customer consent." />
          <ProjectCard icon={Server} title="Business continuity" text="Redundant internet, UPS and generator coverage, cloud telephony backup, and secure work-from-home contingency protect availability." />
        </div>
        <div className="mt-16 border-t border-border pt-12">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><SectionEyebrow>Leadership</SectionEyebrow><h3 className="mt-4 text-3xl font-extrabold text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>The team behind ABM</h3></div><p className="max-w-xl text-sm leading-relaxed text-muted-foreground">A specialized structure connects executive direction, operations, finance and campaign leadership.</p></div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Mabel Rodriguez", "CEO"], ["Jesus Martinez", "Operations Manager"], ["Valentina Fuentes", "Finance Director"], ["Fiorella Saumett Romero", "Sales & Marketing Lead"], ["Juan Esteban Guzman", "Customer Service Lead"],
            ].map(([name, role]) => <div key={name} className="rounded-lg border border-border bg-card p-5"><div className="text-xs font-semibold uppercase tracking-wider text-primary">{role}</div><div className="mt-2 font-bold text-abm-navy">{name}</div></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ icon: Icon, title, text }: { icon: typeof Scale; title: string; text: string }) {
  return <div className="rounded-lg border border-border bg-card p-6"><Icon className="h-6 w-6 text-primary" /><h3 className="mt-4 font-bold text-abm-navy">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div>;
}

/* ---------------- Why ABM ---------------- */
function WhyAbm() {
  const items = [
    { icon: Zap, title: "Fast response", text: "Optimized attention and response times.", color: "var(--abm-purple)" },
    { icon: HeartHandshake, title: "Personalized service", text: "Every interaction is built to generate trust and satisfaction.", color: "var(--abm-purple)" },
    { icon: Globe2, title: "Omnichannel model", text: "Voice, chat, email and digital channels fully integrated.", color: "var(--abm-blue)" },
    { icon: Bot, title: "Technology", text: "CRM, automation and AI applied to every process.", color: "var(--abm-purple)" },
    { icon: Users, title: "Specialized talent", text: "Agents trained in customer service, sales and digital communication.", color: "var(--abm-blue)" },
    { icon: Rocket, title: "Scalability", text: "Solutions that adapt to each company's growth and needs.", color: "var(--abm-blue)" },
  ];
  return (
    <section id="porque" className="relative py-24 lg:py-32" style={{ backgroundImage: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-[1fr_1.4fr] gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionEyebrow>Why ABM</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>
            Your operation.<br />Our expertise.<br /><span className="text-gradient-brand">Better results.</span>
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <img src={agentImg} alt="Professional contact center agent" width={1024} height={1024} loading="lazy" className="w-full h-64 object-cover" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl bg-card border border-border p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all hover:-translate-y-1">
              <div className="grid h-11 w-11 place-items-center rounded-xl text-white transition-transform group-hover:scale-110 group-hover:rotate-6" style={{ backgroundColor: it.color }}>
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-bold text-abm-navy">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    { n: "01", t: "Analyze", d: "We identify the company's needs and challenges." },
    { n: "02", t: "Design", d: "We build a BPO strategy tailored to the business." },
    { n: "03", t: "Implement", d: "We integrate talent, technology and communication channels." },
    { n: "04", t: "Measure", d: "We monitor KPIs and operational results." },
    { n: "05", t: "Optimize", d: "We continuously improve processes to generate greater value." },
  ];
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionEyebrow>Methodology</SectionEyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>
          How we <span className="text-gradient-brand">work</span>.
        </h2>
        <div className="relative mt-14">
          <div className="hidden lg:block absolute left-0 right-0 top-8 h-0.5 bg-[var(--gradient-brand)]" />
          <div className="grid gap-6 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div key={s.n} className="relative rounded-2xl bg-card border border-border p-6 shadow-[var(--shadow-soft)]">
                <div className="relative z-10 mx-auto -mt-14 grid h-16 w-16 place-items-center rounded-2xl bg-white border-4 border-background shadow-[var(--shadow-card)]">
                  <span className="text-lg font-extrabold text-gradient-brand" style={{ fontFamily: "var(--font-display)" }}>{s.n}</span>
                </div>
                <h3 className="mt-4 text-center font-bold text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>{s.t}</h3>
                <p className="mt-2 text-sm text-center text-muted-foreground">{s.d}</p>
                {i < steps.length - 1 && <div className="lg:hidden mx-auto mt-4 h-6 w-0.5 bg-border" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Tech Stack ---------------- */
function TechStack() {
  const tech = [
    { l: "CRM", i: Layers }, { l: "Artificial Intelligence", i: Bot }, { l: "Automation", i: Zap },
    { l: "Omnichannel", i: Globe2 }, { l: "Data Analytics", i: BarChart3 },
    { l: "Chat", i: MessageSquare }, { l: "Email", i: Mail }, { l: "Telephony", i: Phone },
  ];
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-abm-purple/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-white">
        <SectionEyebrow tone="light">Technology</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          Technology that connects. <span className="text-gradient-brand">Intelligence that transforms</span>.
        </h2>

        <div className="relative mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {tech.map((t, i) => (
              <div key={t.l} className="group relative rounded-2xl glass-dark p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                <div className="grid h-14 w-14 place-items-center rounded-2xl text-white" style={{ backgroundImage: "var(--gradient-brand)" }}>
                  <t.i className="h-6 w-6" />
                </div>
                <div className="mt-4 text-sm font-semibold">{t.l}</div>
                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-abm-purple/60 transition" />
                {i % 2 === 0 && (
                  <span className="pointer-events-none absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition shadow-[var(--shadow-glow)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA Banner ---------------- */
function CtaBanner() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-white shadow-[var(--shadow-glow)]" style={{ backgroundImage: "var(--gradient-cta)" }}>
          <div className="absolute inset-0 bg-grid opacity-25" />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                Ready to transform your customer experience?
              </h3>
              <p className="mt-4 text-white/85 max-w-xl">
                Let's talk about how Apex Business Matrix can help you streamline processes, reduce costs and drive better results.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="#contacto" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-abm-navy bg-white hover:scale-[1.03] transition-transform">
                Request a consultation <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contacto" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white border border-white/40 hover:bg-white/10">
                Talk to ABM
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section id="contacto" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <SectionEyebrow>Contact</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>
            Let's build <span className="text-gradient-brand">connections that generate results</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Tell us about your operation and we'll reach out with a proposal tailored to your brand.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { i: Phone, t: "Commercial desk", s: "Barranquilla, Colombia" },
              { i: Mail, t: "Corporate email", s: "contact@abm-bpo.com" },
              { i: MessageSquare, t: "Digital channels", s: "Email · WhatsApp Business" },
            ].map((c) => (
              <div key={c.t} className="flex items-center gap-4 rounded-2xl bg-card border border-border p-4 shadow-[var(--shadow-soft)]">
                <div className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ backgroundImage: "var(--gradient-brand)" }}>
                  <c.i className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-abm-navy">{c.t}</div>
                  <div className="text-xs text-muted-foreground">{c.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-card border border-border p-8 shadow-[var(--shadow-card)]">
          {sent ? (
            <div className="flex flex-col items-center justify-center text-center py-16 animate-fade-up">
              <div className="grid h-16 w-16 place-items-center rounded-2xl text-white" style={{ backgroundImage: "var(--gradient-brand)" }}>
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-2xl font-extrabold text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>Thanks for reaching out!</h3>
              <p className="mt-3 text-muted-foreground max-w-sm">
                Thank you for contacting Apex Business Matrix! Our team will get back to you shortly.
              </p>
              <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-abm-purple hover:underline">
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name"><Input required maxLength={100} placeholder="First and last name" /></Field>
                <Field label="Company"><Input required maxLength={100} placeholder="Your company name" /></Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Email"><Input required type="email" maxLength={200} placeholder="you@company.com" /></Field>
                <Field label="Phone"><Input required type="tel" maxLength={30} placeholder="+57 300 000 0000" /></Field>
              </div>
              <Field label="Service of interest">
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cs">Customer Service</SelectItem>
                    <SelectItem value="sales">Sales & Marketing</SelectItem>
                    <SelectItem value="full">Combined Service Solution</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Message">
                <Textarea required maxLength={1000} rows={5} placeholder="Tell us about your operation..." />
              </Field>
              <Button type="submit" className="w-full rounded-full py-6 text-sm font-semibold text-white border-0" style={{ backgroundImage: "var(--gradient-brand)" }}>
                Send request <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-semibold text-abm-navy uppercase tracking-wider">{label}</Label>
      {children}
    </div>
  );
}

/* ---------------- PQR ---------------- */
function PQR() {
  const [type, setType] = useState<"request" | "complaint" | "claim">("request");
  const [sent, setSent] = useState<string | null>(null);
  const types = [
    {
      id: "request" as const,
      label: "Request",
      short: "P",
      icon: FileText,
      desc: "Ask for information, documents or a specific action related to our services.",
      sla: "Response within 5 business days",
    },
    {
      id: "complaint" as const,
      label: "Complaint",
      short: "Q",
      icon: AlertTriangle,
      desc: "Report dissatisfaction with the service, an agent interaction or a process.",
      sla: "Response within 10 business days",
    },
    {
      id: "claim" as const,
      label: "Claim",
      short: "R",
      icon: Gavel,
      desc: "Formally request review of a case, refund, adjustment or contractual issue.",
      sla: "Response within 15 business days",
    },
  ];
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `ABM-${type.slice(0, 3).toUpperCase()}-${Date.now().toString().slice(-6)}`;
    setSent(id);
  };
  return (
    <section id="pqr" className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundImage: "var(--gradient-soft)" }}>
      <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-abm-purple/15 blur-3xl" />
      <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-abm-blue/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <SectionEyebrow>PQR Channel</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>
            Requests, Complaints <span className="text-gradient-brand">& Claims</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Your voice matters. Submit a PQR and our Customer Experience team will track, respond and resolve every case within our service commitments.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.05fr_1fr] gap-8">
          {/* Type selector cards */}
          <div className="grid sm:grid-cols-3 gap-4 lg:col-span-1">
            {types.map((t) => {
              const active = type === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setType(t.id)}
                  className={`text-left rounded-2xl p-5 border transition-all ${active ? "bg-card border-transparent shadow-[var(--shadow-card)] -translate-y-1" : "bg-card/60 border-border hover:-translate-y-0.5"}`}
                  style={active ? { backgroundImage: "linear-gradient(180deg, color-mix(in oklab, var(--abm-purple) 8%, white), white)" } : undefined}
                >
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ backgroundImage: "var(--gradient-brand)" }}>
                      <t.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold tracking-[0.3em] text-abm-purple">{t.short}</span>
                  </div>
                  <div className="mt-4 text-lg font-bold text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>{t.label}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-abm-navy/80">
                    <CheckCircle2 className="h-3.5 w-3.5 text-abm-purple" /> {t.sla}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-card border border-border p-8 shadow-[var(--shadow-card)]">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-10 animate-fade-up">
                <div className="grid h-16 w-16 place-items-center rounded-2xl text-white" style={{ backgroundImage: "var(--gradient-brand)" }}>
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>PQR received</h3>
                <p className="mt-3 text-muted-foreground max-w-sm">
                  Your case has been registered. Please keep this ticket ID for follow-up:
                </p>
                <div className="mt-4 rounded-xl bg-muted px-4 py-2 font-mono text-sm font-semibold text-abm-navy">{sent}</div>
                <button onClick={() => setSent(null)} className="mt-6 text-sm font-semibold text-abm-purple hover:underline">
                  Submit another PQR
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 w-fit text-xs font-semibold text-abm-navy">
                  <span className="inline-block h-2 w-2 rounded-full bg-abm-purple" />
                  Submitting a {types.find((x) => x.id === type)?.label}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full name"><Input required maxLength={100} placeholder="First and last name" /></Field>
                  <Field label="ID / Document"><Input required maxLength={30} placeholder="ID number" /></Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Email"><Input required type="email" maxLength={200} placeholder="you@email.com" /></Field>
                  <Field label="Phone"><Input required type="tel" maxLength={30} placeholder="+57 300 000 0000" /></Field>
                </div>
                <Field label="Related service">
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs">Customer Service</SelectItem>
                      <SelectItem value="sales">Sales & Marketing</SelectItem>
                      <SelectItem value="montoc">MONTOC account</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Subject">
                  <Input required maxLength={140} placeholder="Short summary of your case" />
                </Field>
                <Field label="Describe your case">
                  <Textarea required maxLength={1500} rows={5} placeholder="Provide dates, order or ticket numbers, and any detail that helps us resolve faster." />
                </Field>
                <Button type="submit" className="w-full rounded-full py-6 text-sm font-semibold text-white border-0" style={{ backgroundImage: "var(--gradient-brand)" }}>
                  Submit PQR <Send className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-[11px] text-muted-foreground text-center">
                  By submitting, you accept ABM BPO's data processing policy for PQR management.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="relative pt-20 pb-10 text-white" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-3">
              <Logo />
              <div className="leading-tight">
                <div className="text-sm font-bold tracking-[0.15em]" style={{ fontFamily: "var(--font-display)" }}>APEX BUSINESS MATRIX</div>
                <div className="text-[10px] tracking-[0.3em] text-white/60">ABM BPO</div>
              </div>
            </div>
            <p className="mt-5 text-white/70 max-w-md">
              We connect people. We power businesses. Specialized Customer Service and Sales & Marketing solutions for the beauty industry.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { s: "in", href: "https://www.linkedin.com/" },
                { s: "ig", href: "https://www.instagram.com/" },
                { s: "fb", href: "https://www.facebook.com/" },
                { s: "tw", href: "https://x.com/" },
              ].map(({ s, href }) => (
                <a key={s} href={href} target="_blank" rel="noreferrer" aria-label={`ABM BPO on ${s}`} className="grid h-9 w-9 place-items-center rounded-full glass-dark text-xs font-bold uppercase text-white/80 hover:text-white transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-white/50">Navigation</div>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.href}><a href={n.href} className="text-white/80 hover:text-white transition-colors">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-white/50">Services</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>Customer Service</li>
              <li>Sales & Marketing</li>
              <li>Combined Service Solution</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
          <div>© 2026 Apex Business Matrix. All rights reserved.</div>
          <div>Barranquilla, Colombia · Customer Service & Sales and Marketing</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- helpers ---------------- */
function SectionEyebrow({ children, tone = "dark" }: { children: React.ReactNode; tone?: "dark" | "light" }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] ${tone === "light" ? "glass-dark text-white/80" : "bg-accent text-abm-purple"}`}>
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundImage: "var(--gradient-brand)" }} />
      {children}
    </div>
  );
}
