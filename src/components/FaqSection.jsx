import React, { useState } from "react";
import { faqCategories, faqList } from "../data/faqData";
import { HelpCircle, ChevronDown, ChevronUp, Search, Sparkles } from "lucide-react";

export default function FaqSection({ onOpenDemo }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = faqList.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = 
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to Know About LabExpert
          </h2>
          <p className="text-base text-slate-600">
            Have questions about cloud deployment, WhatsApp reports, pricing renewals, or migration? Find clear answers below.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-8 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g., WhatsApp, renewal, backup, hardware)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-xs"
          />
        </div>

        {/* Category Pills */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-10 space-y-3 text-left">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? "border-sky-300 bg-sky-50/20 shadow-xs"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      {faq.q}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-slate-400 text-sm">
              No matching questions found for "{searchQuery}".
            </div>
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center space-y-3">
          <h4 className="text-base font-bold text-slate-900">
            Still Have Questions or Specific Lab Requirements?
          </h4>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Our diagnostic software specialists will analyze your sample volume and recommend the most cost-effective setup.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <button
              onClick={onOpenDemo}
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl cursor-pointer shadow-xs transition-colors"
            >
              Book 1-on-1 Consultation
            </button>
            <a
              href="tel:+916295779038"
              className="bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs px-4 py-2.5 rounded-xl border border-slate-200 transition-colors"
            >
              Call Helpline: +91 62957 79038
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

