(()=>{const e=document.getElementById("time-number");document.querySelector(".increase-time").addEventListener("click",(function(){let t=parseInt(e.textContent);t<60&&(t+=5,e.textContent=`${t}`)})),document.querySelector(".decrease-time").addEventListener("click",(function(){let t=parseInt(e.textContent);t>5&&(t-=5,e.textContent=`${t}`)}))})();