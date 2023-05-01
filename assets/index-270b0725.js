(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();document.querySelector("#app").innerHTML=`
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
`;const i=document.getElementById("content"),l=document.getElementById("search-button");l.addEventListener("click",e=>{e.preventDefault(),u()});async function u(){await fetch("https://randomuser.me/api/").then(e=>e.json()).then(e=>{console.log(e),d(e)})}function d(e){i.innerHTML="";let o=document.createElement("div");for(let r=0;r<e.results.length;r++)o.innerHTML=`<img src="${e.results[r].picture.large}"><br>${e.results[r].name.title} ${e.results[r].name.first} ${e.results[r].name.last}<br />
    ${e.results[r].dob.age} years old<br />${e.results[r].gender}<br />${e.results[r].location.city}, ${e.results[r].location.country}</p>`;i.appendChild(o)}
