$(document).ready(function(){

//Current Location IP Call
$.getJSON("https://jsonip.com/?callback=?", function(data) {
        var ip = (data.ip);


//Append IP to geolocation link to obtain JSON.
var loc = ("https://freegeoip.net/json/"+ip);
    
//Get city and state name.
$.getJSON(loc, function(data){
    area = data.city;
    var state = data.region_code;

//Append city name to HTML class.
  $(".location").html(area +", " + state);


//Current Weather

var api = "https://api.apixu.com/v1/forecast.json?key=1a747318d36e4dbfb9545640161010&q="+area+"&days=5";
console.log(api);


$.getJSON(api, function(data){
  //Current Forecast Variables
  var fTemp1 = data.current.temp_f;
  var wIcon1 = data.current.condition.code;
  var humid1 = data.current.humidity;
  var wind1 = data.current.wind_mph;
  var dayTime = data.current.is_day;

  //second day forecast variables
  var fTempMax2 = data.forecast.forecastday[0].day.maxtemp_f;
  var fTempMin2 = data.forecast.forecastday[0].day.mintemp_f;
  var wIcon2 = data.forecast.forecastday[0].day.condition.code;

  //third day forecast variables
  var fTempMax3 = data.forecast.forecastday[1].day.maxtemp_f;
  var fTempMin3 = data.forecast.forecastday[1].day.mintemp_f;
  var wIcon3 = data.forecast.forecastday[1].day.condition.code;

  //fourth day forecast variables
  var fTempMax4 = data.forecast.forecastday[2].day.maxtemp_f;
  var fTempMin4 = data.forecast.forecastday[2].day.mintemp_f;
  var wIcon4 = data.forecast.forecastday[2].day.condition.code;

  //fifith day forecast variables
  var fTempMax5 = data.forecast.forecastday[3].day.maxtemp_f;
  var fTempMin5 = data.forecast.forecastday[3].day.mintemp_f;
  var wIcon5 = data.forecast.forecastday[3].day.condition.code;

//Determine if it is daytime or night time for icon
if (dayTime === 1) {
  dayTime = "d";
} else {
  dayTime = "n";
}

//Assigning information to current weather
  $("#icon-1")[0].setAttribute("src", "images/"+ wIcon1 + dayTime + ".png");
  $("#temp-1").html(Math.round(fTemp1) + " &#8457;");
  $("#humid-1").html(humid1 + "&#37;");
  $("#wind-1").html(Math.round(wind1) + " mph");

//Assigning information to day 1 html elements
  $("#icon-2")[0].setAttribute("src", "images/"+ wIcon2 + ".png");
  $("#temp-max-2").html(Math.round(fTempMax2) + "&#8457;");
  $("#temp-min-2").html(Math.round(fTempMin2) + "&#8457;");

//Assign informtion to day 2 html elements
  $("#icon-3")[0].setAttribute("src", "images/"+ wIcon3 + ".png");
  $("#temp-max-3").html(Math.round(fTempMax3) + "&#8457;");
  $("#temp-min-3").html(Math.round(fTempMin3) + "&#8457;");

//Assign information to day 3 html elemtns
  $("#icon-4")[0].setAttribute("src", "images/"+ wIcon4 + ".png");
  $("#temp-max-4").html(Math.round(fTempMax4) + "&#8457;");
  $("#temp-min-4").html(Math.round(fTempMin4) + "&#8457;");

//Assign information to day 4 html elements
  $("#icon-5")[0].setAttribute("src", "images/"+ wIcon5 + ".png");
  $("#temp-max-5").html(Math.round(fTempMax5) + "&#8457;");
  $("#temp-min-5").html(Math.round(fTempMin5) + "&#8457;");


//Set background on time of day

  if(dayTime.indexOf('n') === -1) {
      $(".main-container").css("background-image", "linear-gradient(0deg,rgba(155,175,191,0.6),rgba(155,175,191,0.6)), url('./images/chicago01.JPG')");
  } else {
    $(".main-container").css("background-image", "linear-gradient(0deg,rgba(155,175,191,0.8),rgba(155,175,191,0.8)), url('./images/chicago02.JPG')");
  }

})

// //date and time for current

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
  });
});
