var Thermostat = function() {
  this.isPowerSaving = true;
  this.temperature = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
};

Thermostat.prototype.increaseTemp = function(number) {
  if ((this.temperature + number) > this.maxTemp) {
    throw('Temperature cannot go above ' + this.maxTemp + '.' );
  }
  return this.temperature += number;
};

Thermostat.prototype.decreaseTemp = function(number) {
  if ((this.temperature - number) < this.minTemp) {
    throw('Temperature cannot go below ' + this.minTemp + '.' );
  }
  return this.temperature -= number;
};

Thermostat.prototype.powerSavingOff = function() {
  this.maxTemp = 32;
  return this.isPowerSaving = false;
};

Thermostat.prototype.powerSavingOn = function() {
  if (this.temperature > 25) { this.temperature = 25 }
    this.maxTemp = 25;
  return this.isPowerSaving = true;
};

Thermostat.prototype.echoSwitch = function() {
  if (this.isPowerSaving === true)
    {this.powerSavingOff()}
  else
    {this.powerSavingOn()};
  return this.isPowerSaving;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};

Thermostat.prototype.colour = function() {
  if (this.temperature < 18 ) {
    return "green"}
  else if (this.temperature < 25) {
    return "yellow"}
  else {
    return "red"};
};
