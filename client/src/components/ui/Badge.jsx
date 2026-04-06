import React from 'react';

export default function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 bg-neonPrimary/10 border border-neonPrimary/30 rounded-full text-neonPrimary font-mono text-xs ${className}`}>
      {children}
    </span>
  );
}
