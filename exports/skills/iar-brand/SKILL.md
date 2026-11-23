---
name: iAR Brand
description: Manual de identidad corporativa y sistema de diseño de iAR (Industrial Augmented Reality S.L.). Usar cuando se cree o modifique cualquier material de marca iAR: aplicaciones web/móvil, dashboards, presentaciones, documentos, landings, emails o componentes UI. Incluye tokens, logos, tipografía, color, reglas de uso y recursos clave.
---

# iAR Brand Skill

Guía operativa para aplicar la identidad corporativa de **iAR (Industrial Augmented Reality S.L.)** en cualquier proyecto nuevo.

## Cuándo usar esta skill

- Diseñar o implementar UI para productos iAR (web, móvil, industrial, dashboards).
- Crear presentaciones, documentos comerciales, plantillas o materiales de comunicación.
- Generar assets visuales que deban respetar la marca iAR.
- Revisar coherencia de marca en un proyecto existente.

## Principios de marca

- **Marca única**: todo se comunica bajo `iAR`. No crear submarcas, logos alternativos ni identidades por producto/área.
- **Descriptor funcional**: acompañar `iAR` con un descriptor claro de función cuando haga falta (ej. “iAR · Gestión de operaciones”).
- **Tono visual**: precisión industrial + calma de software. Limpio, técnico, claro, accesible.
- **Contenido demo**: usar datos sintéticos y etiquetarlos como tales (“datos de demostración”). No fabricar clientes, métricas, testimonios ni badges de partners.
- **Partner badges**: usar solo arte oficial de partners; si no está disponible, dejar placeholder etiquetado. Nunca inventar badges.

## Recursos incluidos

Rutas relativas a este directorio de skill:

- `references/DESIGN.md` — sistema de diseño completo (fuente detallada).
- `references/brand-brief.md` — brief de marca y posicionamiento.
- `tokens/tokens.css` — tokens CSS (claro/oscuro, semánticos).
- `tokens/design-tokens.json` — tokens estructurados.
- `assets/logo/iar-logo.svg` — logotipo completo principal (aprobado).
- `assets/logo/iar-logo-negative.svg` — logotipo completo negativo.
- `assets/logo/iar-logo-mono-ink.svg` — logotipo monocromo tinta.
- `assets/logo/iar-isotipo.svg` — isotipo (favicon/app/icono compacto).
- `assets/logo/iar-isotipo-negative.svg` — isotipo negativo.
- `assets/logo/iar-logo.png` — raster de referencia.

> Usar los SVG aprobados tal cual: **recolorear o recortar solo dentro de las versiones permitidas**. Nunca redibujar.

## Logotipo

### Versiones permitidas
| Versión | Archivo | Uso |
|---|---|---|
| Principal | `assets/logo/iar-logo.svg` | Fondos claros/neutros, documentos, covers |
| Negativo | `assets/logo/iar-logo-negative.svg` | Fondos oscuros/teal, covers oscuras |
| Monocromo tinta | `assets/logo/iar-logo-mono-ink.svg` | Impresión/uso monocromo |
| Isotipo | `assets/logo/iar-isotipo.svg` | Favicon, app icon, espacios pequeños |
| Isotipo negativo | `assets/logo/iar-isotipo-negative.svg` | Isotipo sobre fondo oscuro |

### Reglas
- **Área de respeto**: 1x en todos los lados, donde `x = altura del anillo` del isotipo (40.53u en el SVG original).
- **Tamaño mínimo**: logo completo 96px digital / 24mm impresión. Por debajo, usar isotipo (24px / 6mm).
- **No hacer**: estirar, rotar, añadir sombras/bisel/efectos, recolorear fuera de versiones aprobadas, colocar sobre fondos con bajo contraste.
- **La cruz sola no se usa** como versión de marca/logo independiente.

## Color

### Tokens clave (modo claro / oscuro)

| Rol | Claro | Oscuro | Uso |
|---|---|---|---|
| Primary | `#05677F` | `#4CC3DD` | Acción principal, links, foco, marca |
| On primary | `#FFFFFF` | `#06222C` | Texto sobre primary |
| Primary hover | `#04566B` | `#6FD0E4` | Hover de botones primarios |
| Primary tint | `#EEF6F8` | `#10303C` | Fondos suaves, selección, info |
| Accent | `#22C0B4` | `#22C0B4` (solid) | IA, datos, tiempo real, highlights |
| Complement | `#D96B27` | `#D96B27` (solid) | Comparativas, hitos, callouts puntuales |
| BG | `#F6F7F7` | `#0C1A20` | Fondo base |
| Surface | `#FFFFFF` | `#10242D` | Tarjetas/paneles |
| Sunken | `#EEF2F3` | `#0A161C` | Fondos hundidos/áreas secundarias |
| Text | `#0E1B20` | `#E8F1F4` | Texto principal |
| Text secondary | `#33474F` | `#A9C0C8` | Texto secundario |
| Text muted | `#5B6D73` | `#7FA2AE` | Captions/hints |
| Border | `#75909A` | `#5B7684` | Bordes funcionales (inputs, controles) |
| Line | `#D3DDE0` | `#24404C` | Líneas decorativas/separadores |

### Semánticos (sólidos invariantes)
- **Success**: `#1A7F4E` / on `#FFFFFF`
- **Warning**: `#E8A013` / on `#0E1B20` (el warning usa texto oscuro)
- **Error**: `#B3261E` / on `#FFFFFF`
- **Info**: usa el par primary

### Reglas de color
- Usar tokens semánticos (`--color-*`), no hex hardcodeados dependientes de modo.
- `--color-border` para controles/estados; `--color-line` solo decorativo.
- No cambiar sólidos semánticos entre claro/oscuro.
- El estado nunca se comunica solo por color: añadir icono/texto.

## Tipografía

| Rol | Familia | Pesos | Uso |
|---|---|---|---|
| Display/Headings | **Sora** | 600/700/800 | Títulos, titulares, KPI destacados |
| Body/UI | **Source Sans 3** | 400/600 (+italic 400) | Texto, UI, formularios, botones |
| Mono técnico | **IBM Plex Mono** | 400/500 | Código, tokens, cotas, datos técnicos, folios |

### Reglas tipográficas
- **Mono solo para lo técnico**: datos, código, tokens, medidas, folios. No como textura decorativa.
- **Números tabulares** en tablas/KPIs/cifras: `font-variant-numeric: tabular-nums`.
- **Columna de lectura**: máx. ~68ch.
- Evitar mayúsculas sostenidas en frases; solo en etiquetas cortas con tracking.
- No usar Sora para párrafos largos.

## Componentes UI (patrones base)

- **Botón primario**: fondo primary, texto on-primary, radius 4px, padding ~9x18.
- **Botón secundario**: surface + borde funcional + texto principal.
- **Botón ghost**: transparente, texto primary, hover tint.
- **Inputs**: surface, borde `--color-border`, radius 4px, label visible, foco claro.
- **Badges/estados**: sólido semántico + icono + texto.
- **Alertas**: tint semántico, borde suave, icono, título + descripción.
- **Tablas**: cabecera clara, números tabulares, hover suave, responsive.
- **Cards/KPIs**: jerarquía clara, valor destacado, contexto/unidad.

## Layout y accesibilidad

- Fondo base/surface/sunken para profundidad; sombras solo cuando algo flota realmente.
- Radio contenido: 4px en controles, 8px en contenedores, pill solo badges/chips/switch.
- Foco visible siempre (2px, color focus, offset).
- Contraste AA mínimo; estados no solo por color.
- Respetar `prefers-reduced-motion`.
- Diseñar para ES/EN/FR: evitar anchos fijos que rompan etiquetas largas.

## Presentaciones / documentos

- Mantener jerarquía clara: una idea por slide, poco texto, figuras con unidades.
- Portada/cierre pueden usar campo teal con logo negativo.
- Slides internas: surface con regla/acento teal, tipografía Sora/Source Sans 3.
- Etiquetar cifras como sintéticas cuando sean demo.

## Do / Don't rápido

### Do
- Usar tokens de `tokens/tokens.css`.
- Usar logo/isotipo aprobado según tamaño y fondo.
- Mantener marca única iAR.
- Añadir icono+texto en estados.
- Usar tabular-nums en datos.

### Don't
- No crear submarcas o logos de producto.
- No usar la cruz sola como logo.
- No redibujar/deformar/efectuar el logo.
- No usar `--color-line` como borde de input/foco.
- No usar mono como decoración.
- No fabricar datos/clientes/badges.

## Checklist antes de entregar

- [ ] Usa solo marca `iAR` y logos aprobados.
- [ ] Colores y tipografía salen de tokens/reglas.
- [ ] Contraste y foco visibles.
- [ ] Estados con icono/texto, no solo color.
- [ ] Datos demo etiquetados como sintéticos.
- [ ] Funciona en claro/oscuro si aplica.
- [ ] Etiquetas soportan ES/EN/FR sin romper layout.
