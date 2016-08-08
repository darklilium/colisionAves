//>>built
define("dojox/gfx/fx","dojo/_base/lang ./_base ./matrix dojo/_base/Color dojo/_base/array dojo/_base/fx dojo/_base/connect dojo/sniff".split(" "),function(B,q,m,r,s,n,h,v){function t(b,a){this.start=b;this.end=a}function w(b,a,c){this.start=b;this.end=a;this.units=c}function x(b,a){this.start=b;this.end=a;this.temp=new r}function f(b){this.values=b;this.length=b.length}function u(b,a){this.values=b;this.def=a?a:{}}function y(b,a){this.stack=b;this.original=a}function z(b,a,c,e){if(b.values)return new f(b.values);
var d,k;k=b.start?q.normalizeColor(b.start):d=a?c?a[c]:a:e;b.end?b=q.normalizeColor(b.end):(d||(d=a?c?a[c]:a:e),b=d);return new x(k,b)}var p=q.fx={};t.prototype.getValue=function(b){return(this.end-this.start)*b+this.start};w.prototype.getValue=function(b){return(this.end-this.start)*b+this.start+this.units};x.prototype.getValue=function(b){return r.blendColors(this.start,this.end,b,this.temp)};f.prototype.getValue=function(b){return this.values[Math.min(Math.floor(b*this.length),this.length-1)]};
u.prototype.getValue=function(b){var a=B.clone(this.def),c;for(c in this.values)a[c]=this.values[c].getValue(b);return a};y.prototype.getValue=function(b){var a=[];s.forEach(this.stack,function(c){if(c instanceof m.Matrix2D)a.push(c);else if("original"==c.name&&this.original)a.push(this.original);else if("matrix"==c.name){if(c.start instanceof m.Matrix2D&&c.end instanceof m.Matrix2D){var e=new m.Matrix2D,d;for(d in c.start)e[d]=(c.end[d]-c.start[d])*b+c.start[d];a.push(e)}}else c.name in m&&(e=m[c.name],
"function"!=typeof e?a.push(e):(d=s.map(c.start,function(d,a){return(c.end[a]-d)*b+d}),e=e.apply(m,d),e instanceof m.Matrix2D&&a.push(e)))},this);return a};var A=new r(0,0,0,0);p.animateStroke=function(b){b.easing||(b.easing=n._defaultEasing);var a=new n.Animation(b),c=b.shape,e;h.connect(a,"beforeBegin",a,function(){e=c.getStroke();var d=b.color,a={},g;d&&(a.color=z(d,e,"color",A));if((d=b.style)&&d.values)a.style=new f(d.values);if(d=b.width){var l=d;l.values?g=new f(l.values):(d=l.start?l.start:
g=e?e.width:1,l.end?g=l.end:"number"!=typeof g&&(g=e?e.width:1),g=new t(d,g));a.width=g}if((d=b.cap)&&d.values)a.cap=new f(d.values);if(d=b.join)d.values?a.join=new f(d.values):(g=d.start?d.start:e&&e.join||0,d=d.end?d.end:e&&e.join||0,"number"==typeof g&&"number"==typeof d&&(a.join=new t(g,d)));this.curve=new u(a,e)});h.connect(a,"onAnimate",c,"setStroke");return a};p.animateFill=function(b){b.easing||(b.easing=n._defaultEasing);var a=new n.Animation(b),c=b.shape,e;h.connect(a,"beforeBegin",a,function(){e=
c.getFill();var a=b.color;a&&(this.curve=z(a,e,"",A))});h.connect(a,"onAnimate",c,"setFill");return a};p.animateFont=function(b){b.easing||(b.easing=n._defaultEasing);var a=new n.Animation(b),c=b.shape,e;h.connect(a,"beforeBegin",a,function(){e=c.getFont();var a=b.style,k={},g,l;a&&a.values&&(k.style=new f(a.values));if((a=b.variant)&&a.values)k.variant=new f(a.values);if((a=b.weight)&&a.values)k.weight=new f(a.values);if((a=b.family)&&a.values)k.family=new f(a.values);if((a=b.size)&&a.units)g=parseFloat(a.start?
a.start:c.font&&c.font.size||"0"),l=parseFloat(a.end?a.end:c.font&&c.font.size||"0"),k.size=new w(g,l,a.units);this.curve=new u(k,e)});h.connect(a,"onAnimate",c,"setFont");return a};p.animateTransform=function(b){b.easing||(b.easing=n._defaultEasing);var a=new n.Animation(b),c=b.shape,e;h.connect(a,"beforeBegin",a,function(){e=c.getTransform();this.curve=new y(b.transform,e)});h.connect(a,"onAnimate",c,"setTransform");if("svg"===q.renderer&&(9<=v("ie")||v("ff")))var d=[h.connect(a,"onBegin",a,function(){for(var a=
c.getParent();a&&a.getParent;)a=a.getParent();a&&(c.__svgContainer=a.rawNode.parentNode,c.__svgRoot=a.rawNode,c.__svgRoot&&c.__svgRoot.getAttribute&&(c.__svgWidth=parseInt(c.__svgRoot.getAttribute("width"),10),isNaN(c.__svgWidth)&&delete c.__svgWidth))}),h.connect(a,"onAnimate",a,function(){try{if(c.__svgContainer){var a=c.__svgContainer.style.visibility;c.__svgContainer.style.visibility="visible";c.__svgContainer.style.visibility=a;var b=c.__svgWidth;if(!isNaN(b))try{c.__svgRoot.setAttribute("width",
b-5E-6),c.__svgRoot.setAttribute("width",b)}catch(d){}}}catch(e){}}),h.connect(a,"onEnd",a,function(){s.forEach(d,h.disconnect);if(c.__svgContainer){var a=c.__svgContainer;if(null==a.getAttribute("__gotVis")){a.setAttribute("__gotVis",!0);var b=c.__svgContainer.style.visibility,e=c.__svgRoot,f=c.__svgWidth;a.style.visibility="visible";setTimeout(function(){try{a.style.visibility=b;a.removeAttribute("__gotVis");a=null;try{isNaN(f)||(e.setAttribute("width",f-5E-6),e.setAttribute("width",f))}catch(c){}}catch(d){}},
100)}}delete c.__svgContainer;delete c.__svgRoot;delete c.__svgWidth})];return a};return p});