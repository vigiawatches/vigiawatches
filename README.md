# VIGIA WATCHES · Web

Web estática hecha solo con **HTML, CSS y JavaScript**. Lista para GitHub Pages.

## Subir a GitHub Pages
1. Crea un repositorio nuevo en GitHub (por ejemplo `vigia-watches`).
2. Sube **todo el contenido de esta carpeta**, de modo que `index.html` quede en la raíz del repositorio.
3. Ve a **Settings → Pages → Branch: `main` / `(root)` → Save**.
4. En 1–2 minutos tu web estará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.
5. Abre `sitemap.xml` y `robots.txt` y reemplaza `TU-USUARIO` y `TU-REPOSITORIO` por los tuyos.

## Páginas
- `index.html` — inicio
- `catalogo.html` — todos los relojes (filtros por marca, estilo, búsqueda y orden)
- `poedagar.html`, `casio.html`, `seiko.html` — una página por marca
- `reloj/…html` — una página propia para cada reloj
- `privacidad.html`, `404.html`

## Cómo editar
- **Precios, textos, fotos y colores:** todo está en `js/products.js`. Para poner un precio cambia `"price": null` por el número, por ejemplo `"price": 45`.
- **Teléfono y correo:** al inicio de `js/products.js` (`STORE`).
- **Agregar un reloj:** copia un bloque en `js/products.js`, cambia su `id`, sube sus fotos a `assets/img/<marca>/` y copia cualquier archivo de la carpeta `reloj/` con el nombre `<id>.html` (cambia `data-id="..."`, el `<title>` y la descripción).
- **Video del inicio:** sube `assets/video/hero.mp4` y quita el comentario del bloque `<video>` en `index.html`.

## Estructura
```
index.html  catalogo.html  poedagar.html  casio.html  seiko.html  privacidad.html  404.html
reloj/          páginas de cada reloj
css/styles.css  estilos
js/products.js  catálogo (lo que editas)
js/app.js       animaciones e interacción
assets/img/     fotos por marca
assets/logo/    logos VIGIA
```
