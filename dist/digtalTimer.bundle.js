(()=>{var t={543:function(t,e){!function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){var n,o,s;n=t,o=e,s=r[e],(o=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(o))in n?Object.defineProperty(n,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[o]=s})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e,n){var r,o="";if((t="number"==typeof t?String(t):t).length>e)return t;for(r=0;r<e;r+=1)o+=String(n);return(o+t).slice(-o.length)}function s(){this.reset()}function i(){this.events={}}s.prototype.toString=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["hours","minutes","seconds"],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;t=t||["hours","minutes","seconds"],e=e||":",n=n||2;var r,s=[];for(r=0;r<t.length;r+=1)void 0!==this[t[r]]&&("secondTenths"===t[r]?s.push(this[t[r]]):s.push(o(this[t[r]],n,"0")));return s.join(e)},s.prototype.reset=function(){this.secondTenths=0,this.seconds=0,this.minutes=0,this.hours=0,this.days=0},i.prototype.on=function(t,e){var n=this;return Array.isArray(this.events[t])||(this.events[t]=[]),this.events[t].push(e),function(){return n.removeListener(t,e)}},i.prototype.removeListener=function(t,e){if(Array.isArray(this.events[t])){var n=this.events[t].indexOf(e);n>-1&&this.events[t].splice(n,1)}},i.prototype.removeAllListeners=function(t){t?Array.isArray(this.events[t])&&(this.events[t]=[]):this.events={}},i.prototype.emit=function(t){for(var e=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];Array.isArray(this.events[t])&&this.events[t].forEach((function(t){return t.apply(e,r)}))};var u="secondTenths",a="seconds",c="minutes",f="hours",d="days",h=[u,a,c,f,d],l={secondTenths:100,seconds:1e3,minutes:6e4,hours:36e5,days:864e5},v={secondTenths:10,seconds:60,minutes:60,hours:24};function p(t,e){return(t%e+e)%e}function y(){var t,e,o,y,m,g,b,w,O,j,T=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},S=new s,A=new s,E=new i,P=!1,x=!1,L={},D={detail:{timer:this}};function V(t,e){var n=A[e];return function(t,e){var n=v[t];A[t]=e,S[t]=t===d?Math.abs(e):p(e>=0?e:n-p(e,n),n)}(e,R(t,l[e])),A[e]!==n}function U(){M(),S.reset(),A.reset()}function M(){clearInterval(t),t=void 0,P=!1,x=!1}function k(n){var r;W()?(O=I(),g=q(m.target)):C(n),r=l[e],B(z(Date.now()))||(t=setInterval($,r),P=!0,x=!1)}function I(){return z(Date.now())-A.secondTenths*l[u]*o}function $(){var t,e=z(Date.now());(t=_())[u]&&K("secondTenthsUpdated",D),t[a]&&K("secondsUpdated",D),t[c]&&K("minutesUpdated",D),t[f]&&K("hoursUpdated",D),t[d]&&K("daysUpdated",D),y(D.detail.timer),B(e)&&(G(),K("targetAchieved",D))}function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z(Date.now()),e=o>0?t-O:O-t,n={};return n[u]=V(e,u),n[a]=function(t){return V(t,a)}(e),n[c]=function(t){return V(t,c)}(e),n[f]=function(t){return V(t,f)}(e),n[d]=function(t){return V(t,d)}(e),n}function z(t){return Math.floor(t/l[e])*l[e]}function B(t){return g instanceof Array&&t>=j}function C(t){var n;e=function(t){if(e=t="string"==typeof t?t:a,!(h.indexOf(e)>=0))throw new Error("Error in precision parameter: ".concat(t," is not a valid value"));var e;return t}((t=t||{}).precision),y="function"==typeof t.callback?t.callback:function(){},w=!0===t.countdown,o=!0===w?-1:1,"object"===r(t.startValues)?(n=t.startValues,b=N(n),S.secondTenths=b[0],S.seconds=b[1],S.minutes=b[2],S.hours=b[3],S.days=b[4],A=F(b,A)):b=null,O=I(),_(),"object"===r(t.target)?g=q(t.target):w?(t.target={seconds:0},g=q(t.target)):g=null,L={precision:e,callback:y,countdown:"object"===r(t)&&!0===t.countdown,target:g,startValues:b},m=t}function N(t){var e;if("object"===r(t))if(t instanceof Array){if(5!==t.length)throw new Error("Array size not valid");e=t}else{for(var n in t)if(h.indexOf(n)<0)throw new Error("Error in startValues or target parameter: ".concat(n," is not a valid input value"));e=[t.secondTenths||0,t.seconds||0,t.minutes||0,t.hours||0,t.days||0]}e=e.map((function(t){return parseInt(t,10)}));var o=e[0],s=e[1]+R(o,10),i=e[2]+R(s,60),u=e[3]+R(i,60),a=e[4]+R(u,24);return e[0]=o%10,e[1]=s%60,e[2]=i%60,e[3]=u%24,e[4]=a,e}function R(t,e){var n=t/e;return n<0?Math.ceil(n):Math.floor(n)}function q(t){if(t){var e=F(g=N(t));return j=O+e.secondTenths*l[u]*o,g}}function F(t,e){var n=e||{};return n.days=t[4],n.hours=24*n.days+t[3],n.minutes=60*n.hours+t[2],n.seconds=60*n.minutes+t[1],n.secondTenths=10*n.seconds+t[[0]],n}function G(){U(),K("stopped",D)}function H(t,e){E.on(t,e)}function J(t,e){E.removeListener(t,e)}function K(t,e){E.emit(t,e)}function Q(){return P}function W(){return x}C(T),void 0!==this&&(this.start=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=n(n({},T),t),Q()||(k(t),K("started",D))},this.pause=function(){M(),x=!0,K("paused",D)},this.stop=G,this.reset=function(){U(),k(m),K("reset",D)},this.isRunning=Q,this.isPaused=W,this.getTimeValues=function(){return S},this.getTotalTimeValues=function(){return A},this.getConfig=function(){return L},this.addEventListener=H,this.on=H,this.removeEventListener=J,this.removeAllEventListeners=function(t){E.removeAllListeners(t)},this.off=J)}t.Timer=y,t.default=y,Object.defineProperty(t,"__esModule",{value:!0})}(e)}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}(()=>{"use strict";const t=new(n(543).default);t.start({countdown:!1,startValues:{minutes:0,seconds:0},target:{minutes:60,seconds:0}}),t.addEventListener("secondsUpdated",(function(){const e=(n=t.getTimeValues(),`${String(n.minutes).padStart(2,"0")}:${String(n.seconds).padStart(2,"0")}`);var n;document.getElementById("basicUsage").innerText=e}))})()})();