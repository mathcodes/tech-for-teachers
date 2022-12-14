/*******************************************************************************************/
/*                Wedge - The math game free of charge and coordinates.                    */
/*******************************************************************************************/

// Some static SVG's for the help screens.
var help = {
  join   :'<DIV CLASS="help"><svg style="max-width:100%" viewBox="-3 -1 6 2"><g class="line"><line x1="-10" y1="-0.24253562092781067" x2="10" y2="-0.24253562092781067" class="lineBase" transform="rotate(165.96375653207352)" style="stroke: rgb(255, 136, 136);"></line><line x1="0" y1="-0.24253562092781067" x2="0" y2="-0.24253562092781067" class="pointLine"></line><line x1="-10" y1="-0.24253562092781067" x2="10" y2="-0.24253562092781067" transform="rotate(165.96375653207352)" class="lineSel"></line><circle cx="0" cy="-0.24253562092781067" class="lineSelPoint"></circle></g><g transform="translate(1 0)" class="point selected"><circle cx="0.5827123695976155" cy="-0.14307004470938897" r="0.2" class="pointBase" style="fill: rgb(255, 255, 255);"></circle><line x1="0" y1="0" x2="0.5827123695976155" y2="-0.14307004470938897" class="pointLine"></line><circle cx="0" cy="0" r="0.2" class="pointSel"></circle></g><g transform="translate(-1 0.5)" class="point selected"><circle cx="-0.7257824143070044" cy="0.18554396423248876" r="0.2" class="pointBase" style="fill: rgb(255, 255, 255);"></circle><line x1="0" y1="0" x2="-0.7257824143070044" y2="0.18554396423248876" class="pointLine"></line><circle cx="0" cy="0" r="0.2" class="pointSel"></circle></g></svg><BR><BR>Drag points apart to <b>join</b> them.</DIV>',
  addP   :'<DIV CLASS="help"><svg style="max-width:100%" viewBox="-3 -1 6 2"><g transform="translate(0.8 0.05)" class="point" style="stroke:#F88"><circle cx="-0.7659176029962547" cy="0.19850187265917585" r="0.2" class="pointBase" style="fill: rgb(255, 190, 190);"></circle><line x1="0" y1="0" x2="-0.7659176029962547" y2="0.19850187265917585" class="pointLine"></line><circle cx="0" cy="0" r="0.2" class="pointSel"></circle></g><g transform="translate(1 0)" class="point selected"><circle cx="-0.7659176029962547" cy="0.19850187265917585" r="0.2" class="pointBase" style="fill: rgb(255, 255, 255);"></circle><line x1="0" y1="0" x2="-0.7659176029962547" y2="0.19850187265917585" class="pointLine"></line><circle cx="0" cy="0" r="0.2" class="pointSel"></circle></g><g transform="translate(-1 0.5)" class="point selected"><circle cx="0.7734082397003744" cy="-0.20037453183520615" r="0.2" class="pointBase" style="fill: rgb(255, 255, 255);"></circle><line x1="0" y1="0" x2="0.7734082397003744" y2="-0.20037453183520615" class="pointLine"></line><circle cx="0" cy="0" r="0.2" class="pointSel"></circle></g></svg><BR><BR>Drag points together to <b>add</b> them.</DIV>',
  wedge  :'<DIV CLASS="help"><svg style="max-width:100%" viewBox="-3 -1 6 2"><g class="line selected"><line x1="-10" y1="0" x2="10" y2="0" class="lineBase" transform="rotate(90)"></line><line x1="-0.005617977528089788" y1="-0.5917602996254681" x2="0.33520599250936334" y2="-0.3146067415730338" class="pointLine"></line><line x1="-10" y1="0" x2="10" y2="0" transform="rotate(90)" class="lineSel"></line><circle cx="0.33520599250936334" cy="-0.3146067415730338" class="lineSelPoint"></circle></g><g class="line selected"><line x1="-10" y1="-0.24253562092781067" x2="10" y2="-0.24253562092781067" class="lineBase" transform="rotate(165.96375653207352)"></line><line x1="0.9719101123595504" y1="-0.01872659176029967" x2="0.7022471910112361" y2="-0.25093632958801493" class="pointLine"></line><line x1="-10" y1="-0.24253562092781067" x2="10" y2="-0.24253562092781067" transform="rotate(165.96375653207352)" class="lineSel"></line><circle cx="0.7022471910112361" cy="-0.25093632958801493" class="lineSelPoint"></circle></g><g transform="translate(0 0.25)" class="point"><circle cx="0" cy="0" r="0.2" class="pointBase" style="stroke: rgb(255, 136, 136); fill: rgb(255, 136, 136);"></circle><line x1="0" y1="0" x2="0" y2="0" class="pointLine"></line><circle cx="0" cy="0" r="0.2" class="pointSel"></circle></g></svg><BR><BR>Drag lines together to <b>meet</b> them.</DIV>',
  addL   :'<DIV CLASS="help"><svg style="max-width:100%" viewBox="-3 -1 6 2"><g class="line selected"><line x1="-10" y1="0" x2="10" y2="0" class="lineBase" transform="rotate(90)"></line><line x1="-0.005617977528089788" y1="-0.3895131086142323" x2="-0.4662921348314607" y2="-0.7490636704119851" class="pointLine"></line><line x1="-10" y1="0" x2="10" y2="0" transform="rotate(90)" class="lineSel"></line><circle cx="-0.4662921348314607" cy="-0.7490636704119851" class="lineSelPoint"></circle></g><g class="line selected"><line x1="-10" y1="-0.24253562092781067" x2="10" y2="-0.24253562092781067" class="lineBase" transform="rotate(165.96375653207352)"></line><line x1="0.6722846441947565" y1="0.0786516853932584" x2="1.1666666666666667" y2="0.41947565543071175" class="pointLine"></line><line x1="-10" y1="-0.24253562092781067" x2="10" y2="-0.24253562092781067" transform="rotate(165.96375653207352)" class="lineSel"></line><circle cx="1.1666666666666667" cy="0.41947565543071175" class="lineSelPoint"></circle></g><g class="line"><line x1="-10" y1="-0.15385305881500244" x2="10" y2="-0.15385305881500244" class="lineBase" transform="rotate(127.98187919412362)" style="stroke: #F88;"></line><line x1="0" y1="-0.15385305881500244" x2="0" y2="-0.15385305881500244" class="pointLine" style="color: red;"></line><line x1="-10" y1="-0.15385305881500244" x2="10" y2="-0.15385305881500244" transform="rotate(127.98187919412362)" class="lineSel" style="color: red;"></line><circle cx="0" cy="-0.15385305881500244" class="lineSelPoint"></circle></g></svg><BR><BR>Drag lines apart to <b>add</b> them.</DIV>',
  dot    :'<DIV CLASS="help"><svg style="max-width:100%" viewBox="-3 -0.5 6 2"><g class="line"><line x1="-10" y1="0" x2="10" y2="0" class="lineBase" transform="rotate(-90)" style="stroke: rgb(255, 136, 136);"></line><line x1="0" y1="0" x2="0" y2="0" class="pointLine"></line><line x1="-10" y1="0" x2="10" y2="0" transform="rotate(-90)" class="lineSel"></line><circle cx="0" cy="0" class="lineSelPoint"></circle></g><g class="line selected"><line x1="-10" y1="0" x2="10" y2="0" class="lineBase" transform="rotate(0)"></line><line x1="0.5524344569288389" y1="0" x2="0.14794007490636696" y2="0.6779026217228465" class="pointLine"></line><line x1="-10" y1="0" x2="10" y2="0" transform="rotate(0)" class="lineSel"></line><circle cx="0.14794007490636696" cy="0.6779026217228465" class="lineSelPoint"></circle></g><g transform="translate(0 1)" class="point selected"><circle cx="0" cy="0" r="0.2" class="pointBase" style="fill: rgb(255, 255, 255);"></circle><line x1="0" y1="0" x2="0" y2="0" class="pointLine"></line><circle cx="0" cy="0" r="0.2" class="pointSel"></circle></g></svg><BR><BR>Lock a point in place, drag a line to it to <b>dot</b> them.</DIV>',
  points :'<DIV CLASS="help"><svg style="max-width:100%" viewBox="-3 -2 6 2"><g transform="translate(-0.041666669426141036 -0.7083333388522821)" class="point"><circle cx="0" cy="0" r="0.2" class="pointBase" style="stroke: rgb(255, 136, 136); fill: rgb(255, 136, 136);"></circle><line x1="0" y1="0" x2="0" y2="0" class="pointLine"></line><circle cx="0" cy="0" r="0.2" class="pointSel"></circle></g><g transform="translate(0.4000000059604645 1.5)" class="point"><circle cx="0" cy="0" r="0.2" class="pointBase" style="fill: rgb(255, 255, 255);"></circle><line x1="0" y1="0" x2="0" y2="0" class="pointLine"></line><circle cx="0" cy="0" r="0.2" class="pointSel"></circle></g><g transform="translate(-1.5 -1)" class="point"><circle cx="0" cy="0" r="0.2" class="pointBase" style="fill: rgb(255, 255, 255);"></circle><line x1="0" y1="0" x2="0" y2="0" class="pointLine"></line><circle cx="0" cy="0" r="0.2" class="pointSel"></circle></g><g transform="translate(1 -1.5)" class="point"><circle cx="0" cy="0" r="0.2" class="pointBase" style="fill: rgb(255, 255, 255);"></circle><line x1="0" y1="0" x2="0" y2="0" class="pointLine"></line><circle cx="0" cy="0" r="0.2" class="pointSel"></circle></g></svg><BR>Points</div>',
  lines  :'<DIV CLASS="help"><svg style="max-width:100%" viewBox="-3 -0.75 6 2"><g class="line"><line x1="-10" y1="0.5" x2="10" y2="0.5" class="lineBase" transform="rotate(-10)" style="stroke: rgb(255, 255, 255);"></line><line x1="0" y1="0" x2="0" y2="0" class="pointLine"></line><line x1="-10" y1="0" x2="10" y2="0" transform="rotate(-90)" class="lineSel"></line><circle cx="0" cy="0" class="lineSelPoint"></circle></g><g class="line"><line x1="-10" y1="0" x2="10" y2="0" class="lineBase" transform="rotate(-45)" style="stroke: rgb(255, 136, 136);"></line><line x1="0" y1="0" x2="0" y2="0" class="pointLine"></line><line x1="-10" y1="0" x2="10" y2="0" transform="rotate(-45)" class="lineSel"></line><circle cx="0" cy="0" class="lineSelPoint"></circle></g><g class="line"><line x1="-10" y1="0" x2="10" y2="0" class="lineBase" transform="rotate(0)"></line><line x1="0" y1="0" x2="0" y2="0" class="pointLine"></line><line x1="-10" y1="0" x2="10" y2="0" transform="rotate(0)" class="lineSel"></line><circle cx="0" cy="0" class="lineSelPoint"></circle></g></svg><BR>Lines</div>'
}

// Level Definition
var PGA2D = Algebra(2,0,1), given=0xffffff, find=0xff8888, hint=0x535364, levels = PGA2D.inline(()=>{

  // Some helpers.
  var point = (x,y)=>1e12-x*1e01+y*1e02,
      line  = (a,b,c)=>c*1e0+a*1e1+b*1e2,
      A=point(-1,0),B=point(1,0.5),a=line(0,1,0),b=line(1,-0.5,0),c=line(1,0.5,0);

  // Each function returns a level
  return [
    `Wedge - The Geometric Algebra game.<BR><BR>Play Wedge by dragging points and lines to try and reconstruct the <FONT COLOR=#F88>red</FONT> items.<BR><BR>${help.points}${help.lines}<BR><BR><FONT COLOR=#FFF>White</FONT> elements can be dragged<BR><FONT COLOR=#888>Ghosted</FONT> elements are hints<BR><BR><SMALL>Try to use as few moves and time as possible..</SMALL><BR><BR>Click to start.`,
    `In 2D PGA, points and lines are the elements of your algebra.<BR><BR>You can <b>join</b> points into lines, or <b>meet</b> lines into points.<BR><BR>Click here to continue<BR>${help.join}${help.wedge}`,
    ()=>["Drag points apart to <B>Join</B> them in a line",find,A&B,given,A,B],
    ()=>["Drag lines together to <B>Meet</B> them in a point.",find,a^(A&B),given,a,A&B],
    `You can't <b>join</b> lines or <b>meet</b> points in 2D, If you try, the game will add your elements together.<BR><BR>Click here to continue<BR>${help.addP}${help.addL}`,
    ()=>["Drag points together to <B>Add</B> them.",find,A+B,given,A,B],
    ()=>["Drag lines apart to <B>Add</B> them.",find,c+b,given,c,b],
    `Holding a point and dragging a line towards it will project that line through the point.<BR><BR>Click here to continue<BR>${help.dot}`,
    ()=>{ var a=line(1,0,0),B=point(0,1); return ["Select a point, drag the line to it.",find,a<<B,given,a,B]; },
    `PGA2D Elements : <BR>${help.points}${help.lines}<BR><BR>PGA2D Operations<BR>${help.join}${help.addP}${help.wedge}${help.addL}${help.dot}`,
    ()=>{ var a=line(1,0,0),B=point(0,1),C=point(1,1); return [".. find the red elements ..",find,a<<B,a+a<<B,given,a,B]; },
    ()=>{ var A=point(-0.4,1.5), B=point(1.5,-1), C=point(-1,-1.5); return ["Find the orthocenter",hint,A&B,((A&B)<<C),find,(((A&B)<<C)^((B&C)<<A)), given,A,B,C];},
    ()=>{ var A=point(-0.4,1.5), B=point(1.5,-1), C=point(-1,-1.5); return ["Find the circumcenter",hint,A+B,(A&B)<<(A+B),find,(((A&B)<<(A+B))^((B&C)<<(B+C))),given,A,B,C];},
    ()=>{
      var A=point(1.2,1.3), B=point(0.4,-0.5), C=point(-1,-0.4), ortho=(((A&B)<<C)^((B&C)<<A)), circum=(((A&B)<<(A+B))^((B&C)<<(B+C)));
      return ["Find Eulers line",hint,ortho,circum,find,ortho&circum,given,A,B,C];
    },
    ()=>[`Well done.<BR><BR><BR>Moves : ${moves}<BR>Time : ${(dt/1000/60)|0}:${((dt/1000)|0)%60}<BR>Score : ${score|0}`,find,1e12+5e01]
  ];
})();

/*******************************************************************************************/
/* Mechanics, rendering, user input, ...                                                   */
/*******************************************************************************************/

// $elect, Merge, Create (svg), Append, Group (svg)
var $ = document.getElementById.bind(document), // was queryselector, didn't work in edge at some point.
    m = (a,b,c,d)=>{ for (var i in b) a[i]=b[i]; for (i in c) a.style[i]=c[i]; for (i in d) a.setAttribute(i,d[i]); return a},
    c = (a,b,c,d)=>m(document.createElementNS('http://www.w3.org/2000/svg',a),c,d,b),
    a = (x,p)=>(p||$('main')).appendChild(x),
    g = function(){ var i,g=c('g'); for (i in arguments) a(arguments[i],g); return g},
    say = (x)=>{if (window.speechSynthesis) window.speechSynthesis.speak(m(new SpeechSynthesisUtterance(x.replace(/\<BR\>/g,'\n').replace(/\<.*?\>/g,'')),{lang:'en-US'}))};

// Main setup .. SVG renderer.
a(c('svg',{viewBox:"-2 -2 4 4"},{id:"main"}),document.body);
a(m(document.createElement('div'),{id:"title"}),document.body);
a(m(document.createElement('a'),{id:"footer",href:"https://github.com/enkimute/ganja.js",target:"blank",innerText:"Fork me on github"}),document.body);
a(m(document.createElement('div'),{id:"intro",onclick:function(){this.style.display='none'; nextLevel();}}),document.body);

// Scoring
var score=1000, moves=0, startTime=0, dt, scoreDiv = a(m(document.createElement('div'),{id:"score",innerHTML:"1000"}),document.body);
setInterval(()=>{ if (!startTime || curlevel==levels.length) return; dt = performance.now()-startTime; score = 1000 - dt/1000 - moves*10; scoreDiv.innerHTML=score|0;  },1000);

// Global selection.
var selection=[],
    selectionAdd   = (s,dx,dy)=>{ selectionDel(s); selection.push([s,dx,dy]); handle_operation(); },
    selectionDel   =       (s)=>{ var i=selection.findIndex(x=>x[0]==s); if (~i) selection.splice(i,1); },
    selectionClear =        ()=>{ selection.forEach(x=>x[0].clear()); selection=[] };
    
// Process selection - see if we have an operator.
function handle_operation() {
  if (selection.length!=2) return;
  var adx = selection[0][1], ady=selection[0][2], bdx=selection[1][1], bdy=selection[1][2],
      al = Math.sqrt(adx**2+ady**2), bl = Math.sqrt(bdx**2+bdy**2),
      abx = (selection[0][0].g._x||selection[0][0].l.x1.baseVal.value) - (selection[1][0].g._x||selection[1][0].l.x1.baseVal.value), 
      aby = (selection[0][0].g._y||selection[0][0].l.y1.baseVal.value) - (selection[1][0].g._y||selection[1][0].l.y1.baseVal.value), abl=Math.sqrt(abx**2+aby**2),
      cb = (abx/abl)*(bdx/bl)+(aby/abl)*(bdy/bl), ca = (-abx/abl)*(adx/al)+(-aby/abl)*(ady/al),
      holda=al<0.1,holdb=bl<0.1,aout=al>0.1&&ca<0,bout=bl>0.1&&cb<0,ain=al>0.1&&ca>0,bin=bl>0.1&&cb>0; 
       if (aout && bout) var n=selection[0][0].P.Vee(selection[1][0].P).Normalized; 
  else if (ain  && bin)  var n=selection[0][0].P.Wedge(selection[1][0].P).Normalized; 
  else if (holda && bin) var n=selection[1][0].P.Dot(selection[0][0].P).Normalized; 
  else if (holdb && ain) var n=selection[0][0].P.Dot(selection[1][0].P).Normalized; 
  else return setTimeout(selectionClear,600);
  // upgrade wedge of points or vee of lines to sum.
  if ((ain&&bin&&n.Length==0)||(aout&&bout&&n.Length==0) ) { 
    n=selection[0][0].P.Add(selection[1][0].P).Normalized;
    if(n.Grade(1).Length>0.01 && n.Grade(2).Length>0.01) return  setTimeout(selectionClear,600);
    say('add');
  } else if (aout && bout) say('join'); else if (ain  && bin)  say('wedge'); else say('dot');
  return setTimeout(()=>{ moves++; if (!startTime) startTime=performance.now(); level.push(n); build(n); selectionClear(); check(); },600); 
}    

// Check level progress.
function check() {
  if (req.filter(x=>level.slice(origl-1).filter(y=>{ if (!(y instanceof PGA2D)) return false;
    x=x.Normalized; y=y.Normalized;
    if (x.Grade(1).Length > 0.01 && y.Grade(1).Length > 0.01 && (x.Sub(y).Length<0.01 || x.Add(y).Length<0.01) && Math.abs(Math.abs(x.e0)-Math.abs(y.e0))<0.01) return true;
    else if (Math.abs(x.e12) > 0.01 && Math.abs(y.e12) > 0.01 && x.Vee(y).Length < 0.01) return true;
    return false;
  }).length).length == req.length) setTimeout(nextLevel,2000);
}

// Fancy dragable Points
function point(P,color) {
  var x=P.e01/P.e12, y=P.e02/P.e12,
      stop=(e)=>{ this.gp.removeEventListener('mousemove',move,false); this.gp.removeEventListener('mouseup',stop,false); selectionAdd(this,this.c.cx.baseVal.value,this.c.cy.baseVal.value); },
      tstop=(e)=>{ this.gp.removeEventListener('touchmove',move,false); this.gp.removeEventListener('touchend',tstop,false); selectionAdd(this,this.c.cx.baseVal.value,this.c.cy.baseVal.value); },
      move=(e)=>{ if (e.targetTouches) e=[].filter.call(e.targetTouches,x=>x.identifier==this.tid)[0]; var ww=window.innerWidth,wh=window.innerHeight,d=(wh>ww)?wh/ww:1,d2=(ww>wh)?ww/wh:1,cx=(e.clientX/ww*4-2)*d2-this.g._x,cy=(e.clientY/wh*4-2)*d-this.g._y;m(this.c,{},{},{cx,cy}); m(this.l,{},{},{x2:cx,y2:cy});};
  m(this,{ active:color!=0xff8888,P,c:c('circle',{cx:0,cy:0,r:0.2,class:'pointBase'},{},{stroke:(color==0xffffff)?'':('#'+color.toString(16)),fill:'#'+(color.toString(16)||'F00')}),
           l:c('line',{x1:0,y1:0,x2:0,y2:0,class:'pointLine'}),clear:function(){ this.g.classList.remove('selected'); m(this.c,{},{},{cx:0,cy:0}); m(this.l,{},{},{x2:0,y2:0}); }, });
  this.g = m(a(g(this.c,this.l,c('circle',{cx:0,cy:0,r:0.2,class:'pointSel'}))),{_x:x||0,_y:y||0},{},{transform:`translate(${x||0} ${y||0})`}); this.g.classList.add('point');
  this.gp = this.g.parentElement;
  if (this.active) {
    this.c.addEventListener('mousedown',(e)=>{  if(this.touch) return; if (this.g.classList.toggle('selected')){ this.gp.addEventListener('mousemove',move,false); this.gp.addEventListener('mouseup',stop,false); } else {this.clear(); selectionDel(this);}},false);         
    this.c.addEventListener('touchstart',(e)=>{ this.touch=true; this.tid=e.changedTouches[0].identifier; if (this.g.classList.toggle('selected')){ this.gp.addEventListener('touchmove',move,{passive:true}); this.gp.addEventListener('touchend',tstop,false); } else {this.clear(); selectionDel(this);}},{passive:true});
  }  
}

// Fancy dragable Lines
function line(P,color) {
  P = P.Normalized; var ly=P.e0, lr=Math.atan2(P.e2,P.e1)/Math.PI*180;
  var stop=(e)=>{this.gp.removeEventListener('mousemove',move,false);this.gp.removeEventListener('mouseup',stop,false);selectionAdd(this,this.l.x2.baseVal.value-this.l.x1.baseVal.value,this.l.y2.baseVal.value-this.l.y1.baseVal.value);},
      tstop=(e)=>{this.gp.removeEventListener('touchmove',move,false);this.gp.removeEventListener('touchend',tstop,false); selectionAdd(this,this.l.x2.baseVal.value-this.l.x1.baseVal.value,this.l.y2.baseVal.value-this.l.y1.baseVal.value);},
      move=(e)=>{ if (e.targetTouches) e=[].filter.call(e.targetTouches,x=>x.identifier==this.tid)[0]; var ww=window.innerWidth,wh=window.innerHeight,d=(wh>ww)?wh/ww:1,d2=(ww>wh)?ww/wh:1,cx=(e.clientX/ww*4-2)*d2,cy=(e.clientY/wh*4-2)*d;m(this.l,{},{},{x2:cx,y2:cy});m(this.c2,{},{},{cx,cy});};
  m(this,{P,active:color!=0xff8888,l:c('line',{x1:0,y1:ly,x2:0,y2:ly,class:'pointLine'}),c:c('line',{x1:-10,y1:ly,x2:10,y2:ly,transform:`rotate(${lr})`,class:'lineSel'}),c2:c('circle',{cx:0,cy:ly,class:'lineSelPoint'})});
  this.g = a(g(c('line',{x1:-10,y1:ly,x2:10,y2:ly,class:'lineBase',transform:`rotate(${lr})`},{},{stroke:(color==0xffffff)?'':('#'+color.toString(16))}),this.l,this.c,this.c2)); this.g.classList.add('line');
  if (color==0xffffff) while (this.g.previousSibling && this.g.previousSibling.classList.contains('point')) this.g.parentElement.insertBefore(this.g,this.g.previousSibling);
  this.gp = this.g.parentElement; this.clear = function(){ this.g.classList.remove('selected'); m(this.l,{},{},{x1:0,y1:0,x2:0,y2:0}); m(this.c2,{},{},{cx:0,cy:0}); };
  if (this.active) {
    this.c.addEventListener('mousedown',(e)=>{if(this.touch)return;
      if (this.g.classList.toggle('selected')) {
        var ww=window.innerWidth,wh=window.innerHeight,d=(wh>ww)?wh/ww:1,d2=(ww>wh)?ww/wh:1,cx=(e.x/ww*4-2)*d2,cy=(e.y/wh*4-2)*d; 
        m(this.l,{},{},{x1:cx,y1:cy,x2:cx,y2:cy}); m(this.c2,{},{},{cx,cy}); this.gp.addEventListener('mousemove',move,false); this.gp.addEventListener('mouseup',stop,false);
      } else { this.clear(); selectionDel(this); }
    },false);         
    this.c.addEventListener('touchstart',(e)=>{this.touch=true; this.tid=e.changedTouches[0].identifier;
      if (this.g.classList.toggle('selected')) {
        var ww=window.innerWidth,wh=window.innerHeight,d=(wh>ww)?wh/ww:1,d2=(ww>wh)?ww/wh:1,cx=(e.targetTouches[0].clientX/ww*4-2)*d2,cy=(e.targetTouches[0].clientY/wh*4-2)*d; 
        m(this.l,{},{},{x1:cx,y1:cy,x2:cx,y2:cy}); m(this.c2,{},{},{cx,cy}); this.gp.addEventListener('touchmove',move,{passive:true}); this.gp.addEventListener('touchend',tstop,false);
      } else { this.clear(); selectionDel(this); }
    },{passive:true});         
  }  
  return this;
}

// Our current color, requirements, level builder and driver .. 
var color, req=[], curlevel = 0, level, origl, 
    build = x=>{ 
      if (color==0xff8888&&x instanceof PGA2D) req.push(x);
      if (typeof x == 'string') { say(x);  return $('title').innerHTML=x;}
      if (!(x instanceof PGA2D)) return color=x,undefined;
      if (x.Grade(2).Length > 0.01) return new point(x,color); 
      else if (x.Grade(1).Length > 0.01) return new line(x,color); 
    },
    nextLevel = function() {
      var m = $('main'); while (m && m.firstChild) m.removeChild(m.firstChild);
      if (levels[curlevel] instanceof Function) {
       level = levels[curlevel]();
       origl = level.length;
       req   = []; level.forEach(build);
      } else {
        $("title").innerHTML = '';
        $("intro").innerHTML = levels[curlevel];
        $("intro").style.display="block";
      } 
      curlevel++;
    };
    nextLevel();