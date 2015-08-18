var Thermostat = function() {
  this.isPowerSaving = true
  this.temperature = Thermostat.defaultTemp;
  this.minTemp = 10;
  this.maxTemp = 25;

};

Thermostat.defaultTemp = 20;

Thermostat.prototype.increaseTemp = function (number) {
  if ((this.temperature + number) > this.maxTemp) {
    throw('Temperature cannot go above ' + this.maxTemp + '.' );
  }
  return this.temperature += number;
};

Thermostat.prototype.decreaseTemp = function (number) {
  if ((this.temperature - number) < this.minTemp) {
    throw('Temperature cannot go below ' + this.minTemp + '.' );
  }
  return this.temperature -= number;
};

Thermostat.prototype.powerSavingOff = function () {
  this.maxTemp = 32;
  return this.isPowerSaving = false;
};

Thermostat.prototype.powerSavingOn = function () {
  if (this.temperature > 25) { this.temperature = 25}
  this.maxTemp = 25;
  return this.isPowerSaving = true;
};

Thermostat.prototype.resetTemp = function () {
  this.temperature = 20;
};

Thermostat.prototype.tempControl = function (temperature) {
  if (temperature < this.minTemp) {
    throw('Temperature cannot go below ' + this.minTemp + '.');
  }
  else if (temperature > this.maxTemp) {
    throw('Temperature cannot go above ' + this.maxTemp + '.');
  }
};
