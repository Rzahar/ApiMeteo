let input = document.querySelector("#input");
let name = document.querySelector("#name");
let temperature = document.querySelector("#temperature");
let abscisse = document.querySelector("#abscisse");
let ordonneee = document.querySelector("#ordonneee");

function weatherCast(){
    fetch('http://api.openweathermap.org/data/2.5/forecast?q='+input
    .value+'&appid=16e15173626eeca84da853256d0d3452')
    .then(function(response){
        if(response.ok){
            return response.json();
        }
    })
    .then(function(value){
  //      console.log(value);
 //       console.log(value.city.name);
 //console.log(value.city.coord.lat);
  //console.log(value.city.coord.lon);
 
    })
    .catch(function(error){
        console.log(error);
    })
    };

let clickBtn = document.querySelector('#localisation');

clickBtn.addEventListener("click",weatherCast);


