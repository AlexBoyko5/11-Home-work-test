import{i as l,S as d}from"./assets/vendor-7659544d.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c=document.getElementById("loader");function u(s){s.preventDefault(),c.style.display="block";const n="42334631-07f239856d3b6a49db441bfb9",o=document.getElementById("searchRequest").value.trim();//! проверка на наличие только пробелов или пустой строки
if(o==="")return l.warning({title:"Warning",message:"Please enter a search query."}),!1;const i=new URLSearchParams({key:n,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?key=${n}&q=${encodeURIComponent(o)}${i}`).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>{const t=document.getElementById("gallery");if(t.innerHTML="",e.hits.length===0)l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"});else{const a=e.hits.map(r=>`<a href="${r.largeImageURL}">
<img src="${r.previewURL}" alt="${r.tags}">
<div class="image-caption">
<span>Likes: ${r.likes}</span>
<span>Views: ${r.views}</span>
<span>Comments: ${r.comments}</span>
<span>Downloads: ${r.downloads}</span>
</div>
                    </a>`).join("");t.innerHTML=a,new d(".gallery a")}c.style.display="none"}).catch(e=>{console.error("Error fetching images:",e),l.error({title:"Error",message:"Failed to fetch images. Please try again later."}),c.style.display="none"}),s.currentTarget.reset();//!очистка поля ввода
return!1}const m=document.getElementById("searchForm");m.addEventListener("submit",u);function f(){const s=document.getElementById("gallery");s.innerHTML=""}f();
//# sourceMappingURL=commonHelpers.js.map
