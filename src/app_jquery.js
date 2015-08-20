$(document).ready(function() {

  var thermostat = new Thermostat();

  function tempUpdate() {
    $('.temperature').html(thermostat.temperature);
  };

  tempUpdate();

  $('.increase').click(function() {
    thermostat.increaseTemp(1);
    tempUpdate();
  });

  $('.decrease').click(function() {
    thermostat.decreaseTemp(1);
    tempUpdate();
  });

  $('.powersave').change(function() {
    thermostat.echoSwitch();
    tempUpdate();
  });

  // Weather Api JSON call

  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk",                 function(weather_info) {
      $(".location").html(weather_info.name + ", " + weather_info.sys.country);
      $(".weather").html(weather_info.weather[0].description);
      $(".local_temp").html(Math.round(weather_info.main.temp - 273.15) + "°C");
      var weather_image_src = "http://openweathermap.org/img/w/" + weather_info.weather[0].icon + ".png";
      $(".weather_image").html("<img src=" + weather_image_src + ">");
  });

});
