import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://auria-pilates-reformer-clase-prueba.crosshero.site/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnX3EWdnKj9R1eJisdmYg-eX2e7r-UGW4yYEhoTuYtx50mRwm5oE0xqan9EWg_aem_2ArqIo-M79u_GXOa2gZ-bw"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Reservar clase"
    >
      <div className="relative">
        <div className="absolute -top-10 right-0 bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¿Quieres reservar?
        </div>
        <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse-glow">
          <MessageCircle size={28} className="text-white" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppFloat;
