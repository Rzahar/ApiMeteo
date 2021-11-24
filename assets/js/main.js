// On créé les variables que l'on souhaite observer et/ou modifier
let input = document.querySelector("#input");
let name = document.querySelector("#name");
let temperature = document.querySelector("#temperature");
let abscisse = document.querySelector("#abscisse");
let ordonneee = document.querySelector("#ordonneee");
let wallpaperId = document.querySelector("#currentCity")


//On instancie une fonction Weathercast qui va interroger l'API et récupérer les infos voulues
function weatherCast() {
  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
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
 console.log(value.list[12].weather[0].main);
     name.innerHTML = value.city.name;
      abscisse.innerHTML = value.city.coord.lat;
      ordonnee.innerHTML = value.city.coord.lon;
backgroundWp;
        
// On créé une boucle de valeurs qu'on va injecter dans nos cards
      // heure
      // humidité value.list[12].weather.humidity.main
      // temperature

    })
    .catch(function (error) {
      console.log(error);
    });
}

// Création d'une fonction pour changer le background
function backgroundWp(){
    if (value.list[12].weather[0].main = "Rain") {
        document.body.style.background = "url('../wallpaper/sunny.jpg')";
    } else if (value.list[12].weather[0].main = "Sunny") {
        document.body.style.background == "url('../wallpaper/sunny.jpg')";
    } else if (value.list[12].weather[0].main = "Cloudy") {
        document.body.style.background == "url('../wallpaper/cloudy.jpg')";
    } else if (value.list[12].weather[0].main = "Snow") {
        document.body.style.background == "url('../wallpaper/snow.jpg')";
    } else {document.body.style.background == "url('../wallpaper/ctulhu.jpg')"};}


// On cible le bouton ayant l'id "localisation"...
let clickBtn = document.querySelector("#localisation");
// ... Pour y activer notre fonction météo
clickBtn.addEventListener("click", weatherCast);
