import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = ["About", "Services", "Portfolio", "Pricing", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <a href="#" className="font-display text-2xl font-black tracking-tighter text-gradient hover:scale-105 transition-transform">
          ZHAMAPPING
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[13px] font-bold uppercase tracking-widest text-white/60 hover:text-primary transition-all duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button className="gradient-primary text-black rounded-full px-8 py-5 font-bold shadow-glow hover:scale-105 active:scale-95 transition-all duration-300">
            Get Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white p-2 rounded-xl bg-white/5" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-white/10 px-6 py-8 space-y-6 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-lg font-bold text-white/70 hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <Button className="w-full gradient-primary text-black rounded-full py-6 font-bold text-lg">
            Get Quote
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
