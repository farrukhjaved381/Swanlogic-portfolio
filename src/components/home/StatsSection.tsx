import React from 'react';

type Stat = {
  label: string;
  value: string;
};

const stats: Stat[] = [
  { label: 'Satisfied Clients', value: '3.4k+' },
  { label: 'Marketing Experts', value: '85k' },
  { label: 'Brands Served', value: '180k' },
  { label: 'Successful Campaigns', value: '8.5k' },
];

export default function StatsSection() {
  return (
    <section className="container-px mx-auto max-w-[1400px] py-10">
      <div className="grid gap-10 border-t border-brand-purple/40 pt-10 text-brand-ink md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-4">
            <p className="font-hanken text-lg text-brand-gray">{stat.label}</p>
            <p className="text-5xl font-bold sm:text-6xl">{stat.value}</p>
            <div className="h-px w-full bg-brand-purple/40" />
          </div>
        ))}
      </div>
    </section>
  );
}
