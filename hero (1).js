(function(){
var _SI=[
  {src:'/slide1.jpg',title:'Furnace Delivery',desc:'Industrial-grade furnace ready for client delivery'},
  {src:'/slide2.jpg',title:'Coil Lining',desc:'Coil relining works'},
  {src:'/slide3.jpg',title:'Heat Treatment Furnace',desc:'Custom-built heat treatment furnace'},
  {src:'/slide4.jpg',title:'Industrial Furnace',desc:'Heavy-duty industrial furnace unit'},
  {src:'/slide5.jpg',title:'RJ Heat Tech Factory',desc:'Our manufacturing facility in Coimbatore'},
  {src:'/slide6.jpg',title:'Bogie Type Heat Treatment Furnace',desc:'Custom-built furnace'},
  {src:'/slide7.jpg',title:'Elevator Furnace',desc:'Elevator-type box furnace at client site'},
  {src:'/slide8.jpg',title:'Furnace Installation',desc:'On-site furnace installation and commissioning'},
  {src:'/slide9.jpg',title:'Client Delivery',desc:'Completed furnace at client facility'},
  {src:'/slide10.jpg',title:'Pit Furnace',desc:'Custom pit furnace build'}
];
var _sc=0,_done=false;

function _hs(){
  if(_done)return;
  var hero=document.getElementById('hero-section');
  if(!hero){setTimeout(_hs,200);return;}
  if(hero.dataset.heroInit){return;}
  hero.dataset.heroInit='1';
  _done=true;

  hero.style.position='relative';
  hero.style.overflow='hidden';
  hero.style.minHeight='520px';

  var bg=document.createElement('div');
  bg.style.cssText='position:absolute;inset:0;background-size:cover;background-position:center;background-repeat:no-repeat;transition:opacity 1.2s ease;z-index:0;background-image:url('+_SI[0].src+')';
  var ov1=document.createElement('div');
  ov1.style.cssText='position:absolute;inset:0;background:linear-gradient(to right,rgba(2,6,23,0.92) 0%,rgba(2,6,23,0.7) 45%,rgba(2,6,23,0.2) 100%);z-index:1';
  var ov2=document.createElement('div');
  ov2.style.cssText='position:absolute;inset:0;background:linear-gradient(to bottom,rgba(2,6,23,0.3) 0%,transparent 30%,transparent 70%,rgba(2,6,23,0.6) 100%);z-index:1';
  var accent=document.createElement('div');
  accent.style.cssText='position:absolute;top:0;left:0;bottom:0;width:4px;background:linear-gradient(to bottom,transparent,#f97316,transparent);z-index:3';
  var ctr=document.createElement('div');
  ctr.style.cssText='position:absolute;top:1.5rem;right:2rem;font-size:11px;font-weight:700;letter-spacing:0.2em;color:rgba(249,115,22,0.6);z-index:3';
  ctr.textContent='01 / 10';
  var dots=document.createElement('div');
  dots.style.cssText='position:absolute;right:2rem;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:10px;z-index:3';
  for(var i=0;i<_SI.length;i++){
    (function(idx){
      var d=document.createElement('div');
      d.style.cssText='width:3px;height:'+(idx===0?'40':'24')+'px;background:'+(idx===0?'#f97316':'rgba(255,255,255,0.25)')+';border-radius:2px;cursor:pointer;transition:all 0.3s';
      d.onclick=function(){_goto(idx);};
      dots.appendChild(d);
    })(i);
  }
  var stats=document.createElement('div');
  stats.style.cssText='position:absolute;bottom:0;left:0;right:0;background:rgba(2,6,23,0.88);border-top:1px solid rgba(249,115,22,0.2);display:flex;z-index:3';
  var sd=[['40+','Years Experience'],['500+','Clients Served'],['24/7','Support']];
  for(var j=0;j<sd.length;j++){
    var s=document.createElement('div');
    s.style.cssText='flex:1;padding:14px 20px;text-align:center;border-right:1px solid rgba(255,255,255,0.07)';
    s.innerHTML='<div style="font-size:1.4rem;font-weight:800;color:#f97316">'+sd[j][0]+'</div><div style="font-size:0.65rem;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#64748b;margin-top:4px">'+sd[j][1]+'</div>';
    stats.appendChild(s);
  }
  hero.prepend(stats);hero.prepend(dots);hero.prepend(ctr);hero.prepend(accent);hero.prepend(ov2);hero.prepend(ov1);hero.prepend(bg);

  var titleEl=hero.querySelector('h2');
  var descEl=hero.querySelector('p');
  if(titleEl){titleEl.style.transition='opacity 0.4s ease,transform 0.4s ease';titleEl.style.textShadow='0 2px 30px rgba(0,0,0,0.7)';titleEl.textContent=_SI[0].title;}
  if(descEl){descEl.style.transition='opacity 0.4s ease 0.1s,transform 0.4s ease 0.1s';descEl.style.textShadow='0 1px 10px rgba(0,0,0,0.6)';descEl.textContent=_SI[0].desc;}

  var children=hero.querySelectorAll(':scope>div');
  for(var k=0;k<children.length;k++){
    var el=children[k];
    if(el!==bg&&el!==ov1&&el!==ov2&&el!==accent&&el!==ctr&&el!==dots&&el!==stats){
      el.style.position='relative';el.style.zIndex='2';
    }
  }

  function _goto(n){
    _sc=n;bg.style.opacity='0';
    if(titleEl){titleEl.style.opacity='0';titleEl.style.transform='translateY(12px)';}
    if(descEl){descEl.style.opacity='0';descEl.style.transform='translateY(8px)';}
    setTimeout(function(){
      bg.style.backgroundImage='url('+_SI[_sc].src+')';
      if(titleEl)titleEl.textContent=_SI[_sc].title;
      if(descEl)descEl.textContent=_SI[_sc].desc;
      ctr.textContent=String(_sc+1).padStart(2,'0')+' / 10';
      var ds=dots.querySelectorAll('div');
      for(var x=0;x<ds.length;x++){ds[x].style.height=x===_sc?'40px':'24px';ds[x].style.background=x===_sc?'#f97316':'rgba(255,255,255,0.25)';}
    },500);
    setTimeout(function(){
      bg.style.opacity='1';
      if(titleEl){titleEl.style.opacity='1';titleEl.style.transform='translateY(0)';}
      if(descEl){descEl.style.opacity='1';descEl.style.transform='translateY(0)';}
    },600);
  }
  setInterval(function(){_goto((_sc+1)%_SI.length);},5000);
}

// Try multiple times to catch React render
setTimeout(_hs,300);
setTimeout(_hs,600);
setTimeout(_hs,1000);
setTimeout(_hs,1500);
setTimeout(_hs,2000);
})();
