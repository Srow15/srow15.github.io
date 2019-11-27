let page = document.getElementById('page').innerHTML
let townID = ""
switch (page) {
    case "Preston":
        townID = "5604473";
        break;

    case "Soda Springs":
        townID = "5607916"
        break;

    case "Fish Haven":
        townID = "5585010"
        break;

    default:
        console.log("Error")
        break;
}

const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?id=" + townID + "&units=imperial&APPID=ded5590f5d505bff36ebae4bc57bc495";
fetch(weatherAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);

        document.getElementById('weather').textContent = jsObject.id.main;
        document.getElementById('high').textContent = jsObject.main.temp;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('speed').textContent = jsObject.wind.speed;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        document.getElementById('weather').textContent = desc;

    });

const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=" + townID + "&units=imperial&APPID=ded5590f5d505bff36ebae4bc57bc495";
fetch(forecastAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);


        let count = 0
        let info = document.getElementById('info' + count);
        let name = document.getElementById('day' + count);
        for (i = 0; i < jsObject.list.length; i++) {
            if (jsObject.list[i].dt_txt.includes('18:00:00')) {

                let text = document.createElement('p')
                text.innerHTML = jsObject.list[i].main.temp + " &#176;F";

                let icon = jsObject.list[i].weather[0].icon;
                let image = document.createElement('img');
                let desc = jsObject.list[i].weather[0].description
                image.setAttribute('src', "https://openweathermap.org/img/wn/" + icon + ".png");
                image.setAttribute('alt', desc);

                info[i].appendChild(image);
                info[i].appendChild(text);

                let day = new Date(jsObject.list[i].dt_txt.substring(0, 11));
                day = day.getDay();
                name[i].innerHTML = daynames[day];
                count++
            }
        }
    });;