import{i as l,S as c}from"./assets/vendor-7659544d.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function u(s){s.preventDefault();const n="42334631-07f239856d3b6a49db441bfb9",o=document.getElementById("searchRequest").value.trim();//! проверка на наличие только пробелов или пустой строки
if(o==="")return l.warning({title:"Warning",message:"Please enter a search query."}),!1;const i=new URLSearchParams({key:n,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?key=${n}&q=${encodeURIComponent(o)}${i}`).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>{const r=document.getElementById("gallery");if(r.innerHTML="",e.hits.length===0)l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"});else{const a=e.hits.map(t=>`<a href="${t.largeImageURL}">
<img src="${t.previewURL}" alt="${t.tags}">
<div class="image-info">
<span>Likes: ${t.likes}</span>
<span>Views: ${t.views}</span>
<span>Comments: ${t.comments}</span>
<span>Downloads: ${t.downloads}</span>
</div>
                    </a>`).join("");r.innerHTML=a,new c(".gallery a")}}).catch(e=>{console.error("Error fetching images:",e),l.error({title:"Error",message:"Failed to fetch images. Please try again later."})}),s.currentTarget.reset();//!очистка поля ввода
return!1}const f=document.getElementById("searchForm");f.addEventListener("submit",u);function m(){const s=document.getElementById("gallery");s.innerHTML=""}m();
//# sourceMappingURL=commonHelpers.js.map
