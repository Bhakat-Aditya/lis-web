import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import Breadcrumb from "../components/Breadcrumb";
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  Phone, 
  MessageCircle, 
  Mail, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Printer,
  CreditCard,
  Database
} from "lucide-react";
import { faqsData } from "../data/faqData";

export default function FaqPage({ onOpenDemo }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(0);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "General", label: "General & LIS" },
    { id: "WhatsApp", label: "WhatsApp Reports" },
    { id: "OPD", label: "Clinic OPD" },
    { id: "Hardware", label: "Hardware & Barcodes" },
    { id: "Commissions", label: "Doctor Commissions" },
    { id: "Security", label: "Data & Security" }
  ];

  // Extended FAQ items
  const extendedFaqs = [
    ...faqsData,
    {
      category: "Hardware",
      q: "Can I connect my hematology or biochemistry analyzer machine directly?",
      a: "Yes! LabExpert supports standard RS-232 and TCP/IP bi-directional and uni-directional analyzer interfacing protocols (ASTM / HL7) on our Growth and Enterprise plans. Test results from Sysmex, Mindray, Erba, and Beckman Coulter analyzers flow straight into patient worksheets automatically."
    },
    {
      category: "WhatsApp",
      q: "Is there any hidden cost per WhatsApp report sent to patients?",
      a: "No! Unlike legacy software providers who charge ₹0.25 to ₹0.50 per SMS, LabExpert uses a direct WhatsApp Cloud integration that allows you to deliver PDF reports with zero third-party SMS bills."
    },
    {
      category: "General",
      q: "How long does it take to migrate tests and patient history from old desktop software?",
      a: "Our migration team imports your existing test lists, normal reference ranges, doctor databases, and past patient history in under 24 hours. We provide ready Excel/CSV import templates and perform the transition with zero lab downtime."
    },
    {
      category: "Security",
      q: "What if our internet connection drops temporarily during the day?",
      a: "LabExpert is extremely lightweight and works smoothly on standard 4G mobile hotspots. If broadband drops, simply toggle your phone's hotspot or insert a 4G SIM dongle into your router and continue working without interruptions."
    }
  ];

  const filteredFaqs = extendedFaqs.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesQuery =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <PageTransition>
      <SEO
        title="Help Center & Frequently Asked Questions | LabExpert"
        description="Find quick answers regarding WhatsApp reports, barcode printers, doctor commissions, analyzer interfacing, and cloud security."
        keywords="LIS FAQ, pathology software help, lab software questions, WhatsApp lab report setup"
        canonical="https://labexpert.in/faq"
      />

      <Breadcrumb items={[{ label: "Help Center & FAQs" }]} />

      <main>
        {/* Page Hero */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-b from-sky-950 via-slate-900 to-slate-950 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_70%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold mb-6"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Knowledge Base & Support Hub</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none"
            >
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Questions</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Find instant answers to questions regarding features, barcode printers, WhatsApp delivery, doctor commissions, and onboarding.
            </motion.p>

            {/* Live Search Bar */}
            <div className="mt-10 max-w-2xl mx-auto relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search any question (e.g. WhatsApp, barcode, internet, doctor commission)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-xl"
              />
            </div>

          </div>
        </section>

        {/* Categories Bar */}
        <section className="bg-white border-b border-slate-200 sticky top-16 z-20 py-3 shadow-xs">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 overflow-x-auto flex items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-sky-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* FAQs List */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                    isOpen ? "border-sky-300 shadow-md ring-1 ring-sky-200" : "border-slate-200 shadow-xs hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {faq.category || "General"}
                      </span>
                      <span className="text-sm font-bold text-slate-900 leading-snug">
                        {faq.q}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-sky-600" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50"
                      >
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
                <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800">No matching questions found</h3>
                <p className="text-xs text-slate-500 mt-1">Try another keyword or reach out directly to our support team.</p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                  className="mt-4 px-4 py-2 bg-sky-600 text-white rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Quick Contact & Helpline Cards */}
        <section className="py-12 bg-slate-100/70 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-slate-900">Still have a question?</h3>
              <p className="text-xs text-slate-500 mt-1">We are available on phone, WhatsApp, and live screen share.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="tel:+916295779038"
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-sky-300 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">Direct Helpline</h4>
                <p className="text-[11px] text-slate-500 mt-1">+91 62957 79038</p>
                <span className="text-[10px] text-sky-600 font-bold mt-2">Call Now →</span>
              </a>

              <a
                href="https://wa.me/916295779038?text=Hello%20LabExpert%2C%20I%20have%20a%20question%20regarding%20your%20software"
                target="_blank"
                rel="noreferrer"
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">WhatsApp Chat</h4>
                <p className="text-[11px] text-slate-500 mt-1">Instant reply in &lt; 5 mins</p>
                <span className="text-[10px] text-emerald-600 font-bold mt-2">Chat on WhatsApp →</span>
              </a>

              <a
                href="mailto:support@labexpert.in"
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-sky-300 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">Email Support</h4>
                <p className="text-[11px] text-slate-500 mt-1">support@labexpert.in</p>
                <span className="text-[10px] text-sky-600 font-bold mt-2">Send Email →</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

