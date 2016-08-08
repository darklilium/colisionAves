// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
define("esri/geometry/scaleUtils","dojo/_base/lang dojo/has ../kernel ../config ../lang ../WKIDUnitConversion".split(" "),function(k,q,f,r,s,t){function l(a,b,c){return a&&b?a.getWidth()/b*(c||h)*m*n.screenDPI:0}function p(a,b,c,d,g){return a.expand(d*b/(((g?c:e.values[e[c]])||h)*m*n.screenDPI)/a.getWidth())}var m=39.37,h=6370997*Math.PI/180,n=r.defaults,e=t,g={getUnitValueForSR:function(a){return this.getUnitValue(a)||h},getUnitValue:function(a){var b,c,d;a&&("object"===typeof a?(b=a.wkid,c=a.wkt):
"number"===typeof a?b=a:"string"===typeof a&&(c=a));b?d=e.values[e[b]]:c&&-1!==c.search(/^PROJCS/i)&&(a=/UNIT\[([^\]]+)\]\]$/i.exec(c))&&a[1]&&(d=parseFloat(a[1].split(",")[1]));return d},getScale:function(a,b,c){var d,e,f;1<arguments.length&&s.isDefined(b)&&!b.declaredClass?(d=a,e=b,b=null,f=g.getUnitValue(c)):(d=b||a.extent,e=a.width,f=g.getUnitValue(d&&d.spatialReference));return l(d,e,f)},getExtentForScale:function(a,b,c){return p(c||a.extent,a.width,g.getUnitValue(a.spatialReference),b,!0)}};
q("extend-esri")&&(k.mixin(k.getObject("geometry",!0,f),g),f.geometry._getScale=l,f.geometry._getExtentForScale=p);return g});