import React from "react";
import { comparisonData } from "../data/workflowData";
import { XCircle, CheckCircle2, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";

export default function ComparisonSection({ onOpenDemo }) {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
            Why Migrate Today?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Traditional Desktop Software vs. LabExpert Cloud
          </h2>
          <p className="text-base text-slate-600">
            Stop paying for local computer crashes, lost reports, and expensive annual AMC maintenance fees.
          </p>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          
          {/* Traditional Software (Negative) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-rose-100">
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wide">
                  The Old Way
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Traditional Desktop Software
                </h3>
              </div>
              <span className="bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full">
                High Risk & Outdated
              </span>
            </div>

            <div className="space-y-4 pt-6">
              {comparisonData.traditional.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-rose-100 bg-rose-50/50 -mx-6 -mb-6 p-6 rounded-b-3xl">
              <div className="text-xs font-bold text-rose-800">
                Cost of Inaction: High server maintenance, lost patient records during PC format, and unhappy referring doctors.
              </div>
            </div>
          </div>

          {/* LabExpert Cloud Platform (Positive) */}
          <div className="bg-gradient-to-br from-slate-900 to-sky-950 text-white rounded-3xl p-6 sm:p-8 border border-sky-500/30 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wide">
                  The Modern Solution
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  LabExpert Cloud Platform
                </h3>
              </div>
              <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                100% Cloud Automated
              </span>
            </div>

            <div className="space-y-4 pt-6">
              {comparisonData.labexpert.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-300">
                Includes free data migration from your current software.
              </span>
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs cursor-pointer shadow-md transition-all active:scale-95"
              >
                <span>Switch to LabExpert</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

