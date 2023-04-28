(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();document.querySelector("#app").innerHTML=`
  <div>
    <h1>Welcome to the randomizer!</h1>
    <div class="card">
    <button id="search-button">Generate</button>
    </div>
    <p class="read-the-docs">
      Click on the button to generate a random person
    </p>
    <div id="content"></div>
  </div>
`;const c=document.getElementById("content"),d=document.getElementById("search-button");d.addEventListener("click",t=>{t.preventDefault(),l()});async function l(){await fetch("https://randomuser.me/api/").then(t=>t.json()).then(t=>{u(t)})}function u(t){c.innerHTML="";let o=document.createElement("div");for(let n=0;n<t.results.length;n++)o.innerHTML=`<img src="${t.results[n].picture.large}"><br><p>Name: ${t.results[n].name.first} ${t.results[n].name.last}</p>`;c.appendChild(o)}
