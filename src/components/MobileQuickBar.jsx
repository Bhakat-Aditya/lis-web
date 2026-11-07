import React from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export default function MobileQuickBar({ onOpenDemo }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:+916295779038"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 text-slate-800 text-[11px] font-bold active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-sky-600 mb-0.5" />
          <span>Call Us</span>
        </a>

        <a
          href="https://wa.me/916295779038?text=Hello%20LabExpert%2C%20I%20am%20interested%20in%20your%20laboratory%20software"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 text-emerald-800 text-[11px] font-bold active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenDemo}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 text-white text-[11px] font-bold active:scale-95 transition-transform shadow-md shadow-sky-600/30 cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span>Book Demo</span>
        </button>
      </div>
    </div>
  );
}

