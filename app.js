(function(){
  const hd=document.getElementById('hd'), bg=document.getElementById('burger');
  bg.addEventListener('click',()=>{ const o=hd.classList.toggle('ouvert'); bg.setAttribute('aria-expanded',o); });
  document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click',()=>{ hd.classList.remove('ouvert'); bg.setAttribute('aria-expanded','false'); }));
  addEventListener('scroll',()=>hd.classList.toggle('ombre',scrollY>60),{passive:true});

if(document.getElementById('hero')){
  const sl=[...document.querySelectorAll('.slide')], dots=[...document.querySelectorAll('#dots button')]; let k=0, tmr;
  const calme=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function va(n){ sl[k].classList.remove('on'); dots[k].classList.remove('on'); k=(n+sl.length)%sl.length; sl[k].classList.add('on'); void dots[k].offsetWidth; dots[k].classList.add('on'); if(!calme){ clearTimeout(tmr); tmr=setTimeout(()=>va(k+1),7000); } }
  document.getElementById('prev').onclick=()=>va(k-1); document.getElementById('next').onclick=()=>va(k+1);
  dots.forEach((d,i)=>d.onclick=()=>va(i));
  if(!calme) tmr=setTimeout(()=>va(1),7000);
  let x0=null; const hero=document.getElementById('hero');
  hero.addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});
  hero.addEventListener('touchend',e=>{ if(x0===null) return; const dx=e.changedTouches[0].clientX-x0; if(Math.abs(dx)>50) va(k+(dx<0?1:-1)); x0=null; });
  }

if(document.getElementById('cpt')){
  const D=new Date('2026-12-03T08:00:00Z'), F=new Date('2026-12-06T00:00:00Z'), c=document.getElementById('cpt'), p=n=>String(n).padStart(2,'0'), prev={};
  const put=(u,v)=>{ if(prev[u]===v) return; prev[u]=v; c.querySelector('[data-u='+u+']').innerHTML='<i class="r">'+v+'</i>'; };
  function t(){ const now=new Date(), ms=D-now;
    if(ms<=0){ c.classList.add('live'); c.querySelector('.w').innerHTML='<div class="t"><small>JED 2026</small><b>'+(now<F?'Les JED 2026 se déroulent en ce moment à Man':'Merci à tous les participants des JED 2026')+'</b></div><a class="bt l" href="jed2026/'+(now<F?'#programme':'#galerie')+'">'+(now<F?'Programme du jour':'Voir la galerie')+'</a>'; return false; }
    const s=Math.floor(ms/1e3); put('j',String(Math.floor(s/86400))); put('h',p(Math.floor(s%86400/3600))); put('m',p(Math.floor(s%3600/60))); put('s',p(s%60)); return true; }
  if(t()){ const id=setInterval(()=>{ if(!t()) clearInterval(id); },1000); }
  }

if(document.getElementById('ag')){
  const J=[
   {h:'08h00 – 16h30',it:[
    ['08h00 – 09h00','Arrivée, accueil et inscription des participants et des invités'],
    ['09h00 – 11h30','Cérémonie officielle d\'ouverture',null,['Accueil des autorités par un groupe de jeunes, au rythme du tam-tam du peuple Dan','Allocution du Coordonnateur principal des JED : présentation du programme et consignes de sécurité','Slam sur la situation des jeunes','Mots des représentants des pays invités','Mots des partenaires','Allocution du Président du Conseil d\'Administration de l\'UJDM','Mots des autorités locales de Man','Animation musicale','Ouverture officielle des JED 2026 par Monsieur le Préfet','Photo de famille'],'f'],
    ['11h30 – 12h30','Panel inaugural : « S\'employer pour employer »','Échanges entre panélistes, modérés, suivis de questions-réponses avec le public.'],
    ['12h30 – 14h00','Pause déjeuner libre',null,null,'p'],
    ['14h00 – 16h00','Lancement des ateliers de formation',null,['<span class="sa A">Salle A</span>Entrepreneuriat · module JA DEEP : idéation et opportunités durables','<span class="sa B">Salle B</span>Employabilité · module Success Skills : compétences de vie et soft skills']],
    ['16h00 – 16h30','Débriefing du Jour 1 et fin des travaux','Points clés de la journée et annonces pour le lendemain.']]},
   {h:'09h00 – 16h30',it:[
    ['09h00 – 09h30','Bienvenue au Jour 2','Consignes de sécurité et de bien-être, activité dynamisante, retour sur le Jour 1 et aperçu de la journée.'],
    ['09h30 – 12h30','Ateliers de formation (suite)',null,['<span class="sa A">Salle A</span>Entrepreneuriat · suite du module JA DEEP','<span class="sa B">Salle B</span>Employabilité · suite du module Success Skills']],
    ['12h30 – 13h30','Pause déjeuner libre',null,null,'p'],
    ['13h30 – 15h15','Session commune : santé mentale des jeunes','Plénière en grande salle, pour tous les participants.',null,'f'],
    ['15h15 – 16h15','Deux activités en parallèle',null,['<span class="sa G">Grande salle</span>Mentorat et réseautage avec experts, entreprises et partenaires','<span class="sa A">Salle A</span>Coaching des finalistes du concours de projets']],
    ['16h15 – 16h30','Débriefing du Jour 2 et fin des travaux','Bilan de la journée et consignes pour la journée finale.']]},
   {h:'09h00 – 17h00 · Journée mondiale du bénévolat',it:[
    ['09h00 – 09h30','Accueil des participants et installation du jury','Consignes de sécurité ; briefing du jury sur les critères d\'évaluation.'],
    ['09h30 – 12h00','Concours de projets · Session de pitchs','Passage des finalistes devant le jury international, suivi de questions-réponses.',null,'f'],
    ['12h00 – 14h00','Pause déjeuner et délibération du jury',null,null,'p'],
    ['14h00 – 17h00','Grande cérémonie de clôture',null,['Accueil des autorités par un groupe de jeunes, au rythme du tam-tam du peuple Dan','Mot d\'ouverture de la cérémonie','Panel et partage d\'expérience','Danses traditionnelles de Man','Distinction des bénévoles des JED 2026 et remise des prix du concours de pitchs','Cérémonie de clôture'],'f'],
    ['17h00','Cocktail de clôture']]}];
  const ag=document.getElementById('ag'), jh=document.getElementById('jhead'), tabs=[0,1,2].map(i=>document.getElementById('j'+i));
  function jour(i){ tabs.forEach((b,n)=>b.setAttribute('aria-selected',n===i));
    jh.innerHTML='<h3>'+['Jeudi 3','Vendredi 4','Samedi 5'][i]+' décembre</h3><span>'+J[i].h+'</span>';
    ag.innerHTML=J[i].it.map((e,n)=>'<li class="'+(e[4]||'')+'" style="animation-delay:'+(n*60)+'ms"><time>'+e[0]+'</time><div><b>'+e[1]+'</b>'+(e[2]?'<p class="d">'+e[2]+'</p>':'')+(e[3]?'<ul>'+e[3].map(x=>'<li>'+x+'</li>').join('')+'</ul>':'')+'</div></li>').join(''); }
  tabs.forEach((b,i)=>b.addEventListener('click',()=>jour(i)));
  const auj=new Date().toISOString().slice(0,10), di=['2026-12-03','2026-12-04','2026-12-05'].indexOf(auj); jour(di<0?0:di);

  document.getElementById('ics').addEventListener('click',()=>{
    const ics=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//UJDM//JED 2026//FR','BEGIN:VEVENT','UID:jed2026@ujdm','DTSTAMP:20261123T000000Z','DTSTART;VALUE=DATE:20261203','DTEND;VALUE=DATE:20261206','SUMMARY:JED 2026 – Journées de l\'Engagement et du Dynamisme','LOCATION:Man\\, Région du Tonkpi\\, Côte d\'Ivoire','DESCRIPTION:'+location.href.split('#')[0],'END:VEVENT','END:VCALENDAR'].join('\r\n');
    const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([ics],{type:'text/calendar'})); a.download='JED2026.ics'; document.body.appendChild(a); a.click(); a.remove(); });
  }

if(document.getElementById('bio')){
  const BIO={
   katio:{n:'Katio Kouassi Jean Marc',r:'Enseignant-chercheur en sciences de gestion',img:'img/katio.webp',t:'<ul><li>Enseignant-chercheur UJLoG (UFR&#8209;SEG)</li><li>Consultant, bénévole et formateur (INGA)</li></ul><p>Daloa, Côte d\'Ivoire</p>'},
   boris:{n:'Boris Koffi',r:'Expert en Soft Skills et Employabilité',img:'img/boris.webp',t:'<p>Consultant en insertion professionnelle, formateur et coach en développement des compétences comportementales, Boris Koffi accompagne depuis plusieurs années les jeunes et les femmes dans le développement de leur potentiel, leur orientation professionnelle et leur accès aux opportunités d\'emploi.</p><p>Fort d\'une expérience dans la conception et l\'animation de programmes de formation, il intervient notamment sur les soft skills, l\'intelligence émotionnelle, la confiance en soi, la communication professionnelle et les techniques de recherche d\'emploi : CV, lettre de motivation, entretien d\'embauche et stratégie de recherche d\'opportunités.</p><p>Directeur des Programmes à African Youth Solution Academy et membre du comité consultatif jeunesse auprès de la Délégation de l\'Union européenne en Côte d\'Ivoire, il œuvre pour le renforcement des compétences et l\'autonomisation des jeunes.</p>'},
   ipote:{n:'Ipote Djridjehe Anderson',r:'Responsable Suivi-Évaluation à l\'UJDM',img:'img/ipote.webp',t:'<ul><li>Spécialiste en développement communautaire (SEC)</li><li>Formateur et accompagnateur en leadership et autonomisation des adolescent·e·s</li><li>Acteur engagé dans la promotion de la santé mentale et du bien-être des jeunes</li><li>Membre du Youth Sounding Board (YSB) de l\'Union européenne en Côte d\'Ivoire</li><li>Membre de la Task Force Société civile – Team Europe</li></ul>'}};
  const dlg=document.getElementById('bio');
  document.querySelectorAll('[data-bio]').forEach(b=>b.addEventListener('click',()=>{ const x=BIO[b.dataset.bio];
    document.getElementById('bioImg').src=x.img; document.getElementById('bioImg').alt='Portrait de '+x.n; document.getElementById('bioNom').textContent=x.n; document.getElementById('bioRole').textContent=x.r; document.getElementById('bioTx').innerHTML=x.t;
    dlg.showModal(); }));
  document.getElementById('bioX').onclick=()=>dlg.close();
  dlg.addEventListener('click',e=>{ if(e.target===dlg) dlg.close(); });
  }

  const crit=document.getElementById('crit'), fill=()=>{ if(crit) crit.querySelectorAll('i').forEach(i=>i.style.width=i.dataset.w*4+'%'); };
  const tete=document.getElementById('hero')||document.querySelector('.pb'), mb=document.getElementById('mbar');
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('vu'); if(crit&&e.target.contains(crit)) setTimeout(fill,300); io.unobserve(e.target); } }),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('.rv').forEach(el=>io.observe(el));
    if(tete&&mb) new IntersectionObserver(e=>mb.classList.toggle('on',!e[0].isIntersecting),{threshold:0}).observe(tete);
  } else { document.querySelectorAll('.rv').forEach(el=>el.classList.add('vu')); fill(); }

  document.querySelectorAll('[data-c]').forEach(b=>b.addEventListener('click',async()=>{ try{ await navigator.clipboard.writeText(b.dataset.c); b.textContent='Copié'; }catch(e){ const r=document.createRange(); r.selectNodeContents(b.previousElementSibling); getSelection().removeAllRanges(); getSelection().addRange(r); b.textContent='Sélectionné'; } setTimeout(()=>b.textContent='Copier',1800); }));

  /* J'y serai : cadre photo */
  if(document.getElementById('cadC')){
    const C=document.getElementById('cadC'), X=C.getContext('2d'), S=1080/640, CX=483*S, CY=267*S, R=109*S;
    const st={img:null,z:1,x:0,y:0}, fr=new Image(), ok=document.getElementById('cadOk'), zr=document.getElementById('zr'), zi=document.getElementById('cadZ');
    fr.onload=()=>draw(); fr.src='img/cadre-jed2026.webp';
    const msg=t=>{ ok.textContent=t; clearTimeout(msg.t); msg.t=setTimeout(()=>ok.textContent='',3000); };
    function draw(){
      X.clearRect(0,0,1080,1080); X.fillStyle='#1F1F1F'; X.beginPath(); X.arc(CX,CY,R,0,7); X.fill();
      if(st.img){ const i=st.img, sc=Math.max(2*R/i.width,2*R/i.height)*st.z, w=i.width*sc, h=i.height*sc;
        const mx=Math.max(0,(w-2*R)/2), my=Math.max(0,(h-2*R)/2); st.x=Math.max(-mx,Math.min(mx,st.x)); st.y=Math.max(-my,Math.min(my,st.y));
        X.save(); X.beginPath(); X.arc(CX,CY,R,0,7); X.clip(); X.drawImage(i,CX-w/2+st.x,CY-h/2+st.y,w,h); X.restore(); }
      else { X.fillStyle='rgba(255,255,255,.8)'; X.font='600 28px Montserrat,Arial,sans-serif'; X.textAlign='center'; X.fillText('Votre photo ici',CX,CY+10); }
      if(fr.complete&&fr.naturalWidth) X.drawImage(fr,0,0,1080,1080);
    }
    const pick=e=>{ const f=e.target.files[0]; e.target.value=''; if(!f) return;
      const im=new Image(); im.onload=()=>{ st.img=im; st.z=1; st.x=0; st.y=0; zi.value=1; zr.hidden=false;
        document.getElementById('cadD').disabled=false; document.getElementById('cadS').disabled=false; draw(); }; im.src=URL.createObjectURL(f); };
    document.getElementById('cadF').addEventListener('change',pick); document.getElementById('cadCam').addEventListener('change',pick);
    zi.addEventListener('input',()=>{ st.z=+zi.value; draw(); });
    const k=()=>1080/C.getBoundingClientRect().width;
    const inC=(px,py)=>{ const r=C.getBoundingClientRect(), q=1080/r.width, dx=(px-r.left)*q-CX, dy=(py-r.top)*q-CY; return dx*dx+dy*dy<=(R*1.08)**2; };
    const dist=t=>Math.hypot(t[0].clientX-t[1].clientX,t[0].clientY-t[1].clientY);
    let T=null;
    C.addEventListener('touchstart',e=>{ if(!st.img){ T=null; return; } const t=e.touches;
      if(t.length===1){ if(!inC(t[0].clientX,t[0].clientY)){ T=null; return; } T={x:t[0].clientX,y:t[0].clientY}; }
      else if(t.length===2){ T={d:dist(t),z:st.z}; }
      e.preventDefault(); },{passive:false});
    C.addEventListener('touchmove',e=>{ if(!T) return; e.preventDefault(); const t=e.touches;
      if(t.length===1&&T.x!==undefined){ st.x+=(t[0].clientX-T.x)*k(); st.y+=(t[0].clientY-T.y)*k(); T.x=t[0].clientX; T.y=t[0].clientY; }
      else if(t.length===2&&T.d){ st.z=Math.max(1,Math.min(3,T.z*dist(t)/T.d)); zi.value=st.z; }
      draw(); },{passive:false});
    C.addEventListener('touchend',e=>{ const t=e.touches; if(!T) return; if(t.length===0) T=null; else if(t.length===1) T={x:t[0].clientX,y:t[0].clientY}; });
    let M=null;
    C.addEventListener('pointerdown',e=>{ if(e.pointerType!=='mouse'||!st.img||!inC(e.clientX,e.clientY)) return; M={x:e.clientX,y:e.clientY}; C.setPointerCapture(e.pointerId); C.style.cursor='grabbing'; });
    C.addEventListener('pointermove',e=>{ if(!M) return; st.x+=(e.clientX-M.x)*k(); st.y+=(e.clientY-M.y)*k(); M={x:e.clientX,y:e.clientY}; draw(); });
    C.addEventListener('pointerup',()=>{ M=null; C.style.cursor=''; });
    C.addEventListener('wheel',e=>{ if(!st.img||!inC(e.clientX,e.clientY)) return; e.preventDefault(); st.z=Math.max(1,Math.min(3,st.z-e.deltaY*.002)); zi.value=st.z; draw(); },{passive:false});
    const blob=cb=>C.toBlob(cb,'image/jpeg',.93);
    const save=()=>blob(b=>{ const a=document.createElement('a'); a.href=URL.createObjectURL(b); a.download='JED2026-jy-serai.jpg'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(a.href),4000); msg('Votre visuel est enregistré.'); });
    document.getElementById('cadD').addEventListener('click',save);
    document.getElementById('cadS').addEventListener('click',()=>blob(async b=>{ const f=new File([b],'JED2026-jy-serai.jpg',{type:'image/jpeg'});
      if(navigator.canShare&&navigator.canShare({files:[f]})){ try{ await navigator.share({files:[f],text:"J'y serai ! JED 2026 à Man, du 3 au 5 décembre. #JED2026"}); }catch(e){} } else save(); }));
    draw(); if(document.fonts) document.fonts.ready.then(draw);
  }

  /* galerie */
  if(document.getElementById('mos')){
    const EP='https://script.google.com/macros/s/AKfycbwDlIOM3Frm892PR00P0BzTvkGxzR5pyx_xd_EIc7uL71fyx0TUXzhbAu9ruRMAHPCR/exec';
    const LOC=['orateur','parole','remise','atelier','pensif','salle','cercle','expose','cadre','studio','repas','portrait'].map(n=>({th:'img/'+n+'.webp',full:'img/'+n+'.webp',loc:1}));
    const mos=document.getElementById('mos'), albs=document.getElementById('albs'), galT=document.getElementById('galT'), note=document.getElementById('gnote');
    const isV=f=>/^video\//.test(f.mimeType||'');
    const nom=a=>a.replace(/^\s*\d+\s*[.\-)]\s*/,'').replace(/\s*[-–]\s*JED\s*2026\s*$/i,'').trim()||a;
    const dans=(f,a)=>f.album===a||(f.album||'').startsWith(a+' › ');
    const item=f=>({id:f.id,vid:isV(f),album:f.album||'',th:'https://drive.google.com/thumbnail?id='+f.id+'&sz=w600',full:'https://drive.google.com/thumbnail?id='+f.id+'&sz=w2000'});
    let G=null, A='', L=[], I=0;
    const titre=(t,n)=>'<div class="galh"><h2>'+t+'</h2><small>'+n+'</small></div>';
    function grille(items){ L=items;
      mos.innerHTML=items.map((f,n)=>'<button type="button" class="'+(n%7===0&&items.length>4?'gr':'')+'" data-i="'+n+'"><img loading="lazy" src="'+f.th+'" alt="">'+(f.vid?'<span class="pl"></span>':'')+'</button>').join('');
      mos.querySelectorAll('button').forEach(b=>b.onclick=()=>ouvre(+b.dataset.i)); }
    function local(t){ albs.innerHTML=''; galT.innerHTML=titre('Précédentes rencontres de l\'UJDM',LOC.length+' photos'); grille(LOC); note.textContent=t; }
    function rendu(){
      const top=(G.albums||[]).filter(a=>a.indexOf(' › ')<0&&G.files.some(f=>dans(f,a)));
      if(A){ albs.innerHTML='<button class="retour" type="button" id="rt"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>Tous les albums</button>';
        document.getElementById('rt').onclick=()=>{ A=''; rendu(); scrollTo({top:albs.getBoundingClientRect().top+scrollY-120}); }; }
      else if(top.length){ albs.innerHTML=titre('Les albums',top.length+' album'+(top.length>1?'s':''))+'<div class="albs">'+top.map(a=>{ const fs=G.files.filter(f=>dans(f,a)), ph=fs.find(f=>!isV(f))||fs[0];
          return '<button type="button" data-a="'+a.replace(/"/g,'&quot;')+'">'+(ph?'<img loading="lazy" src="https://drive.google.com/thumbnail?id='+ph.id+'&sz=w700" alt="">':'')+'<span><b></b><small>'+fs.length+' élément'+(fs.length>1?'s':'')+'</small></span></button>'; }).join('')+'</div>';
        albs.querySelectorAll('.albs button').forEach(b=>{ b.querySelector('b').textContent=nom(b.dataset.a); b.onclick=()=>{ A=b.dataset.a; rendu(); scrollTo({top:albs.getBoundingClientRect().top+scrollY-120}); }; }); }
      else albs.innerHTML='';
      const fs=G.files.filter(f=>!A||dans(f,A)), nP=fs.filter(f=>!isV(f)).length, nV=fs.length-nP;
      galT.innerHTML=titre(A?nom(A):'Toutes les photos',[nP?nP+' photo'+(nP>1?'s':''):'',nV?nV+' vidéo'+(nV>1?'s':''):''].filter(Boolean).join(' · '));
      grille(fs.map(item)); note.textContent='';
    }
    (async()=>{ try{ const r=await fetch(EP,{cache:'no-store'}), j=await r.json();
        const fs=(j.files||j||[]).filter(f=>!f.mimeType||/^(image|video)\//.test(f.mimeType));
        if(!fs.length){ local('Les photos des JED 2026 seront publiées ici pendant l\'événement.'); return; }
        for(let i=fs.length-1;i>0;i--){ const k=Math.floor(Math.random()*(i+1)); [fs[i],fs[k]]=[fs[k],fs[i]]; }
        G={files:fs,albums:j.albums||[]}; rendu();
      }catch(e){ local('Les photos des JED 2026 seront publiées ici pendant l\'événement.'); } })();
    const lb=document.getElementById('lb'), li=document.getElementById('lbi'), lv=document.getElementById('lbv'), ld=document.getElementById('lbd');
    function montre(){ const f=L[I];
      if(f.vid){ li.style.display='none'; lv.style.display='block'; lv.src='https://drive.google.com/file/d/'+f.id+'/preview'; }
      else { lv.style.display='none'; lv.src='about:blank'; li.style.display=''; li.src=f.th; const h=new Image(); h.onload=()=>{ if(L[I]===f) li.src=f.full; }; h.src=f.full; }
      ld.href=f.loc?f.full:'https://drive.google.com/uc?export=download&id='+f.id; ld.setAttribute('download','JED2026-'+(I+1)+(f.vid?'.mp4':'.jpg'));
      document.getElementById('lbn').textContent=(I+1)+' / '+L.length+(f.album?' · '+nom(f.album.split(' › ')[0]):'');
      const m=L.length>1; document.getElementById('lbp').style.display=m?'':'none'; document.getElementById('lbq').style.display=m?'':'none'; }
    function ouvre(i){ I=i; montre(); lb.classList.add('on'); document.body.style.overflow='hidden'; }
    function ferme(){ lb.classList.remove('on'); lv.src='about:blank'; document.body.style.overflow=''; }
    function pas(d){ if(L.length<2) return; li.style.opacity='0'; li.style.transform='translateX('+(-d*40)+'px)';
      setTimeout(()=>{ I=(I+d+L.length)%L.length; montre(); li.style.transition='none'; li.style.transform='translateX('+(d*40)+'px)';
        requestAnimationFrame(()=>requestAnimationFrame(()=>{ li.style.transition=''; li.style.opacity='1'; li.style.transform='none'; })); },200); }
    document.getElementById('lbx').onclick=ferme; document.getElementById('lbp').onclick=()=>pas(-1); document.getElementById('lbq').onclick=()=>pas(1);
    document.getElementById('lbm').addEventListener('click',e=>{ if(e.target.id==='lbm') ferme(); });
    addEventListener('keydown',e=>{ if(!lb.classList.contains('on')) return; if(e.key==='Escape') ferme(); if(e.key==='ArrowLeft') pas(-1); if(e.key==='ArrowRight') pas(1); });
    let x0=null; lb.addEventListener('touchstart',e=>{ x0=e.touches.length===1?e.touches[0].clientX:null; },{passive:true});
    lb.addEventListener('touchend',e=>{ if(x0===null) return; const dx=e.changedTouches[0].clientX-x0; if(Math.abs(dx)>50) pas(dx<0?1:-1); x0=null; });
    document.getElementById('lbs').onclick=async()=>{ const f=L[I], u=f.loc?new URL(f.full,location.href).href:'https://drive.google.com/file/d/'+f.id+'/view';
      if(navigator.share){ try{ await navigator.share({title:'JED 2026',text:'Une photo des JED 2026 #JED2026',url:u}); }catch(e){} }
      else { try{ await navigator.clipboard.writeText(u); document.getElementById('lbs').textContent='Lien copié'; setTimeout(()=>document.getElementById('lbs').textContent='Partager',1800); }catch(e){} } };
  }

  if(location.hash){ const el=document.getElementById(location.hash.slice(1)); if(el) setTimeout(()=>el.scrollIntoView(),80); }
})();
