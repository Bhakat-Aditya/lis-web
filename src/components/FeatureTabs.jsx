import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { categoriesData, coreHighlights } from "../data/featuresData";
import { 
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
  CloudLightning,
  Sparkles,
  ArrowRight,
  Check
} from "lucide-react";

// Icon mapping dictionary
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

export default function FeatureTabs({ onOpenDemo }) {
  const [activeCategory, setActiveCategory] = useState("lis");

  const currentCategory = categoriesData.find((c) => c.id === activeCategory) || categoriesData[0];

  return (
    <section id="features" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Complete Laboratory Suite
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything Your Diagnostic Centre Needs In One Intelligent Platform
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Eliminate fragmented tools, local server crashes, and paper piles. LabExpert connects every stage of diagnostic workflow into one secure cloud database.
          </p>
        </div>

        {/* Category Tabs Switcher */}
        <div className="flex justify-center mt-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-full overflow-x-auto">
            {categoriesData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-md shadow-sky-600/20"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>{cat.title}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  activeCategory === cat.id
                    ? "bg-white/20 text-white font-semibold"
                    : "bg-slate-100 text-slate-600"
                }`}>
                  {cat.badge}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Header Card with Framer Motion Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-8 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-sky-600 tracking-wider uppercase">
                  {currentCategory.tagline}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  {currentCategory.title} Features
                </h3>
                <p className="text-sm text-slate-600 max-w-2xl mt-1">
                  {currentCategory.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  to="/features"
                  className="shrink-0 inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-3.5 py-2.5 rounded-xl transition-colors"
                >
                  <span>Explore Module Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={onOpenDemo}
                  className="shrink-0 inline-flex items-center gap-2 bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs px-3.5 py-2.5 rounded-xl transition-colors cursor-pointer border border-sky-200"
                >
                  <span>Book Demo</span>
                </button>
              </div>
            </div>

            {/* 6 Grid Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              {currentCategory.features.map((feature, idx) => {
                const IconComponent = iconMap[feature.icon] || Sparkles;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3 }}
                    className="group relative bg-slate-50/60 hover:bg-white rounded-xl p-5 border border-slate-200/70 hover:border-sky-300 hover:shadow-md transition-all duration-200 text-left flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-sky-600 group-hover:text-white transition-all shadow-xs">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>

                    {/* Tags Pill List */}
                    <div className="mt-4 pt-3 border-t border-slate-200/50 flex flex-wrap gap-1.5">
                      {feature.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-[10px] font-semibold text-slate-600 bg-white group-hover:bg-sky-50 group-hover:text-sky-700 border border-slate-200 px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 4 Bottom Fast Highlights */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3.5"
            >
              <div className="text-2xl font-black text-sky-600 shrink-0">
                {item.stat}
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">{item.label}</div>
                <div className="text-[11px] text-slate-500 leading-tight">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
