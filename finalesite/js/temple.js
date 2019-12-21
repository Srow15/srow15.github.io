const requestURL = 'https://srow15.github.io/temples.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
    for (let i = 0; i < temples.length; i++ ) {
        let info = document.createElement('section');
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

info.appendChild(h2);
info.appendChild(img);
info.appendChild(h31);
info.appendChild(p1);
info.appendChild(h32);
info.appendChild(p2);
info.appendChild(h33);
info.appendChild(p3);
info.appendChild(h34);
info.appendChild(p4);
info.appendChild(h35);
info.appendChild(p5);
info.appendChild(h36);
info.appendChild(p6);
info.appendChild(h37);
info.appendChild(p7);
info.appendChild(h38);
info.appendChild(p8);
info.appendChild(h39);
info.appendChild(p9);
info.appendChild(h310);
info.appendChild(p10);

document.querySelector('div.info').appendChild(info);

    }

  });