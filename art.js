/* Extras layer: picture slots, promo coupon card, net-price note. Settings for the promo are in PROMO below. */
(function(){
var PROMO={on:true,pct:20,prefix:'NP20',label:'Limited one-time offer',img:'assets/offer-1.jpg'};
var page=document.body.dataset.page;
var st=document.createElement('style');
st.textContent='.offer{margin:8px 0 30px;border-radius:24px;overflow:hidden;border:1px solid rgba(245,185,66,.35);box-shadow:0 24px 70px rgba(0,0,0,.55),0 0 60px rgba(245,185,66,.12);position:relative}.offer img{display:block;width:100%;height:auto}.offer figcaption{position:absolute;left:0;right:0;bottom:0;padding:26px 16px 10px;font-size:11px;color:#E8DFC8;background:linear-gradient(transparent,rgba(0,0,0,.7))}.promo{display:grid;grid-template-columns:1.1fr .9fr;gap:0;overflow:hidden;padding:0;border-color:rgba(245,185,66,.4)}.promo img{display:block;width:100%;height:100%;object-fit:cover}.promo .pb{padding:22px;display:flex;flex-direction:column;gap:10px;justify-content:center}.pcode{font:600 22px "IBM Plex Mono",ui-monospace,monospace;letter-spacing:.04em;border:1.5px dashed rgba(245,185,66,.7);border-radius:12px;padding:10px 14px;text-align:center;color:#F5B942;background:rgba(245,185,66,.07)}@media(max-width:700px){.promo{grid-template-columns:1fr}}';
document.head.appendChild(st);
function place(f,sel,where){var el=document.querySelector(sel);if(el)el[where](f)}
function promoCode(){var i=document.getElementById('code'),v=i?(i.value||'').trim().toUpperCase():'';var m=v.match(/^[A-Z0-9]+-([A-Z0-9]+)$/);return m?PROMO.prefix+'-'+m[1]:PROMO.prefix}
if(page==='join'){var f=document.createElement('figure');f.className='offer';var i=new Image();i.alt='Nourishment Program offer';i.loading='lazy';
  i.onload=function(){f.appendChild(i);var c=document.createElement('figcaption');c.textContent='Offer shown is a merchant promotion. Commission is calculated on the net price paid.';f.appendChild(c);place(f,'.hero','after')};i.src='assets/offer-2.jpg';
  var t=document.querySelector('.legal');if(t){var n=document.createElement('p');n.className='legal';n.textContent='Promotional coupons larger than the standard '+(window.CFG?CFG.disc:10)+'% lower the net sale, so the commission on those orders is calculated on the lower net price.';t.after(n)}}
if(page==='shop'&&PROMO.on){
  var s=document.createElement('section');s.className='card promo';s.id='promo';
  s.innerHTML='<div class="pb"><span class="pillb" style="align-self:flex-start;margin:0">'+PROMO.label+'</span><h2 style="margin:0">'+PROMO.pct+'% off your package</h2><p class="small muted">Use this code on the order form instead of the standard code. Your affiliate still gets credit.</p><div class="pcode" id="pcode">'+PROMO.prefix+'</div><button class="btn ghost sm" type="button" data-copy="pcode" style="align-self:flex-start">Copy code</button><p class="legal">One use per customer. Cannot be combined with other codes. Offer may end at any time.</p></div>';
  var im=new Image();im.alt='Nourishment Program offer';im.onload=function(){var w=document.createElement('div');w.appendChild(im);s.appendChild(w)};im.src=PROMO.img;
  place(s,'section.panel','before');
  var ci=document.getElementById('code');if(ci)ci.addEventListener('input',function(){var p=document.getElementById('pcode');if(p)p.textContent=promoCode()});
  var q=new URLSearchParams(location.search).get('ref');if(q){var p=document.getElementById('pcode');if(p)p.textContent=promoCode()}
}
})();
