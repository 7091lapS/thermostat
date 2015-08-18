describe ('Thermostat', function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has temp of 20 degrees when created', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase its temperature', function() {
    expect(thermostat.increaseTemp(1)).toEqual(21);
  });

  it('can decrease its temperature', function() {
      expect(thermostat.decreaseTemp(5)).toEqual(15);
  });

  it('has a minimum temperature of 10', function() {
    expect(thermostat.minTemp).toEqual(10);
  });

  it('has a maximum temperature of 25', function() {
    expect(thermostat.maxTemp).toEqual(25);
  });

  it('can switch off power saving', function() {
    thermostat.powerSavingOff();
    expect(thermostat.maxTemp).toEqual(32);
  });

  it('can switch on power saving', function() {
    thermostat.maxtemp = 32;
    thermostat.powerSavingOn();
    expect(thermostat.maxTemp).toEqual(25);
  });

  it('can be reset to 20', function() {
    thermostat.temperature = 15;
    thermostat.resetTemp()
    expect(thermostat.temperature).toEqual(20);
  });

  describe('temperature regulation', function() {

    it('cannot got above max temperature', function() {
      expect( function(){ thermostat.increaseTemp(6) }).toThrow("Temperature cannot go above 25.");
    });

    it('cannot go below min temperature', function() {
      expect( function(){ thermostat.decreaseTemp(11) }).toThrow("Temperature cannot go below 10.");
    });
  });

});
