import React from "react";
import { testimonialsData } from "../data/testimonialsData";
import { Star, Quote, CheckCircle2, Sparkles, Building2 } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            Customer Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by 500+ Diagnostic Laboratories Across India
          </h2>
          <p className="text-base text-slate-600">
            From single-centre pathology labs to multi-branch franchise networks, discover how diagnostic directors run smoother, faster, and more profitable facilities with LabExpert.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {testimonialsData.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top strip with stars and badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-1.5">5.0</span>
                  </div>

                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Customer
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-700 mt-4 leading-relaxed italic">
                  "{t.quote}"
                </p>

                {/* Key Metrics Chips */}
                <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
                  <div className="bg-sky-50/70 p-2 rounded-xl">
                    <div className="text-xs font-bold text-sky-800">{t.metrics.timeSaved}</div>
                    <div className="text-[10px] text-slate-500">Speed Boost</div>
                  </div>
                  <div className="bg-emerald-50/70 p-2 rounded-xl">
                    <div className="text-xs font-bold text-emerald-800">{t.metrics.paperCut}</div>
                    <div className="text-[10px] text-slate-500">Paper Cut</div>
                  </div>
                  <div className="bg-purple-50/70 p-2 rounded-xl">
                    <div className="text-xs font-bold text-purple-800">{t.metrics.revenueGrowth}</div>
                    <div className="text-[10px] text-slate-500">Collections</div>
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-sky-600 to-cyan-500 text-white font-bold flex items-center justify-center text-sm shadow-sm shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{t.name}</h3>
                  <div className="text-xs text-slate-500">
                    {t.role} • <strong className="text-slate-700 font-semibold">{t.lab}</strong> ({t.city})
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

