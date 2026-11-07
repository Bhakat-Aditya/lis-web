import React from "react";
import { 
  ShieldCheck, 
  Lock, 
  Database, 
  KeyRound, 
  Server, 
  Smartphone, 
  Monitor, 
  Laptop, 
  Tablet, 
  CheckCircle2,
  Sparkles,
  Cloud
} from "lucide-react";

export default function SecuritySection() {
  const securityPillars = [
    {
      icon: Lock,
      title: "AES-256 Bit Encryption",
      desc: "All diagnostic reports, patient demographics, and billing transactions are encrypted with military-grade AES-256 standards both at rest and in transit."
    },
    {
      icon: Database,
      title: "Automated Daily Backups",
      desc: "Continuous snapshots transferred to redundant, geographically isolated cloud servers. No manual thumb-drive copies needed ever again."
    },
    {
      icon: KeyRound,
      title: "Granular Role-Based Access",
      desc: "Assign distinct roles: Receptionists handle billing, Technicians input results, and Pathologists sign off. Receptionists cannot view profit margins."
    },
    {
      icon: Server,
      title: "99.99% Uptime Guarantee",
      desc: "Built on enterprise high-availability cloud infrastructure. Your lab continues uninterrupted even if local PCs encounter power or OS failures."
    }
  ];

  const devices = [
    { name: "Desktop PC", icon: Monitor, note: "Full intensive lab workspace" },
    { name: "Laptop", icon: Laptop, note: "Work remotely or at home" },
    { name: "Tablet / iPad", icon: Tablet, note: "Touch-friendly sample collection" },
    { name: "Smartphone", icon: Smartphone, note: "Instant owner dashboard & approval" }
  ];

  const journeySteps = [
    { step: "01", title: "Patient Registers", desc: "Data entered securely at front desk" },
    { step: "02", title: "AES-256 Encrypt", desc: "Secured before leaving the lab" },
    { step: "03", title: "TLS 1.3 Transit", desc: "Sent via encrypted cloud tunnel" },
    { step: "04", title: "Redundant Backup", desc: "Saved across isolated cloud centers" },
    { step: "05", title: "Signed & Delivered", desc: "Tamper-proof QR & WhatsApp dispatch" }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            Enterprise Security & Reliability
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Your Laboratory & Patient Data Protected at All Times
          </h2>
          <p className="text-base text-slate-300">
            Patient health information is sacred. LabExpert operates on healthcare-compliant infrastructure designed to eliminate data loss, hardware crashes, and unauthorized leaks.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {securityPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 hover:border-sky-500/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Secure Patient Data Journey */}
        <div className="mt-16 bg-slate-800/50 border border-slate-700/50 rounded-3xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white text-center sm:text-left">
            The Secure Diagnostic Data Journey
          </h3>
          <p className="text-xs text-slate-400 mt-1 text-center sm:text-left">
            How LabExpert protects patient records from registration to final report delivery
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {journeySteps.map((s, idx) => (
              <div key={idx} className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 text-left relative">
                <span className="text-xs font-mono font-bold text-cyan-400">{s.step}</span>
                <div className="text-sm font-bold text-white mt-1">{s.title}</div>
                <div className="text-xs text-slate-400 mt-0.5">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Device Compatibility Showcase */}
        <div className="mt-12 bg-gradient-to-r from-sky-950 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 border border-sky-500/20 text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wide">
              No Installation Required
            </span>
            <h3 className="text-xl font-extrabold text-white mt-1">
              Your Laboratory Always Within Reach on Any Device
            </h3>
            <p className="text-xs text-slate-300 max-w-xl mt-1">
              Simply launch Google Chrome or any modern browser. Your team can run registrations on desktop, collections on tablets, and approvals on mobile phones.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
            {devices.map((d, idx) => {
              const DevIcon = d.icon;
              return (
                <div key={idx} className="bg-slate-900/90 border border-slate-700 p-3 rounded-xl text-center flex flex-col items-center">
                  <DevIcon className="w-5 h-5 text-sky-400 mb-1" />
                  <span className="text-xs font-bold text-white">{d.name}</span>
                  <span className="text-[9px] text-slate-400 mt-0.5">{d.note}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

