import { MessageSquare, Palette, Zap } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "We discuss your vision, venue, and goals to craft the perfect mapping concept." },
  { icon: Palette, title: "Design & Simulation", desc: "Our artists create a 3D simulation so you see exactly how the final result will look.", highlighted: true },
  { icon: Zap, title: "Execution", desc: "State-of-the-art projectors bring the design to life — on time, on budget, on point." },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14 space-y-3">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Process</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            How It <span className="text-gradient">Works</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className={`relative rounded-2xl p-8 text-center space-y-4 transition-transform hover:-translate-y-2 ${
                  s.highlighted
                    ? "gradient-primary text-primary-foreground shadow-glow"
                    : "bg-background shadow-card"
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-widest opacity-50">Step {i + 1}</span>
                <div className={`mx-auto w-14 h-14 rounded-xl flex items-center justify-center ${s.highlighted ? "bg-primary-foreground/20" : "gradient-primary"}`}>
                  <Icon className={`h-6 w-6 ${s.highlighted ? "text-primary-foreground" : "text-primary-foreground"}`} />
                </div>
                <h3 className="font-display font-semibold text-xl">{s.title}</h3>
                <p className={`text-sm leading-relaxed ${s.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
