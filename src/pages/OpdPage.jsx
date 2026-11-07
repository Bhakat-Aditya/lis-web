import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import Breadcrumb from "../components/Breadcrumb";
import OPDSpotlight from "../components/OPDSpotlight";
import { 
  Stethoscope, 
  CalendarCheck, 
  Users, 
  FileSignature, 
  Share2, 
  QrCode, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Tv, 
  DollarSign, 
  FileText,
  Clock,
  HeartPulse,
  Plus,
  Printer
} from "lucide-react";

export default function OpdPage({ onOpenDemo }) {
  // Token Simulation State
  const [activeDoctorIndex, setActiveDoctorIndex] = useState(0);
  const [currentTokenNumber, setCurrentTokenNumber] = useState(14);
  const [patientServing, setPatientServing] = useState("Suresh Verma");
  const [callingAnim, setCallingAnim] = useState(false);
  const [queueList, setQueueList] = useState([
    { token: "T-015", name: "Sunita Roy", time: "10:45 AM", type: "Follow-up" },
    { token: "T-016", name: "Manoj Agarwal", time: "11:00 AM", type: "New Visit" },
    { token: "T-017", name: "Kavita Sen", time: "11:15 AM", type: "Lab Follow-up" },
    { token: "T-018", name: "Deepak Ghosh", time: "11:30 AM", type: "New Visit" },
  ]);

  const doctors = [
    { name: "Dr. Ananya Sharma", spec: "General Physician", fee: "₹400", room: "Chamber 1", opdTime: "10:00 AM - 02:00 PM" },
    { name: "Dr. Rahul Mehta", spec: "Orthopaedics", fee: "₹600", room: "Chamber 2", opdTime: "11:00 AM - 03:00 PM" },
    { name: "Dr. Priya Das", spec: "Gynecologist", fee: "₹500", room: "Chamber 3", opdTime: "09:00 AM - 01:00 PM" },
    { name: "Dr. Arindam Sen", spec: "Cardiologist", fee: "₹700", room: "Chamber 4", opdTime: "04:00 PM - 08:00 PM" }
  ];

  const handleNextPatient = () => {
    if (queueList.length > 0) {
      setCallingAnim(true);
      setTimeout(() => setCallingAnim(false), 600);
      const next = queueList[0];
      setPatientServing(next.name);
      setCurrentTokenNumber((prev) => prev + 1);
      setQueueList(queueList.slice(1));
    }
  };

  return (
    <PageTransition>
      <SEO
        title="Smart OPD & Clinic Management Software | LabExpert"
        description="Streamline doctor appointment scheduling, real-time waiting lounge token queues, digital prescriptions (Rx), and in-house diagnostic test ordering."
        keywords="Clinic OPD software, doctor token system, digital prescription generator, polyclinic software India, integrated clinic lab"
        canonical="https://labexpert.in/opd"
      />

      <Breadcrumb items={[{ label: "Smart OPD & Clinic Management" }]} />

      <main>
        {/* Page Hero */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.22),_transparent_70%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold mb-6"
            >
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Unified Doctor & Pathology Platform</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none"
            >
              Smart OPD & Clinic Management <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">Directly Connected to Your Lab</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              No more double entries or disconnected patient cards. Manage doctor rosters, live token queues, digital prescriptions (Rx), and in-house diagnostic referrals under a single patient UHID.
            </motion.p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onOpenDemo ? onOpenDemo("Enterprise OPD + Lab") : null}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
              >
                Book Free Clinic OPD Walkthrough
              </motion.button>
              <a
                href="#interactive-queue"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm border border-white/20 transition-all"
              >
                Try Live Queue Simulator ↓
              </a>
            </div>

          </div>
        </section>

        {/* Interactive Token Queue Simulator */}
        <section id="interactive-queue" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">
              <Tv className="w-4 h-4" />
              Live Clinic Simulator
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Interactive Doctor Token & Queue Manager
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Experience how your reception desk and waiting lounge screens run in real time. Switch doctors and call the next patient below:
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            {/* Doctor Chamber Selector */}
            <div className="bg-slate-900 p-4 border-b border-slate-800 flex items-center gap-2 overflow-x-auto">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 shrink-0">
                Select Chamber:
              </span>
              {doctors.map((doc, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDoctorIndex(idx)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeDoctorIndex === idx
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {doc.name} ({doc.spec})
                </button>
              ))}
            </div>

            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Waiting Area Big Screen Simulator */}
              <div className="lg:col-span-7 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-inner">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                        WAITING LOUNGE TV DISPLAY
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {doctors[activeDoctorIndex].room} • {doctors[activeDoctorIndex].opdTime}
                    </span>
                  </div>

                  <div className="mt-8 text-center py-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                      NOW CALLING
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentTokenNumber}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.2, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-6xl sm:text-7xl font-black text-white font-mono tracking-tight mt-2"
                      >
                        T-0{currentTokenNumber}
                      </motion.div>
                    </AnimatePresence>
                    <div className="text-lg sm:text-xl font-bold text-cyan-300 mt-2">
                      {patientServing}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Consulting with {doctors[activeDoctorIndex].name}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Consultation Fee: {doctors[activeDoctorIndex].fee}</span>
                  <span className="text-emerald-400 font-semibold">● Audio Announcement Ready</span>
                </div>
              </div>

              {/* Right Column: Reception Desk Controls */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-800">
                      Receptionist Queue Controls
                    </h3>
                    <span className="text-xs bg-indigo-50 text-indigo-700 font-semibold px-2 py-0.5 rounded">
                      {queueList.length} Patients in Queue
                    </span>
                  </div>

                  <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                    {queueList.map((pt, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between hover:bg-slate-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-bold text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                            {pt.token}
                          </span>
                          <div>
                            <div className="text-xs font-bold text-slate-900">{pt.name}</div>
                            <div className="text-[10px] text-slate-500">{pt.type} • Est: {pt.time}</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold text-slate-400">
                          Waiting
                        </span>
                      </div>
                    ))}

                    {queueList.length === 0 && (
                      <div className="text-center py-8 text-xs text-slate-500 bg-slate-50 rounded-xl">
                        All patients for this session have been served!
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleNextPatient}
                    disabled={queueList.length === 0}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-200 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
                  >
                    <span>Call Next Patient</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <p className="text-[11px] text-slate-500 text-center">
                    Triggers instant screen update, WhatsApp SMS alert, and TV chime.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Complete OPD Spotlight Component */}
        <OPDSpotlight onOpenDemo={onOpenDemo} />

        {/* CTA */}
        <section className="py-12 bg-indigo-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to upgrade your clinic and lab workflow?</h2>
            <p className="mt-2 text-indigo-100 text-xs sm:text-sm">
              See how easy it is to schedule doctor appointments and send instant WhatsApp reports.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onOpenDemo ? onOpenDemo("Enterprise OPD + Lab") : null}
                className="bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg hover:bg-indigo-50 cursor-pointer transition-all"
              >
                Book Free Live Demo
              </motion.button>
              <Link
                to="/pricing"
                className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all"
              >
                View OPD Pricing Plans
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
