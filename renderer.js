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
    e.currentTarget.classList.remove('active');
    pin.write(gpio.LOW);
  } else {
    e.currentTarget.classList.add('active');
    pin.write(gpio.HIGH);
  }
}