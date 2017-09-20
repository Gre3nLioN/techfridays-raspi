var raspi = require('raspi');
var pwm = require('raspi-pwm');

var light = document.querySelector('.light');
var ac = document.querySelector('.ac');

raspi.init(() => {
  var acPin = new pwm.PWM('GPIO17');
  var lightPin = new pwm.PWM('GPIO4');
  
  ac.addEventListener('click', () => {
    ac.classList.toggle('active');
    if(acPin.value === 1) {
      acPin.write(0);
    } else {
      acPin.write(1);
    }
  });

  light.addEventListener('click', () => {
    light.classList.toggle('active');
    if(lightPin.value === 1) {
      lightPin.write(0);
    } else {
      lightPin.write(1);
    }
  });
});