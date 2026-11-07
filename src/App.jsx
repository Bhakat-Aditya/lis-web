import React, { useState, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import DemoModal from "./components/DemoModal";
import MobileQuickBar from "./components/MobileQuickBar";

// Lazy-loaded Modular Pages for Optimal Code-Splitting
const HomePage = lazy(() => import("./pages/HomePage"));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage"));
const OpdPage = lazy(() => import("./pages/OpdPage"));
const WorkflowPage = lazy(() => import("./pages/WorkflowPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const DemoPage = lazy(() => import("./pages/DemoPage"));
const SecurityPage = lazy(() => import("./pages/SecurityPage"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-3">
      <div className="w-9 h-9 border-3 border-sky-600 border-t-transparent rounded-full animate-spin" />
      <span className="text-xs font-semibold text-slate-400">Loading...</span>
    </div>
  );
}

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState("Growth");
  const location = useLocation();

  const handleOpenDemo = (plan = "Growth") => {
    if (typeof plan === "string") {
      setSelectedPlanName(plan);
    }
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-sky-500 selection:text-white overflow-x-hidden flex flex-col justify-between">
      {/* Scroll restoration upon page navigation */}
      <ScrollToTop />

      {/* Shared Header Navigation */}
      <Navbar onOpenDemo={() => handleOpenDemo("Growth")} />

      {/* Dynamic Animated Route Views with Code-Splitting */}
      <div className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage onOpenDemo={handleOpenDemo} />} />
              <Route path="/features" element={<FeaturesPage onOpenDemo={handleOpenDemo} />} />
              <Route path="/opd" element={<OpdPage onOpenDemo={handleOpenDemo} />} />
              <Route path="/workflow" element={<WorkflowPage onOpenDemo={handleOpenDemo} />} />
              <Route path="/pricing" element={<PricingPage onOpenDemo={handleOpenDemo} />} />
              <Route path="/demo" element={<DemoPage onOpenDemo={handleOpenDemo} />} />
              <Route path="/security" element={<SecurityPage onOpenDemo={handleOpenDemo} />} />
              <Route path="/testimonials" element={<TestimonialsPage onOpenDemo={handleOpenDemo} />} />
              <Route path="/faq" element={<FaqPage onOpenDemo={handleOpenDemo} />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage onOpenDemo={handleOpenDemo} />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>

      {/* Shared Global Footer */}
      <Footer />

      {/* Global Interactive Booking Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={handleCloseDemo}
        selectedPlanName={selectedPlanName}
      />

      {/* Sticky Mobile Quick Action Bar */}
      <MobileQuickBar onOpenDemo={() => handleOpenDemo("Growth")} />
    </div>
  );
}
