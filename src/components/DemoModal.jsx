import React, { useState, useEffect } from "react";
import { 
  X, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  Building2, 
  User, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function DemoModal({ isOpen, onClose, selectedPlanName }) {
  const [formData, setFormData] = useState({
    fullName: "",
    labName: "",
    phone: "",
    email: "",
    city: "",
    patientVolume: "20-50",
    planInterest: selectedPlanName || "Growth",
    preferredTime: "Morning (10 AM - 1 PM)"
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPlanName) {
      setFormData((prev) => ({ ...prev, planInterest: selectedPlanName }));
    }
  }, [selectedPlanName]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 max-h-[95vh] overflow-y-auto shadow-2xl border border-slate-200 relative text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="space-y-1.5 pb-4 border-b border-slate-100">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[10px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-sky-600" />
                Live 1-on-1 Product Walkthrough
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Book Your Free LabExpert Demo
              </h3>
              <p className="text-xs text-slate-500">
                See how WhatsApp report delivery, barcode tracking, and smart billing will work specifically for your laboratory.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Dr. Rajesh Kumar"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    Laboratory / Clinic Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. LifeCare Diagnostic Centre"
                    value={formData.labName}
                    onChange={(e) => setFormData({ ...formData, labName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. doctor@lifecarelab.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    City / State *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Kolkata, West Bengal"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">
                    Daily Patients Volume
                  </label>
                  <select
                    value={formData.patientVolume}
                    onChange={(e) => setFormData({ ...formData, patientVolume: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                  >
                    <option value="Under 20">Under 20 Patients / Day (New Lab)</option>
                    <option value="20-50">20 - 50 Patients / Day</option>
                    <option value="50-100">50 - 100 Patients / Day</option>
                    <option value="100+">100+ Patients / Multi-Branch</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">
                  Plan of Interest
                </label>
                <select
                  value={formData.planInterest}
                  onChange={(e) => setFormData({ ...formData, planInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                >
                  <option value="Growth">Growth Plan (₹9,999/yr - Recommended)</option>
                  <option value="Starter">Starter Plan (₹5,999/yr - New Lab)</option>
                  <option value="Enterprise">Enterprise Plan (₹11,999/yr - Multi Branch)</option>
                  <option value="OPD Clinic">OPD Clinic (₹6,999/yr - Consultations)</option>
                  <option value="Enterprise OPD + Lab">Enterprise OPD + Lab Combo (₹8,499/yr)</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-600 via-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-extrabold text-sm shadow-lg shadow-sky-600/25 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Free Demo Request</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Your information is strictly confidential. No spam guaranteed.</span>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation Success View */
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-black text-slate-900">
              Demo Request Received!
            </h3>

            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.fullName}</strong>. Our senior laboratory product specialist will contact you on <strong>{formData.phone}</strong> shortly to conduct your personalized live walkthrough.
            </p>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-1.5 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">Lab Name:</span>
                <span className="font-bold text-slate-800">{formData.labName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">City:</span>
                <span className="font-bold text-slate-800">{formData.city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Plan:</span>
                <span className="font-bold text-sky-700">{formData.planInterest}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/916295779038?text=Hello%20LabExpert%2C%20I%20just%20submitted%20a%20demo%20request%20for%20my%20lab%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-xs"
              >
                <span>Connect via WhatsApp Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 border border-slate-200 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

