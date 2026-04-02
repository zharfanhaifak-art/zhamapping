import { Building2, PartyPopper, Hand } from "lucide-react";

const services = [
  { icon: PartyPopper, title: "Event Projection Mapping", desc: "Concerts, weddings, exhibitions — immersive visuals that captivate every audience." },
  { icon: Building2, title: "Building Mapping", desc: "Transform facades into massive canvases with architectural projection at any scale." },
  { icon: Hand, title: "Interactive Mapping", desc: "Motion-responsive projections that react to touch and movement in real time." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14 space-y-3">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all hover:-translate-y-1 group neon-border"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:animate-glow-pulse">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
