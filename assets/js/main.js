// On créé les variables que l'on souhaite observer et/ou modifier
let input = document.querySelector("#input");
let name = document.querySelector("#name");
let temperature = document.querySelector("#temperature");
let abscisse = document.querySelector("#abscisse");
let ordonneee = document.querySelector("#ordonneee");
let wallpaperId = document.querySelector("#banner");
let degre = document.querySelector("#degre");
let card = document.querySelector("#cards");
let car = document.querySelector("#card");



//On instancie une fonction Weathercast qui va interroger l'API et récupérer les infos voulues
function weatherCast() {
  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?&exclude=minutely&units=metric&lang=fr&q=" +
      input.value +
      "&appid=16e15173626eeca84da853256d0d3452"
  )
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (value) {
      //On insert les infos dans nos innerHTML
      console.log(value.list);
      name.innerHTML = "Ville sélectionnée : " + value.city.name;
      abscisse.innerHTML = "Latitude : " + value.city.coord.lat;
      ordonnee.innerHTML = "Longitude : " + value.city.coord.lon;
      temperature.innerHTML =
        "Temperature actuelle : " + value.list[0].main.temp;
console.log(value.list[0].weather[0].main);
        // On cible le premier élément du tableau (heure actuelle) et on appelle nos fonctions
      let weather = value.list[0].weather[0].main;
      backgroundWp(weather);
      boucleTemp(value);
      // backgroundCard(weather);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Création d'une fonction pour changer le background en fonction de la météo (Pluie, soleil, nuageux, neige, "autre")
function backgroundWp(weather) {
  
  if (weather == "Rain") {
    wallpaperId.style.backgroundImage= "url('pluie.jpg')";
  } else if (weather == "Sunny") {
    wallpaperId.style.background = "url('sunny.jpg')";
  } else if (weather == "Clouds") {
    wallpaperId.style.background = "url('cloudy.jpg')";
  } else if (weather == "Snow") {
    wallpaperId.style.background = "url('snow.jpg')";
  } else {
    wallpaperId.style.background = "url('ctulhu.jpg')";
    wallpaperId.style.backgroundSize = "cover";
  }
}



// Fonction visant à créer une boucle sur les différents créneaux horaires (+3h)
function boucleTemp(value) {
  for (var i = 1; i < value.list.length; i++) {

    let div = document.createElement("div");
    div.setAttribute("class", "card");
    card.appendChild(div);

    //Creation de l'element affichant la temperature
    let toto = document.createElement("p");
    toto.setAttribute("class", "tempCard");
    toto.innerHTML = "Température : " + value.list[i].main.temp + " degrés ";
    div.appendChild(toto);

    //Creation de l'élément affichant l'heure et date
    let date = value.list[i].dt_txt;
    let dateTime = date.split(" ");
    let time = document.createElement("p");
    time.setAttribute("class", "time");
    time.innerHTML = " Heure : " + dateTime[1];
    div.appendChild(time);

    let dateDay = document.createElement("p");
    dateDay.setAttribute("class", "dateDay");
    dateDay.innerHTML = "Date : " + dateTime[0];
    div.appendChild(dateDay);


  }
}

function backgroundCard() {
  let cardW = value.list[0].weather[0].main;
  let car = document.querySelector("#card");
  if (cardW == "Rain") {
    car.style.backgroundImage= "url('pluie.jpg')";
  } else if (cardW == "Sunny") {
    car.style.background = "url('sunny.jpg')";
  } else if (cardW == "Clouds") {
    car.style.background = "url('cloudy.jpg')";
  } else if (cardW == "Snow") {
    car.style.background = "url('snow.jpg')";
  } else {
    car.style.background = "url('ctulhu.jpg')";
    car.style.backgroundSize = "cover";
  }
}

// On cible le bouton ayant l'id "localisation"...
let clickBtn = document.querySelector("#localisation");
// ... Pour y activer notre fonction météo
clickBtn.addEventListener("click", weatherCast);
