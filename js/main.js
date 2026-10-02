/* VIGIA WATCHES · interacción de la web */
const $ = (s, c = document) => c.querySelector(s), $$ = (s, c = document) => [...c.querySelectorAll(s)];
const IMG = "assets/img/";
const wa = (text) => `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
const buyMsg = (m, color) => `ESTOY INTERESADO EN COMPRAR EL RELOJ ${m.name} color ${color}`;
const priceTxt = (m) => (m.price ? `$${m.price}` : "Consulta el precio por WhatsApp");

/* enlaces generales de WhatsApp */
$$("[data-wa]").forEach((a) => (a.href = wa("Hola VIGIA WATCHES, quiero información sobre sus relojes")));
$("#navWa").href = wa("Hola VIGIA WATCHES, quiero información sobre sus relojes");
$("#phoneLink").textContent = "+58 412 110 4491";
$("#mailLink").textContent = EMAIL; $("#mailLink").href = "mailto:" + EMAIL;
$("#yr").textContent = new Date().getFullYear();

/* selector de color reutilizable (tarjeta y modelo) */
function picker(m, root) {
  let cur = 0;
  const img = $("img.main", root), btn = $("a.buy", root), name = $(".cname", root);
  const set = (i) => {
    cur = i;
    img.style.opacity = 0;
    setTimeout(() => { img.src = IMG + m.colors[i][1]; img.alt = `${m.name} ${m.colors[i][0]}`; img.style.opacity = 1; }, 160);
    $$(".dot", root).forEach((d, k) => d.classList.toggle("on", k === i));
    name.textContent = m.colors[i][0];
    btn.href = wa(buyMsg(m, m.colors[i][0]));
  };
  $$(".dot", root).forEach((d, k) => d.addEventListener("click", () => set(k)));
  btn.addEventListener("click", () => { const t = $("#toast"); t.classList.add("on"); setTimeout(() => t.classList.remove("on"), 1800); });
  set(0);
}
const dots = (m) => m.colors.map((c) => `<button class="dot" title="${c[0]}" style="background:${c[2]}" aria-label="${c[0]}"></button>`).join("");

/* catálogo (tarjetas) */
$("#grid").innerHTML = MODELS.map((m) => `
  <article class="card reveal" data-m="${m.id}">
    <div class="pic"><img class="main" src="${IMG + m.colors[0][1]}" alt="${m.name}" loading="lazy"></div>
    <div class="card-b"><h3>${m.name}</h3><p class="tg">${m.tag}</p>
      <div class="dots">${dots(m)}<span class="cname"></span></div>
      <p class="price">${priceTxt(m)}</p>
      <a class="btn buy" target="_blank" rel="noopener" href="#">Comprar por WhatsApp</a>
      <a class="link" href="#mod${m.id}">Ver detalles →</a></div>
  </article>`).join("");
$$(".card").forEach((c) => picker(MODELS.find((m) => m.id === c.dataset.m), c));

/* filtros */
$$("#chips button").forEach((b) => b.addEventListener("click", () => {
  $$("#chips button").forEach((x) => x.classList.toggle("on", x === b));
  $$(".card").forEach((c) => c.classList.toggle("hide", b.dataset.f !== "all" && c.dataset.m !== b.dataset.f));
}));

/* modelos intercalados */
$("#modelos").innerHTML = MODELS.map((m) => `
  <section class="mod" id="mod${m.id}">
    <div class="mod-img reveal"><div class="pic"><img class="main" src="${IMG + m.colors[0][1]}" alt="${m.name}" loading="lazy"></div>
      ${m.life ? `<img class="life" src="${IMG + m.life}" alt="${m.name} en la muñeca" loading="lazy">` : ""}</div>
    <div class="reveal"><p class="eyebrow">Modelo ${m.id}</p><h2>${m.name}</h2><p>${m.desc}</p>
      <table>${m.specs.map((s) => `<tr><td>${s[0]}</td><td>${s[1]}</td></tr>`).join("")}</table>
      <div class="dots">Color: ${dots(m)}<span class="cname"></span></div>
      <p class="price">${priceTxt(m)}</p>
      <a class="btn buy" target="_blank" rel="noopener" href="#">Comprar por WhatsApp</a></div>
  </section>`).join("");
$$(".mod").forEach((s, i) => picker(MODELS[i], s));

/* menú móvil */
const menu = $("#menu");
$("#burger").addEventListener("click", () => menu.classList.toggle("open"));
$$("#menu a").forEach((a) => a.addEventListener("click", () => menu.classList.remove("open")));

/* scroll: barra, header, botón subir */
const onScroll = () => {
  const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
  $("#progress").style.width = (y / h) * 100 + "%";
  $("#nav").classList.toggle("sc", y > 40);
  $("#top").classList.toggle("on", y > 700);
  $(".hero-emblem").style.marginTop = y * -0.15 + "px";
};
addEventListener("scroll", onScroll, { passive: true }); onScroll();
$("#top").addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

/* aparecer al hacer scroll */
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
$$(".reveal").forEach((el, i) => { el.style.transitionDelay = (i % 3) * 90 + "ms"; io.observe(el); });

/* inclinación 3D suave en tarjetas y fotos (solo con mouse) */
if (matchMedia("(hover:hover)").matches) {
  $$(".card, .tilt").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`;
    });
    el.addEventListener("mouseleave", () => (el.style.transform = ""));
  });
}
