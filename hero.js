(function(){
var _SI=[
  {src:'/slide1.jpg',title:'Furnace Delivery',desc:'Industrial-grade furnace ready for client delivery'},
  {src:'/slide2.jpg',title:'Coil Lining',desc:'Coil relining works'},
  {src:'/slide3.jpg',title:'Heat Treatment Furnace',desc:'Custom-built heat treatment furnace'},
  {src:'/slide4.jpg',title:'Industrial Furnace',desc:'Heavy-duty industrial furnace unit'},
  {src:'/slide5.jpg',title:'RJ Heat Tech Factory',desc:'Our manufacturing facility in Coimbatore'},
  {src:'/slide6.jpg',title:'Bogie Type Heat Treatment Furnace',desc:'Custom-built furnace'},
  {src:'/slide7.jpg',title:'Wire Annealing Furnace',desc:'Efficient heat-treatment solution for producing soft, high-quality annealed metal wires'},
  {src:'/slide8.jpg',title:'Furnace Installation',desc:'On-site furnace installation and commissioning'},
  {src:'/slide9.jpg',title:'Pit Furnace',desc:'Custom pit furnace build'}
];
var _sc=0,_timer=null,_twTimer=null;
var _words=['Box Furnaces','Pit Furnaces','Bogie Furnaces','Wire Annealing Furnaces','Heat Treatment Furnaces','Elevator Furnaces'];
var _wi=0,_ci=0,_del=false;

function _findHero(){
  var sections=document.querySelectorAll('section');
  for(var i=0;i<sections.length;i++){
    if(sections[i].className&&sections[i].className.indexOf('from-slate-900')!==-1&&sections[i].className.indexOf('py-20')!==-1){
      return sections[i];
    }
  }
  return null;
}

function _init(hero){
  if(hero.dataset.hi)return;
  // Skip catalog page
  var headings=document.querySelectorAll('h1,h2');
  for(var j=0;j<headings.length;j++){
    var txt=headings[j].innerText||headings[j].textContent||'';
    if(txt.indexOf('Complete Furnace Catalog')!==-1||txt.indexOf('Catalog')!==-1) return;
  }
  hero.dataset.hi='1';

  // Reset hero styles
  hero.style.cssText='position:relative;overflow:hidden;min-height:520px;padding:0;background:#0a0a0a;';

  // Remove existing children to replace with our design
  var existingChildren=Array.from(hero.children);

  // === HEAT PARTICLE BG ===
  var particleBg=document.createElement('div');
  particleBg.style.cssText='position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0;';
  var glowBg=document.createElement('div');
  glowBg.style.cssText='position:absolute;bottom:0;left:0;right:0;height:70%;background:linear-gradient(to top,rgba(249,115,22,0.1),transparent);z-index:0;';

  // Add particles
  for(var p=0;p<20;p++){
    (function(){
      var particle=document.createElement('div');
      var x=Math.random()*55;
      var dur=(2+Math.random()*4).toFixed(1);
      var delay=(Math.random()*4).toFixed(1);
      var size=(1.5+Math.random()*3).toFixed(1);
      particle.style.cssText='position:absolute;bottom:-10px;left:'+x+'%;width:'+size+'px;height:'+size+'px;background:#f97316;border-radius:50%;opacity:0;animation:rjrise '+dur+'s '+delay+'s infinite ease-out;';
      particleBg.appendChild(particle);
    })();
  }

  // Particle animation
  if(!document.getElementById('rjheat-style')){
    var st=document.createElement('style');
    st.id='rjheat-style';
    st.textContent='@keyframes rjrise{0%{transform:translateY(0) scale(1);opacity:0.7}100%{transform:translateY(-300px) scale(0.2);opacity:0}}@keyframes rjblink{0%,100%{opacity:1}50%{opacity:0}}';
    document.head.appendChild(st);
  }

  // === DIAGONAL RIGHT PANEL ===
  var rightPanel=document.createElement('div');
  rightPanel.style.cssText='position:absolute;top:0;bottom:0;right:0;width:50%;background:linear-gradient(135deg,#1a1a1a 0%,#0d0d0d 100%);clip-path:polygon(18% 0,100% 0,100% 100%,0% 100%);display:flex;align-items:center;justify-content:center;z-index:1;';

  var rightInner=document.createElement('div');
  rightInner.style.cssText='margin-left:40px;text-align:center;';

  // Slide image
  var slideImg=document.createElement('div');
  slideImg.id='rj-slide-img';
  slideImg.style.cssText='width:160px;height:120px;background-size:cover;background-position:center;border-radius:8px;border:2px solid rgba(249,115,22,0.4);margin:0 auto;background-image:url('+_SI[0].src+');transition:opacity 0.8s;';

  var furnaceLabel=document.createElement('div');
  furnaceLabel.style.cssText='font-size:9px;color:#f97316;letter-spacing:0.2em;text-transform:uppercase;margin-top:10px;font-weight:700;';
  furnaceLabel.textContent='Heat Treatment';

  // Slide dots
  var dotsEl=document.createElement('div');
  dotsEl.style.cssText='display:flex;gap:5px;margin-top:10px;justify-content:center;';
  for(var d=0;d<_SI.length;d++){
    (function(idx){
      var dot=document.createElement('div');
      dot.style.cssText='height:5px;border-radius:3px;cursor:pointer;transition:all 0.3s;background:'+(idx===0?'#f97316':'rgba(249,115,22,0.3)')+';width:'+(idx===0?'18':'6')+'px;';
      dot.onclick=function(){_goto(idx);};
      dotsEl.appendChild(dot);
    })(d);
  }

  rightInner.appendChild(slideImg);
  rightInner.appendChild(furnaceLabel);
  rightInner.appendChild(dotsEl);
  rightPanel.appendChild(rightInner);

  // === LEFT CONTENT ===
  var leftPanel=document.createElement('div');
  leftPanel.style.cssText='position:absolute;top:0;bottom:60px;left:0;width:55%;display:flex;flex-direction:column;justify-content:center;padding:2rem 2rem 1rem 2.5rem;z-index:2;';

  // Badge
  var badge=document.createElement('div');
  badge.style.cssText='display:inline-flex;align-items:center;gap:6px;background:rgba(249,115,22,0.15);border:1px solid rgba(249,115,22,0.35);color:#fb923c;font-size:10px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;padding:5px 10px;border-radius:3px;width:fit-content;margin-bottom:14px;';
  badge.innerHTML='<span style="width:5px;height:5px;background:#f97316;border-radius:50%;display:inline-block;animation:rjblink 1.5s infinite;"></span> Est. 1989 · Coimbatore';

  // We build text
  var weBuild=document.createElement('div');
  weBuild.style.cssText='font-size:clamp(1.4rem,3vw,2.2rem);font-weight:800;color:#f8fafc;line-height:1.1;';
  weBuild.textContent='We build';

  // Typewriter
  var twEl=document.createElement('div');
  twEl.style.cssText='font-size:clamp(1.4rem,3vw,2.2rem);font-weight:800;color:#f97316;line-height:1.1;min-height:2.5rem;margin-bottom:10px;';
  var twSpan=document.createElement('span');
  twSpan.style.cssText='border-right:2px solid #f97316;padding-right:3px;';
  twEl.appendChild(twSpan);

  // Divider
  var divider=document.createElement('div');
  divider.style.cssText='width:40px;height:3px;background:#f97316;border-radius:2px;margin-bottom:12px;';

  // Description
  var descEl=document.createElement('div');
  descEl.style.cssText='font-size:12px;color:#94a3b8;margin-bottom:18px;line-height:1.7;';
  descEl.textContent='Manufacturers and service providers for all types of heat treatment furnaces and allied equipment';

  // Buttons
  var btns=document.createElement('div');
  btns.style.cssText='display:flex;gap:10px;flex-wrap:wrap;';

  var btn1=document.createElement('button');
  btn1.textContent='Request a Custom Quote';
  btn1.style.cssText='background:#f97316;color:#fff;padding:10px 20px;border:none;font-size:12px;font-weight:700;border-radius:4px;cursor:pointer;';
  btn1.onclick=function(){
    var qs=document.getElementById('quote-section');
    if(qs)qs.scrollIntoView({behavior:'smooth'});
  };

  var btn2=document.createElement('button');
  btn2.textContent='View Complete Catalog';
  btn2.style.cssText='background:transparent;color:#f8fafc;padding:10px 20px;border:1px solid rgba(255,255,255,0.2);font-size:12px;font-weight:600;border-radius:4px;cursor:pointer;';
  btn2.onclick=function(){
    var navBtns=document.querySelectorAll('button,a');
    for(var i=0;i<navBtns.length;i++){
      var t=navBtns[i].textContent||navBtns[i].innerText||'';
      if(t.toLowerCase().indexOf('catalog')!==-1&&navBtns[i]!==btn2){navBtns[i].click();return;}
    }
  };

  btns.appendChild(btn1);btns.appendChild(btn2);
  leftPanel.appendChild(badge);leftPanel.appendChild(weBuild);leftPanel.appendChild(twEl);
  leftPanel.appendChild(divider);leftPanel.appendChild(descEl);leftPanel.appendChild(btns);

  // === STATS BAR ===
  var statsBar=document.createElement('div');
  statsBar.style.cssText='position:absolute;bottom:0;left:0;right:0;background:rgba(10,10,10,0.95);border-top:1px solid rgba(249,115,22,0.2);display:flex;z-index:3;height:60px;';
  [['15+','Years Experience'],['50+','Clients Served']].forEach(function(s){
    var st2=document.createElement('div');
    st2.style.cssText='flex:1;padding:10px 20px;text-align:center;border-right:1px solid rgba(255,255,255,0.06);display:flex;flex-direction:column;justify-content:center;';
    st2.innerHTML='<div style="font-size:1.2rem;font-weight:800;color:#f97316;line-height:1">'+s[0]+'</div><div style="font-size:9px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#64748b;margin-top:3px">'+s[1]+'</div>';
    statsBar.appendChild(st2);
  });

  // === ORANGE LEFT ACCENT ===
  var accent=document.createElement('div');
  accent.style.cssText='position:absolute;top:0;left:0;bottom:0;width:4px;background:linear-gradient(to bottom,transparent,#f97316,transparent);z-index:4;';

  // Assemble
  hero.innerHTML='';
  hero.appendChild(glowBg);
  hero.appendChild(particleBg);
  hero.appendChild(rightPanel);
  hero.appendChild(leftPanel);
  hero.appendChild(statsBar);
  hero.appendChild(accent);

  // === TYPEWRITER ===
  if(_twTimer)clearInterval(_twTimer);
  _twTimer=setInterval(function(){
    var w=_words[_wi];
    if(!_del){twSpan.textContent=w.slice(0,_ci+1);_ci++;if(_ci>=w.length)_del=true;}
    else{twSpan.textContent=w.slice(0,_ci-1);_ci--;if(_ci<=0){_del=false;_wi=(_wi+1)%_words.length;}}
  },80);

  // === SLIDE FUNCTION ===
  function _goto(n){
    _sc=n;
    var img=document.getElementById('rj-slide-img');
    if(img){img.style.opacity='0';setTimeout(function(){img.style.backgroundImage='url('+_SI[_sc].src+')';img.style.opacity='1';},400);}
    dotsEl.querySelectorAll('div').forEach(function(dot,i){
      dot.style.background=i===_sc?'#f97316':'rgba(249,115,22,0.3)';
      dot.style.width=i===_sc?'18px':'6px';
    });
  }

  if(_timer)clearInterval(_timer);
  _timer=setInterval(function(){_goto((_sc+1)%_SI.length);},4000);
}

// Watch for React navigation
var _obs=new MutationObserver(function(){
  var hero=_findHero();
  if(hero&&!hero.dataset.hi){_init(hero);}
});
_obs.observe(document.documentElement,{childList:true,subtree:true});
var hero=_findHero();
if(hero){_init(hero);}
})();
