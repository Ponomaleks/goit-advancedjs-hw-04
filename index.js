import{a as s,S as c,i as u}from"./assets/vendor-CIF6YjI2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const f="56186699-b79b9418fe736184280ccca48";s.defaults.baseURL="https://pixabay.com/api/";s.defaults.params={key:f,image_type:"photo",orientation:"horizontal",safesearch:!0};function g(r,o=1,a=12){return s.get("/",{params:{q:r,page:o,per_page:a}}).then(i=>i.data.hits).catch(i=>{throw console.error("Error fetching images:",i),i})}function m(r){return g(r)}function d(r){const o=document.querySelector(".gallery"),a=y(r);o.insertAdjacentHTML("beforeend",a)}function y(r){return r.map(({webformatURL:o,largeImageURL:a,tags:i,likes:e,comments:t,views:n,downloads:l})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img class="gallery-image" src="${o}" alt="${i}" loading="lazy" />
          </a>
          <ul class="gallery-info">
            <li class="gallery-info-item">
              <b>Likes</b> ${e}
            </li>
            <li class="gallery-info-item">
              <b>Views</b> ${n}
            </li>
            <li class="gallery-info-item">
              <b>Comments</b> ${t}
            </li>
            <li class="gallery-info-item">
              <b>Downloads</b> ${l}
            </li>
          </ul>
        </li>
      `).join("")}function p(){const r=document.querySelector(".gallery");r.innerHTML=""}function h(){return new c(".gallery a",{captionsData:"alt",captionDelay:250})}function b(){document.body.classList.add("loading")}function L(){document.body.classList.remove("loading")}const E="Sorry, there are no images matching your search query. Please try again!",O=3e3,S=document.querySelector(".form"),I={timeout:O,position:"topRight",layout:2,progressBar:!1,transitionIn:"fadeIn"},M={...I,message:E,iconUrl:"img/error-icon.svg",messageColor:"#fff",backgroundColor:"#fd4b3f"},P=h();S.addEventListener("submit",r=>{r.preventDefault();const o=r.target.elements["search-text"].value.trim();o&&(p(),b(),m(o).then(a=>{if(a.length===0){u.error(M);return}d(a),P.refresh()}).catch(a=>{console.error("Error:",a)}).finally(()=>{L()}))});
//# sourceMappingURL=index.js.map
