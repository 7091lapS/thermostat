thermostat = new Thermostat();


var temperature = document.getElementsByTagName('span')[0];
temperature.innerHTML = thermostat.temperature;

Update = function() {
  temperature.innerHTML = thermostat.temperature;
  temperature.style.color = thermostat.colour;
};

var increase = document.getElementsByTagName('input')[0];
increase.onclick = function() {
  thermostat.increaseTemp(1);
  Update();
 };

var decrease = document.getElementsByTagName('input')[1];
decrease.onclick = function() {
  thermostat.decreaseTemp(1);
  Update();
};

var resetTemperature = document.getElementsByTagName('input')[2];
resetTemperature.onclick = function() {
  thermostat.resetTemp();
  Update();
};

var swittch = document.getElementsByTagName('input')[3];
swittch.onchange = function() {
  thermostat.echoSwitch();
  Update();
};
