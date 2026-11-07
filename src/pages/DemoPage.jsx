import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import Breadcrumb from "../components/Breadcrumb";
import InteractivePlayground from "../components/InteractivePlayground";
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Phone, 
  Calendar, 
  ShieldCheck, 
  Clock,
  ArrowRight,
  HelpCircle,
  Play
} from "lucide-react";

export default function DemoPage({ onOpenDemo }) {
  // In-page quick booking form state
  const [formData, setFormData] = useState({
    name: "",
    labName: "",
    phone: "",
    city: "",
    preferredTime: "morning"
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and phone number.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <SEO
        title="Interactive LIS Simulator & WhatsApp Demo | LabExpert"
        description="Try our interactive WhatsApp lab report delivery simulator, take the lab readiness quiz, and book a personalized 1-on-1 live screen share demo."
        keywords="LIS demo, interactive pathology software, WhatsApp report simulator, lab software trial, diagnostic software preview"
        canonical="https://labexpert.in/demo"
      />

      <Breadcrumb items={[{ label: "Interactive Demo Sandbox" }]} />

      <main>
        {/* Page Hero */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-b from-sky-950 via-slate-900 to-slate-950 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.2),_transparent_70%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-6"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Interactive Sandbox Environment</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none"
            >
              Experience LabExpert <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">Live in Action</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Test drive the real patient WhatsApp report dispatch system, explore dynamic due balance payment locks, and see how our formula engine operates before booking your live call.
            </motion.p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#interactive-tools"
                className="bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg shadow-emerald-600/30 transition-all"
              >
                Launch WhatsApp Simulator Below ↓
              </a>
              <a
                href="#book-live"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm border border-white/20 transition-all"
              >
                Schedule Guided Screen Share Call
              </a>
            </div>

          </div>
        </section>

        {/* The 3 Interactive Sandbox Tools */}
        <div id="interactive-tools">
          <InteractivePlayground onOpenDemo={onOpenDemo} />
        </div>

        {/* Guided Screen Share Booking Section */}
        <section id="book-live" className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10">
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">
                <Calendar className="w-4 h-4" />
                Live Walkthrough
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Book a 15-Minute Personalized Demo
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Our product specialist will screen share LabExpert customized with your lab's letterhead and tests.
              </p>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-900">Demo Request Received!</h3>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our diagnostic software specialist will call you on <strong>{formData.phone}</strong> to confirm your screen-share time slot.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/916295779038?text=Hello%2C%20I%20just%20submitted%20a%20demo%20request%20on%20your%20website"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-md hover:bg-emerald-700 transition-colors"
                  >
                    <span>Connect Immediately on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Laboratory or Clinic Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Apex Diagnostic Centre"
                      value={formData.labName}
                      onChange={(e) => setFormData({ ...formData, labName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">WhatsApp Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">City / State *</label>
                    <input
                      type="text"
                      required
                      placeholder="Kolkata, West Bengal"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Preferred Time for Screen Share Call</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50 font-medium"
                  >
                    <option value="morning">Morning (10:00 AM - 01:00 PM)</option>
                    <option value="afternoon">Afternoon (01:00 PM - 04:00 PM)</option>
                    <option value="evening">Evening (04:00 PM - 08:00 PM)</option>
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-bold py-3.5 rounded-xl text-sm shadow-md shadow-sky-600/30 transition-all cursor-pointer"
                >
                  Confirm Free Live Demo Session
                </motion.button>

                <p className="text-[11px] text-slate-400 text-center">
                  🔒 Zero spam guarantee. We respect your privacy. No credit card required.
                </p>
              </form>
            )}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

