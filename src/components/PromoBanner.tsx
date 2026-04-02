import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const PromoBanner = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="gradient-neon rounded-[3rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden shadow-2xl shadow-secondary/20">
          {/* Decorative glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-white/20 blur-[100px] animate-pulse" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-black/20 blur-[100px] animate-pulse" />

          <div className="size-16 rounded-2xl bg-black/10 backdrop-blur-md mx-auto flex items-center justify-center border border-white/10">
            <Sparkles className="h-8 w-8 text-black" />
          </div>
          <h2 className="font-display text-4xl md:text-7xl font-black text-black tracking-tighter relative z-10 leading-tight">
            20% OFF FOR YOUR <br/> <span className="opacity-60">FIRST PROJECT</span>
          </h2>
          <p className="text-black/60 text-lg font-bold max-w-lg mx-auto relative z-10">
            Book before the end of this month and get an exclusive discount on any wall mapping service.
          </p>
          <Button className="bg-black text-white rounded-full px-12 py-8 text-lg font-black hover:bg-black/80 shadow-2xl transition-all hover:scale-105 active:scale-95 relative z-10 uppercase tracking-widest">
            Claim Discount Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
