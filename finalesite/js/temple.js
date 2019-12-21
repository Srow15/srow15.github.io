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
let h34 = document.createElement('h3');
let h35 = document.createElement('h3');
let h36 = document.createElement('h3');
let h37 = document.createElement('h3');
let h38 = document.createElement('h3');
let h39 = document.createElement('h3');
let h310 = document.createElement('h3');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');
let p4 = document.createElement('p');
let p5 = document.createElement('p');
let p6 = document.createElement('p');
let p7 = document.createElement('p');
let p8 = document.createElement('p');
let p9 = document.createElement('p');
let p10 = document.createElement('p');
let img = document.createElement('img');

h2.textContent = temples[i].name;
h31.textContent = 'Address';
p1.textContent = temples[i].address;
h32.textContent = 'Telephone';
p2.textContent = temples[i].telephone;
h33.textContent = 'Email';
p3.textContent = temples[i].email;
h34.textContent = 'Services';
p4.textContent = temples[i].services;
h35.textContent = 'History';
p5.textContent = temples[i].history;
h36.textContent = 'Endownment Schedule';
p6.textContent = temples[i].sessions;
h37.textContent = 'Inititory Schedule';
p7.textContent = temples[i].initiatory;
h38.textContent = 'Sealings Schedule';
p8.textContent = temples[i].sealings;
h39.textContent = 'Baptistry Schedule';
p9.textContent = temples[i].baptisims;
h310.textContent = 'Closures';
p10.textContent = temples[i].closures;

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
card.appendChild(h34);
card.appendChild(p4);
card.appendChild(h35);
card.appendChild(p5);
card.appendChild(h36);
card.appendChild(p6);
card.appendChild(h37);
card.appendChild(p7);
card.appendChild(h38);
card.appendChild(p8);
card.appendChild(h39);
card.appendChild(p9);
card.appendChild(h310);
card.appendChild(p10);

document.querySelector('div.cards').appendChild(card);

    }

  });