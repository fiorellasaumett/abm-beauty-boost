import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Sparkles, Headphones, TrendingUp, Wallet, Bot, Zap, Globe2,
  MessageSquare, Mail, Phone, Users, BarChart3, ShieldCheck, Layers, Rocket,
  Target, HeartHandshake, Lightbulb, Menu, X, CheckCircle2, Send,
} from "lucide-react";
import heroImg from "@/assets/hero-bpo.jpg";
import beautyImg from "@/assets/beauty-tech.jpg";
import agentImg from "@/assets/agent.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#lushglow", label: "Caso LushGlow" },
  { href: "#resultados", label: "Resultados" },
  { href: "#porque", label: "Por qué ABM" },
  { href: "#contacto", label: "Contacto" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BeautyFocus />
      <LushGlow />
      <Results />
      <WhyAbm />
      <MissionVision />
      <Values />
      <Process />
      <TechStack />
      <CtaBanner />
      <Contact />
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
              Solicitar asesoría <ArrowRight className="h-4 w-4" />
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
                Solicitar asesoría <ArrowRight className="h-4 w-4" />
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
    <div className="relative h-10 w-10 shrink-0 rounded-xl overflow-hidden" style={{ backgroundImage: "conic-gradient(from 210deg, var(--abm-blue), var(--abm-purple), var(--abm-green), var(--abm-yellow), var(--abm-blue))" }}>
      <div className="absolute inset-[3px] rounded-[9px] bg-white flex items-center justify-center">
        <div className="relative h-5 w-5">
          <div className="absolute inset-0 rounded-full border-2 border-abm-navy" />
          <div className="absolute inset-0 rounded-full border-t-2 border-abm-purple rotate-45" />
          <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-abm-yellow" />
        </div>
      </div>
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-abm-purple/40 blur-3xl" />
      <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-abm-blue/40 blur-3xl" />
      <div className="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-abm-green/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
        <div className="text-white animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium tracking-wide">
            <Sparkles className="h-3.5 w-3.5 text-abm-yellow" />
            Customer Experience · Sales · Collections
          </div>
          <div className="mt-6">
            <div className="text-xs font-semibold tracking-[0.35em] text-abm-yellow/90">APEX BUSINESS MATRIX</div>
            <div className="text-[10px] tracking-[0.4em] text-white/60">ABM BPO</div>
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]" style={{ fontFamily: "var(--font-display)" }}>
            Conectamos personas.<br />
            <span className="text-gradient-brand bg-clip-text" style={{ backgroundImage: "linear-gradient(120deg, oklch(0.85 0.15 90), oklch(0.75 0.18 155), oklch(0.7 0.2 285))", WebkitBackgroundClip: "text", color: "transparent" }}>
              Impulsamos negocios.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed">
            Soluciones BPO especializadas para transformar la experiencia del cliente, optimizar operaciones y generar crecimiento sostenible.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#servicios" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-abm-navy bg-white hover:bg-white/90 transition-transform hover:scale-[1.03] shadow-[var(--shadow-soft)]">
              Conoce nuestros servicios <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white border border-white/25 hover:bg-white/10 transition-colors">
              Solicita una asesoría
            </a>
          </div>
          <p className="mt-8 max-w-md text-sm italic text-white/60">
            "Más que tercerizar procesos, construimos conexiones que generan resultados."
          </p>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-glow)] border border-white/10">
            <img src={heroImg} alt="Centro de operaciones BPO conectado globalmente" width={1280} height={1024} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-abm-navy-deep/60 via-transparent to-abm-purple/20" />
          </div>
          {/* floating stat cards */}
          <div className="absolute -left-4 top-8 animate-float rounded-2xl glass-card px-4 py-3 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg text-white" style={{ backgroundImage: "var(--gradient-brand)" }}>
                <Headphones className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Nivel de servicio</div>
                <div className="text-lg font-bold text-abm-navy">80%</div>
              </div>
            </div>
          </div>
          <div className="absolute -right-3 bottom-10 animate-float rounded-2xl glass-card px-4 py-3 shadow-[var(--shadow-card)]" style={{ animationDelay: "1.5s" }}>
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg text-white" style={{ backgroundColor: "oklch(0.6 0.18 155)" }}>
                <TrendingUp className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">CSAT mínimo</div>
                <div className="text-lg font-bold text-abm-navy">4.2 / 5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  const items = [
    { icon: Users, color: "var(--abm-blue)", title: "Talento humano", text: "Agentes capacitados para ofrecer atención profesional y personalizada." },
    { icon: Bot, color: "var(--abm-purple)", title: "Tecnología", text: "Uso estratégico de CRM, automatización e inteligencia artificial." },
    { icon: Globe2, color: "var(--abm-green)", title: "Omnicanalidad", text: "Integración de voz, chat, correo electrónico y canales digitales." },
    { icon: BarChart3, color: "var(--abm-yellow)", title: "Resultados", text: "Procesos orientados a indicadores, eficiencia y crecimiento." },
  ];
  return (
    <section id="nosotros" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionEyebrow>¿Quiénes somos?</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>
          Transformamos la experiencia del cliente a través de la <span className="text-gradient-brand">tecnología y el talento humano</span>.
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Apex Business Matrix (ABM BPO) es una empresa especializada en soluciones de Business Process Outsourcing que optimiza la relación entre las empresas y sus clientes. Integramos talento humano altamente capacitado, tecnología, CRM, automatización e infraestructura omnicanal para ofrecer operaciones eficientes, confiables y centradas en el cliente.
        </p>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="group relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all hover:-translate-y-1">
              <div className="grid h-12 w-12 place-items-center rounded-xl text-white" style={{ backgroundColor: it.color }}>
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-abm-navy">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
              <div className="absolute inset-x-6 bottom-0 h-0.5 origin-left scale-x-0 bg-[var(--gradient-brand)] transition-transform group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const svcs = [
    {
      icon: Headphones, title: "Atención al Cliente", tag: "Customer Service", color: "var(--abm-blue)",
      desc: "Ofrecemos atención Tier 1 y soporte especializado para garantizar respuestas rápidas, claras y personalizadas.",
      bullets: ["Atención inbound", "Resolución de inquietudes", "Asistencia con productos", "Gestión de solicitudes", "Soporte omnicanal", "Customer Experience"],
    },
    {
      icon: TrendingUp, title: "Ventas", tag: "Sales", color: "var(--abm-purple)",
      desc: "Impulsamos el crecimiento comercial mediante estrategias de ventas outbound, cross-selling, up-selling y lead nurturing.",
      bullets: ["Ventas outbound", "Cross-selling", "Up-selling", "Recomendación personalizada", "Lead nurturing", "Conversión de leads"],
    },
    {
      icon: Wallet, title: "Gestión de Cobranzas", tag: "Collections", color: "var(--abm-green)",
      desc: "Gestionamos procesos profesionales de recuperación de cartera mediante comunicación efectiva, negociación y seguimiento.",
      bullets: ["Recordatorios de pago", "Negociación", "Acuerdos de pago", "Seguimiento de cuentas", "Recuperación de cartera", "Gestión profesional de clientes"],
    },
  ];
  return (
    <section id="servicios" className="relative py-24 lg:py-32" style={{ backgroundImage: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <SectionEyebrow>Servicios</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>
            Soluciones diseñadas para hacer <span className="text-gradient-brand">crecer tu negocio</span>.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
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
              <a href="#contacto" className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-abm-navy group/link">
                Conocer servicio
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
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-card)] border border-border">
            <img src={beautyImg} alt="Productos skincare y tecnología" width={1280} height={960} loading="lazy" className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-2xl glass-card px-5 py-4 shadow-[var(--shadow-card)]">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Industria</div>
            <div className="text-sm font-bold text-abm-navy">Beauty & Skincare</div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionEyebrow>Especialización</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>
            Especialistas en la industria <span className="text-gradient-brand">Beauty & Skincare</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Nuestro enfoque está dirigido especialmente a empresas del sector de belleza, maquillaje y skincare, donde la rapidez, la personalización y la calidad de la atención son fundamentales para construir relaciones duraderas con los clientes.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { l: "Beauty", c: "var(--abm-purple)" },
              { l: "Makeup", c: "var(--abm-blue)" },
              { l: "Skincare", c: "var(--abm-green)" },
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

/* ---------------- LushGlow Case ---------------- */
function LushGlow() {
  const tabs = [
    { key: "cs", label: "Atención al Cliente", icon: Headphones, text: "Atención personalizada, soporte sobre productos y resolución de inquietudes." },
    { key: "sales", label: "Ventas", icon: TrendingUp, text: "Recomendación de productos, estrategias de cross-selling y up-selling y conversión de clientes." },
    { key: "col", label: "Cobranzas", icon: Wallet, text: "Recordatorios, negociación y recuperación profesional de pagos pendientes." },
  ];
  const [active, setActive] = useState(tabs[0].key);
  const cur = tabs.find((t) => t.key === active)!;
  return (
    <section id="lushglow" className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-abm-purple/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-white">
        <SectionEyebrow tone="light">Caso de aplicación</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          Nuestro caso de aplicación: <span style={{ backgroundImage: "linear-gradient(120deg, oklch(0.85 0.15 90), oklch(0.75 0.2 300))", WebkitBackgroundClip: "text", color: "transparent" }}>LushGlow</span>
        </h2>
        <p className="mt-6 max-w-2xl text-white/75 leading-relaxed">
          LushGlow es una marca de maquillaje y skincare que busca ofrecer productos de alta calidad a precios accesibles. ABM BPO actúa como su socio estratégico para optimizar la atención al cliente, las ventas y la gestión de cobranzas.
        </p>

        {/* Flow ABM -> LUSHGLOW -> CLIENTES */}
        <div className="mt-12 grid gap-4 md:grid-cols-3 items-stretch">
          <FlowNode title="ABM BPO" sub="Socio estratégico" icon={Layers} color="var(--abm-blue)" />
          <FlowNode title="LUSHGLOW" sub="Marca de belleza" icon={Sparkles} color="var(--abm-yellow)" />
          <FlowNode title="CLIENTES" sub="Experiencia optimizada" icon={HeartHandshake} color="var(--abm-green)" />
        </div>

        {/* Tabs */}
        <div className="mt-12 rounded-3xl glass-dark p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => {
              const activeT = t.key === active;
              return (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${activeT ? "text-abm-navy bg-white shadow-[var(--shadow-card)]" : "text-white/80 border border-white/20 hover:bg-white/10"}`}
                >
                  <t.icon className="h-4 w-4" />
                  {t.label}
                </button>
              );
            })}
          </div>
          <div key={cur.key} className="mt-6 animate-fade-up">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white" style={{ backgroundImage: "var(--gradient-brand)" }}>
                <cur.icon className="h-5 w-5" />
              </div>
              <p className="text-lg text-white/90 leading-relaxed">{cur.text}</p>
            </div>
          </div>
          <div className="mt-8">
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-abm-navy bg-white hover:scale-[1.03] transition-transform">
              Ver estrategia completa <ArrowRight className="h-4 w-4" />
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
            Resultados que podemos <span className="text-gradient-brand">medir</span>.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Nuestro modelo de operación está orientado a resultados medibles, eficiencia operacional y satisfacción del cliente.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Counter value={80} suffix="%" label="Nivel de servicio" sub="Objetivo operativo" color="var(--abm-blue)" />
          <Counter value={5.5} decimals={1} suffix=" min" label="AHT objetivo" sub="Tiempo promedio de atención" color="var(--abm-purple)" />
          <Counter value={80} suffix="%" label="FCR objetivo" sub="Resolución en primer contacto" color="var(--abm-green)" />
          <Counter value={4.2} decimals={1} suffix=" / 5" label="CSAT mínimo" sub="Satisfacción del cliente" color="var(--abm-yellow)" />
          <Counter value={500} suffix="+" label="Nuevos clientes" sub="Meta de adquisición" color="var(--abm-purple)" />
          <Counter value={12} suffix="%" label="Conversión mínima" sub="Tasa de cierre" color="var(--abm-blue)" />
          <Counter value={500} prefix="$" suffix="K USD" label="Recuperación mínima" sub="Meta financiera" color="var(--abm-green)" />
          <Counter value={1200} label="Cuentas por recuperar" sub="Cartera vencida" color="var(--abm-yellow)" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why ABM ---------------- */
function WhyAbm() {
  const items = [
    { icon: Zap, title: "Respuesta rápida", text: "Optimización de tiempos de atención y respuesta.", color: "var(--abm-yellow)" },
    { icon: HeartHandshake, title: "Atención personalizada", text: "Cada interacción busca generar confianza y satisfacción.", color: "var(--abm-purple)" },
    { icon: Globe2, title: "Modelo omnicanal", text: "Voz, chat, email y canales digitales integrados.", color: "var(--abm-blue)" },
    { icon: Bot, title: "Tecnología", text: "CRM, automatización e inteligencia artificial aplicada a procesos.", color: "var(--abm-purple)" },
    { icon: Users, title: "Talento especializado", text: "Agentes capacitados en atención, ventas y comunicación digital.", color: "var(--abm-green)" },
    { icon: Rocket, title: "Escalabilidad", text: "Soluciones adaptables al crecimiento y necesidades de cada empresa.", color: "var(--abm-blue)" },
  ];
  return (
    <section id="porque" className="relative py-24 lg:py-32" style={{ backgroundImage: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-[1fr_1.4fr] gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionEyebrow>Por qué ABM</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>
            Tu operación.<br />Nuestra experiencia.<br /><span className="text-gradient-brand">Mejores resultados.</span>
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <img src={agentImg} alt="Agente profesional de contact center" width={1024} height={1024} loading="lazy" className="w-full h-64 object-cover" />
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

/* ---------------- Mission & Vision ---------------- */
function MissionVision() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-6">
        {[
          { tag: "Misión", title: "Nuestra misión", color: "var(--abm-blue)", text: "Entregar soluciones integrales de Business Process Outsourcing de alta calidad que transformen la experiencia del cliente mediante inteligencia artificial, automatización, infraestructura omnicanal y talento humano altamente capacitado, generando reducción de costos, optimización de tiempos y maximización de la eficiencia." },
          { tag: "Visión 2030", title: "Nuestra visión", color: "var(--abm-purple)", text: "Ser un referente nacional e internacional del sector BPO, alcanzando una posición destacada en servicios de outsourcing para empresas en crecimiento y siendo reconocidos por nuestra excelencia operacional, innovación tecnológica, adaptabilidad y desarrollo sostenible del talento humano." },
        ].map((c) => (
          <div key={c.tag} className="relative overflow-hidden rounded-3xl p-8 lg:p-10 text-white shadow-[var(--shadow-card)]" style={{ backgroundImage: "var(--gradient-hero)" }}>
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full blur-3xl opacity-40" style={{ backgroundColor: c.color }} />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.35em] text-white/60">{c.tag}</div>
              <h3 className="mt-3 text-3xl font-extrabold" style={{ fontFamily: "var(--font-display)" }}>{c.title}</h3>
              <p className="mt-5 text-white/80 leading-relaxed">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Values ---------------- */
function Values() {
  const values = [
    { l: "Confianza", i: ShieldCheck, c: "var(--abm-blue)" },
    { l: "Innovación", i: Lightbulb, c: "var(--abm-purple)" },
    { l: "Crecimiento", i: TrendingUp, c: "var(--abm-green)" },
    { l: "Trabajo en equipo", i: Users, c: "var(--abm-yellow)" },
    { l: "Optimismo", i: Sparkles, c: "var(--abm-yellow)" },
    { l: "Conexión", i: Globe2, c: "var(--abm-blue)" },
    { l: "Excelencia", i: Target, c: "var(--abm-purple)" },
    { l: "Adaptabilidad", i: Layers, c: "var(--abm-green)" },
  ];
  return (
    <section className="relative py-24 lg:py-28" style={{ backgroundImage: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionEyebrow>Valores</SectionEyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl font-extrabold tracking-tight text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>
          Los principios que nos <span className="text-gradient-brand">definen</span>.
        </h2>
        <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-4">
          {values.map((v) => (
            <div key={v.l} className="group rounded-2xl bg-card border border-border p-5 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl text-white transition-transform group-hover:scale-110 group-hover:-rotate-6" style={{ backgroundColor: v.c }}>
                <v.i className="h-5 w-5" />
              </div>
              <div className="mt-4 text-sm font-bold text-abm-navy">{v.l}</div>
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
    { n: "01", t: "Analizamos", d: "Identificamos las necesidades y desafíos de la empresa." },
    { n: "02", t: "Diseñamos", d: "Creamos una estrategia BPO adaptada al negocio." },
    { n: "03", t: "Implementamos", d: "Integramos talento, tecnología y canales de comunicación." },
    { n: "04", t: "Medimos", d: "Monitoreamos KPIs y resultados de la operación." },
    { n: "05", t: "Optimizamos", d: "Mejoramos continuamente los procesos para generar mayor valor." },
  ];
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionEyebrow>Metodología</SectionEyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>
          ¿Cómo <span className="text-gradient-brand">trabajamos</span>?
        </h2>
        <div className="relative mt-14">
          <div className="hidden lg:block absolute left-0 right-0 top-8 h-0.5" style={{ backgroundImage: "linear-gradient(90deg, var(--abm-blue), var(--abm-purple), var(--abm-green), var(--abm-yellow))" }} />
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
    { l: "CRM", i: Layers }, { l: "Inteligencia Artificial", i: Bot }, { l: "Automatización", i: Zap },
    { l: "Omnicanalidad", i: Globe2 }, { l: "Analítica de datos", i: BarChart3 },
    { l: "Chat", i: MessageSquare }, { l: "Email", i: Mail }, { l: "Telefonía", i: Phone },
  ];
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-abm-purple/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-white">
        <SectionEyebrow tone="light">Tecnología</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          Tecnología que conecta. <span style={{ backgroundImage: "linear-gradient(120deg, oklch(0.85 0.15 90), oklch(0.75 0.2 300))", WebkitBackgroundClip: "text", color: "transparent" }}>Inteligencia que transforma</span>.
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
                  <span className="pointer-events-none absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition" style={{ boxShadow: "0 0 40px oklch(0.6 0.2 285 / 0.35)" }} />
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
                ¿Listo para transformar la experiencia de tus clientes?
              </h3>
              <p className="mt-4 text-white/85 max-w-xl">
                Conversemos sobre cómo Apex Business Matrix puede ayudarte a optimizar tus procesos, reducir costos y generar mejores resultados.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="#contacto" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-abm-navy bg-white hover:scale-[1.03] transition-transform">
                Solicitar asesoría <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contacto" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white border border-white/40 hover:bg-white/10">
                Hablar con ABM
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
          <SectionEyebrow>Contacto</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>
            Construyamos juntos <span className="text-gradient-brand">conexiones que generan resultados</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Cuéntanos sobre tu operación y te contactaremos con una propuesta hecha a la medida de tu marca.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { i: Phone, t: "Atención comercial", s: "Barranquilla, Colombia" },
              { i: Mail, t: "Correo corporativo", s: "contacto@abm-bpo.com" },
              { i: MessageSquare, t: "Canales digitales", s: "Voz · Chat · Email · Redes" },
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
              <h3 className="mt-6 text-2xl font-extrabold text-abm-navy" style={{ fontFamily: "var(--font-display)" }}>¡Gracias por contactarnos!</h3>
              <p className="mt-3 text-muted-foreground max-w-sm">
                ¡Gracias por contactar a Apex Business Matrix! Nuestro equipo se pondrá en contacto contigo próximamente.
              </p>
              <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-abm-purple hover:underline">
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nombre completo"><Input required maxLength={100} placeholder="Nombre y apellido" /></Field>
                <Field label="Empresa"><Input required maxLength={100} placeholder="Nombre de tu empresa" /></Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Correo electrónico"><Input required type="email" maxLength={200} placeholder="tu@empresa.com" /></Field>
                <Field label="Teléfono"><Input required type="tel" maxLength={30} placeholder="+57 300 000 0000" /></Field>
              </div>
              <Field label="Servicio de interés">
                <Select>
                  <SelectTrigger><SelectValue placeholder="Selecciona un servicio" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cs">Atención al Cliente</SelectItem>
                    <SelectItem value="sales">Ventas</SelectItem>
                    <SelectItem value="col">Cobranzas</SelectItem>
                    <SelectItem value="full">Solución BPO Integral</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Mensaje">
                <Textarea required maxLength={1000} rows={5} placeholder="Cuéntanos sobre tu operación..." />
              </Field>
              <Button type="submit" className="w-full rounded-full py-6 text-sm font-semibold text-white border-0" style={{ backgroundImage: "var(--gradient-brand)" }}>
                Enviar solicitud <Send className="ml-2 h-4 w-4" />
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
              Conectamos personas. Impulsamos negocios. Soluciones BPO especializadas en Customer Service, Sales y Collections para marcas de belleza y skincare.
            </p>
            <div className="mt-6 flex gap-3">
              {["in", "ig", "fb", "tw"].map((s) => (
                <div key={s} className="grid h-9 w-9 place-items-center rounded-full glass-dark text-xs font-bold uppercase text-white/80 hover:text-white cursor-pointer transition-colors">
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-white/50">Navegación</div>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.href}><a href={n.href} className="text-white/80 hover:text-white transition-colors">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-white/50">Servicios</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>Customer Service</li>
              <li>Sales</li>
              <li>Collections</li>
              <li>Solución BPO Integral</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
          <div>© 2026 Apex Business Matrix. Todos los derechos reservados.</div>
          <div>Barranquilla, Colombia · Proyecto académico SENA</div>
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
