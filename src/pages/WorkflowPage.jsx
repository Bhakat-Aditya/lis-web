import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import Breadcrumb from "../components/Breadcrumb";
import WorkflowSection from "../components/WorkflowSection";
import { 
  GitBranch, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  QrCode, 
  Send,
  Zap
} from "lucide-react";

export default function WorkflowPage({ onOpenDemo }) {
  const tatComparison = [
    {
      step: "1. Patient Registration & Bill",
      manualTime: "8 - 12 mins",
      manualIssue: "Paper handwriting, manual receipt cut, queue delays",
      cloudTime: "90 seconds",
      cloudAdvantage: "UHID auto-fill, dynamic UPI QR billing, instant thermal receipt"
    },
    {
      step: "2. Phlebotomy & Sample Labeling",
      manualTime: "5 - 8 mins",
      manualIssue: "Marker pens on tubes smudge, high risk of sample mix-up",
      cloudTime: "30 seconds",
      cloudAdvantage: "Thermal barcode label printed instantly, color coded vacutainers"
    },
    {
      step: "3. Result Entry & Calculations",
      manualTime: "15 - 20 mins",
      manualIssue: "Punching numbers and manual calculator math (ANC, eGFR, ratios)",
      cloudTime: "2 - 3 mins",
      cloudAdvantage: "Pre-filled test parameters, automated formula engine, auto panic-flags"
    },
    {
      step: "4. Pathologist Review & Signoff",
      manualTime: "10 - 15 mins",
      manualIssue: "Waiting for physical paper batch to reach doctor's table",
      cloudTime: "1 minute",
      cloudAdvantage: "Remote cloud review from mobile/laptop with digital signatures"
    },
    {
      step: "5. Report Delivery to Patient",
      manualTime: "Patient returns next day or waits 2 hours",
      manualIssue: "Paper cost, envelope stuffing, front-desk collection chaos",
      cloudTime: "3 seconds",
      cloudAdvantage: "Automated WhatsApp delivery with PDF and smart due payment lock"
    }
  ];

  return (
    <PageTransition>
      <SEO
        title="7-Step Diagnostic Laboratory Workflow & TAT | LabExpert"
        description="Discover the step-by-step diagnostic workflow: patient registration, barcode labeling, automated formula engine, pathologist verification, and instant WhatsApp delivery."
        keywords="Pathology workflow, LIS turnaround time, lab TAT, sample barcoding, automated report delivery, diagnostic center process"
        canonical="https://labexpert.in/workflow"
      />

      <Breadcrumb items={[{ label: "7-Step Diagnostic Workflow" }]} />

      <main>
        {/* Page Hero */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-b from-sky-950 via-slate-900 to-slate-950 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.2),_transparent_70%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold mb-6"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Standardized Laboratory Operations</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none"
            >
              The 7-Step Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Diagnostic Workflow</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Discover how LabExpert coordinates sample collection, formula validation, remote doctor approval, and instant WhatsApp dispatch into a high-speed, mistake-proof pipeline.
            </motion.p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onOpenDemo ? onOpenDemo("Growth") : null}
                className="bg-sky-600 hover:bg-sky-500 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg shadow-sky-600/30 transition-all cursor-pointer"
              >
                Book 1-on-1 Workflow Tour
              </motion.button>
              <a
                href="#tat-benchmark"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm border border-white/20 transition-all"
              >
                See Turnaround Time (TAT) Analysis ↓
              </a>
            </div>

          </div>
        </section>

        {/* The 7-Step Interactive Workflow */}
        <WorkflowSection onOpenDemo={onOpenDemo} />

        {/* Turnaround Time (TAT) Head-to-Head Comparison */}
        <section id="tat-benchmark" className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 uppercase tracking-wider mb-2">
              <Clock className="w-4 h-4" />
              Efficiency Benchmark
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Manual Lab Process vs LabExpert Cloud Pipeline
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              How modern pathology software slashes sample turnaround time from over 60 minutes down to under 15 minutes.
            </p>
          </div>

          <div className="space-y-4">
            {tatComparison.map((row, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:border-sky-300 transition-all grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
                <div className="md:col-span-4">
                  <h3 className="text-sm font-bold text-slate-900">{row.step}</h3>
                </div>

                <div className="md:col-span-4 bg-rose-50/70 border border-rose-100 rounded-xl p-3">
                  <div className="flex items-center justify-between text-xs font-bold text-rose-700">
                    <span>Old Manual Process</span>
                    <span className="font-mono">{row.manualTime}</span>
                  </div>
                  <p className="text-[11px] text-rose-900/70 mt-1 leading-snug">
                    {row.manualIssue}
                  </p>
                </div>

                <div className="md:col-span-4 bg-emerald-50/70 border border-emerald-100 rounded-xl p-3">
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-800">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-emerald-600" />
                      LabExpert Speed
                    </span>
                    <span className="font-mono bg-emerald-200/60 px-1.5 py-0.5 rounded text-emerald-900 font-extrabold">
                      {row.cloudTime}
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-900/80 mt-1 leading-snug">
                    {row.cloudAdvantage}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* TAT Impact Summary */}
          <div className="mt-8 bg-gradient-to-r from-sky-900 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-black text-cyan-300">
                Average Overall Turnaround Time Reduced by 68%
              </div>
              <p className="text-xs text-slate-300">
                Process twice as many patients during peak morning rush without adding extra laboratory staff.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenDemo ? onOpenDemo("Growth") : null}
              className="bg-white text-sky-900 hover:bg-sky-50 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shrink-0 shadow-md cursor-pointer transition-all"
            >
              See Live System Speed
            </motion.button>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-sky-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Want to standardize your laboratory's workflow?</h2>
            <p className="mt-2 text-sky-100 text-xs sm:text-sm">
              We help you migrate your test list, formulas, and doctor commission rates in under 24 hours.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onOpenDemo ? onOpenDemo("Growth") : null}
                className="bg-white text-sky-700 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg hover:bg-sky-50 cursor-pointer transition-all"
              >
                Book Free Consultation
              </motion.button>
              <Link
                to="/pricing"
                className="bg-sky-700 hover:bg-sky-800 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all"
              >
                Check Pricing Plans
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

