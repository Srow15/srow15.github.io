function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

const requestURL = 'https://srow15.github.io/finalsite/temples.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
    for (let i = 0; i < temoles.length; i++ ) {
        let card = document.createElement('section');
let h2 = document.createElement('h2');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let img = document.createElement('img');

h2.textContent = temples[i].name;
p1.textContent = temples[i].address;
p2.textContent = prophets[i].telephone;


temple.appendChild(h2);
temple.appendChild(p1);
temple.appendChild(p2);


document.querySelector('div.temple').appendChild(card);

    }

  });
