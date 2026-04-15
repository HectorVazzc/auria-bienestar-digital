import { useEffect } from "react";
import { Sparkles, Heart, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";

const BOOKING_URL = "https://auria-pilates-reformer-clase-prueba.crosshero.site/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnX3EWdnKj9R1eJisdmYg-eX2e7r-UGW4yYEhoTuYtx50mRwm5oE0xqan9EWg_aem_2ArqIo-M79u_GXOa2gZ-bw";

const Clases = () => {
  useEffect(() => {
    document.title = "AURIA Wellness Center | Clases | Pilates Reformer en Guadalupe, N.L.";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Descubre nuestras clases de Pilates Reformer y Mat Pilates en AURIA Wellness Center, Guadalupe, N.L. Grupos reducidos, instructoras certificadas y atención personalizada.");
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Nuestras Clases
            </h1>
            <p className="text-lg md:text-xl text-white/85 font-light max-w-2xl mx-auto">
              Cada sesión está diseñada para llevarte a tu mejor versión. Descubre la clase ideal para ti.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pilates Reformer */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="w-16 h-16 rounded-full bg-auria-lavender/20 flex items-center justify-center mb-6">
                <Sparkles className="text-primary" size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Pilates Reformer
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                El Pilates Reformer es la joya de nuestro estudio. Utilizando una máquina especializada con resistencia de resortes, trabajarás fuerza, flexibilidad, alineación y control en cada sesión. Nuestras clases son en grupos reducidos para garantizar atención personalizada y corrección de postura en tiempo real.
              </p>
            </ScrollReveal>
            <div className="space-y-4 mb-10">
              {[
                "Tonifica y alarga tus músculos sin impacto",
                "Mejora tu postura y alineación corporal",
                "Reduce estrés y tensión acumulada",
                "Ideal para todos los niveles, desde principiantes hasta avanzadas",
              ].map((b, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-auria-lavender/5 border border-auria-lavender/10">
                    <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{b}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-semibold">
                  Reserva ahora
                </Button>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Mat Pilates */}
      <section className="py-20 lg:py-28 gradient-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="w-16 h-16 rounded-full bg-auria-teal/20 flex items-center justify-center mb-6">
                <Heart className="text-auria-teal" size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Mat Pilates
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Las clases de Mat Pilates se realizan en tapete y se enfocan en fortalecer tu core, mejorar la flexibilidad y crear conciencia corporal. Es la base perfecta del método Pilates, adaptable a cualquier nivel y con modificaciones para que avances a tu ritmo.
              </p>
            </ScrollReveal>
            <div className="space-y-4 mb-10">
              {[
                "Fortalece tu centro (core) y estabilidad",
                "Mejora la flexibilidad y movilidad articular",
                "Perfecto para complementar tu práctica de Reformer",
                "Sin necesidad de equipo — solo tú y tu cuerpo",
              ].map((b, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-auria-teal/5 border border-auria-teal/10">
                    <CheckCircle2 size={20} className="text-auria-teal mt-0.5 shrink-0" />
                    <span className="text-foreground">{b}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full bg-auria-teal hover:bg-auria-teal/90 text-white px-8 font-semibold">
                  Reserva ahora
                </Button>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Para quién */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Pilates es para todas
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No importa tu edad, condición física o experiencia previa. En AURIA adaptamos cada ejercicio a tu cuerpo y tus necesidades. Nuestras instructoras te guían paso a paso, ofreciendo alternativas para que entrenes de forma segura y efectiva, sin riesgo de lesiones.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* CTA Final */}
      <section className="py-20 lg:py-28 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              ¿Lista para empezar?
            </h2>
            <p className="text-lg text-white/85 mb-10 max-w-xl mx-auto">
              Tu primera clase te espera. Reserva en línea y agenda tu sesión hoy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-auria-plum hover:bg-white/90 rounded-full px-8 font-semibold">
                  Reserva ahora
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Clases;
