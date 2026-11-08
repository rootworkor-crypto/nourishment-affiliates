/* Picture slots. Shows a banner only when its file exists in /assets, so nothing breaks before upload. */
(function(){
var page=document.body.dataset.page;
var st=document.createElement('style');
st.textContent='.offer{margin:8px 0 30px;border-radius:24px;overflow:hidden;border:1px solid rgba(245,185,66,.35);box-shadow:0 24px 70px rgba(0,0,0,.55),0 0 60px rgba(245,185,66,.12);position:relative}.offer img{display:block;width:100%;height:auto}.offer figcaption{position:absolute;left:0;right:0;bottom:0;padding:26px 16px 10px;font-size:11px;color:#E8DFC8;background:linear-gradient(transparent,rgba(0,0,0,.7))}';
document.head.appendChild(st);
function slot(src,alt,cap,place){var f=document.createElement('figure');f.className='offer';f.style.margin='8px 0 30px';var i=new Image();i.alt=alt;i.loading='lazy';
  i.onload=function(){f.appendChild(i);if(cap){var c=document.createElement('figcaption');c.textContent=cap;f.appendChild(c)}place(f)};i.src=src}
if(page==='join'){slot('assets/offer-1.jpg','Nourishment Program offer','Offer shown is the merchant promotion. Program commission is calculated on the net sale.',function(f){var h=document.querySelector('.hero');if(h)h.after(f)})}
if(page==='shop'){slot('assets/offer-2.jpg','Nourishment Program offer','',function(f){var s=document.querySelector('section.panel');if(s)s.before(f)})}
})();
