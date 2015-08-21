describe('Thermostat',function(){

  var thermostat = new Thermostat();

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  it('displays default temperature', function(){
    expect('.temperature').toContainText('20');
  });

  it('increases temperature with up button', function(){
    $(".increase").click();
    expect('.temperature').toContainText('21');
  });

  it('decreases temperature with down button', function(){
    $(".decrease").click();
    expect('.temperature').toContainText('19');
  });

  it('temperature can go up and down consistently', function(){
    $(".decrease").click();
    expect('.temperature').toContainText('19');
    $(".increase").click();
    expect('.temperature').toContainText('20');
  });

  it('should have power saving button on by default', function() {
    expect(".powersave").toBeChecked();
  });

  it('should reset the temperature when reset is clicked', function() {
    $(".increase").click();
    $(".reset").click();
    expect('.temperature').toContainText('20');
  });


});
