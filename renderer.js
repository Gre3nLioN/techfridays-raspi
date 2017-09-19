const raspi = require('raspi');
const pwm = require('raspi-pwm');

const light = document.querySelector('.light');
const ac = document.querySelector('.ac');

raspi.init(() => {
  const acPin = new pwm.PWM('P1-3');
  const lightPin = new pwm.PWM('P1-5');
  
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