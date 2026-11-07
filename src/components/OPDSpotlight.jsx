import React, { useState } from "react";
import { 
  Stethoscope, 
  CalendarCheck2, 
  FileText, 
  QrCode, 
  Share2, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Users, 
  Clock, 
  Smartphone,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

export default function OPDSpotlight({ onOpenDemo }) {
  const [activeDoctorTab, setActiveDoctorTab] = useState(0);

  const doctorsList = [
    { name: "Dr. Ananya Sharma", spec: "General Physician", fee: "₹400", time: "10:00 AM - 02:00 PM", token: "T-025", serving: "Rahul Das" },
    { name: "Dr. Rahul Mehta", spec: "Orthopaedics", fee: "₹600", time: "11:00 AM - 03:00 PM", token: "T-012", serving: "Priya Roy" },
    { name: "Dr. Priya Das", spec: "Gynecologist", fee: "₹500", time: "09:00 AM - 01:00 PM", token: "T-008", serving: "Sneha Paul" },
    { name: "Dr. Arindam Sen", spec: "Cardiologist", fee: "₹700", time: "04:00 PM - 08:00 PM", token: "T-019", serving: "Amit Ghosh" }
  ];

  return (
    <section id="opd-spotlight" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-sky-50/30 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5 text-cyan-600" />
            Unified Care Suite
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Integrated OPD & Clinic Management
          </h2>
          <p className="text-base text-slate-600">
            Why run separate software for doctor consultations and pathology tests? LabExpert connects OPD registrations, doctor token queues, digital prescriptions, and lab investigations into one continuous patient history.
          </p>
        </div>

        {/* Highlight Banner: Online Booking Without App */}
        <div className="mt-12 bg-gradient-to-r from-sky-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Enterprise Feature Highlight
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Let Patients Book Appointments Online — <br className="hidden sm:inline" />
                <span className="text-cyan-400">Without Downloading Any App or Building a Website</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Simply share your unique clinic booking link (e.g., <code className="text-cyan-300 bg-white/10 px-2 py-0.5 rounded font-mono">labexpert.in/book/yourclinic</code>) over WhatsApp or Google Maps. Patients choose the doctor, pick an available time slot, and get instant booking confirmation!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero App Download for Patients</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Works in Any Mobile Browser</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Real-time Doctor Slot Availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant WhatsApp Confirmation</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm cursor-pointer shadow-md transition-all active:scale-95"
                >
                  <span>Get Online Booking Link for Your Clinic</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mockup Preview Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-xs">
                      LE
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">City Healthcare Clinic</div>
                      <div className="text-[10px] text-slate-500 font-mono">labexpert.in/book/cityclinic</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                    Live
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase">Selected Doctor</label>
                    <div className="font-semibold text-slate-800 bg-slate-50 p-2 rounded-lg border border-slate-200">
                      Dr. Ananya Sharma (General Physician)
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase">Consultation Fee</label>
                      <div className="font-semibold text-slate-800 bg-slate-50 p-2 rounded-lg border border-slate-200">
                        ₹400
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase">Available Date</label>
                      <div className="font-semibold text-slate-800 bg-slate-50 p-2 rounded-lg border border-slate-200">
                        Today, 10:30 AM
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-center space-y-1">
                  <div className="text-xs font-bold text-emerald-800">
                    ✓ Appointment Confirmed!
                  </div>
                  <div className="text-[10px] text-emerald-700">
                    Token #T-026 • SMS & WhatsApp sent to patient
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Feature Columns: Token Queue, Digital Rx, Doctor Fees, Lab Integration */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-sky-300 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">
              Smart Token Queue
            </h4>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Generate sequential tokens for walk-in and online appointments. Display live 'Now Serving' and waiting patient lists on TV screens in the clinic lobby.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-sky-300 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">
              Digital Prescriptions (Rx)
            </h4>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Create clean, printed or WhatsApp-deliverable medical prescriptions with medicine dosage templates, chief complaints, vitals, and follow-up advice.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-sky-300 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
              <QrCode className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">
              Consultation Fee Split
            </h4>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Automate clinic charges vs visiting doctor payout splits. Maintain clean daily doctor fee collection summaries with UPI QR payments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-sky-300 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
              <Stethoscope className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">
              1-Click Lab Orders
            </h4>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              When a consulting doctor recommends a blood test, the order automatically flows straight into the pathology lab queue under the same patient UHID!
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

