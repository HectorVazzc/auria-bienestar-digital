import { useEffect } from "react";
import { Flame, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";

const WHATSAPP_LV = "https://wa.me/528122084118?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20clase%20en%20AURIA%20%F0%9F%8C%B8";

const Nosotras = () => {
  useEffect(() => {
    document.title = "AURIA Wellness Center | Nosotras | Pilates Reformer en Guadalupe, N.L.";
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Conoce AURIA
            </h1>
            <p className="text-lg md:text-xl text-white/85 font-light max-w-2xl mx-auto">
              Más que un estudio, somos una comunidad dedicada al bienestar integral.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Nuestra Historia
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AURIA Wellness Center nació de la pasión por el movimiento consciente y el bienestar integral. Creamos un espacio donde cada mujer puede reconectar con su cuerpo, encontrar equilibrio y sentirse fuerte desde adentro. Nuestro nombre, AURIA, evoca luz y energía dorada — porque creemos que cada persona lleva dentro un brillo único que merece ser cultivado.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Filosofía */}
      <section className="py-20 lg:py-28 gradient-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Nuestra Filosofía
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En AURIA creemos que el bienestar va más allá del ejercicio. Es una forma de vida. Por eso nuestras clases no solo transforman tu cuerpo, sino que nutren tu mente y elevan tu energía. Cada sesión es una experiencia: desde el ambiente, la música, hasta la atención personalizada de nuestras instructoras.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Flame, title: "Cuerpo", desc: "Fuerza, flexibilidad y alineación a través del movimiento controlado." },
              { icon: Brain, title: "Mente", desc: "Enfoque, calma y presencia en cada respiración." },
              { icon: Zap, title: "Energía", desc: "Vitalidad y equilibrio que llevas contigo más allá del estudio." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 150}>
                <div className="bg-card rounded-2xl p-8 text-center shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 mx-auto rounded-full bg-auria-lavender/15 flex items-center justify-center mb-5">
                    <item.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Espacio */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Un espacio diseñado para ti
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestros estudios en Guadalupe, N.L. están diseñados para ofrecerte una experiencia premium. Vistas hermosas, iluminación cálida, equipos de primera calidad y un ambiente que te invita a desconectarte del mundo y conectar contigo misma.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section className="py-20 lg:py-28 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Vive la experiencia AURIA
            </h2>
            <p className="text-lg text-white/85 mb-10">
              Tu transformación comienza con una clase.
            </p>
            <a href={WHATSAPP_LV} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-auria-plum hover:bg-white/90 rounded-full px-8 font-semibold shadow-lg">
                Agenda tu primera clase
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Nosotras;
