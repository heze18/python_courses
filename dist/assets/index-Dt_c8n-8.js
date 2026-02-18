(function(){const V=document.createElement("link").relList;if(V&&V.supports&&V.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))d(O);new MutationObserver(O=>{for(const U of O)if(U.type==="childList")for(const H of U.addedNodes)H.tagName==="LINK"&&H.rel==="modulepreload"&&d(H)}).observe(document,{childList:!0,subtree:!0});function L(O){const U={};return O.integrity&&(U.integrity=O.integrity),O.referrerPolicy&&(U.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?U.credentials="include":O.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function d(O){if(O.ep)return;O.ep=!0;const U=L(O);fetch(O.href,U)}})();function Ad(q){return q&&q.__esModule&&Object.prototype.hasOwnProperty.call(q,"default")?q.default:q}var ir={exports:{}},Sa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function km(){if(yd)return Sa;yd=1;var q=Symbol.for("react.transitional.element"),V=Symbol.for("react.fragment");function L(d,O,U){var H=null;if(U!==void 0&&(H=""+U),O.key!==void 0&&(H=""+O.key),"key"in O){U={};for(var G in O)G!=="key"&&(U[G]=O[G])}else U=O;return O=U.ref,{$$typeof:q,type:d,key:H,ref:O!==void 0?O:null,props:U}}return Sa.Fragment=V,Sa.jsx=L,Sa.jsxs=L,Sa}var gd;function Pm(){return gd||(gd=1,ir.exports=km()),ir.exports}var v=Pm(),ur={exports:{}},J={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd;function Wm(){if(hd)return J;hd=1;var q=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),H=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),M=Symbol.iterator;function ae(c){return c===null||typeof c!="object"?null:(c=M&&c[M]||c["@@iterator"],typeof c=="function"?c:null)}var ce={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pe=Object.assign,Te={};function me(c,E,C){this.props=c,this.context=E,this.refs=Te,this.updater=C||ce}me.prototype.isReactComponent={},me.prototype.setState=function(c,E){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,E,"setState")},me.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function le(){}le.prototype=me.prototype;function k(c,E,C){this.props=c,this.context=E,this.refs=Te,this.updater=C||ce}var X=k.prototype=new le;X.constructor=k,pe(X,me.prototype),X.isPureReactComponent=!0;var re=Array.isArray;function I(){}var Y={H:null,A:null,T:null,S:null},Ke=Object.prototype.hasOwnProperty;function Tt(c,E,C){var j=C.ref;return{$$typeof:q,type:c,key:E,ref:j!==void 0?j:null,props:C}}function Xn(c,E){return Tt(c.type,E,c.props)}function zt(c){return typeof c=="object"&&c!==null&&c.$$typeof===q}function we(c){var E={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(C){return E[C]})}var En=/\/+/g;function Nt(c,E){return typeof c=="object"&&c!==null&&c.key!=null?we(""+c.key):E.toString(36)}function xt(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(I,I):(c.status="pending",c.then(function(E){c.status==="pending"&&(c.status="fulfilled",c.value=E)},function(E){c.status==="pending"&&(c.status="rejected",c.reason=E)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function _(c,E,C,j,K){var P=typeof c;(P==="undefined"||P==="boolean")&&(c=null);var oe=!1;if(c===null)oe=!0;else switch(P){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(c.$$typeof){case q:case V:oe=!0;break;case Z:return oe=c._init,_(oe(c._payload),E,C,j,K)}}if(oe)return K=K(c),oe=j===""?"."+Nt(c,0):j,re(K)?(C="",oe!=null&&(C=oe.replace(En,"$&/")+"/"),_(K,E,C,"",function(Cl){return Cl})):K!=null&&(zt(K)&&(K=Xn(K,C+(K.key==null||c&&c.key===K.key?"":(""+K.key).replace(En,"$&/")+"/")+oe)),E.push(K)),1;oe=0;var Ze=j===""?".":j+":";if(re(c))for(var ze=0;ze<c.length;ze++)j=c[ze],P=Ze+Nt(j,ze),oe+=_(j,E,C,P,K);else if(ze=ae(c),typeof ze=="function")for(c=ze.call(c),ze=0;!(j=c.next()).done;)j=j.value,P=Ze+Nt(j,ze++),oe+=_(j,E,C,P,K);else if(P==="object"){if(typeof c.then=="function")return _(xt(c),E,C,j,K);throw E=String(c),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return oe}function z(c,E,C){if(c==null)return c;var j=[],K=0;return _(c,j,"","",function(P){return E.call(C,P,K++)}),j}function Q(c){if(c._status===-1){var E=c._result;E=E(),E.then(function(C){(c._status===0||c._status===-1)&&(c._status=1,c._result=C)},function(C){(c._status===0||c._status===-1)&&(c._status=2,c._result=C)}),c._status===-1&&(c._status=0,c._result=E)}if(c._status===1)return c._result.default;throw c._result}var ye=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)},be={map:z,forEach:function(c,E,C){z(c,function(){E.apply(this,arguments)},C)},count:function(c){var E=0;return z(c,function(){E++}),E},toArray:function(c){return z(c,function(E){return E})||[]},only:function(c){if(!zt(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return J.Activity=T,J.Children=be,J.Component=me,J.Fragment=L,J.Profiler=O,J.PureComponent=k,J.StrictMode=d,J.Suspense=A,J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,J.__COMPILER_RUNTIME={__proto__:null,c:function(c){return Y.H.useMemoCache(c)}},J.cache=function(c){return function(){return c.apply(null,arguments)}},J.cacheSignal=function(){return null},J.cloneElement=function(c,E,C){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var j=pe({},c.props),K=c.key;if(E!=null)for(P in E.key!==void 0&&(K=""+E.key),E)!Ke.call(E,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&E.ref===void 0||(j[P]=E[P]);var P=arguments.length-2;if(P===1)j.children=C;else if(1<P){for(var oe=Array(P),Ze=0;Ze<P;Ze++)oe[Ze]=arguments[Ze+2];j.children=oe}return Tt(c.type,K,j)},J.createContext=function(c){return c={$$typeof:H,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:U,_context:c},c},J.createElement=function(c,E,C){var j,K={},P=null;if(E!=null)for(j in E.key!==void 0&&(P=""+E.key),E)Ke.call(E,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(K[j]=E[j]);var oe=arguments.length-2;if(oe===1)K.children=C;else if(1<oe){for(var Ze=Array(oe),ze=0;ze<oe;ze++)Ze[ze]=arguments[ze+2];K.children=Ze}if(c&&c.defaultProps)for(j in oe=c.defaultProps,oe)K[j]===void 0&&(K[j]=oe[j]);return Tt(c,P,K)},J.createRef=function(){return{current:null}},J.forwardRef=function(c){return{$$typeof:G,render:c}},J.isValidElement=zt,J.lazy=function(c){return{$$typeof:Z,_payload:{_status:-1,_result:c},_init:Q}},J.memo=function(c,E){return{$$typeof:b,type:c,compare:E===void 0?null:E}},J.startTransition=function(c){var E=Y.T,C={};Y.T=C;try{var j=c(),K=Y.S;K!==null&&K(C,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(I,ye)}catch(P){ye(P)}finally{E!==null&&C.types!==null&&(E.types=C.types),Y.T=E}},J.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},J.use=function(c){return Y.H.use(c)},J.useActionState=function(c,E,C){return Y.H.useActionState(c,E,C)},J.useCallback=function(c,E){return Y.H.useCallback(c,E)},J.useContext=function(c){return Y.H.useContext(c)},J.useDebugValue=function(){},J.useDeferredValue=function(c,E){return Y.H.useDeferredValue(c,E)},J.useEffect=function(c,E){return Y.H.useEffect(c,E)},J.useEffectEvent=function(c){return Y.H.useEffectEvent(c)},J.useId=function(){return Y.H.useId()},J.useImperativeHandle=function(c,E,C){return Y.H.useImperativeHandle(c,E,C)},J.useInsertionEffect=function(c,E){return Y.H.useInsertionEffect(c,E)},J.useLayoutEffect=function(c,E){return Y.H.useLayoutEffect(c,E)},J.useMemo=function(c,E){return Y.H.useMemo(c,E)},J.useOptimistic=function(c,E){return Y.H.useOptimistic(c,E)},J.useReducer=function(c,E,C){return Y.H.useReducer(c,E,C)},J.useRef=function(c){return Y.H.useRef(c)},J.useState=function(c){return Y.H.useState(c)},J.useSyncExternalStore=function(c,E,C){return Y.H.useSyncExternalStore(c,E,C)},J.useTransition=function(){return Y.H.useTransition()},J.version="19.2.4",J}var vd;function fr(){return vd||(vd=1,ur.exports=Wm()),ur.exports}var Xe=fr();const $m=Ad(Xe);var sr={exports:{}},xa={},rr={exports:{}},or={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd;function Im(){return bd||(bd=1,(function(q){function V(_,z){var Q=_.length;_.push(z);e:for(;0<Q;){var ye=Q-1>>>1,be=_[ye];if(0<O(be,z))_[ye]=z,_[Q]=be,Q=ye;else break e}}function L(_){return _.length===0?null:_[0]}function d(_){if(_.length===0)return null;var z=_[0],Q=_.pop();if(Q!==z){_[0]=Q;e:for(var ye=0,be=_.length,c=be>>>1;ye<c;){var E=2*(ye+1)-1,C=_[E],j=E+1,K=_[j];if(0>O(C,Q))j<be&&0>O(K,C)?(_[ye]=K,_[j]=Q,ye=j):(_[ye]=C,_[E]=Q,ye=E);else if(j<be&&0>O(K,Q))_[ye]=K,_[j]=Q,ye=j;else break e}}return z}function O(_,z){var Q=_.sortIndex-z.sortIndex;return Q!==0?Q:_.id-z.id}if(q.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var U=performance;q.unstable_now=function(){return U.now()}}else{var H=Date,G=H.now();q.unstable_now=function(){return H.now()-G}}var A=[],b=[],Z=1,T=null,M=3,ae=!1,ce=!1,pe=!1,Te=!1,me=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function X(_){for(var z=L(b);z!==null;){if(z.callback===null)d(b);else if(z.startTime<=_)d(b),z.sortIndex=z.expirationTime,V(A,z);else break;z=L(b)}}function re(_){if(pe=!1,X(_),!ce)if(L(A)!==null)ce=!0,I||(I=!0,we());else{var z=L(b);z!==null&&xt(re,z.startTime-_)}}var I=!1,Y=-1,Ke=5,Tt=-1;function Xn(){return Te?!0:!(q.unstable_now()-Tt<Ke)}function zt(){if(Te=!1,I){var _=q.unstable_now();Tt=_;var z=!0;try{e:{ce=!1,pe&&(pe=!1,le(Y),Y=-1),ae=!0;var Q=M;try{t:{for(X(_),T=L(A);T!==null&&!(T.expirationTime>_&&Xn());){var ye=T.callback;if(typeof ye=="function"){T.callback=null,M=T.priorityLevel;var be=ye(T.expirationTime<=_);if(_=q.unstable_now(),typeof be=="function"){T.callback=be,X(_),z=!0;break t}T===L(A)&&d(A),X(_)}else d(A);T=L(A)}if(T!==null)z=!0;else{var c=L(b);c!==null&&xt(re,c.startTime-_),z=!1}}break e}finally{T=null,M=Q,ae=!1}z=void 0}}finally{z?we():I=!1}}}var we;if(typeof k=="function")we=function(){k(zt)};else if(typeof MessageChannel<"u"){var En=new MessageChannel,Nt=En.port2;En.port1.onmessage=zt,we=function(){Nt.postMessage(null)}}else we=function(){me(zt,0)};function xt(_,z){Y=me(function(){_(q.unstable_now())},z)}q.unstable_IdlePriority=5,q.unstable_ImmediatePriority=1,q.unstable_LowPriority=4,q.unstable_NormalPriority=3,q.unstable_Profiling=null,q.unstable_UserBlockingPriority=2,q.unstable_cancelCallback=function(_){_.callback=null},q.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ke=0<_?Math.floor(1e3/_):5},q.unstable_getCurrentPriorityLevel=function(){return M},q.unstable_next=function(_){switch(M){case 1:case 2:case 3:var z=3;break;default:z=M}var Q=M;M=z;try{return _()}finally{M=Q}},q.unstable_requestPaint=function(){Te=!0},q.unstable_runWithPriority=function(_,z){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var Q=M;M=_;try{return z()}finally{M=Q}},q.unstable_scheduleCallback=function(_,z,Q){var ye=q.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ye+Q:ye):Q=ye,_){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=Q+be,_={id:Z++,callback:z,priorityLevel:_,startTime:Q,expirationTime:be,sortIndex:-1},Q>ye?(_.sortIndex=Q,V(b,_),L(A)===null&&_===L(b)&&(pe?(le(Y),Y=-1):pe=!0,xt(re,Q-ye))):(_.sortIndex=be,V(A,_),ce||ae||(ce=!0,I||(I=!0,we()))),_},q.unstable_shouldYield=Xn,q.unstable_wrapCallback=function(_){var z=M;return function(){var Q=M;M=z;try{return _.apply(this,arguments)}finally{M=Q}}}})(or)),or}var _d;function ey(){return _d||(_d=1,rr.exports=Im()),rr.exports}var cr={exports:{}},Ye={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd;function ty(){if(Sd)return Ye;Sd=1;var q=fr();function V(A){var b="https://react.dev/errors/"+A;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var Z=2;Z<arguments.length;Z++)b+="&args[]="+encodeURIComponent(arguments[Z])}return"Minified React error #"+A+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function L(){}var d={d:{f:L,r:function(){throw Error(V(522))},D:L,C:L,L,m:L,X:L,S:L,M:L},p:0,findDOMNode:null},O=Symbol.for("react.portal");function U(A,b,Z){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:T==null?null:""+T,children:A,containerInfo:b,implementation:Z}}var H=q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function G(A,b){if(A==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return Ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Ye.createPortal=function(A,b){var Z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(V(299));return U(A,b,null,Z)},Ye.flushSync=function(A){var b=H.T,Z=d.p;try{if(H.T=null,d.p=2,A)return A()}finally{H.T=b,d.p=Z,d.d.f()}},Ye.preconnect=function(A,b){typeof A=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,d.d.C(A,b))},Ye.prefetchDNS=function(A){typeof A=="string"&&d.d.D(A)},Ye.preinit=function(A,b){if(typeof A=="string"&&b&&typeof b.as=="string"){var Z=b.as,T=G(Z,b.crossOrigin),M=typeof b.integrity=="string"?b.integrity:void 0,ae=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;Z==="style"?d.d.S(A,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:T,integrity:M,fetchPriority:ae}):Z==="script"&&d.d.X(A,{crossOrigin:T,integrity:M,fetchPriority:ae,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},Ye.preinitModule=function(A,b){if(typeof A=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var Z=G(b.as,b.crossOrigin);d.d.M(A,{crossOrigin:Z,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&d.d.M(A)},Ye.preload=function(A,b){if(typeof A=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var Z=b.as,T=G(Z,b.crossOrigin);d.d.L(A,Z,{crossOrigin:T,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},Ye.preloadModule=function(A,b){if(typeof A=="string")if(b){var Z=G(b.as,b.crossOrigin);d.d.m(A,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:Z,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else d.d.m(A)},Ye.requestFormReset=function(A){d.d.r(A)},Ye.unstable_batchedUpdates=function(A,b){return A(b)},Ye.useFormState=function(A,b,Z){return H.H.useFormState(A,b,Z)},Ye.useFormStatus=function(){return H.H.useHostTransitionStatus()},Ye.version="19.2.4",Ye}var xd;function ny(){if(xd)return cr.exports;xd=1;function q(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q)}catch(V){console.error(V)}}return q(),cr.exports=ty(),cr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function ly(){if(Ed)return xa;Ed=1;var q=ey(),V=fr(),L=ny();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function U(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function H(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function G(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(U(e)!==e)throw Error(d(188))}function b(e){var t=e.alternate;if(!t){if(t=U(e),t===null)throw Error(d(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return A(a),e;if(i===l)return A(a),t;i=i.sibling}throw Error(d(188))}if(n.return!==l.return)n=a,l=i;else{for(var u=!1,s=a.child;s;){if(s===n){u=!0,n=a,l=i;break}if(s===l){u=!0,l=a,n=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===n){u=!0,n=i,l=a;break}if(s===l){u=!0,l=i,n=a;break}s=s.sibling}if(!u)throw Error(d(189))}}if(n.alternate!==l)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:t}function Z(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Z(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,M=Symbol.for("react.element"),ae=Symbol.for("react.transitional.element"),ce=Symbol.for("react.portal"),pe=Symbol.for("react.fragment"),Te=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),le=Symbol.for("react.consumer"),k=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),Xn=Symbol.for("react.memo_cache_sentinel"),zt=Symbol.iterator;function we(e){return e===null||typeof e!="object"?null:(e=zt&&e[zt]||e["@@iterator"],typeof e=="function"?e:null)}var En=Symbol.for("react.client.reference");function Nt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===En?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pe:return"Fragment";case me:return"Profiler";case Te:return"StrictMode";case re:return"Suspense";case I:return"SuspenseList";case Tt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ce:return"Portal";case k:return e.displayName||"Context";case le:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:Nt(e.type)||"Memo";case Ke:t=e._payload,e=e._init;try{return Nt(e(t))}catch{}}return null}var xt=Array.isArray,_=V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=L.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},ye=[],be=-1;function c(e){return{current:e}}function E(e){0>be||(e.current=ye[be],ye[be]=null,be--)}function C(e,t){be++,ye[be]=e.current,e.current=t}var j=c(null),K=c(null),P=c(null),oe=c(null);function Ze(e,t){switch(C(P,t),C(K,e),C(j,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hf(t),e=Qf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(j),C(j,e)}function ze(){E(j),E(K),E(P)}function Cl(e){e.memoizedState!==null&&C(oe,e);var t=j.current,n=Qf(t,e.type);t!==n&&(C(K,e),C(j,n))}function Ea(e){K.current===e&&(E(j),E(K)),oe.current===e&&(E(oe),ha._currentValue=Q)}var Vi,dr;function qn(e){if(Vi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vi=t&&t[1]||"",dr=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vi+e+dr}var Yi=!1;function Xi(e,t){if(!e||Yi)return"";Yi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(g){var y=g}Reflect.construct(e,[],x)}else{try{x.call()}catch(g){y=g}e.call(x.prototype)}}else{try{throw Error()}catch(g){y=g}(x=e())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(g){if(g&&y&&typeof g.stack=="string")return[g.stack,y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var r=u.split(`
`),m=s.split(`
`);for(a=l=0;l<r.length&&!r[l].includes("DetermineComponentFrameRoot");)l++;for(;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;if(l===r.length||a===m.length)for(l=r.length-1,a=m.length-1;1<=l&&0<=a&&r[l]!==m[a];)a--;for(;1<=l&&0<=a;l--,a--)if(r[l]!==m[a]){if(l!==1||a!==1)do if(l--,a--,0>a||r[l]!==m[a]){var h=`
`+r[l].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=l&&0<=a);break}}}finally{Yi=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?qn(n):""}function Td(e,t){switch(e.tag){case 26:case 27:case 5:return qn(e.type);case 16:return qn("Lazy");case 13:return e.child!==t&&t!==null?qn("Suspense Fallback"):qn("Suspense");case 19:return qn("SuspenseList");case 0:case 15:return Xi(e.type,!1);case 11:return Xi(e.type.render,!1);case 1:return Xi(e.type,!0);case 31:return qn("Activity");default:return""}}function pr(e){try{var t="",n=null;do t+=Td(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Zi=Object.prototype.hasOwnProperty,Ji=q.unstable_scheduleCallback,Ki=q.unstable_cancelCallback,zd=q.unstable_shouldYield,Cd=q.unstable_requestPaint,tt=q.unstable_now,Od=q.unstable_getCurrentPriorityLevel,mr=q.unstable_ImmediatePriority,yr=q.unstable_UserBlockingPriority,qa=q.unstable_NormalPriority,Dd=q.unstable_LowPriority,gr=q.unstable_IdlePriority,jd=q.log,Nd=q.unstable_setDisableYieldValue,Ol=null,nt=null;function Wt(e){if(typeof jd=="function"&&Nd(e),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(Ol,e)}catch{}}var lt=Math.clz32?Math.clz32:Rd,Md=Math.log,Ud=Math.LN2;function Rd(e){return e>>>=0,e===0?32:31-(Md(e)/Ud|0)|0}var Aa=256,Ta=262144,za=4194304;function An(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ca(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?a=An(l):(u&=s,u!==0?a=An(u):n||(n=s&~e,n!==0&&(a=An(n))))):(s=l&~i,s!==0?a=An(s):u!==0?a=An(u):n||(n=l&~e,n!==0&&(a=An(n)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:a}function Dl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ld(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hr(){var e=za;return za<<=1,(za&62914560)===0&&(za=4194304),e}function wi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bd(e,t,n,l,a,i){var u=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,r=e.expirationTimes,m=e.hiddenUpdates;for(n=u&~n;0<n;){var h=31-lt(n),x=1<<h;s[h]=0,r[h]=-1;var y=m[h];if(y!==null)for(m[h]=null,h=0;h<y.length;h++){var g=y[h];g!==null&&(g.lane&=-536870913)}n&=~x}l!==0&&vr(e,l,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function vr(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-lt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function br(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-lt(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function _r(e,t){var n=t&-t;return n=(n&42)!==0?1:Fi(n),(n&(e.suspendedLanes|t))!==0?0:n}function Fi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ki(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Sr(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:rd(e.type))}function xr(e,t){var n=z.p;try{return z.p=e,t()}finally{z.p=n}}var $t=Math.random().toString(36).slice(2),Be="__reactFiber$"+$t,Fe="__reactProps$"+$t,Zn="__reactContainer$"+$t,Pi="__reactEvents$"+$t,Hd="__reactListeners$"+$t,Qd="__reactHandles$"+$t,Er="__reactResources$"+$t,Nl="__reactMarker$"+$t;function Wi(e){delete e[Be],delete e[Fe],delete e[Pi],delete e[Hd],delete e[Qd]}function Jn(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zn]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Kf(e);e!==null;){if(n=e[Be])return n;e=Kf(e)}return t}e=n,n=e.parentNode}return null}function Kn(e){if(e=e[Be]||e[Zn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ml(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function wn(e){var t=e[Er];return t||(t=e[Er]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Re(e){e[Nl]=!0}var qr=new Set,Ar={};function Tn(e,t){Fn(e,t),Fn(e+"Capture",t)}function Fn(e,t){for(Ar[e]=t,e=0;e<t.length;e++)qr.add(t[e])}var Gd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Tr={},zr={};function Vd(e){return Zi.call(zr,e)?!0:Zi.call(Tr,e)?!1:Gd.test(e)?zr[e]=!0:(Tr[e]=!0,!1)}function Oa(e,t,n){if(Vd(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Da(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Mt(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yd(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(u){n=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $i(e){if(!e._valueTracker){var t=Cr(e)?"checked":"value";e._valueTracker=Yd(e,t,""+e[t])}}function Or(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Cr(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function ja(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Xd=/[\n"\\]/g;function pt(e){return e.replace(Xd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ii(e,t,n,l,a,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?eu(e,u,dt(t)):n!=null?eu(e,u,dt(n)):l!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+dt(s):e.removeAttribute("name")}function Dr(e,t,n,l,a,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){$i(e);return}n=n!=null?""+dt(n):"",t=t!=null?""+dt(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),$i(e)}function eu(e,t,n){t==="number"&&ja(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function kn(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function jr(e,t,n){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+dt(n):""}function Nr(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(d(92));if(xt(l)){if(1<l.length)throw Error(d(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=dt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),$i(e)}function Pn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mr(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||Zd.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ur(e,t,n){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&Mr(e,a,l)}else for(var i in t)t.hasOwnProperty(i)&&Mr(e,i,t[i])}function tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Na(e){return Kd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ut(){}var nu=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wn=null,$n=null;function Rr(e){var t=Kn(e);if(t&&(e=t.stateNode)){var n=e[Fe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ii(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+pt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[Fe]||null;if(!a)throw Error(d(90));Ii(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&Or(l)}break e;case"textarea":jr(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&kn(e,!!n.multiple,t,!1)}}}var au=!1;function Lr(e,t,n){if(au)return e(t,n);au=!0;try{var l=e(t);return l}finally{if(au=!1,(Wn!==null||$n!==null)&&(bi(),Wn&&(t=Wn,e=$n,$n=Wn=null,Rr(t),e)))for(t=0;t<e.length;t++)Rr(e[t])}}function Ul(e,t){var n=e.stateNode;if(n===null)return null;var l=n[Fe]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,t,typeof n));return n}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if(Rt)try{var Rl={};Object.defineProperty(Rl,"passive",{get:function(){iu=!0}}),window.addEventListener("test",Rl,Rl),window.removeEventListener("test",Rl,Rl)}catch{iu=!1}var It=null,uu=null,Ma=null;function Br(){if(Ma)return Ma;var e,t=uu,n=t.length,l,a="value"in It?It.value:It.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var u=n-e;for(l=1;l<=u&&t[n-l]===a[i-l];l++);return Ma=a.slice(e,1<l?1-l:void 0)}function Ua(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ra(){return!0}function Hr(){return!1}function ke(e){function t(n,l,a,i,u){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ra:Hr,this.isPropagationStopped=Hr,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},La=ke(zn),Ll=T({},zn,{view:0,detail:0}),wd=ke(Ll),su,ru,Bl,Ba=T({},Ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bl&&(Bl&&e.type==="mousemove"?(su=e.screenX-Bl.screenX,ru=e.screenY-Bl.screenY):ru=su=0,Bl=e),su)},movementY:function(e){return"movementY"in e?e.movementY:ru}}),Qr=ke(Ba),Fd=T({},Ba,{dataTransfer:0}),kd=ke(Fd),Pd=T({},Ll,{relatedTarget:0}),ou=ke(Pd),Wd=T({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),$d=ke(Wd),Id=T({},zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ep=ke(Id),tp=T({},zn,{data:0}),Gr=ke(tp),np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ap={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ip(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ap[e])?!!t[e]:!1}function cu(){return ip}var up=T({},Ll,{key:function(e){if(e.key){var t=np[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ua(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(e){return e.type==="keypress"?Ua(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ua(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sp=ke(up),rp=T({},Ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vr=ke(rp),op=T({},Ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),cp=ke(op),fp=T({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),dp=ke(fp),pp=T({},Ba,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mp=ke(pp),yp=T({},zn,{newState:0,oldState:0}),gp=ke(yp),hp=[9,13,27,32],fu=Rt&&"CompositionEvent"in window,Hl=null;Rt&&"documentMode"in document&&(Hl=document.documentMode);var vp=Rt&&"TextEvent"in window&&!Hl,Yr=Rt&&(!fu||Hl&&8<Hl&&11>=Hl),Xr=" ",Zr=!1;function Jr(e,t){switch(e){case"keyup":return hp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var In=!1;function bp(e,t){switch(e){case"compositionend":return Kr(t);case"keypress":return t.which!==32?null:(Zr=!0,Xr);case"textInput":return e=t.data,e===Xr&&Zr?null:e;default:return null}}function _p(e,t){if(In)return e==="compositionend"||!fu&&Jr(e,t)?(e=Br(),Ma=uu=It=null,In=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yr&&t.locale!=="ko"?null:t.data;default:return null}}var Sp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sp[e.type]:t==="textarea"}function Fr(e,t,n,l){Wn?$n?$n.push(l):$n=[l]:Wn=l,t=Ti(t,"onChange"),0<t.length&&(n=new La("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Ql=null,Gl=null;function xp(e){Nf(e,0)}function Ha(e){var t=Ml(e);if(Or(t))return e}function kr(e,t){if(e==="change")return t}var Pr=!1;if(Rt){var du;if(Rt){var pu="oninput"in document;if(!pu){var Wr=document.createElement("div");Wr.setAttribute("oninput","return;"),pu=typeof Wr.oninput=="function"}du=pu}else du=!1;Pr=du&&(!document.documentMode||9<document.documentMode)}function $r(){Ql&&(Ql.detachEvent("onpropertychange",Ir),Gl=Ql=null)}function Ir(e){if(e.propertyName==="value"&&Ha(Gl)){var t=[];Fr(t,Gl,e,lu(e)),Lr(xp,t)}}function Ep(e,t,n){e==="focusin"?($r(),Ql=t,Gl=n,Ql.attachEvent("onpropertychange",Ir)):e==="focusout"&&$r()}function qp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ha(Gl)}function Ap(e,t){if(e==="click")return Ha(t)}function Tp(e,t){if(e==="input"||e==="change")return Ha(t)}function zp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:zp;function Vl(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!Zi.call(t,a)||!at(e[a],t[a]))return!1}return!0}function eo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function to(e,t){var n=eo(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eo(n)}}function no(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?no(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ja(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ja(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Cp=Rt&&"documentMode"in document&&11>=document.documentMode,el=null,yu=null,Yl=null,gu=!1;function ao(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gu||el==null||el!==ja(l)||(l=el,"selectionStart"in l&&mu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Yl&&Vl(Yl,l)||(Yl=l,l=Ti(yu,"onSelect"),0<l.length&&(t=new La("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=el)))}function Cn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tl={animationend:Cn("Animation","AnimationEnd"),animationiteration:Cn("Animation","AnimationIteration"),animationstart:Cn("Animation","AnimationStart"),transitionrun:Cn("Transition","TransitionRun"),transitionstart:Cn("Transition","TransitionStart"),transitioncancel:Cn("Transition","TransitionCancel"),transitionend:Cn("Transition","TransitionEnd")},hu={},io={};Rt&&(io=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function On(e){if(hu[e])return hu[e];if(!tl[e])return e;var t=tl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in io)return hu[e]=t[n];return e}var uo=On("animationend"),so=On("animationiteration"),ro=On("animationstart"),Op=On("transitionrun"),Dp=On("transitionstart"),jp=On("transitioncancel"),oo=On("transitionend"),co=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function Et(e,t){co.set(e,t),Tn(t,[e])}var Qa=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},mt=[],nl=0,bu=0;function Ga(){for(var e=nl,t=bu=nl=0;t<e;){var n=mt[t];mt[t++]=null;var l=mt[t];mt[t++]=null;var a=mt[t];mt[t++]=null;var i=mt[t];if(mt[t++]=null,l!==null&&a!==null){var u=l.pending;u===null?a.next=a:(a.next=u.next,u.next=a),l.pending=a}i!==0&&fo(n,a,i)}}function Va(e,t,n,l){mt[nl++]=e,mt[nl++]=t,mt[nl++]=n,mt[nl++]=l,bu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function _u(e,t,n,l){return Va(e,t,n,l),Ya(e)}function Dn(e,t){return Va(e,null,null,t),Ya(e)}function fo(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,i=e.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&t!==null&&(a=31-lt(n),e=i.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),i):null}function Ya(e){if(50<ca)throw ca=0,Os=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ll={};function Np(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,l){return new Np(e,t,n,l)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lt(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function po(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Xa(e,t,n,l,a,i){var u=0;if(l=e,typeof e=="function")Su(e)&&(u=1);else if(typeof e=="string")u=Bm(e,n,j.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Tt:return e=it(31,n,t,a),e.elementType=Tt,e.lanes=i,e;case pe:return jn(n.children,a,i,t);case Te:u=8,a|=24;break;case me:return e=it(12,n,t,a|2),e.elementType=me,e.lanes=i,e;case re:return e=it(13,n,t,a),e.elementType=re,e.lanes=i,e;case I:return e=it(19,n,t,a),e.elementType=I,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k:u=10;break e;case le:u=9;break e;case X:u=11;break e;case Y:u=14;break e;case Ke:u=16,l=null;break e}u=29,n=Error(d(130,e===null?"null":typeof e,"")),l=null}return t=it(u,n,t,a),t.elementType=e,t.type=l,t.lanes=i,t}function jn(e,t,n,l){return e=it(7,e,l,t),e.lanes=n,e}function xu(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function mo(e){var t=it(18,null,null,0);return t.stateNode=e,t}function Eu(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var yo=new WeakMap;function yt(e,t){if(typeof e=="object"&&e!==null){var n=yo.get(e);return n!==void 0?n:(t={value:e,source:t,stack:pr(t)},yo.set(e,t),t)}return{value:e,source:t,stack:pr(t)}}var al=[],il=0,Za=null,Xl=0,gt=[],ht=0,en=null,Ct=1,Ot="";function Bt(e,t){al[il++]=Xl,al[il++]=Za,Za=e,Xl=t}function go(e,t,n){gt[ht++]=Ct,gt[ht++]=Ot,gt[ht++]=en,en=e;var l=Ct;e=Ot;var a=32-lt(l)-1;l&=~(1<<a),n+=1;var i=32-lt(t)+a;if(30<i){var u=a-a%5;i=(l&(1<<u)-1).toString(32),l>>=u,a-=u,Ct=1<<32-lt(t)+a|n<<a|l,Ot=i+e}else Ct=1<<i|n<<a|l,Ot=e}function qu(e){e.return!==null&&(Bt(e,1),go(e,1,0))}function Au(e){for(;e===Za;)Za=al[--il],al[il]=null,Xl=al[--il],al[il]=null;for(;e===en;)en=gt[--ht],gt[ht]=null,Ot=gt[--ht],gt[ht]=null,Ct=gt[--ht],gt[ht]=null}function ho(e,t){gt[ht++]=Ct,gt[ht++]=Ot,gt[ht++]=en,Ct=t.id,Ot=t.overflow,en=e}var He=null,Se=null,ne=!1,tn=null,vt=!1,Tu=Error(d(519));function nn(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zl(yt(t,e)),Tu}function vo(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[Be]=e,t[Fe]=l,n){case"dialog":$("cancel",t),$("close",t);break;case"iframe":case"object":case"embed":$("load",t);break;case"video":case"audio":for(n=0;n<da.length;n++)$(da[n],t);break;case"source":$("error",t);break;case"img":case"image":case"link":$("error",t),$("load",t);break;case"details":$("toggle",t);break;case"input":$("invalid",t),Dr(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":$("invalid",t);break;case"textarea":$("invalid",t),Nr(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||Lf(t.textContent,n)?(l.popover!=null&&($("beforetoggle",t),$("toggle",t)),l.onScroll!=null&&$("scroll",t),l.onScrollEnd!=null&&$("scrollend",t),l.onClick!=null&&(t.onclick=Ut),t=!0):t=!1,t||nn(e,!0)}function bo(e){for(He=e.return;He;)switch(He.tag){case 5:case 31:case 13:vt=!1;return;case 27:case 3:vt=!0;return;default:He=He.return}}function ul(e){if(e!==He)return!1;if(!ne)return bo(e),ne=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Zs(e.type,e.memoizedProps)),n=!n),n&&Se&&nn(e),bo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Se=Jf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Se=Jf(e)}else t===27?(t=Se,hn(e.type)?(e=ks,ks=null,Se=e):Se=t):Se=He?_t(e.stateNode.nextSibling):null;return!0}function Nn(){Se=He=null,ne=!1}function zu(){var e=tn;return e!==null&&(Ie===null?Ie=e:Ie.push.apply(Ie,e),tn=null),e}function Zl(e){tn===null?tn=[e]:tn.push(e)}var Cu=c(null),Mn=null,Ht=null;function ln(e,t,n){C(Cu,t._currentValue),t._currentValue=n}function Qt(e){e._currentValue=Cu.current,E(Cu)}function Ou(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Du(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var u=a.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=a;for(var r=0;r<t.length;r++)if(s.context===t[r]){i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ou(i.return,n,e),l||(u=null);break e}i=s.next}}else if(a.tag===18){if(u=a.return,u===null)throw Error(d(341));u.lanes|=n,i=u.alternate,i!==null&&(i.lanes|=n),Ou(u,n,e),u=null}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===e){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}}function sl(e,t,n,l){e=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var u=a.alternate;if(u===null)throw Error(d(387));if(u=u.memoizedProps,u!==null){var s=a.type;at(a.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(a===oe.current){if(u=a.alternate,u===null)throw Error(d(387));u.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(ha):e=[ha])}a=a.return}e!==null&&Du(t,e,n,l),t.flags|=262144}function Ja(e){for(e=e.firstContext;e!==null;){if(!at(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Un(e){Mn=e,Ht=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return _o(Mn,e)}function Ka(e,t){return Mn===null&&Un(e),_o(e,t)}function _o(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ht===null){if(e===null)throw Error(d(308));Ht=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ht=Ht.next=t;return n}var Mp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Up=q.unstable_scheduleCallback,Rp=q.unstable_NormalPriority,De={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new Mp,data:new Map,refCount:0}}function Jl(e){e.refCount--,e.refCount===0&&Up(Rp,function(){e.controller.abort()})}var Kl=null,Nu=0,rl=0,ol=null;function Lp(e,t){if(Kl===null){var n=Kl=[];Nu=0,rl=Rs(),ol={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Nu++,t.then(So,So),t}function So(){if(--Nu===0&&Kl!==null){ol!==null&&(ol.status="fulfilled");var e=Kl;Kl=null,rl=0,ol=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Bp(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var xo=_.S;_.S=function(e,t){uf=tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Lp(e,t),xo!==null&&xo(e,t)};var Rn=c(null);function Mu(){var e=Rn.current;return e!==null?e:_e.pooledCache}function wa(e,t){t===null?C(Rn,Rn.current):C(Rn,t.pool)}function Eo(){var e=Mu();return e===null?null:{parent:De._currentValue,pool:e}}var cl=Error(d(460)),Uu=Error(d(474)),Fa=Error(d(542)),ka={then:function(){}};function qo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ao(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ut,Ut),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zo(e),e;default:if(typeof t.status=="string")t.then(Ut,Ut);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zo(e),e}throw Bn=t,cl}}function Ln(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Bn=n,cl):n}}var Bn=null;function To(){if(Bn===null)throw Error(d(459));var e=Bn;return Bn=null,e}function zo(e){if(e===cl||e===Fa)throw Error(d(483))}var fl=null,wl=0;function Pa(e){var t=wl;return wl+=1,fl===null&&(fl=[]),Ao(fl,e,t)}function Fl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Wa(e,t){throw t.$$typeof===M?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Co(e){function t(f,o){if(e){var p=f.deletions;p===null?(f.deletions=[o],f.flags|=16):p.push(o)}}function n(f,o){if(!e)return null;for(;o!==null;)t(f,o),o=o.sibling;return null}function l(f){for(var o=new Map;f!==null;)f.key!==null?o.set(f.key,f):o.set(f.index,f),f=f.sibling;return o}function a(f,o){return f=Lt(f,o),f.index=0,f.sibling=null,f}function i(f,o,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<o?(f.flags|=67108866,o):p):(f.flags|=67108866,o)):(f.flags|=1048576,o)}function u(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function s(f,o,p,S){return o===null||o.tag!==6?(o=xu(p,f.mode,S),o.return=f,o):(o=a(o,p),o.return=f,o)}function r(f,o,p,S){var R=p.type;return R===pe?h(f,o,p.props.children,S,p.key):o!==null&&(o.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ke&&Ln(R)===o.type)?(o=a(o,p.props),Fl(o,p),o.return=f,o):(o=Xa(p.type,p.key,p.props,null,f.mode,S),Fl(o,p),o.return=f,o)}function m(f,o,p,S){return o===null||o.tag!==4||o.stateNode.containerInfo!==p.containerInfo||o.stateNode.implementation!==p.implementation?(o=Eu(p,f.mode,S),o.return=f,o):(o=a(o,p.children||[]),o.return=f,o)}function h(f,o,p,S,R){return o===null||o.tag!==7?(o=jn(p,f.mode,S,R),o.return=f,o):(o=a(o,p),o.return=f,o)}function x(f,o,p){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=xu(""+o,f.mode,p),o.return=f,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case ae:return p=Xa(o.type,o.key,o.props,null,f.mode,p),Fl(p,o),p.return=f,p;case ce:return o=Eu(o,f.mode,p),o.return=f,o;case Ke:return o=Ln(o),x(f,o,p)}if(xt(o)||we(o))return o=jn(o,f.mode,p,null),o.return=f,o;if(typeof o.then=="function")return x(f,Pa(o),p);if(o.$$typeof===k)return x(f,Ka(f,o),p);Wa(f,o)}return null}function y(f,o,p,S){var R=o!==null?o.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return R!==null?null:s(f,o,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ae:return p.key===R?r(f,o,p,S):null;case ce:return p.key===R?m(f,o,p,S):null;case Ke:return p=Ln(p),y(f,o,p,S)}if(xt(p)||we(p))return R!==null?null:h(f,o,p,S,null);if(typeof p.then=="function")return y(f,o,Pa(p),S);if(p.$$typeof===k)return y(f,o,Ka(f,p),S);Wa(f,p)}return null}function g(f,o,p,S,R){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(p)||null,s(o,f,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ae:return f=f.get(S.key===null?p:S.key)||null,r(o,f,S,R);case ce:return f=f.get(S.key===null?p:S.key)||null,m(o,f,S,R);case Ke:return S=Ln(S),g(f,o,p,S,R)}if(xt(S)||we(S))return f=f.get(p)||null,h(o,f,S,R,null);if(typeof S.then=="function")return g(f,o,p,Pa(S),R);if(S.$$typeof===k)return g(f,o,p,Ka(o,S),R);Wa(o,S)}return null}function D(f,o,p,S){for(var R=null,ie=null,N=o,F=o=0,te=null;N!==null&&F<p.length;F++){N.index>F?(te=N,N=null):te=N.sibling;var ue=y(f,N,p[F],S);if(ue===null){N===null&&(N=te);break}e&&N&&ue.alternate===null&&t(f,N),o=i(ue,o,F),ie===null?R=ue:ie.sibling=ue,ie=ue,N=te}if(F===p.length)return n(f,N),ne&&Bt(f,F),R;if(N===null){for(;F<p.length;F++)N=x(f,p[F],S),N!==null&&(o=i(N,o,F),ie===null?R=N:ie.sibling=N,ie=N);return ne&&Bt(f,F),R}for(N=l(N);F<p.length;F++)te=g(N,f,F,p[F],S),te!==null&&(e&&te.alternate!==null&&N.delete(te.key===null?F:te.key),o=i(te,o,F),ie===null?R=te:ie.sibling=te,ie=te);return e&&N.forEach(function(xn){return t(f,xn)}),ne&&Bt(f,F),R}function B(f,o,p,S){if(p==null)throw Error(d(151));for(var R=null,ie=null,N=o,F=o=0,te=null,ue=p.next();N!==null&&!ue.done;F++,ue=p.next()){N.index>F?(te=N,N=null):te=N.sibling;var xn=y(f,N,ue.value,S);if(xn===null){N===null&&(N=te);break}e&&N&&xn.alternate===null&&t(f,N),o=i(xn,o,F),ie===null?R=xn:ie.sibling=xn,ie=xn,N=te}if(ue.done)return n(f,N),ne&&Bt(f,F),R;if(N===null){for(;!ue.done;F++,ue=p.next())ue=x(f,ue.value,S),ue!==null&&(o=i(ue,o,F),ie===null?R=ue:ie.sibling=ue,ie=ue);return ne&&Bt(f,F),R}for(N=l(N);!ue.done;F++,ue=p.next())ue=g(N,f,F,ue.value,S),ue!==null&&(e&&ue.alternate!==null&&N.delete(ue.key===null?F:ue.key),o=i(ue,o,F),ie===null?R=ue:ie.sibling=ue,ie=ue);return e&&N.forEach(function(Fm){return t(f,Fm)}),ne&&Bt(f,F),R}function ve(f,o,p,S){if(typeof p=="object"&&p!==null&&p.type===pe&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ae:e:{for(var R=p.key;o!==null;){if(o.key===R){if(R=p.type,R===pe){if(o.tag===7){n(f,o.sibling),S=a(o,p.props.children),S.return=f,f=S;break e}}else if(o.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ke&&Ln(R)===o.type){n(f,o.sibling),S=a(o,p.props),Fl(S,p),S.return=f,f=S;break e}n(f,o);break}else t(f,o);o=o.sibling}p.type===pe?(S=jn(p.props.children,f.mode,S,p.key),S.return=f,f=S):(S=Xa(p.type,p.key,p.props,null,f.mode,S),Fl(S,p),S.return=f,f=S)}return u(f);case ce:e:{for(R=p.key;o!==null;){if(o.key===R)if(o.tag===4&&o.stateNode.containerInfo===p.containerInfo&&o.stateNode.implementation===p.implementation){n(f,o.sibling),S=a(o,p.children||[]),S.return=f,f=S;break e}else{n(f,o);break}else t(f,o);o=o.sibling}S=Eu(p,f.mode,S),S.return=f,f=S}return u(f);case Ke:return p=Ln(p),ve(f,o,p,S)}if(xt(p))return D(f,o,p,S);if(we(p)){if(R=we(p),typeof R!="function")throw Error(d(150));return p=R.call(p),B(f,o,p,S)}if(typeof p.then=="function")return ve(f,o,Pa(p),S);if(p.$$typeof===k)return ve(f,o,Ka(f,p),S);Wa(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,o!==null&&o.tag===6?(n(f,o.sibling),S=a(o,p),S.return=f,f=S):(n(f,o),S=xu(p,f.mode,S),S.return=f,f=S),u(f)):n(f,o)}return function(f,o,p,S){try{wl=0;var R=ve(f,o,p,S);return fl=null,R}catch(N){if(N===cl||N===Fa)throw N;var ie=it(29,N,null,f.mode);return ie.lanes=S,ie.return=f,ie}finally{}}}var Hn=Co(!0),Oo=Co(!1),an=!1;function Ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function un(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(se&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=Ya(e),fo(e,null,n),t}return Va(e,l,t,n),Ya(e)}function kl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,br(e,n)}}function Bu(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=u:i=i.next=u,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Hu=!1;function Pl(){if(Hu){var e=ol;if(e!==null)throw e}}function Wl(e,t,n,l){Hu=!1;var a=e.updateQueue;an=!1;var i=a.firstBaseUpdate,u=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var r=s,m=r.next;r.next=null,u===null?i=m:u.next=m,u=r;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==u&&(s===null?h.firstBaseUpdate=m:s.next=m,h.lastBaseUpdate=r))}if(i!==null){var x=a.baseState;u=0,h=m=r=null,s=i;do{var y=s.lane&-536870913,g=y!==s.lane;if(g?(ee&y)===y:(l&y)===y){y!==0&&y===rl&&(Hu=!0),h!==null&&(h=h.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var D=e,B=s;y=t;var ve=n;switch(B.tag){case 1:if(D=B.payload,typeof D=="function"){x=D.call(ve,x,y);break e}x=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=B.payload,y=typeof D=="function"?D.call(ve,x,y):D,y==null)break e;x=T({},x,y);break e;case 2:an=!0}}y=s.callback,y!==null&&(e.flags|=64,g&&(e.flags|=8192),g=a.callbacks,g===null?a.callbacks=[y]:g.push(y))}else g={lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(m=h=g,r=x):h=h.next=g,u|=y;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;g=s,s=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);h===null&&(r=x),a.baseState=r,a.firstBaseUpdate=m,a.lastBaseUpdate=h,i===null&&(a.shared.lanes=0),dn|=u,e.lanes=u,e.memoizedState=x}}function Do(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function jo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Do(n[e],t)}var dl=c(null),$a=c(0);function No(e,t){e=Ft,C($a,e),C(dl,t),Ft=e|t.baseLanes}function Qu(){C($a,Ft),C(dl,dl.current)}function Gu(){Ft=$a.current,E(dl),E($a)}var ut=c(null),bt=null;function rn(e){var t=e.alternate;C(Ce,Ce.current&1),C(ut,e),bt===null&&(t===null||dl.current!==null||t.memoizedState!==null)&&(bt=e)}function Vu(e){C(Ce,Ce.current),C(ut,e),bt===null&&(bt=e)}function Mo(e){e.tag===22?(C(Ce,Ce.current),C(ut,e),bt===null&&(bt=e)):on()}function on(){C(Ce,Ce.current),C(ut,ut.current)}function st(e){E(ut),bt===e&&(bt=null),E(Ce)}var Ce=c(0);function Ia(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ws(n)||Fs(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gt=0,w=null,ge=null,je=null,ei=!1,pl=!1,Qn=!1,ti=0,$l=0,ml=null,Hp=0;function qe(){throw Error(d(321))}function Yu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!at(e[n],t[n]))return!1;return!0}function Xu(e,t,n,l,a,i){return Gt=i,w=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?gc:as,Qn=!1,i=n(l,a),Qn=!1,pl&&(i=Ro(t,n,l,a)),Uo(e),i}function Uo(e){_.H=ta;var t=ge!==null&&ge.next!==null;if(Gt=0,je=ge=w=null,ei=!1,$l=0,ml=null,t)throw Error(d(300));e===null||Ne||(e=e.dependencies,e!==null&&Ja(e)&&(Ne=!0))}function Ro(e,t,n,l){w=e;var a=0;do{if(pl&&(ml=null),$l=0,pl=!1,25<=a)throw Error(d(301));if(a+=1,je=ge=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}_.H=hc,i=t(n,l)}while(pl);return i}function Qp(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?Il(t):t,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(w.flags|=1024),t}function Zu(){var e=ti!==0;return ti=0,e}function Ju(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ku(e){if(ei){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ei=!1}Gt=0,je=ge=w=null,pl=!1,$l=ti=0,ml=null}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?w.memoizedState=je=e:je=je.next=e,je}function Oe(){if(ge===null){var e=w.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=je===null?w.memoizedState:je.next;if(t!==null)je=t,ge=e;else{if(e===null)throw w.alternate===null?Error(d(467)):Error(d(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},je===null?w.memoizedState=je=e:je=je.next=e}return je}function ni(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Il(e){var t=$l;return $l+=1,ml===null&&(ml=[]),e=Ao(ml,e,t),t=w,(je===null?t.memoizedState:je.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?gc:as),e}function li(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Il(e);if(e.$$typeof===k)return Qe(e)}throw Error(d(438,String(e)))}function wu(e){var t=null,n=w.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=w.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ni(),w.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=Xn;return t.index++,n}function Vt(e,t){return typeof t=="function"?t(e):t}function ai(e){var t=Oe();return Fu(t,ge,e)}function Fu(e,t,n){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=n;var a=e.baseQueue,i=l.pending;if(i!==null){if(a!==null){var u=a.next;a.next=i.next,i.next=u}t.baseQueue=a=i,l.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{t=a.next;var s=u=null,r=null,m=t,h=!1;do{var x=m.lane&-536870913;if(x!==m.lane?(ee&x)===x:(Gt&x)===x){var y=m.revertLane;if(y===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),x===rl&&(h=!0);else if((Gt&y)===y){m=m.next,y===rl&&(h=!0);continue}else x={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},r===null?(s=r=x,u=i):r=r.next=x,w.lanes|=y,dn|=y;x=m.action,Qn&&n(i,x),i=m.hasEagerState?m.eagerState:n(i,x)}else y={lane:x,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},r===null?(s=r=y,u=i):r=r.next=y,w.lanes|=x,dn|=x;m=m.next}while(m!==null&&m!==t);if(r===null?u=i:r.next=s,!at(i,e.memoizedState)&&(Ne=!0,h&&(n=ol,n!==null)))throw n;e.memoizedState=i,e.baseState=u,e.baseQueue=r,l.lastRenderedState=i}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function ku(e){var t=Oe(),n=t.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var u=a=a.next;do i=e(i,u.action),u=u.next;while(u!==a);at(i,t.memoizedState)||(Ne=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function Lo(e,t,n){var l=w,a=Oe(),i=ne;if(i){if(n===void 0)throw Error(d(407));n=n()}else n=t();var u=!at((ge||a).memoizedState,n);if(u&&(a.memoizedState=n,Ne=!0),a=a.queue,$u(Qo.bind(null,l,a,e),[e]),a.getSnapshot!==t||u||je!==null&&je.memoizedState.tag&1){if(l.flags|=2048,yl(9,{destroy:void 0},Ho.bind(null,l,a,n,t),null),_e===null)throw Error(d(349));i||(Gt&127)!==0||Bo(l,t,n)}return n}function Bo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=w.updateQueue,t===null?(t=ni(),w.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,l){t.value=n,t.getSnapshot=l,Go(t)&&Vo(e)}function Qo(e,t,n){return n(function(){Go(t)&&Vo(e)})}function Go(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!at(e,n)}catch{return!0}}function Vo(e){var t=Dn(e,2);t!==null&&et(t,e,2)}function Pu(e){var t=Je();if(typeof e=="function"){var n=e;if(e=n(),Qn){Wt(!0);try{n()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:e},t}function Yo(e,t,n,l){return e.baseState=n,Fu(e,ge,typeof l=="function"?l:Vt)}function Gp(e,t,n,l,a){if(si(e))throw Error(d(485));if(e=t.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};_.T!==null?n(!0):i.isTransition=!1,l(i),n=t.pending,n===null?(i.next=t.pending=i,Xo(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Xo(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var i=_.T,u={};_.T=u;try{var s=n(a,l),r=_.S;r!==null&&r(u,s),Zo(e,t,s)}catch(m){Wu(e,t,m)}finally{i!==null&&u.types!==null&&(i.types=u.types),_.T=i}}else try{i=n(a,l),Zo(e,t,i)}catch(m){Wu(e,t,m)}}function Zo(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Jo(e,t,l)},function(l){return Wu(e,t,l)}):Jo(e,t,n)}function Jo(e,t,n){t.status="fulfilled",t.value=n,Ko(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Xo(e,n)))}function Wu(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Ko(t),t=t.next;while(t!==l)}e.action=null}function Ko(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function wo(e,t){return t}function Fo(e,t){if(ne){var n=_e.formState;if(n!==null){e:{var l=w;if(ne){if(Se){t:{for(var a=Se,i=vt;a.nodeType!==8;){if(!i){a=null;break t}if(a=_t(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){Se=_t(a.nextSibling),l=a.data==="F!";break e}}nn(l)}l=!1}l&&(t=n[0])}}return n=Je(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},n.queue=l,n=pc.bind(null,w,l),l.dispatch=n,l=Pu(!1),i=ls.bind(null,w,!1,l.queue),l=Je(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=Gp.bind(null,w,a,i,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function ko(e){var t=Oe();return Po(t,ge,e)}function Po(e,t,n){if(t=Fu(e,t,wo)[0],e=ai(Vt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Il(t)}catch(u){throw u===cl?Fa:u}else l=t;t=Oe();var a=t.queue,i=a.dispatch;return n!==t.memoizedState&&(w.flags|=2048,yl(9,{destroy:void 0},Vp.bind(null,a,n),null)),[l,i,e]}function Vp(e,t){e.action=t}function Wo(e){var t=Oe(),n=ge;if(n!==null)return Po(t,n,e);Oe(),t=t.memoizedState,n=Oe();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function yl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=w.updateQueue,t===null&&(t=ni(),w.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function $o(){return Oe().memoizedState}function ii(e,t,n,l){var a=Je();w.flags|=e,a.memoizedState=yl(1|t,{destroy:void 0},n,l===void 0?null:l)}function ui(e,t,n,l){var a=Oe();l=l===void 0?null:l;var i=a.memoizedState.inst;ge!==null&&l!==null&&Yu(l,ge.memoizedState.deps)?a.memoizedState=yl(t,i,n,l):(w.flags|=e,a.memoizedState=yl(1|t,i,n,l))}function Io(e,t){ii(8390656,8,e,t)}function $u(e,t){ui(2048,8,e,t)}function Yp(e){w.flags|=4;var t=w.updateQueue;if(t===null)t=ni(),w.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ec(e){var t=Oe().memoizedState;return Yp({ref:t,nextImpl:e}),function(){if((se&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function tc(e,t){return ui(4,2,e,t)}function nc(e,t){return ui(4,4,e,t)}function lc(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ac(e,t,n){n=n!=null?n.concat([e]):null,ui(4,4,lc.bind(null,t,e),n)}function Iu(){}function ic(e,t){var n=Oe();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Yu(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function uc(e,t){var n=Oe();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Yu(t,l[1]))return l[0];if(l=e(),Qn){Wt(!0);try{e()}finally{Wt(!1)}}return n.memoizedState=[l,t],l}function es(e,t,n){return n===void 0||(Gt&1073741824)!==0&&(ee&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=rf(),w.lanes|=e,dn|=e,n)}function sc(e,t,n,l){return at(n,t)?n:dl.current!==null?(e=es(e,n,l),at(e,t)||(Ne=!0),e):(Gt&42)===0||(Gt&1073741824)!==0&&(ee&261930)===0?(Ne=!0,e.memoizedState=n):(e=rf(),w.lanes|=e,dn|=e,t)}function rc(e,t,n,l,a){var i=z.p;z.p=i!==0&&8>i?i:8;var u=_.T,s={};_.T=s,ls(e,!1,t,n);try{var r=a(),m=_.S;if(m!==null&&m(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var h=Bp(r,l);ea(e,t,h,ct(e))}else ea(e,t,l,ct(e))}catch(x){ea(e,t,{then:function(){},status:"rejected",reason:x},ct())}finally{z.p=i,u!==null&&s.types!==null&&(u.types=s.types),_.T=u}}function Xp(){}function ts(e,t,n,l){if(e.tag!==5)throw Error(d(476));var a=oc(e).queue;rc(e,a,t,Q,n===null?Xp:function(){return cc(e),n(l)})}function oc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:Q},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function cc(e){var t=oc(e);t.next===null&&(t=e.alternate.memoizedState),ea(e,t.next.queue,{},ct())}function ns(){return Qe(ha)}function fc(){return Oe().memoizedState}function dc(){return Oe().memoizedState}function Zp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ct();e=un(n);var l=sn(t,e,n);l!==null&&(et(l,t,n),kl(l,t,n)),t={cache:ju()},e.payload=t;return}t=t.return}}function Jp(e,t,n){var l=ct();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},si(e)?mc(t,n):(n=_u(e,t,n,l),n!==null&&(et(n,e,l),yc(n,t,l)))}function pc(e,t,n){var l=ct();ea(e,t,n,l)}function ea(e,t,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(si(e))mc(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,n);if(a.hasEagerState=!0,a.eagerState=s,at(s,u))return Va(e,t,a,0),_e===null&&Ga(),!1}catch{}finally{}if(n=_u(e,t,a,l),n!==null)return et(n,e,l),yc(n,t,l),!0}return!1}function ls(e,t,n,l){if(l={lane:2,revertLane:Rs(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},si(e)){if(t)throw Error(d(479))}else t=_u(e,n,l,2),t!==null&&et(t,e,2)}function si(e){var t=e.alternate;return e===w||t!==null&&t===w}function mc(e,t){pl=ei=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yc(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,br(e,n)}}var ta={readContext:Qe,use:li,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe};ta.useEffectEvent=qe;var gc={readContext:Qe,use:li,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:Io,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ii(4194308,4,lc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ii(4194308,4,e,t)},useInsertionEffect:function(e,t){ii(4,2,e,t)},useMemo:function(e,t){var n=Je();t=t===void 0?null:t;var l=e();if(Qn){Wt(!0);try{e()}finally{Wt(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Je();if(n!==void 0){var a=n(t);if(Qn){Wt(!0);try{n(t)}finally{Wt(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=Jp.bind(null,w,e),[l.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:function(e){e=Pu(e);var t=e.queue,n=pc.bind(null,w,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Iu,useDeferredValue:function(e,t){var n=Je();return es(n,e,t)},useTransition:function(){var e=Pu(!1);return e=rc.bind(null,w,e.queue,!0,!1),Je().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=w,a=Je();if(ne){if(n===void 0)throw Error(d(407));n=n()}else{if(n=t(),_e===null)throw Error(d(349));(ee&127)!==0||Bo(l,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Io(Qo.bind(null,l,i,e),[e]),l.flags|=2048,yl(9,{destroy:void 0},Ho.bind(null,l,i,n,t),null),n},useId:function(){var e=Je(),t=_e.identifierPrefix;if(ne){var n=Ot,l=Ct;n=(l&~(1<<32-lt(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ti++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Hp++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ns,useFormState:Fo,useActionState:Fo,useOptimistic:function(e){var t=Je();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ls.bind(null,w,!0,n),n.dispatch=t,[e,t]},useMemoCache:wu,useCacheRefresh:function(){return Je().memoizedState=Zp.bind(null,w)},useEffectEvent:function(e){var t=Je(),n={impl:e};return t.memoizedState=n,function(){if((se&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}},as={readContext:Qe,use:li,useCallback:ic,useContext:Qe,useEffect:$u,useImperativeHandle:ac,useInsertionEffect:tc,useLayoutEffect:nc,useMemo:uc,useReducer:ai,useRef:$o,useState:function(){return ai(Vt)},useDebugValue:Iu,useDeferredValue:function(e,t){var n=Oe();return sc(n,ge.memoizedState,e,t)},useTransition:function(){var e=ai(Vt)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:Il(e),t]},useSyncExternalStore:Lo,useId:fc,useHostTransitionStatus:ns,useFormState:ko,useActionState:ko,useOptimistic:function(e,t){var n=Oe();return Yo(n,ge,e,t)},useMemoCache:wu,useCacheRefresh:dc};as.useEffectEvent=ec;var hc={readContext:Qe,use:li,useCallback:ic,useContext:Qe,useEffect:$u,useImperativeHandle:ac,useInsertionEffect:tc,useLayoutEffect:nc,useMemo:uc,useReducer:ku,useRef:$o,useState:function(){return ku(Vt)},useDebugValue:Iu,useDeferredValue:function(e,t){var n=Oe();return ge===null?es(n,e,t):sc(n,ge.memoizedState,e,t)},useTransition:function(){var e=ku(Vt)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:Il(e),t]},useSyncExternalStore:Lo,useId:fc,useHostTransitionStatus:ns,useFormState:Wo,useActionState:Wo,useOptimistic:function(e,t){var n=Oe();return ge!==null?Yo(n,ge,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:wu,useCacheRefresh:dc};hc.useEffectEvent=ec;function is(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var us={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=ct(),a=un(l);a.payload=t,n!=null&&(a.callback=n),t=sn(e,a,l),t!==null&&(et(t,e,l),kl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=ct(),a=un(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=sn(e,a,l),t!==null&&(et(t,e,l),kl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ct(),l=un(n);l.tag=2,t!=null&&(l.callback=t),t=sn(e,l,n),t!==null&&(et(t,e,n),kl(t,e,n))}};function vc(e,t,n,l,a,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!Vl(n,l)||!Vl(a,i):!0}function bc(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&us.enqueueReplaceState(t,t.state,null)}function Gn(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=T({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function _c(e){Qa(e)}function Sc(e){console.error(e)}function xc(e){Qa(e)}function ri(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Ec(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function ss(e,t,n){return n=un(n),n.tag=3,n.payload={element:null},n.callback=function(){ri(e,t)},n}function qc(e){return e=un(e),e.tag=3,e}function Ac(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;e.payload=function(){return a(i)},e.callback=function(){Ec(t,n,l)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Ec(t,n,l),typeof a!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Kp(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&sl(t,n,a,!0),n=ut.current,n!==null){switch(n.tag){case 31:case 13:return bt===null?_i():n.alternate===null&&Ae===0&&(Ae=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===ka?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Ns(e,l,a)),!1;case 22:return n.flags|=65536,l===ka?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Ns(e,l,a)),!1}throw Error(d(435,n.tag))}return Ns(e,l,a),_i(),!1}if(ne)return t=ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==Tu&&(e=Error(d(422),{cause:l}),Zl(yt(e,n)))):(l!==Tu&&(t=Error(d(423),{cause:l}),Zl(yt(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=yt(l,n),a=ss(e.stateNode,l,a),Bu(e,a),Ae!==4&&(Ae=2)),!1;var i=Error(d(520),{cause:l});if(i=yt(i,n),oa===null?oa=[i]:oa.push(i),Ae!==4&&(Ae=2),t===null)return!0;l=yt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ss(n.stateNode,l,e),Bu(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(pn===null||!pn.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=qc(a),Ac(a,e,n,l),Bu(n,a),!1}n=n.return}while(n!==null);return!1}var rs=Error(d(461)),Ne=!1;function Ge(e,t,n,l){t.child=e===null?Oo(t,null,n,l):Hn(t,e.child,n,l)}function Tc(e,t,n,l,a){n=n.render;var i=t.ref;if("ref"in l){var u={};for(var s in l)s!=="ref"&&(u[s]=l[s])}else u=l;return Un(t),l=Xu(e,t,n,u,i,a),s=Zu(),e!==null&&!Ne?(Ju(e,t,a),Yt(e,t,a)):(ne&&s&&qu(t),t.flags|=1,Ge(e,t,l,a),t.child)}function zc(e,t,n,l,a){if(e===null){var i=n.type;return typeof i=="function"&&!Su(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Cc(e,t,i,l,a)):(e=Xa(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!gs(e,a)){var u=i.memoizedProps;if(n=n.compare,n=n!==null?n:Vl,n(u,l)&&e.ref===t.ref)return Yt(e,t,a)}return t.flags|=1,e=Lt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Cc(e,t,n,l,a){if(e!==null){var i=e.memoizedProps;if(Vl(i,l)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=l=i,gs(e,a))(e.flags&131072)!==0&&(Ne=!0);else return t.lanes=e.lanes,Yt(e,t,a)}return os(e,t,n,l,a)}function Oc(e,t,n,l){var a=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(l=t.child=e.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~i}else l=0,t.child=null;return Dc(e,t,i,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wa(t,i!==null?i.cachePool:null),i!==null?No(t,i):Qu(),Mo(t);else return l=t.lanes=536870912,Dc(e,t,i!==null?i.baseLanes|n:n,n,l)}else i!==null?(wa(t,i.cachePool),No(t,i),on(),t.memoizedState=null):(e!==null&&wa(t,null),Qu(),on());return Ge(e,t,a,n),t.child}function na(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Dc(e,t,n,l,a){var i=Mu();return i=i===null?null:{parent:De._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&wa(t,null),Qu(),Mo(t),e!==null&&sl(e,t,l,!0),t.childLanes=a,null}function oi(e,t){return t=fi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function jc(e,t,n){return Hn(t,e.child,null,n),e=oi(t,t.pendingProps),e.flags|=2,st(t),t.memoizedState=null,e}function wp(e,t,n){var l=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ne){if(l.mode==="hidden")return e=oi(t,l),t.lanes=536870912,na(null,e);if(Vu(t),(e=Se)?(e=Zf(e,vt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:en!==null?{id:Ct,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},n=mo(e),n.return=t,t.child=n,He=t,Se=null)):e=null,e===null)throw nn(t);return t.lanes=536870912,null}return oi(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Vu(t),a)if(t.flags&256)t.flags&=-257,t=jc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(Ne||sl(e,t,n,!1),a=(n&e.childLanes)!==0,Ne||a){if(l=_e,l!==null&&(u=_r(l,n),u!==0&&u!==i.retryLane))throw i.retryLane=u,Dn(e,u),et(l,e,u),rs;_i(),t=jc(e,t,n)}else e=i.treeContext,Se=_t(u.nextSibling),He=t,ne=!0,tn=null,vt=!1,e!==null&&ho(t,e),t=oi(t,l),t.flags|=4096;return t}return e=Lt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ci(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(d(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function os(e,t,n,l,a){return Un(t),n=Xu(e,t,n,l,void 0,a),l=Zu(),e!==null&&!Ne?(Ju(e,t,a),Yt(e,t,a)):(ne&&l&&qu(t),t.flags|=1,Ge(e,t,n,a),t.child)}function Nc(e,t,n,l,a,i){return Un(t),t.updateQueue=null,n=Ro(t,l,n,a),Uo(e),l=Zu(),e!==null&&!Ne?(Ju(e,t,i),Yt(e,t,i)):(ne&&l&&qu(t),t.flags|=1,Ge(e,t,n,i),t.child)}function Mc(e,t,n,l,a){if(Un(t),t.stateNode===null){var i=ll,u=n.contextType;typeof u=="object"&&u!==null&&(i=Qe(u)),i=new n(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=us,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Ru(t),u=n.contextType,i.context=typeof u=="object"&&u!==null?Qe(u):ll,i.state=t.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(is(t,n,u,l),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&us.enqueueReplaceState(i,i.state,null),Wl(t,l,i,a),Pl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,r=Gn(n,s);i.props=r;var m=i.context,h=n.contextType;u=ll,typeof h=="object"&&h!==null&&(u=Qe(h));var x=n.getDerivedStateFromProps;h=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||m!==u)&&bc(t,i,l,u),an=!1;var y=t.memoizedState;i.state=y,Wl(t,l,i,a),Pl(),m=t.memoizedState,s||y!==m||an?(typeof x=="function"&&(is(t,n,x,l),m=t.memoizedState),(r=an||vc(t,n,r,l,y,m,u))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=m),i.props=l,i.state=m,i.context=u,l=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Lu(e,t),u=t.memoizedProps,h=Gn(n,u),i.props=h,x=t.pendingProps,y=i.context,m=n.contextType,r=ll,typeof m=="object"&&m!==null&&(r=Qe(m)),s=n.getDerivedStateFromProps,(m=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==x||y!==r)&&bc(t,i,l,r),an=!1,y=t.memoizedState,i.state=y,Wl(t,l,i,a),Pl();var g=t.memoizedState;u!==x||y!==g||an||e!==null&&e.dependencies!==null&&Ja(e.dependencies)?(typeof s=="function"&&(is(t,n,s,l),g=t.memoizedState),(h=an||vc(t,n,h,l,y,g,r)||e!==null&&e.dependencies!==null&&Ja(e.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,g,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,g,r)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=g),i.props=l,i.state=g,i.context=r,l=h):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,ci(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Hn(t,e.child,null,a),t.child=Hn(t,null,n,a)):Ge(e,t,n,a),t.memoizedState=i.state,e=t.child):e=Yt(e,t,a),e}function Uc(e,t,n,l){return Nn(),t.flags|=256,Ge(e,t,n,l),t.child}var cs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fs(e){return{baseLanes:e,cachePool:Eo()}}function ds(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ot),e}function Rc(e,t,n){var l=t.pendingProps,a=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Ce.current&2)!==0),u&&(a=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(ne){if(a?rn(t):on(),(e=Se)?(e=Zf(e,vt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:en!==null?{id:Ct,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},n=mo(e),n.return=t,t.child=n,He=t,Se=null)):e=null,e===null)throw nn(t);return Fs(e)?t.lanes=32:t.lanes=536870912,null}var s=l.children;return l=l.fallback,a?(on(),a=t.mode,s=fi({mode:"hidden",children:s},a),l=jn(l,a,n,null),s.return=t,l.return=t,s.sibling=l,t.child=s,l=t.child,l.memoizedState=fs(n),l.childLanes=ds(e,u,n),t.memoizedState=cs,na(null,l)):(rn(t),ps(t,s))}var r=e.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(i)t.flags&256?(rn(t),t.flags&=-257,t=ms(e,t,n)):t.memoizedState!==null?(on(),t.child=e.child,t.flags|=128,t=null):(on(),s=l.fallback,a=t.mode,l=fi({mode:"visible",children:l.children},a),s=jn(s,a,n,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,Hn(t,e.child,null,n),l=t.child,l.memoizedState=fs(n),l.childLanes=ds(e,u,n),t.memoizedState=cs,t=na(null,l));else if(rn(t),Fs(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var m=u.dgst;u=m,l=Error(d(419)),l.stack="",l.digest=u,Zl({value:l,source:null,stack:null}),t=ms(e,t,n)}else if(Ne||sl(e,t,n,!1),u=(n&e.childLanes)!==0,Ne||u){if(u=_e,u!==null&&(l=_r(u,n),l!==0&&l!==r.retryLane))throw r.retryLane=l,Dn(e,l),et(u,e,l),rs;ws(s)||_i(),t=ms(e,t,n)}else ws(s)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,Se=_t(s.nextSibling),He=t,ne=!0,tn=null,vt=!1,e!==null&&ho(t,e),t=ps(t,l.children),t.flags|=4096);return t}return a?(on(),s=l.fallback,a=t.mode,r=e.child,m=r.sibling,l=Lt(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&65011712,m!==null?s=Lt(m,s):(s=jn(s,a,n,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,na(null,l),l=t.child,s=e.child.memoizedState,s===null?s=fs(n):(a=s.cachePool,a!==null?(r=De._currentValue,a=a.parent!==r?{parent:r,pool:r}:a):a=Eo(),s={baseLanes:s.baseLanes|n,cachePool:a}),l.memoizedState=s,l.childLanes=ds(e,u,n),t.memoizedState=cs,na(e.child,l)):(rn(t),n=e.child,e=n.sibling,n=Lt(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=n,t.memoizedState=null,n)}function ps(e,t){return t=fi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function fi(e,t){return e=it(22,e,null,t),e.lanes=0,e}function ms(e,t,n){return Hn(t,e.child,null,n),e=ps(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lc(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ou(e.return,t,n)}function ys(e,t,n,l,a,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=n,u.tailMode=a,u.treeForkCount=i)}function Bc(e,t,n){var l=t.pendingProps,a=l.revealOrder,i=l.tail;l=l.children;var u=Ce.current,s=(u&2)!==0;if(s?(u=u&1|2,t.flags|=128):u&=1,C(Ce,u),Ge(e,t,l,n),l=ne?Xl:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lc(e,n,t);else if(e.tag===19)Lc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Ia(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ys(t,!1,a,n,i,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ia(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ys(t,!0,n,null,i,l);break;case"together":ys(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(sl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,n=Lt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Lt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ja(e)))}function Fp(e,t,n){switch(t.tag){case 3:Ze(t,t.stateNode.containerInfo),ln(t,De,e.memoizedState.cache),Nn();break;case 27:case 5:Cl(t);break;case 4:Ze(t,t.stateNode.containerInfo);break;case 10:ln(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Vu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(rn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Rc(e,t,n):(rn(t),e=Yt(e,t,n),e!==null?e.sibling:null);rn(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(sl(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return Bc(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),C(Ce,Ce.current),l)break;return null;case 22:return t.lanes=0,Oc(e,t,n,t.pendingProps);case 24:ln(t,De,e.memoizedState.cache)}return Yt(e,t,n)}function Hc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ne=!0;else{if(!gs(e,n)&&(t.flags&128)===0)return Ne=!1,Fp(e,t,n);Ne=(e.flags&131072)!==0}else Ne=!1,ne&&(t.flags&1048576)!==0&&go(t,Xl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ln(t.elementType),t.type=e,typeof e=="function")Su(e)?(l=Gn(e,l),t.tag=1,t=Mc(null,t,e,l,n)):(t.tag=0,t=os(null,t,e,l,n));else{if(e!=null){var a=e.$$typeof;if(a===X){t.tag=11,t=Tc(null,t,e,l,n);break e}else if(a===Y){t.tag=14,t=zc(null,t,e,l,n);break e}}throw t=Nt(e)||e,Error(d(306,t,""))}}return t;case 0:return os(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=Gn(l,t.pendingProps),Mc(e,t,l,a,n);case 3:e:{if(Ze(t,t.stateNode.containerInfo),e===null)throw Error(d(387));l=t.pendingProps;var i=t.memoizedState;a=i.element,Lu(e,t),Wl(t,l,null,n);var u=t.memoizedState;if(l=u.cache,ln(t,De,l),l!==i.cache&&Du(t,[De],n,!0),Pl(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Uc(e,t,l,n);break e}else if(l!==a){a=yt(Error(d(424)),t),Zl(a),t=Uc(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Se=_t(e.firstChild),He=t,ne=!0,tn=null,vt=!0,n=Oo(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Nn(),l===a){t=Yt(e,t,n);break e}Ge(e,t,l,n)}t=t.child}return t;case 26:return ci(e,t),e===null?(n=Pf(t.type,null,t.pendingProps,null))?t.memoizedState=n:ne||(n=t.type,e=t.pendingProps,l=zi(P.current).createElement(n),l[Be]=t,l[Fe]=e,Ve(l,n,e),Re(l),t.stateNode=l):t.memoizedState=Pf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Cl(t),e===null&&ne&&(l=t.stateNode=wf(t.type,t.pendingProps,P.current),He=t,vt=!0,a=Se,hn(t.type)?(ks=a,Se=_t(l.firstChild)):Se=a),Ge(e,t,t.pendingProps.children,n),ci(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ne&&((a=l=Se)&&(l=qm(l,t.type,t.pendingProps,vt),l!==null?(t.stateNode=l,He=t,Se=_t(l.firstChild),vt=!1,a=!0):a=!1),a||nn(t)),Cl(t),a=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,Zs(a,i)?l=null:u!==null&&Zs(a,u)&&(t.flags|=32),t.memoizedState!==null&&(a=Xu(e,t,Qp,null,null,n),ha._currentValue=a),ci(e,t),Ge(e,t,l,n),t.child;case 6:return e===null&&ne&&((e=n=Se)&&(n=Am(n,t.pendingProps,vt),n!==null?(t.stateNode=n,He=t,Se=null,e=!0):e=!1),e||nn(t)),null;case 13:return Rc(e,t,n);case 4:return Ze(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Hn(t,null,l,n):Ge(e,t,l,n),t.child;case 11:return Tc(e,t,t.type,t.pendingProps,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,ln(t,t.type,l.value),Ge(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,Un(t),a=Qe(a),l=l(a),t.flags|=1,Ge(e,t,l,n),t.child;case 14:return zc(e,t,t.type,t.pendingProps,n);case 15:return Cc(e,t,t.type,t.pendingProps,n);case 19:return Bc(e,t,n);case 31:return wp(e,t,n);case 22:return Oc(e,t,n,t.pendingProps);case 24:return Un(t),l=Qe(De),e===null?(a=Mu(),a===null&&(a=_e,i=ju(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:l,cache:a},Ru(t),ln(t,De,a)):((e.lanes&n)!==0&&(Lu(e,t),Wl(t,null,null,n),Pl()),a=e.memoizedState,i=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ln(t,De,l)):(l=i.cache,ln(t,De,l),l!==a.cache&&Du(t,[De],n,!0))),Ge(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function Xt(e){e.flags|=4}function hs(e,t,n,l,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(df())e.flags|=8192;else throw Bn=ka,Uu}else e.flags&=-16777217}function Qc(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!td(t))if(df())e.flags|=8192;else throw Bn=ka,Uu}function di(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?hr():536870912,e.lanes|=t,bl|=t)}function la(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function kp(e,t,n){var l=t.pendingProps;switch(Au(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return xe(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Qt(De),ze(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ul(t)?Xt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zu())),xe(t),null;case 26:var a=t.type,i=t.memoizedState;return e===null?(Xt(t),i!==null?(xe(t),Qc(t,i)):(xe(t),hs(t,a,null,l,n))):i?i!==e.memoizedState?(Xt(t),xe(t),Qc(t,i)):(xe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Xt(t),xe(t),hs(t,a,e,l,n)),null;case 27:if(Ea(t),n=P.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Xt(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return xe(t),null}e=j.current,ul(t)?vo(t):(e=wf(a,l,n),t.stateNode=e,Xt(t))}return xe(t),null;case 5:if(Ea(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Xt(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return xe(t),null}if(i=j.current,ul(t))vo(t);else{var u=zi(P.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(a,{is:l.is}):u.createElement(a)}}i[Be]=t,i[Fe]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Ve(i,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Xt(t)}}return xe(t),hs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Xt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(d(166));if(e=P.current,ul(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=He,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[Be]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Lf(e.nodeValue,n)),e||nn(t,!0)}else e=zi(e).createTextNode(l),e[Be]=t,t.stateNode=e}return xe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=ul(t),n!==null){if(e===null){if(!l)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Be]=t}else Nn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),e=!1}else n=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(st(t),t):(st(t),null);if((t.flags&128)!==0)throw Error(d(558))}return xe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ul(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(d(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(d(317));a[Be]=t}else Nn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),a=!1}else a=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(st(t),t):(st(t),null)}return st(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),di(t,t.updateQueue),xe(t),null);case 4:return ze(),e===null&&Qs(t.stateNode.containerInfo),xe(t),null;case 10:return Qt(t.type),xe(t),null;case 19:if(E(Ce),l=t.memoizedState,l===null)return xe(t),null;if(a=(t.flags&128)!==0,i=l.rendering,i===null)if(a)la(l,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ia(e),i!==null){for(t.flags|=128,la(l,!1),e=i.updateQueue,t.updateQueue=e,di(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)po(n,e),n=n.sibling;return C(Ce,Ce.current&1|2),ne&&Bt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&tt()>hi&&(t.flags|=128,a=!0,la(l,!1),t.lanes=4194304)}else{if(!a)if(e=Ia(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,di(t,e),la(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ne)return xe(t),null}else 2*tt()-l.renderingStartTime>hi&&n!==536870912&&(t.flags|=128,a=!0,la(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=tt(),e.sibling=null,n=Ce.current,C(Ce,a?n&1|2:n&1),ne&&Bt(t,l.treeForkCount),e):(xe(t),null);case 22:case 23:return st(t),Gu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),n=t.updateQueue,n!==null&&di(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&E(Rn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Qt(De),xe(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function Pp(e,t){switch(Au(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qt(De),ze(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ea(t),null;case 31:if(t.memoizedState!==null){if(st(t),t.alternate===null)throw Error(d(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(st(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(Ce),null;case 4:return ze(),null;case 10:return Qt(t.type),null;case 22:case 23:return st(t),Gu(),e!==null&&E(Rn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qt(De),null;case 25:return null;default:return null}}function Gc(e,t){switch(Au(t),t.tag){case 3:Qt(De),ze();break;case 26:case 27:case 5:Ea(t);break;case 4:ze();break;case 31:t.memoizedState!==null&&st(t);break;case 13:st(t);break;case 19:E(Ce);break;case 10:Qt(t.type);break;case 22:case 23:st(t),Gu(),e!==null&&E(Rn);break;case 24:Qt(De)}}function aa(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var i=n.create,u=n.inst;l=i(),u.destroy=l}n=n.next}while(n!==a)}}catch(s){de(t,t.return,s)}}function cn(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){var u=l.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,a=t;var r=n,m=s;try{m()}catch(h){de(a,r,h)}}}l=l.next}while(l!==i)}}catch(h){de(t,t.return,h)}}function Vc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{jo(t,n)}catch(l){de(e,e.return,l)}}}function Yc(e,t,n){n.props=Gn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){de(e,t,l)}}function ia(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){de(e,t,a)}}function Dt(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){de(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){de(e,t,a)}else n.current=null}function Xc(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){de(e,e.return,a)}}function vs(e,t,n){try{var l=e.stateNode;vm(l,e.type,n,t),l[Fe]=t}catch(a){de(e,e.return,a)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&hn(e.type)||e.tag===4}function bs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&hn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _s(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ut));else if(l!==4&&(l===27&&hn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(_s(e,t,n),e=e.sibling;e!==null;)_s(e,t,n),e=e.sibling}function pi(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&hn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(pi(e,t,n),e=e.sibling;e!==null;)pi(e,t,n),e=e.sibling}function Jc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ve(t,l,n),t[Be]=e,t[Fe]=n}catch(i){de(e,e.return,i)}}var Zt=!1,Me=!1,Ss=!1,Kc=typeof WeakSet=="function"?WeakSet:Set,Le=null;function Wp(e,t){if(e=e.containerInfo,Ys=Ui,e=lo(e),mu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var u=0,s=-1,r=-1,m=0,h=0,x=e,y=null;t:for(;;){for(var g;x!==n||a!==0&&x.nodeType!==3||(s=u+a),x!==i||l!==0&&x.nodeType!==3||(r=u+l),x.nodeType===3&&(u+=x.nodeValue.length),(g=x.firstChild)!==null;)y=x,x=g;for(;;){if(x===e)break t;if(y===n&&++m===a&&(s=u),y===i&&++h===l&&(r=u),(g=x.nextSibling)!==null)break;x=y,y=x.parentNode}x=g}n=s===-1||r===-1?null:{start:s,end:r}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xs={focusedElem:e,selectionRange:n},Ui=!1,Le=t;Le!==null;)if(t=Le,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Le=e;else for(;Le!==null;){switch(t=Le,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,l=n.stateNode;try{var D=Gn(n.type,a);e=l.getSnapshotBeforeUpdate(D,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(B){de(n,n.return,B)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ks(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ks(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,Le=e;break}Le=t.return}}function wc(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Kt(e,n),l&4&&aa(5,n);break;case 1:if(Kt(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(u){de(n,n.return,u)}else{var a=Gn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){de(n,n.return,u)}}l&64&&Vc(n),l&512&&ia(n,n.return);break;case 3:if(Kt(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{jo(e,t)}catch(u){de(n,n.return,u)}}break;case 27:t===null&&l&4&&Jc(n);case 26:case 5:Kt(e,n),t===null&&l&4&&Xc(n),l&512&&ia(n,n.return);break;case 12:Kt(e,n);break;case 31:Kt(e,n),l&4&&Pc(e,n);break;case 13:Kt(e,n),l&4&&Wc(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=um.bind(null,n),Tm(e,n))));break;case 22:if(l=n.memoizedState!==null||Zt,!l){t=t!==null&&t.memoizedState!==null||Me,a=Zt;var i=Me;Zt=l,(Me=t)&&!i?wt(e,n,(n.subtreeFlags&8772)!==0):Kt(e,n),Zt=a,Me=i}break;case 30:break;default:Kt(e,n)}}function Fc(e){var t=e.alternate;t!==null&&(e.alternate=null,Fc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ee=null,Pe=!1;function Jt(e,t,n){for(n=n.child;n!==null;)kc(e,t,n),n=n.sibling}function kc(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Ol,n)}catch{}switch(n.tag){case 26:Me||Dt(n,t),Jt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Me||Dt(n,t);var l=Ee,a=Pe;hn(n.type)&&(Ee=n.stateNode,Pe=!1),Jt(e,t,n),ma(n.stateNode),Ee=l,Pe=a;break;case 5:Me||Dt(n,t);case 6:if(l=Ee,a=Pe,Ee=null,Jt(e,t,n),Ee=l,Pe=a,Ee!==null)if(Pe)try{(Ee.nodeType===9?Ee.body:Ee.nodeName==="HTML"?Ee.ownerDocument.body:Ee).removeChild(n.stateNode)}catch(i){de(n,t,i)}else try{Ee.removeChild(n.stateNode)}catch(i){de(n,t,i)}break;case 18:Ee!==null&&(Pe?(e=Ee,Yf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),zl(e)):Yf(Ee,n.stateNode));break;case 4:l=Ee,a=Pe,Ee=n.stateNode.containerInfo,Pe=!0,Jt(e,t,n),Ee=l,Pe=a;break;case 0:case 11:case 14:case 15:cn(2,n,t),Me||cn(4,n,t),Jt(e,t,n);break;case 1:Me||(Dt(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Yc(n,t,l)),Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:Me=(l=Me)||n.memoizedState!==null,Jt(e,t,n),Me=l;break;default:Jt(e,t,n)}}function Pc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zl(e)}catch(n){de(t,t.return,n)}}}function Wc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zl(e)}catch(n){de(t,t.return,n)}}function $p(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Kc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Kc),t;default:throw Error(d(435,e.tag))}}function mi(e,t){var n=$p(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var a=sm.bind(null,e,l);l.then(a,a)}})}function We(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],i=e,u=t,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(hn(s.type)){Ee=s.stateNode,Pe=!1;break e}break;case 5:Ee=s.stateNode,Pe=!1;break e;case 3:case 4:Ee=s.stateNode.containerInfo,Pe=!0;break e}s=s.return}if(Ee===null)throw Error(d(160));kc(i,u,a),Ee=null,Pe=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)$c(t,e),t=t.sibling}var qt=null;function $c(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:We(t,e),$e(e),l&4&&(cn(3,e,e.return),aa(3,e),cn(5,e,e.return));break;case 1:We(t,e),$e(e),l&512&&(Me||n===null||Dt(n,n.return)),l&64&&Zt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=qt;if(We(t,e),$e(e),l&512&&(Me||n===null||Dt(n,n.return)),l&4){var i=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Nl]||i[Be]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(l),a.head.insertBefore(i,a.querySelector("head > title"))),Ve(i,l,n),i[Be]=e,Re(i),l=i;break e;case"link":var u=If("link","href",a).get(l+(n.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(s,1);break t}}i=a.createElement(l),Ve(i,l,n),a.head.appendChild(i);break;case"meta":if(u=If("meta","content",a).get(l+(n.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(s,1);break t}}i=a.createElement(l),Ve(i,l,n),a.head.appendChild(i);break;default:throw Error(d(468,l))}i[Be]=e,Re(i),l=i}e.stateNode=l}else ed(a,e.type,e.stateNode);else e.stateNode=$f(a,l,e.memoizedProps);else i!==l?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,l===null?ed(a,e.type,e.stateNode):$f(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&vs(e,e.memoizedProps,n.memoizedProps)}break;case 27:We(t,e),$e(e),l&512&&(Me||n===null||Dt(n,n.return)),n!==null&&l&4&&vs(e,e.memoizedProps,n.memoizedProps);break;case 5:if(We(t,e),$e(e),l&512&&(Me||n===null||Dt(n,n.return)),e.flags&32){a=e.stateNode;try{Pn(a,"")}catch(D){de(e,e.return,D)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,vs(e,a,n!==null?n.memoizedProps:a)),l&1024&&(Ss=!0);break;case 6:if(We(t,e),$e(e),l&4){if(e.stateNode===null)throw Error(d(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(D){de(e,e.return,D)}}break;case 3:if(Di=null,a=qt,qt=Ci(t.containerInfo),We(t,e),qt=a,$e(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{zl(t.containerInfo)}catch(D){de(e,e.return,D)}Ss&&(Ss=!1,Ic(e));break;case 4:l=qt,qt=Ci(e.stateNode.containerInfo),We(t,e),$e(e),qt=l;break;case 12:We(t,e),$e(e);break;case 31:We(t,e),$e(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 13:We(t,e),$e(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(gi=tt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 22:a=e.memoizedState!==null;var r=n!==null&&n.memoizedState!==null,m=Zt,h=Me;if(Zt=m||a,Me=h||r,We(t,e),Me=h,Zt=m,$e(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||r||Zt||Me||Vn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){r=n=t;try{if(i=r.stateNode,a)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=r.stateNode;var x=r.memoizedProps.style,y=x!=null&&x.hasOwnProperty("display")?x.display:null;s.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(D){de(r,r.return,D)}}}else if(t.tag===6){if(n===null){r=t;try{r.stateNode.nodeValue=a?"":r.memoizedProps}catch(D){de(r,r.return,D)}}}else if(t.tag===18){if(n===null){r=t;try{var g=r.stateNode;a?Xf(g,!0):Xf(r.stateNode,!1)}catch(D){de(r,r.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,mi(e,n))));break;case 19:We(t,e),$e(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 30:break;case 21:break;default:We(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Zc(l)){n=l;break}l=l.return}if(n==null)throw Error(d(160));switch(n.tag){case 27:var a=n.stateNode,i=bs(e);pi(e,i,a);break;case 5:var u=n.stateNode;n.flags&32&&(Pn(u,""),n.flags&=-33);var s=bs(e);pi(e,s,u);break;case 3:case 4:var r=n.stateNode.containerInfo,m=bs(e);_s(e,m,r);break;default:throw Error(d(161))}}catch(h){de(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ic(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ic(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Kt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)wc(e,t.alternate,t),t=t.sibling}function Vn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:cn(4,t,t.return),Vn(t);break;case 1:Dt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Yc(t,t.return,n),Vn(t);break;case 27:ma(t.stateNode);case 26:case 5:Dt(t,t.return),Vn(t);break;case 22:t.memoizedState===null&&Vn(t);break;case 30:Vn(t);break;default:Vn(t)}e=e.sibling}}function wt(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:wt(a,i,n),aa(4,i);break;case 1:if(wt(a,i,n),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(m){de(l,l.return,m)}if(l=i,a=l.updateQueue,a!==null){var s=l.stateNode;try{var r=a.shared.hiddenCallbacks;if(r!==null)for(a.shared.hiddenCallbacks=null,a=0;a<r.length;a++)Do(r[a],s)}catch(m){de(l,l.return,m)}}n&&u&64&&Vc(i),ia(i,i.return);break;case 27:Jc(i);case 26:case 5:wt(a,i,n),n&&l===null&&u&4&&Xc(i),ia(i,i.return);break;case 12:wt(a,i,n);break;case 31:wt(a,i,n),n&&u&4&&Pc(a,i);break;case 13:wt(a,i,n),n&&u&4&&Wc(a,i);break;case 22:i.memoizedState===null&&wt(a,i,n),ia(i,i.return);break;case 30:break;default:wt(a,i,n)}t=t.sibling}}function xs(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Jl(n))}function Es(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e))}function At(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ef(e,t,n,l),t=t.sibling}function ef(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:At(e,t,n,l),a&2048&&aa(9,t);break;case 1:At(e,t,n,l);break;case 3:At(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e)));break;case 12:if(a&2048){At(e,t,n,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){de(t,t.return,r)}}else At(e,t,n,l);break;case 31:At(e,t,n,l);break;case 13:At(e,t,n,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?At(e,t,n,l):ua(e,t):i._visibility&2?At(e,t,n,l):(i._visibility|=2,gl(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),a&2048&&xs(u,t);break;case 24:At(e,t,n,l),a&2048&&Es(t.alternate,t);break;default:At(e,t,n,l)}}function gl(e,t,n,l,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,s=n,r=l,m=u.flags;switch(u.tag){case 0:case 11:case 15:gl(i,u,s,r,a),aa(8,u);break;case 23:break;case 22:var h=u.stateNode;u.memoizedState!==null?h._visibility&2?gl(i,u,s,r,a):ua(i,u):(h._visibility|=2,gl(i,u,s,r,a)),a&&m&2048&&xs(u.alternate,u);break;case 24:gl(i,u,s,r,a),a&&m&2048&&Es(u.alternate,u);break;default:gl(i,u,s,r,a)}t=t.sibling}}function ua(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:ua(n,l),a&2048&&xs(l.alternate,l);break;case 24:ua(n,l),a&2048&&Es(l.alternate,l);break;default:ua(n,l)}t=t.sibling}}var sa=8192;function hl(e,t,n){if(e.subtreeFlags&sa)for(e=e.child;e!==null;)tf(e,t,n),e=e.sibling}function tf(e,t,n){switch(e.tag){case 26:hl(e,t,n),e.flags&sa&&e.memoizedState!==null&&Hm(n,qt,e.memoizedState,e.memoizedProps);break;case 5:hl(e,t,n);break;case 3:case 4:var l=qt;qt=Ci(e.stateNode.containerInfo),hl(e,t,n),qt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=sa,sa=16777216,hl(e,t,n),sa=l):hl(e,t,n));break;default:hl(e,t,n)}}function nf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ra(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Le=l,af(l,e)}nf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lf(e),e=e.sibling}function lf(e){switch(e.tag){case 0:case 11:case 15:ra(e),e.flags&2048&&cn(9,e,e.return);break;case 3:ra(e);break;case 12:ra(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,yi(e)):ra(e);break;default:ra(e)}}function yi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Le=l,af(l,e)}nf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:cn(8,t,t.return),yi(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,yi(t));break;default:yi(t)}e=e.sibling}}function af(e,t){for(;Le!==null;){var n=Le;switch(n.tag){case 0:case 11:case 15:cn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Jl(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Le=l;else e:for(n=e;Le!==null;){l=Le;var a=l.sibling,i=l.return;if(Fc(l),l===n){Le=null;break e}if(a!==null){a.return=i,Le=a;break e}Le=i}}}var Ip={getCacheForType:function(e){var t=Qe(De),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Qe(De).controller.signal}},em=typeof WeakMap=="function"?WeakMap:Map,se=0,_e=null,W=null,ee=0,fe=0,rt=null,fn=!1,vl=!1,qs=!1,Ft=0,Ae=0,dn=0,Yn=0,As=0,ot=0,bl=0,oa=null,Ie=null,Ts=!1,gi=0,uf=0,hi=1/0,vi=null,pn=null,Ue=0,mn=null,_l=null,kt=0,zs=0,Cs=null,sf=null,ca=0,Os=null;function ct(){return(se&2)!==0&&ee!==0?ee&-ee:_.T!==null?Rs():Sr()}function rf(){if(ot===0)if((ee&536870912)===0||ne){var e=Ta;Ta<<=1,(Ta&3932160)===0&&(Ta=262144),ot=e}else ot=536870912;return e=ut.current,e!==null&&(e.flags|=32),ot}function et(e,t,n){(e===_e&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),yn(e,ee,ot,!1)),jl(e,n),((se&2)===0||e!==_e)&&(e===_e&&((se&2)===0&&(Yn|=n),Ae===4&&yn(e,ee,ot,!1)),jt(e))}function of(e,t,n){if((se&6)!==0)throw Error(d(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Dl(e,t),a=l?lm(e,t):js(e,t,!0),i=l;do{if(a===0){vl&&!l&&yn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!tm(n)){a=js(e,t,!1),i=!1;continue}if(a===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var s=e;a=oa;var r=s.current.memoizedState.isDehydrated;if(r&&(Sl(s,u).flags|=256),u=js(s,u,!1),u!==2){if(qs&&!r){s.errorRecoveryDisabledLanes|=i,Yn|=i,a=4;break e}i=Ie,Ie=a,i!==null&&(Ie===null?Ie=i:Ie.push.apply(Ie,i))}a=u}if(i=!1,a!==2)continue}}if(a===1){Sl(e,0),yn(e,t,0,!0);break}e:{switch(l=e,i=a,i){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:yn(l,t,ot,!fn);break e;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(a=gi+300-tt(),10<a)){if(yn(l,t,ot,!fn),Ca(l,0,!0)!==0)break e;kt=t,l.timeoutHandle=Gf(cf.bind(null,l,n,Ie,vi,Ts,t,ot,Yn,bl,fn,i,"Throttled",-0,0),a);break e}cf(l,n,Ie,vi,Ts,t,ot,Yn,bl,fn,i,null,-0,0)}}break}while(!0);jt(e)}function cf(e,t,n,l,a,i,u,s,r,m,h,x,y,g){if(e.timeoutHandle=-1,x=t.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ut},tf(t,i,x);var D=(i&62914560)===i?gi-tt():(i&4194048)===i?uf-tt():0;if(D=Qm(x,D),D!==null){kt=i,e.cancelPendingCommit=D(vf.bind(null,e,t,i,n,l,a,u,s,r,h,x,null,y,g)),yn(e,i,u,!m);return}}vf(e,t,i,n,l,a,u,s,r)}function tm(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!at(i(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yn(e,t,n,l){t&=~As,t&=~Yn,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var i=31-lt(a),u=1<<i;l[i]=-1,a&=~u}n!==0&&vr(e,n,t)}function bi(){return(se&6)===0?(fa(0),!1):!0}function Ds(){if(W!==null){if(fe===0)var e=W.return;else e=W,Ht=Mn=null,Ku(e),fl=null,wl=0,e=W;for(;e!==null;)Gc(e.alternate,e),e=e.return;W=null}}function Sl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Sm(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),kt=0,Ds(),_e=e,W=n=Lt(e.current,null),ee=t,fe=0,rt=null,fn=!1,vl=Dl(e,t),qs=!1,bl=ot=As=Yn=dn=Ae=0,Ie=oa=null,Ts=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-lt(l),i=1<<a;t|=e[a],l&=~i}return Ft=t,Ga(),n}function ff(e,t){w=null,_.H=ta,t===cl||t===Fa?(t=To(),fe=3):t===Uu?(t=To(),fe=4):fe=t===rs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,rt=t,W===null&&(Ae=1,ri(e,yt(t,e.current)))}function df(){var e=ut.current;return e===null?!0:(ee&4194048)===ee?bt===null:(ee&62914560)===ee||(ee&536870912)!==0?e===bt:!1}function pf(){var e=_.H;return _.H=ta,e===null?ta:e}function mf(){var e=_.A;return _.A=Ip,e}function _i(){Ae=4,fn||(ee&4194048)!==ee&&ut.current!==null||(vl=!0),(dn&134217727)===0&&(Yn&134217727)===0||_e===null||yn(_e,ee,ot,!1)}function js(e,t,n){var l=se;se|=2;var a=pf(),i=mf();(_e!==e||ee!==t)&&(vi=null,Sl(e,t)),t=!1;var u=Ae;e:do try{if(fe!==0&&W!==null){var s=W,r=rt;switch(fe){case 8:Ds(),u=6;break e;case 3:case 2:case 9:case 6:ut.current===null&&(t=!0);var m=fe;if(fe=0,rt=null,xl(e,s,r,m),n&&vl){u=0;break e}break;default:m=fe,fe=0,rt=null,xl(e,s,r,m)}}nm(),u=Ae;break}catch(h){ff(e,h)}while(!0);return t&&e.shellSuspendCounter++,Ht=Mn=null,se=l,_.H=a,_.A=i,W===null&&(_e=null,ee=0,Ga()),u}function nm(){for(;W!==null;)yf(W)}function lm(e,t){var n=se;se|=2;var l=pf(),a=mf();_e!==e||ee!==t?(vi=null,hi=tt()+500,Sl(e,t)):vl=Dl(e,t);e:do try{if(fe!==0&&W!==null){t=W;var i=rt;t:switch(fe){case 1:fe=0,rt=null,xl(e,t,i,1);break;case 2:case 9:if(qo(i)){fe=0,rt=null,gf(t);break}t=function(){fe!==2&&fe!==9||_e!==e||(fe=7),jt(e)},i.then(t,t);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:qo(i)?(fe=0,rt=null,gf(t)):(fe=0,rt=null,xl(e,t,i,7));break;case 5:var u=null;switch(W.tag){case 26:u=W.memoizedState;case 5:case 27:var s=W;if(u?td(u):s.stateNode.complete){fe=0,rt=null;var r=s.sibling;if(r!==null)W=r;else{var m=s.return;m!==null?(W=m,Si(m)):W=null}break t}}fe=0,rt=null,xl(e,t,i,5);break;case 6:fe=0,rt=null,xl(e,t,i,6);break;case 8:Ds(),Ae=6;break e;default:throw Error(d(462))}}am();break}catch(h){ff(e,h)}while(!0);return Ht=Mn=null,_.H=l,_.A=a,se=n,W!==null?0:(_e=null,ee=0,Ga(),Ae)}function am(){for(;W!==null&&!zd();)yf(W)}function yf(e){var t=Hc(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?Si(e):W=t}function gf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Nc(n,t,t.pendingProps,t.type,void 0,ee);break;case 11:t=Nc(n,t,t.pendingProps,t.type.render,t.ref,ee);break;case 5:Ku(t);default:Gc(n,t),t=W=po(t,Ft),t=Hc(n,t,Ft)}e.memoizedProps=e.pendingProps,t===null?Si(e):W=t}function xl(e,t,n,l){Ht=Mn=null,Ku(t),fl=null,wl=0;var a=t.return;try{if(Kp(e,a,t,n,ee)){Ae=1,ri(e,yt(n,e.current)),W=null;return}}catch(i){if(a!==null)throw W=a,i;Ae=1,ri(e,yt(n,e.current)),W=null;return}t.flags&32768?(ne||l===1?e=!0:vl||(ee&536870912)!==0?e=!1:(fn=e=!0,(l===2||l===9||l===3||l===6)&&(l=ut.current,l!==null&&l.tag===13&&(l.flags|=16384))),hf(t,e)):Si(t)}function Si(e){var t=e;do{if((t.flags&32768)!==0){hf(t,fn);return}e=t.return;var n=kp(t.alternate,t,Ft);if(n!==null){W=n;return}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);Ae===0&&(Ae=5)}function hf(e,t){do{var n=Pp(e.alternate,e);if(n!==null){n.flags&=32767,W=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){W=e;return}W=e=n}while(e!==null);Ae=6,W=null}function vf(e,t,n,l,a,i,u,s,r){e.cancelPendingCommit=null;do xi();while(Ue!==0);if((se&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(i=t.lanes|t.childLanes,i|=bu,Bd(e,n,i,u,s,r),e===_e&&(W=_e=null,ee=0),_l=t,mn=e,kt=n,zs=i,Cs=a,sf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rm(qa,function(){return Ef(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=_.T,_.T=null,a=z.p,z.p=2,u=se,se|=4;try{Wp(e,t,n)}finally{se=u,z.p=a,_.T=l}}Ue=1,bf(),_f(),Sf()}}function bf(){if(Ue===1){Ue=0;var e=mn,t=_l,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var l=z.p;z.p=2;var a=se;se|=4;try{$c(t,e);var i=Xs,u=lo(e.containerInfo),s=i.focusedElem,r=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&no(s.ownerDocument.documentElement,s)){if(r!==null&&mu(s)){var m=r.start,h=r.end;if(h===void 0&&(h=m),"selectionStart"in s)s.selectionStart=m,s.selectionEnd=Math.min(h,s.value.length);else{var x=s.ownerDocument||document,y=x&&x.defaultView||window;if(y.getSelection){var g=y.getSelection(),D=s.textContent.length,B=Math.min(r.start,D),ve=r.end===void 0?B:Math.min(r.end,D);!g.extend&&B>ve&&(u=ve,ve=B,B=u);var f=to(s,B),o=to(s,ve);if(f&&o&&(g.rangeCount!==1||g.anchorNode!==f.node||g.anchorOffset!==f.offset||g.focusNode!==o.node||g.focusOffset!==o.offset)){var p=x.createRange();p.setStart(f.node,f.offset),g.removeAllRanges(),B>ve?(g.addRange(p),g.extend(o.node,o.offset)):(p.setEnd(o.node,o.offset),g.addRange(p))}}}}for(x=[],g=s;g=g.parentNode;)g.nodeType===1&&x.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<x.length;s++){var S=x[s];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Ui=!!Ys,Xs=Ys=null}finally{se=a,z.p=l,_.T=n}}e.current=t,Ue=2}}function _f(){if(Ue===2){Ue=0;var e=mn,t=_l,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var l=z.p;z.p=2;var a=se;se|=4;try{wc(e,t.alternate,t)}finally{se=a,z.p=l,_.T=n}}Ue=3}}function Sf(){if(Ue===4||Ue===3){Ue=0,Cd();var e=mn,t=_l,n=kt,l=sf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ue=5:(Ue=0,_l=mn=null,xf(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(pn=null),ki(n),t=t.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=_.T,a=z.p,z.p=2,_.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var s=l[u];i(s.value,{componentStack:s.stack})}}finally{_.T=t,z.p=a}}(kt&3)!==0&&xi(),jt(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===Os?ca++:(ca=0,Os=e):ca=0,fa(0)}}function xf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jl(t)))}function xi(){return bf(),_f(),Sf(),Ef()}function Ef(){if(Ue!==5)return!1;var e=mn,t=zs;zs=0;var n=ki(kt),l=_.T,a=z.p;try{z.p=32>n?32:n,_.T=null,n=Cs,Cs=null;var i=mn,u=kt;if(Ue=0,_l=mn=null,kt=0,(se&6)!==0)throw Error(d(331));var s=se;if(se|=4,lf(i.current),ef(i,i.current,u,n),se=s,fa(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Ol,i)}catch{}return!0}finally{z.p=a,_.T=l,xf(e,t)}}function qf(e,t,n){t=yt(n,t),t=ss(e.stateNode,t,2),e=sn(e,t,2),e!==null&&(jl(e,2),jt(e))}function de(e,t,n){if(e.tag===3)qf(e,e,n);else for(;t!==null;){if(t.tag===3){qf(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(pn===null||!pn.has(l))){e=yt(n,e),n=qc(2),l=sn(t,n,2),l!==null&&(Ac(n,l,t,e),jl(l,2),jt(l));break}}t=t.return}}function Ns(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new em;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(qs=!0,a.add(n),e=im.bind(null,e,t,n),t.then(e,e))}function im(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,_e===e&&(ee&n)===n&&(Ae===4||Ae===3&&(ee&62914560)===ee&&300>tt()-gi?(se&2)===0&&Sl(e,0):As|=n,bl===ee&&(bl=0)),jt(e)}function Af(e,t){t===0&&(t=hr()),e=Dn(e,t),e!==null&&(jl(e,t),jt(e))}function um(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Af(e,n)}function sm(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(t),Af(e,n)}function rm(e,t){return Ji(e,t)}var Ei=null,El=null,Ms=!1,qi=!1,Us=!1,gn=0;function jt(e){e!==El&&e.next===null&&(El===null?Ei=El=e:El=El.next=e),qi=!0,Ms||(Ms=!0,cm())}function fa(e,t){if(!Us&&qi){Us=!0;do for(var n=!1,l=Ei;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var u=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-lt(42|e)+1)-1,i&=a&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Of(l,i))}else i=ee,i=Ca(l,l===_e?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Dl(l,i)||(n=!0,Of(l,i));l=l.next}while(n);Us=!1}}function om(){Tf()}function Tf(){qi=Ms=!1;var e=0;gn!==0&&_m()&&(e=gn);for(var t=tt(),n=null,l=Ei;l!==null;){var a=l.next,i=zf(l,t);i===0?(l.next=null,n===null?Ei=a:n.next=a,a===null&&(El=n)):(n=l,(e!==0||(i&3)!==0)&&(qi=!0)),l=a}Ue!==0&&Ue!==5||fa(e),gn!==0&&(gn=0)}function zf(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-lt(i),s=1<<u,r=a[u];r===-1?((s&n)===0||(s&l)!==0)&&(a[u]=Ld(s,t)):r<=t&&(e.expiredLanes|=s),i&=~s}if(t=_e,n=ee,n=Ca(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ki(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Dl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&Ki(l),ki(n)){case 2:case 8:n=yr;break;case 32:n=qa;break;case 268435456:n=gr;break;default:n=qa}return l=Cf.bind(null,e),n=Ji(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&Ki(l),e.callbackPriority=2,e.callbackNode=null,2}function Cf(e,t){if(Ue!==0&&Ue!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(xi()&&e.callbackNode!==n)return null;var l=ee;return l=Ca(e,e===_e?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(of(e,l,t),zf(e,tt()),e.callbackNode!=null&&e.callbackNode===n?Cf.bind(null,e):null)}function Of(e,t){if(xi())return null;of(e,t,!0)}function cm(){xm(function(){(se&6)!==0?Ji(mr,om):Tf()})}function Rs(){if(gn===0){var e=rl;e===0&&(e=Aa,Aa<<=1,(Aa&261888)===0&&(Aa=256)),gn=e}return gn}function Df(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Na(""+e)}function jf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function fm(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var i=Df((a[Fe]||null).action),u=l.submitter;u&&(t=(t=u[Fe]||null)?Df(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new La("action","action",null,l,a);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(gn!==0){var r=u?jf(a,u):new FormData(a);ts(n,{pending:!0,data:r,method:a.method,action:i},null,r)}}else typeof i=="function"&&(s.preventDefault(),r=u?jf(a,u):new FormData(a),ts(n,{pending:!0,data:r,method:a.method,action:i},i,r))},currentTarget:a}]})}}for(var Ls=0;Ls<vu.length;Ls++){var Bs=vu[Ls],dm=Bs.toLowerCase(),pm=Bs[0].toUpperCase()+Bs.slice(1);Et(dm,"on"+pm)}Et(uo,"onAnimationEnd"),Et(so,"onAnimationIteration"),Et(ro,"onAnimationStart"),Et("dblclick","onDoubleClick"),Et("focusin","onFocus"),Et("focusout","onBlur"),Et(Op,"onTransitionRun"),Et(Dp,"onTransitionStart"),Et(jp,"onTransitionCancel"),Et(oo,"onTransitionEnd"),Fn("onMouseEnter",["mouseout","mouseover"]),Fn("onMouseLeave",["mouseout","mouseover"]),Fn("onPointerEnter",["pointerout","pointerover"]),Fn("onPointerLeave",["pointerout","pointerover"]),Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(da));function Nf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var s=l[u],r=s.instance,m=s.currentTarget;if(s=s.listener,r!==i&&a.isPropagationStopped())break e;i=s,a.currentTarget=m;try{i(a)}catch(h){Qa(h)}a.currentTarget=null,i=r}else for(u=0;u<l.length;u++){if(s=l[u],r=s.instance,m=s.currentTarget,s=s.listener,r!==i&&a.isPropagationStopped())break e;i=s,a.currentTarget=m;try{i(a)}catch(h){Qa(h)}a.currentTarget=null,i=r}}}}function $(e,t){var n=t[Pi];n===void 0&&(n=t[Pi]=new Set);var l=e+"__bubble";n.has(l)||(Mf(t,e,2,!1),n.add(l))}function Hs(e,t,n){var l=0;t&&(l|=4),Mf(n,e,l,t)}var Ai="_reactListening"+Math.random().toString(36).slice(2);function Qs(e){if(!e[Ai]){e[Ai]=!0,qr.forEach(function(n){n!=="selectionchange"&&(mm.has(n)||Hs(n,!1,e),Hs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ai]||(t[Ai]=!0,Hs("selectionchange",!1,t))}}function Mf(e,t,n,l){switch(rd(t)){case 2:var a=Ym;break;case 8:a=Xm;break;default:a=er}n=a.bind(null,t,n,e),a=void 0,!iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Gs(e,t,n,l,a){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var s=l.stateNode.containerInfo;if(s===a)break;if(u===4)for(u=l.return;u!==null;){var r=u.tag;if((r===3||r===4)&&u.stateNode.containerInfo===a)return;u=u.return}for(;s!==null;){if(u=Jn(s),u===null)return;if(r=u.tag,r===5||r===6||r===26||r===27){l=i=u;continue e}s=s.parentNode}}l=l.return}Lr(function(){var m=i,h=lu(n),x=[];e:{var y=co.get(e);if(y!==void 0){var g=La,D=e;switch(e){case"keypress":if(Ua(n)===0)break e;case"keydown":case"keyup":g=sp;break;case"focusin":D="focus",g=ou;break;case"focusout":D="blur",g=ou;break;case"beforeblur":case"afterblur":g=ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Qr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=cp;break;case uo:case so:case ro:g=$d;break;case oo:g=dp;break;case"scroll":case"scrollend":g=wd;break;case"wheel":g=mp;break;case"copy":case"cut":case"paste":g=ep;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Vr;break;case"toggle":case"beforetoggle":g=gp}var B=(t&4)!==0,ve=!B&&(e==="scroll"||e==="scrollend"),f=B?y!==null?y+"Capture":null:y;B=[];for(var o=m,p;o!==null;){var S=o;if(p=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||p===null||f===null||(S=Ul(o,f),S!=null&&B.push(pa(o,S,p))),ve)break;o=o.return}0<B.length&&(y=new g(y,D,null,n,h),x.push({event:y,listeners:B}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",y&&n!==nu&&(D=n.relatedTarget||n.fromElement)&&(Jn(D)||D[Zn]))break e;if((g||y)&&(y=h.window===h?h:(y=h.ownerDocument)?y.defaultView||y.parentWindow:window,g?(D=n.relatedTarget||n.toElement,g=m,D=D?Jn(D):null,D!==null&&(ve=U(D),B=D.tag,D!==ve||B!==5&&B!==27&&B!==6)&&(D=null)):(g=null,D=m),g!==D)){if(B=Qr,S="onMouseLeave",f="onMouseEnter",o="mouse",(e==="pointerout"||e==="pointerover")&&(B=Vr,S="onPointerLeave",f="onPointerEnter",o="pointer"),ve=g==null?y:Ml(g),p=D==null?y:Ml(D),y=new B(S,o+"leave",g,n,h),y.target=ve,y.relatedTarget=p,S=null,Jn(h)===m&&(B=new B(f,o+"enter",D,n,h),B.target=p,B.relatedTarget=ve,S=B),ve=S,g&&D)t:{for(B=ym,f=g,o=D,p=0,S=f;S;S=B(S))p++;S=0;for(var R=o;R;R=B(R))S++;for(;0<p-S;)f=B(f),p--;for(;0<S-p;)o=B(o),S--;for(;p--;){if(f===o||o!==null&&f===o.alternate){B=f;break t}f=B(f),o=B(o)}B=null}else B=null;g!==null&&Uf(x,y,g,B,!1),D!==null&&ve!==null&&Uf(x,ve,D,B,!0)}}e:{if(y=m?Ml(m):window,g=y.nodeName&&y.nodeName.toLowerCase(),g==="select"||g==="input"&&y.type==="file")var ie=kr;else if(wr(y))if(Pr)ie=Tp;else{ie=qp;var N=Ep}else g=y.nodeName,!g||g.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?m&&tu(m.elementType)&&(ie=kr):ie=Ap;if(ie&&(ie=ie(e,m))){Fr(x,ie,n,h);break e}N&&N(e,y,m),e==="focusout"&&m&&y.type==="number"&&m.memoizedProps.value!=null&&eu(y,"number",y.value)}switch(N=m?Ml(m):window,e){case"focusin":(wr(N)||N.contentEditable==="true")&&(el=N,yu=m,Yl=null);break;case"focusout":Yl=yu=el=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,ao(x,n,h);break;case"selectionchange":if(Cp)break;case"keydown":case"keyup":ao(x,n,h)}var F;if(fu)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else In?Jr(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(Yr&&n.locale!=="ko"&&(In||te!=="onCompositionStart"?te==="onCompositionEnd"&&In&&(F=Br()):(It=h,uu="value"in It?It.value:It.textContent,In=!0)),N=Ti(m,te),0<N.length&&(te=new Gr(te,e,null,n,h),x.push({event:te,listeners:N}),F?te.data=F:(F=Kr(n),F!==null&&(te.data=F)))),(F=vp?bp(e,n):_p(e,n))&&(te=Ti(m,"onBeforeInput"),0<te.length&&(N=new Gr("onBeforeInput","beforeinput",null,n,h),x.push({event:N,listeners:te}),N.data=F)),fm(x,e,m,n,h)}Nf(x,t)})}function pa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ti(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=Ul(e,n),a!=null&&l.unshift(pa(e,a,i)),a=Ul(e,t),a!=null&&l.push(pa(e,a,i))),e.tag===3)return l;e=e.return}return[]}function ym(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Uf(e,t,n,l,a){for(var i=t._reactName,u=[];n!==null&&n!==l;){var s=n,r=s.alternate,m=s.stateNode;if(s=s.tag,r!==null&&r===l)break;s!==5&&s!==26&&s!==27||m===null||(r=m,a?(m=Ul(n,i),m!=null&&u.unshift(pa(n,m,r))):a||(m=Ul(n,i),m!=null&&u.push(pa(n,m,r)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var gm=/\r\n?/g,hm=/\u0000|\uFFFD/g;function Rf(e){return(typeof e=="string"?e:""+e).replace(gm,`
`).replace(hm,"")}function Lf(e,t){return t=Rf(t),Rf(e)===t}function he(e,t,n,l,a,i){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Pn(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Pn(e,""+l);break;case"className":Da(e,"class",l);break;case"tabIndex":Da(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Da(e,n,l);break;case"style":Ur(e,l,i);break;case"data":if(t!=="object"){Da(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Na(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&he(e,t,"name",a.name,a,null),he(e,t,"formEncType",a.formEncType,a,null),he(e,t,"formMethod",a.formMethod,a,null),he(e,t,"formTarget",a.formTarget,a,null)):(he(e,t,"encType",a.encType,a,null),he(e,t,"method",a.method,a,null),he(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Na(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Ut);break;case"onScroll":l!=null&&$("scroll",e);break;case"onScrollEnd":l!=null&&$("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=Na(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":$("beforetoggle",e),$("toggle",e),Oa(e,"popover",l);break;case"xlinkActuate":Mt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Mt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Mt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Mt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Mt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Mt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Mt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Mt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Mt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Oa(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Jd.get(n)||n,Oa(e,n,l))}}function Vs(e,t,n,l,a,i){switch(n){case"style":Ur(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Pn(e,l):(typeof l=="number"||typeof l=="bigint")&&Pn(e,""+l);break;case"onScroll":l!=null&&$("scroll",e);break;case"onScrollEnd":l!=null&&$("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ar.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),i=e[Fe]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,a),typeof l=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):Oa(e,n,l)}}}function Ve(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$("error",e),$("load",e);var l=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:he(e,t,i,u,n,null)}}a&&he(e,t,"srcSet",n.srcSet,n,null),l&&he(e,t,"src",n.src,n,null);return;case"input":$("invalid",e);var s=i=u=a=null,r=null,m=null;for(l in n)if(n.hasOwnProperty(l)){var h=n[l];if(h!=null)switch(l){case"name":a=h;break;case"type":u=h;break;case"checked":r=h;break;case"defaultChecked":m=h;break;case"value":i=h;break;case"defaultValue":s=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(d(137,t));break;default:he(e,t,l,h,n,null)}}Dr(e,i,s,r,m,u,a,!1);return;case"select":$("invalid",e),l=u=i=null;for(a in n)if(n.hasOwnProperty(a)&&(s=n[a],s!=null))switch(a){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":l=s;default:he(e,t,a,s,n,null)}t=i,n=u,e.multiple=!!l,t!=null?kn(e,!!l,t,!1):n!=null&&kn(e,!!l,n,!0);return;case"textarea":$("invalid",e),i=a=l=null;for(u in n)if(n.hasOwnProperty(u)&&(s=n[u],s!=null))switch(u){case"value":l=s;break;case"defaultValue":a=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(d(91));break;default:he(e,t,u,s,n,null)}Nr(e,l,a,i);return;case"option":for(r in n)if(n.hasOwnProperty(r)&&(l=n[r],l!=null))switch(r){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:he(e,t,r,l,n,null)}return;case"dialog":$("beforetoggle",e),$("toggle",e),$("cancel",e),$("close",e);break;case"iframe":case"object":$("load",e);break;case"video":case"audio":for(l=0;l<da.length;l++)$(da[l],e);break;case"image":$("error",e),$("load",e);break;case"details":$("toggle",e);break;case"embed":case"source":case"link":$("error",e),$("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in n)if(n.hasOwnProperty(m)&&(l=n[m],l!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:he(e,t,m,l,n,null)}return;default:if(tu(t)){for(h in n)n.hasOwnProperty(h)&&(l=n[h],l!==void 0&&Vs(e,t,h,l,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(l=n[s],l!=null&&he(e,t,s,l,n,null))}function vm(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,u=null,s=null,r=null,m=null,h=null;for(g in n){var x=n[g];if(n.hasOwnProperty(g)&&x!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":r=x;default:l.hasOwnProperty(g)||he(e,t,g,null,l,x)}}for(var y in l){var g=l[y];if(x=n[y],l.hasOwnProperty(y)&&(g!=null||x!=null))switch(y){case"type":i=g;break;case"name":a=g;break;case"checked":m=g;break;case"defaultChecked":h=g;break;case"value":u=g;break;case"defaultValue":s=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(137,t));break;default:g!==x&&he(e,t,y,g,l,x)}}Ii(e,u,s,r,m,h,i,a);return;case"select":g=u=s=y=null;for(i in n)if(r=n[i],n.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":g=r;default:l.hasOwnProperty(i)||he(e,t,i,null,l,r)}for(a in l)if(i=l[a],r=n[a],l.hasOwnProperty(a)&&(i!=null||r!=null))switch(a){case"value":y=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==r&&he(e,t,a,i,l,r)}t=s,n=u,l=g,y!=null?kn(e,!!n,y,!1):!!l!=!!n&&(t!=null?kn(e,!!n,t,!0):kn(e,!!n,n?[]:"",!1));return;case"textarea":g=y=null;for(s in n)if(a=n[s],n.hasOwnProperty(s)&&a!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:he(e,t,s,null,l,a)}for(u in l)if(a=l[u],i=n[u],l.hasOwnProperty(u)&&(a!=null||i!=null))switch(u){case"value":y=a;break;case"defaultValue":g=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(d(91));break;default:a!==i&&he(e,t,u,a,l,i)}jr(e,y,g);return;case"option":for(var D in n)if(y=n[D],n.hasOwnProperty(D)&&y!=null&&!l.hasOwnProperty(D))switch(D){case"selected":e.selected=!1;break;default:he(e,t,D,null,l,y)}for(r in l)if(y=l[r],g=n[r],l.hasOwnProperty(r)&&y!==g&&(y!=null||g!=null))switch(r){case"selected":e.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:he(e,t,r,y,l,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var B in n)y=n[B],n.hasOwnProperty(B)&&y!=null&&!l.hasOwnProperty(B)&&he(e,t,B,null,l,y);for(m in l)if(y=l[m],g=n[m],l.hasOwnProperty(m)&&y!==g&&(y!=null||g!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(d(137,t));break;default:he(e,t,m,y,l,g)}return;default:if(tu(t)){for(var ve in n)y=n[ve],n.hasOwnProperty(ve)&&y!==void 0&&!l.hasOwnProperty(ve)&&Vs(e,t,ve,void 0,l,y);for(h in l)y=l[h],g=n[h],!l.hasOwnProperty(h)||y===g||y===void 0&&g===void 0||Vs(e,t,h,y,l,g);return}}for(var f in n)y=n[f],n.hasOwnProperty(f)&&y!=null&&!l.hasOwnProperty(f)&&he(e,t,f,null,l,y);for(x in l)y=l[x],g=n[x],!l.hasOwnProperty(x)||y===g||y==null&&g==null||he(e,t,x,y,l,g)}function Bf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],i=a.transferSize,u=a.initiatorType,s=a.duration;if(i&&s&&Bf(u)){for(u=0,s=a.responseEnd,l+=1;l<n.length;l++){var r=n[l],m=r.startTime;if(m>s)break;var h=r.transferSize,x=r.initiatorType;h&&Bf(x)&&(r=r.responseEnd,u+=h*(r<s?1:(s-m)/(r-m)))}if(--l,t+=8*(i+u)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ys=null,Xs=null;function zi(e){return e.nodeType===9?e:e.ownerDocument}function Hf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Js=null;function _m(){var e=window.event;return e&&e.type==="popstate"?e===Js?!1:(Js=e,!0):(Js=null,!1)}var Gf=typeof setTimeout=="function"?setTimeout:void 0,Sm=typeof clearTimeout=="function"?clearTimeout:void 0,Vf=typeof Promise=="function"?Promise:void 0,xm=typeof queueMicrotask=="function"?queueMicrotask:typeof Vf<"u"?function(e){return Vf.resolve(null).then(e).catch(Em)}:Gf;function Em(e){setTimeout(function(){throw e})}function hn(e){return e==="head"}function Yf(e,t){var n=t,l=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(a),zl(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")ma(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ma(n);for(var i=n.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[Nl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=u}}else n==="body"&&ma(e.ownerDocument.body);n=a}while(n);zl(t)}function Xf(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function Ks(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ks(n),Wi(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function qm(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Nl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function Am(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_t(e.nextSibling),e===null))return null;return e}function Zf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_t(e.nextSibling),e===null))return null;return e}function ws(e){return e.data==="$?"||e.data==="$~"}function Fs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Tm(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ks=null;function Jf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return _t(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Kf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function wf(e,t,n){switch(t=zi(n),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function ma(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wi(e)}var St=new Map,Ff=new Set;function Ci(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pt=z.d;z.d={f:zm,r:Cm,D:Om,C:Dm,L:jm,m:Nm,X:Um,S:Mm,M:Rm};function zm(){var e=Pt.f(),t=bi();return e||t}function Cm(e){var t=Kn(e);t!==null&&t.tag===5&&t.type==="form"?cc(t):Pt.r(e)}var ql=typeof document>"u"?null:document;function kf(e,t,n){var l=ql;if(l&&typeof t=="string"&&t){var a=pt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Ff.has(a)||(Ff.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),Ve(t,"link",e),Re(t),l.head.appendChild(t)))}}function Om(e){Pt.D(e),kf("dns-prefetch",e,null)}function Dm(e,t){Pt.C(e,t),kf("preconnect",e,t)}function jm(e,t,n){Pt.L(e,t,n);var l=ql;if(l&&e&&t){var a='link[rel="preload"][as="'+pt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+pt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+pt(n.imageSizes)+'"]')):a+='[href="'+pt(e)+'"]';var i=a;switch(t){case"style":i=Al(e);break;case"script":i=Tl(e)}St.has(i)||(e=T({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),St.set(i,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(ya(i))||t==="script"&&l.querySelector(ga(i))||(t=l.createElement("link"),Ve(t,"link",e),Re(t),l.head.appendChild(t)))}}function Nm(e,t){Pt.m(e,t);var n=ql;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+pt(l)+'"][href="'+pt(e)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Tl(e)}if(!St.has(i)&&(e=T({rel:"modulepreload",href:e},t),St.set(i,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ga(i)))return}l=n.createElement("link"),Ve(l,"link",e),Re(l),n.head.appendChild(l)}}}function Mm(e,t,n){Pt.S(e,t,n);var l=ql;if(l&&e){var a=wn(l).hoistableStyles,i=Al(e);t=t||"default";var u=a.get(i);if(!u){var s={loading:0,preload:null};if(u=l.querySelector(ya(i)))s.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},n),(n=St.get(i))&&Ps(e,n);var r=u=l.createElement("link");Re(r),Ve(r,"link",e),r._p=new Promise(function(m,h){r.onload=m,r.onerror=h}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Oi(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:s},a.set(i,u)}}}function Um(e,t){Pt.X(e,t);var n=ql;if(n&&e){var l=wn(n).hoistableScripts,a=Tl(e),i=l.get(a);i||(i=n.querySelector(ga(a)),i||(e=T({src:e,async:!0},t),(t=St.get(a))&&Ws(e,t),i=n.createElement("script"),Re(i),Ve(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function Rm(e,t){Pt.M(e,t);var n=ql;if(n&&e){var l=wn(n).hoistableScripts,a=Tl(e),i=l.get(a);i||(i=n.querySelector(ga(a)),i||(e=T({src:e,async:!0,type:"module"},t),(t=St.get(a))&&Ws(e,t),i=n.createElement("script"),Re(i),Ve(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function Pf(e,t,n,l){var a=(a=P.current)?Ci(a):null;if(!a)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Al(n.href),n=wn(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Al(n.href);var i=wn(a).hoistableStyles,u=i.get(e);if(u||(a=a.ownerDocument||a,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=a.querySelector(ya(e)))&&!i._p&&(u.instance=i,u.state.loading=5),St.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},St.set(e,n),i||Lm(a,e,n,u.state))),t&&l===null)throw Error(d(528,""));return u}if(t&&l!==null)throw Error(d(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Tl(n),n=wn(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Al(e){return'href="'+pt(e)+'"'}function ya(e){return'link[rel="stylesheet"]['+e+"]"}function Wf(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ve(t,"link",n),Re(t),e.head.appendChild(t))}function Tl(e){return'[src="'+pt(e)+'"]'}function ga(e){return"script[async]"+e}function $f(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+pt(n.href)+'"]');if(l)return t.instance=l,Re(l),l;var a=T({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Re(l),Ve(l,"style",a),Oi(l,n.precedence,e),t.instance=l;case"stylesheet":a=Al(n.href);var i=e.querySelector(ya(a));if(i)return t.state.loading|=4,t.instance=i,Re(i),i;l=Wf(n),(a=St.get(a))&&Ps(l,a),i=(e.ownerDocument||e).createElement("link"),Re(i);var u=i;return u._p=new Promise(function(s,r){u.onload=s,u.onerror=r}),Ve(i,"link",l),t.state.loading|=4,Oi(i,n.precedence,e),t.instance=i;case"script":return i=Tl(n.src),(a=e.querySelector(ga(i)))?(t.instance=a,Re(a),a):(l=n,(a=St.get(i))&&(l=T({},n),Ws(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),Re(a),Ve(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Oi(l,n.precedence,e));return t.instance}function Oi(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,u=0;u<l.length;u++){var s=l[u];if(s.dataset.precedence===t)i=s;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ps(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ws(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Di=null;function If(e,t,n){if(Di===null){var l=new Map,a=Di=new Map;a.set(n,l)}else a=Di,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[Nl]||i[Be]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var s=l.get(u);s?s.push(i):l.set(u,[i])}}return l}function ed(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Bm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function td(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Hm(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Al(l.href),i=t.querySelector(ya(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ji.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Re(i);return}i=t.ownerDocument||t,l=Wf(l),(a=St.get(a))&&Ps(l,a),i=i.createElement("link"),Re(i);var u=i;u._p=new Promise(function(s,r){u.onload=s,u.onerror=r}),Ve(i,"link",l),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ji.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var $s=0;function Qm(e,t){return e.stylesheets&&e.count===0&&Mi(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&Mi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&$s===0&&($s=62500*bm());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Mi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>$s?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function ji(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Mi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ni=null;function Mi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ni=new Map,t.forEach(Gm,e),Ni=null,ji.call(e))}function Gm(e,t){if(!(t.state.loading&4)){var n=Ni.get(e);if(n)var l=n.get(null);else{n=new Map,Ni.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var u=a[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),l=u)}l&&n.set(null,l)}a=t.instance,u=a.getAttribute("data-precedence"),i=n.get(u)||l,i===l&&n.set(null,a),n.set(u,a),this.count++,l=ji.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var ha={$$typeof:k,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function Vm(e,t,n,l,a,i,u,s,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wi(0),this.hiddenUpdates=wi(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function nd(e,t,n,l,a,i,u,s,r,m,h,x){return e=new Vm(e,t,n,u,r,m,h,x,s),t=1,i===!0&&(t|=24),i=it(3,null,null,t),e.current=i,i.stateNode=e,t=ju(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:t},Ru(i),e}function ld(e){return e?(e=ll,e):ll}function ad(e,t,n,l,a,i){a=ld(a),l.context===null?l.context=a:l.pendingContext=a,l=un(t),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=sn(e,l,t),n!==null&&(et(n,e,t),kl(n,e,t))}function id(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Is(e,t){id(e,t),(e=e.alternate)&&id(e,t)}function ud(e){if(e.tag===13||e.tag===31){var t=Dn(e,67108864);t!==null&&et(t,e,67108864),Is(e,67108864)}}function sd(e){if(e.tag===13||e.tag===31){var t=ct();t=Fi(t);var n=Dn(e,t);n!==null&&et(n,e,t),Is(e,t)}}var Ui=!0;function Ym(e,t,n,l){var a=_.T;_.T=null;var i=z.p;try{z.p=2,er(e,t,n,l)}finally{z.p=i,_.T=a}}function Xm(e,t,n,l){var a=_.T;_.T=null;var i=z.p;try{z.p=8,er(e,t,n,l)}finally{z.p=i,_.T=a}}function er(e,t,n,l){if(Ui){var a=tr(l);if(a===null)Gs(e,t,l,Ri,n),od(e,l);else if(Jm(a,e,t,n,l))l.stopPropagation();else if(od(e,l),t&4&&-1<Zm.indexOf(e)){for(;a!==null;){var i=Kn(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=An(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var r=1<<31-lt(u);s.entanglements[1]|=r,u&=~r}jt(i),(se&6)===0&&(hi=tt()+500,fa(0))}}break;case 31:case 13:s=Dn(i,2),s!==null&&et(s,i,2),bi(),Is(i,2)}if(i=tr(l),i===null&&Gs(e,t,l,Ri,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else Gs(e,t,l,null,n)}}function tr(e){return e=lu(e),nr(e)}var Ri=null;function nr(e){if(Ri=null,e=Jn(e),e!==null){var t=U(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=H(t),e!==null)return e;e=null}else if(n===31){if(e=G(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ri=e,null}function rd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Od()){case mr:return 2;case yr:return 8;case qa:case Dd:return 32;case gr:return 268435456;default:return 32}default:return 32}}var lr=!1,vn=null,bn=null,_n=null,va=new Map,ba=new Map,Sn=[],Zm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function od(e,t){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":va.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(t.pointerId)}}function _a(e,t,n,l,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Kn(t),t!==null&&ud(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Jm(e,t,n,l,a){switch(t){case"focusin":return vn=_a(vn,e,t,n,l,a),!0;case"dragenter":return bn=_a(bn,e,t,n,l,a),!0;case"mouseover":return _n=_a(_n,e,t,n,l,a),!0;case"pointerover":var i=a.pointerId;return va.set(i,_a(va.get(i)||null,e,t,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,ba.set(i,_a(ba.get(i)||null,e,t,n,l,a)),!0}return!1}function cd(e){var t=Jn(e.target);if(t!==null){var n=U(t);if(n!==null){if(t=n.tag,t===13){if(t=H(n),t!==null){e.blockedOn=t,xr(e.priority,function(){sd(n)});return}}else if(t===31){if(t=G(n),t!==null){e.blockedOn=t,xr(e.priority,function(){sd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=tr(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);nu=l,n.target.dispatchEvent(l),nu=null}else return t=Kn(n),t!==null&&ud(t),e.blockedOn=n,!1;t.shift()}return!0}function fd(e,t,n){Li(e)&&n.delete(t)}function Km(){lr=!1,vn!==null&&Li(vn)&&(vn=null),bn!==null&&Li(bn)&&(bn=null),_n!==null&&Li(_n)&&(_n=null),va.forEach(fd),ba.forEach(fd)}function Bi(e,t){e.blockedOn===t&&(e.blockedOn=null,lr||(lr=!0,q.unstable_scheduleCallback(q.unstable_NormalPriority,Km)))}var Hi=null;function dd(e){Hi!==e&&(Hi=e,q.unstable_scheduleCallback(q.unstable_NormalPriority,function(){Hi===e&&(Hi=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(nr(l||n)===null)continue;break}var i=Kn(n);i!==null&&(e.splice(t,3),t-=3,ts(i,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function zl(e){function t(r){return Bi(r,e)}vn!==null&&Bi(vn,e),bn!==null&&Bi(bn,e),_n!==null&&Bi(_n,e),va.forEach(t),ba.forEach(t);for(var n=0;n<Sn.length;n++){var l=Sn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Sn.length&&(n=Sn[0],n.blockedOn===null);)cd(n),n.blockedOn===null&&Sn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],i=n[l+1],u=a[Fe]||null;if(typeof i=="function")u||dd(n);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(a=i,u=i[Fe]||null)s=u.formAction;else if(nr(a)!==null)continue}else s=u.action;typeof s=="function"?n[l+1]=s:(n.splice(l,3),l-=3),dd(n)}}}function pd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return a=u})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function ar(e){this._internalRoot=e}Qi.prototype.render=ar.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var n=t.current,l=ct();ad(n,l,e,t,null,null)},Qi.prototype.unmount=ar.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ad(e.current,2,null,e,null,null),bi(),t[Zn]=null}};function Qi(e){this._internalRoot=e}Qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sr();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sn.length&&t!==0&&t<Sn[n].priority;n++);Sn.splice(n,0,e),n===0&&cd(e)}};var md=V.version;if(md!=="19.2.4")throw Error(d(527,md,"19.2.4"));z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=b(t),e=e!==null?Z(e):null,e=e===null?null:e.stateNode,e};var wm={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{Ol=Gi.inject(wm),nt=Gi}catch{}}return xa.createRoot=function(e,t){if(!O(e))throw Error(d(299));var n=!1,l="",a=_c,i=Sc,u=xc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=nd(e,1,!1,null,null,n,l,null,a,i,u,pd),e[Zn]=t.current,Qs(e),new ar(t)},xa.hydrateRoot=function(e,t,n){if(!O(e))throw Error(d(299));var l=!1,a="",i=_c,u=Sc,s=xc,r=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.formState!==void 0&&(r=n.formState)),t=nd(e,1,!0,t,n??null,l,a,r,i,u,s,pd),t.context=ld(null),n=t.current,l=ct(),l=Fi(l),a=un(l),a.callback=null,sn(n,a,l),n=l,t.current.lanes=n,jl(t,n),jt(t),e[Zn]=t.current,Qs(e),new Qi(t)},xa.version="19.2.4",xa}var qd;function ay(){if(qd)return sr.exports;qd=1;function q(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q)}catch(V){console.error(V)}}return q(),sr.exports=ly(),sr.exports}var iy=ay();const uy=Ad(iy);function sy({open:q,onClose:V,courses:L,currentLevel:d,currentLesson:O,onNavigate:U,onDashboard:H,isCompleted:G,getCompletedCount:A}){const[b,Z]=Xe.useState({}),T=M=>{Z(ae=>({...ae,[M]:!ae[M]}))};return v.jsxs("aside",{className:`sidebar ${q?"open":""}`,children:[v.jsxs("div",{className:"sidebar-header",children:[v.jsx("span",{className:"sidebar-logo",children:"🐍"}),v.jsx("span",{className:"sidebar-brand",children:"Python Expert Academy"}),v.jsx("button",{className:"sidebar-close",onClick:V,children:"✕"})]}),v.jsxs("nav",{className:"sidebar-nav",children:[v.jsxs("button",{className:"nav-level-header",onClick:H,style:{color:d?void 0:"var(--accent-secondary)"},children:[v.jsx("span",{children:"🏠"}),v.jsx("span",{children:"Tableau de bord"})]}),L.map(M=>v.jsxs("div",{className:"nav-level",children:[v.jsxs("button",{className:`nav-level-header ${d===M.id?"active":""}`,onClick:()=>T(M.id),children:[v.jsx("span",{className:`nav-level-icon ${b[M.id]?"open":""}`,children:"▸"}),v.jsx("span",{children:M.shortTitle}),v.jsxs("span",{className:"nav-level-progress",children:[A(M.id),"/",M.lessons.length]})]}),v.jsx("div",{className:`nav-lessons ${b[M.id]?"open":""}`,children:M.lessons.map(ae=>{const ce=G(M.id,ae.id),pe=d===M.id&&O===ae.id;return v.jsxs("button",{className:`nav-lesson-item ${pe?"active":""} ${ce?"completed":""}`,onClick:()=>U(M.id,ae.id),children:[v.jsx("span",{className:`lesson-status-dot ${ce?"completed":""} ${pe?"active":""}`}),v.jsx("span",{children:ae.title})]},ae.id)})})]},M.id))]})]})}function ry({globalProgress:q,onMenuClick:V,onDashboard:L}){const[d,O]=Xe.useState(()=>localStorage.getItem("python-academy-theme")||"dark");Xe.useEffect(()=>{document.documentElement.setAttribute("data-theme",d),localStorage.setItem("python-academy-theme",d)},[d]);const U=()=>{O(H=>H==="dark"?"light":"dark")};return v.jsxs("header",{className:"header",children:[v.jsx("button",{className:"mobile-menu-btn",onClick:V,children:"☰"}),v.jsxs("div",{className:"header-title",onClick:L,style:{cursor:"pointer"},children:[v.jsx("span",{className:"emoji",children:"🐍"}),v.jsx("span",{children:"Python Expert Academy"})]}),v.jsxs("div",{className:"header-progress",children:[v.jsx("div",{className:"progress-bar-container",children:v.jsx("div",{className:"progress-bar-fill",style:{width:`${q}%`}})}),v.jsxs("span",{className:"progress-text",children:[q,"%"]}),v.jsx("button",{className:"theme-toggle",onClick:U,title:d==="dark"?"Thème clair":"Thème sombre",children:d==="dark"?"☀️":"🌙"})]})]})}function oy({courses:q,getCompletedCount:V,getTotalCompleted:L,getTotalLessons:d,getGlobalProgress:O,onNavigate:U}){const H=L(),G=d(),A=O(),b=q.findIndex(T=>V(T.id)<T.lessons.length),Z=b>=0?b+1:7;return v.jsxs("div",{className:"dashboard",children:[v.jsxs("div",{className:"dashboard-hero",children:[v.jsx("h1",{children:"🐍 Python Expert Academy"}),v.jsx("p",{children:"Formation complète Python — Du débutant à l'expert en 7 niveaux progressifs avec des exercices pratiques et des projets concrets."})]}),v.jsxs("div",{className:"stats-grid",children:[v.jsxs("div",{className:"stat-card",children:[v.jsx("div",{className:"stat-icon",children:"📊"}),v.jsxs("div",{className:"stat-value",children:[A,"%"]}),v.jsx("div",{className:"stat-label",children:"Progression globale"})]}),v.jsxs("div",{className:"stat-card",children:[v.jsx("div",{className:"stat-icon",children:"📖"}),v.jsxs("div",{className:"stat-value",children:[H,"/",G]}),v.jsx("div",{className:"stat-label",children:"Leçons complétées"})]}),v.jsxs("div",{className:"stat-card",children:[v.jsx("div",{className:"stat-icon",children:"🎯"}),v.jsx("div",{className:"stat-value",children:Z}),v.jsx("div",{className:"stat-label",children:"Niveau actuel"})]}),v.jsxs("div",{className:"stat-card",children:[v.jsx("div",{className:"stat-icon",children:"🏆"}),v.jsx("div",{className:"stat-value",children:q.filter(T=>V(T.id)===T.lessons.length).length}),v.jsx("div",{className:"stat-label",children:"Niveaux terminés"})]})]}),v.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:700,marginBottom:"0.5rem"},children:"📚 Les 7 Niveaux"}),v.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.95rem",marginBottom:"1.5rem"},children:"Cliquez sur un niveau pour commencer ou continuer votre apprentissage."}),v.jsx("div",{className:"levels-grid",children:q.map((T,M)=>{const ae=V(T.id),ce=T.lessons.length,pe=ce>0?Math.round(ae/ce*100):0;return v.jsxs("div",{className:"level-card",onClick:()=>U(T.id,T.lessons[0].id),children:[v.jsxs("div",{className:"level-card-header",children:[v.jsx("div",{className:"level-number",children:M+1}),v.jsx("div",{className:"level-card-title",children:T.title})]}),v.jsx("div",{className:"level-card-desc",children:T.description}),v.jsxs("div",{className:"level-card-progress",children:[v.jsx("div",{className:"level-progress-bar",children:v.jsx("div",{className:"level-progress-fill",style:{width:`${pe}%`}})}),v.jsxs("span",{className:"level-progress-text",children:[pe,"%"]})]})]},T.id)})})]})}function cy(q){const V=[{type:"comment",regex:/#.*$/gm},{type:"decorator",regex:/@\w+/g},{type:"string",regex:/("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|f"(?:\\.|[^"\\])*"|f'(?:\\.|[^'\\])*')/g},{type:"keyword",regex:/\b(def|class|return|if|elif|else|for|while|in|not|and|or|is|import|from|as|with|try|except|finally|raise|yield|async|await|pass|break|continue|lambda|True|False|None|global|nonlocal|del|assert)\b/g},{type:"builtin",regex:/\b(print|len|range|int|str|float|list|dict|set|tuple|type|input|open|super|self|isinstance|enumerate|zip|map|filter|sorted|reversed|any|all|min|max|sum|abs|round|format|hasattr|getattr|setattr|property|staticmethod|classmethod|__init__|__str__|__repr__|__name__|__main__)\b/g},{type:"function",regex:/\b([a-zA-Z_]\w*)\s*(?=\()/g},{type:"number",regex:/\b\d+\.?\d*\b/g},{type:"operator",regex:/[+\-*/%=<>!&|^~:]+/g}],L=[];V.forEach(({type:G,regex:A})=>{let b;const Z=new RegExp(A.source,A.flags);for(;(b=Z.exec(q))!==null;)L.push({start:b.index,end:b.index+b[0].length,text:b[0],type:G})}),L.sort((G,A)=>G.start-A.start);const d=[];let O=0;for(const G of L)G.start>=O&&(d.push(G),O=G.end);let U=0;const H=[];for(const G of d)G.start>U&&H.push({text:q.slice(U,G.start),type:null}),H.push({text:G.text,type:G.type}),U=G.end;return U<q.length&&H.push({text:q.slice(U),type:null}),H}function fy({code:q,language:V="python",title:L}){const[d,O]=Xe.useState(!1),U=()=>{navigator.clipboard.writeText(q).then(()=>{O(!0),setTimeout(()=>O(!1),2e3)})},H=cy(q);return v.jsxs("div",{className:"code-block",children:[v.jsxs("div",{className:"code-block-header",children:[v.jsx("span",{className:"code-block-lang",children:L||V}),v.jsx("button",{className:`code-copy-btn ${d?"copied":""}`,onClick:U,children:d?"✓ Copié":"📋 Copier"})]}),v.jsx("pre",{children:v.jsx("code",{children:H.map((G,A)=>G.type?v.jsx("span",{className:`token-${G.type}`,children:G.text},A):v.jsx("span",{children:G.text},A))})})]})}function dy({questions:q,onComplete:V}){const[L,d]=Xe.useState(0),[O,U]=Xe.useState(null),[H,G]=Xe.useState(!1),[A,b]=Xe.useState(0),[Z,T]=Xe.useState(!1);if(!q||q.length===0)return null;const M=q[L],ae=["A","B","C","D"],ce=le=>{H||U(le)},pe=()=>{O!==null&&(G(!0),O===M.correct&&b(le=>le+1))},Te=()=>{L<q.length-1?(d(le=>le+1),U(null),G(!1)):(T(!0),V&&V(A+(O===M.correct?1:0)))},me=()=>{d(0),U(null),G(!1),b(0),T(!1)};if(Z){const le=A,k=Math.round(le/q.length*100);return v.jsx("div",{className:"quiz-container",children:v.jsxs("div",{className:"quiz-score",children:[v.jsxs("div",{className:"quiz-score-value",children:[k,"%"]}),v.jsxs("div",{className:"quiz-score-label",children:[le,"/",q.length," réponses correctes"]}),v.jsx("p",{style:{color:"var(--text-secondary)",marginTop:"1rem",fontSize:"0.95rem"},children:k>=80?"🎉 Excellent ! Vous maîtrisez cette leçon !":k>=50?"👍 Bien ! Revoyez les notions manquées.":"📖 Relisez la leçon et réessayez."}),v.jsx("div",{className:"quiz-actions",style:{justifyContent:"center"},children:v.jsx("button",{className:"quiz-btn primary",onClick:me,children:"🔄 Recommencer le quiz"})})]})})}return v.jsxs("div",{className:"quiz-container",children:[v.jsx("div",{className:"quiz-title",children:"✅ Quiz – Testez vos connaissances"}),v.jsxs("div",{className:"quiz-progress",children:["Question ",L+1," sur ",q.length]}),v.jsx("div",{className:"quiz-question",children:M.question}),v.jsx("div",{className:"quiz-options",children:M.options.map((le,k)=>{let X="quiz-option";return O===k&&!H&&(X+=" selected"),H&&k===M.correct&&(X+=" correct"),H&&O===k&&k!==M.correct&&(X+=" wrong"),v.jsxs("div",{className:X,onClick:()=>ce(k),children:[v.jsx("span",{className:"quiz-option-letter",children:ae[k]}),v.jsx("span",{children:le})]},k)})}),H&&v.jsx("div",{className:`quiz-feedback ${O===M.correct?"correct":"wrong"}`,children:O===M.correct?`✅ Correct ! ${M.explanation||""}`:`❌ Incorrect. La bonne réponse est ${ae[M.correct]}. ${M.explanation||""}`}),v.jsx("div",{className:"quiz-actions",children:H?v.jsx("button",{className:"quiz-btn primary",onClick:Te,children:L<q.length-1?"Question suivante →":"Voir le résultat"}):v.jsx("button",{className:"quiz-btn primary",onClick:pe,disabled:O===null,children:"Vérifier"})})]})}function py({courses:q,levelId:V,lessonId:L,isCompleted:d,markCompleted:O,onNext:U,onPrev:H,onNavigate:G}){const A=q.find(me=>me.id===V);if(!A)return v.jsx("div",{children:"Niveau introuvable"});const b=A.lessons.find(me=>me.id===L);if(!b)return v.jsx("div",{children:"Leçon introuvable"});const Z=A.lessons.findIndex(me=>me.id===L),T=q.findIndex(me=>me.id===V),M=d(V,L),ae=Z>0||T>0,ce=Z<A.lessons.length-1||T<q.length-1,pe=()=>{O(V,L),ce&&U()},Te=me=>me.map((le,k)=>{switch(le.type){case"text":return v.jsx("div",{className:"lesson-content",dangerouslySetInnerHTML:{__html:le.content}},k);case"code":return v.jsx(fy,{code:le.code,language:le.language||"python",title:le.title},k);case"info":return v.jsxs("div",{className:`info-box ${le.variant||"info"}`,children:[v.jsx("div",{className:"info-box-title",children:le.title}),v.jsx("p",{children:le.content})]},k);case"quiz":return v.jsx(dy,{questions:le.questions},k);case"heading":return v.jsx("div",{className:"lesson-content",children:v.jsx("h2",{children:le.content})},k);case"subheading":return v.jsx("div",{className:"lesson-content",children:v.jsx("h3",{children:le.content})},k);default:return null}});return v.jsxs("div",{className:"lesson-view",children:[v.jsxs("div",{className:"lesson-header",children:[v.jsxs("div",{className:"lesson-breadcrumb",children:[v.jsxs("span",{children:["Niveau ",T+1]})," › ",v.jsx("span",{children:A.shortTitle})," › Leçon ",Z+1]}),v.jsx("h1",{className:"lesson-title",children:b.title}),v.jsxs("div",{className:"lesson-meta",children:[v.jsxs("span",{children:["⏱ ",b.duration||"15-20 min"]}),v.jsxs("span",{children:["📊 ",b.difficulty||"Débutant"]}),M&&v.jsx("span",{style:{color:"var(--accent-success)"},children:"✅ Complétée"})]})]}),Te(b.content),v.jsxs("div",{className:"lesson-nav",children:[ae?v.jsx("button",{className:"lesson-nav-btn",onClick:H,children:"← Précédent"}):v.jsx("div",{}),M?ce?v.jsx("button",{className:"lesson-nav-btn complete",onClick:U,children:"Suivant →"}):v.jsx("button",{className:"lesson-nav-btn complete",onClick:()=>G(q[0].id,q[0].lessons[0].id),children:"🏠 Retour au début"}):v.jsxs("button",{className:"lesson-nav-btn complete",onClick:pe,children:["✅ Marquer comme terminée",ce?" & Suivant":""]})]})]})}const my={id:"level1",title:"Fondations du Langage Python",shortTitle:"Niv. 1 – Fondations",description:"Comprendre la syntaxe Python, les types de base et la logique algorithmique. Durée estimée : 10 à 14 jours.",lessons:[{id:"l1-intro",title:"1.1 Introduction à Python",duration:"20 min",difficulty:"Débutant",content:[{type:"text",content:`<p><strong>Python</strong> est un langage de programmation <em>interprété</em>, <em>polyvalent</em> et <em>facile à apprendre</em>. Créé par <strong>Guido van Rossum</strong> en 1991, il est aujourd'hui l'un des langages les plus populaires au monde.</p>
<p>Python est utilisé dans de nombreux domaines :</p>
<ul>
<li><strong>Développement web</strong> (Django, Flask, FastAPI)</li>
<li><strong>Science des données</strong> (Pandas, NumPy, Matplotlib)</li>
<li><strong>Intelligence artificielle</strong> (TensorFlow, PyTorch)</li>
<li><strong>Automatisation</strong> (scripts système, web scraping)</li>
<li><strong>Applications de bureau</strong> et bien plus encore</li>
</ul>`},{type:"heading",content:"Pourquoi Python ?"},{type:"text",content:`<p>Python se distingue par sa <strong>lisibilité</strong>. Contrairement à d'autres langages qui utilisent des accolades <code>{}</code> pour délimiter les blocs de code, Python utilise l'<strong>indentation</strong> (les espaces ou tabulations). Cela rend le code naturellement propre et lisible.</p>
<p>Comparons un même programme en C et en Python :</p>`},{type:"code",code:`// En C
#include <stdio.h>
int main() {
    printf("Bonjour le monde!");
    return 0;
}`,language:"c",title:"C"},{type:"code",code:`# En Python
print("Bonjour le monde!")`,title:"Python – Beaucoup plus simple !"},{type:"info",variant:"tip",title:"💡 Astuce",content:"Python est un langage interprété : le code est exécuté ligne par ligne, sans compilation préalable. Cela permet de tester rapidement des idées."},{type:"heading",content:"Installer Python"},{type:"text",content:`<p>Pour commencer à programmer en Python, vous devez l'installer sur votre ordinateur :</p>
<ol>
<li>Allez sur <strong>python.org/downloads</strong></li>
<li>Téléchargez la dernière version (Python 3.12+)</li>
<li><strong>Important :</strong> Cochez la case <code>Add Python to PATH</code> lors de l'installation</li>
<li>Ouvrez un terminal et tapez <code>python --version</code> pour vérifier</li>
</ol>`},{type:"code",code:`# Vérifier l'installation dans le terminal
python --version
# Devrait afficher : Python 3.12.x

# Lancer l'interpréteur interactif
python
>>> print("Ça marche !")
Ça marche !
>>> exit()`,title:"Terminal"},{type:"heading",content:"Votre premier programme"},{type:"text",content:"<p>Créez un fichier <code>bonjour.py</code> et écrivez :</p>"},{type:"code",code:`# Mon premier programme Python
# Fichier : bonjour.py

print("Bonjour le monde !")
print("Je suis en train d'apprendre Python 🐍")
print("2 + 3 =", 2 + 3)`,title:"bonjour.py"},{type:"text",content:`<p>Exécutez-le avec : <code>python bonjour.py</code></p>
<p>Résultat :</p>`},{type:"code",code:`Bonjour le monde !
Je suis en train d'apprendre Python 🐍
2 + 3 = 5`,title:"Sortie"},{type:"info",variant:"info",title:"📝 Remarque",content:"Les lignes commençant par # sont des commentaires. Python les ignore complètement. Utilisez-les pour expliquer votre code."},{type:"heading",content:"PEP 8 – Les conventions de style"},{type:"text",content:`<p><strong>PEP 8</strong> est le guide de style officiel de Python. Voici les règles les plus importantes :</p>
<ul>
<li>Utilisez <strong>4 espaces</strong> pour l'indentation (pas de tabulations)</li>
<li>Les noms de variables en <strong>snake_case</strong> : <code>mon_nom</code>, <code>age_utilisateur</code></li>
<li>Les noms de classes en <strong>PascalCase</strong> : <code>MaClasse</code></li>
<li>Les constantes en <strong>MAJUSCULES</strong> : <code>PI = 3.14159</code></li>
<li>Lignes de maximum <strong>79 caractères</strong></li>
</ul>`},{type:"quiz",questions:[{question:"Quel symbole est utilisé pour les commentaires en Python ?",options:["//","#","/* */","--"],correct:1,explanation:"En Python, le symbole # marque le début d'un commentaire."},{question:"Qui a créé Python ?",options:["Dennis Ritchie","James Gosling","Guido van Rossum","Bjarne Stroustrup"],correct:2,explanation:"Guido van Rossum a créé Python en 1991 aux Pays-Bas."},{question:"Comment exécute-t-on un fichier Python ?",options:["compile mon_fichier.py","run mon_fichier.py","python mon_fichier.py","exec mon_fichier.py"],correct:2,explanation:"On utilise la commande python suivie du nom du fichier."}]}]},{id:"l1-variables",title:"1.2 Variables et Types de Données",duration:"25 min",difficulty:"Débutant",content:[{type:"text",content:"<p>En Python, une <strong>variable</strong> est un nom qui fait référence à une valeur stockée en mémoire. Contrairement à d'autres langages, vous n'avez <strong>pas besoin de déclarer le type</strong> — Python le déduit automatiquement.</p>"},{type:"heading",content:"Créer des variables"},{type:"code",code:`# Créer des variables – c'est simple !
nom = "Alice"           # str (chaîne de caractères)
age = 25                # int (entier)
taille = 1.72           # float (nombre à virgule)
est_etudiant = True     # bool (booléen)

# Afficher les variables
print("Nom :", nom)
print("Âge :", age)
print("Taille :", taille)
print("Étudiant :", est_etudiant)`,title:"Création de variables"},{type:"info",variant:"warning",title:"⚠️ Attention",content:"Les noms de variables sont sensibles à la casse : age, Age et AGE sont trois variables différentes ! Utilisez toujours le snake_case : mon_age, nom_complet, etc."},{type:"heading",content:"Les 4 types de base"},{type:"subheading",content:"1. Les entiers (int)"},{type:"text",content:"<p>Les entiers représentent des nombres sans virgule. En Python, ils n'ont <strong>aucune limite de taille</strong> !</p>"},{type:"code",code:`# Entiers (int)
x = 42
y = -17
grand_nombre = 1_000_000_000   # Le underscore améliore la lisibilité

print(type(x))          # <class 'int'>
print(grand_nombre)     # 1000000000

# Python gère les très grands nombres
resultat = 2 ** 100     # 2 puissance 100
print(resultat)         # 1267650600228229401496703205376`,title:"Entiers"},{type:"subheading",content:"2. Les flottants (float)"},{type:"code",code:`# Flottants (float) – nombres à virgule
pi = 3.14159
temperature = -5.3
scientifique = 1.5e6    # Notation scientifique = 1 500 000

print(type(pi))         # <class 'float'>

# ⚠️ Attention à la précision des flottants !
print(0.1 + 0.2)        # 0.30000000000000004 (pas exactement 0.3)
print(0.1 + 0.2 == 0.3) # False !

# Solution : arrondir
print(round(0.1 + 0.2, 1))  # 0.3`,title:"Flottants"},{type:"info",variant:"info",title:"📝 Pourquoi 0.1 + 0.2 ≠ 0.3 ?",content:"Les nombres flottants sont stockés en binaire. Certaines fractions décimales ne peuvent pas être représentées exactement en binaire, d'où ces petites erreurs d'arrondi."},{type:"subheading",content:"3. Les chaînes de caractères (str)"},{type:"code",code:`# Chaînes de caractères (str)
prenom = "Alice"
nom = 'Dupont'                    # Guillemets simples ou doubles
message = """Ceci est un texte
sur plusieurs lignes"""           # Triple guillemets

# Concaténation (assemblage)
nom_complet = prenom + " " + nom
print(nom_complet)                # Alice Dupont

# f-strings – La méthode RECOMMANDÉE (Python 3.6+)
age = 25
salutation = f"Bonjour, je suis {prenom} et j'ai {age} ans."
print(salutation)
# Bonjour, je suis Alice et j'ai 25 ans.

# Opérations sur les chaînes
print(len(prenom))                # 5 (longueur)
print(prenom.upper())             # ALICE
print(prenom.lower())             # alice
print("  espaces  ".strip())      # "espaces" (supprime les espaces)
print(prenom[0])                  # A (premier caractère)
print(prenom[-1])                 # e (dernier caractère)`,title:"Chaînes de caractères"},{type:"subheading",content:"4. Les booléens (bool)"},{type:"code",code:`# Booléens (bool) – Vrai ou Faux
est_majeur = True
a_permis = False

# Résultats de comparaisons
print(5 > 3)       # True
print(10 == 11)    # False
print(5 != 3)      # True (différent)
print(5 >= 5)      # True

# Opérateurs logiques
print(True and False)   # False
print(True or False)    # True
print(not True)         # False

# Tout est vrai ou faux en Python
print(bool(0))      # False (0 est "faux")
print(bool(42))     # True  (tout autre nombre est "vrai")
print(bool(""))     # False (chaîne vide = faux)
print(bool("abc"))  # True  (chaîne non-vide = vrai)`,title:"Booléens"},{type:"heading",content:"Conversion de types"},{type:"code",code:`# Conversion entre types
age_texte = "25"
age_nombre = int(age_texte)     # str → int
print(age_nombre + 5)           # 30

prix = 19.99
prix_int = int(prix)            # float → int (tronque, ne pas arrondir)
print(prix_int)                 # 19

nombre = 42
nombre_str = str(nombre)        # int → str
print("Le nombre est " + nombre_str)

# input() retourne TOUJOURS une chaîne
reponse = input("Votre âge ? ")  # L'utilisateur tape "25"
print(type(reponse))             # <class 'str'>
age = int(reponse)               # Convertir en int pour calculer
print(f"Dans 10 ans, vous aurez {age + 10} ans.")`,title:"Conversions"},{type:"info",variant:"tip",title:"💡 Fonction type()",content:"Utilisez type(variable) pour connaître le type d'une variable à tout moment. C'est très utile pour le débogage !"},{type:"quiz",questions:[{question:"Quel est le type de la variable x = 3.14 ?",options:["int","float","str","bool"],correct:1,explanation:"3.14 contient une virgule, c'est donc un flottant (float)."},{question:'Que retourne type("42") ?',options:["<class 'int'>","<class 'float'>","<class 'str'>","<class 'bool'>"],correct:2,explanation:`"42" est entouré de guillemets, c'est donc une chaîne de caractères (str).`},{question:"Quelle est la bonne façon d'insérer une variable dans une chaîne ?",options:['print("Bonjour " + nom)','print(f"Bonjour {nom}")','print("Bonjour %s" % nom)',"Toutes les réponses sont valides"],correct:3,explanation:"Les trois syntaxes fonctionnent, mais les f-strings sont recommandées."},{question:'Que vaut bool("") ?',options:["True","False","None","Erreur"],correct:1,explanation:"Une chaîne vide est considérée comme False en Python."}]}]},{id:"l1-operators",title:"1.3 Opérateurs",duration:"15 min",difficulty:"Débutant",content:[{type:"text",content:"<p>Les <strong>opérateurs</strong> permettent d'effectuer des calculs, des comparaisons et des opérations logiques sur les données.</p>"},{type:"heading",content:"Opérateurs arithmétiques"},{type:"code",code:`# Opérateurs arithmétiques
a = 17
b = 5

print(a + b)    # 22  (addition)
print(a - b)    # 12  (soustraction)
print(a * b)    # 85  (multiplication)
print(a / b)    # 3.4 (division → retourne toujours un float)
print(a // b)   # 3   (division entière → arrondi vers le bas)
print(a % b)    # 2   (modulo → reste de la division)
print(a ** b)   # 1419857 (puissance → 17^5)

# Ordre de priorité (comme en maths)
resultat = 2 + 3 * 4      # 14 (pas 20 !)
resultat = (2 + 3) * 4    # 20 (les parenthèses changent l'ordre)`,title:"Arithmétique"},{type:"heading",content:"Opérateurs de comparaison"},{type:"code",code:`# Opérateurs de comparaison → retournent True ou False
x = 10
y = 5

print(x == y)    # False (égal)
print(x != y)    # True  (différent)
print(x > y)     # True  (supérieur)
print(x < y)     # False (inférieur)
print(x >= 10)   # True  (supérieur ou égal)
print(x <= 5)    # False (inférieur ou égal)

# Comparaison de chaînes (ordre alphabétique)
print("abc" < "abd")     # True
print("Alice" == "alice") # False (sensible à la casse)`,title:"Comparaison"},{type:"heading",content:"Opérateurs logiques"},{type:"code",code:`# Opérateurs logiques : and, or, not
age = 25
a_permis = True

# and → les DEUX conditions doivent être vraies
peut_conduire = age >= 18 and a_permis
print(peut_conduire)  # True

# or → AU MOINS UNE condition doit être vraie
est_mineur_ou_senior = age < 18 or age > 65
print(est_mineur_ou_senior)  # False

# not → inverse la valeur
print(not True)       # False
print(not False)      # True
print(not (5 > 3))    # False`,title:"Opérateurs logiques"},{type:"heading",content:"Opérateurs d'affectation"},{type:"code",code:`# Affectation augmentée
x = 10
x += 5    # x = x + 5 → 15
x -= 3    # x = x - 3 → 12
x *= 2    # x = x * 2 → 24
x /= 4    # x = x / 4 → 6.0
x //= 2   # x = x // 2 → 3.0
x **= 3   # x = x ** 3 → 27.0
x %= 5    # x = x % 5 → 2.0

print(x)  # 2.0`,title:"Affectation augmentée"},{type:"quiz",questions:[{question:"Que vaut 17 // 5 ?",options:["3.4","3","2","4"],correct:1,explanation:"// est la division entière. 17 ÷ 5 = 3.4, donc la partie entière est 3."},{question:"Que vaut 17 % 5 ?",options:["3.4","3","2","12"],correct:2,explanation:"% donne le reste de la division. 17 = 5 × 3 + 2, donc le reste est 2."},{question:"Que vaut True and False ?",options:["True","False","None","Erreur"],correct:1,explanation:"L'opérateur and retourne False si l'une des conditions est False."}]}]},{id:"l1-conditions",title:"1.4 Conditions (if / elif / else)",duration:"25 min",difficulty:"Débutant",content:[{type:"text",content:"<p>Les <strong>structures conditionnelles</strong> permettent à votre programme de prendre des <em>décisions</em>. C'est l'un des concepts les plus fondamentaux de la programmation.</p>"},{type:"heading",content:"La structure if"},{type:"code",code:`# Structure de base
age = 20

if age >= 18:
    print("Vous êtes majeur")
    print("Bienvenue !")

# Si la condition est False, le bloc est ignoré
if age >= 65:
    print("Vous êtes senior")  # Pas affiché car 20 < 65`,title:"if simple"},{type:"info",variant:"warning",title:"⚠️ L'indentation est OBLIGATOIRE",content:"En Python, l'indentation (4 espaces) définit les blocs de code. Si vous ne l'indentez pas correctement, vous aurez une erreur IndentationError."},{type:"heading",content:"if / else"},{type:"code",code:`# if / else – deux chemins possibles
temperature = 35

if temperature > 30:
    print("Il fait chaud ! 🌡️")
    print("Pensez à boire de l'eau.")
else:
    print("La température est agréable.")

# Résultat : Il fait chaud ! 🌡️`,title:"if / else"},{type:"heading",content:"if / elif / else – Plusieurs conditions"},{type:"code",code:`# Plusieurs conditions avec elif
note = 15

if note >= 16:
    mention = "Très Bien"
elif note >= 14:
    mention = "Bien"
elif note >= 12:
    mention = "Assez Bien"
elif note >= 10:
    mention = "Passable"
else:
    mention = "Insuffisant"

print(f"Note : {note}/20 → Mention : {mention}")
# Note : 15/20 → Mention : Bien

# Les conditions sont testées dans l'ordre
# Dès qu'une est vraie, les suivantes sont ignorées`,title:"if / elif / else"},{type:"heading",content:"Conditions imbriquées et ternaires"},{type:"code",code:`# Conditions imbriquées
age = 25
a_billet = True

if age >= 18:
    if a_billet:
        print("Accès autorisé ✅")
    else:
        print("Achetez un billet d'abord")
else:
    print("Réservé aux adultes")

# Expression ternaire (condition en une ligne)
# syntaxe : valeur_si_vrai if condition else valeur_si_faux
statut = "majeur" if age >= 18 else "mineur"
print(f"Vous êtes {statut}")  # Vous êtes majeur

# Combinaison de conditions
heure = 14
if 6 <= heure < 12:
    print("Bonjour !")
elif 12 <= heure < 18:
    print("Bon après-midi !")
elif 18 <= heure < 22:
    print("Bonsoir !")
else:
    print("Bonne nuit !")`,title:"Avancé"},{type:"quiz",questions:[{question:"Combien d'espaces utilise-t-on pour l'indentation en Python ?",options:["2 espaces","3 espaces","4 espaces","1 tabulation"],correct:2,explanation:"La convention PEP 8 recommande 4 espaces pour l'indentation."},{question:"Quelle est la syntaxe d'une expression ternaire ?",options:["condition ? vrai : faux","vrai if condition else faux","if condition then vrai else faux","condition and vrai or faux"],correct:1,explanation:"En Python : valeur_si_vrai if condition else valeur_si_faux."}]}]},{id:"l1-loops",title:"1.5 Boucles (for et while)",duration:"30 min",difficulty:"Débutant",content:[{type:"text",content:"<p>Les <strong>boucles</strong> permettent de répéter des instructions. Python propose deux types de boucles : <code>for</code> et <code>while</code>.</p>"},{type:"heading",content:"La boucle for"},{type:"text",content:"<p>La boucle <code>for</code> parcourt chaque élément d'une <em>séquence</em> (liste, chaîne, range, etc.).</p>"},{type:"code",code:`# Parcourir une liste
fruits = ["pomme", "banane", "cerise"]
for fruit in fruits:
    print(f"J'aime les {fruit}s")

# Parcourir une chaîne caractère par caractère
for lettre in "Python":
    print(lettre, end=" ")  # P y t h o n

# La fonction range()
for i in range(5):          # 0, 1, 2, 3, 4
    print(i)

for i in range(2, 8):       # 2, 3, 4, 5, 6, 7
    print(i)

for i in range(0, 20, 3):   # 0, 3, 6, 9, 12, 15, 18
    print(i)

# Compter à rebours
for i in range(10, 0, -1):  # 10, 9, 8, ..., 1
    print(i)
print("Décollage ! 🚀")`,title:"Boucle for"},{type:"heading",content:"La boucle while"},{type:"code",code:`# while – répète TANT QUE la condition est vraie
compteur = 5
while compteur > 0:
    print(f"Compte à rebours : {compteur}")
    compteur -= 1  # CRUCIAL : sinon boucle infinie !
print("Terminé !")

# Exemple : demander un mot de passe
mot_de_passe = ""
while mot_de_passe != "python":
    mot_de_passe = input("Mot de passe : ")
print("Accès accordé ! ✅")`,title:"Boucle while"},{type:"info",variant:"warning",title:"⚠️ Boucle infinie",content:"Assurez-vous toujours que la condition du while finira par devenir False ! Sinon, le programme tourne indéfiniment. Appuyez sur Ctrl+C pour arrêter un programme bloqué."},{type:"heading",content:"break, continue et else"},{type:"code",code:`# break – sort de la boucle immédiatement
for i in range(10):
    if i == 5:
        print("Stop à 5 !")
        break
    print(i)
# Affiche : 0 1 2 3 4 Stop à 5 !

# continue – passe à l'itération suivante
for i in range(10):
    if i % 2 == 0:  # Si pair
        continue     # Sauter
    print(i)
# Affiche : 1 3 5 7 9

# else sur une boucle (peu connu mais utile !)
# Le bloc else s'exécute SI la boucle n'a PAS été interrompue par break
for n in range(2, 10):
    for d in range(2, n):
        if n % d == 0:
            break
    else:
        print(f"{n} est un nombre premier")`,title:"Contrôle de boucle"},{type:"heading",content:"Boucles imbriquées"},{type:"code",code:`# Table de multiplication
for i in range(1, 6):
    for j in range(1, 6):
        print(f"{i*j:4}", end="")
    print()  # Nouvelle ligne

# Résultat :
#    1   2   3   4   5
#    2   4   6   8  10
#    3   6   9  12  15
#    4   8  12  16  20
#    5  10  15  20  25`,title:"Boucles imbriquées"},{type:"quiz",questions:[{question:"Que produit range(3) ?",options:["[1, 2, 3]","[0, 1, 2]","[0, 1, 2, 3]","[3]"],correct:1,explanation:"range(3) produit les nombres 0, 1, 2 (le 3 est exclu)."},{question:"Que fait l'instruction continue ?",options:["Arrête la boucle","Passe à l'itération suivante","Recommence la boucle depuis le début","Sort du programme"],correct:1,explanation:"continue saute le reste du corps de la boucle et passe à l'itération suivante."},{question:"Quand le bloc else d'une boucle for s'exécute-t-il ?",options:["Toujours","Jamais","Quand la boucle se termine sans break","Quand la boucle est vide"],correct:2,explanation:"Le else d'une boucle s'exécute uniquement si la boucle n'a pas été interrompue par un break."}]}]},{id:"l1-functions",title:"1.6 Fonctions",duration:"30 min",difficulty:"Débutant",content:[{type:"text",content:"<p>Les <strong>fonctions</strong> sont des blocs de code réutilisables qui effectuent une tâche spécifique. Elles sont <em>essentielles</em> pour organiser votre code et éviter la répétition.</p>"},{type:"heading",content:"Définir et appeler une fonction"},{type:"code",code:`# Définir une fonction avec def
def dire_bonjour():
    """Cette fonction affiche un message de bienvenue."""
    print("Bonjour ! 👋")
    print("Bienvenue dans Python !")

# Appeler la fonction
dire_bonjour()
dire_bonjour()  # On peut l'appeler autant de fois qu'on veut`,title:"Fonction simple"},{type:"heading",content:"Paramètres et arguments"},{type:"code",code:`# Fonction avec paramètres
def saluer(nom):
    print(f"Bonjour, {nom} !")

saluer("Alice")    # Bonjour, Alice !
saluer("Bob")      # Bonjour, Bob !

# Plusieurs paramètres
def presenter(nom, age, ville):
    print(f"Je suis {nom}, {age} ans, de {ville}.")

presenter("Alice", 25, "Paris")

# Paramètres par défaut
def saluer_v2(nom, salutation="Bonjour"):
    print(f"{salutation}, {nom} !")

saluer_v2("Alice")              # Bonjour, Alice !
saluer_v2("Alice", "Salut")     # Salut, Alice !

# Arguments nommés (keyword arguments)
presenter(ville="Lyon", nom="Bob", age=30)
# Je suis Bob, 30 ans, de Lyon.`,title:"Paramètres"},{type:"heading",content:"La valeur de retour (return)"},{type:"code",code:`# return – renvoyer une valeur
def additionner(a, b):
    return a + b

resultat = additionner(3, 7)
print(resultat)  # 10

# Utiliser le résultat dans d'autres expressions
total = additionner(10, 20) + additionner(5, 5)
print(total)  # 40

# Retourner plusieurs valeurs
def diviser(a, b):
    quotient = a // b
    reste = a % b
    return quotient, reste

q, r = diviser(17, 5)
print(f"17 ÷ 5 = {q} reste {r}")  # 17 ÷ 5 = 3 reste 2

# Si pas de return, la fonction retourne None
def sans_retour():
    print("Je ne retourne rien")

resultat = sans_retour()
print(resultat)  # None`,title:"Return"},{type:"heading",content:"Portée des variables (Scope)"},{type:"code",code:`# Les variables définies DANS une fonction sont LOCALES
def ma_fonction():
    x = 10  # Variable locale
    print(f"Dans la fonction : x = {x}")

ma_fonction()
# print(x)  # ❌ ERREUR ! x n'existe pas en dehors de la fonction

# Les variables définies EN DEHORS sont GLOBALES
y = 100  # Variable globale

def afficher_y():
    print(f"Variable globale y = {y}")  # ✅ On peut la lire

afficher_y()

# Pour MODIFIER une variable globale dans une fonction
compteur = 0

def incrementer():
    global compteur  # Déclarer explicitement qu'on utilise la variable globale
    compteur += 1

incrementer()
incrementer()
print(compteur)  # 2`,title:"Portée (Scope)"},{type:"info",variant:"tip",title:"💡 Bonne pratique",content:"Évitez d'utiliser global autant que possible. Préférez passer les valeurs en paramètres et utiliser return. Cela rend votre code plus propre et testable."},{type:"heading",content:"Exemple pratique complet"},{type:"code",code:`# Calculatrice simple avec fonctions
def calculer(a, b, operation="+"):
    """Effectue une opération mathématique entre deux nombres."""
    if operation == "+":
        return a + b
    elif operation == "-":
        return a - b
    elif operation == "*":
        return a * b
    elif operation == "/":
        if b == 0:
            return "Erreur : division par zéro !"
        return a / b
    else:
        return "Opération inconnue"

# Utilisation
print(calculer(10, 5, "+"))    # 15
print(calculer(10, 5, "-"))    # 5
print(calculer(10, 5, "*"))    # 50
print(calculer(10, 5, "/"))    # 2.0
print(calculer(10, 0, "/"))    # Erreur : division par zéro !`,title:"Calculatrice"},{type:"quiz",questions:[{question:"Que retourne une fonction Python sans instruction return ?",options:["0",'""',"None","False"],correct:2,explanation:"Par défaut, une fonction sans return retourne None."},{question:"Comment définit-on une valeur par défaut pour un paramètre ?",options:["def f(x: 5)","def f(x=5)","def f(x default 5)","def f(5 -> x)"],correct:1,explanation:"On utilise = pour assigner une valeur par défaut : def f(x=5)."},{question:'Que signifie "variable locale" ?',options:["Accessible partout","Accessible uniquement dans la fonction","Accessible uniquement dans le fichier","Variable constante"],correct:1,explanation:"Une variable locale existe uniquement dans la fonction où elle est définie."}]}]},{id:"l1-io",title:"1.7 Entrées / Sorties & Projet Final",duration:"25 min",difficulty:"Débutant",content:[{type:"text",content:"<p>Apprenons à interagir avec l'utilisateur et terminons ce niveau avec un projet complet !</p>"},{type:"heading",content:"La fonction input()"},{type:"code",code:`# input() attend que l'utilisateur tape quelque chose
nom = input("Quel est votre nom ? ")
print(f"Enchanté, {nom} !")

# ⚠️ input() retourne TOUJOURS une chaîne (str)
age_str = input("Votre âge ? ")
age = int(age_str)  # Conversion nécessaire pour calculer

# En une seule ligne
age = int(input("Votre âge ? "))

# Gestion des erreurs de saisie
try:
    nombre = int(input("Entrez un nombre : "))
    print(f"Le double est {nombre * 2}")
except ValueError:
    print("Ce n'est pas un nombre valide !")`,title:"input()"},{type:"heading",content:"Formatage avancé de print()"},{type:"code",code:`# Paramètre sep (séparateur)
print("Python", "est", "génial", sep=" - ")
# Python - est - génial

# Paramètre end (fin de ligne)
for i in range(5):
    print(i, end=" → ")
print("Fin")
# 0 → 1 → 2 → 3 → 4 → Fin

# Formatage avec f-strings
pi = 3.14159265
print(f"Pi = {pi:.2f}")          # Pi = 3.14
print(f"Pi = {pi:.4f}")          # Pi = 3.1416

nombre = 42
print(f"Binaire : {nombre:b}")   # Binaire : 101010
print(f"Hex     : {nombre:x}")   # Hex     : 2a
print(f"Aligné  : {nombre:>10}") # Aligné  :         42
print(f"Zéros   : {nombre:05}")  # Zéros   : 00042`,title:"print() avancé"},{type:"heading",content:"🛠️ Projet Final : Jeu du Nombre Mystère"},{type:"text",content:"<p>Voici un projet complet qui utilise <strong>toutes</strong> les notions apprises dans ce niveau :</p>"},{type:"code",code:`# 🎮 JEU DU NOMBRE MYSTÈRE
# L'ordinateur choisit un nombre, le joueur doit le deviner

import random  # Module pour générer des nombres aléatoires

def jeu_nombre_mystere():
    """Jeu complet du nombre mystère."""
    print("=" * 40)
    print("🎯 JEU DU NOMBRE MYSTÈRE")
    print("=" * 40)
    
    # Configuration
    minimum = 1
    maximum = 100
    nombre_secret = random.randint(minimum, maximum)
    tentatives = 0
    max_tentatives = 7
    
    print(f"\\nJe pense à un nombre entre {minimum} et {maximum}.")
    print(f"Vous avez {max_tentatives} tentatives.\\n")
    
    # Boucle de jeu
    while tentatives < max_tentatives:
        tentatives += 1
        essais_restants = max_tentatives - tentatives
        
        # Demander une proposition
        try:
            proposition = int(input(f"Tentative {tentatives}/{max_tentatives} : "))
        except ValueError:
            print("⚠️ Entrez un nombre valide !")
            tentatives -= 1  # Ne pas compter cette tentative
            continue
        
        # Vérifier la proposition
        if proposition == nombre_secret:
            print(f"\\n🎉 BRAVO ! Le nombre était bien {nombre_secret} !")
            print(f"Trouvé en {tentatives} tentative(s) !")
            
            # Évaluation
            if tentatives <= 3:
                print("⭐⭐⭐ Incroyable !")
            elif tentatives <= 5:
                print("⭐⭐ Très bien !")
            else:
                print("⭐ Bien joué !")
            return True
        
        elif proposition < nombre_secret:
            print(f"📈 C'est plus ! ({essais_restants} essai(s) restant(s))")
        else:
            print(f"📉 C'est moins ! ({essais_restants} essai(s) restant(s))")
    
    # Défaite
    print(f"\\n💔 Perdu ! Le nombre mystère était {nombre_secret}.")
    return False

# Lancer le jeu
def main():
    jouer = True
    victoires = 0
    parties = 0
    
    while jouer:
        parties += 1
        if jeu_nombre_mystere():
            victoires += 1
        
        print(f"\\n📊 Score : {victoires}/{parties} victoire(s)")
        reponse = input("\\nRejouer ? (oui/non) : ").lower()
        jouer = reponse in ("oui", "o", "yes", "y")
    
    print("\\nMerci d'avoir joué ! À bientôt 🐍")

# Point d'entrée
if __name__ == "__main__":
    main()`,title:"🎮 jeu_nombre_mystere.py – Projet complet"},{type:"info",variant:"tip",title:"🎓 Ce que ce projet utilise",content:"Variables, types (int, str, bool), opérateurs, conditions (if/elif/else), boucles (while), fonctions (def, return), input/print, gestion d'erreurs (try/except), module import. Vous maîtrisez toutes les fondations !"},{type:"quiz",questions:[{question:"Quel type retourne toujours input() ?",options:["int","float","str","Ça dépend de ce que l'utilisateur tape"],correct:2,explanation:"input() retourne toujours une chaîne de caractères (str), même si l'utilisateur tape un nombre."},{question:'Que fait end="" dans print() ?',options:["Termine le programme","Empêche le retour à la ligne","Ajoute un espace","Rien"],correct:1,explanation:'Par défaut, print() ajoute un retour à la ligne. end="" le remplace par rien.'}]}]}]},yy={id:"level2",title:"Structures de Données & Fichiers",shortTitle:"Niv. 2 – Données",description:"Manipuler efficacement les données complexes et interagir avec le système de fichiers. Durée : 12 à 15 jours.",lessons:[{id:"l2-lists",title:"2.1 Listes",duration:"25 min",difficulty:"Débutant",content:[{type:"text",content:"<p>Les <strong>listes</strong> sont les structures de données les plus utilisées en Python. Elles stockent une collection <em>ordonnée</em> et <em>modifiable</em> d'éléments.</p>"},{type:"heading",content:"Créer et manipuler des listes"},{type:"code",code:`# Créer des listes
fruits = ["pomme", "banane", "cerise"]
nombres = [1, 2, 3, 4, 5]
mixte = [42, "hello", True, 3.14]  # Types mixtes autorisés
vide = []

# Accéder aux éléments (index commence à 0)
print(fruits[0])    # pomme
print(fruits[-1])   # cerise (dernier élément)
print(fruits[1:3])  # ['banane', 'cerise'] (slicing)

# Modifier des éléments
fruits[1] = "mangue"
print(fruits)  # ['pomme', 'mangue', 'cerise']

# Longueur
print(len(fruits))  # 3`,title:"Bases des listes"},{type:"heading",content:"Méthodes essentielles"},{type:"code",code:`# Ajouter des éléments
fruits = ["pomme", "banane"]
fruits.append("cerise")         # Ajouter à la fin
fruits.insert(1, "mangue")      # Insérer à l'index 1
fruits.extend(["kiwi", "poire"]) # Ajouter plusieurs éléments
print(fruits)  # ['pomme', 'mangue', 'banane', 'cerise', 'kiwi', 'poire']

# Supprimer des éléments
fruits.remove("banane")   # Supprime par valeur
dernier = fruits.pop()    # Supprime et retourne le dernier
del fruits[0]             # Supprime par index

# Rechercher
print("mangue" in fruits)       # True (vérifier si présent)
print(fruits.index("mangue"))   # Position de l'élément
print(fruits.count("mangue"))   # Nombre d'occurrences

# Trier
nombres = [3, 1, 4, 1, 5, 9, 2, 6]
nombres.sort()                  # Tri en place (modifie la liste)
print(nombres)                  # [1, 1, 2, 3, 4, 5, 6, 9]
nombres.sort(reverse=True)      # Tri décroissant
nombres_tries = sorted(nombres) # Crée une NOUVELLE liste triée

# Inverser
nombres.reverse()

# Copier (attention aux pièges !)
copie = fruits.copy()           # Copie indépendante
# OU copie = fruits[:]
# ⚠️ copie = fruits crée un ALIAS, pas une copie !`,title:"Méthodes de liste"},{type:"heading",content:"Slicing avancé"},{type:"code",code:`# Slicing : liste[debut:fin:pas]
nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(nums[2:7])      # [2, 3, 4, 5, 6]
print(nums[:5])       # [0, 1, 2, 3, 4] (du début à 5)
print(nums[5:])       # [5, 6, 7, 8, 9] (de 5 à la fin)
print(nums[::2])      # [0, 2, 4, 6, 8] (un sur deux)
print(nums[::-1])     # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] (inversé)
print(nums[1:8:3])    # [1, 4, 7] (de 1 à 8, pas de 3)

# Le slicing crée une COPIE
sous_liste = nums[2:5]
sous_liste[0] = 999
print(nums)       # [0, 1, 2, 3, ...] ← pas modifié !`,title:"Slicing"},{type:"quiz",questions:[{question:'Que retourne fruits[-2] si fruits = ["a", "b", "c", "d"] ?',options:['"b"','"c"','"d"',"Erreur"],correct:1,explanation:'Les indices négatifs comptent depuis la fin : -1 = "d", -2 = "c".'},{question:"Quelle méthode ajoute un élément à la fin d'une liste ?",options:["add()","push()","append()","insert()"],correct:2,explanation:"append() ajoute un élément à la fin de la liste."},{question:"Comment inverser une liste en une ligne ?",options:["list.invert()","list[::-1]","reversed(list)","Les deux derniers"],correct:3,explanation:"list[::-1] crée une copie inversée, reversed() crée un itérateur inversé."}]}]},{id:"l2-tuples-sets",title:"2.2 Tuples et Ensembles",duration:"20 min",difficulty:"Débutant",content:[{type:"heading",content:"Les Tuples (tuple)"},{type:"text",content:"<p>Un <strong>tuple</strong> est comme une liste, mais <em>immuable</em> (non modifiable après création). On utilise des parenthèses au lieu de crochets.</p>"},{type:"code",code:`# Créer des tuples
coord = (3, 5)
couleurs = ("rouge", "vert", "bleu")
singleton = (42,)    # ⚠️ La virgule est nécessaire pour un seul élément !
sans_parens = 1, 2, 3  # Les parenthèses sont optionnelles

# Accéder aux éléments (comme les listes)
print(couleurs[0])    # rouge
print(couleurs[-1])   # bleu
print(couleurs[1:])   # ('vert', 'bleu')

# ❌ Les tuples sont IMMUABLES
# couleurs[0] = "jaune"  → TypeError !

# Unpacking (déballage) – TRÈS UTILE
x, y = coord
print(f"x={x}, y={y}")  # x=3, y=5

# Échange de variables élégant
a, b = 5, 10
a, b = b, a
print(a, b)  # 10, 5

# Fonctions retournant des tuples
def min_max(liste):
    return min(liste), max(liste)

petit, grand = min_max([3, 1, 4, 1, 5, 9])
print(f"Min: {petit}, Max: {grand}")  # Min: 1, Max: 9`,title:"Tuples"},{type:"info",variant:"info",title:"📝 Quand utiliser un tuple vs une liste ?",content:"Utilisez un tuple pour des données qui ne doivent PAS changer (coordonnées, couleurs, clés de dictionnaire). Utilisez une liste pour des collections que vous modifierez."},{type:"heading",content:"Les Ensembles (set)"},{type:"code",code:`# Les ensembles : collections SANS DOUBLONS et NON ORDONNÉES
nombres = {1, 2, 3, 4, 5}
lettres = set("abracadabra")
print(lettres)  # {'a', 'r', 'b', 'c', 'd'} – pas de doublons !

# Supprimer les doublons d'une liste
liste_doublons = [1, 2, 2, 3, 3, 3, 4]
sans_doublons = list(set(liste_doublons))
print(sans_doublons)  # [1, 2, 3, 4]

# Opérations ensemblistes
a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

print(a | b)  # Union : {1, 2, 3, 4, 5, 6, 7, 8}
print(a & b)  # Intersection : {4, 5}
print(a - b)  # Différence : {1, 2, 3}
print(a ^ b)  # Différence symétrique : {1, 2, 3, 6, 7, 8}

# Vérification d'appartenance (très rapide !)
print(3 in a)  # True – O(1) vs O(n) pour les listes

# Méthodes
a.add(6)        # Ajouter un élément
a.discard(1)    # Supprimer (sans erreur si absent)
a.remove(2)     # Supprimer (erreur si absent)`,title:"Ensembles"},{type:"quiz",questions:[{question:"Les tuples sont...",options:["Modifiables (mutables)","Non modifiables (immuables)","Plus rapides que les ensembles","Toujours vides"],correct:1,explanation:"Les tuples sont immuables : on ne peut pas modifier leurs éléments après création."},{question:"Comment supprimer les doublons d'une liste ?",options:["list.unique()","list(set(ma_liste))","ma_liste.deduplicate()","sorted(ma_liste)"],correct:1,explanation:"Convertir en set supprime les doublons, puis reconvertir en list."}]}]},{id:"l2-dicts",title:"2.3 Dictionnaires",duration:"25 min",difficulty:"Débutant",content:[{type:"text",content:"<p>Les <strong>dictionnaires</strong> stockent des paires <em>clé-valeur</em>. C'est l'une des structures les plus puissantes et les plus utilisées de Python.</p>"},{type:"code",code:`# Créer un dictionnaire
personne = {
    "nom": "Alice",
    "age": 25,
    "ville": "Paris",
    "langages": ["Python", "JavaScript"]
}

# Accéder aux valeurs
print(personne["nom"])         # Alice
print(personne.get("age"))     # 25
print(personne.get("email", "N/A"))  # N/A (valeur par défaut)

# Modifier et ajouter
personne["age"] = 26           # Modifier
personne["email"] = "a@b.com"  # Ajouter une nouvelle clé

# Supprimer
del personne["ville"]
email = personne.pop("email")  # Supprime et retourne la valeur

# Vérifier l'existence d'une clé
print("nom" in personne)  # True
print("ville" in personne)  # False`,title:"Dictionnaires"},{type:"heading",content:"Parcourir un dictionnaire"},{type:"code",code:`etudiant = {"nom": "Bob", "age": 22, "note": 15.5}

# Parcourir les clés
for cle in etudiant:
    print(cle)

# Parcourir les valeurs
for valeur in etudiant.values():
    print(valeur)

# Parcourir clés ET valeurs (le plus courant)
for cle, valeur in etudiant.items():
    print(f"{cle} : {valeur}")

# Dictionnaires imbriqués
etudiants = {
    "alice": {"age": 25, "note": 16},
    "bob": {"age": 22, "note": 14},
    "charlie": {"age": 23, "note": 18}
}

for nom, infos in etudiants.items():
    print(f"{nom.capitalize()} : {infos['note']}/20")

# Trouver le meilleur étudiant
meilleur = max(etudiants, key=lambda x: etudiants[x]["note"])
print(f"Meilleur : {meilleur}")  # charlie`,title:"Parcours et imbrication"},{type:"quiz",questions:[{question:`Que retourne dict.get("x", 0) si "x" n'existe pas ?`,options:["None","Erreur","0",'""'],correct:2,explanation:"get() retourne la valeur par défaut (ici 0) si la clé n'existe pas."},{question:"Comment itérer sur les clés ET valeurs d'un dictionnaire ?",options:["for k, v in d:","for k, v in d.items():","for k, v in d.pairs():","for k, v in d.all():"],correct:1,explanation:"La méthode items() retourne des paires (clé, valeur)."}]}]},{id:"l2-comprehensions",title:"2.4 Compréhensions",duration:"20 min",difficulty:"Intermédiaire",content:[{type:"text",content:"<p>Les <strong>compréhensions</strong> (comprehensions) sont une syntaxe concise et élégante propre à Python pour créer des listes, dictionnaires et ensembles.</p>"},{type:"code",code:`# List comprehension – créer une liste en UNE ligne

# Sans comprehension
carres = []
for i in range(10):
    carres.append(i ** 2)

# Avec comprehension (BEAUCOUP plus Pythonique !)
carres = [i ** 2 for i in range(10)]
print(carres)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Avec condition (filtre)
pairs = [i for i in range(20) if i % 2 == 0]
print(pairs)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Avec transformation conditionnelle
labels = ["pair" if i % 2 == 0 else "impair" for i in range(5)]
print(labels)  # ['pair', 'impair', 'pair', 'impair', 'pair']

# Comprehension imbriquée (aplatir une matrice)
matrice = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
aplati = [x for ligne in matrice for x in ligne]
print(aplati)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]`,title:"List Comprehension"},{type:"heading",content:"Dict et Set Comprehensions"},{type:"code",code:`# Dict comprehension
carres_dict = {i: i**2 for i in range(6)}
print(carres_dict)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Inverser un dictionnaire
original = {"a": 1, "b": 2, "c": 3}
inverse = {v: k for k, v in original.items()}
print(inverse)  # {1: 'a', 2: 'b', 3: 'c'}

# Filtrer un dictionnaire
notes = {"Alice": 16, "Bob": 8, "Charlie": 14, "Diana": 5}
reussis = {nom: note for nom, note in notes.items() if note >= 10}
print(reussis)  # {'Alice': 16, 'Charlie': 14}

# Set comprehension
mots = ["hello", "world", "hello", "python"]
longueurs = {len(mot) for mot in mots}
print(longueurs)  # {5, 6}`,title:"Dict & Set Comprehensions"},{type:"info",variant:"tip",title:"💡 Quand utiliser les compréhensions ?",content:"Utilisez-les quand la logique tient en UNE ligne et reste lisible. Si la logique est complexe (plusieurs if/else, boucles imbriquées), préférez une boucle for classique."},{type:"quiz",questions:[{question:"Que produit [x*2 for x in [1,2,3]] ?",options:["[1, 2, 3]","[2, 4, 6]","[1, 4, 9]","[[1,2,3], [1,2,3]]"],correct:1,explanation:"Chaque élément est multiplié par 2 : 1*2=2, 2*2=4, 3*2=6."}]}]},{id:"l2-files",title:"2.5 Fichiers (CSV & JSON)",duration:"25 min",difficulty:"Intermédiaire",content:[{type:"text",content:"<p>Python rend la lecture et l'écriture de fichiers très simple avec l'instruction <code>with open()</code>.</p>"},{type:"heading",content:"Lire et écrire des fichiers texte"},{type:"code",code:`# Écrire dans un fichier
with open("mon_fichier.txt", "w", encoding="utf-8") as f:
    f.write("Première ligne\\n")
    f.write("Deuxième ligne\\n")
    f.write("Troisième ligne\\n")

# Lire tout le contenu
with open("mon_fichier.txt", "r", encoding="utf-8") as f:
    contenu = f.read()
    print(contenu)

# Lire ligne par ligne (plus économe en mémoire)
with open("mon_fichier.txt", "r", encoding="utf-8") as f:
    for ligne in f:
        print(ligne.strip())  # strip() enlève le \\n

# Ajouter du contenu (mode "a" pour append)
with open("mon_fichier.txt", "a", encoding="utf-8") as f:
    f.write("Ligne ajoutée !\\n")`,title:"Fichiers texte"},{type:"info",variant:"info",title:'📝 Pourquoi "with open()" ?',content:"Le mot-clé with garantit que le fichier sera fermé automatiquement, même si une erreur survient. C'est la manière recommandée d'ouvrir des fichiers."},{type:"heading",content:"Fichiers JSON"},{type:"code",code:`import json

# Écrire du JSON
donnees = {
    "nom": "Alice",
    "age": 25,
    "langages": ["Python", "JavaScript"],
    "adresse": {
        "ville": "Paris",
        "pays": "France"
    }
}

with open("donnees.json", "w", encoding="utf-8") as f:
    json.dump(donnees, f, indent=2, ensure_ascii=False)

# Lire du JSON
with open("donnees.json", "r", encoding="utf-8") as f:
    data = json.load(f)
    print(data["nom"])  # Alice
    print(data["langages"][0])  # Python

# Convertir string ↔ JSON
json_str = json.dumps(donnees, indent=2, ensure_ascii=False)
print(json_str)

donnees_parsed = json.loads(json_str)`,title:"JSON"},{type:"heading",content:"Fichiers CSV"},{type:"code",code:`import csv

# Écrire un CSV
etudiants = [
    ["Nom", "Age", "Note"],
    ["Alice", 25, 16],
    ["Bob", 22, 14],
    ["Charlie", 23, 18]
]

with open("etudiants.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerows(etudiants)

# Lire un CSV
with open("etudiants.csv", "r", encoding="utf-8") as f:
    reader = csv.reader(f)
    for ligne in reader:
        print(ligne)

# Lire comme dictionnaire (RECOMMANDÉ)
with open("etudiants.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for etudiant in reader:
        print(f"{etudiant['Nom']} a eu {etudiant['Note']}/20")`,title:"CSV"},{type:"quiz",questions:[{question:"Quel mode ouvre un fichier pour ajouter du contenu sans écraser ?",options:['"r"','"w"','"a"','"x"'],correct:2,explanation:'Le mode "a" (append) ajoute à la fin du fichier sans effacer le contenu existant.'},{question:"Quelle fonction convertit un dictionnaire Python en JSON ?",options:["json.parse()","json.dump()","json.encode()","json.convert()"],correct:1,explanation:"json.dump() écrit dans un fichier, json.dumps() retourne une chaîne JSON."}]}]},{id:"l2-errors",title:"2.6 Gestion d'Erreurs & Modules",duration:"25 min",difficulty:"Intermédiaire",content:[{type:"heading",content:"try / except / finally"},{type:"code",code:`# Gestion des erreurs avec try/except
try:
    nombre = int(input("Entrez un nombre : "))
    resultat = 100 / nombre
    print(f"100 / {nombre} = {resultat}")
except ValueError:
    print("Ce n'est pas un nombre valide !")
except ZeroDivisionError:
    print("Division par zéro impossible !")
except Exception as e:
    print(f"Erreur inattendue : {e}")
else:
    print("Tout s'est bien passé !")  # Exécuté si PAS d'erreur
finally:
    print("Nettoyage terminé.")  # Exécuté TOUJOURS

# Lever une exception
def diviser(a, b):
    if b == 0:
        raise ValueError("Le diviseur ne peut pas être zéro !")
    return a / b

try:
    diviser(10, 0)
except ValueError as e:
    print(f"Erreur : {e}")`,title:"Gestion d'erreurs"},{type:"heading",content:"Modules et imports"},{type:"code",code:`# Importer un module entier
import math
print(math.pi)        # 3.141592653589793
print(math.sqrt(16))  # 4.0

# Importer des fonctions spécifiques
from math import sqrt, pi
print(sqrt(25))       # 5.0

# Alias
import math as m
print(m.ceil(3.2))    # 4

# Créer son propre module
# Fichier : utils.py
# def saluer(nom):
#     return f"Bonjour {nom} !"

# Fichier : main.py
# from utils import saluer
# print(saluer("Alice"))

# Modules utiles de la bibliothèque standard
import os           # Système de fichiers
import datetime     # Dates et heures
import random       # Nombres aléatoires
import collections  # Structures de données avancées

print(os.getcwd())                          # Répertoire courant
print(datetime.datetime.now())               # Date/heure actuelle
print(random.choice(["pile", "face"]))       # Choix aléatoire`,title:"Modules"},{type:"heading",content:"🛠️ Projet : Gestionnaire de Tâches CLI"},{type:"code",code:`import json
import os
from datetime import datetime

FICHIER = "taches.json"

def charger_taches():
    """Charge les tâches depuis le fichier JSON."""
    if os.path.exists(FICHIER):
        with open(FICHIER, "r", encoding="utf-8") as f:
            return json.load(f)
    return []

def sauvegarder_taches(taches):
    """Sauvegarde les tâches dans le fichier JSON."""
    with open(FICHIER, "w", encoding="utf-8") as f:
        json.dump(taches, f, indent=2, ensure_ascii=False)

def afficher_taches(taches):
    """Affiche toutes les tâches."""
    if not taches:
        print("\\n📭 Aucune tâche.")
        return
    print("\\n📋 VOS TÂCHES :")
    print("-" * 50)
    for i, t in enumerate(taches, 1):
        statut = "✅" if t["fait"] else "⬜"
        date = t.get("date", "")
        print(f"  {i}. {statut} {t['titre']} ({date})")

def ajouter_tache(taches):
    """Ajoute une nouvelle tâche."""
    titre = input("Titre de la tâche : ").strip()
    if titre:
        tache = {
            "titre": titre,
            "fait": False,
            "date": datetime.now().strftime("%Y-%m-%d %H:%M")
        }
        taches.append(tache)
        sauvegarder_taches(taches)
        print(f"✅ Tâche '{titre}' ajoutée !")

def terminer_tache(taches):
    """Marque une tâche comme terminée."""
    afficher_taches(taches)
    try:
        num = int(input("Numéro de la tâche : ")) - 1
        if 0 <= num < len(taches):
            taches[num]["fait"] = True
            sauvegarder_taches(taches)
            print("✅ Tâche marquée comme terminée !")
    except (ValueError, IndexError):
        print("❌ Numéro invalide.")

def supprimer_tache(taches):
    """Supprime une tâche."""
    afficher_taches(taches)
    try:
        num = int(input("Numéro à supprimer : ")) - 1
        if 0 <= num < len(taches):
            supprimee = taches.pop(num)
            sauvegarder_taches(taches)
            print(f"🗑️ '{supprimee['titre']}' supprimée.")
    except (ValueError, IndexError):
        print("❌ Numéro invalide.")

def main():
    taches = charger_taches()
    while True:
        print("\\n" + "=" * 40)
        print("📝 GESTIONNAIRE DE TÂCHES")
        print("=" * 40)
        print("1. Afficher les tâches")
        print("2. Ajouter une tâche")
        print("3. Terminer une tâche")
        print("4. Supprimer une tâche")
        print("5. Quitter")
        
        choix = input("\\nVotre choix : ").strip()
        if choix == "1":
            afficher_taches(taches)
        elif choix == "2":
            ajouter_tache(taches)
        elif choix == "3":
            terminer_tache(taches)
        elif choix == "4":
            supprimer_tache(taches)
        elif choix == "5":
            print("\\nAu revoir ! 👋")
            break

if __name__ == "__main__":
    main()`,title:"🛠️ gestionnaire_taches.py – Projet complet Niveau 2"},{type:"info",variant:"tip",title:"🎓 Ce projet utilise",content:"Listes, dictionnaires, fichiers JSON, gestion d'erreurs, modules, fonctions. Bravo, vous maîtrisez les structures de données !"},{type:"quiz",questions:[{question:"Quel bloc s'exécute TOUJOURS, avec ou sans erreur ?",options:["try","except","else","finally"],correct:3,explanation:"Le bloc finally s'exécute toujours, qu'il y ait eu une erreur ou non."},{question:"Comment lever une exception en Python ?",options:["throw Error()","raise Exception()","error()","except()"],correct:1,explanation:"On utilise raise suivi du type d'exception à lever."}]}]}]},gy={id:"level3",title:"Programmation Orientée Objet (POO)",shortTitle:"Niv. 3 – POO",description:"Concevoir des programmes robustes, extensibles et maintenables avec les classes et l'héritage. Durée : 15 à 20 jours.",lessons:[{id:"l3-classes",title:"3.1 Classes et Objets",duration:"30 min",difficulty:"Intermédiaire",content:[{type:"text",content:`<p>La <strong>Programmation Orientée Objet</strong> (POO) est un paradigme qui organise le code autour d'<em>objets</em> qui combinent des <strong>données</strong> (attributs) et des <strong>comportements</strong> (méthodes).</p>
<p>Pensez à une classe comme un <strong>plan de construction</strong> et à un objet comme la <strong>maison construite</strong> à partir de ce plan. Un seul plan peut produire plusieurs maisons différentes.</p>`},{type:"heading",content:"Créer une classe"},{type:"code",code:`# Définir une classe
class Voiture:
    """Représente une voiture."""
    
    def __init__(self, marque, modele, annee):
        """Constructeur : appelé à la création de l'objet."""
        self.marque = marque    # Attribut d'instance
        self.modele = modele
        self.annee = annee
        self.vitesse = 0        # Valeur par défaut
    
    def accelerer(self, valeur):
        """Augmente la vitesse."""
        self.vitesse += valeur
        print(f"🚗 {self.marque} accélère à {self.vitesse} km/h")
    
    def freiner(self):
        """Ralentit la voiture."""
        self.vitesse = max(0, self.vitesse - 20)
        print(f"🛑 Vitesse réduite à {self.vitesse} km/h")
    
    def afficher(self):
        """Affiche les infos de la voiture."""
        print(f"{self.marque} {self.modele} ({self.annee}) - {self.vitesse} km/h")

# Créer des objets (instances)
ma_voiture = Voiture("Tesla", "Model 3", 2024)
autre_voiture = Voiture("BMW", "Série 3", 2023)

# Utiliser les méthodes
ma_voiture.accelerer(50)   # 🚗 Tesla accélère à 50 km/h
ma_voiture.accelerer(30)   # 🚗 Tesla accélère à 80 km/h
ma_voiture.freiner()       # 🛑 Vitesse réduite à 60 km/h
ma_voiture.afficher()      # Tesla Model 3 (2024) - 60 km/h

# Accéder aux attributs
print(ma_voiture.marque)   # Tesla
print(ma_voiture.vitesse)  # 60`,title:"Classes et objets"},{type:"info",variant:"info",title:"📝 Le paramètre self",content:"self fait référence à l'instance actuelle de la classe. Il est automatiquement passé par Python quand vous appelez une méthode. Grâce à self, chaque objet a ses propres données."},{type:"heading",content:"Attributs de classe vs d'instance"},{type:"code",code:`class Employe:
    # Attribut de CLASSE (partagé par toutes les instances)
    nombre_employes = 0
    entreprise = "TechCorp"
    
    def __init__(self, nom, salaire):
        # Attributs d'INSTANCE (propres à chaque objet)
        self.nom = nom
        self.salaire = salaire
        Employe.nombre_employes += 1  # Incrémenter le compteur de classe
    
    def augmenter(self, pourcentage):
        self.salaire *= (1 + pourcentage / 100)
    
    def __str__(self):
        return f"{self.nom} ({self.entreprise}) - {self.salaire:.0f}€"

alice = Employe("Alice", 45000)
bob = Employe("Bob", 50000)

print(alice)                      # Alice (TechCorp) - 45000€
print(Employe.nombre_employes)    # 2
alice.augmenter(10)
print(alice)                      # Alice (TechCorp) - 49500€`,title:"Attributs de classe"},{type:"quiz",questions:[{question:"Que représente self dans une méthode de classe ?",options:["La classe elle-même","L'instance actuelle de l'objet","Un paramètre obligatoire quelconque","Le constructeur"],correct:1,explanation:"self fait référence à l'instance spécifique sur laquelle la méthode est appelée."},{question:"Quelle méthode est appelée automatiquement à la création d'un objet ?",options:["__create__","__new__","__init__","__start__"],correct:2,explanation:"__init__ est le constructeur, appelé automatiquement quand on crée un objet."},{question:"Quelle est la différence entre un attribut de classe et un attribut d'instance ?",options:["Aucune différence","L'attribut de classe est partagé par toutes les instances","L'attribut d'instance est constant","L'attribut de classe est privé"],correct:1,explanation:"Un attribut de classe est défini dans la classe et partagé par toutes les instances, contrairement à un attribut d'instance qui est propre à chaque objet."}]}]},{id:"l3-encapsulation",title:"3.2 Encapsulation et Propriétés",duration:"25 min",difficulty:"Intermédiaire",content:[{type:"text",content:"<p>L'<strong>encapsulation</strong> consiste à protéger les données internes d'un objet et à contrôler l'accès via des méthodes dédiées.</p>"},{type:"code",code:`class CompteBancaire:
    def __init__(self, titulaire, solde_initial=0):
        self.titulaire = titulaire
        self._solde = solde_initial     # Convention : _ = "privé"
        self.__historique = []          # __ = name mangling (vraiment privé)
    
    @property
    def solde(self):
        """Getter : accéder au solde en lecture seule."""
        return self._solde
    
    @solde.setter
    def solde(self, valeur):
        """Setter : contrôler la modification du solde."""
        if valeur < 0:
            raise ValueError("Le solde ne peut pas être négatif !")
        self._solde = valeur
    
    def deposer(self, montant):
        if montant <= 0:
            raise ValueError("Le montant doit être positif")
        self._solde += montant
        self.__historique.append(f"+{montant}€")
        print(f"💰 Dépôt de {montant}€. Solde : {self._solde}€")
    
    def retirer(self, montant):
        if montant > self._solde:
            print("❌ Fonds insuffisants !")
            return
        self._solde -= montant
        self.__historique.append(f"-{montant}€")
        print(f"💸 Retrait de {montant}€. Solde : {self._solde}€")

compte = CompteBancaire("Alice", 1000)
compte.deposer(500)        # 💰 Dépôt de 500€. Solde : 1500€
compte.retirer(200)        # 💸 Retrait de 200€. Solde : 1300€
print(compte.solde)        # 1300 (via le @property)

# compte.solde = -100  # ❌ ValueError !`,title:"Encapsulation & Properties"},{type:"info",variant:"info",title:"📝 Conventions de nommage",content:`_attribut : Convention pour indiquer "usage interne" (pas vraiment privé). __attribut : Name mangling — Python renomme en _Classe__attribut pour le rendre plus difficile d'accès.`},{type:"quiz",questions:[{question:"Que fait le décorateur @property ?",options:["Rend l'attribut constant","Crée un getter qui ressemble à un attribut","Supprime un attribut","Crée une méthode statique"],correct:1,explanation:"@property permet d'accéder à une méthode comme si c'était un attribut : obj.solde au lieu de obj.get_solde()."},{question:"Que signifie le préfixe _ devant un attribut en Python ?",options:["L'attribut est constant","Convention indiquant un usage interne","L'attribut est supprimé","L'attribut est public"],correct:1,explanation:"Le préfixe _ est une convention qui signale que l'attribut est destiné à un usage interne (privé par convention, pas techniquement)."},{question:"Que fait le name mangling avec double underscore __ ?",options:["Supprime l'attribut","Renomme en _Classe__attribut","Le rend public","Crée une copie"],correct:1,explanation:"Python renomme __attribut en _NomClasse__attribut pour éviter les conflits dans les sous-classes."}]}]},{id:"l3-heritage",title:"3.3 Héritage et Polymorphisme",duration:"30 min",difficulty:"Intermédiaire",content:[{type:"text",content:"<p>L'<strong>héritage</strong> permet de créer de nouvelles classes basées sur des classes existantes, en héritant de leurs attributs et méthodes. Le <strong>polymorphisme</strong> permet à des objets différents de répondre au même message de manière différente.</p>"},{type:"code",code:`# Classe parente (base)
class Animal:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age
    
    def parler(self):
        """Méthode générique — sera redéfinie."""
        return "..."
    
    def se_presenter(self):
        return f"Je suis {self.nom}, {self.age} ans"

# Classes enfants (héritent de Animal)
class Chien(Animal):
    def __init__(self, nom, age, race):
        super().__init__(nom, age)  # Appel au constructeur parent
        self.race = race
    
    def parler(self):  # Override (redéfinition)
        return "Ouaf ! 🐕"

class Chat(Animal):
    def parler(self):
        return "Miaou ! 🐱"

class Oiseau(Animal):
    def parler(self):
        return "Cui-cui ! 🐦"
    
    def voler(self):  # Méthode spécifique
        return f"{self.nom} s'envole !"

# Créer des objets
rex = Chien("Rex", 5, "Berger Allemand")
mimi = Chat("Mimi", 3)
piou = Oiseau("Piou", 1)

# Polymorphisme : même méthode, comportement différent
animaux = [rex, mimi, piou]
for animal in animaux:
    print(f"{animal.se_presenter()} → {animal.parler()}")

# Je suis Rex, 5 ans → Ouaf ! 🐕
# Je suis Mimi, 3 ans → Miaou ! 🐱
# Je suis Piou, 1 ans → Cui-cui ! 🐦

# isinstance et issubclass
print(isinstance(rex, Chien))    # True
print(isinstance(rex, Animal))   # True (hérite de Animal)
print(issubclass(Chien, Animal)) # True`,title:"Héritage et Polymorphisme"},{type:"heading",content:"Héritage multiple"},{type:"code",code:`# Héritage multiple (avec précaution !)
class Nageur:
    def nager(self):
        return "Je nage 🏊"

class Coureur:
    def courir(self):
        return "Je cours 🏃"

class Triathlete(Nageur, Coureur):
    def se_presenter(self):
        return f"{self.nager()} et {self.courir()}"

athlete = Triathlete()
print(athlete.se_presenter())  # Je nage 🏊 et Je cours 🏃

# MRO (Method Resolution Order) — ordre de recherche des méthodes
print(Triathlete.__mro__)`,title:"Héritage multiple"},{type:"quiz",questions:[{question:"Que fait super().__init__() ?",options:["Crée un nouvel objet","Appelle le constructeur de la classe parente","Supprime l'objet","Crée une copie"],correct:1,explanation:"super() permet d'appeler les méthodes de la classe parente, y compris __init__."},{question:"Qu'est-ce que le polymorphisme ?",options:["Avoir plusieurs classes","Des objets différents répondant au même message différemment","L'héritage multiple","La surcharge de méthodes"],correct:1,explanation:"Le polymorphisme permet à des objets de types différents de répondre au même appel de méthode avec leur propre comportement."},{question:"isinstance(chien, Animal) retourne True quand...",options:["chien est une instance de Animal ou d'une sous-classe","chien a un attribut nom","chien a été créé avec type()","Animal est une métaclasse"],correct:0,explanation:"isinstance vérifie si un objet est une instance de la classe spécifiée ou de l'une de ses sous-classes."}]}]},{id:"l3-dunder",title:"3.4 Méthodes Spéciales (Dunder)",duration:"25 min",difficulty:"Intermédiaire",content:[{type:"text",content:'<p>Les <strong>méthodes spéciales</strong> (ou "dunder methods", pour <em>double underscore</em>) permettent de personnaliser le comportement de vos objets avec les opérateurs Python.</p>'},{type:"code",code:`class Vecteur:
    """Vecteur 2D avec opérateurs personnalisés."""
    
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        """Représentation lisible (pour print)."""
        return f"Vecteur({self.x}, {self.y})"
    
    def __repr__(self):
        """Représentation technique (pour debug)."""
        return f"Vecteur(x={self.x}, y={self.y})"
    
    def __add__(self, autre):
        """Addition : v1 + v2"""
        return Vecteur(self.x + autre.x, self.y + autre.y)
    
    def __sub__(self, autre):
        """Soustraction : v1 - v2"""
        return Vecteur(self.x - autre.x, self.y - autre.y)
    
    def __mul__(self, scalaire):
        """Multiplication par un scalaire : v * 3"""
        return Vecteur(self.x * scalaire, self.y * scalaire)
    
    def __eq__(self, autre):
        """Égalité : v1 == v2"""
        return self.x == autre.x and self.y == autre.y
    
    def __len__(self):
        """Norme (arrondie) : len(v)"""
        return int((self.x**2 + self.y**2)**0.5)
    
    def __bool__(self):
        """Vecteur nul = False : bool(v)"""
        return self.x != 0 or self.y != 0

# Utilisation
v1 = Vecteur(3, 4)
v2 = Vecteur(1, 2)

print(v1)              # Vecteur(3, 4)
print(v1 + v2)         # Vecteur(4, 6)
print(v1 - v2)         # Vecteur(2, 2)
print(v1 * 3)          # Vecteur(9, 12)
print(v1 == v2)        # False
print(len(v1))         # 5 (norme du vecteur 3,4)
print(bool(Vecteur(0, 0)))  # False`,title:"Dunder Methods"},{type:"info",variant:"tip",title:"💡 Principales méthodes spéciales",content:"__init__ (constructeur), __str__ (print), __repr__ (debug), __add__ (+), __sub__ (-), __mul__ (*), __eq__ (==), __lt__ (<), __len__ (len), __contains__ (in), __getitem__ ([]), __iter__ (for), __call__ (())."},{type:"quiz",questions:[{question:"Quelle méthode est appelée par print(objet) ?",options:["__repr__","__str__","__print__","__display__"],correct:1,explanation:"__str__ est appelée par print() et str(). __repr__ est utilisée pour le debug et le REPL."},{question:"Pour pouvoir utiliser l'opérateur + entre deux objets, quelle méthode faut-il définir ?",options:["__plus__","__add__","__sum__","__concat__"],correct:1,explanation:"__add__ est la méthode spéciale qui surcharge l'opérateur + pour vos objets."},{question:"Quelle méthode permet d'utiliser len() sur votre objet ?",options:["__size__","__count__","__len__","__length__"],correct:2,explanation:"__len__ est appelée par la fonction built-in len(). Elle doit retourner un entier."}]}]},{id:"l3-dataclass",title:"3.5 Dataclasses & Exceptions Custom",duration:"20 min",difficulty:"Intermédiaire",content:[{type:"heading",content:"Dataclasses"},{type:"text",content:"<p>Les <strong>dataclasses</strong> (Python 3.7+) simplifient la création de classes qui stockent principalement des données.</p>"},{type:"code",code:`from dataclasses import dataclass, field

@dataclass
class Etudiant:
    nom: str
    age: int
    notes: list = field(default_factory=list)
    
    @property
    def moyenne(self):
        return sum(self.notes) / len(self.notes) if self.notes else 0

# Pas besoin d'écrire __init__, __str__, __repr__, __eq__ !
alice = Etudiant("Alice", 20, [15, 16, 18])
bob = Etudiant("Bob", 22, [12, 14])

print(alice)           # Etudiant(nom='Alice', age=20, notes=[15, 16, 18])
print(alice.moyenne)   # 16.333...
print(alice == bob)    # False (comparaison automatique)

# Dataclass immuable
@dataclass(frozen=True)
class Point:
    x: float
    y: float

p = Point(3.0, 4.0)
# p.x = 5.0  # ❌ FrozenInstanceError !`,title:"Dataclasses"},{type:"heading",content:"Exceptions personnalisées"},{type:"code",code:`# Créer ses propres exceptions
class ErreurValidation(Exception):
    """Exception pour les erreurs de validation."""
    def __init__(self, champ, message):
        self.champ = champ
        self.message = message
        super().__init__(f"{champ} : {message}")

class AgeInvalide(ErreurValidation):
    pass

class EmailInvalide(ErreurValidation):
    pass

# Utilisation
def valider_inscription(nom, age, email):
    if age < 0 or age > 150:
        raise AgeInvalide("age", f"{age} n'est pas un âge valide")
    if "@" not in email:
        raise EmailInvalide("email", f"'{email}' n'est pas un email valide")
    print(f"✅ Inscription de {nom} validée !")

try:
    valider_inscription("Alice", 25, "alice@mail.com")   # ✅
    valider_inscription("Bob", -5, "bob@mail.com")       # ❌
except AgeInvalide as e:
    print(f"❌ Erreur d'âge : {e}")
except EmailInvalide as e:
    print(f"❌ Erreur d'email : {e}")`,title:"Exceptions personnalisées"},{type:"heading",content:"🛠️ Projet : RPG Textuel (aperçu)"},{type:"code",code:`from dataclasses import dataclass, field
import random

@dataclass
class Arme:
    nom: str
    degats: int
    
    def __str__(self):
        return f"{self.nom} ({self.degats} dégâts)"

@dataclass
class Personnage:
    nom: str
    pv: int = 100
    attaque: int = 15
    defense: int = 5
    arme: Arme = None
    inventaire: list = field(default_factory=list)
    
    @property
    def est_vivant(self):
        return self.pv > 0
    
    def equiper(self, arme):
        self.arme = arme
        print(f"⚔️ {self.nom} équipe {arme}")
    
    def attaquer(self, cible):
        degats_base = self.attaque + (self.arme.degats if self.arme else 0)
        degats = max(0, degats_base - cible.defense)
        degats = random.randint(degats // 2, degats)
        cible.pv = max(0, cible.pv - degats)
        print(f"⚔️ {self.nom} attaque {cible.nom} → {degats} dégâts !")
        print(f"   {cible.nom} : {cible.pv} PV restants")
        return degats

# Combat
hero = Personnage("Héros", pv=120, attaque=18)
hero.equiper(Arme("Épée de feu", 12))

monstre = Personnage("Dragon", pv=80, attaque=20, defense=8)

print("\\n⚔️ COMBAT !")
tour = 1
while hero.est_vivant and monstre.est_vivant:
    print(f"\\n--- Tour {tour} ---")
    hero.attaquer(monstre)
    if monstre.est_vivant:
        monstre.attaquer(hero)
    tour += 1

gagnant = hero if hero.est_vivant else monstre
print(f"\\n🏆 {gagnant.nom} gagne avec {gagnant.pv} PV !")`,title:"🎮 RPG Textuel (aperçu du projet)"},{type:"quiz",questions:[{question:"Quel avantage principal offrent les dataclasses ?",options:["Plus rapides que les classes normales","Génèrent automatiquement __init__, __repr__, __eq__","Sont obligatoires en Python 3.12+","Empêchent les bugs"],correct:1,explanation:"Les dataclasses génèrent automatiquement __init__, __repr__, __eq__ et d'autres méthodes."},{question:"Comment rendre une dataclass immuable ?",options:["@dataclass(const=True)","@dataclass(frozen=True)","@dataclass(readonly=True)","Impossible"],correct:1,explanation:"frozen=True empêche la modification des attributs après la création. Toute tentative lève FrozenInstanceError."},{question:"Pour créer une exception personnalisée, on hérite de...",options:["object","Error","Exception","BaseClass"],correct:2,explanation:"Les exceptions personnalisées doivent hériter de Exception (ou d'une de ses sous-classes)."}]}]}]},hy={id:"level4",title:"Python Avancé (Fonctionnel & Décorateurs)",shortTitle:"Niv. 4 – Avancé",description:'Maîtriser les paradigmes avancés et écrire du code "Pythonique". Durée : 12 à 18 jours.',lessons:[{id:"l4-functional",title:"4.1 Programmation Fonctionnelle",duration:"25 min",difficulty:"Avancé",content:[{type:"text",content:"<p>Python supporte le paradigme <strong>fonctionnel</strong> avec des fonctions de première classe, les <strong>lambdas</strong>, et les fonctions d'ordre supérieur comme <code>map</code>, <code>filter</code> et <code>reduce</code>.</p>"},{type:"heading",content:"Fonctions Lambda"},{type:"code",code:`# Lambda : fonction anonyme en une ligne
# syntaxe : lambda arguments: expression

carre = lambda x: x ** 2
print(carre(5))  # 25

# Comparaison avec une fonction classique
def carre_v2(x):
    return x ** 2

# Lambda avec plusieurs arguments
addition = lambda a, b: a + b
print(addition(3, 7))  # 10

# Utilisation principale : tri personnalisé
etudiants = [
    {"nom": "Alice", "note": 16},
    {"nom": "Bob", "note": 12},
    {"nom": "Charlie", "note": 18},
]

# Trier par note décroissante
etudiants_tries = sorted(etudiants, key=lambda e: e["note"], reverse=True)
for e in etudiants_tries:
    print(f"{e['nom']}: {e['note']}")
# Charlie: 18, Alice: 16, Bob: 12`,title:"Lambda"},{type:"heading",content:"map, filter, reduce"},{type:"code",code:`from functools import reduce

# map() – appliquer une fonction à chaque élément
nombres = [1, 2, 3, 4, 5]
doubles = list(map(lambda x: x * 2, nombres))
print(doubles)  # [2, 4, 6, 8, 10]

# Équivalent en compréhension (souvent préféré)
doubles_v2 = [x * 2 for x in nombres]

# filter() – garder les éléments qui satisfont une condition
pairs = list(filter(lambda x: x % 2 == 0, nombres))
print(pairs)  # [2, 4]

# Équivalent en compréhension
pairs_v2 = [x for x in nombres if x % 2 == 0]

# reduce() – réduire une liste à une seule valeur
somme = reduce(lambda a, b: a + b, nombres)
print(somme)  # 15 (1+2+3+4+5)

produit = reduce(lambda a, b: a * b, nombres)
print(produit)  # 120 (1*2*3*4*5)

# Enchaîner les opérations
# Prendre les nombres impairs, les doubler, et les sommer
resultat = reduce(
    lambda a, b: a + b,
    map(lambda x: x * 2,
        filter(lambda x: x % 2 != 0, range(1, 11)))
)
print(resultat)  # 50`,title:"map, filter, reduce"},{type:"info",variant:"tip",title:"💡 Compréhension vs map/filter",content:"En Python, les compréhensions sont généralement préférées à map/filter car elles sont plus lisibles. Utilisez map/filter quand vous avez déjà une fonction nommée à appliquer."},{type:"quiz",questions:[{question:"Que retourne list(filter(lambda x: x > 3, [1,2,3,4,5])) ?",options:["[1, 2, 3]","[4, 5]","[True, True]","[3, 4, 5]"],correct:1,explanation:"filter garde uniquement les éléments pour lesquels la fonction retourne True. Seuls 4 et 5 sont > 3."},{question:"Avec reduce(lambda a,b: a+b, [1,2,3]), quelle est la valeur finale ?",options:["[1, 2, 3]","3","6","Erreur"],correct:2,explanation:"reduce calcule : (1+2)+3 = 6."},{question:"Quelle est la différence principale entre map() et une list comprehension ?",options:["map est plus rapide","Aucune, les résultats sont identiques","map retourne un itérateur (lazy), la compréhension retourne une liste","map ne peut prendre qu'un argument"],correct:2,explanation:"map() retourne un itérateur (évaluation paresseuse), tandis qu'une comprehension crée immédiatement une liste en mémoire."}]}]},{id:"l4-generators",title:"4.2 Itérateurs et Générateurs",duration:"30 min",difficulty:"Avancé",content:[{type:"text",content:"<p>Les <strong>générateurs</strong> sont un moyen élégant et économe en mémoire de produire des séquences de valeurs à la demande, grâce au mot-clé <code>yield</code>.</p>"},{type:"heading",content:"Le protocole itérateur"},{type:"code",code:`# Créer un itérateur personnalisé
class Compteur:
    """Itérateur qui compte de start à stop."""
    
    def __init__(self, start, stop):
        self.current = start
        self.stop = stop
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current >= self.stop:
            raise StopIteration
        valeur = self.current
        self.current += 1
        return valeur

# Utilisation
for n in Compteur(1, 5):
    print(n)  # 1, 2, 3, 4`,title:"Protocole itérateur"},{type:"heading",content:"Générateurs avec yield"},{type:"code",code:`# Un générateur est une fonction qui utilise yield
def compteur(start, stop):
    """Générateur : beaucoup plus simple qu'un itérateur !"""
    current = start
    while current < stop:
        yield current  # "Pause" et retourne la valeur
        current += 1   # Reprend ici au prochain appel

for n in compteur(1, 5):
    print(n)  # 1, 2, 3, 4

# Générateur de Fibonacci (séquence infinie !)
def fibonacci():
    a, b = 0, 1
    while True:  # Infini, mais on ne calcule que ce qu'on consomme
        yield a
        a, b = b, a + b

# Prendre les 10 premiers nombres de Fibonacci
fib = fibonacci()
for _ in range(10):
    print(next(fib), end=" ")
# 0 1 1 2 3 5 8 13 21 34

# AVANTAGE MÉMOIRE : traiter un fichier gigantesque ligne par ligne
def lire_gros_fichier(chemin):
    """Lit un fichier ligne par ligne sans tout charger en mémoire."""
    with open(chemin, "r") as f:
        for ligne in f:
            yield ligne.strip()

# Expression génératrice (comme les compréhensions, mais lazy)
carres = (x**2 for x in range(1_000_000))  # Pas stocké en mémoire !
print(next(carres))  # 0
print(next(carres))  # 1
print(sum(x**2 for x in range(100)))  # Somme des carrés`,title:"Générateurs"},{type:"info",variant:"info",title:"📝 Générateur vs Liste",content:"Une liste stocke TOUS les éléments en mémoire. Un générateur les produit UN PAR UN à la demande. Pour 1 million d'éléments, la liste utilise ~8 Mo, le générateur ~100 octets !"},{type:"quiz",questions:[{question:"Quelle est la différence principale entre yield et return ?",options:["yield est plus rapide","yield arrête la fonction, return la met en pause","yield met la fonction en pause, return l'arrête","Aucune différence"],correct:2,explanation:"yield met la fonction en pause et retourne une valeur. Au prochain next(), elle reprend où elle s'était arrêtée."},{question:"Quelle est la différence entre (x**2 for x in range(10)) et [x**2 for x in range(10)] ?",options:["Aucune","Le premier est un générateur (lazy), le second une liste","Le premier est plus lent","Le second utilise yield"],correct:1,explanation:"Les parenthèses créent une expression génératrice (lazy, économe en mémoire), les crochets créent une liste complète en mémoire."},{question:"Quel est l'avantage principal des générateurs ?",options:["Plus rapides que les listes","Économie de mémoire (les valeurs sont produites à la demande)","Peuvent stocker plus de données","Fonctionnent en parallèle"],correct:1,explanation:"Les générateurs ne stockent pas tous les éléments en mémoire : ils les produisent un par un à la demande."}]}]},{id:"l4-decorators",title:"4.3 Décorateurs",duration:"30 min",difficulty:"Avancé",content:[{type:"text",content:"<p>Les <strong>décorateurs</strong> sont un moyen élégant de modifier le comportement d'une fonction <em>sans toucher à son code</em>. C'est l'un des patterns les plus puissants de Python.</p>"},{type:"code",code:`import time
from functools import wraps

# Décorateur simple : mesurer le temps d'exécution
def timer(func):
    @wraps(func)  # Préserve le nom et la doc de la fonction
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        elapsed = time.time() - start
        print(f"⏱ {func.__name__} : {elapsed:.4f}s")
        return result
    return wrapper

@timer
def calcul_lourd():
    """Effectue un calcul lourd."""
    return sum(i**2 for i in range(1_000_000))

resultat = calcul_lourd()  # ⏱ calcul_lourd : 0.1234s

# Décorateur avec arguments
def retry(max_tentatives=3, delai=1):
    def decorateur(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for tentative in range(1, max_tentatives + 1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    print(f"❌ Tentative {tentative}/{max_tentatives} : {e}")
                    if tentative < max_tentatives:
                        time.sleep(delai)
            raise Exception(f"Échec après {max_tentatives} tentatives")
        return wrapper
    return decorateur

@retry(max_tentatives=3, delai=0.5)
def operation_risquee():
    import random
    if random.random() < 0.7:
        raise ConnectionError("Serveur indisponible")
    return "Succès !"

# Décorateur de cache (mémoïzation)
def cache(func):
    memo = {}
    @wraps(func)
    def wrapper(*args):
        if args not in memo:
            memo[args] = func(*args)
        return memo[args]
    return wrapper

@cache
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(100))  # Instantané grâce au cache !`,title:"Décorateurs"},{type:"info",variant:"tip",title:"💡 functools.lru_cache",content:"Python inclut un décorateur de cache intégré : @functools.lru_cache(maxsize=128). Utilisez-le plutôt que de créer le vôtre en production !"},{type:"quiz",questions:[{question:"Un décorateur est essentiellement...",options:["Un commentaire spécial","Une fonction qui prend une fonction et retourne une fonction modifiée","Un type de variable","Un module Python"],correct:1,explanation:"Un décorateur est une fonction qui enveloppe une autre fonction pour modifier son comportement."},{question:"À quoi sert @wraps(func) de functools ?",options:["Accélérer la fonction","Préserver le nom et la docstring de la fonction décorée","Créer un cache","Appeler la fonction automatiquement"],correct:1,explanation:"@wraps préserve les métadonnées (__name__, __doc__) de la fonction originale, ce qui est essentiel pour le debug."},{question:"Comment créer un décorateur avec arguments (ex: @retry(n=3)) ?",options:["Définir une fonction à un niveau","Définir une fonction à trois niveaux imbriqués","Utiliser une classe","C'est impossible"],correct:1,explanation:"Un décorateur avec arguments nécessite 3 niveaux : la fonction externe (reçoit les args), le décorateur (reçoit func), et le wrapper (reçoit *args/**kwargs)."}]}]},{id:"l4-context",title:"4.4 Context Managers",duration:"20 min",difficulty:"Avancé",content:[{type:"text",content:"<p>Les <strong>context managers</strong> garantissent que les ressources (fichiers, connexions, locks) sont correctement acquises et libérées, même en cas d'erreur.</p>"},{type:"code",code:`# Context manager avec une classe
class GestionFichier:
    def __init__(self, chemin, mode):
        self.chemin = chemin
        self.mode = mode
        self.fichier = None
    
    def __enter__(self):
        """Appelé au début du bloc with."""
        self.fichier = open(self.chemin, self.mode)
        print(f"📂 Fichier '{self.chemin}' ouvert")
        return self.fichier
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        """Appelé à la fin du bloc with (même si erreur)."""
        self.fichier.close()
        print(f"📁 Fichier '{self.chemin}' fermé")
        return False  # Ne pas supprimer les exceptions

with GestionFichier("test.txt", "w") as f:
    f.write("Hello !")
# 📂 Fichier 'test.txt' ouvert
# 📁 Fichier 'test.txt' fermé

# Context manager avec contextlib (PLUS SIMPLE)
from contextlib import contextmanager
import time

@contextmanager
def chronometre(label):
    """Mesure le temps d'exécution d'un bloc de code."""
    start = time.time()
    print(f"⏱ {label} : début...")
    try:
        yield  # Le code du bloc with s'exécute ici
    finally:
        elapsed = time.time() - start
        print(f"⏱ {label} : {elapsed:.4f}s")

with chronometre("Calcul"):
    sum(i**2 for i in range(1_000_000))

# Context manager pour gérer une connexion DB (exemple)
@contextmanager
def connexion_db(url):
    print(f"🔗 Connexion à {url}")
    conn = {"url": url, "active": True}  # Simule une connexion
    try:
        yield conn
    finally:
        conn["active"] = False
        print("🔌 Connexion fermée")`,title:"Context Managers"},{type:"quiz",questions:[{question:"Quelles méthodes définissent un context manager ?",options:["__open__ et __close__","__enter__ et __exit__","__start__ et __stop__","__with__ et __end__"],correct:1,explanation:"__enter__ est appelé au début du bloc with, __exit__ à la fin."},{question:"Que se passe-t-il si une exception est levée dans un bloc with ?",options:["Le programme plante","__exit__ est appelé quand même (nettoyage garanti)","L'exception est ignorée","Le with est relance"],correct:1,explanation:"__exit__ est TOUJOURS appelé, même en cas d'exception, garantissant la libération des ressources."},{question:"Quelle alternative simplifiée à une classe pour créer un context manager ?",options:["@contextlib.contextmanager avec yield","@with_manager","contextlib.open()","with.create()"],correct:0,explanation:"@contextmanager de contextlib permet de créer un context manager avec une simple fonction génératrice utilisant yield."}]}]},{id:"l4-testing",title:"4.5 Tests Unitaires avec pytest",duration:"25 min",difficulty:"Avancé",content:[{type:"text",content:"<p>Les <strong>tests unitaires</strong> vérifient que chaque partie de votre code fonctionne correctement. <code>pytest</code> est le framework de test le plus populaire en Python.</p>"},{type:"code",code:`# Fichier : calculatrice.py
def additionner(a, b):
    return a + b

def diviser(a, b):
    if b == 0:
        raise ValueError("Division par zéro impossible")
    return a / b

def est_pair(n):
    return n % 2 == 0`,title:"calculatrice.py"},{type:"code",code:`# Fichier : test_calculatrice.py
import pytest
from calculatrice import additionner, diviser, est_pair

# Tests simples
def test_additionner():
    assert additionner(2, 3) == 5
    assert additionner(-1, 1) == 0
    assert additionner(0, 0) == 0

def test_diviser():
    assert diviser(10, 2) == 5.0
    assert diviser(7, 2) == 3.5

# Tester les exceptions
def test_diviser_par_zero():
    with pytest.raises(ValueError, match="Division par zéro"):
        diviser(10, 0)

# Tester avec des paramètres multiples
@pytest.mark.parametrize("n, attendu", [
    (2, True), (3, False), (0, True), (-4, True), (7, False)
])
def test_est_pair(n, attendu):
    assert est_pair(n) == attendu

# Fixtures : configuration réutilisable
@pytest.fixture
def liste_nombres():
    return [1, 2, 3, 4, 5]

def test_somme(liste_nombres):
    assert sum(liste_nombres) == 15

def test_longueur(liste_nombres):
    assert len(liste_nombres) == 5`,title:"test_calculatrice.py"},{type:"code",code:`# Exécuter les tests
# pytest                    # Tous les tests
# pytest -v                 # Mode verbose
# pytest test_calculatrice.py  # Un fichier spécifique
# pytest -k "test_add"      # Tests contenant "test_add"
# pytest --tb=short         # Traceback court`,title:"Commandes pytest"},{type:"info",variant:"tip",title:"💡 Bonnes pratiques de test",content:"1. Nommez vos fichiers test_xxx.py et fonctions test_xxx. 2. Un test = une assertion principale. 3. Testez les cas normaux ET les cas d'erreur. 4. Utilisez des fixtures pour éviter la répétition."},{type:"quiz",questions:[{question:"Quel mot-clé vérifie qu'une exception est levée dans pytest ?",options:["pytest.expect()","pytest.raises()","pytest.throws()","pytest.error()"],correct:1,explanation:"pytest.raises(ExceptionType) vérifie qu'une exception spécifique est levée."},{question:"Que fait @pytest.mark.parametrize ?",options:["Parallélise les tests","Exécute le même test avec différentes valeurs","Ignore le test","Génère un rapport"],correct:1,explanation:"parametrize permet de lancer le même test avec plusieurs jeux de données, évitant la duplication de code."},{question:"Qu'est-ce qu'une fixture dans pytest ?",options:["Un type de test","Une configuration réutilisable injectée dans les tests","Un fichier de configuration","Un type d'assertion"],correct:1,explanation:"Les fixtures préparent des données ou des états réutilisables et sont injectées automatiquement dans les fonctions de test."}]},{type:"heading",content:"🛠️ Projet Validant : Scraper Web Modulaire"},{type:"text",content:"<p>Ce projet utilise <strong>toutes</strong> les notions du Niveau 4 : générateurs, décorateurs, context managers et tests pytest.</p>"},{type:"code",code:`import time
import json
from functools import wraps
from contextlib import contextmanager

# Décorateur : retry avec délai
def retry(max_tentatives=3, delai=0.5):
    def decorateur(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for tentative in range(1, max_tentatives + 1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    print(f"❌ Tentative {tentative}/{max_tentatives} : {e}")
                    if tentative < max_tentatives:
                        time.sleep(delai)
            raise Exception(f"Échec après {max_tentatives} tentatives")
        return wrapper
    return decorateur

# Décorateur : cache simple
def cache(func):
    memo = {}
    @wraps(func)
    def wrapper(*args):
        if args not in memo:
            memo[args] = func(*args)
        return memo[args]
    return wrapper

# Context Manager : sauvegarde automatique
@contextmanager
def sauvegarde_json(fichier):
    """Charge et sauvegarde automatiquement un fichier JSON."""
    try:
        with open(fichier, "r") as f:
            data = json.load(f)
    except FileNotFoundError:
        data = []
    
    try:
        yield data  # Le code du with manipule la liste
    finally:
        with open(fichier, "w") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"💾 {len(data)} éléments sauvegardés dans {fichier}")

# Générateur : simuler le scraping page par page
def scraper_pages(urls):
    """Générateur qui 'scrappe' des pages une par une."""
    for url in urls:
        print(f"🔍 Scraping : {url}")
        # Simule l'extraction de données
        yield {
            "url": url,
            "titre": f"Page {url.split('/')[-1]}",
            "contenu": f"Contenu extrait de {url}",
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
        }

# Programme principal
def main():
    urls = [
        "https://example.com/page/1",
        "https://example.com/page/2",
        "https://example.com/page/3",
    ]
    
    with sauvegarde_json("resultats.json") as resultats:
        for page in scraper_pages(urls):
            resultats.append(page)
            print(f"  ✅ {page['titre']} ajouté")

if __name__ == "__main__":
    main()`,title:"🛠️ scraper_web.py – Projet complet Niveau 4"},{type:"info",variant:"tip",title:"🎓 Ce projet utilise",content:"Décorateurs (retry, cache, @wraps), Générateurs (yield page par page), Context Managers (@contextmanager + yield), Modules JSON. Bravo, vous maîtrisez le Python avancé !"}]}]},vy={id:"level5",title:"Python Expert (Internals & Optimisation)",shortTitle:"Niv. 5 – Expert",description:"Comprendre ce qui se passe sous le capot pour optimiser et débugger expertement. Durée : 18 à 25 jours.",lessons:[{id:"l5-memory",title:"5.1 Modèle Mémoire Python",duration:"30 min",difficulty:"Expert",content:[{type:"text",content:"<p>Pour devenir expert, vous devez comprendre comment Python gère la <strong>mémoire</strong>. En Python, tout est un <em>objet</em>, et les variables sont des <em>références</em> (pointeurs) vers ces objets.</p>"},{type:"heading",content:"Références et identité"},{type:"code",code:`# En Python, les variables sont des RÉFÉRENCES
a = [1, 2, 3]
b = a           # b pointe vers LE MÊME objet que a

b.append(4)
print(a)  # [1, 2, 3, 4] ← a est aussi modifié !

# id() retourne l'adresse mémoire de l'objet
print(id(a))        # même adresse
print(id(b))        # même adresse !
print(a is b)       # True (même objet)

# Copie superficielle vs profonde
import copy

original = [[1, 2], [3, 4]]
copie_sup = copy.copy(original)       # Copie superficielle
copie_prof = copy.deepcopy(original)  # Copie profonde

original[0].append(999)
print(copie_sup)    # [[1, 2, 999], [3, 4]] ← listes internes partagées !
print(copie_prof)   # [[1, 2], [3, 4]] ← totalement indépendant`,title:"Références"},{type:"heading",content:"Mutabilité et immutabilité"},{type:"code",code:`# IMMUABLES : int, float, str, tuple, frozenset
a = "hello"
b = a
a = a + " world"  # Crée un NOUVEL objet
print(b)           # "hello" ← pas modifié

# Interning (optimisation Python)
x = 256
y = 256
print(x is y)  # True ! (Python réutilise les petits entiers -5 à 256)

x = 257
y = 257
print(x is y)  # False (potentiellement, selon l'implémentation)

# MUTABLES : list, dict, set
liste1 = [1, 2, 3]
liste2 = liste1
liste1 += [4]  # Modifie EN PLACE pour les mutables
print(liste2)  # [1, 2, 3, 4]

# Piège classique : argument par défaut mutable
def ajouter(element, liste=[]):  # ⚠️ DANGER !
    liste.append(element)
    return liste

print(ajouter(1))  # [1]
print(ajouter(2))  # [1, 2] ← la même liste est réutilisée !

# Solution : utiliser None
def ajouter_v2(element, liste=None):
    if liste is None:
        liste = []
    liste.append(element)
    return liste`,title:"Mutabilité"},{type:"heading",content:"Garbage Collector"},{type:"code",code:`import sys
import gc

# Compteur de références
a = [1, 2, 3]
print(sys.getrefcount(a))  # 2 (a + paramètre de getrefcount)

b = a
print(sys.getrefcount(a))  # 3

del b
print(sys.getrefcount(a))  # 2

# Le garbage collector gère les références circulaires
class Noeud:
    def __init__(self):
        self.suivant = None

a = Noeud()
b = Noeud()
a.suivant = b
b.suivant = a  # Référence circulaire !

# Le GC collecte quand les objets ne sont plus accessibles
del a, b  # Le GC détectera le cycle

# Forcer la collecte
gc.collect()
print(gc.get_stats())  # Statistiques du GC`,title:"Garbage Collector"},{type:"quiz",questions:[{question:"Que fait a is b en Python ?",options:["Compare les valeurs","Compare les adresses mémoire (identité)","Compare les types","Vérifie l'héritage"],correct:1,explanation:'"is" vérifie si deux variables pointent vers le MÊME objet en mémoire, contrairement à == qui compare les valeurs.'},{question:"Pourquoi une liste comme argument par défaut est-elle dangereuse ?",options:["C'est interdit en Python","La liste est partagée entre tous les appels","Ça cause une erreur","La liste est copiée à chaque appel"],correct:1,explanation:"L'objet mutable par défaut est créé UNE SEULE FOIS et partagé entre tous les appels. Utilisez None à la place."},{question:"Quelle est la différence entre copy.copy() et copy.deepcopy() ?",options:["Aucune","copy copie le 1er niveau, deepcopy copie récursivement","deepcopy est plus lent mais identique","copy ne fonctionne qu'avec les listes"],correct:1,explanation:"copy.copy() ne copie que le premier niveau (les références internes sont partagées). deepcopy() copie tout récursivement."}]}]},{id:"l5-meta",title:"5.2 Métaprogrammation",duration:"25 min",difficulty:"Expert",content:[{type:"text",content:"<p>La <strong>métaprogrammation</strong> consiste à écrire du code qui manipule du code. En Python, les classes sont elles-mêmes des objets, créés par des <em>métaclasses</em>.</p>"},{type:"code",code:`# En Python, TOUT est un objet, y compris les classes
class MaClasse:
    pass

# type() est la métaclasse par défaut
print(type(MaClasse))  # <class 'type'>
print(type(42))        # <class 'int'>
print(type(type))      # <class 'type'> (type est sa propre métaclasse !)

# Créer une classe dynamiquement avec type()
# type(nom, bases, attributs)
Animal = type("Animal", (), {
    "espece": "inconnu",
    "parler": lambda self: f"Je suis un {self.espece}"
})

a = Animal()
a.espece = "chat"
print(a.parler())  # Je suis un chat

# getattr / setattr / hasattr
class Config:
    debug = False
    version = "1.0"

config = Config()
print(getattr(config, "version"))          # "1.0"
print(getattr(config, "missing", "N/A"))   # "N/A" (valeur par défaut)
setattr(config, "debug", True)
print(hasattr(config, "debug"))            # True

# Accéder aux attributs dynamiquement
for attr in ["debug", "version"]:
    print(f"{attr} = {getattr(config, attr)}")`,title:"Métaprogrammation"},{type:"heading",content:"Introduction aux métaclasses"},{type:"code",code:`# Métaclasse : contrôler la création des classes
class ValidatedMeta(type):
    """Métaclasse qui vérifie que les classes ont une docstring."""
    def __new__(mcs, name, bases, namespace):
        if not namespace.get("__doc__"):
            raise TypeError(f"La classe {name} doit avoir une docstring !")
        return super().__new__(mcs, name, bases, namespace)

class MonModele(metaclass=ValidatedMeta):
    """Ce modèle est documenté."""
    pass  # ✅ OK

# class SansDoc(metaclass=ValidatedMeta):
#     pass  # ❌ TypeError !

# Exemple pratique : Singleton
class SingletonMeta(type):
    _instances = {}
    
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Database(metaclass=SingletonMeta):
    """Connexion unique à la base de données."""
    def __init__(self):
        self.connection = "Connected"

db1 = Database()
db2 = Database()
print(db1 is db2)  # True (même instance !)`,title:"Métaclasses"},{type:"info",variant:"warning",title:"⚠️ Quand utiliser les métaclasses ?",content:`Les métaclasses sont un outil très avancé. La plupart du temps, les décorateurs de classe ou les __init_subclass__ suffisent. "Si vous vous demandez si vous avez besoin de métaclasses, vous n'en avez probablement pas besoin." – Tim Peters`},{type:"quiz",questions:[{question:"Quelle est la métaclasse par défaut en Python ?",options:["object","type","meta","class"],correct:1,explanation:"type est la métaclasse par défaut. Toutes les classes sont des instances de type."},{question:'Que fait getattr(obj, "nom", "inconnu") ?',options:["Crée un attribut",`Retourne la valeur de obj.nom ou "inconnu" si l'attribut n'existe pas`,"Supprime l'attribut","Vérifie le type"],correct:1,explanation:"getattr accède dynamiquement aux attributs et permet de spécifier une valeur par défaut."},{question:"Le pattern Singleton avec métaclasse garantit...",options:["Que la classe est rapide","Qu'une seule instance existe","Que la classe est thread-safe","Qu'on ne peut pas hériter"],correct:1,explanation:"Un Singleton s'assure qu'il n'y a qu'une seule instance de la classe dans tout le programme."}]}]},{id:"l5-async",title:"5.3 Concurrence : Threading, Multiprocessing, Asyncio",duration:"35 min",difficulty:"Expert",content:[{type:"text",content:"<p>Python offre trois approches pour la <strong>concurrence</strong> : le threading (I/O), le multiprocessing (CPU) et asyncio (I/O asynchrone).</p>"},{type:"heading",content:"Threading (I/O-bound)"},{type:"code",code:`import threading
import time

def telecharger(url, duree):
    """Simule un téléchargement."""
    print(f"📥 Début : {url}")
    time.sleep(duree)  # Simule l'attente I/O
    print(f"✅ Fin : {url}")

# Sans threading (séquentiel)
start = time.time()
telecharger("page1.html", 2)
telecharger("page2.html", 2)
print(f"Séquentiel : {time.time() - start:.1f}s")  # ~4s

# Avec threading (concurrent)
start = time.time()
t1 = threading.Thread(target=telecharger, args=("page1.html", 2))
t2 = threading.Thread(target=telecharger, args=("page2.html", 2))
t1.start()
t2.start()
t1.join()  # Attendre la fin
t2.join()
print(f"Threading : {time.time() - start:.1f}s")  # ~2s !

# ThreadPoolExecutor (plus pratique)
from concurrent.futures import ThreadPoolExecutor

urls = ["page1", "page2", "page3", "page4"]
with ThreadPoolExecutor(max_workers=4) as pool:
    pool.map(lambda u: telecharger(u, 1), urls)`,title:"Threading"},{type:"heading",content:"Le GIL (Global Interpreter Lock)"},{type:"text",content:`<p>Le <strong>GIL</strong> est un verrou qui empêche l'exécution simultanée de code Python par plusieurs threads. Conséquences :</p>
<ul>
<li><strong>I/O-bound</strong> (réseau, fichiers) → Threading fonctionne bien (le GIL est relâché pendant l'I/O)</li>
<li><strong>CPU-bound</strong> (calculs) → Threading est inutile. Utilisez <strong>multiprocessing</strong></li>
</ul>`},{type:"heading",content:"Asyncio (async/await)"},{type:"code",code:`import asyncio

# Fonctions asynchrones avec async/await
async def telecharger_async(url, duree):
    print(f"📥 Début : {url}")
    await asyncio.sleep(duree)  # await = libère le contrôle
    print(f"✅ Fin : {url}")
    return f"Données de {url}"

async def main():
    # Exécuter plusieurs tâches en parallèle
    resultats = await asyncio.gather(
        telecharger_async("api/users", 2),
        telecharger_async("api/posts", 1),
        telecharger_async("api/comments", 3),
    )
    print(f"Résultats : {resultats}")

# Lancer
asyncio.run(main())  # Total ~3s (pas 6s !)

# Créer et gérer des tâches
async def main_v2():
    # Créer des tâches sans les attendre immédiatement
    task1 = asyncio.create_task(telecharger_async("url1", 2))
    task2 = asyncio.create_task(telecharger_async("url2", 2))
    
    # Faire autre chose pendant ce temps...
    print("Préparation en cours...")
    
    # Puis attendre les résultats
    r1 = await task1
    r2 = await task2`,title:"Asyncio"},{type:"info",variant:"info",title:"📝 Quand utiliser quoi ?",content:"Threading : téléchargements, requêtes réseau, I/O fichiers. Multiprocessing : calculs mathématiques, traitement d'images, ML. Asyncio : serveurs web, APIs, beaucoup de connexions simultanées."},{type:"quiz",questions:[{question:"Le GIL empêche le vrai parallélisme pour...",options:["Les tâches I/O","Les tâches CPU-bound","Asyncio","Toutes les tâches"],correct:1,explanation:"Le GIL empêche l'exécution parallèle de code Python pur, mais est relâché pendant les opérations I/O."},{question:'Que fait "await" dans asyncio ?',options:["Arrête le programme","Met la coroutine en pause et libère l'event loop","Crée un nouveau thread","Bloque tout"],correct:1,explanation:"await met la coroutine en pause, permettant à d'autres tâches de s'exécuter pendant l'attente."},{question:"Pour des calculs CPU intensifs, quelle approche utiliser ?",options:["threading","asyncio","multiprocessing","concurrent.futures avec threads"],correct:2,explanation:"multiprocessing crée de vrais processus parallèles, contournant le GIL pour le calcul CPU."}]}]},{id:"l5-typing",title:"5.4 Typage Statique et Type Hints",duration:"20 min",difficulty:"Expert",content:[{type:"text",content:"<p>Les <strong>type hints</strong> ajoutent des annotations de types à votre code Python. Ils améliorent la lisibilité, l'autocomplétion IDE, et permettent la vérification avec <code>mypy</code>.</p>"},{type:"code",code:`from typing import (
    List, Dict, Tuple, Optional, Union,
    Callable, Any, TypeVar, Generic, Protocol
)

# Types de base
def saluer(nom: str) -> str:
    return f"Bonjour {nom}"

def additionner(a: int, b: int) -> int:
    return a + b

# Collections
def moyennes(notes: list[float]) -> float:
    return sum(notes) / len(notes)

# Optional = peut être None
def trouver(nom: str) -> Optional[dict]:
    """Retourne un utilisateur ou None."""
    users = {"alice": {"age": 25}}
    return users.get(nom)

# Union = plusieurs types possibles
def traiter(valeur: int | str) -> str:
    return str(valeur)

# Callable = type pour les fonctions
def appliquer(func: Callable[[int], int], valeur: int) -> int:
    return func(valeur)

resultat = appliquer(lambda x: x * 2, 5)  # 10

# TypeVar pour les génériques
T = TypeVar("T")

def premier(items: list[T]) -> T:
    return items[0]

# Protocol (structural typing)
class Parleur(Protocol):
    def parler(self) -> str: ...

class Chat:
    def parler(self) -> str:
        return "Miaou"

def faire_parler(animal: Parleur) -> None:
    print(animal.parler())

faire_parler(Chat())  # ✅ Chat satisfait le Protocol`,title:"Type Hints"},{type:"code",code:`# Vérification avec mypy
# Installation : pip install mypy
# Utilisation : mypy mon_fichier.py

# mypy détecte les erreurs de type SANS exécuter le code
def double(x: int) -> int:
    return x * 2

# double("hello")  # mypy ERROR: Argument 1 has incompatible type "str"`,title:"mypy"},{type:"quiz",questions:[{question:"Les type hints en Python sont...",options:["Obligatoires","Vérifiés à l'exécution","Optionnels et vérifiés par des outils comme mypy","Activés avec un module"],correct:2,explanation:"Les type hints sont optionnels et ignorés à l'exécution. Des outils comme mypy les vérifient statiquement."},{question:"Que signifie Optional[str] ?",options:["Le paramètre est obligatoire","La valeur peut être un str ou None","C'est une liste de strings","C'est une valeur par défaut"],correct:1,explanation:"Optional[str] est équivalent à str | None. La valeur peut être un string ou None."},{question:"Quelle est la différence entre Protocol et ABC ?",options:["Aucune","Protocol vérifie la structure (duck typing), ABC utilise l'héritage","ABC est plus récent","Protocol est plus strict"],correct:1,explanation:"Protocol utilise le structural typing (si ça a les bonnes méthodes, c'est OK), ABC exige l'héritage explicite."}]}]},{id:"l5-perf",title:"5.5 Performance et Profiling",duration:"25 min",difficulty:"Expert",content:[{type:"text",content:"<p>Optimiser un programme commence par le <strong>mesurer</strong>. Python offre plusieurs outils de profiling pour identifier les goulots d'étranglement.</p>"},{type:"code",code:`import time
import cProfile
from functools import lru_cache

# 1. Mesure simple avec time
start = time.perf_counter()
result = sum(i**2 for i in range(1_000_000))
elapsed = time.perf_counter() - start
print(f"Durée : {elapsed:.4f}s")

# 2. timeit pour des micro-benchmarks
import timeit

# Comparer deux approches
t1 = timeit.timeit('"-".join(str(n) for n in range(100))', number=10000)
t2 = timeit.timeit('"-".join(map(str, range(100)))', number=10000)
print(f"Compréhension : {t1:.4f}s")
print(f"map()          : {t2:.4f}s")

# 3. cProfile pour profiler une fonction
def fibonacci_lent(n):
    if n < 2:
        return n
    return fibonacci_lent(n-1) + fibonacci_lent(n-2)

# cProfile.run('fibonacci_lent(30)')

# Optimiser avec le cache
@lru_cache(maxsize=None)
def fibonacci_rapide(n):
    if n < 2:
        return n
    return fibonacci_rapide(n-1) + fibonacci_rapide(n-2)

# Sans cache : fibonacci(35) prend ~4 secondes
# Avec cache : fibonacci(35) est instantané !`,title:"Profiling & Optimisation"},{type:"heading",content:"Complexité algorithmique"},{type:"code",code:`# Comprendre la complexité est ESSENTIEL pour l'optimisation

# O(1) – Constant : accès dict/set
d = {i: i**2 for i in range(1_000_000)}
value = d[999999]  # Instantané !

# O(n) – Linéaire : parcourir une liste
def chercher_lineaire(liste, cible):
    for item in liste:
        if item == cible:
            return True
    return False

# O(log n) – Logarithmique : recherche binaire
def recherche_binaire(liste_triee, cible):
    gauche, droite = 0, len(liste_triee) - 1
    while gauche <= droite:
        milieu = (gauche + droite) // 2
        if liste_triee[milieu] == cible:
            return milieu
        elif liste_triee[milieu] < cible:
            gauche = milieu + 1
        else:
            droite = milieu - 1
    return -1

# O(n²) – Quadratique : à ÉVITER sur de grandes données
def doublons_lent(liste):  # O(n²)
    for i in range(len(liste)):
        for j in range(i+1, len(liste)):
            if liste[i] == liste[j]:
                return True
    return False

def doublons_rapide(liste):  # O(n) avec un set !
    return len(liste) != len(set(liste))`,title:"Complexité algorithmique"},{type:"info",variant:"tip",title:"💡 Règles d'optimisation",content:`1. "Premature optimization is the root of all evil" – Donald Knuth. 2. MESUREZ avant d'optimiser. 3. Utilisez les bonnes structures (dict/set pour les recherches). 4. Le cache (@lru_cache) résout beaucoup de problèmes.`},{type:"quiz",questions:[{question:"Quelle structure utiliser pour vérifier rapidement l'existence d'un élément ?",options:["list","tuple","set","str"],correct:2,explanation:'La vérification "x in set" est O(1) contre O(n) pour les listes.'},{question:"Que fait @lru_cache ?",options:["Accélère la boucle for","Met en cache les résultats des appels précédents","Compresse les données","Parallélise le calcul"],correct:1,explanation:"@lru_cache mémorise les résultats des appels précédents. Les appels avec les mêmes arguments retournent instantanément."},{question:"Quel outil permet de mesurer précisément le temps d'exécution d'un petit bout de code ?",options:["time.clock()","timeit.timeit()","os.timer()","sys.benchmark()"],correct:1,explanation:"timeit.timeit() exécute le code plusieurs fois et mesure le temps moyen, idéal pour les micro-benchmarks."}]},{type:"heading",content:"🛠️ Projet Validant : Analyseur de Performance"},{type:"text",content:"<p>Ce projet combine le <strong>modèle mémoire</strong>, le <strong>profiling</strong> et l'<strong>optimisation</strong> pour analyser et améliorer un programme Python.</p>"},{type:"code",code:`import sys
import time
from functools import lru_cache
from typing import Callable, Any

# Décorateur de profiling
def profiler(func: Callable) -> Callable:
    """Décorateur qui mesure le temps et la mémoire."""
    def wrapper(*args, **kwargs):
        # Mémoire avant
        mem_avant = sys.getsizeof(args)
        
        # Temps
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        
        print(f"⏱️ {func.__name__}: {elapsed:.6f}s")
        return result
    return wrapper

# Version lente : sans cache
@profiler
def fibonacci_lent(n: int) -> int:
    if n < 2:
        return n
    return fibonacci_lent(n-1) + fibonacci_lent(n-2)

# Version rapide : avec cache
@lru_cache(maxsize=None)
def _fib_cache(n: int) -> int:
    if n < 2:
        return n
    return _fib_cache(n-1) + _fib_cache(n-2)

@profiler
def fibonacci_rapide(n: int) -> int:
    return _fib_cache(n)

# Comparaison list vs set pour la recherche
@profiler
def recherche_list(data: list, cibles: list) -> int:
    return sum(1 for c in cibles if c in data)  # O(n²)

@profiler
def recherche_set(data: set, cibles: list) -> int:
    return sum(1 for c in cibles if c in data)  # O(n)

# Démonstration
if __name__ == "__main__":
    print("=== Fibonacci ===")
    fibonacci_lent(30)
    fibonacci_rapide(30)
    
    print("\\n=== Recherche ===")
    data = list(range(100_000))
    cibles = [42, 9999, 50000, 99999, -1]
    recherche_list(data, cibles)
    recherche_set(set(data), cibles)`,title:"🛠️ analyseur_perf.py – Projet Niveau 5"},{type:"info",variant:"tip",title:"🎓 Ce projet démontre",content:"Profiling (time.perf_counter, sys.getsizeof), Optimisation (lru_cache, set vs list), Type Hints (Callable, Any), Décorateurs de mesure. Vous comprenez maintenant les internals de Python !"}]}]},by={id:"level6",title:"Python Professionnel (Architecture & Tooling)",shortTitle:"Niv. 6 – Pro",description:"Adopter les standards de l'industrie pour le code en production. Durée : 15 à 20 jours.",lessons:[{id:"l6-packaging",title:"6.1 Packaging Moderne",duration:"25 min",difficulty:"Expert",content:[{type:"text",content:"<p>Le packaging Python moderne utilise <code>pyproject.toml</code> comme fichier unique de configuration. Les outils modernes comme <strong>Poetry</strong> ou <strong>uv</strong> remplacent les anciens pip/setup.py.</p>"},{type:"heading",content:"Structure d'un projet professionnel"},{type:"code",code:`# Structure recommandée (src layout)
# mon-projet/
# ├── pyproject.toml        # Configuration unique
# ├── README.md
# ├── LICENSE
# ├── src/
# │   └── mon_package/
# │       ├── __init__.py
# │       ├── core.py
# │       └── utils.py
# ├── tests/
# │   ├── __init__.py
# │   ├── test_core.py
# │   └── test_utils.py
# └── docs/
#     └── index.md`,title:"Structure de projet"},{type:"code",code:`# pyproject.toml – Configuration complète
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "mon-package"
version = "1.0.0"
description = "Un package Python professionnel"
readme = "README.md"
requires-python = ">=3.10"
license = {text = "MIT"}
authors = [
    {name = "Votre Nom", email = "vous@email.com"},
]
dependencies = [
    "requests>=2.28",
    "pydantic>=2.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=7.0",
    "ruff>=0.1.0",
    "mypy>=1.0",
]

[project.scripts]
mon-cli = "mon_package.cli:main"

[tool.pytest.ini_options]
testpaths = ["tests"]

[tool.ruff]
line-length = 88
target-version = "py310"`,title:"pyproject.toml"},{type:"heading",content:"Environnements virtuels"},{type:"code",code:`# Créer un environnement virtuel
python -m venv .venv

# Activer (Windows)
.venv\\Scripts\\activate

# Activer (Linux/Mac)
source .venv/bin/activate

# Installer les dépendances
pip install -e ".[dev]"  # Install en mode éditable + dépendances dev

# Geler les dépendances
pip freeze > requirements.txt

# Avec Poetry (recommandé)
pip install poetry
poetry init
poetry add requests pydantic
poetry add --group dev pytest ruff
poetry install
poetry run pytest`,title:"Environnements virtuels"},{type:"quiz",questions:[{question:"Quel fichier remplace setup.py dans le packaging moderne ?",options:["setup.cfg","pyproject.toml","package.json","config.py"],correct:1,explanation:"pyproject.toml est le standard moderne pour la configuration des projets Python."},{question:"Pourquoi utiliser un environnement virtuel ?",options:["Pour accélérer Python","Pour isoler les dépendances de chaque projet","Pour installer Python","Pour compiler le code"],correct:1,explanation:"Un environnement virtuel isole les packages de chaque projet, évitant les conflits de versions entre projets."},{question:'Que fait pip install -e "." ?',options:["Installe en mode production","Installe en mode éditable (les modifs sont reflétées sans réinstaller)","Supprime le package","Exporte les dépendances"],correct:1,explanation:"Le mode éditable (-e) crée un lien vers votre code source. Les modifications sont immédiatement disponibles sans réinstallation."}]}]},{id:"l6-quality",title:"6.2 Qualité de Code",duration:"20 min",difficulty:"Expert",content:[{type:"text",content:"<p>Un code professionnel est lisible, cohérent et vérifié automatiquement par des outils de <strong>linting</strong> et de <strong>formatage</strong>.</p>"},{type:"code",code:`# Ruff – Le linter/formatter le plus rapide (écrit en Rust)
# pip install ruff

# Vérifier le code
# ruff check .

# Corriger automatiquement
# ruff check --fix .

# Formater (remplace Black)
# ruff format .

# Configuration dans pyproject.toml
[tool.ruff]
line-length = 88
select = ["E", "F", "I", "N", "UP", "B"]  # Règles
ignore = ["E501"]  # Ignorer certaines règles

# Exemple de code AVANT ruff :
import os, sys
from math import *
def calcul( x,y ):
    if x==True:
        return x+y
    return None

# Exemple de code APRÈS ruff :
import os
import sys
from math import pi, sqrt

def calcul(x: float, y: float) -> float | None:
    if x:
        return x + y
    return None`,title:"Ruff (Linter/Formatter)"},{type:"heading",content:"Pre-commit hooks"},{type:"code",code:`# pre-commit : exécute des vérifications AVANT chaque commit Git
# pip install pre-commit

# .pre-commit-config.yaml
repos:
  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: v0.3.0
    hooks:
      - id: ruff
        args: [--fix]
      - id: ruff-format
  - repo: https://github.com/pre-commit/mirrors-mypy
    rev: v1.8.0
    hooks:
      - id: mypy

# Installation : pre-commit install
# Maintenant, chaque "git commit" vérifie le code automatiquement !`,title:"Pre-commit"},{type:"heading",content:"Docstrings et documentation"},{type:"code",code:`def calculer_moyenne(notes: list[float], poids: list[float] | None = None) -> float:
    """Calcule la moyenne pondérée d'une série de notes.

    Args:
        notes: Liste des notes (entre 0 et 20).
        poids: Liste des coefficients. Si None, toutes les notes
               ont le même poids.

    Returns:
        La moyenne pondérée arrondie à 2 décimales.

    Raises:
        ValueError: Si les notes ne sont pas entre 0 et 20.
        ValueError: Si les longueurs de notes et poids diffèrent.

    Examples:
        >>> calculer_moyenne([12, 15, 18])
        15.0
        >>> calculer_moyenne([12, 15], [1, 2])
        14.0
    """
    if any(n < 0 or n > 20 for n in notes):
        raise ValueError("Les notes doivent être entre 0 et 20")
    
    if poids is None:
        return round(sum(notes) / len(notes), 2)
    
    if len(notes) != len(poids):
        raise ValueError("notes et poids doivent avoir la même longueur")
    
    total = sum(n * p for n, p in zip(notes, poids))
    return round(total / sum(poids), 2)`,title:"Docstrings Google Style"},{type:"quiz",questions:[{question:"Quel outil combine linting ET formatage pour Python ?",options:["pylint","black","ruff","flake8"],correct:2,explanation:"Ruff est un outil ultra-rapide (écrit en Rust) qui combine linting et formatage."},{question:"Quel style de docstring est recommandé par Google ?",options:["reStructuredText","Numpy style","Google style avec Args/Returns/Raises","Markdown"],correct:2,explanation:"Le Google style utilise des sections Args, Returns, Raises et Examples pour documenter les fonctions."},{question:"Que fait pre-commit install ?",options:["Installe Python","Configure des vérifications automatiques avant chaque git commit","Sauvegarde le code","Crée un backup"],correct:1,explanation:"pre-commit installe des hooks Git qui vérifient automatiquement le code (linting, formatage) avant chaque commit."}]}]},{id:"l6-patterns",title:"6.3 Design Patterns & SOLID",duration:"30 min",difficulty:"Expert",content:[{type:"text",content:"<p>Les <strong>Design Patterns</strong> sont des solutions éprouvées à des problèmes récurrents. Les principes <strong>SOLID</strong> guident la conception d'un code maintenable.</p>"},{type:"heading",content:"Principes SOLID"},{type:"code",code:`# S – Single Responsibility : une classe = une responsabilité
# ❌ MAUVAIS
class Utilisateur:
    def sauvegarder(self): ...
    def envoyer_email(self): ...
    def generer_pdf(self): ...

# ✅ BON
class Utilisateur:
    def __init__(self, nom, email): ...

class UtilisateurRepository:
    def sauvegarder(self, user): ...

class NotificationService:
    def envoyer_email(self, user, message): ...

# O – Open/Closed : ouvert à l'extension, fermé à la modification
from abc import ABC, abstractmethod

class Forme(ABC):
    @abstractmethod
    def aire(self) -> float: ...

class Cercle(Forme):
    def __init__(self, rayon):
        self.rayon = rayon
    def aire(self) -> float:
        return 3.14159 * self.rayon ** 2

class Rectangle(Forme):
    def __init__(self, largeur, hauteur):
        self.largeur = largeur
        self.hauteur = hauteur
    def aire(self) -> float:
        return self.largeur * self.hauteur

# Ajouter un Triangle sans modifier le code existant
class Triangle(Forme):
    def __init__(self, base, hauteur):
        self.base = base
        self.hauteur = hauteur
    def aire(self) -> float:
        return 0.5 * self.base * self.hauteur

# D – Dependency Inversion : dépendre des abstractions
class DatabaseInterface(ABC):
    @abstractmethod
    def query(self, sql: str) -> list: ...

class PostgresDB(DatabaseInterface):
    def query(self, sql):
        return [{"result": "postgres"}]

class SQLiteDB(DatabaseInterface):
    def query(self, sql):
        return [{"result": "sqlite"}]

class UserService:
    def __init__(self, db: DatabaseInterface):  # Injection de dépendance
        self.db = db
    
    def get_users(self):
        return self.db.query("SELECT * FROM users")

# Facile à tester et à changer de base de données !
service = UserService(PostgresDB())`,title:"SOLID"},{type:"heading",content:"Patterns courants"},{type:"code",code:`# Factory Pattern – créer des objets sans exposer la logique
class Animal:
    def parler(self): ...

class Chien(Animal):
    def parler(self): return "Ouaf !"

class Chat(Animal):
    def parler(self): return "Miaou !"

def creer_animal(type_animal: str) -> Animal:
    """Factory : crée l'animal approprié."""
    animaux = {"chien": Chien, "chat": Chat}
    cls = animaux.get(type_animal)
    if cls is None:
        raise ValueError(f"Animal inconnu : {type_animal}")
    return cls()

# Observer Pattern – notification sur changement d'état
class EventEmitter:
    def __init__(self):
        self._listeners = {}
    
    def on(self, event: str, callback):
        self._listeners.setdefault(event, []).append(callback)
    
    def emit(self, event: str, *args, **kwargs):
        for callback in self._listeners.get(event, []):
            callback(*args, **kwargs)

# Utilisation
emitter = EventEmitter()
emitter.on("user_created", lambda name: print(f"✅ Bienvenue {name}"))
emitter.on("user_created", lambda name: print(f"📧 Email envoyé à {name}"))
emitter.emit("user_created", "Alice")

# Strategy Pattern – comportement interchangeable
class SortStrategy(ABC):
    @abstractmethod
    def sort(self, data: list) -> list: ...

class BubbleSort(SortStrategy):
    def sort(self, data):
        # ... implémentation
        return sorted(data)

class QuickSort(SortStrategy):
    def sort(self, data):
        return sorted(data)

class Sorter:
    def __init__(self, strategy: SortStrategy):
        self.strategy = strategy
    
    def sort(self, data):
        return self.strategy.sort(data)`,title:"Design Patterns"},{type:"quiz",questions:[{question:'Le principe "S" de SOLID signifie...',options:["Secure","Scalable","Single Responsibility","Simple"],correct:2,explanation:"Single Responsibility Principle : chaque classe ne doit avoir qu'une seule raison de changer."},{question:"Quel pattern permet de créer des objets sans exposer la logique de création ?",options:["Observer","Strategy","Factory","Singleton"],correct:2,explanation:"Le Factory Pattern encapsule la logique de création d'objets dans une fonction ou méthode dédiée."},{question:"Le principe D de SOLID (Dependency Inversion) recommande de...",options:["Supprimer les dépendances","Dépendre des abstractions, pas des implémentations","Inverser l'ordre du code","Utiliser des singletons"],correct:1,explanation:"Dependency Inversion : les modules de haut niveau ne doivent pas dépendre des modules de bas niveau. Tous doivent dépendre d'abstractions."}]}]},{id:"l6-logging",title:"6.4 Logging, Debugging & Sécurité",duration:"25 min",difficulty:"Expert",content:[{type:"text",content:"<p>Un code professionnel utilise le <strong>logging</strong> au lieu de print() pour tracer l'exécution. La <strong>sécurité</strong> est également un pilier essentiel : ne jamais exposer de secrets dans le code source.</p>"},{type:"code",code:`import logging

# Configuration du logging
logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    handlers=[
        logging.FileHandler("app.log"),
        logging.StreamHandler()  # Console
    ]
)

logger = logging.getLogger(__name__)

# Niveaux de log (du moins au plus critique)
logger.debug("Détail pour le développement")
logger.info("Information générale")
logger.warning("Attention, quelque chose d'inhabituel")
logger.error("Une erreur est survenue")
logger.critical("Erreur critique !")

# Logger structuré pour une application
class UserService:
    def __init__(self):
        self.logger = logging.getLogger("UserService")
    
    def creer_utilisateur(self, nom: str):
        self.logger.info(f"Création de l'utilisateur : {nom}")
        try:
            # ... logique
            self.logger.info(f"Utilisateur {nom} créé avec succès")
        except Exception as e:
            self.logger.error(f"Échec création utilisateur {nom}: {e}")
            raise`,title:"Logging"},{type:"heading",content:"Sécurité et gestion des secrets"},{type:"code",code:`# ⚠️ NE JAMAIS FAIRE
# password = "mon_mot_de_passe_123"  # Hardcodé dans le code !

# ✅ Utiliser les variables d'environnement
import os
from pathlib import Path

# Fichier .env (NE PAS committer dans Git !)
# DATABASE_URL=postgresql://user:pass@localhost/db
# SECRET_KEY=ma_cle_secrete
# DEBUG=false

# Charger avec python-dotenv
# pip install python-dotenv
from dotenv import load_dotenv

load_dotenv()  # Charge le .env

database_url = os.getenv("DATABASE_URL")
secret_key = os.getenv("SECRET_KEY", "default_key")
debug = os.getenv("DEBUG", "false").lower() == "true"

# Validation avec Pydantic
from pydantic import BaseModel, Field
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str
    secret_key: str
    debug: bool = False
    port: int = 8000
    
    class Config:
        env_file = ".env"

settings = Settings()  # Auto-validation + types

# .gitignore (IMPORTANT !)
# .env
# *.pyc
# __pycache__/
# .venv/`,title:"Sécurité"},{type:"info",variant:"warning",title:"⚠️ Règles de sécurité essentielles",content:"1. JAMAIS de secrets dans le code source. 2. Utilisez .env + .gitignore. 3. Validez TOUTES les entrées utilisateur. 4. Utilisez Pydantic pour la validation des données. 5. Gardez vos dépendances à jour (pip audit)."},{type:"quiz",questions:[{question:"Où stocker les mots de passe et clés API ?",options:["Dans le code Python","Dans un fichier .env + .gitignore","Dans les commentaires","Dans le README"],correct:1,explanation:"Les secrets vont dans un fichier .env qui est exclu du contrôle de version via .gitignore."},{question:"Quel niveau de log utiliser pour une erreur non-critique ?",options:["logger.debug()","logger.info()","logger.warning()","logger.critical()"],correct:2,explanation:"warning() signale quelque chose d'inhabituel qui mérite attention mais n'empêche pas l'exécution."},{question:"Pourquoi valider les données avec Pydantic plutôt que manuellement ?",options:["C'est obligatoire","Validation automatique des types + messages d'erreur clairs","C'est plus lent mais plus sûr","Pydantic remplace Python"],correct:1,explanation:"Pydantic valide automatiquement les types, les contraintes et génère des messages d'erreur détaillés."}]}]}]},_y={id:"level7",title:"Maîtrise : Web, Data & Projets",shortTitle:"Niv. 7 – Maîtrise",description:"Appliquer tout ce que vous avez appris dans des domaines professionnels concrets. Durée : 20+ jours.",lessons:[{id:"l7-web",title:"7.1 Développement Web (Flask / FastAPI)",duration:"35 min",difficulty:"Expert",content:[{type:"text",content:"<p>Python est l'un des langages les plus utilisés pour le <strong>développement web backend</strong>. Deux frameworks dominent : <strong>Flask</strong> (léger, flexible) et <strong>FastAPI</strong> (moderne, ultra-rapide).</p>"},{type:"heading",content:"Flask – Le micro-framework"},{type:"code",code:`# pip install flask

from flask import Flask, jsonify, request

app = Flask(__name__)

# Base de données simple (en mémoire)
taches = [
    {"id": 1, "titre": "Apprendre Flask", "fait": False},
    {"id": 2, "titre": "Créer une API", "fait": False},
]

@app.route("/")
def accueil():
    return "<h1>Bienvenue sur mon API Flask !</h1>"

@app.route("/api/taches", methods=["GET"])
def get_taches():
    return jsonify(taches)

@app.route("/api/taches", methods=["POST"])
def creer_tache():
    data = request.get_json()
    nouvelle = {
        "id": len(taches) + 1,
        "titre": data["titre"],
        "fait": False
    }
    taches.append(nouvelle)
    return jsonify(nouvelle), 201

@app.route("/api/taches/<int:id>", methods=["PUT"])
def modifier_tache(id):
    tache = next((t for t in taches if t["id"] == id), None)
    if not tache:
        return jsonify({"erreur": "Tâche non trouvée"}), 404
    data = request.get_json()
    tache.update(data)
    return jsonify(tache)

if __name__ == "__main__":
    app.run(debug=True, port=5000)`,title:"Flask API REST"},{type:"heading",content:"FastAPI – Le framework moderne"},{type:"code",code:`# pip install fastapi uvicorn

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional

app = FastAPI(title="Mon API Python", version="1.0.0")

# Modèle de données (validation automatique !)
class Tache(BaseModel):
    titre: str
    description: Optional[str] = None
    fait: bool = False

class TacheResponse(Tache):
    id: int

# Base de données simulée
db: list[TacheResponse] = []
counter = 0

@app.get("/")
async def accueil():
    return {"message": "Bienvenue sur l'API FastAPI ! Allez sur /docs"}

@app.get("/api/taches", response_model=list[TacheResponse])
async def lister_taches():
    return db

@app.post("/api/taches", response_model=TacheResponse, status_code=201)
async def creer_tache(tache: Tache):
    global counter
    counter += 1
    nouvelle = TacheResponse(id=counter, **tache.model_dump())
    db.append(nouvelle)
    return nouvelle

@app.get("/api/taches/{tache_id}", response_model=TacheResponse)
async def get_tache(tache_id: int):
    tache = next((t for t in db if t.id == tache_id), None)
    if not tache:
        raise HTTPException(status_code=404, detail="Tâche non trouvée")
    return tache

@app.delete("/api/taches/{tache_id}")
async def supprimer_tache(tache_id: int):
    global db
    db = [t for t in db if t.id != tache_id]
    return {"message": "Tâche supprimée"}

# Lancer : uvicorn main:app --reload
# Documentation auto : http://localhost:8000/docs`,title:"FastAPI"},{type:"info",variant:"tip",title:"💡 Flask vs FastAPI",content:"Flask : mature, simple, beaucoup de plugins. Idéal pour les projets existants. FastAPI : moderne, asynchrone, validation auto avec Pydantic, docs Swagger auto. Idéal pour les nouvelles APIs."},{type:"quiz",questions:[{question:"Quel avantage principal offre FastAPI sur Flask ?",options:["Plus de plugins","Validation automatique des données + doc Swagger","Plus facile à installer","Meilleure compatibilité"],correct:1,explanation:"FastAPI valide automatiquement les données avec Pydantic et génère une documentation Swagger interactive."},{question:"Quel décorateur définit une route GET dans Flask ?",options:["@app.get()",'@app.route("/", methods=["GET"])',"@flask.get()",'@route("/")'],correct:1,explanation:'@app.route() avec methods=["GET"] (ou simplement @app.route("/") car GET est le défaut) définit une route.'},{question:"Pourquoi FastAPI utilise-t-il le mot-clé async ?",options:["C'est obligatoire","Pour le support asynchrone natif (meilleure performance I/O)","Pour la compatibilité avec Flask","Pour le débogage"],correct:1,explanation:"FastAPI est nativement asynchrone, permettant de gérer beaucoup de requêtes simultanées sans bloquer."}]}]},{id:"l7-data",title:"7.2 Data Science (Pandas & NumPy)",duration:"30 min",difficulty:"Expert",content:[{type:"text",content:"<p>Python est le langage n°1 de la <strong>Data Science</strong>. <strong>NumPy</strong> fournit les calculs numériques performants, <strong>Pandas</strong> la manipulation de données structurées.</p>"},{type:"heading",content:"NumPy – Calcul numérique"},{type:"code",code:`import numpy as np

# Créer des tableaux
a = np.array([1, 2, 3, 4, 5])
matrice = np.array([[1, 2, 3], [4, 5, 6]])

# Opérations vectorisées (100x plus rapide que les boucles !)
print(a * 2)        # [2, 4, 6, 8, 10]
print(a ** 2)       # [1, 4, 9, 16, 25]
print(np.sqrt(a))   # [1.0, 1.41, 1.73, 2.0, 2.24]

# Statistiques
print(np.mean(a))    # 3.0 (moyenne)
print(np.std(a))     # 1.414 (écart-type)
print(np.median(a))  # 3.0

# Création rapide
zeros = np.zeros((3, 3))
ones = np.ones((2, 4))
arange = np.arange(0, 10, 0.5)
linspace = np.linspace(0, 1, 100)  # 100 points entre 0 et 1
random = np.random.randn(1000)     # Distribution normale

# Algèbre linéaire
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print(A @ B)  # Produit matriciel
print(np.linalg.det(A))  # Déterminant
print(np.linalg.inv(A))  # Inverse`,title:"NumPy"},{type:"heading",content:"Pandas – Manipulation de données"},{type:"code",code:`import pandas as pd

# Créer un DataFrame
df = pd.DataFrame({
    "nom": ["Alice", "Bob", "Charlie", "Diana", "Eve"],
    "age": [25, 30, 22, 28, 35],
    "ville": ["Paris", "Lyon", "Paris", "Marseille", "Lyon"],
    "salaire": [45000, 55000, 38000, 52000, 60000]
})

print(df)
#       nom  age      ville  salaire
# 0   Alice   25      Paris    45000
# 1     Bob   30       Lyon    55000
# 2  Charlie  22      Paris    38000
# 3   Diana   28  Marseille    52000
# 4     Eve   35       Lyon    60000

# Sélection
print(df["nom"])               # Colonne
print(df[df["age"] > 25])      # Filtrer
print(df.loc[0:2, ["nom", "age"]])  # Par label

# Statistiques
print(df.describe())           # Résumé statistique
print(df["salaire"].mean())    # Moyenne : 50000
print(df.groupby("ville")["salaire"].mean())  # Par ville

# Trier
df_sorted = df.sort_values("salaire", ascending=False)

# Lire/écrire des fichiers
# df = pd.read_csv("donnees.csv")
# df = pd.read_excel("donnees.xlsx")
# df.to_csv("export.csv", index=False)

# Transformer
df["salaire_mensuel"] = df["salaire"] / 12
df["categorie"] = df["age"].apply(
    lambda x: "Junior" if x < 25 else "Senior"
)`,title:"Pandas"},{type:"quiz",questions:[{question:"Pourquoi NumPy est-il plus rapide que les listes Python ?",options:["Il utilise C sous le capot","Il pré-calcule les résultats","Il utilise le GPU","Il compresse les données"],correct:0,explanation:"NumPy est implémenté en C et opère sur des tableaux continus en mémoire, évitant les boucles Python lentes."},{question:'Que fait df.groupby("ville")["salaire"].mean() ?',options:["Trie par ville","Calcule la moyenne des salaires par ville","Filtre les villes","Crée une nouvelle colonne"],correct:1,explanation:"groupby groupe les données par ville, puis .mean() calcule la moyenne de chaque groupe."},{question:"Quel est l'opérateur @ en NumPy ?",options:["Décorateur","Produit matriciel","Référence","Commentaire"],correct:1,explanation:"L'opérateur @ est le produit matriciel (matrix multiplication). A @ B équivaut à np.dot(A, B)."}]}]},{id:"l7-db",title:"7.3 Bases de Données & SQLAlchemy",duration:"25 min",difficulty:"Expert",content:[{type:"text",content:"<p><strong>SQLAlchemy</strong> est l'ORM (Object-Relational Mapper) le plus utilisé en Python. Il permet d'interagir avec des bases SQL en utilisant des objets Python.</p>"},{type:"code",code:`# pip install sqlalchemy

from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import declarative_base, Session, relationship

# Créer le moteur de base de données
engine = create_engine("sqlite:///ecole.db", echo=True)
Base = declarative_base()

# Définir les modèles
class Etudiant(Base):
    __tablename__ = "etudiants"
    
    id = Column(Integer, primary_key=True)
    nom = Column(String(100), nullable=False)
    age = Column(Integer)
    email = Column(String(200), unique=True)
    
    # Relation
    notes = relationship("Note", back_populates="etudiant")
    
    def __repr__(self):
        return f"Etudiant(nom={self.nom}, age={self.age})"

class Note(Base):
    __tablename__ = "notes"
    
    id = Column(Integer, primary_key=True)
    matiere = Column(String(50))
    valeur = Column(Float)
    etudiant_id = Column(Integer, ForeignKey("etudiants.id"))
    
    etudiant = relationship("Etudiant", back_populates="notes")

# Créer les tables
Base.metadata.create_all(engine)

# CRUD (Create, Read, Update, Delete)
with Session(engine) as session:
    # CREATE
    alice = Etudiant(nom="Alice", age=20, email="alice@univ.fr")
    alice.notes = [
        Note(matiere="Python", valeur=18),
        Note(matiere="SQL", valeur=16),
    ]
    session.add(alice)
    session.commit()
    
    # READ
    etudiants = session.query(Etudiant).all()
    alice = session.query(Etudiant).filter_by(nom="Alice").first()
    
    # Requête complexe
    bons = session.query(Etudiant).join(Note).filter(
        Note.valeur >= 15
    ).distinct().all()
    
    # UPDATE
    alice.age = 21
    session.commit()
    
    # DELETE
    # session.delete(alice)
    # session.commit()`,title:"SQLAlchemy ORM"},{type:"quiz",questions:[{question:"Qu'est-ce qu'un ORM ?",options:["Un type de base de données","Un outil qui convertit des objets Python en SQL","Un langage de requête","Un framework web"],correct:1,explanation:"ORM = Object-Relational Mapper. Il permet de manipuler la base de données avec des objets Python au lieu d'écrire du SQL brut."},{question:"Que fait session.commit() ?",options:["Ferme la session","Persiste les changements en base de données","Annule les modifications","Crée une nouvelle table"],correct:1,explanation:"commit() enregistre tous les changements en attente dans la base de données."},{question:"Quel est l'avantage principal d'un ORM sur le SQL brut ?",options:["Plus rapide","Code Python au lieu de SQL + abstraction de la base","Plus sécurisé","Supporte plus de BDD"],correct:1,explanation:"Un ORM permet de manipuler la BDD avec des objets Python, rendant le code plus lisible et portable entre différentes bases."}]}]},{id:"l7-deploy",title:"7.4 Déploiement & Docker",duration:"25 min",difficulty:"Expert",content:[{type:"text",content:"<p>Le <strong>déploiement</strong> est l'étape finale : mettre votre application en production. <strong>Docker</strong> garantit que votre app fonctionne partout.</p>"},{type:"code",code:`# Dockerfile pour une application Python
# Fichier : Dockerfile

# Image de base Python
FROM python:3.12-slim

# Répertoire de travail
WORKDIR /app

# Copier les dépendances d'abord (cache Docker)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copier le code source
COPY . .

# Variables d'environnement
ENV PYTHONUNBUFFERED=1
ENV PORT=8000

# Exposer le port
EXPOSE 8000

# Commande de démarrage
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`,title:"Dockerfile"},{type:"code",code:`# docker-compose.yml
version: "3.9"

services:
  web:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
      - SECRET_KEY=\${SECRET_KEY}
    depends_on:
      - db
    volumes:
      - .:/app
  
  db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`,title:"docker-compose.yml"},{type:"code",code:`# Commandes Docker essentielles
docker build -t mon-app .           # Construire l'image
docker run -p 8000:8000 mon-app     # Lancer le conteneur
docker-compose up -d                # Lancer tous les services
docker-compose logs -f              # Voir les logs
docker-compose down                 # Arrêter

# CI/CD avec GitHub Actions
# .github/workflows/ci.yml
name: CI/CD
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"
      - run: pip install -e ".[dev]"
      - run: ruff check .
      - run: mypy .
      - run: pytest --cov`,title:"Commandes & CI/CD"},{type:"info",variant:"tip",title:"🎓 Félicitations !",content:"Vous avez parcouru les 7 niveaux de Python Expert Academy ! Vous maîtrisez maintenant les fondations, les structures de données, la POO, les techniques avancées, les internals Python, les outils professionnels et le déploiement. Continuez à pratiquer avec des projets concrets !"},{type:"quiz",questions:[{question:"Pourquoi utiliser Docker ?",options:["Pour écrire du Python plus vite","Pour garantir que l'app fonctionne partout de la même manière","Pour remplacer Python","Pour la sécurité uniquement"],correct:1,explanation:"Docker encapsule l'application et toutes ses dépendances dans un conteneur, garantissant un comportement identique partout."},{question:"Que fait docker-compose up -d ?",options:["Arrête les conteneurs","Lance les services définis dans docker-compose.yml en arrière-plan","Supprime les images","Met à jour Docker"],correct:1,explanation:"docker-compose up -d lance tous les services définis en mode détaché (arrière-plan)."},{question:"Dans un Dockerfile, pourquoi copier requirements.txt AVANT le code source ?",options:["C'est obligatoire","Pour profiter du cache Docker (les dépendances ne changent pas souvent)","Pour plus de sécurité","Pour réduire la taille"],correct:1,explanation:"Docker met en cache chaque étape. En copiant requirements.txt d'abord, les dépendances ne sont réinstallées que si le fichier change."}]},{type:"heading",content:"🎓 Récapitulatif : Votre Parcours Python Expert"},{type:"text",content:"<p>Félicitations ! Vous avez parcouru les <strong>7 niveaux</strong> de Python Expert Academy. Voici un résumé de tout ce que vous maîtrisez maintenant :</p>"},{type:"code",code:`# 📊 Résumé des compétences acquises

compétences = {
    "Niveau 1 - Fondations": [
        "Variables, types, opérateurs",
        "Conditions, boucles, fonctions",
        "Entrées/sorties, formatage",
    ],
    "Niveau 2 - Structures de Données": [
        "Listes, tuples, sets, dictionnaires",
        "Compréhensions, fichiers CSV/JSON",
        "Gestion d'erreurs, modules",
    ],
    "Niveau 3 - POO": [
        "Classes, héritage, polymorphisme",
        "Encapsulation, dunder methods",
        "Dataclasses, exceptions custom",
    ],
    "Niveau 4 - Avancé": [
        "Programmation fonctionnelle",
        "Générateurs, décorateurs",
        "Context managers, pytest",
    ],
    "Niveau 5 - Expert": [
        "Modèle mémoire, métaprogrammation",
        "Threading, asyncio, GIL",
        "Type hints, profiling",
    ],
    "Niveau 6 - Professionnel": [
        "Packaging, qualité de code",
        "Design Patterns, SOLID",
        "Logging, sécurité",
    ],
    "Niveau 7 - Maîtrise": [
        "Flask / FastAPI",
        "Pandas / NumPy",
        "SQLAlchemy, Docker, CI/CD",
    ],
}

print("🚀 Prochaines étapes :")
print("  1. Créez un projet personnel complet")
print("  2. Contribuez à un projet open-source")
print("  3. Explorez ML/AI avec scikit-learn et PyTorch")
print("  4. Passez une certification Python")`,title:"🎓 Votre Parcours Complet"},{type:"info",variant:"tip",title:"🚀 Et maintenant ?",content:"1. Créez un projet personnel complet (portfolio, API, app web). 2. Contribuez à un projet open-source sur GitHub. 3. Explorez le Machine Learning (scikit-learn, PyTorch). 4. Construisez votre portfolio en ligne. Vous avez toutes les bases pour devenir un développeur Python professionnel !"}]}]},ft=[my,yy,gy,hy,vy,by,_y];function Sy(){const[q,V]=Xe.useState(!1),[L,d]=Xe.useState("dashboard"),[O,U]=Xe.useState(null),[H,G]=Xe.useState(null),[A,b]=Xe.useState(()=>{const X=localStorage.getItem("python-academy-progress");return X?JSON.parse(X):{}});Xe.useEffect(()=>{localStorage.setItem("python-academy-progress",JSON.stringify(A))},[A]);const Z=(X,re)=>{b(I=>({...I,[`${X}-${re}`]:!0}))},T=(X,re)=>A[`${X}-${re}`]||!1,M=X=>{const re=ft.find(I=>I.id===X);return re?re.lessons.filter(I=>T(X,I.id)).length:0},ae=()=>ft.reduce((X,re)=>X+re.lessons.length,0),ce=()=>ft.reduce((X,re)=>X+re.lessons.filter(I=>T(re.id,I.id)).length,0),pe=()=>{const X=ae();return X>0?Math.round(ce()/X*100):0},Te=(X,re)=>{U(X),G(re),d("lesson"),V(!1),window.scrollTo(0,0)},me=()=>{d("dashboard"),U(null),G(null),window.scrollTo(0,0)},le=()=>{const X=ft.find(I=>I.id===O);if(!X)return;const re=X.lessons.findIndex(I=>I.id===H);if(re<X.lessons.length-1)Te(O,X.lessons[re+1].id);else{const I=ft.findIndex(Y=>Y.id===O);if(I<ft.length-1){const Y=ft[I+1];Te(Y.id,Y.lessons[0].id)}}},k=()=>{const X=ft.find(I=>I.id===O);if(!X)return;const re=X.lessons.findIndex(I=>I.id===H);if(re>0)Te(O,X.lessons[re-1].id);else{const I=ft.findIndex(Y=>Y.id===O);if(I>0){const Y=ft[I-1];Te(Y.id,Y.lessons[Y.lessons.length-1].id)}}};return v.jsxs("div",{className:"app-layout",children:[v.jsx(sy,{open:q,onClose:()=>V(!1),courses:ft,currentLevel:O,currentLesson:H,onNavigate:Te,onDashboard:me,isCompleted:T,getCompletedCount:M}),q&&v.jsx("div",{className:"sidebar-overlay open",onClick:()=>V(!1)}),v.jsxs("div",{className:"main-content",children:[v.jsx(ry,{globalProgress:pe(),onMenuClick:()=>V(!0),onDashboard:me}),v.jsx("div",{className:"page-container",children:L==="dashboard"?v.jsx(oy,{courses:ft,getCompletedCount:M,getTotalCompleted:ce,getTotalLessons:ae,getGlobalProgress:pe,onNavigate:Te}):v.jsx(py,{courses:ft,levelId:O,lessonId:H,isCompleted:T,markCompleted:Z,onNext:le,onPrev:k,onNavigate:Te})})]})]})}uy.createRoot(document.getElementById("root")).render(v.jsx($m.StrictMode,{children:v.jsx(Sy,{})}));
