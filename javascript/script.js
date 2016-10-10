$(document).ready(function(){

var api = loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=36dc71f6d4f93ef7c5fe5d26dc871995", 'jsonp');

var api2 =
"http://api.openweathermap.org/data/2.5/forecast/daily?q=Chicago&units=imperial&cnt=5&appid=36dc71f6d4f93ef7c5fe5d26dc871995"

// Current weather
$.getJSON(api, function(data){
    var fTemp1 = data.main.temp;
    var wIcon1 = data.weather[0].icon;
    var humid1 = data.main.humidity;
    var wind1 = data.wind.speed;

$("#icon-1")[0].setAttribute("src", "images/"+ wIcon1 + ".png");
$("#temp-1").html(Math.round(fTemp1) + " &#8457;");
$("#humid-1").html(humid1 + "&#37;");
$("#wind-1").html(Math.round(wind1) + " mph");

//Set background on time of day

if(wIcon1.indexOf('n') === -1) {
    $(".main-container").css("background-image", "linear-gradient(0deg,rgba(155,175,191,0.6),rgba(155,175,191,0.6)), url('./images/chicago01.JPG')");
} else {
  $(".main-container").css("background-image", "linear-gradient(0deg,rgba(155,175,191,0.8),rgba(155,175,191,0.8)), url('./images/chicago02.JPG')");
}

});

// 4 day weather
$.getJSON(api2, function(data){

//second day forecast
    var fTempMax2 = data.list[1].temp.max;
    var fTempMin2 = data.list[1].temp.min;
    var wIcon2 = data.list[1].weather[0].icon;

$("#icon-2")[0].setAttribute("src", "images/"+ wIcon2 + ".png");
$("#temp-max-2").html(Math.round(fTempMax2) + "&#8457;");
$("#temp-min-2").html(Math.round(fTempMin2) + "&#8457;");

//third day forecast
    var fTempMax3 = data.list[2].temp.max;
    var fTempMin3 = data.list[2].temp.min;
    var wIcon3 = data.list[2].weather[0].icon;

$("#icon-3")[0].setAttribute("src", "images/"+ wIcon3 + ".png");
$("#temp-max-3").html(Math.round(fTempMax3) + "&#8457;");
$("#temp-min-3").html(Math.round(fTempMin3) + "&#8457;");

//fourth day forecast
    var fTempMax4 = data.list[3].temp.max;
    var fTempMin4 = data.list[3].temp.min;
    var wIcon4 = data.list[3].weather[0].icon;

$("#icon-4")[0].setAttribute("src", "images/"+ wIcon4 + ".png");
$("#temp-max-4").html(Math.round(fTempMax4) + "&#8457;");
$("#temp-min-4").html(Math.round(fTempMin4) + "&#8457;");

//fifth day forecast
    var fTempMax5 = data.list[4].temp.max;
    var fTempMin5 = data.list[4].temp.min;
    var wIcon5 = data.list[4].weather[0].icon;

$("#icon-5")[0].setAttribute("src", "images/"+ wIcon5 + ".png");
$("#temp-max-5").html(Math.round(fTempMax5) + "&#8457;");
$("#temp-min-5").html(Math.round(fTempMin5) + "&#8457;");

  });

//date and time for current

var date = moment().format("MMMM Do YYYY");
var time = moment().format('h:mm a');

$(".date").html(date);
$(".time").html(time);

//dates and time for 4 day forecast

function dayOfWeek() {
  var weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday"
  ];

 var today = new Date().getDay();

    $("#p0").html(weekdays[today + 1]);
    $("#p1").html(weekdays[today + 2]);
    $("#p2").html(weekdays[today + 3]);
    $("#p3").html(weekdays[today + 4]);
  }

dayOfWeek()

});
