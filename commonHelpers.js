/* empty css                      */import{f as h,i as p}from"./assets/vendor-77e16229.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d=document.querySelector("#datetime-picker"),s=document.querySelector("[data-start]"),b=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),v=document.querySelector("[data-seconds]");s.setAttribute("disabled","");let u,f;const L={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){const r=o[0];r<=new Date?(p.error({title:"Error",message:"Please choose a date in the future"}),s.disabled=!0):(f=r,s.disabled=!1)}};h(d,L);s.addEventListener("click",()=>{s.disabled=!0,s.classList.remove("this-date"),d.disabled=!0,q()});function q(){u=setInterval(()=>{const r=f-new Date;if(r<=0){clearInterval(u),l(0,0,0,0),d.disabled=!1,s.disabled=!1;return}const{days:i,hours:n,minutes:e,seconds:t}=w(r);l(i,n,e,t)},1e3)}function w(o){const t=Math.floor(o/864e5),c=Math.floor(o%864e5/36e5),m=Math.floor(o%864e5%36e5/6e4),y=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:c,minutes:m,seconds:y}}function l(o,r,i,n){b.textContent=a(o),g.textContent=a(r),S.textContent=a(i),v.textContent=a(n)}function a(o){return String(o).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map