const requestURL = 'https://srow15.github.io/temples.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
    for (let i = 0; i < temples.length; i++ ) {
        let card = document.createElement('section');
let h2 = document.createElement('h2');
let h31 = document.createElement('h3');
let h32 = document.createElement('h3');
let h33 = document.createElement('h3');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');
let p4 = document.createElement('p');
let img = document.createElement('img');

h2.textContent = temples[i].name;
h31.textContent = 'Address';
p1.textContent = temples[i].address;
h32.textContent = 'Telephone';
p2.textContent = temples[i].telephone;
h33.textContent = 'Email';
p3.textContent = temples[i].email;
p4.textContent = temples[i].services;
img.setAttribute('src', temples[i].imageurl);
img.setAttribute('alt', temples[i].name);

card.appendChild(h2);
card.appendChild(img);
card.appendChild(h31);
card.appendChild(p1);
card.appendChild(h32);
card.appendChild(p2);
card.appendChild(h33);
card.appendChild(p3);
card.appendChild(p4);

document.querySelector('div.cards').appendChild(card);

    }

  });