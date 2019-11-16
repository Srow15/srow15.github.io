const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {

            let article = document.createElement('article');
            let card = document.createElement('section');
            let h1 = document.createElement('h1');
            let h3 = document.createElement('h3');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let img = document.createElement('img');

            if (towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs" || towns[i].name == "Preston")

            {h1.textContent = towns[i].name;
            h3.textContent = towns[i].motto;
            founded.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
            population.textContent = 'Population:' + ' ' + towns[i].currentPopulation;
            rainfall.textContent = 'Annual Rain Fall:' + ' ' + towns[i].averageRainfall;
            img.setAttribute('src', 'img/' + towns[i].photo);
            img.setAttribute('alt', towns[i].name);
            
            article.appendChild(h1);
            article.appendChild(h3);
            article.appendChild(founded);
            article.appendChild(population);
            article.appendChild(rainfall);
            article.classList.add("info");
            img.classList.add("homeimg")
            card.appendChild(article);
            card.appendChild(img);
            document.querySelector('div.homepage').appendChild(card)

            }
        }


    });