import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import Breadcrumb from "../components/Breadcrumb";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  CalendarCheck,
  Send,
  HelpCircle,
  Building2,
  User,
  ArrowRight
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    labName: "",
    phone: "",
    email: "",
    city: "",
    patientVolume: "20-50",
    planInterest: "Growth",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert("Please provide your name and phone number.");
      return;
    }
    setSubmitted(true);
  };

  const contactFaqs = [
    {
      q: "How quickly will the LabExpert team contact me?",
      a: "Our product specialists usually respond via phone or WhatsApp within 15 to 30 minutes during normal business hours (Mon-Sat, 9 AM - 9 PM IST)."
    },
    {
      q: "Can I book a free personalized product demo?",
      a: "Yes! We provide a free 1-on-1 screen sharing walkthrough showing how LabExpert configures your test master, normal reference ranges, and WhatsApp report branding."
    },
    {
      q: "Will your team help migrate data from our existing desktop software?",
      a: "Absolutely! We provide complete onboarding assistance and will import your doctor list, test rate list, and past patient data via Excel or CSV at no additional charge."
    }
  ];

  return (
    <PageTransition>
      <SEO
        title="Contact Us & Book Free Demo | LabExpert"
        description="Speak with our pathology lab automation specialists. Schedule a live 1-on-1 screen share demo or connect on WhatsApp/phone."
        keywords="contact LabExpert, book LIS demo, pathology software phone support, LIS consultation"
        canonical="https://labexpert.in/contact"
      />

      <Breadcrumb items={[{ label: "Contact & Book Live Demo" }]} />

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
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>We Are Here to Assist Your Lab</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none"
            >
              Get in Touch or Book a <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Free Live Demo</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Have questions about features, migration, or pricing? Our diagnostic lab specialists are available on call, WhatsApp, and live video screen share.
            </motion.p>

          </div>
        </section>

        {/* Contact Grid Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Contact Channels & Office Info */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Direct Contact Channels</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Reach our technical and sales team directly:
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <a
                    href="tel:+916295779038"
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-sky-50/60 border border-sky-100 hover:border-sky-300 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Phone Support Hotline</div>
                      <div className="text-sky-700 font-semibold mt-0.5">+91 62957 79038 / 82409 41782</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Mon - Sat (9:00 AM - 9:00 PM IST)</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/916295779038?text=Hello%20LabExpert%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20LIS%20software"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 hover:border-emerald-300 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Instant WhatsApp Desk</div>
                      <div className="text-emerald-700 font-semibold mt-0.5">Chat Directly with a Specialist</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Fastest response (&lt; 5 mins)</div>
                    </div>
                  </a>

                  <a
                    href="mailto:support@labexpert.in"
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Official Email</div>
                      <div className="text-slate-700 font-semibold mt-0.5">support@labexpert.in</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">For formal quotes & corporate inquiries</div>
                    </div>
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-600">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>24/7 Cloud Infrastructure & Server Health Monitoring</span>
                </div>
              </div>

              {/* What Happens in Demo Card */}
              <div className="bg-gradient-to-br from-sky-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg">
                <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wider">
                  What Happens in Your 15-Min Free Demo?
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">1.</span>
                    <span>Live screen share walkthrough tailored to your daily patient volume.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">2.</span>
                    <span>Preview your lab's customized letterhead format, digital signatures & QR code.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">3.</span>
                    <span>Test sample WhatsApp PDF report delivery straight to your personal mobile.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">4.</span>
                    <span>Review test formulas, doctor commission ledger, and thermal printer setup.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right: Comprehensive Booking Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl font-extrabold text-slate-900">
                  Schedule Free Live Demonstration
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below and our lab specialist will contact you to set up your session.
                </p>
              </div>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4"
                >
                  <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-bold text-emerald-900">Thank You, {formData.fullName}!</h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                    We have received your demo request for <strong>{formData.labName || "your diagnostic centre"}</strong>. Our team will contact you on <strong>{formData.phone}</strong> shortly.
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://wa.me/916295779038?text=Hello%2C%20I%20have%20submitted%20the%20demo%20booking%20form"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-md hover:bg-emerald-700 transition-colors"
                    >
                      <span>Connect Immediately via WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Rajesh Kumar"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Laboratory or Clinic Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Apex Diagnostics"
                        value={formData.labName}
                        onChange={(e) => setFormData({ ...formData, labName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">WhatsApp Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="rajesh@apexdiagnostics.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">City / State *</label>
                      <input
                        type="text"
                        required
                        placeholder="Kolkata, WB"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Daily Patient Count</label>
                      <select
                        value={formData.patientVolume}
                        onChange={(e) => setFormData({ ...formData, patientVolume: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50 font-medium"
                      >
                        <option value="under-20">Under 20 / Day</option>
                        <option value="20-50">20 - 50 / Day</option>
                        <option value="50-100">50 - 100 / Day</option>
                        <option value="100-plus">100+ / Day</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Plan of Interest</label>
                      <select
                        value={formData.planInterest}
                        onChange={(e) => setFormData({ ...formData, planInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50 font-medium"
                      >
                        <option value="Starter">Starter Lab (₹5,999)</option>
                        <option value="Growth">Growth Lab (₹6,999)</option>
                        <option value="Enterprise">Enterprise Multi-Branch</option>
                        <option value="OPD">Integrated OPD + Lab</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Questions / Specific Requirements (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your analyzers, thermal printers, or any specific reporting requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-bold py-3.5 rounded-xl text-sm shadow-md shadow-sky-600/30 transition-all cursor-pointer"
                  >
                    Confirm Free Demo Appointment
                  </motion.button>

                  <p className="text-[11px] text-slate-400 text-center">
                    🔒 Zero spam policy. We never share your phone number with 3rd parties.
                  </p>
                </form>
              )}
            </div>

          </div>
        </section>

        {/* Quick FAQs */}
        <section className="py-12 bg-slate-100/70 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h3 className="text-lg font-bold text-slate-900 text-center mb-6">
              Frequently Asked Questions Before Booking
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactFaqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 text-xs">
                  <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
