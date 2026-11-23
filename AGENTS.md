# Guía para agentes

## Contexto

Este repositorio contiene el manual de identidad corporativa y sistema de diseño de **iAR**, destinado a equipos internos y proveedores que crean interfaces, documentos y presentaciones. La marca es única: usar `iAR` con descriptores funcionales, sin crear submarcas.

Es un sitio estático en HTML, CSS y JavaScript, sin compilación ni dependencias locales. El manual está en español y los diseños deben admitir textos en español, inglés y francés.

## Dónde mirar

- `PRODUCT.md`: propósito, usuarios y requisitos del producto.
- `brand-brief.md`: posicionamiento y arquitectura de marca.
- `DESIGN.md`: decisiones visuales, componentes y reglas detalladas.
- `index.html`: láminas del manual, ejemplos y enlaces de descarga.
- `css/manual.css`: presentación, adaptación responsive e impresión.
- `js/manual.js`: interacciones y mejoras progresivas.
- `tokens/design-tokens.json`: fuente estructurada de tokens; `tokens/tokens.css`: variables y reglas CSS utilizadas por el manual.
- `assets/logo/`: logotipos e isotipos aprobados.
- `exports/`: recursos descargables, incluidos logotipos, presentaciones y `skills/iar-brand/`; el ZIP de la skill es el descargado por el manual.

## Invariantes

- Mantener la estética de láminas de plano acotado y reutilizar los tokens y componentes existentes. El teal corporativo es `#05677f`.
- Usar los archivos de marca aprobados y sus versiones existentes; no redibujar el logo ni inventar insignias de partners. Identificar con claridad los datos de demostración y no inventar clientes, testimonios ni credenciales.
- Mantener sincronizados los valores relacionados en JSON, CSS, ejemplos y documentación cuando cambien los tokens. Las escalas de color de `js/manual.js` también contienen valores explícitos.
- Preservar el funcionamiento en claro y oscuro, el foco visible, la navegación por teclado, el movimiento reducido y los estados identificables sin depender solo del color. Comprobar el contraste sobre los fondos efectivos.
- Conservar la mejora progresiva: el contenido debe poder leerse sin JavaScript. El tema combina `meta[name="color-scheme"]`, CSS y almacenamiento local; las interacciones incluyen alternativas para navegadores sin soporte nativo.
- No asumir funcionamiento completamente sin red: las fuentes se cargan desde Google Fonts y el polyfill de invokers desde `esm.run`, con fuentes alternativas y fallback de clic.

## Desarrollo y comprobación

Para probar el sitio, servir la raíz y abrir `http://localhost:8000/`:

```sh
python3 -m http.server 8000
```

No hay un runner de pruebas ni un proceso de build configurados. Para cambios de interfaz, comprobar en el navegador la funcionalidad afectada, consola, móvil y escritorio, tema claro/oscuro y teclado; incluir impresión o ausencia de JavaScript cuando corresponda. Para cambios en JavaScript o tokens se pueden ejecutar:

```sh
node --check js/manual.js
python3 -m json.tool tokens/design-tokens.json > /dev/null
```

## Exportaciones

`exports/skills/iar-brand/` contiene copias de `DESIGN.md`, `brand-brief.md`, los tokens y los logos bajo `references/`, `tokens/` y `assets/logo/`, además de su propio `SKILL.md`. Si se modifica alguno de esos recursos y afecta a la skill, actualizar la copia correspondiente y `exports/skills/iar-brand.zip`. Verificar que el ZIP contiene exactamente la carpeta actual y que `unzip -t exports/skills/iar-brand.zip` no informa errores. Revisar también los demás recursos descargables cuando el cambio los afecte.
