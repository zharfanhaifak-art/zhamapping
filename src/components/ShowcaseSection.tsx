import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import showcaseImg from "@/assets/showcase-mapping.jpg";

const ShowcaseSection = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
            <div className="rounded-[2rem] overflow-hidden neon-border border-white/10 relative z-10 shadow-2xl">
              <img
                src={showcaseImg}
                alt="Projection mapping showcase"
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] px-4 py-2 bg-secondary/10 rounded-lg border border-secondary/20">
                Innovation
              </span>
              <h2 className="font-display text-5xl md:text-6xl font-black leading-tight text-white tracking-tighter">
                UNLEASH <span className="text-gradient">VISUAL MAGIC</span> WITH ZHAMAPPING
              </h2>
            </div>
            <p className="text-white/60 text-lg font-medium leading-relaxed">
              From intimate brand activations to city-wide spectacles, our team of artists and engineers deliver
              breathtaking projection experiences. We blend technology with artistry to create moments that leave
              lasting impressions.
            </p>
            <Button className="glass border-white/20 text-white rounded-full px-10 py-7 text-lg font-bold hover:bg-white/10 transition-all hover:scale-105 active:scale-95 shadow-2xl group">
              Explore Our Portfolio <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
