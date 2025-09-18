import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/icons";

export function TeamSection() {
  const members = [
    { src: "/team-member1.png", name: "Ava Stone", role: "Product Designer" },
    { src: "/team-member2.png", name: "William C. Krueger", role: "Creative Director" },
    { src: "/team-member3.png", name: "James Carter", role: "Frontend Engineer" },
    { src: "/team-member4.png", name: "Mia Collins", role: "Project Manager" },
  ];

  return (
    <section id="team" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-balance text-center font-rf-dewi text-4xl font-bold md:text-5xl">
          Teamwork Makes The Dream Work
        </h2>

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => (
            <div key={m.name} className="group relative">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img src={m.src} alt={m.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="mt-3">
                <p className="font-semibold text-brand-ink">{m.name}</p>
                <p className="text-sm text-brand-gray">{m.role}</p>
              </div>
              {i === 1 && (
                <div className="absolute -bottom-4 left-3 right-3 rounded-xl bg-white p-4 shadow-lg">
                  <h4 className="mb-1 text-lg font-bold">{m.name}</h4>
                  <p className="text-sm text-gray-600">Great things are never done by one person; they’re done by a team.</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-lime-400 font-semibold text-black hover:bg-lime-500">
            View All Team
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
