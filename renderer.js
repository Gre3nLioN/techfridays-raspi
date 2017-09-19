const raspi = require('raspi');
const gpio = require('raspi-gpio');

const light = document.querySelector('.light');
const ac = document.querySelector('.ac');

raspi.init(() => {
  const acPin = new gpio.DigitalOutput('P1-3');
  const lightPin = new gpio.DigitalOutput('P1-5');
  
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