import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, 
  Menu, 
  X, 
  Phone, 
  Calendar,
  MessageCircle
} from "lucide-react";

export default function Navbar({ onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu whenever location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Features", to: "/features" },
    { name: "Smart OPD", to: "/opd" },
    { name: "Workflow", to: "/workflow" },
    { name: "Pricing", to: "/pricing" },
    { name: "Demo Simulator", to: "/demo" },
    { name: "Security", to: "/security" },
    { name: "Reviews", to: "/testimonials" },
    { name: "FAQ", to: "/faq" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white text-xs py-2 px-4 border-b border-sky-900/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="bg-sky-500/20 text-sky-300 font-semibold px-2 py-0.5 rounded text-[11px]">
              NEW v2.4
            </span>
            <span className="text-slate-300 hidden sm:inline">
              Instant WhatsApp Reports with Smart Due Payment Gate & Integrated Clinic OPD!
            </span>
            <span className="text-slate-300 sm:hidden">
              Instant WhatsApp Reports & Smart OPD!
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0 font-medium text-[11px] sm:text-xs">
            <a
              href="tel:+916295779038"
              className="flex items-center gap-1.5 text-sky-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 62957 79038</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <a
              href="https://wa.me/916295779038?text=Hello%20LabExpert%2C%20I%20would%20like%20a%20free%20demo%20of%20your%20LIS%20software"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-sky-500/20 shrink-0"
              >
                <Activity className="w-5 h-5 text-white stroke-[2.5]" />
              </motion.div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
                    Lab<span className="text-sky-600">Expert</span>
                  </span>
                  <span className="bg-sky-100 text-sky-700 text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wide uppercase">
                    Cloud LIS
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-medium -mt-1 hidden sm:block">
                  Pathology & Clinic Software
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 text-xs font-semibold text-slate-700">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-2.5 py-1.5 rounded-lg transition-all relative ${
                      isActive
                        ? "text-sky-700 bg-sky-50 font-bold shadow-xs border border-sky-100"
                        : "hover:text-sky-600 hover:bg-slate-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Condensed Navigation for Lg (1024px to 1279px) */}
            <nav className="hidden lg:flex xl:hidden items-center gap-1 text-xs font-semibold text-slate-700">
              <NavLink to="/features" className={({ isActive }) => `px-2 py-1.5 rounded-md ${isActive ? 'text-sky-700 font-bold bg-sky-50' : 'hover:text-sky-600'}`}>Features</NavLink>
              <NavLink to="/opd" className={({ isActive }) => `px-2 py-1.5 rounded-md ${isActive ? 'text-sky-700 font-bold bg-sky-50' : 'hover:text-sky-600'}`}>Smart OPD</NavLink>
              <NavLink to="/workflow" className={({ isActive }) => `px-2 py-1.5 rounded-md ${isActive ? 'text-sky-700 font-bold bg-sky-50' : 'hover:text-sky-600'}`}>Workflow</NavLink>
              <NavLink to="/pricing" className={({ isActive }) => `px-2 py-1.5 rounded-md ${isActive ? 'text-sky-700 font-bold bg-sky-50' : 'hover:text-sky-600'}`}>Pricing</NavLink>
              <NavLink to="/demo" className={({ isActive }) => `px-2 py-1.5 rounded-md ${isActive ? 'text-sky-700 font-bold bg-sky-50' : 'hover:text-sky-600'}`}>Demo</NavLink>
              <NavLink to="/testimonials" className={({ isActive }) => `px-2 py-1.5 rounded-md ${isActive ? 'text-sky-700 font-bold bg-sky-50' : 'hover:text-sky-600'}`}>Reviews</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `px-2 py-1.5 rounded-md ${isActive ? 'text-sky-700 font-bold bg-sky-50' : 'hover:text-sky-600'}`}>Contact</NavLink>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <Link
                to="/demo"
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-sky-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <span>Live Simulator</span>
              </Link>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenDemo ? onOpenDemo : () => window.location.href = '/contact'}
                className="flex items-center gap-2 bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-semibold text-xs px-3.5 py-2.5 rounded-xl shadow-md shadow-sky-600/20 hover:shadow-lg hover:shadow-sky-600/30 transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Free Demo</span>
              </motion.button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenDemo ? onOpenDemo : () => window.location.href = '/contact'}
                className="sm:hidden bg-sky-600 text-white font-semibold text-xs px-3 py-2 rounded-lg"
              >
                Demo
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Framer Motion Animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto"
            >
              <nav className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                      isActive ? 'bg-sky-50 text-sky-700 font-bold' : 'text-slate-800 hover:bg-slate-50'
                    }`
                  }
                >
                  🏠 Home Overview
                </NavLink>
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    className={({ isActive }) =>
                      `px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                        isActive
                          ? "bg-sky-50 text-sky-700 font-bold"
                          : "text-slate-800 hover:bg-slate-50 hover:text-sky-600"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenDemo) {
                      onOpenDemo();
                    } else {
                      window.location.href = '/contact';
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-semibold py-3 rounded-xl shadow-md text-xs cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free Live Demo</span>
                </button>
                <div className="flex items-center justify-between text-xs text-slate-500 pt-2 px-1">
                  <span>Direct Support Helpline:</span>
                  <a href="tel:+916295779038" className="font-semibold text-sky-600">
                    +91 62957 79038
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
