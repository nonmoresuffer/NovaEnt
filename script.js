const PH='<svg viewBox="0 0 100 100" role="img" aria-label="Photo coming soon"><rect width="100" height="100" fill="#ccc"/><circle cx="50" cy="38" r="18" fill="#2b2b2b"/><path d="M14 100a36 36 0 0172 0z" fill="#2b2b2b"/></svg>';
const M=[
{s:'Sean',a:'Sean Sinclair',b:'Sean Sinclair',r:'Main Vocal',l:1,d:[2000,8,23],o:'British-Korean'},
{s:'Reid',a:'Anran Ichikawa',b:'Ichikawa Anran',r:'Main Vocal',d:[2001,4,17],o:'Korean-Japanese'},
{s:'Zeric',a:'Zeyang Han',b:'Han Zeyang',r:'Main Vocal · Lead Dancer',d:[2004,6,28],o:'Chinese-Korean-Russian · Twin of Riven'},
{s:'Riven',a:'Ruize Han',b:'Han Ruize',r:'Main Vocal',d:[2004,6,28],o:'Chinese-Korean-Russian · Twin of Zeric'},
{s:'Ciel',a:'Sebastian Caldwell',b:'Sebastian Caldwell',r:'Main Rapper · Lead Dancer',d:[2005,1,19],o:'Korean'},
{s:'Lune',a:'Elliot Kensington',b:'Elliot Kensington',r:'Main Dancer · Lead Rapper',d:[2005,9,12],o:'Korean · Maknae',mk:1}];
const MO=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
let fam=false;
function age(d){const n=new Date();let y=n.getFullYear()-d[0];if(n.getMonth()+1<d[1]||(n.getMonth()+1==d[1]&&n.getDate()<d[2]))y--;return y}
function rm(){document.getElementById('mem').innerHTML=M.map(m=>`<article class="m">${PH}<div><h3>${m.s}</h3><p class="nm">${fam?m.b:m.a}</p><p class="r">${m.r}${m.l?' <span class="ld">· Leader</span>':''}</p><p>${m.d[2]} ${MO[m.d[1]-1]} ${m.d[0]} · age ${age(m.d)}<br>${m.o}</p></div></article>`).join('')}
function so(f){fam=f;o1.setAttribute('aria-pressed',!f);o2.setAttribute('aria-pressed',f);rm()}
mem2.innerHTML=Array(5).fill(`<article class="m">${PH}<div><h3>???</h3><p class="nm">???</p><p class="r">???</p><p>???<br>???</p></div></article>`).join('');
const AUD='';if(AUD){au.href=AUD;au.removeAttribute('aria-disabled');au.removeAttribute('role');au.textContent='Apply for audition'}
o1.onclick=()=>so(false);o2.onclick=()=>so(true);rm();

const D=[
{n:'SUPERNOVA',t:'Debut Full Album',dt:'6 Jul 2024',s:'Released',k:['DEAD AIR','CALL ME FROM MARS','SIXTH SENSE',"DON'T REPLY",'PARALLEL','LAST MESSAGE','BEFORE SUNRISE','SUPERNOVA']},
{n:'BE MY VALENTINE',t:'Single Album',dt:'14 Feb 2025',s:'Released',k:['LOWKEY','TOO CLOSE']},
{n:'AFTERGLOW',t:'Mini Album',dt:'6 Jul 2025',s:'Released',k:['Afterglow','One Year Later','Orbit Me','Night Drive','Nexus']},
{n:'SNOWFALL.EXE',t:'Christmas Special Album',dt:'19 Dec 2025',s:'Released',k:['Snowfall','Silent Orbit','Cold Star','Wrapped in Starlight','Home Signal']},
{n:'MALFUNCTION',t:'2nd Full Album · 12 tracks',dt:'16 Oct 2026',s:'Coming soon',soon:1,tba:'Tracklist will be revealed on release.'},
{n:'TBA',t:'3rd Full Album',dt:'18 Jun 2027',s:'TBA',tba:'Title and tracklist to be announced.'},
{n:'TBA',t:'Mini Album · all new songs',dt:'12 Nov 2027',s:'TBA',tba:'Title and tracklist to be announced.'}];
dl.innerHTML=D.map(a=>`<article class="al${a.soon?' next':''}"><header><h3>${a.n}</h3><span class="st${a.soon?' soon':''}">${a.s}</span></header><div class="meta">${a.t} · ${a.dt}${a.k?' · '+a.k.length+' tracks':''}</div>${a.k?`<details><summary>Tracklist</summary><ol>${a.k.map(x=>`<li>${x.toUpperCase()}</li>`).join('')}</ol></details>`:`<ul style="list-style:none;padding:0"><li>${a.tba}</li></ul>`}<div class="pv">Preview clip · coming soon</div></article>`).join('');

const SUB={supernova:[['top','Home'],['about','About'],['members','Members'],['music','Discography'],['nexus','Nexus']],new:[['n-top','Home'],['n-about','About'],['n-members','Members'],['n-music','Discography'],['n-nexus','Fandom']]};
const TT={home:'Nova Entertainment',supernova:'Supernøva · Nova Entertainment',new:'??? · Nova Entertainment'};
const ARTISTS=[{cat:'Boy group',items:[['supernova','Supernøva'],['new','???']]}];
menu.innerHTML=ARTISTS.map(c=>`<b>${c.cat}</b>`+c.items.map(i=>`<a href="#/${i[0]}">${i[1]}</a>`).join('')).join('');
function tm(o){menu.hidden=!o;mb.setAttribute('aria-expanded',o)}
mb.onclick=e=>{e.stopPropagation();tm(menu.hidden)};
document.addEventListener('click',()=>tm(false));
function route(){tm(false);const k=(location.hash.match(/^#\/(\w+)/)||[])[1];const pg=SUB[k]?k:'home';
document.getElementById('home').hidden=pg!=='home';document.getElementById('p-supernova').hidden=pg!=='supernova';document.getElementById('p-new').hidden=pg!=='new';
const sb=document.getElementById('sub');sb.hidden=pg==='home';sb.innerHTML=(SUB[pg]||[]).map(x=>`<button type="button" data-t="${x[0]}">${x[1]}</button>`).join('');
document.title=TT[pg];k==='audition'?document.getElementById('audition').scrollIntoView():window.scrollTo(0,0)}
document.addEventListener('click',e=>{const b=e.target.closest('[data-t]');if(b){const el=document.getElementById(b.dataset.t);if(el)el.scrollIntoView({behavior:'smooth'})}});
addEventListener('hashchange',route);route();
const T=Date.parse('2026-10-16T18:00:00+09:00');
function tick(){let x=T-Date.now();const e=document.getElementById('cd');
if(x<=0){e.innerHTML='<span style="font-size:22px;min-width:0">OUT NOW</span>';cdn.textContent='MALFUNCTION is here';const c=D[4];c.s='Released';return}
const p=v=>String(v).padStart(2,'0');d.textContent=p(Math.floor(x/864e5));h.textContent=p(Math.floor(x/36e5)%24);mi.textContent=p(Math.floor(x/6e4)%60);s.textContent=p(Math.floor(x/1e3)%60);setTimeout(tick,1000)}
tick();
