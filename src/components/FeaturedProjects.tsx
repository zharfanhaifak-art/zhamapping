import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  { img: project1, name: "Neon Night Festival", location: "Jakarta, Indonesia", rating: 4.9 },
  { img: project2, name: "Azure Gallery Experience", location: "Singapore", rating: 5.0 },
  { img: project3, name: "Heritage Light Show", location: "Bali, Indonesia", rating: 4.8 },
];

const FeaturedProjects = () => {
  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
              Portfolio
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-black tracking-tighter text-white">
              Latest <span className="text-gradient">Masterpieces</span>
            </h2>
            <p className="text-white/50 font-medium">Explore how we redefine architectural boundaries through light and motion.</p>
          </div>
          <div className="flex gap-2">
            <div className="size-12 rounded-2xl glass flex items-center justify-center border-white/10 hover:border-primary/50 transition-colors cursor-pointer group">
              <ArrowLeft className="size-5 text-white/50 group-hover:text-primary transition-colors" />
            </div>
            <div className="size-12 rounded-2xl glass flex items-center justify-center border-white/10 hover:border-primary/50 transition-colors cursor-pointer group">
              <ArrowRight className="size-5 text-white/50 group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="glass-card rounded-[2.5rem] overflow-hidden group hover:-translate-y-2 transition-all duration-500 relative"
            >
              <div className="overflow-hidden aspect-[4/5] relative">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="flex items-center gap-2 mb-2">
                      <div className="px-3 py-1 rounded-full glass border-white/20 text-[10px] font-bold text-white uppercase tracking-widest">
                        {p.location.split(',')[0]}
                      </div>
                      <div className="px-3 py-1 rounded-full bg-primary text-[10px] font-black text-black uppercase tracking-widest flex items-center gap-1">
                        <Star className="size-2.5 fill-black" /> {p.rating}
                      </div>
                   </div>
                   <h3 className="font-display font-black text-2xl text-white tracking-tight leading-tight group-hover:text-primary transition-colors">
                     {p.name}
                   </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
