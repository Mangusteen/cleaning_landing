(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i=document.querySelector(".header__burger"),m=document.querySelector(".header__menu"),f=document.body;i.addEventListener("click",function(r){i.classList.toggle("active"),m.classList.toggle("active"),f.classList.toggle("lock")});const a=document.querySelector("#back-to-top");window.addEventListener("scroll",function(r){window.scrollY>300?a.style.display="block":a.style.display="none"});let u=localStorage.getItem("darkMode");const g=document.querySelector("#dark-mode-toggle"),y=()=>{document.body.classList.add("darkmode"),localStorage.setItem("darkMode","enabled")},p=()=>{document.body.classList.remove("darkmode"),localStorage.setItem("darkMode",null)};g.addEventListener("click",function(){u=localStorage.getItem("darkMode"),u!=="enabled"?(y(),document.querySelector(".dark-mode-moon").style.display="flex",document.querySelector(".dark-mode-sun").style.display="none"):(p(),document.querySelector(".dark-mode-moon").style.display="none",document.querySelector(".dark-mode-sun").style.display="flex")});const s=document.querySelectorAll(".animated-items");if(s.length>0){let r=function(){for(let n=0;n<s.length;n++){const o=s[n],e=o.offsetHeight,t=l(o).top,d=4;let c=window.innerHeight-e/d;e>window.innerHeight&&(c=window.innerHeight-window.innerHeight/d),scrollY>t-c&&scrollY<t+e?o.classList.add("active"):o.classList.contains("animated-no-hide")||o.classList.remove("active")}},l=function(n){const o=n.getBoundingClientRect(),e=window.scrollX||document.documentElement.scrollLeft,t=window.scrollY||document.documentElement.scrollTop;return{top:o.top+t,left:o.left+e}};var h=r,w=l;window.addEventListener("scroll",r),setTimeout(()=>{r()},300)}
