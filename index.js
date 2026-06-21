import{a as d,S as w,i as g}from"./assets/vendor-CIF6YjI2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const S="56186699-b79b9418fe736184280ccca48",y=15;d.defaults.baseURL="https://pixabay.com/api/";d.defaults.params={key:S,image_type:"photo",orientation:"horizontal",safesearch:!0};async function P(e,r=1,n=y){try{return(await d.get("/",{params:{q:e,page:r,per_page:n}})).data}catch(a){throw console.error("Error fetching images:",a),a}}async function E(e,r=1){return await P(e,r)}let s;function h(){return s||(s=A()),s}function q(e){h();const r=document.querySelector(".gallery"),n=M(e);r.insertAdjacentHTML("beforeend",n),s.refresh()}function M(e){return e.map(({webformatURL:r,largeImageURL:n,tags:a,likes:t,comments:o,views:l,downloads:L})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img class="gallery-image" src="${r}" alt="${a}" loading="lazy" />
          </a>
          <ul class="gallery-info">
            <li class="gallery-info-item">
              <b>Likes</b> ${t}
            </li>
            <li class="gallery-info-item">
              <b>Views</b> ${l}
            </li>
            <li class="gallery-info-item">
              <b>Comments</b> ${o}
            </li>
            <li class="gallery-info-item">
              <b>Downloads</b> ${L}
            </li>
          </ul>
        </li>
      `).join("")}function v(){h();const e=document.querySelector(".gallery");e.innerHTML=""}function A(){return new w(".gallery a",{captionsData:"alt",captionDelay:250})}function p(){document.body.classList.add("loading")}function I(){document.body.classList.remove("loading")}function B(){const e=document.querySelector(".gallery"),r=document.querySelector(".load-more-button");r.disabled=!1,e.classList.add("show-load-more")}function O(){const e=document.querySelector(".gallery"),r=document.querySelector(".load-more-button");r.disabled=!0,e.classList.remove("show-load-more")}const x="Sorry, there are no images matching your search query. Please try again!",C=3e3,T=document.querySelector(".form"),_=document.querySelector(".load-more-button");let i,c=[],m,u;const $={timeout:C,position:"topRight",layout:2,progressBar:!1,transitionIn:"fadeIn"},f={...$,message:x,iconUrl:"img/error-icon.svg",messageColor:"#fff",backgroundColor:"#fd4b3f"};T.addEventListener("submit",async e=>{e.preventDefault(),i=1,u=e.target.elements["search-text"].value.trim(),u&&(v(),p(),await b())});_.addEventListener("click",async()=>{i++,p(),await b(),R()});async function b(){O();try{const e=await E(u,i);if(c=e.hits,m=e.totalHits,c.length===0){g.error(f);return}i*y>=m||B(),q(c);const n=document.querySelectorAll(".gallery-item img");await Promise.all([...n].map(a=>a.complete?Promise.resolve():new Promise(t=>{a.addEventListener("load",t,{once:!0}),a.addEventListener("error",t,{once:!0})})))}catch(e){g.error({...f,message:"An error occurred while fetching images. Please try again later."}),console.error("Error:",e)}finally{I()}}function R(){const e=document.querySelector(".gallery-item");if(e){const{height:r}=e.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}console.log("Scrolled down the page")}
//# sourceMappingURL=index.js.map
