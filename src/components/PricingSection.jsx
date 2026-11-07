import React, { useState } from "react";
import { pricingPlans, comparisonTable } from "../data/pricingData";
import { 
  Check, 
  X, 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Info
} from "lucide-react";

export default function PricingSection({ onOpenDemo }) {
  const [pricingTab, setPricingTab] = useState("lis"); // "lis" | "opd"
  const [showFullTable, setShowFullTable] = useState(false);

  const activePlans = pricingPlans[pricingTab] || pricingPlans.lis;

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Simple & Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Predictable Annual Plans That Grow With Your Laboratory
          </h2>
          <p className="text-base text-slate-600">
            No expensive local server purchases. No complex per-feature fees. Just transparent annual pricing with clearly displayed renewal costs.
          </p>
        </div>

        {/* Plan Category Switcher */}
        <div className="flex justify-center mt-8 mb-12">
          <div className="bg-slate-100 p-1 rounded-2xl flex items-center border border-slate-200">
            <button
              onClick={() => setPricingTab("lis")}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                pricingTab === "lis"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Pathology Laboratory Plans
            </button>
            <button
              onClick={() => setPricingTab("opd")}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                pricingTab === "opd"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Smart OPD & Clinic Suite
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className={`grid grid-cols-1 gap-8 text-left ${
          pricingTab === "lis" ? "lg:grid-cols-3" : "max-w-4xl mx-auto md:grid-cols-2"
        }`}>
          {activePlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                plan.popular
                  ? "bg-gradient-to-b from-sky-950 via-slate-900 to-slate-900 text-white shadow-2xl border-2 border-sky-500 scale-100 lg:-translate-y-2"
                  : "bg-slate-50/70 hover:bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-400 to-cyan-400 text-slate-950 text-[11px] font-black tracking-wide uppercase px-3 py-1 rounded-full shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="flex items-center justify-between">
                  <h3 className={`text-xl font-black ${plan.popular ? "text-white" : "text-slate-900"}`}>
                    {plan.name}
                  </h3>
                  {!plan.popular && (
                    <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-full">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className={`text-xs mt-2 leading-relaxed ${plan.popular ? "text-slate-300" : "text-slate-500"}`}>
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mt-5 pb-5 border-b border-slate-200/50">
                  <div className="flex items-baseline gap-1.5">
                    <span className={`text-3xl sm:text-4xl font-black ${plan.popular ? "text-sky-400" : "text-slate-900"}`}>
                      ₹{plan.firstYearPrice.toLocaleString()}
                    </span>
                    <span className={`text-xs ${plan.popular ? "text-slate-300" : "text-slate-500"}`}>
                      / First Year
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs mt-2">
                    <span className={`font-semibold ${plan.popular ? "text-emerald-300" : "text-emerald-700"}`}>
                      Renewal: ₹{plan.renewalPrice.toLocaleString()} / Year
                    </span>
                    <span className={`text-[11px] ${plan.popular ? "text-slate-400" : "text-slate-400"}`}>
                      (~{plan.monthlyEquivalent}/mo)
                    </span>
                  </div>
                </div>

                {/* Patient Limit & User Tag */}
                <div className={`mt-4 p-2.5 rounded-xl text-xs font-bold flex items-center justify-between ${
                  plan.popular ? "bg-white/10 text-cyan-200" : "bg-sky-50 text-sky-800"
                }`}>
                  <span>{plan.patientLimit}</span>
                  <span className="text-[10px] font-normal opacity-80">{plan.usersIncluded}</span>
                </div>

                {/* Features Checklist */}
                <div className="mt-6 space-y-2.5">
                  <div className={`text-[11px] font-bold uppercase tracking-wider ${
                    plan.popular ? "text-slate-400" : "text-slate-400"
                  }`}>
                    Features Included:
                  </div>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                        plan.popular ? "text-emerald-400" : "text-emerald-600"
                      }`} />
                      <span className={plan.popular ? "text-slate-200" : "text-slate-700 font-medium"}>
                        {feature}
                      </span>
                    </div>
                  ))}

                  {/* Excluded items */}
                  {plan.notIncluded && plan.notIncluded.map((notFeat, nIdx) => (
                    <div key={nIdx} className="flex items-start gap-2.5 text-xs opacity-50">
                      <X className="w-4 h-4 shrink-0 mt-0.5 text-slate-400" />
                      <span className="line-through text-slate-400">
                        {notFeat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA & Add-on Note */}
              <div className="mt-8 pt-4 border-t border-slate-200/40">
                <button
                  onClick={() => onOpenDemo(plan.name)}
                  className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-md active:scale-95 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 text-slate-950"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className={`text-[10px] text-center mt-2.5 ${
                  plan.popular ? "text-slate-400" : "text-slate-500"
                }`}>
                  Additional User: {plan.addUserCost}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Top-up & Hardware Transparency Note */}
        <div className="mt-10 max-w-4xl mx-auto bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">
                Need more patient entries? Top-up at just ₹2 / Entry
              </div>
              <div className="text-[11px] text-slate-500">
                Available in packs of 1,000 entries. Entries never expire during your active subscription period.
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowFullTable(!showFullTable)}
            className="shrink-0 text-xs font-bold text-sky-700 hover:text-sky-800 flex items-center gap-1 cursor-pointer bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs"
          >
            <span>{showFullTable ? "Hide Feature Matrix" : "View Detailed Comparison"}</span>
            {showFullTable ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Detailed Comparison Table (Collapsible) */}
        {showFullTable && (
          <div className="mt-8 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden text-left animate-in fade-in duration-300">
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Full Plan Comparison Matrix</h3>
                <p className="text-xs text-slate-400">Everything you need to make an informed decision</p>
              </div>
              <button
                onClick={() => setShowFullTable(false)}
                className="text-xs text-sky-400 hover:text-sky-300 font-semibold cursor-pointer"
              >
                Close Table
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                    <th className="p-4 font-bold text-sm w-1/3">Feature Category</th>
                    <th className="p-4 font-bold text-center">Starter (₹5,999)</th>
                    <th className="p-4 font-bold text-center bg-sky-50 text-sky-900">Growth (₹9,999)</th>
                    <th className="p-4 font-bold text-center">Enterprise (₹11,999)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonTable.map((group, gIdx) => (
                    <React.Fragment key={gIdx}>
                      <tr className="bg-slate-100/70">
                        <td colSpan={4} className="p-3 font-black text-slate-900 uppercase tracking-wider text-[11px]">
                          {group.category}
                        </td>
                      </tr>
                      {group.items.map((item, iIdx) => (
                        <tr key={iIdx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="p-3.5 font-medium text-slate-800">{item.feature}</td>
                          
                          {/* Starter column */}
                          <td className="p-3.5 text-center">
                            {typeof item.starter === "boolean" ? (
                              item.starter ? (
                                <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                              ) : (
                                <span className="text-slate-400 font-normal">{item.starterText || "—"}</span>
                              )
                            ) : (
                              <span className="font-semibold text-slate-700">{item.starter}</span>
                            )}
                          </td>

                          {/* Growth column */}
                          <td className="p-3.5 text-center bg-sky-50/40">
                            {typeof item.growth === "boolean" ? (
                              item.growth ? (
                                <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                              ) : (
                                <span className="text-slate-400 font-normal">{item.growthText || "—"}</span>
                              )
                            ) : (
                              <span className="font-bold text-sky-800">{item.growth}</span>
                            )}
                          </td>

                          {/* Enterprise column */}
                          <td className="p-3.5 text-center">
                            {typeof item.enterprise === "boolean" ? (
                              item.enterprise ? (
                                <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                              ) : (
                                <span className="text-slate-400 font-normal">—</span>
                              )
                            ) : (
                              <span className="font-bold text-slate-900">{item.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

