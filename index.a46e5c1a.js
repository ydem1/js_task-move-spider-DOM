/* eslint-disable no-console */const e=(e,t)=>e<0?0:e>t?t:e;document.addEventListener("click",t=>{// write code here
let i=t.target.closest(".wall");if(i){let l=document.querySelector(".spider"),o=parseFloat(window.getComputedStyle(i).getPropertyValue("height")),d=parseFloat(window.getComputedStyle(i).getPropertyValue("width")),n=window.innerHeight,r=window.innerWidth,w=t.clientY-(n-o)/2-l.height/2,h=t.clientX-(r-d)/2-l.width/2;l.style.top=`${e(w,o-l.height)}px`,l.style.left=`${e(h,d-l.width)}px`}});//# sourceMappingURL=index.a46e5c1a.js.map

//# sourceMappingURL=index.a46e5c1a.js.map
