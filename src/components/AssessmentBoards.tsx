import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CUSTOMER_CRITERIA, SALES_CRITERIA, CUSTOMER_ROWS, SALES_ROWS, INDIVIDUAL_KPIS } from "@/lib/assessment-data";

type Service = "customer" | "sales";
function ServiceSelector({ service, onChange }: { service: Service; onChange: (service: Service) => void }) {
 return <div className="mt-8 grid max-w-xl grid-cols-2 gap-2 border-b border-border pb-3">{([['customer','Customer Service'],['sales','Sales & Marketing']] as const).map(([key,label]) => <Button key={key} variant={service === key ? 'default' : 'ghost'} className="h-auto min-h-12 whitespace-normal" onClick={() => onChange(key)} aria-pressed={service === key}>{label}</Button>)}</div>;
}
function DataTable({ headers, rows }: { headers: readonly string[]; rows: readonly (readonly (string | number)[])[] }) {
 return <div className="mt-6 max-w-full overflow-x-auto rounded-lg border border-border"><table className="w-full text-left text-sm"><thead className="bg-secondary text-abm-navy"><tr>{headers.map(h => <th key={h} className="whitespace-nowrap px-4 py-4 font-bold">{h}</th>)}</tr></thead><tbody>{rows.map((row,i) => <tr key={i} className="border-t border-border even:bg-muted/50">{row.map((value,j) => <td key={j} className="min-w-24 px-4 py-3 align-top">{value}</td>)}</tr>)}</tbody></table></div>;
}
export function AssessmentBoards() {
 const [service,setService] = useState<Service>('customer');
 const [view,setView] = useState<'criteria'|'sample'>('criteria');
 const criteria = service === 'customer' ? CUSTOMER_CRITERIA : SALES_CRITERIA;
 const scores = [98,95,92,96,97,94];
 const total = CUSTOMER_CRITERIA.reduce((sum,row,i) => sum + row[1]*(scores[i] ?? 0)/100,0);
 return <section id="assessment" className="scroll-mt-24 py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6">
  <p className="text-xs font-bold uppercase text-abm-purple">Assessment board (CX)</p>
  <h2 className="mt-4 text-3xl font-bold text-abm-navy sm:text-4xl">Individual performance assessment</h2>
  <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">Evaluate service quality, procedure compliance and customer experience using the weighted criteria for each campaign.</p>
  <ServiceSelector service={service} onChange={setService} />
  <div className="mt-5 flex gap-2"><Button variant={view === 'criteria' ? 'default':'outline'} onClick={() => setView('criteria')}>Assessment criteria</Button><Button variant={view === 'sample' ? 'default':'outline'} onClick={() => setView('sample')}>Sample evaluation</Button></div>
  <div className="mt-6 grid gap-4 border-y border-border py-5 sm:grid-cols-4">{[['Agent ID',view === 'sample' ? service === 'customer' ? 'CS05':'MS01':'—'],['Agent name',view === 'sample' ? service === 'customer' ? 'Agent 05':'Agent 01':'—'],['Campaign',service === 'customer' ? 'ABM Customer Service':'ABM Sales & Marketing'],['Assessment period',view === 'sample' ? 'October 2026':'—']].map(([label,value]) => <div key={label}><p className="text-xs text-muted-foreground">{label}</p><p className="mt-1 font-semibold text-abm-navy">{value}</p></div>)}</div>
  <DataTable headers={view === 'sample' && service === 'customer' ? ['Assessment criteria','Weight','What is evaluated','Score / 100','Weighted score'] : ['Assessment criteria','Weight','What is evaluated']} rows={criteria.map((row,i) => view === 'sample' && service === 'customer' ? [...row.slice(0,1),`${row[1]}%`,row[2],scores[i] ?? 0,((scores[i] ?? 0)*row[1]/100).toFixed(2)] : [row[0],`${row[1]}%`,row[2]])} />
  <p className="mt-4 font-bold text-abm-purple">Total weight: 100%{view === 'sample' ? service === 'customer' ? ` · Calculated weighted score: ${total.toFixed(2)}%` : ' · Reported overall result: 98%' : ' · Final score: pending evaluation'}</p>
  {view === 'sample' && <><DataTable headers={['KPI','Target','Sample result']} rows={INDIVIDUAL_KPIS[service]} /><p className="mt-5 text-sm leading-relaxed text-muted-foreground">Illustrative sample from the supplied document, not verified operating results.{service === 'customer' ? ' The document reports 95.4% (and a separate 98% headline); its criterion scores calculate to 95.35% before rounding.' : ' Revenue and new-customer figures in this individual example refer to the campaign context, not an individual allocation.'}</p><div className="mt-6 grid gap-8 sm:grid-cols-2"><div><h3 className="font-bold text-abm-navy">Strengths</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Excellent communication and empathy, accurate information, professional case handling and strong schedule adherence.{service === 'customer' ? ' Strong attention to confidentiality and data protection.' : ' Proactive focus on conversion and revenue.'}</p></div><div><h3 className="font-bold text-abm-navy">Opportunities for growth</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Maintain high performance and share best practices with the team.</p></div></div></>}
  <p className="mt-6 text-xs text-muted-foreground">Assessment scale: 90–100 Excellent · 80–89 Meets expectations · 70–79 Needs improvement</p>
 </div></section>;
}
export function TeamPerformance() {
 const [service,setService] = useState<Service>('customer');
 const rows = service === 'customer' ? CUSTOMER_ROWS : SALES_ROWS;
 const contacts = rows.reduce((sum,row) => sum+row[0],0);
 const salesRevenue = SALES_ROWS.reduce((sum,row) => sum+row[6],0);
 const customers = SALES_ROWS.reduce((sum,row) => sum+row[7],0);
 const customerHeaders = ['Agent','Contacts / month','QA > 96%','CSAT > 90%','FCR > 80%','SLA 80/20','AHT ≤ 5:30','Schedule ≥ 95%','Final score'];
 const salesHeaders = ['Agent','Contacts / month','QA ≥ 96%','CSAT ≥ 90%','Conversion ≥ 12%','AHT ≤ 6:00','Schedule ≥ 95%','Revenue (COP)','New customers','Result'];
 const tableRows = service === 'customer' ? CUSTOMER_ROWS.map((row,i) => [`Agent ${String(i+1).padStart(2,'0')}`,row[0].toLocaleString('en-US'),`${row[1]}%`,`${row[2]}%`,`${row[3]}%`,row[4],row[5],`${row[6]}%`,`${row[7]}%`]) : SALES_ROWS.map((row,i) => [`Agent ${String(i+1).padStart(2,'0')}`,row[0].toLocaleString('en-US'),`${row[1]}%`,`${row[2]}%`,`${row[3]}%`,row[4],`${row[5]}%`,row[6].toLocaleString('en-US'),row[7],'Meets KPI targets']);
 return <section id="team-dashboard" className="scroll-mt-24 border-t border-border py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6">
  <p className="text-xs font-bold uppercase text-abm-purple">Dashboard · October 2026 sample</p><h2 className="mt-4 text-3xl font-bold text-abm-navy sm:text-4xl">Team KPI performance</h2><p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">Agent-level performance for both MONTOC campaigns, with operational targets shown separately from the illustrative results.</p>
  <ServiceSelector service={service} onChange={setService}/>
  <div className="mt-6 grid grid-cols-2 gap-6 border-y border-border py-6 sm:grid-cols-4">{[['Agents',service === 'customer' ? '18':'15'],['Channel','WhatsApp Business'],['Monthly team target',service === 'customer' ? '34,560':'28,800'],['Per agent / month','1,920']].map(([label,value]) => <div key={label}><p className="text-xs text-muted-foreground">{label}</p><p className="mt-2 text-xl font-bold text-abm-purple">{value}</p></div>)}</div>
  <p className="mt-4 text-sm text-muted-foreground">Per-agent operational targets: 11 contacts/hour · 8 hours/day · 87 contacts/day (rounded) · 1,920 contacts/month.</p>
  <DataTable headers={service === 'customer' ? customerHeaders : salesHeaders} rows={tableRows}/>
  <div className="mt-6 grid gap-5 sm:grid-cols-3"><div><p className="text-xs text-muted-foreground">Calculated contacts from agent rows</p><p className="mt-2 text-2xl font-bold text-abm-purple">{contacts.toLocaleString('en-US')}</p></div>{service === 'sales' ? <><div><p className="text-xs text-muted-foreground">Calculated revenue / campaign target COP 250M</p><p className="mt-2 text-2xl font-bold text-abm-purple">COP {salesRevenue.toLocaleString('en-US')}</p></div><div><p className="text-xs text-muted-foreground">Calculated new customers / target 200</p><p className="mt-2 text-2xl font-bold text-abm-purple">{customers}</p></div></> : <div><p className="text-xs text-muted-foreground">Reported team performance</p><p className="mt-2 text-2xl font-bold text-abm-purple">96.7%</p></div>}</div>
  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">Illustrative sample data from the supplied PDF. Its summary reports {service === 'customer' ? '34,560 contacts, QA 97.6%, CSAT 93.4%, FCR 86.0%, AHT 5:20 and schedule adherence 97.4%' : '34,560 contacts, QA 97.5%, CSAT 93.8%, conversion 13.7%, AHT 5:41, schedule adherence 97.0%, COP 250,000,000 and 205 customers'}. The stated totals do not match the agent rows; calculated totals are displayed above. Monthly board targets and the January–August campaign estimates are separate planning figures.</p>
  <div className="mt-8 grid gap-8 sm:grid-cols-2"><div><h3 className="font-bold text-abm-navy">Key strengths</h3><p className="mt-2 text-sm text-muted-foreground">Communication, empathy, accurate information and professional service. {service === 'customer' ? 'Strong confidentiality and case handling.' : 'Conversion-focused, proactive sales advice.'}</p></div><div><h3 className="font-bold text-abm-navy">Opportunities for growth</h3><p className="mt-2 text-sm text-muted-foreground">Maintain high performance and share best practices. Reconcile the source totals before official use.</p></div></div>
 </div></section>;
}
