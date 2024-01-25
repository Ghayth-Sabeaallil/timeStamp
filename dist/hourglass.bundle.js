(()=>{var t={649:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=new(n(543).default);e.default=r},543:function(t,e){!function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){var n,o,s;n=t,o=e,s=r[e],(o=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(o))in n?Object.defineProperty(n,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[o]=s})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e,n){var r,o="";if((t="number"==typeof t?String(t):t).length>e)return t;for(r=0;r<e;r+=1)o+=String(n);return(o+t).slice(-o.length)}function s(){this.reset()}function i(){this.events={}}s.prototype.toString=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["hours","minutes","seconds"],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;t=t||["hours","minutes","seconds"],e=e||":",n=n||2;var r,s=[];for(r=0;r<t.length;r+=1)void 0!==this[t[r]]&&("secondTenths"===t[r]?s.push(this[t[r]]):s.push(o(this[t[r]],n,"0")));return s.join(e)},s.prototype.reset=function(){this.secondTenths=0,this.seconds=0,this.minutes=0,this.hours=0,this.days=0},i.prototype.on=function(t,e){var n=this;return Array.isArray(this.events[t])||(this.events[t]=[]),this.events[t].push(e),function(){return n.removeListener(t,e)}},i.prototype.removeListener=function(t,e){if(Array.isArray(this.events[t])){var n=this.events[t].indexOf(e);n>-1&&this.events[t].splice(n,1)}},i.prototype.removeAllListeners=function(t){t?Array.isArray(this.events[t])&&(this.events[t]=[]):this.events={}},i.prototype.emit=function(t){for(var e=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];Array.isArray(this.events[t])&&this.events[t].forEach((function(t){return t.apply(e,r)}))};var u="secondTenths",c="seconds",a="minutes",f="hours",d="days",l=[u,c,a,f,d],h={secondTenths:100,seconds:1e3,minutes:6e4,hours:36e5,days:864e5},v={secondTenths:10,seconds:60,minutes:60,hours:24};function p(t,e){return(t%e+e)%e}function y(){var t,e,o,y,m,g,b,w,O,j,T=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},A=new s,E=new s,S=new i,P=!1,L=!1,V={},x={detail:{timer:this}};function D(t,e){var n=E[e];return function(t,e){var n=v[t];E[t]=e,A[t]=t===d?Math.abs(e):p(e>=0?e:n-p(e,n),n)}(e,N(t,h[e])),E[e]!==n}function M(){U(),A.reset(),E.reset()}function U(){clearInterval(t),t=void 0,P=!1,L=!1}function k(n){var r;W()?(O=I(),g=R(m.target)):z(n),r=h[e],$(q(Date.now()))||(t=setInterval(_,r),P=!0,L=!1)}function I(){return q(Date.now())-E.secondTenths*h[u]*o}function _(){var t,e=q(Date.now());(t=B())[u]&&K("secondTenthsUpdated",x),t[c]&&K("secondsUpdated",x),t[a]&&K("minutesUpdated",x),t[f]&&K("hoursUpdated",x),t[d]&&K("daysUpdated",x),y(x.detail.timer),$(e)&&(G(),K("targetAchieved",x))}function B(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q(Date.now()),e=o>0?t-O:O-t,n={};return n[u]=D(e,u),n[c]=function(t){return D(t,c)}(e),n[a]=function(t){return D(t,a)}(e),n[f]=function(t){return D(t,f)}(e),n[d]=function(t){return D(t,d)}(e),n}function q(t){return Math.floor(t/h[e])*h[e]}function $(t){return g instanceof Array&&t>=j}function z(t){var n;e=function(t){if(e=t="string"==typeof t?t:c,!(l.indexOf(e)>=0))throw new Error("Error in precision parameter: ".concat(t," is not a valid value"));var e;return t}((t=t||{}).precision),y="function"==typeof t.callback?t.callback:function(){},w=!0===t.countdown,o=!0===w?-1:1,"object"===r(t.startValues)?(n=t.startValues,b=C(n),A.secondTenths=b[0],A.seconds=b[1],A.minutes=b[2],A.hours=b[3],A.days=b[4],E=F(b,E)):b=null,O=I(),B(),"object"===r(t.target)?g=R(t.target):w?(t.target={seconds:0},g=R(t.target)):g=null,V={precision:e,callback:y,countdown:"object"===r(t)&&!0===t.countdown,target:g,startValues:b},m=t}function C(t){var e;if("object"===r(t))if(t instanceof Array){if(5!==t.length)throw new Error("Array size not valid");e=t}else{for(var n in t)if(l.indexOf(n)<0)throw new Error("Error in startValues or target parameter: ".concat(n," is not a valid input value"));e=[t.secondTenths||0,t.seconds||0,t.minutes||0,t.hours||0,t.days||0]}e=e.map((function(t){return parseInt(t,10)}));var o=e[0],s=e[1]+N(o,10),i=e[2]+N(s,60),u=e[3]+N(i,60),c=e[4]+N(u,24);return e[0]=o%10,e[1]=s%60,e[2]=i%60,e[3]=u%24,e[4]=c,e}function N(t,e){var n=t/e;return n<0?Math.ceil(n):Math.floor(n)}function R(t){if(t){var e=F(g=C(t));return j=O+e.secondTenths*h[u]*o,g}}function F(t,e){var n=e||{};return n.days=t[4],n.hours=24*n.days+t[3],n.minutes=60*n.hours+t[2],n.seconds=60*n.minutes+t[1],n.secondTenths=10*n.seconds+t[[0]],n}function G(){M(),K("stopped",x)}function H(t,e){S.on(t,e)}function J(t,e){S.removeListener(t,e)}function K(t,e){S.emit(t,e)}function Q(){return P}function W(){return L}z(T),void 0!==this&&(this.start=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=n(n({},T),t),Q()||(k(t),K("started",x))},this.pause=function(){U(),L=!0,K("paused",x)},this.stop=G,this.reset=function(){M(),k(m),K("reset",x)},this.isRunning=Q,this.isPaused=W,this.getTimeValues=function(){return A},this.getTotalTimeValues=function(){return E},this.getConfig=function(){return V},this.addEventListener=H,this.on=H,this.removeEventListener=J,this.removeAllEventListeners=function(t){S.removeAllListeners(t)},this.off=J)}t.Timer=y,t.default=y,Object.defineProperty(t,"__esModule",{value:!0})}(e)}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}(()=>{"use strict";const t=n(649);document.getElementById("hoursglass");const e=document.querySelector(".hourglass");let r;function o(){const n=t.default.getTimeValues();!function(t){const n=100-t;e.style.borderBottom=`${n}px solid white`}((60*n.minutes+n.seconds)/(r/1e3)*100)}document.getElementById("pauseTimer").addEventListener("click",(function(){})),function(){r=1e3*(60*t.default.getTimeValues().minutes+t.default.getTimeValues().seconds);const e=r/1e3,n=document.querySelector(".hourglass");n&&(n.style.animationDuration=`${e}s`),t.default.start({countdown:!0,startValues:{seconds:r/1e3},target:{seconds:0}}),t.default.addEventListener("secondsUpdated",o),t.default.addEventListener("targetAchieved",(()=>{}))}()})()})();