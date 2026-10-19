/* Comportamentos partilhados: WhatsApp, programa, reveals, CTA mobile, menu, escolha de turma. */
(() => {
  const D = window.MASTER;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  if (rm) document.documentElement.classList.add('rm');
  document.documentElement.classList.add('js');

  /* ---------- WhatsApp: todos os [data-wa] recebem o link a partir de content.js ---------- */
  const wa = text => `https://wa.me/${D.wa}?text=${encodeURIComponent(text)}`;
  $$('[data-wa="geral"]').forEach(a => { a.href = wa(D.msg.geral); a.target = '_blank'; a.rel = 'noopener'; });

  /* ---------- escolha de turma: o botão de inscrição acompanha a escolha ---------- */
  $$('[data-turmas]').forEach(box => {
    const btn = $('[data-wa="turma"]', box.closest('section'));
    const upd = () => {
      const r = $('input:checked', box);
      if (!btn || !r) return;
      btn.href = wa(D.msg.turma(r.value)); btn.target = '_blank'; btn.rel = 'noopener';
      const sel = $('[data-turma-sel]', box.closest('section'));
      if (sel) sel.textContent = `Turma selecionada: ${r.value} de novembro`;
    };
    box.addEventListener('change', upd); upd();
  });

  /* ---------- imagens opcionais: se o ficheiro ainda não existir, a figura sai da página ---------- */
  const slot = img => {
    const gone = () => { const f = img.closest('[data-slot]'); if (f) f.remove(); };
    if (img.complete && !img.naturalWidth) gone(); else img.addEventListener('error', gone);
  };

  /* ---------- programa: módulos em <details> ---------- */
  $$('[data-prog]').forEach(el => {
    el.innerHTML = D.prog.map((m, i) => `
      <details class="mod" name="prog" style="--i:${i}"${i ? '' : ' open'}><summary><span class="mod-n">${String(i + 1).padStart(2, '0')}</span><span class="mod-t">${m.t}</span><span class="mod-x" aria-hidden="true"></span></summary>
        <div class="mod-b"><p class="mod-d">${m.d}</p>${(m.img || []).map(f => `<figure class="mod-f" data-slot><img src="${f.src}" alt="${esc(f.alt)}" width="1200" height="900" loading="lazy" decoding="async"></figure>`).join('')}</div>
      </details>`).join('');
    $$('[data-slot] img', el).forEach(slot);
  });
  $$('[data-slot] img').forEach(img => img.closest('[data-prog]') || slot(img));

  /* ---------- o que vai aprender ---------- */
  $$('[data-aprender]').forEach(el => {
    el.innerHTML = D.aprender.map((b, i) => `<li style="--i:${i}"><svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5 5.5 11 12 3" fill="none" stroke="currentColor" stroke-width="1.5"/></svg><span>${b}</span></li>`).join('');
  });

  /* ---------- reveals ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .14, rootMargin: '0px 0px -6% 0px' });
  const watch = () => $$('[data-r]:not(.in)').forEach(el => rm ? el.classList.add('in') : io.observe(el));
  watch();

  /* ---------- nav + CTA mobile ---------- */
  const nav = $('[data-nav]'), mcta = $('#mcta'), insc = $('#inscricao');
  let inscVis = false;
  const upd = () => {
    if (nav) nav.classList.toggle('scrolled', scrollY > 30);
    if (mcta) mcta.classList.toggle('show', scrollY > innerHeight * .7 && !inscVis);
  };
  if (insc) new IntersectionObserver(es => { inscVis = es[0].isIntersecting; upd(); }, { threshold: .05 }).observe(insc);
  addEventListener('scroll', upd, { passive: true }); upd();

  /* menu móvel genérico: [data-burger] alterna body.menu-open */
  const burger = $('[data-burger]');
  if (burger) {
    const set = o => { document.body.classList.toggle('menu-open', o); burger.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; };
    burger.addEventListener('click', () => set(!document.body.classList.contains('menu-open')));
    $$('[data-mmenu] a').forEach(a => a.addEventListener('click', () => set(false)));
    addEventListener('keydown', e => e.key === 'Escape' && set(false));
  }

  window.M = { $, $$, rm, clamp, esc, D, watch };
})();
