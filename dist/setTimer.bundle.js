(()=>{"use strict";(()=>{const e=document.getElementById("time-number"),t=document.querySelector(".increase-time"),n=document.querySelector(".decrease-time");t.addEventListener("click",(function(){let t=parseInt(e.textContent);t<60&&(t+=5,e.textContent=`${t}`)})),n.addEventListener("click",(function(){let t=parseInt(e.textContent);t>5&&(t-=5,e.textContent=`${t}`)}))})()})();