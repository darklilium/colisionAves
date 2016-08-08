//>>built
define("dojox/mdnd/adapter/DndFromDojo","dojo/_base/kernel dojo/_base/declare dojo/_base/connect dojo/_base/array dojo/dom-class dojo/_base/window dojox/mdnd/AreaManager dojo/dnd/Manager".split(" "),function(f,d,b,h,c,n,l,m){d=d("dojox.mdnd.adapter.DndFromDojo",null,{dropIndicatorSize:{w:0,h:50},dropIndicatorSize:{w:0,h:50},_areaManager:null,_dojoManager:null,_currentArea:null,_oldArea:null,_moveHandler:null,_subscribeHandler:null,constructor:function(){this._areaManager=l.areaManager();this._dojoManager=
m.manager();this._moveHandler=this._currentArea=null;this.subscribeDnd()},subscribeDnd:function(){this._subscribeHandler=[b.subscribe("/dnd/start",this,"onDragStart"),b.subscribe("/dnd/drop/before",this,"onDrop"),b.subscribe("/dnd/cancel",this,"onDropCancel"),b.subscribe("/dnd/source/over",this,"onDndSource")]},unsubscribeDnd:function(){h.forEach(this._subscribeHandler,b.unsubscribe)},_getHoverArea:function(a){var b=a.x;a=a.y;this._oldArea=this._currentArea;this._currentArea=null;for(var g=this._areaManager._areaList,
c=0;c<g.length;c++){var e=g[c],d=e.coords.x,f=d+e.node.offsetWidth,k=e.coords.y,h=k+e.node.offsetHeight;if(d<=b&&b<=f&&k<=a&&a<=h){this._areaManager._oldIndexArea=this._areaManager._currentIndexArea;this._areaManager._currentIndexArea=c;this._currentArea=e.node;break}}if(this._currentArea!=this._oldArea)if(null==this._currentArea)this.onDragExit();else{if(null!=this._oldArea)this.onDragExit();this.onDragEnter()}},onDragStart:function(a,c,g){this._dragNode=c[0];this._copy=g;this._source=a;this._outSourceHandler=
b.connect(this._dojoManager,"outSource",this,function(){null==this._moveHandler&&(this._moveHandler=b.connect(f.doc,"mousemove",this,"onMouseMove"))})},onMouseMove:function(a){a={x:a.pageX,y:a.pageY};this._getHoverArea(a);this._currentArea&&this._areaManager._accept&&("hidden"==this._areaManager._dropIndicator.node.style.visibility&&(this._areaManager._dropIndicator.node.style.visibility="",c.add(this._dojoManager.avatar.node,"dojoDndAvatarCanDrop")),this._areaManager.placeDropIndicator(a,this.dropIndicatorSize))},
onDragEnter:function(){var a=this._dragNode.getAttribute("dndType"),a=a?a.split(/\s*,\s*/):["text"];this._areaManager._isAccepted(a,this._areaManager._areaList[this._areaManager._currentIndexArea].accept);this._dojoManager.avatar&&(this._areaManager._accept?c.add(this._dojoManager.avatar.node,"dojoDndAvatarCanDrop"):c.remove(this._dojoManager.avatar.node,"dojoDndAvatarCanDrop"))},onDragExit:function(){this._areaManager._accept=!1;this._dojoManager.avatar&&c.remove(this._dojoManager.avatar.node,"dojoDndAvatarCanDrop");
null==this._currentArea?(this._areaManager._dropMode.refreshItems(this._areaManager._areaList[this._areaManager._oldIndexArea],this._areaManager._oldDropIndex,this.dropIndicatorSize,!1),this._areaManager._resetAfterDrop()):this._areaManager._dropIndicator.remove()},isAccepted:function(a,b){var c=a.getAttribute("dndType")?a.getAttribute("dndType"):"text";return c&&c in b?!0:!1},onDndSource:function(a){if(null!=this._currentArea)if(a){var c=!1;if(c=this._dojoManager.target==a?!0:this.isAccepted(this._dragNode,
a.accept)){if(b.disconnect(this._moveHandler),this._currentArea=this._moveHandler=null,(a=this._areaManager._dropIndicator.node)&&null!==a.parentNode&&1==a.parentNode.nodeType)a.style.visibility="hidden"}else this._resetAvatar()}else this._moveHandler||(this._moveHandler=b.connect(f.doc,"mousemove",this,"onMouseMove")),this._resetAvatar()},_resetAvatar:function(){this._dojoManager.avatar&&(this._areaManager._accept?c.add(this._dojoManager.avatar.node,"dojoDndAvatarCanDrop"):c.remove(this._dojoManager.avatar.node,
"dojoDndAvatarCanDrop"))},onDropCancel:function(){if(null==this._currentArea)this._areaManager._resetAfterDrop(),b.disconnect(this._moveHandler),b.disconnect(this._outSourceHandler),this._currentArea=this._moveHandler=this._outSourceHandler=null;else if(this._areaManager._accept)this.onDrop(this._source,[this._dragNode],this._copy,this._currentArea);else this._currentArea=null,b.disconnect(this._outSourceHandler),b.disconnect(this._moveHandler),this._moveHandler=this._outSourceHandler=null},onDrop:function(a,
c,d){b.disconnect(this._moveHandler);b.disconnect(this._outSourceHandler);this._moveHandler=this._outSourceHandler=null;this._currentArea&&(b.publish("/dnd/drop/after",[a,c,d,this._currentArea,this._areaManager._currentDropIndex]),this._currentArea=null);"hidden"==this._areaManager._dropIndicator.node.style.visibility&&(this._areaManager._dropIndicator.node.style.visibility="");this._areaManager._resetAfterDrop()}});dojox.mdnd.adapter._dndFromDojo=null;dojox.mdnd.adapter._dndFromDojo=new dojox.mdnd.adapter.DndFromDojo;
return d});