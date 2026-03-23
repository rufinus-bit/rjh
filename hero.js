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
  {src:'/slide10.jpg',title:'Pit Furnace',desc:'Custom pit furnace build'}
];

function _init(hero){
  if(hero.dataset.hi)return;
  hero.dataset.hi='1';
  hero.style.position='relative';
  hero.style.overflow='hidden';
  hero.style.minHeight='520px';
  hero.style.paddingBottom='70px';

  var sc=0;

  var bg=document.createElement('div');
  bg.style.cssText='position:absolute;top:0;left:0;width:100%;height:100%;background-size:cover;background-position:center center;background-repeat:no-repeat;transition:opacity 1.2s;z-index:0;background-image:url('+_SI[0].src+')';

  var ov1=document.createElement('div');
  ov1.style.cssText='position:absolute;inset:0;background:linear-gradient(to right,rgba(2,6,23,0.92) 0%,rgba(2,6,23,0.7) 45%,rgba(2,6,23,0.2) 100%);z-index:1';
  var ov2=document.createElement('div');
  ov2.style.cssText='position:absolute;inset:0;background:linear-gradient(to bottom,rgba(2,6,23,0.2) 0%,transparent 30%,transparent 70%,rgba(2,6,23,0.4) 100%);z-index:1';

  var accent=document.createElement('div');
  accent.style.cssText='position:absolute;top:0;left:0;bottom:0;width:4px;background:linear-gradient(to bottom,transparent,#f97316,transparent);z-index:3';

  hero.prepend(ov2);hero.prepend(ov1);hero.prepend(bg);hero.prepend(accent);

  var isHome=!!hero.querySelector('button');
  var container=hero.querySelector('div[class*="container"],div[class*="mx-auto"]');
  if(container){container.style.cssText+=';display:flex;justify-content:flex-start;padding-left:5%';}
  var textWrap=hero.querySelector('div[class*="max-w"],div[class*="text-center"]');
  if(textWrap){textWrap.style.cssText+=';text-align:left;max-width:680px;margin-left:0;margin-right:auto';}

  var titleEl=hero.querySelector('h2');
  var descEl=hero.querySelector('p');

  if(isHome){
    if(titleEl){
      titleEl.style.cssText+=';text-align:left;font-size:clamp(1.8rem,3.5vw,3rem);font-weight:800;line-height:1.1;text-shadow:0 2px 30px rgba(0,0,0,0.9);transition:opacity 0.4s,transform 0.4s';
      titleEl.textContent=_SI[0].title;
      var divider=document.createElement('div');
      divider.style.cssText='width:56px;height:3px;background:linear-gradient(90deg,#f97316,#ea580c);margin:0.8rem 0 1rem;border-radius:2px';
      titleEl.parentNode.insertBefore(divider,titleEl.nextSibling);
      var badge=document.createElement('div');
      badge.style.cssText='display:inline-flex;align-items:center;gap:8px;background:rgba(249,115,22,0.15);border:1px solid rgba(249,115,22,0.35);color:#fb923c;font-size:11px;font-weight:700;letter-spacing:0.25em;text-transform:uppercase;padding:6px 14px;border-radius:2px;margin-bottom:1.2rem;width:fit-content';
      badge.innerHTML='<span style="width:6px;height:6px;background:#f97316;border-radius:50%;display:inline-block"></span> Est. 1989 · Coimbatore';
      titleEl.parentNode.insertBefore(badge,titleEl);
    }
    if(descEl){
      descEl.style.cssText+=';text-align:left;text-shadow:0 1px 10px rgba(0,0,0,0.8);transition:opacity 0.4s 0.1s,transform 0.4s 0.1s';
      descEl.textContent=_SI[0].desc;
    }
    var btn=hero.querySelector('button');
    if(btn){
      btn.style.cssText+=';margin-top:1rem';
      var btn2=document.createElement('button');
      btn2.textContent='View Complete Catalog';
      btn2.style.cssText='background:transparent;color:#f8fafc;padding:14px 28px;border:1px solid rgba(248,250,252,0.3);font-size:0.9rem;font-weight:600;cursor:pointer;margin-left:12px;margin-top:1rem';
      btn2.onclick=function(){var el=document.querySelector('button[onclick*="catalog"],button');if(el)el.click();};
      btn.parentNode.insertBefore(btn2,btn.nextSibling);
    }
    var stats=document.createElement('div');
    stats.style.cssText='position:absolute;bottom:0;left:0;right:0;background:rgba(2,6,23,0.92);border-top:1px solid rgba(249,115,22,0.2);display:flex;z-index:3';
    var statEl=document.createElement('div');
    statEl.style.cssText='flex:1;padding:14px 20px;text-align:center';
    statEl.innerHTML='<div style="font-size:1.4rem;font-weight:800;color:#f97316;line-height:1">40+</div><div style="font-size:0.65rem;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#64748b;margin-top:4px">Years Field Experience</div>';
    stats.appendChild(statEl);
    hero.appendChild(stats);
  } else {
    if(titleEl){titleEl.style.cssText+=';text-shadow:0 2px 30px rgba(0,0,0,0.9)';}
    if(descEl){descEl.style.cssText+=';text-shadow:0 1px 10px rgba(0,0,0,0.8)';}
  }

  hero.querySelectorAll(':scope>div').forEach(function(el){
    if(el!==bg&&el!==ov1&&el!==ov2&&el!==accent){
      el.style.position='relative';el.style.zIndex='2';
    }
  });

  function _goto(n){
    sc=n;
    bg.style.opacity='0';
    if(isHome){
      if(titleEl){titleEl.style.opacity='0';titleEl.style.transform='translateY(12px)';}
      if(descEl){descEl.style.opacity='0';descEl.style.transform='translateY(8px)';}
    }
    setTimeout(function(){
      bg.style.backgroundImage='url('+_SI[sc].src+')';
      if(isHome){
        if(titleEl)titleEl.textContent=_SI[sc].title;
        if(descEl)descEl.textContent=_SI[sc].desc;
      }
    },500);
    setTimeout(function(){
      bg.style.opacity='1';
      if(isHome){
        if(titleEl){titleEl.style.opacity='1';titleEl.style.transform='translateY(0)';}
        if(descEl){descEl.style.opacity='1';descEl.style.transform='translateY(0)';}
      }
    },600);
  }
  setInterval(function(){_goto((sc+1)%_SI.length);},5000);
}

function _initAll(){
  var sections=document.querySelectorAll('section');
  for(var i=0;i<sections.length;i++){
    if(sections[i].className&&sections[i].className.indexOf('from-slate-900')!==-1&&sections[i].className.indexOf('py-20')!==-1){
      _init(sections[i]);
    }
  }
}

var obs=new MutationObserver(function(){_initAll();});
obs.observe(document.documentElement,{childList:true,subtree:true});
_initAll();
})();
