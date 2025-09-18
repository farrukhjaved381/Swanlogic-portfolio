import React from 'react';

type Project = {
  id: number;
  year: string;
  client: string;
  title: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    year: '2025',
    client: 'Gary Neville',
    title: "Refreshing Gary Neville's digital presence",
    featured: true,
  },
  {
    id: 2,
    year: '2025',
    client: 'Gary Neville',
    title: 'A workplace consultancy creating inspiring environments',
  },
  {
    id: 3,
    year: '2025',
    client: 'Gary Neville',
    title: 'Furniture designed to the greatest extent',
  },
  {
    id: 4,
    year: '2025',
    client: 'Gary Neville',
    title: 'Redefining a leading global talent group',
  },
];

export default function ProjectsSection() {
  return (
    <section className="container-px mx-auto max-w-[1400px] space-y-12 py-24">
      <h2 className="max-w-3xl text-5xl leading-tight sm:text-6xl">Take a look at our projects</h2>

      <div className="grid gap-16 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="space-y-6"
            aria-labelledby={`project-${project.id}`}
          >
            <div
              className={
                project.featured
                  ? 'relative overflow-hidden rounded-[32px] bg-brand-purple/20 shadow-surface'
                  : 'relative overflow-hidden rounded-[32px] bg-brand-navy/10'
              }
            >
              <div className="aspect-[4/5] w-full bg-gradient-to-br from-brand-navy/70 via-brand-purple/40 to-brand-lime/30" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 font-dewi text-sm uppercase tracking-[0.25em] text-brand-gray">
                <span>{project.year}</span>
                <span className="h-1 w-1 rounded-full bg-brand-purple" />
                <span>{project.client}</span>
              </div>
              <h3 id={`project-${project.id}`} className="text-4xl leading-snug">
                {project.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
