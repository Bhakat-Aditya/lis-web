import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import Breadcrumb from "../components/Breadcrumb";
import { categoriesData, coreHighlights } from "../data/featuresData";
import { 
  FlaskConical, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Calendar,
  Layers,
  Zap,
  Activity,
  UserCheck,
  QrCode,
  Calculator,
  FileCheck2,
  Send,
  CalendarCheck,
  Users,
  FileSignature,
  Globe,
  CreditCard,
  FolderHeart,
  Network,
  Handshake,
  Building2,
  ShieldAlert,
  TrendingUp,
  CloudLightning,
  Check,
  X
} from "lucide-react";

// Icon mapping helper
const iconMap = {
  UserCheck,
  QrCode,
  FlaskConical,
  Calculator,
  FileCheck2,
  Send,
  CalendarCheck,
  Users,
  FileSignature,
  Globe,
  CreditCard,
  FolderHeart,
  Network,
  Handshake,
  Building2,
  ShieldAlert,
  TrendingUp,
  CloudLightning
};

export default function FeaturesPage({ onOpenDemo }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample Formula Calculator State
  const [wbcCount, setWbcCount] = useState(7500);
  const [neutrophilPct, setNeutrophilPct] = useState(65);

  // ANC Formula = (WBC * % Neutrophils) / 100
  const calculatedAnc = Math.round((wbcCount * neutrophilPct) / 100);

  // Filter modules based on category and search query
  const filteredCategories = categoriesData.map(cat => {
    if (selectedCategory !== "all" && cat.id !== selectedCategory) {
      return null;
    }
    const filteredFeatures = cat.features.filter(f => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        f.title.toLowerCase().includes(q) ||
        f.desc.toLowerCase().includes(q) ||
        f.tags.some(t => t.toLowerCase().includes(q))
      );
    });
    return { ...cat, features: filteredFeatures };
  }).filter(Boolean);

  return (
    <PageTransition>
      <SEO
        title="Pathology LIS Modules & Features | LabExpert Cloud Software"
        description="Explore 18+ comprehensive diagnostic modules: UHID registration, automated formula calculations, barcode tracking, instant WhatsApp delivery, and doctor commission engine."
        keywords="LIS features, pathology modules, CBC formulas, barcode specimen tracking, WhatsApp lab reports, doctor commission software"
        canonical="https://labexpert.in/features"
      />

      <Breadcrumb items={[{ label: "Features & LIS Modules" }]} />

      <main>
        {/* Page Hero */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-b from-sky-950 via-slate-900 to-slate-950 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_70%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-semibold mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Diagnostic & Clinic Suite</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none"
            >
              Powerful Modules Built Specifically for <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Modern Diagnostic Labs</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Every tool you need to run, automate, and expand your laboratory operations. Eliminate manual errors, speed up test approvals, and deliver WhatsApp reports directly to patients.
            </motion.p>

            {/* Quick stats pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {coreHighlights.map((item, idx) => (
                <div key={idx} className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 text-center backdrop-blur-sm hover:border-sky-500/40 transition-colors">
                  <div className="text-2xl font-black text-sky-400">{item.stat}</div>
                  <div className="text-xs font-bold text-white mt-1">{item.label}</div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-snug">{item.desc}</div>
                </div>
              ))}
            </motion.div>

            {/* Search & Filter Bar */}
            <div className="mt-12 max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 flex flex-col sm:flex-row gap-3 items-center">
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search features (e.g., CBC formulas, barcodes, UPI QR, WhatsApp)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/90 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-inner"
                />
              </div>

              <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 justify-center">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === "all"
                      ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                      : "bg-white/10 text-slate-200 hover:bg-white/20"
                  }`}
                >
                  All (18)
                </button>
                <button
                  onClick={() => setSelectedCategory("lis")}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === "lis"
                      ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                      : "bg-white/10 text-slate-200 hover:bg-white/20"
                  }`}
                >
                  Pathology LIS
                </button>
                <button
                  onClick={() => setSelectedCategory("opd")}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === "opd"
                      ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                      : "bg-white/10 text-slate-200 hover:bg-white/20"
                  }`}
                >
                  Smart OPD
                </button>
                <button
                  onClick={() => setSelectedCategory("enterprise")}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === "enterprise"
                      ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                      : "bg-white/10 text-slate-200 hover:bg-white/20"
                  }`}
                >
                  Multi-Branch
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Modules Grid with Smooth Animation */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="mb-16 last:mb-0">
              
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-6 border-b border-slate-200 mb-8">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2">
                    {cat.badge}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {cat.title}
                  </h2>
                  <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                    {cat.description}
                  </p>
                </div>
                <button
                  onClick={() => onOpenDemo ? onOpenDemo("Growth") : null}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700 cursor-pointer self-start sm:self-end"
                >
                  <span>Book walk-through for this module</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Module Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.features.map((feature, idx) => {
                  const IconComponent = iconMap[feature.icon] || Activity;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 group-hover:scale-105 group-hover:bg-sky-600 group-hover:text-white transition-all">
                          <IconComponent className="w-6 h-6 stroke-[2]" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900 mt-4 group-hover:text-sky-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-100">
                        <div className="flex flex-wrap gap-1.5">
                          {feature.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <FlaskConical className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-700">No matching modules found</h3>
              <p className="text-xs text-slate-500 mt-1">Try searching for other terms like "barcode", "WhatsApp", or reset the filter.</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                className="mt-4 px-4 py-2 bg-sky-600 text-white rounded-xl text-xs font-semibold hover:bg-sky-700 cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          )}
        </section>

        {/* Interactive Formula Engine Demo Card */}
        <section className="py-12 bg-gradient-to-b from-slate-100/70 to-slate-200/50 border-y border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-lg">
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 uppercase tracking-wider">
                    <Calculator className="w-4 h-4" />
                    Interactive Formula Showcase
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    Zero-Math Automated Calculation Engine
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Pathologists and technicians never need to punch manual formulas for CBC indices, eGFR, or lipid ratios.
                  </p>
                </div>
                <div className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-emerald-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>NABL Formula Compliant</span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Input 1 */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Total Leucocyte Count (TLC / WBC)
                  </label>
                  <div className="text-[11px] text-slate-500 mb-2">Reference: 4,000 - 11,000 /µL</div>
                  <input
                    type="range"
                    min="2000"
                    max="20000"
                    step="100"
                    value={wbcCount}
                    onChange={(e) => setWbcCount(Number(e.target.value))}
                    className="w-full accent-sky-600 cursor-pointer"
                  />
                  <div className="mt-2 flex items-center justify-between text-xs font-mono font-bold">
                    <span className="text-slate-600">Value:</span>
                    <span className="text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                      {wbcCount.toLocaleString()} /µL
                    </span>
                  </div>
                </div>

                {/* Input 2 */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Neutrophils Percentage (%)
                  </label>
                  <div className="text-[11px] text-slate-500 mb-2">Reference: 40% - 75%</div>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    step="1"
                    value={neutrophilPct}
                    onChange={(e) => setNeutrophilPct(Number(e.target.value))}
                    className="w-full accent-sky-600 cursor-pointer"
                  />
                  <div className="mt-2 flex items-center justify-between text-xs font-mono font-bold">
                    <span className="text-slate-600">Value:</span>
                    <span className="text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                      {neutrophilPct}%
                    </span>
                  </div>
                </div>

                {/* Live Output */}
                <div className="bg-gradient-to-br from-sky-900 to-slate-900 text-white rounded-2xl p-5 shadow-md">
                  <div className="text-xs font-semibold text-sky-300">Live Auto-Calculated Result</div>
                  <div className="text-sm font-bold mt-1 text-slate-200">Absolute Neutrophil Count (ANC)</div>
                  
                  <div className="mt-3 text-3xl font-black text-cyan-300 font-mono">
                    {calculatedAnc.toLocaleString()} <span className="text-xs font-normal text-slate-400">/µL</span>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[11px] pt-3 border-t border-slate-700">
                    <span className="text-slate-300">Reference: 1,500 - 8,000</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      calculatedAnc >= 1500 && calculatedAnc <= 8000
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "bg-rose-500/20 text-rose-300 animate-pulse"
                    }`}>
                      {calculatedAnc >= 1500 && calculatedAnc <= 8000 ? "NORMAL" : "ALERT / OUT OF RANGE"}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Pathology Labs are Switching to LabExpert
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              See how our modern cloud platform compares against traditional desktop software.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="py-3.5 px-4 font-bold">Feature / Capability</th>
                    <th className="py-3.5 px-4 font-bold text-rose-400">Old Desktop Software</th>
                    <th className="py-3.5 px-4 font-bold text-cyan-300 bg-sky-950/80">LabExpert Cloud LIS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">WhatsApp Report Delivery</td>
                    <td className="py-3.5 px-4 text-slate-500">Requires expensive SMS gateways or manual PDF sending</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-700 bg-sky-50/40">✓ Built-in instant WhatsApp with Due Lock</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">Hardware & Crashes</td>
                    <td className="py-3.5 px-4 text-slate-500">Hard drive crashes cause complete patient data loss</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-700 bg-sky-50/40">✓ 100% Encrypted Cloud with hourly backups</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">Multi-Device Access</td>
                    <td className="py-3.5 px-4 text-slate-500">Tied to one specific desktop computer</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-700 bg-sky-50/40">✓ Access from any Laptop, Mobile, or iPad</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">Doctor Referral Engine</td>
                    <td className="py-3.5 px-4 text-slate-500">Manual calculation in Excel spreadsheets</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-700 bg-sky-50/40">✓ Automated test-wise percentage or flat ledgers</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">Integrated Clinic OPD</td>
                    <td className="py-3.5 px-4 text-slate-500">Separate software required for doctor clinic</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-700 bg-sky-50/40">✓ Unified patient history across OPD & Lab</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">Tamper-Proof QR Verification</td>
                    <td className="py-3.5 px-4 text-slate-500">No verification QR on printed paper</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-700 bg-sky-50/40">✓ Scannable digital QR for insurance & hospital validity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-sky-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to see these features in action?</h2>
            <p className="mt-2 text-sky-100 text-xs sm:text-sm">
              Schedule a 15-minute live screen share demo with our pathology workflow specialist.
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
                View Pricing Plans
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
