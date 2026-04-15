import { useEffect } from "react";
import { Star, Users, Award, Sparkles, Heart, MapPin, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";
import Sparkle from "@/components/Sparkle";
import MagazineCutout from "@/components/MagazineCutout";

import cutoutReformer from "@/assets/cutout-reformer.png";
import cutoutMeditation from "@/assets/cutout-meditation.png";
import cutoutMachine from "@/assets/cutout-machine.png";
import cutoutMat from "@/assets/cutout-mat.png";
import cutoutCommunity from "@/assets/cutout-community.png";
import cutoutLifestyle from "@/assets/cutout-lifestyle.png";

const WHATSAPP_LV = "https://wa.me/528122084118?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20clase%20en%20AURIA%20%F0%9F%8C%B8";
const WHATSAPP_CS = "https://wa.me/528120348679?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20clase%20en%20AURIA%20%F0%9F%8C%B8";

const Index = () => {
  useEffect(() => {
    document.title = "AURIA Wellness Center | Inicio | Pilates Reformer en Guadalupe, N.L.";
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden" aria-label="Sección principal">
        <div className="absolute inset-0 gradient-hero-flash pointer-events-none" />
        
        <Sparkle size={90} color="rgba(255,255,255,0.35)" className="absolute top-28 left-[10%] animate-pulse" />
        <Sparkle size={55} color="rgba(255,255,255,0.3)" className="absolute top-40 right-[15%] animate-pulse [animation-delay:1s]" />
        <Sparkle size={40} color="rgba(244,168,150,0.5)" className="absolute bottom-32 left-[20%] animate-pulse [animation-delay:0.5s]" />
        <Sparkle size={70} color="rgba(195,166,216,0.45)" className="absolute bottom-40 right-[8%] animate-pulse [animation-delay:1.5s]" />
        <Sparkle size={30} color="rgba(255,255,255,0.25)" className="absolute top-[60%] left-[5%] animate-pulse [animation-delay:2s]" />

        {/* Hero cutout */}
        <div className="absolute bottom-10 right-[5%] hidden lg:block pointer-events-none z-[1]">
          <ScrollReveal delay={600}>
            <MagazineCutout src={cutoutReformer} alt="Pilates Reformer" className="w-56 xl:w-64" rotation={3} />
          </ScrollReveal>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
                Transforma tu cuerpo, equilibra tu mente
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg md:text-xl text-white/85 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                En AURIA vivimos el bienestar como un estilo de vida. Descubre el poder del Pilates Reformer en un espacio diseñado para ti.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={WHATSAPP_LV} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-auria-plum hover:bg-white/90 rounded-full px-8 text-base font-semibold shadow-lg">
                    Agenda tu clase
                  </Button>
                </a>
                <a href="#clases">
                  <Button size="lg" className="bg-auria-plum text-white hover:bg-auria-plum/85 rounded-full px-8 text-base font-semibold shadow-lg border-0">
                    Conoce nuestras clases
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-auria-teal/10 blur-3xl" />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-auria-coral/10 blur-3xl" />
      </section>

      {/* Intro */}
      <section className="relative py-20 lg:py-28 bg-background overflow-hidden">
        <Sparkle size={75} color="hsla(280, 50%, 75%, 0.35)" className="absolute top-12 right-[10%] animate-pulse [animation-delay:0.3s]" />
        <Sparkle size={45} color="hsla(12, 85%, 72%, 0.3)" className="absolute bottom-16 left-[8%] animate-pulse [animation-delay:1.2s]" />
        
        {/* Intro cutout */}
        <div className="absolute -bottom-4 left-[3%] hidden md:block pointer-events-none">
          <ScrollReveal delay={300}>
            <MagazineCutout src={cutoutMeditation} alt="Meditación y bienestar" className="w-40 lg:w-48" rotation={-4} />
          </ScrollReveal>
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                Wellness más allá del fitness
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AURIA Wellness Center es un estudio boutique de Pilates Reformer en Guadalupe, N.L. Nuestras clases combinan fuerza, flexibilidad y control en un ambiente cálido, moderno y exclusivo. Aquí no solo entrenas, te transformas.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Clases Preview */}
      <section id="clases" className="relative py-20 lg:py-28 gradient-soft overflow-hidden">
        <Sparkle size={65} color="hsla(280, 50%, 75%, 0.4)" className="absolute top-20 left-[5%] animate-pulse [animation-delay:0.7s]" />
        <Sparkle size={80} color="hsla(175, 50%, 60%, 0.3)" className="absolute bottom-24 right-[6%] animate-pulse [animation-delay:1.8s]" />
        
        {/* Clases cutout */}
        <div className="absolute top-10 right-[2%] hidden lg:block pointer-events-none">
          <ScrollReveal delay={400}>
            <MagazineCutout src={cutoutMachine} alt="Cama de Pilates Reformer" className="w-48 xl:w-56" rotation={5} />
          </ScrollReveal>
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-14">
              Nuestras Clases
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={100}>
              <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border/50">
                <div className="w-14 h-14 rounded-full bg-auria-lavender/20 flex items-center justify-center mb-6">
                  <Sparkles className="text-auria-lavender" size={24} />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Pilates Reformer</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Fortalece, alarga y tonifica tu cuerpo con la máquina reformer. Clases guiadas en grupos reducidos para una atención personalizada.
                </p>
                <a href={WHATSAPP_LV} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Reserva por WhatsApp
                  </Button>
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border/50">
                <div className="w-14 h-14 rounded-full bg-auria-teal/20 flex items-center justify-center mb-6">
                  <Heart className="text-auria-teal" size={24} />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Mat Pilates</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Conecta con tu cuerpo a través de ejercicios en tapete que mejoran tu postura, flexibilidad y fuerza desde la base.
                </p>
                <a href={WHATSAPP_LV} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Reserva por WhatsApp
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Por qué AURIA */}
      <section className="relative py-20 lg:py-28 bg-background overflow-hidden">
        <Sparkle size={55} color="hsla(280, 50%, 75%, 0.35)" className="absolute top-16 right-[12%] animate-pulse [animation-delay:0.4s]" />
        <Sparkle size={40} color="hsla(340, 65%, 75%, 0.35)" className="absolute bottom-20 left-[15%] animate-pulse [animation-delay:2.2s]" />
        
        {/* Por qué cutout */}
        <div className="absolute bottom-6 right-[3%] hidden lg:block pointer-events-none">
          <ScrollReveal delay={300}>
            <MagazineCutout src={cutoutMat} alt="Mujer haciendo stretching" className="w-44 xl:w-52" rotation={-3} />
          </ScrollReveal>
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-14">
              ¿Por qué AURIA?
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Users, title: "Grupos reducidos", desc: "Atención personalizada en cada clase para que logres tu mejor forma." },
              { icon: Award, title: "Instructoras certificadas", desc: "Nuestras maestras se aseguran de que cada movimiento sea seguro y efectivo." },
              { icon: Sparkles, title: "Ambiente exclusivo", desc: "Un espacio diseñado para que te sientas en calma, con vistas hermosas y un ambiente acogedor." },
              { icon: Heart, title: "Adaptado a ti", desc: "Alternativas y modificaciones en cada ejercicio para todos los niveles." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-auria-lavender/15 flex items-center justify-center mb-5">
                    <item.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Testimonios */}
      <section className="relative py-20 lg:py-28 gradient-soft overflow-hidden">
        <Sparkle size={70} color="hsla(48, 90%, 65%, 0.35)" className="absolute top-14 left-[8%] animate-pulse [animation-delay:0.6s]" />
        <Sparkle size={50} color="hsla(280, 50%, 75%, 0.3)" className="absolute bottom-20 right-[10%] animate-pulse [animation-delay:1.4s]" />

        {/* Testimonios cutout */}
        <div className="absolute top-8 left-[2%] hidden lg:block pointer-events-none">
          <ScrollReveal delay={400}>
            <MagazineCutout src={cutoutCommunity} alt="Comunidad AURIA" className="w-48 xl:w-56" rotation={-5} />
          </ScrollReveal>
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
                Lo que dicen nuestras alumnas
              </h2>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg font-semibold text-foreground mb-2">5.0 en Google</p>
              <blockquote className="text-muted-foreground leading-relaxed italic text-lg mt-6 mb-4">
                "Un lugar muy bonito para entrenar con vistas hermosas. Las clases están super buenas y bien adaptadas. La maestra siempre trata de que hagas bien los ejercicios sin lesionarte y da alternativas para que los hagas. Sin duda es un excelente lugar :)"
              </blockquote>
              <p className="text-sm font-semibold text-foreground">— Karen Juárez</p>
              <p className="text-xs text-muted-foreground mt-1">Reseña verificada en Google</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Ubicaciones */}
      <section className="relative py-20 lg:py-28 bg-background overflow-hidden">
        <Sparkle size={60} color="hsla(175, 50%, 60%, 0.35)" className="absolute top-10 left-[12%] animate-pulse [animation-delay:0.9s]" />
        <Sparkle size={45} color="hsla(12, 85%, 68%, 0.3)" className="absolute bottom-14 right-[14%] animate-pulse [animation-delay:1.7s]" />

        {/* Ubicaciones cutout */}
        <div className="absolute bottom-8 left-[2%] hidden lg:block pointer-events-none">
          <ScrollReveal delay={300}>
            <MagazineCutout src={cutoutLifestyle} alt="Estilo de vida wellness" className="w-40 xl:w-48" rotation={4} />
          </ScrollReveal>
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-14">
              Encuéntranos
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Suc. Linda Vista",
                address: "Ave. Lindavista 215L7, Lindavista, Linda Vista, 67123 Guadalupe, N.L., México",
                phone: "81 2208 4118",
                wa: WHATSAPP_LV,
              },
              {
                name: "Suc. Contry La Silla",
                address: "P.º de las Américas 2538, Contry La Silla 1er Sector, 67173 Guadalupe, N.L., México",
                phone: "81 2034 8679",
                wa: WHATSAPP_CS,
              },
            ].map((loc, i) => (
              <ScrollReveal key={loc.name} delay={i * 150}>
                <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">{loc.name}</h3>
                  <p className="flex items-start gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                    {loc.address}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <MessageCircle size={16} className="shrink-0 text-primary" />
                    {loc.phone}
                  </p>
                  <a href={loc.wa} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                      Enviar WhatsApp
                    </Button>
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Instagram */}
      <section className="relative py-20 lg:py-28 gradient-teal overflow-hidden">
        <Sparkle size={75} color="rgba(255,255,255,0.3)" className="absolute top-16 right-[8%] animate-pulse [animation-delay:0.5s]" />
        <Sparkle size={50} color="rgba(255,255,255,0.2)" className="absolute bottom-20 left-[10%] animate-pulse [animation-delay:1.3s]" />
        <Sparkle size={35} color="rgba(255,255,255,0.25)" className="absolute top-[50%] left-[3%] animate-pulse [animation-delay:2s]" />
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <Instagram className="mx-auto mb-6 text-white" size={40} />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Síguenos en Instagram
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Únete a nuestra comunidad y descubre el estilo de vida AURIA.
              </p>
              <a href="https://instagram.com/auriapilates" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-auria-plum hover:bg-white/90 rounded-full px-8 font-semibold">
                  Seguir @auriapilates
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
