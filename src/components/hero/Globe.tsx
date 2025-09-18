import React from 'react';

/**
 * Lightweight placeholder for future interactive globe.
 * Replace with react-globe.gl when ready for the full 3D experience.
 */
export default function Globe() {
  return (
    <div aria-hidden="true" className="relative aspect-square w-full max-w-[520px]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.6),rgba(16,185,129,0.5)_45%,transparent_75%)]" />
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-6 rounded-full border border-white/5" />
      <div className="absolute inset-0 rounded-full blur-3xl bg-brand-purple/20" />
    </div>
  );
}
