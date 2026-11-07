import React from "react";
import { quickStats } from "../data/testimonialsData";
import { ShieldCheck, Award, ServerOff, Clock, Smartphone } from "lucide-react";

export default function TrustMetrics() {
  return (
    <section className="py-12 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stat Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {quickStats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                {item.value}
              </span>
              <span className="text-sm font-bold text-slate-800 mt-1">
                {item.label}
              </span>
              <span className="text-xs text-slate-500 mt-0.5">
                {item.sublabel}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-sky-600" />
            <span>NABL Format Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>AES-256 Bit Cloud Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <ServerOff className="w-4 h-4 text-purple-600" />
            <span>Zero Local Server Costs</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-cyan-600" />
            <span>Works on Any Mobile / Tablet</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-600" />
            <span>24/7 Technical Response</span>
          </div>
        </div>

      </div>
    </section>
  );
}

