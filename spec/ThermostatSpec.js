describe ('Thermostat Logic', function(){

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
    thermostat.echoSwitch();
    expect(thermostat.maxTemp).toEqual(32);
  });

  it('can switch on power saving', function() {
    thermostat.echoSwitch();
    thermostat.echoSwitch();
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

  describe('changes colour', function() {

    it('displays green when temp is below 18', function() {
      thermostat.temperature = 17;
      expect(thermostat.colour()).toEqual("rgb(127, 255, 0)");
    });

    it('dispalys yellow when temp is above 18 and below 25', function() {
      thermostat.temperature = 19;
      expect(thermostat.colour()).toEqual("yellow");
    });

    it('displays red when temp is above 25', function() {
      thermostat.temperature = 25;
      expect(thermostat.colour()).toEqual("rgb(255, 69, 0)");
    });

  });

});
