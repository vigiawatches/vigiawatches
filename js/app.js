/* =========================================================
   VIGIA WATCHES · interacción y animaciones
   (Los datos de los relojes están en js/products.js)
   ========================================================= */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const body = document.body;
  const ROOT = body.dataset.root || "";
  const IMG = (p) => ROOT + "assets/img/" + p;
  const URLP = (p, color) => ROOT + "reloj/" + p.id + ".html" + (color ? "?color=" + slug(color) : "");
  const esc = (s) => String(s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const slug = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const wa = (t) => "https://wa.me/" + STORE.phone + "?text=" + encodeURIComponent(t);
  const buyMsg = (p, color) => "ESTOY INTERESADO EN COMPRAR EL RELOJ " + p.name + " color " + color;
  const GENERAL = "Hola VIGIA WATCHES, quiero información sobre sus relojes";
  const priceHTML = (p) => (p.price ? `<p class="price">$${esc(p.price)}</p>` : `<p class="price ask">Consulta el precio por WhatsApp</p>`);
  const finePointer = matchMedia("(hover:hover) and (pointer:fine)").matches;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const WA_ICON = '<svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M16 3a13 13 0 0 0-11 19.8L3 29l6.4-2A13 13 0 1 0 16 3Zm-4 7.6c-.3 0-.7.1-1 .5-.4.4-1.3 1.2-1.3 3s1.4 3.5 1.6 3.8c.2.2 2.6 4.1 6.4 5.6 3.2 1.2 3.8 1 4.5.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5l-2.6-1.2c-.3-.1-.6-.2-.9.2l-1.1 1.4c-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.6l-1.2-2.8c-.3-.7-.6-.7-.9-.7Z"/></svg>';

  /* ---------- utilidades generales ---------- */
  function toast(msg) {
    const t = $("#toast"); if (!t) return;
    t.textContent = msg; t.classList.add("on");
    clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("on"), 2000);
  }
  function store(k, v) { try { if (v === undefined) return sessionStorage.getItem(k); sessionStorage.setItem(k, v); } catch (e) { return null; } }

  // Loader: se muestra solo la primera vez por sesión
  if (store("vigia-v") || reduce) { body.classList.add("no-loader", "loaded"); }
  else {
    const done = () => { body.classList.add("loaded"); store("vigia-v", "1"); };
    window.addEventListener("load", () => setTimeout(done, 350));
    setTimeout(done, 2200);
  }

  // Enlaces generales de WhatsApp y año
  $$("[data-wa]").forEach((a) => { if (!a.dataset.waSet) a.href = wa(GENERAL); });
  $$("[data-year]").forEach((e) => (e.textContent = new Date().getFullYear()));

  // Texto dividido en palabras para la animación de entrada
  $$(".split").forEach((el) => {
    let i = 0;
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((w) => {
            if (!w) return;
            if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(w)); return; }
            const o = document.createElement("span"); o.className = "w";
            const s = document.createElement("span"); s.textContent = w; s.style.setProperty("--i", i++);
            o.appendChild(s); frag.appendChild(o);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) walk(n);
      });
    };
    walk(el);
  });

  // Menú móvil
  const burger = $("#burger");
  if (burger) {
    burger.addEventListener("click", () => {
      const open = body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open);
    });
    $$("#menu a").forEach((a) => a.addEventListener("click", () => { body.classList.remove("menu-open"); burger.setAttribute("aria-expanded", false); }));
  }

  // Scroll: barra de progreso, cabecera y botón subir
  const nav = $("#nav"), prog = $("#progress"), top = $("#top");
  const onScroll = () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    if (prog) prog.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    if (nav) nav.classList.toggle("sc", y > 30);
    if (top) top.classList.toggle("on", y > 700);
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  if (top) top.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

  // Brillo dorado que sigue al cursor (solo escritorio)
  const glow = $("#glow");
  if (glow && finePointer && !reduce) {
    addEventListener("mousemove", (e) => { glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; }, { passive: true });
  } else if (glow) glow.remove();

  // Aparición al hacer scroll
  const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }) : null;
  function reveal(scope = document) {
    $$(".reveal:not(.in)", scope).forEach((el, i) => {
      if (!el.style.getPropertyValue("--d")) el.style.setProperty("--d", (i % 4) * 0.08 + "s");
      io ? io.observe(el) : el.classList.add("in");
    });
  }

  // Transición suave entre páginas
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#") || a.target === "_blank" || href.startsWith("mailto:") || href.startsWith("http")) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin && location.protocol !== "file:") return;
    if (url.pathname === location.pathname && url.hash) return;
    if (reduce) return;
    e.preventDefault(); body.classList.add("page-out");
    setTimeout(() => (location.href = a.href), 260);
  });
  addEventListener("pageshow", () => body.classList.remove("page-out"));

  // Contadores por marca
  $$("[data-brand-count]").forEach((el) => {
    const k = el.dataset.brandCount;
    const n = k === "all" ? PRODUCTS.length : PRODUCTS.filter((p) => p.brand === k).length;
    el.textContent = n + (n === 1 ? " modelo" : " modelos");
  });

  /* ---------- tarjeta de producto ---------- */
  function card(p, i = 0) {
    const c0 = p.colors[0];
    const alt = c0.imgs[1] || (p.colors[1] && p.colors[1].imgs[0]);
    const dots = p.colors.length > 1
      ? p.colors.map((c, k) => `<button class="dot${k ? "" : " on"}" style="background:${c.hex}" data-k="${k}" title="${esc(c.name)}" aria-label="Color ${esc(c.name)}"></button>`).join("") + `<span class="cname">${esc(c0.name)}</span>`
      : `<span class="cname">${esc(c0.name)}</span>`;
    return `<article class="card enter" style="--d:${Math.min(i, 12) * 0.05}s" data-id="${p.id}">
      <a class="pic" href="${URLP(p)}" aria-label="${esc(p.name)}">
        ${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ""}
        <img class="main" src="${IMG(c0.imgs[0])}" alt="${esc(p.name + " " + c0.name)}" loading="lazy" width="600" height="600">
        ${alt ? `<img class="alt" src="${IMG(alt)}" alt="" loading="lazy" width="600" height="600">` : ""}
      </a>
      <div class="card-b">
        <span class="br">${esc(BRANDS[p.brand].name)}</span>
        <h3><a href="${URLP(p)}">${esc(p.name)}</a></h3>
        <p class="tg">${esc(p.tag)}</p>
        <div class="dots">${dots}</div>
        ${priceHTML(p)}
        <div class="card-act">
          <a class="btn ghost go" href="${URLP(p)}">Ver detalles</a>
          <a class="btn wa buy" href="${wa(buyMsg(p, c0.name))}" target="_blank" rel="noopener" aria-label="Comprar ${esc(p.name)} por WhatsApp">${WA_ICON}</a>
        </div>
      </div>
    </article>`;
  }
  function bindCards(scope) {
    $$(".card", scope).forEach((el) => {
      if (el.dataset.bound) return; el.dataset.bound = 1;
      const p = PRODUCTS.find((x) => x.id === el.dataset.id);
      $$(".dot", el).forEach((d) => d.addEventListener("click", (e) => {
        e.preventDefault();
        const c = p.colors[+d.dataset.k];
        $$(".dot", el).forEach((x) => x.classList.toggle("on", x === d));
        const img = $("img.main", el); img.src = IMG(c.imgs[0]); img.alt = p.name + " " + c.name;
        const a2 = $("img.alt", el); if (a2) a2.src = IMG(c.imgs[1] || c.imgs[0]);
        $(".cname", el).textContent = c.name;
        $$("a.pic, h3 a, a.go", el).forEach((a) => (a.href = URLP(p, c.name)));
        $("a.buy", el).href = wa(buyMsg(p, c.name));
      }));
      $("a.buy", el).addEventListener("click", () => toast("Abriendo WhatsApp…"));
      if (finePointer && !reduce) {
        el.addEventListener("mousemove", (e) => {
          const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
          el.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px)`;
        });
        el.addEventListener("mouseleave", () => (el.style.transform = ""));
      }
    });
  }

  /* ---------- INICIO ---------- */
  function initHome() {
    // Hero con imágenes que se alternan
    const slides = $$(".slide"), sdots = $$(".sdot");
    let cur = 0, timer;
    const go = (i) => {
      cur = (i + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle("on", k === cur));
      sdots.forEach((d, k) => { d.classList.remove("on"); if (k === cur) { void d.offsetWidth; d.classList.add("on"); } });
      clearTimeout(timer); timer = setTimeout(() => go(cur + 1), 6000);
    };
    sdots.forEach((d) => d.addEventListener("click", () => go(+d.dataset.i)));
    if (slides.length > 1 && !reduce) timer = setTimeout(() => go(1), 6000);

    // Contadores animados
    const colors = PRODUCTS.reduce((n, p) => n + p.colors.length, 0);
    const vals = { models: PRODUCTS.length, brands: Object.keys(BRANDS).length, colors };
    $$("[data-count]").forEach((el) => {
      const end = vals[el.dataset.count];
      const run = () => {
        if (reduce) { el.textContent = end; return; }
        const t0 = performance.now();
        const step = (t) => { const k = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step);
      };
      if (io) { const o = new IntersectionObserver((es) => { if (es[0].isIntersecting) { run(); o.disconnect(); } }, { threshold: 0.5 }); o.observe(el); } else run();
    });

    // Destacados en carrusel
    const sl = $("#featured");
    if (sl) {
      sl.innerHTML = PRODUCTS.filter((p) => p.featured).map(card).join("");
      bindCards(sl);
      $$(".sl-btn").forEach((b) => b.addEventListener("click", () => {
        const w = sl.querySelector(".card").offsetWidth + 24;
        sl.scrollBy({ left: w * +b.dataset.dir, behavior: "smooth" });
      }));
      // Arrastrar con el mouse
      let down = false, sx = 0, sl0 = 0, moved = false;
      sl.addEventListener("pointerdown", (e) => { if (e.pointerType !== "mouse") return; down = true; moved = false; sx = e.clientX; sl0 = sl.scrollLeft; });
      addEventListener("pointermove", (e) => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 5) { moved = true; sl.classList.add("drag"); } sl.scrollLeft = sl0 - dx; });
      addEventListener("pointerup", () => { if (!down) return; down = false; setTimeout(() => sl.classList.remove("drag"), 0); });
      sl.addEventListener("click", (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
    }

    // Relojes protagonistas intercalados
    const sp = $("#spotlights");
    if (sp) {
      const ids = ["poedagar-1413", "seiko-5-snxj90", "casio-mtp-1375d-3av"];
      sp.innerHTML = ids.map((id, i) => {
        const p = PRODUCTS.find((x) => x.id === id); if (!p) return "";
        const c = p.colors[0];
        const mini = p.specs.slice(0, 4).map((s) => `<li><span>${esc(s[0])}</span><span>${esc(s[1])}</span></li>`).join("");
        return `<div class="spot-wrap"><section class="spot">
          <div class="spot-img reveal"><a class="main" href="${URLP(p)}"><img src="${IMG(c.imgs[0])}" alt="${esc(p.name)}" loading="lazy" width="700" height="700"></a>
            ${c.imgs[1] ? `<img class="sub" src="${IMG(c.imgs[1])}" alt="" loading="lazy" width="300" height="300">` : ""}</div>
          <div class="spot-txt reveal"><span class="num">0${i + 1}</span><p class="eyebrow">${esc(BRANDS[p.brand].name)} · ${esc(p.tag)}</p><h2>${esc(p.name)}</h2><p>${esc(p.desc)}</p>
            <ul class="mini">${mini}</ul>
            <div class="cta"><a class="btn" href="${URLP(p)}">Ver reloj</a><a class="btn ghost" href="${wa(buyMsg(p, c.name))}" target="_blank" rel="noopener">Comprar por WhatsApp</a></div></div>
        </section></div>`;
      }).join("");
    }
  }

  /* ---------- CATÁLOGO ---------- */
  function initCatalog() {
    const fixedBrand = body.dataset.brand || "";
    const qs = new URLSearchParams(location.search);
    const st = { brand: fixedBrand || qs.get("marca") || "", g: qs.get("g") || "", q: qs.get("q") || "", sort: qs.get("orden") || "feat" };
    const grid = $("#grid"), empty = $("#empty"), count = $("#count"), q = $("#fQ"), sort = $("#fSort");
    const chipsB = $("#fBrand"), chipsG = $("#fGender");
    if (q) q.value = st.q; if (sort) sort.value = st.sort;
    const setChips = (box, v) => box && $$("button", box).forEach((b) => b.classList.toggle("on", b.dataset.v === v));
    setChips(chipsB, st.brand); setChips(chipsG, st.g);
    const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

    function render() {
      let list = PRODUCTS.filter((p) => (!st.brand || p.brand === st.brand) && (!st.g || p.gender === st.g));
      if (st.q) {
        const t = norm(st.q);
        list = list.filter((p) => norm([p.name, p.ref, p.tag, BRANDS[p.brand].name, p.gender, ...p.colors.map((c) => c.name)].join(" ")).includes(t));
      }
      if (st.sort === "az") list.sort((a, b) => a.name.localeCompare(b.name));
      if (st.sort === "za") list.sort((a, b) => b.name.localeCompare(a.name));
      if (st.sort === "brand") list.sort((a, b) => a.brand.localeCompare(b.brand) || a.name.localeCompare(b.name));
      if (st.sort === "feat") list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      grid.innerHTML = list.map(card).join("");
      bindCards(grid);
      empty.hidden = list.length > 0;
      count.textContent = list.length + (list.length === 1 ? " reloj" : " relojes");
      // Deshabilitar estilos sin resultados en la marca actual
      if (chipsG) $$("button", chipsG).forEach((b) => {
        b.disabled = !!b.dataset.v && !PRODUCTS.some((p) => (!st.brand || p.brand === st.brand) && p.gender === b.dataset.v);
      });
      // Guardar filtros en la dirección
      const u = new URLSearchParams();
      if (st.brand && !fixedBrand) u.set("marca", st.brand);
      if (st.g) u.set("g", st.g); if (st.q) u.set("q", st.q); if (st.sort !== "feat") u.set("orden", st.sort);
      try { history.replaceState(null, "", location.pathname + (u.toString() ? "?" + u : "")); } catch (e) {}
    }
    if (chipsB) chipsB.addEventListener("click", (e) => { const b = e.target.closest("button"); if (!b) return; st.brand = b.dataset.v; if (st.g && !PRODUCTS.some((p) => (!st.brand || p.brand === st.brand) && p.gender === st.g)) st.g = ""; setChips(chipsB, st.brand); setChips(chipsG, st.g); render(); });
    if (chipsG) chipsG.addEventListener("click", (e) => { const b = e.target.closest("button"); if (!b || b.disabled) return; st.g = b.dataset.v; setChips(chipsG, st.g); render(); });
    let deb; if (q) q.addEventListener("input", () => { clearTimeout(deb); deb = setTimeout(() => { st.q = q.value.trim(); render(); }, 180); });
    if (sort) sort.addEventListener("change", () => { st.sort = sort.value; render(); });
    $("#reset").addEventListener("click", () => { st.brand = fixedBrand; st.g = ""; st.q = ""; st.sort = "feat"; if (q) q.value = ""; if (sort) sort.value = "feat"; setChips(chipsB, st.brand); setChips(chipsG, ""); render(); });
    render();
  }

  /* ---------- PÁGINA DE CADA RELOJ ---------- */
  function initProduct() {
    const box = $("#product"); if (!box) return;
    const idx = PRODUCTS.findIndex((x) => x.id === box.dataset.id);
    const p = PRODUCTS[idx];
    if (!p) { box.innerHTML = '<p class="empty">Este reloj ya no está disponible. <a href="' + ROOT + 'catalogo.html">Ver catálogo</a></p>'; return; }
    const B = BRANDS[p.brand];
    const want = new URLSearchParams(location.search).get("color");
    let ci = Math.max(0, p.colors.findIndex((c) => slug(c.name) === want)), ii = 0;
    const prev = PRODUCTS[(idx - 1 + PRODUCTS.length) % PRODUCTS.length], next = PRODUCTS[(idx + 1) % PRODUCTS.length];
    const specs = p.specs.map((s) => `<tr><td>${esc(s[0])}</td><td>${esc(s[1])}</td></tr>`).join("");

    box.innerHTML = `
      <nav class="crumbs" aria-label="Ruta"><a href="${ROOT}index.html">Inicio</a><span>/</span><a href="${ROOT}catalogo.html">Catálogo</a><span>/</span><a href="${ROOT}${p.brand}.html">${esc(B.name)}</a><span>/</span><b>${esc(p.ref)}</b></nav>
      <div class="gallery reveal">
        <div class="stage" id="stage" tabindex="0" aria-label="Foto ampliable">
          <img id="mainImg" alt="">
          <button class="st-btn st-prev" aria-label="Foto anterior">←</button><button class="st-btn st-next" aria-label="Foto siguiente">→</button>
          <button class="st-full" aria-label="Ver en pantalla completa">⤢</button><span class="st-count" id="stCount"></span>
        </div>
        <div class="thumbs" id="thumbs"></div>
      </div>
      <div class="info reveal">
        ${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ""}
        <a class="br" href="${ROOT}${p.brand}.html">${esc(B.name)}</a>
        <h1>${esc(p.name)}</h1>
        <p class="tg">${esc(p.tag)}</p>
        ${priceHTML(p)}
        <div class="colorbox"><p>Color: <b id="cName"></b></p><div class="dots" id="cDots">${p.colors.map((c, k) => `<button class="dot" style="background:${c.hex}" data-k="${k}" title="${esc(c.name)}" aria-label="Color ${esc(c.name)}"></button>`).join("")}</div></div>
        <div class="buy" id="buyBox">
          <a class="btn wa" id="buyBtn" target="_blank" rel="noopener">${WA_ICON} Comprar por WhatsApp</a>
          <button class="btn ghost" id="share">Compartir este reloj</button>
        </div>
        <div class="perks"><span>Envíos a toda Venezuela</span><span>Zelle · Pago Móvil · Binance</span><span>Atención por WhatsApp</span><span>Zoom · MRW</span></div>
        <div class="acc">
          <details open><summary>Descripción</summary><div class="body"><p>${esc(p.desc)}</p></div></details>
          <details open><summary>Ficha técnica</summary><div class="body"><table>${specs}</table></div></details>
          <details><summary>Envíos y pagos</summary><div class="body"><p>Enviamos a toda Venezuela con Zoom, MRW y las demás empresas de envío del país. Aceptamos Zelle, Pago Móvil, Binance, transferencias bancarias y otros medios.</p></div></details>
          <details><summary>Cómo comprar</summary><div class="body"><p>1. Elige el color. 2. Presiona "Comprar por WhatsApp": el mensaje con el modelo y el color ya va escrito. 3. Coordinamos contigo el pago y el envío.</p></div></details>
        </div>
      </div>
      <nav class="pnav" aria-label="Otros relojes"><a href="${URLP(prev)}">← ${esc(prev.name)}</a><a href="${URLP(next)}">${esc(next.name)} →</a></nav>`;

    // Barra fija de compra en móvil
    const bar = document.createElement("div");
    bar.className = "buybar";
    bar.innerHTML = `<img id="barImg" alt=""><div><b>${esc(p.name)}</b><small id="barColor"></small></div><a class="btn wa" id="barBuy" target="_blank" rel="noopener">${WA_ICON} Comprar</a>`;
    body.appendChild(bar); body.classList.add("has-buybar");

    const stage = $("#stage"), main = $("#mainImg"), thumbs = $("#thumbs");
    const imgs = () => p.colors[ci].imgs;
    function show(i, instant) {
      const L = imgs(); ii = (i + L.length) % L.length;
      const set = () => { main.src = IMG(L[ii]); main.alt = p.name + " " + p.colors[ci].name + " foto " + (ii + 1); main.classList.remove("fade"); };
      if (instant) set(); else { main.classList.add("fade"); setTimeout(set, 180); }
      $$("button", thumbs).forEach((b, k) => b.classList.toggle("on", k === ii));
      $("#stCount").textContent = ii + 1 + " / " + L.length;
      $$(".st-btn", stage).forEach((b) => (b.style.display = L.length > 1 ? "" : "none"));
    }
    function setColor(k, first) {
      ci = k; const c = p.colors[ci];
      $$("#cDots .dot").forEach((d, j) => d.classList.toggle("on", j === ci));
      $("#cName").textContent = c.name;
      thumbs.innerHTML = c.imgs.map((s, j) => `<button aria-label="Foto ${j + 1}"><img src="${IMG(s)}" alt="" loading="lazy" width="80" height="80"></button>`).join("");
      $$("button", thumbs).forEach((b, j) => b.addEventListener("click", () => show(j)));
      thumbs.style.display = c.imgs.length > 1 ? "" : "none";
      const link = wa(buyMsg(p, c.name));
      $("#buyBtn").href = link; $("#barBuy").href = link;
      $("#barImg").src = IMG(c.imgs[0]); $("#barColor").textContent = c.name;
      show(0, first);
      if (!first) try { history.replaceState(null, "", location.pathname + (p.colors.length > 1 ? "?color=" + slug(c.name) : "")); } catch (e) {}
    }
    $$("#cDots .dot").forEach((d) => d.addEventListener("click", () => setColor(+d.dataset.k)));
    $(".st-prev", stage).addEventListener("click", (e) => { e.stopPropagation(); show(ii - 1); });
    $(".st-next", stage).addEventListener("click", (e) => { e.stopPropagation(); show(ii + 1); });
    $(".st-full", stage).addEventListener("click", (e) => { e.stopPropagation(); openLB(); });
    stage.addEventListener("click", openLB);
    stage.addEventListener("keydown", (e) => { if (e.key === "ArrowLeft") show(ii - 1); if (e.key === "ArrowRight") show(ii + 1); if (e.key === "Enter") openLB(); });
    // Lupa al pasar el mouse
    if (finePointer) {
      stage.addEventListener("mouseenter", () => stage.classList.add("zoom"));
      stage.addEventListener("mouseleave", () => { stage.classList.remove("zoom"); main.style.transformOrigin = ""; });
      stage.addEventListener("mousemove", (e) => {
        const r = stage.getBoundingClientRect();
        main.style.transformOrigin = ((e.clientX - r.left) / r.width) * 100 + "% " + ((e.clientY - r.top) / r.height) * 100 + "%";
      });
    }
    // Deslizar con el dedo
    let tx = null;
    stage.addEventListener("touchstart", (e) => (tx = e.touches[0].clientX), { passive: true });
    stage.addEventListener("touchend", (e) => {
      if (tx === null) return; const dx = e.changedTouches[0].clientX - tx; tx = null;
      if (Math.abs(dx) > 40) { show(ii + (dx < 0 ? 1 : -1)); stage.dataset.swiped = 1; setTimeout(() => delete stage.dataset.swiped, 350); }
    });

    // Pantalla completa
    const lb = document.createElement("div");
    lb.id = "lb"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true"); lb.setAttribute("aria-label", "Galería");
    lb.innerHTML = '<img alt=""><button class="lb-x" aria-label="Cerrar">✕</button><button class="lb-p" aria-label="Anterior">←</button><button class="lb-n" aria-label="Siguiente">→</button><p class="lb-c"></p>';
    body.appendChild(lb);
    const lbSet = () => { $("img", lb).src = IMG(imgs()[ii]); $(".lb-c", lb).textContent = ii + 1 + " / " + imgs().length; };
    function openLB() { if (stage.dataset.swiped) return; lbSet(); lb.classList.add("open"); body.style.overflow = "hidden"; $(".lb-x", lb).focus(); }
    const closeLB = () => { lb.classList.remove("open"); body.style.overflow = ""; stage.focus(); };
    $(".lb-x", lb).addEventListener("click", closeLB);
    $(".lb-p", lb).addEventListener("click", () => { show(ii - 1, true); lbSet(); });
    $(".lb-n", lb).addEventListener("click", () => { show(ii + 1, true); lbSet(); });
    lb.addEventListener("click", (e) => { if (e.target === lb) closeLB(); });
    addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") closeLB();
      if (e.key === "ArrowLeft") { show(ii - 1, true); lbSet(); }
      if (e.key === "ArrowRight") { show(ii + 1, true); lbSet(); }
    });

    // Compartir
    $("#share").addEventListener("click", async () => {
      const data = { title: p.name + " · VIGIA WATCHES", text: p.name + " — " + p.tag, url: location.href };
      try { if (navigator.share) { await navigator.share(data); return; } await navigator.clipboard.writeText(location.href); toast("Enlace copiado"); }
      catch (e) { if (e && e.name !== "AbortError") toast("Copia el enlace desde la barra del navegador"); }
    });
    $("#buyBtn").addEventListener("click", () => toast("Abriendo WhatsApp…"));

    // Mostrar la barra de compra cuando el botón principal sale de pantalla
    if (io) new IntersectionObserver((es) => bar.classList.toggle("show", !es[0].isIntersecting && es[0].boundingClientRect.top < 0)).observe($("#buyBox"));

    setColor(ci, true);

    // Relacionados
    const rel = $("#related");
    if (rel) {
      const same = PRODUCTS.filter((x) => x.brand === p.brand && x.id !== p.id);
      const other = PRODUCTS.filter((x) => x.brand !== p.brand && x.featured);
      const list = [...same, ...other].slice(0, 4);
      rel.innerHTML = `<header class="sec-h reveal"><p class="eyebrow">Sigue viendo</p><h2>También te puede gustar</h2></header><div class="grid">${list.map(card).join("")}</div><div class="center reveal"><a class="btn ghost" href="${ROOT}${p.brand}.html">Ver todo ${esc(B.name)}</a></div>`;
      bindCards(rel);
    }
  }

  const pg = body.dataset.page;
  if (pg === "home") initHome();
  if (pg === "catalog") initCatalog();
  if (pg === "product") initProduct();
  reveal();
})();
