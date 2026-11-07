import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Phone, MessageCircle, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function CtaBanner({ onOpenDemo }) {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-sky-900 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-xs border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          14-Day Risk-Free Onboarding Guarantee
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
          Join 500+ Diagnostic Laboratories Growing Faster with LabExpert
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Switch from crashing desktop software to modern cloud automation. Free guided data migration, zero hardware overhead, and 24/7 dedicated support.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenDemo ? onOpenDemo : () => window.location.href = '/contact'}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 hover:from-sky-300 hover:to-teal-300 text-slate-950 font-extrabold text-base px-8 py-4 rounded-xl shadow-xl shadow-cyan-500/20 transition-all cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Free Personalized Demo</span>
          </motion.button>

          <Link
            to="/pricing"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-6 py-4 rounded-xl border border-white/20 transition-all"
          >
            <span>See Transparent Pricing</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/916295779038?text=Hello%20LabExpert%2C%20I%20would%20like%20to%20know%20more%20about%20your%20laboratory%20software"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-6 py-4 rounded-xl shadow-lg shadow-emerald-900/30 transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Reassuring checklist */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            No Credit Card Required
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Free Data Migration from Old Software
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Full Staff Video Training Included
          </span>
        </div>

      </div>
    </section>
  );
}
