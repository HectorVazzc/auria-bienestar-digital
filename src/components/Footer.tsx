import { Link } from "react-router-dom";
import { Instagram, MapPin, Clock, MessageCircle } from "lucide-react";
import logoAuria from "@/assets/logo-auria.png";

const Footer = () => {
  return (
    <footer className="bg-auria-plum text-white/90 pt-16 pb-8" role="contentinfo">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img src={logoAuria} alt="AURIA Pilates Reformer" className="h-16 w-auto brightness-0 invert" />
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Wellness Center | Pilates Reformer. Transforma tu cuerpo, equilibra tu mente.
            </p>
            <a
              href="https://instagram.com/auriapilates"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-white/70 hover:text-auria-lavender-light transition-colors"
              aria-label="Síguenos en Instagram"
            >
              <Instagram size={18} />
              @auriapilates
            </a>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">Navegación</h3>
            <nav className="flex flex-col gap-2" aria-label="Navegación del pie de página">
              <Link to="/" className="text-sm text-white/60 hover:text-white transition-colors">Inicio</Link>
              <Link to="/clases" className="text-sm text-white/60 hover:text-white transition-colors">Clases</Link>
              <Link to="/nosotras" className="text-sm text-white/60 hover:text-white transition-colors">Nosotras</Link>
              <Link to="/horarios" className="text-sm text-white/60 hover:text-white transition-colors">Horarios</Link>
              <Link to="/contacto" className="text-sm text-white/60 hover:text-white transition-colors">Contacto</Link>
            </nav>
          </div>

          {/* Suc Linda Vista */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">Suc. Linda Vista</h3>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Ave. Lindavista 215L7, Lindavista, 67123 Guadalupe, N.L.
              </p>
              <a href="https://wa.me/528122084118" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <MessageCircle size={16} className="shrink-0" />
                81 2208 4118
              </a>
              <p className="flex items-center gap-2">
                <Clock size={16} className="shrink-0" />
                Lun–Vie: 6–12 PM / 4–9 PM
              </p>
            </div>
          </div>

          {/* Suc Contry */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">Suc. Contry La Silla</h3>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                P.º de las Américas 2538, Contry La Silla, 67173 Guadalupe, N.L.
              </p>
              <a href="https://wa.me/528120348679" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <MessageCircle size={16} className="shrink-0" />
                81 2034 8679
              </a>
              <p className="flex items-center gap-2">
                <Clock size={16} className="shrink-0" />
                Lun–Vie: 6–12 PM / 4–9 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40">
          © 2026 AURIA Wellness Center. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
