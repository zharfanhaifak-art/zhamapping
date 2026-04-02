import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-mapping.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Projection mapping on building" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-24">
        <div className="max-w-2xl space-y-8 opacity-0 animate-fade-in">
          <span className="inline-block gradient-neon text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg shadow-secondary/20">
            #1 Projection Mapping Studio
          </span>
          <h1 className="font-display text-5xl md:text-8xl font-black leading-[1.0] text-white tracking-tighter">
            Experience The <span className="block italic">Magic Of</span>
            <span className="text-gradient">Wall Mapping</span>
          </h1>
          <p className="text-xl text-white/80 font-medium max-w-lg leading-relaxed">
            Transform any surface into a stunning visual experience. We bring architecture to life with cutting-edge projection technology.
          </p>
          <div className="flex flex-wrap gap-5">
            <Button className="gradient-primary text-black rounded-full px-10 py-7 text-lg font-bold shadow-glow hover:scale-105 active:scale-95 transition-all duration-300">
              Book Project Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="rounded-full px-10 py-7 text-lg font-bold border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
              <Play className="mr-2 h-5 w-5 fill-white" /> See Our Work
            </Button>
          </div>
        </div>

        {/* Floating card */}
        <div className="hidden lg:block absolute right-12 bottom-24 glass rounded-3xl p-6 w-80 animate-float neon-border border-primary/40">
          <div className="size-12 rounded-full gradient-primary mb-4 flex items-center justify-center shadow-lg shadow-primary/20">
             <Play className="h-6 w-6 text-black fill-black" />
          </div>
          <p className="text-white/50 text-xs uppercase font-bold tracking-widest mb-2">Latest Project</p>
          <p className="text-white font-display text-xl font-bold leading-tight">Jakarta Festival of Lights</p>
          <p className="text-primary font-medium text-sm mt-1">Building Mapping • 2025</p>
          <a href="#portfolio" className="text-secondary text-sm font-bold mt-4 inline-flex items-center gap-2 hover:gap-3 transition-all group">
            Know More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
