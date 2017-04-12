/*! This code was created for Printr B.V. 
 Copyright (c) 2017, All rights reserved, http://printr.nl */

/*! formide-client-2 - v2.0.5 - 2017-04-12 */



// Source: ./node_modules/angular/angular.min.js
/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(S,X,u){'use strict';function G(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.4.8/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function za(a){if(null==a||Xa(a))return!1;if(I(a)||E(a)||B&&a instanceof B)return!0;
var b="length"in Object(a)&&a.length;return Q(b)&&(0<=b&&b-1 in a||"function"==typeof a.item)}function n(a,b,d){var c,e;if(a)if(z(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(I(a)||za(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==n)a.forEach(b,d,a);else if(nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)qa.call(a,c)&&b.call(d,a[c],c,a);return a}function oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function pc(a){return function(b,d){a(d,b)}}function Td(){return++nb}function Mb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(H(g)||z(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],r=g[m];d&&H(r)?da(r)?a[m]=new Date(r.valueOf()):Ma(r)?a[m]=new RegExp(r):r.nodeName?a[m]=r.cloneNode(!0):
Nb(r)?a[m]=r.clone():(H(a[m])||(a[m]=I(r)?[]:{}),Mb(a[m],[r],!0)):a[m]=r}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function M(a){return Mb(a,ra.call(arguments,1),!1)}function Ud(a){return Mb(a,ra.call(arguments,1),!0)}function ea(a){return parseInt(a,10)}function Ob(a,b){return M(Object.create(a),b)}function x(){}function Ya(a){return a}function na(a){return function(){return a}}function qc(a){return z(a.toString)&&a.toString!==sa}function q(a){return"undefined"===typeof a}function y(a){return"undefined"!==
typeof a}function H(a){return null!==a&&"object"===typeof a}function nc(a){return null!==a&&"object"===typeof a&&!rc(a)}function E(a){return"string"===typeof a}function Q(a){return"number"===typeof a}function da(a){return"[object Date]"===sa.call(a)}function z(a){return"function"===typeof a}function Ma(a){return"[object RegExp]"===sa.call(a)}function Xa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function $a(a){return"boolean"===typeof a}function sc(a){return a&&Q(a.length)&&
Vd.test(sa.call(a))}function Nb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function Wd(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ta(a){return F(a.nodeName||a[0]&&a[0].nodeName)}function ab(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function bb(a,b){function d(a,b){var d=b.$$hashKey,e;if(I(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(nc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)qa.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!H(a))return a;var b=e.indexOf(a);if(-1!==b)return f[b];if(Xa(a)||Za(a))throw Aa("cpws");var b=!1,c;I(a)?(c=[],b=!0):sc(a)?c=new a.constructor(a):da(a)?c=new Date(a.getTime()):Ma(a)?(c=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),c.lastIndex=a.lastIndex):z(a.cloneNode)?c=a.cloneNode(!0):(c=Object.create(rc(a)),b=!0);e.push(a);f.push(c);return b?d(a,c):c}var e=[],f=[];if(b){if(sc(b))throw Aa("cpta");
if(a===b)throw Aa("cpi");I(b)?b.length=0:n(b,function(a,c){"$$hashKey"!==c&&delete b[c]});e.push(a);f.push(b);return d(a,b)}return c(a)}function ia(a,b){if(I(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(H(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function ma(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&"object"==d)if(I(a)){if(!I(b))return!1;if((d=a.length)==b.length){for(c=
0;c<d;c++)if(!ma(a[c],b[c]))return!1;return!0}}else{if(da(a))return da(b)?ma(a.getTime(),b.getTime()):!1;if(Ma(a))return Ma(b)?a.toString()==b.toString():!1;if(Za(a)||Za(b)||Xa(a)||Xa(b)||I(b)||da(b)||Ma(b))return!1;d=$();for(c in a)if("$"!==c.charAt(0)&&!z(a[c])){if(!ma(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&y(b[c])&&!z(b[c]))return!1;return!0}return!1}function cb(a,b,d){return a.concat(ra.call(b,d))}function tc(a,b){var d=2<arguments.length?ra.call(arguments,2):
[];return!z(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,cb(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Xd(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=u:Xa(b)?d="$WINDOW":b&&X===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function db(a,b){if("undefined"===typeof a)return u;Q(b)||(b=b?2:null);return JSON.stringify(a,Xd,b)}function uc(a){return E(a)?JSON.parse(a):a}function vc(a,
b){var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Pb(a,b,d){d=d?-1:1;var c=vc(b,a.getTimezoneOffset());b=a;a=d*(c-a.getTimezoneOffset());b=new Date(b.getTime());b.setMinutes(b.getMinutes()+a);return b}function ua(a){a=B(a).clone();try{a.empty()}catch(b){}var d=B("<div>").append(a).html();try{return a[0].nodeType===Na?F(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+F(b)})}catch(c){return F(d)}}function wc(a){try{return decodeURIComponent(a)}catch(b){}}
function xc(a){var b={};n((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=wc(e),y(e)&&(f=y(f)?wc(f):!0,qa.call(b,e)?I(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Qb(a){var b=[];n(a,function(a,c){I(a)?n(a,function(a){b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))}):b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))});return b.length?b.join("&"):""}function ob(a){return ja(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+")}function ja(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function Yd(a,b){var d,c,e=Oa.length;for(c=0;c<e;++c)if(d=Oa[c]+b,E(d=a.getAttribute(d)))return d;return null}function Zd(a,b){var d,c,e={};n(Oa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});n(Oa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":",
"\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==Yd(d,"strict-di"),b(d,c?[c]:[],e))}function yc(a,b,d){H(d)||(d={});d=M({strictDi:!1},d);var c=function(){a=B(a);if(a.injector()){var c=a[0]===X?"document":ua(a);throw Aa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=eb(b,d.strictDi);c.invoke(["$rootScope",
"$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;S&&e.test(S.name)&&(d.debugInfoEnabled=!0,S.name=S.name.replace(e,""));if(S&&!f.test(S.name))return c();S.name=S.name.replace(f,"");fa.resumeBootstrap=function(a){n(a,function(a){b.push(a)});return c()};z(fa.resumeDeferredBootstrap)&&fa.resumeDeferredBootstrap()}function $d(){S.name="NG_ENABLE_DEBUG_INFO!"+S.name;S.location.reload()}
function ae(a){a=fa.element(a).injector();if(!a)throw Aa("test");return a.get("$$testability")}function zc(a,b){b=b||"_";return a.replace(be,function(a,c){return(c?b:"")+a.toLowerCase()})}function ce(){var a;if(!Ac){var b=pb();(oa=q(b)?S.jQuery:b?S[b]:u)&&oa.fn.on?(B=oa,M(oa.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),a=oa.cleanData,oa.cleanData=function(b){var c;if(Rb)Rb=!1;else for(var e=0,f;null!=(f=b[e]);e++)(c=
oa._data(f,"events"))&&c.$destroy&&oa(f).triggerHandler("$destroy");a(b)}):B=N;fa.element=B;Ac=!0}}function qb(a,b,d){if(!a)throw Aa("areq",b||"?",d||"required");return a}function Qa(a,b,d){d&&I(a)&&(a=a[a.length-1]);qb(z(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ra(a,b){if("hasOwnProperty"===a)throw Aa("badname",b);}function Bc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&
z(a)?tc(e,a):a}function rb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=B(ra.call(a,0,e))),c.push(b);return c||a}function $(){return Object.create(null)}function de(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=G("$injector"),c=G("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||G;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,
d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return v}}function b(a,d){return function(b,e){e&&z(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return v}}if(!g)throw d("nomod",f);var c=[],e=[],t=[],A=a("$injector","invoke","push",e),v={_invokeQueue:c,_configBlocks:e,_runBlocks:t,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide",
"decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:A,run:function(a){t.push(a);return this}};h&&A(h);return v})}})}function ee(a){M(a,{bootstrap:yc,copy:bb,extend:M,merge:Ud,equals:ma,element:B,forEach:n,injector:eb,noop:x,bind:tc,toJson:db,fromJson:uc,identity:Ya,isUndefined:q,isDefined:y,isString:E,isFunction:z,isObject:H,isNumber:Q,isElement:Nb,isArray:I,
version:fe,isDate:da,lowercase:F,uppercase:sb,callbacks:{counter:0},getTestability:ae,$$minErr:G,$$csp:Ba,reloadWithDebugInfo:$d});Sb=de(S);Sb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ge});a.provider("$compile",Cc).directive({a:he,input:Dc,textarea:Dc,form:ie,script:je,select:ke,style:le,option:me,ngBind:ne,ngBindHtml:oe,ngBindTemplate:pe,ngClass:qe,ngClassEven:re,ngClassOdd:se,ngCloak:te,ngController:ue,ngForm:ve,ngHide:we,ngIf:xe,ngInclude:ye,ngInit:ze,ngNonBindable:Ae,
ngPluralize:Be,ngRepeat:Ce,ngShow:De,ngStyle:Ee,ngSwitch:Fe,ngSwitchWhen:Ge,ngSwitchDefault:He,ngOptions:Ie,ngTransclude:Je,ngModel:Ke,ngList:Le,ngChange:Me,pattern:Ec,ngPattern:Ec,required:Fc,ngRequired:Fc,minlength:Gc,ngMinlength:Gc,maxlength:Hc,ngMaxlength:Hc,ngValue:Ne,ngModelOptions:Oe}).directive({ngInclude:Pe}).directive(tb).directive(Ic);a.provider({$anchorScroll:Qe,$animate:Re,$animateCss:Se,$$animateQueue:Te,$$AnimateRunner:Ue,$browser:Ve,$cacheFactory:We,$controller:Xe,$document:Ye,$exceptionHandler:Ze,
$filter:Jc,$$forceReflow:$e,$interpolate:af,$interval:bf,$http:cf,$httpParamSerializer:df,$httpParamSerializerJQLike:ef,$httpBackend:ff,$xhrFactory:gf,$location:hf,$log:jf,$parse:kf,$rootScope:lf,$q:mf,$$q:nf,$sce:of,$sceDelegate:pf,$sniffer:qf,$templateCache:rf,$templateRequest:sf,$$testability:tf,$timeout:uf,$window:vf,$$rAF:wf,$$jqLite:xf,$$HashMap:yf,$$cookieReader:zf})}])}function fb(a){return a.replace(Af,function(a,d,c,e){return e?c.toUpperCase():c}).replace(Bf,"Moz$1")}function Kc(a){a=a.nodeType;
return 1===a||!a||9===a}function Lc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Tb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Cf.exec(a)||["",""])[1].toLowerCase();c=ka[c]||ka._default;d.innerHTML=c[1]+a.replace(Df,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=cb(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";n(f,function(a){e.appendChild(a)});return e}function N(a){if(a instanceof N)return a;var b;E(a)&&(a=U(a),
b=!0);if(!(this instanceof N)){if(b&&"<"!=a.charAt(0))throw Ub("nosel");return new N(a)}if(b){b=X;var d;a=(d=Ef.exec(a))?[b.createElement(d[1])]:(d=Lc(a,b))?d.childNodes:[]}Mc(this,a)}function Vb(a){return a.cloneNode(!0)}function ub(a,b){b||vb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)vb(d[c])}function Nc(a,b,d,c){if(y(c))throw Ub("offargs");var e=(c=wb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];y(d)&&ab(c||[],d);y(d)&&c&&0<c.length||
(a.removeEventListener(b,f,!1),delete e[b])};n(b.split(" "),function(a){g(a);xb[a]&&g(xb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function vb(a,b){var d=a.ng339,c=d&&gb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Nc(a)),delete gb[d],a.ng339=u))}function wb(a,b){var d=a.ng339,d=d&&gb[d];b&&!d&&(a.ng339=d=++Ff,d=gb[d]={events:{},data:{},handle:u});return d}function Wb(a,b,d){if(Kc(a)){var c=y(d),e=!c&&b&&!H(b),f=!b;a=(a=wb(a,
!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];M(a,b)}}}function yb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function zb(a,b){b&&a.setAttribute&&n(b.split(" "),function(b){a.setAttribute("class",U((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+U(b)+" "," ")))})}function Ab(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");n(b.split(" "),
function(a){a=U(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",U(d))}}function Mc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Oc(a,b){return Bb(a,"$"+(b||"ngController")+"Controller")}function Bb(a,b,d){9==a.nodeType&&(a=a.documentElement);for(b=I(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(y(d=B.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&
a.host}}function Pc(a){for(ub(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Xb(a,b){b||ub(a);var d=a.parentNode;d&&d.removeChild(a)}function Gf(a,b){b=b||S;if("complete"===b.document.readyState)b.setTimeout(a);else B(b).on("load",a)}function Qc(a,b){var d=Cb[b.toLowerCase()];return d&&Rc[ta(a)]&&d}function Hf(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(q(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;
c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||If;1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function If(a,b,d){d.call(a,b)}function Jf(a,b,d){var c=b.relatedTarget;c&&(c===a||Kf.call(a,c))||d.call(a,b)}function xf(){this.$get=function(){return M(N,
{hasClass:function(a,b){a.attr&&(a=a[0]);return yb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)}})}}function Ca(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=d+":"+(b||Td)():d+":"+a}function Sa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}n(a,this.put,this)}function Lf(a){return(a=a.toString().replace(Sc,"").match(Tc))?
"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(a,b){function d(a){return function(b,c){if(H(b))n(b,pc(a));else return a(b,c)}}function c(a,b){Ra(a,"service");if(z(b)||I(b))b=t.instantiate(b);if(!b.$get)throw Da("pget",a);return r[a+"Provider"]=b}function e(a,b){return function(){var c=v.invoke(b,this);if(q(c))throw Da("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){qb(q(a)||I(a),"modulesToLoad","not an array");var b=[],c;n(a,function(a){function d(a){var b,
c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=t.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{E(a)?(c=Sb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(t.invoke(a)):I(a)?b.push(t.invoke(a)):Qa(a,"module")}catch(e){throw I(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Da("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===
k)throw Da("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=eb.$$annotate(a,b,g),l,m,t;m=0;for(l=k.length;m<l;m++){t=k[m];if("string"!==typeof t)throw Da("itkn",t);h.push(f&&f.hasOwnProperty(t)?f[t]:d(t,g))}I(a)&&(a=a[l]);return a.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((I(a)?a[a.length-1]:a).prototype||
null);a=e(a,d,b,c);return H(a)||z(a)?a:d},get:d,annotate:eb.$$annotate,has:function(b){return r.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Sa([],!0),r={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,na(b),!1)}),constant:d(function(a,b){Ra(a,"constant");r[a]=b;A[a]=b}),decorator:function(a,b){var c=t.get(a+"Provider"),d=c.$get;c.$get=function(){var a=
v.invoke(d,c);return v.invoke(b,null,{$delegate:a})}}}},t=r.$injector=h(r,function(a,b){fa.isString(b)&&l.push(b);throw Da("unpr",l.join(" <- "));}),A={},v=A.$injector=h(A,function(a,b){var c=t.get(a+"Provider",b);return v.invoke(c.$get,c,u,a)});n(g(a),function(a){a&&v.invoke(a)});return v}function Qe(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ta(a))return b=
a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():Nb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Q(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=E(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||Gf(function(){c.$evalAsync(g)})});
return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;I(a)&&(a=a.join(" "));I(b)&&(b=b.join(" "));return a+" "+b}function Mf(a){E(a)&&(a=a.split(" "));var b=$();n(a,function(a){a.length&&(b[a]=!0)});return b}function Ea(a){return H(a)?a:{}}function Nf(a,b,d,c){function e(a){try{a.apply(null,ra.call(arguments,1))}finally{if(v--,0===v)for(;T.length;)try{T.pop()()}catch(b){d.error(b)}}}function f(){L=null;g();h()}function g(){a:{try{p=m.state;break a}catch(a){}p=void 0}p=q(p)?
null:p;ma(p,J)&&(p=J);J=p}function h(){if(w!==k.url()||C!==p)w=k.url(),C=p,n(aa,function(a){a(k.url(),p)})}var k=this,l=a.location,m=a.history,r=a.setTimeout,t=a.clearTimeout,A={};k.isMock=!1;var v=0,T=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){v++};k.notifyWhenNoOutstandingRequests=function(a){0===v?a():T.push(a)};var p,C,w=l.href,ga=b.find("base"),L=null;g();C=p;k.url=function(b,d,e){q(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=
C===e;if(w===b&&(!c.history||f))return k;var h=w&&Fa(w)===Fa(b);w=b;C=e;if(!c.history||h&&f){if(!h||L)L=b;d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b;l.href!==b&&(L=b)}else m[d?"replaceState":"pushState"](e,"",b),g(),C=p;return k}return L||l.href.replace(/%27/g,"'")};k.state=function(){return p};var aa=[],D=!1,J=null;k.onUrlChange=function(b){if(!D){if(c.history)B(a).on("popstate",f);B(a).on("hashchange",f);D=!0}aa.push(b);return b};k.$$applicationDestroyed=function(){B(a).off("hashchange popstate",
f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=ga.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;v++;c=r(function(){delete A[c];e(a)},b||0);A[c]=!0;return c};k.defer.cancel=function(a){return A[a]?(delete A[a],t(a),e(x),!0):!1}}function Ve(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new Nf(a,c,b,d)}]}function We(){this.$get=function(){function a(a,c){function e(a){a!=r&&(t?t==a&&(t=a.n):t=a,f(a.n,a.p),f(a,r),r=a,
r.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw G("$cacheFactory")("iid",a);var g=0,h=M({},c,{id:a}),k=$(),l=c&&c.capacity||Number.MAX_VALUE,m=$(),r=null,t=null;return b[a]={put:function(a,b){if(!q(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(t.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==r&&(r=b.p);b==t&&
(t=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=$();g=0;m=$();r=t=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return M({},h,{size:g})}}}var b={};a.info=function(){var a={};n(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function rf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Cc(a,b){function d(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};n(a,function(a,f){var g=a.match(d);
if(!g)throw ha("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function c(a){var b=a.charAt(0);if(!b||b!==F(b))throw ha("baddir",a);if(a!==a.trim())throw ha("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Wd("ngSrc,ngSrcset,src,srcset"),k=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function t(b,f){Ra(b,"directive");
E(b)?(c(b),qb(f,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var f=[];n(e[b],function(e,g){try{var h=a.invoke(e);z(h)?h={compile:na(h)}:!h.compile&&h.link&&(h.compile=na(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,m=h.name,t={isolateScope:null,bindToController:null};H(l.scope)&&(!0===l.bindToController?(t.bindToController=d(l.scope,
m,!0),t.isolateScope={}):t.isolateScope=d(l.scope,m,!1));H(l.bindToController)&&(t.bindToController=d(l.bindToController,m,!0));if(H(t.bindToController)){var v=l.controller,R=l.controllerAs;if(!v)throw ha("noctrl",m);var V;a:if(R&&E(R))V=R;else{if(E(v)){var n=Uc.exec(v);if(n){V=n[3];break a}}V=void 0}if(!V)throw ha("noident",m);}var s=k.$$bindings=t;H(s.isolateScope)&&(h.$$isolateBindings=s.isolateScope);h.$$moduleName=e.$$moduleName;f.push(h)}catch(u){c(u)}});return f}])),e[b].push(f)):n(b,pc(t));
return this};this.aHrefSanitizationWhitelist=function(a){return y(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return y(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var m=!0;this.debugInfoEnabled=function(a){return y(a)?(m=a,this):m};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,
b,c,d,p,C,w,ga,L,aa,D){function J(a,b){try{a.addClass(b)}catch(c){}}function K(a,b,c,d,e){a instanceof B||(a=B(a));n(a,function(b,c){b.nodeType==Na&&b.nodeValue.match(/\S+/)&&(a[c]=B(b).wrap("<span></span>").parent()[0])});var f=O(a,b,a,c,d,e);K.$$addScopeClass(a);var g=null;return function(b,c,d){qb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=
d&&d[0])?"foreignobject"!==ta(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?B(Yb(g,B("<div>").append(a).html())):c?Pa.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);K.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);return d}}function O(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,t,w,D;if(p)for(D=Array(c.length),m=0;m<h.length;m+=3)f=h[m],D[f]=c[f];else D=c;m=0;for(t=h.length;m<t;)k=D[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),K.$$addScopeInfo(B(k),
l)):l=a,w=c.transcludeOnThisElement?R(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?R(a,b):null,c(f,l,k,d,w)):f&&f(a,k.childNodes,u,e)}for(var h=[],k,l,m,t,p,w=0;w<a.length;w++){k=new fa;l=V(a[w],[],k,0===w?d:u,e);(f=l.length?Z(l,a[w],k,b,c,null,[],[],f):null)&&f.scope&&K.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[w].childNodes)||!m.length?null:O(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(w,f,k),t=!0,p=p||f;f=null}return t?g:null}function R(a,
b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function V(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case 1:P(b,va(ta(a)),"E",d,e);for(var l,m,t,p=a.attributes,w=0,D=p&&p.length;w<D;w++){var K=!1,A=!1;l=p[w];k=l.name;m=U(l.value);l=va(k);if(t=ka.test(l))k=k.replace(Vc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(l=l.match(la))&&G(l[1])&&(K=k,A=k.substr(0,k.length-
5)+"end",k=k.substr(0,k.length-6));l=va(k.toLowerCase());h[l]=k;if(t||!c.hasOwnProperty(l))c[l]=m,Qc(a,l)&&(c[l]=!0);W(a,b,m,l,t);P(b,l,"A",d,e,K,A)}a=a.className;H(a)&&(a=a.animVal);if(E(a)&&""!==a)for(;k=g.exec(a);)l=va(k[2]),P(b,l,"C",d,e)&&(c[l]=U(k[3])),a=a.substr(k.index+k[0].length);break;case Na:if(11===Ha)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);N(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=
va(k[1]),P(b,l,"M",d,e)&&(c[l]=U(k[2]))}catch(R){}}b.sort(Ia);return b}function Ta(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ha("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function s(a,b,c){return function(d,e,f,g,h){e=Ta(e[0],b,c);return a(d,e,f,g,h)}}function Z(a,b,d,e,f,g,h,l,m){function t(a,b,c,d){if(a){c&&(a=s(a,c,d));a.require=q.require;a.directiveName=x;if(O===
q||q.$$isolateScope)a=ca(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=s(b,c,d));b.require=q.require;b.directiveName=x;if(O===q||q.$$isolateScope)b=ca(b,{isolateScope:!0});l.push(b)}}function p(a,b,c,d){var e;if(E(b)){var f=b.match(k);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ha("ctreq",b,a);}else if(I(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=p(a,b[g],c,d);return e||
null}function w(a,b,c,d,e,f){var g=$(),h;for(h in d){var k=d[h],l={$scope:k===O||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=k.controller;"@"==m&&(m=b[k.name]);l=C(m,l,!0,k.controllerAs);g[k.name]=l;aa||a.data("$"+k.name+"Controller",l.instance)}return g}function D(a,c,e,f,g){function k(a,b,c){var d;Za(a)||(c=b,b=a,a=u);aa&&(d=v);c||(c=aa?V.parent():V);return g(a,b,d,c,Ta)}var m,t,A,v,C,V,Ga;b===e?(f=d,V=d.$$element):(V=B(e),f=new fa(V,d));A=c;O?t=c.$new(!0):R&&(A=c.$parent);g&&(C=k,
C.$$boundTransclude=g);T&&(v=w(V,f,C,T,t,c));O&&(K.$$addScopeInfo(V,t,!0,!(J&&(J===O||J===O.$$originalDirective))),K.$$addScopeClass(V,!0),t.$$isolateBindings=O.$$isolateBindings,(Ga=ba(c,f,t,t.$$isolateBindings,O))&&t.$on("$destroy",Ga));for(var n in v){Ga=T[n];var ga=v[n],L=Ga.$$bindings.bindToController;ga.identifier&&L&&(m=ba(A,f,ga.instance,L,Ga));var q=ga();q!==ga.instance&&(ga.instance=q,V.data("$"+Ga.name+"Controller",q),m&&m(),m=ba(A,f,ga.instance,L,Ga))}F=0;for(M=h.length;F<M;F++)m=h[F],
ea(m,m.isolateScope?t:c,V,f,m.require&&p(m.directiveName,m.require,V,v),C);var Ta=c;O&&(O.template||null===O.templateUrl)&&(Ta=t);a&&a(Ta,e.childNodes,u,g);for(F=l.length-1;0<=F;F--)m=l[F],ea(m,m.isolateScope?t:c,V,f,m.require&&p(m.directiveName,m.require,V,v),C)}m=m||{};for(var A=-Number.MAX_VALUE,R=m.newScopeDirective,T=m.controllerDirectives,O=m.newIsolateScopeDirective,J=m.templateDirective,n=m.nonTlbTranscludeDirective,ga=!1,L=!1,aa=m.hasElementTranscludeDirective,Z=d.$$element=B(b),q,x,P,Ia=
e,G,F=0,M=a.length;F<M;F++){q=a[F];var N=q.$$start,Q=q.$$end;N&&(Z=Ta(b,N,Q));P=u;if(A>q.priority)break;if(P=q.scope)q.templateUrl||(H(P)?(Ua("new/isolated scope",O||R,q,Z),O=q):Ua("new/isolated scope",O,q,Z)),R=R||q;x=q.name;!q.templateUrl&&q.controller&&(P=q.controller,T=T||$(),Ua("'"+x+"' controller",T[x],q,Z),T[x]=q);if(P=q.transclude)ga=!0,q.$$tlb||(Ua("transclusion",n,q,Z),n=q),"element"==P?(aa=!0,A=q.priority,P=Z,Z=d.$$element=B(X.createComment(" "+x+": "+d[x]+" ")),b=Z[0],Y(f,ra.call(P,0),
b),Ia=K(P,e,A,g&&g.name,{nonTlbTranscludeDirective:n})):(P=B(Vb(b)).contents(),Z.empty(),Ia=K(P,e,u,u,{needsNewScope:q.$$isolateScope||q.$$newScope}));if(q.template)if(L=!0,Ua("template",J,q,Z),J=q,P=z(q.template)?q.template(Z,d):q.template,P=ja(P),q.replace){g=q;P=Tb.test(P)?Xc(Yb(q.templateNamespace,U(P))):[];b=P[0];if(1!=P.length||1!==b.nodeType)throw ha("tplrt",x,"");Y(f,Z,b);P={$attr:{}};var Wc=V(b,[],P),W=a.splice(F+1,a.length-(F+1));(O||R)&&y(Wc,O,R);a=a.concat(Wc).concat(W);S(d,P);M=a.length}else Z.html(P);
if(q.templateUrl)L=!0,Ua("template",J,q,Z),J=q,q.replace&&(g=q),D=Of(a.splice(F,a.length-F),Z,d,f,ga&&Ia,h,l,{controllerDirectives:T,newScopeDirective:R!==q&&R,newIsolateScopeDirective:O,templateDirective:J,nonTlbTranscludeDirective:n}),M=a.length;else if(q.compile)try{G=q.compile(Z,d,Ia),z(G)?t(null,G,N,Q):G&&t(G.pre,G.post,N,Q)}catch(da){c(da,ua(Z))}q.terminal&&(D.terminal=!0,A=Math.max(A,q.priority))}D.scope=R&&!0===R.scope;D.transcludeOnThisElement=ga;D.templateOnThisElement=L;D.transclude=Ia;
m.hasElementTranscludeDirective=aa;return D}function y(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Ob(a[d],{$$isolateScope:b,$$newScope:c})}function P(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var m;d=a.get(d+"Directive");for(var p=0,w=d.length;p<w;p++)try{m=d[p],(q(g)||g>m.priority)&&-1!=m.restrict.indexOf(f)&&(k&&(m=Ob(m,{$$start:k,$$end:l})),b.push(m),h=m)}catch(D){c(D)}}return h}function G(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=
c[d],b.multiElement)return!0;return!1}function S(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;n(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});n(b,function(b,f){"class"==f?(J(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Of(a,b,c,e,f,g,h,k){var l=[],m,t,p=b[0],w=a.shift(),D=Ob(w,{templateUrl:null,
transclude:null,replace:null,$$originalDirective:w}),A=z(w.templateUrl)?w.templateUrl(b,c):w.templateUrl,K=w.templateNamespace;b.empty();d(A).then(function(d){var T,v;d=ja(d);if(w.replace){d=Tb.test(d)?Xc(Yb(K,U(d))):[];T=d[0];if(1!=d.length||1!==T.nodeType)throw ha("tplrt",w.name,A);d={$attr:{}};Y(e,b,T);var C=V(T,[],d);H(w.scope)&&y(C,!0);a=C.concat(a);S(c,d)}else T=p,b.html(d);a.unshift(D);m=Z(a,T,c,f,b,w,g,h,k);n(e,function(a,c){a==T&&(e[c]=b[0])});for(t=O(b[0].childNodes,f);l.length;){d=l.shift();
v=l.shift();var ga=l.shift(),L=l.shift(),C=b[0];if(!d.$$destroyed){if(v!==p){var q=v.className;k.hasElementTranscludeDirective&&w.replace||(C=Vb(T));Y(ga,B(v),C);J(B(C),q)}v=m.transcludeOnThisElement?R(d,m.transclude,L):L;m(t,d,C,e,v)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=R(b,m.transclude,e)),m(t,b,c,d,a)))}}function Ia(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Ua(a,
b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ha("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ua(d));}function N(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&K.$$addBindingClass(a);return function(a,c){var e=c.parent();b||K.$$addBindingClass(e);K.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Yb(a,b){a=F(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");
c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function Q(a,b){if("srcdoc"==b)return L.HTML;var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return L.RESOURCE_URL}function W(a,c,d,e,f){var g=Q(a,e);f=h[e]||f;var k=b(d,!0,g,f);if(k){if("multiple"===e&&"select"===ta(a))throw ha("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers=$());if(l.test(e))throw ha("nodomevents");
var m=h[e];m!==d&&(k=m&&b(m,!0,g,f),d=m);k&&(h[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function Y(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);
B.hasData(d)&&(B.data(c,B.data(d)),oa?(Rb=!0,oa.cleanData([d])):delete B.cache[d[B.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],B(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function ca(a,b){return M(function(){return a.apply(null,arguments)},a,b)}function ea(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function ba(a,c,d,e,f){var g=[];n(e,function(e,h){var k=e.attrName,l=e.optional,m,t,w,D;switch(e.mode){case "@":l||qa.call(c,k)||(d[h]=c[k]=void 0);c.$observe(k,function(a){E(a)&&
(d[h]=a)});c.$$observers[k].$$scope=a;E(c[k])&&(d[h]=b(c[k])(a));break;case "=":if(!qa.call(c,k)){if(l)break;c[k]=void 0}if(l&&!c[k])break;t=p(c[k]);D=t.literal?ma:function(a,b){return a===b||a!==a&&b!==b};w=t.assign||function(){m=d[h]=t(a);throw ha("nonassign",c[k],f.name);};m=d[h]=t(a);l=function(b){D(b,d[h])||(D(b,m)?w(a,b=d[h]):d[h]=b);return m=b};l.$stateful=!0;l=e.collection?a.$watchCollection(c[k],l):a.$watch(p(c[k],l),null,t.literal);g.push(l);break;case "&":t=c.hasOwnProperty(k)?p(c[k]):
x;if(t===x&&l)break;d[h]=function(b){return t(a,b)}}});return g.length&&function(){for(var a=0,b=g.length;a<b;++a)g[a]()}}var fa=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};fa.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&aa.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&aa.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Yc(a,b);c&&c.length&&aa.addClass(this.$$element,
c);(c=Yc(b,a))&&c.length&&aa.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Qc(this.$$element[0],a),g=Zc[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=zc(a,"-"));f=ta(this.$$element);if("a"===f&&"href"===a||"img"===f&&"src"===a)this[a]=b=D(b,"src"===a);else if("img"===f&&"srcset"===a){for(var f="",g=U(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<
k;l++)var m=2*l,f=f+D(U(g[m]),!0),f=f+(" "+U(g[m+1]));g=U(g[2*l]).split(/\s/);f+=D(U(g[0]),!0);2===g.length&&(f+=" "+U(g[1]));this[a]=b=f}!1!==d&&(null===b||q(b)?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&n(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=$()),e=d[a]||(d[a]=[]);e.push(b);w.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||q(c[a])||b(c[a])});return function(){ab(e,b)}}};var da=b.startSymbol(),
ia=b.endSymbol(),ja="{{"==da||"}}"==ia?Ya:function(a){return a.replace(/\{\{/g,da).replace(/}}/g,ia)},ka=/^ngAttr[A-Z]/,la=/^(.+)Start$/;K.$$addBindingInfo=m?function(a,b){var c=a.data("$binding")||[];I(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:x;K.$$addBindingClass=m?function(a){J(a,"ng-binding")}:x;K.$$addScopeInfo=m?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:x;K.$$addScopeClass=m?function(a,b){J(a,b?"ng-isolate-scope":"ng-scope")}:x;return K}]}function va(a){return fb(a.replace(Vc,
""))}function Yc(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function Xc(a){a=B(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&Pf.call(a,b,1);return a}function Xe(){var a={},b=!1;this.register=function(b,c){Ra(b,"controller");H(b)?M(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!H(a.$scope))throw G("$controller")("noscp",
d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,r;h=!0===h;k&&E(k)&&(r=k);if(E(f)){k=f.match(Uc);if(!k)throw Qf("ctrlfmt",f);m=k[1];r=r||k[3];f=a.hasOwnProperty(m)?a[m]:Bc(g.$scope,m,!0)||(b?Bc(c,m,!0):u);Qa(f,m,!0)}if(h)return h=(I(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),r&&e(g,r,l,m||f.name),M(function(){var a=d.invoke(f,l,g,m);a!==l&&(H(a)||z(a))&&(l=a,r&&e(g,r,l,m||f.name));return l},{instance:l,identifier:r});l=d.instantiate(f,g,m);r&&e(g,r,l,m||f.name);return l}}]}function Ye(){this.$get=
["$window",function(a){return B(a.document)}]}function Ze(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function Zb(a){return H(a)?da(a)?a.toISOString():db(a):a}function df(){this.$get=function(){return function(a){if(!a)return"";var b=[];oc(a,function(a,c){null===a||q(a)||(I(a)?n(a,function(a,d){b.push(ja(c)+"="+ja(Zb(a)))}):b.push(ja(c)+"="+ja(Zb(a))))});return b.join("&")}}}function ef(){this.$get=function(){return function(a){function b(a,e,f){null===a||q(a)||
(I(a)?n(a,function(a,c){b(a,e+"["+(H(a)?c:"")+"]")}):H(a)&&!da(a)?oc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ja(e)+"="+ja(Zb(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function $b(a,b){if(E(a)){var d=a.replace(Rf,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf($c))||(c=(c=d.match(Sf))&&Tf[c[0]].test(d));c&&(a=uc(d))}}return a}function ad(a){var b=$(),d;E(a)?n(a.split("\n"),function(a){d=a.indexOf(":");var e=F(U(a.substr(0,d)));a=U(a.substr(d+1));e&&
(b[e]=b[e]?b[e]+", "+a:a)}):H(a)&&n(a,function(a,d){var f=F(d),g=U(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function bd(a){var b;return function(d){b||(b=ad(a));return d?(d=b[F(d)],void 0===d&&(d=null),d):b}}function cd(a,b,d,c){if(z(c))return c(a,b,d);n(c,function(c){a=c(a,b,d)});return a}function cf(){var a=this.defaults={transformResponse:[$b],transformRequest:[function(a){return H(a)&&"[object File]"!==sa.call(a)&&"[object Blob]"!==sa.call(a)&&"[object FormData]"!==sa.call(a)?db(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:ia(ac),put:ia(ac),patch:ia(ac)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return y(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return y(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,g,h,k,l){function m(b){function c(a){var b=M({},a);b.data=cd(a.data,a.headers,a.status,f.transformResponse);
a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};n(a,function(a,e){z(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!fa.isObject(b))throw G("$http")("badreq",b);var f=M({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=a.headers,d=M({},b.headers),f,g,h,c=M({},c.common,c[F(b.method)]);a:for(f in c){g=F(f);for(h in d)if(F(h)===g)continue a;d[f]=c[f]}return e(d,ia(b))}(b);
f.method=sb(f.method);f.paramSerializer=E(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=cd(b.data,bd(d),u,b.transformRequest);q(e)&&n(d,function(a,b){"content-type"===F(b)&&delete d[b]});q(b.withCredentials)&&!q(a.withCredentials)&&(b.withCredentials=a.withCredentials);return r(b,e).then(c,c)},u],h=k.when(f);for(n(v,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=
g.shift();var m=g.shift(),h=h.then(b,m)}d?(h.success=function(a){Qa(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Qa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=dd("success"),h.error=dd("error"));return h}function r(c,d){function g(a,c,d,e){function f(){l(c,a,d,e)}J&&(200<=a&&300>a?J.put(R,[a,c,ad(d),e]):J.remove(R));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function l(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?n.resolve:
n.reject)({data:a,status:b,headers:bd(d),config:c,statusText:e})}function r(a){l(a.data,a.status,ia(a.headers()),a.statusText)}function v(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1)}var n=k.defer(),D=n.promise,J,K,O=c.headers,R=t(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);D.then(v,v);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(J=H(c.cache)?c.cache:H(a.cache)?a.cache:A);J&&(K=J.get(R),y(K)?K&&z(K.then)?K.then(r,r):I(K)?l(K[1],
K[0],ia(K[2]),K[3]):l(K,200,{},"OK"):J.put(R,D));q(K)&&((K=ed(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:u)&&(O[c.xsrfHeaderName||a.xsrfHeaderName]=K),e(c.method,R,d,g,O,c.timeout,c.withCredentials,c.responseType));return D}function t(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var A=g("$http");a.paramSerializer=E(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var v=[];n(c,function(a){v.unshift(E(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){n(arguments,
function(a){m[a]=function(b,c){return m(M({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){n(arguments,function(a){m[a]=function(b,c,d){return m(M({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function gf(){this.$get=function(){return function(){return new S.XMLHttpRequest}}}function ff(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return Uf(a,c,a.defer,b.angular.callbacks,d[0])}]}function Uf(a,b,d,
c,e){function f(a,b,d){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,A="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),A=a.type,g="error"===a.type?404:200);d&&d(g,A)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,r,t,A){function v(){C&&C();w&&w.abort()}
function T(b,c,e,f,g){y(L)&&d.cancel(L);C=w=null;b(c,e,f,g);a.$$completeOutstandingRequest(x)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==F(e)){var p="_"+(c.counter++).toString(36);c[p]=function(a){c[p].data=a;c[p].called=!0};var C=f(h.replace("JSON_CALLBACK","angular.callbacks."+p),p,function(a,b){T(l,a,c[p].data,"",b);c[p]=x})}else{var w=b(e,h);w.open(e,h,!0);n(m,function(a,b){y(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,
c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==wa(h).protocol?404:0);T(l,c,b,w.getAllResponseHeaders(),a)};e=function(){T(l,-1,null,null,"")};w.onerror=e;w.onabort=e;t&&(w.withCredentials=!0);if(A)try{w.responseType=A}catch(ga){if("json"!==A)throw ga;}w.send(q(k)?null:k)}if(0<r)var L=d(v,r);else r&&z(r.then)&&r.then(v)}}function af(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler",
"$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(m,a).replace(r,b)}function h(f,h,m,r){function p(a){try{var b=a;a=m?e.getTrusted(m,b):e.valueOf(b);var d;if(r&&!y(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=db(a)}d=a}return d}catch(g){c(Ja.interr(f,g))}}r=!!r;for(var C,w,n=0,L=[],s=[],D=f.length,J=[],K=[];n<D;)if(-1!=(C=f.indexOf(a,n))&&-1!=(w=f.indexOf(b,C+k)))n!==C&&J.push(g(f.substring(n,C))),n=f.substring(C+
k,w),L.push(n),s.push(d(n,p)),n=w+l,K.push(J.length),J.push("");else{n!==D&&J.push(g(f.substring(n)));break}m&&1<J.length&&Ja.throwNoconcat(f);if(!h||L.length){var O=function(a){for(var b=0,c=L.length;b<c;b++){if(r&&q(a[b]))return;J[K[b]]=a[b]}return J.join("")};return M(function(a){var b=0,d=L.length,e=Array(d);try{for(;b<d;b++)e[b]=s[b](a);return O(e)}catch(g){c(Ja.interr(f,g))}},{exp:f,expressions:L,$$watchDelegate:function(a,b){var c;return a.$watchGroup(s,function(d,e){var f=O(d);z(b)&&b.call(this,
f,d!==e?c:f,a);c=f})}})}}var k=a.length,l=b.length,m=new RegExp(a.replace(/./g,f),"g"),r=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function bf(){this.$get=["$rootScope","$window","$q","$$q",function(a,b,d,c){function e(e,h,k,l){var m=4<arguments.length,r=m?ra.call(arguments,4):[],t=b.setInterval,A=b.clearInterval,v=0,n=y(l)&&!l,p=(n?c:d).defer(),C=p.promise;k=y(k)?k:0;C.then(null,null,m?function(){e.apply(null,r)}:e);C.$$intervalId=
t(function(){p.notify(v++);0<k&&v>=k&&(p.resolve(v),A(C.$$intervalId),delete f[C.$$intervalId]);n||a.$apply()},h);f[C.$$intervalId]=p;return C}var f={};e.cancel=function(a){return a&&a.$$intervalId in f?(f[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete f[a.$$intervalId],!0):!1};return e}]}function bc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=ob(a[b]);return a.join("/")}function fd(a,b){var d=wa(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=ea(d.port)||Vf[d.protocol]||
null}function gd(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=wa(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=xc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function pa(a,b){if(0===b.indexOf(a))return b.substr(a.length)}function Fa(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function ib(a){return a.replace(/(#.+)|#$/,"$1")}function cc(a,b,d){this.$$html5=!0;d=d||"";
fd(a,this);this.$$parse=function(a){var d=pa(b,a);if(!E(d))throw Db("ipthprfx",a,b);gd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Qb(this.$$search),d=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;y(f=pa(a,c))?(g=f,g=y(f=pa(d,f))?b+(pa("/",f)||f):a+g):y(f=pa(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);
return!!g}}function dc(a,b,d){fd(a,this);this.$$parse=function(c){var e=pa(a,c)||pa(b,c),f;q(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",q(e)&&(a=c,this.replace())):(f=pa(d,e),q(f)&&(f=e));gd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Qb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?
d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Fa(a)==Fa(b)?(this.$$parse(b),!0):!1}}function hd(a,b,d){this.$$html5=!0;dc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Fa(c)?f=c:(g=pa(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Qb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Eb(a){return function(){return this[a]}}
function id(a,b){return function(d){if(q(d))return this[a];this[a]=b(d);this.$$compose();return this}}function hf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return y(b)?(a=b,this):a};this.html5Mode=function(a){return $a(a)?(b.enabled=a,this):H(a)?($a(a.enabled)&&(b.enabled=a.enabled),$a(a.requireBase)&&(b.requireBase=a.requireBase),$a(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",
function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var r=c.url(),t;if(b.enabled){if(!m&&b.requireBase)throw Db("nobase");t=r.substring(0,r.indexOf("/",r.indexOf("//")+2))+(m||"/");m=e.history?cc:hd}else t=Fa(r),m=dc;var A=t.substr(0,Fa(t).lastIndexOf("/")+1);l=new m(t,A,"#"+a);l.$$parseLinkUrl(r,r);l.$$state=
c.state();var v=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=B(a.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");H(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=wa(h.animVal).href);v.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=
!0))}});ib(l.absUrl())!=ib(r)&&c.url(l.absUrl(),!0);var n=!0;c.onUrlChange(function(a,b){q(pa(A,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=ib(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(n=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=ib(c.url()),b=ib(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(n||
m)n=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function jf(){var a=!0,b=this;this.debugEnabled=function(b){return y(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||x;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];n(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Va(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===
a||"__proto__"===a)throw ba("isecfld",b);return a}function jd(a,b){a+="";if(!E(a))throw ba("iseccst",b);return a}function xa(a,b){if(a){if(a.constructor===a)throw ba("isecfn",b);if(a.window===a)throw ba("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ba("isecdom",b);if(a===Object)throw ba("isecobj",b);}return a}function kd(a,b){if(a){if(a.constructor===a)throw ba("isecfn",b);if(a===Wf||a===Xf||a===Yf)throw ba("isecff",b);}}function ld(a,b){if(a&&(a===(0).constructor||a===
(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw ba("isecaf",b);}function Zf(a,b){return"undefined"!==typeof a?a:b}function md(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function W(a,b){var d,c;switch(a.type){case s.Program:d=!0;n(a.body,function(a){W(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:W(a.argument,b);a.constant=a.argument.constant;
a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:W(a.left,b);W(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:W(a.left,b);W(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:W(a.test,b);W(a.alternate,b);W(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=
!1;a.toWatch=[a];break;case s.MemberExpression:W(a.object,b);a.computed&&W(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];n(a.arguments,function(a){W(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:W(a.left,b);W(a.right,b);a.constant=a.left.constant&&a.right.constant;
a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];n(a.elements,function(a){W(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];n(a.properties,function(a){W(a.value,b);d=d&&a.value.constant;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1,a.toWatch=[]}}function nd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:u}}
function od(a){return a.type===s.Identifier||a.type===s.MemberExpression}function pd(a){if(1===a.body.length&&od(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function qd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function rd(a,b){this.astBuilder=a;this.$filter=b}function sd(a,
b){this.astBuilder=a;this.$filter=b}function Fb(a){return"constructor"==a}function ec(a){return z(a.valueOf)?a.valueOf():$f.call(a)}function kf(){var a=$(),b=$();this.$get=["$filter",function(d){function c(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ec(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function e(a,b,d,e,f){var g=e.inputs,h;if(1===g.length){var k=c,g=g[0];return a.$watch(function(a){var b=g(a);c(b,k)||(h=e(a,u,u,[b]),k=b&&ec(b));return h},b,d,f)}for(var l=[],m=[],r=0,n=
g.length;r<n;r++)l[r]=c,m[r]=null;return a.$watch(function(a){for(var b=!1,d=0,f=g.length;d<f;d++){var k=g[d](a);if(b||(b=!c(k,l[d])))m[d]=k,l[d]=k&&ec(k)}b&&(h=e(a,u,u,m));return h},b,d,f)}function f(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function g(a,b,c,d){function e(a){var b=!0;n(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,
c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function h(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){z(b)&&b.apply(this,arguments);e()},c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==g&&c!==f?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return y(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==e?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=
e,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var l=Ba().noUnsafeEval,m={csp:l,expensiveChecks:!1},r={csp:l,expensiveChecks:!0};return function(c,l,v){var n,p,q;switch(typeof c){case "string":q=c=c.trim();var w=v?b:a;n=w[q];n||(":"===c.charAt(0)&&":"===c.charAt(1)&&(p=!0,c=c.substring(2)),v=v?r:m,n=new fc(v),n=(new gc(n,d,v)).parse(c),n.constant?n.$$watchDelegate=h:p?n.$$watchDelegate=n.literal?g:f:n.inputs&&(n.$$watchDelegate=e),w[q]=n);return k(n,l);case "function":return k(c,l);default:return x}}}]}
function mf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return td(function(b){a.$evalAsync(b)},b)}]}function nf(){this.$get=["$browser","$exceptionHandler",function(a,b){return td(function(b){a.defer(b)},b)}]}function td(a,b){function d(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function c(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,
d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{z(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}function g(){this.promise=new c;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=G("$q",TypeError);M(c.prototype,{then:function(a,b,c){if(q(a)&&q(b)&&q(c))return this;var d=new g;this.$$state.pending=this.$$state.pending||[];
this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}});M(g.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){var c,e;e=d(this,this.$$resolve,this.$$reject);try{if(H(a)||z(a))c=a&&a.then;z(c)?(this.promise.$$state.status=
-1,c.call(a,e[0],e[1],this.notify)):(this.promise.$$state.value=a,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),b(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(z(a)?
a(c):c)}catch(h){b(h)}}})}});var k=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},l=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return k(e,!1)}return d&&z(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):k(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},r=function A(a){if(!z(a))throw h("norslvr",a);if(!(this instanceof A))return new A(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
r.defer=function(){return new g};r.reject=function(a){var b=new g;b.reject(a);return b.promise};r.when=m;r.resolve=m;r.all=function(a){var b=new g,c=0,d=I(a)?[]:{};n(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return r}function wf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||
a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function lf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++nb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=G("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&
(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,k){function l(a){a.currentScope.$$destroyed=!0}function m(a){9===Ha&&(a.$$childHead&&m(a.$$childHead),a.$$nextSibling&&m(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function r(){this.$id=++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=
!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function t(a){if(w.$$phase)throw d("inprog",w.$$phase);w.$$phase=a}function A(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function v(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function p(){for(;aa.length;)try{aa.shift()()}catch(a){g(a)}e=null}function C(){null===e&&(e=k.defer(function(){w.$apply(p)}))}r.prototype={constructor:r,
$new:function(b,c){var d;c=c||this;b?(d=new r,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!=this)&&d.$on("$destroy",l);return d},$watch:function(a,b,d,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var g=this,k=g.$$watchers,l={fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;z(b)||(l.fn=x);k||
(k=g.$$watchers=[]);k.unshift(l);A(this,1);return function(){0<=ab(k,l)&&A(g,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});n(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!q(e)){if(H(e))if(za(e))for(f!==r&&(f=r,n=f.length=0,l++),a=e.length,n!==a&&(l++,f.length=n=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==t&&(f=t={},n=0,l++);a=0;for(b in e)qa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(n++,f[b]=g,l++));if(n>a)for(b in l++,f)qa.call(e,b)||(n--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,g,k=1<b.length,l=0,m=
h(a,c),r=[],t={},p=!0,n=0;return this.$watch(m,function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(k)if(H(e))if(za(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)qa.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var a,f,h,l,m,r,n=b,A,q=[],v,C;t("$digest");k.$$checkUrlChange();this===w&&null!==e&&(k.defer.cancel(e),p());c=null;do{r=!1;for(A=this;u.length;){try{C=u.shift(),C.scope.$eval(C.expression,C.locals)}catch(aa){g(aa)}c=null}a:do{if(l=A.$$watchers)for(m=l.length;m--;)try{if(a=
l[m])if((f=a.get(A))!==(h=a.last)&&!(a.eq?ma(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))r=!0,c=a,a.last=a.eq?bb(f,null):f,a.fn(f,h===s?f:h,A),5>n&&(v=4-n,q[v]||(q[v]=[]),q[v].push({msg:z(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:f,oldVal:h}));else if(a===c){r=!1;break a}}catch(y){g(y)}if(!(l=A.$$watchersCount&&A.$$childHead||A!==this&&A.$$nextSibling))for(;A!==this&&!(l=A.$$nextSibling);)A=A.$parent}while(A=l);if((r||u.length)&&!n--)throw w.$$phase=null,d("infdig",
b,q);}while(r||u.length);for(w.$$phase=null;L.length;)try{L.shift()()}catch(x){g(x)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===w&&k.$$applicationDestroyed();A(this,-this.$$watchersCount);for(var b in this.$$listenerCount)v(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=
this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=x;this.$on=this.$watch=this.$watchGroup=function(){return x};this.$$listeners={};this.$$nextSibling=null;m(this)}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){w.$$phase||u.length||k.defer(function(){u.length&&w.$digest()});u.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){L.push(a)},$apply:function(a){try{t("$apply");
try{return this.$eval(a)}finally{w.$$phase=null}}catch(b){g(b)}finally{try{w.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&aa.push(b);C()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,v(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h=
{name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=cb([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(r){g(r)}else d.splice(l,1),l--,m--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};
if(!this.$$listenerCount[a])return e;for(var f=cb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,f)}catch(l){g(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var w=new r,u=w.$$asyncQueue=[],L=w.$$postDigestQueue=[],aa=w.$$applyAsyncQueue=[];return w}]}function ge(){var a=/^\s*(https?|ftp|mailto|tel|file):/,
b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=wa(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function ag(a){if("self"===a)return a;if(E(a)){if(-1<a.indexOf("***"))throw ya("iwcard",a);a=ud(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Ma(a))return new RegExp("^"+
a.source+"$");throw ya("imatcher");}function vd(a){var b=[];y(a)&&n(a,function(a){b.push(ag(a))});return b}function pf(){this.SCE_CONTEXTS=la;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=vd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=vd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?ed(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=
new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ya("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[la.HTML]=e(g);h[la.CSS]=e(g);h[la.URL]=e(g);h[la.JS]=e(g);h[la.RESOURCE_URL]=e(h[la.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ya("icontext",a,b);if(null===b||q(b)||""===b)return b;if("string"!==typeof b)throw ya("itype",
a);return new c(b)},getTrusted:function(d,e){if(null===e||q(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===la.RESOURCE_URL){var g=wa(e.toString()),r,t,n=!1;r=0;for(t=a.length;r<t;r++)if(c(a[r],g)){n=!0;break}if(n)for(r=0,t=b.length;r<t;r++)if(c(b[r],g)){n=!1;break}if(n)return e;throw ya("insecurl",e.toString());}if(d===la.HTML)return f(e);throw ya("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}
function of(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ha)throw ya("iequirks");var c=ia(la);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;n(la,function(a,
b){var d=F(b);c[fb("parse_as_"+d)]=function(b){return e(a,b)};c[fb("get_trusted_"+d)]=function(b){return f(a,b)};c[fb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function qf(){this.$get=["$window","$document",function(a,b){var d={},c=ea((/android (\d+)/.exec(F((a.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),f=b[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,m=!1;if(k){for(var r in k)if(l=h.exec(r)){g=l[0];g=g.substr(0,1).toUpperCase()+
g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||g+"Transition"in k);m=!!("animation"in k||g+"Animation"in k);!c||l&&m||(l=E(k.webkitTransition),m=E(k.webkitAnimation))}return{history:!(!a.history||!a.history.pushState||4>c||e),hasEvent:function(a){if("input"===a&&11>=Ha)return!1;if(q(d[a])){var b=f.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ba(),vendorPrefix:g,transitions:l,animations:m,android:c}}]}function sf(){this.$get=["$templateCache","$http","$q","$sce",
function(a,b,d,c){function e(f,g){e.totalPendingRequests++;E(f)&&a.get(f)||(f=c.getTrustedResourceUrl(f));var h=b.defaults&&b.defaults.transformResponse;I(h)?h=h.filter(function(a){return a!==$b}):h===$b&&(h=null);return b.get(f,{cache:a,transformResponse:h})["finally"](function(){e.totalPendingRequests--}).then(function(b){a.put(f,b.data);return b.data},function(a){if(!g)throw ha("tpload",f,a.status,a.statusText);return d.reject(a)})}e.totalPendingRequests=0;return e}]}function tf(){this.$get=["$rootScope",
"$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];n(a,function(a){var c=fa.element(a).data("$binding");c&&n(c,function(c){d?(new RegExp("(^|\\s)"+ud(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},
setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function uf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){z(f)||(l=k,k=f,f=x);var m=ra.call(arguments,3),r=y(l)&&!l,t=(r?c:d).defer(),n=t.promise,q;q=b.defer(function(){try{t.resolve(f.apply(null,m))}catch(b){t.reject(b),e(b)}finally{delete g[n.$$timeoutId]}r||a.$apply()},k);n.$$timeoutId=q;g[q]=t;return n}var g={};
f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function wa(a){Ha&&(Y.setAttribute("href",a),a=Y.href);Y.setAttribute("href",a);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function ed(a){a=
E(a)?wa(a):a;return a.protocol===wd.protocol&&a.host===wd.host}function vf(){this.$get=na(S)}function xd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),q(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function zf(){this.$get=xd}function Jc(a){function b(d,c){if(H(d)){var e={};n(d,function(a,c){e[c]=
b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",yd);b("date",zd);b("filter",bg);b("json",cg);b("limitTo",dg);b("lowercase",eg);b("number",Ad);b("orderBy",Bd);b("uppercase",fg)}function bg(){return function(a,b,d){if(!za(a)){if(null==a)return a;throw G("filter")("notarray",a);}var c;switch(hc(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=
gg(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function gg(a,b,d){var c=H(a)&&"$"in a;!0===b?b=ma:z(b)||(b=function(a,b){if(q(a))return!1;if(null===a||null===b)return a===b;if(H(b)||H(a)&&!qc(a))return!1;a=F(""+a);b=F(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!H(e)?Ka(e,a.$,b,!1):Ka(e,a,b,d)}}function Ka(a,b,d,c,e){var f=hc(a),g=hc(b);if("string"===g&&"!"===b.charAt(0))return!Ka(a,b.substring(1),d,c);if(I(a))return a.some(function(a){return Ka(a,b,d,c)});
switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&Ka(a[h],b,d,!0))return!0;return e?!1:Ka(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!z(e)&&!q(e)&&(f="$"===h,!Ka(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function hc(a){return null===a?"null":typeof a}function yd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){q(c)&&(c=b.CURRENCY_SYM);q(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Cd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,
e).replace(/\u00A4/g,c)}}function Ad(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Cd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Cd(a,b,d,c,e){if(H(a))return"";var f=0>a;a=Math.abs(a);var g=Infinity===a;if(!g&&!isFinite(a))return"";var h=a+"",k="",l=!1,m=[];g&&(k="\u221e");if(!g&&-1!==h.indexOf("e")){var r=h.match(/([\d\.]+)e(-?)(\d+)/);r&&"-"==r[2]&&r[3]>e+1?a=0:(k=h,l=!0)}if(g||l)0<e&&1>a&&(k=a.toFixed(e),a=parseFloat(k),k=k.replace(ic,c));else{g=(h.split(ic)[1]||"").length;
q(e)&&(e=Math.min(Math.max(b.minFrac,g),b.maxFrac));a=+(Math.round(+(a.toString()+"e"+e)).toString()+"e"+-e);var g=(""+a).split(ic),h=g[0],g=g[1]||"",r=0,t=b.lgSize,n=b.gSize;if(h.length>=t+n)for(r=h.length-t,l=0;l<r;l++)0===(r-l)%n&&0!==l&&(k+=d),k+=h.charAt(l);for(l=r;l<h.length;l++)0===(h.length-l)%t&&0!==l&&(k+=d),k+=h.charAt(l);for(;g.length<e;)g+="0";e&&"0"!==e&&(k+=c+g.substr(0,e))}0===a&&(f=!1);m.push(f?b.negPre:b.posPre,k,f?b.negSuf:b.posSuf);return m.join("")}function Gb(a,b,d){var c="";
0>a&&(c="-",a=-a);for(a=""+a;a.length<b;)a="0"+a;d&&(a=a.substr(a.length-b));return c+a}function ca(a,b,d,c){d=d||0;return function(e){e=e["get"+a]();if(0<d||e>-d)e+=d;0===e&&-12==d&&(e=12);return Gb(e,b,c)}}function Hb(a,b){return function(d,c){var e=d["get"+a](),f=sb(b?"SHORT"+a:a);return c[f][e]}}function Dd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Ed(a){return function(b){var d=Dd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-
+d;b=1+Math.round(b/6048E5);return Gb(b,a)}}function jc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function zd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ea(b[9]+b[10]),g=ea(b[9]+b[11]));h.call(a,ea(b[1]),ea(b[2])-1,ea(b[3]));f=ea(b[4]||0)-f;g=ea(b[5]||0)-g;h=ea(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;E(c)&&(c=hg.test(c)?ea(c):b(c));Q(c)&&(c=new Date(c));if(!da(c)||!isFinite(c.getTime()))return c;for(;d;)(l=ig.exec(d))?(h=cb(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=vc(f,c.getTimezoneOffset()),c=Pb(c,f,!0));n(h,function(b){k=jg[b];g+=k?k(c,a.DATETIME_FORMATS,m):b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function cg(){return function(a,b){q(b)&&(b=2);return db(a,b)}}function dg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):ea(b);if(isNaN(b))return a;Q(a)&&(a=a.toString());if(!I(a)&&!E(a))return a;d=!d||isNaN(d)?0:ea(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?a.slice(d,d+b):0===d?a.slice(b,a.length):a.slice(Math.max(0,d+b),d)}}function Bd(a){function b(b,d){d=d?-1:1;return b.map(function(b){var c=1,h=Ya;if(z(b))h=b;else if(E(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(h=a(b),h.constant))var k=h(),h=function(a){return a[k]}}return{get:h,
descending:c*d}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(a,e,f){if(!za(a))return a;I(e)||(e=[e]);0===e.length&&(e=["+"]);var g=b(e,f);g.push({get:function(){return{}},descending:f?-1:1});a=Array.prototype.map.call(a,function(a,b){return{value:a,predicateValues:g.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("string"===c)e=e.toLowerCase();else if("object"===c)a:{if("function"===typeof e.valueOf&&
(e=e.valueOf(),d(e)))break a;if(qc(e)&&(e=e.toString(),d(e)))break a;e=b}return{value:e,type:c}})}});a.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],n=0;c.type===f.type?c.value!==f.value&&(n=c.value<f.value?-1:1):n=c.type<f.type?-1:1;if(c=n*g[d].descending)break}return c});return a=a.map(function(a){return a.value})}}function La(a){z(a)&&(a={link:a});a.restrict=a.restrict||"AC";return na(a)}function Fd(a,b,d,c,e){var f=this,g=[];f.$error=
{};f.$$success={};f.$pending=u;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Ib;f.$rollbackViewValue=function(){n(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){n(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&
f[a.$name]===a&&delete f[a.$name];n(f.$pending,function(b,c){f.$setValidity(c,null,a)});n(f.$error,function(b,c){f.$setValidity(c,null,a)});n(f.$$success,function(b,c){f.$setValidity(c,null,a)});ab(g,a);a.$$parentForm=Ib};Gd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(ab(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Wa);c.addClass(a,Jb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};
f.$setPristine=function(){c.setClass(a,Wa,Jb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;n(g,function(a){a.$setPristine()})};f.$setUntouched=function(){n(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function kc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function jb(a,b,d,c,e,f){var g=F(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(a){h=!0});
b.on("compositionend",function(){h=!1;k()})}var k=function(a){l&&(f.defer.cancel(l),l=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=U(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",k);else{var l,m=function(a,b,c){l||(l=f.defer(function(){l=null;b&&b.value===c||k(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",
m)}b.on("change",k);c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Kb(a,b){return function(d,c){var e,f;if(da(d))return d;if(E(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(kg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,
mm:0,ss:0,sss:0},n(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function kb(a,b,d,c){return function(e,f,g,h,k,l,m){function r(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function n(a){return y(a)&&!da(a)?d(a)||u:a}Hd(e,f,g,h);jb(e,f,g,h,k,l);var A=h&&h.$options&&h.$options.timezone,v;h.$$parserName=a;h.$parsers.push(function(a){return h.$isEmpty(a)?null:b.test(a)?(a=d(a,v),A&&(a=Pb(a,A)),a):u});h.$formatters.push(function(a){if(a&&
!da(a))throw lb("datefmt",a);if(r(a))return(v=a)&&A&&(v=Pb(v,A,!0)),m("date")(a,c,A);v=null;return""});if(y(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!r(a)||q(s)||d(a)>=s};g.$observe("min",function(a){s=n(a);h.$validate()})}if(y(g.max)||g.ngMax){var p;h.$validators.max=function(a){return!r(a)||q(p)||d(a)<=p};g.$observe("max",function(a){p=n(a);h.$validate()})}}}function Hd(a,b,d,c){(c.$$hasNativeValidators=H(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};
return c.badInput&&!c.typeMismatch?u:a})}function Id(a,b,d,c,e){if(y(c)){a=a(c);if(!a.constant)throw lb("constexpr",d,c);return a(b)}return e}function lc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return I(a)?(n(a,function(a){b=b.concat(e(a))}),b):E(a)?a.split(" "):H(a)?(n(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",
link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||$(),d=[];n(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(a){if(!0===b||f.$index%2===b){var l=e(a||[]);if(!m){var n=k(l,1);h.$addClass(n)}else if(!ma(a,m)){var q=e(m),n=c(l,q),l=c(q,l),n=k(n,1),l=k(l,-1);n&&n.length&&d.addClass(g,n);l&&l.length&&d.removeClass(g,l)}}m=ia(a)}var m;f.$watch(h[a],l,!0);h.$observe("class",function(b){l(f.$eval(h[a]))});"ngClass"!==
a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[a]));g===b?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}function Gd(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+zc(a,"-"):"";b(mb+a,!0===c);b(Jd+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Jd]=!(f[mb]=e.hasClass(mb));c.$setValidity=function(a,e,f){q(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&
h(c.$pending,a,f),Kd(c.$pending)&&(c.$pending=u));$a(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(Ld,!0),c.$valid=c.$invalid=u,d("",null)):(b(Ld,!1),c.$valid=Kd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?u:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Kd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var lg=/^\/(.+)\/([a-z]*)$/,
F=function(a){return E(a)?a.toLowerCase():a},qa=Object.prototype.hasOwnProperty,sb=function(a){return E(a)?a.toUpperCase():a},Ha,B,oa,ra=[].slice,Pf=[].splice,mg=[].push,sa=Object.prototype.toString,rc=Object.getPrototypeOf,Aa=G("ng"),fa=S.angular||(S.angular={}),Sb,nb=0;Ha=X.documentMode;x.$inject=[];Ya.$inject=[];var I=Array.isArray,Vd=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,U=function(a){return E(a)?a.trim():a},ud=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},Ba=function(){if(!y(Ba.rules)){var a=X.querySelector("[ng-csp]")||X.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ba.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ba;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ba.rules},pb=function(){if(y(pb.name_))return pb.name_;var a,b,d=Oa.length,c,e;for(b=0;b<
d;++b)if(c=Oa[b],a=X.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return pb.name_=e},Oa=["ng-","data-ng-","ng:","x-ng-"],be=/[A-Z]/g,Ac=!1,Rb,Na=3,fe={full:"1.4.8",major:1,minor:4,dot:8,codeName:"ice-manipulation"};N.expando="ng339";var gb=N.cache={},Ff=1;N._data=function(a){return this.cache[a[this.expando]]||{}};var Af=/([\:\-\_]+(.))/g,Bf=/^moz([A-Z])/,xb={mouseleave:"mouseout",mouseenter:"mouseover"},Ub=G("jqLite"),Ef=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,
Cf=/<([\w:-]+)/,Df=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ka={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option;ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead;ka.th=ka.td;var Kf=Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&
16)},Pa=N.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===X.readyState?setTimeout(b):(this.on("DOMContentLoaded",b),N(S).on("load",b))},toString:function(){var a=[];n(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?B(this[a]):B(this[this.length+a])},length:0,push:mg,sort:[].sort,splice:[].splice},Cb={};n("multiple selected checked disabled readOnly required open".split(" "),function(a){Cb[F(a)]=a});var Rc={};n("input select option textarea button form details".split(" "),
function(a){Rc[a]=!0});var Zc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};n({data:Wb,removeData:vb,hasData:function(a){for(var b in gb[a.ng339])return!0;return!1}},function(a,b){N[b]=a});n({data:Wb,inheritedData:Bb,scope:function(a){return B.data(a,"$scope")||Bb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return B.data(a,"$isolateScope")||B.data(a,"$isolateScopeNoTemplate")},controller:Oc,injector:function(a){return Bb(a,
"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:yb,css:function(a,b,d){b=fb(b);if(y(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Na&&2!==c&&8!==c)if(c=F(b),Cb[c])if(y(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||x).specified?c:u;else if(y(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?u:a},prop:function(a,b,d){if(y(d))a[b]=d;else return a[b]},
text:function(){function a(a,d){if(q(d)){var c=a.nodeType;return 1===c||c===Na?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(q(b)){if(a.multiple&&"select"===ta(a)){var d=[];n(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(q(b))return a.innerHTML;ub(a,!0);a.innerHTML=b},empty:Pc},function(a,b){N.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Pc&&q(2==a.length&&a!==yb&&a!==Oc?
b:c)){if(H(b)){for(e=0;e<g;e++)if(a===Wb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=q(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});n({removeData:vb,on:function(a,b,d,c){if(y(c))throw Ub("onargs");if(Kc(a)){c=wb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Hf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===
b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],xb[b]?(h(xb[b],Jf),h(b,u,!0)):h(b)}},off:Nc,one:function(a,b,d){a=B(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;ub(a);n(new N(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];n(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=
a.nodeType;if(1===d||11===d){b=new N(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;n(new N(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){b=B(b).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)},remove:Xb,detach:function(a){Xb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new N(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Ab,removeClass:zb,
toggleClass:function(a,b,d){b&&n(b.split(" "),function(b){var e=d;q(e)&&(e=!yb(a,b));(e?Ab:zb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Vb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=wb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},
stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:x,type:f,target:a},b.type&&(c=M(c,b)),b=ia(g),e=d?[c].concat(d):[c],n(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){N.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)q(f)?(f=a(this[g],b,c,e),y(f)&&(f=B(f))):Mc(f,a(this[g],b,c,e));return y(f)?f:this};N.prototype.bind=N.prototype.on;
N.prototype.unbind=N.prototype.off});Sa.prototype={put:function(a,b){this[Ca(a,this.nextUid)]=b},get:function(a){return this[Ca(a,this.nextUid)]},remove:function(a){var b=this[a=Ca(a,this.nextUid)];delete this[a];return b}};var yf=[function(){this.$get=[function(){return Sa}]}],Tc=/^[^\(]*\(\s*([^\)]*)\)/m,ng=/,/,og=/^\s*(_?)(\S+?)\1\s*$/,Sc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Da=G("$injector");eb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw E(d)&&
d||(d=a.name||Lf(a)),Da("strictdi",d);b=a.toString().replace(Sc,"");b=b.match(Tc);n(b[1].split(ng),function(a){a.replace(og,function(a,b,d){c.push(d)})})}a.$inject=c}}else I(a)?(b=a.length-1,Qa(a[b],"fn"),c=a.slice(0,b)):Qa(a,"fn",!0);return c};var Md=G("$animate"),Ue=function(){this.$get=["$q","$$rAF",function(a,b){function d(){}d.all=x;d.chain=x;d.prototype={end:x,cancel:x,resume:x,pause:x,complete:x,then:function(c,d){return a(function(a){b(function(){a()})}).then(c,d)}};return d}]},Te=function(){var a=
new Sa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=E(b)?b.split(" "):I(b)?b:[],n(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){n(b,function(b){var c=a.get(b);if(c){var d=Mf(b.attr("class")),e="",f="";n(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});n(b,function(a){e&&Ab(a,e);f&&zb(a,f)});a.remove(b)}});b.length=0}return{enabled:x,on:x,off:x,pin:x,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);
k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);return new d}}}]},Re=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Md("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=
a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Md("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=
f&&B(f);g=g&&B(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ea(h))},move:function(e,f,g,h){f=f&&B(f);g=g&&B(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ea(h))},leave:function(b,c){return a.push(b,"leave",Ea(c),function(){b.remove()})},addClass:function(b,c,g){g=Ea(g);g.addClass=hb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ea(g);g.removeClass=hb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ea(h);h.addClass=hb(h.addClass,
c);h.removeClass=hb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ea(k);k.from=k.from?M(k.from,c):c;k.to=k.to?M(k.to,g):g;k.tempClasses=hb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],Se=function(){this.$get=["$$rAF","$q",function(a,b){var d=function(){};d.prototype={done:function(a){this.defer&&this.defer[!0===a?"reject":"resolve"]()},end:function(){this.done()},cancel:function(){this.done(!0)},getPromise:function(){this.defer||(this.defer=
b.defer());return this.defer.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)}};return function(b,e){function f(){a(function(){e.addClass&&(b.addClass(e.addClass),e.addClass=null);e.removeClass&&(b.removeClass(e.removeClass),e.removeClass=null);e.to&&(b.css(e.to),e.to=null);g||h.done();g=!0});return h}e.cleanupStyles&&(e.from=e.to=null);e.from&&(b.css(e.from),e.from=
null);var g,h=new d;return{start:f,end:f}}}]},ha=G("$compile");Cc.$inject=["$provide","$$sanitizeUriProvider"];var Vc=/^((?:x|data)[\:\-_])/i,Qf=G("$controller"),Uc=/^(\S+)(\s+as\s+(\w+))?$/,$e=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof B&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},$c="application/json",ac={"Content-Type":$c+";charset=utf-8"},Sf=/^\[|^\{(?!\{)/,Tf={"[":/]$/,"{":/}$/},Rf=/^\)\]\}',?\n/,pg=G("$http"),dd=function(a){return function(){throw pg("legacy",
a);}},Ja=fa.$interpolateMinErr=G("$interpolate");Ja.throwNoconcat=function(a){throw Ja("noconcat",a);};Ja.interr=function(a,b){return Ja("interr",a,b.toString())};var qg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Vf={http:80,https:443,ftp:21},Db=G("$location"),rg={$$html5:!1,$$replace:!1,absUrl:Eb("$$absUrl"),url:function(a){if(q(a))return this.$$url;var b=qg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Eb("$$protocol"),
host:Eb("$$host"),port:Eb("$$port"),path:id("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(E(a)||Q(a))a=a.toString(),this.$$search=xc(a);else if(H(a))a=bb(a,{}),n(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Db("isrcharg");break;default:q(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:id("$$hash",function(a){return null!==
a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};n([hd,dc,cc],function(a){a.prototype=Object.create(rg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==cc||!this.$$html5)throw Db("nostate");this.$$state=q(b)?null:b;return this}});var ba=G("$parse"),Wf=Function.prototype.call,Xf=Function.prototype.apply,Yf=Function.prototype.bind,Lb=$();n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Lb[a]=!0});var sg={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},fc=function(a){this.options=a};fc.prototype={constructor:fc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;
else{var b=a+this.peek(),d=b+this.peek(2),c=Lb[b],e=Lb[d];Lb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||
"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=y(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ba("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=F(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();
if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var b=this.text.charAt(this.index);if(!this.isIdent(b)&&!this.isNumber(b))break;this.index++}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=sg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,
value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal=
"Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,
body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?
(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,
operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,
left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=bb(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():
this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),
arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?b.key=this.constant():this.peek().identifier?b.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");b.value=this.expression();a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},
throwError:function(a,b){throw ba("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw ba("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ba("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];
var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},constants:{"true":{type:s.Literal,value:!0},"false":{type:s.Literal,value:!1},"null":{type:s.Literal,value:null},undefined:{type:s.Literal,value:u},"this":{type:s.ThisExpression}}};rd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],
body:[],own:{}},inputs:[]};W(c,d.$filter);var e="",f;this.stage="assign";if(f=pd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=nd(c.body);d.stage="inputs";n(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+
'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Va,xa,kd,jd,ld,Zf,md,a);this.state=this.stage=u;e.literal=qd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;n(b,function(b){a.push("var "+b+"="+d.generateFunction(b,
"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;n(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,
d,c,e,f){var g,h,k=this,l,m;c=c||x;if(!f&&y(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:n(a.body,function(b,c){k.recurse(b.expression,u,u,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case s.UnaryExpression:this.recurse(a.argument,u,u,function(a){h=a});m=a.operator+"("+this.ifDefined(h,
0)+")";this.assign(b,m);c(m);break;case s.BinaryExpression:this.recurse(a.left,u,u,function(a){g=a});this.recurse(a.right,u,u,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,
b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Va(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",
a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,u,function(){k.if_(k.notNull(g),function(){if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,
h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Va(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],n(a.arguments,
function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);n(a.arguments,function(a){k.recurse(a,k.nextId(),u,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},
function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!od(a.left))throw ba("lval");this.recurse(a.left,u,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=[];n(a.elements,function(a){k.recurse(a,k.nextId(),u,function(a){l.push(a)})});
m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case s.ObjectExpression:l=[];n(a.properties,function(a){k.recurse(a.value,k.nextId(),u,function(b){l.push(k.escape(a.key.type===s.Identifier?a.key.name:""+a.key.value)+":"+b)})});m="{"+l.join(",")+"}";this.assign(b,m);c(m);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+
this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,
"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){return a+"."+b},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},
addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+",text)")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+
a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(E(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(Q(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===
typeof a)return"undefined";throw ba("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};sd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;W(c,d.$filter);var e,f;if(e=pd(c))f=this.recurse(e);e=nd(c.body);var g;e&&(g=[],n(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];n(c.body,function(a){h.push(d.recurse(a.expression))});
e=0===c.body.length?function(){}:1===c.body.length?h[0]:function(a,b){var c;n(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=qd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),
e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Va(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Fb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Va(a.property.name,
f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],n(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var r=[],n=0;n<g.length;++n)r.push(g[n](a,c,d,f));a=e.apply(u,r,f);return b?{context:u,name:u,value:a}:a}:function(a,
c,d,m){var r=e(a,c,d,m),n;if(null!=r.value){xa(r.context,f.expression);kd(r.value,f.expression);n=[];for(var q=0;q<g.length;++q)n.push(xa(g[q](a,c,d,m),f.expression));n=xa(r.value.apply(r.context,n),f.expression)}return b?{value:n}:n};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,d,g,m);a=e(a,d,g,m);xa(n.value,f.expression);ld(n.context);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],n(a.elements,function(a){g.push(f.recurse(a))}),
function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],n(a.properties,function(a){g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},n=0;n<g.length;++n)f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.NGValueParameter:return function(a,c,d,e){return b?{value:d}:d}}},"unary+":function(a,
b){return function(d,c,e,f){d=a(d,c,e,f);d=y(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=y(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=md(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(y(h)?h:0)-(y(c)?c:0);return d?{value:h}:h}},"binary*":function(a,
b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,
d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:u,name:u,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=
g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:u;b&&xa(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,g,h,k),m=jd(m),Va(m,e),c&&1!==c&&l&&!l[m]&&(l[m]={}),n=l[m],xa(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&g&&!g[b]&&(g[b]={});h=null!=g?g[b]:u;(d||Fb(b))&&xa(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,
b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var gc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(this.lexer);this.astCompiler=d.csp?new sd(this.ast,b):new rd(this.ast,b)};gc.prototype={constructor:gc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};$();$();var $f=Object.prototype.valueOf,ya=G("$sce"),la={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ha=G("$compile"),Y=X.createElement("a"),wd=wa(S.location.href);
xd.$inject=["$document"];Jc.$inject=["$provide"];yd.$inject=["$locale"];Ad.$inject=["$locale"];var ic=".",jg={yyyy:ca("FullYear",4),yy:ca("FullYear",2,0,!0),y:ca("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:ca("Month",2,1),M:ca("Month",1,1),dd:ca("Date",2),d:ca("Date",1),HH:ca("Hours",2),H:ca("Hours",1),hh:ca("Hours",2,-12),h:ca("Hours",1,-12),mm:ca("Minutes",2),m:ca("Minutes",1),ss:ca("Seconds",2),s:ca("Seconds",1),sss:ca("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,b){return 12>
a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Ed(2),w:Ed(1),G:jc,GG:jc,GGG:jc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},ig=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,hg=/^\-?\d+$/;zd.$inject=["$locale"];var eg=na(F),fg=na(sb);Bd.$inject=["$parse"];var he=na({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,
b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===sa.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),tb={};n(Cb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=va("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});tb[c]=function(){return{restrict:"A",priority:100,link:e}}}});n(Zc,function(a,b){tb[b]=function(){return{priority:100,link:function(a,
c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(lg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});n(["src","srcset","href"],function(a){var b=va("ng-"+a);tb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===sa.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ha&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});
var Ib={$addControl:x,$$renameControl:function(a,b){a.$name=b},$removeControl:x,$setValidity:x,$setDirty:x,$setPristine:x,$setSubmitted:x};Fd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Nd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||x}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Fd,compile:function(d,f){d.addClass(Wa).addClass(mb);var g=f.name?"name":a&&f.ngForm?"ngForm":
!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var q=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",q,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",q,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var s=g?c(n.$name):x;g&&(s(a,n),e.$observe(g,function(b){n.$name!==b&&(s(a,u),n.$$parentForm.$$renameControl(n,b),s=c(n.$name),s(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);
s(a,u);M(n,Ib)})}}}}}]},ie=Nd(),ve=Nd(!0),kg=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,tg=/^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/,ug=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,vg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Od=/^(\d{4})-(\d{2})-(\d{2})$/,Pd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,mc=/^(\d{4})-W(\d\d)$/,Qd=/^(\d{4})-(\d\d)$/,
Rd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Sd={text:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);kc(c)},date:kb("date",Od,Kb(Od,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Pd,Kb(Pd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Rd,Kb(Rd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",mc,function(a,b){if(da(a))return a;if(E(a)){mc.lastIndex=0;var d=mc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Dd(c),e=7*(e-1);b&&(d=b.getHours(),f=
b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:kb("month",Qd,Kb(Qd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Hd(a,b,d,c);jb(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){return c.$isEmpty(a)?null:vg.test(a)?parseFloat(a):u});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!Q(a))throw lb("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||
q(g)||a>=g};d.$observe("min",function(a){y(a)&&!Q(a)&&(a=parseFloat(a,10));g=Q(a)&&!isNaN(a)?a:u;c.$validate()})}if(y(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||q(h)||a<=h};d.$observe("max",function(a){y(a)&&!Q(a)&&(a=parseFloat(a,10));h=Q(a)&&!isNaN(a)?a:u;c.$validate()})}},url:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);kc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||tg.test(d)}},email:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);kc(c);
c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||ug.test(d)}},radio:function(a,b,d,c){q(d.name)&&b.attr("name",++nb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Id(h,a,"ngTrueValue",d.ngTrueValue,!0),l=Id(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&
a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return ma(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:x,button:x,submit:x,reset:x,file:x},Dc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Sd[F(g.type)]||Sd.text)(e,f,g,h[0],b,a,d,c)}}}}],wg=/^(true|false|\d+)$/,Ne=function(){return{restrict:"A",priority:100,compile:function(a,
b){return wg.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},ne=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=q(a)?"":a})}}}}],pe=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));
b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=q(a)?"":a})}}}}],oe=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){c.html(a.getTrustedHtml(f(b))||"")})}}}}],Me=na({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
qe=lc("",!0),se=lc("Odd",0),re=lc("Even",1),te=La({compile:function(a,b){b.$set("ngCloak",u);a.removeClass("ng-cloak")}}),ue=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ic={},xg={blur:!0,focus:!0};n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=va("ng-"+a);Ic[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=
d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};xg[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var xe=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(b,d,c,e,f){var g,h,k;b.$watch(c.ngIf,function(b){b?h||f(function(b,e){h=e;b[b.length++]=X.createComment(" end ngIf: "+c.ngIf+" ");g={clone:b};a.enter(b,d.parent(),d)}):(k&&(k.remove(),k=null),h&&(h.$destroy(),h=null),g&&(k=
rb(g.clone),a.leave(k).then(function(){k=null}),g=null))})}}}],ye=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:fa.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,q){var s=0,v,u,p,C=function(){u&&(u.remove(),u=null);v&&(v.$destroy(),v=null);p&&(d.leave(p).then(function(){u=null}),u=p,p=null)};c.$watch(f,function(f){var m=function(){!y(h)||h&&!c.$eval(h)||
b()},u=++s;f?(a(f,!0).then(function(a){if(u===s){var b=c.$new();n.template=a;a=q(b,function(a){C();d.enter(a,null,e).then(m)});v=b;p=a;v.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){u===s&&(C(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(C(),n.template=null)})}}}}],Pe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){/SVG/.test(d[0].toString())?(d.empty(),a(Lc(e.template,X).childNodes)(b,function(a){d.append(a)},
{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],ze=La({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Le=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?U(e):e;c.$parsers.push(function(a){if(!q(a)){var b=[];a&&n(a.split(g),function(a){a&&b.push(f?U(a):a)});return b}});c.$formatters.push(function(a){return I(a)?a.join(e):u});c.$isEmpty=function(a){return!a||
!a.length}}}},mb="ng-valid",Jd="ng-invalid",Wa="ng-pristine",Jb="ng-dirty",Ld="ng-pending",lb=G("ngModel"),yg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;
this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=u;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Ib;var m=e(d.ngModel),r=m.assign,t=m,s=r,v=null,B,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");t=function(a){var c=m(a);z(c)&&(c=b(a));return c};s=function(a,b){z(m(a))?f(a,{$$$p:p.$modelValue}):r(a,p.$modelValue)}}else if(!m.assign)throw lb("nonassign",d.ngModel,ua(c));};this.$render=x;this.$isEmpty=
function(a){return q(a)||""===a||null===a||a!==a};var C=0;Gd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;f.removeClass(c,Jb);f.addClass(c,Wa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;f.removeClass(c,Wa);f.addClass(c,Jb);p.$$parentForm.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=
!0;p.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(v);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!Q(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,b=p.$valid,c=p.$modelValue,d=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(e){d||b===e||(p.$modelValue=e?a:u,p.$modelValue!==c&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=
!0;n(p.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(n(p.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;n(p.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!z(h.then))throw lb("$asyncValidators",h);f(g,u);c.push(h.then(function(){f(g,!0)},function(a){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},x):g(!0)}function f(a,b){h===C&&p.$setValidity(a,b)}function g(a){h===C&&c(a)}C++;var h=C;(function(){var a=p.$$parserName||"parse";if(q(B))f(a,
null);else return B||(n(p.$validators,function(a,b){f(b,null)}),n(p.$asyncValidators,function(a,b){f(b,null)})),f(a,B),B;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=p.$viewValue;g.cancel(v);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=p.$$lastCommittedViewValue;if(B=q(b)?u:!0)for(var c=0;c<p.$parsers.length;c++)if(b=p.$parsers[c](b),
q(b)){B=!1;break}Q(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=t(a));var d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=b;e&&(p.$modelValue=b,p.$modelValue!==d&&p.$$writeModelToScope());p.$$runValidators(b,p.$$lastCommittedViewValue,function(a){e||(p.$modelValue=a?b:u,p.$modelValue!==d&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,p.$modelValue);n(p.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){p.$viewValue=
a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=p.$options;d&&y(d.debounce)&&(d=d.debounce,Q(d)?c=d:Q(d[b])?c=d[b]:Q(d["default"])&&(c=d["default"]));g.cancel(v);c?v=g(function(){p.$commitViewValue()},c):h.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var b=t(a);if(b!==p.$modelValue&&(p.$modelValue===p.$modelValue||b===b)){p.$modelValue=p.$$rawModelValue=b;B=u;for(var c=p.$formatters,
d=c.length,e=b;d--;)e=c[d](e);p.$viewValue!==e&&(p.$viewValue=p.$$lastCommittedViewValue=e,p.$render(),p.$$runValidators(b,e,x))}return b})}],Ke=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:yg,priority:1,compile:function(b){b.addClass(Wa).addClass("ng-untouched").addClass(mb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,
a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(c){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],zg=/(\s+|^)default(\s+|$)/,Oe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=bb(a.$eval(b.ngModelOptions));y(this.$options.updateOn)?
(this.$options.updateOnDefault=!1,this.$options.updateOn=U(this.$options.updateOn.replace(zg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ae=La({terminal:!0,priority:1E3}),Ag=G("ngOptions"),Bg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ie=["$compile","$parse",function(a,
b){function d(a,c,d){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function l(a){var b;if(!q&&za(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var m=a.match(Bg);if(!m)throw Ag("iexp",a,ua(c));var n=m[5]||m[7],q=m[6];a=/ as /.test(m[0])&&m[1];var s=m[9];c=b(m[2]?m[1]:n);var v=a&&b(a)||c,u=s&&b(s),p=s?function(a,b){return u(d,b)}:function(a){return Ca(a)},C=function(a,b){return p(a,z(a,b))},w=b(m[2]||
m[1]),y=b(m[3]||""),B=b(m[4]||""),x=b(m[8]),D={},z=q?function(a,b){D[q]=b;D[n]=a;return D}:function(a){D[n]=a;return D};return{trackBy:s,getTrackByValue:C,getWatchables:b(x,function(a){var b=[];a=a||[];for(var c=l(a),e=c.length,f=0;f<e;f++){var g=a===c?f:c[f],k=z(a[g],g),g=p(a[g],k);b.push(g);if(m[2]||m[1])g=w(d,k),b.push(g);m[4]&&(k=B(d,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},c=x(d)||[],f=l(c),g=f.length,m=0;m<g;m++){var n=c===f?m:f[m],r=z(c[n],n),q=v(d,r),n=p(q,r),t=w(d,
r),u=y(d,r),r=B(d,r),q=new e(n,q,t,u,r);a.push(q);b[n]=q}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[C(a)]},getViewValueFromOption:function(a){return s?fa.copy(a.viewValue):a.viewValue}}}}}var c=X.createElement("option"),e=X.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=x},post:function(b,g,h,k){function l(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,
b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function m(a,b,c,d){b&&F(b.nodeName)===c?c=b:(c=d.cloneNode(!1),b?a.insertBefore(c,b):a.appendChild(c));return c}function r(a){for(var b;a;)b=a.nextSibling,Xb(a),a=b}function q(a){var b=p&&p[0],c=z&&z[0];if(b||c)for(;a&&(a===b||a===c||8===a.nodeType||""===a.value);)a=a.nextSibling;return a}function s(){var a=D&&u.readValue();D=E.getOptions();var b={},d=g[0].firstChild;x&&g.prepend(p);d=q(d);D.items.forEach(function(a){var f,h;a.group?
(f=b[a.group],f||(f=m(g[0],d,"optgroup",e),d=f.nextSibling,f.label=a.group,f=b[a.group]={groupElement:f,currentOptionElement:f.firstChild}),h=m(f.groupElement,f.currentOptionElement,"option",c),l(a,h),f.currentOptionElement=h.nextSibling):(h=m(g[0],d,"option",c),l(a,h),d=h.nextSibling)});Object.keys(b).forEach(function(a){r(b[a].currentOptionElement)});r(d);v.$render();if(!v.$isEmpty(a)){var f=u.readValue();(E.trackBy?ma(a,f):a===f)||(v.$setViewValue(f),v.$render())}}var v=k[1];if(v){var u=k[0];k=
h.multiple;for(var p,C=0,w=g.children(),y=w.length;C<y;C++)if(""===w[C].value){p=w.eq(C);break}var x=!!p,z=B(c.cloneNode(!1));z.val("?");var D,E=d(h.ngOptions,g,b);k?(v.$isEmpty=function(a){return!a||0===a.length},u.writeValue=function(a){D.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=D.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},u.readValue=function(){var a=g.val()||[],b=[];n(a,function(a){(a=D.selectValueMap[a])&&!a.disabled&&b.push(D.getViewValueFromOption(a))});
return b},E.trackBy&&b.$watchCollection(function(){if(I(v.$viewValue))return v.$viewValue.map(function(a){return E.getTrackByValue(a)})},function(){v.$render()})):(u.writeValue=function(a){var b=D.getOptionFromViewValue(a);b&&!b.disabled?g[0].value!==b.selectValue&&(z.remove(),x||p.remove(),g[0].value=b.selectValue,b.element.selected=!0,b.element.setAttribute("selected","selected")):null===a||x?(z.remove(),x||g.prepend(p),g.val(""),p.prop("selected",!0),p.attr("selected",!0)):(x||p.remove(),g.prepend(z),
g.val("?"),z.prop("selected",!0),z.attr("selected",!0))},u.readValue=function(){var a=D.selectValueMap[g.val()];return a&&!a.disabled?(x||p.remove(),z.remove(),D.getViewValueFromOption(a)):null},E.trackBy&&b.$watch(function(){return E.getTrackByValue(v.$viewValue)},function(){v.$render()}));x?(p.remove(),a(p)(b),p.removeClass("ng-scope")):p=B(c.cloneNode(!1));s();b.$watchCollection(E.getWatchables,s)}}}}}],Be=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,
g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),r=h.offset||0,s=f.$eval(m)||{},u={},v=b.startSymbol(),y=b.endSymbol(),p=v+l+"-"+r+y,C=fa.noop,w;n(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+F(c[2]),s[c]=g.attr(h.$attr[b]))});n(s,function(a,d){u[d]=b(a.replace(c,p))});f.$watch(l,function(b){var c=parseFloat(b),e=isNaN(c);e||c in s||(c=a.pluralCat(c-r));c===w||e&&Q(w)&&isNaN(w)||(C(),e=u[c],q(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+
m),C=x,k()):C=f.$watch(e,k),w=c)})}}}],Ce=["$parse","$animate",function(a,b){var d=G("ngRepeat"),c=function(a,b,c,d,k,l,m){a[c]=d;k&&(a[k]=l);a.$index=b;a.$first=0===b;a.$last=b===m-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,f){var g=f.ngRepeat,h=X.createComment(" end ngRepeat: "+g+" "),k=g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!k)throw d("iexp",g);var l=k[1],m=k[2],r=k[3],q=k[4],k=l.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",l);var s=k[3]||k[1],v=k[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw d("badident",r);var x,p,y,w,z={$id:Ca};q?x=a(q):(y=function(a,b){return Ca(b)},w=function(a){return a});return function(a,e,f,k,l){x&&(p=function(b,c,d){v&&(z[v]=b);z[s]=c;z.$index=
d;return x(a,z)});var q=$();a.$watchCollection(m,function(f){var k,m,t=e[0],x,z=$(),D,E,H,F,I,G,J;r&&(a[r]=f);if(za(f))I=f,m=p||y;else for(J in m=p||w,I=[],f)qa.call(f,J)&&"$"!==J.charAt(0)&&I.push(J);D=I.length;J=Array(D);for(k=0;k<D;k++)if(E=f===I?k:I[k],H=f[E],F=m(E,H,k),q[F])G=q[F],delete q[F],z[F]=G,J[k]=G;else{if(z[F])throw n(J,function(a){a&&a.scope&&(q[a.id]=a)}),d("dupes",g,F,H);J[k]={id:F,scope:u,clone:u};z[F]=!0}for(x in q){G=q[x];F=rb(G.clone);b.leave(F);if(F[0].parentNode)for(k=0,m=F.length;k<
m;k++)F[k].$$NG_REMOVED=!0;G.scope.$destroy()}for(k=0;k<D;k++)if(E=f===I?k:I[k],H=f[E],G=J[k],G.scope){x=t;do x=x.nextSibling;while(x&&x.$$NG_REMOVED);G.clone[0]!=x&&b.move(rb(G.clone),null,B(t));t=G.clone[G.clone.length-1];c(G.scope,k,s,H,v,E,D)}else l(function(a,d){G.scope=d;var e=h.cloneNode(!1);a[a.length++]=e;b.enter(a,null,B(t));t=e;G.clone=a;z[G.id]=G;c(G.scope,k,s,H,v,E,D)});q=z})}}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?
"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],we=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=La(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&n(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Fe=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(b,
d,c,e){var f=[],g=[],h=[],k=[],l=function(a,b){return function(){a.splice(b,1)}};b.$watch(c.ngSwitch||c.on,function(b){var c,d;c=0;for(d=h.length;c<d;++c)a.cancel(h[c]);c=h.length=0;for(d=k.length;c<d;++c){var q=rb(g[c].clone);k[c].$destroy();(h[c]=a.leave(q)).then(l(h,c))}g.length=0;k.length=0;(f=e.cases["!"+b]||e.cases["?"])&&n(f,function(b){b.transclude(function(c,d){k.push(d);var e=b.element;c[c.length++]=X.createComment(" end ngSwitchWhen: ");g.push({clone:c});a.enter(c,e.parent(),e)})})})}}}],
Ge=La({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),He=La({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Je=La({restrict:"EAC",link:function(a,b,d,c,e){if(!e)throw G("ngTransclude")("orphan",ua(b));e(function(a){b.empty();
b.append(a)})}}),je=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Cg={$setViewValue:x,$render:x},Dg=["$element","$scope","$attrs",function(a,b,d){var c=this,e=new Sa;c.ngModelCtrl=Cg;c.unknownOption=B(X.createElement("option"));c.renderUnknownOption=function(b){b="? "+Ca(b)+" ?";c.unknownOption.val(b);a.prepend(c.unknownOption);a.val(b)};b.$on("$destroy",function(){c.renderUnknownOption=x});c.removeUnknownOption=
function(){c.unknownOption.parent()&&c.unknownOption.remove()};c.readValue=function(){c.removeUnknownOption();return a.val()};c.writeValue=function(b){c.hasOption(b)?(c.removeUnknownOption(),a.val(b),""===b&&c.emptyOption.prop("selected",!0)):null==b&&c.emptyOption?(c.removeUnknownOption(),a.val("")):c.renderUnknownOption(b)};c.addOption=function(a,b){Ra(a,'"option value"');""===a&&(c.emptyOption=b);var d=e.get(a)||0;e.put(a,d+1);c.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=
!0)};c.removeOption=function(a){var b=e.get(a);b&&(1===b?(e.remove(a),""===a&&(c.emptyOption=u)):e.put(a,b-1))};c.hasOption=function(a){return!!e.get(a)};c.registerOption=function(a,b,d,e,l){if(e){var m;d.$observe("value",function(a){y(m)&&c.removeOption(m);m=a;c.addOption(a,b)})}else l?a.$watch(l,function(a,e){d.$set("value",a);e!==a&&c.removeOption(e);c.addOption(a,b)}):c.addOption(d.value,b);b.on("$destroy",function(){c.removeOption(d.value);c.ngModelCtrl.$render()})}}],ke=function(){return{restrict:"E",
require:["select","?ngModel"],controller:Dg,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;e.$render=function(){f.writeValue(e.$viewValue)};b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];n(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Sa(a);n(b.find("option"),function(a){a.selected=y(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==
e.$viewValue||ma(g,e.$viewValue)||(g=ia(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}}}}},me=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){if(y(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],le=na({restrict:"E",terminal:!1}),Fc=function(){return{restrict:"A",
require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Ec=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){E(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw G("ngPattern")("noregexp",f,a,ua(b));e=a||u;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||
q(e)||e.test(b)}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=ea(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=ea(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};S.angular.bootstrap?
console.log("WARNING: Tried to load angular more than once."):(ce(),ee(fa),fa.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",
negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",pluralCat:function(a,c){var e=a|0,f=c;u===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),B(X).ready(function(){Zd(X,yc)}))})(window,document);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
;
// Source: ./node_modules/angular-new-router/dist/router.es5.min.js
function controllerProviderDecorator(t,e){var r=t.register;t.register=function(t,n){return e.register(t,n),r.apply(this,arguments)}}function $controllerIntrospectorProvider(){var t=[],e=null;return{register:function(r,n){angular.isArray(n)&&(n=n[n.length-1]),n.$routeConfig&&(e?e(r,n.$routeConfig):t.push({name:r,config:n.$routeConfig}))},$get:["$componentLoader",function(r){return function(n){for(e=function(t,e){return t=r.component(t),n(t,e)};t.length>0;){var o=t.pop();e(o.name,o.config)}}}]}}function routerFactory(t,e,r,n,o){o(function(t,e){n.config(t,e)}),e.$watch(function(){return r.path()},function(e){t.navigate(e)});var i=t.navigate;return t.navigate=function(t){return i.call(this,t).then(function(t){t&&r.path(t)})},t}function ngViewportDirective(t,e,r,n){function o(t,r,n){return e.invoke(t,r,n.locals)}function i(e,n,i,u,s){function p(){g&&(t.cancel(g),g=null),l&&(l.$destroy(),l=null),v&&(g=t.leave(v),g.then(function(){g=null}),v=null)}var l,f,h,v,g,d,m=i.ngViewport||"default",y=u[0],w=u[1],$=y&&y.$$router||c;$.registerViewport({canDeactivate:function(t){return h&&h.canDeactivate?o(h.canDeactivate,h,t):!0},activate:function(i){var c=a(i);if(c!==d){i.locals.$scope=f=e.$new(),w.$$router=i.router,w.$$template=i.template;var u=i.component,g=s(f,function(e){t.enter(e,null,v||n),p()}),m=i.controller;f[u]=m;var y;if(h&&h.deactivate&&(y=r.when(o(h.deactivate,h,i))),h=m,v=g,l=f,d=c,m.activate){var $=r.when(o(m.activate,m,i));return y?y.then($):$}return y}}},m)}function a(t){return JSON.stringify({path:t.path,component:t.component,params:Object.keys(t.params).reduce(function(e,r){return"childRoute"!==r&&(e[r]=t.params[r]),e},{})})}var c=n;return{restrict:"AE",transclude:"element",terminal:!0,priority:400,require:["?^^ngViewport","ngViewport"],link:i,controller:function(){},controllerAs:"$$ngViewport"}}function ngViewportFillContentDirective(t){return{restrict:"EA",priority:-400,require:"ngViewport",link:function(e,r,n,o){var i=o.$$template;r.html(i);var a=t(r.contents());a(e)}}}function makeComponentString(t){return['<router-component component-name="',t,'">',"</router-component>"].join("")}function ngLinkDirective(t,e,r){function n(t,e,n,i){var a=i&&i.$$router||o;if(a){var c,u=n.ngLink||"",s=u.match(LINK_MICROSYNTAX_RE),p=s[1],l=s[2];if(l){var f=r(l);if(f.constant){var h=f();c="."+a.generate(p,h),e.attr("href",c)}else t.$watch(function(){return f(t)},function(t){c="."+a.generate(p,t),e.attr("href",c)},!0)}else c="."+a.generate(p),e.attr("href",c)}}var o=t;return{require:"?^^ngViewport",restrict:"A",link:n}}function anchorLinkDirective(t){return{restrict:"E",link:function(e,r){if("a"===r[0].nodeName.toLowerCase()){var n="[object SVGAnimatedString]"===Object.prototype.toString.call(r.prop("href"))?"xlink:href":"href";r.on("click",function(e){var o=r.attr(n);o||e.preventDefault(),t.recognize(o)&&(t.navigate(o),e.preventDefault())})}}}}function setupRoutersStepFactory(){return function(t){return t.router.makeDescendantRouters(t)}}function initLocalsStepFactory(){return function(t){return t.router.traverseInstruction(t,function(t){return t.locals={$router:t.router,$routeParams:t.params||{}}})}}function initControllersStepFactory(t,e){return function(r){return r.router.traverseInstruction(r,function(r){var n,o=e.controllerName(r.component),i=r.locals;try{n=t(o,i)}catch(a){console.warn&&console.warn("Could not instantiate controller",o),n=t(angular.noop,i)}return r.controller=n})}}function runCanDeactivateHookStepFactory(){return function(t){return t.router.canDeactivatePorts(t)}}function runCanActivateHookStepFactory(t){function e(e,r,n){return t.invoke(e,r,{$routeParams:n.params})}return function(t){return t.router.traverseInstruction(t,function(t){var r=t.controller;return!r.canActivate||e(r.canActivate,r,t)})}}function loadTemplatesStepFactory(t,e){return function(r){return r.router.traverseInstruction(r,function(r){var n=t.template(r.component);return e(n).then(function(t){return r.template=t})})}}function activateStepValue(t){return t.router.activatePorts(t)}function pipelineProvider(){var t,e=["$setupRoutersStep","$initLocalsStep","$initControllersStep","$runCanDeactivateHookStep","$runCanActivateHookStep","$loadTemplatesStep","$activateStep"];return{steps:e.slice(0),config:function(t){e=t},$get:["$injector","$q",function(r,n){return t=e.map(function(t){return r.get(t)}),{process:function(e){function r(t){if(0===o.length)return t;var i=o.shift();return n.when(i(e)).then(r)}var o=t.slice(0);return r()}}}]}}function $componentLoaderProvider(){var t="Controller",e=function(e){return e[0].toUpperCase()+e.substr(1)+t},r=function(t){var e=dashCase(t);return"./components/"+e+"/"+e+".html"},n=function(e){return e[0].toLowerCase()+e.substr(1,e.length-t.length-1)};return{$get:function(){return{controllerName:e,template:r,component:n}},setCtrlNameMapping:function(t){return e=t,this},setComponentFromCtrlMapping:function(t){return n=t,this},setTemplateMapping:function(t){return r=t,this}}}function privatePipelineFactory(t){return t}function dashCase(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}angular.module("ngNewRouter",[]).factory("$router",routerFactory).value("$routeParams",{}).provider("$componentLoader",$componentLoaderProvider).provider("$pipeline",pipelineProvider).factory("$$pipeline",privatePipelineFactory).factory("$setupRoutersStep",setupRoutersStepFactory).factory("$initLocalsStep",initLocalsStepFactory).factory("$initControllersStep",initControllersStepFactory).factory("$runCanDeactivateHookStep",runCanDeactivateHookStepFactory).factory("$runCanActivateHookStep",runCanActivateHookStepFactory).factory("$loadTemplatesStep",loadTemplatesStepFactory).value("$activateStep",activateStepValue).directive("ngViewport",ngViewportDirective).directive("ngViewport",ngViewportFillContentDirective).directive("ngLink",ngLinkDirective).directive("a",anchorLinkDirective),angular.module("ng").provider("$controllerIntrospector",$controllerIntrospectorProvider).config(controllerProviderDecorator),controllerProviderDecorator.$inject=["$controllerProvider","$controllerIntrospectorProvider"],routerFactory.$inject=["$$rootRouter","$rootScope","$location","$$grammar","$controllerIntrospector"],ngViewportDirective.$inject=["$animate","$injector","$q","$router"],ngViewportFillContentDirective.$inject=["$compile"];var LINK_MICROSYNTAX_RE=/^(.+?)(?:\((.*)\))?$/;ngLinkDirective.$inject=["$router","$location","$parse"],anchorLinkDirective.$inject=["$router"],initControllersStepFactory.$inject=["$controller","$componentLoader"],runCanActivateHookStepFactory.$inject=["$injector"],loadTemplatesStepFactory.$inject=["$componentLoader","$templateRequest"],privatePipelineFactory.$inject=["$pipeline"],angular.module("ngNewRouter").factory("$$rootRouter",["$q","$$grammar","$$pipeline",function(t,e,r){function n(t,e,r,n){return h(e,"constructor",{value:t,configurable:!0,enumerable:!1,writable:!0}),arguments.length>3?("function"==typeof n&&(t.__proto__=n),t.prototype=g(o(n),i(e))):t.prototype=e,h(t,"prototype",{configurable:!1,writable:!1}),v(t,i(r))}function o(t){if("function"==typeof t){var e=t.prototype;if(Object(e)===e||null===e)return t.prototype;throw new TypeError("super prototype must be an Object or null")}if(null===t)return null;throw new TypeError("Super expression must either be null or a function, not "+typeof t+".")}function i(t){for(var e={},r=m(t),n=0;n<r.length;n++){var o=r[n];e[o]=d(t,o)}return e}function a(t,e){var r=y(t);do{var n=d(r,e);if(n)return n;r=y(r)}while(r);return void 0}function c(t,e,r,n){return u(t,e,r).apply(t,n)}function u(t,e,r){var n=a(e,r);return n?n.get?n.get.call(t):n.value:void 0}function s(t,e){Object.keys(t).forEach(function(r){return e(t[r],r)})}function p(e,r){return t.all(l(e,r))}function l(t,e){var r=[];return Object.keys(t).forEach(function(n){return r.push(e(t[n],n))}),r}function f(e){return e?t.when(e):t.reject()}var h=Object.defineProperty,v=Object.defineProperties,g=Object.create,d=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,y=Object.getPrototypeOf,w=function(t,e,r,n){this.name=n,this.parent=r||null,this.navigating=!1,this.ports={},this.children={},this.registry=t,this.pipeline=e};n(w,{childRouter:function(){var t=void 0!==arguments[0]?arguments[0]:"default";return this.children[t]||(this.children[t]=new C(this,t)),this.children[t]},registerViewport:function(t){var e=void 0!==arguments[1]?arguments[1]:"default";return this.ports[e]=t,this.renavigate()},config:function(t){return this.registry.config(this.name,t),this.renavigate()},navigate:function(e){var r=this;if(this.navigating)return t.when();this.lastNavigationAttempt=e;var n=this.recognize(e);return n?(this._startNavigating(),n.router=this,this.pipeline.process(n).then(function(){return r._finishNavigating()},function(){return r._finishNavigating()}).then(function(){return n.canonicalUrl})):t.reject()},_startNavigating:function(){this.navigating=!0},_finishNavigating:function(){this.navigating=!1},makeDescendantRouters:function(t){this.traverseInstructionSync(t,function(t,e){e.router=t.router.childRouter(e.component)})},traverseInstructionSync:function(t,e){var r=this;s(t.viewports,function(r){return e(t,r)}),s(t.viewports,function(t){return r.traverseInstructionSync(t,e)})},traverseInstruction:function(e,r){return e?p(e.viewports,function(t,e){return f(r(t,e))}).then(function(){return p(e.viewports,function(t){return t.router.traverseInstruction(t,r)})}):t.when()},activatePorts:function(t){return this.queryViewports(function(e,r){return e.activate(t.viewports[r])}).then(function(){return p(t.viewports,function(t){return t.router.activatePorts(t)})})},canDeactivatePorts:function(t){return this.traversePorts(function(e,r){return f(e.canDeactivate(t.viewports[r]))})},traversePorts:function(t){var e=this;return this.queryViewports(t).then(function(){return p(e.children,function(e){return e.traversePorts(t)})})},queryViewports:function(t){return p(this.ports,t)},recognize:function(t){return this.registry.recognize(t)},renavigate:function(){var e=this.previousUrl||this.lastNavigationAttempt;return!this.navigating&&e?this.navigate(e):t.when()},generate:function(t,e){return this.registry.generate(t,e)}},{}),Object.defineProperty(w,"parameters",{get:function(){return[[Grammar],[Pipeline],[],[]]}}),Object.defineProperty(w.prototype.generate,"parameters",{get:function(){return[[$traceurRuntime.type.string],[]]}});var $=function(t,e){c(this,S.prototype,"constructor",[t,e,null,"/"])},S=$;n($,{},{},w),Object.defineProperty($,"parameters",{get:function(){return[[Grammar],[Pipeline]]}});var C=function(t,e){c(this,b.prototype,"constructor",[t.registry,t.pipeline,t,e]),this.parent=t},b=C;return n(C,{},{},w),new $(e,r)}]),angular.module("ngNewRouter").factory("$$grammar",["$q",function(){function t(t,n,o,i){return a(n,"constructor",{value:t,configurable:!0,enumerable:!1,writable:!0}),arguments.length>3?("function"==typeof i&&(t.__proto__=i),t.prototype=u(e(i),r(n))):t.prototype=n,a(t,"prototype",{configurable:!1,writable:!1}),c(t,r(o))}function e(t){if("function"==typeof t){var e=t.prototype;if(Object(e)===e||null===e)return t.prototype;throw new TypeError("super prototype must be an Object or null")}if(null===t)return null;throw new TypeError("Super expression must either be null or a function, not "+typeof t+".")}function r(t){for(var e={},r=p(t),n=0;n<r.length;n++){var o=r[n];e[o]=s(t,o)}return e}function n(t){return JSON.parse(JSON.stringify(t))}function o(t,e){Object.keys(t).forEach(function(r){return e(t[r],r)})}function i(t,e){var r=[];return Object.keys(t).forEach(function(n){return r.push(e(t[n],n))}),r}var a=Object.defineProperty,c=Object.defineProperties,u=Object.create,s=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,l=(Object.getPrototypeOf,function(){function t(t){return"[object Array]"===Object.prototype.toString.call(t)}function e(t){this.string=t}function r(t){this.name=t}function n(t){this.name=t}function o(){}function i(t,i,a){"/"===t.charAt(0)&&(t=t.substr(1));for(var c=t.split("/"),u=[],s=0,p=c.length;p>s;s++){var l,f=c[s];(l=f.match(/^:([^\/]+)$/))?(u.push(new r(l[1])),i.push(l[1]),a.dynamics++):(l=f.match(/^\*([^\/]+)$/))?(u.push(new n(l[1])),i.push(l[1]),a.stars++):""===f?u.push(new o):(u.push(new e(f)),a.statics++)}return u}function a(t){this.charSpec=t,this.nextStates=[]}function c(t){return t.sort(function(t,e){if(t.types.stars!==e.types.stars)return t.types.stars-e.types.stars;if(t.types.stars){if(t.types.statics!==e.types.statics)return e.types.statics-t.types.statics;if(t.types.dynamics!==e.types.dynamics)return e.types.dynamics-t.types.dynamics}return t.types.dynamics!==e.types.dynamics?t.types.dynamics-e.types.dynamics:t.types.statics!==e.types.statics?e.types.statics-t.types.statics:0})}function u(t,e){for(var r=[],n=0,o=t.length;o>n;n++){var i=t[n];r=r.concat(i.match(e))}return r}function s(t){this.queryParams=t||{}}function p(t,e,r){for(var n=t.handlers,o=t.regex,i=e.match(o),a=1,c=new s(r),u=0,p=n.length;p>u;u++){for(var l=n[u],f=l.names,h={},v=0,g=f.length;g>v;v++)h[f[v]]=i[a++];c.push({handler:l.handler,params:h,isDynamic:!!f.length})}return c}function l(t,e){return e.eachChar(function(e){t=t.put(e)}),t}var f=function(){function t(t,e,r){this.path=t,this.matcher=e,this.delegate=r}function e(t){this.routes={},this.children={},this.target=t}function r(e,n,o){return function(i,a){var c=e+i;return a?void a(r(c,n,o)):new t(e+i,n,o)}}function n(t,e,r){for(var n=0,o=0,i=t.length;i>o;o++)n+=t[o].path.length;e=e.substr(n);var a={path:e,handler:r};t.push(a)}function o(t,e,r,i){var a=e.routes;for(var c in a)if(a.hasOwnProperty(c)){var u=t.slice();n(u,c,a[c]),e.children[c]?o(u,e.children[c],r,i):r.call(i,u)}}return t.prototype={to:function(t,e){var r=this.delegate;if(r&&r.willAddRoute&&(t=r.willAddRoute(this.matcher.target,t)),this.matcher.add(this.path,t),e){if(0===e.length)throw new Error("You must have an argument in the function passed to `to`");this.matcher.addChild(this.path,t,e,this.delegate)}return this}},e.prototype={add:function(t,e){this.routes[t]=e},addChild:function(t,n,o,i){var a=new e(n);this.children[t]=a;var c=r(t,a,i);i&&i.contextEntered&&i.contextEntered(n,c),o(c)}},function(t,n){var i=new e;t(r("",i,this.delegate)),o([],i,function(t){n?n(this,t):this.add(t)},this)}}(),h=["/",".","*","+","?","|","(",")","[","]","{","}","\\"],v=new RegExp("(\\"+h.join("|\\")+")","g");e.prototype={eachChar:function(t){for(var e,r=this.string,n=0,o=r.length;o>n;n++)e=r.charAt(n),t({validChars:e})},regex:function(){return this.string.replace(v,"\\$1")},generate:function(){return this.string}},r.prototype={eachChar:function(t){t({invalidChars:"/",repeat:!0})},regex:function(){return"([^/]+)"},generate:function(t){return t[this.name]}},n.prototype={eachChar:function(t){t({invalidChars:"",repeat:!0})},regex:function(){return"(.+)"},generate:function(t){return t[this.name]}},o.prototype={eachChar:function(){},regex:function(){return""},generate:function(){return""}},a.prototype={get:function(t){for(var e=this.nextStates,r=0,n=e.length;n>r;r++){var o=e[r],i=o.charSpec.validChars===t.validChars;if(i=i&&o.charSpec.invalidChars===t.invalidChars)return o}},put:function(t){var e;return(e=this.get(t))?e:(e=new a(t),this.nextStates.push(e),t.repeat&&e.nextStates.push(e),e)},match:function(t){for(var e,r,n,o=this.nextStates,i=[],a=0,c=o.length;c>a;a++)e=o[a],r=e.charSpec,"undefined"!=typeof(n=r.validChars)?-1!==n.indexOf(t)&&i.push(e):"undefined"!=typeof(n=r.invalidChars)&&-1===n.indexOf(t)&&i.push(e);return i}};var g=Object.create||function(t){function e(){}return e.prototype=t,new e};s.prototype=g({splice:Array.prototype.splice,slice:Array.prototype.slice,push:Array.prototype.push,length:0,queryParams:null});var d=function(){this.rootState=new a,this.names={}};return d.prototype={add:function(t,e){for(var r,n=this.rootState,a="^",c={statics:0,dynamics:0,stars:0},u=[],s=[],p=!0,f=0,h=t.length;h>f;f++){var v=t[f],g=[],d=i(v.path,g,c);s=s.concat(d);for(var m=0,y=d.length;y>m;m++){var w=d[m];w instanceof o||(p=!1,n=n.put({validChars:"/"}),a+="/",n=l(n,w),a+=w.regex())}var $={handler:v.handler,names:g};u.push($)}p&&(n=n.put({validChars:"/"}),a+="/"),n.handlers=u,n.regex=new RegExp(a+"$"),n.types=c,(r=e&&e.as)&&(this.names[r]={segments:s,handlers:u})},handlersFor:function(t){var e=this.names[t],r=[];if(!e)throw new Error("There is no route named "+t);for(var n=0,o=e.handlers.length;o>n;n++)r.push(e.handlers[n]);return r},hasRoute:function(t){return!!this.names[t]},generate:function(t,e){var r=this.names[t],n="";if(!r)throw new Error("There is no route named "+t);for(var i=r.segments,a=0,c=i.length;c>a;a++){var u=i[a];u instanceof o||(n+="/",n+=u.generate(e))}return"/"!==n.charAt(0)&&(n="/"+n),e&&e.queryParams&&(n+=this.generateQueryString(e.queryParams,r.handlers)),n},generateQueryString:function(e){var r=[],n=[];for(var o in e)e.hasOwnProperty(o)&&n.push(o);n.sort();for(var i=0,a=n.length;a>i;i++){o=n[i];var c=e[o];if(null!=c){var u=encodeURIComponent(o);if(t(c))for(var s=0,p=c.length;p>s;s++){var l=o+"[]="+encodeURIComponent(c[s]);r.push(l)}else u+="="+encodeURIComponent(c),r.push(u)}}return 0===r.length?"":"?"+r.join("&")},parseQueryString:function(t){for(var e=t.split("&"),r={},n=0;n<e.length;n++){var o,i=e[n].split("="),a=decodeURIComponent(i[0]),c=a.length,u=!1;1===i.length?o="true":(c>2&&"[]"===a.slice(c-2)&&(u=!0,a=a.slice(0,c-2),r[a]||(r[a]=[])),o=i[1]?decodeURIComponent(i[1]):""),u?r[a].push(o):r[a]=o}return r},recognize:function(t){var e,r,n,o,i=[this.rootState],a={},s=!1;if(o=t.indexOf("?"),-1!==o){var l=t.substr(o+1,t.length);t=t.substr(0,o),a=this.parseQueryString(l)}for(t=decodeURI(t),"/"!==t.charAt(0)&&(t="/"+t),e=t.length,e>1&&"/"===t.charAt(e-1)&&(t=t.substr(0,e-1),s=!0),r=0,n=t.length;n>r&&(i=u(i,t.charAt(r)),i.length);r++);var f=[];for(r=0,n=i.length;n>r;r++)i[r].handlers&&f.push(i[r]);i=c(f);var h=f[0];return h&&h.handlers?(s&&"(.+)$"===h.regex.source.slice(-5)&&(t+="/"),p(h,t,a)):void 0}},d.prototype.map=f,d.VERSION="VERSION_STRING_PLACEHOLDER",d}()),f="/*childRoute",h=function(){this.rules={}};t(h,{config:function(t,e){"app"===t&&(t="/"),this.rules[t]||(this.rules[t]=new v(t)),this.rules[t].config(e)},recognize:function(t){var e=void 0!==arguments[1]?arguments[1]:"/",r=this;if("undefined"!=typeof t){var n=this.rules[e];if(n){var i=n.recognize(t);if(i){var a=i[i.length-1],c=a.handler,u=a.params,s={viewports:{},params:u};if(u&&u.childRoute){var p="/"+u.childRoute;s.canonicalUrl=c.rewroteUrl.substr(0,c.rewroteUrl.length-(u.childRoute.length+1)),o(c.components,function(t,e){s.viewports[e]=r.recognize(p,t)}),s.canonicalUrl+=s.viewports[Object.keys(s.viewports)[0]].canonicalUrl}else s.canonicalUrl=c.rewroteUrl,o(c.components,function(t,e){s.viewports[e]={viewports:{}}});return o(s.viewports,function(t,e){t.component=c.components[e],t.params=u}),s}}}},generate:function(t,e){var r,n="";do{if(r=null,o(this.rules,function(o){o.hasRoute(t)&&(n=o.generate(t,e)+n,r=o)}),!r)return"";t=r.name}while("/"!==r.name);return n}},{}),Object.defineProperty(h.prototype.recognize,"parameters",{get:function(){return[[$traceurRuntime.type.string],[]]}});var v=function(t){this.name=t,this.rewrites={},this.recognizer=new l};return t(v,{config:function(t){var e=this;t instanceof Array?t.forEach(function(t){return e.configOne(t)}):this.configOne(t)},getCanonicalUrl:function(t){return"."===t[0]&&(t=t.substr(1)),(""===t||"/"!==t[0])&&(t="/"+t),o(this.rewrites,function(e,r){"/"===r?"/"===t&&(t=e):0===t.indexOf(r)&&(t=t.replace(r,e))}),t},configOne:function(t){var e=this;if(t.redirectTo){if(this.rewrites[t.path])throw new Error('"'+t.path+'" already maps to "'+this.rewrites[t.path]+'"');return void(this.rewrites[t.path]=t.redirectTo)}if(t.component){if(t.components)throw new Error('A route config should have either a "component" or "components" property, but not both.');t.components=t.component,delete t.component}"string"==typeof t.components&&(t.components={"default":t.components});var r;t.as?r=[t.as]:(r=i(t.components,function(t,e){return e+":"+t}),t.components["default"]&&r.push(t.components["default"])),r.forEach(function(r){return e.recognizer.add([{path:t.path,handler:t}],{as:r})});var o=n(t);o.path+=f,this.recognizer.add([{path:o.path,handler:o}])},recognize:function(t){var e=this.getCanonicalUrl(t),r=this.recognizer.recognize(e);return r&&(r[0].handler.rewroteUrl=e),r},generate:function(t,e){return this.recognizer.generate(t,e)},hasRoute:function(t){return this.recognizer.hasRoute(t)}},{}),new h}]);;
// Source: ./node_modules/angular-animate/angular-animate.min.js
/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(H,u,Sa){'use strict';function wa(a,b,c){if(!a)throw ngMinErr("areq",b||"?",c||"required");return a}function xa(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;X(a)&&(a=a.join(" "));X(b)&&(b=b.join(" "));return a+" "+b}function Ia(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function T(a,b,c){var d="";a=X(a)?a:a&&I(a)&&a.length?a.split(/\s+/):[];q(a,function(a,s){a&&0<a.length&&(d+=0<s?" ":"",d+=c?b+a:a+b)});return d}function Ja(a){if(a instanceof L)switch(a.length){case 0:return[];
case 1:if(1===a[0].nodeType)return a;break;default:return L(ma(a))}if(1===a.nodeType)return L(a)}function ma(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Ka(a,b,c){q(b,function(b){a.addClass(b,c)})}function La(a,b,c){q(b,function(b){a.removeClass(b,c)})}function N(a){return function(b,c){c.addClass&&(Ka(a,b,c.addClass),c.addClass=null);c.removeClass&&(La(a,b,c.removeClass),c.removeClass=null)}}function ia(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
M;a.domOperation=function(){a.$$domOperationFired=!0;b();b=M};a.$$prepared=!0}return a}function da(a,b){ya(a,b);za(a,b)}function ya(a,b){b.from&&(a.css(b.from),b.from=null)}function za(a,b){b.to&&(a.css(b.to),b.to=null)}function Q(a,b,c){var d=(b.addClass||"")+" "+(c.addClass||""),e=(b.removeClass||"")+" "+(c.removeClass||"");a=Ma(a.attr("class"),d,e);c.preparationClasses&&(b.preparationClasses=Y(c.preparationClasses,b.preparationClasses),delete c.preparationClasses);d=b.domOperation!==M?b.domOperation:
null;Aa(b,c);d&&(b.domOperation=d);b.addClass=a.addClass?a.addClass:null;b.removeClass=a.removeClass?a.removeClass:null;return b}function Ma(a,b,c){function d(a){I(a)&&(a=a.split(" "));var b={};q(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);q(b,function(a,b){e[b]=1});c=d(c);q(c,function(a,b){e[b]=1===e[b]?null:-1});var s={addClass:"",removeClass:""};q(e,function(b,c){var e,d;1===b?(e="addClass",d=!a[c]):-1===b&&(e="removeClass",d=a[c]);d&&(s[e].length&&(s[e]+=" "),s[e]+=c)});
return s}function B(a){return a instanceof u.element?a[0]:a}function Na(a,b,c){var d="";b&&(d=T(b,"ng-",!0));c.addClass&&(d=Y(d,T(c.addClass,"-add")));c.removeClass&&(d=Y(d,T(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function ja(a,b){var c=b?"-"+b+"s":"";ea(a,[fa,c]);return[fa,c]}function na(a,b){var c=b?"paused":"",d=U+"PlayState";ea(a,[d,c]);return[d,c]}function ea(a,b){a.style[b[0]]=b[1]}function Y(a,b){return a?b?a+" "+b:a:b}function Ba(a,b,c){var d=Object.create(null),
e=a.getComputedStyle(b)||{};q(c,function(a,b){var c=e[a];if(c){var v=c.charAt(0);if("-"===v||"+"===v||0<=v)c=Oa(c);0===c&&(c=null);d[b]=c}});return d}function Oa(a){var b=0;a=a.split(/\s*,\s*/);q(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function oa(a){return 0===a||null!=a}function Ca(a,b){var c=O,d=a+"s";b?c+="Duration":d+=" linear all";return[c,d]}function Da(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},
count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ea(a,b,c){q(c,function(c){a[c]=V(a[c])?a[c]:b.style.getPropertyValue(c)})}var M=u.noop,Aa=u.extend,L=u.element,q=u.forEach,X=u.isArray,I=u.isString,pa=u.isObject,qa=u.isUndefined,V=u.isDefined,Fa=u.isFunction,ra=u.isElement,O,sa,U,ta;qa(H.ontransitionend)&&V(H.onwebkittransitionend)?(O="WebkitTransition",sa="webkitTransitionEnd transitionend"):
(O="transition",sa="transitionend");qa(H.onanimationend)&&V(H.onwebkitanimationend)?(U="WebkitAnimation",ta="webkitAnimationEnd animationend"):(U="animation",ta="animationend");var ka=U+"Delay",ua=U+"Duration",fa=O+"Delay";H=O+"Duration";var Pa={transitionDuration:H,transitionDelay:fa,transitionProperty:O+"Property",animationDuration:ua,animationDelay:ka,animationIterationCount:U+"IterationCount"},Qa={transitionDuration:H,transitionDelay:fa,animationDuration:ua,animationDelay:ka};u.module("ngAnimate",
[]).directive("ngAnimateChildren",[function(){return function(a,b,c){a=c.ngAnimateChildren;u.isString(a)&&0===a.length?b.data("$$ngAnimateChildren",!0):c.$observe("ngAnimateChildren",function(a){b.data("$$ngAnimateChildren","on"===a||"true"===a)})}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),h=0;h<b.length;h++)b[h]();e||a(function(){e||c()})}}var d,e;d=b.queue=[];b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=
null;b();c()})};return b}]).factory("$$AnimateRunner",["$q","$sniffer","$$animateAsyncRun",function(a,b,c){function d(a){this.setHost(a);this._doneCallbacks=[];this._runInAnimationFrame=c();this._state=0}d.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};d.all=function(a,b){function c(h){v=v&&h;++d===a.length&&b(v)}var d=0,v=!0;q(a,function(a){a.done(c)})};d.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?
a():this._doneCallbacks.push(a)},progress:M,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();
this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._runInAnimationFrame(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return d}]).factory("$$animateAsyncRun",["$$rAF",function(a){function b(b){c.push(b);1<c.length||a(function(){for(var a=0;a<c.length;a++)c[a]();c=[]})}var c=[];return function(){var a=
!1;b(function(){a=!0});return function(c){a?c():b(c)}}}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a,b,c,q){return d[a].some(function(a){return a(b,c,q)})}function c(a,b){a=a||{};var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var d=this.rules={skip:[],cancel:[],join:[]};d.join.push(function(a,b,d){return!b.structural&&c(b.options)});d.skip.push(function(a,b,d){return!b.structural&&!c(b.options)});d.skip.push(function(a,b,c){return"leave"==
c.event&&b.structural});d.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});d.cancel.push(function(a,b,c){return c.structural&&b.structural});d.cancel.push(function(a,b,c){return 2===c.state&&b.structural});d.cancel.push(function(a,b,c){a=b.options;c=c.options;return a.addClass&&a.addClass===c.removeClass||a.removeClass&&a.removeClass===c.addClass});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite",
"$$forceReflow",function(d,s,h,g,v,r,$,u,R,C){function D(){var a=!1;return function(b){a?b():s.$$postDigest(function(){a=!0;b()})}}function K(a,b,c){var f=B(b),d=B(a),n=[];(a=t[c])&&q(a,function(a){a.node.contains(f)?n.push(a.callback):"leave"===c&&a.node.contains(d)&&n.push(a.callback)});return n}function l(a,f,k){function n(b,c,f,t){R(function(){var b=K(v,a,c);b.length&&d(function(){q(b,function(b){b(a,f,t)})})});b.progress(c,f,t)}function t(b){var c=a,f=k;f.preparationClasses&&(c.removeClass(f.preparationClasses),
f.preparationClasses=null);f.activeClasses&&(c.removeClass(f.activeClasses),f.activeClasses=null);Ha(a,k);da(a,k);k.domOperation();h.complete(!b)}var A,v;if(a=Ja(a))A=B(a),v=a.parent();k=ia(k);var h=new $,R=D();X(k.addClass)&&(k.addClass=k.addClass.join(" "));k.addClass&&!I(k.addClass)&&(k.addClass=null);X(k.removeClass)&&(k.removeClass=k.removeClass.join(" "));k.removeClass&&!I(k.removeClass)&&(k.removeClass=null);k.from&&!pa(k.from)&&(k.from=null);k.to&&!pa(k.to)&&(k.to=null);if(!A)return t(),h;
var z=[A.className,k.addClass,k.removeClass].join(" ");if(!Ra(z))return t(),h;var l=0<=["enter","move","leave"].indexOf(f),g=!G||F.get(A),z=!g&&m.get(A)||{},C=!!z.state;g||C&&1==z.state||(g=!la(a,v,f));if(g)return t(),h;l&&y(a);g={structural:l,element:a,event:f,close:t,options:k,runner:h};if(C){if(b("skip",a,g,z)){if(2===z.state)return t(),h;Q(a,z.options,k);return z.runner}if(b("cancel",a,g,z))if(2===z.state)z.runner.end();else if(z.structural)z.close();else return Q(a,z.options,g.options),z.runner;
else if(b("join",a,g,z))if(2===z.state)Q(a,k,{});else return Na(a,l?f:null,k),f=g.event=z.event,k=Q(a,z.options,g.options),z.runner}else Q(a,k,{});(C=g.structural)||(C="animate"===g.event&&0<Object.keys(g.options.to||{}).length||c(g.options));if(!C)return t(),w(a),h;var u=(z.counter||0)+1;g.counter=u;x(a,1,g);s.$$postDigest(function(){var b=m.get(A),d=!b,b=b||{},K=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||c(b.options));if(d||b.counter!==u||!K){d&&(Ha(a,k),da(a,k));if(d||l&&b.event!==
f)k.domOperation(),h.end();K||w(a)}else f=!b.structural&&c(b.options,!0)?"setClass":b.event,x(a,2),b=r(a,f,b.options),b.done(function(b){t(!b);(b=m.get(A))&&b.counter===u&&w(B(a));n(h,f,"close",{})}),h.setHost(b),n(h,f,"start",{})});return h}function y(a){a=B(a).querySelectorAll("[data-ng-animate]");q(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=m.get(a);switch(b){case 2:c.runner.end();case 1:c&&m.remove(a)}})}function w(a){a=B(a);a.removeAttribute("data-ng-animate");m.remove(a)}
function f(a,b){return B(a)===B(b)}function la(a,b,c){c=L(g[0].body);var d=f(a,c)||"HTML"===a[0].nodeName,t=f(a,h),n=!1,w;for((a=a.data("$ngAnimatePin"))&&(b=a);b&&b.length;){t||(t=f(b,h));a=b[0];if(1!==a.nodeType)break;var x=m.get(a)||{};n||(n=x.structural||F.get(a));if(qa(w)||!0===w)a=b.data("$$ngAnimateChildren"),V(a)&&(w=a);if(n&&!1===w)break;t||(t=f(b,h),t||(a=b.data("$ngAnimatePin"))&&(b=a));d||(d=f(b,c));b=b.parent()}return(!n||w)&&t&&d}function x(a,b,c){c=c||{};c.state=b;a=B(a);a.setAttribute("data-ng-animate",
b);c=(b=m.get(a))?Aa(b,c):c;m.put(a,c)}var m=new v,F=new v,G=null,A=s.$watch(function(){return 0===u.totalPendingRequests},function(a){a&&(A(),s.$$postDigest(function(){s.$$postDigest(function(){null===G&&(G=!0)})}))}),t={},n=a.classNameFilter(),Ra=n?function(a){return n.test(a)}:function(){return!0},Ha=N(R);return{on:function(a,b,c){b=ma(b);t[a]=t[a]||[];t[a].push({node:b,callback:c})},off:function(a,b,c){function f(a,b,c){var d=ma(b);return a.filter(function(a){return!(a.node===d&&(!c||a.callback===
c))})}var d=t[a];d&&(t[a]=1===arguments.length?null:f(d,b,c))},pin:function(a,b){wa(ra(a),"element","not an element");wa(ra(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return l(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!G;else if(ra(a)){var f=B(a),d=F.get(f);1===c?b=!d:(b=!!b)?d&&F.remove(f):F.put(f,!0)}else b=G=!!a;return b}}}]}]).provider("$$animation",["$animateProvider",function(a){function b(a){return a.data("$$animationRunner")}
var c=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,e,s,h,g,v){function r(a){function b(a){if(a.processed)return a;a.processed=!0;var f=a.domNode,d=f.parentNode;e.put(f,a);for(var x;d;){if(x=e.get(d)){x.processed||(x=b(x));break}d=d.parentNode}(x||c).children.push(a);return a}var c={children:[]},d,e=new g;for(d=0;d<a.length;d++){var h=a[d];e.put(h.domNode,a[d]={domNode:h.domNode,fn:h.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);
return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var m=0,e=[];for(d=0;d<c.length;d++){var h=c[d];0>=a&&(a=m,m=0,b.push(e),e=[]);e.push(h.fn);h.children.forEach(function(a){m++;c.push(a)});a--}e.length&&b.push(e);return b}(c)}var $=[],u=N(a);return function(g,C,D){function K(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];q(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}
function l(a){var b=[],c={};q(a,function(a,f){var d=B(a.element),t=0<=["enter","move"].indexOf(a.event),d=a.structural?K(d):[];if(d.length){var m=t?"to":"from";q(d,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][m]={animationID:f,element:L(a)}})}else b.push(a)});var f={},d={};q(c,function(c,m){var w=c.from,e=c.to;if(w&&e){var h=a[w.animationID],g=a[e.animationID],x=w.animationID.toString();if(!d[x]){var A=d[x]={structural:!0,beforeStart:function(){h.beforeStart();g.beforeStart()},
close:function(){h.close();g.close()},classes:y(h.classes,g.classes),from:h,to:g,anchors:[]};A.classes.length?b.push(A):(b.push(h),b.push(g))}d[x].anchors.push({out:w.element,"in":e.element})}else w=w?w.animationID:e.animationID,e=w.toString(),f[e]||(f[e]=!0,b.push(a[w]))});return b}function y(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],f=0;f<a.length;f++){var d=a[f];if("ng-"!==d.substring(0,3))for(var m=0;m<b.length;m++)if(d===b[m]){c.push(d);break}}return c.join(" ")}function w(a){for(var b=
c.length-1;0<=b;b--){var f=c[b];if(s.has(f)&&(f=s.get(f)(a)))return f}}function f(a,c){a.from&&a.to?(b(a.from.element).setHost(c),b(a.to.element).setHost(c)):b(a.element).setHost(c)}function la(){var a=b(g);!a||"leave"===C&&D.$$domOperationFired||a.end()}function x(b){g.off("$destroy",la);g.removeData("$$animationRunner");u(g,D);da(g,D);D.domOperation();A&&a.removeClass(g,A);g.removeClass("ng-animate");F.complete(!b)}D=ia(D);var m=0<=["enter","move","leave"].indexOf(C),F=new h({end:function(){x()},
cancel:function(){x(!0)}});if(!c.length)return x(),F;g.data("$$animationRunner",F);var G=xa(g.attr("class"),xa(D.addClass,D.removeClass)),A=D.tempClasses;A&&(G+=" "+A,D.tempClasses=null);$.push({element:g,classes:G,event:C,structural:m,options:D,beforeStart:function(){g.addClass("ng-animate");A&&a.addClass(g,A)},close:x});g.on("$destroy",la);if(1<$.length)return F;e.$$postDigest(function(){var a=[];q($,function(c){b(c.element)?a.push(c):c.close()});$.length=0;var c=l(a),d=[];q(c,function(a){d.push({domNode:B(a.from?
a.from.element:a.element),fn:function(){a.beforeStart();var c,d=a.close;if(b(a.anchors?a.from.element||a.to.element:a.element)){var m=w(a);m&&(c=m.start)}c?(c=c(),c.done(function(a){d(!a)}),f(a,c)):d()}})});v(r(d))});return F}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Da(),c=Da();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$animate",function(a,e,s,h,g,v,r,u){function Ga(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||
(c.$$ngAnimateParentKey=++l))+"-"+a.getAttribute("class")+"-"+b}function R(w,f,h,g){var m;0<b.count(h)&&(m=c.get(h),m||(f=T(f,"-stagger"),e.addClass(w,f),m=Ba(a,w,g),m.animationDuration=Math.max(m.animationDuration,0),m.transitionDuration=Math.max(m.transitionDuration,0),e.removeClass(w,f),c.put(h,m)));return m||{}}function C(a){y.push(a);r.waitUntilQuiet(function(){b.flush();c.flush();for(var a=g(),d=0;d<y.length;d++)y[d](a);y.length=0})}function D(c,f,e){f=b.get(e);f||(f=Ba(a,c,Pa),"infinite"===
f.animationIterationCount&&(f.animationIterationCount=1));b.put(e,f);c=f;e=c.animationDelay;f=c.transitionDelay;c.maxDelay=e&&f?Math.max(e,f):e||f;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var K=N(e),l=0,y=[];return function(a,c){function d(){m()}function g(){m(!0)}function m(b){if(!(ga||va&&k)){ga=!0;k=!1;c.$$skipPreparationClasses||e.removeClass(a,Z);e.removeClass(a,Y);na(n,!1);ja(n,!1);q(y,function(a){n.style[a[0]]=""});K(a,c);da(a,c);Object.keys(t).length&&
q(t,function(a,b){a?n.style.setProperty(b,a):n.style.removeProperty(b)});if(c.onDone)c.onDone();H&&H.complete(!b)}}function F(a){p.blockTransition&&ja(n,a);p.blockKeyframeAnimation&&na(n,!!a)}function G(){H=new s({end:d,cancel:g});C(M);m();return{$$willAnimate:!1,start:function(){return H},end:d}}function A(){function b(){if(!ga){F(!1);q(y,function(a){n.style[a[0]]=a[1]});K(a,c);e.addClass(a,Y);if(p.recalculateTimingStyles){ha=n.className+" "+Z;aa=Ga(n,ha);E=D(n,ha,aa);W=E.maxDelay;I=Math.max(W,0);
J=E.maxDuration;if(0===J){m();return}p.hasTransitions=0<E.transitionDuration;p.hasAnimations=0<E.animationDuration}p.applyAnimationDelay&&(W="boolean"!==typeof c.delay&&oa(c.delay)?parseFloat(c.delay):W,I=Math.max(W,0),E.animationDelay=W,ca=[ka,W+"s"],y.push(ca),n.style[ca[0]]=ca[1]);N=1E3*I;z=1E3*J;if(c.easing){var k,l=c.easing;p.hasTransitions&&(k=O+"TimingFunction",y.push([k,l]),n.style[k]=l);p.hasAnimations&&(k=U+"TimingFunction",y.push([k,l]),n.style[k]=l)}E.transitionDuration&&x.push(sa);E.animationDuration&&
x.push(ta);A=Date.now();var v=N+1.5*z;k=A+v;var l=a.data("$$animateCss")||[],r=!0;if(l.length){var G=l[0];(r=k>G.expectedEndTime)?h.cancel(G.timer):l.push(m)}r&&(v=h(d,v,!1),l[0]={timer:v,expectedEndTime:k},l.push(m),a.data("$$animateCss",l));a.on(x.join(" "),g);c.to&&(c.cleanupStyles&&Ea(t,n,Object.keys(c.to)),za(a,c))}}function d(){var b=a.data("$$animateCss");if(b){for(var c=1;c<b.length;c++)b[c]();a.removeData("$$animateCss")}}function g(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||
b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-A,0)>=N&&b>=J&&(va=!0,m())}if(!ga)if(n.parentNode){var A,x=[],l=function(a){if(va)k&&a&&(k=!1,m());else if(k=!a,E.animationDuration)if(a=na(n,k),k)y.push(a);else{var b=y,c=b.indexOf(a);0<=a&&b.splice(c,1)}},v=0<V&&(E.transitionDuration&&0===S.transitionDuration||E.animationDuration&&0===S.animationDuration)&&Math.max(S.animationDelay,S.transitionDelay);v?h(b,Math.floor(v*V*1E3),!1):b();L.resume=function(){l(!0)};L.pause=function(){l(!1)}}else m()}
var t={},n=B(a);if(!n||!n.parentNode||!u.enabled())return G();c=ia(c);var y=[],r=a.attr("class"),l=Ia(c),ga,k,va,H,L,I,N,J,z;if(0===c.duration||!v.animations&&!v.transitions)return G();var ba=c.event&&X(c.event)?c.event.join(" "):c.event,Q="",P="";ba&&c.structural?Q=T(ba,"ng-",!0):ba&&(Q=ba);c.addClass&&(P+=T(c.addClass,"-add"));c.removeClass&&(P.length&&(P+=" "),P+=T(c.removeClass,"-remove"));c.applyClassesEarly&&P.length&&K(a,c);var Z=[Q,P].join(" ").trim(),ha=r+" "+Z,Y=T(Z,"-active"),r=l.to&&0<
Object.keys(l.to).length;if(!(0<(c.keyframeStyle||"").length||r||Z))return G();var aa,S;0<c.stagger?(l=parseFloat(c.stagger),S={transitionDelay:l,animationDelay:l,transitionDuration:0,animationDuration:0}):(aa=Ga(n,ha),S=R(n,Z,aa,Qa));c.$$skipPreparationClasses||e.addClass(a,Z);c.transitionStyle&&(l=[O,c.transitionStyle],ea(n,l),y.push(l));0<=c.duration&&(l=0<n.style[O].length,l=Ca(c.duration,l),ea(n,l),y.push(l));c.keyframeStyle&&(l=[U,c.keyframeStyle],ea(n,l),y.push(l));var V=S?0<=c.staggerIndex?
c.staggerIndex:b.count(aa):0;(ba=0===V)&&!c.skipBlocking&&ja(n,9999);var E=D(n,ha,aa),W=E.maxDelay;I=Math.max(W,0);J=E.maxDuration;var p={};p.hasTransitions=0<E.transitionDuration;p.hasAnimations=0<E.animationDuration;p.hasTransitionAll=p.hasTransitions&&"all"==E.transitionProperty;p.applyTransitionDuration=r&&(p.hasTransitions&&!p.hasTransitionAll||p.hasAnimations&&!p.hasTransitions);p.applyAnimationDuration=c.duration&&p.hasAnimations;p.applyTransitionDelay=oa(c.delay)&&(p.applyTransitionDuration||
p.hasTransitions);p.applyAnimationDelay=oa(c.delay)&&p.hasAnimations;p.recalculateTimingStyles=0<P.length;if(p.applyTransitionDuration||p.applyAnimationDuration)J=c.duration?parseFloat(c.duration):J,p.applyTransitionDuration&&(p.hasTransitions=!0,E.transitionDuration=J,l=0<n.style[O+"Property"].length,y.push(Ca(J,l))),p.applyAnimationDuration&&(p.hasAnimations=!0,E.animationDuration=J,y.push([ua,J+"s"]));if(0===J&&!p.recalculateTimingStyles)return G();if(null!=c.delay){var ca=parseFloat(c.delay);
p.applyTransitionDelay&&y.push([fa,ca+"s"]);p.applyAnimationDelay&&y.push([ka,ca+"s"])}null==c.duration&&0<E.transitionDuration&&(p.recalculateTimingStyles=p.recalculateTimingStyles||ba);N=1E3*I;z=1E3*J;c.skipBlocking||(p.blockTransition=0<E.transitionDuration,p.blockKeyframeAnimation=0<E.animationDuration&&0<S.animationDelay&&0===S.animationDuration);c.from&&(c.cleanupStyles&&Ea(t,n,Object.keys(c.from)),ya(a,c));p.blockTransition||p.blockKeyframeAnimation?F(J):c.skipBlocking||ja(n,!1);return{$$willAnimate:!0,
end:d,start:function(){if(!ga)return L={end:d,cancel:g,resume:null,pause:null},H=new s(L),C(A),H}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,e,s,h,g){function v(a){return a.replace(/\bng-\S+\b/g,"")}function r(a,b){I(a)&&(a=a.split(" "));I(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}
function u(c,e,g){function h(a){var b={},c=B(a).getBoundingClientRect();q(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=C.scrollTop;break;case "left":d+=C.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function f(){var c=v(g.attr("class")||""),d=r(c,m),c=r(m,c),d=a(x,{to:h(g),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function s(){x.remove();e.removeClass("ng-animate-shim");g.removeClass("ng-animate-shim")}var x=
L(B(e).cloneNode(!0)),m=v(x.attr("class")||"");e.addClass("ng-animate-shim");g.addClass("ng-animate-shim");x.addClass("ng-anchor");D.append(x);var F;c=function(){var c=a(x,{addClass:"ng-anchor-out",delay:!0,from:h(e)});return c.$$willAnimate?c:null}();if(!c&&(F=f(),!F))return s();var G=c||F;return{start:function(){function a(){c&&c.end()}var b,c=G.start();c.done(function(){c=null;if(!F&&(F=f()))return c=F.start(),c.done(function(){c=null;s();b.complete()}),c;s();b.complete()});return b=new d({end:a,
cancel:a})}}}function H(a,b,c,e){var f=R(a,M),g=R(b,M),h=[];q(e,function(a){(a=u(c,a.out,a["in"]))&&h.push(a)});if(f||g||0!==h.length)return{start:function(){function a(){q(b,function(a){a.end()})}var b=[];f&&b.push(f.start());g&&b.push(g.start());q(h,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function R(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=
e.domOperation));e.preparationClasses&&(e.event=Y(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!s.animations&&!s.transitions)return M;var C=g[0].body;c=B(e);var D=L(c.parentNode&&11===c.parentNode.nodeType||C.contains(c)?c:C);N(h);return function(a){return a.from&&a.to?H(a.from,a.to,a.classes,a.anchors):R(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=X(c)?c:c.split(" ");
for(var d=[],e={},r=0;r<c.length;r++){var q=c[r],s=a.$$registeredAnimations[q];s&&!e[q]&&(d.push(b.get(s)),e[q]=!0)}return d}var s=N(d);return function(a,b,d,r){function u(){r.domOperation();s(a,r)}function H(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,D,K,f];break;case "addClass":b=[b,D,f];break;case "removeClass":b=[b,K,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Fa(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Fa(a))return a;return M}
function B(a,b,d,e,f){var g=[];q(e,function(e){var h=e[f];h&&g.push(function(){var e,f,g=!1,k=function(a){g||(g=!0,(f||M)(a),e.complete(!a))};e=new c({end:function(){k()},cancel:function(){k(!0)}});f=H(h,a,b,d,function(a){k(!1===a)});return e})});return g}function C(a,b,d,e,f){var g=B(a,b,d,e,f);if(0===g.length){var h,l;"beforeSetClass"===f?(h=B(a,"removeClass",d,e,"beforeRemoveClass"),l=B(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=B(a,"removeClass",d,e,"removeClass"),l=B(a,"addClass",
d,e,"addClass"));h&&(g=g.concat(h));l&&(g=g.concat(l))}if(0!==g.length)return function(a){var b=[];g.length&&q(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){q(b,function(b){a?b.cancel():b.end()})}}}3===arguments.length&&pa(d)&&(r=d,d=null);r=ia(r);d||(d=a.attr("class")||"",r.addClass&&(d+=" "+r.addClass),r.removeClass&&(d+=" "+r.removeClass));var D=r.addClass,K=r.removeClass,l=e(d),y,w;if(l.length){var f,I;"leave"==b?(I="leave",f="afterLeave"):(I="before"+b.charAt(0).toUpperCase()+
b.substr(1),f=b);"enter"!==b&&"move"!==b&&(y=C(a,b,r,l,I));w=C(a,b,r,l,f)}if(y||w)return{start:function(){function b(c){f=!0;u();da(a,r);g.complete(c)}var d,e=[];y&&e.push(function(a){d=y(a)});e.length?e.push(function(a){u();a(!0)}):u();w&&e.push(function(a){d=w(a)});var f=!1,g=new c({end:function(){f||((d||M)(void 0),b(void 0))},cancel:function(){f||((d||M)(!0),b(!0))}});c.chain(e,b);return g}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");
this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),h=d(a.to);if(b||h)return{start:function(){function a(){return function(){q(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());h&&d.push(h.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map
;
// Source: ./node_modules/angular-sanitize/angular-sanitize.min.js
/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,h,p){'use strict';function E(a){var f=[];r(f,h.noop).chars(a);return f.join("")}function g(a,f){var d={},c=a.split(","),b;for(b=0;b<c.length;b++)d[f?h.lowercase(c[b]):c[b]]=!0;return d}function F(a,f){function d(a,b,d,l){b=h.lowercase(b);if(s[b])for(;e.last()&&t[e.last()];)c("",e.last());u[b]&&e.last()==b&&c("",b);(l=v[b]||!!l)||e.push(b);var m={};d.replace(G,function(b,a,f,c,d){m[a]=q(f||c||d||"")});f.start&&f.start(b,m,l)}function c(b,a){var c=0,d;if(a=h.lowercase(a))for(c=e.length-
1;0<=c&&e[c]!=a;c--);if(0<=c){for(d=e.length-1;d>=c;d--)f.end&&f.end(e[d]);e.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,e=[],m=a,l;for(e.last=function(){return e[e.length-1]};a;){l="";k=!0;if(e.last()&&w[e.last()])a=a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+e.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");f.chars&&f.chars(q(b));return""}),c("",e.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",
b)===b&&(f.comment&&f.comment(a.substring(4,b)),a=a.substring(b+3),k=!1);else if(x.test(a)){if(b=a.match(x))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(y))a=a.substring(b[0].length),b[0].replace(y,c),k=!1}else K.test(a)&&((b=a.match(z))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(z,d)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),f.chars&&f.chars(q(l)))}if(a==m)throw L("badparse",a);m=a}c()}function q(a){if(!a)return"";A.innerHTML=
a.replace(/</g,"&lt;");return A.textContent}function B(a){return a.replace(/&/g,"&amp;").replace(M,function(a){var d=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(a,f){var d=!1,c=h.bind(a,a.push);return{start:function(a,k,e){a=h.lowercase(a);!d&&w[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(k,function(d,e){var k=h.lowercase(e),g="img"===a&&"src"===k||
"background"===k;!0!==O[k]||!0===D[k]&&!f(d,g)||(c(" "),c(e),c('="'),c(B(d)),c('"'))}),c(e?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||c(B(a))}}}var L=h.$$minErr("$sanitize"),z=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,y=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,x=/<!DOCTYPE([^>]*?)>/i,
I=/<!\[CDATA\[(.*?)]]\x3e/g,M=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,N=/([^\#-~| |!])/g,v=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var u=h.extend({},p,n),s=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),t=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use");var w=g("script,style"),C=h.extend({},v,s,t,u,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0);var O=h.extend({},D,p,n),A=document.createElement("pre");h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(f){var d=[];F(f,r(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var f=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,d=/^mailto:/i;return function(c,b){function k(a){a&&g.push(E(a))}function e(a,
c){g.push("<a ");h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!c)return c;for(var m,l=c,g=[],n,p;m=l.match(f);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),e(n,m[0].replace(d,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map
;
// Source: ./node_modules/angular-touch/angular-touch.min.js
/*
 AngularJS v1.5.11
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(x,n){'use strict';function s(f,k){var e=!1,a=!1;this.ngClickOverrideEnabled=function(b){return n.isDefined(b)?(b&&!a&&(a=!0,t.$$moduleName="ngTouch",k.directive("ngClick",t),f.decorator("ngClickDirective",["$delegate",function(a){if(e)a.shift();else for(var b=a.length-1;0<=b;){if("ngTouch"===a[b].$$moduleName){a.splice(b,1);break}b--}return a}])),e=b,this):e};this.$get=function(){return{ngClickOverrideEnabled:function(){return e}}}}function v(f,k,e){p.directive(f,["$parse","$swipe",function(a,
b){return function(l,u,g){function h(c){if(!d)return!1;var a=Math.abs(c.y-d.y);c=(c.x-d.x)*k;return r&&75>a&&0<c&&30<c&&.3>a/c}var m=a(g[f]),d,r,c=["touch"];n.isDefined(g.ngSwipeDisableMouse)||c.push("mouse");b.bind(u,{start:function(c,a){d=c;r=!0},cancel:function(c){r=!1},end:function(c,d){h(c)&&l.$apply(function(){u.triggerHandler(e);m(l,{$event:d})})}},c)}}])}var p=n.module("ngTouch",[]);p.provider("$touch",s);s.$inject=["$provide","$compileProvider"];p.factory("$swipe",[function(){function f(a){a=
a.originalEvent||a;var b=a.touches&&a.touches.length?a.touches:[a];a=a.changedTouches&&a.changedTouches[0]||b[0];return{x:a.clientX,y:a.clientY}}function k(a,b){var l=[];n.forEach(a,function(a){(a=e[a][b])&&l.push(a)});return l.join(" ")}var e={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup",cancel:"pointercancel"}};return{bind:function(a,b,l){var e,
g,h,m,d=!1;l=l||["mouse","touch","pointer"];a.on(k(l,"start"),function(c){h=f(c);d=!0;g=e=0;m=h;b.start&&b.start(h,c)});var r=k(l,"cancel");if(r)a.on(r,function(c){d=!1;b.cancel&&b.cancel(c)});a.on(k(l,"move"),function(c){if(d&&h){var a=f(c);e+=Math.abs(a.x-m.x);g+=Math.abs(a.y-m.y);m=a;10>e&&10>g||(g>e?(d=!1,b.cancel&&b.cancel(c)):(c.preventDefault(),b.move&&b.move(a,c)))}});a.on(k(l,"end"),function(c){d&&(d=!1,b.end&&b.end(f(c),c))})}}}]);var t=["$parse","$timeout","$rootElement",function(f,k,e){function a(a,
d,b){for(var c=0;c<a.length;c+=2){var g=a[c+1],e=b;if(25>Math.abs(a[c]-d)&&25>Math.abs(g-e))return a.splice(c,c+2),!0}return!1}function b(b){if(!(2500<Date.now()-u)){var d=b.touches&&b.touches.length?b.touches:[b],e=d[0].clientX,d=d[0].clientY;if(!(1>e&&1>d||h&&h[0]===e&&h[1]===d)){h&&(h=null);var c=b.target;"label"===n.lowercase(c.nodeName||c[0]&&c[0].nodeName)&&(h=[e,d]);a(g,e,d)||(b.stopPropagation(),b.preventDefault(),b.target&&b.target.blur&&b.target.blur())}}}function l(a){a=a.touches&&a.touches.length?
a.touches:[a];var b=a[0].clientX,e=a[0].clientY;g.push(b,e);k(function(){for(var a=0;a<g.length;a+=2)if(g[a]===b&&g[a+1]===e){g.splice(a,a+2);break}},2500,!1)}var u,g,h;return function(h,d,k){var c=f(k.ngClick),w=!1,q,p,s,t;d.on("touchstart",function(a){w=!0;q=a.target?a.target:a.srcElement;3===q.nodeType&&(q=q.parentNode);d.addClass("ng-click-active");p=Date.now();a=a.originalEvent||a;a=(a.touches&&a.touches.length?a.touches:[a])[0];s=a.clientX;t=a.clientY});d.on("touchcancel",function(a){w=!1;d.removeClass("ng-click-active")});
d.on("touchend",function(c){var h=Date.now()-p,f=c.originalEvent||c,m=(f.changedTouches&&f.changedTouches.length?f.changedTouches:f.touches&&f.touches.length?f.touches:[f])[0],f=m.clientX,m=m.clientY,v=Math.sqrt(Math.pow(f-s,2)+Math.pow(m-t,2));w&&750>h&&12>v&&(g||(e[0].addEventListener("click",b,!0),e[0].addEventListener("touchstart",l,!0),g=[]),u=Date.now(),a(g,f,m),q&&q.blur(),n.isDefined(k.disabled)&&!1!==k.disabled||d.triggerHandler("click",[c]));w=!1;d.removeClass("ng-click-active")});d.onclick=
function(a){};d.on("click",function(a,b){h.$apply(function(){c(h,{$event:b||a})})});d.on("mousedown",function(a){d.addClass("ng-click-active")});d.on("mousemove mouseup",function(a){d.removeClass("ng-click-active")})}}];v("ngSwipeLeft",-1,"swipeleft");v("ngSwipeRight",1,"swiperight")})(window,window.angular);
//# sourceMappingURL=angular-touch.min.js.map
;
// Source: ./node_modules/angular-resource/angular-resource.min.js
/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(I,f,C){'use strict';function D(t,e){e=e||{};f.forEach(e,function(f,k){delete e[k]});for(var k in t)!t.hasOwnProperty(k)||"$"===k.charAt(0)&&"$"===k.charAt(1)||(e[k]=t[k]);return e}var y=f.$$minErr("$resource"),B=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;f.module("ngResource",["ng"]).provider("$resource",function(){var t=/^https?:\/\/[^\/]*/,e=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};
this.$get=["$http","$q",function(k,F){function w(f,g){this.template=f;this.defaults=r({},e.defaults,g);this.urlParams={}}function z(l,g,s,h){function c(a,q){var c={};q=r({},g,q);u(q,function(b,q){x(b)&&(b=b());var m;if(b&&b.charAt&&"@"==b.charAt(0)){m=a;var d=b.substr(1);if(null==d||""===d||"hasOwnProperty"===d||!B.test("."+d))throw y("badmember",d);for(var d=d.split("."),n=0,g=d.length;n<g&&f.isDefined(m);n++){var e=d[n];m=null!==m?m[e]:C}}else m=b;c[q]=m});return c}function G(a){return a.resource}
function d(a){D(a||{},this)}var t=new w(l,h);s=r({},e.defaults.actions,s);d.prototype.toJSON=function(){var a=r({},this);delete a.$promise;delete a.$resolved;return a};u(s,function(a,q){var g=/^(POST|PUT|PATCH)$/i.test(a.method);d[q]=function(b,A,m,e){var n={},h,l,s;switch(arguments.length){case 4:s=e,l=m;case 3:case 2:if(x(A)){if(x(b)){l=b;s=A;break}l=A;s=m}else{n=b;h=A;l=m;break}case 1:x(b)?l=b:g?h=b:n=b;break;case 0:break;default:throw y("badargs",arguments.length);}var w=this instanceof d,p=w?
h:a.isArray?[]:new d(h),v={},z=a.interceptor&&a.interceptor.response||G,B=a.interceptor&&a.interceptor.responseError||C;u(a,function(a,b){switch(b){default:v[b]=H(a);break;case "params":case "isArray":case "interceptor":break;case "timeout":v[b]=a}});g&&(v.data=h);t.setUrlParams(v,r({},c(h,a.params||{}),n),a.url);n=k(v).then(function(b){var c=b.data,m=p.$promise;if(c){if(f.isArray(c)!==!!a.isArray)throw y("badcfg",q,a.isArray?"array":"object",f.isArray(c)?"array":"object",v.method,v.url);a.isArray?
(p.length=0,u(c,function(b){"object"===typeof b?p.push(new d(b)):p.push(b)})):(D(c,p),p.$promise=m)}p.$resolved=!0;b.resource=p;return b},function(b){p.$resolved=!0;(s||E)(b);return F.reject(b)});n=n.then(function(b){var a=z(b);(l||E)(a,b.headers);return a},B);return w?n:(p.$promise=n,p.$resolved=!1,p)};d.prototype["$"+q]=function(b,a,c){x(b)&&(c=a,a=b,b={});b=d[q].call(this,b,this,a,c);return b.$promise||b}});d.bind=function(a){return z(l,r({},g,a),s)};return d}var E=f.noop,u=f.forEach,r=f.extend,
H=f.copy,x=f.isFunction;w.prototype={setUrlParams:function(l,g,e){var h=this,c=e||h.template,k,d,r="",a=h.urlParams={};u(c.split(/\W/),function(d){if("hasOwnProperty"===d)throw y("badname");!/^\d+$/.test(d)&&d&&(new RegExp("(^|[^\\\\]):"+d+"(\\W|$)")).test(c)&&(a[d]=!0)});c=c.replace(/\\:/g,":");c=c.replace(t,function(a){r=a;return""});g=g||{};u(h.urlParams,function(a,e){k=g.hasOwnProperty(e)?g[e]:h.defaults[e];f.isDefined(k)&&null!==k?(d=encodeURIComponent(k).replace(/%40/gi,"@").replace(/%3A/gi,
":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),c=c.replace(new RegExp(":"+e+"(\\W|$)","g"),function(b,a){return d+a})):c=c.replace(new RegExp("(/?):"+e+"(\\W|$)","g"),function(b,a,c){return"/"==c.charAt(0)?c:a+c})});h.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");l.url=r+c.replace(/\/\\\./,"/.");u(g,function(a,c){h.urlParams[c]||(l.params=l.params||{},l.params[c]=
a)})}};return z}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map
;
// Source: ./node_modules/socket.io-client/dist/socket.io.js
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["io"] = factory();
	else
		root["io"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Module dependencies.
	 */

	var url = __webpack_require__(1);
	var parser = __webpack_require__(7);
	var Manager = __webpack_require__(17);
	var debug = __webpack_require__(3)('socket.io-client');

	/**
	 * Module exports.
	 */

	module.exports = exports = lookup;

	/**
	 * Managers cache.
	 */

	var cache = exports.managers = {};

	/**
	 * Looks up an existing `Manager` for multiplexing.
	 * If the user summons:
	 *
	 *   `io('http://localhost/a');`
	 *   `io('http://localhost/b');`
	 *
	 * We reuse the existing instance based on same scheme/port/host,
	 * and we initialize sockets for each namespace.
	 *
	 * @api public
	 */

	function lookup(uri, opts) {
	  if ((typeof uri === 'undefined' ? 'undefined' : _typeof(uri)) === 'object') {
	    opts = uri;
	    uri = undefined;
	  }

	  opts = opts || {};

	  var parsed = url(uri);
	  var source = parsed.source;
	  var id = parsed.id;
	  var path = parsed.path;
	  var sameNamespace = cache[id] && path in cache[id].nsps;
	  var newConnection = opts.forceNew || opts['force new connection'] || false === opts.multiplex || sameNamespace;

	  var io;

	  if (newConnection) {
	    debug('ignoring socket cache for %s', source);
	    io = Manager(source, opts);
	  } else {
	    if (!cache[id]) {
	      debug('new io instance for %s', source);
	      cache[id] = Manager(source, opts);
	    }
	    io = cache[id];
	  }
	  if (parsed.query && !opts.query) {
	    opts.query = parsed.query;
	  } else if (opts && 'object' === _typeof(opts.query)) {
	    opts.query = encodeQueryString(opts.query);
	  }
	  return io.socket(parsed.path, opts);
	}
	/**
	 *  Helper method to parse query objects to string.
	 * @param {object} query
	 * @returns {string}
	 */
	function encodeQueryString(obj) {
	  var str = [];
	  for (var p in obj) {
	    if (obj.hasOwnProperty(p)) {
	      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
	    }
	  }
	  return str.join('&');
	}
	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	exports.protocol = parser.protocol;

	/**
	 * `connect`.
	 *
	 * @param {String} uri
	 * @api public
	 */

	exports.connect = lookup;

	/**
	 * Expose constructors for standalone build.
	 *
	 * @api public
	 */

	exports.Manager = __webpack_require__(17);
	exports.Socket = __webpack_require__(44);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	/**
	 * Module dependencies.
	 */

	var parseuri = __webpack_require__(2);
	var debug = __webpack_require__(3)('socket.io-client:url');

	/**
	 * Module exports.
	 */

	module.exports = url;

	/**
	 * URL parser.
	 *
	 * @param {String} url
	 * @param {Object} An object meant to mimic window.location.
	 *                 Defaults to window.location.
	 * @api public
	 */

	function url(uri, loc) {
	  var obj = uri;

	  // default to window.location
	  loc = loc || global.location;
	  if (null == uri) uri = loc.protocol + '//' + loc.host;

	  // relative path support
	  if ('string' === typeof uri) {
	    if ('/' === uri.charAt(0)) {
	      if ('/' === uri.charAt(1)) {
	        uri = loc.protocol + uri;
	      } else {
	        uri = loc.host + uri;
	      }
	    }

	    if (!/^(https?|wss?):\/\//.test(uri)) {
	      debug('protocol-less url %s', uri);
	      if ('undefined' !== typeof loc) {
	        uri = loc.protocol + '//' + uri;
	      } else {
	        uri = 'https://' + uri;
	      }
	    }

	    // parse
	    debug('parse %s', uri);
	    obj = parseuri(uri);
	  }

	  // make sure we treat `localhost:80` and `localhost` equally
	  if (!obj.port) {
	    if (/^(http|ws)$/.test(obj.protocol)) {
	      obj.port = '80';
	    } else if (/^(http|ws)s$/.test(obj.protocol)) {
	      obj.port = '443';
	    }
	  }

	  obj.path = obj.path || '/';

	  var ipv6 = obj.host.indexOf(':') !== -1;
	  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

	  // define unique id
	  obj.id = obj.protocol + '://' + host + ':' + obj.port;
	  // define href
	  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : ':' + obj.port);

	  return obj;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */

	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

	var parts = [
	    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
	];

	module.exports = function parseuri(str) {
	    var src = str,
	        b = str.indexOf('['),
	        e = str.indexOf(']');

	    if (b != -1 && e != -1) {
	        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
	    }

	    var m = re.exec(str || ''),
	        uri = {},
	        i = 14;

	    while (i--) {
	        uri[parts[i]] = m[i] || '';
	    }

	    if (b != -1 && e != -1) {
	        uri.source = src;
	        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
	        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
	        uri.ipv6uri = true;
	    }

	    return uri;
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(5);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	  return (typeof document !== 'undefined' && 'WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  try {
	    return JSON.stringify(v);
	  } catch (err) {
	    return '[UnexpectedJSONParseError]: ' + err.message;
	  }
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    return exports.storage.debug;
	  } catch(e) {}

	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	  if (typeof process !== 'undefined' && 'env' in process) {
	    return process.env.DEBUG;
	  }
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug.debug = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(6);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    // apply env-specific formatting
	    args = exports.formatArgs.apply(self, args);

	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/[\\^$+?.()|[\]{}]/g, '\\$&').replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000
	var m = s * 60
	var h = m * 60
	var d = h * 24
	var y = d * 365.25

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function (val, options) {
	  options = options || {}
	  var type = typeof val
	  if (type === 'string' && val.length > 0) {
	    return parse(val)
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ?
				fmtLong(val) :
				fmtShort(val)
	  }
	  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val))
	}

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = String(str)
	  if (str.length > 10000) {
	    return
	  }
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str)
	  if (!match) {
	    return
	  }
	  var n = parseFloat(match[1])
	  var type = (match[2] || 'ms').toLowerCase()
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n
	    default:
	      return undefined
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtShort(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd'
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h'
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm'
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's'
	  }
	  return ms + 'ms'
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtLong(ms) {
	  return plural(ms, d, 'day') ||
	    plural(ms, h, 'hour') ||
	    plural(ms, m, 'minute') ||
	    plural(ms, s, 'second') ||
	    ms + ' ms'
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) {
	    return
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's'
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var debug = __webpack_require__(8)('socket.io-parser');
	var json = __webpack_require__(11);
	var Emitter = __webpack_require__(13);
	var binary = __webpack_require__(14);
	var isBuf = __webpack_require__(16);

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	exports.protocol = 4;

	/**
	 * Packet types.
	 *
	 * @api public
	 */

	exports.types = [
	  'CONNECT',
	  'DISCONNECT',
	  'EVENT',
	  'ACK',
	  'ERROR',
	  'BINARY_EVENT',
	  'BINARY_ACK'
	];

	/**
	 * Packet type `connect`.
	 *
	 * @api public
	 */

	exports.CONNECT = 0;

	/**
	 * Packet type `disconnect`.
	 *
	 * @api public
	 */

	exports.DISCONNECT = 1;

	/**
	 * Packet type `event`.
	 *
	 * @api public
	 */

	exports.EVENT = 2;

	/**
	 * Packet type `ack`.
	 *
	 * @api public
	 */

	exports.ACK = 3;

	/**
	 * Packet type `error`.
	 *
	 * @api public
	 */

	exports.ERROR = 4;

	/**
	 * Packet type 'binary event'
	 *
	 * @api public
	 */

	exports.BINARY_EVENT = 5;

	/**
	 * Packet type `binary ack`. For acks with binary arguments.
	 *
	 * @api public
	 */

	exports.BINARY_ACK = 6;

	/**
	 * Encoder constructor.
	 *
	 * @api public
	 */

	exports.Encoder = Encoder;

	/**
	 * Decoder constructor.
	 *
	 * @api public
	 */

	exports.Decoder = Decoder;

	/**
	 * A socket.io Encoder instance
	 *
	 * @api public
	 */

	function Encoder() {}

	/**
	 * Encode a packet as a single string if non-binary, or as a
	 * buffer sequence, depending on packet type.
	 *
	 * @param {Object} obj - packet object
	 * @param {Function} callback - function to handle encodings (likely engine.write)
	 * @return Calls callback with Array of encodings
	 * @api public
	 */

	Encoder.prototype.encode = function(obj, callback){
	  debug('encoding packet %j', obj);

	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    encodeAsBinary(obj, callback);
	  }
	  else {
	    var encoding = encodeAsString(obj);
	    callback([encoding]);
	  }
	};

	/**
	 * Encode packet as string.
	 *
	 * @param {Object} packet
	 * @return {String} encoded
	 * @api private
	 */

	function encodeAsString(obj) {
	  var str = '';
	  var nsp = false;

	  // first is type
	  str += obj.type;

	  // attachments if we have them
	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    str += obj.attachments;
	    str += '-';
	  }

	  // if we have a namespace other than `/`
	  // we append it followed by a comma `,`
	  if (obj.nsp && '/' != obj.nsp) {
	    nsp = true;
	    str += obj.nsp;
	  }

	  // immediately followed by the id
	  if (null != obj.id) {
	    if (nsp) {
	      str += ',';
	      nsp = false;
	    }
	    str += obj.id;
	  }

	  // json data
	  if (null != obj.data) {
	    if (nsp) str += ',';
	    str += json.stringify(obj.data);
	  }

	  debug('encoded %j as %s', obj, str);
	  return str;
	}

	/**
	 * Encode packet as 'buffer sequence' by removing blobs, and
	 * deconstructing packet into object with placeholders and
	 * a list of buffers.
	 *
	 * @param {Object} packet
	 * @return {Buffer} encoded
	 * @api private
	 */

	function encodeAsBinary(obj, callback) {

	  function writeEncoding(bloblessData) {
	    var deconstruction = binary.deconstructPacket(bloblessData);
	    var pack = encodeAsString(deconstruction.packet);
	    var buffers = deconstruction.buffers;

	    buffers.unshift(pack); // add packet info to beginning of data list
	    callback(buffers); // write all the buffers
	  }

	  binary.removeBlobs(obj, writeEncoding);
	}

	/**
	 * A socket.io Decoder instance
	 *
	 * @return {Object} decoder
	 * @api public
	 */

	function Decoder() {
	  this.reconstructor = null;
	}

	/**
	 * Mix in `Emitter` with Decoder.
	 */

	Emitter(Decoder.prototype);

	/**
	 * Decodes an ecoded packet string into packet JSON.
	 *
	 * @param {String} obj - encoded packet
	 * @return {Object} packet
	 * @api public
	 */

	Decoder.prototype.add = function(obj) {
	  var packet;
	  if ('string' == typeof obj) {
	    packet = decodeString(obj);
	    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) { // binary packet's json
	      this.reconstructor = new BinaryReconstructor(packet);

	      // no attachments, labeled binary but no binary data to follow
	      if (this.reconstructor.reconPack.attachments === 0) {
	        this.emit('decoded', packet);
	      }
	    } else { // non-binary full packet
	      this.emit('decoded', packet);
	    }
	  }
	  else if (isBuf(obj) || obj.base64) { // raw binary data
	    if (!this.reconstructor) {
	      throw new Error('got binary data when not reconstructing a packet');
	    } else {
	      packet = this.reconstructor.takeBinaryData(obj);
	      if (packet) { // received final buffer
	        this.reconstructor = null;
	        this.emit('decoded', packet);
	      }
	    }
	  }
	  else {
	    throw new Error('Unknown type: ' + obj);
	  }
	};

	/**
	 * Decode a packet String (JSON data)
	 *
	 * @param {String} str
	 * @return {Object} packet
	 * @api private
	 */

	function decodeString(str) {
	  var p = {};
	  var i = 0;

	  // look up type
	  p.type = Number(str.charAt(0));
	  if (null == exports.types[p.type]) return error();

	  // look up attachments if type binary
	  if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
	    var buf = '';
	    while (str.charAt(++i) != '-') {
	      buf += str.charAt(i);
	      if (i == str.length) break;
	    }
	    if (buf != Number(buf) || str.charAt(i) != '-') {
	      throw new Error('Illegal attachments');
	    }
	    p.attachments = Number(buf);
	  }

	  // look up namespace (if any)
	  if ('/' == str.charAt(i + 1)) {
	    p.nsp = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (',' == c) break;
	      p.nsp += c;
	      if (i == str.length) break;
	    }
	  } else {
	    p.nsp = '/';
	  }

	  // look up id
	  var next = str.charAt(i + 1);
	  if ('' !== next && Number(next) == next) {
	    p.id = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (null == c || Number(c) != c) {
	        --i;
	        break;
	      }
	      p.id += str.charAt(i);
	      if (i == str.length) break;
	    }
	    p.id = Number(p.id);
	  }

	  // look up json data
	  if (str.charAt(++i)) {
	    p = tryParse(p, str.substr(i));
	  }

	  debug('decoded %s as %j', str, p);
	  return p;
	}

	function tryParse(p, str) {
	  try {
	    p.data = json.parse(str);
	  } catch(e){
	    return error();
	  }
	  return p; 
	};

	/**
	 * Deallocates a parser's resources
	 *
	 * @api public
	 */

	Decoder.prototype.destroy = function() {
	  if (this.reconstructor) {
	    this.reconstructor.finishedReconstruction();
	  }
	};

	/**
	 * A manager of a binary event's 'buffer sequence'. Should
	 * be constructed whenever a packet of type BINARY_EVENT is
	 * decoded.
	 *
	 * @param {Object} packet
	 * @return {BinaryReconstructor} initialized reconstructor
	 * @api private
	 */

	function BinaryReconstructor(packet) {
	  this.reconPack = packet;
	  this.buffers = [];
	}

	/**
	 * Method to be called when binary data received from connection
	 * after a BINARY_EVENT packet.
	 *
	 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
	 * @return {null | Object} returns null if more binary data is expected or
	 *   a reconstructed packet object if all buffers have been received.
	 * @api private
	 */

	BinaryReconstructor.prototype.takeBinaryData = function(binData) {
	  this.buffers.push(binData);
	  if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
	    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
	    this.finishedReconstruction();
	    return packet;
	  }
	  return null;
	};

	/**
	 * Cleans up binary packet reconstruction variables.
	 *
	 * @api private
	 */

	BinaryReconstructor.prototype.finishedReconstruction = function() {
	  this.reconPack = null;
	  this.buffers = [];
	};

	function error(data){
	  return {
	    type: exports.ERROR,
	    data: 'parser error'
	  };
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(9);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(10);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {/*** IMPORTS FROM imports-loader ***/
	var define = false;

	/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
	;(function () {
	  // Detect the `define` function exposed by asynchronous module loaders. The
	  // strict `define` check is necessary for compatibility with `r.js`.
	  var isLoader = typeof define === "function" && define.amd;

	  // A set of types used to distinguish objects from primitives.
	  var objectTypes = {
	    "function": true,
	    "object": true
	  };

	  // Detect the `exports` object exposed by CommonJS implementations.
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

	  // Use the `global` object exposed by Node (including Browserify via
	  // `insert-module-globals`), Narwhal, and Ringo as the default context,
	  // and the `window` object in browsers. Rhino exports a `global` function
	  // instead.
	  var root = objectTypes[typeof window] && window || this,
	      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

	  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
	    root = freeGlobal;
	  }

	  // Public: Initializes JSON 3 using the given `context` object, attaching the
	  // `stringify` and `parse` functions to the specified `exports` object.
	  function runInContext(context, exports) {
	    context || (context = root["Object"]());
	    exports || (exports = root["Object"]());

	    // Native constructor aliases.
	    var Number = context["Number"] || root["Number"],
	        String = context["String"] || root["String"],
	        Object = context["Object"] || root["Object"],
	        Date = context["Date"] || root["Date"],
	        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
	        TypeError = context["TypeError"] || root["TypeError"],
	        Math = context["Math"] || root["Math"],
	        nativeJSON = context["JSON"] || root["JSON"];

	    // Delegate to the native `stringify` and `parse` implementations.
	    if (typeof nativeJSON == "object" && nativeJSON) {
	      exports.stringify = nativeJSON.stringify;
	      exports.parse = nativeJSON.parse;
	    }

	    // Convenience aliases.
	    var objectProto = Object.prototype,
	        getClass = objectProto.toString,
	        isProperty, forEach, undef;

	    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
	    var isExtended = new Date(-3509827334573292);
	    try {
	      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
	      // results for certain dates in Opera >= 10.53.
	      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
	        // Safari < 2.0.2 stores the internal millisecond time value correctly,
	        // but clips the values returned by the date methods to the range of
	        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
	        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
	    } catch (exception) {}

	    // Internal: Determines whether the native `JSON.stringify` and `parse`
	    // implementations are spec-compliant. Based on work by Ken Snyder.
	    function has(name) {
	      if (has[name] !== undef) {
	        // Return cached feature test result.
	        return has[name];
	      }
	      var isSupported;
	      if (name == "bug-string-char-index") {
	        // IE <= 7 doesn't support accessing string characters using square
	        // bracket notation. IE 8 only supports this for primitives.
	        isSupported = "a"[0] != "a";
	      } else if (name == "json") {
	        // Indicates whether both `JSON.stringify` and `JSON.parse` are
	        // supported.
	        isSupported = has("json-stringify") && has("json-parse");
	      } else {
	        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
	        // Test `JSON.stringify`.
	        if (name == "json-stringify") {
	          var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
	          if (stringifySupported) {
	            // A test function object with a custom `toJSON` method.
	            (value = function () {
	              return 1;
	            }).toJSON = value;
	            try {
	              stringifySupported =
	                // Firefox 3.1b1 and b2 serialize string, number, and boolean
	                // primitives as object literals.
	                stringify(0) === "0" &&
	                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
	                // literals.
	                stringify(new Number()) === "0" &&
	                stringify(new String()) == '""' &&
	                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
	                // does not define a canonical JSON representation (this applies to
	                // objects with `toJSON` properties as well, *unless* they are nested
	                // within an object or array).
	                stringify(getClass) === undef &&
	                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
	                // FF 3.1b3 pass this test.
	                stringify(undef) === undef &&
	                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
	                // respectively, if the value is omitted entirely.
	                stringify() === undef &&
	                // FF 3.1b1, 2 throw an error if the given value is not a number,
	                // string, array, object, Boolean, or `null` literal. This applies to
	                // objects with custom `toJSON` methods as well, unless they are nested
	                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
	                // methods entirely.
	                stringify(value) === "1" &&
	                stringify([value]) == "[1]" &&
	                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
	                // `"[null]"`.
	                stringify([undef]) == "[null]" &&
	                // YUI 3.0.0b1 fails to serialize `null` literals.
	                stringify(null) == "null" &&
	                // FF 3.1b1, 2 halts serialization if an array contains a function:
	                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
	                // elides non-JSON values from objects and arrays, unless they
	                // define custom `toJSON` methods.
	                stringify([undef, getClass, null]) == "[null,null,null]" &&
	                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
	                // where character escape codes are expected (e.g., `\b` => `\u0008`).
	                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
	                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
	                stringify(null, value) === "1" &&
	                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
	                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
	                // serialize extended years.
	                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
	                // The milliseconds are optional in ES 5, but required in 5.1.
	                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
	                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
	                // four-digit years instead of six-digit years. Credits: @Yaffle.
	                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
	                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
	                // values less than 1000. Credits: @Yaffle.
	                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
	            } catch (exception) {
	              stringifySupported = false;
	            }
	          }
	          isSupported = stringifySupported;
	        }
	        // Test `JSON.parse`.
	        if (name == "json-parse") {
	          var parse = exports.parse;
	          if (typeof parse == "function") {
	            try {
	              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
	              // Conforming implementations should also coerce the initial argument to
	              // a string prior to parsing.
	              if (parse("0") === 0 && !parse(false)) {
	                // Simple parsing test.
	                value = parse(serialized);
	                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
	                if (parseSupported) {
	                  try {
	                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
	                    parseSupported = !parse('"\t"');
	                  } catch (exception) {}
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
	                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
	                      // certain octal literals.
	                      parseSupported = parse("01") !== 1;
	                    } catch (exception) {}
	                  }
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
	                      // points. These environments, along with FF 3.1b1 and 2,
	                      // also allow trailing commas in JSON objects and arrays.
	                      parseSupported = parse("1.") !== 1;
	                    } catch (exception) {}
	                  }
	                }
	              }
	            } catch (exception) {
	              parseSupported = false;
	            }
	          }
	          isSupported = parseSupported;
	        }
	      }
	      return has[name] = !!isSupported;
	    }

	    if (!has("json")) {
	      // Common `[[Class]]` name aliases.
	      var functionClass = "[object Function]",
	          dateClass = "[object Date]",
	          numberClass = "[object Number]",
	          stringClass = "[object String]",
	          arrayClass = "[object Array]",
	          booleanClass = "[object Boolean]";

	      // Detect incomplete support for accessing string characters by index.
	      var charIndexBuggy = has("bug-string-char-index");

	      // Define additional utility methods if the `Date` methods are buggy.
	      if (!isExtended) {
	        var floor = Math.floor;
	        // A mapping between the months of the year and the number of days between
	        // January 1st and the first of the respective month.
	        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	        // Internal: Calculates the number of days between the Unix epoch and the
	        // first day of the given month.
	        var getDay = function (year, month) {
	          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
	        };
	      }

	      // Internal: Determines if a property is a direct property of the given
	      // object. Delegates to the native `Object#hasOwnProperty` method.
	      if (!(isProperty = objectProto.hasOwnProperty)) {
	        isProperty = function (property) {
	          var members = {}, constructor;
	          if ((members.__proto__ = null, members.__proto__ = {
	            // The *proto* property cannot be set multiple times in recent
	            // versions of Firefox and SeaMonkey.
	            "toString": 1
	          }, members).toString != getClass) {
	            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
	            // supports the mutable *proto* property.
	            isProperty = function (property) {
	              // Capture and break the object's prototype chain (see section 8.6.2
	              // of the ES 5.1 spec). The parenthesized expression prevents an
	              // unsafe transformation by the Closure Compiler.
	              var original = this.__proto__, result = property in (this.__proto__ = null, this);
	              // Restore the original prototype chain.
	              this.__proto__ = original;
	              return result;
	            };
	          } else {
	            // Capture a reference to the top-level `Object` constructor.
	            constructor = members.constructor;
	            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
	            // other environments.
	            isProperty = function (property) {
	              var parent = (this.constructor || constructor).prototype;
	              return property in this && !(property in parent && this[property] === parent[property]);
	            };
	          }
	          members = null;
	          return isProperty.call(this, property);
	        };
	      }

	      // Internal: Normalizes the `for...in` iteration algorithm across
	      // environments. Each enumerated key is yielded to a `callback` function.
	      forEach = function (object, callback) {
	        var size = 0, Properties, members, property;

	        // Tests for bugs in the current environment's `for...in` algorithm. The
	        // `valueOf` property inherits the non-enumerable flag from
	        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
	        (Properties = function () {
	          this.valueOf = 0;
	        }).prototype.valueOf = 0;

	        // Iterate over a new instance of the `Properties` class.
	        members = new Properties();
	        for (property in members) {
	          // Ignore all properties inherited from `Object.prototype`.
	          if (isProperty.call(members, property)) {
	            size++;
	          }
	        }
	        Properties = members = null;

	        // Normalize the iteration algorithm.
	        if (!size) {
	          // A list of non-enumerable properties inherited from `Object.prototype`.
	          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
	          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
	          // properties.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, length;
	            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
	            for (property in object) {
	              // Gecko <= 1.0 enumerates the `prototype` property of functions under
	              // certain conditions; IE does not.
	              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for each non-enumerable property.
	            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
	          };
	        } else if (size == 2) {
	          // Safari <= 2.0.4 enumerates shadowed properties twice.
	          forEach = function (object, callback) {
	            // Create a set of iterated properties.
	            var members = {}, isFunction = getClass.call(object) == functionClass, property;
	            for (property in object) {
	              // Store each property name to prevent double enumeration. The
	              // `prototype` property of functions is not enumerated due to cross-
	              // environment inconsistencies.
	              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	          };
	        } else {
	          // No bugs detected; use the standard `for...in` algorithm.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
	            for (property in object) {
	              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for the `constructor` property due to
	            // cross-environment inconsistencies.
	            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
	              callback(property);
	            }
	          };
	        }
	        return forEach(object, callback);
	      };

	      // Public: Serializes a JavaScript `value` as a JSON string. The optional
	      // `filter` argument may specify either a function that alters how object and
	      // array members are serialized, or an array of strings and numbers that
	      // indicates which properties should be serialized. The optional `width`
	      // argument may be either a string or number that specifies the indentation
	      // level of the output.
	      if (!has("json-stringify")) {
	        // Internal: A map of control characters and their escaped equivalents.
	        var Escapes = {
	          92: "\\\\",
	          34: '\\"',
	          8: "\\b",
	          12: "\\f",
	          10: "\\n",
	          13: "\\r",
	          9: "\\t"
	        };

	        // Internal: Converts `value` into a zero-padded string such that its
	        // length is at least equal to `width`. The `width` must be <= 6.
	        var leadingZeroes = "000000";
	        var toPaddedString = function (width, value) {
	          // The `|| 0` expression is necessary to work around a bug in
	          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
	          return (leadingZeroes + (value || 0)).slice(-width);
	        };

	        // Internal: Double-quotes a string `value`, replacing all ASCII control
	        // characters (characters with code unit values between 0 and 31) with
	        // their escaped equivalents. This is an implementation of the
	        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
	        var unicodePrefix = "\\u00";
	        var quote = function (value) {
	          var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
	          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
	          for (; index < length; index++) {
	            var charCode = value.charCodeAt(index);
	            // If the character is a control character, append its Unicode or
	            // shorthand escape sequence; otherwise, append the character as-is.
	            switch (charCode) {
	              case 8: case 9: case 10: case 12: case 13: case 34: case 92:
	                result += Escapes[charCode];
	                break;
	              default:
	                if (charCode < 32) {
	                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
	                  break;
	                }
	                result += useCharIndex ? symbols[index] : value.charAt(index);
	            }
	          }
	          return result + '"';
	        };

	        // Internal: Recursively serializes an object. Implements the
	        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
	        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
	          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
	          try {
	            // Necessary for host object support.
	            value = object[property];
	          } catch (exception) {}
	          if (typeof value == "object" && value) {
	            className = getClass.call(value);
	            if (className == dateClass && !isProperty.call(value, "toJSON")) {
	              if (value > -1 / 0 && value < 1 / 0) {
	                // Dates are serialized according to the `Date#toJSON` method
	                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
	                // for the ISO 8601 date time string format.
	                if (getDay) {
	                  // Manually compute the year, month, date, hours, minutes,
	                  // seconds, and milliseconds if the `getUTC*` methods are
	                  // buggy. Adapted from @Yaffle's `date-shim` project.
	                  date = floor(value / 864e5);
	                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
	                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
	                  date = 1 + date - getDay(year, month);
	                  // The `time` value specifies the time within the day (see ES
	                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
	                  // to compute `A modulo B`, as the `%` operator does not
	                  // correspond to the `modulo` operation for negative numbers.
	                  time = (value % 864e5 + 864e5) % 864e5;
	                  // The hours, minutes, seconds, and milliseconds are obtained by
	                  // decomposing the time within the day. See section 15.9.1.10.
	                  hours = floor(time / 36e5) % 24;
	                  minutes = floor(time / 6e4) % 60;
	                  seconds = floor(time / 1e3) % 60;
	                  milliseconds = time % 1e3;
	                } else {
	                  year = value.getUTCFullYear();
	                  month = value.getUTCMonth();
	                  date = value.getUTCDate();
	                  hours = value.getUTCHours();
	                  minutes = value.getUTCMinutes();
	                  seconds = value.getUTCSeconds();
	                  milliseconds = value.getUTCMilliseconds();
	                }
	                // Serialize extended years correctly.
	                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
	                  "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
	                  // Months, dates, hours, minutes, and seconds should have two
	                  // digits; milliseconds should have three.
	                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
	                  // Milliseconds are optional in ES 5.0, but required in 5.1.
	                  "." + toPaddedString(3, milliseconds) + "Z";
	              } else {
	                value = null;
	              }
	            } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
	              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
	              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
	              // ignores all `toJSON` methods on these objects unless they are
	              // defined directly on an instance.
	              value = value.toJSON(property);
	            }
	          }
	          if (callback) {
	            // If a replacement function was provided, call it to obtain the value
	            // for serialization.
	            value = callback.call(object, property, value);
	          }
	          if (value === null) {
	            return "null";
	          }
	          className = getClass.call(value);
	          if (className == booleanClass) {
	            // Booleans are represented literally.
	            return "" + value;
	          } else if (className == numberClass) {
	            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
	            // `"null"`.
	            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
	          } else if (className == stringClass) {
	            // Strings are double-quoted and escaped.
	            return quote("" + value);
	          }
	          // Recursively serialize objects and arrays.
	          if (typeof value == "object") {
	            // Check for cyclic structures. This is a linear search; performance
	            // is inversely proportional to the number of unique nested objects.
	            for (length = stack.length; length--;) {
	              if (stack[length] === value) {
	                // Cyclic structures cannot be serialized by `JSON.stringify`.
	                throw TypeError();
	              }
	            }
	            // Add the object to the stack of traversed objects.
	            stack.push(value);
	            results = [];
	            // Save the current indentation level and indent one additional level.
	            prefix = indentation;
	            indentation += whitespace;
	            if (className == arrayClass) {
	              // Recursively serialize array elements.
	              for (index = 0, length = value.length; index < length; index++) {
	                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
	                results.push(element === undef ? "null" : element);
	              }
	              result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
	            } else {
	              // Recursively serialize object members. Members are selected from
	              // either a user-specified list of property names, or the object
	              // itself.
	              forEach(properties || value, function (property) {
	                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
	                if (element !== undef) {
	                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
	                  // is not the empty string, let `member` {quote(property) + ":"}
	                  // be the concatenation of `member` and the `space` character."
	                  // The "`space` character" refers to the literal space
	                  // character, not the `space` {width} argument provided to
	                  // `JSON.stringify`.
	                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
	                }
	              });
	              result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
	            }
	            // Remove the object from the traversed object stack.
	            stack.pop();
	            return result;
	          }
	        };

	        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
	        exports.stringify = function (source, filter, width) {
	          var whitespace, callback, properties, className;
	          if (objectTypes[typeof filter] && filter) {
	            if ((className = getClass.call(filter)) == functionClass) {
	              callback = filter;
	            } else if (className == arrayClass) {
	              // Convert the property names array into a makeshift set.
	              properties = {};
	              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
	            }
	          }
	          if (width) {
	            if ((className = getClass.call(width)) == numberClass) {
	              // Convert the `width` to an integer and create a string containing
	              // `width` number of space characters.
	              if ((width -= width % 1) > 0) {
	                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
	              }
	            } else if (className == stringClass) {
	              whitespace = width.length <= 10 ? width : width.slice(0, 10);
	            }
	          }
	          // Opera <= 7.54u2 discards the values associated with empty string keys
	          // (`""`) only if they are used directly within an object member list
	          // (e.g., `!("" in { "": 1})`).
	          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
	        };
	      }

	      // Public: Parses a JSON source string.
	      if (!has("json-parse")) {
	        var fromCharCode = String.fromCharCode;

	        // Internal: A map of escaped control characters and their unescaped
	        // equivalents.
	        var Unescapes = {
	          92: "\\",
	          34: '"',
	          47: "/",
	          98: "\b",
	          116: "\t",
	          110: "\n",
	          102: "\f",
	          114: "\r"
	        };

	        // Internal: Stores the parser state.
	        var Index, Source;

	        // Internal: Resets the parser state and throws a `SyntaxError`.
	        var abort = function () {
	          Index = Source = null;
	          throw SyntaxError();
	        };

	        // Internal: Returns the next token, or `"$"` if the parser has reached
	        // the end of the source string. A token may be a string, number, `null`
	        // literal, or Boolean literal.
	        var lex = function () {
	          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
	          while (Index < length) {
	            charCode = source.charCodeAt(Index);
	            switch (charCode) {
	              case 9: case 10: case 13: case 32:
	                // Skip whitespace tokens, including tabs, carriage returns, line
	                // feeds, and space characters.
	                Index++;
	                break;
	              case 123: case 125: case 91: case 93: case 58: case 44:
	                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
	                // the current position.
	                value = charIndexBuggy ? source.charAt(Index) : source[Index];
	                Index++;
	                return value;
	              case 34:
	                // `"` delimits a JSON string; advance to the next character and
	                // begin parsing the string. String tokens are prefixed with the
	                // sentinel `@` character to distinguish them from punctuators and
	                // end-of-string tokens.
	                for (value = "@", Index++; Index < length;) {
	                  charCode = source.charCodeAt(Index);
	                  if (charCode < 32) {
	                    // Unescaped ASCII control characters (those with a code unit
	                    // less than the space character) are not permitted.
	                    abort();
	                  } else if (charCode == 92) {
	                    // A reverse solidus (`\`) marks the beginning of an escaped
	                    // control character (including `"`, `\`, and `/`) or Unicode
	                    // escape sequence.
	                    charCode = source.charCodeAt(++Index);
	                    switch (charCode) {
	                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
	                        // Revive escaped control characters.
	                        value += Unescapes[charCode];
	                        Index++;
	                        break;
	                      case 117:
	                        // `\u` marks the beginning of a Unicode escape sequence.
	                        // Advance to the first character and validate the
	                        // four-digit code point.
	                        begin = ++Index;
	                        for (position = Index + 4; Index < position; Index++) {
	                          charCode = source.charCodeAt(Index);
	                          // A valid sequence comprises four hexdigits (case-
	                          // insensitive) that form a single hexadecimal value.
	                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
	                            // Invalid Unicode escape sequence.
	                            abort();
	                          }
	                        }
	                        // Revive the escaped character.
	                        value += fromCharCode("0x" + source.slice(begin, Index));
	                        break;
	                      default:
	                        // Invalid escape sequence.
	                        abort();
	                    }
	                  } else {
	                    if (charCode == 34) {
	                      // An unescaped double-quote character marks the end of the
	                      // string.
	                      break;
	                    }
	                    charCode = source.charCodeAt(Index);
	                    begin = Index;
	                    // Optimize for the common case where a string is valid.
	                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
	                      charCode = source.charCodeAt(++Index);
	                    }
	                    // Append the string as-is.
	                    value += source.slice(begin, Index);
	                  }
	                }
	                if (source.charCodeAt(Index) == 34) {
	                  // Advance to the next character and return the revived string.
	                  Index++;
	                  return value;
	                }
	                // Unterminated string.
	                abort();
	              default:
	                // Parse numbers and literals.
	                begin = Index;
	                // Advance past the negative sign, if one is specified.
	                if (charCode == 45) {
	                  isSigned = true;
	                  charCode = source.charCodeAt(++Index);
	                }
	                // Parse an integer or floating-point value.
	                if (charCode >= 48 && charCode <= 57) {
	                  // Leading zeroes are interpreted as octal literals.
	                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
	                    // Illegal octal literal.
	                    abort();
	                  }
	                  isSigned = false;
	                  // Parse the integer component.
	                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
	                  // Floats cannot contain a leading decimal point; however, this
	                  // case is already accounted for by the parser.
	                  if (source.charCodeAt(Index) == 46) {
	                    position = ++Index;
	                    // Parse the decimal component.
	                    for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal trailing decimal.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Parse exponents. The `e` denoting the exponent is
	                  // case-insensitive.
	                  charCode = source.charCodeAt(Index);
	                  if (charCode == 101 || charCode == 69) {
	                    charCode = source.charCodeAt(++Index);
	                    // Skip past the sign following the exponent, if one is
	                    // specified.
	                    if (charCode == 43 || charCode == 45) {
	                      Index++;
	                    }
	                    // Parse the exponential component.
	                    for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal empty exponent.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Coerce the parsed value to a JavaScript number.
	                  return +source.slice(begin, Index);
	                }
	                // A negative sign may only precede numbers.
	                if (isSigned) {
	                  abort();
	                }
	                // `true`, `false`, and `null` literals.
	                if (source.slice(Index, Index + 4) == "true") {
	                  Index += 4;
	                  return true;
	                } else if (source.slice(Index, Index + 5) == "false") {
	                  Index += 5;
	                  return false;
	                } else if (source.slice(Index, Index + 4) == "null") {
	                  Index += 4;
	                  return null;
	                }
	                // Unrecognized token.
	                abort();
	            }
	          }
	          // Return the sentinel `$` character if the parser has reached the end
	          // of the source string.
	          return "$";
	        };

	        // Internal: Parses a JSON `value` token.
	        var get = function (value) {
	          var results, hasMembers;
	          if (value == "$") {
	            // Unexpected end of input.
	            abort();
	          }
	          if (typeof value == "string") {
	            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
	              // Remove the sentinel `@` character.
	              return value.slice(1);
	            }
	            // Parse object and array literals.
	            if (value == "[") {
	              // Parses a JSON array, returning a new JavaScript array.
	              results = [];
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing square bracket marks the end of the array literal.
	                if (value == "]") {
	                  break;
	                }
	                // If the array literal contains elements, the current token
	                // should be a comma separating the previous element from the
	                // next.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "]") {
	                      // Unexpected trailing `,` in array literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each array element.
	                    abort();
	                  }
	                }
	                // Elisions and leading commas are not permitted.
	                if (value == ",") {
	                  abort();
	                }
	                results.push(get(value));
	              }
	              return results;
	            } else if (value == "{") {
	              // Parses a JSON object, returning a new JavaScript object.
	              results = {};
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing curly brace marks the end of the object literal.
	                if (value == "}") {
	                  break;
	                }
	                // If the object literal contains members, the current token
	                // should be a comma separator.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "}") {
	                      // Unexpected trailing `,` in object literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each object member.
	                    abort();
	                  }
	                }
	                // Leading commas are not permitted, object property names must be
	                // double-quoted strings, and a `:` must separate each property
	                // name and value.
	                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
	                  abort();
	                }
	                results[value.slice(1)] = get(lex());
	              }
	              return results;
	            }
	            // Unexpected token encountered.
	            abort();
	          }
	          return value;
	        };

	        // Internal: Updates a traversed object member.
	        var update = function (source, property, callback) {
	          var element = walk(source, property, callback);
	          if (element === undef) {
	            delete source[property];
	          } else {
	            source[property] = element;
	          }
	        };

	        // Internal: Recursively traverses a parsed JSON object, invoking the
	        // `callback` function for each value. This is an implementation of the
	        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
	        var walk = function (source, property, callback) {
	          var value = source[property], length;
	          if (typeof value == "object" && value) {
	            // `forEach` can't be used to traverse an array in Opera <= 8.54
	            // because its `Object#hasOwnProperty` implementation returns `false`
	            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
	            if (getClass.call(value) == arrayClass) {
	              for (length = value.length; length--;) {
	                update(value, length, callback);
	              }
	            } else {
	              forEach(value, function (property) {
	                update(value, property, callback);
	              });
	            }
	          }
	          return callback.call(source, property, value);
	        };

	        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
	        exports.parse = function (source, callback) {
	          var result, value;
	          Index = 0;
	          Source = "" + source;
	          result = get(lex());
	          // If a JSON string contains multiple tokens, it is invalid.
	          if (lex() != "$") {
	            abort();
	          }
	          // Reset the parser state.
	          Index = Source = null;
	          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
	        };
	      }
	    }

	    exports["runInContext"] = runInContext;
	    return exports;
	  }

	  if (freeExports && !isLoader) {
	    // Export for CommonJS environments.
	    runInContext(root, freeExports);
	  } else {
	    // Export for web browsers and JavaScript engines.
	    var nativeJSON = root.JSON,
	        previousJSON = root["JSON3"],
	        isRestored = false;

	    var JSON3 = runInContext(root, (root["JSON3"] = {
	      // Public: Restores the original value of the global `JSON` object and
	      // returns a reference to the `JSON3` object.
	      "noConflict": function () {
	        if (!isRestored) {
	          isRestored = true;
	          root.JSON = nativeJSON;
	          root["JSON3"] = previousJSON;
	          nativeJSON = previousJSON = null;
	        }
	        return JSON3;
	      }
	    }));

	    root.JSON = {
	      "parse": JSON3.parse,
	      "stringify": JSON3.stringify
	    };
	  }

	  // Export for asynchronous module loaders.
	  if (isLoader) {
	    define(function () {
	      return JSON3;
	    });
	  }
	}).call(this);


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module), (function() { return this; }())))

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 13 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};

	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*global Blob,File*/

	/**
	 * Module requirements
	 */

	var isArray = __webpack_require__(15);
	var isBuf = __webpack_require__(16);

	/**
	 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
	 * Anything with blobs or files should be fed through removeBlobs before coming
	 * here.
	 *
	 * @param {Object} packet - socket.io event packet
	 * @return {Object} with deconstructed packet and list of buffers
	 * @api public
	 */

	exports.deconstructPacket = function(packet){
	  var buffers = [];
	  var packetData = packet.data;

	  function _deconstructPacket(data) {
	    if (!data) return data;

	    if (isBuf(data)) {
	      var placeholder = { _placeholder: true, num: buffers.length };
	      buffers.push(data);
	      return placeholder;
	    } else if (isArray(data)) {
	      var newData = new Array(data.length);
	      for (var i = 0; i < data.length; i++) {
	        newData[i] = _deconstructPacket(data[i]);
	      }
	      return newData;
	    } else if ('object' == typeof data && !(data instanceof Date)) {
	      var newData = {};
	      for (var key in data) {
	        newData[key] = _deconstructPacket(data[key]);
	      }
	      return newData;
	    }
	    return data;
	  }

	  var pack = packet;
	  pack.data = _deconstructPacket(packetData);
	  pack.attachments = buffers.length; // number of binary 'attachments'
	  return {packet: pack, buffers: buffers};
	};

	/**
	 * Reconstructs a binary packet from its placeholder packet and buffers
	 *
	 * @param {Object} packet - event packet with placeholders
	 * @param {Array} buffers - binary buffers to put in placeholder positions
	 * @return {Object} reconstructed packet
	 * @api public
	 */

	exports.reconstructPacket = function(packet, buffers) {
	  var curPlaceHolder = 0;

	  function _reconstructPacket(data) {
	    if (data && data._placeholder) {
	      var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
	      return buf;
	    } else if (isArray(data)) {
	      for (var i = 0; i < data.length; i++) {
	        data[i] = _reconstructPacket(data[i]);
	      }
	      return data;
	    } else if (data && 'object' == typeof data) {
	      for (var key in data) {
	        data[key] = _reconstructPacket(data[key]);
	      }
	      return data;
	    }
	    return data;
	  }

	  packet.data = _reconstructPacket(packet.data);
	  packet.attachments = undefined; // no longer useful
	  return packet;
	};

	/**
	 * Asynchronously removes Blobs or Files from data via
	 * FileReader's readAsArrayBuffer method. Used before encoding
	 * data as msgpack. Calls callback with the blobless data.
	 *
	 * @param {Object} data
	 * @param {Function} callback
	 * @api private
	 */

	exports.removeBlobs = function(data, callback) {
	  function _removeBlobs(obj, curKey, containingObject) {
	    if (!obj) return obj;

	    // convert any blob
	    if ((global.Blob && obj instanceof Blob) ||
	        (global.File && obj instanceof File)) {
	      pendingBlobs++;

	      // async filereader
	      var fileReader = new FileReader();
	      fileReader.onload = function() { // this.result == arraybuffer
	        if (containingObject) {
	          containingObject[curKey] = this.result;
	        }
	        else {
	          bloblessData = this.result;
	        }

	        // if nothing pending its callback time
	        if(! --pendingBlobs) {
	          callback(bloblessData);
	        }
	      };

	      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
	    } else if (isArray(obj)) { // handle array
	      for (var i = 0; i < obj.length; i++) {
	        _removeBlobs(obj[i], i, obj);
	      }
	    } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
	      for (var key in obj) {
	        _removeBlobs(obj[key], key, obj);
	      }
	    }
	  }

	  var pendingBlobs = 0;
	  var bloblessData = data;
	  _removeBlobs(bloblessData);
	  if (!pendingBlobs) {
	    callback(bloblessData);
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 16 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	module.exports = isBuf;

	/**
	 * Returns true if obj is a buffer or an arraybuffer.
	 *
	 * @api private
	 */

	function isBuf(obj) {
	  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Module dependencies.
	 */

	var eio = __webpack_require__(18);
	var Socket = __webpack_require__(44);
	var Emitter = __webpack_require__(35);
	var parser = __webpack_require__(7);
	var on = __webpack_require__(46);
	var bind = __webpack_require__(47);
	var debug = __webpack_require__(3)('socket.io-client:manager');
	var indexOf = __webpack_require__(42);
	var Backoff = __webpack_require__(48);

	/**
	 * IE6+ hasOwnProperty
	 */

	var has = Object.prototype.hasOwnProperty;

	/**
	 * Module exports
	 */

	module.exports = Manager;

	/**
	 * `Manager` constructor.
	 *
	 * @param {String} engine instance or engine uri/opts
	 * @param {Object} options
	 * @api public
	 */

	function Manager(uri, opts) {
	  if (!(this instanceof Manager)) return new Manager(uri, opts);
	  if (uri && 'object' === (typeof uri === 'undefined' ? 'undefined' : _typeof(uri))) {
	    opts = uri;
	    uri = undefined;
	  }
	  opts = opts || {};

	  opts.path = opts.path || '/socket.io';
	  this.nsps = {};
	  this.subs = [];
	  this.opts = opts;
	  this.reconnection(opts.reconnection !== false);
	  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
	  this.reconnectionDelay(opts.reconnectionDelay || 1000);
	  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
	  this.randomizationFactor(opts.randomizationFactor || 0.5);
	  this.backoff = new Backoff({
	    min: this.reconnectionDelay(),
	    max: this.reconnectionDelayMax(),
	    jitter: this.randomizationFactor()
	  });
	  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
	  this.readyState = 'closed';
	  this.uri = uri;
	  this.connecting = [];
	  this.lastPing = null;
	  this.encoding = false;
	  this.packetBuffer = [];
	  this.encoder = new parser.Encoder();
	  this.decoder = new parser.Decoder();
	  this.autoConnect = opts.autoConnect !== false;
	  if (this.autoConnect) this.open();
	}

	/**
	 * Propagate given event to sockets and emit on `this`
	 *
	 * @api private
	 */

	Manager.prototype.emitAll = function () {
	  this.emit.apply(this, arguments);
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
	    }
	  }
	};

	/**
	 * Update `socket.id` of all sockets
	 *
	 * @api private
	 */

	Manager.prototype.updateSocketIds = function () {
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].id = this.engine.id;
	    }
	  }
	};

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Manager.prototype);

	/**
	 * Sets the `reconnection` config.
	 *
	 * @param {Boolean} true/false if it should automatically reconnect
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnection = function (v) {
	  if (!arguments.length) return this._reconnection;
	  this._reconnection = !!v;
	  return this;
	};

	/**
	 * Sets the reconnection attempts config.
	 *
	 * @param {Number} max reconnection attempts before giving up
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionAttempts = function (v) {
	  if (!arguments.length) return this._reconnectionAttempts;
	  this._reconnectionAttempts = v;
	  return this;
	};

	/**
	 * Sets the delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionDelay = function (v) {
	  if (!arguments.length) return this._reconnectionDelay;
	  this._reconnectionDelay = v;
	  this.backoff && this.backoff.setMin(v);
	  return this;
	};

	Manager.prototype.randomizationFactor = function (v) {
	  if (!arguments.length) return this._randomizationFactor;
	  this._randomizationFactor = v;
	  this.backoff && this.backoff.setJitter(v);
	  return this;
	};

	/**
	 * Sets the maximum delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionDelayMax = function (v) {
	  if (!arguments.length) return this._reconnectionDelayMax;
	  this._reconnectionDelayMax = v;
	  this.backoff && this.backoff.setMax(v);
	  return this;
	};

	/**
	 * Sets the connection timeout. `false` to disable
	 *
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.timeout = function (v) {
	  if (!arguments.length) return this._timeout;
	  this._timeout = v;
	  return this;
	};

	/**
	 * Starts trying to reconnect if reconnection is enabled and we have not
	 * started reconnecting yet
	 *
	 * @api private
	 */

	Manager.prototype.maybeReconnectOnOpen = function () {
	  // Only try to reconnect if it's the first time we're connecting
	  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
	    // keeps reconnection from firing twice for the same reconnection loop
	    this.reconnect();
	  }
	};

	/**
	 * Sets the current transport `socket`.
	 *
	 * @param {Function} optional, callback
	 * @return {Manager} self
	 * @api public
	 */

	Manager.prototype.open = Manager.prototype.connect = function (fn, opts) {
	  debug('readyState %s', this.readyState);
	  if (~this.readyState.indexOf('open')) return this;

	  debug('opening %s', this.uri);
	  this.engine = eio(this.uri, this.opts);
	  var socket = this.engine;
	  var self = this;
	  this.readyState = 'opening';
	  this.skipReconnect = false;

	  // emit `open`
	  var openSub = on(socket, 'open', function () {
	    self.onopen();
	    fn && fn();
	  });

	  // emit `connect_error`
	  var errorSub = on(socket, 'error', function (data) {
	    debug('connect_error');
	    self.cleanup();
	    self.readyState = 'closed';
	    self.emitAll('connect_error', data);
	    if (fn) {
	      var err = new Error('Connection error');
	      err.data = data;
	      fn(err);
	    } else {
	      // Only do this if there is no fn to handle the error
	      self.maybeReconnectOnOpen();
	    }
	  });

	  // emit `connect_timeout`
	  if (false !== this._timeout) {
	    var timeout = this._timeout;
	    debug('connect attempt will timeout after %d', timeout);

	    // set timer
	    var timer = setTimeout(function () {
	      debug('connect attempt timed out after %d', timeout);
	      openSub.destroy();
	      socket.close();
	      socket.emit('error', 'timeout');
	      self.emitAll('connect_timeout', timeout);
	    }, timeout);

	    this.subs.push({
	      destroy: function destroy() {
	        clearTimeout(timer);
	      }
	    });
	  }

	  this.subs.push(openSub);
	  this.subs.push(errorSub);

	  return this;
	};

	/**
	 * Called upon transport open.
	 *
	 * @api private
	 */

	Manager.prototype.onopen = function () {
	  debug('open');

	  // clear old subs
	  this.cleanup();

	  // mark as open
	  this.readyState = 'open';
	  this.emit('open');

	  // add new subs
	  var socket = this.engine;
	  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
	  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
	  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
	  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
	  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
	  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
	};

	/**
	 * Called upon a ping.
	 *
	 * @api private
	 */

	Manager.prototype.onping = function () {
	  this.lastPing = new Date();
	  this.emitAll('ping');
	};

	/**
	 * Called upon a packet.
	 *
	 * @api private
	 */

	Manager.prototype.onpong = function () {
	  this.emitAll('pong', new Date() - this.lastPing);
	};

	/**
	 * Called with data.
	 *
	 * @api private
	 */

	Manager.prototype.ondata = function (data) {
	  this.decoder.add(data);
	};

	/**
	 * Called when parser fully decodes a packet.
	 *
	 * @api private
	 */

	Manager.prototype.ondecoded = function (packet) {
	  this.emit('packet', packet);
	};

	/**
	 * Called upon socket error.
	 *
	 * @api private
	 */

	Manager.prototype.onerror = function (err) {
	  debug('error', err);
	  this.emitAll('error', err);
	};

	/**
	 * Creates a new socket for the given `nsp`.
	 *
	 * @return {Socket}
	 * @api public
	 */

	Manager.prototype.socket = function (nsp, opts) {
	  var socket = this.nsps[nsp];
	  if (!socket) {
	    socket = new Socket(this, nsp, opts);
	    this.nsps[nsp] = socket;
	    var self = this;
	    socket.on('connecting', onConnecting);
	    socket.on('connect', function () {
	      socket.id = self.engine.id;
	    });

	    if (this.autoConnect) {
	      // manually call here since connecting evnet is fired before listening
	      onConnecting();
	    }
	  }

	  function onConnecting() {
	    if (!~indexOf(self.connecting, socket)) {
	      self.connecting.push(socket);
	    }
	  }

	  return socket;
	};

	/**
	 * Called upon a socket close.
	 *
	 * @param {Socket} socket
	 */

	Manager.prototype.destroy = function (socket) {
	  var index = indexOf(this.connecting, socket);
	  if (~index) this.connecting.splice(index, 1);
	  if (this.connecting.length) return;

	  this.close();
	};

	/**
	 * Writes a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Manager.prototype.packet = function (packet) {
	  debug('writing packet %j', packet);
	  var self = this;
	  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

	  if (!self.encoding) {
	    // encode, then write to engine with result
	    self.encoding = true;
	    this.encoder.encode(packet, function (encodedPackets) {
	      for (var i = 0; i < encodedPackets.length; i++) {
	        self.engine.write(encodedPackets[i], packet.options);
	      }
	      self.encoding = false;
	      self.processPacketQueue();
	    });
	  } else {
	    // add packet to the queue
	    self.packetBuffer.push(packet);
	  }
	};

	/**
	 * If packet buffer is non-empty, begins encoding the
	 * next packet in line.
	 *
	 * @api private
	 */

	Manager.prototype.processPacketQueue = function () {
	  if (this.packetBuffer.length > 0 && !this.encoding) {
	    var pack = this.packetBuffer.shift();
	    this.packet(pack);
	  }
	};

	/**
	 * Clean up transport subscriptions and packet buffer.
	 *
	 * @api private
	 */

	Manager.prototype.cleanup = function () {
	  debug('cleanup');

	  var subsLength = this.subs.length;
	  for (var i = 0; i < subsLength; i++) {
	    var sub = this.subs.shift();
	    sub.destroy();
	  }

	  this.packetBuffer = [];
	  this.encoding = false;
	  this.lastPing = null;

	  this.decoder.destroy();
	};

	/**
	 * Close the current socket.
	 *
	 * @api private
	 */

	Manager.prototype.close = Manager.prototype.disconnect = function () {
	  debug('disconnect');
	  this.skipReconnect = true;
	  this.reconnecting = false;
	  if ('opening' === this.readyState) {
	    // `onclose` will not fire because
	    // an open event never happened
	    this.cleanup();
	  }
	  this.backoff.reset();
	  this.readyState = 'closed';
	  if (this.engine) this.engine.close();
	};

	/**
	 * Called upon engine close.
	 *
	 * @api private
	 */

	Manager.prototype.onclose = function (reason) {
	  debug('onclose');

	  this.cleanup();
	  this.backoff.reset();
	  this.readyState = 'closed';
	  this.emit('close', reason);

	  if (this._reconnection && !this.skipReconnect) {
	    this.reconnect();
	  }
	};

	/**
	 * Attempt a reconnection.
	 *
	 * @api private
	 */

	Manager.prototype.reconnect = function () {
	  if (this.reconnecting || this.skipReconnect) return this;

	  var self = this;

	  if (this.backoff.attempts >= this._reconnectionAttempts) {
	    debug('reconnect failed');
	    this.backoff.reset();
	    this.emitAll('reconnect_failed');
	    this.reconnecting = false;
	  } else {
	    var delay = this.backoff.duration();
	    debug('will wait %dms before reconnect attempt', delay);

	    this.reconnecting = true;
	    var timer = setTimeout(function () {
	      if (self.skipReconnect) return;

	      debug('attempting reconnect');
	      self.emitAll('reconnect_attempt', self.backoff.attempts);
	      self.emitAll('reconnecting', self.backoff.attempts);

	      // check again for the case socket closed in above events
	      if (self.skipReconnect) return;

	      self.open(function (err) {
	        if (err) {
	          debug('reconnect attempt error');
	          self.reconnecting = false;
	          self.reconnect();
	          self.emitAll('reconnect_error', err.data);
	        } else {
	          debug('reconnect success');
	          self.onreconnect();
	        }
	      });
	    }, delay);

	    this.subs.push({
	      destroy: function destroy() {
	        clearTimeout(timer);
	      }
	    });
	  }
	};

	/**
	 * Called upon successful reconnect.
	 *
	 * @api private
	 */

	Manager.prototype.onreconnect = function () {
	  var attempt = this.backoff.attempts;
	  this.reconnecting = false;
	  this.backoff.reset();
	  this.updateSocketIds();
	  this.emitAll('reconnect', attempt);
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(19);


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(20);

	/**
	 * Exports parser
	 *
	 * @api public
	 *
	 */
	module.exports.parser = __webpack_require__(27);


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var transports = __webpack_require__(21);
	var Emitter = __webpack_require__(35);
	var debug = __webpack_require__(3)('engine.io-client:socket');
	var index = __webpack_require__(42);
	var parser = __webpack_require__(27);
	var parseuri = __webpack_require__(2);
	var parsejson = __webpack_require__(43);
	var parseqs = __webpack_require__(36);

	/**
	 * Module exports.
	 */

	module.exports = Socket;

	/**
	 * Socket constructor.
	 *
	 * @param {String|Object} uri or options
	 * @param {Object} options
	 * @api public
	 */

	function Socket (uri, opts) {
	  if (!(this instanceof Socket)) return new Socket(uri, opts);

	  opts = opts || {};

	  if (uri && 'object' === typeof uri) {
	    opts = uri;
	    uri = null;
	  }

	  if (uri) {
	    uri = parseuri(uri);
	    opts.hostname = uri.host;
	    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
	    opts.port = uri.port;
	    if (uri.query) opts.query = uri.query;
	  } else if (opts.host) {
	    opts.hostname = parseuri(opts.host).host;
	  }

	  this.secure = null != opts.secure ? opts.secure
	    : (global.location && 'https:' === location.protocol);

	  if (opts.hostname && !opts.port) {
	    // if no port is specified manually, use the protocol default
	    opts.port = this.secure ? '443' : '80';
	  }

	  this.agent = opts.agent || false;
	  this.hostname = opts.hostname ||
	    (global.location ? location.hostname : 'localhost');
	  this.port = opts.port || (global.location && location.port
	      ? location.port
	      : (this.secure ? 443 : 80));
	  this.query = opts.query || {};
	  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
	  this.upgrade = false !== opts.upgrade;
	  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
	  this.forceJSONP = !!opts.forceJSONP;
	  this.jsonp = false !== opts.jsonp;
	  this.forceBase64 = !!opts.forceBase64;
	  this.enablesXDR = !!opts.enablesXDR;
	  this.timestampParam = opts.timestampParam || 't';
	  this.timestampRequests = opts.timestampRequests;
	  this.transports = opts.transports || ['polling', 'websocket'];
	  this.readyState = '';
	  this.writeBuffer = [];
	  this.prevBufferLen = 0;
	  this.policyPort = opts.policyPort || 843;
	  this.rememberUpgrade = opts.rememberUpgrade || false;
	  this.binaryType = null;
	  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
	  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

	  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
	  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
	    this.perMessageDeflate.threshold = 1024;
	  }

	  // SSL options for Node.js client
	  this.pfx = opts.pfx || null;
	  this.key = opts.key || null;
	  this.passphrase = opts.passphrase || null;
	  this.cert = opts.cert || null;
	  this.ca = opts.ca || null;
	  this.ciphers = opts.ciphers || null;
	  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? null : opts.rejectUnauthorized;
	  this.forceNode = !!opts.forceNode;

	  // other options for Node.js client
	  var freeGlobal = typeof global === 'object' && global;
	  if (freeGlobal.global === freeGlobal) {
	    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
	      this.extraHeaders = opts.extraHeaders;
	    }

	    if (opts.localAddress) {
	      this.localAddress = opts.localAddress;
	    }
	  }

	  // set on handshake
	  this.id = null;
	  this.upgrades = null;
	  this.pingInterval = null;
	  this.pingTimeout = null;

	  // set on heartbeat
	  this.pingIntervalTimer = null;
	  this.pingTimeoutTimer = null;

	  this.open();
	}

	Socket.priorWebsocketSuccess = false;

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Socket.prototype);

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	Socket.protocol = parser.protocol; // this is an int

	/**
	 * Expose deps for legacy compatibility
	 * and standalone browser access.
	 */

	Socket.Socket = Socket;
	Socket.Transport = __webpack_require__(26);
	Socket.transports = __webpack_require__(21);
	Socket.parser = __webpack_require__(27);

	/**
	 * Creates transport of the given type.
	 *
	 * @param {String} transport name
	 * @return {Transport}
	 * @api private
	 */

	Socket.prototype.createTransport = function (name) {
	  debug('creating transport "%s"', name);
	  var query = clone(this.query);

	  // append engine.io protocol identifier
	  query.EIO = parser.protocol;

	  // transport name
	  query.transport = name;

	  // session id if we already have one
	  if (this.id) query.sid = this.id;

	  var transport = new transports[name]({
	    agent: this.agent,
	    hostname: this.hostname,
	    port: this.port,
	    secure: this.secure,
	    path: this.path,
	    query: query,
	    forceJSONP: this.forceJSONP,
	    jsonp: this.jsonp,
	    forceBase64: this.forceBase64,
	    enablesXDR: this.enablesXDR,
	    timestampRequests: this.timestampRequests,
	    timestampParam: this.timestampParam,
	    policyPort: this.policyPort,
	    socket: this,
	    pfx: this.pfx,
	    key: this.key,
	    passphrase: this.passphrase,
	    cert: this.cert,
	    ca: this.ca,
	    ciphers: this.ciphers,
	    rejectUnauthorized: this.rejectUnauthorized,
	    perMessageDeflate: this.perMessageDeflate,
	    extraHeaders: this.extraHeaders,
	    forceNode: this.forceNode,
	    localAddress: this.localAddress
	  });

	  return transport;
	};

	function clone (obj) {
	  var o = {};
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      o[i] = obj[i];
	    }
	  }
	  return o;
	}

	/**
	 * Initializes transport to use and starts probe.
	 *
	 * @api private
	 */
	Socket.prototype.open = function () {
	  var transport;
	  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
	    transport = 'websocket';
	  } else if (0 === this.transports.length) {
	    // Emit error on next tick so it can be listened to
	    var self = this;
	    setTimeout(function () {
	      self.emit('error', 'No transports available');
	    }, 0);
	    return;
	  } else {
	    transport = this.transports[0];
	  }
	  this.readyState = 'opening';

	  // Retry with the next transport if the transport is disabled (jsonp: false)
	  try {
	    transport = this.createTransport(transport);
	  } catch (e) {
	    this.transports.shift();
	    this.open();
	    return;
	  }

	  transport.open();
	  this.setTransport(transport);
	};

	/**
	 * Sets the current transport. Disables the existing one (if any).
	 *
	 * @api private
	 */

	Socket.prototype.setTransport = function (transport) {
	  debug('setting transport %s', transport.name);
	  var self = this;

	  if (this.transport) {
	    debug('clearing existing transport %s', this.transport.name);
	    this.transport.removeAllListeners();
	  }

	  // set up transport
	  this.transport = transport;

	  // set up transport listeners
	  transport
	  .on('drain', function () {
	    self.onDrain();
	  })
	  .on('packet', function (packet) {
	    self.onPacket(packet);
	  })
	  .on('error', function (e) {
	    self.onError(e);
	  })
	  .on('close', function () {
	    self.onClose('transport close');
	  });
	};

	/**
	 * Probes a transport.
	 *
	 * @param {String} transport name
	 * @api private
	 */

	Socket.prototype.probe = function (name) {
	  debug('probing transport "%s"', name);
	  var transport = this.createTransport(name, { probe: 1 });
	  var failed = false;
	  var self = this;

	  Socket.priorWebsocketSuccess = false;

	  function onTransportOpen () {
	    if (self.onlyBinaryUpgrades) {
	      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
	      failed = failed || upgradeLosesBinary;
	    }
	    if (failed) return;

	    debug('probe transport "%s" opened', name);
	    transport.send([{ type: 'ping', data: 'probe' }]);
	    transport.once('packet', function (msg) {
	      if (failed) return;
	      if ('pong' === msg.type && 'probe' === msg.data) {
	        debug('probe transport "%s" pong', name);
	        self.upgrading = true;
	        self.emit('upgrading', transport);
	        if (!transport) return;
	        Socket.priorWebsocketSuccess = 'websocket' === transport.name;

	        debug('pausing current transport "%s"', self.transport.name);
	        self.transport.pause(function () {
	          if (failed) return;
	          if ('closed' === self.readyState) return;
	          debug('changing transport and sending upgrade packet');

	          cleanup();

	          self.setTransport(transport);
	          transport.send([{ type: 'upgrade' }]);
	          self.emit('upgrade', transport);
	          transport = null;
	          self.upgrading = false;
	          self.flush();
	        });
	      } else {
	        debug('probe transport "%s" failed', name);
	        var err = new Error('probe error');
	        err.transport = transport.name;
	        self.emit('upgradeError', err);
	      }
	    });
	  }

	  function freezeTransport () {
	    if (failed) return;

	    // Any callback called by transport should be ignored since now
	    failed = true;

	    cleanup();

	    transport.close();
	    transport = null;
	  }

	  // Handle any error that happens while probing
	  function onerror (err) {
	    var error = new Error('probe error: ' + err);
	    error.transport = transport.name;

	    freezeTransport();

	    debug('probe transport "%s" failed because of error: %s', name, err);

	    self.emit('upgradeError', error);
	  }

	  function onTransportClose () {
	    onerror('transport closed');
	  }

	  // When the socket is closed while we're probing
	  function onclose () {
	    onerror('socket closed');
	  }

	  // When the socket is upgraded while we're probing
	  function onupgrade (to) {
	    if (transport && to.name !== transport.name) {
	      debug('"%s" works - aborting "%s"', to.name, transport.name);
	      freezeTransport();
	    }
	  }

	  // Remove all listeners on the transport and on self
	  function cleanup () {
	    transport.removeListener('open', onTransportOpen);
	    transport.removeListener('error', onerror);
	    transport.removeListener('close', onTransportClose);
	    self.removeListener('close', onclose);
	    self.removeListener('upgrading', onupgrade);
	  }

	  transport.once('open', onTransportOpen);
	  transport.once('error', onerror);
	  transport.once('close', onTransportClose);

	  this.once('close', onclose);
	  this.once('upgrading', onupgrade);

	  transport.open();
	};

	/**
	 * Called when connection is deemed open.
	 *
	 * @api public
	 */

	Socket.prototype.onOpen = function () {
	  debug('socket open');
	  this.readyState = 'open';
	  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
	  this.emit('open');
	  this.flush();

	  // we check for `readyState` in case an `open`
	  // listener already closed the socket
	  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
	    debug('starting upgrade probes');
	    for (var i = 0, l = this.upgrades.length; i < l; i++) {
	      this.probe(this.upgrades[i]);
	    }
	  }
	};

	/**
	 * Handles a packet.
	 *
	 * @api private
	 */

	Socket.prototype.onPacket = function (packet) {
	  if ('opening' === this.readyState || 'open' === this.readyState ||
	      'closing' === this.readyState) {
	    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

	    this.emit('packet', packet);

	    // Socket is live - any packet counts
	    this.emit('heartbeat');

	    switch (packet.type) {
	      case 'open':
	        this.onHandshake(parsejson(packet.data));
	        break;

	      case 'pong':
	        this.setPing();
	        this.emit('pong');
	        break;

	      case 'error':
	        var err = new Error('server error');
	        err.code = packet.data;
	        this.onError(err);
	        break;

	      case 'message':
	        this.emit('data', packet.data);
	        this.emit('message', packet.data);
	        break;
	    }
	  } else {
	    debug('packet received with socket readyState "%s"', this.readyState);
	  }
	};

	/**
	 * Called upon handshake completion.
	 *
	 * @param {Object} handshake obj
	 * @api private
	 */

	Socket.prototype.onHandshake = function (data) {
	  this.emit('handshake', data);
	  this.id = data.sid;
	  this.transport.query.sid = data.sid;
	  this.upgrades = this.filterUpgrades(data.upgrades);
	  this.pingInterval = data.pingInterval;
	  this.pingTimeout = data.pingTimeout;
	  this.onOpen();
	  // In case open handler closes socket
	  if ('closed' === this.readyState) return;
	  this.setPing();

	  // Prolong liveness of socket on heartbeat
	  this.removeListener('heartbeat', this.onHeartbeat);
	  this.on('heartbeat', this.onHeartbeat);
	};

	/**
	 * Resets ping timeout.
	 *
	 * @api private
	 */

	Socket.prototype.onHeartbeat = function (timeout) {
	  clearTimeout(this.pingTimeoutTimer);
	  var self = this;
	  self.pingTimeoutTimer = setTimeout(function () {
	    if ('closed' === self.readyState) return;
	    self.onClose('ping timeout');
	  }, timeout || (self.pingInterval + self.pingTimeout));
	};

	/**
	 * Pings server every `this.pingInterval` and expects response
	 * within `this.pingTimeout` or closes connection.
	 *
	 * @api private
	 */

	Socket.prototype.setPing = function () {
	  var self = this;
	  clearTimeout(self.pingIntervalTimer);
	  self.pingIntervalTimer = setTimeout(function () {
	    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
	    self.ping();
	    self.onHeartbeat(self.pingTimeout);
	  }, self.pingInterval);
	};

	/**
	* Sends a ping packet.
	*
	* @api private
	*/

	Socket.prototype.ping = function () {
	  var self = this;
	  this.sendPacket('ping', function () {
	    self.emit('ping');
	  });
	};

	/**
	 * Called on `drain` event
	 *
	 * @api private
	 */

	Socket.prototype.onDrain = function () {
	  this.writeBuffer.splice(0, this.prevBufferLen);

	  // setting prevBufferLen = 0 is very important
	  // for example, when upgrading, upgrade packet is sent over,
	  // and a nonzero prevBufferLen could cause problems on `drain`
	  this.prevBufferLen = 0;

	  if (0 === this.writeBuffer.length) {
	    this.emit('drain');
	  } else {
	    this.flush();
	  }
	};

	/**
	 * Flush write buffers.
	 *
	 * @api private
	 */

	Socket.prototype.flush = function () {
	  if ('closed' !== this.readyState && this.transport.writable &&
	    !this.upgrading && this.writeBuffer.length) {
	    debug('flushing %d packets in socket', this.writeBuffer.length);
	    this.transport.send(this.writeBuffer);
	    // keep track of current length of writeBuffer
	    // splice writeBuffer and callbackBuffer on `drain`
	    this.prevBufferLen = this.writeBuffer.length;
	    this.emit('flush');
	  }
	};

	/**
	 * Sends a message.
	 *
	 * @param {String} message.
	 * @param {Function} callback function.
	 * @param {Object} options.
	 * @return {Socket} for chaining.
	 * @api public
	 */

	Socket.prototype.write =
	Socket.prototype.send = function (msg, options, fn) {
	  this.sendPacket('message', msg, options, fn);
	  return this;
	};

	/**
	 * Sends a packet.
	 *
	 * @param {String} packet type.
	 * @param {String} data.
	 * @param {Object} options.
	 * @param {Function} callback function.
	 * @api private
	 */

	Socket.prototype.sendPacket = function (type, data, options, fn) {
	  if ('function' === typeof data) {
	    fn = data;
	    data = undefined;
	  }

	  if ('function' === typeof options) {
	    fn = options;
	    options = null;
	  }

	  if ('closing' === this.readyState || 'closed' === this.readyState) {
	    return;
	  }

	  options = options || {};
	  options.compress = false !== options.compress;

	  var packet = {
	    type: type,
	    data: data,
	    options: options
	  };
	  this.emit('packetCreate', packet);
	  this.writeBuffer.push(packet);
	  if (fn) this.once('flush', fn);
	  this.flush();
	};

	/**
	 * Closes the connection.
	 *
	 * @api private
	 */

	Socket.prototype.close = function () {
	  if ('opening' === this.readyState || 'open' === this.readyState) {
	    this.readyState = 'closing';

	    var self = this;

	    if (this.writeBuffer.length) {
	      this.once('drain', function () {
	        if (this.upgrading) {
	          waitForUpgrade();
	        } else {
	          close();
	        }
	      });
	    } else if (this.upgrading) {
	      waitForUpgrade();
	    } else {
	      close();
	    }
	  }

	  function close () {
	    self.onClose('forced close');
	    debug('socket closing - telling transport to close');
	    self.transport.close();
	  }

	  function cleanupAndClose () {
	    self.removeListener('upgrade', cleanupAndClose);
	    self.removeListener('upgradeError', cleanupAndClose);
	    close();
	  }

	  function waitForUpgrade () {
	    // wait for upgrade to finish since we can't send packets while pausing a transport
	    self.once('upgrade', cleanupAndClose);
	    self.once('upgradeError', cleanupAndClose);
	  }

	  return this;
	};

	/**
	 * Called upon transport error
	 *
	 * @api private
	 */

	Socket.prototype.onError = function (err) {
	  debug('socket error %j', err);
	  Socket.priorWebsocketSuccess = false;
	  this.emit('error', err);
	  this.onClose('transport error', err);
	};

	/**
	 * Called upon transport close.
	 *
	 * @api private
	 */

	Socket.prototype.onClose = function (reason, desc) {
	  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
	    debug('socket close with reason: "%s"', reason);
	    var self = this;

	    // clear timers
	    clearTimeout(this.pingIntervalTimer);
	    clearTimeout(this.pingTimeoutTimer);

	    // stop event from firing again for transport
	    this.transport.removeAllListeners('close');

	    // ensure transport won't stay open
	    this.transport.close();

	    // ignore further transport communication
	    this.transport.removeAllListeners();

	    // set ready state
	    this.readyState = 'closed';

	    // clear session id
	    this.id = null;

	    // emit close event
	    this.emit('close', reason, desc);

	    // clean buffers after, so users can still
	    // grab the buffers on `close` event
	    self.writeBuffer = [];
	    self.prevBufferLen = 0;
	  }
	};

	/**
	 * Filters upgrades, returning only those matching client transports.
	 *
	 * @param {Array} server upgrades
	 * @api private
	 *
	 */

	Socket.prototype.filterUpgrades = function (upgrades) {
	  var filteredUpgrades = [];
	  for (var i = 0, j = upgrades.length; i < j; i++) {
	    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
	  }
	  return filteredUpgrades;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies
	 */

	var XMLHttpRequest = __webpack_require__(22);
	var XHR = __webpack_require__(24);
	var JSONP = __webpack_require__(39);
	var websocket = __webpack_require__(40);

	/**
	 * Export transports.
	 */

	exports.polling = polling;
	exports.websocket = websocket;

	/**
	 * Polling transport polymorphic constructor.
	 * Decides on xhr vs jsonp based on feature detection.
	 *
	 * @api private
	 */

	function polling (opts) {
	  var xhr;
	  var xd = false;
	  var xs = false;
	  var jsonp = false !== opts.jsonp;

	  if (global.location) {
	    var isSSL = 'https:' === location.protocol;
	    var port = location.port;

	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }

	    xd = opts.hostname !== location.hostname || port !== opts.port;
	    xs = opts.secure !== isSSL;
	  }

	  opts.xdomain = xd;
	  opts.xscheme = xs;
	  xhr = new XMLHttpRequest(opts);

	  if ('open' in xhr && !opts.forceJSONP) {
	    return new XHR(opts);
	  } else {
	    if (!jsonp) throw new Error('JSONP disabled');
	    return new JSONP(opts);
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// browser shim for xmlhttprequest module

	var hasCORS = __webpack_require__(23);

	module.exports = function (opts) {
	  var xdomain = opts.xdomain;

	  // scheme must be same when usign XDomainRequest
	  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
	  var xscheme = opts.xscheme;

	  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
	  // https://github.com/Automattic/engine.io-client/pull/217
	  var enablesXDR = opts.enablesXDR;

	  // XMLHttpRequest can be disabled on IE
	  try {
	    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
	      return new XMLHttpRequest();
	    }
	  } catch (e) { }

	  // Use XDomainRequest for IE8 if enablesXDR is true
	  // because loading bar keeps flashing when using jsonp-polling
	  // https://github.com/yujiosaka/socke.io-ie8-loading-example
	  try {
	    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
	      return new XDomainRequest();
	    }
	  } catch (e) { }

	  if (!xdomain) {
	    try {
	      return new global[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
	    } catch (e) { }
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 23 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 *
	 * Logic borrowed from Modernizr:
	 *
	 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
	 */

	try {
	  module.exports = typeof XMLHttpRequest !== 'undefined' &&
	    'withCredentials' in new XMLHttpRequest();
	} catch (err) {
	  // if XMLHttp support is disabled in IE then it will throw
	  // when trying to create
	  module.exports = false;
	}


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module requirements.
	 */

	var XMLHttpRequest = __webpack_require__(22);
	var Polling = __webpack_require__(25);
	var Emitter = __webpack_require__(35);
	var inherit = __webpack_require__(37);
	var debug = __webpack_require__(3)('engine.io-client:polling-xhr');

	/**
	 * Module exports.
	 */

	module.exports = XHR;
	module.exports.Request = Request;

	/**
	 * Empty function
	 */

	function empty () {}

	/**
	 * XHR Polling constructor.
	 *
	 * @param {Object} opts
	 * @api public
	 */

	function XHR (opts) {
	  Polling.call(this, opts);
	  this.requestTimeout = opts.requestTimeout;

	  if (global.location) {
	    var isSSL = 'https:' === location.protocol;
	    var port = location.port;

	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }

	    this.xd = opts.hostname !== global.location.hostname ||
	      port !== opts.port;
	    this.xs = opts.secure !== isSSL;
	  } else {
	    this.extraHeaders = opts.extraHeaders;
	  }
	}

	/**
	 * Inherits from Polling.
	 */

	inherit(XHR, Polling);

	/**
	 * XHR supports binary
	 */

	XHR.prototype.supportsBinary = true;

	/**
	 * Creates a request.
	 *
	 * @param {String} method
	 * @api private
	 */

	XHR.prototype.request = function (opts) {
	  opts = opts || {};
	  opts.uri = this.uri();
	  opts.xd = this.xd;
	  opts.xs = this.xs;
	  opts.agent = this.agent || false;
	  opts.supportsBinary = this.supportsBinary;
	  opts.enablesXDR = this.enablesXDR;

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	  opts.requestTimeout = this.requestTimeout;

	  // other options for Node.js client
	  opts.extraHeaders = this.extraHeaders;

	  return new Request(opts);
	};

	/**
	 * Sends data.
	 *
	 * @param {String} data to send.
	 * @param {Function} called upon flush.
	 * @api private
	 */

	XHR.prototype.doWrite = function (data, fn) {
	  var isBinary = typeof data !== 'string' && data !== undefined;
	  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
	  var self = this;
	  req.on('success', fn);
	  req.on('error', function (err) {
	    self.onError('xhr post error', err);
	  });
	  this.sendXhr = req;
	};

	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */

	XHR.prototype.doPoll = function () {
	  debug('xhr poll');
	  var req = this.request();
	  var self = this;
	  req.on('data', function (data) {
	    self.onData(data);
	  });
	  req.on('error', function (err) {
	    self.onError('xhr poll error', err);
	  });
	  this.pollXhr = req;
	};

	/**
	 * Request constructor
	 *
	 * @param {Object} options
	 * @api public
	 */

	function Request (opts) {
	  this.method = opts.method || 'GET';
	  this.uri = opts.uri;
	  this.xd = !!opts.xd;
	  this.xs = !!opts.xs;
	  this.async = false !== opts.async;
	  this.data = undefined !== opts.data ? opts.data : null;
	  this.agent = opts.agent;
	  this.isBinary = opts.isBinary;
	  this.supportsBinary = opts.supportsBinary;
	  this.enablesXDR = opts.enablesXDR;
	  this.requestTimeout = opts.requestTimeout;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;

	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;

	  this.create();
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Request.prototype);

	/**
	 * Creates the XHR object and sends the request.
	 *
	 * @api private
	 */

	Request.prototype.create = function () {
	  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;

	  var xhr = this.xhr = new XMLHttpRequest(opts);
	  var self = this;

	  try {
	    debug('xhr open %s: %s', this.method, this.uri);
	    xhr.open(this.method, this.uri, this.async);
	    try {
	      if (this.extraHeaders) {
	        xhr.setDisableHeaderCheck(true);
	        for (var i in this.extraHeaders) {
	          if (this.extraHeaders.hasOwnProperty(i)) {
	            xhr.setRequestHeader(i, this.extraHeaders[i]);
	          }
	        }
	      }
	    } catch (e) {}
	    if (this.supportsBinary) {
	      // This has to be done after open because Firefox is stupid
	      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
	      xhr.responseType = 'arraybuffer';
	    }

	    if ('POST' === this.method) {
	      try {
	        if (this.isBinary) {
	          xhr.setRequestHeader('Content-type', 'application/octet-stream');
	        } else {
	          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
	        }
	      } catch (e) {}
	    }

	    try {
	      xhr.setRequestHeader('Accept', '*/*');
	    } catch (e) {}

	    // ie6 check
	    if ('withCredentials' in xhr) {
	      xhr.withCredentials = true;
	    }

	    if (this.requestTimeout) {
	      xhr.timeout = this.requestTimeout;
	    }

	    if (this.hasXDR()) {
	      xhr.onload = function () {
	        self.onLoad();
	      };
	      xhr.onerror = function () {
	        self.onError(xhr.responseText);
	      };
	    } else {
	      xhr.onreadystatechange = function () {
	        if (4 !== xhr.readyState) return;
	        if (200 === xhr.status || 1223 === xhr.status) {
	          self.onLoad();
	        } else {
	          // make sure the `error` event handler that's user-set
	          // does not throw in the same tick and gets caught here
	          setTimeout(function () {
	            self.onError(xhr.status);
	          }, 0);
	        }
	      };
	    }

	    debug('xhr data %s', this.data);
	    xhr.send(this.data);
	  } catch (e) {
	    // Need to defer since .create() is called directly fhrom the constructor
	    // and thus the 'error' event can only be only bound *after* this exception
	    // occurs.  Therefore, also, we cannot throw here at all.
	    setTimeout(function () {
	      self.onError(e);
	    }, 0);
	    return;
	  }

	  if (global.document) {
	    this.index = Request.requestsCount++;
	    Request.requests[this.index] = this;
	  }
	};

	/**
	 * Called upon successful response.
	 *
	 * @api private
	 */

	Request.prototype.onSuccess = function () {
	  this.emit('success');
	  this.cleanup();
	};

	/**
	 * Called if we have data.
	 *
	 * @api private
	 */

	Request.prototype.onData = function (data) {
	  this.emit('data', data);
	  this.onSuccess();
	};

	/**
	 * Called upon error.
	 *
	 * @api private
	 */

	Request.prototype.onError = function (err) {
	  this.emit('error', err);
	  this.cleanup(true);
	};

	/**
	 * Cleans up house.
	 *
	 * @api private
	 */

	Request.prototype.cleanup = function (fromError) {
	  if ('undefined' === typeof this.xhr || null === this.xhr) {
	    return;
	  }
	  // xmlhttprequest
	  if (this.hasXDR()) {
	    this.xhr.onload = this.xhr.onerror = empty;
	  } else {
	    this.xhr.onreadystatechange = empty;
	  }

	  if (fromError) {
	    try {
	      this.xhr.abort();
	    } catch (e) {}
	  }

	  if (global.document) {
	    delete Request.requests[this.index];
	  }

	  this.xhr = null;
	};

	/**
	 * Called upon load.
	 *
	 * @api private
	 */

	Request.prototype.onLoad = function () {
	  var data;
	  try {
	    var contentType;
	    try {
	      contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
	    } catch (e) {}
	    if (contentType === 'application/octet-stream') {
	      data = this.xhr.response || this.xhr.responseText;
	    } else {
	      if (!this.supportsBinary) {
	        data = this.xhr.responseText;
	      } else {
	        try {
	          data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
	        } catch (e) {
	          var ui8Arr = new Uint8Array(this.xhr.response);
	          var dataArray = [];
	          for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
	            dataArray.push(ui8Arr[idx]);
	          }

	          data = String.fromCharCode.apply(null, dataArray);
	        }
	      }
	    }
	  } catch (e) {
	    this.onError(e);
	  }
	  if (null != data) {
	    this.onData(data);
	  }
	};

	/**
	 * Check if it has XDomainRequest.
	 *
	 * @api private
	 */

	Request.prototype.hasXDR = function () {
	  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
	};

	/**
	 * Aborts the request.
	 *
	 * @api public
	 */

	Request.prototype.abort = function () {
	  this.cleanup();
	};

	/**
	 * Aborts pending requests when unloading the window. This is needed to prevent
	 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
	 * emitted.
	 */

	Request.requestsCount = 0;
	Request.requests = {};

	if (global.document) {
	  if (global.attachEvent) {
	    global.attachEvent('onunload', unloadHandler);
	  } else if (global.addEventListener) {
	    global.addEventListener('beforeunload', unloadHandler, false);
	  }
	}

	function unloadHandler () {
	  for (var i in Request.requests) {
	    if (Request.requests.hasOwnProperty(i)) {
	      Request.requests[i].abort();
	    }
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(26);
	var parseqs = __webpack_require__(36);
	var parser = __webpack_require__(27);
	var inherit = __webpack_require__(37);
	var yeast = __webpack_require__(38);
	var debug = __webpack_require__(3)('engine.io-client:polling');

	/**
	 * Module exports.
	 */

	module.exports = Polling;

	/**
	 * Is XHR2 supported?
	 */

	var hasXHR2 = (function () {
	  var XMLHttpRequest = __webpack_require__(22);
	  var xhr = new XMLHttpRequest({ xdomain: false });
	  return null != xhr.responseType;
	})();

	/**
	 * Polling interface.
	 *
	 * @param {Object} opts
	 * @api private
	 */

	function Polling (opts) {
	  var forceBase64 = (opts && opts.forceBase64);
	  if (!hasXHR2 || forceBase64) {
	    this.supportsBinary = false;
	  }
	  Transport.call(this, opts);
	}

	/**
	 * Inherits from Transport.
	 */

	inherit(Polling, Transport);

	/**
	 * Transport name.
	 */

	Polling.prototype.name = 'polling';

	/**
	 * Opens the socket (triggers polling). We write a PING message to determine
	 * when the transport is open.
	 *
	 * @api private
	 */

	Polling.prototype.doOpen = function () {
	  this.poll();
	};

	/**
	 * Pauses polling.
	 *
	 * @param {Function} callback upon buffers are flushed and transport is paused
	 * @api private
	 */

	Polling.prototype.pause = function (onPause) {
	  var self = this;

	  this.readyState = 'pausing';

	  function pause () {
	    debug('paused');
	    self.readyState = 'paused';
	    onPause();
	  }

	  if (this.polling || !this.writable) {
	    var total = 0;

	    if (this.polling) {
	      debug('we are currently polling - waiting to pause');
	      total++;
	      this.once('pollComplete', function () {
	        debug('pre-pause polling complete');
	        --total || pause();
	      });
	    }

	    if (!this.writable) {
	      debug('we are currently writing - waiting to pause');
	      total++;
	      this.once('drain', function () {
	        debug('pre-pause writing complete');
	        --total || pause();
	      });
	    }
	  } else {
	    pause();
	  }
	};

	/**
	 * Starts polling cycle.
	 *
	 * @api public
	 */

	Polling.prototype.poll = function () {
	  debug('polling');
	  this.polling = true;
	  this.doPoll();
	  this.emit('poll');
	};

	/**
	 * Overloads onData to detect payloads.
	 *
	 * @api private
	 */

	Polling.prototype.onData = function (data) {
	  var self = this;
	  debug('polling got data %s', data);
	  var callback = function (packet, index, total) {
	    // if its the first message we consider the transport open
	    if ('opening' === self.readyState) {
	      self.onOpen();
	    }

	    // if its a close packet, we close the ongoing requests
	    if ('close' === packet.type) {
	      self.onClose();
	      return false;
	    }

	    // otherwise bypass onData and handle the message
	    self.onPacket(packet);
	  };

	  // decode payload
	  parser.decodePayload(data, this.socket.binaryType, callback);

	  // if an event did not trigger closing
	  if ('closed' !== this.readyState) {
	    // if we got data we're not polling
	    this.polling = false;
	    this.emit('pollComplete');

	    if ('open' === this.readyState) {
	      this.poll();
	    } else {
	      debug('ignoring poll - transport state "%s"', this.readyState);
	    }
	  }
	};

	/**
	 * For polling, send a close packet.
	 *
	 * @api private
	 */

	Polling.prototype.doClose = function () {
	  var self = this;

	  function close () {
	    debug('writing close packet');
	    self.write([{ type: 'close' }]);
	  }

	  if ('open' === this.readyState) {
	    debug('transport open - closing');
	    close();
	  } else {
	    // in case we're trying to close while
	    // handshaking is in progress (GH-164)
	    debug('transport not open - deferring close');
	    this.once('open', close);
	  }
	};

	/**
	 * Writes a packets payload.
	 *
	 * @param {Array} data packets
	 * @param {Function} drain callback
	 * @api private
	 */

	Polling.prototype.write = function (packets) {
	  var self = this;
	  this.writable = false;
	  var callbackfn = function () {
	    self.writable = true;
	    self.emit('drain');
	  };

	  parser.encodePayload(packets, this.supportsBinary, function (data) {
	    self.doWrite(data, callbackfn);
	  });
	};

	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */

	Polling.prototype.uri = function () {
	  var query = this.query || {};
	  var schema = this.secure ? 'https' : 'http';
	  var port = '';

	  // cache busting is forced
	  if (false !== this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }

	  if (!this.supportsBinary && !query.sid) {
	    query.b64 = 1;
	  }

	  query = parseqs.encode(query);

	  // avoid port if default for schema
	  if (this.port && (('https' === schema && Number(this.port) !== 443) ||
	     ('http' === schema && Number(this.port) !== 80))) {
	    port = ':' + this.port;
	  }

	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }

	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var parser = __webpack_require__(27);
	var Emitter = __webpack_require__(35);

	/**
	 * Module exports.
	 */

	module.exports = Transport;

	/**
	 * Transport abstract constructor.
	 *
	 * @param {Object} options.
	 * @api private
	 */

	function Transport (opts) {
	  this.path = opts.path;
	  this.hostname = opts.hostname;
	  this.port = opts.port;
	  this.secure = opts.secure;
	  this.query = opts.query;
	  this.timestampParam = opts.timestampParam;
	  this.timestampRequests = opts.timestampRequests;
	  this.readyState = '';
	  this.agent = opts.agent || false;
	  this.socket = opts.socket;
	  this.enablesXDR = opts.enablesXDR;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	  this.forceNode = opts.forceNode;

	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	  this.localAddress = opts.localAddress;
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Transport.prototype);

	/**
	 * Emits an error.
	 *
	 * @param {String} str
	 * @return {Transport} for chaining
	 * @api public
	 */

	Transport.prototype.onError = function (msg, desc) {
	  var err = new Error(msg);
	  err.type = 'TransportError';
	  err.description = desc;
	  this.emit('error', err);
	  return this;
	};

	/**
	 * Opens the transport.
	 *
	 * @api public
	 */

	Transport.prototype.open = function () {
	  if ('closed' === this.readyState || '' === this.readyState) {
	    this.readyState = 'opening';
	    this.doOpen();
	  }

	  return this;
	};

	/**
	 * Closes the transport.
	 *
	 * @api private
	 */

	Transport.prototype.close = function () {
	  if ('opening' === this.readyState || 'open' === this.readyState) {
	    this.doClose();
	    this.onClose();
	  }

	  return this;
	};

	/**
	 * Sends multiple packets.
	 *
	 * @param {Array} packets
	 * @api private
	 */

	Transport.prototype.send = function (packets) {
	  if ('open' === this.readyState) {
	    this.write(packets);
	  } else {
	    throw new Error('Transport not open');
	  }
	};

	/**
	 * Called upon open
	 *
	 * @api private
	 */

	Transport.prototype.onOpen = function () {
	  this.readyState = 'open';
	  this.writable = true;
	  this.emit('open');
	};

	/**
	 * Called with data.
	 *
	 * @param {String} data
	 * @api private
	 */

	Transport.prototype.onData = function (data) {
	  var packet = parser.decodePacket(data, this.socket.binaryType);
	  this.onPacket(packet);
	};

	/**
	 * Called with a decoded packet.
	 */

	Transport.prototype.onPacket = function (packet) {
	  this.emit('packet', packet);
	};

	/**
	 * Called upon close.
	 *
	 * @api private
	 */

	Transport.prototype.onClose = function () {
	  this.readyState = 'closed';
	  this.emit('close');
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var keys = __webpack_require__(28);
	var hasBinary = __webpack_require__(29);
	var sliceBuffer = __webpack_require__(30);
	var after = __webpack_require__(31);
	var utf8 = __webpack_require__(32);

	var base64encoder;
	if (global && global.ArrayBuffer) {
	  base64encoder = __webpack_require__(33);
	}

	/**
	 * Check if we are running an android browser. That requires us to use
	 * ArrayBuffer with polling transports...
	 *
	 * http://ghinda.net/jpeg-blob-ajax-android/
	 */

	var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

	/**
	 * Check if we are running in PhantomJS.
	 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
	 * https://github.com/ariya/phantomjs/issues/11395
	 * @type boolean
	 */
	var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);

	/**
	 * When true, avoids using Blobs to encode payloads.
	 * @type boolean
	 */
	var dontSendBlobs = isAndroid || isPhantomJS;

	/**
	 * Current protocol version.
	 */

	exports.protocol = 3;

	/**
	 * Packet types.
	 */

	var packets = exports.packets = {
	    open:     0    // non-ws
	  , close:    1    // non-ws
	  , ping:     2
	  , pong:     3
	  , message:  4
	  , upgrade:  5
	  , noop:     6
	};

	var packetslist = keys(packets);

	/**
	 * Premade error packet.
	 */

	var err = { type: 'error', data: 'parser error' };

	/**
	 * Create a blob api even for blob builder when vendor prefixes exist
	 */

	var Blob = __webpack_require__(34);

	/**
	 * Encodes a packet.
	 *
	 *     <packet type id> [ <data> ]
	 *
	 * Example:
	 *
	 *     5hello world
	 *     3
	 *     4
	 *
	 * Binary is encoded in an identical principle
	 *
	 * @api private
	 */

	exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
	  if ('function' == typeof supportsBinary) {
	    callback = supportsBinary;
	    supportsBinary = false;
	  }

	  if ('function' == typeof utf8encode) {
	    callback = utf8encode;
	    utf8encode = null;
	  }

	  var data = (packet.data === undefined)
	    ? undefined
	    : packet.data.buffer || packet.data;

	  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
	    return encodeArrayBuffer(packet, supportsBinary, callback);
	  } else if (Blob && data instanceof global.Blob) {
	    return encodeBlob(packet, supportsBinary, callback);
	  }

	  // might be an object with { base64: true, data: dataAsBase64String }
	  if (data && data.base64) {
	    return encodeBase64Object(packet, callback);
	  }

	  // Sending data as a utf-8 string
	  var encoded = packets[packet.type];

	  // data fragment is optional
	  if (undefined !== packet.data) {
	    encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
	  }

	  return callback('' + encoded);

	};

	function encodeBase64Object(packet, callback) {
	  // packet data is an object { base64: true, data: dataAsBase64String }
	  var message = 'b' + exports.packets[packet.type] + packet.data.data;
	  return callback(message);
	}

	/**
	 * Encode packet helpers for binary types
	 */

	function encodeArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  var data = packet.data;
	  var contentArray = new Uint8Array(data);
	  var resultBuffer = new Uint8Array(1 + data.byteLength);

	  resultBuffer[0] = packets[packet.type];
	  for (var i = 0; i < contentArray.length; i++) {
	    resultBuffer[i+1] = contentArray[i];
	  }

	  return callback(resultBuffer.buffer);
	}

	function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  var fr = new FileReader();
	  fr.onload = function() {
	    packet.data = fr.result;
	    exports.encodePacket(packet, supportsBinary, true, callback);
	  };
	  return fr.readAsArrayBuffer(packet.data);
	}

	function encodeBlob(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  if (dontSendBlobs) {
	    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
	  }

	  var length = new Uint8Array(1);
	  length[0] = packets[packet.type];
	  var blob = new Blob([length.buffer, packet.data]);

	  return callback(blob);
	}

	/**
	 * Encodes a packet with binary data in a base64 string
	 *
	 * @param {Object} packet, has `type` and `data`
	 * @return {String} base64 encoded message
	 */

	exports.encodeBase64Packet = function(packet, callback) {
	  var message = 'b' + exports.packets[packet.type];
	  if (Blob && packet.data instanceof global.Blob) {
	    var fr = new FileReader();
	    fr.onload = function() {
	      var b64 = fr.result.split(',')[1];
	      callback(message + b64);
	    };
	    return fr.readAsDataURL(packet.data);
	  }

	  var b64data;
	  try {
	    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
	  } catch (e) {
	    // iPhone Safari doesn't let you apply with typed arrays
	    var typed = new Uint8Array(packet.data);
	    var basic = new Array(typed.length);
	    for (var i = 0; i < typed.length; i++) {
	      basic[i] = typed[i];
	    }
	    b64data = String.fromCharCode.apply(null, basic);
	  }
	  message += global.btoa(b64data);
	  return callback(message);
	};

	/**
	 * Decodes a packet. Changes format to Blob if requested.
	 *
	 * @return {Object} with `type` and `data` (if any)
	 * @api private
	 */

	exports.decodePacket = function (data, binaryType, utf8decode) {
	  if (data === undefined) {
	    return err;
	  }
	  // String data
	  if (typeof data == 'string') {
	    if (data.charAt(0) == 'b') {
	      return exports.decodeBase64Packet(data.substr(1), binaryType);
	    }

	    if (utf8decode) {
	      data = tryDecode(data);
	      if (data === false) {
	        return err;
	      }
	    }
	    var type = data.charAt(0);

	    if (Number(type) != type || !packetslist[type]) {
	      return err;
	    }

	    if (data.length > 1) {
	      return { type: packetslist[type], data: data.substring(1) };
	    } else {
	      return { type: packetslist[type] };
	    }
	  }

	  var asArray = new Uint8Array(data);
	  var type = asArray[0];
	  var rest = sliceBuffer(data, 1);
	  if (Blob && binaryType === 'blob') {
	    rest = new Blob([rest]);
	  }
	  return { type: packetslist[type], data: rest };
	};

	function tryDecode(data) {
	  try {
	    data = utf8.decode(data);
	  } catch (e) {
	    return false;
	  }
	  return data;
	}

	/**
	 * Decodes a packet encoded in a base64 string
	 *
	 * @param {String} base64 encoded message
	 * @return {Object} with `type` and `data` (if any)
	 */

	exports.decodeBase64Packet = function(msg, binaryType) {
	  var type = packetslist[msg.charAt(0)];
	  if (!base64encoder) {
	    return { type: type, data: { base64: true, data: msg.substr(1) } };
	  }

	  var data = base64encoder.decode(msg.substr(1));

	  if (binaryType === 'blob' && Blob) {
	    data = new Blob([data]);
	  }

	  return { type: type, data: data };
	};

	/**
	 * Encodes multiple messages (payload).
	 *
	 *     <length>:data
	 *
	 * Example:
	 *
	 *     11:hello world2:hi
	 *
	 * If any contents are binary, they will be encoded as base64 strings. Base64
	 * encoded strings are marked with a b before the length specifier
	 *
	 * @param {Array} packets
	 * @api private
	 */

	exports.encodePayload = function (packets, supportsBinary, callback) {
	  if (typeof supportsBinary == 'function') {
	    callback = supportsBinary;
	    supportsBinary = null;
	  }

	  var isBinary = hasBinary(packets);

	  if (supportsBinary && isBinary) {
	    if (Blob && !dontSendBlobs) {
	      return exports.encodePayloadAsBlob(packets, callback);
	    }

	    return exports.encodePayloadAsArrayBuffer(packets, callback);
	  }

	  if (!packets.length) {
	    return callback('0:');
	  }

	  function setLengthHeader(message) {
	    return message.length + ':' + message;
	  }

	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
	      doneCallback(null, setLengthHeader(message));
	    });
	  }

	  map(packets, encodeOne, function(err, results) {
	    return callback(results.join(''));
	  });
	};

	/**
	 * Async array map using after
	 */

	function map(ary, each, done) {
	  var result = new Array(ary.length);
	  var next = after(ary.length, done);

	  var eachWithIndex = function(i, el, cb) {
	    each(el, function(error, msg) {
	      result[i] = msg;
	      cb(error, result);
	    });
	  };

	  for (var i = 0; i < ary.length; i++) {
	    eachWithIndex(i, ary[i], next);
	  }
	}

	/*
	 * Decodes data when a payload is maybe expected. Possible binary contents are
	 * decoded from their base64 representation
	 *
	 * @param {String} data, callback method
	 * @api public
	 */

	exports.decodePayload = function (data, binaryType, callback) {
	  if (typeof data != 'string') {
	    return exports.decodePayloadAsBinary(data, binaryType, callback);
	  }

	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }

	  var packet;
	  if (data == '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }

	  var length = ''
	    , n, msg;

	  for (var i = 0, l = data.length; i < l; i++) {
	    var chr = data.charAt(i);

	    if (':' != chr) {
	      length += chr;
	    } else {
	      if ('' == length || (length != (n = Number(length)))) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }

	      msg = data.substr(i + 1, n);

	      if (length != msg.length) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }

	      if (msg.length) {
	        packet = exports.decodePacket(msg, binaryType, true);

	        if (err.type == packet.type && err.data == packet.data) {
	          // parser error in individual packet - ignoring payload
	          return callback(err, 0, 1);
	        }

	        var ret = callback(packet, i + n, l);
	        if (false === ret) return;
	      }

	      // advance cursor
	      i += n;
	      length = '';
	    }
	  }

	  if (length != '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }

	};

	/**
	 * Encodes multiple messages (payload) as binary.
	 *
	 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
	 * 255><data>
	 *
	 * Example:
	 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
	 *
	 * @param {Array} packets
	 * @return {ArrayBuffer} encoded payload
	 * @api private
	 */

	exports.encodePayloadAsArrayBuffer = function(packets, callback) {
	  if (!packets.length) {
	    return callback(new ArrayBuffer(0));
	  }

	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(data) {
	      return doneCallback(null, data);
	    });
	  }

	  map(packets, encodeOne, function(err, encodedPackets) {
	    var totalLength = encodedPackets.reduce(function(acc, p) {
	      var len;
	      if (typeof p === 'string'){
	        len = p.length;
	      } else {
	        len = p.byteLength;
	      }
	      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
	    }, 0);

	    var resultArray = new Uint8Array(totalLength);

	    var bufferIndex = 0;
	    encodedPackets.forEach(function(p) {
	      var isString = typeof p === 'string';
	      var ab = p;
	      if (isString) {
	        var view = new Uint8Array(p.length);
	        for (var i = 0; i < p.length; i++) {
	          view[i] = p.charCodeAt(i);
	        }
	        ab = view.buffer;
	      }

	      if (isString) { // not true binary
	        resultArray[bufferIndex++] = 0;
	      } else { // true binary
	        resultArray[bufferIndex++] = 1;
	      }

	      var lenStr = ab.byteLength.toString();
	      for (var i = 0; i < lenStr.length; i++) {
	        resultArray[bufferIndex++] = parseInt(lenStr[i]);
	      }
	      resultArray[bufferIndex++] = 255;

	      var view = new Uint8Array(ab);
	      for (var i = 0; i < view.length; i++) {
	        resultArray[bufferIndex++] = view[i];
	      }
	    });

	    return callback(resultArray.buffer);
	  });
	};

	/**
	 * Encode as Blob
	 */

	exports.encodePayloadAsBlob = function(packets, callback) {
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(encoded) {
	      var binaryIdentifier = new Uint8Array(1);
	      binaryIdentifier[0] = 1;
	      if (typeof encoded === 'string') {
	        var view = new Uint8Array(encoded.length);
	        for (var i = 0; i < encoded.length; i++) {
	          view[i] = encoded.charCodeAt(i);
	        }
	        encoded = view.buffer;
	        binaryIdentifier[0] = 0;
	      }

	      var len = (encoded instanceof ArrayBuffer)
	        ? encoded.byteLength
	        : encoded.size;

	      var lenStr = len.toString();
	      var lengthAry = new Uint8Array(lenStr.length + 1);
	      for (var i = 0; i < lenStr.length; i++) {
	        lengthAry[i] = parseInt(lenStr[i]);
	      }
	      lengthAry[lenStr.length] = 255;

	      if (Blob) {
	        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
	        doneCallback(null, blob);
	      }
	    });
	  }

	  map(packets, encodeOne, function(err, results) {
	    return callback(new Blob(results));
	  });
	};

	/*
	 * Decodes data when a payload is maybe expected. Strings are decoded by
	 * interpreting each byte as a key code for entries marked to start with 0. See
	 * description of encodePayloadAsBinary
	 *
	 * @param {ArrayBuffer} data, callback method
	 * @api public
	 */

	exports.decodePayloadAsBinary = function (data, binaryType, callback) {
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }

	  var bufferTail = data;
	  var buffers = [];

	  var numberTooLong = false;
	  while (bufferTail.byteLength > 0) {
	    var tailArray = new Uint8Array(bufferTail);
	    var isString = tailArray[0] === 0;
	    var msgLength = '';

	    for (var i = 1; ; i++) {
	      if (tailArray[i] == 255) break;

	      if (msgLength.length > 310) {
	        numberTooLong = true;
	        break;
	      }

	      msgLength += tailArray[i];
	    }

	    if(numberTooLong) return callback(err, 0, 1);

	    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
	    msgLength = parseInt(msgLength);

	    var msg = sliceBuffer(bufferTail, 0, msgLength);
	    if (isString) {
	      try {
	        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
	      } catch (e) {
	        // iPhone Safari doesn't let you apply to typed arrays
	        var typed = new Uint8Array(msg);
	        msg = '';
	        for (var i = 0; i < typed.length; i++) {
	          msg += String.fromCharCode(typed[i]);
	        }
	      }
	    }

	    buffers.push(msg);
	    bufferTail = sliceBuffer(bufferTail, msgLength);
	  }

	  var total = buffers.length;
	  buffers.forEach(function(buffer, i) {
	    callback(exports.decodePacket(buffer, binaryType, true), i, total);
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 28 */
/***/ function(module, exports) {

	
	/**
	 * Gets the keys for an object.
	 *
	 * @return {Array} keys
	 * @api private
	 */

	module.exports = Object.keys || function keys (obj){
	  var arr = [];
	  var has = Object.prototype.hasOwnProperty;

	  for (var i in obj) {
	    if (has.call(obj, i)) {
	      arr.push(i);
	    }
	  }
	  return arr;
	};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */

	var isArray = __webpack_require__(15);

	/**
	 * Module exports.
	 */

	module.exports = hasBinary;

	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */

	function hasBinary(data) {

	  function _hasBinary(obj) {
	    if (!obj) return false;

	    if ( (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
	         (global.Blob && obj instanceof Blob) ||
	         (global.File && obj instanceof File)
	        ) {
	      return true;
	    }

	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	          if (_hasBinary(obj[i])) {
	              return true;
	          }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      // see: https://github.com/Automattic/has-binary/pull/4
	      if (obj.toJSON && 'function' == typeof obj.toJSON) {
	        obj = obj.toJSON();
	      }

	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }

	    return false;
	  }

	  return _hasBinary(data);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * An abstraction for slicing an arraybuffer even when
	 * ArrayBuffer.prototype.slice is not supported
	 *
	 * @api public
	 */

	module.exports = function(arraybuffer, start, end) {
	  var bytes = arraybuffer.byteLength;
	  start = start || 0;
	  end = end || bytes;

	  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

	  if (start < 0) { start += bytes; }
	  if (end < 0) { end += bytes; }
	  if (end > bytes) { end = bytes; }

	  if (start >= bytes || start >= end || bytes === 0) {
	    return new ArrayBuffer(0);
	  }

	  var abv = new Uint8Array(arraybuffer);
	  var result = new Uint8Array(end - start);
	  for (var i = start, ii = 0; i < end; i++, ii++) {
	    result[ii] = abv[i];
	  }
	  return result.buffer;
	};


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = after

	function after(count, callback, err_cb) {
	    var bail = false
	    err_cb = err_cb || noop
	    proxy.count = count

	    return (count === 0) ? callback() : proxy

	    function proxy(err, result) {
	        if (proxy.count <= 0) {
	            throw new Error('after called too many times')
	        }
	        --proxy.count

	        // after first error, rest are passed to err_cb
	        if (err) {
	            bail = true
	            callback(err)
	            // future error callbacks will go to error handler
	            callback = err_cb
	        } else if (proxy.count === 0 && !bail) {
	            callback(null, result)
	        }
	    }
	}

	function noop() {}


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/wtf8 v1.0.0 by @mathias */
	;(function(root) {

		// Detect free variables `exports`
		var freeExports = typeof exports == 'object' && exports;

		// Detect free variable `module`
		var freeModule = typeof module == 'object' && module &&
			module.exports == freeExports && module;

		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}

		/*--------------------------------------------------------------------------*/

		var stringFromCharCode = String.fromCharCode;

		// Taken from https://mths.be/punycode
		function ucs2decode(string) {
			var output = [];
			var counter = 0;
			var length = string.length;
			var value;
			var extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		// Taken from https://mths.be/punycode
		function ucs2encode(array) {
			var length = array.length;
			var index = -1;
			var value;
			var output = '';
			while (++index < length) {
				value = array[index];
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
			}
			return output;
		}

		/*--------------------------------------------------------------------------*/

		function createByte(codePoint, shift) {
			return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
		}

		function encodeCodePoint(codePoint) {
			if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
				return stringFromCharCode(codePoint);
			}
			var symbol = '';
			if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
				symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
			}
			else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
				symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
				symbol += createByte(codePoint, 6);
			}
			else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
				symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
				symbol += createByte(codePoint, 12);
				symbol += createByte(codePoint, 6);
			}
			symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
			return symbol;
		}

		function wtf8encode(string) {
			var codePoints = ucs2decode(string);
			var length = codePoints.length;
			var index = -1;
			var codePoint;
			var byteString = '';
			while (++index < length) {
				codePoint = codePoints[index];
				byteString += encodeCodePoint(codePoint);
			}
			return byteString;
		}

		/*--------------------------------------------------------------------------*/

		function readContinuationByte() {
			if (byteIndex >= byteCount) {
				throw Error('Invalid byte index');
			}

			var continuationByte = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			if ((continuationByte & 0xC0) == 0x80) {
				return continuationByte & 0x3F;
			}

			// If we end up here, it’s not a continuation byte.
			throw Error('Invalid continuation byte');
		}

		function decodeSymbol() {
			var byte1;
			var byte2;
			var byte3;
			var byte4;
			var codePoint;

			if (byteIndex > byteCount) {
				throw Error('Invalid byte index');
			}

			if (byteIndex == byteCount) {
				return false;
			}

			// Read the first byte.
			byte1 = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			// 1-byte sequence (no continuation bytes)
			if ((byte1 & 0x80) == 0) {
				return byte1;
			}

			// 2-byte sequence
			if ((byte1 & 0xE0) == 0xC0) {
				var byte2 = readContinuationByte();
				codePoint = ((byte1 & 0x1F) << 6) | byte2;
				if (codePoint >= 0x80) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 3-byte sequence (may include unpaired surrogates)
			if ((byte1 & 0xF0) == 0xE0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
				if (codePoint >= 0x0800) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 4-byte sequence
			if ((byte1 & 0xF8) == 0xF0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				byte4 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
					(byte3 << 0x06) | byte4;
				if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
					return codePoint;
				}
			}

			throw Error('Invalid WTF-8 detected');
		}

		var byteArray;
		var byteCount;
		var byteIndex;
		function wtf8decode(byteString) {
			byteArray = ucs2decode(byteString);
			byteCount = byteArray.length;
			byteIndex = 0;
			var codePoints = [];
			var tmp;
			while ((tmp = decodeSymbol()) !== false) {
				codePoints.push(tmp);
			}
			return ucs2encode(codePoints);
		}

		/*--------------------------------------------------------------------------*/

		var wtf8 = {
			'version': '1.0.0',
			'encode': wtf8encode,
			'decode': wtf8decode
		};

		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return wtf8;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}	else if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = wtf8;
			} else { // in Narwhal or RingoJS v0.7.0-
				var object = {};
				var hasOwnProperty = object.hasOwnProperty;
				for (var key in wtf8) {
					hasOwnProperty.call(wtf8, key) && (freeExports[key] = wtf8[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.wtf8 = wtf8;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module), (function() { return this; }())))

/***/ },
/* 33 */
/***/ function(module, exports) {

	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */
	(function(){
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

	  // Use a lookup table to find the index.
	  var lookup = new Uint8Array(256);
	  for (var i = 0; i < chars.length; i++) {
	    lookup[chars.charCodeAt(i)] = i;
	  }

	  exports.encode = function(arraybuffer) {
	    var bytes = new Uint8Array(arraybuffer),
	    i, len = bytes.length, base64 = "";

	    for (i = 0; i < len; i+=3) {
	      base64 += chars[bytes[i] >> 2];
	      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
	      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
	      base64 += chars[bytes[i + 2] & 63];
	    }

	    if ((len % 3) === 2) {
	      base64 = base64.substring(0, base64.length - 1) + "=";
	    } else if (len % 3 === 1) {
	      base64 = base64.substring(0, base64.length - 2) + "==";
	    }

	    return base64;
	  };

	  exports.decode =  function(base64) {
	    var bufferLength = base64.length * 0.75,
	    len = base64.length, i, p = 0,
	    encoded1, encoded2, encoded3, encoded4;

	    if (base64[base64.length - 1] === "=") {
	      bufferLength--;
	      if (base64[base64.length - 2] === "=") {
	        bufferLength--;
	      }
	    }

	    var arraybuffer = new ArrayBuffer(bufferLength),
	    bytes = new Uint8Array(arraybuffer);

	    for (i = 0; i < len; i+=4) {
	      encoded1 = lookup[base64.charCodeAt(i)];
	      encoded2 = lookup[base64.charCodeAt(i+1)];
	      encoded3 = lookup[base64.charCodeAt(i+2)];
	      encoded4 = lookup[base64.charCodeAt(i+3)];

	      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
	      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
	      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
	    }

	    return arraybuffer;
	  };
	})();


/***/ },
/* 34 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Create a blob builder even when vendor prefixes exist
	 */

	var BlobBuilder = global.BlobBuilder
	  || global.WebKitBlobBuilder
	  || global.MSBlobBuilder
	  || global.MozBlobBuilder;

	/**
	 * Check if Blob constructor is supported
	 */

	var blobSupported = (function() {
	  try {
	    var a = new Blob(['hi']);
	    return a.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();

	/**
	 * Check if Blob constructor supports ArrayBufferViews
	 * Fails in Safari 6, so we need to map to ArrayBuffers there.
	 */

	var blobSupportsArrayBufferView = blobSupported && (function() {
	  try {
	    var b = new Blob([new Uint8Array([1,2])]);
	    return b.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();

	/**
	 * Check if BlobBuilder is supported
	 */

	var blobBuilderSupported = BlobBuilder
	  && BlobBuilder.prototype.append
	  && BlobBuilder.prototype.getBlob;

	/**
	 * Helper function that maps ArrayBufferViews to ArrayBuffers
	 * Used by BlobBuilder constructor and old browsers that didn't
	 * support it in the Blob constructor.
	 */

	function mapArrayBufferViews(ary) {
	  for (var i = 0; i < ary.length; i++) {
	    var chunk = ary[i];
	    if (chunk.buffer instanceof ArrayBuffer) {
	      var buf = chunk.buffer;

	      // if this is a subarray, make a copy so we only
	      // include the subarray region from the underlying buffer
	      if (chunk.byteLength !== buf.byteLength) {
	        var copy = new Uint8Array(chunk.byteLength);
	        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
	        buf = copy.buffer;
	      }

	      ary[i] = buf;
	    }
	  }
	}

	function BlobBuilderConstructor(ary, options) {
	  options = options || {};

	  var bb = new BlobBuilder();
	  mapArrayBufferViews(ary);

	  for (var i = 0; i < ary.length; i++) {
	    bb.append(ary[i]);
	  }

	  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
	};

	function BlobConstructor(ary, options) {
	  mapArrayBufferViews(ary);
	  return new Blob(ary, options || {});
	};

	module.exports = (function() {
	  if (blobSupported) {
	    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
	  } else if (blobBuilderSupported) {
	    return BlobBuilderConstructor;
	  } else {
	    return undefined;
	  }
	})();

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Expose `Emitter`.
	 */

	if (true) {
	  module.exports = Emitter;
	}

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * Compiles a querystring
	 * Returns string representation of the object
	 *
	 * @param {Object}
	 * @api private
	 */

	exports.encode = function (obj) {
	  var str = '';

	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      if (str.length) str += '&';
	      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
	    }
	  }

	  return str;
	};

	/**
	 * Parses a simple querystring into an object
	 *
	 * @param {String} qs
	 * @api private
	 */

	exports.decode = function(qs){
	  var qry = {};
	  var pairs = qs.split('&');
	  for (var i = 0, l = pairs.length; i < l; i++) {
	    var pair = pairs[i].split('=');
	    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	  }
	  return qry;
	};


/***/ },
/* 37 */
/***/ function(module, exports) {

	
	module.exports = function(a, b){
	  var fn = function(){};
	  fn.prototype = b.prototype;
	  a.prototype = new fn;
	  a.prototype.constructor = a;
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
	  , length = 64
	  , map = {}
	  , seed = 0
	  , i = 0
	  , prev;

	/**
	 * Return a string representing the specified number.
	 *
	 * @param {Number} num The number to convert.
	 * @returns {String} The string representation of the number.
	 * @api public
	 */
	function encode(num) {
	  var encoded = '';

	  do {
	    encoded = alphabet[num % length] + encoded;
	    num = Math.floor(num / length);
	  } while (num > 0);

	  return encoded;
	}

	/**
	 * Return the integer value specified by the given string.
	 *
	 * @param {String} str The string to convert.
	 * @returns {Number} The integer value represented by the string.
	 * @api public
	 */
	function decode(str) {
	  var decoded = 0;

	  for (i = 0; i < str.length; i++) {
	    decoded = decoded * length + map[str.charAt(i)];
	  }

	  return decoded;
	}

	/**
	 * Yeast: A tiny growing id generator.
	 *
	 * @returns {String} A unique id.
	 * @api public
	 */
	function yeast() {
	  var now = encode(+new Date());

	  if (now !== prev) return seed = 0, prev = now;
	  return now +'.'+ encode(seed++);
	}

	//
	// Map each character to its index.
	//
	for (; i < length; i++) map[alphabet[i]] = i;

	//
	// Expose the `yeast`, `encode` and `decode` functions.
	//
	yeast.encode = encode;
	yeast.decode = decode;
	module.exports = yeast;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module requirements.
	 */

	var Polling = __webpack_require__(25);
	var inherit = __webpack_require__(37);

	/**
	 * Module exports.
	 */

	module.exports = JSONPPolling;

	/**
	 * Cached regular expressions.
	 */

	var rNewline = /\n/g;
	var rEscapedNewline = /\\n/g;

	/**
	 * Global JSONP callbacks.
	 */

	var callbacks;

	/**
	 * Noop.
	 */

	function empty () { }

	/**
	 * JSONP Polling constructor.
	 *
	 * @param {Object} opts.
	 * @api public
	 */

	function JSONPPolling (opts) {
	  Polling.call(this, opts);

	  this.query = this.query || {};

	  // define global callbacks array if not present
	  // we do this here (lazily) to avoid unneeded global pollution
	  if (!callbacks) {
	    // we need to consider multiple engines in the same page
	    if (!global.___eio) global.___eio = [];
	    callbacks = global.___eio;
	  }

	  // callback identifier
	  this.index = callbacks.length;

	  // add callback to jsonp global
	  var self = this;
	  callbacks.push(function (msg) {
	    self.onData(msg);
	  });

	  // append to query string
	  this.query.j = this.index;

	  // prevent spurious errors from being emitted when the window is unloaded
	  if (global.document && global.addEventListener) {
	    global.addEventListener('beforeunload', function () {
	      if (self.script) self.script.onerror = empty;
	    }, false);
	  }
	}

	/**
	 * Inherits from Polling.
	 */

	inherit(JSONPPolling, Polling);

	/*
	 * JSONP only supports binary as base64 encoded strings
	 */

	JSONPPolling.prototype.supportsBinary = false;

	/**
	 * Closes the socket.
	 *
	 * @api private
	 */

	JSONPPolling.prototype.doClose = function () {
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }

	  if (this.form) {
	    this.form.parentNode.removeChild(this.form);
	    this.form = null;
	    this.iframe = null;
	  }

	  Polling.prototype.doClose.call(this);
	};

	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */

	JSONPPolling.prototype.doPoll = function () {
	  var self = this;
	  var script = document.createElement('script');

	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }

	  script.async = true;
	  script.src = this.uri();
	  script.onerror = function (e) {
	    self.onError('jsonp poll error', e);
	  };

	  var insertAt = document.getElementsByTagName('script')[0];
	  if (insertAt) {
	    insertAt.parentNode.insertBefore(script, insertAt);
	  } else {
	    (document.head || document.body).appendChild(script);
	  }
	  this.script = script;

	  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

	  if (isUAgecko) {
	    setTimeout(function () {
	      var iframe = document.createElement('iframe');
	      document.body.appendChild(iframe);
	      document.body.removeChild(iframe);
	    }, 100);
	  }
	};

	/**
	 * Writes with a hidden iframe.
	 *
	 * @param {String} data to send
	 * @param {Function} called upon flush.
	 * @api private
	 */

	JSONPPolling.prototype.doWrite = function (data, fn) {
	  var self = this;

	  if (!this.form) {
	    var form = document.createElement('form');
	    var area = document.createElement('textarea');
	    var id = this.iframeId = 'eio_iframe_' + this.index;
	    var iframe;

	    form.className = 'socketio';
	    form.style.position = 'absolute';
	    form.style.top = '-1000px';
	    form.style.left = '-1000px';
	    form.target = id;
	    form.method = 'POST';
	    form.setAttribute('accept-charset', 'utf-8');
	    area.name = 'd';
	    form.appendChild(area);
	    document.body.appendChild(form);

	    this.form = form;
	    this.area = area;
	  }

	  this.form.action = this.uri();

	  function complete () {
	    initIframe();
	    fn();
	  }

	  function initIframe () {
	    if (self.iframe) {
	      try {
	        self.form.removeChild(self.iframe);
	      } catch (e) {
	        self.onError('jsonp polling iframe removal error', e);
	      }
	    }

	    try {
	      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
	      iframe = document.createElement(html);
	    } catch (e) {
	      iframe = document.createElement('iframe');
	      iframe.name = self.iframeId;
	      iframe.src = 'javascript:0';
	    }

	    iframe.id = self.iframeId;

	    self.form.appendChild(iframe);
	    self.iframe = iframe;
	  }

	  initIframe();

	  // escape \n to prevent it from being converted into \r\n by some UAs
	  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
	  data = data.replace(rEscapedNewline, '\\\n');
	  this.area.value = data.replace(rNewline, '\\n');

	  try {
	    this.form.submit();
	  } catch (e) {}

	  if (this.iframe.attachEvent) {
	    this.iframe.onreadystatechange = function () {
	      if (self.iframe.readyState === 'complete') {
	        complete();
	      }
	    };
	  } else {
	    this.iframe.onload = complete;
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(26);
	var parser = __webpack_require__(27);
	var parseqs = __webpack_require__(36);
	var inherit = __webpack_require__(37);
	var yeast = __webpack_require__(38);
	var debug = __webpack_require__(3)('engine.io-client:websocket');
	var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
	var NodeWebSocket;
	if (typeof window === 'undefined') {
	  try {
	    NodeWebSocket = __webpack_require__(41);
	  } catch (e) { }
	}

	/**
	 * Get either the `WebSocket` or `MozWebSocket` globals
	 * in the browser or try to resolve WebSocket-compatible
	 * interface exposed by `ws` for Node-like environment.
	 */

	var WebSocket = BrowserWebSocket;
	if (!WebSocket && typeof window === 'undefined') {
	  WebSocket = NodeWebSocket;
	}

	/**
	 * Module exports.
	 */

	module.exports = WS;

	/**
	 * WebSocket transport constructor.
	 *
	 * @api {Object} connection options
	 * @api public
	 */

	function WS (opts) {
	  var forceBase64 = (opts && opts.forceBase64);
	  if (forceBase64) {
	    this.supportsBinary = false;
	  }
	  this.perMessageDeflate = opts.perMessageDeflate;
	  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
	  if (!this.usingBrowserWebSocket) {
	    WebSocket = NodeWebSocket;
	  }
	  Transport.call(this, opts);
	}

	/**
	 * Inherits from Transport.
	 */

	inherit(WS, Transport);

	/**
	 * Transport name.
	 *
	 * @api public
	 */

	WS.prototype.name = 'websocket';

	/*
	 * WebSockets support binary
	 */

	WS.prototype.supportsBinary = true;

	/**
	 * Opens socket.
	 *
	 * @api private
	 */

	WS.prototype.doOpen = function () {
	  if (!this.check()) {
	    // let probe timeout
	    return;
	  }

	  var uri = this.uri();
	  var protocols = void (0);
	  var opts = {
	    agent: this.agent,
	    perMessageDeflate: this.perMessageDeflate
	  };

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	  if (this.extraHeaders) {
	    opts.headers = this.extraHeaders;
	  }
	  if (this.localAddress) {
	    opts.localAddress = this.localAddress;
	  }

	  try {
	    this.ws = this.usingBrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);
	  } catch (err) {
	    return this.emit('error', err);
	  }

	  if (this.ws.binaryType === undefined) {
	    this.supportsBinary = false;
	  }

	  if (this.ws.supports && this.ws.supports.binary) {
	    this.supportsBinary = true;
	    this.ws.binaryType = 'nodebuffer';
	  } else {
	    this.ws.binaryType = 'arraybuffer';
	  }

	  this.addEventListeners();
	};

	/**
	 * Adds event listeners to the socket
	 *
	 * @api private
	 */

	WS.prototype.addEventListeners = function () {
	  var self = this;

	  this.ws.onopen = function () {
	    self.onOpen();
	  };
	  this.ws.onclose = function () {
	    self.onClose();
	  };
	  this.ws.onmessage = function (ev) {
	    self.onData(ev.data);
	  };
	  this.ws.onerror = function (e) {
	    self.onError('websocket error', e);
	  };
	};

	/**
	 * Writes data to socket.
	 *
	 * @param {Array} array of packets.
	 * @api private
	 */

	WS.prototype.write = function (packets) {
	  var self = this;
	  this.writable = false;

	  // encodePacket efficient as it uses WS framing
	  // no need for encodePayload
	  var total = packets.length;
	  for (var i = 0, l = total; i < l; i++) {
	    (function (packet) {
	      parser.encodePacket(packet, self.supportsBinary, function (data) {
	        if (!self.usingBrowserWebSocket) {
	          // always create a new object (GH-437)
	          var opts = {};
	          if (packet.options) {
	            opts.compress = packet.options.compress;
	          }

	          if (self.perMessageDeflate) {
	            var len = 'string' === typeof data ? global.Buffer.byteLength(data) : data.length;
	            if (len < self.perMessageDeflate.threshold) {
	              opts.compress = false;
	            }
	          }
	        }

	        // Sometimes the websocket has already been closed but the browser didn't
	        // have a chance of informing us about it yet, in that case send will
	        // throw an error
	        try {
	          if (self.usingBrowserWebSocket) {
	            // TypeError is thrown when passing the second argument on Safari
	            self.ws.send(data);
	          } else {
	            self.ws.send(data, opts);
	          }
	        } catch (e) {
	          debug('websocket closed before onclose event');
	        }

	        --total || done();
	      });
	    })(packets[i]);
	  }

	  function done () {
	    self.emit('flush');

	    // fake drain
	    // defer to next tick to allow Socket to clear writeBuffer
	    setTimeout(function () {
	      self.writable = true;
	      self.emit('drain');
	    }, 0);
	  }
	};

	/**
	 * Called upon close
	 *
	 * @api private
	 */

	WS.prototype.onClose = function () {
	  Transport.prototype.onClose.call(this);
	};

	/**
	 * Closes socket.
	 *
	 * @api private
	 */

	WS.prototype.doClose = function () {
	  if (typeof this.ws !== 'undefined') {
	    this.ws.close();
	  }
	};

	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */

	WS.prototype.uri = function () {
	  var query = this.query || {};
	  var schema = this.secure ? 'wss' : 'ws';
	  var port = '';

	  // avoid port if default for schema
	  if (this.port && (('wss' === schema && Number(this.port) !== 443) ||
	    ('ws' === schema && Number(this.port) !== 80))) {
	    port = ':' + this.port;
	  }

	  // append timestamp to URI
	  if (this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }

	  // communicate binary support capabilities
	  if (!this.supportsBinary) {
	    query.b64 = 1;
	  }

	  query = parseqs.encode(query);

	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }

	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};

	/**
	 * Feature detection for WebSocket.
	 *
	 * @return {Boolean} whether this transport is available.
	 * @api public
	 */

	WS.prototype.check = function () {
	  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 41 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 42 */
/***/ function(module, exports) {

	
	var indexOf = [].indexOf;

	module.exports = function(arr, obj){
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * JSON parse.
	 *
	 * @see Based on jQuery#parseJSON (MIT) and JSON2
	 * @api private
	 */

	var rvalidchars = /^[\],:{}\s]*$/;
	var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
	var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
	var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
	var rtrimLeft = /^\s+/;
	var rtrimRight = /\s+$/;

	module.exports = function parsejson(data) {
	  if ('string' != typeof data || !data) {
	    return null;
	  }

	  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

	  // Attempt to parse using the native JSON parser first
	  if (global.JSON && JSON.parse) {
	    return JSON.parse(data);
	  }

	  if (rvalidchars.test(data.replace(rvalidescape, '@')
	      .replace(rvalidtokens, ']')
	      .replace(rvalidbraces, ''))) {
	    return (new Function('return ' + data))();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

/**
	 * Module dependencies.
	 */

	var parser = __webpack_require__(7);
	var Emitter = __webpack_require__(35);
	var toArray = __webpack_require__(45);
	var on = __webpack_require__(46);
	var bind = __webpack_require__(47);
	var debug = __webpack_require__(3)('socket.io-client:socket');
	var hasBin = __webpack_require__(29);

	/**
	 * Module exports.
	 */

	module.exports = exports = Socket;

	/**
	 * Internal events (blacklisted).
	 * These events can't be emitted by the user.
	 *
	 * @api private
	 */

	var events = {
	  connect: 1,
	  connect_error: 1,
	  connect_timeout: 1,
	  connecting: 1,
	  disconnect: 1,
	  error: 1,
	  reconnect: 1,
	  reconnect_attempt: 1,
	  reconnect_failed: 1,
	  reconnect_error: 1,
	  reconnecting: 1,
	  ping: 1,
	  pong: 1
	};

	/**
	 * Shortcut to `Emitter#emit`.
	 */

	var emit = Emitter.prototype.emit;

	/**
	 * `Socket` constructor.
	 *
	 * @api public
	 */

	function Socket(io, nsp, opts) {
	  this.io = io;
	  this.nsp = nsp;
	  this.json = this; // compat
	  this.ids = 0;
	  this.acks = {};
	  this.receiveBuffer = [];
	  this.sendBuffer = [];
	  this.connected = false;
	  this.disconnected = true;
	  if (opts && opts.query) {
	    this.query = opts.query;
	  }
	  if (this.io.autoConnect) this.open();
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Socket.prototype);

	/**
	 * Subscribe to open, close and packet events
	 *
	 * @api private
	 */

	Socket.prototype.subEvents = function () {
	  if (this.subs) return;

	  var io = this.io;
	  this.subs = [on(io, 'open', bind(this, 'onopen')), on(io, 'packet', bind(this, 'onpacket')), on(io, 'close', bind(this, 'onclose'))];
	};

	/**
	 * "Opens" the socket.
	 *
	 * @api public
	 */

	Socket.prototype.open = Socket.prototype.connect = function () {
	  if (this.connected) return this;

	  this.subEvents();
	  this.io.open(); // ensure open
	  if ('open' === this.io.readyState) this.onopen();
	  this.emit('connecting');
	  return this;
	};

	/**
	 * Sends a `message` event.
	 *
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.send = function () {
	  var args = toArray(arguments);
	  args.unshift('message');
	  this.emit.apply(this, args);
	  return this;
	};

	/**
	 * Override `emit`.
	 * If the event is in `events`, it's emitted normally.
	 *
	 * @param {String} event name
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.emit = function (ev) {
	  if (events.hasOwnProperty(ev)) {
	    emit.apply(this, arguments);
	    return this;
	  }

	  var args = toArray(arguments);
	  var parserType = parser.EVENT; // default
	  if (hasBin(args)) {
	    parserType = parser.BINARY_EVENT;
	  } // binary
	  var packet = { type: parserType, data: args };

	  packet.options = {};
	  packet.options.compress = !this.flags || false !== this.flags.compress;

	  // event ack callback
	  if ('function' === typeof args[args.length - 1]) {
	    debug('emitting packet with ack id %d', this.ids);
	    this.acks[this.ids] = args.pop();
	    packet.id = this.ids++;
	  }

	  if (this.connected) {
	    this.packet(packet);
	  } else {
	    this.sendBuffer.push(packet);
	  }

	  delete this.flags;

	  return this;
	};

	/**
	 * Sends a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.packet = function (packet) {
	  packet.nsp = this.nsp;
	  this.io.packet(packet);
	};

	/**
	 * Called upon engine `open`.
	 *
	 * @api private
	 */

	Socket.prototype.onopen = function () {
	  debug('transport is open - connecting');

	  // write connect packet if necessary
	  if ('/' !== this.nsp) {
	    if (this.query) {
	      this.packet({ type: parser.CONNECT, query: this.query });
	    } else {
	      this.packet({ type: parser.CONNECT });
	    }
	  }
	};

	/**
	 * Called upon engine `close`.
	 *
	 * @param {String} reason
	 * @api private
	 */

	Socket.prototype.onclose = function (reason) {
	  debug('close (%s)', reason);
	  this.connected = false;
	  this.disconnected = true;
	  delete this.id;
	  this.emit('disconnect', reason);
	};

	/**
	 * Called with socket packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onpacket = function (packet) {
	  if (packet.nsp !== this.nsp) return;

	  switch (packet.type) {
	    case parser.CONNECT:
	      this.onconnect();
	      break;

	    case parser.EVENT:
	      this.onevent(packet);
	      break;

	    case parser.BINARY_EVENT:
	      this.onevent(packet);
	      break;

	    case parser.ACK:
	      this.onack(packet);
	      break;

	    case parser.BINARY_ACK:
	      this.onack(packet);
	      break;

	    case parser.DISCONNECT:
	      this.ondisconnect();
	      break;

	    case parser.ERROR:
	      this.emit('error', packet.data);
	      break;
	  }
	};

	/**
	 * Called upon a server event.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onevent = function (packet) {
	  var args = packet.data || [];
	  debug('emitting event %j', args);

	  if (null != packet.id) {
	    debug('attaching ack callback to event');
	    args.push(this.ack(packet.id));
	  }

	  if (this.connected) {
	    emit.apply(this, args);
	  } else {
	    this.receiveBuffer.push(args);
	  }
	};

	/**
	 * Produces an ack callback to emit with an event.
	 *
	 * @api private
	 */

	Socket.prototype.ack = function (id) {
	  var self = this;
	  var sent = false;
	  return function () {
	    // prevent double callbacks
	    if (sent) return;
	    sent = true;
	    var args = toArray(arguments);
	    debug('sending ack %j', args);

	    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
	    self.packet({
	      type: type,
	      id: id,
	      data: args
	    });
	  };
	};

	/**
	 * Called upon a server acknowlegement.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onack = function (packet) {
	  var ack = this.acks[packet.id];
	  if ('function' === typeof ack) {
	    debug('calling ack %s with %j', packet.id, packet.data);
	    ack.apply(this, packet.data);
	    delete this.acks[packet.id];
	  } else {
	    debug('bad ack %s', packet.id);
	  }
	};

	/**
	 * Called upon server connect.
	 *
	 * @api private
	 */

	Socket.prototype.onconnect = function () {
	  this.connected = true;
	  this.disconnected = false;
	  this.emit('connect');
	  this.emitBuffered();
	};

	/**
	 * Emit buffered events (received and emitted).
	 *
	 * @api private
	 */

	Socket.prototype.emitBuffered = function () {
	  var i;
	  for (i = 0; i < this.receiveBuffer.length; i++) {
	    emit.apply(this, this.receiveBuffer[i]);
	  }
	  this.receiveBuffer = [];

	  for (i = 0; i < this.sendBuffer.length; i++) {
	    this.packet(this.sendBuffer[i]);
	  }
	  this.sendBuffer = [];
	};

	/**
	 * Called upon server disconnect.
	 *
	 * @api private
	 */

	Socket.prototype.ondisconnect = function () {
	  debug('server disconnect (%s)', this.nsp);
	  this.destroy();
	  this.onclose('io server disconnect');
	};

	/**
	 * Called upon forced client/server side disconnections,
	 * this method ensures the manager stops tracking us and
	 * that reconnections don't get triggered for this.
	 *
	 * @api private.
	 */

	Socket.prototype.destroy = function () {
	  if (this.subs) {
	    // clean subscriptions to avoid reconnections
	    for (var i = 0; i < this.subs.length; i++) {
	      this.subs[i].destroy();
	    }
	    this.subs = null;
	  }

	  this.io.destroy(this);
	};

	/**
	 * Disconnects the socket manually.
	 *
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.close = Socket.prototype.disconnect = function () {
	  if (this.connected) {
	    debug('performing disconnect (%s)', this.nsp);
	    this.packet({ type: parser.DISCONNECT });
	  }

	  // remove socket from pool
	  this.destroy();

	  if (this.connected) {
	    // fire events
	    this.onclose('io client disconnect');
	  }
	  return this;
	};

	/**
	 * Sets the compress flag.
	 *
	 * @param {Boolean} if `true`, compresses the sending data
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.compress = function (compress) {
	  this.flags = this.flags || {};
	  this.flags.compress = compress;
	  return this;
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = toArray

	function toArray(list, index) {
	    var array = []

	    index = index || 0

	    for (var i = index || 0; i < list.length; i++) {
	        array[i - index] = list[i]
	    }

	    return array
	}


/***/ },
/* 46 */
/***/ function(module, exports) {

/**
	 * Module exports.
	 */

	module.exports = on;

	/**
	 * Helper for subscriptions.
	 *
	 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
	 * @param {String} event name
	 * @param {Function} callback
	 * @api public
	 */

	function on(obj, ev, fn) {
	  obj.on(ev, fn);
	  return {
	    destroy: function destroy() {
	      obj.removeListener(ev, fn);
	    }
	  };
		}

/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Slice reference.
	 */

	var slice = [].slice;

	/**
	 * Bind `obj` to `fn`.
	 *
	 * @param {Object} obj
	 * @param {Function|String} fn or string
	 * @return {Function}
	 * @api public
	 */

	module.exports = function(obj, fn){
	  if ('string' == typeof fn) fn = obj[fn];
	  if ('function' != typeof fn) throw new Error('bind() requires a function');
	  var args = slice.call(arguments, 2);
	  return function(){
	    return fn.apply(obj, args.concat(slice.call(arguments)));
	  }
	};


/***/ },
/* 48 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Backoff`.
	 */

	module.exports = Backoff;

	/**
	 * Initialize backoff timer with `opts`.
	 *
	 * - `min` initial timeout in milliseconds [100]
	 * - `max` max timeout [10000]
	 * - `jitter` [0]
	 * - `factor` [2]
	 *
	 * @param {Object} opts
	 * @api public
	 */

	function Backoff(opts) {
	  opts = opts || {};
	  this.ms = opts.min || 100;
	  this.max = opts.max || 10000;
	  this.factor = opts.factor || 2;
	  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
	  this.attempts = 0;
	}

	/**
	 * Return the backoff duration.
	 *
	 * @return {Number}
	 * @api public
	 */

	Backoff.prototype.duration = function(){
	  var ms = this.ms * Math.pow(this.factor, this.attempts++);
	  if (this.jitter) {
	    var rand =  Math.random();
	    var deviation = Math.floor(rand * this.jitter * ms);
	    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
	  }
	  return Math.min(ms, this.max) | 0;
	};

	/**
	 * Reset the number of attempts.
	 *
	 * @api public
	 */

	Backoff.prototype.reset = function(){
	  this.attempts = 0;
	};

	/**
	 * Set the minimum duration
	 *
	 * @api public
	 */

	Backoff.prototype.setMin = function(min){
	  this.ms = min;
	};

	/**
	 * Set the maximum duration
	 *
	 * @api public
	 */

	Backoff.prototype.setMax = function(max){
	  this.max = max;
	};

	/**
	 * Set the jitter
	 *
	 * @api public
	 */

	Backoff.prototype.setJitter = function(jitter){
	  this.jitter = jitter;
	};



/***/ }
/******/ ])
});
;
//# sourceMappingURL=socket.io.js.map;
// Source: ./node_modules/moment/moment.js
//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    var k;
    for (k in obj) {
        // even if its not own property I'd still call it non-empty
        return false;
    }
    return true;
}

function isUndefined(input) {
    return input === void 0;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null,
        rfc2822         : false,
        weekdayMismatch : false
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

var some$1 = some;

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some$1.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var keys$1 = keys;

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid()) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

var indexOf$1 = indexOf;

function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return isArray(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return isArray(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('k',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            require('./locale/' + name);
            // because defineLocale currently also sets the global locale, we
            // want to undo that for lazy loaded locales
            getSetGlobalLocale(oldLocale);
        } catch (e) { }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, parentConfig = baseConfig;
        // MERGE
        if (locales[name] != null) {
            parentConfig = locales[name]._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys$1(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
var basicRfcRegex = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var string, match, dayFormat,
        dateFormat, timeFormat, tzFormat;
    var timezones = {
        ' GMT': ' +0000',
        ' EDT': ' -0400',
        ' EST': ' -0500',
        ' CDT': ' -0500',
        ' CST': ' -0600',
        ' MDT': ' -0600',
        ' MST': ' -0700',
        ' PDT': ' -0700',
        ' PST': ' -0800'
    };
    var military = 'YXWVUTSRQPONZABCDEFGHIKLM';
    var timezone, timezoneIndex;

    string = config._i
        .replace(/\([^\)]*\)|[\n\t]/g, ' ') // Remove comments and folding whitespace
        .replace(/(\s\s+)/g, ' ') // Replace multiple-spaces with a single space
        .replace(/^\s|\s$/g, ''); // Remove leading and trailing spaces
    match = basicRfcRegex.exec(string);

    if (match) {
        dayFormat = match[1] ? 'ddd' + ((match[1].length === 5) ? ', ' : ' ') : '';
        dateFormat = 'D MMM ' + ((match[2].length > 10) ? 'YYYY ' : 'YY ');
        timeFormat = 'HH:mm' + (match[4] ? ':ss' : '');

        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        if (match[1]) { // day of week given
            var momentDate = new Date(match[2]);
            var momentDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][momentDate.getDay()];

            if (match[1].substr(0,3) !== momentDay) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return;
            }
        }

        switch (match[5].length) {
            case 2: // military
                if (timezoneIndex === 0) {
                    timezone = ' +0000';
                } else {
                    timezoneIndex = military.indexOf(match[5][1].toUpperCase()) - 12;
                    timezone = ((timezoneIndex < 0) ? ' -' : ' +') +
                        (('' + timezoneIndex).replace(/^-?/, '0')).match(/..$/)[0] + '00';
                }
                break;
            case 4: // Zone
                timezone = timezones[match[5]];
                break;
            default: // UT or +/-9999
                timezone = timezones[' GMT'];
        }
        match[5] = timezone;
        config._i = match.splice(1).join('');
        tzFormat = ' ZZ';
        config._f = dayFormat + dateFormat + timeFormat + tzFormat;
        configFromStringAndFormat(config);
        getParsingFlags(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }
    if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (isObject(input)) {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(ordering.indexOf(key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid$1() {
    return this._isValid;
}

function createInvalid$1() {
    return createDuration(NaN);
}

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    if (units === 'year' || units === 'month' || units === 'quarter') {
        output = monthDiff(this, that);
        if (units === 'quarter') {
            output = output / 3;
        } else if (units === 'year') {
            output = output / 12;
        }
    } else {
        delta = this - that;
        output = units === 'second' ? delta / 1e3 : // 1000
            units === 'minute' ? delta / 6e4 : // 1000 * 60
            units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
            units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
            delta;
    }
    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString() {
    if (!this.isValid()) {
        return null;
    }
    var m = this.clone().utc();
    if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
    if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        return this.toDate().toISOString();
    }
    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$2 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$2;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function get$2 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
            seconds < thresholds.s   && ['ss', seconds] ||
            minutes <= 1             && ['m']           ||
            minutes < thresholds.m   && ['mm', minutes] ||
            hours   <= 1             && ['h']           ||
            hours   < thresholds.h   && ['hh', hours]   ||
            days    <= 1             && ['d']           ||
            days    < thresholds.d   && ['dd', days]    ||
            months  <= 1             && ['M']           ||
            months  < thresholds.M   && ['MM', months]  ||
            years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize (withSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    return (total < 0 ? '-' : '') +
        'P' +
        (Y ? Y + 'Y' : '') +
        (M ? M + 'M' : '') +
        (D ? D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? h + 'H' : '') +
        (m ? m + 'M' : '') +
        (s ? s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.isValid        = isValid$1;
proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.18.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

return hooks;

})));
;
// Source: ./node_modules/moment-duration-format/lib/moment-duration-format.js
/*! Moment Duration Format v1.3.0
 *  https://github.com/jsmreese/moment-duration-format 
 *  Date: 2014-07-15
 *
 *  Duration format plugin function for the Moment.js library
 *  http://momentjs.com/
 *
 *  Copyright 2014 John Madhavan-Reese
 *  Released under the MIT license
 */

(function (root, undefined) {

	// repeatZero(qty)
	// returns "0" repeated qty times
	function repeatZero(qty) {
		var result = "";
		
		// exit early
		// if qty is 0 or a negative number
		// or doesn't coerce to an integer
		qty = parseInt(qty, 10);
		if (!qty || qty < 1) { return result; }
		
		while (qty) {
			result += "0";
			qty -= 1;
		}
		
		return result;
	}
	
	// padZero(str, len [, isRight])
	// pads a string with zeros up to a specified length
	// will not pad a string if its length is aready
	// greater than or equal to the specified length
	// default output pads with zeros on the left
	// set isRight to `true` to pad with zeros on the right
	function padZero(str, len, isRight) {
		if (str == null) { str = ""; }
		str = "" + str;
		
		return (isRight ? str : "") + repeatZero(len - str.length) + (isRight ? "" : str);
	}
	
	// isArray
	function isArray(array) {
		return Object.prototype.toString.call(array) === "[object Array]";
	}
	
	// isObject
	function isObject(obj) {
		return Object.prototype.toString.call(obj) === "[object Object]";
	}
	
	// findLast
	function findLast(array, callback) {
		var index = array.length;

		while (index -= 1) {
			if (callback(array[index])) { return array[index]; }
		}
	}

	// find
	function find(array, callback) {
		var index = 0,
			max = array.length,
			match;
			
		if (typeof callback !== "function") {
			match = callback;
			callback = function (item) {
				return item === match;
			};
		}

		while (index < max) {
			if (callback(array[index])) { return array[index]; }
			index += 1;
		}
	}
	
	// each
	function each(array, callback) {
		var index = 0,
			max = array.length;
			
		if (!array || !max) { return; }

		while (index < max) {
			if (callback(array[index], index) === false) { return; }
			index += 1;
		}
	}
	
	// map
	function map(array, callback) {
		var index = 0,
			max = array.length,
			ret = [];

		if (!array || !max) { return ret; }
				
		while (index < max) {
			ret[index] = callback(array[index], index);
			index += 1;
		}
		
		return ret;
	}
	
	// pluck
	function pluck(array, prop) {
		return map(array, function (item) {
			return item[prop];
		});
	}
	
	// compact
	function compact(array) {
		var ret = [];
		
		each(array, function (item) {
			if (item) { ret.push(item); }
		});
		
		return ret;
	}
	
	// unique
	function unique(array) {
		var ret = [];
		
		each(array, function (_a) {
			if (!find(ret, _a)) { ret.push(_a); }
		});
		
		return ret;
	}
	
	// intersection
	function intersection(a, b) {
		var ret = [];
		
		each(a, function (_a) {
			each(b, function (_b) {
				if (_a === _b) { ret.push(_a); }
			});
		});
		
		return unique(ret);
	}
	
	// rest
	function rest(array, callback) {
		var ret = [];
		
		each(array, function (item, index) {
			if (!callback(item)) {
				ret = array.slice(index);
				return false;
			}
		});
		
		return ret;
	}

	// initial
	function initial(array, callback) {
		var reversed = array.slice().reverse();
		
		return rest(reversed, callback).reverse();
	}
	
	// extend
	function extend(a, b) {
		for (var key in b) {
			if (b.hasOwnProperty(key)) { a[key] = b[key]; }
		}
		
		return a;
	}
			
	// define internal moment reference
	var moment;

	if (typeof require === "function") {
		try { moment = require('moment'); } 
		catch (e) {}
	} 
	
	if (!moment && root.moment) {
		moment = root.moment;
	}
	
	if (!moment) {
		throw "Moment Duration Format cannot find Moment.js";
	}
	
	// moment.duration.format([template] [, precision] [, settings])
	moment.duration.fn.format = function () {

		var tokenizer, tokens, types, typeMap, momentTypes, foundFirst, trimIndex,
			args = [].slice.call(arguments),
			settings = extend({}, this.format.defaults),
			// keep a shadow copy of this moment for calculating remainders
			remainder = moment.duration(this);

		// add a reference to this duration object to the settings for use
		// in a template function
		settings.duration = this;

		// parse arguments
		each(args, function (arg) {
			if (typeof arg === "string" || typeof arg === "function") {
				settings.template = arg;
				return;
			}

			if (typeof arg === "number") {
				settings.precision = arg;
				return;
			}

			if (isObject(arg)) {
				extend(settings, arg);
			}
		});

		// types
		types = settings.types = (isArray(settings.types) ? settings.types : settings.types.split(" "));

		// template
		if (typeof settings.template === "function") {
			settings.template = settings.template.apply(settings);
		}

		// tokenizer regexp
		tokenizer = new RegExp(map(types, function (type) {
			return settings[type].source;
		}).join("|"), "g");

		// token type map function
		typeMap = function (token) {
			return find(types, function (type) {
				return settings[type].test(token);
			});
		};

		// tokens array
		tokens = map(settings.template.match(tokenizer), function (token, index) {
			var type = typeMap(token),
				length = token.length;

			return {
				index: index,
				length: length,

				// replace escaped tokens with the non-escaped token text
				token: (type === "escape" ? token.replace(settings.escape, "$1") : token),

				// ignore type on non-moment tokens
				type: ((type === "escape" || type === "general") ? null : type)

				// calculate base value for all moment tokens
				//baseValue: ((type === "escape" || type === "general") ? null : this.as(type))
			};
		}, this);

		// unique moment token types in the template (in order of descending magnitude)
		momentTypes = intersection(types, unique(compact(pluck(tokens, "type"))));

		// exit early if there are no momentTypes
		if (!momentTypes.length) {
			return pluck(tokens, "token").join("");
		}

		// calculate values for each token type in the template
		each(momentTypes, function (momentType, index) {
			var value, wholeValue, decimalValue, isLeast, isMost;

			// calculate integer and decimal value portions
			value = remainder.as(momentType);
			wholeValue = (value > 0 ? Math.floor(value) : Math.ceil(value));
			decimalValue = value - wholeValue;

			// is this the least-significant moment token found?
			isLeast = ((index + 1) === momentTypes.length);

			// is this the most-significant moment token found?
			isMost = (!index);

			// update tokens array
			// using this algorithm to not assume anything about
			// the order or frequency of any tokens
			each(tokens, function (token) {
				if (token.type === momentType) {
					extend(token, {
						value: value,
						wholeValue: wholeValue,
						decimalValue: decimalValue,
						isLeast: isLeast,
						isMost: isMost
					});

					if (isMost) {
						// note the length of the most-significant moment token:
						// if it is greater than one and forceLength is not set, default forceLength to `true`
						if (settings.forceLength == null && token.length > 1) {
							settings.forceLength = true;
						}

						// rationale is this:
						// if the template is "h:mm:ss" and the moment value is 5 minutes, the user-friendly output is "5:00", not "05:00"
						// shouldn't pad the `minutes` token even though it has length of two
						// if the template is "hh:mm:ss", the user clearly wanted everything padded so we should output "05:00"
						// if the user wanted the full padded output, they can set `{ trim: false }` to get "00:05:00"
					}
				}
			});

			// update remainder
			remainder.subtract(wholeValue, momentType);
		});
	
		// trim tokens array
		if (settings.trim) {
			tokens = (settings.trim === "left" ? rest : initial)(tokens, function (token) {
				// return `true` if:
				// the token is not the least moment token (don't trim the least moment token)
				// the token is a moment token that does not have a value (don't trim moment tokens that have a whole value)
				return !(token.isLeast || (token.type != null && token.wholeValue));
			});
		}
		
		
		// build output

		// the first moment token can have special handling
		foundFirst = false;

		// run the map in reverse order if trimming from the right
		if (settings.trim === "right") {
			tokens.reverse();
		}

		tokens = map(tokens, function (token) {
			var val,
				decVal;

			if (!token.type) {
				// if it is not a moment token, use the token as its own value
				return token.token;
			}

			// apply negative precision formatting to the least-significant moment token
			if (token.isLeast && (settings.precision < 0)) {
				val = (Math.floor(token.wholeValue * Math.pow(10, settings.precision)) * Math.pow(10, -settings.precision)).toString();
			} else {
				val = token.wholeValue.toString();
			}
			
			// remove negative sign from the beginning
			val = val.replace(/^\-/, "");

			// apply token length formatting
			// special handling for the first moment token that is not the most significant in a trimmed template
			if (token.length > 1 && (foundFirst || token.isMost || settings.forceLength)) {
				val = padZero(val, token.length);
			}

			// add decimal value if precision > 0
			if (token.isLeast && (settings.precision > 0)) {
				decVal = token.decimalValue.toString().replace(/^\-/, "").split(/\.|e\-/);
				switch (decVal.length) {
					case 1:
						val += "." + padZero(decVal[0], settings.precision, true).slice(0, settings.precision);
						break;
						
					case 2:
						val += "." + padZero(decVal[1], settings.precision, true).slice(0, settings.precision);		
						break;
						
					case 3:
						val += "." + padZero(repeatZero((+decVal[2]) - 1) + (decVal[0] || "0") + decVal[1], settings.precision, true).slice(0, settings.precision);		
						break;
					
					default:
						throw "Moment Duration Format: unable to parse token decimal value.";
				}
			}
			
			// add a negative sign if the value is negative and token is most significant
			if (token.isMost && token.value < 0) {
				val = "-" + val;
			}

			foundFirst = true;

			return val;
		});

		// undo the reverse if trimming from the right
		if (settings.trim === "right") {
			tokens.reverse();
		}

		return tokens.join("");
	};

	moment.duration.fn.format.defaults = {
		// token definitions
		escape: /\[(.+?)\]/,
		years: /[Yy]+/,
		months: /M+/,
		weeks: /[Ww]+/,
		days: /[Dd]+/,
		hours: /[Hh]+/,
		minutes: /m+/,
		seconds: /s+/,
		milliseconds: /S+/,
		general: /.+?/,

		// token type names
		// in order of descending magnitude
		// can be a space-separated token name list or an array of token names
		types: "escape years months weeks days hours minutes seconds milliseconds general",

		// format options

		// trim
		// "left" - template tokens are trimmed from the left until the first moment token that has a value >= 1
		// "right" - template tokens are trimmed from the right until the first moment token that has a value >= 1
		// (the final moment token is not trimmed, regardless of value)
		// `false` - template tokens are not trimmed
		trim: "left",

		// precision
		// number of decimal digits to include after (to the right of) the decimal point (positive integer)
		// or the number of digits to truncate to 0 before (to the left of) the decimal point (negative integer)
		precision: 0,

		// force first moment token with a value to render at full length even when template is trimmed and first moment token has length of 1
		forceLength: null,

		// template used to format duration
		// may be a function or a string
		// template functions are executed with the `this` binding of the settings object
		// so that template strings may be dynamically generated based on the duration object
		// (accessible via `this.duration`)
		// or any of the other settings
		template: function () {
			var types = this.types,
				dur = this.duration,
				lastType = findLast(types, function (type) {
					return dur._data[type];
				});

			// default template strings for each duration dimension type
			switch (lastType) {
				case "seconds":
					return "h:mm:ss";
				case "minutes":
					return "d[d] h:mm";
				case "hours":
					return "d[d] h[h]";
				case "days":
					return "M[m] d[d]";
				case "weeks":
					return "y[y] w[w]";
				case "months":
					return "y[y] M[m]";
				case "years":
					return "y[y]";
				default:
					return "y[y] M[m] d[d] h:mm:ss";
			}
		}
	};

})(this);
;
// Source: ./node_modules/angular-filter/dist/angular-filter.min.js
/**
 * Bunch of useful filters for angularJS(with no external dependencies!)
 * @version v0.5.16 - 2017-04-07 * @link https://github.com/a8m/angular-filter
 * @author Ariel Mashraki <ariel@mashraki.co.il>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */!function(a,b,c){"use strict";function d(a){return E(a)?a:Object.keys(a).map(function(b){return a[b]})}function e(a){return null===a}function f(a,b){var d=Object.keys(a);return d.map(function(d){return b[d]!==c&&b[d]==a[d]}).indexOf(!1)==-1}function g(a,b){function c(a,b,c){for(var d=0;b+d<=a.length;){if(a.charAt(b+d)==c)return d;d++}return-1}for(var d=0,e=0;e<=b.length;e++){var f=c(a,d,b.charAt(e));if(f==-1)return!1;d+=f+1}return!0}function h(a,b,c){var d=0;return a.filter(function(a){var e=y(c)?d<b&&c(a):d<b;return d=e?d+1:d,e})}function i(a,b){return Math.round(a*Math.pow(10,b))/Math.pow(10,b)}function j(a,b,c){b=b||[];var d=Object.keys(a);return d.forEach(function(d){if(D(a[d])&&!E(a[d])){var e=c?c+"."+d:c;j(a[d],b,e||d)}else{var f=c?c+"."+d:d;b.push(f)}}),b}function k(a){return a&&a.$evalAsync&&a.$watch}function l(){return function(a,b){return a>b}}function m(){return function(a,b){return a>=b}}function n(){return function(a,b){return a<b}}function o(){return function(a,b){return a<=b}}function p(){return function(a,b){return a==b}}function q(){return function(a,b){return a!=b}}function r(){return function(a,b){return a===b}}function s(){return function(a,b){return a!==b}}function t(a){return function(b,c){return b=D(b)?d(b):b,!(!E(b)||z(c))&&b.some(function(b){return B(c)&&D(b)||A(c)?a(c)(b):b===c})}}function u(a,b){return b=b||0,b>=a.length?a:E(a[b])?u(a.slice(0,b).concat(a[b],a.slice(b+1)),b):u(a,b+1)}function v(a){return function(b,c){function e(a,b){return!z(b)&&a.some(function(a){return I(a,b)})}if(b=D(b)?d(b):b,!E(b))return b;var f=[],g=a(c);return z(c)?b.filter(function(a,b,c){return c.indexOf(a)===b}):b.filter(function(a){var b=g(a);return!e(f,b)&&(f.push(b),!0)})}}function w(a,b,c){return b?a+c+w(a,--b,c):a}function x(){return function(a){return B(a)?a.split(" ").map(function(a){return a.charAt(0).toUpperCase()+a.substring(1)}).join(" "):a}}var y=b.isDefined,z=b.isUndefined,A=b.isFunction,B=b.isString,C=b.isNumber,D=b.isObject,E=b.isArray,F=b.forEach,G=b.extend,H=b.copy,I=b.equals;String.prototype.contains||(String.prototype.contains=function(){return String.prototype.indexOf.apply(this,arguments)!==-1}),b.module("a8m.angular",[]).filter("isUndefined",function(){return function(a){return b.isUndefined(a)}}).filter("isDefined",function(){return function(a){return b.isDefined(a)}}).filter("isFunction",function(){return function(a){return b.isFunction(a)}}).filter("isString",function(){return function(a){return b.isString(a)}}).filter("isNumber",function(){return function(a){return b.isNumber(a)}}).filter("isArray",function(){return function(a){return b.isArray(a)}}).filter("isObject",function(){return function(a){return b.isObject(a)}}).filter("isEqual",function(){return function(a,c){return b.equals(a,c)}}),b.module("a8m.conditions",[]).filter({isGreaterThan:l,">":l,isGreaterThanOrEqualTo:m,">=":m,isLessThan:n,"<":n,isLessThanOrEqualTo:o,"<=":o,isEqualTo:p,"==":p,isNotEqualTo:q,"!=":q,isIdenticalTo:r,"===":r,isNotIdenticalTo:s,"!==":s}),b.module("a8m.is-null",[]).filter("isNull",function(){return function(a){return e(a)}}),b.module("a8m.after-where",[]).filter("afterWhere",function(){return function(a,b){if(a=D(a)?d(a):a,!E(a)||z(b))return a;var c=a.map(function(a){return f(b,a)}).indexOf(!0);return a.slice(c===-1?0:c)}}),b.module("a8m.after",[]).filter("after",function(){return function(a,b){return a=D(a)?d(a):a,E(a)?a.slice(b):a}}),b.module("a8m.before-where",[]).filter("beforeWhere",function(){return function(a,b){if(a=D(a)?d(a):a,!E(a)||z(b))return a;var c=a.map(function(a){return f(b,a)}).indexOf(!0);return a.slice(0,c===-1?a.length:++c)}}),b.module("a8m.before",[]).filter("before",function(){return function(a,b){return a=D(a)?d(a):a,E(a)?a.slice(0,b?--b:b):a}}),b.module("a8m.chunk-by",["a8m.filter-watcher"]).filter("chunkBy",["filterWatcher",function(a){return function(b,c,d){function e(a,b){for(var c=[];a--;)c[a]=b;return c}function f(a,b,c){return E(a)?a.map(function(a,d,f){return d*=b,a=f.slice(d,d+b),!z(c)&&a.length<b?a.concat(e(b-a.length,c)):a}).slice(0,Math.ceil(a.length/b)):a}return a.isMemoized("chunkBy",arguments)||a.memoize("chunkBy",arguments,this,f(b,c,d))}}]),b.module("a8m.concat",[]).filter("concat",[function(){return function(a,b){if(z(b))return a;if(E(a))return D(b)?a.concat(d(b)):a.concat(b);if(D(a)){var c=d(a);return D(b)?c.concat(d(b)):c.concat(b)}return a}}]),b.module("a8m.contains",[]).filter({contains:["$parse",t],some:["$parse",t]}),b.module("a8m.count-by",[]).filter("countBy",["$parse",function(a){return function(b,c){var e,f={},g=a(c);return b=D(b)?d(b):b,!E(b)||z(c)?b:(b.forEach(function(a){e=g(a),f[e]||(f[e]=0),f[e]++}),f)}}]),b.module("a8m.defaults",[]).filter("defaults",["$parse",function(a){return function(b,c){if(b=D(b)?d(b):b,!E(b)||!D(c))return b;var e=j(c);return b.forEach(function(b){e.forEach(function(d){var e=a(d),f=e.assign;z(e(b))&&f(b,e(c))})}),b}}]),b.module("a8m.every",[]).filter("every",["$parse",function(a){return function(b,c){return b=D(b)?d(b):b,!(E(b)&&!z(c))||b.every(function(b){return D(b)||A(c)?a(c)(b):b===c})}}]),b.module("a8m.filter-by",[]).filter("filterBy",["$parse",function(a){return function(b,e,f,g){var h;return f=B(f)||C(f)?String(f).toLowerCase():c,b=D(b)?d(b):b,!E(b)||z(f)?b:b.filter(function(b){return e.some(function(c){if(~c.indexOf("+")){var d=c.replace(/\s+/g,"").split("+");h=d.map(function(c){return a(c)(b)}).join(" ")}else h=a(c)(b);return!(!B(h)&&!C(h))&&(h=String(h).toLowerCase(),g?h===f:h.contains(f))})})}}]),b.module("a8m.first",[]).filter("first",["$parse",function(a){return function(b){var e,f,g;return b=D(b)?d(b):b,E(b)?(g=Array.prototype.slice.call(arguments,1),e=C(g[0])?g[0]:1,f=C(g[0])?C(g[1])?c:g[1]:g[0],g.length?h(b,e,f?a(f):f):b[0]):b}}]),b.module("a8m.flatten",[]).filter("flatten",function(){return function(a,b){return b=b||!1,a=D(a)?d(a):a,E(a)?b?[].concat.apply([],a):u(a,0):a}}),b.module("a8m.fuzzy-by",[]).filter("fuzzyBy",["$parse",function(a){return function(b,c,e,f){var h,i,j=f||!1;return b=D(b)?d(b):b,!E(b)||z(c)||z(e)?b:(i=a(c),b.filter(function(a){return h=i(a),!!B(h)&&(h=j?h:h.toLowerCase(),e=j?e:e.toLowerCase(),g(h,e)!==!1)}))}}]),b.module("a8m.fuzzy",[]).filter("fuzzy",function(){return function(a,b,c){function e(a,b){var c,d,e=Object.keys(a);return 0<e.filter(function(e){return c=a[e],!!d||!!B(c)&&(c=f?c:c.toLowerCase(),d=g(c,b)!==!1)}).length}var f=c||!1;return a=D(a)?d(a):a,!E(a)||z(b)?a:(b=f?b:b.toLowerCase(),a.filter(function(a){return B(a)?(a=f?a:a.toLowerCase(),g(a,b)!==!1):!!D(a)&&e(a,b)}))}}),b.module("a8m.group-by",["a8m.filter-watcher"]).filter("groupBy",["$parse","filterWatcher",function(a,b){return function(c,d){function e(a,b){var c,d={};return F(a,function(a){c=b(a),d[c]||(d[c]=[]),d[c].push(a)}),d}return!D(c)||z(d)?c:b.isMemoized("groupBy",arguments)||b.memoize("groupBy",arguments,this,e(c,a(d)))}}]),b.module("a8m.is-empty",[]).filter("isEmpty",function(){return function(a){return D(a)?!d(a).length:!a.length}}),b.module("a8m.join",[]).filter("join",function(){return function(a,b){return z(a)||!E(a)?a:(z(b)&&(b=" "),a.join(b))}}),b.module("a8m.last",[]).filter("last",["$parse",function(a){return function(b){var e,f,g,i=H(b);return i=D(i)?d(i):i,E(i)?(g=Array.prototype.slice.call(arguments,1),e=C(g[0])?g[0]:1,f=C(g[0])?C(g[1])?c:g[1]:g[0],g.length?h(i.reverse(),e,f?a(f):f).reverse():i[i.length-1]):i}}]),b.module("a8m.map",[]).filter("map",["$parse",function(a){return function(b,c){return b=D(b)?d(b):b,!E(b)||z(c)?b:b.map(function(b){return a(c)(b)})}}]),b.module("a8m.omit",[]).filter("omit",["$parse",function(a){return function(b,c){return b=D(b)?d(b):b,!E(b)||z(c)?b:b.filter(function(b){return!a(c)(b)})}}]),b.module("a8m.pick",[]).filter("pick",["$parse",function(a){return function(b,c){return b=D(b)?d(b):b,!E(b)||z(c)?b:b.filter(function(b){return a(c)(b)})}}]),b.module("a8m.range",[]).filter("range",function(){return function(a,b,c,d,e){c=c||0,d=d||1;for(var f=0;f<parseInt(b);f++){var g=c+f*d;a.push(A(e)?e(g):g)}return a}}),b.module("a8m.remove-with",[]).filter("removeWith",function(){return function(a,b){return z(b)?a:(a=D(a)?d(a):a,a.filter(function(a){return!f(b,a)}))}}),b.module("a8m.remove",[]).filter("remove",function(){return function(a){a=D(a)?d(a):a;var b=Array.prototype.slice.call(arguments,1);return E(a)?a.filter(function(a){return!b.some(function(b){return I(b,a)})}):a}}),b.module("a8m.reverse",[]).filter("reverse",[function(){return function(a){return a=D(a)?d(a):a,B(a)?a.split("").reverse().join(""):E(a)?a.slice().reverse():a}}]),b.module("a8m.search-field",[]).filter("searchField",["$parse",function(a){return function(b){var c,e;b=D(b)?d(b):b;var f=Array.prototype.slice.call(arguments,1);return E(b)&&f.length?b.map(function(b){return e=f.map(function(d){return(c=a(d))(b)}).join(" "),G(b,{searchField:e})}):b}}]),b.module("a8m.to-array",[]).filter("toArray",function(){return function(a,b){return D(a)?b?Object.keys(a).map(function(b){return G(a[b],{$key:b})}):d(a):a}}),b.module("a8m.unique",[]).filter({unique:["$parse",v],uniq:["$parse",v]}),b.module("a8m.where",[]).filter("where",function(){return function(a,b){return z(b)?a:(a=D(a)?d(a):a,a.filter(function(a){return f(b,a)}))}}),b.module("a8m.xor",[]).filter("xor",["$parse",function(a){return function(b,c,e){function f(b,c){var d=a(e);return c.some(function(a){return e?I(d(a),d(b)):I(a,b)})}return e=e||!1,b=D(b)?d(b):b,c=D(c)?d(c):c,E(b)&&E(c)?b.concat(c).filter(function(a){return!(f(a,b)&&f(a,c))}):b}}]),b.module("a8m.math.abs",[]).filter("abs",function(){return function(a){return Math.abs(a)}}),b.module("a8m.math.byteFmt",[]).filter("byteFmt",function(){var a=[{str:"B",val:1024}];return["KB","MB","GB","TB","PB","EB","ZB","YB"].forEach(function(b,c){a.push({str:b,val:1024*a[c].val})}),function(b,c){if(C(c)&&isFinite(c)&&c%1===0&&c>=0&&C(b)&&isFinite(b)){for(var d=0;d<a.length-1&&b>=a[d].val;)d++;return b/=d>0?a[d-1].val:1,i(b,c)+" "+a[d].str}return"NaN"}}),b.module("a8m.math.degrees",[]).filter("degrees",function(){return function(a,b){if(C(b)&&isFinite(b)&&b%1===0&&b>=0&&C(a)&&isFinite(a)){var c=180*a/Math.PI;return Math.round(c*Math.pow(10,b))/Math.pow(10,b)}return"NaN"}}),b.module("a8m.math.kbFmt",[]).filter("kbFmt",function(){var a=[{str:"KB",val:1024}];return["MB","GB","TB","PB","EB","ZB","YB"].forEach(function(b,c){a.push({str:b,val:1024*a[c].val})}),function(b,c){if(C(c)&&isFinite(c)&&c%1===0&&c>=0&&C(b)&&isFinite(b)){for(var d=0;d<a.length-1&&b>=a[d].val;)d++;return b/=d>0?a[d-1].val:1,i(b,c)+" "+a[d].str}return"NaN"}}),b.module("a8m.math.max",[]).filter("max",["$parse",function(a){function b(b,c){var d=b.map(function(b){return a(c)(b)});return d.indexOf(Math.max.apply(Math,d))}return function(a,c){return E(a)?z(c)?Math.max.apply(Math,a):a[b(a,c)]:a}}]),b.module("a8m.math.min",[]).filter("min",["$parse",function(a){function b(b,c){var d=b.map(function(b){return a(c)(b)});return d.indexOf(Math.min.apply(Math,d))}return function(a,c){return E(a)?z(c)?Math.min.apply(Math,a):a[b(a,c)]:a}}]),b.module("a8m.math.percent",[]).filter("percent",function(){return function(a,b,c){var d=B(a)?Number(a):a;return b=b||100,c=c||!1,!C(d)||isNaN(d)?a:c?Math.round(d/b*100):d/b*100}}),b.module("a8m.math.radians",[]).filter("radians",function(){return function(a,b){if(C(b)&&isFinite(b)&&b%1===0&&b>=0&&C(a)&&isFinite(a)){var c=3.14159265359*a/180;return Math.round(c*Math.pow(10,b))/Math.pow(10,b)}return"NaN"}}),b.module("a8m.math.radix",[]).filter("radix",function(){return function(a,b){var c=/^[2-9]$|^[1-2]\d$|^3[0-6]$/;return C(a)&&c.test(b)?a.toString(b).toUpperCase():a}}),b.module("a8m.math.shortFmt",[]).filter("shortFmt",function(){return function(a,b){return C(b)&&isFinite(b)&&b%1===0&&b>=0&&C(a)&&isFinite(a)?a<1e3?""+a:a<1e6?i(a/1e3,b)+" K":a<1e9?i(a/1e6,b)+" M":i(a/1e9,b)+" B":"NaN"}}),b.module("a8m.math.sum",[]).filter("sum",function(){return function(a,b){return E(a)?a.reduce(function(a,b){return a+b},b||0):a}}),b.module("a8m.ends-with",[]).filter("endsWith",function(){return function(a,b,c){var d,e=c||!1;return!B(a)||z(b)?a:(a=e?a:a.toLowerCase(),d=a.length-b.length,a.indexOf(e?b:b.toLowerCase(),d)!==-1)}}),b.module("a8m.latinize",[]).filter("latinize",[function(){function a(a){return a.replace(/[^\u0000-\u007E]/g,function(a){return c[a]||a})}for(var b=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"OE",letters:"Œ"},{base:"oe",letters:"œ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],c={},d=0;d<b.length;d++)for(var e=b[d].letters.split(""),f=0;f<e.length;f++)c[e[f]]=b[d].base;return function(b){return B(b)?a(b):b}}]),b.module("a8m.ltrim",[]).filter("ltrim",function(){return function(a,b){var c=b||"\\s";return B(a)?a.replace(new RegExp("^"+c+"+"),""):a}}),b.module("a8m.match",[]).filter("match",function(){return function(a,b,c){var d=new RegExp(b,c);return B(a)?a.match(d):null}}),b.module("a8m.phoneUS",[]).filter("phoneUS",function(){return function(a){return a+="","("+a.slice(0,3)+") "+a.slice(3,6)+"-"+a.slice(6)}}),b.module("a8m.repeat",[]).filter("repeat",[function(){return function(a,b,c){var d=~~b;return B(a)&&d?w(a,--b,c||""):a}}]),b.module("a8m.rtrim",[]).filter("rtrim",function(){return function(a,b){var c=b||"\\s";return B(a)?a.replace(new RegExp(c+"+$"),""):a}}),b.module("a8m.slugify",[]).filter("slugify",[function(){return function(a,b){var c=z(b)?"-":b;return B(a)?a.toLowerCase().replace(/\s+/g,c):a}}]),b.module("a8m.split",[]).filter("split",function(){function a(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}return function(b,c,d){var f,g,h,i;return z(b)||!B(b)?null:(z(c)&&(c=""),isNaN(d)&&(d=0),f=new RegExp(a(c),"g"),g=b.match(f),e(g)||d>=g.length?[b]:0===d?b.split(c):(h=b.split(c),i=h.splice(0,d+1),h.unshift(i.join(c)),h))}}),b.module("a8m.starts-with",[]).filter("startsWith",function(){return function(a,b,c){var d=c||!1;return!B(a)||z(b)?a:(a=d?a:a.toLowerCase(),!a.indexOf(d?b:b.toLowerCase()))}}),b.module("a8m.stringular",[]).filter("stringular",function(){return function(a){var b=Array.prototype.slice.call(arguments,1);return a.replace(/{(\d+)}/g,function(a,c){return z(b[c])?a:b[c]})}}),b.module("a8m.strip-tags",[]).filter("stripTags",function(){return function(a){return B(a)?a.replace(/<\S[^><]*>/g,""):a}}),b.module("a8m.test",[]).filter("test",function(){return function(a,b,c){var d=new RegExp(b,c);return B(a)?d.test(a):a}}),b.module("a8m.trim",[]).filter("trim",function(){return function(a,b){var c=b||"\\s";return B(a)?a.replace(new RegExp("^"+c+"+|"+c+"+$","g"),""):a}}),b.module("a8m.truncate",[]).filter("truncate",function(){return function(a,b,c,d){return b=z(b)?a.length:b,d=d||!1,c=c||"",!B(a)||a.length<=b?a:a.substring(0,d?a.indexOf(" ",b)===-1?a.length:a.indexOf(" ",b):b)+c}}),b.module("a8m.ucfirst",[]).filter({ucfirst:x,titleize:x}),b.module("a8m.uri-component-encode",[]).filter("uriComponentEncode",["$window",function(a){return function(b){return B(b)?a.encodeURIComponent(b):b}}]),b.module("a8m.uri-encode",[]).filter("uriEncode",["$window",function(a){return function(b){return B(b)?a.encodeURI(b):b}}]),b.module("a8m.wrap",[]).filter("wrap",function(){return function(a,b,c){return B(a)&&y(b)?[b,a,c||b].join(""):a}}),b.module("a8m.filter-watcher",[]).provider("filterWatcher",function(){this.$get=["$window","$rootScope",function(a,b){function c(b,c){function d(){var b=[];return function(c,d){if(D(d)&&!e(d)){if(~b.indexOf(d))return"[Circular]";b.push(d)}return a==d?"$WINDOW":a.document==d?"$DOCUMENT":k(d)?"$SCOPE":d}}return[b,JSON.stringify(c,d())].join("#").replace(/"/g,"")}function d(a){var b=a.targetScope.$id;F(l[b],function(a){delete j[a]}),delete l[b]}function f(){m(function(){b.$$phase||(j={})},2e3)}function g(a,b){var c=a.$id;return z(l[c])&&(a.$on("$destroy",d),l[c]=[]),l[c].push(b)}function h(a,b){var d=c(a,b);return j[d]}function i(a,b,d,e){var h=c(a,b);return j[h]=e,k(d)?g(d,h):f(),e}var j={},l={},m=a.setTimeout;return{isMemoized:h,memoize:i}}]}),b.module("angular.filter",["a8m.ucfirst","a8m.uri-encode","a8m.uri-component-encode","a8m.slugify","a8m.latinize","a8m.strip-tags","a8m.stringular","a8m.truncate","a8m.starts-with","a8m.ends-with","a8m.wrap","a8m.trim","a8m.ltrim","a8m.rtrim","a8m.repeat","a8m.test","a8m.match","a8m.split","a8m.phoneUS","a8m.to-array","a8m.concat","a8m.contains","a8m.unique","a8m.is-empty","a8m.after","a8m.after-where","a8m.before","a8m.before-where","a8m.defaults","a8m.where","a8m.reverse","a8m.remove","a8m.remove-with","a8m.group-by","a8m.count-by","a8m.chunk-by","a8m.search-field","a8m.fuzzy-by","a8m.fuzzy","a8m.omit","a8m.pick","a8m.every","a8m.filter-by","a8m.xor","a8m.map","a8m.first","a8m.last","a8m.flatten","a8m.join","a8m.range","a8m.math.max","a8m.math.min","a8m.math.abs","a8m.math.percent","a8m.math.radix","a8m.math.sum","a8m.math.degrees","a8m.math.radians","a8m.math.byteFmt","a8m.math.kbFmt","a8m.math.shortFmt","a8m.angular","a8m.conditions","a8m.is-null","a8m.filter-watcher"])}(window,window.angular);;
// Source: ./node_modules/ng-file-upload/dist/ng-file-upload.min.js
/*! 5.0.9 */
!window.XMLHttpRequest||window.FileAPI&&FileAPI.shouldLoad||(window.XMLHttpRequest.prototype.setRequestHeader=function(a){return function(b,c){if("__setXHR_"===b){var d=c(this);d instanceof Function&&d(this)}else a.apply(this,arguments)}}(window.XMLHttpRequest.prototype.setRequestHeader));var ngFileUpload=angular.module("ngFileUpload",[]);ngFileUpload.version="5.0.9",ngFileUpload.service("Upload",["$http","$q","$timeout",function(a,b,c){function d(d){d.method=d.method||"POST",d.headers=d.headers||{};var e=b.defer(),f=e.promise;return d.headers.__setXHR_=function(){return function(a){a&&(d.__XHR=a,d.xhrFn&&d.xhrFn(a),a.upload.addEventListener("progress",function(a){a.config=d,e.notify?e.notify(a):f.progressFunc&&c(function(){f.progressFunc(a)})},!1),a.upload.addEventListener("load",function(a){a.lengthComputable&&(a.config=d,e.notify?e.notify(a):f.progressFunc&&c(function(){f.progressFunc(a)}))},!1))}},a(d).then(function(a){e.resolve(a)},function(a){e.reject(a)},function(a){e.notify(a)}),f.success=function(a){return f.then(function(b){a(b.data,b.status,b.headers,d)}),f},f.error=function(a){return f.then(null,function(b){a(b.data,b.status,b.headers,d)}),f},f.progress=function(a){return f.progressFunc=a,f.then(null,null,function(b){a(b)}),f},f.abort=function(){return d.__XHR&&c(function(){d.__XHR.abort()}),f},f.xhr=function(a){return d.xhrFn=function(b){return function(){b&&b.apply(f,arguments),a.apply(f,arguments)}}(d.xhrFn),f},f}this.upload=function(a){function b(c,d,e){if(void 0!==d)if(angular.isDate(d)&&(d=d.toISOString()),angular.isString(d))c.append(e,d);else if("form"===a.sendFieldsAs)if(angular.isObject(d))for(var f in d)d.hasOwnProperty(f)&&b(c,d[f],e+"["+f+"]");else c.append(e,d);else d=angular.isString(d)?d:JSON.stringify(d),"json-blob"===a.sendFieldsAs?c.append(e,new Blob([d],{type:"application/json"})):c.append(e,d)}return a.headers=a.headers||{},a.headers["Content-Type"]=void 0,a.transformRequest=a.transformRequest?angular.isArray(a.transformRequest)?a.transformRequest:[a.transformRequest]:[],a.transformRequest.push(function(c){var d,e=new FormData,f={};for(d in a.fields)a.fields.hasOwnProperty(d)&&(f[d]=a.fields[d]);c&&(f.data=c);for(d in f)if(f.hasOwnProperty(d)){var g=f[d];a.formDataAppender?a.formDataAppender(e,d,g):b(e,g,d)}if(null!=a.file){var h=a.fileFormDataName||"file";if(angular.isArray(a.file))for(var i=angular.isString(h),j=0;j<a.file.length;j++)e.append(i?h:h[j],a.file[j],a.fileName&&a.fileName[j]||a.file[j].name);else e.append(h,a.file,a.fileName||a.file.name)}return e}),d(a)},this.http=function(b){return b.transformRequest=b.transformRequest||function(b){return window.ArrayBuffer&&b instanceof window.ArrayBuffer||b instanceof Blob?b:a.defaults.transformRequest[0](arguments)},d(b)}}]),function(){function a(a,e,f,g,h,i,j){function k(){return"input"===e[0].tagName.toLowerCase()&&f.type&&"file"===f.type.toLowerCase()}function l(b){if(!r){r=!0;try{for(var e=b.__files_||b.target&&b.target.files,j=[],k=[],l=0;l<e.length;l++){var m=e.item(l);c(a,h,f,m,b)?j.push(m):k.push(m)}d(h,i,a,g,f,f.ngfChange||f.ngfSelect,j,k,b),0===j.length&&(b.target.value=j)}finally{r=!1}}}function m(b){f.ngfMultiple&&b.attr("multiple",h(f.ngfMultiple)(a)),f.ngfCapture&&b.attr("capture",h(f.ngfCapture)(a)),f.accept&&b.attr("accept",f.accept);for(var c=0;c<e[0].attributes.length;c++){var d=e[0].attributes[c];(k()&&"type"!==d.name||"type"!==d.name&&"class"!==d.name&&"id"!==d.name&&"style"!==d.name)&&b.attr(d.name,d.value)}}function n(b,c){if(!c&&(b||k()))return e.$$ngfRefElem||e;var d=angular.element('<input type="file">');return m(d),k()?(e.replaceWith(d),e=d,d.attr("__ngf_gen__",!0),j(e)(a)):(d.css("visibility","hidden").css("position","absolute").css("overflow","hidden").css("width","0px").css("height","0px").css("z-index","-100000").css("border","none").css("margin","0px").css("padding","0px").attr("tabindex","-1"),e.$$ngfRefElem&&e.$$ngfRefElem.remove(),e.$$ngfRefElem=d,document.body.appendChild(d[0])),d}function o(b){d(h,i,a,g,f,f.ngfChange||f.ngfSelect,[],[],b,!0)}function p(c){function d(a){a&&i[0].click(),(k()||!a)&&e.bind("click touchend",p)}if(e.attr("disabled")||q)return!1;null!=c&&(c.preventDefault(),c.stopPropagation());var g=h(f.ngfResetOnClick)(a)!==!1,i=n(c,g);return i&&((!c||g)&&i.bind("change",l),c&&g&&h(f.ngfResetModelOnClick)(a)!==!1&&o(c),b(navigator.userAgent)?setTimeout(function(){d(c)},0):d(c)),!1}if(!e.attr("__ngf_gen__")){a.$on("$destroy",function(){e.$$ngfRefElem&&e.$$ngfRefElem.remove()});var q=!1;-1===f.ngfSelect.search(/\W+$files\W+/)&&a.$watch(f.ngfSelect,function(a){q=a===!1});var r=!1;window.FileAPI&&window.FileAPI.ngfFixIE?window.FileAPI.ngfFixIE(e,n,m,l):p()}}function b(a){var b=a.match(/Android[^\d]*(\d+)\.(\d+)/);return b&&b.length>2?parseInt(b[1])<4||4===parseInt(b[1])&&parseInt(b[2])<4:/.*Windows.*Safari.*/.test(a)}ngFileUpload.directive("ngfSelect",["$parse","$timeout","$compile",function(b,c,d){return{restrict:"AEC",require:"?ngModel",link:function(e,f,g,h){a(e,f,g,h,b,c,d)}}}]),ngFileUpload.validate=function(a,b,c,d,e){function f(a){if(a.length>2&&"/"===a[0]&&"/"===a[a.length-1])return a.substring(1,a.length-1);var b=a.split(","),c="";if(b.length>1)for(var d=0;d<b.length;d++)c+="("+f(b[d])+")",d<b.length-1&&(c+="|");else 0===a.indexOf(".")&&(a="*"+a),c="^"+a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]","g"),"\\$&")+"$",c=c.replace(/\\\*/g,".*").replace(/\\\?/g,".");return c}var g=b(c.ngfAccept)(a,{$file:d,$event:e}),h=b(c.ngfMaxSize)(a,{$file:d,$event:e})||9007199254740991,i=b(c.ngfMinSize)(a,{$file:d,$event:e})||-1;if(null!=g&&angular.isString(g)){var j=new RegExp(f(g),"gi");g=null!=d.type&&j.test(d.type.toLowerCase())||null!=d.name&&j.test(d.name.toLowerCase())}return(null==g||g)&&(null==d.size||d.size<h&&d.size>i)},ngFileUpload.updateModel=function(a,b,c,d,e,f,g,h,i,j){function k(){if(a(e.ngfKeep)(c)===!0){var j=(d.$modelValue||[]).slice(0);if(g&&g.length)if(a(e.ngfKeepDistinct)(c)===!0){for(var k=j.length,l=0;l<g.length;l++){for(var m=0;k>m&&g[l].name!==j[m].name;m++);m===k&&j.push(g[l])}g=j}else g=j.concat(g);else g=j}d&&(a(e.ngModel).assign(c,g),b(function(){d&&d.$setViewValue(null!=g&&0===g.length?null:g)})),e.ngModelRejected&&a(e.ngModelRejected).assign(c,h),f&&a(f)(c,{$files:g,$rejectedFiles:h,$event:i})}j?k():b(function(){k()})};var c=ngFileUpload.validate,d=ngFileUpload.updateModel}(),function(){function a(a,e,f,g,h,i,j){function k(a,b,d){var e=!0,f=d.dataTransfer.items;if(null!=f)for(var g=0;g<f.length&&e;g++)e=e&&("file"===f[g].kind||""===f[g].kind)&&c(a,h,b,f[g],d);var i=h(b.ngfDragOverClass)(a,{$event:d});return i&&(i.delay&&(r=i.delay),i.accept&&(i=e?i.accept:i.reject)),i||b.ngfDragOverClass||"dragover"}function l(b,d,e,g){function k(d){c(a,h,f,d,b)?m.push(d):n.push(d)}function l(a,b,c){if(null!=b)if(b.isDirectory){var d=(c||"")+b.name;k({name:b.name,type:"directory",path:d});var e=b.createReader(),f=[];p++;var g=function(){e.readEntries(function(d){try{if(d.length)f=f.concat(Array.prototype.slice.call(d||[],0)),g();else{for(var e=0;e<f.length;e++)l(a,f[e],(c?c:"")+b.name+"/");p--}}catch(h){p--,console.error(h)}},function(){p--})};g()}else p++,b.file(function(a){try{p--,a.path=(c?c:"")+a.name,k(a)}catch(b){p--,console.error(b)}},function(){p--})}var m=[],n=[],o=b.dataTransfer.items,p=0;if(o&&o.length>0&&"file"!==j.protocol())for(var q=0;q<o.length;q++){if(o[q].webkitGetAsEntry&&o[q].webkitGetAsEntry()&&o[q].webkitGetAsEntry().isDirectory){var r=o[q].webkitGetAsEntry();if(r.isDirectory&&!e)continue;null!=r&&l(m,r)}else{var s=o[q].getAsFile();null!=s&&k(s)}if(!g&&m.length>0)break}else{var t=b.dataTransfer.files;if(null!=t)for(var u=0;u<t.length&&(k(t.item(u)),g||!(m.length>0));u++);}var v=0;!function w(a){i(function(){if(p)10*v++<2e4&&w(10);else{if(!g&&m.length>1){for(q=0;"directory"===m[q].type;)q++;m=[m[q]]}d(m,n)}},a||0)}()}var m=b();if(f.dropAvailable&&i(function(){a[f.dropAvailable]?a[f.dropAvailable].value=m:a[f.dropAvailable]=m}),!m)return void(h(f.ngfHideOnDropNotAvailable)(a)===!0&&e.css("display","none"));var n=!1;-1===f.ngfDrop.search(/\W+$files\W+/)&&a.$watch(f.ngfDrop,function(a){n=a===!1});var o,p=null,q=h(f.ngfStopPropagation),r=1;e[0].addEventListener("dragover",function(b){if(!e.attr("disabled")&&!n){if(b.preventDefault(),q(a)&&b.stopPropagation(),navigator.userAgent.indexOf("Chrome")>-1){var c=b.dataTransfer.effectAllowed;b.dataTransfer.dropEffect="move"===c||"linkMove"===c?"move":"copy"}i.cancel(p),a.actualDragOverClass||(o=k(a,f,b)),e.addClass(o)}},!1),e[0].addEventListener("dragenter",function(b){e.attr("disabled")||n||(b.preventDefault(),q(a)&&b.stopPropagation())},!1),e[0].addEventListener("dragleave",function(){e.attr("disabled")||n||(p=i(function(){e.removeClass(o),o=null},r||1))},!1),e[0].addEventListener("drop",function(b){e.attr("disabled")||n||(b.preventDefault(),q(a)&&b.stopPropagation(),e.removeClass(o),o=null,l(b,function(c,e){d(h,i,a,g,f,f.ngfChange||f.ngfDrop,c,e,b)},h(f.ngfAllowDir)(a)!==!1,f.multiple||h(f.ngfMultiple)(a)))},!1)}function b(){var a=document.createElement("div");return"draggable"in a&&"ondrop"in a}var c=ngFileUpload.validate,d=ngFileUpload.updateModel;ngFileUpload.directive("ngfDrop",["$parse","$timeout","$location",function(b,c,d){return{restrict:"AEC",require:"?ngModel",link:function(e,f,g,h){a(e,f,g,h,b,c,d)}}}]),ngFileUpload.directive("ngfNoFileDrop",function(){return function(a,c){b()&&c.css("display","none")}}),ngFileUpload.directive("ngfDropAvailable",["$parse","$timeout",function(a,c){return function(d,e,f){if(b()){var g=a(f.ngfDropAvailable);c(function(){g(d),g.assign&&g.assign(d,!0)})}}}]),ngFileUpload.directive("ngfSrc",["$parse","$timeout",function(a,b){return{restrict:"AE",link:function(d,e,f){window.FileReader&&d.$watch(f.ngfSrc,function(g){g&&c(d,a,f,g,null)&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 8")||g.size<2e4)&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 9")||g.size<4e6)?b(function(){var a=window.URL||window.webkitURL;if(a&&a.createObjectURL)e.attr("src",a.createObjectURL(g));else{var c=new FileReader;c.readAsDataURL(g),c.onload=function(a){b(function(){e.attr("src",a.target.result)})}}}):e.attr("src",f.ngfDefaultSrc||"")})}}}])}();;
// Source: ./node_modules/angular-socket-io/socket.min.js
/*
 * @license
 * angular-socket-io v0.7.0
 * (c) 2014 Brian Ford http://briantford.com
 * License: MIT
 */
angular.module("btford.socket-io",[]).provider("socketFactory",function(){"use strict";var n="socket:";this.$get=["$rootScope","$timeout",function(t,e){var r=function(n,t){return t?function(){var r=arguments;e(function(){t.apply(n,r)},0)}:angular.noop};return function(e){e=e||{};var o=e.ioSocket||io.connect(),c=void 0===e.prefix?n:e.prefix,u=e.scope||t,i=function(n,t){o.on(n,t.__ng=r(o,t))},a=function(n,t){o.once(n,t.__ng=r(o,t))},s={on:i,addListener:i,once:a,emit:function(n,t,e){var c=arguments.length-1,e=arguments[c];return"function"==typeof e&&(e=r(o,e),arguments[c]=e),o.emit.apply(o,arguments)},removeListener:function(n,t){return t&&t.__ng&&(arguments[1]=t.__ng),o.removeListener.apply(o,arguments)},removeAllListeners:function(){return o.removeAllListeners.apply(o,arguments)},disconnect:function(n){return o.disconnect(n)},connect:function(){return o.connect()},forward:function(n,t){n instanceof Array==!1&&(n=[n]),t||(t=u),n.forEach(function(n){var e=c+n,u=r(o,function(){Array.prototype.unshift.call(arguments,e),t.$broadcast.apply(t,arguments)});t.$on("$destroy",function(){o.removeListener(n,u)}),o.on(n,u)})}};return s}}]});
//# sourceMappingURL=socket.min.js.map;
// Source: ./node_modules/ng-dialog/js/ngDialog.min.js
/*! ng-dialog - v0.6.3 (https://github.com/likeastore/ngDialog) */
!function(a,b){"undefined"!=typeof module&&module.exports?(b("undefined"==typeof angular?require("angular"):angular),module.exports="ngDialog"):"function"==typeof define&&define.amd?define(["angular"],b):b(a.angular)}(this,function(a){"use strict";var b=a.module("ngDialog",[]),c=a.element,d=a.isDefined,e=(document.body||document.documentElement).style,f=d(e.animation)||d(e.WebkitAnimation)||d(e.MozAnimation)||d(e.MsAnimation)||d(e.OAnimation),g="animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend",h="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]",i="ngdialog-disabled-animation",j={html:!1,body:!1},k={},l=[],m=!1,n=!1;return b.provider("ngDialog",function(){var b=this.defaults={className:"ngdialog-theme-default",appendClassName:"",disableAnimation:!1,plain:!1,showClose:!0,closeByDocument:!0,closeByEscape:!0,closeByNavigation:!1,appendTo:!1,preCloseCallback:!1,overlay:!0,cache:!0,trapFocus:!0,preserveFocus:!0,ariaAuto:!0,ariaRole:null,ariaLabelledById:null,ariaLabelledBySelector:null,ariaDescribedById:null,ariaDescribedBySelector:null,bodyClassName:"ngdialog-open",width:null,height:null};this.setForceHtmlReload=function(a){j.html=a||!1},this.setForceBodyReload=function(a){j.body=a||!1},this.setDefaults=function(c){a.extend(b,c)},this.setOpenOnePerName=function(a){n=a||!1};var d,e=0,o=0,p={};this.$get=["$document","$templateCache","$compile","$q","$http","$rootScope","$timeout","$window","$controller","$injector",function(q,r,s,t,u,v,w,x,y,z){var A=[],B={onDocumentKeydown:function(a){27===a.keyCode&&C.close("$escape")},activate:function(a){var b=a.data("$ngDialogOptions");b.trapFocus&&(a.on("keydown",B.onTrapFocusKeydown),A.body.on("keydown",B.onTrapFocusKeydown))},deactivate:function(a){a.off("keydown",B.onTrapFocusKeydown),A.body.off("keydown",B.onTrapFocusKeydown)},deactivateAll:function(b){a.forEach(b,function(b){var c=a.element(b);B.deactivate(c)})},setBodyPadding:function(a){var b=parseInt(A.body.css("padding-right")||0,10);A.body.css("padding-right",b+a+"px"),A.body.data("ng-dialog-original-padding",b),v.$broadcast("ngDialog.setPadding",a)},resetBodyPadding:function(){var a=A.body.data("ng-dialog-original-padding");a?A.body.css("padding-right",a+"px"):A.body.css("padding-right",""),v.$broadcast("ngDialog.setPadding",0)},performCloseDialog:function(a,b){var c=a.data("$ngDialogOptions"),e=a.attr("id"),h=k[e];if(h){if("undefined"!=typeof x.Hammer){var i=h.hammerTime;i.off("tap",d),i.destroy&&i.destroy(),delete h.hammerTime}else a.unbind("click");1===o&&A.body.unbind("keydown",B.onDocumentKeydown),a.hasClass("ngdialog-closing")||(o-=1);var j=a.data("$ngDialogPreviousFocus");j&&j.focus&&j.focus(),v.$broadcast("ngDialog.closing",a,b),o=o<0?0:o,f&&!c.disableAnimation?(h.$destroy(),a.unbind(g).bind(g,function(){B.closeDialogElement(a,b)}).addClass("ngdialog-closing")):(h.$destroy(),B.closeDialogElement(a,b)),p[e]&&(p[e].resolve({id:e,value:b,$dialog:a,remainingDialogs:o}),delete p[e]),k[e]&&delete k[e],l.splice(l.indexOf(e),1),l.length||(A.body.unbind("keydown",B.onDocumentKeydown),m=!1)}},closeDialogElement:function(a,b){var c=a.data("$ngDialogOptions");a.remove(),0===o&&(A.html.removeClass(c.bodyClassName),A.body.removeClass(c.bodyClassName),B.resetBodyPadding()),v.$broadcast("ngDialog.closed",a,b)},closeDialog:function(b,c){var d=b.data("$ngDialogPreCloseCallback");if(d&&a.isFunction(d)){var e=d.call(b,c);if(a.isObject(e))e.closePromise?e.closePromise.then(function(){B.performCloseDialog(b,c)},function(){return!1}):e.then(function(){B.performCloseDialog(b,c)},function(){return!1});else{if(e===!1)return!1;B.performCloseDialog(b,c)}}else B.performCloseDialog(b,c)},onTrapFocusKeydown:function(b){var c,d=a.element(b.currentTarget);if(d.hasClass("ngdialog"))c=d;else if(c=B.getActiveDialog(),null===c)return;var e=9===b.keyCode,f=b.shiftKey===!0;e&&B.handleTab(c,b,f)},handleTab:function(a,b,c){var d=B.getFocusableElements(a);if(0===d.length)return void(document.activeElement&&document.activeElement.blur&&document.activeElement.blur());var e=document.activeElement,f=Array.prototype.indexOf.call(d,e),g=f===-1,h=0===f,i=f===d.length-1,j=!1;c?(g||h)&&(d[d.length-1].focus(),j=!0):(g||i)&&(d[0].focus(),j=!0),j&&(b.preventDefault(),b.stopPropagation())},autoFocus:function(a){var b=a[0],d=b.querySelector("*[autofocus]");if(null===d||(d.focus(),document.activeElement!==d)){var e=B.getFocusableElements(a);if(e.length>0)return void e[0].focus();var f=B.filterVisibleElements(b.querySelectorAll("h1,h2,h3,h4,h5,h6,p,span"));if(f.length>0){var g=f[0];c(g).attr("tabindex","-1").css("outline","0"),g.focus()}}},getFocusableElements:function(a){var b=a[0],c=b.querySelectorAll(h),d=B.filterTabbableElements(c);return B.filterVisibleElements(d)},filterTabbableElements:function(a){for(var b=[],d=0;d<a.length;d++){var e=a[d];"-1"!==c(e).attr("tabindex")&&b.push(e)}return b},filterVisibleElements:function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c];(d.offsetWidth>0||d.offsetHeight>0)&&b.push(d)}return b},getActiveDialog:function(){var a=document.querySelectorAll(".ngdialog");return 0===a.length?null:c(a[a.length-1])},applyAriaAttributes:function(a,b){if(b.ariaAuto){if(!b.ariaRole){var c=B.getFocusableElements(a).length>0?"dialog":"alertdialog";b.ariaRole=c}b.ariaLabelledBySelector||(b.ariaLabelledBySelector="h1,h2,h3,h4,h5,h6"),b.ariaDescribedBySelector||(b.ariaDescribedBySelector="article,section,p")}b.ariaRole&&a.attr("role",b.ariaRole),B.applyAriaAttribute(a,"aria-labelledby",b.ariaLabelledById,b.ariaLabelledBySelector),B.applyAriaAttribute(a,"aria-describedby",b.ariaDescribedById,b.ariaDescribedBySelector)},applyAriaAttribute:function(a,b,d,e){if(d&&a.attr(b,d),e){var f=a.attr("id"),g=a[0].querySelector(e);if(!g)return;var h=f+"-"+b;return c(g).attr("id",h),a.attr(b,h),h}},detectUIRouter:function(){try{return a.module("ui.router"),!0}catch(b){return!1}},getRouterLocationEventName:function(){return B.detectUIRouter()?"$stateChangeStart":"$locationChangeStart"}},C={__PRIVATE__:B,open:function(f){function g(a,b){return v.$broadcast("ngDialog.templateLoading",a),u.get(a,b||{}).then(function(b){return v.$broadcast("ngDialog.templateLoaded",a),b.data||""})}function h(b){return b?a.isString(b)&&q.plain?b:"boolean"!=typeof q.cache||q.cache?g(b,{cache:r}):g(b,{cache:!1}):"Empty template"}var j=null;if(f=f||{},!(n&&f.name&&(j=f.name.toLowerCase().replace(/\s/g,"-")+"-dialog",this.isOpen(j)))){var q=a.copy(b),D=++e;j=j||"ngdialog"+D,l.push(j),"undefined"!=typeof q.data&&("undefined"==typeof f.data&&(f.data={}),f.data=a.merge(a.copy(q.data),f.data)),a.extend(q,f);var E;p[j]=E=t.defer();var F;k[j]=F=a.isObject(q.scope)?q.scope.$new():v.$new();var G,H,I,J=a.extend({},q.resolve);return a.forEach(J,function(b,c){J[c]=a.isString(b)?z.get(b):z.invoke(b,null,null,c)}),t.all({template:h(q.template||q.templateUrl),locals:t.all(J)}).then(function(b){var e=b.template,f=b.locals;q.showClose&&(e+='<div class="ngdialog-close"></div>');var g=q.overlay?"":" ngdialog-no-overlay";if(G=c('<div id="'+j+'" class="ngdialog'+g+'"></div>'),G.html(q.overlay?'<div class="ngdialog-overlay"></div><div class="ngdialog-content" role="document">'+e+"</div>":'<div class="ngdialog-content" role="document">'+e+"</div>"),G.data("$ngDialogOptions",q),F.ngDialogId=j,q.data&&a.isString(q.data)){var h=q.data.replace(/^\s*/,"")[0];F.ngDialogData="{"===h||"["===h?a.fromJson(q.data):new String(q.data),F.ngDialogData.ngDialogId=j}else q.data&&a.isObject(q.data)&&(F.ngDialogData=q.data,F.ngDialogData.ngDialogId=j);if(q.className&&G.addClass(q.className),q.appendClassName&&G.addClass(q.appendClassName),q.width&&(I=G[0].querySelector(".ngdialog-content"),a.isString(q.width)?I.style.width=q.width:I.style.width=q.width+"px"),q.height&&(I=G[0].querySelector(".ngdialog-content"),a.isString(q.height)?I.style.height=q.height:I.style.height=q.height+"px"),q.disableAnimation&&G.addClass(i),H=q.appendTo&&a.isString(q.appendTo)?a.element(document.querySelector(q.appendTo)):A.body,B.applyAriaAttributes(G,q),q.preCloseCallback){var k;a.isFunction(q.preCloseCallback)?k=q.preCloseCallback:a.isString(q.preCloseCallback)&&F&&(a.isFunction(F[q.preCloseCallback])?k=F[q.preCloseCallback]:F.$parent&&a.isFunction(F.$parent[q.preCloseCallback])?k=F.$parent[q.preCloseCallback]:v&&a.isFunction(v[q.preCloseCallback])&&(k=v[q.preCloseCallback])),k&&G.data("$ngDialogPreCloseCallback",k)}if(F.closeThisDialog=function(a){B.closeDialog(G,a)},q.controller&&(a.isString(q.controller)||a.isArray(q.controller)||a.isFunction(q.controller))){var l;q.controllerAs&&a.isString(q.controllerAs)&&(l=q.controllerAs);var n=y(q.controller,a.extend(f,{$scope:F,$element:G}),!0,l);q.bindToController&&a.extend(n.instance,{ngDialogId:F.ngDialogId,ngDialogData:F.ngDialogData,closeThisDialog:F.closeThisDialog,confirm:F.confirm}),"function"==typeof n?G.data("$ngDialogControllerController",n()):G.data("$ngDialogControllerController",n)}if(w(function(){var a=document.querySelectorAll(".ngdialog");B.deactivateAll(a),s(G)(F);var b=x.innerWidth-A.body.prop("clientWidth");A.html.addClass(q.bodyClassName),A.body.addClass(q.bodyClassName);var c=b-(x.innerWidth-A.body.prop("clientWidth"));c>0&&B.setBodyPadding(c),H.append(G),B.activate(G),q.trapFocus&&B.autoFocus(G),q.name?v.$broadcast("ngDialog.opened",{dialog:G,name:q.name}):v.$broadcast("ngDialog.opened",G)}),m||(A.body.bind("keydown",B.onDocumentKeydown),m=!0),q.closeByNavigation){var p=B.getRouterLocationEventName();v.$on(p,function(a){B.closeDialog(G)===!1&&a.preventDefault()})}if(q.preserveFocus&&G.data("$ngDialogPreviousFocus",document.activeElement),d=function(a){var b=!!q.closeByDocument&&c(a.target).hasClass("ngdialog-overlay"),d=c(a.target).hasClass("ngdialog-close");(b||d)&&C.close(G.attr("id"),d?"$closeButton":"$document")},"undefined"!=typeof x.Hammer){var r=F.hammerTime=x.Hammer(G[0]);r.on("tap",d)}else G.bind("click",d);return o+=1,C}),{id:j,closePromise:E.promise,close:function(a){B.closeDialog(G,a)}}}},openConfirm:function(d){var e=t.defer(),f=a.copy(b);d=d||{},"undefined"!=typeof f.data&&("undefined"==typeof d.data&&(d.data={}),d.data=a.merge(a.copy(f.data),d.data)),a.extend(f,d),f.scope=a.isObject(f.scope)?f.scope.$new():v.$new(),f.scope.confirm=function(a){e.resolve(a);var b=c(document.getElementById(g.id));B.performCloseDialog(b,a)};var g=C.open(f);if(g)return g.closePromise.then(function(a){return a?e.reject(a.value):e.reject()}),e.promise},isOpen:function(a){var b=c(document.getElementById(a));return b.length>0},close:function(a,b){var d=c(document.getElementById(a));if(d.length)B.closeDialog(d,b);else if("$escape"===a){var e=l[l.length-1];d=c(document.getElementById(e)),d.data("$ngDialogOptions").closeByEscape&&B.closeDialog(d,"$escape")}else C.closeAll(b);return C},closeAll:function(a){for(var b=document.querySelectorAll(".ngdialog"),d=b.length-1;d>=0;d--){var e=b[d];B.closeDialog(c(e),a)}},getOpenDialogs:function(){return l},getDefaults:function(){return b}};return a.forEach(["html","body"],function(a){if(A[a]=q.find(a),j[a]){var b=B.getRouterLocationEventName();v.$on(b,function(){A[a]=q.find(a)})}}),C}]}),b.directive("ngDialog",["ngDialog",function(b){return{restrict:"A",scope:{ngDialogScope:"="},link:function(c,d,e){d.on("click",function(d){d.preventDefault();var f=a.isDefined(c.ngDialogScope)?c.ngDialogScope:"noScope";a.isDefined(e.ngDialogClosePrevious)&&b.close(e.ngDialogClosePrevious);var g=b.getDefaults();b.open({template:e.ngDialog,className:e.ngDialogClass||g.className,appendClassName:e.ngDialogAppendClass,controller:e.ngDialogController,controllerAs:e.ngDialogControllerAs,bindToController:e.ngDialogBindToController,scope:f,data:e.ngDialogData,showClose:"false"!==e.ngDialogShowClose&&("true"===e.ngDialogShowClose||g.showClose),closeByDocument:"false"!==e.ngDialogCloseByDocument&&("true"===e.ngDialogCloseByDocument||g.closeByDocument),closeByEscape:"false"!==e.ngDialogCloseByEscape&&("true"===e.ngDialogCloseByEscape||g.closeByEscape),overlay:"false"!==e.ngDialogOverlay&&("true"===e.ngDialogOverlay||g.overlay),preCloseCallback:e.ngDialogPreCloseCallback||g.preCloseCallback,bodyClassName:e.ngDialogBodyClass||g.bodyClassName})})}}}]),b});;
// Source: ./node_modules/angular-paginate-anything/dist/paginate-anything-tpls.js
(function() {
// 1 2 5 10 25 50 100 250 500 etc
  function quantizedNumber(i) {
    var adjust = [1, 2.5, 5];
    return Math.floor(Math.pow(10, Math.floor(i/3)) * adjust[i % 3]);
  }

  // the j such that quantizedNumber(j) is closest to i
  function quantizedIndex(i) {
    if(i < 1) { return 0; }
    var group = Math.floor(Math.log(i) / Math.LN10),
        offset = i/(2.5 * Math.pow(10, group));
    if(offset >= 3) {
      group++;
      offset = 0;
    }
    return 3*group + Math.round(Math.min(2, offset));
  }

  function quantize(i) {
    if(i === Infinity) { return Infinity; }
    return quantizedNumber(quantizedIndex(i));
  }

  // don't overwrite default response transforms
  function appendTransform(defaults, transform) {
    defaults = angular.isArray(defaults) ? defaults : [defaults];
    return (transform) ? defaults.concat(transform) : defaults;
  }

  angular.module('bgf.paginateAnything', []).

    directive('bgfPagination', function () {
      var defaultLinkGroupSize = 3, defaultClientLimit = 250, defaultPerPage = 50;

      return {
        restrict: 'AE',
        scope: {
          // required
          url: '=',
          collection: '=',

          // optional
          urlParams: '=?',
          headers: '=?',
          page: '=?',
          perPage: '=?',
          perPagePresets: '=?',
          autoPresets: '=?',
          clientLimit: '=?',
          linkGroupSize: '=?',
          reloadPage: '=?',
          size: '=?',
          passive: '@',
          transformResponse: '=?',

          // directive -> app communication only
          numPages: '=?',
          numItems: '=?',
          serverLimit: '=?',
          rangeFrom: '=?',
          rangeTo: '=?'
        },
        templateUrl: function(element, attr) {
          return attr.templateUrl || 'src/paginate-anything.html';
        },
        replace: true,
        controller: ['$scope', '$http', function($scope, $http) {

          $scope.reloadPage   = false;
          $scope.serverLimit  = Infinity; // it's not known yet
          $scope.Math         = window.Math; // Math for the template

          if(typeof $scope.autoPresets !== 'boolean') {
            $scope.autoPresets = true;
          }

          var lgs = $scope.linkGroupSize, cl = $scope.clientLimit;
          $scope.linkGroupSize  = typeof lgs === 'number' ? lgs : defaultLinkGroupSize;
          $scope.clientLimit    = typeof cl  === 'number' ? cl : defaultClientLimit;

          $scope.updatePresets  = function () {
            if($scope.autoPresets) {
              var presets = [], i;
              for(i = Math.min(3, quantizedIndex($scope.perPage || defaultPerPage));
                  i <= quantizedIndex(Math.min($scope.clientLimit, $scope.serverLimit));
                  i++) {
                presets.push(quantizedNumber(i));
              }
              $scope.perPagePresets = presets;
            } else {
              $scope.perPagePresets = $scope.perPagePresets.filter(
                function (preset) { return preset <= $scope.serverLimit; }
              ).concat([$scope.serverLimit]);
            }
          };

          $scope.gotoPage = function (i) {
            if(i < 0 || i*$scope.perPage >= $scope.numItems) {
              return;
            }
            $scope.page = i;
          };

          $scope.linkGroupFirst = function() {
            var rightDebt = Math.max( 0,
              $scope.linkGroupSize - ($scope.numPages - 1 - ($scope.page + 2))
            );
            return Math.max( 0,
              $scope.page - ($scope.linkGroupSize + rightDebt)
            );
          };

          $scope.linkGroupLast = function() {
            var leftDebt = Math.max( 0,
              $scope.linkGroupSize - ($scope.page - 2)
            );
            return Math.min( $scope.numPages-1,
              $scope.page + ($scope.linkGroupSize + leftDebt)
            );
          };

          $scope.isFinite = function() {
            return $scope.numPages < Infinity;
          };

          function requestRange(request) {
            $scope.$emit('pagination:loadStart', request);
            $http({
              method: 'GET',
              url: $scope.url,
              params: $scope.urlParams,
              headers: angular.extend(
                {}, $scope.headers,
                { 'Range-Unit': 'items', Range: [request.from, request.to].join('-') }
              ),
              transformResponse: appendTransform($http.defaults.transformResponse, $scope.transformResponse)
            }).success(function (data, status, headers, config) {
              var response = parseRange(headers('Content-Range'));
              if(status === 204 || (response && response.total === 0)) {
                $scope.numItems = 0;
                $scope.collection = [];
              } else {
                $scope.numItems = response ? response.total : data.length;
                $scope.collection = data || [];
              }

              if(response) {
                $scope.rangeFrom = response.from;
                $scope.rangeTo   = response.to;
                if(length(response) < response.total) {
                  if(
                    ( request.to < response.total - 1) ||
                    (response.to < response.total - 1 && response.total < request.to)
                  ) {
                    if(!$scope.perPage || length(response) < $scope.perPage) {
                      if($scope.autoPresets) {
                        var idx = quantizedIndex(length(response));
                        if(quantizedNumber(idx) > length(response)) {
                          idx--;
                        }
                        $scope.serverLimit = quantizedNumber(idx);
                      } else {
                        $scope.serverLimit = length(response);
                      }
                      $scope.perPage = $scope.Math.min(
                        $scope.serverLimit,
                        $scope.clientLimit
                      );
                    }
                  }
                }
              }
              $scope.numPages = Math.ceil($scope.numItems / ($scope.perPage || defaultPerPage));

              $scope.$emit('pagination:loadPage', status, config);
            }).error(function (data, status, headers, config) {
              $scope.$emit('pagination:error', status, config);
            });
          }

          $scope.page = $scope.page || 0;
          $scope.size = $scope.size || 'md';
          if($scope.autoPresets) {
            $scope.updatePresets();
          }

          $scope.$watch('page', function(newPage, oldPage) {
            if($scope.passive === 'true') { return; }

            if(newPage !== oldPage) {
              if(newPage < 0 || newPage*$scope.perPage >= $scope.numItems) {
                return;
              }

              var pp = $scope.perPage || defaultPerPage;

              if($scope.autoPresets) {
                pp = quantize(pp);
              }

              requestRange({
                from: newPage * pp,
                to: (newPage+1) * pp - 1
              });
            }
          });

          $scope.$watch('perPage', function(newPp, oldPp) {
            if($scope.passive === 'true') { return; }

            if(typeof(oldPp) === 'number' && newPp !== oldPp) {
              var first = $scope.page * oldPp;
              var newPage = Math.floor(first / newPp);

              if($scope.page !== newPage) {
                $scope.page = newPage;
              } else {
                requestRange({
                  from: $scope.page * newPp,
                  to: ($scope.page+1) * newPp - 1
                });
              }
            }
          });

          $scope.$watch('serverLimit', function(newLimit, oldLimit) {
            if($scope.passive === 'true') { return; }

            if(newLimit !== oldLimit) {
              $scope.updatePresets();
            }
          });

          $scope.$watch('url', function(newUrl, oldUrl) {
            if($scope.passive === 'true') { return; }

            if(newUrl !== oldUrl) {
              if($scope.page === 0){
                $scope.reloadPage = true;
              } else {
                $scope.page = 0;
              }
            }
          });

          $scope.$watch('urlParams', function(newParams, oldParams) {
            if($scope.passive === 'true') { return; }

            if(!angular.equals(newParams, oldParams)) {
              if($scope.page === 0){
                $scope.reloadPage = true;
              } else {
                $scope.page = 0;
              }
            }
          }, true);

          $scope.$watch('headers', function(newHeaders, oldHeaders) {
            if($scope.passive === 'true') { return; }

            if(!angular.equals(newHeaders, oldHeaders)) {
              if($scope.page === 0){
                $scope.reloadPage = true;
              } else {
                $scope.page = 0;
              }
            }
          }, true);

          $scope.$watch('reloadPage', function(newVal, oldVal) {
            if($scope.passive === 'true') { return; }

            if(newVal === true && oldVal === false) {
              $scope.reloadPage = false;
              requestRange({
                from: $scope.page * $scope.perPage,
                to: ($scope.page+1) * $scope.perPage - 1
              });
            }
          });

          $scope.$watch('transformResponse', function(newTransform, oldTransform) {
            if($scope.passive === 'true') { return; }
            if(!newTransform || !oldTransform) { return; }

            // If applying a transform to returned data, it makes sense to start at the first page if changed
            // Unfortunately it's not really possible to compare function equality
            // In lieu of that, for now we'll compare string representations of them.
            if(!angular.equals(newTransform.toString(), oldTransform.toString())) {
              if($scope.page === 0){
                $scope.reloadPage = true;
              } else {
                $scope.page = 0;
              }
            }
          }, true);

          var pp = $scope.perPage || defaultPerPage;

          if($scope.autoPresets) {
            pp = quantize(pp);
          }

          requestRange({
            from: $scope.page * pp,
            to: ($scope.page+1) * pp - 1
          });
        }]
      };
    }).

    filter('makeRange', function() {
      // http://stackoverflow.com/a/14932395/3102996
      return function(input) {
        var lowBound, highBound;
        switch (input.length) {
        case 1:
          lowBound = 0;
          highBound = parseInt(input[0], 10) - 1;
          break;
        case 2:
          lowBound = parseInt(input[0], 10);
          highBound = parseInt(input[1], 10);
          break;
        default:
          return input;
        }
        var result = [];
        for (var i = lowBound; i <= highBound; i++) { result.push(i); }
        return result;
      };
    });


  function parseRange(hdr) {
    var m = hdr && hdr.match(/^(?:items )?(\d+)-(\d+)\/(\d+|\*)$/);
    if(m) {
      return {
        from: +m[1],
        to: +m[2],
        total: m[3] === '*' ? Infinity : +m[3]
      };
    } else if(hdr === '*/0') {
      return { total: 0 };
    }
    return null;
  }

  function length(range) {
    return range.to - range.from + 1;
  }
}());

angular.module('bgf.paginateAnything').run(['$templateCache', function($templateCache) {
$templateCache.put('src/paginate-anything.html',
    "<div class=paginate-anything><ul class=\"pagination pagination-{{size}} links\" ng-if=\"numPages > 1\"><li ng-class=\"{disabled: page <= 0}\"><a href ng-click=gotoPage(page-1)>&laquo;</a></li><li ng-if=\"linkGroupFirst() > 0\"><a href ng-click=gotoPage(0)>1</a></li><li ng-if=\"linkGroupFirst() > 1\" class=disabled><a href>&hellip;</a></li><li ng-repeat=\"p in [linkGroupFirst(), linkGroupLast()] | makeRange\" ng-class=\"{active: p === page}\"><a href ng-click=gotoPage(p)>{{p+1}}</a></li><li ng-if=\"linkGroupLast() < numPages - 2\" class=disabled><a href>&hellip;</a></li><li ng-if=\"isFinite() && linkGroupLast() < numPages - 1\"><a href ng-click=gotoPage(numPages-1)>{{numPages}}</a></li><li ng-class=\"{disabled: page >= numPages - 1}\"><a href ng-click=gotoPage(page+1)>&raquo;</a></li></ul><div class=per-page ng-if=\"perPagePresets.length > 0 && numPages > 1\"><select ng-model=$parent.perPage ng-options=\"p for p in perPagePresets\"></select>per page</div></div>"
  );

}]);
;
// Source: ./node_modules/ng-sortable/dist/ng-sortable.min.js
!function(){"use strict";angular.module("as.sortable",[]).constant("sortableConfig",{itemClass:"as-sortable-item",handleClass:"as-sortable-item-handle",placeHolderClass:"as-sortable-placeholder",dragClass:"as-sortable-drag",hiddenClass:"as-sortable-hidden",dragging:"as-sortable-dragging"})}(),function(){"use strict";var mainModule=angular.module("as.sortable");mainModule.factory("$helper",["$document","$window",function($document,$window){return{height:function(element){return element[0].getBoundingClientRect().height},width:function(element){return element[0].getBoundingClientRect().width},offset:function(element,scrollableContainer){var boundingClientRect=element[0].getBoundingClientRect();return scrollableContainer||(scrollableContainer=$document[0].documentElement),{width:boundingClientRect.width||element.prop("offsetWidth"),height:boundingClientRect.height||element.prop("offsetHeight"),top:boundingClientRect.top+($window.pageYOffset||scrollableContainer.scrollTop-scrollableContainer.offsetTop),left:boundingClientRect.left+($window.pageXOffset||scrollableContainer.scrollLeft-scrollableContainer.offsetLeft)}},eventObj:function(event){var obj=event;return void 0!==event.targetTouches?obj=event.targetTouches.item(0):void 0!==event.originalEvent&&void 0!==event.originalEvent.targetTouches&&(obj=event.originalEvent.targetTouches.item(0)),obj},isTouchInvalid:function(event){var touchInvalid=!1;return void 0!==event.touches&&event.touches.length>1?touchInvalid=!0:void 0!==event.originalEvent&&void 0!==event.originalEvent.touches&&event.originalEvent.touches.length>1&&(touchInvalid=!0),touchInvalid},positionStarted:function(event,target,scrollableContainer){var pos={};return pos.offsetX=event.pageX-this.offset(target,scrollableContainer).left,pos.offsetY=event.pageY-this.offset(target,scrollableContainer).top,pos.startX=pos.lastX=event.pageX,pos.startY=pos.lastY=event.pageY,pos.nowX=pos.nowY=pos.distX=pos.distY=pos.dirAx=0,pos.dirX=pos.dirY=pos.lastDirX=pos.lastDirY=pos.distAxX=pos.distAxY=0,pos},calculatePosition:function(pos,event){pos.lastX=pos.nowX,pos.lastY=pos.nowY,pos.nowX=event.pageX,pos.nowY=event.pageY,pos.distX=pos.nowX-pos.lastX,pos.distY=pos.nowY-pos.lastY,pos.lastDirX=pos.dirX,pos.lastDirY=pos.dirY,pos.dirX=0===pos.distX?0:pos.distX>0?1:-1,pos.dirY=0===pos.distY?0:pos.distY>0?1:-1;var newAx=Math.abs(pos.distX)>Math.abs(pos.distY)?1:0;pos.dirAx!==newAx?(pos.distAxX=0,pos.distAxY=0):(pos.distAxX+=Math.abs(pos.distX),0!==pos.dirX&&pos.dirX!==pos.lastDirX&&(pos.distAxX=0),pos.distAxY+=Math.abs(pos.distY),0!==pos.dirY&&pos.dirY!==pos.lastDirY&&(pos.distAxY=0)),pos.dirAx=newAx},movePosition:function(event,element,pos,container,containerPositioning,scrollableContainer){var bounds,useRelative="relative"===containerPositioning;element.x=event.pageX-pos.offsetX,element.y=event.pageY-pos.offsetY,container&&(bounds=this.offset(container,scrollableContainer),useRelative&&(element.x-=bounds.left,element.y-=bounds.top,bounds.left=0,bounds.top=0),element.x<bounds.left?element.x=bounds.left:element.x>=bounds.width+bounds.left-this.offset(element).width&&(element.x=bounds.width+bounds.left-this.offset(element).width),element.y<bounds.top?element.y=bounds.top:element.y>=bounds.height+bounds.top-this.offset(element).height&&(element.y=bounds.height+bounds.top-this.offset(element).height)),element.css({left:element.x+"px",top:element.y+"px"}),this.calculatePosition(pos,event)},dragItem:function(item){return{index:item.index(),parent:item.sortableScope,source:item,targetElement:null,targetElementOffset:null,sourceInfo:{index:item.index(),itemScope:item.itemScope,sortableScope:item.sortableScope},canMove:function(itemPosition,targetElement,targetElementOffset){return this.targetElement!==targetElement?(this.targetElement=targetElement,this.targetElementOffset=targetElementOffset,!0):itemPosition.dirX*(targetElementOffset.left-this.targetElementOffset.left)>0||itemPosition.dirY*(targetElementOffset.top-this.targetElementOffset.top)>0?(this.targetElementOffset=targetElementOffset,!0):!1},moveTo:function(parent,index){this.parent=parent,this.isSameParent()&&this.source.index()<index&&!this.sourceInfo.sortableScope.cloning&&(index-=1),this.index=index},isSameParent:function(){return this.parent.element===this.sourceInfo.sortableScope.element},isOrderChanged:function(){return this.index!==this.sourceInfo.index},eventArgs:function(){return{source:this.sourceInfo,dest:{index:this.index,sortableScope:this.parent}}},apply:function(){this.sourceInfo.sortableScope.cloning?this.parent.options.clone||this.parent.insertItem(this.index,angular.copy(this.source.modelValue)):(this.sourceInfo.sortableScope.removeItem(this.sourceInfo.index),(this.parent.options.allowDuplicates||this.parent.modelValue.indexOf(this.source.modelValue)<0)&&this.parent.insertItem(this.index,this.source.modelValue))}}},noDrag:function(element){return void 0!==element.attr("no-drag")||void 0!==element.attr("data-no-drag")},findAncestor:function(el,selector){el=el[0];for(var matches=Element.matches||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector;(el=el.parentElement)&&!matches.call(el,selector););return el?angular.element(el):angular.element(document.body)}}}])}(),function(){"use strict";var mainModule=angular.module("as.sortable");mainModule.controller("as.sortable.sortableController",["$scope",function($scope){this.scope=$scope,$scope.modelValue=null,$scope.callbacks=null,$scope.type="sortable",$scope.options={longTouch:!1},$scope.isDisabled=!1,$scope.insertItem=function(index,itemData){$scope.options.allowDuplicates?$scope.modelValue.splice(index,0,angular.copy(itemData)):$scope.modelValue.splice(index,0,itemData)},$scope.removeItem=function(index){var removedItem=null;return index>-1&&(removedItem=$scope.modelValue.splice(index,1)[0]),removedItem},$scope.isEmpty=function(){return $scope.modelValue&&0===$scope.modelValue.length},$scope.accept=function(sourceItemHandleScope,destScope,destItemScope){return $scope.callbacks.accept(sourceItemHandleScope,destScope,destItemScope)}}]),mainModule.directive("asSortable",function(){return{require:"ngModel",restrict:"A",scope:!0,controller:"as.sortable.sortableController",link:function(scope,element,attrs,ngModelController){var ngModel,callbacks;ngModel=ngModelController,ngModel&&(ngModel.$render=function(){scope.modelValue=ngModel.$modelValue},scope.element=element,element.data("_scope",scope),callbacks={accept:null,orderChanged:null,itemMoved:null,dragStart:null,dragMove:null,dragCancel:null,dragEnd:null},callbacks.accept=function(sourceItemHandleScope,destSortableScope,destItemScope){return!0},callbacks.orderChanged=function(event){},callbacks.itemMoved=function(event){},callbacks.dragStart=function(event){},callbacks.dragMove=angular.noop,callbacks.dragCancel=function(event){},callbacks.dragEnd=function(event){},scope.$watch(attrs.asSortable,function(newVal,oldVal){angular.forEach(newVal,function(value,key){callbacks[key]?"function"==typeof value&&(callbacks[key]=value):scope.options[key]=value}),scope.callbacks=callbacks},!0),angular.isDefined(attrs.isDisabled)&&scope.$watch(attrs.isDisabled,function(newVal,oldVal){angular.isUndefined(newVal)||(scope.isDisabled=newVal)},!0))}}})}(),function(){"use strict";function isParent(possibleParent,elem){return elem&&"HTML"!==elem.nodeName?elem.parentNode===possibleParent?!0:isParent(possibleParent,elem.parentNode):!1}var mainModule=angular.module("as.sortable");mainModule.controller("as.sortable.sortableItemHandleController",["$scope",function($scope){this.scope=$scope,$scope.itemScope=null,$scope.type="handle"}]),mainModule.directive("asSortableItemHandle",["sortableConfig","$helper","$window","$document","$timeout",function(sortableConfig,$helper,$window,$document,$timeout){return{require:"^asSortableItem",scope:!0,restrict:"A",controller:"as.sortable.sortableItemHandleController",link:function(scope,element,attrs,itemController){function insertBefore(targetElement,targetScope){"table-row"!==placeHolder.css("display")&&placeHolder.css("display","block"),targetScope.sortableScope.options.clone||(targetElement[0].parentNode.insertBefore(placeHolder[0],targetElement[0]),dragItemInfo.moveTo(targetScope.sortableScope,targetScope.index()))}function insertAfter(targetElement,targetScope){"table-row"!==placeHolder.css("display")&&placeHolder.css("display","block"),targetScope.sortableScope.options.clone||(targetElement.after(placeHolder),dragItemInfo.moveTo(targetScope.sortableScope,targetScope.index()+1))}function fetchScope(element){for(var scope;!scope&&element.length;)scope=element.data("_scope"),scope||(element=element.parent());return scope}function rollbackDragChanges(){scope.itemScope.sortableScope.cloning||placeElement.replaceWith(scope.itemScope.element),placeHolder.remove(),dragElement.remove(),dragElement=null,dragHandled=!1,containment.css("cursor",""),containment.removeClass("as-sortable-un-selectable")}var dragElement,placeHolder,placeElement,itemPosition,dragItemInfo,containment,containerPositioning,dragListen,scrollableContainer,dragStart,dragMove,dragEnd,dragCancel,isDraggable,placeHolderIndex,bindDrag,unbindDrag,bindEvents,unBindEvents,hasTouch,isIOS,longTouchStart,longTouchCancel,longTouchTimer,dragHandled,createPlaceholder,isPlaceHolderPresent,escapeListen,isDisabled=!1,isLongTouch=!1;hasTouch="ontouchstart"in $window,isIOS=/iPad|iPhone|iPod/.test($window.navigator.userAgent)&&!$window.MSStream,sortableConfig.handleClass&&element.addClass(sortableConfig.handleClass),scope.itemScope=itemController.scope,element.data("_scope",scope),scope.$watchGroup(["sortableScope.isDisabled","sortableScope.options.longTouch"],function(newValues){isDisabled!==newValues[0]?(isDisabled=newValues[0],isDisabled?unbindDrag():bindDrag()):isLongTouch!==newValues[1]?(isLongTouch=newValues[1],unbindDrag(),bindDrag()):bindDrag()}),scope.$on("$destroy",function(){angular.element($document[0].body).unbind("keydown",escapeListen)}),createPlaceholder=function(itemScope){return"function"==typeof scope.sortableScope.options.placeholder?angular.element(scope.sortableScope.options.placeholder(itemScope)):"string"==typeof scope.sortableScope.options.placeholder?angular.element(scope.sortableScope.options.placeholder):angular.element($document[0].createElement(itemScope.element.prop("tagName")))},dragListen=function(event){var startPosition,unbindMoveListen=function(){angular.element($document).unbind("mousemove",moveListen),angular.element($document).unbind("touchmove",moveListen),element.unbind("mouseup",unbindMoveListen),element.unbind("touchend",unbindMoveListen),element.unbind("touchcancel",unbindMoveListen)},moveListen=function(e){e.preventDefault();var eventObj=$helper.eventObj(e);startPosition||(startPosition={clientX:eventObj.clientX,clientY:eventObj.clientY}),Math.abs(eventObj.clientX-startPosition.clientX)+Math.abs(eventObj.clientY-startPosition.clientY)>10&&(unbindMoveListen(),dragStart(event))};angular.element($document).bind("mousemove",moveListen),angular.element($document).bind("touchmove",moveListen),element.bind("mouseup",unbindMoveListen),element.bind("touchend",unbindMoveListen),element.bind("touchcancel",unbindMoveListen),event.stopPropagation()},dragStart=function(event){var eventObj,tagName;(hasTouch||2!==event.button&&3!==event.which)&&(hasTouch&&$helper.isTouchInvalid(event)||!dragHandled&&isDraggable(event)&&(dragHandled=!0,event.preventDefault(),eventObj=$helper.eventObj(event),scope.sortableScope=scope.sortableScope||scope.itemScope.sortableScope,scope.callbacks=scope.callbacks||scope.itemScope.callbacks,scope.itemScope.sortableScope.options.clone||scope.itemScope.sortableScope.options.ctrlClone&&event.ctrlKey?scope.itemScope.sortableScope.cloning=!0:scope.itemScope.sortableScope.cloning=!1,scrollableContainer=angular.element($document[0].querySelector(scope.sortableScope.options.scrollableContainer)).length>0?$document[0].querySelector(scope.sortableScope.options.scrollableContainer):$document[0].documentElement,containment=scope.sortableScope.options.containment?$helper.findAncestor(element,scope.sortableScope.options.containment):angular.element($document[0].body),containment.css("cursor","move"),containment.css("cursor","-webkit-grabbing"),containment.css("cursor","-moz-grabbing"),containment.addClass("as-sortable-un-selectable"),containerPositioning=scope.sortableScope.options.containerPositioning||"absolute",dragItemInfo=$helper.dragItem(scope.itemScope),tagName=scope.itemScope.element.prop("tagName"),dragElement=angular.element($document[0].createElement(scope.sortableScope.element.prop("tagName"))).addClass(scope.sortableScope.element.attr("class")).addClass(sortableConfig.dragClass),dragElement.css("width",$helper.width(scope.itemScope.element)+"px"),dragElement.css("height",$helper.height(scope.itemScope.element)+"px"),placeHolder=createPlaceholder(scope.itemScope).addClass(sortableConfig.placeHolderClass).addClass(scope.sortableScope.options.additionalPlaceholderClass),placeHolder.css("width",$helper.width(scope.itemScope.element)+"px"),placeHolder.css("height",$helper.height(scope.itemScope.element)+"px"),placeElement=angular.element($document[0].createElement(tagName)),sortableConfig.hiddenClass&&placeElement.addClass(sortableConfig.hiddenClass),itemPosition=$helper.positionStarted(eventObj,scope.itemScope.element,scrollableContainer),scope.itemScope.sortableScope.options.clone||scope.itemScope.element.after(placeHolder),scope.itemScope.sortableScope.cloning?dragElement.append(scope.itemScope.element.clone()):(scope.itemScope.element.after(placeElement),dragElement.append(scope.itemScope.element)),containment.append(dragElement),$helper.movePosition(eventObj,dragElement,itemPosition,containment,containerPositioning,scrollableContainer),scope.sortableScope.$apply(function(){scope.callbacks.dragStart(dragItemInfo.eventArgs())}),bindEvents()))},isDraggable=function(event){var elementClicked,sourceScope,isDraggable;for(elementClicked=angular.element(event.target),sourceScope=fetchScope(elementClicked),isDraggable=sourceScope&&"handle"===sourceScope.type;isDraggable&&elementClicked[0]!==element[0];)$helper.noDrag(elementClicked)&&(isDraggable=!1),elementClicked=elementClicked.parent();return isDraggable},dragMove=function(event){var eventObj,targetX,targetY,targetScope,targetElement;if((!hasTouch||!$helper.isTouchInvalid(event))&&dragHandled&&dragElement){if(event.preventDefault(),eventObj=$helper.eventObj(event),scope.callbacks.dragMove!==angular.noop&&scope.sortableScope.$apply(function(){scope.callbacks.dragMove(itemPosition,containment,eventObj)}),targetX=eventObj.pageX-$document[0].documentElement.scrollLeft,targetY=eventObj.pageY-($window.pageYOffset||$document[0].documentElement.scrollTop),dragElement.addClass(sortableConfig.hiddenClass),targetElement=angular.element($document[0].elementFromPoint(targetX,targetY)),dragElement.removeClass(sortableConfig.hiddenClass),$helper.movePosition(eventObj,dragElement,itemPosition,containment,containerPositioning,scrollableContainer),dragElement.addClass(sortableConfig.dragging),targetScope=fetchScope(targetElement),!targetScope||!targetScope.type)return;if("handle"===targetScope.type&&(targetScope=targetScope.itemScope),"item"!==targetScope.type&&"sortable"!==targetScope.type)return;if("item"===targetScope.type&&targetScope.accept(scope,targetScope.sortableScope,targetScope)){targetElement=targetScope.element;var targetElementOffset=$helper.offset(targetElement,scrollableContainer);if(!dragItemInfo.canMove(itemPosition,targetElement,targetElementOffset))return;var placeholderIndex=placeHolderIndex(targetScope.sortableScope.element);0>placeholderIndex?insertBefore(targetElement,targetScope):placeholderIndex<=targetScope.index()?insertAfter(targetElement,targetScope):insertBefore(targetElement,targetScope)}"sortable"===targetScope.type&&targetScope.accept(scope,targetScope)&&!isParent(targetScope.element[0],targetElement[0])&&(isPlaceHolderPresent(targetElement)||targetScope.options.clone||(targetElement[0].appendChild(placeHolder[0]),dragItemInfo.moveTo(targetScope,targetScope.modelValue.length)))}},placeHolderIndex=function(targetElement){var itemElements,i;if(targetElement.hasClass(sortableConfig.placeHolderClass))return 0;for(itemElements=targetElement.children(),i=0;i<itemElements.length;i+=1)if(angular.element(itemElements[i]).hasClass(sortableConfig.placeHolderClass))return i;return-1},isPlaceHolderPresent=function(targetElement){return placeHolderIndex(targetElement)>=0},dragEnd=function(event){dragHandled&&(event.preventDefault(),dragElement&&(rollbackDragChanges(),dragItemInfo.apply(),scope.sortableScope.$apply(function(){dragItemInfo.isSameParent()?dragItemInfo.isOrderChanged()&&scope.callbacks.orderChanged(dragItemInfo.eventArgs()):scope.callbacks.itemMoved(dragItemInfo.eventArgs())}),scope.sortableScope.$apply(function(){scope.callbacks.dragEnd(dragItemInfo.eventArgs())}),dragItemInfo=null),unBindEvents())},dragCancel=function(event){dragHandled&&(event.preventDefault(),dragElement&&(rollbackDragChanges(),scope.sortableScope.$apply(function(){scope.callbacks.dragCancel(dragItemInfo.eventArgs())}),dragItemInfo=null),unBindEvents())},bindDrag=function(){hasTouch&&(isLongTouch?isIOS?(element.bind("touchstart",longTouchStart),element.bind("touchend",longTouchCancel),element.bind("touchmove",longTouchCancel)):element.bind("contextmenu",dragListen):element.bind("touchstart",dragListen)),element.bind("mousedown",dragListen)},unbindDrag=function(){element.unbind("touchstart",longTouchStart),element.unbind("touchend",longTouchCancel),element.unbind("touchmove",longTouchCancel),element.unbind("contextmenu",dragListen),element.unbind("touchstart",dragListen),element.unbind("mousedown",dragListen)},longTouchStart=function(event){longTouchTimer=$timeout(function(){dragListen(event)},500)},longTouchCancel=function(){$timeout.cancel(longTouchTimer)},escapeListen=function(event){27===event.keyCode&&dragCancel(event)},angular.element($document[0].body).bind("keydown",escapeListen),bindEvents=function(){angular.element($document).bind("touchmove",dragMove),angular.element($document).bind("touchend",dragEnd),angular.element($document).bind("touchcancel",dragCancel),angular.element($document).bind("mousemove",dragMove),angular.element($document).bind("mouseup",dragEnd)},unBindEvents=function(){angular.element($document).unbind("touchend",dragEnd),angular.element($document).unbind("touchcancel",dragCancel),angular.element($document).unbind("touchmove",dragMove),angular.element($document).unbind("mouseup",dragEnd),angular.element($document).unbind("mousemove",dragMove)}}}}])}(),function(){"use strict";var mainModule=angular.module("as.sortable");mainModule.controller("as.sortable.sortableItemController",["$scope",function($scope){this.scope=$scope,$scope.sortableScope=null,$scope.modelValue=null,$scope.type="item",$scope.index=function(){return $scope.$index},$scope.itemData=function(){return $scope.sortableScope.modelValue[$scope.$index]}}]),mainModule.directive("asSortableItem",["sortableConfig",function(sortableConfig){return{require:["^asSortable","?ngModel"],restrict:"A",controller:"as.sortable.sortableItemController",link:function(scope,element,attrs,ctrl){var sortableController=ctrl[0],ngModelController=ctrl[1];sortableConfig.itemClass&&element.addClass(sortableConfig.itemClass),scope.sortableScope=sortableController.scope,ngModelController?ngModelController.$render=function(){scope.modelValue=ngModelController.$modelValue}:scope.modelValue=sortableController.scope.modelValue[scope.$index],scope.element=element,element.data("_scope",scope)}}}])}();;
// Source: ./node_modules/chart.js/dist/Chart.min.js
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.5.0
 *
 * Copyright 2017 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Chart=t()}}(function(){return function t(e,a,i){function n(r,s){if(!a[r]){if(!e[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(o)return o(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var d=a[r]={exports:{}};e[r][0].call(d.exports,function(t){var a=e[r][1][t];return n(a?a:t)},d,d.exports,t,e,a,i)}return a[r].exports}for(var o="function"==typeof require&&require,r=0;r<i.length;r++)n(i[r]);return n}({1:[function(t,e,a){},{}],2:[function(t,e,a){function i(t){if(t){var e=/^#([a-fA-F0-9]{3})$/,a=/^#([a-fA-F0-9]{6})$/,i=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,n=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,o=/(\w+)/,r=[0,0,0],s=1,l=t.match(e);if(l){l=l[1];for(var u=0;u<r.length;u++)r[u]=parseInt(l[u]+l[u],16)}else if(l=t.match(a)){l=l[1];for(var u=0;u<r.length;u++)r[u]=parseInt(l.slice(2*u,2*u+2),16)}else if(l=t.match(i)){for(var u=0;u<r.length;u++)r[u]=parseInt(l[u+1]);s=parseFloat(l[4])}else if(l=t.match(n)){for(var u=0;u<r.length;u++)r[u]=Math.round(2.55*parseFloat(l[u+1]));s=parseFloat(l[4])}else if(l=t.match(o)){if("transparent"==l[1])return[0,0,0,0];if(r=y[l[1]],!r)return}for(var u=0;u<r.length;u++)r[u]=b(r[u],0,255);return s=s||0==s?b(s,0,1):1,r[3]=s,r}}function n(t){if(t){var e=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,a=t.match(e);if(a){var i=parseFloat(a[4]),n=b(parseInt(a[1]),0,360),o=b(parseFloat(a[2]),0,100),r=b(parseFloat(a[3]),0,100),s=b(isNaN(i)?1:i,0,1);return[n,o,r,s]}}}function o(t){if(t){var e=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,a=t.match(e);if(a){var i=parseFloat(a[4]),n=b(parseInt(a[1]),0,360),o=b(parseFloat(a[2]),0,100),r=b(parseFloat(a[3]),0,100),s=b(isNaN(i)?1:i,0,1);return[n,o,r,s]}}}function r(t){var e=i(t);return e&&e.slice(0,3)}function s(t){var e=n(t);return e&&e.slice(0,3)}function l(t){var e=i(t);return e?e[3]:(e=n(t))?e[3]:(e=o(t))?e[3]:void 0}function u(t){return"#"+x(t[0])+x(t[1])+x(t[2])}function d(t,e){return e<1||t[3]&&t[3]<1?c(t,e):"rgb("+t[0]+", "+t[1]+", "+t[2]+")"}function c(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function h(t,e){if(e<1||t[3]&&t[3]<1)return f(t,e);var a=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),n=Math.round(t[2]/255*100);return"rgb("+a+"%, "+i+"%, "+n+"%)"}function f(t,e){var a=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),n=Math.round(t[2]/255*100);return"rgba("+a+"%, "+i+"%, "+n+"%, "+(e||t[3]||1)+")"}function g(t,e){return e<1||t[3]&&t[3]<1?p(t,e):"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}function p(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function m(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"}function v(t){return k[t.slice(0,3)]}function b(t,e,a){return Math.min(Math.max(e,t),a)}function x(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var y=t(6);e.exports={getRgba:i,getHsla:n,getRgb:r,getHsl:s,getHwb:o,getAlpha:l,hexString:u,rgbString:d,rgbaString:c,percentString:h,percentaString:f,hslString:g,hslaString:p,hwbString:m,keyword:v};var k={};for(var S in y)k[y[S]]=S},{6:6}],3:[function(t,e,a){var i=t(5),n=t(2),o=function(t){if(t instanceof o)return t;if(!(this instanceof o))return new o(t);this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};var e;if("string"==typeof t)if(e=n.getRgba(t))this.setValues("rgb",e);else if(e=n.getHsla(t))this.setValues("hsl",e);else{if(!(e=n.getHwb(t)))throw new Error('Unable to parse color from string "'+t+'"');this.setValues("hwb",e)}else if("object"==typeof t)if(e=t,void 0!==e.r||void 0!==e.red)this.setValues("rgb",e);else if(void 0!==e.l||void 0!==e.lightness)this.setValues("hsl",e);else if(void 0!==e.v||void 0!==e.value)this.setValues("hsv",e);else if(void 0!==e.w||void 0!==e.whiteness)this.setValues("hwb",e);else{if(void 0===e.c&&void 0===e.cyan)throw new Error("Unable to parse color from object "+JSON.stringify(t));this.setValues("cmyk",e)}};o.prototype={rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t%=360,t=t<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return n.hexString(this.values.rgb)},rgbString:function(){return n.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return n.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return n.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return n.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return n.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return n.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return n.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],a=0;a<t.length;a++){var i=t[a]/255;e[a]=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),a=t.luminosity();return e>a?(e+.05)/(a+.05):(a+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb,e=(299*t[0]+587*t[1]+114*t[2])/1e3;return e<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,a=(e[0]+t)%360;return e[0]=a<0?360+a:a,this.setValues("hsl",e),this},mix:function(t,e){var a=this,i=t,n=void 0===e?.5:e,o=2*n-1,r=a.alpha()-i.alpha(),s=((o*r===-1?o:(o+r)/(1+o*r))+1)/2,l=1-s;return this.rgb(s*a.red()+l*i.red(),s*a.green()+l*i.green(),s*a.blue()+l*i.blue()).alpha(a.alpha()*n+i.alpha()*(1-n))},toJSON:function(){return this.rgb()},clone:function(){var t,e,a=new o,i=this.values,n=a.values;for(var r in i)i.hasOwnProperty(r)&&(t=i[r],e={}.toString.call(t),"[object Array]"===e?n[r]=t.slice(0):"[object Number]"===e?n[r]=t:console.error("unexpected color value:",t));return a}},o.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},o.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},o.prototype.getValues=function(t){for(var e=this.values,a={},i=0;i<t.length;i++)a[t.charAt(i)]=e[t][i];return 1!==e.alpha&&(a.a=e.alpha),a},o.prototype.setValues=function(t,e){var a,n=this.values,o=this.spaces,r=this.maxes,s=1;if("alpha"===t)s=e;else if(e.length)n[t]=e.slice(0,t.length),s=e[t.length];else if(void 0!==e[t.charAt(0)]){for(a=0;a<t.length;a++)n[t][a]=e[t.charAt(a)];s=e.a}else if(void 0!==e[o[t][0]]){var l=o[t];for(a=0;a<t.length;a++)n[t][a]=e[l[a]];s=e.alpha}if(n.alpha=Math.max(0,Math.min(1,void 0===s?n.alpha:s)),"alpha"===t)return!1;var u;for(a=0;a<t.length;a++)u=Math.max(0,Math.min(r[t][a],n[t][a])),n[t][a]=Math.round(u);for(var d in o)d!==t&&(n[d]=i[t][d](n[t]));return!0},o.prototype.setSpace=function(t,e){var a=e[0];return void 0===a?this.getValues(t):("number"==typeof a&&(a=Array.prototype.slice.call(e)),this.setValues(t,a),this)},o.prototype.setChannel=function(t,e,a){var i=this.values[t];return void 0===a?i[e]:a===i[e]?this:(i[e]=a,this.setValues(t,i),this)},"undefined"!=typeof window&&(window.Color=o),e.exports=o},{2:2,5:5}],4:[function(t,e,a){function i(t){var e,a,i,n=t[0]/255,o=t[1]/255,r=t[2]/255,s=Math.min(n,o,r),l=Math.max(n,o,r),u=l-s;return l==s?e=0:n==l?e=(o-r)/u:o==l?e=2+(r-n)/u:r==l&&(e=4+(n-o)/u),e=Math.min(60*e,360),e<0&&(e+=360),i=(s+l)/2,a=l==s?0:i<=.5?u/(l+s):u/(2-l-s),[e,100*a,100*i]}function n(t){var e,a,i,n=t[0],o=t[1],r=t[2],s=Math.min(n,o,r),l=Math.max(n,o,r),u=l-s;return a=0==l?0:u/l*1e3/10,l==s?e=0:n==l?e=(o-r)/u:o==l?e=2+(r-n)/u:r==l&&(e=4+(n-o)/u),e=Math.min(60*e,360),e<0&&(e+=360),i=l/255*1e3/10,[e,a,i]}function o(t){var e=t[0],a=t[1],n=t[2],o=i(t)[0],r=1/255*Math.min(e,Math.min(a,n)),n=1-1/255*Math.max(e,Math.max(a,n));return[o,100*r,100*n]}function s(t){var e,a,i,n,o=t[0]/255,r=t[1]/255,s=t[2]/255;return n=Math.min(1-o,1-r,1-s),e=(1-o-n)/(1-n)||0,a=(1-r-n)/(1-n)||0,i=(1-s-n)/(1-n)||0,[100*e,100*a,100*i,100*n]}function l(t){return Z[JSON.stringify(t)]}function u(t){var e=t[0]/255,a=t[1]/255,i=t[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,a=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92;var n=.4124*e+.3576*a+.1805*i,o=.2126*e+.7152*a+.0722*i,r=.0193*e+.1192*a+.9505*i;return[100*n,100*o,100*r]}function d(t){var e,a,i,n=u(t),o=n[0],r=n[1],s=n[2];return o/=95.047,r/=100,s/=108.883,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,e=116*r-16,a=500*(o-r),i=200*(r-s),[e,a,i]}function c(t){return z(d(t))}function h(t){var e,a,i,n,o,r=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return o=255*l,[o,o,o];a=l<.5?l*(1+s):l+s-l*s,e=2*l-a,n=[0,0,0];for(var u=0;u<3;u++)i=r+1/3*-(u-1),i<0&&i++,i>1&&i--,o=6*i<1?e+6*(a-e)*i:2*i<1?a:3*i<2?e+(a-e)*(2/3-i)*6:e,n[u]=255*o;return n}function f(t){var e,a,i=t[0],n=t[1]/100,o=t[2]/100;return 0===o?[0,0,0]:(o*=2,n*=o<=1?o:2-o,a=(o+n)/2,e=2*n/(o+n),[i,100*e,100*a])}function p(t){return o(h(t))}function m(t){return s(h(t))}function v(t){return l(h(t))}function x(t){var e=t[0]/60,a=t[1]/100,i=t[2]/100,n=Math.floor(e)%6,o=e-Math.floor(e),r=255*i*(1-a),s=255*i*(1-a*o),l=255*i*(1-a*(1-o)),i=255*i;switch(n){case 0:return[i,l,r];case 1:return[s,i,r];case 2:return[r,i,l];case 3:return[r,s,i];case 4:return[l,r,i];case 5:return[i,r,s]}}function y(t){var e,a,i=t[0],n=t[1]/100,o=t[2]/100;return a=(2-n)*o,e=n*o,e/=a<=1?a:2-a,e=e||0,a/=2,[i,100*e,100*a]}function k(t){return o(x(t))}function S(t){return s(x(t))}function M(t){return l(x(t))}function w(t){var e,a,i,n,o=t[0]/360,s=t[1]/100,l=t[2]/100,u=s+l;switch(u>1&&(s/=u,l/=u),e=Math.floor(6*o),a=1-l,i=6*o-e,0!=(1&e)&&(i=1-i),n=s+i*(a-s),e){default:case 6:case 0:r=a,g=n,b=s;break;case 1:r=n,g=a,b=s;break;case 2:r=s,g=a,b=n;break;case 3:r=s,g=n,b=a;break;case 4:r=n,g=s,b=a;break;case 5:r=a,g=s,b=n}return[255*r,255*g,255*b]}function C(t){return i(w(t))}function I(t){return n(w(t))}function D(t){return s(w(t))}function A(t){return l(w(t))}function T(t){var e,a,i,n=t[0]/100,o=t[1]/100,r=t[2]/100,s=t[3]/100;return e=1-Math.min(1,n*(1-s)+s),a=1-Math.min(1,o*(1-s)+s),i=1-Math.min(1,r*(1-s)+s),[255*e,255*a,255*i]}function P(t){return i(T(t))}function _(t){return n(T(t))}function F(t){return o(T(t))}function V(t){return l(T(t))}function R(t){var e,a,i,n=t[0]/100,o=t[1]/100,r=t[2]/100;return e=3.2406*n+o*-1.5372+r*-.4986,a=n*-.9689+1.8758*o+.0415*r,i=.0557*n+o*-.204+1.057*r,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a*=12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*=12.92,e=Math.min(Math.max(0,e),1),a=Math.min(Math.max(0,a),1),i=Math.min(Math.max(0,i),1),[255*e,255*a,255*i]}function O(t){var e,a,i,n=t[0],o=t[1],r=t[2];return n/=95.047,o/=100,r/=108.883,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,e=116*o-16,a=500*(n-o),i=200*(o-r),[e,a,i]}function L(t){return z(O(t))}function B(t){var e,a,i,n,o=t[0],r=t[1],s=t[2];return o<=8?(a=100*o/903.3,n=7.787*(a/100)+16/116):(a=100*Math.pow((o+16)/116,3),n=Math.pow(a/100,1/3)),e=e/95.047<=.008856?e=95.047*(r/500+n-16/116)/7.787:95.047*Math.pow(r/500+n,3),i=i/108.883<=.008859?i=108.883*(n-s/200-16/116)/7.787:108.883*Math.pow(n-s/200,3),[e,a,i]}function z(t){var e,a,i,n=t[0],o=t[1],r=t[2];return e=Math.atan2(r,o),a=360*e/2/Math.PI,a<0&&(a+=360),i=Math.sqrt(o*o+r*r),[n,i,a]}function W(t){return R(B(t))}function N(t){var e,a,i,n=t[0],o=t[1],r=t[2];return i=r/360*2*Math.PI,e=o*Math.cos(i),a=o*Math.sin(i),[n,e,a]}function E(t){return B(N(t))}function H(t){return W(N(t))}function j(t){return G[t]}function U(t){return i(j(t))}function q(t){return n(j(t))}function Y(t){return o(j(t))}function X(t){return s(j(t))}function K(t){return d(j(t))}function J(t){return u(j(t))}e.exports={rgb2hsl:i,rgb2hsv:n,rgb2hwb:o,rgb2cmyk:s,rgb2keyword:l,rgb2xyz:u,rgb2lab:d,rgb2lch:c,hsl2rgb:h,hsl2hsv:f,hsl2hwb:p,hsl2cmyk:m,hsl2keyword:v,hsv2rgb:x,hsv2hsl:y,hsv2hwb:k,hsv2cmyk:S,hsv2keyword:M,hwb2rgb:w,hwb2hsl:C,hwb2hsv:I,hwb2cmyk:D,hwb2keyword:A,cmyk2rgb:T,cmyk2hsl:P,cmyk2hsv:_,cmyk2hwb:F,cmyk2keyword:V,keyword2rgb:j,keyword2hsl:U,keyword2hsv:q,keyword2hwb:Y,keyword2cmyk:X,keyword2lab:K,keyword2xyz:J,xyz2rgb:R,xyz2lab:O,xyz2lch:L,lab2xyz:B,lab2rgb:W,lab2lch:z,lch2lab:N,lch2xyz:E,lch2rgb:H};var G={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},Z={};for(var Q in G)Z[JSON.stringify(G[Q])]=Q},{}],5:[function(t,e,a){var i=t(4),n=function(){return new u};for(var o in i){n[o+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),i[t](e)}}(o);var r=/(\w+)2(\w+)/.exec(o),s=r[1],l=r[2];n[s]=n[s]||{},n[s][l]=n[o]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var a=i[t](e);if("string"==typeof a||void 0===a)return a;for(var n=0;n<a.length;n++)a[n]=Math.round(a[n]);return a}}(o)}var u=function(){this.convs={}};u.prototype.routeSpace=function(t,e){var a=e[0];return void 0===a?this.getValues(t):("number"==typeof a&&(a=Array.prototype.slice.call(e)),this.setValues(t,a))},u.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},u.prototype.getValues=function(t){var e=this.convs[t];if(!e){var a=this.space,i=this.convs[a];e=n[a][t](i),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){u.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),e.exports=n},{4:4}],6:[function(t,e,a){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],7:[function(t,e,a){var i=t(28)();t(26)(i),t(42)(i),t(22)(i),t(31)(i),t(25)(i),t(21)(i),t(23)(i),t(24)(i),t(29)(i),t(33)(i),t(34)(i),t(32)(i),t(35)(i),t(30)(i),t(27)(i),t(36)(i),t(37)(i),t(38)(i),t(39)(i),t(40)(i),t(45)(i),t(43)(i),t(44)(i),t(46)(i),t(47)(i),t(48)(i),t(15)(i),t(16)(i),t(17)(i),t(18)(i),t(19)(i),t(20)(i),t(8)(i),t(9)(i),t(10)(i),t(11)(i),t(12)(i),t(13)(i),t(14)(i),window.Chart=e.exports=i},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,42:42,43:43,44:44,45:45,46:46,47:47,48:48,8:8,9:9}],8:[function(t,e,a){"use strict";e.exports=function(t){t.Bar=function(e,a){return a.type="bar",new t(e,a)}}},{}],9:[function(t,e,a){"use strict";e.exports=function(t){t.Bubble=function(e,a){return a.type="bubble",new t(e,a)}}},{}],10:[function(t,e,a){"use strict";e.exports=function(t){t.Doughnut=function(e,a){return a.type="doughnut",new t(e,a)}}},{}],11:[function(t,e,a){"use strict";e.exports=function(t){t.Line=function(e,a){return a.type="line",new t(e,a)}}},{}],12:[function(t,e,a){"use strict";e.exports=function(t){t.PolarArea=function(e,a){return a.type="polarArea",new t(e,a)}}},{}],13:[function(t,e,a){"use strict";e.exports=function(t){t.Radar=function(e,a){return a.type="radar",new t(e,a)}}},{}],14:[function(t,e,a){"use strict";e.exports=function(t){var e={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-1"}],yAxes:[{type:"linear",position:"left",id:"y-axis-1"}]},tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}};t.defaults.scatter=e,t.controllers.scatter=t.controllers.line,t.Scatter=function(e,a){return a.type="scatter",new t(e,a)}}},{}],15:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bar={hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}},t.controllers.bar=t.DatasetController.extend({dataElementType:t.elements.Rectangle,initialize:function(e,a){t.DatasetController.prototype.initialize.call(this,e,a);var i=this,n=i.getMeta(),o=i.getDataset();n.stack=o.stack,n.bar=!0},getStackCount:function(){var t=this,a=t.getMeta(),i=t.getScaleForId(a.yAxisID),n=[];return e.each(t.chart.data.datasets,function(e,a){var o=t.chart.getDatasetMeta(a);o.bar&&t.chart.isDatasetVisible(a)&&(i.options.stacked===!1||i.options.stacked===!0&&n.indexOf(o.stack)===-1||void 0===i.options.stacked&&(void 0===o.stack||n.indexOf(o.stack)===-1))&&n.push(o.stack)},t),n.length},update:function(t){var a=this;e.each(a.getMeta().data,function(e,i){a.updateElement(e,i,t)},a)},updateElement:function(t,a,i){var n=this,o=n.getMeta(),r=n.getScaleForId(o.xAxisID),s=n.getScaleForId(o.yAxisID),l=s.getBasePixel(),u=n.chart.options.elements.rectangle,d=t.custom||{},c=n.getDataset();t._xScale=r,t._yScale=s,t._datasetIndex=n.index,t._index=a;var h=n.getRuler(a);t._model={x:n.calculateBarX(a,n.index,h),y:i?l:n.calculateBarY(a,n.index),label:n.chart.data.labels[a],datasetLabel:c.label,horizontal:!1,base:i?l:n.calculateBarBase(n.index,a),width:n.calculateBarWidth(h),backgroundColor:d.backgroundColor?d.backgroundColor:e.getValueAtIndexOrDefault(c.backgroundColor,a,u.backgroundColor),borderSkipped:d.borderSkipped?d.borderSkipped:u.borderSkipped,borderColor:d.borderColor?d.borderColor:e.getValueAtIndexOrDefault(c.borderColor,a,u.borderColor),borderWidth:d.borderWidth?d.borderWidth:e.getValueAtIndexOrDefault(c.borderWidth,a,u.borderWidth)},t.pivot()},calculateBarBase:function(t,e){var a=this,i=a.getMeta(),n=a.getScaleForId(i.yAxisID),o=n.getBaseValue(),r=o;if(n.options.stacked===!0||void 0===n.options.stacked&&void 0!==i.stack){for(var s=a.chart,l=s.data.datasets,u=Number(l[t].data[e]),d=0;d<t;d++){var c=l[d],h=s.getDatasetMeta(d);if(h.bar&&h.yAxisID===n.id&&s.isDatasetVisible(d)&&i.stack===h.stack){var f=Number(c.data[e]);o+=u<0?Math.min(f,r):Math.max(f,r)}}return n.getPixelForValue(o)}return n.getBasePixel()},getRuler:function(){var t=this,e=t.getMeta(),a=t.getScaleForId(e.xAxisID),i=t.getStackCount(),n=a.width/a.ticks.length,o=n*a.options.categoryPercentage,r=(n-n*a.options.categoryPercentage)/2,s=o/i,l=s*a.options.barPercentage,u=s-s*a.options.barPercentage;return{stackCount:i,tickWidth:n,categoryWidth:o,categorySpacing:r,fullBarWidth:s,barWidth:l,barSpacing:u}},calculateBarWidth:function(t){var e=this,a=e.getMeta(),i=e.getScaleForId(a.xAxisID);return i.options.barThickness?i.options.barThickness:t.barWidth},getStackIndex:function(t){var e,a,i=this,n=i.chart.getDatasetMeta(t),o=i.getScaleForId(n.yAxisID),r=[n.stack];for(a=0;a<t;++a)e=this.chart.getDatasetMeta(a),e.bar&&this.chart.isDatasetVisible(a)&&(o.options.stacked===!1||o.options.stacked===!0&&r.indexOf(e.stack)===-1||void 0===o.options.stacked&&(void 0===e.stack||r.indexOf(e.stack)===-1))&&r.push(e.stack);return r.length-1},calculateBarX:function(t,e,a){var i=this,n=i.getMeta(),o=i.getScaleForId(n.xAxisID),r=i.getStackIndex(e),s=o.getPixelForValue(null,t,e,i.chart.isCombo);return s-=i.chart.isCombo?a.tickWidth/2:0,s+a.barWidth/2+a.categorySpacing+a.barWidth*r+a.barSpacing/2+a.barSpacing*r},calculateBarY:function(t,e){var a=this,i=a.getMeta(),n=a.getScaleForId(i.yAxisID),o=Number(a.getDataset().data[t]);if(n.options.stacked||void 0===n.options.stacked&&void 0!==i.stack){for(var r=n.getBaseValue(),s=r,l=r,u=0;u<e;u++){var d=a.chart.data.datasets[u],c=a.chart.getDatasetMeta(u);if(c.bar&&c.yAxisID===n.id&&a.chart.isDatasetVisible(u)&&i.stack===c.stack){var h=Number(d.data[t]);h<0?l+=h||0:s+=h||0}}return o<0?n.getPixelForValue(l+o):n.getPixelForValue(s+o)}return n.getPixelForValue(o)},draw:function(e){var a,i,n=this,o=e||1,r=n.getMeta().data,s=n.getDataset();for(t.canvasHelpers.clipArea(n.chart.chart.ctx,n.chart.chartArea),a=0,i=r.length;a<i;++a){var l=s.data[a];null===l||void 0===l||isNaN(l)||r[a].transition(o).draw()}t.canvasHelpers.unclipArea(n.chart.chart.ctx)},setHoverStyle:function(t){var a=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},o=t._model;o.backgroundColor=n.hoverBackgroundColor?n.hoverBackgroundColor:e.getValueAtIndexOrDefault(a.hoverBackgroundColor,i,e.getHoverColor(o.backgroundColor)),o.borderColor=n.hoverBorderColor?n.hoverBorderColor:e.getValueAtIndexOrDefault(a.hoverBorderColor,i,e.getHoverColor(o.borderColor)),o.borderWidth=n.hoverBorderWidth?n.hoverBorderWidth:e.getValueAtIndexOrDefault(a.hoverBorderWidth,i,o.borderWidth)},removeHoverStyle:function(t){var a=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},o=t._model,r=this.chart.options.elements.rectangle;o.backgroundColor=n.backgroundColor?n.backgroundColor:e.getValueAtIndexOrDefault(a.backgroundColor,i,r.backgroundColor),o.borderColor=n.borderColor?n.borderColor:e.getValueAtIndexOrDefault(a.borderColor,i,r.borderColor),o.borderWidth=n.borderWidth?n.borderWidth:e.getValueAtIndexOrDefault(a.borderWidth,i,r.borderWidth)}}),t.defaults.horizontalBar={hover:{mode:"label"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var a="";return t.length>0&&(t[0].yLabel?a=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(a=e.labels[t[0].index])),a},label:function(t,e){var a=e.datasets[t.datasetIndex].label||"";return a+": "+t.xLabel}}}},t.controllers.horizontalBar=t.controllers.bar.extend({getStackCount:function(){var t=this,a=t.getMeta(),i=t.getScaleForId(a.xAxisID),n=[];return e.each(t.chart.data.datasets,function(e,a){var o=t.chart.getDatasetMeta(a);o.bar&&t.chart.isDatasetVisible(a)&&(i.options.stacked===!1||i.options.stacked===!0&&n.indexOf(o.stack)===-1||void 0===i.options.stacked&&(void 0===o.stack||n.indexOf(o.stack)===-1))&&n.push(o.stack)},t),n.length},updateElement:function(t,a,i){var n=this,o=n.getMeta(),r=n.getScaleForId(o.xAxisID),s=n.getScaleForId(o.yAxisID),l=r.getBasePixel(),u=t.custom||{},d=n.getDataset(),c=n.chart.options.elements.rectangle;t._xScale=r,t._yScale=s,t._datasetIndex=n.index,t._index=a;var h=n.getRuler(a);t._model={x:i?l:n.calculateBarX(a,n.index),y:n.calculateBarY(a,n.index,h),label:n.chart.data.labels[a],datasetLabel:d.label,horizontal:!0,base:i?l:n.calculateBarBase(n.index,a),height:n.calculateBarHeight(h),backgroundColor:u.backgroundColor?u.backgroundColor:e.getValueAtIndexOrDefault(d.backgroundColor,a,c.backgroundColor),borderSkipped:u.borderSkipped?u.borderSkipped:c.borderSkipped,borderColor:u.borderColor?u.borderColor:e.getValueAtIndexOrDefault(d.borderColor,a,c.borderColor),
borderWidth:u.borderWidth?u.borderWidth:e.getValueAtIndexOrDefault(d.borderWidth,a,c.borderWidth)},t.pivot()},calculateBarBase:function(t,e){var a=this,i=a.getMeta(),n=a.getScaleForId(i.xAxisID),o=n.getBaseValue(),r=o;if(n.options.stacked||void 0===n.options.stacked&&void 0!==i.stack){for(var s=a.chart,l=s.data.datasets,u=Number(l[t].data[e]),d=0;d<t;d++){var c=l[d],h=s.getDatasetMeta(d);if(h.bar&&h.xAxisID===n.id&&s.isDatasetVisible(d)&&i.stack===h.stack){var f=Number(c.data[e]);o+=u<0?Math.min(f,r):Math.max(f,r)}}return n.getPixelForValue(o)}return n.getBasePixel()},getRuler:function(){var t=this,e=t.getMeta(),a=t.getScaleForId(e.yAxisID),i=t.getStackCount(),n=a.height/a.ticks.length,o=n*a.options.categoryPercentage,r=(n-n*a.options.categoryPercentage)/2,s=o/i,l=s*a.options.barPercentage,u=s-s*a.options.barPercentage;return{stackCount:i,tickHeight:n,categoryHeight:o,categorySpacing:r,fullBarHeight:s,barHeight:l,barSpacing:u}},calculateBarHeight:function(t){var e=this,a=e.getMeta(),i=e.getScaleForId(a.yAxisID);return i.options.barThickness?i.options.barThickness:t.barHeight},getStackIndex:function(t){var e,a,i=this,n=i.chart.getDatasetMeta(t),o=i.getScaleForId(n.xAxisID),r=[n.stack];for(a=0;a<t;++a)e=this.chart.getDatasetMeta(a),e.bar&&this.chart.isDatasetVisible(a)&&(o.options.stacked===!1||o.options.stacked===!0&&r.indexOf(e.stack)===-1||void 0===o.options.stacked&&(void 0===e.stack||r.indexOf(e.stack)===-1))&&r.push(e.stack);return r.length-1},calculateBarX:function(t,e){var a=this,i=a.getMeta(),n=a.getScaleForId(i.xAxisID),o=Number(a.getDataset().data[t]);if(n.options.stacked||void 0===n.options.stacked&&void 0!==i.stack){for(var r=n.getBaseValue(),s=r,l=r,u=0;u<e;u++){var d=a.chart.data.datasets[u],c=a.chart.getDatasetMeta(u);if(c.bar&&c.xAxisID===n.id&&a.chart.isDatasetVisible(u)&&i.stack===c.stack){var h=Number(d.data[t]);h<0?l+=h||0:s+=h||0}}return o<0?n.getPixelForValue(l+o):n.getPixelForValue(s+o)}return n.getPixelForValue(o)},calculateBarY:function(t,e,a){var i=this,n=i.getMeta(),o=i.getScaleForId(n.yAxisID),r=i.getStackIndex(e),s=o.getPixelForValue(null,t,e,i.chart.isCombo);return s-=i.chart.isCombo?a.tickHeight/2:0,s+a.barHeight/2+a.categorySpacing+a.barHeight*r+a.barSpacing/2+a.barSpacing*r}})}},{}],16:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bubble={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var a=e.datasets[t.datasetIndex].label||"",i=e.datasets[t.datasetIndex].data[t.index];return a+": ("+t.xLabel+", "+t.yLabel+", "+i.r+")"}}}},t.controllers.bubble=t.DatasetController.extend({dataElementType:t.elements.Point,update:function(t){var a=this,i=a.getMeta(),n=i.data;e.each(n,function(e,i){a.updateElement(e,i,t)})},updateElement:function(a,i,n){var o=this,r=o.getMeta(),s=o.getScaleForId(r.xAxisID),l=o.getScaleForId(r.yAxisID),u=a.custom||{},d=o.getDataset(),c=d.data[i],h=o.chart.options.elements.point,f=o.index;e.extend(a,{_xScale:s,_yScale:l,_datasetIndex:f,_index:i,_model:{x:n?s.getPixelForDecimal(.5):s.getPixelForValue("object"==typeof c?c:NaN,i,f,o.chart.isCombo),y:n?l.getBasePixel():l.getPixelForValue(c,i,f),radius:n?0:u.radius?u.radius:o.getRadius(c),hitRadius:u.hitRadius?u.hitRadius:e.getValueAtIndexOrDefault(d.hitRadius,i,h.hitRadius)}}),t.DatasetController.prototype.removeHoverStyle.call(o,a,h);var g=a._model;g.skip=u.skip?u.skip:isNaN(g.x)||isNaN(g.y),a.pivot()},getRadius:function(t){return t.r||this.chart.options.elements.point.radius},setHoverStyle:function(a){var i=this;t.DatasetController.prototype.setHoverStyle.call(i,a);var n=i.chart.data.datasets[a._datasetIndex],o=a._index,r=a.custom||{},s=a._model;s.radius=r.hoverRadius?r.hoverRadius:e.getValueAtIndexOrDefault(n.hoverRadius,o,i.chart.options.elements.point.hoverRadius)+i.getRadius(n.data[o])},removeHoverStyle:function(e){var a=this;t.DatasetController.prototype.removeHoverStyle.call(a,e,a.chart.options.elements.point);var i=a.chart.data.datasets[e._datasetIndex].data[e._index],n=e.custom||{},o=e._model;o.radius=n.radius?n.radius:a.getRadius(i)}})}},{}],17:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a=t.defaults;a.doughnut={animation:{animateRotate:!0,animateScale:!1},aspectRatio:1,hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var a=t.data,i=a.datasets,n=a.labels;if(i.length)for(var o=0;o<i[0].data.length;++o)e.push('<li><span style="background-color:'+i[0].backgroundColor[o]+'"></span>'),n[o]&&e.push(n[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var a=t.data;return a.labels.length&&a.datasets.length?a.labels.map(function(i,n){var o=t.getDatasetMeta(0),r=a.datasets[0],s=o.data[n],l=s&&s.custom||{},u=e.getValueAtIndexOrDefault,d=t.options.elements.arc,c=l.backgroundColor?l.backgroundColor:u(r.backgroundColor,n,d.backgroundColor),h=l.borderColor?l.borderColor:u(r.borderColor,n,d.borderColor),f=l.borderWidth?l.borderWidth:u(r.borderWidth,n,d.borderWidth);return{text:i,fillStyle:c,strokeStyle:h,lineWidth:f,hidden:isNaN(r.data[n])||o.data[n].hidden,index:n}}):[]}},onClick:function(t,e){var a,i,n,o=e.index,r=this.chart;for(a=0,i=(r.data.datasets||[]).length;a<i;++a)n=r.getDatasetMeta(a),n.data[o]&&(n.data[o].hidden=!n.data[o].hidden);r.update()}},cutoutPercentage:50,rotation:Math.PI*-.5,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,a){var i=a.labels[t.index],n=": "+a.datasets[t.datasetIndex].data[t.index];return e.isArray(i)?(i=i.slice(),i[0]+=n):i+=n,i}}}},a.pie=e.clone(a.doughnut),e.extend(a.pie,{cutoutPercentage:0}),t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,getRingIndex:function(t){for(var e=0,a=0;a<t;++a)this.chart.isDatasetVisible(a)&&++e;return e},update:function(t){var a=this,i=a.chart,n=i.chartArea,o=i.options,r=o.elements.arc,s=n.right-n.left-r.borderWidth,l=n.bottom-n.top-r.borderWidth,u=Math.min(s,l),d={x:0,y:0},c=a.getMeta(),h=o.cutoutPercentage,f=o.circumference;if(f<2*Math.PI){var g=o.rotation%(2*Math.PI);g+=2*Math.PI*(g>=Math.PI?-1:g<-Math.PI?1:0);var p=g+f,m={x:Math.cos(g),y:Math.sin(g)},v={x:Math.cos(p),y:Math.sin(p)},b=g<=0&&0<=p||g<=2*Math.PI&&2*Math.PI<=p,x=g<=.5*Math.PI&&.5*Math.PI<=p||g<=2.5*Math.PI&&2.5*Math.PI<=p,y=g<=-Math.PI&&-Math.PI<=p||g<=Math.PI&&Math.PI<=p,k=g<=.5*-Math.PI&&.5*-Math.PI<=p||g<=1.5*Math.PI&&1.5*Math.PI<=p,S=h/100,M={x:y?-1:Math.min(m.x*(m.x<0?1:S),v.x*(v.x<0?1:S)),y:k?-1:Math.min(m.y*(m.y<0?1:S),v.y*(v.y<0?1:S))},w={x:b?1:Math.max(m.x*(m.x>0?1:S),v.x*(v.x>0?1:S)),y:x?1:Math.max(m.y*(m.y>0?1:S),v.y*(v.y>0?1:S))},C={width:.5*(w.x-M.x),height:.5*(w.y-M.y)};u=Math.min(s/C.width,l/C.height),d={x:(w.x+M.x)*-.5,y:(w.y+M.y)*-.5}}i.borderWidth=a.getMaxBorderWidth(c.data),i.outerRadius=Math.max((u-i.borderWidth)/2,0),i.innerRadius=Math.max(h?i.outerRadius/100*h:0,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),i.offsetX=d.x*i.outerRadius,i.offsetY=d.y*i.outerRadius,c.total=a.calculateTotal(),a.outerRadius=i.outerRadius-i.radiusLength*a.getRingIndex(a.index),a.innerRadius=Math.max(a.outerRadius-i.radiusLength,0),e.each(c.data,function(e,i){a.updateElement(e,i,t)})},updateElement:function(t,a,i){var n=this,o=n.chart,r=o.chartArea,s=o.options,l=s.animation,u=(r.left+r.right)/2,d=(r.top+r.bottom)/2,c=s.rotation,h=s.rotation,f=n.getDataset(),g=i&&l.animateRotate?0:t.hidden?0:n.calculateCircumference(f.data[a])*(s.circumference/(2*Math.PI)),p=i&&l.animateScale?0:n.innerRadius,m=i&&l.animateScale?0:n.outerRadius,v=e.getValueAtIndexOrDefault;e.extend(t,{_datasetIndex:n.index,_index:a,_model:{x:u+o.offsetX,y:d+o.offsetY,startAngle:c,endAngle:h,circumference:g,outerRadius:m,innerRadius:p,label:v(f.label,a,o.data.labels[a])}});var b=t._model;this.removeHoverStyle(t),i&&l.animateRotate||(0===a?b.startAngle=s.rotation:b.startAngle=n.getMeta().data[a-1]._model.endAngle,b.endAngle=b.startAngle+b.circumference),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},calculateTotal:function(){var t,a=this.getDataset(),i=this.getMeta(),n=0;return e.each(i.data,function(e,i){t=a.data[i],isNaN(t)||e.hidden||(n+=Math.abs(t))}),n},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(t/e):0},getMaxBorderWidth:function(t){for(var e,a,i=0,n=this.index,o=t.length,r=0;r<o;r++)e=t[r]._model?t[r]._model.borderWidth:0,a=t[r]._chart?t[r]._chart.config.data.datasets[n].hoverBorderWidth:0,i=e>i?e:i,i=a>i?a:i;return i}})}},{}],18:[function(t,e,a){"use strict";e.exports=function(t){function e(t,e){return a.getValueOrDefault(t.showLine,e.showLines)}var a=t.helpers;t.defaults.line={showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}},t.controllers.line=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,update:function(t){var i,n,o,r=this,s=r.getMeta(),l=s.dataset,u=s.data||[],d=r.chart.options,c=d.elements.line,h=r.getScaleForId(s.yAxisID),f=r.getDataset(),g=e(f,d);for(g&&(o=l.custom||{},void 0!==f.tension&&void 0===f.lineTension&&(f.lineTension=f.tension),l._scale=h,l._datasetIndex=r.index,l._children=u,l._model={spanGaps:f.spanGaps?f.spanGaps:d.spanGaps,tension:o.tension?o.tension:a.getValueOrDefault(f.lineTension,c.tension),backgroundColor:o.backgroundColor?o.backgroundColor:f.backgroundColor||c.backgroundColor,borderWidth:o.borderWidth?o.borderWidth:f.borderWidth||c.borderWidth,borderColor:o.borderColor?o.borderColor:f.borderColor||c.borderColor,borderCapStyle:o.borderCapStyle?o.borderCapStyle:f.borderCapStyle||c.borderCapStyle,borderDash:o.borderDash?o.borderDash:f.borderDash||c.borderDash,borderDashOffset:o.borderDashOffset?o.borderDashOffset:f.borderDashOffset||c.borderDashOffset,borderJoinStyle:o.borderJoinStyle?o.borderJoinStyle:f.borderJoinStyle||c.borderJoinStyle,fill:o.fill?o.fill:void 0!==f.fill?f.fill:c.fill,steppedLine:o.steppedLine?o.steppedLine:a.getValueOrDefault(f.steppedLine,c.stepped),cubicInterpolationMode:o.cubicInterpolationMode?o.cubicInterpolationMode:a.getValueOrDefault(f.cubicInterpolationMode,c.cubicInterpolationMode),scaleTop:h.top,scaleBottom:h.bottom,scaleZero:h.getBasePixel()},l.pivot()),i=0,n=u.length;i<n;++i)r.updateElement(u[i],i,t);for(g&&0!==l._model.tension&&r.updateBezierControlPoints(),i=0,n=u.length;i<n;++i)u[i].pivot()},getPointBackgroundColor:function(t,e){var i=this.chart.options.elements.point.backgroundColor,n=this.getDataset(),o=t.custom||{};return o.backgroundColor?i=o.backgroundColor:n.pointBackgroundColor?i=a.getValueAtIndexOrDefault(n.pointBackgroundColor,e,i):n.backgroundColor&&(i=n.backgroundColor),i},getPointBorderColor:function(t,e){var i=this.chart.options.elements.point.borderColor,n=this.getDataset(),o=t.custom||{};return o.borderColor?i=o.borderColor:n.pointBorderColor?i=a.getValueAtIndexOrDefault(n.pointBorderColor,e,i):n.borderColor&&(i=n.borderColor),i},getPointBorderWidth:function(t,e){var i=this.chart.options.elements.point.borderWidth,n=this.getDataset(),o=t.custom||{};return isNaN(o.borderWidth)?isNaN(n.pointBorderWidth)?isNaN(n.borderWidth)||(i=n.borderWidth):i=a.getValueAtIndexOrDefault(n.pointBorderWidth,e,i):i=o.borderWidth,i},updateElement:function(t,e,i){var n,o,r=this,s=r.getMeta(),l=t.custom||{},u=r.getDataset(),d=r.index,c=u.data[e],h=r.getScaleForId(s.yAxisID),f=r.getScaleForId(s.xAxisID),g=r.chart.options.elements.point,p=r.chart.data.labels||[],m=1===p.length||1===u.data.length||r.chart.isCombo;void 0!==u.radius&&void 0===u.pointRadius&&(u.pointRadius=u.radius),void 0!==u.hitRadius&&void 0===u.pointHitRadius&&(u.pointHitRadius=u.hitRadius),n=f.getPixelForValue("object"==typeof c?c:NaN,e,d,m),o=i?h.getBasePixel():r.calculatePointY(c,e,d),t._xScale=f,t._yScale=h,t._datasetIndex=d,t._index=e,t._model={x:n,y:o,skip:l.skip||isNaN(n)||isNaN(o),radius:l.radius||a.getValueAtIndexOrDefault(u.pointRadius,e,g.radius),pointStyle:l.pointStyle||a.getValueAtIndexOrDefault(u.pointStyle,e,g.pointStyle),backgroundColor:r.getPointBackgroundColor(t,e),borderColor:r.getPointBorderColor(t,e),borderWidth:r.getPointBorderWidth(t,e),tension:s.dataset._model?s.dataset._model.tension:0,steppedLine:!!s.dataset._model&&s.dataset._model.steppedLine,hitRadius:l.hitRadius||a.getValueAtIndexOrDefault(u.pointHitRadius,e,g.hitRadius)}},calculatePointY:function(t,e,a){var i,n,o,r=this,s=r.chart,l=r.getMeta(),u=r.getScaleForId(l.yAxisID),d=0,c=0;if(u.options.stacked){for(i=0;i<a;i++)if(n=s.data.datasets[i],o=s.getDatasetMeta(i),"line"===o.type&&o.yAxisID===u.id&&s.isDatasetVisible(i)){var h=Number(u.getRightValue(n.data[e]));h<0?c+=h||0:d+=h||0}var f=Number(u.getRightValue(t));return f<0?u.getPixelForValue(c+f):u.getPixelForValue(d+f)}return u.getPixelForValue(t)},updateBezierControlPoints:function(){function t(t,e,a){return Math.max(Math.min(t,a),e)}var e,i,n,o,r,s=this,l=s.getMeta(),u=s.chart.chartArea,d=l.data||[];if(l.dataset._model.spanGaps&&(d=d.filter(function(t){return!t._model.skip})),"monotone"===l.dataset._model.cubicInterpolationMode)a.splineCurveMonotone(d);else for(e=0,i=d.length;e<i;++e)n=d[e],o=n._model,r=a.splineCurve(a.previousItem(d,e)._model,o,a.nextItem(d,e)._model,l.dataset._model.tension),o.controlPointPreviousX=r.previous.x,o.controlPointPreviousY=r.previous.y,o.controlPointNextX=r.next.x,o.controlPointNextY=r.next.y;if(s.chart.options.elements.line.capBezierPoints)for(e=0,i=d.length;e<i;++e)o=d[e]._model,o.controlPointPreviousX=t(o.controlPointPreviousX,u.left,u.right),o.controlPointPreviousY=t(o.controlPointPreviousY,u.top,u.bottom),o.controlPointNextX=t(o.controlPointNextX,u.left,u.right),o.controlPointNextY=t(o.controlPointNextY,u.top,u.bottom)},draw:function(a){var i,n,o=this,r=o.getMeta(),s=r.data||[],l=a||1;for(i=0,n=s.length;i<n;++i)s[i].transition(l);for(t.canvasHelpers.clipArea(o.chart.chart.ctx,o.chart.chartArea),e(o.getDataset(),o.chart.options)&&r.dataset.transition(l).draw(),t.canvasHelpers.unclipArea(o.chart.chart.ctx),i=0,n=s.length;i<n;++i)s[i].draw(o.chart.chartArea)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},o=t._model;o.radius=n.hoverRadius||a.getValueAtIndexOrDefault(e.pointHoverRadius,i,this.chart.options.elements.point.hoverRadius),o.backgroundColor=n.hoverBackgroundColor||a.getValueAtIndexOrDefault(e.pointHoverBackgroundColor,i,a.getHoverColor(o.backgroundColor)),o.borderColor=n.hoverBorderColor||a.getValueAtIndexOrDefault(e.pointHoverBorderColor,i,a.getHoverColor(o.borderColor)),o.borderWidth=n.hoverBorderWidth||a.getValueAtIndexOrDefault(e.pointHoverBorderWidth,i,o.borderWidth)},removeHoverStyle:function(t){var e=this,i=e.chart.data.datasets[t._datasetIndex],n=t._index,o=t.custom||{},r=t._model;void 0!==i.radius&&void 0===i.pointRadius&&(i.pointRadius=i.radius),r.radius=o.radius||a.getValueAtIndexOrDefault(i.pointRadius,n,e.chart.options.elements.point.radius),r.backgroundColor=e.getPointBackgroundColor(t,n),r.borderColor=e.getPointBorderColor(t,n),r.borderWidth=e.getPointBorderWidth(t,n)}})}},{}],19:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.polarArea={scale:{type:"radialLinear",lineArc:!0,ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,aspectRatio:1,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var a=t.data,i=a.datasets,n=a.labels;if(i.length)for(var o=0;o<i[0].data.length;++o)e.push('<li><span style="background-color:'+i[0].backgroundColor[o]+'"></span>'),n[o]&&e.push(n[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var a=t.data;return a.labels.length&&a.datasets.length?a.labels.map(function(i,n){var o=t.getDatasetMeta(0),r=a.datasets[0],s=o.data[n],l=s.custom||{},u=e.getValueAtIndexOrDefault,d=t.options.elements.arc,c=l.backgroundColor?l.backgroundColor:u(r.backgroundColor,n,d.backgroundColor),h=l.borderColor?l.borderColor:u(r.borderColor,n,d.borderColor),f=l.borderWidth?l.borderWidth:u(r.borderWidth,n,d.borderWidth);return{text:i,fillStyle:c,strokeStyle:h,lineWidth:f,hidden:isNaN(r.data[n])||o.data[n].hidden,index:n}}):[]}},onClick:function(t,e){var a,i,n,o=e.index,r=this.chart;for(a=0,i=(r.data.datasets||[]).length;a<i;++a)n=r.getDatasetMeta(a),n.data[o].hidden=!n.data[o].hidden;r.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}},t.controllers.polarArea=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,update:function(t){var a=this,i=a.chart,n=i.chartArea,o=a.getMeta(),r=i.options,s=r.elements.arc,l=Math.min(n.right-n.left,n.bottom-n.top);i.outerRadius=Math.max((l-s.borderWidth/2)/2,0),i.innerRadius=Math.max(r.cutoutPercentage?i.outerRadius/100*r.cutoutPercentage:1,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),a.outerRadius=i.outerRadius-i.radiusLength*a.index,a.innerRadius=a.outerRadius-i.radiusLength,o.count=a.countVisibleElements(),e.each(o.data,function(e,i){a.updateElement(e,i,t)})},updateElement:function(t,a,i){for(var n=this,o=n.chart,r=n.getDataset(),s=o.options,l=s.animation,u=o.scale,d=e.getValueAtIndexOrDefault,c=o.data.labels,h=n.calculateCircumference(r.data[a]),f=u.xCenter,g=u.yCenter,p=0,m=n.getMeta(),v=0;v<a;++v)isNaN(r.data[v])||m.data[v].hidden||++p;var b=s.startAngle,x=t.hidden?0:u.getDistanceFromCenterForValue(r.data[a]),y=b+h*p,k=y+(t.hidden?0:h),S=l.animateScale?0:u.getDistanceFromCenterForValue(r.data[a]);e.extend(t,{_datasetIndex:n.index,_index:a,_scale:u,_model:{x:f,y:g,innerRadius:0,outerRadius:i?S:x,startAngle:i&&l.animateRotate?b:y,endAngle:i&&l.animateRotate?b:k,label:d(c,a,c[a])}}),n.removeHoverStyle(t),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},countVisibleElements:function(){var t=this.getDataset(),a=this.getMeta(),i=0;return e.each(a.data,function(e,a){isNaN(t.data[a])||e.hidden||i++}),i},calculateCircumference:function(t){var e=this.getMeta().count;return e>0&&!isNaN(t)?2*Math.PI/e:0}})}},{}],20:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.radar={aspectRatio:1,scale:{type:"radialLinear"},elements:{line:{tension:0}}},t.controllers.radar=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,linkScales:e.noop,update:function(t){var a=this,i=a.getMeta(),n=i.dataset,o=i.data,r=n.custom||{},s=a.getDataset(),l=a.chart.options.elements.line,u=a.chart.scale;void 0!==s.tension&&void 0===s.lineTension&&(s.lineTension=s.tension),e.extend(i.dataset,{_datasetIndex:a.index,_children:o,_loop:!0,_model:{tension:r.tension?r.tension:e.getValueOrDefault(s.lineTension,l.tension),backgroundColor:r.backgroundColor?r.backgroundColor:s.backgroundColor||l.backgroundColor,borderWidth:r.borderWidth?r.borderWidth:s.borderWidth||l.borderWidth,borderColor:r.borderColor?r.borderColor:s.borderColor||l.borderColor,fill:r.fill?r.fill:void 0!==s.fill?s.fill:l.fill,borderCapStyle:r.borderCapStyle?r.borderCapStyle:s.borderCapStyle||l.borderCapStyle,borderDash:r.borderDash?r.borderDash:s.borderDash||l.borderDash,borderDashOffset:r.borderDashOffset?r.borderDashOffset:s.borderDashOffset||l.borderDashOffset,borderJoinStyle:r.borderJoinStyle?r.borderJoinStyle:s.borderJoinStyle||l.borderJoinStyle,scaleTop:u.top,scaleBottom:u.bottom,scaleZero:u.getBasePosition()}}),i.dataset.pivot(),e.each(o,function(e,i){a.updateElement(e,i,t)},a),a.updateBezierControlPoints()},updateElement:function(t,a,i){var n=this,o=t.custom||{},r=n.getDataset(),s=n.chart.scale,l=n.chart.options.elements.point,u=s.getPointPositionForValue(a,r.data[a]);e.extend(t,{_datasetIndex:n.index,_index:a,_scale:s,_model:{x:i?s.xCenter:u.x,y:i?s.yCenter:u.y,tension:o.tension?o.tension:e.getValueOrDefault(r.lineTension,n.chart.options.elements.line.tension),radius:o.radius?o.radius:e.getValueAtIndexOrDefault(r.pointRadius,a,l.radius),backgroundColor:o.backgroundColor?o.backgroundColor:e.getValueAtIndexOrDefault(r.pointBackgroundColor,a,l.backgroundColor),borderColor:o.borderColor?o.borderColor:e.getValueAtIndexOrDefault(r.pointBorderColor,a,l.borderColor),borderWidth:o.borderWidth?o.borderWidth:e.getValueAtIndexOrDefault(r.pointBorderWidth,a,l.borderWidth),pointStyle:o.pointStyle?o.pointStyle:e.getValueAtIndexOrDefault(r.pointStyle,a,l.pointStyle),hitRadius:o.hitRadius?o.hitRadius:e.getValueAtIndexOrDefault(r.hitRadius,a,l.hitRadius)}}),t._model.skip=o.skip?o.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,a=this.getMeta();e.each(a.data,function(i,n){var o=i._model,r=e.splineCurve(e.previousItem(a.data,n,!0)._model,o,e.nextItem(a.data,n,!0)._model,o.tension);o.controlPointPreviousX=Math.max(Math.min(r.previous.x,t.right),t.left),o.controlPointPreviousY=Math.max(Math.min(r.previous.y,t.bottom),t.top),o.controlPointNextX=Math.max(Math.min(r.next.x,t.right),t.left),o.controlPointNextY=Math.max(Math.min(r.next.y,t.bottom),t.top),i.pivot()})},draw:function(t){var a=this.getMeta(),i=t||1;e.each(a.data,function(t){t.transition(i)}),a.dataset.transition(i).draw(),e.each(a.data,function(t){t.draw()})},setHoverStyle:function(t){var a=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},n=t._index,o=t._model;o.radius=i.hoverRadius?i.hoverRadius:e.getValueAtIndexOrDefault(a.pointHoverRadius,n,this.chart.options.elements.point.hoverRadius),o.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:e.getValueAtIndexOrDefault(a.pointHoverBackgroundColor,n,e.getHoverColor(o.backgroundColor)),o.borderColor=i.hoverBorderColor?i.hoverBorderColor:e.getValueAtIndexOrDefault(a.pointHoverBorderColor,n,e.getHoverColor(o.borderColor)),o.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:e.getValueAtIndexOrDefault(a.pointHoverBorderWidth,n,o.borderWidth)},removeHoverStyle:function(t){var a=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},n=t._index,o=t._model,r=this.chart.options.elements.point;o.radius=i.radius?i.radius:e.getValueAtIndexOrDefault(a.radius,n,r.radius),o.backgroundColor=i.backgroundColor?i.backgroundColor:e.getValueAtIndexOrDefault(a.pointBackgroundColor,n,r.backgroundColor),o.borderColor=i.borderColor?i.borderColor:e.getValueAtIndexOrDefault(a.pointBorderColor,n,r.borderColor),o.borderWidth=i.borderWidth?i.borderWidth:e.getValueAtIndexOrDefault(a.pointBorderWidth,n,r.borderWidth)}})}},{}],21:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.animation={duration:1e3,easing:"easeOutQuart",onProgress:e.noop,onComplete:e.noop},t.Animation=t.Element.extend({currentStep:null,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,a,i){var n=this;i||(t.animating=!0);for(var o=0;o<n.animations.length;++o)if(n.animations[o].chartInstance===t)return void(n.animations[o].animationObject=e);n.animations.push({chartInstance:t,animationObject:e}),1===n.animations.length&&n.requestAnimationFrame()},cancelAnimation:function(t){var a=e.findIndex(this.animations,function(e){return e.chartInstance===t});a!==-1&&(this.animations.splice(a,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=e.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=this,e=Date.now(),a=0;t.dropFrames>1&&(a=Math.floor(t.dropFrames),t.dropFrames=t.dropFrames%1);for(var i=0;i<t.animations.length;)null===t.animations[i].animationObject.currentStep&&(t.animations[i].animationObject.currentStep=0),t.animations[i].animationObject.currentStep+=1+a,t.animations[i].animationObject.currentStep>t.animations[i].animationObject.numSteps&&(t.animations[i].animationObject.currentStep=t.animations[i].animationObject.numSteps),t.animations[i].animationObject.render(t.animations[i].chartInstance,t.animations[i].animationObject),t.animations[i].animationObject.onAnimationProgress&&t.animations[i].animationObject.onAnimationProgress.call&&t.animations[i].animationObject.onAnimationProgress.call(t.animations[i].chartInstance,t.animations[i]),t.animations[i].animationObject.currentStep===t.animations[i].animationObject.numSteps?(t.animations[i].animationObject.onAnimationComplete&&t.animations[i].animationObject.onAnimationComplete.call&&t.animations[i].animationObject.onAnimationComplete.call(t.animations[i].chartInstance,t.animations[i]),t.animations[i].chartInstance.animating=!1,t.animations.splice(i,1)):++i;var n=Date.now(),o=(n-e)/t.frameDuration;t.dropFrames+=o,t.animations.length>0&&t.requestAnimationFrame()}}}},{}],22:[function(t,e,a){"use strict";e.exports=function(t){var e=t.canvasHelpers={};e.drawPoint=function(e,a,i,n,o){var r,s,l,u,d,c;if("object"==typeof a&&(r=a.toString(),"[object HTMLImageElement]"===r||"[object HTMLCanvasElement]"===r))return void e.drawImage(a,n-a.width/2,o-a.height/2);if(!(isNaN(i)||i<=0)){switch(a){default:e.beginPath(),e.arc(n,o,i,0,2*Math.PI),e.closePath(),e.fill();break;case"triangle":e.beginPath(),s=3*i/Math.sqrt(3),d=s*Math.sqrt(3)/2,e.moveTo(n-s/2,o+d/3),e.lineTo(n+s/2,o+d/3),e.lineTo(n,o-2*d/3),e.closePath(),e.fill();break;case"rect":c=1/Math.SQRT2*i,e.beginPath(),e.fillRect(n-c,o-c,2*c,2*c),e.strokeRect(n-c,o-c,2*c,2*c);break;case"rectRounded":var h=i/Math.SQRT2,f=n-h,g=o-h,p=Math.SQRT2*i;t.helpers.drawRoundedRectangle(e,f,g,p,p,i/2),e.fill();break;case"rectRot":c=1/Math.SQRT2*i,e.beginPath(),e.moveTo(n-c,o),e.lineTo(n,o+c),e.lineTo(n+c,o),e.lineTo(n,o-c),e.closePath(),e.fill();break;case"cross":e.beginPath(),e.moveTo(n,o+i),e.lineTo(n,o-i),e.moveTo(n-i,o),e.lineTo(n+i,o),e.closePath();break;case"crossRot":e.beginPath(),l=Math.cos(Math.PI/4)*i,u=Math.sin(Math.PI/4)*i,e.moveTo(n-l,o-u),e.lineTo(n+l,o+u),e.moveTo(n-l,o+u),e.lineTo(n+l,o-u),e.closePath();break;case"star":e.beginPath(),e.moveTo(n,o+i),e.lineTo(n,o-i),e.moveTo(n-i,o),e.lineTo(n+i,o),l=Math.cos(Math.PI/4)*i,u=Math.sin(Math.PI/4)*i,e.moveTo(n-l,o-u),e.lineTo(n+l,o+u),e.moveTo(n-l,o+u),e.lineTo(n+l,o-u),e.closePath();break;case"line":e.beginPath(),e.moveTo(n-i,o),e.lineTo(n+i,o),e.closePath();break;case"dash":e.beginPath(),e.moveTo(n,o),e.lineTo(n+i,o),e.closePath()}e.stroke()}},e.clipArea=function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},e.unclipArea=function(t){t.restore()}}},{}],23:[function(t,e,a){"use strict";e.exports=function(t){function e(e){e=e||{};var a=e.data=e.data||{};return a.datasets=a.datasets||[],a.labels=a.labels||[],e.options=i.configMerge(t.defaults.global,t.defaults[e.type],e.options||{}),e}function a(t){var e=t.options;e.scale?t.scale.options=e.scale:e.scales&&e.scales.xAxes.concat(e.scales.yAxes).forEach(function(e){t.scales[e.id].options=e}),t.tooltip._options=e.tooltips}var i=t.helpers,n=t.plugins,o=t.platform;t.types={},t.instances={},t.controllers={},t.Controller=function(a,n,r){var s=this;n=e(n);var l=o.acquireContext(a,n),u=l&&l.canvas,d=u&&u.height,c=u&&u.width;return r.ctx=l,r.canvas=u,r.config=n,r.width=c,r.height=d,r.aspectRatio=d?c/d:null,s.id=i.uid(),s.chart=r,s.config=n,s.options=n.options,s._bufferedRender=!1,t.instances[s.id]=s,Object.defineProperty(s,"data",{get:function(){return s.config.data}}),l&&u?(s.initialize(),s.update(),s):(console.error("Failed to create chart: can't acquire context from the given item"),s)},i.extend(t.Controller.prototype,{initialize:function(){var t=this;return n.notify(t,"beforeInit"),i.retinaScale(t.chart),t.bindEvents(),t.options.responsive&&t.resize(!0),t.ensureScalesHaveIDs(),t.buildScales(),t.initToolTip(),n.notify(t,"afterInit"),t},clear:function(){return i.clear(this.chart),this},stop:function(){return t.animationService.cancelAnimation(this),this},resize:function(t){var e=this,a=e.chart,o=e.options,r=a.canvas,s=o.maintainAspectRatio&&a.aspectRatio||null,l=Math.floor(i.getMaximumWidth(r)),u=Math.floor(s?l/s:i.getMaximumHeight(r));if((a.width!==l||a.height!==u)&&(r.width=a.width=l,r.height=a.height=u,r.style.width=l+"px",r.style.height=u+"px",i.retinaScale(a),!t)){var d={width:l,height:u};n.notify(e,"resize",[d]),e.options.onResize&&e.options.onResize(e,d),e.stop(),e.update(e.options.responsiveAnimationDuration)}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},a=t.scale;i.each(e.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),i.each(e.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),a&&(a.id=a.id||"scale")},buildScales:function(){var e=this,a=e.options,n=e.scales={},o=[];a.scales&&(o=o.concat((a.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category"}}),(a.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear"}}))),a.scale&&o.push({options:a.scale,dtype:"radialLinear",isDefault:!0}),i.each(o,function(a){var o=a.options,r=i.getValueOrDefault(o.type,a.dtype),s=t.scaleService.getScaleConstructor(r);if(s){var l=new s({id:o.id,options:o,ctx:e.chart.ctx,chart:e});n[l.id]=l,a.isDefault&&(e.scale=l)}}),t.scaleService.addScalesToLayout(this)},buildOrUpdateControllers:function(){var e=this,a=[],n=[];if(i.each(e.data.datasets,function(i,o){var r=e.getDatasetMeta(o);r.type||(r.type=i.type||e.config.type),a.push(r.type),r.controller?r.controller.updateIndex(o):(r.controller=new t.controllers[r.type](e,o),n.push(r.controller))},e),a.length>1)for(var o=1;o<a.length;o++)if(a[o]!==a[o-1]){e.isCombo=!0;break}return n},resetElements:function(){var t=this;i.each(t.data.datasets,function(e,a){t.getDatasetMeta(a).controller.reset()},t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t,e){var o=this;if(a(o),n.notify(o,"beforeUpdate")!==!1){o.tooltip._data=o.data;var r=o.buildOrUpdateControllers();i.each(o.data.datasets,function(t,e){o.getDatasetMeta(e).controller.buildOrUpdateElements()},o),o.updateLayout(),i.each(r,function(t){t.reset()}),o.updateDatasets(),n.notify(o,"afterUpdate"),o._bufferedRender?o._bufferedRequest={lazy:e,duration:t}:o.render(t,e)}},updateLayout:function(){var e=this;n.notify(e,"beforeLayout")!==!1&&(t.layoutService.update(this,this.chart.width,this.chart.height),n.notify(e,"afterScaleUpdate"),n.notify(e,"afterLayout"))},updateDatasets:function(){var t=this;if(n.notify(t,"beforeDatasetsUpdate")!==!1){for(var e=0,a=t.data.datasets.length;e<a;++e)t.getDatasetMeta(e).controller.update();n.notify(t,"afterDatasetsUpdate")}},render:function(e,a){var o=this;if(n.notify(o,"beforeRender")!==!1){var r=o.options.animation,s=function(){n.notify(o,"afterRender");var t=r&&r.onComplete;t&&t.call&&t.call(o)};if(r&&("undefined"!=typeof e&&0!==e||"undefined"==typeof e&&0!==r.duration)){var l=new t.Animation;l.numSteps=(e||r.duration)/16.66,l.easing=r.easing,l.render=function(t,e){var a=i.easingEffects[e.easing],n=e.currentStep/e.numSteps,o=a(n);t.draw(o,n,e.currentStep)},l.onAnimationProgress=r.onProgress,l.onAnimationComplete=s,t.animationService.addAnimation(o,l,e,a)}else o.draw(),s();return o}},draw:function(t){var e=this;e.clear(),void 0!==t&&null!==t||(t=1),n.notify(e,"beforeDraw",[t])!==!1&&(i.each(e.boxes,function(t){t.draw(e.chartArea)},e),e.scale&&e.scale.draw(),e.drawDatasets(t),e.tooltip.transition(t).draw(),n.notify(e,"afterDraw",[t]))},drawDatasets:function(t){var e=this;n.notify(e,"beforeDatasetsDraw",[t])!==!1&&(i.each(e.data.datasets,function(a,i){e.isDatasetVisible(i)&&e.getDatasetMeta(i).controller.draw(t)},e,!0),n.notify(e,"afterDatasetsDraw",[t]))},getElementAtEvent:function(e){return t.Interaction.modes.single(this,e)},getElementsAtEvent:function(e){return t.Interaction.modes.label(this,e,{intersect:!0})},getElementsAtXAxis:function(e){return t.Interaction.modes["x-axis"](this,e,{intersect:!0})},getElementsAtEventForMode:function(e,a,i){
var n=t.Interaction.modes[a];return"function"==typeof n?n(this,e,i):[]},getDatasetAtEvent:function(e){return t.Interaction.modes.dataset(this,e,{intersect:!0})},getDatasetMeta:function(t){var e=this,a=e.data.datasets[t];a._meta||(a._meta={});var i=a._meta[e.id];return i||(i=a._meta[e.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,a=this.data.datasets.length;e<a;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroy:function(){var e,a,r,s=this,l=s.chart.canvas;for(s.stop(),a=0,r=s.data.datasets.length;a<r;++a)e=s.getDatasetMeta(a),e.controller&&(e.controller.destroy(),e.controller=null);l&&(s.unbindEvents(),i.clear(s.chart),o.releaseContext(s.chart.ctx),s.chart.canvas=null,s.chart.ctx=null),n.notify(s,"destroy"),delete t.instances[s.id]},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)},initToolTip:function(){var e=this;e.tooltip=new t.Tooltip({_chart:e.chart,_chartInstance:e,_data:e.data,_options:e.options.tooltips},e),e.tooltip.initialize()},bindEvents:function(){var t=this,e=t._listeners={},a=function(){t.eventHandler.apply(t,arguments)};i.each(t.options.events,function(i){o.addEventListener(t,i,a),e[i]=a}),t.options.responsive&&(a=function(){t.resize()},o.addEventListener(t,"resize",a),e.resize=a)},unbindEvents:function(){var t=this,e=t._listeners;e&&(delete t._listeners,i.each(e,function(e,a){o.removeEventListener(t,a,e)}))},updateHoverStyle:function(t,e,a){var i,n,o,r=a?"setHoverStyle":"removeHoverStyle";for(n=0,o=t.length;n<o;++n)i=t[n],i&&this.getDatasetMeta(i._datasetIndex).controller[r](i)},eventHandler:function(t){var e=this,a=e.tooltip;if(n.notify(e,"beforeEvent",[t])!==!1){e._bufferedRender=!0,e._bufferedRequest=null;var i=e.handleEvent(t);i|=a&&a.handleEvent(t),n.notify(e,"afterEvent",[t]);var o=e._bufferedRequest;return o?e.render(o.duration,o.lazy):i&&!e.animating&&(e.stop(),e.render(e.options.hover.animationDuration,!0)),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e=this,a=e.options||{},n=a.hover,o=!1;return e.lastActive=e.lastActive||[],"mouseout"===t.type?e.active=[]:e.active=e.getElementsAtEventForMode(t,n.mode,n),n.onHover&&n.onHover.call(e,t.native,e.active),"mouseup"!==t.type&&"click"!==t.type||a.onClick&&a.onClick.call(e,t.native,e.active),e.lastActive.length&&e.updateHoverStyle(e.lastActive,n.mode,!1),e.active.length&&n.mode&&e.updateHoverStyle(e.active,n.mode,!0),o=!i.arrayEquals(e.active,e.lastActive),e.lastActive=e.active,o}})}},{}],24:[function(t,e,a){"use strict";e.exports=function(t){function e(t,e){return t._chartjs?void t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),void n.forEach(function(e){var a="onData"+e.charAt(0).toUpperCase()+e.slice(1),n=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),o=n.apply(this,e);return i.each(t._chartjs.listeners,function(t){"function"==typeof t[a]&&t[a].apply(t,e)}),o}})}))}function a(t,e){var a=t._chartjs;if(a){var i=a.listeners,o=i.indexOf(e);o!==-1&&i.splice(o,1),i.length>0||(n.forEach(function(e){delete t[e]}),delete t._chartjs)}}var i=t.helpers,n=["push","pop","shift","splice","unshift"];t.DatasetController=function(t,e){this.initialize(t,e)},i.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){var a=this;a.chart=t,a.index=e,a.linkScales(),a.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),a=t.getDataset();null===e.xAxisID&&(e.xAxisID=a.xAxisID||t.chart.options.scales.xAxes[0].id),null===e.yAxisID&&(e.yAxisID=a.yAxisID||t.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},destroy:function(){this._data&&a(this._data,this)},createMetaDataset:function(){var t=this,e=t.datasetElementType;return e&&new e({_chart:t.chart.chart,_datasetIndex:t.index})},createMetaData:function(t){var e=this,a=e.dataElementType;return a&&new a({_chart:e.chart.chart,_datasetIndex:e.index,_index:t})},addElements:function(){var t,e,a=this,i=a.getMeta(),n=a.getDataset().data||[],o=i.data;for(t=0,e=n.length;t<e;++t)o[t]=o[t]||a.createMetaData(t);i.dataset=i.dataset||a.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t=this,i=t.getDataset(),n=i.data||(i.data=[]);t._data!==n&&(t._data&&a(t._data,t),e(n,t),t._data=n),t.resyncElements()},update:i.noop,draw:function(t){var e,a,i=t||1,n=this.getMeta().data;for(e=0,a=n.length;e<a;++e)n[e].transition(i).draw()},removeHoverStyle:function(t,e){var a=this.chart.data.datasets[t._datasetIndex],n=t._index,o=t.custom||{},r=i.getValueAtIndexOrDefault,s=t._model;s.backgroundColor=o.backgroundColor?o.backgroundColor:r(a.backgroundColor,n,e.backgroundColor),s.borderColor=o.borderColor?o.borderColor:r(a.borderColor,n,e.borderColor),s.borderWidth=o.borderWidth?o.borderWidth:r(a.borderWidth,n,e.borderWidth)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],a=t._index,n=t.custom||{},o=i.getValueAtIndexOrDefault,r=i.getHoverColor,s=t._model;s.backgroundColor=n.hoverBackgroundColor?n.hoverBackgroundColor:o(e.hoverBackgroundColor,a,r(s.backgroundColor)),s.borderColor=n.hoverBorderColor?n.hoverBorderColor:o(e.hoverBorderColor,a,r(s.borderColor)),s.borderWidth=n.hoverBorderWidth?n.hoverBorderWidth:o(e.hoverBorderWidth,a,s.borderWidth)},resyncElements:function(){var t=this,e=t.getMeta(),a=t.getDataset().data,i=e.data.length,n=a.length;n<i?e.data.splice(n,i-n):n>i&&t.insertElements(i,n-i)},insertElements:function(t,e){for(var a=0;a<e;++a)this.addElementAndReset(t+a)},onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),t.DatasetController.extend=i.inherits}},{}],25:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.elements={},t.Element=function(t){e.extend(this,t),this.initialize.apply(this,arguments)},e.extend(t.Element.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=e.clone(t._model)),t._start=e.clone(t._view),t},transition:function(t){var a=this;return a._view||(a._view=e.clone(a._model)),1===t?(a._view=a._model,a._start=null,a):(a._start||a.pivot(),e.each(a._model,function(i,n){if("_"===n[0]);else if(a._view.hasOwnProperty(n))if(i===a._view[n]);else if("string"==typeof i)try{var o=e.color(a._model[n]).mix(e.color(a._start[n]),t);a._view[n]=o.rgbString()}catch(t){a._view[n]=i}else if("number"==typeof i){var r=void 0!==a._start[n]&&isNaN(a._start[n])===!1?a._start[n]:0;a._view[n]=(a._model[n]-r)*t+r}else a._view[n]=i;else"number"!=typeof i||isNaN(a._view[n])?a._view[n]=i:a._view[n]=i*t},a),a)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return e.isNumber(this._model.x)&&e.isNumber(this._model.y)}}),t.Element.extend=e.inherits}},{}],26:[function(t,e,a){"use strict";var i=t(3);e.exports=function(t){function e(t,e,a){var i;return"string"==typeof t?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[a])):i=t,i}function a(t){return void 0!==t&&null!==t&&"none"!==t}function n(t,i,n){var o=document.defaultView,r=t.parentNode,s=o.getComputedStyle(t)[i],l=o.getComputedStyle(r)[i],u=a(s),d=a(l),c=Number.POSITIVE_INFINITY;return u||d?Math.min(u?e(s,t,n):c,d?e(l,r,n):c):"none"}var o=t.helpers={};o.each=function(t,e,a,i){var n,r;if(o.isArray(t))if(r=t.length,i)for(n=r-1;n>=0;n--)e.call(a,t[n],n);else for(n=0;n<r;n++)e.call(a,t[n],n);else if("object"==typeof t){var s=Object.keys(t);for(r=s.length,n=0;n<r;n++)e.call(a,t[s[n]],s[n])}},o.clone=function(t){var e={};return o.each(t,function(t,a){o.isArray(t)?e[a]=t.slice(0):"object"==typeof t&&null!==t?e[a]=o.clone(t):e[a]=t}),e},o.extend=function(t){for(var e=function(e,a){t[a]=e},a=1,i=arguments.length;a<i;a++)o.each(arguments[a],e);return t},o.configMerge=function(e){var a=o.clone(e);return o.each(Array.prototype.slice.call(arguments,1),function(e){o.each(e,function(e,i){var n=a.hasOwnProperty(i),r=n?a[i]:{};"scales"===i?a[i]=o.scaleMerge(r,e):"scale"===i?a[i]=o.configMerge(r,t.scaleService.getScaleDefaults(e.type),e):!n||"object"!=typeof r||o.isArray(r)||null===r||"object"!=typeof e||o.isArray(e)?a[i]=e:a[i]=o.configMerge(r,e)})}),a},o.scaleMerge=function(e,a){var i=o.clone(e);return o.each(a,function(e,a){"xAxes"===a||"yAxes"===a?i.hasOwnProperty(a)?o.each(e,function(e,n){var r=o.getValueOrDefault(e.type,"xAxes"===a?"category":"linear"),s=t.scaleService.getScaleDefaults(r);n>=i[a].length||!i[a][n].type?i[a].push(o.configMerge(s,e)):e.type&&e.type!==i[a][n].type?i[a][n]=o.configMerge(i[a][n],s,e):i[a][n]=o.configMerge(i[a][n],e)}):(i[a]=[],o.each(e,function(e){var n=o.getValueOrDefault(e.type,"xAxes"===a?"category":"linear");i[a].push(o.configMerge(t.scaleService.getScaleDefaults(n),e))})):i.hasOwnProperty(a)&&"object"==typeof i[a]&&null!==i[a]&&"object"==typeof e?i[a]=o.configMerge(i[a],e):i[a]=e}),i},o.getValueAtIndexOrDefault=function(t,e,a){return void 0===t||null===t?a:o.isArray(t)?e<t.length?t[e]:a:t},o.getValueOrDefault=function(t,e){return void 0===t?e:t},o.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var a=0,i=t.length;a<i;++a)if(t[a]===e)return a;return-1},o.where=function(t,e){if(o.isArray(t)&&Array.prototype.filter)return t.filter(e);var a=[];return o.each(t,function(t){e(t)&&a.push(t)}),a},o.findIndex=Array.prototype.findIndex?function(t,e,a){return t.findIndex(e,a)}:function(t,e,a){a=void 0===a?t:a;for(var i=0,n=t.length;i<n;++i)if(e.call(a,t[i],i,t))return i;return-1},o.findNextWhere=function(t,e,a){void 0!==a&&null!==a||(a=-1);for(var i=a+1;i<t.length;i++){var n=t[i];if(e(n))return n}},o.findPreviousWhere=function(t,e,a){void 0!==a&&null!==a||(a=t.length);for(var i=a-1;i>=0;i--){var n=t[i];if(e(n))return n}},o.inherits=function(t){var e=this,a=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},i=function(){this.constructor=a};return i.prototype=e.prototype,a.prototype=new i,a.extend=o.inherits,t&&o.extend(a.prototype,t),a.__super__=e.prototype,a},o.noop=function(){},o.uid=function(){var t=0;return function(){return t++}}(),o.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},o.almostEquals=function(t,e,a){return Math.abs(t-e)<a},o.almostWhole=function(t,e){var a=Math.round(t);return a-e<t&&a+e>t},o.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},o.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},o.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return t=+t,0===t||isNaN(t)?t:t>0?1:-1},o.log10=Math.log10?function(t){return Math.log10(t)}:function(t){return Math.log(t)/Math.LN10},o.toRadians=function(t){return t*(Math.PI/180)},o.toDegrees=function(t){return t*(180/Math.PI)},o.getAngleFromPoint=function(t,e){var a=e.x-t.x,i=e.y-t.y,n=Math.sqrt(a*a+i*i),o=Math.atan2(i,a);return o<-.5*Math.PI&&(o+=2*Math.PI),{angle:o,distance:n}},o.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},o.aliasPixel=function(t){return t%2===0?0:.5},o.splineCurve=function(t,e,a,i){var n=t.skip?e:t,o=e,r=a.skip?e:a,s=Math.sqrt(Math.pow(o.x-n.x,2)+Math.pow(o.y-n.y,2)),l=Math.sqrt(Math.pow(r.x-o.x,2)+Math.pow(r.y-o.y,2)),u=s/(s+l),d=l/(s+l);u=isNaN(u)?0:u,d=isNaN(d)?0:d;var c=i*u,h=i*d;return{previous:{x:o.x-c*(r.x-n.x),y:o.y-c*(r.y-n.y)},next:{x:o.x+h*(r.x-n.x),y:o.y+h*(r.y-n.y)}}},o.EPSILON=Number.EPSILON||1e-14,o.splineCurveMonotone=function(t){var e,a,i,n,r=(t||[]).map(function(t){return{model:t._model,deltaK:0,mK:0}}),s=r.length;for(e=0;e<s;++e)if(i=r[e],!i.model.skip){if(a=e>0?r[e-1]:null,n=e<s-1?r[e+1]:null,n&&!n.model.skip){var l=n.model.x-i.model.x;i.deltaK=0!==l?(n.model.y-i.model.y)/l:0}!a||a.model.skip?i.mK=i.deltaK:!n||n.model.skip?i.mK=a.deltaK:this.sign(a.deltaK)!==this.sign(i.deltaK)?i.mK=0:i.mK=(a.deltaK+i.deltaK)/2}var u,d,c,h;for(e=0;e<s-1;++e)i=r[e],n=r[e+1],i.model.skip||n.model.skip||(o.almostEquals(i.deltaK,0,this.EPSILON)?i.mK=n.mK=0:(u=i.mK/i.deltaK,d=n.mK/i.deltaK,h=Math.pow(u,2)+Math.pow(d,2),h<=9||(c=3/Math.sqrt(h),i.mK=u*c*i.deltaK,n.mK=d*c*i.deltaK)));var f;for(e=0;e<s;++e)i=r[e],i.model.skip||(a=e>0?r[e-1]:null,n=e<s-1?r[e+1]:null,a&&!a.model.skip&&(f=(i.model.x-a.model.x)/3,i.model.controlPointPreviousX=i.model.x-f,i.model.controlPointPreviousY=i.model.y-f*i.mK),n&&!n.model.skip&&(f=(n.model.x-i.model.x)/3,i.model.controlPointNextX=i.model.x+f,i.model.controlPointNextY=i.model.y+f*i.mK))},o.nextItem=function(t,e,a){return a?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},o.previousItem=function(t,e,a){return a?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},o.niceNum=function(t,e){var a,i=Math.floor(o.log10(t)),n=t/Math.pow(10,i);return a=e?n<1.5?1:n<3?2:n<7?5:10:n<=1?1:n<=2?2:n<=5?5:10,a*Math.pow(10,i)};var r=o.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,a=0,i=1;return 0===t?0:1===(t/=1)?1:(a||(a=.3),i<Math.abs(1)?(i=1,e=a/4):e=a/(2*Math.PI)*Math.asin(1/i),-(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/a)))},easeOutElastic:function(t){var e=1.70158,a=0,i=1;return 0===t?0:1===(t/=1)?1:(a||(a=.3),i<Math.abs(1)?(i=1,e=a/4):e=a/(2*Math.PI)*Math.asin(1/i),i*Math.pow(2,-10*t)*Math.sin((1*t-e)*(2*Math.PI)/a)+1)},easeInOutElastic:function(t){var e=1.70158,a=0,i=1;return 0===t?0:2===(t/=.5)?1:(a||(a=1*(.3*1.5)),i<Math.abs(1)?(i=1,e=a/4):e=a/(2*Math.PI)*Math.asin(1/i),t<1?-.5*(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/a)):i*Math.pow(2,-10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/a)*.5+1)},easeInBack:function(t){var e=1.70158;return 1*(t/=1)*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return 1*((t=t/1-1)*t*((e+1)*t+e)+1)},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:function(t){return 1-r.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?1*(7.5625*t*t):t<2/2.75?1*(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return t<.5?.5*r.easeInBounce(2*t):.5*r.easeOutBounce(2*t-1)+.5}};o.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),o.getRelativePosition=function(t,e){var a,i,n=t.originalEvent||t,r=t.currentTarget||t.srcElement,s=r.getBoundingClientRect(),l=n.touches;l&&l.length>0?(a=l[0].clientX,i=l[0].clientY):(a=n.clientX,i=n.clientY);var u=parseFloat(o.getStyle(r,"padding-left")),d=parseFloat(o.getStyle(r,"padding-top")),c=parseFloat(o.getStyle(r,"padding-right")),h=parseFloat(o.getStyle(r,"padding-bottom")),f=s.right-s.left-u-c,g=s.bottom-s.top-d-h;return a=Math.round((a-s.left-u)/f*r.width/e.currentDevicePixelRatio),i=Math.round((i-s.top-d)/g*r.height/e.currentDevicePixelRatio),{x:a,y:i}},o.addEvent=function(t,e,a){t.addEventListener?t.addEventListener(e,a):t.attachEvent?t.attachEvent("on"+e,a):t["on"+e]=a},o.removeEvent=function(t,e,a){t.removeEventListener?t.removeEventListener(e,a,!1):t.detachEvent?t.detachEvent("on"+e,a):t["on"+e]=o.noop},o.getConstraintWidth=function(t){return n(t,"max-width","clientWidth")},o.getConstraintHeight=function(t){return n(t,"max-height","clientHeight")},o.getMaximumWidth=function(t){var e=t.parentNode,a=parseInt(o.getStyle(e,"padding-left"),10),i=parseInt(o.getStyle(e,"padding-right"),10),n=e.clientWidth-a-i,r=o.getConstraintWidth(t);return isNaN(r)?n:Math.min(n,r)},o.getMaximumHeight=function(t){var e=t.parentNode,a=parseInt(o.getStyle(e,"padding-top"),10),i=parseInt(o.getStyle(e,"padding-bottom"),10),n=e.clientHeight-a-i,r=o.getConstraintHeight(t);return isNaN(r)?n:Math.min(n,r)},o.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},o.retinaScale=function(t){var e=t.currentDevicePixelRatio=window.devicePixelRatio||1;if(1!==e){var a=t.canvas,i=t.height,n=t.width;a.height=i*e,a.width=n*e,t.ctx.scale(e,e),a.style.height=i+"px",a.style.width=n+"px"}},o.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},o.fontString=function(t,e,a){return e+" "+t+"px "+a},o.longestText=function(t,e,a,i){i=i||{};var n=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(n=i.data={},r=i.garbageCollect=[],i.font=e),t.font=e;var s=0;o.each(a,function(e){void 0!==e&&null!==e&&o.isArray(e)!==!0?s=o.measureText(t,n,r,s,e):o.isArray(e)&&o.each(e,function(e){void 0===e||null===e||o.isArray(e)||(s=o.measureText(t,n,r,s,e))})});var l=r.length/2;if(l>a.length){for(var u=0;u<l;u++)delete n[r[u]];r.splice(0,l)}return s},o.measureText=function(t,e,a,i,n){var o=e[n];return o||(o=e[n]=t.measureText(n).width,a.push(n)),o>i&&(i=o),i},o.numberOfLabelLines=function(t){var e=1;return o.each(t,function(t){o.isArray(t)&&t.length>e&&(e=t.length)}),e},o.drawRoundedRectangle=function(t,e,a,i,n,o){t.beginPath(),t.moveTo(e+o,a),t.lineTo(e+i-o,a),t.quadraticCurveTo(e+i,a,e+i,a+o),t.lineTo(e+i,a+n-o),t.quadraticCurveTo(e+i,a+n,e+i-o,a+n),t.lineTo(e+o,a+n),t.quadraticCurveTo(e,a+n,e,a+n-o),t.lineTo(e,a+o),t.quadraticCurveTo(e,a,e+o,a),t.closePath()},o.color=function(e){return i?i(e instanceof CanvasGradient?t.defaults.global.defaultColor:e):(console.error("Color.js not found!"),e)},o.isArray=Array.isArray?function(t){return Array.isArray(t)}:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o.arrayEquals=function(t,e){var a,i,n,r;if(!t||!e||t.length!==e.length)return!1;for(a=0,i=t.length;a<i;++a)if(n=t[a],r=e[a],n instanceof Array&&r instanceof Array){if(!o.arrayEquals(n,r))return!1}else if(n!==r)return!1;return!0},o.callCallback=function(t,e,a){t&&"function"==typeof t.call&&t.apply(a,e)},o.getHoverColor=function(t){return t instanceof CanvasPattern?t:o.color(t).saturate(.5).darken(.1).rgbString()}}},{3:3}],27:[function(t,e,a){"use strict";e.exports=function(t){function e(t,e){return t.native?{x:t.x,y:t.y}:r.getRelativePosition(t,e)}function a(t,e){var a,i,n,o,r,s=t.data.datasets;for(i=0,o=s.length;i<o;++i)if(t.isDatasetVisible(i))for(a=t.getDatasetMeta(i),n=0,r=a.data.length;n<r;++n){var l=a.data[n];l._view.skip||e(l)}}function i(t,e){var i=[];return a(t,function(t){t.inRange(e.x,e.y)&&i.push(t)}),i}function n(t,e,i,n){var o=Number.POSITIVE_INFINITY,s=[];return n||(n=r.distanceBetweenPoints),a(t,function(t){if(!i||t.inRange(e.x,e.y)){var a=t.getCenterPoint(),r=n(e,a);r<o?(s=[t],o=r):r===o&&s.push(t)}}),s}function o(t,a,o){var r=e(a,t.chart),s=function(t,e){return Math.abs(t.x-e.x)},l=o.intersect?i(t,r):n(t,r,!1,s),u=[];return l.length?(t.data.datasets.forEach(function(e,a){if(t.isDatasetVisible(a)){var i=t.getDatasetMeta(a),n=i.data[l[0]._index];n&&!n._view.skip&&u.push(n)}}),u):[]}var r=t.helpers;t.Interaction={modes:{single:function(t,i){var n=e(i,t.chart),o=[];return a(t,function(t){if(t.inRange(n.x,n.y))return o.push(t),o}),o.slice(0,1)},label:o,index:o,dataset:function(t,a,o){var r=e(a,t.chart),s=o.intersect?i(t,r):n(t,r,!1);return s.length>0&&(s=t.getDatasetMeta(s[0]._datasetIndex).data),s},"x-axis":function(t,e){return o(t,e,!0)},point:function(t,a){var n=e(a,t.chart);return i(t,n)},nearest:function(t,a,i){var o=e(a,t.chart),r=n(t,o,i.intersect);return r.length>1&&r.sort(function(t,e){var a=t.getArea(),i=e.getArea(),n=a-i;return 0===n&&(n=t._datasetIndex-e._datasetIndex),n}),r.slice(0,1)},x:function(t,i,n){var o=e(i,t.chart),r=[],s=!1;return a(t,function(t){t.inXRange(o.x)&&r.push(t),t.inRange(o.x,o.y)&&(s=!0)}),n.intersect&&!s&&(r=[]),r},y:function(t,i,n){var o=e(i,t.chart),r=[],s=!1;return a(t,function(t){t.inYRange(o.y)&&r.push(t),t.inRange(o.x,o.y)&&(s=!0)}),n.intersect&&!s&&(r=[]),r}}}}},{}],28:[function(t,e,a){"use strict";e.exports=function(){var t=function(e,a){return this.controller=new t.Controller(e,a,this),this.controller};return t.defaults={global:{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var a=0;a<t.data.datasets.length;a++)e.push('<li><span style="background-color:'+t.data.datasets[a].backgroundColor+'"></span>'),t.data.datasets[a].label&&e.push(t.data.datasets[a].label),e.push("</li>");return e.push("</ul>"),e.join("")}}},t.Chart=t,t}},{}],29:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.layoutService={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),t.boxes.push(e)},removeBox:function(t,e){t.boxes&&t.boxes.splice(t.boxes.indexOf(e),1)},update:function(t,a,i){function n(t){var e,a=t.isHorizontal();a?(e=t.update(t.options.fullWidth?x:C,w),I-=e.height):(e=t.update(M,S),C-=e.width),D.push({horizontal:a,minSize:e,box:t})}function o(t){var a=e.findNextWhere(D,function(e){return e.box===t});if(a)if(t.isHorizontal()){var i={left:Math.max(F,A),right:Math.max(V,T),top:0,bottom:0};t.update(t.options.fullWidth?x:C,y/2,i)}else t.update(a.minSize.width,I)}function r(t){var a=e.findNextWhere(D,function(e){return e.box===t}),i={left:0,right:0,top:R,bottom:O};a&&t.update(a.minSize.width,I,i)}function s(t){t.isHorizontal()?(t.left=t.options.fullWidth?d:F,t.right=t.options.fullWidth?a-c:F+C,t.top=E,t.bottom=E+t.height,E=t.bottom):(t.left=N,t.right=N+t.width,t.top=R,t.bottom=R+I,N=t.right)}if(t){var l=t.options.layout,u=l?l.padding:null,d=0,c=0,h=0,f=0;isNaN(u)?(d=u.left||0,c=u.right||0,h=u.top||0,f=u.bottom||0):(d=u,c=u,h=u,f=u);var g=e.where(t.boxes,function(t){return"left"===t.options.position}),p=e.where(t.boxes,function(t){return"right"===t.options.position}),m=e.where(t.boxes,function(t){return"top"===t.options.position}),v=e.where(t.boxes,function(t){return"bottom"===t.options.position}),b=e.where(t.boxes,function(t){return"chartArea"===t.options.position});m.sort(function(t,e){return(e.options.fullWidth?1:0)-(t.options.fullWidth?1:0)}),v.sort(function(t,e){return(t.options.fullWidth?1:0)-(e.options.fullWidth?1:0)});var x=a-d-c,y=i-h-f,k=x/2,S=y/2,M=(a-k)/(g.length+p.length),w=(i-S)/(m.length+v.length),C=x,I=y,D=[];e.each(g.concat(p,m,v),n);var A=0,T=0,P=0,_=0;e.each(m.concat(v),function(t){if(t.getPadding){var e=t.getPadding();A=Math.max(A,e.left),T=Math.max(T,e.right)}}),e.each(g.concat(p),function(t){if(t.getPadding){var e=t.getPadding();P=Math.max(P,e.top),_=Math.max(_,e.bottom)}});var F=d,V=c,R=h,O=f;e.each(g.concat(p),o),e.each(g,function(t){F+=t.width}),e.each(p,function(t){V+=t.width}),e.each(m.concat(v),o),e.each(m,function(t){R+=t.height}),e.each(v,function(t){O+=t.height}),e.each(g.concat(p),r),F=d,V=c,R=h,O=f,e.each(g,function(t){F+=t.width}),e.each(p,function(t){V+=t.width}),e.each(m,function(t){R+=t.height}),e.each(v,function(t){O+=t.height});var L=Math.max(A-F,0);F+=L,V+=Math.max(T-V,0);var B=Math.max(P-R,0);R+=B,O+=Math.max(_-O,0);var z=i-R-O,W=a-F-V;W===C&&z===I||(e.each(g,function(t){t.height=z}),e.each(p,function(t){t.height=z}),e.each(m,function(t){t.options.fullWidth||(t.width=W)}),e.each(v,function(t){t.options.fullWidth||(t.width=W)}),I=z,C=W);var N=d+L,E=h+B;e.each(g.concat(m),s),N+=C,E+=I,e.each(p,s),e.each(v,s),t.chartArea={left:F,top:R,right:F+C,bottom:R+I},e.each(b,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(C,I)})}}}}},{}],30:[function(t,e,a){"use strict";e.exports=function(t){function e(t,e){return t.usePointStyle?e*Math.SQRT2:t.boxWidth}function a(e,a){var i=new t.Legend({ctx:e.chart.ctx,options:a,chart:e});e.legend=i,t.layoutService.addBox(e,i)}var i=t.helpers,n=i.noop;t.defaults.global.legend={display:!0,position:"top",fullWidth:!0,reverse:!1,onClick:function(t,e){var a=e.datasetIndex,i=this.chart,n=i.getDatasetMeta(a);n.hidden=null===n.hidden?!i.data.datasets[a].hidden:null,i.update()},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data;return i.isArray(e.datasets)?e.datasets.map(function(e,a){return{text:e.label,fillStyle:i.isArray(e.backgroundColor)?e.backgroundColor[0]:e.backgroundColor,hidden:!t.isDatasetVisible(a),lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,pointStyle:e.pointStyle,datasetIndex:a}},this):[]}}},t.Legend=t.Element.extend({initialize:function(t){i.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:n,update:function(t,e,a){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=a,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:n,beforeSetDimensions:n,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:n,beforeBuildLabels:n,buildLabels:function(){var t=this,e=t.options.labels,a=e.generateLabels.call(t,t.chart);e.filter&&(a=a.filter(function(a){return e.filter(a,t.chart.data)})),t.options.reverse&&a.reverse(),t.legendItems=a},afterBuildLabels:n,beforeFit:n,fit:function(){var a=this,n=a.options,o=n.labels,r=n.display,s=a.ctx,l=t.defaults.global,u=i.getValueOrDefault,d=u(o.fontSize,l.defaultFontSize),c=u(o.fontStyle,l.defaultFontStyle),h=u(o.fontFamily,l.defaultFontFamily),f=i.fontString(d,c,h),g=a.legendHitBoxes=[],p=a.minSize,m=a.isHorizontal();if(m?(p.width=a.maxWidth,p.height=r?10:0):(p.width=r?10:0,p.height=a.maxHeight),r)if(s.font=f,m){var v=a.lineWidths=[0],b=a.legendItems.length?d+o.padding:0;s.textAlign="left",s.textBaseline="top",i.each(a.legendItems,function(t,i){var n=e(o,d),r=n+d/2+s.measureText(t.text).width;v[v.length-1]+r+o.padding>=a.width&&(b+=d+o.padding,v[v.length]=a.left),g[i]={left:0,top:0,width:r,height:d},v[v.length-1]+=r+o.padding}),p.height+=b}else{var x=o.padding,y=a.columnWidths=[],k=o.padding,S=0,M=0,w=d+x;i.each(a.legendItems,function(t,a){var i=e(o,d),n=i+d/2+s.measureText(t.text).width;M+w>p.height&&(k+=S+o.padding,y.push(S),S=0,M=0),S=Math.max(S,n),M+=w,g[a]={left:0,top:0,width:n,height:d}}),k+=S,y.push(S),p.width+=k}a.width=p.width,a.height=p.height},afterFit:n,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var a=this,n=a.options,o=n.labels,r=t.defaults.global,s=r.elements.line,l=a.width,u=a.lineWidths;if(n.display){var d,c=a.ctx,h=i.getValueOrDefault,f=h(o.fontColor,r.defaultFontColor),g=h(o.fontSize,r.defaultFontSize),p=h(o.fontStyle,r.defaultFontStyle),m=h(o.fontFamily,r.defaultFontFamily),v=i.fontString(g,p,m);c.textAlign="left",c.textBaseline="top",c.lineWidth=.5,c.strokeStyle=f,c.fillStyle=f,c.font=v;var b=e(o,g),x=a.legendHitBoxes,y=function(e,a,i){if(!(isNaN(b)||b<=0)){c.save(),c.fillStyle=h(i.fillStyle,r.defaultColor),c.lineCap=h(i.lineCap,s.borderCapStyle),c.lineDashOffset=h(i.lineDashOffset,s.borderDashOffset),c.lineJoin=h(i.lineJoin,s.borderJoinStyle),c.lineWidth=h(i.lineWidth,s.borderWidth),c.strokeStyle=h(i.strokeStyle,r.defaultColor);var o=0===h(i.lineWidth,s.borderWidth);if(c.setLineDash&&c.setLineDash(h(i.lineDash,s.borderDash)),n.labels&&n.labels.usePointStyle){var l=g*Math.SQRT2/2,u=l/Math.SQRT2,d=e+u,f=a+u;t.canvasHelpers.drawPoint(c,i.pointStyle,l,d,f)}else o||c.strokeRect(e,a,b,g),c.fillRect(e,a,b,g);c.restore()}},k=function(t,e,a,i){c.fillText(a.text,b+g/2+t,e),a.hidden&&(c.beginPath(),c.lineWidth=2,c.moveTo(b+g/2+t,e+g/2),c.lineTo(b+g/2+t+i,e+g/2),c.stroke())},S=a.isHorizontal();d=S?{x:a.left+(l-u[0])/2,y:a.top+o.padding,line:0}:{x:a.left+o.padding,y:a.top+o.padding,line:0};var M=g+o.padding;i.each(a.legendItems,function(t,e){var i=c.measureText(t.text).width,n=b+g/2+i,r=d.x,s=d.y;S?r+n>=l&&(s=d.y+=M,d.line++,r=d.x=a.left+(l-u[d.line])/2):s+M>a.bottom&&(r=d.x=r+a.columnWidths[d.line]+o.padding,s=d.y=a.top+o.padding,d.line++),y(r,s,t),x[e].left=r,x[e].top=s,k(r,s,t,i),S?d.x+=n+o.padding:d.y+=M})}},handleEvent:function(t){var e=this,a=e.options,i="mouseup"===t.type?"click":t.type,n=!1;if("mousemove"===i){if(!a.onHover)return}else{if("click"!==i)return;if(!a.onClick)return}var o=t.x,r=t.y;if(o>=e.left&&o<=e.right&&r>=e.top&&r<=e.bottom)for(var s=e.legendHitBoxes,l=0;l<s.length;++l){var u=s[l];if(o>=u.left&&o<=u.left+u.width&&r>=u.top&&r<=u.top+u.height){if("click"===i){a.onClick.call(e,t.native,e.legendItems[l]),n=!0;break}if("mousemove"===i){a.onHover.call(e,t.native,e.legendItems[l]),n=!0;break}}}return n}}),t.plugins.register({beforeInit:function(t){var e=t.options.legend;e&&a(t,e)},beforeUpdate:function(e){var n=e.options.legend;n?(n=i.configMerge(t.defaults.global.legend,n),e.legend?e.legend.options=n:a(e,n)):(t.layoutService.removeBox(e,e.legend),delete e.legend)},afterEvent:function(t,e){var a=t.legend;a&&a.handleEvent(e)}})}},{}],31:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.plugins={},t.plugins={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){e.indexOf(t)===-1&&e.push(t)}),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach(function(t){var a=e.indexOf(t);a!==-1&&e.splice(a,1)}),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length;
},getAll:function(){return this._plugins},notify:function(t,e,a){var i,n,o,r,s,l=this.descriptors(t),u=l.length;for(i=0;i<u;++i)if(n=l[i],o=n.plugin,s=o[e],"function"==typeof s&&(r=[t].concat(a||[]),r.push(n.options),s.apply(o,r)===!1))return!1;return!0},descriptors:function(a){var i=a._plugins||(a._plugins={});if(i.id===this._cacheId)return i.descriptors;var n=[],o=[],r=a&&a.config||{},s=t.defaults.global.plugins,l=r.options&&r.options.plugins||{};return this._plugins.concat(r.plugins||[]).forEach(function(t){var a=n.indexOf(t);if(a===-1){var i=t.id,r=l[i];r!==!1&&(r===!0&&(r=e.clone(s[i])),n.push(t),o.push({plugin:t,options:r||{}}))}}),i.descriptors=o,i.id=this._cacheId,o}},t.pluginService=t.plugins,t.PluginBase=e.inherits({})}},{}],32:[function(t,e,a){"use strict";e.exports=function(t){function e(t,e,a){return i.isArray(e)?i.longestText(t,a,e):t.measureText(e).width}function a(e){var a=i.getValueOrDefault,n=t.defaults.global,o=a(e.fontSize,n.defaultFontSize),r=a(e.fontStyle,n.defaultFontStyle),s=a(e.fontFamily,n.defaultFontFamily);return{size:o,style:r,family:s,font:i.fontString(o,r,s)}}var i=t.helpers;t.defaults.scale={display:!0,position:"left",gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{labelString:"",display:!1},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:t.Ticks.formatters.values}},t.Scale=t.Element.extend({getPadding:function(){var t=this;return{left:t.paddingLeft||0,top:t.paddingTop||0,right:t.paddingRight||0,bottom:t.paddingBottom||0}},beforeUpdate:function(){i.callCallback(this.options.beforeUpdate,[this])},update:function(t,e,a){var n=this;return n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n.margins=i.extend({left:0,right:0,top:0,bottom:0},a),n.longestTextCache=n.longestTextCache||{},n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeDataLimits(),n.determineDataLimits(),n.afterDataLimits(),n.beforeBuildTicks(),n.buildTicks(),n.afterBuildTicks(),n.beforeTickToLabelConversion(),n.convertTicksToLabels(),n.afterTickToLabelConversion(),n.beforeCalculateTickRotation(),n.calculateTickRotation(),n.afterCalculateTickRotation(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate(),n.minSize},afterUpdate:function(){i.callCallback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){i.callCallback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){i.callCallback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){i.callCallback(this.options.beforeDataLimits,[this])},determineDataLimits:i.noop,afterDataLimits:function(){i.callCallback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){i.callCallback(this.options.beforeBuildTicks,[this])},buildTicks:i.noop,afterBuildTicks:function(){i.callCallback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){i.callCallback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this,e=t.options.ticks;t.ticks=t.ticks.map(e.userCallback||e.callback)},afterTickToLabelConversion:function(){i.callCallback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){i.callCallback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t=this,e=t.ctx,n=t.options.ticks,o=a(n);e.font=o.font;var r=n.minRotation||0;if(t.options.display&&t.isHorizontal())for(var s,l,u=i.longestText(e,o.font,t.ticks,t.longestTextCache),d=u,c=t.getPixelForTick(1)-t.getPixelForTick(0)-6;d>c&&r<n.maxRotation;){var h=i.toRadians(r);if(s=Math.cos(h),l=Math.sin(h),l*u>t.maxHeight){r--;break}r++,d=s*u}t.labelRotation=r},afterCalculateTickRotation:function(){i.callCallback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){i.callCallback(this.options.beforeFit,[this])},fit:function(){var t=this,n=t.minSize={width:0,height:0},o=t.options,r=o.ticks,s=o.scaleLabel,l=o.gridLines,u=o.display,d=t.isHorizontal(),c=a(r),h=1.5*a(s).size,f=o.gridLines.tickMarkLength;if(d?n.width=t.isFullWidth()?t.maxWidth-t.margins.left-t.margins.right:t.maxWidth:n.width=u&&l.drawTicks?f:0,d?n.height=u&&l.drawTicks?f:0:n.height=t.maxHeight,s.display&&u&&(d?n.height+=h:n.width+=h),r.display&&u){var g=i.longestText(t.ctx,c.font,t.ticks,t.longestTextCache),p=i.numberOfLabelLines(t.ticks),m=.5*c.size;if(d){t.longestLabelWidth=g;var v=i.toRadians(t.labelRotation),b=Math.cos(v),x=Math.sin(v),y=x*g+c.size*p+m*p;n.height=Math.min(t.maxHeight,n.height+y),t.ctx.font=c.font;var k=t.ticks[0],S=e(t.ctx,k,c.font),M=t.ticks[t.ticks.length-1],w=e(t.ctx,M,c.font);0!==t.labelRotation?(t.paddingLeft="bottom"===o.position?b*S+3:b*m+3,t.paddingRight="bottom"===o.position?b*m+3:b*w+3):(t.paddingLeft=S/2+3,t.paddingRight=w/2+3)}else r.mirror?g=0:g+=t.options.ticks.padding,n.width+=g,t.paddingTop=c.size/2,t.paddingBottom=c.size/2}t.handleMargins(),t.width=n.width,t.height=n.height},handleMargins:function(){var t=this;t.margins&&(t.paddingLeft=Math.max(t.paddingLeft-t.margins.left,0),t.paddingTop=Math.max(t.paddingTop-t.margins.top,0),t.paddingRight=Math.max(t.paddingRight-t.margins.right,0),t.paddingBottom=Math.max(t.paddingBottom-t.margins.bottom,0))},afterFit:function(){i.callCallback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){return null===t||"undefined"==typeof t?NaN:"number"!=typeof t||isFinite(t)?"object"==typeof t?t instanceof Date||t.isValid?t:this.getRightValue(this.isHorizontal()?t.x:t.y):t:NaN},getLabelForIndex:i.noop,getPixelForValue:i.noop,getValueForPixel:i.noop,getPixelForTick:function(t,e){var a=this;if(a.isHorizontal()){var i=a.width-(a.paddingLeft+a.paddingRight),n=i/Math.max(a.ticks.length-(a.options.gridLines.offsetGridLines?0:1),1),o=n*t+a.paddingLeft;e&&(o+=n/2);var r=a.left+Math.round(o);return r+=a.isFullWidth()?a.margins.left:0}var s=a.height-(a.paddingTop+a.paddingBottom);return a.top+t*(s/(a.ticks.length-1))},getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var a=e.width-(e.paddingLeft+e.paddingRight),i=a*t+e.paddingLeft,n=e.left+Math.round(i);return n+=e.isFullWidth()?e.margins.left:0}return e.top+t*e.height},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this,e=t.min,a=t.max;return t.beginAtZero?0:e<0&&a<0?a:e>0&&a>0?e:0},draw:function(e){var n=this,o=n.options;if(o.display){var r,s,l=n.ctx,u=t.defaults.global,d=o.ticks,c=o.gridLines,h=o.scaleLabel,f=0!==n.labelRotation,g=d.autoSkip,p=n.isHorizontal();d.maxTicksLimit&&(s=d.maxTicksLimit);var m=i.getValueOrDefault(d.fontColor,u.defaultFontColor),v=a(d),b=c.drawTicks?c.tickMarkLength:0,x=i.getValueOrDefault(c.borderDash,u.borderDash),y=i.getValueOrDefault(c.borderDashOffset,u.borderDashOffset),k=i.getValueOrDefault(h.fontColor,u.defaultFontColor),S=a(h),M=i.toRadians(n.labelRotation),w=Math.cos(M),C=n.longestLabelWidth*w;l.fillStyle=m;var I=[];if(p){if(r=!1,f&&(C/=2),(C+d.autoSkipPadding)*n.ticks.length>n.width-(n.paddingLeft+n.paddingRight)&&(r=1+Math.floor((C+d.autoSkipPadding)*n.ticks.length/(n.width-(n.paddingLeft+n.paddingRight)))),s&&n.ticks.length>s)for(;!r||n.ticks.length/(r||1)>s;)r||(r=1),r+=1;g||(r=!1)}var D="right"===o.position?n.left:n.right-b,A="right"===o.position?n.left+b:n.right,T="bottom"===o.position?n.top:n.bottom-b,P="bottom"===o.position?n.top+b:n.bottom;if(i.each(n.ticks,function(t,a){if(void 0!==t&&null!==t){var s=n.ticks.length===a+1,l=r>1&&a%r>0||a%r===0&&a+r>=n.ticks.length;if((!l||s)&&void 0!==t&&null!==t){var u,h;a===("undefined"!=typeof n.zeroLineIndex?n.zeroLineIndex:0)?(u=c.zeroLineWidth,h=c.zeroLineColor):(u=i.getValueAtIndexOrDefault(c.lineWidth,a),h=i.getValueAtIndexOrDefault(c.color,a));var g,m,v,k,S,w,C,_,F,V,R="middle",O="middle";if(p){"bottom"===o.position?(O=f?"middle":"top",R=f?"right":"center",V=n.top+b):(O=f?"middle":"bottom",R=f?"left":"center",V=n.bottom-b);var L=n.getPixelForTick(a)+i.aliasPixel(u);F=n.getPixelForTick(a,c.offsetGridLines)+d.labelOffset,g=v=S=C=L,m=T,k=P,w=e.top,_=e.bottom}else{var B,z="left"===o.position,W=d.padding;d.mirror?(R=z?"left":"right",B=W):(R=z?"right":"left",B=b+W),F=z?n.right-B:n.left+B;var N=n.getPixelForTick(a);N+=i.aliasPixel(u),V=n.getPixelForTick(a,c.offsetGridLines),g=D,v=A,S=e.left,C=e.right,m=k=w=_=N}I.push({tx1:g,ty1:m,tx2:v,ty2:k,x1:S,y1:w,x2:C,y2:_,labelX:F,labelY:V,glWidth:u,glColor:h,glBorderDash:x,glBorderDashOffset:y,rotation:-1*M,label:t,textBaseline:O,textAlign:R})}}}),i.each(I,function(t){if(c.display&&(l.save(),l.lineWidth=t.glWidth,l.strokeStyle=t.glColor,l.setLineDash&&(l.setLineDash(t.glBorderDash),l.lineDashOffset=t.glBorderDashOffset),l.beginPath(),c.drawTicks&&(l.moveTo(t.tx1,t.ty1),l.lineTo(t.tx2,t.ty2)),c.drawOnChartArea&&(l.moveTo(t.x1,t.y1),l.lineTo(t.x2,t.y2)),l.stroke(),l.restore()),d.display){l.save(),l.translate(t.labelX,t.labelY),l.rotate(t.rotation),l.font=v.font,l.textBaseline=t.textBaseline,l.textAlign=t.textAlign;var e=t.label;if(i.isArray(e))for(var a=0,n=0;a<e.length;++a)l.fillText(""+e[a],0,n),n+=1.5*v.size;else l.fillText(e,0,0);l.restore()}}),h.display){var _,F,V=0;if(p)_=n.left+(n.right-n.left)/2,F="bottom"===o.position?n.bottom-S.size/2:n.top+S.size/2;else{var R="left"===o.position;_=R?n.left+S.size/2:n.right-S.size/2,F=n.top+(n.bottom-n.top)/2,V=R?-.5*Math.PI:.5*Math.PI}l.save(),l.translate(_,F),l.rotate(V),l.textAlign="center",l.textBaseline="middle",l.fillStyle=k,l.font=S.font,l.fillText(h.labelString,0,0),l.restore()}if(c.drawBorder){l.lineWidth=i.getValueAtIndexOrDefault(c.lineWidth,0),l.strokeStyle=i.getValueAtIndexOrDefault(c.color,0);var O=n.left,L=n.right,B=n.top,z=n.bottom,W=i.aliasPixel(l.lineWidth);p?(B=z="top"===o.position?n.bottom:n.top,B+=W,z+=W):(O=L="left"===o.position?n.right:n.left,O+=W,L+=W),l.beginPath(),l.moveTo(O,B),l.lineTo(L,z),l.stroke()}}}})}},{}],33:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.scaleService={constructors:{},defaults:{},registerScaleType:function(t,a,i){this.constructors[t]=a,this.defaults[t]=e.clone(i)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(a){return this.defaults.hasOwnProperty(a)?e.scaleMerge(t.defaults.scale,this.defaults[a]):{}},updateScaleDefaults:function(t,a){var i=this.defaults;i.hasOwnProperty(t)&&(i[t]=e.extend(i[t],a))},addScalesToLayout:function(a){e.each(a.scales,function(e){t.layoutService.addBox(a,e)})}}}},{}],34:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.Ticks={generators:{linear:function(t,a){var i,n=[];if(t.stepSize&&t.stepSize>0)i=t.stepSize;else{var o=e.niceNum(a.max-a.min,!1);i=e.niceNum(o/(t.maxTicks-1),!0)}var r=Math.floor(a.min/i)*i,s=Math.ceil(a.max/i)*i;t.min&&t.max&&t.stepSize&&e.almostWhole((t.max-t.min)/t.stepSize,i/1e3)&&(r=t.min,s=t.max);var l=(s-r)/i;l=e.almostEquals(l,Math.round(l),i/1e3)?Math.round(l):Math.ceil(l),n.push(void 0!==t.min?t.min:r);for(var u=1;u<l;++u)n.push(r+u*i);return n.push(void 0!==t.max?t.max:s),n},logarithmic:function(t,a){var i,n,o=[],r=e.getValueOrDefault,s=r(t.min,Math.pow(10,Math.floor(e.log10(a.min)))),l=Math.floor(e.log10(a.max)),u=Math.ceil(a.max/Math.pow(10,l));0===s?(i=Math.floor(e.log10(a.minNotZero)),n=Math.floor(a.minNotZero/Math.pow(10,i)),o.push(s),s=n*Math.pow(10,i)):(i=Math.floor(e.log10(s)),n=Math.floor(s/Math.pow(10,i)));do o.push(s),++n,10===n&&(n=1,++i),s=n*Math.pow(10,i);while(i<l||i===l&&n<u);var d=r(t.max,s);return o.push(d),o}},formatters:{values:function(t){return e.isArray(t)?t:""+t},linear:function(t,a,i){var n=i.length>3?i[2]-i[1]:i[1]-i[0];Math.abs(n)>1&&t!==Math.floor(t)&&(n=t-Math.floor(t));var o=e.log10(Math.abs(n)),r="";if(0!==t){var s=-1*Math.floor(o);s=Math.max(Math.min(s,20),0),r=t.toFixed(s)}else r="0";return r},logarithmic:function(t,a,i){var n=t/Math.pow(10,Math.floor(e.log10(t)));return 0===t?"0":1===n||2===n||5===n||0===a||a===i.length-1?t.toExponential():""}}}}},{}],35:[function(t,e,a){"use strict";e.exports=function(t){function e(e,a){var i=new t.Title({ctx:e.chart.ctx,options:a,chart:e});e.titleBlock=i,t.layoutService.addBox(e,i)}var a=t.helpers;t.defaults.global.title={display:!1,position:"top",fullWidth:!0,fontStyle:"bold",padding:10,text:""};var i=a.noop;t.Title=t.Element.extend({initialize:function(t){var e=this;a.extend(e,t),e.legendHitBoxes=[]},beforeUpdate:i,update:function(t,e,a){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=a,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:i,beforeSetDimensions:i,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:i,beforeBuildLabels:i,buildLabels:i,afterBuildLabels:i,beforeFit:i,fit:function(){var e=this,i=a.getValueOrDefault,n=e.options,o=t.defaults.global,r=n.display,s=i(n.fontSize,o.defaultFontSize),l=e.minSize;e.isHorizontal()?(l.width=e.maxWidth,l.height=r?s+2*n.padding:0):(l.width=r?s+2*n.padding:0,l.height=e.maxHeight),e.width=l.width,e.height=l.height},afterFit:i,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var e=this,i=e.ctx,n=a.getValueOrDefault,o=e.options,r=t.defaults.global;if(o.display){var s,l,u,d=n(o.fontSize,r.defaultFontSize),c=n(o.fontStyle,r.defaultFontStyle),h=n(o.fontFamily,r.defaultFontFamily),f=a.fontString(d,c,h),g=0,p=e.top,m=e.left,v=e.bottom,b=e.right;i.fillStyle=n(o.fontColor,r.defaultFontColor),i.font=f,e.isHorizontal()?(s=m+(b-m)/2,l=p+(v-p)/2,u=b-m):(s="left"===o.position?m+d/2:b-d/2,l=p+(v-p)/2,u=v-p,g=Math.PI*("left"===o.position?-.5:.5)),i.save(),i.translate(s,l),i.rotate(g),i.textAlign="center",i.textBaseline="middle",i.fillText(o.text,0,0,u),i.restore()}}}),t.plugins.register({beforeInit:function(t){var a=t.options.title;a&&e(t,a)},beforeUpdate:function(i){var n=i.options.title;n?(n=a.configMerge(t.defaults.global.title,n),i.titleBlock?i.titleBlock.options=n:e(i,n)):(t.layoutService.removeBox(i,i.titleBlock),delete i.titleBlock)}})}},{}],36:[function(t,e,a){"use strict";e.exports=function(t){function e(t,e){var a=l.color(t);return a.alpha(e*a.alpha()).rgbaString()}function a(t,e){return e&&(l.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function i(t){var e=t._xScale,a=t._yScale||t._scale,i=t._index,n=t._datasetIndex;return{xLabel:e?e.getLabelForIndex(i,n):"",yLabel:a?a.getLabelForIndex(i,n):"",index:i,datasetIndex:n,x:t._model.x,y:t._model.y}}function n(e){var a=t.defaults.global,i=l.getValueOrDefault;return{xPadding:e.xPadding,yPadding:e.yPadding,xAlign:e.xAlign,yAlign:e.yAlign,bodyFontColor:e.bodyFontColor,_bodyFontFamily:i(e.bodyFontFamily,a.defaultFontFamily),_bodyFontStyle:i(e.bodyFontStyle,a.defaultFontStyle),_bodyAlign:e.bodyAlign,bodyFontSize:i(e.bodyFontSize,a.defaultFontSize),bodySpacing:e.bodySpacing,titleFontColor:e.titleFontColor,_titleFontFamily:i(e.titleFontFamily,a.defaultFontFamily),_titleFontStyle:i(e.titleFontStyle,a.defaultFontStyle),titleFontSize:i(e.titleFontSize,a.defaultFontSize),_titleAlign:e.titleAlign,titleSpacing:e.titleSpacing,titleMarginBottom:e.titleMarginBottom,footerFontColor:e.footerFontColor,_footerFontFamily:i(e.footerFontFamily,a.defaultFontFamily),_footerFontStyle:i(e.footerFontStyle,a.defaultFontStyle),footerFontSize:i(e.footerFontSize,a.defaultFontSize),_footerAlign:e.footerAlign,footerSpacing:e.footerSpacing,footerMarginTop:e.footerMarginTop,caretSize:e.caretSize,cornerRadius:e.cornerRadius,backgroundColor:e.backgroundColor,opacity:0,legendColorBackground:e.multiKeyBackground,displayColors:e.displayColors}}function o(t,e){var a=t._chart.ctx,i=2*e.yPadding,n=0,o=e.body,r=o.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);r+=e.beforeBody.length+e.afterBody.length;var s=e.title.length,u=e.footer.length,d=e.titleFontSize,c=e.bodyFontSize,h=e.footerFontSize;i+=s*d,i+=s?(s-1)*e.titleSpacing:0,i+=s?e.titleMarginBottom:0,i+=r*c,i+=r?(r-1)*e.bodySpacing:0,i+=u?e.footerMarginTop:0,i+=u*h,i+=u?(u-1)*e.footerSpacing:0;var f=0,g=function(t){n=Math.max(n,a.measureText(t).width+f)};return a.font=l.fontString(d,e._titleFontStyle,e._titleFontFamily),l.each(e.title,g),a.font=l.fontString(c,e._bodyFontStyle,e._bodyFontFamily),l.each(e.beforeBody.concat(e.afterBody),g),f=e.displayColors?c+2:0,l.each(o,function(t){l.each(t.before,g),l.each(t.lines,g),l.each(t.after,g)}),f=0,a.font=l.fontString(h,e._footerFontStyle,e._footerFontFamily),l.each(e.footer,g),n+=2*e.xPadding,{width:n,height:i}}function r(t,e){var a=t._model,i=t._chart,n=t._chartInstance.chartArea,o="center",r="center";a.y<e.height?r="top":a.y>i.height-e.height&&(r="bottom");var s,l,u,d,c,h=(n.left+n.right)/2,f=(n.top+n.bottom)/2;"center"===r?(s=function(t){return t<=h},l=function(t){return t>h}):(s=function(t){return t<=e.width/2},l=function(t){return t>=i.width-e.width/2}),u=function(t){return t+e.width>i.width},d=function(t){return t-e.width<0},c=function(t){return t<=f?"top":"bottom"},s(a.x)?(o="left",u(a.x)&&(o="center",r=c(a.y))):l(a.x)&&(o="right",d(a.x)&&(o="center",r=c(a.y)));var g=t._options;return{xAlign:g.xAlign?g.xAlign:o,yAlign:g.yAlign?g.yAlign:r}}function s(t,e,a){var i=t.x,n=t.y,o=t.caretSize,r=t.caretPadding,s=t.cornerRadius,l=a.xAlign,u=a.yAlign,d=o+r,c=s+r;return"right"===l?i-=e.width:"center"===l&&(i-=e.width/2),"top"===u?n+=d:n-="bottom"===u?e.height+d:e.height/2,"center"===u?"left"===l?i+=d:"right"===l&&(i-=d):"left"===l?i-=c:"right"===l&&(i+=c),{x:i,y:n}}var l=t.helpers;t.defaults.global.tooltips={enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,callbacks:{beforeTitle:l.noop,title:function(t,e){var a="",i=e.labels,n=i?i.length:0;if(t.length>0){var o=t[0];o.xLabel?a=o.xLabel:n>0&&o.index<n&&(a=i[o.index])}return a},afterTitle:l.noop,beforeBody:l.noop,beforeLabel:l.noop,label:function(t,e){var a=e.datasets[t.datasetIndex].label||"";return a+": "+t.yLabel},labelColor:function(t,e){var a=e.getDatasetMeta(t.datasetIndex),i=a.data[t.index],n=i._view;return{borderColor:n.borderColor,backgroundColor:n.backgroundColor}},afterLabel:l.noop,afterBody:l.noop,beforeFooter:l.noop,footer:l.noop,afterFooter:l.noop}},t.Tooltip=t.Element.extend({initialize:function(){this._model=n(this._options)},getTitle:function(){var t=this,e=t._options,i=e.callbacks,n=i.beforeTitle.apply(t,arguments),o=i.title.apply(t,arguments),r=i.afterTitle.apply(t,arguments),s=[];return s=a(s,n),s=a(s,o),s=a(s,r)},getBeforeBody:function(){var t=this._options.callbacks.beforeBody.apply(this,arguments);return l.isArray(t)?t:void 0!==t?[t]:[]},getBody:function(t,e){var i=this,n=i._options.callbacks,o=[];return l.each(t,function(t){var r={before:[],lines:[],after:[]};a(r.before,n.beforeLabel.call(i,t,e)),a(r.lines,n.label.call(i,t,e)),a(r.after,n.afterLabel.call(i,t,e)),o.push(r)}),o},getAfterBody:function(){var t=this._options.callbacks.afterBody.apply(this,arguments);return l.isArray(t)?t:void 0!==t?[t]:[]},getFooter:function(){var t=this,e=t._options.callbacks,i=e.beforeFooter.apply(t,arguments),n=e.footer.apply(t,arguments),o=e.afterFooter.apply(t,arguments),r=[];return r=a(r,i),r=a(r,n),r=a(r,o)},update:function(e){var a,u,d=this,c=d._options,h=d._model,f=d._model=n(c),g=d._active,p=d._data,m=d._chartInstance,v={xAlign:h.xAlign,yAlign:h.yAlign},b={x:h.x,y:h.y},x={width:h.width,height:h.height},y={x:h.caretX,y:h.caretY};if(g.length){f.opacity=1;var k=[];y=t.Tooltip.positioners[c.position](g,d._eventPosition);var S=[];for(a=0,u=g.length;a<u;++a)S.push(i(g[a]));c.filter&&(S=S.filter(function(t){return c.filter(t,p)})),c.itemSort&&(S=S.sort(function(t,e){return c.itemSort(t,e,p)})),l.each(S,function(t){k.push(c.callbacks.labelColor.call(d,t,m))}),f.title=d.getTitle(S,p),f.beforeBody=d.getBeforeBody(S,p),f.body=d.getBody(S,p),f.afterBody=d.getAfterBody(S,p),f.footer=d.getFooter(S,p),f.x=Math.round(y.x),f.y=Math.round(y.y),f.caretPadding=l.getValueOrDefault(y.padding,2),f.labelColors=k,f.dataPoints=S,x=o(this,f),v=r(this,x),b=s(f,x,v)}else f.opacity=0;return f.xAlign=v.xAlign,f.yAlign=v.yAlign,f.x=b.x,f.y=b.y,f.width=x.width,f.height=x.height,f.caretX=y.x,f.caretY=y.y,d._model=f,e&&c.custom&&c.custom.call(d,f),d},drawCaret:function(t,a,i){var n,o,r,s,l,u,d=this._view,c=this._chart.ctx,h=d.caretSize,f=d.cornerRadius,g=d.xAlign,p=d.yAlign,m=t.x,v=t.y,b=a.width,x=a.height;"center"===p?("left"===g?(n=m,o=n-h,r=n):(n=m+b,o=n+h,r=n),l=v+x/2,s=l-h,u=l+h):("left"===g?(n=m+f,o=n+h,r=o+h):"right"===g?(n=m+b-f,o=n-h,r=o-h):(o=m+b/2,n=o-h,r=o+h),"top"===p?(s=v,l=s-h,u=s):(s=v+x,l=s+h,u=s)),c.fillStyle=e(d.backgroundColor,i),c.beginPath(),c.moveTo(n,s),c.lineTo(o,l),c.lineTo(r,u),c.closePath(),c.fill()},drawTitle:function(t,a,i,n){var o=a.title;if(o.length){i.textAlign=a._titleAlign,i.textBaseline="top";var r=a.titleFontSize,s=a.titleSpacing;i.fillStyle=e(a.titleFontColor,n),i.font=l.fontString(r,a._titleFontStyle,a._titleFontFamily);var u,d;for(u=0,d=o.length;u<d;++u)i.fillText(o[u],t.x,t.y),t.y+=r+s,u+1===o.length&&(t.y+=a.titleMarginBottom-s)}},drawBody:function(t,a,i,n){var o=a.bodyFontSize,r=a.bodySpacing,s=a.body;i.textAlign=a._bodyAlign,i.textBaseline="top";var u=e(a.bodyFontColor,n);i.fillStyle=u,i.font=l.fontString(o,a._bodyFontStyle,a._bodyFontFamily);var d=0,c=function(e){i.fillText(e,t.x+d,t.y),t.y+=o+r};l.each(a.beforeBody,c);var h=a.displayColors;d=h?o+2:0,l.each(s,function(r,s){l.each(r.before,c),l.each(r.lines,function(r){h&&(i.fillStyle=e(a.legendColorBackground,n),i.fillRect(t.x,t.y,o,o),i.strokeStyle=e(a.labelColors[s].borderColor,n),i.strokeRect(t.x,t.y,o,o),i.fillStyle=e(a.labelColors[s].backgroundColor,n),i.fillRect(t.x+1,t.y+1,o-2,o-2),i.fillStyle=u),c(r)}),l.each(r.after,c)}),d=0,l.each(a.afterBody,c),t.y-=r},drawFooter:function(t,a,i,n){var o=a.footer;o.length&&(t.y+=a.footerMarginTop,i.textAlign=a._footerAlign,i.textBaseline="top",i.fillStyle=e(a.footerFontColor,n),i.font=l.fontString(a.footerFontSize,a._footerFontStyle,a._footerFontFamily),l.each(o,function(e){i.fillText(e,t.x,t.y),t.y+=a.footerFontSize+a.footerSpacing}))},drawBackground:function(t,a,i,n,o){i.fillStyle=e(a.backgroundColor,o),l.drawRoundedRectangle(i,t.x,t.y,n.width,n.height,a.cornerRadius),i.fill()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var a={width:e.width,height:e.height},i={x:e.x,y:e.y},n=Math.abs(e.opacity<.001)?0:e.opacity;this._options.enabled&&(this.drawBackground(i,e,t,a,n),this.drawCaret(i,a,n),i.x+=e.xPadding,i.y+=e.yPadding,this.drawTitle(i,e,t,n),this.drawBody(i,e,t,n),this.drawFooter(i,e,t,n))}},handleEvent:function(t){var e=this,a=e._options,i=!1;if(e._lastActive=e._lastActive||[],"mouseout"===t.type?e._active=[]:e._active=e._chartInstance.getElementsAtEventForMode(t,a.mode,a),i=!l.arrayEquals(e._active,e._lastActive),e._lastActive=e._active,a.enabled||a.custom){e._eventPosition={x:t.x,y:t.y};var n=e._model;e.update(!0),e.pivot(),i|=n.x!==e._model.x||n.y!==e._model.y}return i}}),t.Tooltip.positioners={average:function(t){if(!t.length)return!1;var e,a,i=0,n=0,o=0;for(e=0,a=t.length;e<a;++e){var r=t[e];if(r&&r.hasValue()){var s=r.tooltipPosition();i+=s.x,n+=s.y,++o}}return{x:Math.round(i/o),y:Math.round(n/o)}},nearest:function(t,e){var a,i,n,o=e.x,r=e.y,s=Number.POSITIVE_INFINITY;for(i=0,n=t.length;i<n;++i){var u=t[i];if(u&&u.hasValue()){var d=u.getCenterPoint(),c=l.distanceBetweenPoints(e,d);c<s&&(s=c,a=u)}}if(a){var h=a.tooltipPosition();o=h.x,r=h.y}return{x:o,y:r}}}}},{}],37:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a=t.defaults.global;a.elements.arc={backgroundColor:a.defaultColor,borderColor:"#fff",borderWidth:2},t.elements.Arc=t.Element.extend({inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,a){var i=this._view;if(i){for(var n=e.getAngleFromPoint(i,{x:t,y:a}),o=n.angle,r=n.distance,s=i.startAngle,l=i.endAngle;l<s;)l+=2*Math.PI;for(;o>l;)o-=2*Math.PI;for(;o<s;)o+=2*Math.PI;var u=o>=s&&o<=l,d=r>=i.innerRadius&&r<=i.outerRadius;return u&&d}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,a=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*a,y:t.y+Math.sin(e)*a}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,a=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*a,y:t.y+Math.sin(e)*a}},draw:function(){var t=this._chart.ctx,e=this._view,a=e.startAngle,i=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,a,i),t.arc(e.x,e.y,e.innerRadius,i,a,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})}},{}],38:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a=t.defaults.global;t.defaults.global.elements.line={tension:.4,backgroundColor:a.defaultColor,borderWidth:3,borderColor:a.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0},t.elements.Line=t.Element.extend({draw:function(){function t(t,e){var a=e._view;e._view.steppedLine===!0?(l.lineTo(a.x,t._view.y),l.lineTo(a.x,a.y)):0===e._view.tension?l.lineTo(a.x,a.y):l.bezierCurveTo(t._view.controlPointNextX,t._view.controlPointNextY,a.controlPointPreviousX,a.controlPointPreviousY,a.x,a.y)}var i=this,n=i._view,o=n.spanGaps,r=n.scaleZero,s=i._loop;s||("top"===n.fill?r=n.scaleTop:"bottom"===n.fill&&(r=n.scaleBottom));var l=i._chart.ctx;l.save();var u=i._children.slice(),d=-1;s&&u.length&&u.push(u[0]);var c,h,f,g;if(u.length&&n.fill){for(l.beginPath(),c=0;c<u.length;++c)h=u[c],f=e.previousItem(u,c),g=h._view,0===c?(s?l.moveTo(r.x,r.y):l.moveTo(g.x,r),g.skip||(d=c,l.lineTo(g.x,g.y))):(f=d===-1?f:u[d],g.skip?o||d!==c-1||(s?l.lineTo(r.x,r.y):l.lineTo(f._view.x,r)):(d!==c-1?o&&d!==-1?t(f,h):s?l.lineTo(g.x,g.y):(l.lineTo(g.x,r),l.lineTo(g.x,g.y)):t(f,h),d=c));s||d===-1||l.lineTo(u[d]._view.x,r),l.fillStyle=n.backgroundColor||a.defaultColor,l.closePath(),l.fill()}var p=a.elements.line;for(l.lineCap=n.borderCapStyle||p.borderCapStyle,l.setLineDash&&l.setLineDash(n.borderDash||p.borderDash),l.lineDashOffset=n.borderDashOffset||p.borderDashOffset,l.lineJoin=n.borderJoinStyle||p.borderJoinStyle,l.lineWidth=n.borderWidth||p.borderWidth,l.strokeStyle=n.borderColor||a.defaultColor,l.beginPath(),d=-1,c=0;c<u.length;++c)h=u[c],f=e.previousItem(u,c),g=h._view,0===c?g.skip||(l.moveTo(g.x,g.y),d=c):(f=d===-1?f:u[d],g.skip||(d!==c-1&&!o||d===-1?l.moveTo(g.x,g.y):t(f,h),d=c));l.stroke(),l.restore()}})}},{}],39:[function(t,e,a){"use strict";e.exports=function(t){function e(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hitRadius,2)}function a(t){var e=this._view;return!!e&&Math.pow(t-e.y,2)<Math.pow(e.radius+e.hitRadius,2)}var i=t.helpers,n=t.defaults.global,o=n.defaultColor;n.elements.point={radius:3,pointStyle:"circle",backgroundColor:o,borderWidth:1,borderColor:o,hitRadius:1,hoverRadius:4,hoverBorderWidth:1},t.elements.Point=t.Element.extend({inRange:function(t,e){var a=this._view;return!!a&&Math.pow(t-a.x,2)+Math.pow(e-a.y,2)<Math.pow(a.hitRadius+a.radius,2)},inLabelRange:e,inXRange:e,inYRange:a,getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(e){var a=this._view,r=this._model,s=this._chart.ctx,l=a.pointStyle,u=a.radius,d=a.x,c=a.y,h=t.helpers.color,f=1.01,g=0;a.skip||(s.strokeStyle=a.borderColor||o,s.lineWidth=i.getValueOrDefault(a.borderWidth,n.elements.point.borderWidth),s.fillStyle=a.backgroundColor||o,void 0!==e&&(r.x<e.left||e.right*f<r.x||r.y<e.top||e.bottom*f<r.y)&&(r.x<e.left?g=(d-r.x)/(e.left-r.x):e.right*f<r.x?g=(r.x-d)/(r.x-e.right):r.y<e.top?g=(c-r.y)/(e.top-r.y):e.bottom*f<r.y&&(g=(r.y-c)/(r.y-e.bottom)),g=Math.round(100*g)/100,s.strokeStyle=h(s.strokeStyle).alpha(g).rgbString(),s.fillStyle=h(s.fillStyle).alpha(g).rgbString()),t.canvasHelpers.drawPoint(s,l,u,d,c))}})}},{}],40:[function(t,e,a){"use strict";e.exports=function(t){function e(t){return void 0!==t._view.width}function a(t){var a,i,n,o,r=t._view;if(e(t)){var s=r.width/2;a=r.x-s,i=r.x+s,n=Math.min(r.y,r.base),o=Math.max(r.y,r.base)}else{var l=r.height/2;a=Math.min(r.x,r.base),i=Math.max(r.x,r.base),n=r.y-l,o=r.y+l}return{left:a,top:n,right:i,bottom:o}}var i=t.defaults.global;i.elements.rectangle={backgroundColor:i.defaultColor,borderWidth:0,borderColor:i.defaultColor,borderSkipped:"bottom"},t.elements.Rectangle=t.Element.extend({draw:function(){function t(t){return v[(x+t)%4]}var e,a,i,n,o,r,s,l=this._chart.ctx,u=this._view,d=u.borderWidth;if(u.horizontal?(e=u.base,a=u.x,i=u.y-u.height/2,n=u.y+u.height/2,o=a>e?1:-1,r=1,s=u.borderSkipped||"left"):(e=u.x-u.width/2,a=u.x+u.width/2,i=u.y,n=u.base,o=1,r=n>i?1:-1,s=u.borderSkipped||"bottom"),d){var c=Math.min(Math.abs(e-a),Math.abs(i-n));d=d>c?c:d;var h=d/2,f=e+("left"!==s?h*o:0),g=a+("right"!==s?-h*o:0),p=i+("top"!==s?h*r:0),m=n+("bottom"!==s?-h*r:0);f!==g&&(i=p,n=m),p!==m&&(e=f,a=g)}l.beginPath(),l.fillStyle=u.backgroundColor,l.strokeStyle=u.borderColor,l.lineWidth=d;var v=[[e,n],[e,i],[a,i],[a,n]],b=["bottom","left","top","right"],x=b.indexOf(s,0);x===-1&&(x=0);var y=t(0);l.moveTo(y[0],y[1]);for(var k=1;k<4;k++)y=t(k),l.lineTo(y[0],y[1]);l.fill(),d&&l.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var i=!1;if(this._view){var n=a(this);i=t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom}return i},inLabelRange:function(t,i){var n=this;if(!n._view)return!1;var o=!1,r=a(n);return o=e(n)?t>=r.left&&t<=r.right:i>=r.top&&i<=r.bottom},inXRange:function(t){var e=a(this);return t>=e.left&&t<=e.right},inYRange:function(t){var e=a(this);return t>=e.top&&t<=e.bottom},getCenterPoint:function(){var t,a,i=this._view;return e(this)?(t=i.x,a=(i.y+i.base)/2):(t=(i.x+i.base)/2,a=i.y),{x:t,y:a}},getArea:function(){var t=this._view;return t.width*Math.abs(t.y-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})}},{}],41:[function(t,e,a){"use strict";e.exports=function(t){function e(t,e){var a=l.getStyle(t,e),i=a&&a.match(/(\d+)px/);return i?Number(i[1]):void 0}function a(t,a){var i=t.style,n=t.getAttribute("height"),o=t.getAttribute("width");if(t._chartjs={initial:{height:n,width:o,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",null===o||""===o){var r=e(t,"width");void 0!==r&&(t.width=r)}if(null===n||""===n)if(""===t.style.height)t.height=t.width/(a.options.aspectRatio||2);else{var s=e(t,"height");void 0!==r&&(t.height=s)}return t}function i(t,e,a,i,n){return{type:t,chart:e,native:n||null,x:void 0!==a?a:null,y:void 0!==i?i:null}}function n(t,e){
var a=u[t.type]||t.type,n=l.getRelativePosition(t,e);return i(a,e,n.x,n.y,t)}function o(t){var e=document.createElement("iframe");return e.className="chartjs-hidden-iframe",e.style.cssText="display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;",e.tabIndex=-1,l.addEvent(e,"load",function(){l.addEvent(e.contentWindow||e,"resize",t),t()}),e}function r(t,e,a){var n=t._chartjs={ticking:!1},r=function(){n.ticking||(n.ticking=!0,l.requestAnimFrame.call(window,function(){if(n.resizer)return n.ticking=!1,e(i("resize",a))}))};n.resizer=o(r),t.insertBefore(n.resizer,t.firstChild)}function s(t){if(t&&t._chartjs){var e=t._chartjs.resizer;e&&(e.parentNode.removeChild(e),t._chartjs.resizer=null),delete t._chartjs}}var l=t.helpers,u={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};return{acquireContext:function(t,e){if("string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t instanceof HTMLCanvasElement){var i=t.getContext&&t.getContext("2d");if(i instanceof CanvasRenderingContext2D)return a(t,e),i}return null},releaseContext:function(t){var e=t.canvas;if(e._chartjs){var a=e._chartjs.initial;["height","width"].forEach(function(t){var i=a[t];void 0===i||null===i?e.removeAttribute(t):e.setAttribute(t,i)}),l.each(a.style||{},function(t,a){e.style[a]=t}),e.width=e.width,delete e._chartjs}},addEventListener:function(t,e,a){var i=t.chart.canvas;if("resize"===e)return void r(i.parentNode,a,t.chart);var o=a._chartjs||(a._chartjs={}),s=o.proxies||(o.proxies={}),u=s[t.id+"_"+e]=function(e){a(n(e,t.chart))};l.addEvent(i,e,u)},removeEventListener:function(t,e,a){var i=t.chart.canvas;if("resize"===e)return void s(i.parentNode,a);var n=a._chartjs||{},o=n.proxies||{},r=o[t.id+"_"+e];r&&l.removeEvent(i,e,r)}}}},{}],42:[function(t,e,a){"use strict";var i=t(41);e.exports=function(t){t.platform={acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},t.helpers.extend(t.platform,i(t))}},{41:41}],43:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a={position:"bottom"},i=t.Scale.extend({getLabels:function(){var t=this.chart.data;return(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t=this,a=t.getLabels();t.minIndex=0,t.maxIndex=a.length-1;var i;void 0!==t.options.ticks.min&&(i=e.indexOf(a,t.options.ticks.min),t.minIndex=i!==-1?i:t.minIndex),void 0!==t.options.ticks.max&&(i=e.indexOf(a,t.options.ticks.max),t.maxIndex=i!==-1?i:t.maxIndex),t.min=a[t.minIndex],t.max=a[t.maxIndex]},buildTicks:function(){var t=this,e=t.getLabels();t.ticks=0===t.minIndex&&t.maxIndex===e.length-1?e:e.slice(t.minIndex,t.maxIndex+1)},getLabelForIndex:function(t,e){var a=this,i=a.chart.data,n=a.isHorizontal();return i.yLabels&&!n?a.getRightValue(i.datasets[e].data[t]):a.ticks[t-a.minIndex]},getPixelForValue:function(t,e,a,i){var n=this,o=Math.max(n.maxIndex+1-n.minIndex-(n.options.gridLines.offsetGridLines?0:1),1);if(void 0!==t&&isNaN(e)){var r=n.getLabels(),s=r.indexOf(t);e=s!==-1?s:e}if(n.isHorizontal()){var l=n.width/o,u=l*(e-n.minIndex);return(n.options.gridLines.offsetGridLines&&i||n.maxIndex===n.minIndex&&i)&&(u+=l/2),n.left+Math.round(u)}var d=n.height/o,c=d*(e-n.minIndex);return n.options.gridLines.offsetGridLines&&i&&(c+=d/2),n.top+Math.round(c)},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null,e)},getValueForPixel:function(t){var e,a=this,i=Math.max(a.ticks.length-(a.options.gridLines.offsetGridLines?0:1),1),n=a.isHorizontal(),o=(n?a.width:a.height)/i;return t-=n?a.left:a.top,a.options.gridLines.offsetGridLines&&(t-=o/2),e=t<=0?0:Math.round(t/o)},getBasePixel:function(){return this.bottom}});t.scaleService.registerScaleType("category",i,a)}},{}],44:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a={position:"left",ticks:{callback:t.Ticks.formatters.linear}},i=t.LinearScaleBase.extend({determineDataLimits:function(){function t(t){return s?t.xAxisID===a.id:t.yAxisID===a.id}var a=this,i=a.options,n=a.chart,o=n.data,r=o.datasets,s=a.isHorizontal();a.min=null,a.max=null;var l=i.stacked;if(void 0===l&&e.each(r,function(e,a){if(!l){var i=n.getDatasetMeta(a);n.isDatasetVisible(a)&&t(i)&&void 0!==i.stack&&(l=!0)}}),i.stacked||l){var u={};e.each(r,function(o,r){var s=n.getDatasetMeta(r),l=[s.type,void 0===i.stacked&&void 0===s.stack?r:"",s.stack].join(".");void 0===u[l]&&(u[l]={positiveValues:[],negativeValues:[]});var d=u[l].positiveValues,c=u[l].negativeValues;n.isDatasetVisible(r)&&t(s)&&e.each(o.data,function(t,e){var n=+a.getRightValue(t);isNaN(n)||s.data[e].hidden||(d[e]=d[e]||0,c[e]=c[e]||0,i.relativePoints?d[e]=100:n<0?c[e]+=n:d[e]+=n)})}),e.each(u,function(t){var i=t.positiveValues.concat(t.negativeValues),n=e.min(i),o=e.max(i);a.min=null===a.min?n:Math.min(a.min,n),a.max=null===a.max?o:Math.max(a.max,o)})}else e.each(r,function(i,o){var r=n.getDatasetMeta(o);n.isDatasetVisible(o)&&t(r)&&e.each(i.data,function(t,e){var i=+a.getRightValue(t);isNaN(i)||r.data[e].hidden||(null===a.min?a.min=i:i<a.min&&(a.min=i),null===a.max?a.max=i:i>a.max&&(a.max=i))})});this.handleTickRangeOptions()},getTickLimit:function(){var a,i=this,n=i.options.ticks;if(i.isHorizontal())a=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(i.width/50));else{var o=e.getValueOrDefault(n.fontSize,t.defaults.global.defaultFontSize);a=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(i.height/(2*o)))}return a},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){var e,a=this,i=a.start,n=+a.getRightValue(t),o=a.end-i;return a.isHorizontal()?(e=a.left+a.width/o*(n-i),Math.round(e)):(e=a.bottom-a.height/o*(n-i),Math.round(e))},getValueForPixel:function(t){var e=this,a=e.isHorizontal(),i=a?e.width:e.height,n=(a?t-e.left:e.bottom-t)/i;return e.start+(e.end-e.start)*n},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}});t.scaleService.registerScaleType("linear",i,a)}},{}],45:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a=e.noop;t.LinearScaleBase=t.Scale.extend({handleTickRangeOptions:function(){var t=this,a=t.options,i=a.ticks;if(i.beginAtZero){var n=e.sign(t.min),o=e.sign(t.max);n<0&&o<0?t.max=0:n>0&&o>0&&(t.min=0)}void 0!==i.min?t.min=i.min:void 0!==i.suggestedMin&&(t.min=Math.min(t.min,i.suggestedMin)),void 0!==i.max?t.max=i.max:void 0!==i.suggestedMax&&(t.max=Math.max(t.max,i.suggestedMax)),t.min===t.max&&(t.max++,i.beginAtZero||t.min--)},getTickLimit:a,handleDirectionalChanges:a,buildTicks:function(){var a=this,i=a.options,n=i.ticks,o=a.getTickLimit();o=Math.max(2,o);var r={maxTicks:o,min:n.min,max:n.max,stepSize:e.getValueOrDefault(n.fixedStepSize,n.stepSize)},s=a.ticks=t.Ticks.generators.linear(r,a);a.handleDirectionalChanges(),a.max=e.max(s),a.min=e.min(s),n.reverse?(s.reverse(),a.start=a.max,a.end=a.min):(a.start=a.min,a.end=a.max)},convertTicksToLabels:function(){var e=this;e.ticksAsNumbers=e.ticks.slice(),e.zeroLineIndex=e.ticks.indexOf(0),t.Scale.prototype.convertTicksToLabels.call(e)}})}},{}],46:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a={position:"left",ticks:{callback:t.Ticks.formatters.logarithmic}},i=t.Scale.extend({determineDataLimits:function(){function t(t){return u?t.xAxisID===a.id:t.yAxisID===a.id}var a=this,i=a.options,n=i.ticks,o=a.chart,r=o.data,s=r.datasets,l=e.getValueOrDefault,u=a.isHorizontal();a.min=null,a.max=null,a.minNotZero=null;var d=i.stacked;if(void 0===d&&e.each(s,function(e,a){if(!d){var i=o.getDatasetMeta(a);o.isDatasetVisible(a)&&t(i)&&void 0!==i.stack&&(d=!0)}}),i.stacked||d){var c={};e.each(s,function(n,r){var s=o.getDatasetMeta(r),l=[s.type,void 0===i.stacked&&void 0===s.stack?r:"",s.stack].join(".");o.isDatasetVisible(r)&&t(s)&&(void 0===c[l]&&(c[l]=[]),e.each(n.data,function(t,e){var n=c[l],o=+a.getRightValue(t);isNaN(o)||s.data[e].hidden||(n[e]=n[e]||0,i.relativePoints?n[e]=100:n[e]+=o)}))}),e.each(c,function(t){var i=e.min(t),n=e.max(t);a.min=null===a.min?i:Math.min(a.min,i),a.max=null===a.max?n:Math.max(a.max,n)})}else e.each(s,function(i,n){var r=o.getDatasetMeta(n);o.isDatasetVisible(n)&&t(r)&&e.each(i.data,function(t,e){var i=+a.getRightValue(t);isNaN(i)||r.data[e].hidden||(null===a.min?a.min=i:i<a.min&&(a.min=i),null===a.max?a.max=i:i>a.max&&(a.max=i),0!==i&&(null===a.minNotZero||i<a.minNotZero)&&(a.minNotZero=i))})});a.min=l(n.min,a.min),a.max=l(n.max,a.max),a.min===a.max&&(0!==a.min&&null!==a.min?(a.min=Math.pow(10,Math.floor(e.log10(a.min))-1),a.max=Math.pow(10,Math.floor(e.log10(a.max))+1)):(a.min=1,a.max=10))},buildTicks:function(){var a=this,i=a.options,n=i.ticks,o={min:n.min,max:n.max},r=a.ticks=t.Ticks.generators.logarithmic(o,a);a.isHorizontal()||r.reverse(),a.max=e.max(r),a.min=e.min(r),n.reverse?(r.reverse(),a.start=a.max,a.end=a.min):(a.start=a.min,a.end=a.max)},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),t.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},getPixelForValue:function(t){var a,i,n,o=this,r=o.start,s=+o.getRightValue(t),l=o.options,u=l.ticks;return o.isHorizontal()?(n=e.log10(o.end)-e.log10(r),0===s?i=o.left:(a=o.width,i=o.left+a/n*(e.log10(s)-e.log10(r)))):(a=o.height,0!==r||u.reverse?0===o.end&&u.reverse?(n=e.log10(o.start)-e.log10(o.minNotZero),i=s===o.end?o.top:s===o.minNotZero?o.top+.02*a:o.top+.02*a+.98*a/n*(e.log10(s)-e.log10(o.minNotZero))):(n=e.log10(o.end)-e.log10(r),a=o.height,i=o.bottom-a/n*(e.log10(s)-e.log10(r))):(n=e.log10(o.end)-e.log10(o.minNotZero),i=s===r?o.bottom:s===o.minNotZero?o.bottom-.02*a:o.bottom-.02*a-.98*a/n*(e.log10(s)-e.log10(o.minNotZero)))),i},getValueForPixel:function(t){var a,i,n=this,o=e.log10(n.end)-e.log10(n.start);return n.isHorizontal()?(i=n.width,a=n.start*Math.pow(10,(t-n.left)*o/i)):(i=n.height,a=Math.pow(10,(n.bottom-t)*o/i)/n.start),a}});t.scaleService.registerScaleType("logarithmic",i,a)}},{}],47:[function(t,e,a){"use strict";e.exports=function(t){function e(t){return t.options.lineArc?0:t.chart.data.labels.length}function a(t){var e=t.options.pointLabels,a=f.getValueOrDefault(e.fontSize,g.defaultFontSize),i=f.getValueOrDefault(e.fontStyle,g.defaultFontStyle),n=f.getValueOrDefault(e.fontFamily,g.defaultFontFamily),o=f.fontString(a,i,n);return{size:a,style:i,family:n,font:o}}function i(t,e,a){return f.isArray(a)?{w:f.longestText(t,t.font,a),h:a.length*e+1.5*(a.length-1)*e}:{w:t.measureText(a).width,h:e}}function n(t,e,a,i,n){return t===i||t===n?{start:e-a/2,end:e+a/2}:t<i||t>n?{start:e-a-5,end:e}:{start:e,end:e+a+5}}function o(t){var o,r,s,l=a(t),u=Math.min(t.height/2,t.width/2),d={l:t.width,r:0,t:t.height,b:0},c={};t.ctx.font=l.font,t._pointLabelSizes=[];var h=e(t);for(o=0;o<h;o++){s=t.getPointPosition(o,u),r=i(t.ctx,l.size,t.pointLabels[o]||""),t._pointLabelSizes[o]=r;var g=t.getIndexAngle(o),p=f.toDegrees(g)%360,m=n(p,s.x,r.w,0,180),v=n(p,s.y,r.h,90,270);m.start<d.l&&(d.l=m.start,c.l=g),m.end>d.r&&(d.r=m.end,c.r=g),v.start<d.t&&(d.t=v.start,c.t=g),v.end>d.b&&(d.b=v.end,c.b=g)}t.setReductions(u,d,c)}function r(t){var e=Math.min(t.height/2,t.width/2);t.drawingArea=Math.round(e),t.setCenterPoint(0,0,0,0)}function s(t){return 0===t||180===t?"center":t<180?"left":"right"}function l(t,e,a,i){if(f.isArray(e))for(var n=a.y,o=1.5*i,r=0;r<e.length;++r)t.fillText(e[r],a.x,n),n+=o;else t.fillText(e,a.x,a.y)}function u(t,e,a){90===t||270===t?a.y-=e.h/2:(t>270||t<90)&&(a.y-=e.h)}function d(t){var i=t.ctx,n=f.getValueOrDefault,o=t.options,r=o.angleLines,d=o.pointLabels;i.lineWidth=r.lineWidth,i.strokeStyle=r.color;var c=t.getDistanceFromCenterForValue(o.reverse?t.min:t.max),h=a(t);i.textBaseline="top";for(var p=e(t)-1;p>=0;p--){if(r.display){var m=t.getPointPosition(p,c);i.beginPath(),i.moveTo(t.xCenter,t.yCenter),i.lineTo(m.x,m.y),i.stroke(),i.closePath()}var v=t.getPointPosition(p,c+5),b=n(d.fontColor,g.defaultFontColor);i.font=h.font,i.fillStyle=b;var x=t.getIndexAngle(p),y=f.toDegrees(x);i.textAlign=s(y),u(y,t._pointLabelSizes[p],v),l(i,t.pointLabels[p]||"",v,h.size)}}function c(t,a,i,n){var o=t.ctx;if(o.strokeStyle=f.getValueAtIndexOrDefault(a.color,n-1),o.lineWidth=f.getValueAtIndexOrDefault(a.lineWidth,n-1),t.options.lineArc)o.beginPath(),o.arc(t.xCenter,t.yCenter,i,0,2*Math.PI),o.closePath(),o.stroke();else{var r=e(t);if(0===r)return;o.beginPath();var s=t.getPointPosition(0,i);o.moveTo(s.x,s.y);for(var l=1;l<r;l++)s=t.getPointPosition(l,i),o.lineTo(s.x,s.y);o.closePath(),o.stroke()}}function h(t){return f.isNumber(t)?t:0}var f=t.helpers,g=t.defaults.global,p={display:!0,animate:!0,lineArc:!1,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:t.Ticks.formatters.linear},pointLabels:{fontSize:10,callback:function(t){return t}}},m=t.LinearScaleBase.extend({setDimensions:function(){var t=this,e=t.options,a=e.ticks;t.width=t.maxWidth,t.height=t.maxHeight,t.xCenter=Math.round(t.width/2),t.yCenter=Math.round(t.height/2);var i=f.min([t.height,t.width]),n=f.getValueOrDefault(a.fontSize,g.defaultFontSize);t.drawingArea=e.display?i/2-(n/2+a.backdropPaddingY):i/2},determineDataLimits:function(){var t=this,e=t.chart,a=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;f.each(e.data.datasets,function(n,o){if(e.isDatasetVisible(o)){var r=e.getDatasetMeta(o);f.each(n.data,function(e,n){var o=+t.getRightValue(e);isNaN(o)||r.data[n].hidden||(a=Math.min(o,a),i=Math.max(o,i))})}}),t.min=a===Number.POSITIVE_INFINITY?0:a,t.max=i===Number.NEGATIVE_INFINITY?0:i,t.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,e=f.getValueOrDefault(t.fontSize,g.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*e)))},convertTicksToLabels:function(){var e=this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e),e.pointLabels=e.chart.data.labels.map(e.options.pointLabels.callback,e)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){this.options.lineArc?r(this):o(this)},setReductions:function(t,e,a){var i=this,n=e.l/Math.sin(a.l),o=Math.max(e.r-i.width,0)/Math.sin(a.r),r=-e.t/Math.cos(a.t),s=-Math.max(e.b-i.height,0)/Math.cos(a.b);n=h(n),o=h(o),r=h(r),s=h(s),i.drawingArea=Math.min(Math.round(t-(n+o)/2),Math.round(t-(r+s)/2)),i.setCenterPoint(n,o,r,s)},setCenterPoint:function(t,e,a,i){var n=this,o=n.width-e-n.drawingArea,r=t+n.drawingArea,s=a+n.drawingArea,l=n.height-i-n.drawingArea;n.xCenter=Math.round((r+o)/2+n.left),n.yCenter=Math.round((s+l)/2+n.top)},getIndexAngle:function(t){var a=2*Math.PI/e(this),i=this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0,n=i*Math.PI*2/360;return t*a+n},getDistanceFromCenterForValue:function(t){var e=this;if(null===t)return 0;var a=e.drawingArea/(e.max-e.min);return e.options.reverse?(e.max-t)*a:(t-e.min)*a},getPointPosition:function(t,e){var a=this,i=a.getIndexAngle(t)-Math.PI/2;return{x:Math.round(Math.cos(i)*e)+a.xCenter,y:Math.round(Math.sin(i)*e)+a.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this,e=t.min,a=t.max;return t.getPointPositionForValue(0,t.beginAtZero?0:e<0&&a<0?a:e>0&&a>0?e:0)},draw:function(){var t=this,e=t.options,a=e.gridLines,i=e.ticks,n=f.getValueOrDefault;if(e.display){var o=t.ctx,r=n(i.fontSize,g.defaultFontSize),s=n(i.fontStyle,g.defaultFontStyle),l=n(i.fontFamily,g.defaultFontFamily),u=f.fontString(r,s,l);f.each(t.ticks,function(s,l){if(l>0||e.reverse){var d=t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]),h=t.yCenter-d;if(a.display&&0!==l&&c(t,a,d,l),i.display){var f=n(i.fontColor,g.defaultFontColor);if(o.font=u,i.showLabelBackdrop){var p=o.measureText(s).width;o.fillStyle=i.backdropColor,o.fillRect(t.xCenter-p/2-i.backdropPaddingX,h-r/2-i.backdropPaddingY,p+2*i.backdropPaddingX,r+2*i.backdropPaddingY)}o.textAlign="center",o.textBaseline="middle",o.fillStyle=f,o.fillText(s,t.xCenter,h)}}}),e.lineArc||d(t)}}});t.scaleService.registerScaleType("radialLinear",m,p)}},{}],48:[function(t,e,a){"use strict";var i=t(1);i="function"==typeof i?i:window.moment,e.exports=function(t){var e=t.helpers,a={units:[{name:"millisecond",steps:[1,2,5,10,20,50,100,250,500]},{name:"second",steps:[1,2,5,10,30]},{name:"minute",steps:[1,2,5,10,30]},{name:"hour",steps:[1,2,3,6,12]},{name:"day",steps:[1,2,5]},{name:"week",maxStep:4},{name:"month",maxStep:3},{name:"quarter",maxStep:4},{name:"year",maxStep:!1}]},n={position:"bottom",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm:ss a",hour:"MMM D, hA",day:"ll",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1}},o=t.Scale.extend({initialize:function(){if(!i)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");t.Scale.prototype.initialize.call(this)},getLabelMoment:function(t,e){return null===t||null===e?null:"undefined"!=typeof this.labelMoments[t]?this.labelMoments[t][e]:null},getLabelDiff:function(t,e){var a=this;return null===t||null===e?null:(void 0===a.labelDiffs&&a.buildLabelDiffs(),"undefined"!=typeof a.labelDiffs[t]?a.labelDiffs[t][e]:null)},getMomentStartOf:function(t){var e=this;return"week"===e.options.time.unit&&e.options.time.isoWeekday!==!1?t.clone().startOf("isoWeek").isoWeekday(e.options.time.isoWeekday):t.clone().startOf(e.tickUnit)},determineDataLimits:function(){var t=this;t.labelMoments=[];var a=[];t.chart.data.labels&&t.chart.data.labels.length>0?(e.each(t.chart.data.labels,function(e){var i=t.parseTime(e);i.isValid()&&(t.options.time.round&&i.startOf(t.options.time.round),a.push(i))},t),t.firstTick=i.min.call(t,a),t.lastTick=i.max.call(t,a)):(t.firstTick=null,t.lastTick=null),e.each(t.chart.data.datasets,function(n,o){var r=[],s=t.chart.isDatasetVisible(o);"object"==typeof n.data[0]&&null!==n.data[0]?e.each(n.data,function(e){var a=t.parseTime(t.getRightValue(e));a.isValid()&&(t.options.time.round&&a.startOf(t.options.time.round),r.push(a),s&&(t.firstTick=null!==t.firstTick?i.min(t.firstTick,a):a,t.lastTick=null!==t.lastTick?i.max(t.lastTick,a):a))},t):r=a,t.labelMoments.push(r)},t),t.options.time.min&&(t.firstTick=t.parseTime(t.options.time.min)),t.options.time.max&&(t.lastTick=t.parseTime(t.options.time.max)),t.firstTick=(t.firstTick||i()).clone(),t.lastTick=(t.lastTick||i()).clone()},buildLabelDiffs:function(){var t=this;t.labelDiffs=[];var a=[];t.chart.data.labels&&t.chart.data.labels.length>0&&e.each(t.chart.data.labels,function(e){var i=t.parseTime(e);i.isValid()&&(t.options.time.round&&i.startOf(t.options.time.round),a.push(i.diff(t.firstTick,t.tickUnit,!0)))},t),e.each(t.chart.data.datasets,function(i){var n=[];"object"==typeof i.data[0]&&null!==i.data[0]?e.each(i.data,function(e){var a=t.parseTime(t.getRightValue(e));a.isValid()&&(t.options.time.round&&a.startOf(t.options.time.round),n.push(a.diff(t.firstTick,t.tickUnit,!0)))},t):n=a,t.labelDiffs.push(n)},t)},buildTicks:function(){var i=this;i.ctx.save();var n=e.getValueOrDefault(i.options.ticks.fontSize,t.defaults.global.defaultFontSize),o=e.getValueOrDefault(i.options.ticks.fontStyle,t.defaults.global.defaultFontStyle),r=e.getValueOrDefault(i.options.ticks.fontFamily,t.defaults.global.defaultFontFamily),s=e.fontString(n,o,r);if(i.ctx.font=s,i.ticks=[],i.unitScale=1,i.scaleSizeInUnits=0,i.options.time.unit)i.tickUnit=i.options.time.unit||"day",i.displayFormat=i.options.time.displayFormats[i.tickUnit],i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0),i.unitScale=e.getValueOrDefault(i.options.time.unitStepSize,1);else{var l=i.isHorizontal()?i.width:i.height,u=i.tickFormatFunction(i.firstTick,0,[]),d=i.ctx.measureText(u).width,c=Math.cos(e.toRadians(i.options.ticks.maxRotation)),h=Math.sin(e.toRadians(i.options.ticks.maxRotation));d=d*c+n*h;var f=l/d;i.tickUnit=i.options.time.minUnit,i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0),i.displayFormat=i.options.time.displayFormats[i.tickUnit];for(var g=0,p=a.units[g];g<a.units.length;){if(i.unitScale=1,e.isArray(p.steps)&&Math.ceil(i.scaleSizeInUnits/f)<e.max(p.steps)){for(var m=0;m<p.steps.length;++m)if(p.steps[m]>=Math.ceil(i.scaleSizeInUnits/f)){i.unitScale=e.getValueOrDefault(i.options.time.unitStepSize,p.steps[m]);break}break}if(p.maxStep===!1||Math.ceil(i.scaleSizeInUnits/f)<p.maxStep){i.unitScale=e.getValueOrDefault(i.options.time.unitStepSize,Math.ceil(i.scaleSizeInUnits/f));break}++g,p=a.units[g],i.tickUnit=p.name;var v=i.firstTick.diff(i.getMomentStartOf(i.firstTick),i.tickUnit,!0),b=i.getMomentStartOf(i.lastTick.clone().add(1,i.tickUnit)).diff(i.lastTick,i.tickUnit,!0);i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0)+v+b,i.displayFormat=i.options.time.displayFormats[p.name]}}var x;if(i.options.time.min?x=i.getMomentStartOf(i.firstTick):(i.firstTick=i.getMomentStartOf(i.firstTick),x=i.firstTick),!i.options.time.max){var y=i.getMomentStartOf(i.lastTick),k=y.diff(i.lastTick,i.tickUnit,!0);k<0?i.lastTick=i.getMomentStartOf(i.lastTick.add(1,i.tickUnit)):k>=0&&(i.lastTick=y),i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0)}i.options.time.displayFormat&&(i.displayFormat=i.options.time.displayFormat),i.ticks.push(i.firstTick.clone());for(var S=i.unitScale;S<=i.scaleSizeInUnits;S+=i.unitScale){var M=x.clone().add(S,i.tickUnit);if(i.options.time.max&&M.diff(i.lastTick,i.tickUnit,!0)>=0)break;i.ticks.push(M)}var w=i.ticks[i.ticks.length-1].diff(i.lastTick,i.tickUnit);0===w&&0!==i.scaleSizeInUnits||(i.options.time.max?(i.ticks.push(i.lastTick.clone()),i.scaleSizeInUnits=i.lastTick.diff(i.ticks[0],i.tickUnit,!0)):(i.ticks.push(i.lastTick.clone()),i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0))),i.ctx.restore(),i.labelDiffs=void 0},getLabelForIndex:function(t,e){var a=this,i=a.chart.data.labels&&t<a.chart.data.labels.length?a.chart.data.labels[t]:"",n=a.chart.data.datasets[e].data[t];return null!==n&&"object"==typeof n&&(i=a.getRightValue(n)),a.options.time.tooltipFormat&&(i=a.parseTime(i).format(a.options.time.tooltipFormat)),i},tickFormatFunction:function(t,a,i){var n=t.format(this.displayFormat),o=this.options.ticks,r=e.getValueOrDefault(o.callback,o.userCallback);return r?r(n,a,i):n},convertTicksToLabels:function(){var t=this;t.tickMoments=t.ticks,t.ticks=t.ticks.map(t.tickFormatFunction,t)},getPixelForValue:function(t,e,a){var i=this,n=null;if(void 0!==e&&void 0!==a&&(n=i.getLabelDiff(a,e)),null===n&&(t&&t.isValid||(t=i.parseTime(i.getRightValue(t))),t&&t.isValid&&t.isValid()&&(n=t.diff(i.firstTick,i.tickUnit,!0))),null!==n){var o=0!==n?n/i.scaleSizeInUnits:n;if(i.isHorizontal()){var r=i.width*o;return i.left+Math.round(r)}var s=i.height*o;return i.top+Math.round(s)}},getPixelForTick:function(t){return this.getPixelForValue(this.tickMoments[t],null,null)},getValueForPixel:function(t){var e=this,a=e.isHorizontal()?e.width:e.height,n=(t-(e.isHorizontal()?e.left:e.top))/a;return n*=e.scaleSizeInUnits,e.firstTick.clone().add(i.duration(n,e.tickUnit).asSeconds(),"seconds")},parseTime:function(t){var e=this;return"string"==typeof e.options.time.parser?i(t,e.options.time.parser):"function"==typeof e.options.time.parser?e.options.time.parser(t):"function"==typeof t.getMonth||"number"==typeof t?i(t):t.isValid&&t.isValid()?t:"string"!=typeof e.options.time.format&&e.options.time.format.call?(console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"),e.options.time.format(t)):i(t,e.options.time.format)}});t.scaleService.registerScaleType("time",o,n)}},{1:1}]},{},[7])(7)});;
// Source: ./node_modules/angular-chart.js/dist/angular-chart.min.js
/*!
 * angular-chart.js - An angular.js wrapper for Chart.js
 * http://jtblin.github.io/angular-chart.js/
 * Version: 1.1.1
 *
 * Copyright 2016 Jerome Touffe-Blin
 * Released under the BSD-2-Clause license
 * https://github.com/jtblin/angular-chart.js/blob/master/LICENSE
 */
!function(t){"use strict";if("object"==typeof exports)module.exports=t("undefined"!=typeof angular?angular:require("angular"),"undefined"!=typeof Chart?Chart:require("chart.js"));else if("function"==typeof define&&define.amd)define(["angular","chart"],t);else{if("undefined"==typeof angular)throw new Error("AngularJS framework needs to be included, see https://angularjs.org/");if("undefined"==typeof Chart)throw new Error("Chart.js library needs to be included, see http://jtblin.github.io/angular-chart.js/");t(angular,Chart)}}(function(t,r){"use strict";function e(){var e={responsive:!0},a={Chart:r,getOptions:function(r){var a=r&&e[r]||{};return t.extend({},e,a)}};this.setOptions=function(r,n){n?e[r]=t.merge(e[r]||{},n):(n=r,e=t.merge(e,n)),t.merge(a.Chart.defaults,e)},this.$get=function(){return a}}function a(e,a){function o(t,r,a){var n=D(t,r);if(C(r)&&k(t,r,a,n)){var o=a[0],c=o.getContext("2d");r.chartGetColor=y(r);var i=b(t,r);F(r),r.chart=new e.Chart(c,{type:t,data:i,options:n}),r.$emit("chart-create",r.chart),A(o,r)}}function c(t,r){return!!(t&&r&&t.length&&r.length)&&(Array.isArray(t[0])?t.length===r.length&&t.every(function(t,e){return t.length===r[e].length}):r.reduce(i,0)>0&&t.length===r.length)}function i(t,r){return t+r}function u(r,e,a){var n={point:void 0,points:void 0};return function(o){var c=r.chart.getElementAtEvent||r.chart.getPointAtEvent,i=r.chart.getElementsAtEvent||r.chart.getPointsAtEvent;if(i){var u=i.call(r.chart,o),l=c?c.call(r.chart,o)[0]:void 0;a!==!1&&(t.equals(n.points,u)||t.equals(n.point,l))||(n.point=l,n.points=u,r[e](u,o,l))}}}function l(a,n){for(var o=t.copy(n.chartColors||e.getOptions(a).chartColors||r.defaults.global.colors),c=o.length<n.chartData.length;o.length<n.chartData.length;)o.push(n.chartGetColor());return c&&(n.chartColors=o),o.map(h)}function h(t){return"string"==typeof t&&"r"===t[0]?f(v(t)):"string"==typeof t&&"#"===t[0]?f(p(t.substr(1))):"object"==typeof t&&null!==t?t:s()}function s(){var t=[d(0,255),d(0,255),d(0,255)];return f(t)}function f(t){var r=t[3]||1;return t=t.slice(0,3),{backgroundColor:g(t,.2),pointBackgroundColor:g(t,r),pointHoverBackgroundColor:g(t,.8),borderColor:g(t,r),pointBorderColor:"#fff",pointHoverBorderColor:g(t,r)}}function d(t,r){return Math.floor(Math.random()*(r-t+1))+t}function g(t,r){return n?"rgb("+t.join(",")+")":"rgba("+t.concat(r).join(",")+")"}function p(t){var r=parseInt(t,16),e=r>>16&255,a=r>>8&255,n=255&r;return[e,a,n]}function v(t){var r=t.match(/^rgba?\(([\d,.]+)\)$/);if(!r)throw new Error("Cannot parse rgb value");return t=r[1].split(","),t.map(Number)}function C(t){return t.chartData&&t.chartData.length}function y(t){return"function"==typeof t.chartGetColor?t.chartGetColor:s}function b(t,r){var e=l(t,r);return Array.isArray(r.chartData[0])?m(r.chartLabels,r.chartData,r.chartSeries||[],e,r.chartDatasetOverride):w(r.chartLabels,r.chartData,e,r.chartDatasetOverride)}function m(r,e,a,n,o){return{labels:r,datasets:e.map(function(r,e){var c=t.extend({},n[e],{label:a[e],data:r});return o&&o.length>=e&&t.merge(c,o[e]),c})}}function w(r,e,a,n){var o={labels:r,datasets:[{data:e,backgroundColor:a.map(function(t){return t.pointBackgroundColor}),hoverBackgroundColor:a.map(function(t){return t.backgroundColor})}]};return n&&t.merge(o.datasets[0],n),o}function D(r,a){return t.extend({},e.getOptions(r),a.chartOptions)}function A(r,e){r.onclick=e.chartClick?u(e,"chartClick",!1):t.noop,r.onmousemove=e.chartHover?u(e,"chartHover",!0):t.noop}function B(t,r){Array.isArray(r.chartData[0])?r.chart.data.datasets.forEach(function(r,e){r.data=t[e]}):r.chart.data.datasets[0].data=t,r.chart.update(),r.$emit("chart-update",r.chart)}function $(t){return!t||Array.isArray(t)&&!t.length||"object"==typeof t&&!Object.keys(t).length}function k(t,r,e,n){return!n.responsive||0!==e[0].clientHeight||(a(function(){o(t,r,e)},50,!1),!1)}function F(t){t.chart&&(t.chart.destroy(),t.$emit("chart-destroy",t.chart))}return function(r){return{restrict:"CA",scope:{chartGetColor:"=?",chartType:"=",chartData:"=?",chartLabels:"=?",chartOptions:"=?",chartSeries:"=?",chartColors:"=?",chartClick:"=?",chartHover:"=?",chartDatasetOverride:"=?"},link:function(e,a){function i(t,n){if(!t||!t.length||Array.isArray(t[0])&&!t[0].length)return void F(e);var i=r||e.chartType;if(i)return e.chart&&c(t,n)?B(t,e):void o(i,e,a)}function u(n,c){if(!$(n)&&!t.equals(n,c)){var i=r||e.chartType;i&&o(i,e,a)}}function l(r,n){$(r)||t.equals(r,n)||o(r,e,a)}n&&window.G_vmlCanvasManager.initElement(a[0]),e.$watch("chartData",i,!0),e.$watch("chartSeries",u,!0),e.$watch("chartLabels",u,!0),e.$watch("chartOptions",u,!0),e.$watch("chartColors",u,!0),e.$watch("chartDatasetOverride",u,!0),e.$watch("chartType",l,!1),e.$on("$destroy",function(){F(e)}),e.$on("$resize",function(){e.chart&&e.chart.resize()})}}}}r.defaults.global.multiTooltipTemplate="<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>",r.defaults.global.tooltips.mode="label",r.defaults.global.elements.line.borderWidth=2,r.defaults.global.elements.rectangle.borderWidth=2,r.defaults.global.legend.display=!1,r.defaults.global.colors=["#97BBCD","#DCDCDC","#F7464A","#46BFBD","#FDB45C","#949FB1","#4D5360"];var n="object"==typeof window.G_vmlCanvasManager&&null!==window.G_vmlCanvasManager&&"function"==typeof window.G_vmlCanvasManager.initElement;return n&&(r.defaults.global.animation=!1),t.module("chart.js",[]).provider("ChartJs",e).factory("ChartJsFactory",["ChartJs","$timeout",a]).directive("chartBase",["ChartJsFactory",function(t){return new t}]).directive("chartLine",["ChartJsFactory",function(t){return new t("line")}]).directive("chartBar",["ChartJsFactory",function(t){return new t("bar")}]).directive("chartHorizontalBar",["ChartJsFactory",function(t){return new t("horizontalBar")}]).directive("chartRadar",["ChartJsFactory",function(t){return new t("radar")}]).directive("chartDoughnut",["ChartJsFactory",function(t){return new t("doughnut")}]).directive("chartPie",["ChartJsFactory",function(t){return new t("pie")}]).directive("chartPolarArea",["ChartJsFactory",function(t){return new t("polarArea")}]).directive("chartBubble",["ChartJsFactory",function(t){return new t("bubble")}]).name});
//# sourceMappingURL=angular-chart.min.js.map
;
// Source: ./src/app/js/modules/AngularModule.js
var module = module || {};

module.angular = angular.module('module.angular', [
    'ngAnimate',
    'ngNewRouter',
    'ngSanitize',
    'ngResource',
    'ngTouch'
]);
;
// Source: ./src/app/js/modules/VendorModule.js
var module = module || {};

module.vendor = angular.module('module.vendor', [
  'angular.filter',
  'ngFileUpload',
  'btford.socket-io',
  'ngDialog',
  'bgf.paginateAnything',
	'chart.js',
	'as.sortable'
]);
;
// Source: ./src/app/js/modules/FiltersModule.js
var module = module || {};

module.filters = angular.module('module.filters', [
    'filter.ceil',
    'filter.title',
    'filter.num',
    'filter.bool',
    'filter.removeFiletype',
    'filter.removeDashes',
    'filter.bytes',
    'filter.slice',
    'filter.duration',
    'filter.timeAgo',
    'filter.timestamp',
	'filter.tenth',
	'filter.float',
	'filter.seconds',
	'filter.unique',
	'filter.smartduration',
	'filter.smartbytes',
	'filter.propsFilter',
	'filter.trustedHTML',
	'filter.inArray'
]);
;
// Source: ./src/app/js/modules/TemplateCacheModule.js
var module = module || {};

module.templateCache = angular.module('module.templateCache', [
    'templateCache.shared',
    'templateCache.core',
    'templateCache.components'
]);
;
// Source: ./src/app/js/modules/ServicesModule.js
var module = module || {};

module.services = angular.module('module.services', [
    'service.api',
    'service.api.printerControl',
    'service.auth',
    'service.printer',
    'service.notification',
    'service.socket',
    'service.file'
]);
;
// Source: ./src/app/js/modules/SharedModule.js
var module = module || {};

module.shared = angular.module('module.shared', [
    'shared.printerFan',
    'shared.selectionList',
    'shared.selectionBlock',
    'shared.addNew',
    'shared.progressBar',
    'shared.temperatureBar',
    'shared.printerControls',
    'shared.printerList',
    'shared.printerListItem',
    'shared.notificationList',
    'shared.notificationListItem',
    'shared.loadingScreen',
    'shared.alertBox',
	'shared.float',
	'shared.printerControlsFlowRate',
	'shared.printerControlsSpeed',
	'shared.printerControlsFan',
	'shared.printerControlsSlider',
	'shared.printerSpeed',
	'shared.statusIcon',
	'shared.alertBox',
	'shared.fileDroppable',
	'shared.dashboardWebcam',
	'shared.dashboardTemperatures',
	'shared.onEnter',
	'shared.checkbox',
	'shared.focus',
	'shared.printJobItem',
]);
;
// Source: ./src/app/js/modules/ComponentsModule.js
var module = module || {};

module.components = angular.module('module.components', [
	'components.connect',
	'components.manage',
	'components.manageDevice',
	'components.manageDeviceUpdate',
	'components.fileLibrary',
	'components.monitorPrint',
	'components.controlPrint',
	'components.authLogin'
]);
;
// Source: ./src/app/js/modules/CoreModule.js
var module = module || {};

module.core = angular.module('module.core', [
    'core.header',
    'core.aside',
	'core.pageContent'
]);
;
// Source: ./src/app/js/config/helpers.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

function distOrSrcPath(env) {
    return (env == 'development') ? '/src' : '/dist';
}

function dashCase(str) {
    return str.replace(/([A-Z])/g, function ($1) {
        return '-' + $1.toLowerCase();
    });
}

function httpGetAsync(url, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function (xmlEvent) {
        if (xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
                callback(xmlHttp.responseText);
            } else {
                console.error("Error", xmlHttp.statusText);
                callback({});
            }
        }
    };
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}
;
// Source: ./src/app/js/config/environment.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */
// Put general configuration here.

window.ENV = window.ENV || {};

window.ENV.name 			=	'formide-os';

window.ENV.type				= 	'development'; //development || testing || production

window.DEBUG				=	(window.ENV.type == 'development' || window.ENV.type == 'testing') ? true : false;
;
// Source: ./src/app/js/config/auth.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

window.AUTH = window.AUTH || {};
;
// Source: ./src/app/js/config/path.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

//Set main paths here.
window.PATH = window.PATH || {};

window.PATH.root 			=	window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;

window.PATH.api 			= 	window.location.protocol + '//' + window.location.hostname + ':1337/api';

window.PATH.socket 			= 	window.location.protocol + '//' + window.location.hostname + ':1337';

window.PATH.app 			= 	window.PATH.root + '/app';

window.PATH.public 			= 	window.PATH.root + '/public';

window.PATH.assets 	= 		{
	javascripts: window.PATH.public + '/assets/javascripts/application.js',
	stylesheets: window.PATH.public + '/assets/stylesheets/application.css'
}

window.PATH.tmp 			= 	window.PATH.public + '/tmp';

window.PATH.partials 		= 	window.PATH.app + '/views/partials';

window.PATH.modelfiles 		= 	{
	uploadPath				: 	'',
	downloadPath 			: 	''
};

window.PATH.auth			=	{
	login: '/auth/login',
	logout: '/auth/logout',
	session: '/auth/session'
}

window.PATH.login 			= 	'/login';
;
// Source: ./src/app/js/config/include.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */
;
// Source: ./src/app/js/config/debug.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

function angularLoaded() {
    if(window.ENV.type == 'development' || window.ENV.type == 'testing')
    {
        console.groupCollapsed("Development- or Testing Mode");
       	if(window.DEBUG)
       	{
       		console.log("Debugging Mode: On");
       	}
       	else
       	{
       		console.log("Debugging Mode: Off", "color: red;");
       	}
        console.groupEnd();

        console.groupCollapsed("App", window.ENV.name);
           	console.log("Environment", window.ENV);
        	console.log("Paths", window.PATH);
        console.groupEnd();

    }
    else if(window.DEBUG)
    {
    	console.log("Debugging Mode: On", "color: blue;");
    }

    if (window.DEBUG) {
    	console.time("Angular loaded");
    }
}
;
// Source: ./src/app/js/filters/BooleanFilter.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function bool () {
        return function (s) {
            s.isChecked = !!+s.isChecked;
            return s;
        };
	}

	angular.module('filter.bool', [])
	   .filter('bool', bool);
})();
;
// Source: ./src/app/js/filters/BytesFilter.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function filter () {
        return function(bytes, precision) {
    		if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) return '-';
    		if (typeof precision === 'undefined') precision = 1;
    		var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
    			number = Math.floor(Math.log(bytes) / Math.log(1024));
    		return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) +  ' ' + units[number];
    	}
	}

	angular.module('filter.bytes', [])
	  .filter('bytes', filter);
})();
;
// Source: ./src/app/js/filters/CeilFilter.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function filter () {
		return function(s) {
			return Math.ceil(s);
		};
	}

	angular.module('filter.ceil', [])
	  .filter('ceil', filter);
})();
;
// Source: ./src/app/js/filters/DurationFilter.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function duration () {
        return function(s) {
           return moment.duration(s, "seconds").format("h [hours]", 2);
        };
	}

	angular.module('filter.duration', [])
	   .filter('duration', duration);
})();
;
// Source: ./src/app/js/filters/FloatFilter.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function float () {
        return function(s) {
			return parseFloat(s);
        };
	}

	angular.module('filter.float', [])
	   .filter('float', float);
})();
;
// Source: ./src/app/js/filters/InArray.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function filter ($filter) {
		return function(list, arrayFilter, element){
			if(arrayFilter){
				return $filter("filter")(list, function(listItem){
					return arrayFilter.indexOf(listItem[element]) != -1;
				});
			}
		};
	}

	angular.module('filter.inArray', [])
	  .filter('inArray', filter);
})();
;
// Source: ./src/app/js/filters/NumFilter.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function num () {
        return function(s) {
			return parseInt(s, 10);
        };
	}

	angular.module('filter.num', [])
	   .filter('num', num);
})();
;
// Source: ./src/app/js/filters/PropsFilter.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function filter () {
		return function (items, props) {
			var out = [];

			if (angular.isArray(items)) {
				items.forEach(function (item) {
					var itemMatches = false;

					var keys = Object.keys(props);
					for (var i = 0; i < keys.length; i++) {
						var prop = keys[i];
						var text = props[prop].toLowerCase();
						if (item[prop].toString()
							.toLowerCase()
							.indexOf(text) !== -1) {
							itemMatches = true;
							break;
						}
					}

					if (itemMatches) {
						out.push(item);
					}
				});
			} else {
				// Let the output be the input untouched
				out = items;
			}

			return out;
		}
	}

	angular.module('filter.propsFilter', [])
	  .filter('propsFilter', filter);
})();
;
// Source: ./src/app/js/filters/RemoveDashesFilter.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function removeDashes () {
        return function(s) {
			if(s) return s.replace(/[_-]/g, " ");
        };
	}

	angular.module('filter.removeDashes', [])
	   .filter('removeDashes', removeDashes);
})();
;
// Source: ./src/app/js/filters/RemoveFiletypeFilter.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function removeFiletype () {
        return function(s) {
			if(s) return s.replace(/(\.[^/.]+)+$/, "");
        };
	}

	angular.module('filter.removeFiletype', [])
	   .filter('removeFiletype', removeFiletype);
})();
;
// Source: ./src/app/js/filters/SecondsFilter.js
(function () {
	function seconds () {
        return function(s) {
           return moment.duration(s, "milliseconds").format("s [seconds]");
        };
	}

	angular.module('filter.seconds', [])
	   .filter('seconds', seconds);
})();
;
// Source: ./src/app/js/filters/SliceFilter.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function slice () {
        return function(arr, start, end) {

          return (arr || []).slice(start, end);
        };
	}

	angular.module('filter.slice', [])
	   .filter('slice', slice);
})();
;
// Source: ./src/app/js/filters/SmartBytesFilter.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function smartbytes () {
        var units = [
            'bytes',
            'KB',
            'MB',
            'GB',
            'TB'
        ];

        return function( bytes, precision ) {
            if ( isNaN( parseFloat( bytes )) || ! isFinite( bytes ) ) {  // test for invalid input
                return '?';
            }

            var unit = 0;

            while ( bytes >= 1024 ) {
                bytes /= 1024;
                unit ++;
            }

			if (bytes % 1 === 0) {
				return bytes + ' ' + units[ unit ];
			}else {
				return bytes.toFixed( + precision ) + ' ' + units[ unit ];
			}
        };
	}

	angular.module('filter.smartbytes', [])
	   .filter('smartbytes', smartbytes);
})();
;
// Source: ./src/app/js/filters/SmartDurationFilter.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function smartduration () {
        return function (number) {
			var date = new Date(number * 100);
			var str = '';

			var days = date.getUTCDate() - 1;
			var hours = date.getUTCHours();
			var minutes = date.getUTCMinutes();
			var seconds = date.getUTCSeconds();


			if(days > 0) {
				str += days + " days";
			  str += (hours > 0) ? " and " : " ";
			}

			if(hours > 0) {
				str += hours + " hours";
			  str += (hours < 5 && days < 1) ? " and " : " ";
			}

			if(hours < 5 && days < 1 && minutes > 0) {
				str += minutes + " minutes";
			  str += (hours < 1 && minutes < 5) ? " and " : " ";
			}

			if(hours < 1 && days < 1 && minutes < 5) {
				str += seconds + " seconds";
			}

			return str;
        };
	}

	angular.module('filter.smartduration', [])
	   .filter('smartduration', smartduration);
})();
;
// Source: ./src/app/js/filters/TenthFilter.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function tenth () {
        return function (number) {
            number = number || 0;

            return (number > 0) ? (Math.round(number / 10) * 10) : 0;
        };
	}

	angular.module('filter.tenth', [])
	   .filter('tenth', tenth);
})();
;
// Source: ./src/app/js/filters/TimeAgoFilter.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function timeAgo () {
        return function(s) {
            return moment(s, [moment.ISO_8601, 'x']).fromNow();
        };
	}

	angular.module('filter.timeAgo', [])
	   .filter('timeAgo', timeAgo);
})();
;
// Source: ./src/app/js/filters/TimestampFilter.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function timestamp () {
        return function(s) {
           if(s) return Date.parse(s);
        };
	}

	angular.module('filter.timestamp', [])
	   .filter('timestamp', timestamp);
})();
;
// Source: ./src/app/js/filters/TitleFilter.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function filter () {
        return function(s) {
            s = ( s === undefined || s === null ) ? '' : s;
            return s.toString().toLowerCase().split(".stl").join("").split(".").join(" ").split("_").join(" ").replace( /\b([a-z])/g, function(ch) {
                return ch.toUpperCase();
            });
        };
	}

	angular.module('filter.title', [])
	  .filter('title', filter);
})();
;
// Source: ./src/app/js/filters/TrustedHTML.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function filter ($sce) {
		return function(ss) {
			return $sce.trustAsHtml(ss);
		};
	}

	angular.module('filter.trustedHTML', [])
	  .filter('trustedHTML', filter);
})();
;
// Source: ./src/app/js/filters/UniqueFilter.js
(function () {
	function unique () {
        return function (items, filterOn) {

          if (filterOn === false) {
            return items;
          }

          if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
            var hashCheck = {}, newItems = [];

            var extractValueToCompare = function (item) {
              if (angular.isObject(item) && angular.isString(filterOn)) {
                return item[filterOn];
              } else {
                return item;
              }
            };

            angular.forEach(items, function (item) {
              var valueToCheck, isDuplicate = false;

              for (var i = 0; i < newItems.length; i++) {
                if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
                  isDuplicate = true;
                  break;
                }
              }
              if (!isDuplicate) {
                newItems.push(item);
              }

            });
            items = newItems;
          }
          return items;
        };
	}

	angular.module('filter.unique', [])
	   .filter('unique', unique);
})();
;
// Source: ./src/app/js/services/ApiService.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {

    function parse_link_header(header) {
        if (header.length === 0) {
            throw new Error("input must not be of zero length");
        }

        // Split parts by comma
        var parts = header.split(',');
        var links = {};
        // Parse each part into a named link
        for(var i=0; i<parts.length; i++) {
            var section = parts[i].split(';');
            if (section.length !== 2) {
                throw new Error("section could not be split on ';'");
            }
            var url = section[0].replace(/<(.*)>/, '$1').trim();
            var name = section[1].replace(/rel="(.*)"/, '$1').trim();
            links[name] = url;
        }
        return links;
    }

    function MainService($http, $location, $resource, $q, $timeout, $notification) {
        function getAccessToken() {
            var deferred = $q.defer();

                $timeout(function () {
                    var auth_url = window.PATH.api;

                    if(window.localStorage.getItem('formide.auth:token')) {
                        deferred.resolve(window.localStorage.getItem('formide.auth:token'));
                    }
                    else {
                        if (window.DEBUG) console.log("No token found, resolving empty string.");
						deferred.resolve('');
                    }
                }, 100);

            return deferred.promise;
        }

        function ApiRequest(method, path, parameters, url) {

            var method = (typeof method === "undefined") ? 'GET' : method;
            var path = (typeof path === "undefined") ? '' : path;
            var parameters = (typeof parameters === "undefined") ? {} :
                parameters;
            var url = (typeof url === "undefined") ? window.PATH.api : url;

            if (window.DEBUG) {
                console.time("Response Time");
            }

            var promise = getAccessToken()
            .then(function (access_token) {
                path = interpolateUrl(path, parameters);

                if (access_token.length > 1) {
                    var request = {
                        method: method.toUpperCase(),
                        url: url + path,
                        headers: {
                            'Authorization': 'Bearer ' +
                                access_token,
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        data: parameters
                    }
                }
                else {
                    var request = {
                        method: method.toUpperCase(),
                        url: url + path,
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        data: parameters
                    }
                }

                if(method.toUpperCase() === 'GET') {
                    request.params = parameters;
                }

                var deferred = $q.defer();

                $http(request)
                    .then(function (response) {
                        if (window.DEBUG) {
                            if (path === '/proxy') {
                                console.groupCollapsed("API Proxy Request (" + parameters.url + ")");
                                console.log("This API Request Uses the Formide Proxy.");
                                console.log("Full Request Path: ", url + parameters.url);
                                console.log("Parameters: ", parameters.data);
                                console.log("Response: %s (%i)", response.statusText, response.status);
                                console.log("Method", response.config.method);
                                console.log("Headers", response.headers());
                                console.log("Data Object %O", response.data);
                                console.timeEnd("Response Time");
                                console.groupEnd();
                            }
                            else {
                                console.groupCollapsed("API Request (" + path + ")");
                                console.log("Full Request Path: ", url + path);
                                console.log("Parameters: ", parameters);
                                console.log("Response: %s (%i)", response.statusText, response.status);
                                console.log("Method", response.config.method);
                                console.log("Headers", response.headers());
                                console.log("Data Object %O", response.data);
                                console.timeEnd("Response Time");
                                console.groupEnd();
                            }
                        }

                        var linkHeader;

                        try {
                            if(response.headers() && response.headers('Link')) {
                                console.log(response.headers('Link'));
                                linkHeader = parse_link_header(response.headers('Link'));
                            }
                        } catch (e) {
                            console.info('No Link-header Found.', e);
                        }

                        // console.log('link header', linkHeader);
                        return deferred.resolve(response.data);
                    },
                    function (error) {
                        if (window.DEBUG) {
                            console.groupCollapsed("Error: API Request (%s)", path);
                            console.log("Full Request Path: ", url + path);
                            console.log("Parameters: ", parameters);
                            console.error("Error: %s (%i)", error.statusText, error.status);
                            console.error(error.data);
                            console.timeEnd("Response Time");
                            console.groupEnd();
                        }

                        return deferred.reject(error.data);
                    });
                return deferred.promise;
            },
            function (error) {
                if (window.DEBUG) {
                    console.timeEnd("Response Time");
                    console.error("Error: %s", error);
                }

                return error;
            });
            return promise;
        }

        function interpolateUrl(url, params) {
            url = url || '';
            params = (params || {});

            url = url.replace(/(\(\s*|\s*\)|\s*\|\s*)/g, "");

            url = url.replace(
                /:([a-z_]\w*)/gi,
                function ($0, label) {
                    // NOTE: Giving "data" precedence over "params".
                    return (popFirstKey(params, label) || "");

                }
            );

            url = url.replace(/(^|[^:])[\/]{2,}/g, "$1/");
            url = url.replace(/\/+$/i, "");

            return (url);
        }

        function popFirstKey(object1, object2, objectN, key) {
            var objects = Array.prototype.slice.call(arguments);

            var key = objects.pop();

            var object = null;

            while (object = objects.shift()) {

                if (object.hasOwnProperty(key)) {
                    return (object[key]);
                }
            }
        }

        function ApiProxyRequest(method, path, parameters) {
            parameters = (typeof parameters === "undefined") ? {} :
                parameters;

            return ApiRequest('POST', '/proxy', {
                method: method,
                url: path,
                data: parameters,
                token: window.localStorage.getItem('formide.auth:token')
            });
        }

        function ApiResources(path) {
            var parameters = parameters || {};

            var resources = {};

            resources.query = function (parameters) {
                return ApiRequest('GET', path, parameters);
            };
            resources.get = function (parameters) {
                return ApiRequest('GET', path, parameters);
            };
            resources.post = function (parameters) {
                return ApiRequest('POST', path, parameters);
            };
            resources.create = function (parameters) {
                return ApiRequest('POST', path, parameters);
            };
            resources.update = function (parameters) {
                return ApiRequest('PUT', path, parameters);
            };
            resources.put = function (parameters) {
                return ApiRequest('PUT', path, parameters);
            };
            resources.delete = function (parameters) {
                return ApiRequest('DELETE', path, parameters);
            };

            return resources;
        }

        var factory = {};

        factory.getAccessToken = getAccessToken;

        factory.req = function (method, path, parameters, url) {
                return ApiRequest(method, path, parameters, url);
            },

            factory.get = function (path, parameters, url) {
                return ApiRequest('GET', path, parameters, url);
            },

            factory.post = function (path, parameters, url) {
                return ApiRequest('POST', path, parameters, url);
            },

            factory.put = function (path, parameters, url) {
                return ApiRequest('PUT', path, parameters, url);
            },

            factory.delete = function (path, parameters, url) {
                return ApiRequest('DELETE', path, parameters, url);
            }

        var proxy = {};

        proxy.req = function (method, path, parameters, url) {
                return ApiProxyRequest(method, path, parameters);
            },

            proxy.get = function (path, parameters, url) {
                return ApiProxyRequest('GET', path, parameters);
            },

            proxy.post = function (path, parameters, url) {
                return ApiProxyRequest('POST', path, parameters);
            },

            proxy.put = function (path, parameters, url) {
                return ApiProxyRequest('PUT', path, parameters, url);
            },

            proxy.delete = function (path, parameters, url) {
                return ApiProxyRequest('DELETE', path, parameters, url);
            }

        factory.proxy = proxy;

        factory.sliceprofiles = ApiResources('/db/sliceprofiles/(:id)');

        factory.printers = ApiResources('/db/printers/(:id)');

        factory.materials = ApiResources('/db/materials/(:id)');

        factory.printjobs = ApiResources('/db/printjobs/(:id)');

        factory.files = ApiResources('/db/files/(:id)');

        factory.users = ApiResources('/auth/users/(:id)');

        factory.queue = ApiResources('/db/queue/(:id)');

        factory.resource = function (path, paramDefaults, actions, url) {

            var token = window.localStorage.getItem('formide.auth:token');

			var MY_ACTIONS = {
                'get': {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                },
                'save': {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                },
                'query': {
                    method: 'GET',
                    isArray: true,
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                },
                'remove': {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                },
                'delete': {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                },
                'update': {
                    method: 'PUT',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                }
            }

            window.PATH.api = window.PATH.api || {};

            var path = (typeof path === "undefined") ? '' : path;
            var actions = angular.extend({}, MY_ACTIONS, actions);
            var paramDefaults = (typeof paramDefaults === "undefined") ? null : paramDefaults;
            var url = (typeof url === "undefined") ? window.PATH.api + path : url + path;

			if (window.DEBUG) {
				console.groupCollapsed("Resource Request (" + path + ")");
				console.log("Full Request Path: ", url);
				console.log("Param Defaults: ", paramDefaults);
				console.groupEnd();
			}

            return $resource(url, paramDefaults, actions);


        }

        return factory;
    }

    angular.module('service.api', [])
        .factory('$api', ['$http', '$location', '$resource', '$q', '$timeout', '$notification',
            MainService])
        .config(function ($httpProvider) {
            $httpProvider.defaults.headers.post['Content-Type'] =
                'application/x-www-form-urlencoded; charset=UTF-8'
        })
})();
;
// Source: ./src/app/js/services/AuthService.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {

    function MainService($http, $api, $q, $timeout, $router, $location, $timeout, $rootScope) {
        var factory = {};

        window.AUTH                 = window.AUTH || {};

        window.PATH.login           = window.PATH.login || window.PATH.root + '/login';
        window.PATH.root 		    = window.PATH.root || window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;

        var auth_url = window.PATH.api;

        factory.login = function (username, password) {
            var deferred = $q.defer();

            $api.post('/auth/login', {
                username: username,
                password: password
            }, auth_url)
            .then(function(response) {
                window.AUTH.sessionid = response;
    			if(window.DEBUG)
    			{
                    console.groupCollapsed("Secure Route: API Authentication");
                        console.log("Session ID: ", window.AUTH.sessionid);
                    console.groupEnd();
    			}

                $rootScope.$emit("auth:loggedin", true);

                deferred.resolve(response);
            },
            function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };

        factory.logout = function () {
            var promise = $api
            window.localStorage.removeItem("formide.auth:token");
            $location.path('/login');

            return promise;
        };

        factory.checkLoggedin = function() {
            var deferred = $q.defer();

            $api.getAccessToken()
            .then(function(access_token) {
                if(access_token.length < 1) {
                    deferred.reject("Not loggedin");
					factory.logout();
                }
                else {
					$api.get('/auth/validate')
					.then(function(response) {
						deferred.resolve(access_token);
					}, function(err) {
						deferred.reject("access_token invalid");
						factory.logout();
					});
                }
            },
            function (error) {
                if(window.DEBUG) {
                  console.error("Error: %s", "API Request");
                  console.error(error);
                }
                deferred.reject(error);
				factory.logout();
            });

            return deferred.promise;
        };

        function changeAuth(loggedIn) {
            factory.user.isAuthenticated = loggedIn;
        }

        return factory;

    }

    angular.module('service.auth', [])
        .factory('$auth', ['$http', '$api', '$q', '$timeout', '$router', '$location', '$timeout', '$rootScope', MainService]);

})();
;
// Source: ./src/app/js/services/FileService.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
    function MainService($api, $q, $filter) {

		var factory = {
			resource: [],
			$resolved: false
		};

		try {

			var resource = $api.resource('/storage/:filename', {
				filename: '@filename'
			});

			factory.endpoint = resource;

			factory.resource = resource.query();

		} catch (err) {
			if (window.DEBUG) console.error(err);
		}


		var file_load = function (file) {

            var promise = $q(function (resolve, reject) {
                try {
                    factory.resource =  factory.endpoint.query({}, function (response) {

						factory.init = init;

				        try {
				            init();
				        } catch (err) {
				            if (window.DEBUG) console.error(err);
				        }

	                	resolve(response);
                    });
                } catch (e) {
                    if (window.DEBUG) console.error(e);
                    reject(e);
                }
            });

            return promise;
        }

        var file_single = function (file) {

            var promise = $q(function (resolve, reject) {
                try {
                    factory.endpoint.get({
                        filename: file.filename
                    }, function (response) {
	                	resolve(response);
                    });
                } catch (e) {
                    if (window.DEBUG) console.error(e);
                    reject(e);
                }
            });

            return promise;
        }

		var file_download = function (file) {

			var resource = $api.resource('storage/:filename/download')

            var promise = $q(function (resolve, reject) {
                try {
                    resource.get({
                        filename: file.filename
                    }, function (response) {
	                	resolve(response);
                    });
                } catch (e) {
                    if (window.DEBUG) console.error(e);
                    reject(e);
                }
            });

            return promise;
        }

		var file_remove = function (file) {

			var promise = $q(function (resolve, reject) {
	            try {
	                factory.endpoint.delete({
	                    filename: file.filename
	                }, function (response) {

						for (var i = 0; i < factory.resource.length; i++) {
							if(factory.resource[i].filename === file.filename) {
								factory.resource.splice(i, 1);
								break;
							}
						}

						resolve(response);
					});


	            } catch (e) {
	                if (window.DEBUG) console.error(e);
					reject(e);
	            }
			});

			return promise;

        }

		var file_add = function (file, cb) {

            factory.resource.unshift(file);

			if(typeof cb == "function") {
				cb();
			}
        }


        var init = function () {
			factory.resource.$load 		= file_load;
            factory.resource.$remove 	= file_remove;
            factory.resource.$single 	= file_single;
			factory.resource.$download 	= file_download;
			factory.resource.$add 		= file_add;
        }

        factory.init = init;

        try {
            init();
        } catch (err) {
            if (window.DEBUG) console.error(err);
        }

        return factory;
    }

    angular.module('service.file', [])
        .factory('File', ['$api', '$q', '$filter',
            MainService]);

})();
;
// Source: ./src/app/js/services/NotificationService.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
    function MainService($rootScope, $timeout) {
        var factory = {};

        factory.list = [];
        factory.active = [];

        factory.getNotifications = function () {
            if(window.localStorage.getItem('formide.notifications:list')) {
                return JSON.parse(window.localStorage.getItem('formide.notifications:list'));
            }
            else {
                return [];
            }
        }

        factory.init = function() {
            factory.list = factory.getNotifications();
        }

        factory.addNotification = function (data) {
            var description = data.message || "";
            var channel = data.channel || 'system'
            var duration = data.duration || 4000;
            var actions = data.actions || {};
            var popup = data.popup || false;
            var title = data.title || "";
			var save = data.save || false;
			var link = data.urlLink;

			console.log('save', save);

            var type;

            switch (data.type) {
                case 'log':
                    type = 'log';
                    break;
                case 'error':
                    type = 'error';
                    break;
                case 'warn':
                    type = 'warn';
                    break;
                case 'info':
                    type = 'info';
                    break;
                case 'success':
                    type = 'success';
                    break;
                default:
                    if(window.DEBUG) console.info('Unknown notification type, used "log".');
                    type = 'log';
            }

            var notifications = factory.getNotifications() || [];

            if(title) {
                var found = false;
                var foundId = null;

                var timestamp = Date.now();

                for(var i = 0; i < notifications.length; i++) {
                    if (notifications[i].title === title && notifications[i].description === description) {

                        if(timestamp - parseInt(notifications[i].updatedAt) < 60*60*1000) {
                            found = true;
                            foundId = i;
                            break;
                        }
                    }
                }

                if(found) {
                    notifications[foundId].count++;
                    notifications[foundId].updatedAt = timestamp;
                }
                else if(save) {
                    notifications.unshift({
                        id: (factory.list.length + 1),
                        title: title,
                        description: description,
                        type: type,
                        count: 1,
                        channel: channel,
                        createdAt: timestamp,
                        updatedAt: timestamp,
						save: save,
						link: link
                    });

                    if(notifications.length > 10) {
                        notifications.pop();
                    }
                }

				if(save){
	                window.localStorage.setItem('formide.notifications:list', JSON.stringify(notifications));
				}

				factory.showNotification(title, description, type, duration, actions, popup, link);

                factory.list = notifications;

                $timeout(function () {
                    $rootScope.$emit("notification.saved", true);
                }, 50);
            }
        }

        factory.showNotification = function (title, description, type, duration, actions, popup, link) {
            var id = Math.floor(Math.random() * 9999);

            var notification = {
                id: id,
                title: title,
                message: description,
                type: type,
                actions: actions,
                popup: popup,
				link: link
            };

            factory.active.push(notification);

            if(duration > 0) {
                $timeout(function() {
                    factory.removeNotification(id);
                }, duration);
            }
        }

        factory.removeNotification = function (id) {
            angular.forEach(factory.active, function(notification, key) {
                if(notification.id === id) {
                    factory.active.splice(key, 1);
                }
            });

            return true;
        }

        factory.clearSingle = function(index) {
            for(var i in factory.list) {
                if(factory.list[i].id == parseInt(index)) {
                    factory.list.splice(i, 1);
                    window.localStorage.setItem('formide.notifications:list', JSON.stringify(factory.list));
                    break;
                }
            }
        }

        factory.clearAll = function () {
            window.localStorage.setItem('formide.notifications:list', JSON.stringify([]));
            factory.list = [];
        }

        return factory;
    }

    angular.module('service.notification', [])
        .factory('$notification', ['$rootScope', '$timeout', MainService]);

})();
;
// Source: ./src/app/js/services/PrinterControlService.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
    function MainService($api, Printer, $filter) {
        var factory = {};

        function port(port) {
			return encodeURIComponent(port);
        }

        function post(data) {

            if (data == undefined || data == null) {
                console.error('Data not defined.');
            } else {
                if (data.port == undefined) {
                    console.error('No port selected.');
                } else {

                    var urlParams = [];
                    for (key in data.parameters) {
                        urlParams.push(key + '=' + data.parameters[key]);
                    }

					if (data.commands) {
						var api_url = '/printer/' + data.port + "/commands/" + data.method;
					}
					else {
						var api_url = '/printer/' + data.port + "/" + data.method;
					}

                    if (window.DEBUG) console.log("Url: ", api_url);

					$api.post(api_url, data.parameters)
                        .then(function (response) {
                            if (window.DEBUG) console.log("Data: ", data);
                    });

                }
            }

            if (window.DEBUG) {
                console.groupEnd();
            }

            return true;
        }


        factory.gcode = function (gcode) {
            return post({
                method: 'gcode',
                parameters: {
                    command: gcode
                },
                port: port(Printer.$active.port)
            });
        }

		factory.tune = function (gcode) {
            return post({
                method: 'tune',
                parameters: {
                    command: gcode
                },
                port: port(Printer.$active.port)
            });
        }

        factory.jog = function (axis, distance) {
            return post({
                method: 'jog',
				commands: true,
                parameters: {
                    axis: axis,
                    dist: parseFloat(distance)
                },
                port: port(Printer.$active.port)
            });
        }

        factory.move = function (axis, distance) {
            return this.jog(axis, distance);
        }

        factory.bed = {
            temperature: function (temperature) {
                return post({
                    method: 'temp_bed',
					commands: true,
                    parameters: {
                        temp: parseInt(temperature)
                    },
                    port: port(Printer.$active.port)
                });
            }
        }

        factory.extruder = function (id) {
            return {
                temperature: function (temperature) {
                    return post({
                        method: 'temp_extruder',
						commands: true,
                        parameters: {
                            temp: parseInt(temperature),
                            extnr: id
                        },
                        port: port(Printer.$active.port)
                    });
                },
                extrude: function (distance) {
                    return post({
                        method: 'extrude',
						commands: true,
                        parameters: {
                            dist: parseFloat(distance),
                            extnr: id
                        },
                        port: port(Printer.$active.port)
                    });
                },
                retract: function (distance) {
					if (Printer.$active.deviceVersion && $filter('majorVersion')(Printer.$active.deviceVersion) < 2) {
						// pre client v2 distance fix
						distance = distance * -1;
					}

                    return post({
                        method: 'retract',
						commands: true,
                        parameters: {
                            dist: parseFloat(distance),
                            extnr: id
                        },
                        port: port(Printer.$active.port)
                    });
                }
            }
        }

        factory.home = {
            all: function () {
                return post({
                    method: 'home',
					commands: true,
                    port: port(Printer.$active.port)
                });
            },
            x: function () {
                return post({
                    method: 'home_x',
					commands: true,
                    port: port(Printer.$active.port)
                });
            },
            y: function () {
                return post({
                    method: 'home_y',
					commands: true,
                    port: port(Printer.$active.port)
                });
            },
            z: function () {
                return post({
                    method: 'home_z',
					commands: true,
                    port: port(Printer.$active.port)
                });
            }
        }

        factory.print = function (gcode) {
			return post({
                method: 'print',
                port: port(Printer.$active.port),
				parameters: {
					file: gcode.path
				}
            });
        }

        factory.pause = function () {
            return post({
                method: 'pause',
                port: port(Printer.$active.port)
            });
        }

        factory.resume = function () {
            return post({
                method: 'resume',
                port: port(Printer.$active.port)
            });
        }

        factory.stop = function () {
            return post({
                method: 'stop',
                port: port(Printer.$active.port)
            });
        }

        factory.stopAll = function () {
            return post({
                method: 'stop_all',
				commands: true,
                port: port(Printer.$active.port)
            });
        }

        factory.LCDMessage = function (message) {
            return post({
                method: 'lcd_message',
				commands: true,
                parameters: {
                    message: message
                },
                port: port(port)
            });
        }

        return factory;
    }

    angular.module('service.api.printerControl', [])
        .factory('printerCtrl', ['$api', 'Printer', '$filter', MainService]);

})();
;
// Source: ./src/app/js/services/PrinterService.js
/*
*	This code was created for Printr B.V. It is open source under the formide-client package.
*	Copyright (c) 2017, All rights reserved, http://printr.nl
*/

	(function () {
		function MainService($socket, $q, $api, $rootScope, $timeout, $filter, $interval) {
		var factory = {
			resource: [],
			$active: {
				$resolved: false
			}
		};


		try {

		var resource = $api.resource('/printer');

		factory.endpoint = resource;

		factory.resource = resource.query(function () {
			factory.$setActive();
		});

		} catch (err) {
			if (window.DEBUG) console.error(err);
		}


		function updateResource(resource, type) {
			// update printer statuses on event

			var resource = resource || {};

			factory.resource.$promise.then(function(result) {
				try {
					switch (type) {
						case 'printer.status':

							if (!foundPrinter(factory.resource, resource)) {
								factory.resource = factory.endpoint.query(function(){
									factory.$setActive();
								});
							}
							else {
								angular.forEach(factory.resource, function(printer, key) {
									if(printer.port === resource.port) {
										angular.merge(printer, resource);

										var arr = printer.timeStarted.split(/-|\.|:/);// split string and create array.
										printer.timePassed = moment.duration(Date.now() - new Date(arr[0], arr[1] -1, arr[2], arr[3], arr[4], arr[5]))._milliseconds;

										if (printer.filePath.length > 0) {
											printer.printJob = printer.filePath.substring(printer.filePath.lastIndexOf('/')+1);
										}
										else {
											printer.printJob = null;
										}


										setPrinterStatusInterval(printer.port);

										factory.resource[key] = printer;
									}
								});
							}

							break;

						case 'printer.connected':
							factory.resource.unshift(resource);
							factory.$setActive();
							break;

						case 'printer.disconnected':
							for (var i = 0; i < factory.resource.length; i++) {
								if(factory.resource[i].port === resource.port) {
									factory.resource.splice(i, 1);

									if (resource.port == factory.$active.port) {
										factory.$active = {};
										factory.$active.status = 'offline';
										$rootScope.$emit('formide.printer:selectedRemoved');
									}

									$interval.cancel(printerStatusInterval[port]);
									break;
								}
							}
							break;

						default:
							if(window.DEBUG) console.error('Unknown printer status.');
					}
				}
				catch (e) {
				}
			});
		}

		var printerStatusInterval = {};

		function setPrinterStatusInterval(port) {
			// set an interval to set the printer to offline if a printer.status is not recievced with 5 seconds

			if (printerStatusInterval[port]) {
				$interval.cancel(printerStatusInterval[port]);
			}
			 printerStatusInterval[port] = $interval(function() {
				 for (var i = 0; i < factory.resource.length; i++) {
 					if(factory.resource[i].port === resource.port) {
 						factory.resource.splice(i, 1);

						if (resource.port == factory.$active.port) {
							factory.$active.status = 'offline';
							factory.$active.statusTemperatures = [];
						}
 						break;
 					}
 				}
			}, 5000);
		};

		$socket.socket.on('printer.status', function (resource) {
			updateResource(resource, 'printer.status');
			saveTemperatures(resource);
		});

		$socket.socket.on('printer.connected', function (resource) {
			updateResource(resource, 'printer.connected');
		});

		$socket.socket.on('printer.disconnected', function (resource) {
			updateResource(resource, 'printer.disconnected');
		});

		function saveTemperatures(resource){
			// store the last 60 seconds of temperature data for the active printer

			$timeout(function () {

				if (factory.$active &&
					factory.$active.port == resource.port &&
					(resource.status !== 'offline' || resource.status !== 'connecting') ) {

					var temps = {};
					var time = (new Date()).getTime();

					temps.time = time;

					if (factory.$active.bed.heated) {
						temps.bed = {};
						temps.bed.temp = resource.bed.temp;
						temps.bed.targetTemp = resource.bed.targetTemp;
					}

					temps.extruders = [];

					for (var i = 0; i < resource.extruders.length; i++) {
						temps.extruders.push({temp: resource.extruders[i].temp, targetTemp: resource.extruders[i].targetTemp});
					}

					factory.$active.statusTemperatures.push(temps);

					if (factory.$active.statusTemperatures.length > 30) factory.$active.statusTemperatures.splice(0,1);

				}
			});
		}


		factory.$setActive = function (params, cb) {
			var params = params || {};

			var promise = $q(function (resolve, reject) {

				if (typeof params.port === "undefined") {
					if (window.localStorage.getItem("formide.printer:selected.port") !== null) {
						params.port = decodeURIComponent(window.localStorage.getItem("formide.printer:selected.port"));
					} else {

						if (window.DEBUG) console.warn('Could not set an active printer!');

						reject('Could not set an active printer!');
					}
				} else {
					window.localStorage.setItem("formide.printer:selected.port", encodeURIComponent(params.port));
				}

				if (typeof params.port !== "undefined") {
					factory.$active.status = factory.$active.status || 'offline';

					factory.$active.$resolved = false;

					var deviceSelected = false;

					for (var i = 0; i < factory.resource.length; i++) {
						if (factory.resource[i].port == params.port) {

							factory.resource[i].selected = true;
							factory.$active = factory.resource[i];
							factory.$active.statusTemperatures = [];
							$rootScope.$emit("formide.printer:updated",factory.$active);

							deviceSelected = true;
						}
						else {
							factory.resource[i].selected = false;
						}
					}

					if(!deviceSelected) {
						if (window.DEBUG) console.warn('Could not set an active printer!');
						reject('Could not set an active printer!');
					}
				}
			});

			return promise;
		}


		return factory;
	}

	angular.module('service.printer', [])
	.factory('Printer', ['$socket', '$q', '$api', '$rootScope',
	'$timeout', '$filter', '$interval', MainService]);

})();
;
// Source: ./src/app/js/services/SidebarService.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
    function MainService($rootScope, $timeout) {
        var factory = {};

        factory.setSidebar = function(controller, template, width) {
            $rootScope.sidebar = {
                width: width || 360,
                controller: controller || 'SidebarController',
                template: template || 'sidebar/componentTemplate.html'
            };
        }

        return factory;
    }

    angular.module('service.sidebar', [])
        .factory('$sidebar', ['$rootScope', '$timeout', MainService]);

})();
;
// Source: ./src/app/js/services/SocketService.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function MainRun($socket) {
		$socket.socket.on('log.debug', function (data) {
			if (window.DEBUG) {
				console.groupCollapsed("Log [%s] (%s)", data.device, data.message);
				console.log('Message: ', data.message);
				console.log('Module Path: ', data.modulePath);
				console.log('Timestamp: ', data.timestampDate + data.timestampString)
				console.groupEnd();
			}
		});
	}

	function MainService(socketFactory, $api, $auth, $interval) {
		var factory = {};

		var access_token = window.localStorage.getItem('formide.auth:token');
		window.PATH.socket = window.PATH.socket || window.location.protocol + '//' + window.location.hostname + ':4000';

		factory.authenticate = function () {

			$auth.checkLoggedin()
			.then(function(access_token) {
				if(access_token.length < 1) {
					if (window.DEBUG) console.info("Not loggedin, could not connect to sockets.");
					return false;
				}
				else {
					var type = type || 'user';
					try {
						factory.socket.emit('authenticate', {
							type: type,
							accessToken: access_token
						}, function (response) {

							if (response.success === false) {
								if (window.DEBUG) console.warn('Could not authenticate socket.', response);
							} else {
								if (window.DEBUG) console.info('Authenticated socket', response);
							}
						});
					} catch (e) {
						if (window.DEBUG) console.warn('Could not authenticate socket.', e);
					}
				}
			},
			function (e) {
				if (window.DEBUG) console.error("Not loggedin, could not connect to sockets.", e);
				return false;
			});
		}


		factory.reconnect = function () {
			console.log('reconect to socket');
			factory.socket.disconnect();
		}

		factory.socket = socketFactory({
			ioSocket: io.connect(window.PATH.socket, {forceNew: true})
		});

		factory.socket.on('disconnect', function (){
			console.log('factory.socket.on disconnected')
			factory.socket.connect();
		});

		factory.socket.on('connect', function(){
			console.log('factory.socket.on connected')
			factory.authenticate();
		});

		return factory;
	}

	angular.module('service.socket', [])
		.run(['$socket', MainRun])
		.factory('$socket', ['socketFactory', '$api', '$auth', '$interval', MainService]);
})();
;
// Source: ./src/app/js/core/header/coreHeader.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
  function coreHeader() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'header/componentTemplate.html',
        scope: {
            maxWidth: '@'
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController($router, $rootScope, $location, ngDialog, $auth) {
      var vm = this;

      vm.mobilenavInvisible = true;

      vm.maxWidth = vm.maxWidth || 896;

      // private functions

      // public functions
	  function navigate(route){
		  $location.path(route);
	  }

      function toggleMobilenav() {
		  $rootScope.bodyNoScroll = !$rootScope.bodyNoScroll;
		  vm.mobilenavInvisible = vm.mobilenavInvisible ? false : true;
      }

	  function logout(){
		  $auth.logout()
	  }

      // exports
      angular.extend(vm, {
      	toggleMobilenav: toggleMobilenav,
		navigate: navigate,
		logout: logout
      });
  }


  MainController.$inject = [
    '$router', '$rootScope', '$location', 'ngDialog', '$auth'
  ];

  angular
    .module('core.header', [
      //
    ])
    .directive('coreHeader', coreHeader);
})();
;
// Source: ./src/app/js/core/page-content/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
	function corePageContent() {
		var directive = {
			restrict: 'EA',
			templateUrl: 'page-content/componentTemplate.html',
			scope: {
				routeConfig: '=',
			},
			transclude: true,
			controller: MainController,
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;
	}

	function MainController($router, $rootScope, $auth, $location, ngDialog) {
		var vm = this;

		var routes = [];

		vm.showMobileNav = false;

		function getRoutes() {
			try {
				routes = vm.routeConfig
				.filter(function (item) {
					return (item.nav !== undefined) ? true : false;
				});
			}
			catch(err) {
				if(window.DEBUG) console.info("RouteConfig not defined, could not populate navigation items.");
			}
		}
		getRoutes();


		$rootScope.$watch(
        function() { return $router.navigating; },
        function() {
            if (!$router.navigating) {
                getRoutes();

                $rootScope.$emit('formide.navigated', true);

                window.scrollTo(0, 0);

				var route = $router.lastNavigationAttempt.substring(1);

				if (route == 'login') {
					$rootScope.isLoggedIn = false;
					ngDialog.closeAll();
					$rootScope.setSidebarHide();
				}
				else {
					for (var i in routes) {
	                    if (routes[i].path) {
	                        routes[i].nav.active = (route.split('/').indexOf(routes[i].path.substring(1)) > -1);
	                        if (routes[i].nav.active && routes[i].loggedIn) {

	                            $auth.checkLoggedin()
								.then(function (access_token) {

				 				   if (access_token.length > 0) {
				 					   $rootScope.isLoggedIn = true;
				 				   }
				 				   else {
				 					   $rootScope.isLoggedIn = false;
				 				   }
								}, function (error) {
								   $rootScope.isLoggedIn = false;
								});
	                        }
	                    }
	                }
				}
            }
        });


		function navigate(route){
			$location.path(route);
		}

		function logOut(){
			window.localStorage.removeItem('formide.auth:token');
			navigate('/login');
		}


		// exports
		angular.extend(vm, {
			routes: routes || {},
			navigate: navigate,
			logOut: logOut
		});
  }


  MainController.$inject = [
	  '$router', '$rootScope', '$auth', '$location', 'ngDialog'
  ];

  angular
    .module('core.pageContent', [
      //
    ])
    .directive('corePageContent', corePageContent);
})();
;
// Source: ./src/app/js/core/sidebar/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
    function coreAside() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'sidebar/componentTemplate.html',
            scope: {
                printers: '='
            },
            transclude: true,
            controller: MainController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

    }

    function MainController($rootScope, $api, $socket, $interval, Printer, $location, ngDialog) {
        var vm = this;

		vm.showCloudMsg = true;

        vm.printer = [];

		vm.resolved = false;

		Printer.resource.$promise.then(function (data) {
			vm.printer = Printer.resource;
			setActivePrinter(vm.printer);
			vm.resolved = true;
		});

		function navigate(route){
			$location.path(route);
		}

		function setActivePrinter(printers){
			vm.printerActive = null;
			for (var i = 0; i < printers.length; i++) {
				if (printers[i].selected) {
					vm.printerActive = printers[i];
					break;
				}
			}
		}

		$rootScope.$on('formide.printer:updated', function (event, state) {
			vm.printer = Printer.resource;
			setActivePrinter(vm.printer);
		});

		$rootScope.$on('formide.printer:selectedRemoved', function (event, state) {
			vm.printerActive = null;
		});

        vm.slicingInProgress = false;

        vm.unknownPrinter = false;

		vm.onboarding = $rootScope.onboarding;

        vm.activeSliceMessage = 0;

        vm.sliceMessages = [
            'Sharpening katana swords',
            'Calculating polygons',
            'Repairing Models',
            'We are testing your patience',
            'Would you like fries with that?',
            'It is still faster than you could draw it',
            'Reticulating Spines', //A Simcity 3000 Joke
            'Reconfiguring the office coffee machine',
            'Prepare for awesomeness!',
            'Adjusting Bell Curves',
            'Applying Feng Shui',
            'Building Data Trees',
            'Calculating Inverse Probability Matrices',
            'Computing Optimal Bin Packing',
            'Deciding What Message to Display Next',
            'Dicing Models',
            'Integrating Curves',
            'Synthesizing Gravity',
            'Synthesizing Wavelets'
        ];

        function setVisible (index) {
            if (index == vm.activeSliceMessage) {
               return("1") ;
            } else {
               return("0") ;
            }
        }

        $interval(function() {
            vm.activeSliceMessage = Math.floor(Math.random() * vm.sliceMessages.length);
        }, 2000);

		function printerSetupDialog(){
			if (vm.unknownPrinter) {
				$rootScope.printerSetupDialog(vm.unknownPrinter.device, vm.unknownPrinter.port, true);
				vm.unknownPrinter = false;
			}
			else {
				$rootScope.printerSetupDialog();
			}
		}

        var printerSortFunction = function (printer) {
            switch (printer.status) {
            case 'printing':
                return 1
                break;

            case 'heating':
                return 2
                break;

            case 'paused':
                return 3
                break;

            case 'online':
                return 4
                break;

                //   case 'stopping':
                //       return 5
                //       break;

            case 'connecting':
                return 6
                break;

            default:
                return 7
                break;
            }
        }


        // exports
        angular.extend(vm, {
            printerSortFunction: printerSortFunction,
            setVisible: setVisible,
			printerSetupDialog: printerSetupDialog,
			navigate: navigate
        });
    }


    MainController.$inject = [
	    '$rootScope',
	    '$api',
	    '$socket',
	    '$interval',
	    'Printer',
		'$location',
		'ngDialog'
	  ];

    angular
        .module('core.aside', [
      		//
    	])
        .directive('coreAside', coreAside);
})();
;
// Source: ./src/app/js/shared/add-new/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component button
 */

(function () {
  function addNew() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'add-new/componentTemplate.html',
        scope: {
            //
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController() {
      var vm = this;

      // private functions

      // public functions

      // exports
      angular.extend(vm, {
        //
      });
  }


  MainController.$inject = [
    //
  ];

  angular
    .module('shared.addNew', [
      //
    ])
    .directive('addNew', addNew);
})();
;
// Source: ./src/app/js/shared/alert-box/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for dislaying avatars in different sizes.
 */

(function () {
  function alertBox() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'alert-box/componentTemplate.html',
        scope: {
            alertId: '=',
            type: '@',
            title: '=',
            message: '=',
            actions: '=',
			link: '=?'
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController($notification) {
      var vm = this;

      // private functions

      // public functions

      function closeNotification() {
          $notification.removeNotification(vm.alertId);
      }

      function executeCallback(callback) {
          var cb = callback();

          if(cb) {
              $notification.removeNotification(vm.alertId);
          }
      }

      // exports
      angular.extend(vm, {
        closeNotification: closeNotification,
        executeCallback: executeCallback
      });
  }


  MainController.$inject = [
    '$notification'
  ];

  angular
    .module('shared.alertBox', [
      //
    ])
    .directive('alertBox', alertBox);
})();
;
// Source: ./src/app/js/shared/checkbox/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a slice details list.
 */

(function () {
  function checkbox() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'checkbox/componentTemplate.html',
        scope: {
			checkboxModel: '=',
			checkboxLabelLeft: '=?',
			checkboxLabelRight: '=?',
			checkboxDisabled: '=?',
			checkboxCallback: '=?',
			checkboxParameters: '=?'
		},
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController($timeout) {
      var vm = this;

      // private functions

      // public functions

	  function checkboxClick(){
		  if (!vm.checkboxDisabled) {
		  	vm.checkboxModel = !vm.checkboxModel;

			$timeout(function () {
				if (vm.checkboxCallback) {
					vm.checkboxCallback(vm.checkboxParameters);
				}
			});
		  }
	  }

      // exports
      angular.extend(vm, {
        checkboxClick: checkboxClick
      });
  }


  MainController.$inject = [
    '$timeout'
  ];

  angular
    .module('shared.checkbox', [
      //
    ])
    .directive('checkbox', checkbox);
})();
;
// Source: ./src/app/js/shared/dashboard-temperatures/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a slice details list.
 */

(function () {
  function dashboardTemperatures() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'dashboard-temperatures/componentTemplate.html',
        scope: {
			//
		},
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }


  function MainController(Printer, $filter, $socket, $rootScope, $timeout, $scope) {
	  var vm = this;

	  vm.chart = {};

	  function setupChart(){
		  vm.chart.labels = [];
		  vm.chart.series = [];
		  vm.chart.data = [];

		  var maxTemp = Printer.$active.maxTemperature + 50 || 450;

		  if (Printer.$active.bed && Printer.$active.bed.heated) {
			  vm.chart.series.push('Bed');
			  vm.chart.data.push([]);
			  vm.chart.series.push('Target');
			  vm.chart.data.push([]);

			  vm.chart.colors = ['#F7464A','#FBC1C3','#46BFBD','#C2E9E9','#FDB45C','#FDE6CA', '#D473AC', '#EFD0E3', '#46b1e6', '#CAC7D9', '#615892', '#CAC7D9'];
		  }
		  else {
		  	  vm.chart.colors = ['#46BFBD','#C2E9E9','#FDB45C','#FDE6CA', '#D473AC', '#EFD0E3', '#46b1e6', '#CAC7D9', '#615892', '#CAC7D9'];
		  }

		  if (Printer.$active.extruders) {
			  for (var i = 0; i < Printer.$active.extruders.length; i++) {
    			  vm.chart.series.push('Ext ' + (i+1));
    			  vm.chart.data.push([]);
    			  vm.chart.series.push('Target');
    			  vm.chart.data.push([]);
    		  }
		  }
		  else {
			  vm.chart.series.push('Ext 1');
			  vm.chart.data.push([]);
			  vm.chart.series.push('Target');
			  vm.chart.data.push([]);
		  }

		  vm.chart.options = {
			  scales: {
				  yAxes: [{
					  id: 'y-axis-1',
					  type: 'linear',
					  display: true,
					  position: 'left',
					  ticks: {
						  min: 0,
						  max: maxTemp,
						  beginAtZero: true
					  }
				  }],
				  xAxes: [{
					  ticks: {
						  autoSkip:true,
						  maxTicksLimit:11
					  }
				 }]
			  },
			  datasetFill : false,
			  elements: {
				  point: { radius: 0, hitRadius: 10, hoverRadius: 3 },
				  line: { fill: false }
		  	  },
			  animation : false,
			  responsive: true,
			  maintainAspectRatio: false
		  };
	  }

	  function populateChart(resource){

		  var b = 0;
		  var n = vm.chart.data[0].length;
		  var time = (new Date()).getTime();

		  if (n == 0) {
			  if (Printer.$active.statusTemperatures.length > 0) {
				  // if data has been saved, populate the chart with this first

				  for (var i = 0; i < Printer.$active.statusTemperatures.length; i++) {
					  vm.chart.labels.push($filter('date')(Printer.$active.statusTemperatures[i].time, 'HH:mm:ss'));

					  if (Printer.$active.bed.heated) {
						  b = 2;
						  vm.chart.data[0].push(Printer.$active.statusTemperatures[i].bed.temp);
						  vm.chart.data[1].push(Printer.$active.statusTemperatures[i].bed.targetTemp);
					  }

					  for (var r = 0; r < resource.extruders.length; r++) {
						  if (vm.chart.data[r*2+b]) vm.chart.data[r*2+b].push(Printer.$active.statusTemperatures[i].extruders[r].temp);
						  if (vm.chart.data[r*2+b+1]) vm.chart.data[r*2+b+1].push(Printer.$active.statusTemperatures[i].extruders[r].targetTemp);
					  }
				  }
			  }

			  for (var i = 0; i < (31 - Printer.$active.statusTemperatures.length); i++) {
				  // if there was less than 60 seconds of data available, add the necessary labels for the x axis

				  var tempTime = time + (2000 * i);
				  vm.chart.labels.push($filter('date')(tempTime, 'HH:mm:ss'));
			  }


		  }
		  else if(n > 30){
			  // if there is more than 60 seconds of data, remove oldest and add new

			  vm.chart.labels.splice(0,1);
			  vm.chart.labels.push($filter('date')(time, 'HH:mm:ss'));
		  }


		  if (Printer.$active.bed.heated) {
			  b = 2;
			  vm.chart.data[0].push(resource.bed.temp);
			  vm.chart.data[1].push(resource.bed.targetTemp);

			  if(n > 30){
				  vm.chart.data[0].splice(0,1);
				  vm.chart.data[1].splice(0,1);
			  }
		  }

		  for (var i = 0; i < resource.extruders.length; i++) {
			  if (vm.chart.data[i*2+b]) vm.chart.data[i*2+b].push(resource.extruders[i].temp);
			  if (vm.chart.data[i*2+b+1]) vm.chart.data[i*2+b+1].push(resource.extruders[i].targetTemp);

			  if(n > 30){
				  if (vm.chart.data[i*2+b]) vm.chart.data[i*2+b].splice(0,1);
				  if (vm.chart.data[i*2+b+1]) vm.chart.data[i*2+b+1].splice(0,1);
			  }
		  }
	  }


	  Printer.resource.$promise.then(function (data) {
		  $timeout(function () {
		  	  setupChart();
		  });
	  });

	  $rootScope.$on("formide.printer:updated", function (event, resource) {
		  // if the printer is updated, clear the chart
    	  setupChart();
	  });

	  $rootScope.$on('formide.printer:selectedRemoved', function (event, state) {
		  setupChart()
	  });


	  $socket.socket.on('printer.status', function (resource) {
		  if (typeof resource.device == 'string') {
			  resource.device = resource.device.toLowerCase();
		  }
		  if (Printer.$active && Printer.$active.port == resource.port
			&& (resource.status !== 'offline' || resource.status !== 'connecting') ) {

			  populateChart(resource)
		  }
	  });


	  // exports
	  angular.extend(vm, {
		  //
	  });
  }

  MainController.$inject = [
	  'Printer', '$filter', '$socket', '$rootScope', '$timeout', '$scope'
  ];

  angular
    .module('shared.dashboardTemperatures', [
      //
    ])
    .directive('dashboardTemperatures', dashboardTemperatures);
})();
;
// Source: ./src/app/js/shared/dashboard-webcam/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a slice details list.
 */

(function () {
  function dashboardWebcam() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'dashboard-webcam/componentTemplate.html',
        scope: {
			showClose: '='
		},
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }


	function MainController(Printer, $api, $rootScope, $scope) {
	  var vm = this;

	  function webcamConnection(){
		  $rootScope.webcamError = false;
		  vm.webcamLoaded = false;

		  vm.webcamPath = window.PATH.socket = window.location.protocol + '//' + window.location.hostname +
				  					':8081/?action=stream&random=' + Math.round(Math.random() * 999999);
	  }

	  webcamConnection();


	  $scope.$on("formide.activePrinter:changed", function (event, resource) {
		  $rootScope.webcamError = false;
		  vm.webcamLoaded = false;
	  });




	  // exports
	  angular.extend(vm, {
		  printer: Printer
	  });
  }

  MainController.$inject = [
	  'Printer', '$api', '$rootScope', '$scope'
  ];

  angular
    .module('shared.dashboardWebcam', [
      //
    ])
    .directive('dashboardWebcam', dashboardWebcam);
})();
;
// Source: ./src/app/js/shared/file-droppable/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
  function fileDroppable($timeout, $location, $rootScope) {
    var directive = {
		link: function(scope, element) {
			// again we need the native object
			var el = element[0];

			var leaveTimeout;
			var dragOverClass;

			el.addEventListener(
				'dragover',
				function(e) {

					if ($location.$$path == "/library") {

						// check that item being dragging is from outside of the library and not external
						var dt = e.dataTransfer;
  						if (dt.types && (dt.types.indexOf ? dt.types.indexOf('Files') != -1 : e.dataTransfer.types[0] != 'draggable' && e.dataTransfer.types[1] != 'draggable') && !$rootScope.fileUploading) {

							// allows us to drop
							if (e.preventDefault) e.preventDefault();

							$timeout.cancel(leaveTimeout);

							dragOverClass = 'file-dragover';

							el.classList.add(dragOverClass)

						}
					}else {
						e.dataTransfer.dropEffect = 'none';
					}

					return false;
				},
				false
			);

			el.addEventListener(
				'dragleave',
				function(e) {

					leaveTimeout = $timeout(function () {
						if (dragOverClass) el.classList.remove(dragOverClass);
						dragOverClass = null;
					}, 100);

					return false;
				},
				false
			);

			el.addEventListener(
				'drop',
				function(e) {

					// allows us to drop
					if (e.preventDefault) e.preventDefault();

					if (dragOverClass) el.classList.remove(dragOverClass);
  					dragOverClass = null;


					return false;
				},
				false
			);

		}
    };

    return directive;
  }

  angular
    .module('shared.fileDroppable', [
      //
    ])
    .directive('fileDroppable', fileDroppable);
})();
;
// Source: ./src/app/js/shared/float/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 *
 */

(function () {
  function float() {
    var directive = {
        require: 'ngModel',
        link: function(scope, ele, attr, ctrl){
            ctrl.$parsers.unshift(function(viewValue){
                return parseFloat(viewValue);
            });
        }
    };

    return directive;
  }

  angular
    .module('shared.float', [
      //
    ])
    .directive('float', float);
})();
;
// Source: ./src/app/js/shared/focus/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
  function focus($timeout, $parse) {
    var directive = {
		restrict: "A",
		link: function (scope, element, attrs) {
			var model = $parse(attrs.focus);
			scope.$watch(model, function(value) {
				if(value === true) {
					$timeout(function() {
						element[0].focus();
					});
				}
			});
			element.bind('blur', function() {
				scope.$apply(model.assign(scope, false));
			});
			scope.$on('$destroy', function() {
				element.unbind('blur')
			});
  	  	}
    };

    return directive;
  }

  angular
    .module('shared.focus', [
      //
    ])
    .directive('focus', focus);
})();
;
// Source: ./src/app/js/shared/loading-screen/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 *  Component for creating a file list item.
 */

(function () {
  function loadingScreen($timeout) {
      return({
          link: link,
          restrict: "EA"
      });
      // I bind the JavaScript events to the scope.
      function link( scope, element, attributes ) {
            element.css('opacity', 0);

            $timeout(function() {
                element.remove();
                scope = element = attributes = null;
            }, 500);
      }
  }

  angular
    .module('shared.loadingScreen', [
      //
    ])
    .directive('loadingScreen', loadingScreen);
})();
;
// Source: ./src/app/js/shared/notification-list-item/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 *  Component for creating a notification list item.
 */

(function () {
  function notificationListItem() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'notification-list-item/componentTemplate.html',
        scope: {
            notificationId: '=',
            title: '=',
            description: '=',
            count: '=',
            updatedAt: '='
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController($location, $notification) {
      var vm = this;

      // private functions

      // public functions

      function clearSingle(index) {
          $notification.clearSingle(index);
      }

      // exports
      angular.extend(vm, {
          clearSingle: clearSingle
      });
  }

  MainController.$inject = [
    '$location', '$notification'
  ];

  angular
    .module('shared.notificationListItem', [
      //
    ])
    .directive('notificationListItem', notificationListItem);
})();
;
// Source: ./src/app/js/shared/notification-list/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 *  Component for creating a notification list.
 */

(function () {
  function notificationList() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'notification-list/componentTemplate.html',
        scope: {
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController() {
      var vm = this;

      // private functions

      // public functions

      // exports
      angular.extend(vm, {
        //
      });
  }


  MainController.$inject = [
    //
  ];

  angular
    .module('shared.notificationList', [
      //
    ])
    .directive('notificationList', notificationList);
})();
;
// Source: ./src/app/js/shared/on-enter/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
  function onEnter() {
    var directive = {
		restrict: "A",
		link: function (scope, element, attrs) {
			element.bind('keydown', function(e) {
				if (event.which === 13) {
					scope.$apply(function (){
	                    scope.$eval(attrs.onEnter);
	                });
					event.preventDefault();
				}
			});
			scope.$on('$destroy', function() {
				element.unbind('keydown')
			});
  	  	}
    };

    return directive;
  }

  angular
    .module('shared.onEnter', [
      //
    ])
    .directive('onEnter', onEnter);
})();
;
// Source: ./src/app/js/shared/print-job-item/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a queue list item.
 */

(function () {
    function printJobItem() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'print-job-item/componentTemplate.html',
            scope: {
            },
            transclude: true,
            controller: MainController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }

    function MainController(printerCtrl, $rootScope, $timeout, Printer, File, $notification, ngDialog, $api, $location, $filter) {
        var vm = this;

		vm.wait = true;
        vm.clicked = false;
        vm.printer = Printer.$active;
		vm.imagesRootLocation = window.PATH.images;


		$timeout(function () {
			vm.wait = false;
		}, 3000);

		function navigate(route){
	  		$location.path(route);
	  	}

        function pausePrint() {
            printerCtrl.pause();
            vm.executingCommand = true;
        }

        function resumePrint() {
            printerCtrl.resume();
            vm.executingCommand = true;
        }

        function stopPrint() {
            $notification.addNotification({
                title: 'Stop Print',
                message: 'Do you want to stop this print?',
                type: 'info',
                duration: -1,
                actions: [
                    {
                        title: 'Cancel',
                        callback: function() {
                            console.log('abort!');
                            return true;
                        }
                    },
                    {
                        title: 'Continue',
                        callback: function() {
                            printerCtrl.stop();
							if (Printer.$active.deviceVersion && $filter('majorVersion')(Printer.$active.deviceVersion) < 2) {
								// pre client v2 queuing code
                            	vm.queueItem.status = 'queued';
							}
                            vm.executingCommand = true;

                            return true;
                        }
                    }
                ],
                popup: true
            });
        }

        // exports
        angular.extend(vm, {
            pausePrint: pausePrint,
            resumePrint: resumePrint,
            stopPrint: stopPrint,
			navigate: navigate
        });
    }

    MainController.$inject = [
    'printerCtrl', '$rootScope', '$timeout', 'Printer', 'File', '$notification', 'ngDialog', '$api', '$location', '$filter'
  ];

    angular
        .module('shared.printJobItem', [
      //
    ])
        .directive('printJobItem', printJobItem);
})();
;
// Source: ./src/app/js/shared/printer-controls-fan/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Componenet creating a spinning fan icon.
 */

(function () {
  function printerControlsFan() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'printer-controls-fan/componentTemplate.html',
        scope: {
          size: '=',
          max: '=',
          speed: '='
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController() {
      var vm = this;

      vm.size = vm.size || 0;
      vm.max = vm.max || 0;
      vm.speed = vm.speed || 100;

      // private functions

      // public functions

      // exports
      angular.extend(vm, {
        //
      });
  }


  MainController.$inject = [
    //
  ];

  angular
    .module('shared.printerControlsFan', [
      //
    ])
    .directive('printerControlsFan', printerControlsFan);
})();
;
// Source: ./src/app/js/shared/printer-controls-flow-rate/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Componenet creating a spinning fan icon.
 */

(function () {
  function printerControlsFlowRate() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'printer-controls-flow-rate/componentTemplate.html',
        scope: {
          size: '=',
          max: '=',
          speed: '='
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController($scope) {
      var vm = this;

      vm.size = vm.size || 0;
      vm.max = vm.max || 0;
      vm.speed = vm.speed || 100;

	  $scope.$watch('vm.speed', function() {
		  if (vm.speed == 0) {
		  	vm.duration = '0s'
		  }else {
		  	vm.duration = (1.01 - vm.speed / vm.max) * 2 + 's';
		  }
	  });


      // private functions

      // public functions

      // exports
      angular.extend(vm, {
        //
      });
  }


  MainController.$inject = [
    '$scope'
  ];

  angular
    .module('shared.printerControlsFlowRate', [
      //
    ])
    .directive('printerControlsFlowRate', printerControlsFlowRate);
})();
;
// Source: ./src/app/js/shared/printer-controls-slider/componentDirective.js
(function () {
  function printerControlsSlider() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'printer-controls-slider/componentTemplate.html',
        scope: {
            min: '@',
            max: '@',
            step: '@',
            value: '=',
            prettyMin: '@',
            prettyMax: '@',
            inputField: '@',
			gcode: '=',
			disableInput: '='
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController($scope, $rootScope, printerCtrl) {
      var vm = this;

      vm.min = vm.min || 0;
      vm.max = vm.max || 100;
      vm.step = vm.step || 1;
      vm.value = vm.value || 0;
      vm.inputField = vm.inputField || false;
	  vm.disableInput = vm.disableInput || false;

      // private functions

      // public functions

	  function postTuneGcode(){

		  if (vm.gcode == 'M106 S' && typeof vm.value !== 'undefined' && vm.value != null) {
		  	var finalValue = vm.value * 255 / 100 || 0;
			printerCtrl.tune(vm.gcode + finalValue);
		  }
		  else if(vm.gcode && typeof vm.value !== 'undefined' && vm.value != null) {
		  	printerCtrl.tune(vm.gcode + vm.value)
		  }

		  $rootScope.$emit("formide.printer:tune",true);
	  }

      // exports
      angular.extend(vm, {
	      postTuneGcode: postTuneGcode,
		  printerCtrl: printerCtrl
      });
  }


  MainController.$inject = [
      '$scope', '$rootScope', 'printerCtrl'
  ];

  angular
    .module('shared.printerControlsSlider', [
      //
    ])
    .directive('printerControlsSlider', printerControlsSlider);
})();
;
// Source: ./src/app/js/shared/printer-controls-speed/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Componenet creating a spinning fan icon.
 */

(function () {
  function printerControlsSpeed() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'printer-controls-speed/componentTemplate.html',
        scope: {
          size: '=',
          max: '=',
          speed: '='
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController($scope) {
      var vm = this;

      vm.size = vm.size || 0;
      vm.max = vm.max || 0;
	  vm.speed = vm.speed || 100;

	  $scope.$watch('vm.speed', function() {
		  if (vm.speed == 0) {
		  	vm.duration = '0s'
		  }else {
		  	vm.duration = (1.01 - vm.speed / vm.max) * 1.5 + 's';
		  }
	  });

      // private functions

      // public functions

      // exports
      angular.extend(vm, {
        //
      });
  }


  MainController.$inject = [
    '$scope'
  ];

  angular
    .module('shared.printerControlsSpeed', [
      //
    ])
    .directive('printerControlsSpeed', printerControlsSpeed);
})();
;
// Source: ./src/app/js/shared/printer-controls/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a element with printer controls for controlling a 3D printer.
 */

(function () {
    function printerControls() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'printer-controls/componentTemplate.html',
            scope: {
                extruders: '=',
				disableInput: '='
            },
            transclude: true,
            controller: MainController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }

    function MainController(printerCtrl, $timeout) {
        var vm = this;

		vm.extruders = vm.extruders || {};
		vm.disableInput = vm.disableInput || false;

		vm.extruderWidth = {'width': (vm.extruders.length * 65) + 'px'};

        // private functions
        function opacity(value, array, range) {
            value = Math.abs(value);

            var length = (array.length - 1);

            var step = (range[1] - range[0]) / length;

            return range[0] + (step * (length - array.indexOf(value)));
        }

        // public functions
        var axis = [
            {
                key: 'x',
                orientation: 'vertical',
                positive: [100, 10, 1, .1],
                negative: [-.1, -1, -10, -100]
		    },
            {
                key: 'y',
                orientation: 'horizontal',
                positive: [100, 10, 1, .1],
                negative: [-.1, -1, -10, -100]
		    },
            {
                key: 'z',
                orientation: 'vertical',
                positive: [100, 10, 1, .1],
                negative: [-.1, -1, -10, -100]
		    }
	    ];

        var extruder_settings = {
            orientation: 'vertical',
            extrude: [100, 10, 1, .1],
			retract: [100, 10, 1, .1]
        };

        for (extruder in vm.extruders) {
            for (var attrname in extruder_settings) {
                vm.extruders[extruder][attrname] = extruder_settings[
                    attrname];
            }
        }

        function setOpacity(value, array) {
            return opacity(value, array, [0.25, 1]);
        }

        function move(key, item) {
            vm.printerCtrl.move(key, parseFloat(item));
        }

        // exports
        angular.extend(vm, {
            axis: axis,
            move: move,
            setOpacity: setOpacity,
            printerCtrl: printerCtrl,
            extruder_settings: extruder_settings
        });
    }


    MainController.$inject = [
    'printerCtrl', '$timeout'
  ];

    angular
        .module('shared.printerControls', [
      //
    ])
        .directive('printerControls', printerControls);
})();
;
// Source: ./src/app/js/shared/printer-fan/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Componenet creating a spinning fan icon.
 */

(function () {
  function printerFan() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'printer-fan/componentTemplate.html',
        scope: {
          size: '=',
          max: '=',
          speed: '='
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController() {
      var vm = this;

      vm.size = vm.size || 0;
      vm.max = vm.max || 0;
      vm.speed = vm.speed || 100;

      // private functions

      // public functions

      // exports
      angular.extend(vm, {
        //
      });
  }


  MainController.$inject = [
    //
  ];

  angular
    .module('shared.printerFan', [
      //
    ])
    .directive('printerFan', printerFan);
})();
;
// Source: ./src/app/js/shared/printer-list-item/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a printer list item.
 */

(function () {
  function printerListItem() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'printer-list-item/componentTemplate.html',
        scope: {
            printer: '=',
			type: '@'
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController($timeout, $location, $rootScope, Printer, printerCtrl, $notification) {
      var vm = this;

      vm.printer.status = vm.printer.status || 'offline';

	  vm.showWebcam = false;

      // public functions

	  function navigate(route){
		  $location.path(route);
	  }

	  function selectPrinter(){
		  if (vm.type != 'selected') {
			  Printer.$setActive({port: vm.printer.port})
		  }
	  }


	  function pausePrint() {
		  printerCtrl.pause();
		  vm.executingCommand = true;
	  }

	  function resumePrint() {
		  printerCtrl.resume();
		  vm.executingCommand = true;
	  }

	  function stopPrint() {
		  $notification.addNotification({
			  title: 'Stop Print',
			  message: 'Do you really want to stop this print?',
			  type: 'info',
			  duration: -1,
			  actions: [
				  {
					  title: 'Cancel',
					  callback: function() {
						  console.log('abort!');
						  return true;
					  }
				  },
				  {
					  title: 'Stop Print',
					  callback: function() {
						  printerCtrl.stop();
						  vm.executingCommand = true;

						  return true;
					  }
				  }
			  ],
			  popup: true
		  });
	  }

      // exports
      angular.extend(vm, {
		pausePrint: pausePrint,
		resumePrint: resumePrint,
		stopPrint: stopPrint,
		navigate: navigate,
		selectPrinter: selectPrinter
      });
  }


  MainController.$inject = [
    '$timeout', '$location', '$rootScope', 'Printer', 'printerCtrl', '$notification'
  ];

  angular
    .module('shared.printerListItem', [
      //
    ])
    .directive('printerListItem', printerListItem);
})();
;
// Source: ./src/app/js/shared/printer-list/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a printer list.
 */

(function () {
  function printerList() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'printer-list/componentTemplate.html',
        scope: {
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController() {
      var vm = this;

      // private functions

      // public functions

      // exports
      angular.extend(vm, {
        //
      });
  }


  MainController.$inject = [
    //
  ];

  angular
    .module('shared.printerList', [
      //
    ])
    .directive('printerList', printerList);
})();
;
// Source: ./src/app/js/shared/printer-speed/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Componenet creating a spinning fan icon.
 */

(function () {
  function printerSpeed() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'printer-speed/componentTemplate.html',
        scope: {
          size: '=',
          max: '=',
          speed: '='
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController($scope) {
      var vm = this;

      vm.size = vm.size || 0;
      vm.max = vm.max || 0;
      vm.speed = vm.speed || Math.round(vm.max / 2);

	  $scope.$watch('vm.speed', function() {
		  if (vm.speed == 0) {
		  	vm.duration = '0s'
		  }else {
		  	vm.duration = (1.01 - vm.speed / vm.max) * 2 + 's';
		  }
	  });

      // private functions

      // public functions

      // exports
      angular.extend(vm, {
        //
      });
  }


  MainController.$inject = [
    '$scope'
  ];

  angular
    .module('shared.printerSpeed', [
      //
    ])
    .directive('printerSpeed', printerSpeed);
})();
;
// Source: ./src/app/js/shared/progress-bar/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a progress bar based on a current and a max value.
 */

(function () {
  function progressBar() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'progress-bar/componentTemplate.html',
        scope: {
            valuenow: '@',
            valuemax: '@'
        },
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController() {
      var vm = this;

      vm.valuemax = vm.valuemax || 100;

      // private functions

      // public functions

      // exports
      angular.extend(vm, {
        //
      });
  }


  MainController.$inject = [
    //
  ];

  angular
    .module('shared.progressBar', [
      //
    ])
    .directive('progressBar', progressBar);
})();
;
// Source: ./src/app/js/shared/selection-block/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a block that can be selected.
 */

(function () {
  function selectionBlock() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'selection-block/componentTemplate.html',
        scope: {
            currentItem: '@',
            ngModel: '='
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController() {
      var vm = this;

      // private functions

      // public functions
      vm.item = JSON.parse(vm.currentItem);

    //   vm.ngModel =

      // exports
      angular.extend(vm, {
        //
      });
  }


  MainController.$inject = [
    //
  ];

  angular
    .module('shared.selectionBlock', [
      //
    ])
    .directive('selectionBlock', selectionBlock);
})();
;
// Source: ./src/app/js/shared/selection-list/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a selection list.
 */

(function () {
  function selectionList() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'selection-list/componentTemplate.html',
        scope: {
            extruders: '=',
            ngModel : '=',
            name: '@'
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController() {
      var vm = this;

      // private functions

      // public functions

      // exports
      angular.extend(vm, {
        //extruders: extruders
      });
  }


  MainController.$inject = [
    //
  ];

  angular
    .module('shared.selectionList', [
      //
    ])
    .directive('selectionList', selectionList);
})();
;
// Source: ./src/app/js/shared/status-icon/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Componenet creating a spinning fan icon.
 */

(function () {
  function statusIcon() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'status-icon/componentTemplate.html',
        scope: {
          status: '='
        },
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController() {
      var vm = this;

    //   vm.size = vm.size || (24 + 'px');
      if(vm.status !== undefined) {
          vm.status = vm.status.toLowerCase();
      }
      else {
          vm.status = 'offline';
      }

      // private functions

      // public functions

      // exports
      angular.extend(vm, {
        //
      });
  }


  MainController.$inject = [
    //
  ];

  angular
    .module('shared.statusIcon', [
      //
    ])
    .directive('statusIcon', statusIcon);
})();
;
// Source: ./src/app/js/shared/temperature-bar/componentDirective.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Similar to progress-bar, creates a temperature bar based on a current-, target- and max value.
 */

(function () {
  function temperatureBar() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'temperature-bar/componentTemplate.html',
        scope: {
            valuenow: '@',
            valuetarget: '@',
            valuemax: '@'
        },
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }

  function MainController() {
      var vm = this;

      // private functions

      // exports
      angular.extend(vm, {
        //
      });
  }


  MainController.$inject = [
    //
  ];

  angular
    .module('shared.temperatureBar', [
      //
    ])
    .directive('temperatureBar', temperatureBar);
})();
;
// Source: ./src/app/js/components/auth-login/componentController.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
function MainController ($timeout, $auth, $location, $rootScope, $api) {
		var vm = this;

		if (window.localStorage.getItem("formide:setup")) {
			vm.setup = true;
			window.localStorage.removeItem("formide:setup")
		}

        function submitLoginForm() {
			vm.errorMessage = '';

			if(!vm.user || !vm.user.username || !vm.user.password){
				console.log('Login error');
				vm.errorMessage = 'Incorrect Login';

			}else{
				vm.loading = true;

	      		$auth.login(vm.user.username, vm.user.password)
				.then(function(result) {

					vm.loading = false;
					window.localStorage.setItem('formide.auth:token', result.token);
					$timeout(function() {
						window.location.href = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
						$rootScope.setSidebarShow();
					}, 1000);

	            },
	            function (e) {
					vm.loading = false;
					console.log('Login error');
					vm.errorMessage = 'Incorrect Login';
	            });
			}
      	};

		// exports
		angular.extend(vm, {
			submitLoginForm: submitLoginForm
		});
	}

	MainController.$inject = [
		'$timeout', '$auth', '$location', '$rootScope', '$api'
	];

	angular
	  .module('components.authLogin', [
	  	//
	  ])
	  .controller('AuthLoginController', MainController);
})();
;
// Source: ./src/app/js/components/connect/componentController.js

 /*
  *	This code was created for Printr B.V. It is open source under the formide-client package.
  *	Copyright (c) 2017, All rights reserved, http://printr.nl
  */

 (function () {

   function MainController($api, $auth, $location, $timeout, $notification) {

 	  var vm = this;

	  getNetworkStatus();

	  function getNetworkStatus() {
		  $api.get('/network/status')
		  .then(function(status) {
			  if (status.isConnected && status.publicIp) {
				  getConnectCode();
			  }
			  else if (status.isConnected) {
			  	  vm.connectSetupStep = 'network-no-internet';
			  }
			  else if (status.isHotspot) {
			  	  getSSIDs();
			  }
			  else {
				  vm.connectSetupStep = 'custom-device-wifi';
			  }
		  });
	  }


	  function getSSIDs() {
		  $api.get('/network/list')
		  .then(function(response) {
			  vm.ssids = response;
			  vm.connectSetupStep = 'device-wifi';
		  }, function(err){
			  if (err.statusCode == 501) {
				  vm.connectSetupStep = 'custom-device-wifi';
			  }
		  });
	  }


	  function connectWifi() {
		  vm.connecting = true;
		  $api.post('/network/connect', {ssid: vm.wifi.ssid, password: vm.wifi.password})
		  .then(function(response) {
			  $notification.addNotification({
				  title: 'Settings Saved',
				  message: 'Wi-Fi Settings Saved',
				  channel: 'system',
				  type: 'success'
			  });
			  vm.connecting = false;
			  getNetworkStatus();
		  }, function(e) {
			  vm.wifiError = e.message;
			  vm.connecting = false;
		  });
	  }


	  function getConnectCode(){
		  vm.connectSetupStep = 'connect-formide';

		  vm.connecting = true;
		  vm.connectingError = false;

		  $api
		  .get('/system/cloud/code')
		  .then(function(response) {

			  vm.connecting = false;
			  vm.connectURL = response.redirectURI;

		  }, function(e){
			  vm.connecting = false;
			  vm.connectingError = e.message;
		  });
	  }


	  function connectToFormide(){

		  vm.connecting = true;
		  vm.connectingError = false;
		  window.location = vm.connectURL;

		  $timeout(function () {
			  window.stop();
			  vm.connecting = false;
			  vm.connectingError = "Ensure that you are connected to the Internet";
			  vm.connectURL = response.redirectURI;
		  }, 15000);
	  }


 	  // exports
 	  angular.extend(vm, {
		  connectToFormide: connectToFormide,
		  connectWifi: connectWifi
 	  });
   }

   MainController.$inject = [
	   '$api', '$auth', '$location', '$timeout', '$notification'
   ];


   angular
     .module('components.connect', [
       //
     ])
     .controller('ConnectController', MainController)
 })();
;
// Source: ./src/app/js/components/control-print/componentController.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

 (function () {

   function MainController($rootScope, $api, $auth, printerCtrl, Printer, $socket, $interval, $timeout, $location, $document) {

 	  var vm = this;

 	  vm.targetTempExt = [];

 	  vm.tuneGcode = {
 		  printSpeed: 'M220 S',
 		  flowRate: 	'M221 S',
 		  fanSpeed:	'M106 S',
 		  extTemp:	'M104 S',
 		  bedTemp:	'M140 S'
 	  }

 	  var updateTuneValues = true;

 	  // private functions

 	  Printer.resource.$promise.then(function (data) {
 		  vm.maxExtTemp = Printer.$active.maxTemperature || 450;
 		  vm.maxBedTemp = Printer.$active.maxBedTemperature || 100;
 	  });

 	  var printControls_printerUpdated = $rootScope.$on("formide.printer:updated", function () {
 		  vm.maxExtTemp = Printer.$active.maxTemperature || 450;
 		  vm.maxBedTemp = Printer.$active.maxBedTemperature || 100;
 	  });

 	  // set tune values from status
 	  $socket.socket.on('printer.status', function (resource) {
 		  if (updateTuneValues) {
 			  vm.printSpeed = Printer.$active.speedMultiplier;
 			  vm.flowRate = 	Printer.$active.flowRate;
 			  vm.fanSpeed = 	Printer.$active.fanSpeed;
 		  }
 	  });

 	  var timer;

 	  // if tune values are updated, wait 10 seconds before allowing updating from status to continue
 	  var printControls_printerTune = $rootScope.$on('formide.printer:tune', function () {
 		  updateTuneValues = false;
 		  $timeout.cancel(timer);
 		  timer = $timeout(function () {updateTuneValues = true}, 10000);
 	  });

 	  // public functions

 	  function navigate(route){
 		  $location.path(route);
 	  }

 	  function runConsoleCommands() {

		  if (vm.customCommands[vm.customCommands.length - 1].toUpperCase() == 'CLEAR') {
			  // clear the console
			  vm.customCommands = [];
		  }
		  else {
			  // send all commands since the last '-> SENT'
			  var i = vm.customCommands.lastIndexOf('-> SENT') + 1;
	 		  for(i; i < vm.customCommands.length; i++) {
				  var command = vm.customCommands[i].toUpperCase();
	 			  printerCtrl.gcode(command);
	 		  }

			  // add '-> SENT' feedback
			  var temp = angular.copy(vm.customCommands);
			  temp.push('-> SENT');
			  temp.push('');
			  vm.customCommands = temp;
		  }

		  // scroll textarea up
		  var element = angular.element($document[0].querySelector('#console-textarea'));
		  $timeout(function(){
			  element[0].scrollTop = element[0].scrollHeight;
		  });
 	  }

 	  function runExtruderCommand(index){

 		  if ( checkValue(vm.targetTempExt[index]) && (Printer.$active.status == 'printing' || Printer.$active.status == 'paused' || Printer.$active.status == 'heating') ) {
 			  if (index > 0) {
 				  printerCtrl.tune(vm.tuneGcode.extTemp + vm.targetTempExt[index] + ' T'+index);
 			  }
 			  else {
 				  printerCtrl.tune(vm.tuneGcode.extTemp + vm.targetTempExt[index]);
 			  }
 		  }
 		  else if (checkValue(vm.targetTempExt[index])) {
 			  printerCtrl.extruder(index).temperature(vm.targetTempExt[index]);
 		  }
 	  }

 	  function runBedCommand(){

 		  if (checkValue(vm.targetTempBed) && (Printer.$active.status == 'printing' || Printer.$active.status == 'paused' || Printer.$active.status == 'heating') ) {
 			  printerCtrl.tune(vm.tuneGcode.bedTemp + vm.targetTempBed);
 		  }
 		  else if (checkValue(vm.targetTempBed)) {
 			  printerCtrl.bed.temperature(vm.targetTempBed);
 		  }
 	  }

 	  function checkValue(value){
 		  if (typeof value !== 'undefined' && value != null) {
 			  return true;
 		  }else {
 			  return false;
 		  }
 	  }


 	  var printControls_clearUp = $rootScope.$on('$locationChangeSuccess', function(event){
 		  if ($location.path() !== '/print/controls') {
 			  printControls_printerUpdated();
 			  printControls_printerTune();
 			  printControls_clearUp();
 		  }
 	  })


 	  // exports
 	  angular.extend(vm, {
 		  printerCtrl: printerCtrl,
 		  printer: Printer,
 		  runConsoleCommands: runConsoleCommands,
 		  runExtruderCommand: runExtruderCommand,
 		  runBedCommand: runBedCommand,
 		  checkValue: checkValue,
 		  navigate: navigate
 	  });
   }

   MainController.$inject = [
 	  '$rootScope', '$api', '$auth', 'printerCtrl', 'Printer', '$socket', '$interval', '$timeout', '$location', '$document'
   ];


   angular
     .module('components.controlPrint', [
       //
     ])
     .controller('ControlPrintController', MainController)
 })();
;
// Source: ./src/app/js/components/file-library/componentController.js
/*
*	This code was created for Printr B.V. It is open source under the formide-client package.
*	Copyright (c) 2017, All rights reserved, http://printr.nl
*/

(function () {
function MainController($rootScope, $api, Upload, File, printerCtrl, Printer, $location) {

		var vm = this;

		var access_token = window.localStorage.getItem('formide.auth:token');
		var uploadUrl = window.PATH.api + '/storage';

		File.resource.$promise.then(function (devices) {
			File.resource.$load()
			.then(function (response) {
				vm.files = File.resource;
			});
		});

		function navigate(route){
			$location.path(route);
		}


		function print(file) {
			printerCtrl.print(file);
			navigate('/monitor')
		}

		function upload(files){

			if(files && files.length > 0 && !$rootScope.fileUploading) {

				for (var i = 0; i < files.length; i++) {
					var file = files[i];

					var data = {
						headers: {
							"Authorization": 'Bearer ' + access_token
						},
						url: uploadUrl,
						file: file
					}

					Upload.upload(data)
					.then(function (response) {
						File.resource.$add(response.data.file);
					});
				}

			}
		}


		function removeMultiple(files) {
			for (var i = 0; i < files.length; i++) {
				var file = files[i];
				File.resource.$remove(file);
			}
		}




		// exports
		angular.extend(vm, {
			upload: upload,
			removeMultiple: removeMultiple,
			print: print,
			printer: Printer
		});
	}

	MainController.$inject = [
		'$rootScope', '$api', 'Upload', 'File', 'printerCtrl', 'Printer', '$location'
	];

	angular
	.module('components.fileLibrary', [
		//
	])
	.controller('FileLibraryController', MainController)
})();
;
// Source: ./src/app/js/components/manage-device-update/componentController.js

(function () {

	function MainController ($auth, $api, $routeParams, $notification, $socket, $interval, $location) {
		var vm = this;

		vm.device = null;
		vm.deviceUpdateStatus = {};
		vm.deviceUpdateNeeded = {};

		vm.updateResponse = '';

		// store the interval promise in this variable
	   var promise;

	   // starts the interval
	   var start = function() {
		 // stops any running interval to avoid two intervals running at the same time
		 stop();

		 promise = $interval(function() {
			if(vm.valuenow < 99) {
				 vm.valuenow++;
			}
		 }, 6000); //10 minutes in total
	   };

	   // stops the interval
	   var stop = function() {
		 $interval.cancel(promise);
	   };

	   // starting the interval by default

		vm.valuenow = 0;

		// public functions

		// check latest update status
		function getUpdateStatus() {
			$api.get('/update/status')
			.then(function(data, status, headers, config) {
				vm.deviceUpdateStatus = data;
			});
		}

		// check if update is needed
		function getUpdateNeeded() {
			$api.get('/update/check')
			.then(function(data, status, headers, config) {
				vm.deviceUpdateNeeded = data;
			}, function(err){
				vm.deviceUpdateNeeded = err;
			});
		}

		vm.updating = false;

		// do an actual update
		function doUpdate() {
			vm.updating = true;
			start();

			$api.post('/update/do')
			.then(function(data, status, headers, config) {
				vm.updateResponse = data;
			});
		}

		$socket.socket.on('device.connected', function (data) {

		});

		function init() {
			getUpdateStatus();
			getUpdateNeeded();
		}

		vm.updated = false;

	    $socket.socket.on('device.connected', function(data) {
			if(data.device == $routeParams.deviceId) {
				stop();
				// vm.updating = false;

				vm.valuenow = 100;

				vm.updating = true;
				vm.updated = true;

				init();
			}
	    });

		// Get device when component loads
		init();

		// exports
		angular.extend(vm, {
			doUpdate: doUpdate,
			getUpdateNeeded: getUpdateNeeded
		});
	}

	MainController.$inject = [
		'$auth',
		'$api',
		'$routeParams',
		'$notification',
		'$socket',
		'$interval',
		'$location'
	];

	angular
	  .module('components.manageDeviceUpdate', [
	  	//
	  ])
	  .controller('ManageDeviceUpdateController', MainController)
})();
;
// Source: ./src/app/js/components/manage-device/componentController.js

(function () {

  function UpdateController ($api, $rootScope, $scope, $notification) {
	  var vm = this;

	  function submitForm(user) {
		  console.log('user', user);
		  $api.users.update(user)
		  .then(function(response) {
			  $notification.addNotification({
				  title: 'Settings Saved',
				  message: 'Device Settings Saved',
				  channel: 'system',
				  type: 'success'
			  });

			  $rootScope.$emit("modal.user.saved", true);
			  return true;
		  }, function(e) {
			  $notification.addNotification({
				  title: 'Error',
				  message: e.message,
				  channel: 'system',
				  type: 'error'
			  });
			  $rootScope.$emit("modal.user.saved", true);
		  });
	  }

	  angular.extend(vm, {
		  submitForm: submitForm,
		  user: $scope.ngDialogData
	  });
  }

  function CreateController ($api, $rootScope, $scope, $notification) {
	  var vm = this;

	  var user = {};

	  function submitForm(user) {
		  $api.users.create(user)
		  .then(function(data, status, headers, config) {
			  $rootScope.$emit("modal.user.saved", true);
			  return true;
		  });
	  }

	  angular.extend(vm, {
		  submitForm: submitForm,
		  user: user
	  });
  }


  function MainController ($auth, $api, $rootScope, ngDialog, $notification, $timeout, $location) {
	  var vm = this;

	  vm.wifi = {};
	  vm.chart = {};
	  vm.storage = {};
	  vm.network = {};

	  vm.chart.options = {
		  cutoutPercentage: 80,
		  tooltips: {enabled: false},
		  animation: {animateRotate: false},
		  responsive: true,
		  maintainAspectRatio: false,
	  }

	  var color1 = "#615892";
	  var color2 = "#e4e4e4";

	  vm.chart.datasetOverride = {
		  backgroundColor: [
			color1, color2
		  ],
		  hoverBackgroundColor: [
			color1, color2
		  ],
		  borderColor: [
			'#FFF', '#FFF'
		  ],
		  hoverBorderColor: [
		  	'#FFF', '#FFF'
		  ],
		  borderWidth: [
			2, 2
		  ],
		  hoverBorderWidth: [
			2, 2
		  ]
	  };

	  $api.get('/system/info')
	  .then(function(response) {
		  vm.deviceType = response.deviceType;
	  });

	  // private functions
	  function getUsers() {
		  $api.users.query()
		  .then(function(response) {
			  vm.users = response;
		  });
	  }

	  function getDiskspace() {
		  $api.get('/storage/diskspace')
		  .then(function(response) {
			  vm.diskspace = response;

			  vm.storage.percentageUsed = (((vm.diskspace.total - vm.diskspace.free) / vm.diskspace.total) * 100).toFixed(2);

			  vm.storage.percentageLeft = ((vm.diskspace.free / vm.diskspace.total) * 100).toFixed(2);

			  vm.storage.percentageUsedRnd = Math.round(vm.storage.percentageUsed);

			  vm.chart.labels = ["", ""];
			  vm.chart.data = [vm.storage.percentageUsed, vm.storage.percentageLeft];
		  });
	  }

	  function getNetwork() {
		  $api.get('/network/status')
		  .then(function(response) {
			  vm.network = response;
			  vm.wifi.ssid = vm.network.network;

			  if (!vm.network.ip) {
				  setTimeout(function () {
					  getNetwork();
				  }, 2000);
			  }
		  });
	  }

	  function getSSIDs() {
		  $api.get('/network/list')
		  .then(function(response) {
			  vm.ssids = response;
		  });
	  }


	  // public functions

	  function setHotspot() {
		  var localIp = vm.network.ip;

		  if (!localIp && vm.setHotspot) {
			  // if turned off the hotspot and no IP avalible
			  $notification.addNotification({
				  title: 'Hotspot Reset',
				  message: 'You cannot turn on the device hotspot if it is not connected to a network',
				  channel: 'system',
				  duration: -1,
				  type: 'error'
			  });
		  }else if (vm.setHotspot) {
			  // if turning off the hotspot
			  $notification.addNotification({
					title: 'Hotspot Reset',
					message: 'Disabling the device hotspot will cause it to no longer emit the Wi-Fi hotspot. Once disabled you will need to connect to it via the device IP on port 8080.',
					type: 'error',
					duration: -1,
					actions: [
						{
							title: 'Cancel',
							callback: function() {
								console.log('abort!');
								return true;
							}
						},
						{
							title: 'Continue',
							callback: function() {
								$api.post('/network/hotspot', {enabled: vm.network.isHotspot})
								.then(function(response) {
								  vm.setHotspot = false;
				  				  $notification.addNotification({
				  					  title: 'Hotspot Disabled',
				  					  message: 'Device will no longer emit the Wi-Fi hotspot',
				  					  channel: 'system',
				  					  type: 'success'
				  				  });

	  							  if ($location.$$host == '10.20.30.40') {
  									//navigate to the deive ip
  									window.location = 'http://'+localIp+':8080';
  									$timeout(function () {
  										window.stop();
  									}, 15000)

	  							  }
				  			    });

								return true;
							}
						}
					],
					popup: true
				});
		  }else {
			  // if turning on the hotspot
			  $api.post('/network/hotspot', {enabled: vm.network.isHotspot})
			  .then(function(response) {
				  vm.setHotspot = true;
				  $notification.addNotification({
					  title: 'Hotspot Enabled',
					  message: 'Device will now emit the Wi-Fi hotspot',
					  channel: 'system',
					  type: 'success'
				  });
			  });
		  }
	  }

	  function resetWifi() {

		  $api.post('/network/reset')
		  .then(function(response) {
			  $notification.addNotification({
				  title: 'Settings Reset',
				  message: 'Wi-Fi settings reset',
				  channel: 'system',
				  type: 'success'
			  });

			  getNetwork();
		  }, function(e) {
			  $notification.addNotification({
				  title: e.statusName,
				  message: e.message,
				  channel: 'system',
				  type: 'error'
			  });
		  });

	  }

	  function connectWifi() {
		  vm.connecting = true;

		  $api.post('/network/connect', {ssid: vm.wifi.ssid, password: vm.wifi.password})
		  .then(function(response) {
			  $notification.addNotification({
				  title: 'Settings Saved',
				  message: 'Wi-Fi Settings Saved',
				  channel: 'system',
				  type: 'success'
			  });
			  vm.connecting = false;
			  getNetwork();

		  }, function(e) {
			  vm.connecting = false;
			  getNetwork();

			  $timeout(function () {
				  if (!vm.network.ip) {
					  $notification.addNotification({
						  title: e.statusName,
						  message: e.message,
						  channel: 'system',
						  type: 'error'
					  });
				  }
			  }, 5000);
		  });
	  }

	  function updateModal(user) {
		  ngDialog.open({
			  template: 'settingsModal',
			  controller: 'ModalUsersUpdateController',
			  controllerAs: 'modal',
			  className: 'ngdialog-connect',
			  data: user
		  });
	  };

	  function createModal() {
		  ngDialog.open({
			  template: 'settingsModal',
			  controller: 'ModalUsersCreateController',
			  className: 'ngdialog-connect',
			  controllerAs: 'modal'
		  });
	  };

	  function deleteUser(user) {

		  $notification.addNotification({
			title: 'Delete ' + user.email,
			message: 'Are you sure?',
			type: 'error',
			duration: -1,
			actions: [
				{
					title: 'Cancel',
					callback: function() {
						console.log('abort!');
						return true;
					}
				},
				{
					title: 'Confirm',
					callback: function() {
						$api.users.delete({id: user.id})
						  .then(function(response) {
							  init();
						  }, function(e) {
							  $notification.addNotification({
								  title: e.statusName,
								  message: e.message,
								  channel: 'system',
								  type: 'error'
							  });
						  });
						return true;
					}
				}
			],
			popup: true
		});
	  }

	  var manageDevice_userSaved = $rootScope.$on("modal.user.saved", function (event, data) {
		  init();
		  event.stopPropagation();
	  });

	  function init() {
		  getUsers();
		  getDiskspace();
		  getSSIDs();
		  getNetwork();
	  }

	  init();

	  var manageDevice_clearUp = $rootScope.$on('$locationChangeSuccess', function(event){
		  if ($location.path() !== '/manage/device') {
			  manageDevice_userSaved();
			  manageDevice_clearUp();
		  }
	  })

	  // exports
	  angular.extend(vm, {
		  getUsers: getUsers,
		  updateModal: updateModal,
		  createModal: createModal,
		  deleteUser: deleteUser,
		  connectWifi: connectWifi,
		  resetWifi: resetWifi,
		  setHotspot: setHotspot
	  });
  }

  MainController.$inject = [
	  '$auth', '$api', '$rootScope', 'ngDialog', '$notification', '$timeout', '$location'
  ];

  UpdateController.$inject = [
	  '$api', '$rootScope', '$scope', '$notification'
  ];

  CreateController.$inject = [
	  '$api', '$rootScope', '$notification'
  ];

  angular
    .module('components.manageDevice', [
      //
    ])
    .controller('ManageDeviceController', MainController)
	.controller('ModalUsersUpdateController', UpdateController)
	.controller('ModalUsersCreateController', CreateController);
})();
;
// Source: ./src/app/js/components/manage/componentController.js

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {
function MainController($router, $routeParams, $timeout, $location, $auth) {
		var vm = this;

		// private functions

		try {
			if ($routeParams.childRoute === undefined) {
				$timeout(function () {
					$location.path('manage/device');
				});
			}
		} catch (e) {

		}


		// public functions

		function navigate(route){
			$location.path(route);
		}

		// exports
		angular.extend(vm, {
			routeConfig: MainController.$routeConfig,
			navigate: navigate
		});
	}

	MainController.$inject = [
		'$router', '$routeParams', '$timeout', '$location', '$auth'
	];

	MainController.$routeConfig = [
		{
			  path: '/',
			  redirectTo: '/'
		},
		{
			  path: '/device',
			  parent: '/manage',
			  component: {
				  subView: "manageDevice"
			  },
			  as: 'manageDevice'
		},
		{
			  path: '/device/update',
			  parent: '/manage',
			  component: {
				  subView: "manageDeviceUpdate"
			  },
			  as: 'manageDeviceUpdate'
		}
	];

	angular
		.module('components.manage', [
	  	//
	  ])
		.controller('ManageController', MainController);
})();
;
// Source: ./src/app/js/components/monitor-print/componentController.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

(function () {

  function MainController($rootScope, Printer, $timeout, $socket, $location) {
	  var vm = this;

	  vm.webcamBtn = {
		  title: 'Overlay',
		  action: showFloatingWebcam
	  }

	  $socket.socket.on('printer.status', function (resource) {
		  vm.printSpeed = 	Printer.$active.speedMultiplier;
		  vm.flowRate = 	Printer.$active.flowRate;
		  vm.fanSpeed = 	Printer.$active.fanSpeed;
	  });


	  function navigate(route){
		  $location.path(route);
	  }

	  function showFloatingWebcam(){
		  $rootScope.floatingWebcam = !$rootScope.floatingWebcam;

		  if ($rootScope.floatingWebcam) {

			  var width = '325';
			  var height = '235';

			  var webcamPosition = JSON.parse(window.localStorage.getItem('formide.webcam:position'));

			  if (webcamPosition) {

				  var x = webcamPosition.x;
				  var y = webcamPosition.y;

				  var maxX = window.innerWidth;
				  var maxY = window.innerHeight;

				  if (x < 0) x = 0;
				  if (x > maxX - width) x = maxX - width;
				  if (y < 0) y = 0;
				  if (y > maxY - height) y = maxY - height;

				  $rootScope.floatingWebcamPosition = {
					  'top': y + 'px',
					  'left': x + 'px',
					  'width': width + 'px',
					  'height': height + 'px'
				  }

			  }else {
				  $rootScope.floatingWebcamPosition = {
					  'width': width + 'px',
					  'height': height + 'px'
				  }

			  }
		  }
	  }

	  // exports
	  angular.extend(vm, {
		  printer: Printer
	  });
  }

  MainController.$inject = [
	  '$rootScope', 'Printer', '$timeout', '$socket', '$location'
  ];


  angular
    .module('components.monitorPrint', [
      //
    ])
    .controller('MonitorPrintController', MainController)
})();
;
// Source: ./src/app/js/app.js
/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

function foundPrinter(resource, data) {
	for (var i in resource) {
		var printer = resource[i];

		if (printer.port === data.port) return true;
	}

	return false;
}

(function () {

	var logoutTitle;
	var env = null;

	if (!localStorage.getItem('formide:env')) {
		getEnv(function(env) {
			setEnv(env);
		});
	}
	else {
		// try to load env from local storage, otherwise call again
		try {
			env = localStorage.getItem('formide:env');
			setEnv(env);
			getEnv();
		}
		catch (e) {
			getEnv(function(env) {
				setEnv(env);
			});
		}
	}

	function getEnv(callback) {
		httpGetAsync(window.PATH.root + '/api/env', function(envResponse) {
			localStorage.setItem('formide:env', envResponse);

			if (callback && typeof(callback) == "function"){
				return callback(envResponse);
			}
		});
	}


	function setEnv(response) {
		try {
			var response = JSON.parse(response);
		} catch (e) {
			var response = {};
			console.error(e);
		}

		window.ENV.name = response.name || 'local-interface';
		window.ENV.version = response.version || '0.0.0';
		window.ENV.type = response.environment || 'development';
		window.ENV.theme = response.theme || 'formide';

		window.PATH.root   = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;

		window.PATH.api    = window.location.protocol + '//' + window.location.hostname + ':1337/api';
		window.PATH.socket = window.location.protocol + '//' + window.location.hostname + ':1337';
		window.PATH.images = window.location.protocol + '//' + window.location.hostname + ':1337/api/db/files';

		logoutTitle = 'Logout';

		angular.element(document).ready(function () {
			angular.bootstrap(document, ['app']);
			angularLoaded();
		});

		if(!localStorage.getItem('formide.viewer:settings')){

			var colors = [
				{
					r: 70,
					g: 97,
					b: 230
				},
				{
					r: 203,
					g: 70,
					b: 230
				},
				{
					r: 230,
					g: 70,
					b: 97
				},
				{
					r: 230,
					g: 203,
					b: 70
				},
				{
					r: 97,
					g: 230,
					b: 70
				},
				{
					r: 70,
					g: 230,
					b: 203
				},
				{
					r: 114,
					g: 115,
					b: 128
				},
				{
					r: 56,
					g: 58,
					b: 81
				}
			];

			var settings = {};

			settings.defaultModelColor = colors[
				Math.floor(Math.random() *
					colors.length)];

			localStorage.setItem('formide.viewer:settings', JSON.stringify(settings));
		}

	}

	function MainController($scope, $rootScope, $router, $location, $api, $http,
		$socket, $notification, ngDialog, $timeout, Printer,
		Upload, File, $routeParams, $interval, $window) {
		var vm = this;

		var device_setup = $location.search().setup;
		if (device_setup) {
			window.localStorage.setItem('formide:setup', device_setup);
			$location.search('setup', null);
		}

		vm.setupLocation = window.PATH.setup;

		vm.unknownPrinter = false;
		vm.loaded = false;

		vm.theme = window.ENV.theme;

		$timeout(function () {
			vm.loaded = true;
		}, 200);

		$rootScope.bodyNoScroll = false;

		$rootScope.floatingWebcam = false;

		$rootScope.pageOffsetHeight = 0;

		$rootScope.sidebar = {
			width: 340,
			controller: 'SidebarController',
			template: 'sidebar/componentTemplate.html'
		};

		$rootScope.fileUploading = false;

		$scope.$watch(function () {
			return vm.droppedFiles;
		}, function (newValue, oldValue) {

			if (newValue && newValue.length > 0 && $location.$$path == "/library" && !$rootScope.fileUploading) {

				var files = newValue;

				var access_token = window.localStorage.getItem('formide.auth:token');
				var uploadUrl = window.PATH.api + '/storage';

				for (var i = 0; i < files.length; i++) {
					var file = files[i];

					var data = {
						headers: {
							"Authorization": 'Bearer ' + access_token
						},
						url: uploadUrl,
						file: file
					}

					Upload.upload(data)
					.then(function (response) {
						File.resource.$add(response.data.file);
					});
				}

			}
		});

		vm.sidebarInvisible = (window.localStorage.getItem("formide.sidebar:invisible") === 'true');

		$rootScope.sidebarInvisible = vm.sidebarInvisible;

		vm.setSidebarInvisible = function () {
			window.scrollTo(0, 0);
			vm.sidebarInvisible = vm.sidebarInvisible ? false : true;
			window.localStorage.setItem("formide.sidebar:invisible", vm.sidebarInvisible);
			$rootScope.$emit('trigger.resize', true);
			$rootScope.sidebarInvisible = vm.sidebarInvisible;
		};

		$rootScope.setSidebarInvisible = vm.setSidebarInvisible;

		vm.setSidebarHide = function () {
			$rootScope.sidebar = false;
		};

		$rootScope.setSidebarHide = vm.setSidebarHide;

		vm.setSidebarShow = function () {
			$rootScope.sidebar = true;
		};

		$rootScope.setSidebarShow = vm.setSidebarShow;

		vm.printers = [];
		vm.activeRoute = 'landing';

		var urlParams = $location.search();

		// exports
		angular.extend(vm, {
			routeConfig: MainController.$routeConfig,
			notifications: $notification.active
		});

		$rootScope.$on("formide.device:updated", function () {
			$socket.reconnect();
		});


		var state, visibilityChange;
		// Set vendor-prefixed
		if (typeof document.hidden !== "undefined") {
			visibilityChange = "visibilitychange";
			state = "visibilityState";
		} else if (typeof document.mozHidden !== "undefined") {
			visibilityChange = "mozvisibilitychange";
			state = "mozVisibilityState";
		} else if (typeof document.msHidden !== "undefined") {
			visibilityChange = "msvisibilitychange";
			state = "msVisibilityState";
		} else if (typeof document.webkitHidden !== "undefined") {
			visibilityChange = "webkitvisibilitychange";
			state = "webkitVisibilityState";
		}

		// Add a listener that checks the page visibility
		document.addEventListener(visibilityChange, function() {
			if (document[state] == 'visible') {
				$socket.reconnect();
			}
		}, false);


		/*
		 * Receive printer error
		 */
		$socket.socket.on('printer.failed', function (data) {
			$notification.addNotification({
			    title: data.title,
			    message: data.message,
				channel: 'printer',
			    type: 'error',
				save: true
			});
		});

		/*
		 * Receive printer connect message
		 */
		$socket.socket.on('printer.connected', function (data) {
			$notification.addNotification({
			    title: 'Printer Connected',
			    message: 'Printer connected to port ' + data.port,
				channel: 'printer',
			    type: 'info'
			});
		});

		/*
		 * Receive printer disconnect message
		 */
		$socket.socket.on('printer.disconnected', function (data) {
			$notification.addNotification({
			    title: 'Printer Disconnected',
			    message: 'Printer disconnected from port ' + data.port,
				channel: 'printer',
			    type: 'info'
			});
		});

		/*
		 * Receive printer finished message
		 */
		$socket.socket.on('printer.finished', function (data) {
			console.log('finished');
			$notification.addNotification({
			    title: data.title,
			    message: data.message,
				channel: 'printer',
			    type: 'success',
				save: true
			});
		});

		/*
		 * Receive printer warning message
		 */
		$socket.socket.on('printer.warning', function (data) {
			$notification.addNotification({
			    title: data.title,
			    message: data.message,
				channel: 'printer',
			    type: 'info'
			});
		});

		/*
		 * Receive printer error message
		 */
		$socket.socket.on('printer.error', function (data) {
			$notification.addNotification({
			    title: data.title,
			    message: data.message,
				channel: 'printer',
			    type: 'error',
				duration: -1,
				popup: true,
				actions: [
					{
						title: 'Cancel',
						callback: function() {
							return true;
						}
					}
				]
			});
		});
	}

	function componentLoaderConfig($componentLoaderProvider) {
		$componentLoaderProvider.setTemplateMapping(function (name) {
			var dashName = dashCase(name);
			return dashName + '/componentView.html';
		});
	}

	componentLoaderConfig.$inject = [
		'$componentLoaderProvider'
	];

	MainController.$inject = [
		'$scope', '$rootScope', '$router', '$location', '$api', '$http',
		'$socket', '$notification', 'ngDialog', '$timeout', 'Printer',
		'Upload', 'File', '$routeParams', '$interval', '$window'
	];

	MainController.$routeConfig = [
		{
			path: '/',
			redirectTo: '/formide'
		},
		{
			path: '/login',
			component: {
				mainView: "authLogin"
			},
			as: 'authLogin'
		},
		{
			path: '/formide',
			nav: {
				name: 'Formide',
				title: 'Formide'
			},
			loggedIn: true,
			component: {
				mainView: "connect"
			},
			as: 'connect'
		},
		{
			path: '/manage',
			nav: {
				name: 'Manage',
				title: 'Manage'
			},
			loggedIn: true,
			component: {
				mainView: "manage"
			},
			as: 'manage'
		},
		{
			path: '/library',
			nav: {
				name: 'Library',
				title: 'Library'
			},
			loggedIn: true,
			component: {
				mainView: "fileLibrary"
			},
			as: 'fileLibrary'
		},
		{
			path: '/monitor',
			nav: {
				name: 'Monitor',
				title: 'Monitor'
			},
			loggedIn: true,
			component: {
				mainView: "monitorPrint"
			},
			as: 'monitorPrint'
		},
		{
			path: '/control',
			nav: {
				name: 'Control',
				title: 'Control'
			},
			loggedIn: true,
			component: {
				mainView: "controlPrint"
			},
			as: 'controlPrint'
		},
	];

	angular
	.module('app', [
		'module.angular',
		'module.vendor',
		'module.filters',
		'module.templateCache',
		'module.services',
		'module.shared',
		'module.core',
		'module.components'
	])
	.config(componentLoaderConfig)
	.controller('AppController', MainController);
})();

(function () { angular.module('templateCache.components', []).run(['$templateCache', function($templateCache) {'use strict';  'use strict';

  $templateCache.put('auth-login/componentView.html',
    "<article class=\"block content content--small\"><div class=localLogin><section class=\"logo logo--large\" ng-if=!authLogin.setup><svg version=1.1 baseprofile=full xmlns=http://www.w3.org/2000/svg viewbox=\"0 0 128 128\" rel=logo><lineargradient id=strokeGradient gradientunits=userSpaceOnUse x1=64 y1=127.8776 x2=64 y2=0.1224><stop offset=0 style=\"stop-color:#2192D2\"><stop offset=1 style=\"stop-color:#5FC6F3\"></lineargradient><path style=fill:none;stroke:#46b1e6;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;shape-rendering:geometric-precision d=\"\n" +
    "\t\t\t   M102.202,59.171c0,0-8.327-11.914-17.334-24.799C74.244,19.174,62.67,2.622,62.67,2.622L33.505,25.107L17.716,91.418l20.031,33.867\n" +
    "\t\t\t   l46.678,0.092c0,0,9.292-9.086,16.739-16.37c4.965-4.856,9.12-8.922,9.12-8.922L102.202,59.171z M62.67,2.622l22.198,31.75\n" +
    "\t\t\t   L77.732,54.84l-23.434,5.772L62.67,2.622z M60.823,74.021l11.906,3.725L63.038,90.75l-9.523-9.059L60.823,74.021z M53.514,81.691\n" +
    "\t\t\t   l-14.556-3.105l15.34-17.974l6.525,13.409L53.514,81.691z M60.823,74.021l-6.525-13.409l23.434-5.772l8.818,30.911l-13.821-8.004\n" +
    "\t\t\t   c-0.092-0.057,0.123,0.039,0,0L60.823,74.021z M33.505,25.107L62.67,2.622l-8.372,57.99l-15.34,17.974L17.716,91.418L33.505,25.107z\n" +
    "\t\t\t    M17.716,91.418l21.242-12.832l14.556,3.105l9.523,9.059l-1.86,18.547l-23.43,15.988L17.716,91.418z M37.747,125.285l23.43-15.988\n" +
    "\t\t\t   l23.248,16.08L37.747,125.285z M84.425,125.378l-23.248-16.08l1.86-18.547l9.691-13.004c0,0,7.225,4.184,13.821,8.004\n" +
    "\t\t\t   c5.524,3.199,10.61,6.146,10.61,6.146l4.005,17.11L84.425,125.378z M97.159,91.897L97.159,91.897l-10.61-6.146L77.732,54.84\n" +
    "\t\t\t   l7.136-20.469l17.334,24.799l8.082,40.922l-9.12,8.915L97.159,91.897z\"></svg><h1>Formide Local</h1></section><div ng-if=authLogin.setup class=figure-container><figure class=onboarding-figure><img class=main-image src=./images/setup/setup_connect.png width=250 height=250 alt=Welcome></figure></div><section><hgroup class=\"u-textCenter u-margin-top-_5\"><h1>Device Login</h1></hgroup><form class=login-fields ng-submit=authLogin.submitLoginForm()><input ng-model=authLogin.user.username class=text-input placeholder=Username> <input type=password ng-model=authLogin.user.password class=text-input placeholder=Password> <input type=submit class=\"btn btn--primary\" value=\"Sign in\"> <span ng-if=authLogin.loading><i class=\"fa fa-2x fa-refresh fa-spin text-base-primary-color u-posAbsolute u-margin-left-1\"></i></span> <span ng-if=!authLogin.loading class=\"u-margin-left-1 text-base-alert-color\">{{ authLogin.errorMessage }}</span></form><section class=infoBox><i class=\"fa fa-info-circle\"></i><p ng-if=authLogin.setup>Log into your device to connect it to Formide. If it is for the first time you can use the following:</p><p ng-if=!authLogin.setup>Note that you are logging into your device locally. If it is for the first time you can use the following:</p><p>Username: <strong>admin@local</strong><br>Password:&nbsp; <strong>admin</strong></p><p>To use the full suite of features visit <a href=https://platform.formide.com><strong>Formide</strong></a></p></section></section></div></article>"
  );


  $templateCache.put('connect/componentView.html',
    "<article id=connect><h3>Connect your Device to Formide</h3><section class=block><div class=layout><div class=\"layout__item u-fit-sm xs-hide\"><div class=figure-container><figure class=onboarding-figure><img class=main-image src=./images/setup/setup_connect.png width=250 height=250 alt=Welcome></figure></div></div><div class=\"layout__item u-fill\"><fieldset class=settings ng-switch=connect.connectSetupStep><section ng-switch-when=device-wifi><ul class=form-fields><li class=u-margin-bottom-1><h3>Select a network to connect to</h3><select class=text-input ng-options=\"ssid.ssid as ssid.ssid for ssid in connect.ssids\" ng-model=connect.wifi.ssid><option value=\"\" disabled selected style=\"display: none\">Select a SSID</option></select></li><li><input type=password class=text-input ng-model=connect.wifi.password placeholder=Password></li><li><a add-new ng-init=\"connect.toggleAdvanced = false\" ng-click=\"connect.toggleAdvanced = !connect.toggleAdvanced\"><small><i class=\"fa u-margin-right-_5\" ng-class=\"{true:'fa-minus',false:'fa-plus'}[connect.toggleAdvanced]\"></i>Advanced Settings</small></a></li><li ng-if=connect.toggleAdvanced><ul class=advanced-settings><li><input class=text-input placeholder=key_mgmt ng-model=connect.wifi.key_mgmt></li><li><input class=text-input placeholder=eap ng-model=connect.wifi.eap></li><li><input class=text-input placeholder=identity ng-model=connect.wifi.identity></li><li><input class=text-input placeholder=anonymous_identity ng-model=connect.wifi.anonymous_identity></li><li><input class=text-input placeholder=phase1 ng-model=connect.wifi.phase1></li><li><input class=text-input placeholder=phase2 ng-model=connect.wifi.phase2></li></ul></li><li><div class=\"layout layout--withoutGutter layout--alignMiddle u-margin-top-2\"><div class=\"layout__item u-fit\"><button class=\"btn btn--primary\" ng-click=connect.connectWifi() ng-disabled=connect.connecting>Connect to Wi-Fi <i ng-if=connect.connecting class=\"fa fa-refresh fa-spin\"></i></button></div><div class=\"layout__item u-fill u-margin-left-1\">This may take up to a minute</div><div ng-if=connect.wifiError class=layout__item><div class=\"text-base-alert-color u-margin-top-1\" ng-bind-html=connect.wifiError></div></div></div></li><li class=u-margin-top-3><a add-new ng-init=\"connect.toggleFAQ = false\" ng-click=\"connect.toggleFAQ = !connect.toggleFAQ\"><small><i class=\"fa u-margin-right-_5\" ng-class=\"{true:'fa-minus',false:'fa-plus'}[connect.toggleFAQ]\"></i>Frequently Asked Questions</small></a></li><li ng-if=connect.toggleFAQ><ul class=faqs><li><div class=faqTitle>What should I do if my network is not listed?</div><div class=faqBody>Make sure the router or access point is turned on, and that it is within range of the element. If it is, check that your network type is supported.</div></li><li><div class=faqTitle>What type of networks are supported?</div><div class=faqBody>The Wi-Fi network you select has to be a WPA-2 secured network (a common router security standard for homes and offices) or an open network. We also support enterprise networks that use the 802.11x protocol using a custom config.</div></li><li><div class=faqTitle>I get \"Failed to connect to ...\", what should I do?</div><div class=faqBody>This usually means you've entered a wrong password or connecting to the router took longer than expected. You can just try again.</div></li></ul></li></ul></section><section ng-switch-when=custom-device-wifi class=u-margin-top-3><h3>Custom Device</h3><p>Your device is not connected to Wi-Fi. Ensure that it is before trying to link your device to formide.</p></section><section ng-switch-when=network-no-internet class=u-margin-top-3><h3>No Internet</h3><p>The network your device is connected to does not have access to the Internet. Ensure that it has before trying to link your device to formide.</p></section><section ng-switch-when=connect-formide><h3>Connect to Formide</h3><p class=u-margin-top-2>Before continuing, ensure that your computer is connected to the Internet.</p><p>If this is a custom device, such as a Raspberry Pi, it must first be whitelisted. You can request this via <a class=anchor__link href=\"mailto:hello@formide.com?subject=I would like to whitelist my device\">Email</a>.</p><div class=\"layout layout--withoutGutter layout--alignMiddle u-margin-top-2\"><button class=\"btn btn--primary\" ng-click=connect.connectToFormide() ng-disabled=connect.connecting><span ng-if=!connect.connectURL><i ng-if=connect.connecting class=\"fa fa-refresh fa-spin\"></i></span> <span ng-if=connect.connectURL>Connect <i ng-if=connect.connecting class=\"fa fa-refresh fa-spin\"></i></span></button><div ng-if=connect.connectingError><div class=\"text-base-alert-color u-margin-top-1\" ng-bind-html=connect.connectingError></div></div></div></section><section ng-switch-default class=\"u-margin-top-3 u-textCenter\"><i class=\"fa fa-refresh fa-spin fa-3x text-base-primary-color\"></i></section></fieldset></div></div></section></article>"
  );


  $templateCache.put('control-print/componentView.html',
    "<article id=printer-controls><h3>Printer Controls</h3><p ng-if=\"controlPrint.printer.$active.status == 'printing' || controlPrint.printer.$active.status == 'paused'\">Selected Printer is currently printing</p><p ng-if=\"controlPrint.printer.$active.status == 'heating'\">Selected Printer is currently heating</p><p ng-if=\"controlPrint.printer.$active.status == 'offline'\">Selected Printer is currently Offline</p><div ng-if=\"controlPrint.printer.$active.status !== 'printing'  && controlPrint.printer.$active.status !== 'paused' && controlPrint.printer.$active.status !== 'heating'\"><h4>Axis</h4><section class=block ng-class=\"{'block--disabled': controlPrint.printer.$active.status == 'offline'}\"><printer-controls extruders=controlPrint.printer.$active.extruders disable-input=\"controlPrint.printer.$active.status == 'offline'\"></printer-controls></section></div><div ng-if=\"controlPrint.printer.$active.status == 'printing'  || controlPrint.printer.$active.status == 'paused' || controlPrint.printer.$active.status == 'heating'\" class=u-posRelative><h4>Tune</h4><section class=block ng-class=\"{'block--disabled': !controlPrint.printer.$active.speedMultiplier}\"><h5>Print Speed</h5><fieldset class=tune-container><div class=layout><label class=\"layout__item u-fit u-textCenter\"><printer-controls-speed size=45 speed=controlPrint.printSpeed min=1 max=500 class=icon></printer-controls-speed></label><section class=\"layout__item u-fill\"><printer-controls-slider min=1 max=500 gcode=controlPrint.tuneGcode.printSpeed value=controlPrint.printSpeed input-field=true pretty-min=1% pretty-max=500% disable-input=!controlPrint.checkValue(controlPrint.printer.$active.speedMultiplier)></printer-controls-slider></section></div></fieldset><h5>Flow Rate</h5><fieldset class=tune-container><div class=layout><label class=\"layout__item u-fit u-textCenter\"><printer-controls-flow-rate size=45 speed=controlPrint.flowRate min=1 max=500 class=icon></printer-controls-flow-rate></label><section class=\"layout__item u-fill\"><printer-controls-slider min=1 max=500 gcode=controlPrint.tuneGcode.flowRate value=controlPrint.flowRate input-field=true pretty-min=1% pretty-max=500% disable-input=!controlPrint.checkValue(controlPrint.printer.$active.flowRate)></printer-controls-slider></section></div></fieldset><h5>Fan Speed</h5><fieldset class=tune-container><div class=layout><label class=\"layout__item u-fit u-textCenter\"><printer-controls-fan size=45 speed=controlPrint.fanSpeed max=100 class=icon></printer-controls-fan></label><section class=\"layout__item u-fill\"><printer-controls-slider min=0 max=100 gcode=controlPrint.tuneGcode.fanSpeed value=controlPrint.fanSpeed input-field=true pretty-min=0% pretty-max=100% disable-input=!controlPrint.checkValue(controlPrint.printer.$active.fanSpeed)></printer-controls-slider></section></div></fieldset></section><div ng-if=!controlPrint.printer.$active.speedMultiplier class=updateOverlay><h4>To use this feature, please update your device</h4><a class=\"btn btn--secondary\" ng-click=\"controlPrint.navigate('manage/device/update')\">Update</a></div></div><h4 class=u-padding-top-1>Temperatures</h4><section class=\"block block--temperatures\" ng-class=\"{'block--disabled': controlPrint.printer.$active.status == 'offline'}\"><div class=layout><div class=\"layout__item u-1/3-sm\" ng-repeat=\"extruder in controlPrint.printer.$active.extruders\"><h5 class=\"u-margin-top-_5 u-margin-bottom-2\">Extruder {{$index + 1}}</h5><p class=u-margin-bottom-1>Current Temp: {{extruder.temp}} &deg;C</p><p class=\"temperature u-margin-bottom-_5\"><label for=\"\">Target Temp <input ng-change=controlPrint.runExtruderCommand($index) ng-model=controlPrint.targetTempExt[$index] ng-model-options=\"{debounce: 500}\" type=number class=text-input min=0 max={{controlPrint.maxExtTemp}} ng-disabled=\"controlPrint.printer.$active.status == 'offline'\"><span class=u-margin-left-_5>&deg;C</span></label></p></div><div class=\"layout__item u-1/3-sm\" ng-if=\"controlPrint.printer.$active.bed.temp !== 0\"><h5 class=\"u-margin-top-_5 u-margin-bottom-2\">Bed</h5><section><p class=u-margin-bottom-1>Current Temp: {{controlPrint.printer.$active.bed.temp}} &deg;C</p><p class=\"temperature u-margin-bottom-_5\"><label for=\"\">Target Temp <input ng-change=controlPrint.runBedCommand() ng-model=controlPrint.targetTempBed ng-model-options=\"{debounce: 500}\" type=number class=text-input min=0 valuemax={{controlPrint.maxBedTemp}} ng-disabled=\"controlPrint.printer.$active.status == 'offline'\"><span class=u-margin-left-_5>&deg;C</span></label></p></section></div></div></section><h4 class=u-padding-top-1>G-code Console</h4><section class=block ng-class=\"{'block--disabled': controlPrint.printer.$active.status == 'offline' || controlPrint.printer.$active.status == 'printing' || controlPrint.printer.$active.status == 'paused' || controlPrint.printer.$active.status == 'heating'}\"><div class=console><div class=header>Input a G-code command and press Enter</div><textarea id=console-textarea ng-list=&#10; ng-model=controlPrint.customCommands ng-disabled=\"controlPrint.printer.$active.status == 'offline'\" ng-trim=false on-enter=controlPrint.runConsoleCommands() rows=5></textarea></div></section></article>"
  );


  $templateCache.put('file-library/componentView.html',
    "<article id=file-library><header class=layout><div class=\"layout__item u-1/2\"><h3>Library</h3></div><div class=\"u-textRight layout__item u-1/2\"><button class=\"btn btn--tertiary\" ng-disabled=$root.fileUploading ngf-multiple=true ngf-select=fileLibrary.upload($files) ngf-pattern=\"'text/*'\">Upload G-code</button></div></header><section ng-if=\"fileLibrary.files.length > 0\" id=listView class=block><table class=\"table--formide table--formide--responsive\"><thead><tr><th>Name</th><th>Created</th><th>Size</th><th>Actions</th></tr></thead><tbody><tr ng-repeat=\"file in fileLibrary.files\" class=table__item><td data-th=Name class=name>{{file.filename | removeFiletype | removeDashes | title}}</td><td data-th=Created>{{file.updatedAt | timeAgo}}</td><td ng-if=\"file.filetype !== 'folder'\" data-th=Size>{{ file.filesize | smartbytes:1 }}</td><td ng-if=\"file.filetype === 'folder' && file.children != 1\" data-th=Size>{{ file.children }} items</td><td ng-if=\"file.filetype === 'folder' && file.children == 1\" data-th=Size>1 item</td><td class=\"actions table__item__controls\"><button class=\"btn btn--small btn--tertiary btn--slice\" ng-click=fileLibrary.print(file); title=Print ng-disabled=\"fileLibrary.printer.$active.status !== 'online'\">Print</button> <button class=\"btn btn--small btn--alert\" ng-click=fileLibrary.removeMultiple([file]) title=Details><i class=\"fa fa-trash-o\"></i></button></td></tr></tbody></table><div ng-if=!fileLibrary.files.$resolved class=\"u-textCenter u-margin-top-1 u-margin-bottom-1\"><i class=\"fa fa-refresh fa-spin fa-2x text-base-primary-color\"></i></div></section><section class=animate-show ng-show=\"fileLibrary.files.length == 0 && fileLibrary.files.$resolved\" id=uploadInvite><div class=\"layout layout--alignCenter u-margin-top-3\"><div class=\"icon layout__item u-fit\"><i class=\"fa fa-files-o\"></i></div><div class=\"layout__item u-fit\"><h2 class=xs-hide>Drag your G-codes here</h2><p class=xs-hide>Or add them by using the upload button</p><h2 class=\"sm-hide u-textCenter\">Upload G-codes</h2><p class=\"sm-hide u-textCenter\">Add files using the upload button</p></div></div></section></article>"
  );


  $templateCache.put('manage-device-update/componentView.html',
    "<header class=layout><div class=\"layout__item u-1/2\"><h3>Update Device</h3></div><div class=\"u-textRight layout__item u-1/2\"><a class=\"btn btn--tertiary\" ng-click=\"manage.navigate('/manage/device')\">Manage Device</a></div></header><button class=btn ng-click=manageDeviceUpdate.doUpdate() ng-disabled=\"!manageDeviceUpdate.deviceUpdateNeeded.needsUpdate || manageDeviceUpdate.updating\">Start Update Process</button> <span class=u-margin-left-1>{{ manageDeviceUpdate.deviceUpdateNeeded.message }}</span><section class=\"block u-margin-top-1\" ng-class=\"{'block--disabled': !manageDeviceUpdate.updating}\"><h5>Progress</h5><progress-bar ng-class=\"{'progress--undefined': manageDeviceUpdate.valuenow < 100}\" valuenow={{manageDeviceUpdate.valuenow}} valuemax=100></progress-bar><br><div ng-if=\"manageDeviceUpdate.updating && !manageDeviceUpdate.updated\"><i class=\"fa fa-refresh fa-spin\"></i> Updating, the device will come back online once updated.</div><div ng-if=\"manageDeviceUpdate.updating && manageDeviceUpdate.updated\"><i class=\"fa fa-check-circle\"></i> {{ manageDeviceUpdate.deviceUpdateStatus.message }}!</div></section>"
  );


  $templateCache.put('manage-device/componentView.html',
    "<article id=manage-device><header class=layout><div class=\"layout__item u-1/2\"><h3>Manage Device</h3></div><div class=\"u-textRight layout__item u-1/2\"><a class=\"btn btn--tertiary\" ng-click=\"manage.navigate('/manage/device/update')\">Update Device</a></div></header><div class=layout><div class=\"layout__item u-1/2-sm pad\"><h4>Network</h4><section class=block><table class=\"table--formide network-table\"><tbody><tr class=table__item><td>Connected to</td><td>{{manageDevice.network.network || '-'}}</td></tr><tr class=table__item><td>Internal IP Address</td><td>{{manageDevice.network.ip || '-'}}</td></tr><tr class=table__item><td>Public IP Address</td><td>{{manageDevice.network.publicIp || '-'}}</td></tr><tr class=table__item><td>Mac Address</td><td>{{manageDevice.network.mac || '-'}}</td></tr><tr class=table__item><td>Hotspot Mode</td><td><div ng-if=\"manageDevice.deviceType === 'the_element'\" ng-click=manageDevice.setHotspot()><span class=checkbox><i ng-if=!manageDevice.network.isHotspot class=\"fa fa-square-o\"></i> <i ng-if=manageDevice.network.isHotspot class=\"fa fa-check-square-o\"></i></span></div><span ng-if=\"manageDevice.deviceType !== 'the_element'\">-</span></td></tr></tbody></table></section></div><div class=\"layout__item u-1/2-sm pad\"><h4>Storage</h4><section class=block><div class=\"container layout layout--withoutGutter layout--alignMiddle layout--alignCenter u-margin-top-1 u-margin-bottom-1\"><div class=\"storageChart layout__item u-fill\"><canvas id=doughnut height=230 width=230 class=\"chart chart-doughnut\" chart-data=manageDevice.chart.data chart-labels=manageDevice.chart.labels chart-dataset-override=manageDevice.chart.datasetOverride chart-options=manageDevice.chart.options></canvas><div class=label><h3>{{manageDevice.storage.percentageUsedRnd}}%<br><small>used</small></h3></div><div class=info><h3>of {{manageDevice.diskspace.total | smartbytes:1}}</h3></div></div></div></section></div><div class=\"layout__item u-1/2-sm pad connect\"><h4>Connect</h4><section class=block><form role=form><fieldset><ul class=form-fields><li><label for=\"\">SSID</label><select class=text-input ng-options=\"ssid.ssid as ssid.ssid for ssid in manageDevice.ssids\" ng-model=manageDevice.wifi.ssid><option value=\"\" disabled selected style=\"display: none\">Select a SSID</option></select></li><li><label for=\"\">Password</label><input type=password class=text-input ng-model=manageDevice.wifi.password placeholder=Password></li><li><a add-new ng-init=\"manageDevice.toggleAdvanced = false\" ng-click=\"manageDevice.toggleAdvanced = !manageDevice.toggleAdvanced\"><small><i class=\"fa u-margin-right-_5\" ng-class=\"{true:'fa-minus',false:'fa-plus'}[manageDevice.toggleAdvanced]\"></i>Advanced Settings</small></a></li><li ng-if=manageDevice.toggleAdvanced><ul class=advanced-settings><li><input class=text-input placeholder=key_mgmt ng-model=manageDevice.wifi.key_mgmt></li><li><input class=text-input placeholder=eap ng-model=manageDevice.wifi.eap></li><li><input class=text-input placeholder=identity ng-model=manageDevice.wifi.identity></li><li><input class=text-input placeholder=anonymous_identity ng-model=manageDevice.wifi.anonymous_identity></li><li><input class=text-input placeholder=phase1 ng-model=manageDevice.wifi.phase1></li><li><input class=text-input placeholder=phase2 ng-model=manageDevice.wifi.phase2></li></ul></li></ul></fieldset><div class=layout><div class=\"layout__item u-1/2\"><button class=\"btn btn--primary\" ng-click=manageDevice.connectWifi() ng-disabled=manageDevice.connecting>Connect to Wi-Fi <i ng-if=manageDevice.connecting class=\"fa fa-refresh fa-spin\"></i></button></div><div class=\"u-textRight layout__item u-1/2\"><button class=\"btn btn--secondary\" ng-click=manageDevice.resetWifi()>Reset Wi-Fi</button></div></div></form></section></div><div class=\"layout__item u-1/2-sm pad\"><h4>Users</h4><section class=block><table class=\"table--formide table--formide--responsive\"><thead><tr><th>Username</th><th></th></tr></thead><tbody><tr ng-repeat=\"user in manageDevice.users\" class=table__item><td data-th=Username>{{user.username}}</td><td class=\"table__item__controls u-textRight\"><a class=\"btn btn--small btn--tertiary\" ng-click=manageDevice.updateModal(user)><i class=\"fa fa-pencil\"></i></a> <a class=\"btn btn--small btn--alert\" ng-click=manageDevice.deleteUser(user)><i class=\"fa fa-trash-o\"></i></a></td></tr></tbody></table><button class=\"btn btn--tertiary\" ng-click=manageDevice.createModal()>Add User</button></section></div></div></article><script type=text/ng-template id=settingsModal><form role=\"form\">\n" +
    "\t\t <fieldset>\n" +
    "            <ul class=\"form-fields\">\n" +
    "                <li>\n" +
    "                \t<label for=\"\">Username</label>\n" +
    "                    <input type=\"text\" class=\"text-input\" ng-model=\"modal.user.username\" placeholder=\"Username\">\n" +
    "                </li>\n" +
    "\n" +
    "                <li>\n" +
    "                \t<label for=\"\">Password</label>\n" +
    "                    <input type=\"password\" class=\"text-input\" ng-model=\"modal.user.password\" placeholder=\"Password\">\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </fieldset>\n" +
    "\n" +
    "        <hr class=\"rule\">\n" +
    "\n" +
    "        <a class=\"btn btn--primary\" ng-click=\"modal.submitForm(modal.user); closeThisDialog()\">Save</a>\n" +
    "\t\t<a class=\"btn btn--secondary\" ng-click=\"closeThisDialog()\">Cancel</a>\n" +
    "\t</form></script>"
  );


  $templateCache.put('manage/componentView.html',
    "<article id=manage><div ng-viewport=subView></div></article>"
  );


  $templateCache.put('monitor-print/componentView.html',
    "<article id=monitor-print><h3>Monitor Print</h3><p ng-if=\"monitorPrint.printer.$active.status !== 'offline' && !monitorPrint.printer.$active.printJob\">Selected Printer is not currently printing</p><p ng-if=\"monitorPrint.printer.$active.status == 'offline'\">Selected Printer is currently Offline</p><section id=currently-printing ng-if=monitorPrint.printer.$active.printJob class=u-margin-bottom-1><div print-job-item class=\"block u-margin-bottom-1\"></div><div class=\"tune-values xs-hide\"><div class=\"layout layout--alignMiddle\"><div class=\"layout__item u-1/3\"><div class=tune-block><h5 class=tune-header>Print Speed</h5><div class=\"layout layout--alignMiddle\"><div class=\"layout__item u-1/2 u-textRight\"><printer-controls-speed size=45 speed=monitorPrint.printSpeed min=1 max=500 class=icon></printer-controls-speed></div><div class=\"layout__item u-1/2 u-textLeft\"><h4>{{monitorPrint.printSpeed}}%</h4></div></div></div></div><div class=\"layout__item u-1/3\"><div class=tune-block><h5 class=tune-header>Flow Rate</h5><div class=\"layout layout--alignMiddle\"><div class=\"layout__item u-1/2 u-textRight\"><printer-controls-flow-rate size=45 speed=monitorPrint.flowRate min=1 max=500 class=icon></printer-controls-flow-rate></div><div class=\"layout__item u-1/2 u-textLeft\"><h4>{{monitorPrint.flowRate}}%</h4></div></div></div></div><div class=\"layout__item u-1/3\"><div class=tune-block><h5 class=tune-header>Fan Speed</h5><div class=\"layout layout--alignMiddle\"><div class=\"layout__item u-1/2 u-textRight\"><printer-controls-fan size=45 speed=monitorPrint.fanSpeed max=100 class=icon></printer-controls-fan></div><div class=\"layout__item u-1/2 u-textLeft\"><h4>{{monitorPrint.fanSpeed}}%</h4></div></div></div></div></div></div></section><div ng-show=\"(monitorPrint.queue.resource | filter: {status: 'printing'}).length < 1\" ng-switch=monitorPrint.printer.$active.deviceStatus class=u-margin-bottom-1><h3>Monitor Print</h3><div ng-switch-when=online><article id=loading-queue-state class=\"fade loading-queue-state u-textCenter\" ng-if=\"monitorPrint.printer.$active.status !== 'offline'\"><h4><i class=\"fa fa-2x fa-file-o\"></i></h4><h5 class=loader>No items printing</h5><a class=fade ng-click=\"monitorPrint.navigate('print/queue')\" add-new>View queue</a></article><article id=loading-queue-state class=\"fade loading-queue-state u-textCenter u-margin-bottom-2\" ng-if=\"monitorPrint.printer.$active.status == 'offline'\"><h4><i class=\"fa fa-2x fa-file-o\"></i></h4><h5 class=loader>This printer is currently offline</h5></article></div><div ng-switch-when=offline><article id=loading-queue-state class=\"fade loading-queue-state u-textCenter u-margin-bottom-2\"><h4><i class=\"fa fa-2x fa-file-o\"></i></h4><h5 class=loader>This printer is offline</h5></article></div><div ng-switch-default><article id=loading-queue-state class=\"fade loading-queue-state u-textCenter u-margin-bottom-2\"><h4><i class=\"fa fa-2x fa-file-o\"></i></h4><h5 class=loader>No printer connected</h5></article></div></div><div class=layout><div class=\"layout__item u-1/2-sm pad\"><h4>Webcam</h4><section class=\"block block--panel\"><dashboard-webcam></dashboard-webcam></section></div><div class=\"layout__item u-1/2-sm pad\"><h4>Temperatures</h4><section class=\"block block--panel\"><dashboard-temperatures></dashboard-temperatures></section></div></div></article>"
  );
}]); })();
(function () { angular.module('templateCache.core', []).run(['$templateCache', function($templateCache) {'use strict';  'use strict';

  $templateCache.put('header/componentTemplate.html',
    "<div class=header__content><div class=\"layout layout--withoutGutter layout--alignMiddle\"><ul class=\"list-inline layout__item u-fill navigation-container\"><li class=navigation-home><a class=header__item ng-click=\"vm.navigate('/formide')\"><img src=./images/logo_small.png alt=\"\" class=\"formide-logo\"><div class=logo_element>Formide Local</div></a></li></ul><ul class=\"list-inline layout__item u-fit\" ng-if=$root.isLoggedIn><li class=\"u-margin-right-1_5 xs-hide\"><button class=btn ng-click=vm.logout()>Log Out</button></li><li class=sidebarToggle><a class=sm-and-down-hide ng-click=\"$root.setSidebarInvisible(); vm.scrollToTop()\"><img ng-src=\"{{$root.sidebarInvisible ? './images/hamburger_collapse.svg' : './images/hamburger_expand.svg'}}\"></a> <a class=md-hide ng-click=\"$root.setSidebarInvisible(); vm.scrollToTop()\"><img ng-src=\"{{$root.sidebarInvisible ? './images/hamburger_expand.svg' : './images/hamburger_collapse.svg'}}\"></a></li></ul></div></div>"
  );


  $templateCache.put('page-content/componentTemplate.html',
    "<ul class=\"list-inline nav xs-hide\"><li ng-repeat=\"route in vm.routes\" ng-if=\"route.loggedIn === undefined || (route.loggedIn && $root.isLoggedIn) || (!route.loggedIn && !$root.isLoggedIn)\"><a ng-class=\"{ active: route.nav.active}\" ng-click=vm.navigate(route.path) title=\"{{ ::route.nav.name }}\">{{ ::route.nav.name }}</a></li></ul><ul class=\"list-inline u-textNoWrap nav sm-hide\" ng-class=\"{'open': vm.showMobileNav}\"><li ng-repeat=\"route in vm.routes | filter: {nav: {active: true}}\" ng-if=\"route.loggedIn === undefined || (route.loggedIn && $root.isLoggedIn) || (!route.loggedIn && !$root.isLoggedIn)\"><a class=active ng-click=\"vm.navigate(route.path); vm.showMobileNav = !vm.showMobileNav;\" title=\"{{ ::route.nav.name }}\">{{ ::route.nav.name }} <span ng-if=!vm.showMobileNav><i class=\"fa fa-angle-down\"></i></span> <span ng-if=vm.showMobileNav><i class=\"fa fa-angle-up\"></i></span></a></li><li ng-repeat=\"route in vm.routes | filter: {nav: {active: false}}\" ng-if=\"vm.showMobileNav && (route.loggedIn === undefined || (route.loggedIn && $root.isLoggedIn) || (!route.loggedIn && !$root.isLoggedIn))\"><a ng-click=\"vm.navigate(route.path); vm.showMobileNav = false\">{{::route.nav.name}}</a></li><li ng-if=\"vm.showMobileNav && $root.isLoggedIn\"><a ng-click=vm.logOut()>Log Out</a></li></ul><div class=\"fade inner-page-content\"><div class=layout><div class=\"layout__item inner-page-section\"><div ng-viewport=mainView></div></div></div></div>"
  );


  $templateCache.put('sidebar/componentTemplate.html',
    "<article class=main-sidebar-content><section class=\"sm-hide sidebar-header\"><div ng-if=\"route.loggedIn === undefined || (route.loggedIn && vm.isLoggedIn) || (!route.loggedIn && !vm.isLoggedIn)\" class=hide--sidebar ng-click=$root.setSidebarInvisible()><img src=./images/hamburger_expand.svg alt=\"\"></div><h3 class=title>Printers</h3></section><section class=fade id=sidebar-printers><h3 class=\"xs-hide title\">Printers</h3><div ng-if=\"vm.resolved && vm.printer < 1\" class=u-textCenter><h3>No Printers Connected</h3></div><div ng-if=\"vm.resolved && vm.printer.length > 0\"><h4>Selected Printer</h4><ul printer-list ng-if=vm.printerActive><li printer-list-item printer=vm.printerActive type=selected class=selected-printer></li></ul><p ng-if=!vm.printerActive class=selected-printer-message>You currently have no selected printer<br>Click on a printer below to select it</p><br></div><div ng-if=\"vm.resolved && vm.printer.length > 0\"><h4>Printers</h4><ul printer-list><li printer-list-item ng-repeat=\"printer in vm.printer\" type=offline printer=printer></li></ul></div><div ng-if=!vm.resolved class=u-textCenter><i class=\"fa fa-refresh fa-spin fa-3x\"></i></div></section></article><div ng-if=\"vm.unknownPrinter || vm.slicingInProgress\" class=\"btn-container xs-hide\"><div ng-if=\"vm.unknownPrinter && !vm.slicingInProgress\" ng-click=vm.printerSetupDialog() class=setup-printer><div class=layout><span class=\"layout__item u-1/6\"><i class=\"fa fa-2x fa-bell\"></i></span> <small class=\"layout__item u-5/6\">An unknown printer has been detected, click to set up this printer!</small></div></div><div ng-if=vm.slicingInProgress class=slicer-progress><svg xmlns=http://www.w3.org/2000/svg width=100% height=80px viewbox=\"0 0 32 32\" preserveaspectratio=\"xMaxYMid slice\"><defs><clippath id=mask><circle cx=16 cy=16 r=\"16\"></clippath></defs><path fill=none stroke=#CE6E3E stroke-width=.2 opacity=.1 d=\" M-32 4 C-24 4 -24 28 -16 28 C-8 28 -8 4 0 4 C8 4 8 28 16 28 C24 28 24 8 32 8 \"><animatetransform attributename=transform type=translate values=\" 0 0; 32 0 \" dur=6s repeatcount=\"indefinite\"></path><path fill=none stroke=#CE6E3E stroke-width=.2 opacity=.3 d=\" M-32 12 C-24 12 -24 20 -16 20 C-8 20 -8 12 0 12 C8 12 8 20 16 20 C24 20 24 12 32 12 \"><animatetransform attributename=transform type=translate values=\" 0 0; 32 0 \" dur=3s repeatcount=\"indefinite\"></path><path fill=none stroke=#CE6E3E stroke-width=.2 opacity=.5 d=\" M-32 8 C-24 8 -24 24 -16 24 C-8 24 -8 8 0 8 C8 8 8 24 16 24 C24 24 24 8 32 8 \"><animatetransform attributename=transform type=translate values=\" 0 0; 32 0 \" dur=2s repeatcount=\"indefinite\"></path></svg><h6 class=loader>Slicing in progress <span class=loader__dot>.</span><span class=loader__dot>.</span><span class=loader__dot>.</span></h6><div ng-style={opacity:vm.setVisible($index)} ng-repeat=\"message in vm.sliceMessages\"><small>{{message | title}}</small></div></div></div><ng-transclude></ng-transclude><script type=text/ng-template id=formideConnect><formide-connect></formide-connect></script>"
  );
}]); })();
(function () { angular.module('templateCache.shared', []).run(['$templateCache', function($templateCache) {'use strict';  'use strict';

  $templateCache.put('add-new/componentTemplate.html',
    "<ng-transclude></ng-transclude>"
  );


  $templateCache.put('alert-box/componentTemplate.html',
    "<div class=\"entry-content layout\" id=notification-content-{{vm.alertId}} title=\"{{vm.type | title}} Notification\" ng-class=\"{'has-actions': vm.actions.length > 0}\"><h5 class=\"layout__item u-4/5\">{{vm.title}}</h5><div class=\"layout__item u-textRight u-1/5\"><a class=icon--close ng-if=\"!(vm.actions.length > 0)\" ng-click=vm.closeNotification() title=\"Close this notification\"><i class=\"fa fa-times\"></i></a></div><p class=\"layout__item u-1/1\"><small ng-bind-html=\"vm.message | trustedHTML\"></small></p><p ng-if=vm.link class=\"layout__item u-1/1 u-margin-top-_5\"><small><span ng-if=vm.link.pretext>{{vm.link.pretext}}</span> <a href={{vm.link.href}} target=_blank style=\"color: #46b1e6\">{{vm.link.text}}</a></small></p></div><ul title=\"Notification Actions\" id=notification-actions-{{vm.alertId}} class=alert-actions id=alert-actions ng-if=\"vm.actions.length > 0\"><li ng-repeat=\"(name, action) in vm.actions\"><a ng-click=vm.executeCallback(action.callback) ng-attr-title={{action.title}}>{{action.title}}</a></li></ul>"
  );


  $templateCache.put('checkbox/componentTemplate.html',
    "<div ng-click=vm.checkboxClick() ng-class=\"{'disabled': vm.checkboxDisabled}\"><span ng-if=vm.checkboxLabelLeft>{{vm.checkboxLabelLeft}}</span> <span class=checkbox><i ng-if=!vm.checkboxModel class=\"fa fa-square-o\"></i> <i ng-if=vm.checkboxModel class=\"fa fa-check-square-o\"></i></span> <span ng-if=vm.checkboxLabelRight>{{vm.checkboxLabelRight}}</span></div>"
  );


  $templateCache.put('dashboard-temperatures/componentTemplate.html',
    "<div class=\"container layout layout--withoutGutter layout--alignMiddle layout--alignCenter\"><div class=\"layout__item u-fill\"><canvas id=line height=300 width=300 class=\"chart chart-line\" chart-data=vm.chart.data chart-labels=vm.chart.labels chart-series=vm.chart.series chart-options=vm.chart.options chart-colors=vm.chart.colors></canvas></div></div>"
  );


  $templateCache.put('dashboard-webcam/componentTemplate.html',
    "<figure class=\"layout layout--alignCenter layout--alignMiddle layout--withoutGutter\" ng-class=\"{'webcamLoaded': vm.webcamLoaded, 'webcamError': $root.webcamError}\"><div ng-if=vm.showClose ng-click=\"$root.floatingWebcam = false; $event.stopPropagation();\" class=close>&times;</div><div ng-show=\"!$root.webcamError || !vm.webcamLoaded\" class=\"layout__item webcam-container\"><figcaption ng-if=\"!$root.webcamError && vm.webcamLoaded\" class=\"pill pill--small\">Live <i class=\"fa fa-circle text-base-red faa-flash animated\"></i></figcaption><img draggable=false ng-show=!$root.webcamError ng-src={{vm.webcamPath}} onerror=\"angular.element(this).scope().$root.webcamError = true\" onload=\"angular.element(this).scope().vm.webcamLoaded = true\"><div ng-if=$root.webcamError class=webcam-placeholder>Connect a webcam to your device</div></div><div ng-if=\"!vm.webcamLoaded && !$root.webcamError && vm.printer.$active.deviceStatus == 'online'\" class=\"webcam-loading layout__item\"><span class=loader>Loading<span class=loader__dot>.</span><span class=loader__dot>.</span><span class=loader__dot>.</span></span></div></figure>"
  );


  $templateCache.put('notification-list-item/componentTemplate.html',
    "<header class=layout><h4 class=\"layout__item u-4/5 title u-textTruncate\" title=\"{{vm.count}} notifications of '{{vm.title}}'\"><span class=count ng-if=\"vm.count > 1\">{{vm.count}}</span> {{vm.title}} <span class=time>{{vm.updatedAt | timeAgo}}</span></h4><span class=\"layout__item u-1/5 u-textRight\"><a class=remove ng-click=vm.clearSingle(vm.notificationId)><i class=\"fa fa-times\"></i></a></span></header><ng-transclude></ng-transclude><article><p class=description><small>{{vm.description}}</small></p></article>"
  );


  $templateCache.put('notification-list/componentTemplate.html',
    "<ng-transclude></ng-transclude>"
  );


  $templateCache.put('print-job-item/componentTemplate.html',
    "<div class=\"layout layout--alignMiddle\"><section class=\"layout__item u-1/1\"><div class=\"layout layout--alignMiddle\"><header class=\"layout__item u-1/1\"><div class=\"layout layout--alignMiddle u-margin-bottom-1\"><hgroup class=\"layout__item u-fill u-margin-0\"><h4 class=\"u-textTruncate text-base-primary-color u-margin-0\">{{ vm.printer.printJob | title}}</h4></hgroup><aside ng-switch=vm.printer.status class=\"layout__item u-1/3-sm u-textRight\"><section ng-switch-when=printing class=\"layout layout--smallGutter\" ng-init=\"vm.executingCommand = false\"><div class=\"layout__item u-1/2\"><a class=\"btn btn--tertiary actionButton u-1/1\" style=\"min-width: 0\" ng-click=vm.pausePrint()><i ng-class=\"{true: 'fa-refresh fa-spin', false: 'fa-pause'}[vm.executingCommand]\" class=fa></i></a></div><div class=\"layout__item u-1/2\"><a class=\"btn btn--alert actionButton u-1/1\" style=\"min-width: 0\" ng-class=\"{true: 'btn--disabled'}[vm.executingCommand]\" ng-click=vm.stopPrint()><i class=\"fa fa-stop\"></i></a></div></section><section ng-switch-when=heating class=\"layout layout--smallGutter\" ng-init=\"vm.executingCommand = false\"><div class=\"layout__item u-1/2\"><a class=\"btn btn--tertiary actionButton u-1/1\" style=\"min-width: 0\" ng-click=vm.pausePrint()><i ng-class=\"{true: 'fa-refresh fa-spin', false: 'fa-pause'}[vm.executingCommand]\" class=fa></i></a></div><div class=\"layout__item u-1/2\"><a class=\"btn btn--alert actionButton u-1/1\" style=\"min-width: 0\" ng-class=\"{true: 'btn--disabled'}[vm.executingCommand]\" ng-click=vm.stopPrint()><i class=\"fa fa-stop\"></i></a></div></section><section ng-switch-when=paused class=\"layout layout--smallGutter\" ng-init=\"vm.executingCommand = false\"><div class=\"layout__item u-1/2\"><a class=\"btn btn--tertiary actionButton u-1/1\" style=\"min-width: 0\" ng-click=vm.resumePrint()><i ng-class=\"{true: 'fa-refresh fa-spin', false: 'fa-play'}[vm.executingCommand]\" class=fa></i></a></div><div class=\"layout__item u-1/2\"><a class=\"btn btn--alert actionButton u-1/1\" style=\"min-width: 0\" ng-class=\"{true: 'btn--disabled'}[vm.executingCommand]\" ng-click=vm.stopPrint()><i class=\"fa fa-stop\"></i></a></div></section><section ng-switch-default class=u-textRight ng-init=\"vm.executingCommand = false\"><h4><i class=\"fa fa-refresh fa-spin\"></i></h4></section></aside></div></header><div class=\"layout__item u-1/1\"><hr class=\"rule\"></div><footer class=\"layout__item u-1/1\"><div class=layout><section class=\"layout__item u-1/1\"><p class=\"u-textTruncate expected-printing-time u-margin-bottom-_5\"><small>Progress: {{vm.printer.progress | ceil }} % <span class=xs-hide ng-if=\"vm.printer.remainingPrintingTime && vm.printer.remainingPrintingTime > 0\">&mdash; <i class=\"fa fa-clock-o hide-on-palm\"></i> Remaining Printing Time {{vm.printer.remainingPrintingTime * 10 | smartduration}}</span></small></p><progress-bar valuemax=100 valuenow={{vm.printer.progress}}></progress-bar></section></div></footer></div></section></div>"
  );


  $templateCache.put('printer-controls-fan/componentTemplate.html',
    "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?> <svg width=45 height=45 style=\"animation-duration: {{ (1 / (vm.speed / vm.max)) * 250 | ceil}}ms;-webkit-animation-duration:{{ (1 / (vm.speed / vm.max)) * 250 | ceil}}ms\" viewbox=\"0 0 97 98\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink xmlns:sketch=http://www.bohemiancoding.com/sketch/ns><g id=Page-1 stroke=none stroke-width=1 fill=none fill-rule=evenodd sketch:type=MSPage><g id=noun_11995_cc sketch:type=MSLayerGroup fill=#878896><g id=Group sketch:type=MSShapeGroup><path d=\"M57.318,55.732 C55.535,57.863 52.949,59.279 50.041,59.521 C50.32,76.953 36.044,76.605 40.828,88.757 C45.542,97.487 49.725,99.169 58.95,94.566 C81.271,83.336 67.768,65.6 57.318,55.732 Z M40.767,42.329 C42.3,40.38 44.49,38.988 46.994,38.473 C46.177,20.091 61.043,20.669 56.176,8.303 C51.463,-0.428 47.28,-2.111 38.055,2.492 C14.955,14.117 30.223,32.704 40.767,42.329 Z M38.651,50.773 C20.083,52.757 19.906,37.712 7.766,43.271 C-0.695,48.453 -2.149,52.721 2.949,61.682 C15.7,83.922 33.233,68.141 42.341,57.1 C40.439,55.518 39.098,53.297 38.651,50.773 Z M93.752,35.814 C81.199,13.924 64.018,28.869 54.795,39.874 C57.182,41.371 58.918,43.778 59.541,46.593 C76.641,45.547 77.129,59.631 88.936,54.225 C97.396,49.043 98.85,44.775 93.752,35.814 Z M50.729,45.103 C50.225,44.844 49.661,44.686 49.057,44.664 C48.618,44.648 48.19,44.708 47.789,44.825 C46.882,45.09 46.109,45.667 45.591,46.439 C45.192,47.034 44.943,47.743 44.915,48.512 C44.902,48.879 44.941,49.234 45.021,49.574 C45.228,50.455 45.726,51.227 46.414,51.778 C47.06,52.298 47.87,52.624 48.763,52.657 C48.943,52.663 49.118,52.655 49.292,52.637 C50.405,52.532 51.39,51.969 52.05,51.131 C52.558,50.49 52.874,49.689 52.907,48.809 C52.923,48.407 52.876,48.018 52.78,47.648 C52.488,46.54 51.734,45.618 50.729,45.103 Z\" id=Shape></path></g></g></g></svg>"
  );


  $templateCache.put('printer-controls-flow-rate/componentTemplate.html',
    " <span class=rectangle></span> <span class=nozzle></span> <span class=flow style=\"animation-duration: {{vm.duration}}\"></span>"
  );


  $templateCache.put('printer-controls-slider/componentTemplate.html',
    "<section class=layout><div class=layout__item ng-class=\"vm.inputField ? 'u-5/6-sm u-2/3' : 'u-1/1'\"><div class=\"progress-bar progress-bar-slider\"><input class=progress-slider type=range min={{vm.min}} max={{vm.max}} step={{vm.step}} float ng-model=vm.value ng-change=vm.postTuneGcode() ng-model-options=\"{ debounce: 100 }\" ng-disabled=vm.disableInput><div class=inner ng-style=\"{ width: ((vm.value - vm.min) / (vm.max - vm.min)) * 100 + '%' || '0%' }\"></div><span ng-if=vm.prettyMin class=\"pretty-value pretty--min\">{{vm.prettyMin | title}}</span> <span ng-if=vm.prettyMax class=\"pretty-value pretty--max\">{{vm.prettyMax | title}}</span></div></div><div class=\"layout__item u-1/6-sm u-1/3 u-textCenter input-container\" ng-if=vm.inputField><input type=number class=text-input min={{vm.min}} max={{vm.max}} ng-model=vm.value ng-change=vm.postTuneGcode() ng-model-options=\"{ debounce: 500 }\" ng-disabled=\"vm.disableInput\"><div class=symbol>%</div></div></section>"
  );


  $templateCache.put('printer-controls-speed/componentTemplate.html',
    " <span class=rectangle style=\"animation-duration: {{vm.duration}}\"></span> <span class=frame></span>"
  );


  $templateCache.put('printer-controls/componentTemplate.html',
    "<div class=\"layout xs-hide u-padding-top-1\"><section class=\"layout__item u-3/5 three-axis u-padding-left-0\"><div ng-repeat=\"axis in vm.axis\" class=\"{{::axis.key}}--axis axis\" ng-class=\"{vertical: 'axis--vertical', horizontal:'u-textNoWrap axis--horizontal'}[axis.orientation]\"><div class=positive><abbr>+ {{::axis.key}}</abbr> <button class=control-button title=\"Move {{::axis.key}}-axis {{::item}} mm\" style=\"background-color: rgba(220, 220, 222, {{::vm.setOpacity(item, axis.positive)}})\" ng-click=\"vm.move(axis.key, item)\" ng-repeat=\"item in axis.positive\" ng-disabled=vm.disableInput>{{::item}}</button></div><div class=negative><abbr>- {{::axis.key}}</abbr> <button class=control-button title=\"Move {{::axis.key}}-axis {{::item}} mm\" style=\"background-color: rgba(220, 220, 222, {{::vm.setOpacity(item, axis.positive)}})\" ng-click=\"vm.move(axis.key, item)\" ng-repeat=\"item in axis.negative\" ng-disabled=vm.disableInput>{{::item}}</button></div></div></section><section class=\"extruder layout__item u-fill\"><div ng-repeat=\"extruder in vm.extruders\" ng-init=\"extruderIndex = $index\" class=\"axis--vertical axis\"><div class=positive><abbr>Retract</abbr> <button class=control-button title=\"Move extruder {{extruderIndex}} {{::item}} mm\" ng-style=\"{'background-color': 'rgba(238, 222, 137, '+vm.setOpacity(item, vm.extruder_settings.extrude)+')'}\" ng-click=vm.printerCtrl.extruder(extruderIndex).retract(item) ng-repeat=\"item in vm.extruder_settings.retract\" ng-disabled=vm.disableInput>{{::item}}</button></div><abbr title=\"Extruder {{::extruder.id + 1}}\" class=ext>EXT {{::$index + 1}}</abbr><div class=negative><abbr>Extrude</abbr> <button class=control-button title=\"Move {{extruderIndex}}-axis {{::item}} mm\" ng-style=\"{'background-color': 'rgba(238, 222, 137, '+vm.setOpacity(item, vm.extruder_settings.extrude)+')'}\" ng-click=vm.printerCtrl.extruder(extruderIndex).extrude(item) ng-repeat=\"item in vm.extruder_settings.extrude | orderBy:item:reverse\" ng-disabled=vm.disableInput>{{::item}}</button></div></div></section><section class=layout__item><div class=\"layout layout--smallGutter submit-btn-group\"><div class=\"layout__item u-fit\"><button ng-click=vm.printerCtrl.home.all() class=\"btn btn--tertiary\" ng-disabled=vm.disableInput>Home All Axis</button></div><div class=\"layout__item u-fit\"><button ng-click=vm.printerCtrl.home.x() class=\"btn btn--secondary\" ng-disabled=vm.disableInput>Home X-Axis</button></div><div class=\"layout__item u-fit\"><button ng-click=vm.printerCtrl.home.y() class=\"btn btn--secondary\" ng-disabled=vm.disableInput>Home Y-Axis</button></div><div class=\"layout__item u-fit\"><button ng-click=vm.printerCtrl.home.z() class=\"btn btn--secondary\" ng-disabled=vm.disableInput>Home Z-Axis</button></div></div></section></div><div class=\"palm-controls sm-hide\"><section><h5>Scale Factor</h5><div class=u-textCenter><a ng-click=vm.printerCtrl.home.all() class=\"btn btn--large btn--secondary btn--round\"><i class=\"fa fa-home\"></i></a> &emsp; <a ng-click=\"vm.scaleFactor = 0.1\" class=\"btn btn--secondary btn--round btn--large\" ng-class=\"{'btn--tertiary': vm.scaleFactor == 0.1}\">0.1</a> <a ng-click=\"vm.scaleFactor = 1\" class=\"btn btn--secondary btn--round btn--large\" ng-class=\"{'btn--tertiary': vm.scaleFactor == 1}\">1</a> <a ng-click=\"vm.scaleFactor = 10\" class=\"btn btn--secondary btn--round btn--large\" ng-class=\"{'btn--tertiary': vm.scaleFactor == 10}\">10</a> <a ng-click=\"vm.scaleFactor = 100\" class=\"btn btn--secondary btn--round btn--large\" ng-class=\"{'btn--tertiary': vm.scaleFactor == 100}\">100</a></div></section><br><br><hr class=\"rule\"><center><section class=three-axis ng-init=\"vm.scaleFactor = 10\"><div ng-repeat=\"axis in vm.axis\" class=\"{{::axis.key}}--axis axis\" ng-class=\"{vertical: 'axis--vertical', horizontal:'u-textNoWrap axis--horizontal'}[axis.orientation]\"><div class=positive><abbr>+ {{::axis.key}}</abbr> <a class=control-button title=\"Move {{::axis.key}}-axis {{vm.scaleFactor}} mm\" style=\"background-color: rgb(220, 220, 222)\" ng-click=\"vm.move(axis.key, vm.scaleFactor)\">{{vm.scaleFactor}}</a></div><div class=negative><abbr>- {{::axis.key}}</abbr> <a class=control-button title=\"Move {{::axis.key}}-axis {{(vm.scaleFactor * -1)}} mm\" style=\"background-color: rgb(220, 220, 222)\" ng-click=\"vm.move(axis.key, (vm.scaleFactor * -1))\">{{(vm.scaleFactor * -1)}}</a></div></div></section></center><center><section class=\"extruder u-inlineBlock\" ng-init=\"vm.scaleFactor = 10\"><div ng-repeat=\"extruder in vm.extruders\" ng-init=\"extruderIndex = $index\" class=\"axis--vertical axis\"><div class=positive><abbr>Retract</abbr> <a class=control-button title=\"Move extruder {{extruderIndex}} {{(vm.scaleFactor * -1)}} mm\" style=\"background-color: rgb(238, 222, 137)\" ng-click=\"vm.printerCtrl.extruder(extruderIndex).retract((vm.scaleFactor * -1))\">{{(vm.scaleFactor * -1)}}</a></div><abbr title=\"Extruder {{::extruder.id + 1}}\" class=ext>EXT {{::$index + 1}}</abbr><div class=negative><abbr>Extrude</abbr> <a class=control-button title=\"Move {{extruderIndex}}-axis {{vm.scaleFactor}} mm\" style=\"background-color: rgb(238, 222, 137)\" ng-click=vm.printerCtrl.extruder(extruderIndex).extrude(vm.scaleFactor)>{{vm.scaleFactor}}</a></div></div></section></center><div class=\"layout layout--smallGutter submit-btn-group u-margin-bottom-1\"><div class=\"layout__item u-1/2\"><button ng-click=vm.printerCtrl.home.x() class=\"btn btn--secondary\" ng-disabled=vm.disableInput>Home X-Axis</button></div><div class=\"layout__item u-1/2\"><button ng-click=vm.printerCtrl.home.y() class=\"btn btn--secondary\" ng-disabled=vm.disableInput>Home Y-Axis</button></div></div><div class=\"layout layout--smallGutter submit-btn-group u-margin-bottom-1\"><div class=\"layout__item u-1/2\"><button ng-click=vm.printerCtrl.home.z() class=\"btn btn--secondary\" ng-disabled=vm.disableInput>Home Z-Axis</button></div><div class=\"layout__item u-1/2\"><button ng-click=vm.printerCtrl.home.all() class=\"btn btn--primary\" ng-disabled=vm.disableInput>Home All Axis</button></div></div></div>"
  );


  $templateCache.put('printer-fan/componentTemplate.html',
    "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?> <svg width=24 height=24 style=\"animation-duration: {{ (1 / (vm.speed / vm.max)) * 250 | ceil}}ms;-webkit-animation-duration:{{ (1 / (vm.speed / vm.max)) * 250 | ceil}}ms\" viewbox=\"0 0 97 98\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink xmlns:sketch=http://www.bohemiancoding.com/sketch/ns><g id=Page-1 stroke=none stroke-width=1 fill=none fill-rule=evenodd sketch:type=MSPage><g id=noun_11995_cc sketch:type=MSLayerGroup fill=#878896><g id=Group sketch:type=MSShapeGroup><path d=\"M57.318,55.732 C55.535,57.863 52.949,59.279 50.041,59.521 C50.32,76.953 36.044,76.605 40.828,88.757 C45.542,97.487 49.725,99.169 58.95,94.566 C81.271,83.336 67.768,65.6 57.318,55.732 Z M40.767,42.329 C42.3,40.38 44.49,38.988 46.994,38.473 C46.177,20.091 61.043,20.669 56.176,8.303 C51.463,-0.428 47.28,-2.111 38.055,2.492 C14.955,14.117 30.223,32.704 40.767,42.329 Z M38.651,50.773 C20.083,52.757 19.906,37.712 7.766,43.271 C-0.695,48.453 -2.149,52.721 2.949,61.682 C15.7,83.922 33.233,68.141 42.341,57.1 C40.439,55.518 39.098,53.297 38.651,50.773 Z M93.752,35.814 C81.199,13.924 64.018,28.869 54.795,39.874 C57.182,41.371 58.918,43.778 59.541,46.593 C76.641,45.547 77.129,59.631 88.936,54.225 C97.396,49.043 98.85,44.775 93.752,35.814 Z M50.729,45.103 C50.225,44.844 49.661,44.686 49.057,44.664 C48.618,44.648 48.19,44.708 47.789,44.825 C46.882,45.09 46.109,45.667 45.591,46.439 C45.192,47.034 44.943,47.743 44.915,48.512 C44.902,48.879 44.941,49.234 45.021,49.574 C45.228,50.455 45.726,51.227 46.414,51.778 C47.06,52.298 47.87,52.624 48.763,52.657 C48.943,52.663 49.118,52.655 49.292,52.637 C50.405,52.532 51.39,51.969 52.05,51.131 C52.558,50.49 52.874,49.689 52.907,48.809 C52.923,48.407 52.876,48.018 52.78,47.648 C52.488,46.54 51.734,45.618 50.729,45.103 Z\" id=Shape></path></g></g></g></svg>"
  );


  $templateCache.put('printer-list-item/componentTemplate.html',
    "<header ng-click=vm.selectPrinter()><hgroup class=layout><h3 class=\"layout__item u-fit\"><status-icon size=24px status=vm.printer.status></status-icon></h3><h3 class=\"layout__item u-fill printer-title u-textTruncate\">{{vm.printer.port}}</h3></hgroup><section class=\"layout layout--withoutGutter layout--alignMiddle progress-container\" ng-if=\"vm.printer.status === 'printing' || vm.printer.status === 'paused'\"><progress-bar class=\"layout__item u-fill\" valuenow={{vm.printer.progress}} valuemax=100></progress-bar><h6 class=\"layout__item u-fit\">{{ ((vm.printer.progress / 100) * 100) | ceil }}%</h6></section><div class=\"layout layout--smallGutter progressControls\" ng-if=\"vm.type === 'selected'\"><div class=\"layout__item u-1/4 progressControl u-posRelative\"><a ng-click=\"vm.navigate('/monitor');$root.setSidebarInvisible()\" class=\"btn btn--small btn--white md-hide\" id=webcam-feed title=\"View Live\"><i class=\"fa fa-video-camera\"></i></a> <a ng-click=\"vm.navigate('/monitor')\" class=\"btn btn--small btn--white sm-and-down-hide\" id=webcam-feed title=\"View Live\"><i class=\"fa fa-video-camera\"></i></a></div><div class=\"layout__item u-1/4 progressControl\"><a title=Controls ng-click=\"vm.navigate('/control');$root.setSidebarInvisible()\" class=\"btn btn--white btn--small md-hide\"><i class=\"fa fa-arrows\"></i></a> <a title=Controls ng-click=\"vm.navigate('/control')\" class=\"btn btn--white btn--small sm-and-down-hide\"><i class=\"fa fa-arrows\"></i></a></div><div class=\"layout__item u-1/4 progressControl\" ng-if=\"vm.printer.status === 'printing' || vm.printer.status == 'heating'\" ng-init=\"vm.executingCommand = false\"><button class=\"btn btn--small btn--white\" ng-click=vm.pausePrint() title=Pause><i ng-class=\"{true: 'fa-refresh fa-spin', false: 'fa-pause'}[vm.executingCommand]\" class=fa></i></button></div><div class=\"layout__item u-1/4 progressControl\" ng-if=\"vm.printer.status === 'paused'\" ng-init=\"vm.executingCommand = false\"><button class=\"btn btn--small btn--white\" ng-click=vm.resumePrint() title=Play><i ng-class=\"{true: 'fa-refresh fa-spin', false: 'fa-play'}[vm.executingCommand]\" class=fa></i></button></div><div class=\"layout__item u-1/4 progressControl\" ng-if=\"vm.printer.status === 'printing' || vm.printer.status === 'paused' || vm.printer.status == 'heating'\" ng-init=\"vm.executingCommand = false\"><button class=\"btn btn--small btn--white stop\" ng-class=\"{true: 'btn--disabled'}[vm.executingCommand]\" ng-click=vm.stopPrint() title=Stop><i class=\"fa fa-stop\"></i></button></div></div></header>"
  );


  $templateCache.put('printer-list/componentTemplate.html',
    "<ng-transclude></ng-transclude>"
  );


  $templateCache.put('printer-speed/componentTemplate.html',
    " <span class=rectangle style=\"animation-duration: {{vm.duration}}\"></span> <span class=frame></span>"
  );


  $templateCache.put('progress-bar/componentTemplate.html',
    "<div role=progress aria-valuenow={{vm.valuenow}} aria-valuemin=0 aria-valuemax={{::vm.valuemax}} class=progress title=\"Progress {{ ((vm.valuenow / vm.valuemax) * 100) | ceil }}%\" style=\"width: {{ ((vm.valuenow / vm.valuemax) * 100) | ceil }}%\">{{ ((vm.valuenow / vm.valuemax) * 100) | ceil }}%</div>"
  );


  $templateCache.put('selection-block/componentTemplate.html',
    "<label class=block-selection title=\"Select {{::vm.item.name}}\" ng-class=\"{'active': vm.ngModel.id == vm.item.id}\"><h4 class=\"u-textTruncate text-base-primary-color\"><input type=radio name=sliceSettings.{{::vm.item.name}} ng-value=vm.item ng-checked=\"vm.ngModel.id == vm.item.id\" ng-model=\"vm.ngModel\"> {{::vm.item.name}}</h4><ng-transclude></ng-transclude></label>"
  );


  $templateCache.put('selection-list/componentTemplate.html',
    "<label ng-repeat=\"extruder in vm.extruders track by $index\"><input type=radio name=settings.{{vm.name}}.use ng-value=$index ng-model=vm.ngModel> <abbr title=\"Extruder {{$index + 1}}\">EXT {{$index + 1}}</abbr></label><label ng-if=!vm.extruders title=\"Please select a material for atleast one of your extruders first.\">None selected</label>"
  );


  $templateCache.put('status-icon/componentTemplate.html',
    "<div title=\"Printer is {{vm.status | title}}\" ng-class=\"{'online': vm.status == 'online', 'printing': vm.status == 'printing', 'heating': vm.status == 'heating', 'connecting': vm.status == 'connecting', 'paused': vm.status == 'paused', 'error': vm.status == 'error', 'offline': vm.status == 'offline'}\"><i ng-if=\"vm.status == 'connecting'\" class=\"fa fa-refresh fa-spin\"></i> <i ng-if=\"vm.status == 'heating'\" class=\"fa fa-fire\"></i> <i ng-if=\"vm.status == 'paused'\" class=\"fa fa-pause\"></i> <i ng-if=\"vm.status == 'error'\" class=\"fa fa-exclamation\"></i> <i ng-if=\"vm.status == 'printing'\" class=\"fa fa-play\"></i> <svg width=20px height=20px viewbox=\"0 0 24 24\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink xmlns:sketch=http://www.bohemiancoding.com/sketch/ns><defs><circle id=circle cx=12 cy=12 r=12></circle></defs><mask id=mask fill=white><use xlink:href=#circle></use></mask><use id=Mask class=circle-stroke stroke-width=2 fill=transparent xlink:href=#circle></use></svg></div>"
  );


  $templateCache.put('temperature-bar/componentTemplate.html',
    "<div role=progressbar aria-valuenow={{vm.valuetarget}} aria-valuemin=0 aria-valuemax={{::vm.valuemax}} class=target title=\"Target temperature {{vm.valuetarget}}&deg;C\" style=\"width: {{ ((vm.valuetarget / vm.valuemax) * 100) | ceil }}%\">{{vm.valuetarget}}&deg;C</div><div role=progressbar aria-valuenow={{vm.valuenow}} aria-valuemin=0 aria-valuemax={{::vm.valuemax}} class=progress title=\"Current temperature {{vm.valuenow}}&deg;C\" style=\"width: {{ ((vm.valuenow / vm.valuemax) * 100) | ceil }}%\">{{vm.valuenow}}&deg;C</div>Max: {{::vm.valuemax}}&deg;C"
  );
}]); })();