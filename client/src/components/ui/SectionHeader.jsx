import React from 'react';

export default function SectionHeader({ label, title, subtitle, className = '' }) {
  return (
    <div className={`flex flex-col items-center text-center max-w-3xl mx-auto mb-16 ${className} reveal-heading`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-[1px] bg-neonPrimary/40" />
        <span className="text-neonPrimary font-mono text-xs uppercase tracking-[0.15em] font-semibold">
          {label}
        </span>
        <div className="w-10 h-[1px] bg-neonPrimary/40" />
      </div>
      <h2 className="text-3xl md:text-5xl font-hero font-bold mb-6 !leading-tight text-textPrimary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-textSecondary font-body text-lg max-w-2xl px-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
