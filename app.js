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
  if(location.hash){ const el=document.getElementById(location.hash.slice(1)); if(el) setTimeout(()=>el.scrollIntoView(),80); }
})();
