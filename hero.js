/* Deep emerald flower: layered leaves, glow, depth of field. Builds an SVG at runtime. Used on the Join hero and on flower.html */
(function(){
function rnd(seed){return function(){seed|=0;seed=seed+0x6D2B79F5|0;var t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function mix(a,b,x){return '#'+[0,1,2].map(function(i){var v=Math.round(a[i]+(b[i]-a[i])*x);return (v<16?'0':'')+v.toString(16)}).join('')}
function leaf(L,W){return 'M0 0C'+(-W)+' '+(-.22*L).toFixed(1)+' '+(-W*1.08).toFixed(1)+' '+(-.64*L).toFixed(1)+' 0 '+(-L)+'C'+(W*1.08).toFixed(1)+' '+(-.64*L).toFixed(1)+' '+W+' '+(-.22*L).toFixed(1)+' 0 0Z'}
function veins(L,W,col,op){var s='';for(var k=1;k<=6;k++){var y=-L*k/7.6,dx=W*(0.78-0.09*k),dy=-L*0.115;s+='<path d="M0 '+y.toFixed(1)+'Q'+(-dx*.5).toFixed(1)+' '+(y+dy*.2).toFixed(1)+' '+(-dx).toFixed(1)+' '+(y+dy).toFixed(1)+'M0 '+y.toFixed(1)+'Q'+(dx*.5).toFixed(1)+' '+(y+dy*.2).toFixed(1)+' '+dx.toFixed(1)+' '+(y+dy).toFixed(1)+'" stroke="'+col+'" stroke-opacity="'+op.toFixed(2)+'" stroke-width="1.4" fill="none" stroke-linecap="round"/>'}return s}
window.buildFlower=function(o){o=o||{};var R=rnd(7),P=o.p||'fl';
var layers=[[-80,175,48,.15,1.8,0],[78,170,46,.15,1.8,0],[-60,225,58,.28,1.2,0],[58,222,57,.28,1.2,0],[-40,268,68,.5,.6,1],[38,264,67,.5,.6,1],[-19,300,76,.72,0,1],[17,298,75,.72,0,1],[0,335,84,1,0,1]];
var d='<defs><radialGradient id="'+P+'halo" cx="50%" cy="58%" r="50%"><stop offset="0" stop-color="#7CFFC0" stop-opacity=".85"/><stop offset=".35" stop-color="#1FD38A" stop-opacity=".5"/><stop offset=".7" stop-color="#0B6B45" stop-opacity=".14"/><stop offset="1" stop-color="#0B6B45" stop-opacity="0"/></radialGradient>'
+'<radialGradient id="'+P+'bud"><stop offset="0" stop-color="#F4FFD0"/><stop offset=".25" stop-color="#C8F560"/><stop offset=".6" stop-color="#3DDC97" stop-opacity=".7"/><stop offset="1" stop-color="#3DDC97" stop-opacity="0"/></radialGradient>'
+'<linearGradient id="'+P+'ray" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#C8F560" stop-opacity=".5"/><stop offset="1" stop-color="#3DDC97" stop-opacity="0"/></linearGradient>'
+'<filter id="'+P+'bloom" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>'
+'<filter id="'+P+'soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="14"/></filter>'
+'<filter id="'+P+'shad" x="-30%" y="-20%" width="160%" height="150%"><feDropShadow dx="0" dy="7" stdDeviation="7" flood-color="#00120A" flood-opacity=".65"/></filter>'
+'<filter id="'+P+'d1"><feGaussianBlur stdDeviation="1.8"/></filter><filter id="'+P+'d2"><feGaussianBlur stdDeviation="1.2"/></filter><filter id="'+P+'d3"><feGaussianBlur stdDeviation=".6"/></filter><filter id="'+P+'sp" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="1.6"/></filter></defs>';
var s='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 420" role="img" aria-label="Glowing emerald flower" style="width:100%;height:auto;display:block">'+d;
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
 +'<path d="M0 -4V'+(-L*.97).toFixed(1)+'" stroke="#E8FFC8" stroke-opacity="'+(.25+.6*t).toFixed(2)+'" stroke-width="'+(1.6+1.6*t).toFixed(1)+'" stroke-linecap="round" '+(t>.45?'filter="url(#'+P+'bloom)"':'')+'/>'
 +veins(L,W,'#D8FFB0',.12+.3*t)
 +'<path d="M'+(-W*.52).toFixed(1)+' '+(-.3*L).toFixed(1)+'C'+(-W*.9).toFixed(1)+' '+(-.5*L).toFixed(1)+' '+(-W*.78).toFixed(1)+' '+(-.72*L).toFixed(1)+' '+(-W*.2).toFixed(1)+' '+(-.93*L).toFixed(1)+'" stroke="#CFFFE6" stroke-opacity="'+(.1+.45*t).toFixed(2)+'" stroke-width="2.2" fill="none" stroke-linecap="round" filter="url(#'+P+'d3)"/>'
 +'<path d="'+leaf(L,W)+'" fill="none" stroke="#9BFFD2" stroke-opacity="'+(.1+.35*t).toFixed(2)+'" stroke-width="1"/></g>'});
s+='<circle cx="200" cy="378" r="46" fill="url(#'+P+'bud)" filter="url(#'+P+'bloom)"/><circle cx="200" cy="378" r="12" fill="#FFFFE8" opacity=".9" filter="url(#'+P+'sp)"/></g>';
var cols=['#C8F560','#7CFFC0','#E8FFD0','#F5D56A'],rs=[1.2,1.6,2.2,3,4.5];
for(var i=0;i<46;i++){var x=30+R()*340,y=30+R()*360,r=rs[Math.floor(R()*5)],op=.25+R()*.7,col=cols[Math.floor(R()*4)];s+='<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+r+'" fill="'+col+'" opacity="'+op.toFixed(2)+'" '+(r>2.5?'filter="url(#'+P+'sp)"':'')+'/>'}
return s+'</svg>'};
var page=document.body.dataset.page;
if(page==='flower'){var st=document.getElementById('stage');if(st)st.innerHTML=window.buildFlower({bg:true,p:'fs'})}
else{var a=document.querySelector('.hero .art');if(a){var old=a.querySelector('svg');if(old){var w=document.createElement('div');w.innerHTML=window.buildFlower({p:'fh'});old.replaceWith(w.firstChild)}}}
})();
