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
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let img = document.createElement('img');

h2.textContent = temples[i].name;
p1.textContent = temples[i].birthdate;
p2.textContent = temples[i].birthplace;
img.setAttribute('src', temples[i].imageurl);
img.setAttribute('alt', temples[i].name + ' ' + temples[i].lastname + '-' + temples[i].order);

card.appendChild(h2);
card.appendChild(p1);
card.appendChild(p2);
card.appendChild(img);

document.querySelector('div.cards').appendChild(card);

    }

  });