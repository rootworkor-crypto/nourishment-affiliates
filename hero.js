/* Deep emerald flower: layered leaves, glow, depth of field. Builds an SVG at runtime. Used on the Join hero and on flower.html */
(function(){
function rnd(seed){return function(){seed|=0;seed=seed+0x6D2B79F5|0;var t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function mix(a,b,x){return '#'+[0,1,2].map(function(i){var v=Math.round(a[i]+(b[i]-a[i])*x);return (v<16?'0':'')+v.toString(16)}).join('')}
function leaf(L,W){return 'M0 0C'+(-W)+' '+(-.22*L).toFixed(1)+' '+(-W*1.08).toFixed(1)+' '+(-.64*L).toFixed(1)+' 0 '+(-L)+'C'+(W*1.08).toFixed(1)+' '+(-.64*L).toFixed(1)+' '+W+' '+(-.22*L).toFixed(1)+' 0 0Z'}
function hw(u,W){return .8*W*Math.pow(Math.sin(Math.PI*Math.pow(u,.72)),.9)*(1-.12*u)}
function zig(x0,y0,x1,y1,R,amp){var n=4,p='M'+x0.toFixed(1)+' '+y0.toFixed(1);for(var i=1;i<=n;i++){var f=i/n,x=x0+(x1-x0)*f+(i<n?(R()-.5)*amp:0),y=y0+(y1-y0)*f+(i<n?(R()-.5)*amp:0);p+='L'+x.toFixed(1)+' '+y.toFixed(1)}return p}
function veinSet(L,W,t,R,P,still,lite){
 var sec=[],ter=[],pulses=[],N=7;
 for(var i=0;i<N;i++){var u0=.1+.76*i/N,u1=Math.min(.97,u0+.17+.02*i/N);
  [-1,1].forEach(function(sd){var h0=hw(u0,W),h1=hw(u1,W);
   var d='M0 '+(-L*u0).toFixed(1)+'C'+(sd*h0*.3).toFixed(1)+' '+(-L*(u0+.02)).toFixed(1)+' '+(sd*h1*.7).toFixed(1)+' '+(-L*(u0+.08)).toFixed(1)+' '+(sd*h1*.92).toFixed(1)+' '+(-L*u1).toFixed(1);
   sec.push(d);
   for(var k=0;k<2;k++){var f=.38+.3*k,bx=sd*(h0*.3+(h1*.92-h0*.3)*f),by=-L*(u0+(u1-u0)*f*1.05);
    var ex=bx+sd*W*(.16+R()*.1),ey=by-L*(.05+R()*.04);ter.push(zig(bx,by,ex,ey,R,W*.07))}
   if(i%2===0&&t>.3){var ax=sd*h1*.92,ay=-L*u1;ter.push(zig(ax,ay,ax-sd*W*.12,ay-L*.06,R,W*.05))}
   pulses.push(d)})}
 var mid='M0 -4Q'+(W*.03).toFixed(1)+' '+(-L*.5).toFixed(1)+' 0 '+(-L*.97).toFixed(1);
 var core=1+1.3*t,glow=.35+.65*t,h='';
 h+='<g filter="url(#'+P+'vg)" fill="none" stroke-linecap="round" stroke-linejoin="round">';
 h+='<path d="'+mid+'" stroke="#7CFFC0" stroke-opacity="'+(.55*glow).toFixed(2)+'" stroke-width="'+(core*3.4).toFixed(1)+'"/>';
 sec.forEach(function(d){h+='<path d="'+d+'" stroke="#5CF0A8" stroke-opacity="'+(.45*glow).toFixed(2)+'" stroke-width="'+(core*1.9).toFixed(1)+'"/>'});
 ter.forEach(function(d){h+='<path d="'+d+'" stroke="#9BFFD2" stroke-opacity="'+(.38*glow).toFixed(2)+'" stroke-width="'+(core*.8).toFixed(2)+'"/>'});
 h+='</g><g fill="none" stroke-linecap="round" stroke-linejoin="round">';
 h+='<path d="'+mid+'" stroke="#F2FFE0" stroke-opacity="'+(.5+.45*t).toFixed(2)+'" stroke-width="'+(core*.95).toFixed(2)+'"/>';
 sec.forEach(function(d){h+='<path d="'+d+'" stroke="#E4FFD0" stroke-opacity="'+(.3+.4*t).toFixed(2)+'" stroke-width="'+(core*.55).toFixed(2)+'"/>'});
 ter.forEach(function(d){h+='<path d="'+d+'" stroke="#D8FFC0" stroke-opacity="'+(.22+.3*t).toFixed(2)+'" stroke-width="'+(core*.32).toFixed(2)+'"/>'});
 h+='</g>';
 if(t>.25&&!lite){h+='<g fill="none" stroke-linecap="round" filter="url(#'+P+'vg)">';
  var all=[mid].concat(sec),cnt=0;
  all.forEach(function(d,ix){if(ix>0&&R()>.55)return;var del=(R()*3).toFixed(2),off=(R()).toFixed(2);
   h+='<path class="'+P+'pl" pathLength="1" d="'+d+'" stroke="#FFFFF0" stroke-width="'+(core*(ix?1.1:2)).toFixed(2)+'" stroke-opacity=".95" style="animation-delay:-'+del+'s;'+(still?'animation:none;stroke-dasharray:.1 .9;stroke-dashoffset:'+off:'')+'"/>'});
  h+='</g>'}
 return h}
window.buildFlower=function(o){o=o||{};var R=rnd(7),P=o.p||'fl';
var layers=[[-80,175,48,.15,1.8,0],[78,170,46,.15,1.8,0],[-60,225,58,.28,1.2,0],[58,222,57,.28,1.2,0],[-40,268,68,.5,.6,1],[38,264,67,.5,.6,1],[-19,300,76,.72,0,1],[17,298,75,.72,0,1],[0,335,84,1,0,1]];
var d='<defs><radialGradient id="'+P+'halo" cx="50%" cy="58%" r="50%"><stop offset="0" stop-color="#7CFFC0" stop-opacity=".85"/><stop offset=".35" stop-color="#1FD38A" stop-opacity=".5"/><stop offset=".7" stop-color="#0B6B45" stop-opacity=".14"/><stop offset="1" stop-color="#0B6B45" stop-opacity="0"/></radialGradient>'
+'<radialGradient id="'+P+'bud"><stop offset="0" stop-color="#F4FFD0"/><stop offset=".25" stop-color="#C8F560"/><stop offset=".6" stop-color="#3DDC97" stop-opacity=".7"/><stop offset="1" stop-color="#3DDC97" stop-opacity="0"/></radialGradient>'
+'<linearGradient id="'+P+'ray" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#C8F560" stop-opacity=".5"/><stop offset="1" stop-color="#3DDC97" stop-opacity="0"/></linearGradient>'
+'<filter id="'+P+'vg" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>'
+'<filter id="'+P+'bloom" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>'
+'<filter id="'+P+'soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="14"/></filter>'
+'<filter id="'+P+'shad" x="-30%" y="-20%" width="160%" height="150%"><feDropShadow dx="0" dy="7" stdDeviation="7" flood-color="#00120A" flood-opacity=".65"/></filter>'
+'<filter id="'+P+'d1"><feGaussianBlur stdDeviation="1.8"/></filter><filter id="'+P+'d2"><feGaussianBlur stdDeviation="1.2"/></filter><filter id="'+P+'d3"><feGaussianBlur stdDeviation=".6"/></filter><filter id="'+P+'sp" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="1.6"/></filter></defs>';
var s='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 420" role="img" aria-label="Glowing emerald flower" style="width:100%;height:auto;display:block">'+'<style>.'+P+'pl{stroke-dasharray:.1 .9;animation:'+P+'run 3.4s linear infinite}@keyframes '+P+'run{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}@media(prefers-reduced-motion:reduce){.'+P+'pl{animation:none;stroke-dashoffset:.5}}</style>'+d;
if(o.bg)s+='<rect width="400" height="420" fill="#04100B"/>';
s+='<circle cx="200" cy="230" r="215" fill="url(#'+P+'halo)"/>';
for(var a=-70;a<80;a+=28)s+='<g transform="translate(200 385) rotate('+a+')" filter="url(#'+P+'soft)" opacity=".55"><path d="M-14 0L0 -330L14 0Z" fill="url(#'+P+'ray)"/></g>';
s+='<ellipse cx="200" cy="388" rx="130" ry="16" fill="#3DDC97" opacity=".35" filter="url(#'+P+'soft)"/><g transform="translate(200 392) scale(.8) translate(-200 -392)">';
layers.forEach(function(l,n){var ang=l[0],L=l[1],W=l[2],t=l[3],bl=l[4],sh=l[5];
 var e=mix([2,28,18],[10,110,70],t),m=mix([6,70,44],[31,200,125],t),c=mix([18,120,76],[125,255,185],t),tp=mix([60,140,60],[220,255,120],t);
 var f=bl>=1.5?'filter="url(#'+P+'d1)"':bl>=1?'filter="url(#'+P+'d2)"':bl>0?'filter="url(#'+P+'d3)"':'';
 s+='<linearGradient id="'+P+'g'+n+'" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="'+e+'"/><stop offset=".38" stop-color="'+m+'"/><stop offset=".5" stop-color="'+c+'"/><stop offset=".66" stop-color="'+m+'"/><stop offset="1" stop-color="'+e+'"/></linearGradient>'
 +'<linearGradient id="'+P+'v'+n+'" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#02140C" stop-opacity=".75"/><stop offset=".45" stop-color="#02140C" stop-opacity="0"/><stop offset="1" stop-color="'+tp+'" stop-opacity="'+(.15+.55*t).toFixed(2)+'"/></linearGradient>'
 +'<g transform="translate(200 385) rotate('+ang+')" '+f+'><g '+(sh?'filter="url(#'+P+'shad)"':'')+'><path d="'+leaf(L,W)+'" fill="url(#'+P+'g'+n+')"/></g><path d="'+leaf(L,W)+'" fill="url(#'+P+'v'+n+')"/>'
 +veinSet(L,W,t,R,P,o.still,o.lite)
 +'<path d="M'+(-W*.52).toFixed(1)+' '+(-.3*L).toFixed(1)+'C'+(-W*.9).toFixed(1)+' '+(-.5*L).toFixed(1)+' '+(-W*.78).toFixed(1)+' '+(-.72*L).toFixed(1)+' '+(-W*.2).toFixed(1)+' '+(-.93*L).toFixed(1)+'" stroke="#CFFFE6" stroke-opacity="'+(.1+.45*t).toFixed(2)+'" stroke-width="2.2" fill="none" stroke-linecap="round" filter="url(#'+P+'d3)"/>'
 +'<path d="'+leaf(L,W)+'" fill="none" stroke="#9BFFD2" stroke-opacity="'+(.1+.35*t).toFixed(2)+'" stroke-width="1"/></g>'});
s+='<circle cx="200" cy="378" r="46" fill="url(#'+P+'bud)" filter="url(#'+P+'bloom)"/><circle cx="200" cy="378" r="12" fill="#FFFFE8" opacity=".9" filter="url(#'+P+'sp)"/></g>';
var cols=['#C8F560','#7CFFC0','#E8FFD0','#F5D56A'],rs=[1.2,1.6,2.2,3,4.5];
for(var i=0,np=o.lite?22:46;i<np;i++){var x=30+R()*340,y=30+R()*360,r=rs[Math.floor(R()*5)],op=.25+R()*.7,col=cols[Math.floor(R()*4)];s+='<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+r+'" fill="'+col+'" opacity="'+op.toFixed(2)+'" '+(r>2.5?'filter="url(#'+P+'sp)"':'')+'/>'}
return s+'</svg>'};
var page=document.body.dataset.page;
if(page==='flower'){var st=document.getElementById('stage');if(st)st.innerHTML=window.buildFlower({bg:true,p:'fs'})}
else{var a=document.querySelector('.hero .art');if(a){var old=a.querySelector('svg');if(old){var w=document.createElement('div');w.innerHTML=window.buildFlower({p:'fh',lite:true});old.replaceWith(w.firstChild)}}}
})();
