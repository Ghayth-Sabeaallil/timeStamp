(()=>{var e={649:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hideBreak=t.showBreak=t.showAlarm=t.showSetTimer=t.showDigital=t.showAnalog=void 0;const r=n(543),o=n(37);function i(){d(),m(),c(),document.querySelector(".analog-main").style.display="flex"}function s(){d(),m(),f(),c(),document.querySelector(".digital-main").style.display="flex"}function u(){let e=document.querySelector(".break-view");e.style.display="none","clock"==e.id&&(i(),(0,o.noPause)()),"basicUsage"==e.id&&(s(),(0,o.noPause)())}function c(){document.querySelector(".header").style.display="flex"}function a(){document.querySelector(".header").style.display="none"}function l(){d(),f(),y(),a(),document.querySelector(".alarm-view").style.display="none",u(),document.querySelector(".set-timer-vy").style.display="flex"}function d(){document.querySelector(".timer-options").style.display="none"}function f(){document.querySelector(".analog-main").style.display="none"}function y(){document.querySelector(".digital-main").style.display="none"}function m(){document.querySelector(".set-timer-vy").style.display="none",document.querySelector("#logo").addEventListener("click",h)}function h(){let e=document.querySelector(".loading-vy");document.querySelector(".header").style.display="none",e.style.display="none",l()}t.default=r.default,t.showAnalog=i,t.showDigital=s,t.showAlarm=function(){d(),m(),f(),a(),y(),document.querySelector(".alarm-view").style.display="flex"},t.hideBreak=u,t.showBreak=function(e){d(),m(),f(),a(),y();let t=document.querySelector(".break-view");t.setAttribute("id",e),t.style.display="flex"},t.showSetTimer=l,m()},37:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.noPause=void 0;const r=n(649),o=n(649),i=new r.default;document.querySelector(".clock").addEventListener("click",y),document.querySelector(".digital-main").addEventListener("click",y),document.querySelector("#noPause").addEventListener("click",o.hideBreak);const s=document.getElementById("time-number");let u=parseInt(s.textContent);document.querySelector(".increase-time").addEventListener("click",(function(){u=parseInt(s.textContent),u<60&&(u+=5,s.textContent=`${u}`)})),document.querySelector(".decrease-time").addEventListener("click",(function(){u=parseInt(s.textContent),u>5&&(u-=5,s.textContent=`${u}`)})),document.querySelector(".start-button").addEventListener("click",(function(){i.removeAllEventListeners(),i.start({countdown:!0,startValues:{minutes:u},target:{seconds:0}}),(0,r.showAnalog)(),i.addEventListener("secondsUpdated",(function(){const e=i.getTimeValues();var t;document.querySelector(".digital").innerHTML=`${e.minutes}:${e.seconds}`,document.querySelector("#time").innerHTML=`${e.minutes}:${e.seconds}`,t=e.seconds,c.style.transform=`rotate(${l}deg)`,l+=6,0==t&&(a.style.transform=`rotate(${d}deg)`,d+=6)})),i.addEventListener("targetAchieved",(function(e){(0,o.showAlarm)()}))}));let c=document.querySelector(".sec"),a=document.querySelector(".min"),l=6,d=6;function f(){i.stop(),c.style.transform="rotate(0deg)",a.style.transform="rotate(0deg)",l=6,(0,o.showSetTimer)()}function y(e){i.pause(),(0,r.showBreak)(e.target.id)}document.querySelector("#analogBtn").addEventListener("click",f),document.querySelector("#digitalBtn").addEventListener("click",f),document.querySelector("#setNewTimer").addEventListener("click",f),document.querySelector(".pauseBtn").addEventListener("click",y),t.noPause=function(){i.start()}},543:function(e,t){!function(e){"use strict";function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){var n,o,i;n=e,o=t,i=r[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t,n){var r,o="";if((e="number"==typeof e?String(e):e).length>t)return e;for(r=0;r<t;r+=1)o+=String(n);return(o+e).slice(-o.length)}function i(){this.reset()}function s(){this.events={}}i.prototype.toString=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["hours","minutes","seconds"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;e=e||["hours","minutes","seconds"],t=t||":",n=n||2;var r,i=[];for(r=0;r<e.length;r+=1)void 0!==this[e[r]]&&("secondTenths"===e[r]?i.push(this[e[r]]):i.push(o(this[e[r]],n,"0")));return i.join(t)},i.prototype.reset=function(){this.secondTenths=0,this.seconds=0,this.minutes=0,this.hours=0,this.days=0},s.prototype.on=function(e,t){var n=this;return Array.isArray(this.events[e])||(this.events[e]=[]),this.events[e].push(t),function(){return n.removeListener(e,t)}},s.prototype.removeListener=function(e,t){if(Array.isArray(this.events[e])){var n=this.events[e].indexOf(t);n>-1&&this.events[e].splice(n,1)}},s.prototype.removeAllListeners=function(e){e?Array.isArray(this.events[e])&&(this.events[e]=[]):this.events={}},s.prototype.emit=function(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];Array.isArray(this.events[e])&&this.events[e].forEach((function(e){return e.apply(t,r)}))};var u="secondTenths",c="seconds",a="minutes",l="hours",d="days",f=[u,c,a,l,d],y={secondTenths:100,seconds:1e3,minutes:6e4,hours:36e5,days:864e5},m={secondTenths:10,seconds:60,minutes:60,hours:24};function h(e,t){return(e%t+t)%t}function v(){var e,t,o,v,p,g,b,w,S,q,E=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},k=new i,A=new i,L=new s,O=!1,T=!1,j={},P={detail:{timer:this}};function x(e,t){var n=A[t];return function(e,t){var n=m[e];A[e]=t,k[e]=e===d?Math.abs(t):h(t>=0?t:n-h(t,n),n)}(t,N(e,y[t])),A[t]!==n}function B(){D(),k.reset(),A.reset()}function D(){clearInterval(e),e=void 0,O=!1,T=!1}function M(n){var r;W()?(S=V(),g=z(p.target)):_(n),r=y[t],C(U(Date.now()))||(e=setInterval($,r),O=!0,T=!1)}function V(){return U(Date.now())-A.secondTenths*y[u]*o}function $(){var e,t=U(Date.now());(e=I())[u]&&K("secondTenthsUpdated",P),e[c]&&K("secondsUpdated",P),e[a]&&K("minutesUpdated",P),e[l]&&K("hoursUpdated",P),e[d]&&K("daysUpdated",P),v(P.detail.timer),C(t)&&(F(),K("targetAchieved",P))}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U(Date.now()),t=o>0?e-S:S-e,n={};return n[u]=x(t,u),n[c]=function(e){return x(e,c)}(t),n[a]=function(e){return x(e,a)}(t),n[l]=function(e){return x(e,l)}(t),n[d]=function(e){return x(e,d)}(t),n}function U(e){return Math.floor(e/y[t])*y[t]}function C(e){return g instanceof Array&&e>=q}function _(e){var n;t=function(e){if(t=e="string"==typeof e?e:c,!(f.indexOf(t)>=0))throw new Error("Error in precision parameter: ".concat(e," is not a valid value"));var t;return e}((e=e||{}).precision),v="function"==typeof e.callback?e.callback:function(){},w=!0===e.countdown,o=!0===w?-1:1,"object"===r(e.startValues)?(n=e.startValues,b=H(n),k.secondTenths=b[0],k.seconds=b[1],k.minutes=b[2],k.hours=b[3],k.days=b[4],A=R(b,A)):b=null,S=V(),I(),"object"===r(e.target)?g=z(e.target):w?(e.target={seconds:0},g=z(e.target)):g=null,j={precision:t,callback:v,countdown:"object"===r(e)&&!0===e.countdown,target:g,startValues:b},p=e}function H(e){var t;if("object"===r(e))if(e instanceof Array){if(5!==e.length)throw new Error("Array size not valid");t=e}else{for(var n in e)if(f.indexOf(n)<0)throw new Error("Error in startValues or target parameter: ".concat(n," is not a valid input value"));t=[e.secondTenths||0,e.seconds||0,e.minutes||0,e.hours||0,e.days||0]}t=t.map((function(e){return parseInt(e,10)}));var o=t[0],i=t[1]+N(o,10),s=t[2]+N(i,60),u=t[3]+N(s,60),c=t[4]+N(u,24);return t[0]=o%10,t[1]=i%60,t[2]=s%60,t[3]=u%24,t[4]=c,t}function N(e,t){var n=e/t;return n<0?Math.ceil(n):Math.floor(n)}function z(e){if(e){var t=R(g=H(e));return q=S+t.secondTenths*y[u]*o,g}}function R(e,t){var n=t||{};return n.days=e[4],n.hours=24*n.days+e[3],n.minutes=60*n.hours+e[2],n.seconds=60*n.minutes+e[1],n.secondTenths=10*n.seconds+e[[0]],n}function F(){B(),K("stopped",P)}function G(e,t){L.on(e,t)}function J(e,t){L.removeListener(e,t)}function K(e,t){L.emit(e,t)}function Q(){return O}function W(){return T}_(E),void 0!==this&&(this.start=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e=n(n({},E),e),Q()||(M(e),K("started",P))},this.pause=function(){D(),T=!0,K("paused",P)},this.stop=F,this.reset=function(){B(),M(p),K("reset",P)},this.isRunning=Q,this.isPaused=W,this.getTimeValues=function(){return k},this.getTotalTimeValues=function(){return A},this.getConfig=function(){return j},this.addEventListener=G,this.on=G,this.removeEventListener=J,this.removeAllEventListeners=function(e){L.removeAllListeners(e)},this.off=J)}e.Timer=v,e.default=v,Object.defineProperty(e,"__esModule",{value:!0})}(t)}},t={};!function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}(37)})();