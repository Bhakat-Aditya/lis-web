import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import Breadcrumb from "../components/Breadcrumb";
import PricingSection from "../components/PricingSection";
import { 
  DollarSign, 
  Calculator, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle, 
  Printer, 
  Scan, 
  Wifi, 
  Clock, 
  Check, 
  X,
  CreditCard
} from "lucide-react";

export default function PricingPage({ onOpenDemo }) {
  // ROI Calculator State
  const [dailyPatients, setDailyPatients] = useState(50);

  // Calculations:
  // Avg paper & cartridge cost per printed report = ₹4.50
  // Monthly paper savings = dailyPatients * 30 * 4.5 * 85%
  const monthlyPaperSavings = Math.round(dailyPatients * 30 * 4.5 * 0.85);

  // Time saved at front desk: 3 minutes per patient = (dailyPatients * 3 * 30) / 60
  const staffHoursSaved = Math.round((dailyPatients * 3 * 30) / 60);

  // Revenue leakage recovered: approx ₹180 per patient/month
  const leakageRecovered = Math.round(dailyPatients * 180);

  const totalMonthlyBenefit = monthlyPaperSavings + leakageRecovered;

  const hardwareGuide = [
    {
      type: "Thermal Receipt Printer",
      model: "3-Inch (80mm) USB/LAN POS Printer",
      brands: "TVS RP-3160, Epson TM-T82, Xprinter",
      priceEst: "₹3,500 - ₹5,500",
      purpose: "Instant registration slip, token & dynamic UPI payment QR bill"
    },
    {
      type: "Barcode Label Printer",
      model: "2-Inch Direct Thermal Barcode Printer",
      brands: "TSC TE-244, Citizen CL-S621, Zebra ZD220",
      priceEst: "₹8,500 - ₹12,000",
      purpose: "High-speed waterproof blood tube & vacutainer labels"
    },
    {
      type: "1D / 2D Barcode Scanner",
      model: "Handheld USB / Wireless Scanner",
      brands: "Honeywell Orbit / Voyager, TVS BS-L100",
      priceEst: "₹1,200 - ₹2,500",
      purpose: "Instant tube scanning for sample routing and analyzer entry"
    },
    {
      type: "Standard Laser Printer (Optional)",
      model: "A4 Monochrome or Color Laser Printer",
      brands: "HP LaserJet, Canon imageCLASS, Brother",
      priceEst: "Standard Office Laser",
      purpose: "For patients who specifically insist on physical A4 letterhead reports"
    }
  ];

  return (
    <PageTransition>
      <SEO
        title="Pricing & Plans | LabExpert Cloud Pathology & OPD Software"
        description="Affordable, transparent pricing plans for standalone pathology labs, polyclinics, and diagnostic chains. Unlimited patient registrations and WhatsApp reports included."
        keywords="LIS pricing, pathology software cost, lab software subscription, WhatsApp report cost, diagnostic software India"
        canonical="https://labexpert.in/pricing"
      />

      <Breadcrumb items={[{ label: "Pricing & Plans" }]} />

      <main>
        {/* Page Hero */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-b from-sky-950 via-slate-900 to-slate-950 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_70%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold mb-6"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Transparent & Predictable Investment</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none"
            >
              Simple, Affordable Pricing with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">No Hidden Costs</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Every plan includes unlimited patient registrations, regular cloud backups, automated formula engine, and WhatsApp delivery. Scale freely as your test volume grows.
            </motion.p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onOpenDemo ? onOpenDemo("Growth") : null}
                className="bg-sky-600 hover:bg-sky-500 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg shadow-sky-600/30 transition-all cursor-pointer"
              >
                Schedule Free Demo Walkthrough
              </motion.button>
              <a
                href="#roi-calculator"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm border border-white/20 transition-all"
              >
                Calculate Your Cost Savings ↓
              </a>
            </div>

          </div>
        </section>

        {/* Pricing Cards Section */}
        <PricingSection onOpenDemo={onOpenDemo} />

        {/* Interactive ROI & Savings Calculator */}
        <section id="roi-calculator" className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">
                <Calculator className="w-4 h-4" />
                Live ROI Calculator
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                How Much Money Does LabExpert Save Your Lab?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Slide the control below to match your daily patient walk-ins:
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
                <label className="text-sm font-bold text-slate-800">
                  Estimated Daily Patient Volume:
                </label>
                <div className="text-xl font-black text-sky-600 font-mono bg-white px-4 py-1.5 rounded-xl border border-sky-200 shadow-xs">
                  {dailyPatients} Patients / Day
                </div>
              </div>

              <input
                type="range"
                min="10"
                max="300"
                step="5"
                value={dailyPatients}
                onChange={(e) => setDailyPatients(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />

              <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
                <span>10 Patients</span>
                <span>150 Patients</span>
                <span>300+ Patients</span>
              </div>
            </div>

            {/* Calculations Breakdown Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <motion.div 
                whileHover={{ y: -3 }}
                className="bg-emerald-50/80 rounded-2xl p-5 border border-emerald-200 text-center"
              >
                <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  Paper & Ink Savings
                </div>
                <div className="text-3xl font-black text-emerald-700 font-mono mt-2">
                  ₹{monthlyPaperSavings.toLocaleString()}
                </div>
                <div className="text-[11px] text-emerald-900/70 mt-1">
                  Saved monthly by delivering 85%+ reports on WhatsApp
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -3 }}
                className="bg-sky-50/80 rounded-2xl p-5 border border-sky-200 text-center"
              >
                <div className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                  Staff Hours Reclaimed
                </div>
                <div className="text-3xl font-black text-sky-700 font-mono mt-2">
                  ~{staffHoursSaved} Hours
                </div>
                <div className="text-[11px] text-sky-900/70 mt-1">
                  Free your front-desk from manual report sorting & phone calls
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -3 }}
                className="bg-gradient-to-br from-indigo-900 to-slate-950 rounded-2xl p-5 text-white text-center shadow-md"
              >
                <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                  Total Monthly Value Added
                </div>
                <div className="text-3xl font-black text-cyan-300 font-mono mt-2">
                  ₹{totalMonthlyBenefit.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  Software pays for itself in less than 20 days!
                </div>
              </motion.div>

            </div>

          </div>
        </section>

        {/* Hardware & Barcode Compatibility Guide */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">
              <Printer className="w-4 h-4" />
              Plug & Play Hardware
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Hardware Requirements & Supported Printers
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              LabExpert works with any standard computer and existing lab peripherals. No specialized or locked-in proprietary hardware required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hardwareGuide.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-sky-300 transition-colors">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="text-sm font-bold text-slate-900">{item.type}</h3>
                    <span className="text-[11px] font-mono text-sky-600 font-semibold bg-sky-50 px-2 py-0.5 rounded">
                      {item.priceEst}
                    </span>
                  </div>
                  <div className="mt-3 space-y-1.5 text-xs">
                    <div>
                      <span className="text-slate-400">Spec:</span>{" "}
                      <span className="font-semibold text-slate-800">{item.model}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Popular Brands:</span>{" "}
                      <span className="font-medium text-slate-700">{item.brands}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 pt-1 leading-relaxed">
                      {item.purpose}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-sky-50 rounded-2xl p-4 border border-sky-100 text-center text-xs text-sky-900 font-medium">
            💡 Already have printers from your existing setup? LabExpert supports standard ESC/POS thermal commands and browser printing on Chrome, Edge, and Safari out of the box!
          </div>
        </section>

        {/* 100% Risk Free Guarantee Banner */}
        <section className="py-12 bg-slate-900 text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
            <h2 className="text-2xl font-black">30-Day Money-Back Satisfaction Guarantee</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Try LabExpert in your diagnostic centre. If it does not dramatically speed up your patient workflow and eliminate calculation errors within 30 days, we'll refund 100% of your onboarding fee. No questions asked.
            </p>
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpenDemo ? onOpenDemo("Growth") : null}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all cursor-pointer shadow-lg"
              >
                Start Your Risk-Free Trial
              </motion.button>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
