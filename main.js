import '/style.css';

document.querySelector('#app').innerHTML = `
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
`;

const content = document.getElementById('content');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  fetchApi();
});

export async function fetchApi() {
  await fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      renderCharacter(data);
    });
}

function renderCharacter(data) {
  content.innerHTML = '';
  let div = document.createElement('div');

  for (let i = 0; i < data.results.length; i++) {
    div.innerHTML = `<img src="${data.results[i].picture.large}"><br>${data.results[i].name.title} ${data.results[i].name.first} ${data.results[i].name.last}<br />
    ${data.results[i].dob.age} years old<br />${data.results[i].gender}<br />${data.results[i].location.city}, ${data.results[i].location.country}</p>`;
  }

  content.appendChild(div);
}
