// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/form/fgdc/InputTime","dojo/_base/declare dojo/_base/lang dojo/has ../InputText dojo/i18n!../../nls/i18nBase ../../../../kernel".split(" "),function(h,k,l,m,n,p){h=h([m],{_isFgdcInputTime:!0,hint:n.hints.fgdcTime,small:!0,postCreate:function(){this.inherited(arguments)},getXmlValue:function(){var d=this.inherited(arguments);"string"===typeof d&&null!==d&&(d=d.replace(/:/g,""),d=d.replace(/\./g,""));return d},importValue:function(d,f){var a;a=null;var g,e=[],b="",c="";if("string"!==
typeof f||null===f)this.inherited(arguments);else if(-1!==f.indexOf("T"))this.inherited(arguments);else if(-1!==f.indexOf(":"))this.inherited(arguments);else if(-1!==f.indexOf("."))this.inherited(arguments);else if(a=k.trim(f),-1!==a.indexOf("+")?(e=a.split("+"),c="+"):-1!==a.indexOf("-")?(e=a.split("-"),c="-"):(-1!==a.indexOf("Z")?(e=a.split("Z"),c="Z"):e[0]=a,e[1]=""),2!==e.length)this.inherited(arguments);else{g=e[0];for(a=0;a<g.length;a++)2===b.length?b+=":":5===b.length?b+=":":8===b.length&&
(b+="."),b+=g[a];g=e[1];for(a=0;a<g.length;a++)3===c.length&&(c+=":"),c+=g[a];this.setInputValue(b+c)}}});l("extend-esri")&&k.setObject("dijit.metadata.form.fgdc.InputTime",h,p);return h});