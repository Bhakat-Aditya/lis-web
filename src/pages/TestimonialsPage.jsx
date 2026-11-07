import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import Breadcrumb from "../components/Breadcrumb";
import TestimonialsSection from "../components/TestimonialsSection";
import { 
  Star, 
  MapPin, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Award
} from "lucide-react";

export default function TestimonialsPage({ onOpenDemo }) {
  const caseStudies = [
    {
      title: "How Dr. Sen Diagnostics Slashed Report Delivery Costs by ₹14,000 Every Month",
      lab: "Dr. Sen Diagnostic & Polyclinic",
      location: "Kolkata, West Bengal",
      volume: "85 Patients / Day",
      challenge: "High paper report printing expenses, long evening patient queues for report collection, and manual calculation errors in CBC indices.",
      solution: "Implemented LabExpert Growth Plan with automatic WhatsApp PDF delivery, due payment lock, and automated formula engine.",
      results: [
        "92% of patients opted for WhatsApp report delivery instead of physical paper",
        "₹14,200 monthly saved in laser toner, A4 paper, and custom pre-printed envelopes",
        "Evening reception crowd reduced by 70%, freeing up counter staff"
      ]
    },
    {
      title: "Unifying 5 Doctor OPD Chambers with Laboratory at Apex Care Clinic",
      lab: "Apex Care Healthcare & Scan",
      location: "Patna, Bihar",
      volume: "120 OPD Visits & 60 Lab Tests / Day",
      challenge: "Two separate software packages caused repeated patient registrations, missed doctor referral commissions, and chaotic billing day-closing.",
      solution: "Deployed LabExpert Enterprise OPD + Lab Suite with unified UHID and live token queue display in the waiting lounge.",
      results: [
        "Doctors order diagnostic tests directly inside prescription Rx with 1 click",
        "Zero discrepancies in doctor consultation fee splits and commission payouts",
        "Waiting room patients watch live queue screen without crowding reception desk"
      ]
    },
    {
      title: "Expanding to 4 Collection Centers with Barcode Tracking & B2B Rate Lists",
      lab: "Metro Diagnostic Hub",
      location: "Siliguri, West Bengal",
      volume: "250+ Samples Daily Across 4 Centers",
      challenge: "Specimen mix-ups during transit between sample collection booths and central testing hub, delayed turnaround times.",
      solution: "Standardized on LabExpert Multi-Branch Hub with 2-inch barcode tube printing and central cloud dashboard.",
      results: [
        "Zero lost or mismatched blood tubes in 18 months of continuous operation",
        "Central lab tracks incoming specimen batches in real time from collection booths",
        "B2B monthly statements generated automatically in under 5 minutes"
      ]
    }
  ];

  return (
    <PageTransition>
      <SEO
        title="Customer Reviews & Pathology Lab Case Studies | LabExpert"
        description="Read verified reviews and diagnostic case studies from 500+ Indian pathology labs and clinics using LabExpert cloud software."
        keywords="LIS reviews, pathology software reviews, lab software customer feedback, diagnostic case studies India"
        canonical="https://labexpert.in/testimonials"
      />

      <Breadcrumb items={[{ label: "Verified Reviews & Case Studies" }]} />

      <main>
        {/* Page Hero */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-b from-sky-950 via-slate-900 to-slate-950 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_70%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-6"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Real Laboratory Success Stories</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none"
            >
              Trusted by 500+ Diagnostic Labs <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-300">Across India</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Discover how modern pathology laboratories and clinics save hours every day, prevent revenue leakages, and delight patients with WhatsApp report delivery.
            </motion.p>

            {/* Quick Metrics Bar */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 text-center">
                <div className="text-3xl font-black text-amber-400 flex items-center justify-center gap-1">
                  <span>4.9</span>
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-xs font-bold text-white mt-1">Average Customer Rating</div>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 text-center">
                <div className="text-3xl font-black text-cyan-400">500+</div>
                <div className="text-xs font-bold text-white mt-1">Active Indian Labs</div>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 text-center">
                <div className="text-3xl font-black text-emerald-400">2.5M+</div>
                <div className="text-xs font-bold text-white mt-1">WhatsApp Reports Sent</div>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 text-center">
                <div className="text-3xl font-black text-sky-400">68%</div>
                <div className="text-xs font-bold text-white mt-1">Faster Report Turnaround</div>
              </div>
            </div>

          </div>
        </section>

        {/* In-Depth Case Studies */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">
              <TrendingUp className="w-4 h-4" />
              Real Transformations
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Detailed Diagnostic Case Studies
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              See the measurable impact LabExpert makes on daily lab operations.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((cs, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -3 }}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-100 text-sky-800 px-2.5 py-1 rounded">
                      Case Study #{idx + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
                      {cs.title}
                    </h3>
                  </div>
                  <div className="text-xs text-slate-500 font-medium shrink-0">
                    <div className="font-bold text-slate-800">{cs.lab}</div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <MapPin className="w-3 h-3 text-sky-600" />
                      <span>{cs.location} • {cs.volume}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-5 space-y-4 text-xs">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">The Operational Challenge:</h4>
                      <p className="text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                        {cs.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">The LabExpert Solution:</h4>
                      <p className="text-slate-600 leading-relaxed bg-sky-50/50 p-3 rounded-xl border border-sky-100">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-7 bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5">
                    <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Measurable Business Results:
                    </h4>
                    <ul className="space-y-2.5 text-xs text-emerald-950">
                      {cs.results.map((res, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <span className="font-bold text-emerald-600">✓</span>
                          <span className="leading-snug">{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Existing Testimonials Grid Component */}
        <TestimonialsSection />

        {/* CTA */}
        <section className="py-12 bg-sky-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Join India's most modern diagnostic labs</h2>
            <p className="mt-2 text-sky-100 text-xs sm:text-sm">
              Speak with a diagnostic software specialist who understands laboratory workflows.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onOpenDemo ? onOpenDemo("Growth") : null}
                className="bg-white text-sky-700 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg hover:bg-sky-50 cursor-pointer transition-all"
              >
                Book Free Live Demo
              </motion.button>
              <Link
                to="/pricing"
                className="bg-sky-700 hover:bg-sky-800 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all"
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

