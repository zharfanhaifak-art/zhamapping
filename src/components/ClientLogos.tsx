const clients = [
  "SAMSUNG", "EPSON", "PANASONIC", "SONY", "LG", "BARCO",
  "SAMSUNG", "EPSON", "PANASONIC", "SONY", "LG", "BARCO",
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-black/40 border-y border-white/5 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-10">
        <p className="text-center text-[10px] text-white/40 font-black uppercase tracking-[0.4em]">
          Working with the World's Best
        </p>
      </div>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex gap-20 animate-scroll-left w-max">
          {clients.concat(clients).map((c, i) => (
            <span
              key={i}
              className="text-4xl md:text-5xl font-display font-black text-white/5 hover:text-primary/40 transition-colors duration-500 whitespace-nowrap select-none cursor-default tracking-tighter"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
