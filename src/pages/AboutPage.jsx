import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import Breadcrumb from "../components/Breadcrumb";
import TrustMetrics from "../components/TrustMetrics";
import CtaBanner from "../components/CtaBanner";
import { 
  ShieldCheck, 
  Sparkles, 
  Target, 
  Eye, 
  Heart, 
  CheckCircle2, 
  Users, 
  Clock, 
  Activity,
  ArrowRight,
  Database,
  CalendarCheck
} from "lucide-react";

export default function AboutPage({ onOpenDemo }) {
  const coreValues = [
    {
      title: "Security First",
      desc: "We prioritize patient medical confidentiality with bank-grade AES-256 encryption, TLS 1.3 tunnels, and automated daily offsite cloud snapshots."
    },
    {
      title: "Speed & Simplicity",
      desc: "Every screen in LabExpert is engineered to reduce redundant clicks, allowing front-desk receptionists to register patients in under 60 seconds."
    },
    {
      title: "100% Cloud Reliability",
      desc: "Never let a computer crash halt your laboratory operations. LabExpert runs seamlessly with a 99.99% SLA uptime."
    },
    {
      title: "Team Friendly",
      desc: "Receptionists, phlebotomists, biochemists, pathologists, and clinic directors can collaborate simultaneously from different rooms or cities."
    },
    {
      title: "Dedicated Human Support",
      desc: "We stand beside diagnostic centres with quick phone and WhatsApp assistance during setup, data migration, and daily operational use."
    },
    {
      title: "Growth Focused",
      desc: "From standalone pathology clinics to multi-city diagnostic chains, our cloud architecture scales effortlessly as your patient footfall doubles."
    }
  ];

  return (
    <PageTransition>
      <SEO
        title="About Us | LabExpert Technologies"
        description="Learn about the mission, engineering principles, and clinical standards driving LabExpert cloud diagnostic software across India."
        canonical="https://labexpert.in/about"
      />

      <Breadcrumb items={[{ label: "About Us" }]} />

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
              <Activity className="w-3.5 h-3.5" />
              <span>Empowering Modern Diagnostic Centers</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none"
            >
              Building India's Most Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Diagnostic Cloud</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Our mission is to replace fragile desktop software and paper-heavy workflows with high-speed, secure, and WhatsApp-native healthcare technology.
            </motion.p>

          </div>
        </section>

        {/* Mission & Vision Grid */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To equip every pathology lab and polyclinic across India with enterprise-grade cloud tools—making patient registration faster, eliminating calculation errors, and delivering diagnostic reports directly to patient phones within seconds.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Our Vision</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A connected diagnostic healthcare ecosystem where patient test histories are securely accessible anywhere, sample mix-ups are physically impossible with barcodes, and lab owners enjoy total financial transparency.
              </p>
            </div>
          </div>
        </section>

        {/* Numbers & Stats */}
        <TrustMetrics />

        {/* Core Values */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              The Principles That Guide Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              How we approach engineering, data security, and customer support every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-sky-300 transition-all space-y-2"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-sky-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{val.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <CtaBanner onOpenDemo={onOpenDemo} />
      </main>
    </PageTransition>
  );
}
