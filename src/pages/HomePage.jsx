import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
import TrustMetrics from "../components/TrustMetrics";
import FeatureTabs from "../components/FeatureTabs";
import InteractivePlayground from "../components/InteractivePlayground";
import WorkflowSection from "../components/WorkflowSection";
import OPDSpotlight from "../components/OPDSpotlight";
import ComparisonSection from "../components/ComparisonSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import CtaBanner from "../components/CtaBanner";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HomePage({ onOpenDemo }) {
  return (
    <PageTransition>
      <SEO
        title="LabExpert | Cloud Pathology Laboratory & Smart OPD Management Software"
        description="India's leading cloud LIS & clinic OPD platform. Automate patient registration, formula-based test engine, smart QR billing, and instant WhatsApp report delivery."
        canonical="https://labexpert.in"
      />

      <main>
        {/* Hero Section */}
        <Hero onOpenDemo={() => onOpenDemo("Growth")} />

        {/* Credibility & Live Counter Stats Bar */}
        <TrustMetrics />

        {/* Quick Multi-Page Navigation Hub / Explore Bar */}
        <section className="py-8 bg-sky-950/40 border-y border-sky-900/30 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-200">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Explore Dedicated Product Pages:</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium">
                <Link to="/features" className="px-3 py-1.5 rounded-lg bg-sky-800/50 hover:bg-sky-700/60 text-sky-100 hover:text-white transition-colors border border-sky-700/50">
                  LIS Modules →
                </Link>
                <Link to="/opd" className="px-3 py-1.5 rounded-lg bg-sky-800/50 hover:bg-sky-700/60 text-sky-100 hover:text-white transition-colors border border-sky-700/50">
                  Smart OPD & Clinic →
                </Link>
                <Link to="/workflow" className="px-3 py-1.5 rounded-lg bg-sky-800/50 hover:bg-sky-700/60 text-sky-100 hover:text-white transition-colors border border-sky-700/50">
                  7-Step Workflow →
                </Link>
                <Link to="/pricing" className="px-3 py-1.5 rounded-lg bg-sky-800/50 hover:bg-sky-700/60 text-sky-100 hover:text-white transition-colors border border-sky-700/50">
                  Pricing & ROI →
                </Link>
                <Link to="/demo" className="px-3 py-1.5 rounded-lg bg-emerald-900/40 hover:bg-emerald-800/60 text-emerald-200 hover:text-white transition-colors border border-emerald-700/50">
                  Live Simulator →
                </Link>
                <Link to="/security" className="px-3 py-1.5 rounded-lg bg-sky-800/50 hover:bg-sky-700/60 text-sky-100 hover:text-white transition-colors border border-sky-700/50">
                  Cloud Security →
                </Link>
                <Link to="/contact" className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-colors">
                  Book Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Modules Tabs */}
        <FeatureTabs onOpenDemo={onOpenDemo} />

        {/* Feature Highlights Banner */}
        <section className="py-6 bg-slate-100 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-xs font-bold text-sky-700 hover:text-sky-800 bg-sky-50 hover:bg-sky-100 px-4 py-2 rounded-xl border border-sky-200 transition-colors"
            >
              <span>Explore all 18+ Diagnostic & Multi-Branch Modules on the Features Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Hands-on Interactive Playground (WhatsApp Simulator, Quiz, ROI) */}
        <InteractivePlayground onOpenDemo={onOpenDemo} />

        {/* 7-Step Seamless Workflow */}
        <WorkflowSection onOpenDemo={onOpenDemo} />

        {/* OPD & Integrated Clinic Spotlight */}
        <OPDSpotlight onOpenDemo={onOpenDemo} />

        {/* Traditional Desktop vs LabExpert Cloud Comparison */}
        <ComparisonSection onOpenDemo={onOpenDemo} />

        {/* Quick Pricing Teaser Card with Link to /pricing */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              Simple & Transparent
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Plans Starting at Just ₹5,999 / Year
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              Transparent annual subscriptions with guaranteed renewal pricing. No hidden server fees or per-test SMS charges.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-sky-600/20 text-sm transition-all active:scale-95"
              >
                <span>View Complete Pricing & ROI Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => onOpenDemo("Growth")}
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3.5 rounded-xl text-sm transition-colors cursor-pointer"
              >
                <span>Book Free Demo</span>
              </button>
            </div>
          </div>
        </section>

        {/* Verified Customer Success Stories */}
        <TestimonialsSection />

        {/* Categorized FAQs */}
        <FaqSection onOpenDemo={onOpenDemo} />

        {/* Final High-Impact Call to Action */}
        <CtaBanner onOpenDemo={onOpenDemo} />
      </main>
    </PageTransition>
  );
}
