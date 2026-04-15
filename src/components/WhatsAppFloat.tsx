import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/528122084118?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20clase%20en%20AURIA%20%F0%9F%8C%B8"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Enviar mensaje por WhatsApp"
    >
      <div className="relative">
        <div className="absolute -top-10 right-0 bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¿Te ayudamos?
        </div>
        <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse-glow">
          <MessageCircle size={28} className="text-white" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppFloat;
