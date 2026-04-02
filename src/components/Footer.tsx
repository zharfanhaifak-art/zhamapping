import { Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white/50 pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <span className="font-display text-2xl font-black text-gradient">ZHAMAPPING</span>
            <p className="text-sm leading-relaxed font-medium">
              Indonesia's premier projection mapping studio. Turning surfaces into spectacles since 2018.
            </p>
            <div className="flex gap-4">
              {[Instagram, Youtube, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-2xl glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300 border-white/5 hover:border-primary/50">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              {["About Us", "Services", "Portfolio", "Pricing", "Contact"].map((l) => (
                <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              {["Event Mapping", "Building Mapping", "Interactive Mapping", "3D Simulation"].map((l) => (
                <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> zharfanhaifak@gmail.com</li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> +62 815 722 94605</li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
          <span>© 2025 ZHAMAPPING. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
