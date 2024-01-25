(()=>{var t={543:function(t,e){!function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){var n,o,i;n=t,o=e,i=r[e],(o=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e,n){var r,o="";if((t="number"==typeof t?String(t):t).length>e)return t;for(r=0;r<e;r+=1)o+=String(n);return(o+t).slice(-o.length)}function i(){this.reset()}function s(){this.events={}}i.prototype.toString=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["hours","minutes","seconds"],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;t=t||["hours","minutes","seconds"],e=e||":",n=n||2;var r,i=[];for(r=0;r<t.length;r+=1)void 0!==this[t[r]]&&("secondTenths"===t[r]?i.push(this[t[r]]):i.push(o(this[t[r]],n,"0")));return i.join(e)},i.prototype.reset=function(){this.secondTenths=0,this.seconds=0,this.minutes=0,this.hours=0,this.days=0},s.prototype.on=function(t,e){var n=this;return Array.isArray(this.events[t])||(this.events[t]=[]),this.events[t].push(e),function(){return n.removeListener(t,e)}},s.prototype.removeListener=function(t,e){if(Array.isArray(this.events[t])){var n=this.events[t].indexOf(e);n>-1&&this.events[t].splice(n,1)}},s.prototype.removeAllListeners=function(t){t?Array.isArray(this.events[t])&&(this.events[t]=[]):this.events={}},s.prototype.emit=function(t){for(var e=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];Array.isArray(this.events[t])&&this.events[t].forEach((function(t){return t.apply(e,r)}))};var u="secondTenths",c="seconds",a="minutes",f="hours",l="days",d=[u,c,a,f,l],h={secondTenths:100,seconds:1e3,minutes:6e4,hours:36e5,days:864e5},y={secondTenths:10,seconds:60,minutes:60,hours:24};function v(t,e){return(t%e+e)%e}function p(){var t,e,o,p,m,g,b,w,O,S,j=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},A=new i,T=new i,E=new s,P=!1,q=!1,x={},L={detail:{timer:this}};function D(t,e){var n=T[e];return function(t,e){var n=y[t];T[t]=e,A[t]=t===l?Math.abs(e):v(e>=0?e:n-v(e,n),n)}(e,B(t,h[e])),T[e]!==n}function V(){k(),A.reset(),T.reset()}function k(){clearInterval(t),t=void 0,P=!1,q=!1}function M(n){var r;X()?(O=U(),g=F(m.target)):N(n),r=h[e],C(z(Date.now()))||(t=setInterval(I,r),P=!0,q=!1)}function U(){return z(Date.now())-T.secondTenths*h[u]*o}function I(){var t,e=z(Date.now());(t=_())[u]&&Q("secondTenthsUpdated",L),t[c]&&Q("secondsUpdated",L),t[a]&&Q("minutesUpdated",L),t[f]&&Q("hoursUpdated",L),t[l]&&Q("daysUpdated",L),p(L.detail.timer),C(e)&&(H(),Q("targetAchieved",L))}function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z(Date.now()),e=o>0?t-O:O-t,n={};return n[u]=D(e,u),n[c]=function(t){return D(t,c)}(e),n[a]=function(t){return D(t,a)}(e),n[f]=function(t){return D(t,f)}(e),n[l]=function(t){return D(t,l)}(e),n}function z(t){return Math.floor(t/h[e])*h[e]}function C(t){return g instanceof Array&&t>=S}function N(t){var n;e=function(t){if(e=t="string"==typeof t?t:c,!(d.indexOf(e)>=0))throw new Error("Error in precision parameter: ".concat(t," is not a valid value"));var e;return t}((t=t||{}).precision),p="function"==typeof t.callback?t.callback:function(){},w=!0===t.countdown,o=!0===w?-1:1,"object"===r(t.startValues)?(n=t.startValues,b=R(n),A.secondTenths=b[0],A.seconds=b[1],A.minutes=b[2],A.hours=b[3],A.days=b[4],T=G(b,T)):b=null,O=U(),_(),"object"===r(t.target)?g=F(t.target):w?(t.target={seconds:0},g=F(t.target)):g=null,x={precision:e,callback:p,countdown:"object"===r(t)&&!0===t.countdown,target:g,startValues:b},m=t}function R(t){var e;if("object"===r(t))if(t instanceof Array){if(5!==t.length)throw new Error("Array size not valid");e=t}else{for(var n in t)if(d.indexOf(n)<0)throw new Error("Error in startValues or target parameter: ".concat(n," is not a valid input value"));e=[t.secondTenths||0,t.seconds||0,t.minutes||0,t.hours||0,t.days||0]}e=e.map((function(t){return parseInt(t,10)}));var o=e[0],i=e[1]+B(o,10),s=e[2]+B(i,60),u=e[3]+B(s,60),c=e[4]+B(u,24);return e[0]=o%10,e[1]=i%60,e[2]=s%60,e[3]=u%24,e[4]=c,e}function B(t,e){var n=t/e;return n<0?Math.ceil(n):Math.floor(n)}function F(t){if(t){var e=G(g=R(t));return S=O+e.secondTenths*h[u]*o,g}}function G(t,e){var n=e||{};return n.days=t[4],n.hours=24*n.days+t[3],n.minutes=60*n.hours+t[2],n.seconds=60*n.minutes+t[1],n.secondTenths=10*n.seconds+t[[0]],n}function H(){V(),Q("stopped",L)}function J(t,e){E.on(t,e)}function K(t,e){E.removeListener(t,e)}function Q(t,e){E.emit(t,e)}function W(){return P}function X(){return q}N(j),void 0!==this&&(this.start=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=n(n({},j),t),W()||(M(t),Q("started",L))},this.pause=function(){k(),q=!0,Q("paused",L)},this.stop=H,this.reset=function(){V(),M(m),Q("reset",L)},this.isRunning=W,this.isPaused=X,this.getTimeValues=function(){return A},this.getTotalTimeValues=function(){return T},this.getConfig=function(){return x},this.addEventListener=J,this.on=J,this.removeEventListener=K,this.removeAllEventListeners=function(t){E.removeAllListeners(t)},this.off=K)}t.Timer=p,t.default=p,Object.defineProperty(t,"__esModule",{value:!0})}(e)}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}(()=>{"use strict";function t(){document.querySelector(".timer-options").style.display="none",document.querySelector(".analog-main").style.display="none",document.querySelector(".digital-main").style.display="none",document.querySelector(".header").style.display="none",document.querySelector(".set-timer-vy").style.display="flex"}function e(){let e=document.querySelector(".loading-vy");document.querySelector(".header").style.display="none",e.style.display="none",t()}new(n(543).default),document.querySelector(".set-timer-vy").style.display="none",document.querySelector("#logo").addEventListener("click",e)})()})();