import React, { useState } from "react";
import { 
  Send, 
  FileText, 
  QrCode, 
  CheckCircle2, 
  Lock, 
  Unlock, 
  HelpCircle, 
  Calculator, 
  Sparkles, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  DollarSign, 
  Smartphone,
  MessageCircle,
  Eye,
  RefreshCw
} from "lucide-react";

export default function InteractivePlayground({ onOpenDemo }) {
  const [activeTool, setActiveTool] = useState("whatsapp"); // "whatsapp" | "quiz" | "roi"

  // Tool 1: WhatsApp Simulator State
  const [patientName, setPatientName] = useState("Rajesh Sharma");
  const [selectedTest, setSelectedTest] = useState("CBC");
  const [hasDue, setHasDue] = useState(false);
  const [dueAmount, setDueAmount] = useState(450);
  const [messageSent, setMessageSent] = useState(true);
  const [showPdfModal, setShowPdfModal] = useState(false);

  // Tool 2: Plan Quiz State
  const [quizBranches, setQuizBranches] = useState("1");
  const [quizVolume, setQuizVolume] = useState("growth"); // "small", "growth", "chain"
  const [quizOpd, setQuizOpd] = useState("no"); // "no", "yes"

  // Tool 3: ROI State
  const [dailyPatients, setDailyPatients] = useState(45);

  // Calculate recommendation based on quiz answers
  const getRecommendation = () => {
    if (quizOpd === "yes") {
      return {
        plan: "Enterprise OPD + Lab",
        price: "₹8,499",
        renewal: "₹4,499 / Year",
        desc: "Ideal for clinics and diagnostic centres that need doctor appointments, tokens, digital prescriptions AND pathology lab management with single patient UHID.",
        features: ["Integrated OPD + Lab", "Online Booking Link", "WhatsApp Delivery", "Unlimited Patients"]
      };
    }
    if (quizBranches === "multi" || quizVolume === "chain") {
      return {
        plan: "Enterprise Plan",
        price: "₹11,999",
        renewal: "₹5,999 / Year",
        desc: "Best suited for multi-branch laboratory chains and franchise collection centres needing centralized HQ control and B2B rate lists.",
        features: ["Unlimited Patient Entries", "Multi-Branch Ready", "Franchise Module", "B2B Price Lists"]
      };
    }
    if (quizVolume === "growth" || quizBranches === "few") {
      return {
        plan: "Growth Plan (Most Popular)",
        price: "₹9,999",
        renewal: "₹4,999 / Year",
        desc: "The sweet spot for growing standalone labs requiring automated WhatsApp reporting, doctor commissions, and QR UPI billing.",
        features: ["Up to 15,000 Entries", "WhatsApp & Email Reports", "Doctor Commissions", "QR Payments"]
      };
    }
    return {
      plan: "Starter Plan",
      price: "₹5,999",
      renewal: "₹2,999 / Year",
      desc: "Perfect for newly started pathology laboratories needing essential digital patient registration, formula test masters, and billing.",
      features: ["Up to 3,000 Entries", "Unlimited Test Setup", "Single User", "Cloud Backup"]
    };
  };

  const rec = getRecommendation();

  // ROI calculations
  const hoursSavedPerMonth = Math.round((dailyPatients * 4 * 26) / 60);
  const paperSavedPerMonth = Math.round(dailyPatients * 4 * 26); // assuming ₹4 per printed 2-page report
  const recoveredDuesPerMonth = Math.round(dailyPatients * 12 * 26 * 0.4); // dues recovered via online lock
  const totalMonthlyGain = paperSavedPerMonth + recoveredDuesPerMonth + (hoursSavedPerMonth * 150);

  return (
    <section id="interactive-demo" className="py-16 sm:py-24 bg-gradient-to-b from-white via-sky-50/40 to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            Interactive Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Try LabExpert Right Now in Your Browser
          </h2>
          <p className="text-base text-slate-600">
            Experience how automated WhatsApp dispatch, intelligent plan matching, and lab cost savings actually work in real-time.
          </p>
        </div>

        {/* Tool Switcher */}
        <div className="flex justify-center mt-8 mb-10">
          <div className="bg-slate-200/80 p-1.5 rounded-2xl flex flex-wrap justify-center gap-1 max-w-full">
            <button
              onClick={() => setActiveTool("whatsapp")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTool === "whatsapp"
                  ? "bg-white text-emerald-800 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp Dispatch Simulator</span>
            </button>

            <button
              onClick={() => setActiveTool("quiz")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTool === "quiz"
                  ? "bg-white text-sky-800 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <HelpCircle className="w-4 h-4 text-sky-500" />
              <span>Plan Recommendation Quiz</span>
            </button>

            <button
              onClick={() => setActiveTool("roi")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTool === "roi"
                  ? "bg-white text-cyan-800 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Calculator className="w-4 h-4 text-cyan-500" />
              <span>Lab Savings Calculator</span>
            </button>
          </div>
        </div>

        {/* TOOL 1: WhatsApp Simulator */}
        {activeTool === "whatsapp" && (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            
            {/* Left Controls */}
            <div className="md:col-span-6 space-y-5 text-left">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">
                  Step 1: Configure Sample Patient & Test
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                  Test Automated WhatsApp Dispatch
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  See how LabExpert notifies patients and doctors instantly without any extra SMS bills or local software.
                </p>
              </div>

              {/* Patient Name Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Patient Name:</label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="e.g. Ramesh Kumar"
                />
              </div>

              {/* Test Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Select Test Package:</label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {["CBC", "Lipid Profile", "Thyroid Profile", "HbA1c & Sugar"].map((test) => (
                    <button
                      key={test}
                      onClick={() => setSelectedTest(test)}
                      className={`p-2 rounded-lg font-medium border text-left cursor-pointer transition-all ${
                        selectedTest === test
                          ? "bg-emerald-50 border-emerald-500 text-emerald-800 font-bold"
                          : "border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {test}
                    </button>
                  ))}
                </div>
              </div>

              {/* Due Balance Toggle */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                    {hasDue ? <Lock className="w-3.5 h-3.5 text-rose-500" /> : <Unlock className="w-3.5 h-3.5 text-emerald-500" />}
                    <span>Pending Bill Due Amount?</span>
                  </div>
                  <button
                    onClick={() => setHasDue(!hasDue)}
                    className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                      hasDue ? "bg-rose-500 justify-end" : "bg-slate-300 justify-start"
                    }`}
                  >
                    <div className="bg-white w-4 h-4 rounded-full shadow-md" />
                  </button>
                </div>
                {hasDue && (
                  <div className="text-[11px] text-rose-600 bg-rose-50 p-2 rounded border border-rose-100 flex items-center justify-between">
                    <span>Due: ₹{dueAmount} (Report Locked)</span>
                    <span className="font-semibold text-rose-700">Auto UPI payment link generated</span>
                  </div>
                )}
              </div>

              {/* Re-simulate Button */}
              <button
                onClick={() => {
                  setMessageSent(false);
                  setTimeout(() => setMessageSent(true), 150);
                }}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-md shadow-emerald-600/20 text-xs sm:text-sm cursor-pointer transition-all active:scale-95"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Simulate Real WhatsApp Dispatch</span>
              </button>
            </div>

            {/* Right WhatsApp Screen Preview */}
            <div className="md:col-span-6 flex justify-center">
              <div className="w-full max-w-sm rounded-[32px] bg-slate-900 p-3 shadow-2xl border-4 border-slate-800">
                
                {/* Simulated Phone Screen */}
                <div className="bg-[#0b141a] rounded-[24px] overflow-hidden text-left text-white text-xs">
                  
                  {/* WhatsApp Header */}
                  <div className="bg-[#1f2c34] px-4 py-3 flex items-center justify-between border-b border-slate-700/50">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white text-xs">
                        LE
                      </div>
                      <div>
                        <div className="font-bold text-slate-100 flex items-center gap-1 text-[11px]">
                          LabExpert Diagnostic
                          <CheckCircle2 className="w-3 h-3 text-sky-400 inline" />
                        </div>
                        <div className="text-[9px] text-emerald-400">Verified Business Account</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400">Just now</span>
                  </div>

                  {/* Chat Area */}
                  <div className="p-3.5 space-y-3 min-h-[300px] bg-[radial-gradient(#1f2c34_1px,transparent_1px)] [background-size:16px_16px]">
                    
                    {/* Time pill */}
                    <div className="flex justify-center">
                      <span className="bg-[#182229] text-slate-400 text-[9px] px-2.5 py-0.5 rounded-full">
                        TODAY
                      </span>
                    </div>

                    {/* Dynamic WhatsApp Message Bubble */}
                    {messageSent && (
                      <div className="bg-[#005c4b] text-slate-100 rounded-2xl rounded-tl-xs p-3 space-y-2 shadow-sm animate-in slide-in-from-bottom-2">
                        <p className="text-[11px] leading-relaxed">
                          Hello <strong>{patientName || "Patient"}</strong>, <br />
                          Your diagnostic test report for <strong>{selectedTest}</strong> is ready from <strong>LabExpert Diagnostic Centre</strong>.
                        </p>

                        {/* Due or PDF card */}
                        {hasDue ? (
                          <div className="bg-[#0e2a24] p-2.5 rounded-xl border border-rose-500/40 space-y-2">
                            <div className="flex items-center gap-2 text-rose-300 font-semibold text-[10px]">
                              <Lock className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                              <span>Pending Due Balance: ₹{dueAmount}</span>
                            </div>
                            <p className="text-[10px] text-slate-300">
                              Please clear your pending dues using the UPI payment link below to instantly unlock your downloadable PDF report.
                            </p>
                            <button
                              onClick={() => {
                                setHasDue(false);
                              }}
                              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-1.5 rounded-lg text-[10px] text-center cursor-pointer transition-colors"
                            >
                              Simulate Instant UPI Payment (Unlock)
                            </button>
                          </div>
                        ) : (
                          <div className="bg-[#182229] p-2 rounded-xl border border-slate-700/60 space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-rose-600 text-white rounded flex items-center justify-center font-bold text-[10px]">
                                  PDF
                                </div>
                                <div>
                                  <div className="font-semibold text-slate-100 text-[10px]">
                                    {patientName.replace(/\s+/g, "_")}_{selectedTest}.pdf
                                  </div>
                                  <div className="text-[9px] text-slate-400">
                                    2 Pages • 1.2 MB • NABL Ready
                                  </div>
                                </div>
                              </div>
                            </div>

                            <button
                              onClick={() => setShowPdfModal(true)}
                              className="w-full flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-1.5 rounded-lg text-[10px] cursor-pointer transition-colors"
                            >
                              <Eye className="w-3 h-3" />
                              <span>View Simulated Pathology Report</span>
                            </button>
                          </div>
                        )}

                        <div className="flex items-center justify-between text-[9px] text-slate-300 pt-1">
                          <span>Ref UHID: LE-240521</span>
                          <span className="flex items-center gap-1">
                            10:30 AM <CheckCircle2 className="w-3 h-3 text-sky-400" />
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* TOOL 2: Plan Quiz */}
        {activeTool === "quiz" && (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-in fade-in duration-300 text-left">
            
            {/* Questions Column */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wide">
                  Interactive Quiz (3 Questions)
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                  Find the Exact Plan for Your Lab or Clinic
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Answer 3 quick questions to receive a tailored recommendation with no hidden costs.
                </p>
              </div>

              {/* Question 1: Branches */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  1. How many laboratory branches / collection centers do you operate?
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { id: "1", label: "1 Single Lab" },
                    { id: "few", label: "2 - 4 Branches" },
                    { id: "multi", label: "5+ Franchise Chain" }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setQuizBranches(opt.id)}
                      className={`p-2.5 rounded-xl border text-center font-semibold cursor-pointer transition-all ${
                        quizBranches === opt.id
                          ? "bg-sky-50 border-sky-600 text-sky-800 shadow-xs"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Patient Volume */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  2. What is your estimated monthly patient volume?
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { id: "small", label: "< 300 / Month" },
                    { id: "growth", label: "300 - 1,500 / Mo" },
                    { id: "chain", label: "1,500+ / Month" }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setQuizVolume(opt.id)}
                      className={`p-2.5 rounded-xl border text-center font-semibold cursor-pointer transition-all ${
                        quizVolume === opt.id
                          ? "bg-sky-50 border-sky-600 text-sky-800 shadow-xs"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: OPD Consultations */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  3. Do you also need Doctor Consultation & OPD Token Management?
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: "no", label: "No, Pathology Lab Only" },
                    { id: "yes", label: "Yes, OPD Clinic + Lab Combo" }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setQuizOpd(opt.id)}
                      className={`p-2.5 rounded-xl border text-center font-semibold cursor-pointer transition-all ${
                        quizOpd === opt.id
                          ? "bg-sky-50 border-sky-600 text-sky-800 shadow-xs"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Recommendation Card */}
            <div className="md:col-span-5 bg-gradient-to-br from-slate-900 to-sky-950 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="inline-flex items-center gap-1.5 bg-sky-500/20 text-sky-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                <Sparkles className="w-3 h-3" />
                Recommended For You
              </div>

              <h4 className="text-2xl font-black text-white mt-3">
                {rec.plan}
              </h4>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-sky-400">{rec.price}</span>
                <span className="text-xs text-slate-300">/ 1st Year</span>
              </div>
              <div className="text-[11px] text-slate-400">
                Renewal: {rec.renewal}
              </div>

              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                {rec.desc}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-700/60 space-y-1.5">
                {rec.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenDemo}
                className="mt-6 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-bold py-2.5 rounded-xl text-xs cursor-pointer shadow-md transition-all active:scale-95"
              >
                <span>Book Demo for {rec.plan}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        )}

        {/* TOOL 3: ROI Calculator */}
        {activeTool === "roi" && (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-in fade-in duration-300 text-left">
            
            {/* Slider & Explanation */}
            <div className="md:col-span-6 space-y-5">
              <div>
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-wide">
                  Return On Investment Calculator
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                  How Much Will LabExpert Save Your Lab?
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Slide to select your average daily patient footfall to calculate estimated hours, paper, and unpaid due savings.
                </p>
              </div>

              {/* Slider Component */}
              <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">Daily Patient Footfall:</span>
                  <span className="text-lg font-black text-sky-600 bg-white px-3 py-0.5 rounded-lg border border-slate-200">
                    {dailyPatients} Patients / Day
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={dailyPatients}
                  onChange={(e) => setDailyPatients(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>10 (Small Lab)</span>
                  <span>100 (Medium Lab)</span>
                  <span>200+ (High Volume)</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Eliminate manual paper report printing costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Prevent doctor commission disputes with automated ledger</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Recover 100% test balances with WhatsApp report lock</span>
                </div>
              </div>
            </div>

            {/* Savings Numbers Grid */}
            <div className="md:col-span-6 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-sky-50 border border-sky-100 p-4 rounded-xl text-center">
                  <div className="text-2xl font-black text-sky-700">~{hoursSavedPerMonth} Hrs</div>
                  <div className="text-xs font-bold text-slate-800 mt-1">Staff Time Saved</div>
                  <div className="text-[10px] text-slate-500">Per Month</div>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-center">
                  <div className="text-2xl font-black text-emerald-700">₹{paperSavedPerMonth.toLocaleString()}</div>
                  <div className="text-xs font-bold text-slate-800 mt-1">Paper & Ink Saved</div>
                  <div className="text-[10px] text-slate-500">Zero physical prints</div>
                </div>

                <div className="bg-purple-50 border border-purple-100 p-4 rounded-xl text-center">
                  <div className="text-2xl font-black text-purple-700">₹{recoveredDuesPerMonth.toLocaleString()}</div>
                  <div className="text-xs font-bold text-slate-800 mt-1">Bad Debts Recovered</div>
                  <div className="text-[10px] text-slate-500">Via UPI due locks</div>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl text-center shadow-lg">
                  <div className="text-2xl font-black text-cyan-400">₹{totalMonthlyGain.toLocaleString()}</div>
                  <div className="text-xs font-bold text-white mt-1">Est. Total Monthly Gain</div>
                  <div className="text-[10px] text-slate-400">ROI in &lt; 1 Month!</div>
                </div>
              </div>

              <button
                onClick={onOpenDemo}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-bold py-3 rounded-xl shadow-md text-xs sm:text-sm cursor-pointer transition-all active:scale-95"
              >
                <span>Start Saving with LabExpert Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </div>

      {/* Simulated Pathology Report PDF Modal */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative text-left">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-sky-600 text-white font-bold flex items-center justify-center text-xs">
                  PDF
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Pathology Laboratory Report Preview
                  </h4>
                  <span className="text-[11px] text-emerald-600 font-semibold">
                    ✓ Digitally Signed & QR Code Verified
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowPdfModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Simulated Medical Report Sheet */}
            <div className="mt-4 border border-slate-300 rounded-xl p-5 bg-white text-xs space-y-4 font-sans">
              
              {/* Lab Letterhead */}
              <div className="flex items-center justify-between border-b-2 border-sky-600 pb-3">
                <div>
                  <h2 className="text-base font-extrabold text-sky-800 tracking-tight">
                    LABEXPERT DIAGNOSTIC & RESEARCH CENTRE
                  </h2>
                  <p className="text-[10px] text-slate-500">
                    NABL Accredited & ISO 9001:2015 Certified • Kolkata • Delhi • Mumbai
                  </p>
                  <p className="text-[10px] text-slate-500">
                    Ph: +91 62957 79038 | Web: labexpert.in
                  </p>
                </div>
                <div className="text-right">
                  <div className="w-14 h-14 bg-slate-100 border border-slate-300 rounded flex flex-col items-center justify-center p-1">
                    <QrCode className="w-8 h-8 text-slate-800" />
                    <span className="text-[8px] text-slate-600 font-mono">VERIFY</span>
                  </div>
                </div>
              </div>

              {/* Patient Meta Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-[11px]">
                <div>
                  <span className="text-slate-500">Patient Name:</span>
                  <div className="font-bold text-slate-900">{patientName}</div>
                </div>
                <div>
                  <span className="text-slate-500">Age / Gender:</span>
                  <div className="font-bold text-slate-900">45 Yrs / Male</div>
                </div>
                <div>
                  <span className="text-slate-500">UHID:</span>
                  <div className="font-mono font-bold text-slate-900">LE-240521</div>
                </div>
                <div>
                  <span className="text-slate-500">Referred By:</span>
                  <div className="font-bold text-slate-900">Dr. A. Gupta, MD</div>
                </div>
              </div>

              {/* Test Values Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 text-[10px] uppercase font-bold">
                      <th className="pb-1.5">Investigation</th>
                      <th className="pb-1.5">Observed Value</th>
                      <th className="pb-1.5">Unit</th>
                      <th className="pb-1.5">Biological Ref. Range</th>
                      <th className="pb-1.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[11px]">
                    <tr>
                      <td className="py-1.5 font-semibold text-slate-800">Hemoglobin (Hb)</td>
                      <td className="py-1.5 font-bold text-slate-900">14.2</td>
                      <td className="py-1.5 text-slate-500">g/dL</td>
                      <td className="py-1.5 text-slate-600">13.0 - 17.0</td>
                      <td className="py-1.5 text-emerald-600 font-bold">Normal</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 font-semibold text-slate-800">Total RBC Count</td>
                      <td className="py-1.5 font-bold text-slate-900">4.8</td>
                      <td className="py-1.5 text-slate-500">mil/c.mm</td>
                      <td className="py-1.5 text-slate-600">4.5 - 5.5</td>
                      <td className="py-1.5 text-emerald-600 font-bold">Normal</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 font-semibold text-slate-800">Total WBC Count</td>
                      <td className="py-1.5 font-bold text-slate-900">7,200</td>
                      <td className="py-1.5 text-slate-500">/c.mm</td>
                      <td className="py-1.5 text-slate-600">4,000 - 11,000</td>
                      <td className="py-1.5 text-emerald-600 font-bold">Normal</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 font-semibold text-slate-800">Platelet Count</td>
                      <td className="py-1.5 font-bold text-slate-900">2.6</td>
                      <td className="py-1.5 text-slate-500">Lakhs/c.mm</td>
                      <td className="py-1.5 text-slate-600">1.5 - 4.5</td>
                      <td className="py-1.5 text-emerald-600 font-bold">Normal</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Signatures & Footer */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
                <div>
                  <span>Sample Collected: 14 Nov 2026, 08:30 AM</span>
                  <br />
                  <span>Report Printed: 14 Nov 2026, 10:15 AM</span>
                </div>
                <div className="text-right">
                  <div className="font-serif italic font-bold text-slate-800 text-sm">Dr. S. Mukherjee</div>
                  <div className="font-semibold text-slate-700">MD Pathologist (Reg No: 48921)</div>
                  <span className="text-[9px] text-emerald-600 font-bold">Digitally Approved</span>
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={() => setShowPdfModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  setShowPdfModal(false);
                  onOpenDemo();
                }}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-sky-600 text-white hover:bg-sky-700 cursor-pointer shadow-sm"
              >
                Request Custom Format For Your Lab
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

