(function(){
var _words=['Box Furnaces','Pit Furnaces','Bogie Furnaces','Wire Annealing Furnaces','Heat Treatment Furnaces','Elevator Furnaces'];
var _wi=0,_ci=0,_del=false,_twTimer=null;

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
  var headings=document.querySelectorAll('h1,h2');
  for(var j=0;j<headings.length;j++){
    var txt=headings[j].innerText||headings[j].textContent||'';
    if(txt.indexOf('Complete Furnace Catalog')!==-1) return;
  }
  hero.dataset.hi='1';
  hero.style.cssText='position:relative;overflow:hidden;min-height:520px;padding:0;background:#0a0a0a;';

  // Heat glow background - darker, deeper red-black tone
  var glowBg=document.createElement('div');
  glowBg.style.cssText='position:absolute;bottom:0;left:0;right:0;height:80%;background:linear-gradient(to top,rgba(249,115,22,0.65) 0%,rgba(234,88,12,0.40) 30%,rgba(194,65,12,0.18) 60%,transparent 100%);z-index:0;';

  // Extra orange pulse layer at bottom
  var glowBg2=document.createElement('div');
  glowBg2.style.cssText='position:absolute;bottom:0;left:20%;right:20%;height:40%;background:radial-gradient(ellipse at bottom,rgba(249,115,22,0.45) 0%,transparent 70%);z-index:0;';

  // Dark overlay to deepen the whole hero
  var darkOverlay=document.createElement('div');
  darkOverlay.style.cssText='position:absolute;inset:0;background:rgba(0,0,0,0.45);z-index:0;';

  // Particles - dark ember colors
  var particleBg=document.createElement('div');
  particleBg.style.cssText='position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0;';
  var colors=['#f97316','#ea580c','#c2410c','#fb923c','#f59e0b','#fed7aa'];
  // Rising bubbles from bottom
  for(var p=0;p<35;p++){
    (function(){
      var particle=document.createElement('div');
      var x=Math.random()*100;
      var dur=(2+Math.random()*4).toFixed(1);
      var delay=(Math.random()*4).toFixed(1);
      var size=(3+Math.random()*5).toFixed(1);
      var color=colors[Math.floor(Math.random()*colors.length)];
      particle.style.cssText='position:absolute;bottom:-10px;left:'+x+'%;width:'+size+'px;height:'+size+'px;background:'+color+';border-radius:50%;opacity:0;animation:rjrise '+dur+'s '+delay+'s infinite ease-out;';
      particleBg.appendChild(particle);
    })();
  }
  // Falling bubbles from top
  for(var q=0;q<35;q++){
    (function(){
      var particle=document.createElement('div');
      var x=Math.random()*100;
      var dur=(2+Math.random()*4).toFixed(1);
      var delay=(Math.random()*4).toFixed(1);
      var size=(3+Math.random()*5).toFixed(1);
      var color=colors[Math.floor(Math.random()*colors.length)];
      particle.style.cssText='position:absolute;top:-10px;left:'+x+'%;width:'+size+'px;height:'+size+'px;background:'+color+';border-radius:50%;opacity:0;animation:rjfall '+dur+'s '+delay+'s infinite ease-out;';
      particleBg.appendChild(particle);
    })();
  }

  if(!document.getElementById('rjheat-style')){
    var st=document.createElement('style');
    st.id='rjheat-style';
    st.textContent='@keyframes rjrise{0%{transform:translateY(0) scale(1);opacity:0.9}40%{opacity:0.6}100%{transform:translateY(-350px) scale(0.05);opacity:0}}@keyframes rjfall{0%{transform:translateY(0) scale(1);opacity:0.9}40%{opacity:0.6}100%{transform:translateY(350px) scale(0.05);opacity:0}}@keyframes rjblink{0%,100%{opacity:1}50%{opacity:0}}';
    document.head.appendChild(st);
  }



  // Left content
  var leftPanel=document.createElement('div');
  leftPanel.style.cssText='position:absolute;top:0;bottom:60px;left:0;width:100%;display:flex;flex-direction:column;justify-content:center;padding:2rem 2rem 1rem 2.5rem;z-index:2;';

  var badge=document.createElement('div');
  badge.style.cssText='display:inline-flex;align-items:center;gap:6px;background:rgba(249,115,22,0.15);border:1px solid rgba(249,115,22,0.35);color:#fb923c;font-size:10px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;padding:5px 10px;border-radius:3px;width:fit-content;margin-bottom:14px;';
  badge.innerHTML='<span style="width:5px;height:5px;background:#f97316;border-radius:50%;display:inline-block;animation:rjblink 1.5s infinite;"></span> Est. 1989 · Coimbatore';

  var weBuild=document.createElement('div');
  weBuild.style.cssText='font-size:clamp(1.4rem,3vw,2.2rem);font-weight:800;color:#f8fafc;line-height:1.1;';
  weBuild.textContent='We build';

  var twEl=document.createElement('div');
  twEl.style.cssText='font-size:clamp(1.4rem,3vw,2.2rem);font-weight:800;color:#f97316;line-height:1.1;min-height:2.5rem;margin-bottom:10px;';
  var twSpan=document.createElement('span');
  twSpan.style.cssText='border-right:2px solid #f97316;padding-right:3px;';
  twEl.appendChild(twSpan);

  var divider=document.createElement('div');
  divider.style.cssText='width:40px;height:3px;background:#f97316;border-radius:2px;margin-bottom:12px;';

  var descEl=document.createElement('div');
  descEl.style.cssText='font-size:12px;color:#94a3b8;margin-bottom:18px;line-height:1.7;';
  descEl.textContent='Manufacturers and service providers for all types of heat treatment furnaces and allied equipment';

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

  // Stats bar
  var statsBar=document.createElement('div');
  statsBar.style.cssText='position:absolute;bottom:0;left:0;right:0;background:rgba(10,10,10,0.95);border-top:1px solid rgba(249,115,22,0.2);display:flex;z-index:3;height:60px;';

  var sd=document.createElement('div');
  sd.style.cssText='flex:1;padding:10px 20px;text-align:center;display:flex;flex-direction:column;justify-content:center;';
  sd.innerHTML='<div style="font-size:1.2rem;font-weight:800;color:#f97316;line-height:1">40+</div><div style="font-size:9px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#64748b;margin-top:3px">Years Field Experience</div>';
  statsBar.appendChild(sd);

  // Orange left accent
  var accent=document.createElement('div');
  accent.style.cssText='position:absolute;top:0;left:0;bottom:0;width:4px;background:linear-gradient(to bottom,transparent,#f97316,transparent);z-index:4;';

  hero.innerHTML='';
  hero.appendChild(glowBg);
  hero.appendChild(glowBg2);
  hero.appendChild(darkOverlay);
  hero.appendChild(particleBg);
  hero.appendChild(leftPanel);
  hero.appendChild(statsBar);
  hero.appendChild(accent);

  // Typewriter
  if(_twTimer)clearInterval(_twTimer);
  _twTimer=setInterval(function(){
    var w=_words[_wi];
    if(!_del){twSpan.textContent=w.slice(0,_ci+1);_ci++;if(_ci>=w.length)_del=true;}
    else{twSpan.textContent=w.slice(0,_ci-1);_ci--;if(_ci<=0){_del=false;_wi=(_wi+1)%_words.length;}}
  },80);
}

var _obs=new MutationObserver(function(){
  var hero=_findHero();
  if(hero&&!hero.dataset.hi){_init(hero);}
});
_obs.observe(document.documentElement,{childList:true,subtree:true});
var hero=_findHero();
if(hero){_init(hero);}
})();
