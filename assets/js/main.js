// On créé les variables que l'on souhaite observer et/ou modifier
let input = document.querySelector("#input");
let name = document.querySelector("#name");
let temperature = document.querySelector("#temperature");
let abscisse = document.querySelector("#abscisse");
let ordonneee = document.querySelector("#ordonneee");
let wallpaperId = document.querySelector("#currentCity");
let degre = document.querySelector("#degre");
let card = document.querySelector("#card");

//On instancie une fonction Weathercast qui va interroger l'API et récupérer les infos voulues
function weatherCast() {
  fetch("http://api.openweathermap.org/data/2.5/forecast?&exclude=minutely&units=metric&lang=fr&q=" +
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
      temperature.innerHTML = "Temperature actuelle : " + value.list[0].main.temp;

      let weather = value.list[12].weather[0].main;
      backgroundWp(weather);
   boucleTemp(value);

    
      // heure
      // humidité value.list[12].weather.humidity.main
      // temperature
    }
    )
    .catch(function (error) {
      console.log(error);
    });
}

// Création d'une fonction pour changer le background en fonction de la météo (Pluie, soleil, nuageux, neige, "autre")
function backgroundWp(weather) {
  if (weather == "Rain") {
    wallpaperId.style.backgroundImage = "url('pluie.jpg')";
  } else if ((weather = "Sunny")) {
    document.body.style.background == "url('sunny.jpg')";
  } else if ((weather = "Cloudy")) {
    document.body.style.background == "url('cloudy.jpg')";
  } else if ((weather = "Snow")) {
    document.body.style.background == "url('snow.jpg')";
  } else {
    weather == "url('../wallpaper/ctulhu.jpg')";
  }
}

// Fonction visant à créer une boucle sur les différents créneaux horaires (+3h)
function boucleTemp(value){
  for (var i = 0; i < value.list.length; i++) {

    //Creation de l'element affichant la temperature
    let toto = document.createElement("p");
    toto.setAttribute("class","tempCard")
    toto.innerHTML = "Température : " + value.list[i].main.temp;
    card.appendChild(toto);


  }}


// On cible le bouton ayant l'id "localisation"...
let clickBtn = document.querySelector("#localisation");
// ... Pour y activer notre fonction météo
clickBtn.addEventListener("click", weatherCast);
