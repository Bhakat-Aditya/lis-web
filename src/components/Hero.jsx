import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  FileText, 
  Send, 
  Clock, 
  QrCode, 
  Activity, 
  Users, 
  ChevronRight,
  TrendingUp,
  Database,
  Check
} from "lucide-react";

export default function Hero({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState("lab"); // "lab" | "opd"

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-sky-50/60 via-white to-slate-50">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-sky-200/30 via-cyan-100/20 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-emerald-200/20 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 shadow-sm text-xs font-semibold text-slate-800">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sky-700">Cloud-Based Diagnostic LIS + Smart OPD</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 font-medium">99.99% Cloud Uptime</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Modern Cloud-Based <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Pathology Laboratory
              </span>{" "}
              & Clinic Software
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Manage patient registration, billing, sample collection, automated formula reports,
              <strong className="text-slate-800 font-semibold"> instant WhatsApp report delivery</strong>, and doctor referral commissions from one secure cloud platform built for modern diagnostic centres.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenDemo}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-sky-600 via-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-sky-600/25 hover:shadow-xl hover:shadow-sky-600/35 transition-all active:scale-95 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Free Live Demo</span>
              </motion.button>

              <Link
                to="/demo"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base px-6 py-3.5 rounded-xl border border-slate-200 shadow-sm transition-all hover:border-sky-300 hover:text-sky-600 group"
              >
                <span>Try Interactive Demo</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200/80 text-left">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Instant WhatsApp Reports</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Auto Cloud Backup</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero Server Maintenance</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Multi-Branch Ready</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Live App Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glow & Glass Card */}
              <div className="relative rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-2xl p-4 sm:p-5 text-left transition-all">
                
                {/* Station Window Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-xs font-bold text-slate-700 ml-1">
                      LabExpert Cloud Station
                    </span>
                  </div>

                  {/* View Mode Switcher */}
                  <div className="flex bg-slate-100 p-0.5 rounded-lg text-[11px] font-semibold">
                    <button
                      onClick={() => setActiveTab("lab")}
                      className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                        activeTab === "lab"
                          ? "bg-white text-sky-700 shadow-xs"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      LIS Lab View
                    </button>
                    <button
                      onClick={() => setActiveTab("opd")}
                      className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                        activeTab === "opd"
                          ? "bg-white text-sky-700 shadow-xs"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      OPD Doctor View
                    </button>
                  </div>
                </div>

                {/* Dynamic Content based on active Tab */}
                {activeTab === "lab" ? (
                  <div className="space-y-3.5 pt-3 animate-in fade-in duration-200">
                    
                    {/* Patient Card Preview */}
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 font-bold text-xs flex items-center justify-center">
                            RS
                          </span>
                          <div>
                            <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                              Rajesh Kumar Sharma
                              <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded font-normal">
                                45Y / M
                              </span>
                            </div>
                            <div className="text-[10px] text-slate-500">
                              UHID: <span className="font-mono font-semibold">LE-240521</span> • Ref: Dr. A. Gupta
                            </div>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                          <Check className="w-3 h-3" /> Ready
                        </span>
                      </div>

                      {/* Selected Tests & Calculation */}
                      <div className="mt-2.5 pt-2.5 border-t border-slate-200/60 grid grid-cols-2 gap-2 text-[11px]">
                        <div className="bg-white p-2 rounded-lg border border-slate-100">
                          <div className="text-slate-500 text-[10px]">Complete Blood Count</div>
                          <div className="font-semibold text-slate-800 flex items-center justify-between">
                            <span>Hb: 14.2 g/dL</span>
                            <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded">Normal</span>
                          </div>
                        </div>
                        <div className="bg-white p-2 rounded-lg border border-slate-100">
                          <div className="text-slate-500 text-[10px]">Lipid Profile</div>
                          <div className="font-semibold text-slate-800 flex items-center justify-between">
                            <span>Chol: 185 mg/dL</span>
                            <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded">Optimal</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Report Card Mockup */}
                    <div className="bg-[#eef8f2] border border-[#b2e2c5] rounded-xl p-3 shadow-xs">
                      <div className="flex items-center justify-between pb-1.5 text-xs text-emerald-800 font-semibold">
                        <div className="flex items-center gap-1.5">
                          <Send className="w-3.5 h-3.5 text-emerald-600" />
                          <span>WhatsApp Report Delivered</span>
                        </div>
                        <span className="text-[10px] text-emerald-700">10:30 AM</span>
                      </div>
                      <div className="bg-white rounded-lg p-2.5 border border-emerald-100 text-[11px] text-slate-700 shadow-xs space-y-1.5">
                        <p className="text-[11px] leading-snug">
                          Hello <strong>Rajesh</strong>, your pathology reports from <strong>LabExpert Diagnostic</strong> are ready.
                        </p>
                        <div className="flex items-center justify-between bg-slate-50 p-2 rounded border border-slate-200">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 bg-rose-500 text-white rounded flex items-center justify-center font-bold text-[9px]">
                              PDF
                            </div>
                            <div>
                              <div className="font-semibold text-slate-800 text-[10px]">
                                Rajesh_CBC_Lipid.pdf
                              </div>
                              <div className="text-[9px] text-slate-400">2 Pages • 1.1 MB • QR Verified</div>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-sky-600">Download</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Financial Snapshot */}
                    <div className="grid grid-cols-2 gap-2 text-center text-xs">
                      <div className="bg-sky-50/80 border border-sky-100 rounded-lg p-2">
                        <div className="text-[10px] text-sky-700 font-medium">Today's Collections</div>
                        <div className="text-sm font-extrabold text-sky-900">₹24,650</div>
                        <div className="text-[9px] text-emerald-600 font-semibold">+18% vs Yesterday</div>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2">
                        <div className="text-[10px] text-slate-600 font-medium">Automatic Cloud Sync</div>
                        <div className="text-sm font-extrabold text-slate-800">Synced 1m ago</div>
                        <div className="text-[9px] text-slate-500">AES-256 Encrypted</div>
                      </div>
                    </div>

                  </div>
                ) : (
                  /* OPD Doctor View */
                  <div className="space-y-3.5 pt-3 animate-in fade-in duration-200">
                    <div className="bg-sky-50/60 rounded-xl p-3 border border-sky-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-slate-800">Dr. Ananya Sharma</div>
                          <div className="text-[10px] text-slate-500">General Medicine • Room 104</div>
                        </div>
                        <span className="bg-sky-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          Queue: 5 Patients
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-emerald-800 bg-white px-1.5 py-0.5 rounded text-[10px]">
                            T-025
                          </span>
                          <span className="font-semibold text-slate-800">Amit Roy (Consulting)</span>
                        </div>
                        <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded font-bold">
                          In Cabin
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">
                            T-026
                          </span>
                          <span className="text-slate-700">Priya Sharma</span>
                        </div>
                        <span className="text-[10px] text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded">
                          Up Next
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">
                            T-027
                          </span>
                          <span className="text-slate-700">Rahul Das</span>
                        </div>
                        <span className="text-[10px] text-slate-500">Waiting</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                        <span>Online Web Booking Link Enabled</span>
                      </div>
                      <span className="text-sky-600 font-bold text-[10px]">No App Needed</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Floating Decorative Badges */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg border border-slate-200/80 hidden sm:flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">100% NABL & ISO Ready</div>
                  <div className="text-[10px] text-slate-500">Tamper-Proof QR Verification</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

