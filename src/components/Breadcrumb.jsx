import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-slate-100/90 border-b border-slate-200/80 py-2.5 px-4 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto flex items-center gap-1.5 flex-wrap">
        <Link 
          to="/" 
          className="flex items-center gap-1 text-slate-600 hover:text-sky-600 transition-colors font-medium"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
              {isLast || !item.to ? (
                <span className="font-semibold text-sky-700 truncate" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  to={item.to} 
                  className="text-slate-600 hover:text-sky-600 transition-colors font-medium truncate"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
