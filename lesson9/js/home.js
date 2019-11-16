const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');

            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent = towns[i].name;
            h3.textContent = towns[i].motto;
            founded.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
            population.textContent = 'Population' + ' ' + towns[i].currentPopulation;
            rainfall.textContent = 'Annual Rain Fall' + ' ' + towns[i].averageRainfall;
            img.setAttribute('src', towns[i].photo);
            img.setAttribute('alt', towns[i].name);


            card.appendChild(h2);
            card.appendChild(h3);
            card.appendChild(founded);
            card.appendChild(population);
            card.appendChild(rainfall);
            card.appendChild(img);

            document.querySelector('div.homepage').appendChild(card);

        }

    });

