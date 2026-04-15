import { useEffect } from "react";
import { Clock, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";

const BOOKING_URL = "https://auria-pilates-reformer-clase-prueba.crosshero.site/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnX3EWdnKj9R1eJisdmYg-eX2e7r-UGW4yYEhoTuYtx50mRwm5oE0xqan9EWg_aem_2ArqIo-M79u_GXOa2gZ-bw";
const WHATSAPP_CS = "https://wa.me/528120348679?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20los%20horarios%20disponibles%20%F0%9F%8C%B8";

const Horarios = () => {
  useEffect(() => {
    document.title = "AURIA Wellness Center | Horarios | Pilates Reformer en Guadalupe, N.L.";
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Horarios
            </h1>
            <p className="text-lg md:text-xl text-white/85 font-light max-w-2xl mx-auto">
              Encuentra el horario perfecto para tu rutina. Ofrecemos clases en dos turnos para adaptarnos a tu día.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Horario */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-sm border border-border/50">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">
                  Horario General
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-border/50">
                    <span className="font-semibold text-foreground">Lunes a Viernes</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-auria-lavender/5 border border-auria-lavender/10">
                      <Clock size={20} className="text-primary shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Turno matutino</p>
                        <p className="text-sm text-muted-foreground">6:00 AM – 12:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-auria-coral/5 border border-auria-coral/10">
                      <Clock size={20} className="text-auria-coral shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Turno vespertino</p>
                        <p className="text-sm text-muted-foreground">4:00 PM – 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="font-semibold text-foreground">Sábado y Domingo</span>
                    <span className="text-muted-foreground text-sm">Consultar disponibilidad en línea</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-8 text-center leading-relaxed">
                  Los horarios de clases específicas pueden variar por sucursal. Reserva tu clase en línea para conocer el horario actualizado de tu sucursal.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Sucursales */}
      <section className="py-20 lg:py-28 gradient-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-14">
              Consulta por sucursal
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Suc. Linda Vista", address: "Ave. Lindavista 215L7, Lindavista, 67123 Guadalupe, N.L.", phone: "81 2208 4118", wa: BOOKING_URL },
              { name: "Suc. Contry La Silla", address: "P.º de las Américas 2538, Contry La Silla, 67173 Guadalupe, N.L.", phone: "81 2034 8679", wa: WHATSAPP_CS },
            ].map((loc, i) => (
              <ScrollReveal key={loc.name} delay={i * 150}>
                <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">{loc.name}</h3>
                  <p className="flex items-start gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                    {loc.address}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <MessageCircle size={16} className="shrink-0 text-primary" />
                    {loc.phone}
                  </p>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                      Reserva ahora
                    </Button>
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section className="py-20 lg:py-28 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              ¿No encuentras tu horario ideal?
            </h2>
            <p className="text-lg text-white/85 mb-10 max-w-xl mx-auto">
              Contáctanos y te ayudamos a encontrar la clase perfecta para ti.
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

export default Horarios;
