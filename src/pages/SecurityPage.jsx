import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import Breadcrumb from "../components/Breadcrumb";
import SecuritySection from "../components/SecuritySection";
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  HardDrive, 
  Key, 
  FileCheck2, 
  AlertOctagon, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Database
} from "lucide-react";

export default function SecurityPage({ onOpenDemo }) {
  const securityPillars = [
    {
      icon: Lock,
      title: "AES-256 Military Encryption",
      desc: "All patient demographic records, diagnostic test results, and financial receipts are encrypted both in transit (TLS 1.3) and at rest with AES-256 standards."
    },
    {
      icon: Server,
      title: "AWS Mumbai Data Residency",
      desc: "Hosted exclusively on Amazon Web Services in Mumbai. 100% compliant with Indian health data protection standards and DISHA guidelines. Zero foreign data leakage."
    },
    {
      icon: Key,
      title: "Granular Role-Based Permissions (RBAC)",
      desc: "Restrict what front desk staff, phlebotomists, and accounts personnel can view. Block unauthorized staff from seeing doctor commission rates or editing approved reports."
    },
    {
      icon: Database,
      title: "Continuous Automated Cloud Snapshots",
      desc: "Isolated daily and hourly automated backups. If your local lab laptop gets infected with ransomware or breaks down, your operations resume instantly on any other device in 30 seconds."
    },
    {
      icon: FileCheck2,
      title: "Tamper-Proof Audit Trails",
      desc: "Every result entry, report verification, reprint, and WhatsApp dispatch is immutably logged with the technician's user ID, IP address, and exact timestamp."
    },
    {
      icon: HardDrive,
      title: "99.99% Uptime SLA",
      desc: "Dual-redundant server clusters ensure your laboratory registration counter never faces downtime, even during heavy morning peak collection rushes."
    }
  ];

  return (
    <PageTransition>
      <SEO
        title="Cloud Security & Compliance Architecture | LabExpert"
        description="Discover LabExpert enterprise security: AES-256 encryption, AWS Mumbai data residency, automated daily backups, and role-based access control."
        keywords="LIS security, cloud lab software encryption, AWS healthcare data India, NABL software compliance, patient data protection"
        canonical="https://labexpert.in/security"
      />

      <Breadcrumb items={[{ label: "Cloud Security & Compliance" }]} />

      <main>
        {/* Page Hero */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),_transparent_70%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-6"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>NABL Format Ready & Encrypted</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none"
            >
              Enterprise Cloud Security & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">Data Protection</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Designed from the ground up to protect patient confidentiality, prevent data tampering, and ensure your laboratory never loses a single report to hard drive crashes.
            </motion.p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onOpenDemo ? onOpenDemo("Growth") : null}
                className="bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
              >
                Book Security & Architecture Review
              </motion.button>
              <a
                href="#security-pillars"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm border border-white/20 transition-all"
              >
                Explore 6 Security Pillars ↓
              </a>
            </div>

          </div>
        </section>

        {/* 6 Security Pillars */}
        <section id="security-pillars" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              The 6 Pillars of LabExpert Security
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Why top diagnostic chains trust our cloud over vulnerable local hard drives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-emerald-300 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Desktop Danger vs Cloud Shield Comparison */}
        <section className="py-16 bg-slate-100/60 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                The Hidden Cost of Traditional Desktop Software
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                What happens when your local computer crashes vs running on LabExpert Cloud:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bad: Desktop */}
              <div className="bg-rose-50/60 border border-rose-200 rounded-3xl p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                  <AlertOctagon className="w-5 h-5" />
                  <span>Desktop Software Risks</span>
                </div>
                <ul className="space-y-3 text-xs text-rose-950/80">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Hard Drive Crash:</strong> When a local PC disk fails, 5 years of patient records and test histories vanish permanently.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Ransomware & Malware:</strong> USB pen drives often infect reception PCs, encrypting data and demanding extortion fees.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Single Point of Failure:</strong> If that specific PC is turned off or undergoing Windows updates, no one can print reports.</span>
                  </li>
                </ul>
              </div>

              {/* Good: LabExpert Cloud */}
              <div className="bg-emerald-50/60 border border-emerald-200 rounded-3xl p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>LabExpert Cloud Shield</span>
                </div>
                <ul className="space-y-3 text-xs text-emerald-950/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Instant PC Swap:</strong> If a laptop dies or gets wet, open Chrome on any spare laptop or phone and continue within 30 seconds.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Hourly Cloud Snapshots:</strong> Encrypted backups stored in 3 geographically isolated AWS data zones. Zero data loss.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Work from Anywhere:</strong> Pathologists can sign reports while traveling, and lab owners can inspect live revenue on their mobile phone.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Existing SecuritySection Component */}
        <SecuritySection />

        {/* CTA */}
        <section className="py-12 bg-emerald-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Protect your diagnostic laboratory today</h2>
            <p className="mt-2 text-emerald-100 text-xs sm:text-sm">
              We handle the complete data migration from your existing software with 100% data integrity guarantee.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onOpenDemo ? onOpenDemo("Growth") : null}
                className="bg-white text-emerald-900 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg hover:bg-emerald-50 cursor-pointer transition-all"
              >
                Schedule Free Security Review
              </motion.button>
              <Link
                to="/pricing"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all"
              >
                View Plans & Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

