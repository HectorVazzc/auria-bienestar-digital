import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/528120348679"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chatear por WhatsApp"
    >
      <div className="relative">
        <div className="absolute -top-10 right-0 bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¿Tienes dudas? Escríbenos
        </div>
        <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse-glow">
          <MessageCircle size={28} className="text-white" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppFloat;
