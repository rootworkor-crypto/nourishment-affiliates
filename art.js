/* Extras layer: brand mark, glow accents, promo coupon, picture slots. Optional files in /assets: np-logo.png, offer-1.jpg, offer-2.jpg, pkg-1.jpg, pkg-2.jpg, pkg-3.jpg */
(function(){
var PROMO={on:true,pct:20,prefix:'NP20',label:'Limited one-time offer',img:'assets/offer-1.jpg'};
var page=document.body.dataset.page,$=function(s){return document.querySelector(s)};
var LEAF="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 140"><path d="M60 136C12 104 8 50 60 4c52 46 48 100 0 132z" fill="#3DDC97" fill-opacity=".07"/><path d="M60 128V20" stroke="#3DDC97" stroke-opacity=".12" stroke-width="2"/></svg>');
var css='.brand{gap:10px}.brand i{display:none}.brand .mk{width:34px;height:34px;flex:0 0 auto;filter:drop-shadow(0 0 10px rgba(245,185,66,.5))}.brand .mk img{width:100%;height:100%;display:block;border-radius:50%}'
+'.hero .art{position:relative;padding:10px}.hero .art::before{content:"";position:absolute;inset:4%;border-radius:50%;border:1px solid rgba(245,185,66,.35);box-shadow:0 0 60px rgba(61,220,151,.25),inset 0 0 60px rgba(61,220,151,.1)}.hero .art::after{content:"";position:absolute;inset:-2%;border-radius:50%;border:1px dashed rgba(200,245,96,.25)}.hero .art svg{position:relative;z-index:1}'
+'.hero .badge-np{position:absolute;right:2%;bottom:6%;z-index:2;width:72px;height:72px;filter:drop-shadow(0 8px 22px rgba(0,0,0,.6))}.hero .badge-np img,.hero .badge-np svg{width:100%;height:100%;display:block}'
+'.hero h1{text-shadow:0 0 40px rgba(61,220,151,.25)}.pillb{box-shadow:0 0 24px rgba(200,245,96,.12)}'
+'h2::after{content:"";display:block;width:54px;height:3px;border-radius:3px;margin-top:10px;background:linear-gradient(90deg,#F5B942,#3DDC97)}'
+'.panel,.card,.tile{position:relative}.panel{background:linear-gradient(160deg,rgba(255,255,255,.06),rgba(255,255,255,.02));box-shadow:0 20px 60px rgba(0,0,0,.35)}.panel::after{content:"";position:absolute;right:-8px;bottom:-10px;width:130px;height:150px;background:url("'+LEAF+'") no-repeat center/contain;pointer-events:none}'
+'.tile::before{content:"";position:absolute;inset:auto -20px -30px auto;width:90px;height:90px;border-radius:50%;background:radial-gradient(circle,rgba(61,220,151,.28),transparent 70%)}'
+'.card .ic{box-shadow:0 0 22px rgba(61,220,151,.45)}.btn:not(.ghost):not(.sm){position:relative;overflow:hidden}.btn:not(.ghost):not(.sm)::after{content:"";position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.45),transparent);transform:skewX(-20deg)}'
+'.tick{overflow:hidden;mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)}.tick .trk{display:flex;gap:10px;width:max-content}'
+'@media(prefers-reduced-motion:no-preference){.btn:not(.ghost):not(.sm):hover::after{left:130%;transition:left .7s}.tick .trk{animation:mq 38s linear infinite}@keyframes mq{to{transform:translateX(-50%)}}.hero .art::after{animation:spin 90s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}}'
+'footer{border-top:1px solid var(--line);margin-top:10px}footer .fm{display:block;width:46px;height:46px;margin:0 auto 10px}footer .fm img,footer .fm svg{width:100%;height:100%}'
+'.offer{margin:8px 0 30px;border-radius:24px;overflow:hidden;border:1px solid rgba(245,185,66,.35);box-shadow:0 24px 70px rgba(0,0,0,.55),0 0 60px rgba(245,185,66,.12);position:relative}.offer img{display:block;width:100%;height:auto}.offer figcaption{position:absolute;left:0;right:0;bottom:0;padding:26px 16px 10px;font-size:11px;color:#E8DFC8;background:linear-gradient(transparent,rgba(0,0,0,.7))}'
+'.promo{display:grid;grid-template-columns:1.1fr .9fr;overflow:hidden;padding:0;border-color:rgba(245,185,66,.4);margin-bottom:30px}.promo>div:last-child{min-height:200px}.promo img{display:block;width:100%;height:100%;object-fit:cover}.promo .pb{padding:22px;display:flex;flex-direction:column;gap:10px;justify-content:center}.pcode{font:600 22px "IBM Plex Mono",ui-monospace,monospace;letter-spacing:.04em;border:1.5px dashed rgba(245,185,66,.7);border-radius:12px;padding:10px 14px;text-align:center;color:#F5B942;background:rgba(245,185,66,.07)}@media(max-width:700px){.promo{grid-template-columns:1fr}}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

function mono(id){return '<svg viewBox="0 0 100 100" role="img" aria-label="NP"><defs><linearGradient id="g'+id+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFE08A"/><stop offset="1" stop-color="#C98A1B"/></linearGradient><linearGradient id="e'+id+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3DDC97"/><stop offset="1" stop-color="#0E7A4B"/></linearGradient></defs><circle cx="50" cy="50" r="47" fill="#07130E" stroke="url(#g'+id+')" stroke-width="2.5"/><text x="34" y="64" text-anchor="middle" font-family="Bricolage Grotesque,Georgia,serif" font-weight="800" font-size="46" fill="url(#g'+id+')">N</text><text x="62" y="64" text-anchor="middle" font-family="Bricolage Grotesque,Georgia,serif" font-weight="800" font-size="46" fill="url(#e'+id+')">P</text><path d="M66 30c9 1 13 7 11 15-9 0-14-6-11-15z" fill="#C8F560"/></svg>'}
var hasLogo=false;
function paintMarks(){
  var b=$('.brand');if(b&&!b.querySelector('.mk')){var m=document.createElement('span');m.className='mk';m.innerHTML=hasLogo?'<img src="assets/np-logo.png" alt="">':mono('b');b.prepend(m)}
  var h=$('.hero .art');if(h&&!h.querySelector('.badge-np')){var d=document.createElement('div');d.className='badge-np';d.innerHTML=hasLogo?'<img src="assets/np-logo.png" alt="Nourishment logo">':mono('h');h.appendChild(d)}
  var f=$('footer');if(f&&!f.querySelector('.fm')){var e=document.createElement('span');e.className='fm';e.innerHTML=hasLogo?'<img src="assets/np-logo.png" alt="">':mono('f');f.prepend(e)}
}
paintMarks();
var lg=new Image();lg.onload=function(){hasLogo=true;document.querySelectorAll('.mk,.badge-np,.fm').forEach(function(x){x.remove()});paintMarks()};lg.src='assets/np-logo.png';

var tk=$('.tick');if(tk&&!tk.querySelector('.trk')){var tr=document.createElement('div');tr.className='trk';while(tk.firstChild)tr.appendChild(tk.firstChild);tk.appendChild(tr);Array.prototype.slice.call(tr.children).forEach(function(c){var k=c.cloneNode(true);k.setAttribute('aria-hidden','true');tr.appendChild(k)})}

function place(f,sel,w){var el=$(sel);if(el)el[w](f)}
function promoCode(){var i=document.getElementById('code'),v=i?(i.value||'').trim().toUpperCase():'';var m=v.match(/^[A-Z0-9]+-([A-Z0-9]+)$/);return m?PROMO.prefix+'-'+m[1]:PROMO.prefix}
if(page==='join'){
  var f=document.createElement('figure');f.className='offer';var i=new Image();i.alt='Nourishment Program offer';
  i.onload=function(){f.appendChild(i);var c=document.createElement('figcaption');c.textContent='Offer shown is a merchant promotion. Commission is calculated on the net price paid.';f.appendChild(c);place(f,'.hero','after')};i.src='assets/offer-2.jpg';
  var t=$('.legal');if(t){var n=document.createElement('p');n.className='legal';n.textContent='Promotional coupons larger than the standard '+(window.CFG?CFG.disc:10)+'% lower the net sale. Commission on those orders is reduced unless the program has approved the promotion in advance.';t.after(n)}
}
if(page==='shop'){
  if(PROMO.on){
    var s=document.createElement('section');s.className='card promo';s.id='promo';
    s.innerHTML='<div class="pb"><span class="pillb" style="align-self:flex-start;margin:0">'+PROMO.label+'</span><h2 style="margin:0">'+PROMO.pct+'% off your package</h2><p class="small muted">Use this code on the order form instead of the standard code. Your affiliate still gets credit.</p><div class="pcode" id="pcode">'+PROMO.prefix+'</div><button class="btn ghost sm" type="button" data-copy="pcode" style="align-self:flex-start">Copy code</button><p class="legal">One use per customer. Cannot be combined with other codes. Offer may end at any time.</p></div>';
    var im=new Image();im.alt='Nourishment Program offer';im.onload=function(){var w=document.createElement('div');w.appendChild(im);s.appendChild(w)};im.src=PROMO.img;
    place(s,'section.panel','before');
    var ci=document.getElementById('code');function up(){var p=document.getElementById('pcode');if(p)p.textContent=promoCode()}
    if(ci)ci.addEventListener('input',up);up();
  }
  var pk={};[1,2,3].forEach(function(n){var x=new Image();x.onload=function(){pk[n-1]=x.src;swap()};x.src='assets/pkg-'+n+'.jpg'});
  function swap(){document.querySelectorAll('#prods .card').forEach(function(c,k){var pa=c.querySelector('.pa');if(pa&&pk[k]&&!pa.querySelector('img')){pa.innerHTML='<img alt="Package '+(k+1)+'" src="'+pk[k]+'" style="width:78%;max-width:none;border-radius:14px">'}})}
  var pr=document.getElementById('prods');if(pr)new MutationObserver(swap).observe(pr,{childList:true});
}
})();
