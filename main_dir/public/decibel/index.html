<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>decibel Music club — Dashboard</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Pacifico&family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap" rel="stylesheet">
<style>
  :root{
    --pink:#FBE2DE;
    --pink-deep:#F6C9C2;
    --cream:#F3E3A6;
    --red:#E6432D;
    --red-deep:#B92F1D;
    --orange:#F0791C;
    --ink:#201A15;
    --ink-soft:#4a3f36;
    --paper:#FFF8EF;
  }
  *{box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{
    margin:0;
    background:var(--pink);
    color:var(--ink);
    font-family:'DM Sans',sans-serif;
    -webkit-font-smoothing:antialiased;
  }
  .display{font-family:'Bagel Fat One',cursive; font-weight:400;}
  .script{font-family:'Pacifico',cursive; font-weight:400;}
  .mono{font-family:'DM Mono',monospace; letter-spacing:.06em; text-transform:uppercase;}

  a{color:inherit;}

  /* subtle grain / halftone backdrop */
  body::before{
    content:"";
    position:fixed; inset:0;
    background-image: radial-gradient(rgba(32,26,21,0.045) 1px, transparent 1px);
    background-size: 14px 14px;
    pointer-events:none;
    z-index:0;
  }

  header.nav{
    position:sticky; top:0; z-index:50;
    display:flex; align-items:center; justify-content:space-between;
    padding:16px 28px;
    background:rgba(251,226,222,0.88);
    backdrop-filter: blur(6px);
    border-bottom:3px solid var(--ink);
  }
  .brand{display:flex; align-items:center; gap:10px;}
  .brand img{width:38px; height:38px; object-fit:contain;}
  .brand-name{font-family:'Pacifico',cursive; font-size:1.3rem; color:var(--red-deep);}
  nav.links{display:flex; gap:26px;}
  nav.links a{
    font-family:'DM Mono',monospace; font-size:.78rem; letter-spacing:.08em; text-transform:uppercase;
    text-decoration:none; color:var(--ink); position:relative; padding-bottom:3px;
  }
  nav.links a::after{
    content:""; position:absolute; left:0; bottom:0; width:0; height:2px; background:var(--red);
    transition:width .25s ease;
  }
  nav.links a:hover::after{width:100%;}
  .join-btn{
    font-family:'DM Mono',monospace; font-size:.78rem; letter-spacing:.06em; text-transform:uppercase;
    background:var(--ink); color:var(--cream); border:none; padding:10px 18px; border-radius:100px;
    cursor:pointer; transition:transform .2s ease, background .2s ease;
  }
  .join-btn:hover{background:var(--red-deep); transform:translateY(-2px);}

  /* ---------------- HERO ---------------- */
  .hero{
    position:relative; z-index:1;
    display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:40px;
    max-width:1180px; margin:0 auto; padding:70px 28px 60px;
  }
  .hero-copy .est{
    display:inline-block; font-family:'DM Mono',monospace; font-size:.75rem; letter-spacing:.12em;
    text-transform:uppercase; background:var(--ink); color:var(--cream); padding:6px 14px; border-radius:100px;
    margin-bottom:18px;
  }
  .hero-copy h1{
    font-family:'Bagel Fat One',cursive; font-weight:400; font-size:clamp(2.6rem,5vw,4rem);
    line-height:1.02; margin:0 0 6px; color:var(--red);
    -webkit-text-stroke: 1.5px var(--ink);
  }
  .hero-copy h1 .script-word{
    display:block; font-family:'Pacifico',cursive; -webkit-text-stroke:0; color:var(--red-deep);
    font-size:1.15em; margin-top:-6px;
  }
  .hero-copy p.sub{
    font-size:1.05rem; color:var(--ink-soft); max-width:44ch; margin:18px 0 26px; line-height:1.55;
  }
  .hero-actions{display:flex; gap:14px; flex-wrap:wrap;}
  .btn-primary{
    background:var(--red); color:var(--paper); border:2px solid var(--ink); padding:13px 24px; border-radius:100px;
    font-family:'DM Mono',monospace; font-size:.8rem; letter-spacing:.06em; text-transform:uppercase;
    cursor:pointer; box-shadow:4px 4px 0 var(--ink); transition:transform .15s ease, box-shadow .15s ease;
  }
  .btn-primary:hover{transform:translate(-2px,-2px); box-shadow:6px 6px 0 var(--ink);}
  .btn-ghost{
    background:transparent; border:2px solid var(--ink); color:var(--ink); padding:13px 24px; border-radius:100px;
    font-family:'DM Mono',monospace; font-size:.8rem; letter-spacing:.06em; text-transform:uppercase; cursor:pointer;
    transition:background .2s ease, color .2s ease;
  }
  .btn-ghost:hover{background:var(--ink); color:var(--cream);}

  /* spinning vinyl */
  .vinyl-wrap{display:flex; justify-content:center; align-items:center; position:relative;}
  .vinyl-wrap::after{
    content:""; position:absolute; width:340px; height:340px; border-radius:50%;
    background:radial-gradient(circle, rgba(230,67,45,0.25), transparent 70%);
    filter:blur(10px); z-index:0;
  }
  .vinyl{
    position:relative; z-index:1; width:320px; height:320px; border-radius:50%;
    background: repeating-radial-gradient(circle at center, var(--ink) 0 2px, #2b231c 2px 4px);
    box-shadow: 0 18px 40px rgba(32,26,21,.35);
    animation: spin 9s linear infinite;
    animation-play-state: running;
    display:flex; align-items:center; justify-content:center;
  }
  .hero:hover .vinyl{animation-play-state:paused;}
  .vinyl .label{
    width:120px; height:120px; border-radius:50%; background:var(--orange);
    display:flex; align-items:center; justify-content:center; flex-direction:column;
    border:3px solid var(--ink);
  }
  .vinyl .label span{font-family:'Pacifico',cursive; color:var(--ink); font-size:.95rem;}
  .vinyl .hole{width:10px; height:10px; background:var(--pink); border-radius:50%; margin-top:4px;}
  @keyframes spin{ to{ transform:rotate(360deg); } }
  .arm{
    position:absolute; top:-6px; right:38px; width:150px; height:150px; z-index:2; pointer-events:none;
  }

  /* ---------------- SECTION SHELL ---------------- */
  section{position:relative; z-index:1; max-width:1180px; margin:0 auto; padding:70px 28px;}
  .eyebrow{
    font-family:'DM Mono',monospace; font-size:.75rem; letter-spacing:.14em; text-transform:uppercase;
    color:var(--red-deep); margin:0 0 8px;
  }
  h2.section-title{
    font-family:'Bagel Fat One',cursive; font-weight:400; font-size:clamp(1.8rem,3.4vw,2.6rem);
    color:var(--ink); margin:0 0 34px;
  }

  /* ---------------- NOW SPINNING ---------------- */
  .now-spinning{
    background:var(--ink); color:var(--paper); border-radius:26px; padding:38px;
    display:grid; grid-template-columns:auto 1fr auto; gap:28px; align-items:center;
    box-shadow:0 14px 30px rgba(32,26,21,.25);
  }
  .now-spinning .pulse-dot{
    width:12px; height:12px; border-radius:50%; background:var(--orange);
    box-shadow:0 0 0 0 rgba(240,121,28,.6); animation:pulse 1.6s infinite;
    display:inline-block; margin-right:8px;
  }
  @keyframes pulse{
    0%{box-shadow:0 0 0 0 rgba(240,121,28,.55);}
    70%{box-shadow:0 0 0 10px rgba(240,121,28,0);}
    100%{box-shadow:0 0 0 0 rgba(240,121,28,0);}
  }
  .ns-mini-vinyl{
    width:84px; height:84px; border-radius:50%;
    background: repeating-radial-gradient(circle at center, #3a2f26 0 2px, #4c3f33 2px 4px);
    display:flex; align-items:center; justify-content:center;
    animation:spin 6s linear infinite;
  }
  .ns-mini-vinyl div{width:26px; height:26px; border-radius:50%; background:var(--red);}
  .now-spinning h3{font-family:'Bagel Fat One',cursive; font-weight:400; font-size:1.5rem; margin:6px 0 4px; color:var(--cream);}
  .now-spinning .meta{font-family:'DM Mono',monospace; font-size:.78rem; letter-spacing:.05em; color:#d8c9a1; text-transform:uppercase;}
  .ns-cta{
    background:var(--red); color:var(--paper); border:none; padding:12px 22px; border-radius:100px;
    font-family:'DM Mono',monospace; font-size:.78rem; letter-spacing:.06em; text-transform:uppercase; cursor:pointer;
    white-space:nowrap; transition:background .2s ease;
  }
  .ns-cta:hover{background:var(--orange);}

  /* ---------------- TRACK LISTING (EVENTS) ---------------- */
  .sleeve{
    background:var(--paper); border:3px solid var(--ink); border-radius:20px; padding:8px;
    box-shadow:8px 8px 0 var(--red);
  }
  .side-tabs{display:flex; gap:8px; padding:10px 10px 0;}
  .side-tab{
    font-family:'DM Mono',monospace; font-size:.75rem; letter-spacing:.08em; text-transform:uppercase;
    padding:10px 18px; border-radius:10px 10px 0 0; cursor:pointer; border:2px solid var(--ink); border-bottom:none;
    background:var(--pink-deep); color:var(--ink-soft);
  }
  .side-tab.active{background:var(--paper); color:var(--red-deep); font-weight:700;}
  .track-list{list-style:none; margin:0; padding:16px;}
  .track{
    display:grid; grid-template-columns:36px 1fr auto auto; gap:16px; align-items:center;
    padding:16px 10px; border-bottom:1px dashed rgba(32,26,21,.2);
  }
  .track:last-child{border-bottom:none;}
  .track-num{font-family:'DM Mono',monospace; color:var(--red-deep); font-weight:700;}
  .track-title{font-weight:700; font-size:1.02rem;}
  .track-sub{font-family:'DM Mono',monospace; font-size:.72rem; color:var(--ink-soft); text-transform:uppercase; margin-top:3px; letter-spacing:.04em;}
  .track-time{font-family:'DM Mono',monospace; font-size:.78rem; color:var(--ink-soft); text-align:right; white-space:nowrap;}
  .track-play{
    width:34px; height:34px; border-radius:50%; border:2px solid var(--ink); background:var(--cream);
    display:flex; align-items:center; justify-content:center; cursor:pointer; transition:background .2s ease, transform .2s ease;
    flex-shrink:0;
  }
  .track-play:hover{background:var(--red); transform:scale(1.08);}
  .track-play svg{width:12px; height:12px;}
  .side-b .track{opacity:1;}
  #sideB{display:none;}

  /* ---------------- STAT STRIP ---------------- */
  .stats{
    display:grid; grid-template-columns:repeat(4,1fr); gap:2px; background:var(--ink);
    border-radius:20px; overflow:hidden; box-shadow:0 14px 30px rgba(32,26,21,.18);
  }
  .stat{background:var(--cream); padding:30px 20px; text-align:center;}
  .stat .num{font-family:'Bagel Fat One',cursive; font-size:2.2rem; color:var(--red-deep);}
  .stat .label{font-family:'DM Mono',monospace; font-size:.72rem; letter-spacing:.06em; text-transform:uppercase; color:var(--ink-soft); margin-top:4px;}

  /* ---------------- GENRES ---------------- */
  .genre-row{display:flex; flex-wrap:wrap; gap:12px;}
  .genre-chip{
    font-family:'DM Mono',monospace; font-size:.8rem; letter-spacing:.04em; text-transform:uppercase;
    padding:10px 18px; border-radius:100px; border:2px solid var(--ink); background:var(--paper);
    transition:background .2s ease, color .2s ease;
  }
  .genre-chip:nth-child(4n+1){background:var(--red); color:var(--paper);}
  .genre-chip:nth-child(4n+2){background:var(--orange); color:var(--ink);}
  .genre-chip:nth-child(4n+3){background:var(--cream); color:var(--ink);}

  /* ---------------- JOIN / FOOTER ---------------- */
  .join{
    background:var(--red); color:var(--paper); border-radius:26px; padding:52px 40px; text-align:center;
    position:relative; overflow:hidden;
  }
  .join::before, .join::after{
    content:"♪"; position:absolute; font-size:5rem; color:rgba(255,255,255,.12); font-family:'Bagel Fat One',cursive;
  }
  .join::before{top:-10px; left:20px; transform:rotate(-12deg);}
  .join::after{bottom:-20px; right:30px; transform:rotate(10deg);}
  .join h2{font-family:'Bagel Fat One',cursive; font-weight:400; font-size:clamp(1.7rem,3.4vw,2.4rem); margin:0 0 12px;}
  .join p{max-width:48ch; margin:0 auto 26px; opacity:.9;}
  .join .join-btn2{
    background:var(--ink); color:var(--cream); border:none; padding:15px 30px; border-radius:100px;
    font-family:'DM Mono',monospace; font-size:.85rem; letter-spacing:.06em; text-transform:uppercase; cursor:pointer;
    box-shadow:4px 4px 0 rgba(0,0,0,.25); transition:transform .15s ease;
  }
  .join .join-btn2:hover{transform:translateY(-2px);}
  .students-only{
    display:inline-block; margin-top:18px; font-family:'DM Mono',monospace; font-size:.68rem;
    letter-spacing:.1em; text-transform:uppercase; opacity:.75;
  }

  footer{
    text-align:center; padding:34px 20px 50px; font-family:'DM Mono',monospace; font-size:.72rem;
    letter-spacing:.05em; color:var(--ink-soft); text-transform:uppercase;
  }

  @media (max-width:860px){
    .hero{grid-template-columns:1fr; text-align:center; padding-top:36px;}
    .hero-actions{justify-content:center;}
    .vinyl-wrap{order:-1;}
    .vinyl{width:230px; height:230px;}
    .now-spinning{grid-template-columns:1fr; text-align:center; justify-items:center;}
    .stats{grid-template-columns:repeat(2,1fr);}
    .track{grid-template-columns:26px 1fr; row-gap:4px;}
    .track-time{grid-column:2; text-align:left;}
    .track-play{grid-column:2; justify-self:start; margin-top:6px;}
    nav.links{display:none;}
  }

  :focus-visible{outline:3px solid var(--red-deep); outline-offset:2px;}
  @media (prefers-reduced-motion: reduce){
    .vinyl, .ns-mini-vinyl, .pulse-dot{animation:none !important;}
  }
</style>
</head>
<body>

<header class="nav">
  <div class="brand">
    <img src="decibel-logo.png" alt="decibel Music club logo">
    <span class="brand-name">decibel</span>
  </div>
  <nav class="links">
    <a href="#now-spinning">Now Spinning</a>
    <a href="#agenda">Agenda</a>
    <a href="#about">About</a>
  </nav>
  <button class="join-btn">Join the club</button>
</header>

<section class="hero">
  <div class="hero-copy">
    <span class="est">Est. 2026 · Students Only</span>
    <h1>Music Club<span class="script-word">on campus</span></h1>
    <p class="sub">Rehearsals, open mics, jam sessions and gig nights — decibel is where campus musicians (and music-lovers who just want to be in the room) find their next event.</p>
    <div class="hero-actions">
      <button class="btn-primary">See this week's agenda</button>
      <button class="btn-ghost">Join the club</button>
    </div>
  </div>
  <div class="vinyl-wrap">
    <div class="vinyl">
      <div class="label"><span>decibel</span><div class="hole"></div></div>
    </div>
  </div>
</section>

<section id="now-spinning">
  <p class="eyebrow">Up next</p>
  <h2 class="section-title">Now Spinning</h2>
  <div class="now-spinning">
    <div class="ns-mini-vinyl"><div></div></div>
    <div>
      <div class="meta"><span class="pulse-dot"></span>This Friday · 6:00 PM · Auditorium Foyer</div>
      <h3>Open Mic Night — Vol. 1</h3>
      <div class="meta">Sign-ups open · Solo & band slots · 5 min per act</div>
    </div>
    <button class="ns-cta">Reserve a slot</button>
  </div>
</section>

<section id="agenda">
  <p class="eyebrow">The Lineup</p>
  <h2 class="section-title">This Semester's Agenda</h2>
  <div class="sleeve">
    <div class="side-tabs">
      <div class="side-tab active" onclick="showSide('A', this)">Side A — This Month</div>
      <div class="side-tab" onclick="showSide('B', this)">Side B — Later This Semester</div>
    </div>

    <ul class="track-list" id="sideA">
      <li class="track">
        <span class="track-num">01</span>
        <div>
          <div class="track-title">Open Mic Night — Vol. 1</div>
          <div class="track-sub">Auditorium Foyer · All genres welcome</div>
        </div>
        <span class="track-time">Fri, 21 Aug · 6:00 PM</span>
        <div class="track-play" title="Details"><svg viewBox="0 0 24 24" fill="#201A15"><path d="M8 5v14l11-7z"/></svg></div>
      </li>
      <li class="track">
        <span class="track-num">02</span>
        <div>
          <div class="track-title">Weekly Jam Session</div>
          <div class="track-sub">Music Room, Block C · Bring your own instrument</div>
        </div>
        <span class="track-time">Every Wed · 5:30 PM</span>
        <div class="track-play" title="Details"><svg viewBox="0 0 24 24" fill="#201A15"><path d="M8 5v14l11-7z"/></svg></div>
      </li>
      <li class="track">
        <span class="track-num">03</span>
        <div>
          <div class="track-title">Guitar & Vocals Workshop</div>
          <div class="track-sub">Led by senior club members · Beginners welcome</div>
        </div>
        <span class="track-time">Sat, 29 Aug · 11:00 AM</span>
        <div class="track-play" title="Details"><svg viewBox="0 0 24 24" fill="#201A15"><path d="M8 5v14l11-7z"/></svg></div>
      </li>
      <li class="track">
        <span class="track-num">04</span>
        <div>
          <div class="track-title">New Members Meet & Greet</div>
          <div class="track-sub">Canteen Lawn · Casual hangout</div>
        </div>
        <span class="track-time">Sun, 30 Aug · 4:00 PM</span>
        <div class="track-play" title="Details"><svg viewBox="0 0 24 24" fill="#201A15"><path d="M8 5v14l11-7z"/></svg></div>
      </li>
    </ul>

    <ul class="track-list" id="sideB">
      <li class="track">
        <span class="track-num">05</span>
        <div>
          <div class="track-title">Battle of the Bands — Prelims</div>
          <div class="track-sub">Main Auditorium · Team registrations open</div>
        </div>
        <span class="track-time">Fri, 18 Sep · 5:00 PM</span>
        <div class="track-play" title="Details"><svg viewBox="0 0 24 24" fill="#201A15"><path d="M8 5v14l11-7z"/></svg></div>
      </li>
      <li class="track">
        <span class="track-num">06</span>
        <div>
          <div class="track-title">Music Production 101</div>
          <div class="track-sub">Computer Lab 2 · Laptops provided</div>
        </div>
        <span class="track-time">Sat, 26 Sep · 10:00 AM</span>
        <div class="track-play" title="Details"><svg viewBox="0 0 24 24" fill="#201A15"><path d="M8 5v14l11-7z"/></svg></div>
      </li>
      <li class="track">
        <span class="track-num">07</span>
        <div>
          <div class="track-title">Battle of the Bands — Finals</div>
          <div class="track-sub">Main Auditorium · Judged by faculty & alumni</div>
        </div>
        <span class="track-time">Fri, 9 Oct · 6:00 PM</span>
        <div class="track-play" title="Details"><svg viewBox="0 0 24 24" fill="#201A15"><path d="M8 5v14l11-7z"/></svg></div>
      </li>
    </ul>
  </div>
</section>

<section id="about">
  <p class="eyebrow">The Stack</p>
  <h2 class="section-title">decibel in Numbers</h2>
  <div class="stats">
    <div class="stat"><div class="num">120+</div><div class="label">Members</div></div>
    <div class="stat"><div class="num">7</div><div class="label">Events this sem</div></div>
    <div class="stat"><div class="num">4</div><div class="label">Genres led</div></div>
    <div class="stat"><div class="num">1</div><div class="label">Est. 2026</div></div>
  </div>
</section>

<section>
  <p class="eyebrow">On Rotation</p>
  <h2 class="section-title">Genres We Play</h2>
  <div class="genre-row">
    <span class="genre-chip">Rock</span>
    <span class="genre-chip">Indie</span>
    <span class="genre-chip">Classical Fusion</span>
    <span class="genre-chip">Hip-Hop</span>
    <span class="genre-chip">Acoustic</span>
    <span class="genre-chip">Electronic</span>
    <span class="genre-chip">Bollywood</span>
  </div>
</section>

<section>
  <div class="join">
    <h2>Pull up a chair. Bring an instrument (or don't).</h2>
    <p>decibel is open to every student on campus — first jam session is free, no audition needed.</p>
    <button class="join-btn2">Join decibel Music club</button>
    <div class="students-only">Open exclusively to currently enrolled students</div>
  </div>
</section>

<footer>decibel Music club · Est. 2026 · Made by the club, for the club</footer>

<script>
function showSide(side, el){
  document.getElementById('sideA').style.display = side === 'A' ? 'block' : 'none';
  document.getElementById('sideB').style.display = side === 'B' ? 'block' : 'none';
  document.querySelectorAll('.side-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}
</script>

</body>
</html>
