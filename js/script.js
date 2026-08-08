(function(){
  "use strict";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  gsap.registerPlugin(ScrollTrigger);

  /* ---------------- GEO SVG TEMPLATE ---------------- */
  const geoSVG = `
  <svg viewBox="0 0 640 640" xmlns="http://www.w3.org/2000/svg">
    <g class="geo-ring-group">
      <circle class="geo-ring" cx="420" cy="300" r="175"/>
      <circle class="geo-dot-gold" cx="520" cy="157" r="7"/>
    </g>
    <path class="geo-halfmoon" d="M505,150 A150,150 0 0 1 505,450 Z"/>
    <g class="geo-dotgrid"></g>
    <g class="geo-mark">
      <line class="geo-mark-line" x1="330" y1="455" x2="398" y2="503"/>
      <circle cx="330" cy="455" r="5.5"/>
    </g>
    <g class="geo-lines3">
      <line x1="558" y1="400" x2="558" y2="486"/>
      <line x1="574" y1="400" x2="574" y2="486"/>
      <line x1="590" y1="400" x2="590" y2="486"/>
    </g>
    <g class="geo-arc">
      <path class="geo-arc-path" d="M350,640 Q515,558 595,440"/>
      <rect class="geo-square" x="587" y="432" width="17" height="17" rx="3" transform="rotate(25 595.5 440.5)"/>
    </g>
    <g class="geo-cross" transform="translate(300,528)">
      <line x1="-7" y1="0" x2="7" y2="0"/>
      <line x1="0" y1="-7" x2="0" y2="7"/>
    </g>
  </svg>`;

  const navDecoSVG = `
  <svg viewBox="0 0 170 24" xmlns="http://www.w3.org/2000/svg">
    <g fill="var(--ink)" opacity=".35">
      <circle cx="4" cy="4" r="1.1"/><circle cx="12" cy="4" r="1.1"/><circle cx="20" cy="4" r="1.1"/>
      <circle cx="4" cy="12" r="1.1"/><circle cx="12" cy="12" r="1.1"/><circle cx="20" cy="12" r="1.1"/>
      <circle cx="4" cy="20" r="1.1"/><circle cx="12" cy="20" r="1.1"/><circle cx="20" cy="20" r="1.1"/>
    </g>
    <circle cx="55" cy="12" r="9" fill="none" stroke="var(--line)" stroke-width="1.4"/>
    <line x1="76" y1="12" x2="108" y2="12" stroke="var(--line)" stroke-width="1.4"/>
    <circle cx="108" cy="12" r="3.4" fill="var(--gold)"/>
    <path d="M124,24 Q140,6 166,2" fill="none" stroke="var(--blue)" stroke-width="1.4"/>
  </svg>`;

  document.querySelectorAll(".hero-geo").forEach(el => el.innerHTML = geoSVG);
  document.querySelectorAll(".nav-deco").forEach(el => el.innerHTML = navDecoSVG);
  if(!reduced) gsap.set(".tech-row, .site-footer",{opacity:0});

  function buildDotGrid(gEl){
    const cols=5, rows=5, spacing=16, startX=225, startY=340;
    let html="";
    for(let r=0;r<rows;r++){
      for(let c=0;c<cols;c++){
        html += `<circle cx="${startX+c*spacing}" cy="${startY+r*spacing}" r="1.7"></circle>`;
      }
    }
    gEl.innerHTML = html;
  }
  document.querySelectorAll(".geo-dotgrid").forEach(buildDotGrid);

  /* ---------------- ELEMENT GETTERS (every major shape individually addressable) ---------------- */
  function geoEls(scope){
    return {
      ringGroup: scope.querySelector(".geo-ring-group"),
      ring: scope.querySelector(".geo-ring"),
      dotGold: scope.querySelector(".geo-dot-gold"),
      halfmoon: scope.querySelector(".geo-halfmoon"),
      dots: scope.querySelectorAll(".geo-dotgrid circle"),
      mark: scope.querySelector(".geo-mark"),
      markLine: scope.querySelector(".geo-mark-line"),
      lines3: scope.querySelectorAll(".geo-lines3 line"),
      arcGroup: scope.querySelector(".geo-arc"),
      arcPath: scope.querySelector(".geo-arc-path"),
      square: scope.querySelector(".geo-square"),
      cross: scope.querySelector(".geo-cross")
    };
  }

  /* Prime = hidden/off-stage state for every shape. Each shape gets its own
     origin, its own stroke-draw state (for outlined shapes) and its own
     transform-origin — nothing is a shared blanket opacity fade. */
  function primeGeo(scope){
    const g = geoEls(scope);

    const ringLen = g.ring.getTotalLength();
    gsap.set(g.ring,{strokeDasharray:ringLen,strokeDashoffset:ringLen,x:150,y:-110,scale:.6,rotate:-16,transformOrigin:"420px 300px"});
    gsap.set(g.dotGold,{scale:0,transformOrigin:"520px 157px"});
    gsap.set(g.halfmoon,{x:230,scale:.55,opacity:0,rotate:75,transformOrigin:"505px 300px"});

    g.dots.forEach(d=>{
      const dx=(Math.random()-.5)*160, dy=(Math.random()-.5)*160;
      gsap.set(d,{x:dx,y:dy,scale:0,opacity:0});
    });

    const markLen = g.markLine ? g.markLine.getTotalLength() : 0;
    if(g.markLine) gsap.set(g.markLine,{strokeDasharray:markLen,strokeDashoffset:markLen});
    gsap.set(g.mark,{x:-600,y:30,scaleX:.6,scaleY:.5,rotate:-12,opacity:.9,transformOrigin:"330px 455px"});

    g.lines3.forEach(l=>{
      const len = l.getTotalLength();
      gsap.set(l,{strokeDasharray:len,strokeDashoffset:len,x:36,rotate:-10,transformOrigin:"center"});
    });

    const arcLen = g.arcPath.getTotalLength();
    gsap.set(g.arcPath,{strokeDasharray:arcLen,strokeDashoffset:arcLen});
    gsap.set(g.square,{x:46,y:-46,scale:.3,rotate:95,transformOrigin:"595.5px 440.5px"});

    gsap.set(g.cross,{scale:0,rotate:-100,opacity:0,transformOrigin:"center"});
    return g;
  }

  /* Home entrance: the ring flies in from upper-right while drawing its own
     stroke; the mark swoops across with anticipation/stretch/squash/bounce;
     every other shape has its own distinct origin, easing and timing. */
  function revealGeo(tl, scope, startLabel){
    const g = geoEls(scope);
    const t = (o)=> startLabel+o;

    tl.to(g.ring,{x:162,y:-122,scale:.58,duration:.1,ease:"power1.out"},t(0))
      .to(g.ring,{x:0,y:0,scale:1.06,rotate:0,strokeDashoffset:0,duration:.6,ease:"power3.out"},t(0.1))
      .to(g.ring,{scale:1,duration:.28,ease:"back.out(2.2)"},t(0.66))

      .to(g.dotGold,{scale:1.3,duration:.22,ease:"power2.out"},t(0.62))
      .to(g.dotGold,{scale:1,duration:.24,ease:"back.out(3)"},t(0.82))

      .to(g.halfmoon,{x:0,scale:1.08,opacity:1,rotate:0,duration:.55,ease:"power3.out"},t(0.22))
      .to(g.halfmoon,{scale:1,duration:.26,ease:"back.out(2.4)"},t(0.72))

      .to(g.mark,{x:-624,y:34,scaleX:.5,scaleY:.62,duration:.14,ease:"power1.out"},t(0))
      .to(g.markLine,{strokeDashoffset:0,duration:.3,ease:"power1.out"},t(0.14))
      .to(g.mark,{x:40,y:-6,scaleX:1.4,scaleY:.72,rotate:8,duration:.42,ease:"power3.out"},t(0.14))
      .to(g.mark,{x:0,y:0,scaleX:.85,scaleY:1.2,rotate:0,duration:.16,ease:"power1.out"},t(0.56))
      .to(g.mark,{scaleX:1,scaleY:1,duration:.32,ease:"back.out(2.6)"},t(0.72))

      .to(g.dots,{x:0,y:0,scale:1,opacity:1,duration:.35,ease:"back.out(2.2)",stagger:{each:.014,from:"random"}},t(0.42))

      .to(g.lines3,{x:0,rotate:0,strokeDashoffset:0,duration:.4,ease:"power2.out",stagger:.07},t(0.55))

      .to(g.arcPath,{strokeDashoffset:0,duration:.55,ease:"power2.inOut"},t(0.5))

      .to(g.square,{x:0,y:0,scale:1.2,rotate:25,duration:.32,ease:"power2.out"},t(0.95))
      .to(g.square,{scale:1,duration:.22,ease:"back.out(3)"},t(1.22))

      .to(g.cross,{scale:1.15,rotate:0,opacity:1,duration:.3,ease:"power2.out"},t(0.85))
      .to(g.cross,{scale:1,duration:.2,ease:"back.out(3)"},t(1.1));
  }

  /* ---------------- NAV ENTRANCE ---------------- */
  function primeNav(){
    gsap.set("#navbar",{scaleX:.35,opacity:0,y:-8,transformOrigin:"50% 0%"});
    gsap.set("#navbar .logo, #navbar .nav-deco, #navbar .nav-cta",{opacity:0,y:6});
  }
  function revealNav(tl,startLabel){
    tl.to("#navbar",{scaleX:1,opacity:1,y:0,duration:.7,ease:"back.out(1.4)"},startLabel)
      .to("#navbar .logo",{opacity:1,y:0,duration:.4,ease:"power2.out"},startLabel+0.35)
      .to("#navbar .nav-deco",{opacity:1,y:0,duration:.4,ease:"power2.out"},startLabel+0.42)
      .to("#navbar .nav-cta",{opacity:1,y:0,duration:.4,ease:"power2.out"},startLabel+0.48);
  }

  /* ---------------- TYPOGRAPHY ENTRANCE ---------------- */
  function primeType(scope){
    gsap.set(scope.querySelector(".eyebrow"),{opacity:0,y:12});
    gsap.set(scope.querySelectorAll(".headline .ln"),{opacity:0,x:-46});
    gsap.set(scope.querySelector(".period-dot"),{scale:0});
    gsap.set(scope.querySelector(".sub"),{opacity:0,y:14});
    const btn = scope.querySelector(".btn-primary");
    if(btn) gsap.set(btn,{opacity:0,y:14});
    const list = scope.querySelector(".contact-list");
    if(list) gsap.set(list.querySelectorAll(".c-row"),{opacity:0,x:-24});
  }
  function revealType(tl, scope, startLabel){
    const lines = scope.querySelectorAll(".headline .ln");
    tl.to(scope.querySelector(".eyebrow"),{opacity:1,y:0,duration:.45,ease:"power2.out"},startLabel)
      .to(lines[0],{opacity:1,x:0,duration:.55,ease:"power3.out"},startLabel+0.12);
    if(lines[1]) tl.to(lines[1],{opacity:1,x:0,duration:.6,ease:"back.out(1.5)"},startLabel+0.26);
    if(lines[2]) tl.to(lines[2],{opacity:1,x:0,duration:.5,ease:"power3.out"},startLabel+0.4);
    const pd = scope.querySelector(".period-dot");
    if(pd) tl.to(pd,{scale:1,duration:.35,ease:"back.out(3)"},startLabel+0.62);
    tl.to(scope.querySelector(".sub"),{opacity:1,y:0,duration:.5,ease:"power2.out"},startLabel+0.55);
    const btn = scope.querySelector(".btn-primary");
    if(btn) tl.to(btn,{opacity:1,y:0,duration:.5,ease:"power2.out"},startLabel+0.66);
    const rows = scope.querySelectorAll(".contact-list .c-row");
    if(rows.length) tl.to(rows,{opacity:1,x:0,duration:.5,ease:"power3.out",stagger:.08},startLabel+0.55);
  }

  /* ---------------- INTRO SEQUENCE (first visit) ---------------- */
  function playIntro(){
    const home = document.getElementById("home");
    const scope = home.querySelector(".hero-geo");
    primeNav();
    primeGeo(scope);
    primeType(home);

    const tl = gsap.timeline({defaults:{overwrite:"auto"}});
    revealNav(tl,0);
    revealGeo(tl, scope, 0.25);
    revealType(tl, home, 0.95);
    tl.eventCallback("onComplete", ()=>{
      sessionStorage.setItem("visited","1");
      initGlobalAmbient();
      enableAmbient(scope);
    });
  }

  /* ---------------- QUICK ENTRANCE (return visit) ---------------- */
  function playQuick(){
    const home = document.getElementById("home");
    const scope = home.querySelector(".hero-geo");
    gsap.set("#navbar",{opacity:0,y:-6});
    gsap.set(home.querySelectorAll(".eyebrow,.headline .ln,.sub,.btn-primary"),{opacity:0,y:10});
    gsap.set(scope,{opacity:0,y:8});
    const tl = gsap.timeline();
    tl.to("#navbar",{opacity:1,y:0,duration:.4,ease:"power2.out"})
      .to(home.querySelectorAll(".eyebrow,.headline .ln,.sub,.btn-primary"),{opacity:1,y:0,duration:.4,ease:"power2.out",stagger:.05},"-=0.25")
      .to(scope,{opacity:1,y:0,duration:.4,ease:"power2.out"},"-=0.35")
      .eventCallback("onComplete", ()=>{
        initGlobalAmbient();
        enableAmbient(scope);
      });
  }

  function playReduced(){
    gsap.set("#navbar",{opacity:1,scaleX:1,y:0});
    gsap.set("#navbar .logo,#navbar .nav-deco,#navbar .nav-cta",{opacity:1,y:0});
    document.querySelectorAll(".hero-geo, .hero-geo *, .headline .ln, .eyebrow, .sub, .btn-primary, .period-dot, .c-row, .tech-row, .site-footer").forEach(el=>{
      gsap.set(el,{clearProps:"all"});
    });
    sessionStorage.setItem("visited","1");
  }

  /* ---------------- AMBIENT STATE ----------------
     Runs once per hero-geo instance, only after ITS entrance has fully
     settled at the exact resting composition. CSS drives the lightweight
     continuous loops (.ambient class, gated so it never overlaps a GSAP
     tween on the same property); GSAP drives the orbiting ring-dot and the
     scroll/mouse-linked choreography. */
  function enableAmbient(scope){
    if(reduced || !scope) return;
    scope.classList.add("ambient");
    if(scope.dataset.ambientReady) return;
    scope.dataset.ambientReady = "1";

    const g = geoEls(scope);
    g.dots.forEach(d=> d.style.animationDelay = (Math.random()*3.2).toFixed(2)+"s");
    g.lines3.forEach((l,i)=> l.style.animationDelay = (i*0.45).toFixed(2)+"s");

    // the gold dot slowly orbits the (visually static) ring
    if(g.ringGroup){
      gsap.to(g.ringGroup,{rotation:360,duration:48,repeat:-1,ease:"none",transformOrigin:"420px 300px"});
    }

    // scroll-linked depth parallax, scoped to this instance only
    gsap.to(g.ringGroup,{y:-16,ease:"none",scrollTrigger:{trigger:scope,start:"top bottom",end:"bottom top",scrub:1}});
    if(g.arcGroup) gsap.to(g.arcGroup,{y:-34,ease:"none",scrollTrigger:{trigger:scope,start:"top bottom",end:"bottom top",scrub:.6}});
  }

  function initGlobalAmbient(){
    if(reduced || initGlobalAmbient._done) return;
    initGlobalAmbient._done = true;
    document.addEventListener("mousemove", onMouseParallax);
    ScrollTrigger.batch(".tech-row",{
      start:"top 92%",
      onEnter:els=>gsap.fromTo(els,{opacity:0,y:16},{opacity:1,y:0,duration:.55,ease:"power2.out",stagger:.08})
    });
    ScrollTrigger.batch(".site-footer",{
      start:"top 95%",
      onEnter:els=>gsap.fromTo(els,{opacity:0,y:10},{opacity:1,y:0,duration:.5,ease:"power2.out"})
    });
    ScrollTrigger.refresh();
  }

  // mouse response uses different properties than the scroll parallax above,
  // and a different depth multiplier per shape, so nothing fights for the
  // same tweened property on the same element.
  function onMouseParallax(e){
    const nx = (e.clientX/window.innerWidth - .5);
    const ny = (e.clientY/window.innerHeight - .5);
    document.querySelectorAll(".hero-geo").forEach(scope=>{
      if(getComputedStyle(scope.closest(".page")).display === "none") return;
      const g = geoEls(scope);
      gsap.to(g.ringGroup,{x:nx*9,duration:1,ease:"power2.out"});
      gsap.to(g.halfmoon,{x:nx*18,y:ny*18,duration:.7,ease:"power2.out"});
      gsap.to(g.mark,{x:nx*24,y:ny*24,duration:.6,ease:"power2.out"});
      gsap.to(g.cross,{x:nx*30,y:ny*30,duration:.5,ease:"power2.out"});
    });
  }

  /* ---------------- PAGE SWITCH / TRANSITION ---------------- */
  let current = "home";
  function switchTo(target, originEl){
    if(target === current) return;
    const overlay = document.getElementById("transition-overlay");
    const fromSec = document.getElementById(current);
    const toSec = document.getElementById(target);

    if(reduced){
      fromSec.hidden = true; toSec.hidden = false;
      current = target;
      window.scrollTo(0,0);
      const h = toSec.querySelector(".headline"); if(h) h.focus();
      return;
    }

    let ox = window.innerWidth/2, oy = window.innerHeight/2;
    if(originEl){
      const r = originEl.getBoundingClientRect();
      ox = r.left + r.width/2; oy = r.top + r.height/2;
    }
    const maxDist = Math.hypot(Math.max(ox,window.innerWidth-ox), Math.max(oy,window.innerHeight-oy));
    const scaleNeeded = (maxDist*1.18)/12;

    overlay.style.left = (ox-12)+"px";
    overlay.style.top = (oy-12)+"px";
    gsap.set(overlay,{scale:0});

    const tl = gsap.timeline();
    tl.to(overlay,{scale:scaleNeeded,duration:.5,ease:"power3.in"})
      .add(()=>{
        fromSec.hidden = true;
        toSec.hidden = false;
        current = target;
        window.scrollTo(0,0);
        if(target === "connect") playConnectEnter(); else playHomeEnter();
      })
      .to(overlay,{scale:0,duration:.55,ease:"power3.out"},"+=0.02")
      .eventCallback("onComplete",()=>{
        const h = toSec.querySelector(".headline"); if(h) h.focus({preventScroll:true});
      });
  }

  /* Connect page gets its OWN entrance, not a replay of the homepage one:
     the ring rolls in from the left (opposite direction, bigger rotation),
     the half-moon still rotates into place per the brief, and the mark
     (already "delivered" once on the homepage) simply settles rather than
     re-flying across the whole screen. */
  function playConnectEnter(){
    const sec = document.getElementById("connect");
    const scope = sec.querySelector(".hero-geo");
    const g = primeGeo(scope);
    const t = (o)=>o;

    gsap.set(g.ring,{x:-210,y:70,rotate:-130,scale:.62});
    gsap.set(g.halfmoon,{x:250,rotate:110,scale:.5,opacity:0});
    gsap.set(g.mark,{x:0,y:0,scaleX:.8,scaleY:.8,rotate:-6,opacity:0});
    primeType(sec);

    const tl = gsap.timeline();
    tl.to(g.ring,{x:-14,y:6,scale:.66,rotate:-14,duration:.55,ease:"power2.out"},t(0))
      .to(g.ring,{x:0,y:0,scale:1.05,rotate:0,strokeDashoffset:0,duration:.4,ease:"power2.out"},t(0.5))
      .to(g.ring,{scale:1,duration:.26,ease:"back.out(2.4)"},t(0.86))

      .to(g.halfmoon,{x:0,rotate:0,scale:1.1,opacity:1,duration:.6,ease:"back.out(1.6)"},t(0.14))
      .to(g.halfmoon,{scale:1,duration:.24,ease:"back.out(2.4)"},t(0.7))

      .to(g.dotGold,{scale:1.3,duration:.2,ease:"power2.out"},t(0.78))
      .to(g.dotGold,{scale:1,duration:.24,ease:"back.out(3)"},t(0.96))

      .to(g.mark,{opacity:1,scaleX:1.15,scaleY:1.15,rotate:0,duration:.3,ease:"power2.out"},t(0.15))
      .to(g.mark,{scaleX:1,scaleY:1,duration:.26,ease:"back.out(3)"},t(0.42))

      .to(g.dots,{x:0,y:0,scale:1,opacity:1,duration:.32,ease:"back.out(2.2)",stagger:{each:.013,from:"random"}},t(0.3))

      .to(g.lines3,{x:0,rotate:0,strokeDashoffset:0,duration:.36,ease:"power2.out",stagger:.06},t(0.4))

      .to(g.arcPath,{strokeDashoffset:0,duration:.5,ease:"power2.inOut"},t(0.35))

      .to(g.square,{x:0,y:0,scale:1.2,rotate:25,duration:.3,ease:"power2.out"},t(0.75))
      .to(g.square,{scale:1,duration:.22,ease:"back.out(3)"},t(1.0))

      .to(g.cross,{scale:1.15,rotate:0,opacity:1,duration:.28,ease:"power2.out"},t(0.62))
      .to(g.cross,{scale:1,duration:.2,ease:"back.out(3)"},t(0.86));

    revealType(tl, sec, 0.28);
    tl.eventCallback("onComplete", ()=> enableAmbient(scope));
  }

  function playHomeEnter(){
    const sec = document.getElementById("home");
    const scope = sec.querySelector(".hero-geo");
    primeGeo(scope);
    primeType(sec);
    const tl = gsap.timeline();
    revealGeo(tl, scope, 0);
    revealType(tl, sec, 0.75);
    tl.eventCallback("onComplete", ()=> enableAmbient(scope));
  }

  document.addEventListener("click",(e)=>{
    const t = e.target.closest("[data-nav]");
    if(t){ switchTo(t.getAttribute("data-nav"), t); return; }
    if(e.target.closest("#logo-btn")){ switchTo("home", e.target.closest("#logo-btn")); }
  });

  /* ---------------- BOOT ---------------- */
  if(reduced){
    playReduced();
  } else if(sessionStorage.getItem("visited")){
    playQuick();
  } else {
    playIntro();
  }
})();
