var raspi = require('raspi');
var gpio = require('raspi-gpio');

var light = document.querySelector('.light');
var ac = document.querySelector('.ac');

raspi.init(() => {
  var acPin = new gpio.DigitalOutput('GPIO17');
  var lightPin = new gpio.DigitalOutput('GPIO4');
  
  ac.addEventListener('click', () => {
    ac.classList.toggle('active');
    if(acPin.value === gpio.HIGH) {
      acPin.write(gpio.LOW);
    } else {
      acPin.write(gpio.HIGH);
    }
  });

  light.addEventListener('click', () => {
    light.classList.toggle('active');
    if(lightPin.value === gpio.HIGH) {
      lightPin.write(gpio.LOW);
    } else {
      lightPin.write(gpio.HIGH);
    }
  });
});