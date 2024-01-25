(()=>{var e={45:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.analogTimerElement=void 0;const r=n(990),o=n(256);let i=document.querySelector(".sec"),s=document.querySelector(".min"),u=(document.querySelector(".abrot-timer"),0),c=6;t.analogTimerElement=document.querySelector(".analog-main");const a=document.querySelector(".clock");null==a||a.addEventListener("click",(function(){(0,r.switchScene)(t.analogTimerElement,o.breakViewElement),"paused"==i.style.animationPlayState?i.style.animationPlayState="running":i.style.animationPlayState="paused"})),i.style.animation="secondsMotion 3s infinite linear",i.style.animationIterationCount=10..toString()+1,i.addEventListener("animationiteration",(()=>{s.style.transform=`rotate(${c}deg)`,c+=6,u++,10===u&&(i.style.animationPlayState="paused")}))},256:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.breakViewElement=void 0;const r=n(649),o=n(45),i=n(990),s=document.getElementById("noPause"),u=document.getElementById("time");function c(e){return"0"!=e}t.breakViewElement=document.querySelector(".break-view"),s.addEventListener("click",(function(){(0,i.switchScene)(t.breakViewElement,o.analogTimerElement)})),function(){let e=r.default.getTimeValues().minutes.toString(),t=r.default.getTimeValues().seconds.toString();u.textContent="",c(e)&&(u.textContent=e,c(t)&&(u.textContent+=".")),c(t)&&(u.textContent+=t),function(e,t){c(e)?"1"!==e||c(t)?u.textContent+=" minutes":u.textContent+=" minute":u.textContent+=" seconds"}(e,t)}()},649:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=new(n(543).default);t.default=r},37:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setTimerElement=void 0;const r=n(649),o=n(990),i=n(45),s=document.getElementById("time-number");t.setTimerElement=document.querySelector(".set-timer-vy"),console.log(t.setTimerElement);let u=parseInt(s.textContent||"0");document.querySelector(".increase-time").addEventListener("click",(function(){u=parseInt(s.textContent||"0"),u<60&&(u+=5,s.textContent=`${u}`)})),document.querySelector(".decrease-time").addEventListener("click",(function(){u=parseInt(s.textContent||"0"),u>5&&(u-=5,s.textContent=`${u}`)})),document.querySelector(".start-button").addEventListener("click",(function(){r.default.start({countdown:!0,startValues:{minutes:u},target:{seconds:0}}),(0,o.switchScene)(t.setTimerElement,i.analogTimerElement)}))},990:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.switchScene=void 0,t.switchScene=function(e,t){e.classList.add("hide"),t.classList.remove("hide")}},543:function(e,t){!function(e){"use strict";function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){var n,o,i;n=e,o=t,i=r[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t,n){var r,o="";if((e="number"==typeof e?String(e):e).length>t)return e;for(r=0;r<t;r+=1)o+=String(n);return(o+e).slice(-o.length)}function i(){this.reset()}function s(){this.events={}}i.prototype.toString=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["hours","minutes","seconds"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;e=e||["hours","minutes","seconds"],t=t||":",n=n||2;var r,i=[];for(r=0;r<e.length;r+=1)void 0!==this[e[r]]&&("secondTenths"===e[r]?i.push(this[e[r]]):i.push(o(this[e[r]],n,"0")));return i.join(t)},i.prototype.reset=function(){this.secondTenths=0,this.seconds=0,this.minutes=0,this.hours=0,this.days=0},s.prototype.on=function(e,t){var n=this;return Array.isArray(this.events[e])||(this.events[e]=[]),this.events[e].push(t),function(){return n.removeListener(e,t)}},s.prototype.removeListener=function(e,t){if(Array.isArray(this.events[e])){var n=this.events[e].indexOf(t);n>-1&&this.events[e].splice(n,1)}},s.prototype.removeAllListeners=function(e){e?Array.isArray(this.events[e])&&(this.events[e]=[]):this.events={}},s.prototype.emit=function(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];Array.isArray(this.events[e])&&this.events[e].forEach((function(e){return e.apply(t,r)}))};var u="secondTenths",c="seconds",a="minutes",l="hours",d="days",f=[u,c,a,l,d],m={secondTenths:100,seconds:1e3,minutes:6e4,hours:36e5,days:864e5},v={secondTenths:10,seconds:60,minutes:60,hours:24};function h(e,t){return(e%t+t)%t}function y(){var e,t,o,y,p,g,b,w,S,E,T=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},O=new i,j=new i,P=new s,x=!1,L=!1,k={},A={detail:{timer:this}};function C(e,t){var n=j[t];return function(e,t){var n=v[e];j[e]=t,O[e]=e===d?Math.abs(t):h(t>=0?t:n-h(t,n),n)}(t,N(e,m[t])),j[t]!==n}function V(){_(),O.reset(),j.reset()}function _(){clearInterval(e),e=void 0,x=!1,L=!1}function q(n){var r;W()?(S=M(),g=R(p.target)):$(n),r=m[t],B(U(Date.now()))||(e=setInterval(I,r),x=!0,L=!1)}function M(){return U(Date.now())-j.secondTenths*m[u]*o}function I(){var e,t=U(Date.now());(e=D())[u]&&K("secondTenthsUpdated",A),e[c]&&K("secondsUpdated",A),e[a]&&K("minutesUpdated",A),e[l]&&K("hoursUpdated",A),e[d]&&K("daysUpdated",A),y(A.detail.timer),B(t)&&(G(),K("targetAchieved",A))}function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U(Date.now()),t=o>0?e-S:S-e,n={};return n[u]=C(t,u),n[c]=function(e){return C(e,c)}(t),n[a]=function(e){return C(e,a)}(t),n[l]=function(e){return C(e,l)}(t),n[d]=function(e){return C(e,d)}(t),n}function U(e){return Math.floor(e/m[t])*m[t]}function B(e){return g instanceof Array&&e>=E}function $(e){var n;t=function(e){if(t=e="string"==typeof e?e:c,!(f.indexOf(t)>=0))throw new Error("Error in precision parameter: ".concat(e," is not a valid value"));var t;return e}((e=e||{}).precision),y="function"==typeof e.callback?e.callback:function(){},w=!0===e.countdown,o=!0===w?-1:1,"object"===r(e.startValues)?(n=e.startValues,b=z(n),O.secondTenths=b[0],O.seconds=b[1],O.minutes=b[2],O.hours=b[3],O.days=b[4],j=F(b,j)):b=null,S=M(),D(),"object"===r(e.target)?g=R(e.target):w?(e.target={seconds:0},g=R(e.target)):g=null,k={precision:t,callback:y,countdown:"object"===r(e)&&!0===e.countdown,target:g,startValues:b},p=e}function z(e){var t;if("object"===r(e))if(e instanceof Array){if(5!==e.length)throw new Error("Array size not valid");t=e}else{for(var n in e)if(f.indexOf(n)<0)throw new Error("Error in startValues or target parameter: ".concat(n," is not a valid input value"));t=[e.secondTenths||0,e.seconds||0,e.minutes||0,e.hours||0,e.days||0]}t=t.map((function(e){return parseInt(e,10)}));var o=t[0],i=t[1]+N(o,10),s=t[2]+N(i,60),u=t[3]+N(s,60),c=t[4]+N(u,24);return t[0]=o%10,t[1]=i%60,t[2]=s%60,t[3]=u%24,t[4]=c,t}function N(e,t){var n=e/t;return n<0?Math.ceil(n):Math.floor(n)}function R(e){if(e){var t=F(g=z(e));return E=S+t.secondTenths*m[u]*o,g}}function F(e,t){var n=t||{};return n.days=e[4],n.hours=24*n.days+e[3],n.minutes=60*n.hours+e[2],n.seconds=60*n.minutes+e[1],n.secondTenths=10*n.seconds+e[[0]],n}function G(){V(),K("stopped",A)}function H(e,t){P.on(e,t)}function J(e,t){P.removeListener(e,t)}function K(e,t){P.emit(e,t)}function Q(){return x}function W(){return L}$(T),void 0!==this&&(this.start=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e=n(n({},T),e),Q()||(q(e),K("started",A))},this.pause=function(){_(),L=!0,K("paused",A)},this.stop=G,this.reset=function(){V(),q(p),K("reset",A)},this.isRunning=Q,this.isPaused=W,this.getTimeValues=function(){return O},this.getTotalTimeValues=function(){return j},this.getConfig=function(){return k},this.addEventListener=H,this.on=H,this.removeEventListener=J,this.removeAllEventListeners=function(e){P.removeAllListeners(e)},this.off=J)}e.Timer=y,e.default=y,Object.defineProperty(e,"__esModule",{value:!0})}(t)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}(()=>{"use strict";const e=n(990),t=n(37),r=document.querySelector(".loading-vy");r.addEventListener("click",(()=>{(0,e.switchScene)(r,t.setTimerElement)}))})()})();