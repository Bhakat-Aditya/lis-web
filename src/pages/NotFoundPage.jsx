import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import { Activity, ArrowRight, Home, Search } from "lucide-react";

export default function NotFoundPage() {
  return (
    <PageTransition>
      <SEO
        title="Page Not Found (404) | LabExpert"
        description="The diagnostic page you are looking for does not exist or has been moved."
      />

      <main className="min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto shadow-inner">
            <Activity className="w-8 h-8 stroke-[2.5]" />
          </div>

          <div>
            <div className="text-6xl font-black text-slate-900 font-mono">404</div>
            <h1 className="text-xl font-bold text-slate-800 mt-2">
              Page Not Found
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              The page you're trying to reach does not exist or may have been relocated.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow-md shadow-sky-600/20"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-5 py-2.5 rounded-xl text-xs transition-colors"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}

