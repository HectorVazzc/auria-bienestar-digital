

# AURIA Wellness Center — Plan de Implementación

## Resumen
Sitio web completo de 5 páginas para AURIA Wellness Center, un estudio boutique de Pilates Reformer en Guadalupe, N.L. Todo el contenido en español mexicano, diseño de lujo suave con gradientes lavanda/rosa/coral.

## Diseño y Marca
- **Paleta**: Lavanda (#C3A6D8), Rosa (#F2C6C2), Coral (#F4A896), Teal (#7EC8C8), Crema (#FDF8F5), Ciruela (#4A2D4F)
- **Tipografía**: Playfair Display (títulos), Montserrat (cuerpo)
- **Estilo**: Gradientes suaves, animaciones shimmer, espaciado generoso, estética editorial premium
- **CSS variables** actualizadas en index.css para reflejar la paleta AURIA

## Estructura de Páginas

### 1. Inicio (Home)
Hero con gradiente lavanda→rosa, headline serif grande, CTAs a WhatsApp. Secciones: intro AURIA, preview de clases (cards), ¿Por qué AURIA? (4 bloques con iconos), testimonios (5 estrellas Google), ubicaciones (2 cards), CTA Instagram, footer completo.

### 2. Clases / Servicios
Hero gradiente, secciones detalladas de Pilates Reformer y Mat Pilates con beneficios en formato elegante (sin bullets), sección inclusiva "Pilates es para todas", CTA final con WhatsApp de ambas sucursales.

### 3. Nosotras (About)
Historia de AURIA, filosofía con 3 pilares (Cuerpo/Mente/Energía) como cards, descripción del espacio, CTA final. Incluir Google Business Profile description.

### 4. Horarios
Tabla/visual elegante de horarios (L-V turnos matutino y vespertino), cards por sucursal con WhatsApp para consultar horarios específicos, CTA final.

### 5. Contacto
Formulario minimalista (nombre, email, teléfono, sucursal dropdown, mensaje), cards de contacto por sucursal, mapas de Google embebidos, enlace Instagram.

## Componentes Globales
- **Navbar**: Navegación con links (Inicio, Clases, Nosotras, Horarios, Contacto) + botón CTA "Agenda tu clase"
- **Footer**: Logo, ubicaciones, horarios, redes, copyright 2026
- **WhatsApp flotante**: Botón fijo bottom-right con tooltip "¿Te ayudamos?"
- **Preloader**: Animación shimmer/gradiente con texto "AURIA"
- **Scroll animations**: Fade-in en secciones al hacer scroll

## SEO y Accesibilidad
- Meta descriptions en español por página
- Títulos: "AURIA Wellness Center | [Página] | Pilates Reformer en Guadalupe, N.L."
- Alt text y aria-labels en español
- Favicon: letra "A" serif con gradiente

## Técnico
- React Router para 5 rutas
- Tailwind con custom colors AURIA
- Google Fonts: Playfair Display + Montserrat
- Intersection Observer para animaciones scroll
- Mobile-first, totalmente responsivo

