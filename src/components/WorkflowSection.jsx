import React, { useState } from "react";
import { workflowSteps } from "../data/workflowData";
import { 
  UserPlus, 
  CreditCard, 
  MessageSquare, 
  Barcode, 
  Calculator, 
  FileCheck, 
  Send,
  ChevronRight,
  Sparkles,
  ArrowRight
} from "lucide-react";

const stepIcons = {
  UserPlus,
  CreditCard,
  MessageSquare,
  Barcode,
  Calculator,
  FileCheck,
  SendCheck: Send
};

export default function WorkflowSection({ onOpenDemo }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = workflowSteps[activeStepIndex];
  const IconComponent = stepIcons[activeStep.icon] || Sparkles;

  return (
    <section id="workflow" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            7-Step Seamless Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Patient Walk-In to Instant Report Delivery
          </h2>
          <p className="text-base text-slate-600">
            Automate every manual bottleneck. LabExpert eliminates paper clutter, prevents calculation errors, and keeps patients informed at every step.
          </p>
        </div>

        {/* Horizontal Step Navigation Pill Bar */}
        <div className="mt-12 overflow-x-auto pb-4">
          <div className="flex items-center gap-2 min-w-max mx-auto justify-start sm:justify-center">
            {workflowSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeStepIndex === idx
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                  activeStepIndex === idx ? "bg-sky-400 text-slate-950" : "bg-white text-slate-700"
                }`}>
                  {step.step}
                </span>
                <span>{step.title.split(" ")[0]} {step.title.split(" ")[1]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Active Step Showcase */}
        <div className="mt-6 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-left">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="flex items-center gap-3">
                <span className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  {activeStep.step}
                </span>
                <div>
                  <span className="text-xs uppercase font-bold text-sky-400 tracking-wider">
                    {activeStep.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeStep.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeStep.description}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeStep.badges.map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white/10 text-sky-200 text-xs font-semibold backdrop-blur-xs border border-white/10"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  ← Previous Step
                </button>
                <button
                  disabled={activeStepIndex === workflowSteps.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(workflowSteps.length - 1, prev + 1))}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Next Step</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Step Mockup Visual */}
            <div className="lg:col-span-5 bg-white/5 rounded-2xl border border-white/10 p-5 backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-slate-200">
                    Step {activeStep.step} Live Simulation
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                  Active
                </span>
              </div>

              {/* Dynamic visual per step */}
              <div className="py-6 space-y-3 text-xs">
                <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800 space-y-2">
                  <div className="text-[11px] text-sky-300 font-mono">
                    // Operational Efficiency Metric:
                  </div>
                  <div className="text-white font-semibold">
                    {activeStepIndex === 0 && "Average registration time reduced from 5 mins to 45 seconds."}
                    {activeStepIndex === 1 && "Dynamic UPI QR codes reduce cash handling mistakes by 100%."}
                    {activeStepIndex === 2 && "Patients track test status on WhatsApp without calling the reception."}
                    {activeStepIndex === 3 && "Barcoded EDTA and Serum vacutainers prevent lab sample mix-ups."}
                    {activeStepIndex === 4 && "Automated formula calculation flags panic values immediately."}
                    {activeStepIndex === 5 && "Digital signature allows pathologists to approve reports remotely."}
                    {activeStepIndex === 6 && "Zero unpaid reports: auto-locks PDF download until balances clear."}
                  </div>
                </div>

                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                  <span>Lab Turnover Time (TAT)</span>
                  <span className="text-emerald-400 font-bold">Cut by 65%</span>
                </div>
              </div>

              <button
                onClick={onOpenDemo}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 text-slate-950 font-bold text-xs hover:from-sky-300 hover:to-cyan-300 transition-colors cursor-pointer"
              >
                Experience This In Your Free Demo
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
