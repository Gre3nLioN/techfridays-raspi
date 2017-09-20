var raspi = require('raspi');
var gpio = require('raspi-gpio');
var _ = require('lodash');

var light = document.querySelector('.light');
var ac = document.querySelector('.ac');

raspi.init(() => {
  var acPin = new gpio.DigitalOutput('GPIO17');
  var lightPin = new gpio.DigitalOutput('GPIO4');
  
  ac.addEventListener('click', _.partialRight(togglePin, acPin));
  light.addEventListener('click', _.partialRight(togglePin, lightPin));
});

function togglePin(e, pin) {

  if(pin.value === gpio.HIGH) {
    pin.write(gpio.LOW);
    e.target.classList.remove('active');
  } else {
    pin.write(gpio.HIGH);
    e.target.classList.add('active');
  }
}