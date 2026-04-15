import { useEffect, useState } from "react";
import { MapPin, MessageCircle, Clock, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";
import { useToast } from "@/hooks/use-toast";

const BOOKING_URL = "https://auria-pilates-reformer-clase-prueba.crosshero.site/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnX3EWdnKj9R1eJisdmYg-eX2e7r-UGW4yYEhoTuYtx50mRwm5oE0xqan9EWg_aem_2ArqIo-M79u_GXOa2gZ-bw";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ nombre: "", email: "", telefono: "", sucursal: "", mensaje: "" });

  useEffect(() => {
    document.title = "AURIA Wellness Center | Contacto | Pilates Reformer en Guadalupe, N.L.";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Contacta a AURIA Wellness Center en Guadalupe, N.L. Dos sucursales: Linda Vista y Contry La Silla. Reserva tu clase de Pilates en línea. ¡Te esperamos!");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "¡Mensaje enviado!", description: "Te contactaremos pronto. También puedes reservar tu clase en línea para una respuesta más rápida." });
    setFormData({ nombre: "", email: "", telefono: "", sucursal: "", mensaje: "" });
  };

  const locations = [
    {
      name: "Suc. Linda Vista",
      address: "Ave. Lindavista 215L7, Lindavista, Linda Vista, 67123 Guadalupe, N.L.",
      phone: "81 2208 4118",
      wa: "https://auria-pilates-reformer-clase-prueba.crosshero.site/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnX3EWdnKj9R1eJisdmYg-eX2e7r-UGW4yYEhoTuYtx50mRwm5oE0xqan9EWg_aem_2ArqIo-M79u_GXOa2gZ-bw",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.0!2d-100.25!3d25.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQwJzQ4LjAiTiAxMDDCsDE1JzAwLjAiVw!5e0!3m2!1ses!2smx!4v1",
    },
    {
      name: "Suc. Contry La Silla",
      address: "P.º de las Américas 2538, Contry La Silla 1er Sector, 67173 Guadalupe, N.L.",
      phone: "81 2034 8679",
      wa: "https://auria-pilates-reformer-clase-prueba.crosshero.site/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnX3EWdnKj9R1eJisdmYg-eX2e7r-UGW4yYEhoTuYtx50mRwm5oE0xqan9EWg_aem_2ArqIo-M79u_GXOa2gZ-bw",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.0!2d-100.24!3d25.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM5JzAwLjAiTiAxMDDCsDE0JzI0LjAiVw!5e0!3m2!1ses!2smx!4v1",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Contáctanos
            </h1>
            <p className="text-lg md:text-xl text-white/85 font-light max-w-2xl mx-auto">
              Estamos para ayudarte. Reserva tu clase en línea o visítanos en cualquiera de nuestras sucursales.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">
                Envíanos un mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nombre" className="text-sm font-medium text-foreground mb-1.5 block">Nombre</label>
                  <Input id="nombre" placeholder="Tu nombre completo" required value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} className="rounded-xl" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">Correo electrónico</label>
                  <Input id="email" type="email" placeholder="tu@correo.com" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="rounded-xl" />
                </div>
                <div>
                  <label htmlFor="telefono" className="text-sm font-medium text-foreground mb-1.5 block">Teléfono</label>
                  <Input id="telefono" type="tel" placeholder="81 1234 5678" value={formData.telefono} onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} className="rounded-xl" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Sucursal de interés</label>
                  <Select value={formData.sucursal} onValueChange={(v) => setFormData({ ...formData, sucursal: v })}>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Selecciona una sucursal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="linda-vista">Linda Vista</SelectItem>
                      <SelectItem value="contry-la-silla">Contry La Silla</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="mensaje" className="text-sm font-medium text-foreground mb-1.5 block">Mensaje</label>
                  <Textarea id="mensaje" placeholder="¿En qué podemos ayudarte?" rows={4} required value={formData.mensaje} onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })} className="rounded-xl" />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  <Send size={18} />
                  Enviar mensaje
                </Button>
              </form>
              <p className="text-sm text-muted-foreground text-center mt-4">
                También puedes escribirnos directamente por WhatsApp para una respuesta más rápida.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Location Cards */}
      <section className="py-20 lg:py-28 gradient-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-14">
              Nuestras Sucursales
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((loc, i) => (
              <ScrollReveal key={loc.name} delay={i * 150}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50">
                  <div className="h-48">
                    <iframe
                      src={loc.map}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Mapa de ${loc.name}`}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-4">{loc.name}</h3>
                    <div className="space-y-2 mb-6">
                      <p className="flex items-start gap-2 text-sm text-muted-foreground">
                        <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                        {loc.address}
                      </p>
                      <p className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MessageCircle size={16} className="shrink-0 text-primary" />
                        {loc.phone}
                      </p>
                      <p className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock size={16} className="shrink-0 text-primary" />
                        Lun–Vie: 6:00 AM – 12:00 PM / 4:00 PM – 9:00 PM
                      </p>
                    </div>
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                        Reserva ahora
                      </Button>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Instagram */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <a
              href="https://instagram.com/auriapilates"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={24} />
              <span className="text-lg font-medium">Síguenos en Instagram: @auriapilates</span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contacto;
