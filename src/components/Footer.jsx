import React from "react";
import { Link } from "react-router-dom";
import { Activity, Phone, Mail, Globe, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pb-20 sm:pb-8 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80 text-left">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <Link to="/" className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-sky-600/30 group-hover:scale-105 transition-transform">
                  <Activity className="w-5 h-5 text-white stroke-[2.5]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-white tracking-tight">
                    Lab<span className="text-sky-400">Expert</span>
                  </span>
                  <span className="text-[10px] text-slate-400 -mt-0.5">
                    Cloud Pathology & Clinic Management
                  </span>
                </div>
              </Link>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              LabExpert is an intelligent, cloud-based Laboratory Information System (LIS) and Clinic OPD platform designed to automate diagnostic workflows, deliver instant WhatsApp reports, and empower modern diagnostic centres to scale seamlessly.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>NABL Format Ready • AES-256 Bit Encrypted</span>
            </div>

            <div className="pt-2">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs px-3.5 py-2 rounded-lg transition-colors shadow-sm"
              >
                <span>Request Free Lab Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation Pages */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Explore Pages
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-white transition-colors">
                  Pathology LIS Modules
                </Link>
              </li>
              <li>
                <Link to="/opd" className="hover:text-white transition-colors">
                  Smart OPD & Clinic
                </Link>
              </li>
              <li>
                <Link to="/workflow" className="hover:text-white transition-colors">
                  7-Step Diagnostic Workflow
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Transparent Pricing & Plans
                </Link>
              </li>
              <li>
                <Link to="/demo" className="hover:text-white transition-colors">
                  Interactive Live Simulator
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-white transition-colors">
                  Cloud Security & Tech Specs
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-white transition-colors">
                  Verified Reviews & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Help Center & FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Book Free Demo Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform Modules */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Core Modules
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>• Patient Registration & UHID</li>
              <li>• Test Master & Formula Engine</li>
              <li>• Specimen Barcoding & Tracking</li>
              <li>• Instant WhatsApp Delivery</li>
              <li>• Doctor Commission Engine</li>
              <li>• Dynamic UPI QR Billing</li>
              <li>• Multi-Branch Control Hub</li>
              <li>• Automated Cloud Backups</li>
            </ul>
          </div>

          {/* Column 4: Contact Hotline */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact & Support
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+916295779038" className="hover:text-white transition-colors">
                  +91 62957 79038
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:support@labexpert.in" className="hover:text-white transition-colors">
                  support@labexpert.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <Link to="/" className="hover:text-white transition-colors">
                  www.labexpert.in
                </Link>
              </li>
              <li className="pt-2 text-[11px] text-slate-400 leading-relaxed">
                Support Hours: Mon - Sat (9:00 AM - 9:00 PM IST)
                <br />Emergency cloud monitoring: 24/7/365
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © 2026 LabExpert Technologies. All Rights Reserved. Multi-page Cloud LIS for Indian pathology laboratories.
          </div>
          <div className="flex items-center gap-3">
            <Link to="/features" className="hover:text-white transition-colors">Features</Link>
            <span>•</span>
            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <span>•</span>
            <Link to="/security" className="hover:text-white transition-colors">Security</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
