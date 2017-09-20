const Gpio = require('pigpio').Gpio,

const light = document.querySelector('.light');
const ac = document.querySelector('.ac');

const acPin = new Gpio(17);
const lightPin = new Gpio(4);

ac.addEventListener('click', () => {
  ac.classList.toggle('active');
  if(acPin.digitalRead() === 1) {
    acPin.digitalWrite(0);
  } else {
    acPin.digitalWrite(1);
  }
});

light.addEventListener('click', () => {
  light.classList.toggle('active');
  if(lightPin.digitalRead() === 1) {
    lightPin.digitalWrite(0);
  } else {
    lightPin.digitalWrite(1);
  }
});
