import { init } from 'raspi';
import { DigitalInput, DigitalOutput, HIGH, LOW } from 'raspi-gpio';

const light = document.querySelector('.light');
const ac = document.querySelector('.ac');

init(() => {
  const acPin = new DigitalOutput('P1-3');
  const lightPin = new DigitalOutput('P1-5');
  
  ac.addEventListener('click', () => {
    ac.classList.toggle('active');
    if(acPin.value === HIGH) {
      acPin.write(LOW);
    } else {
      acPin.write(HIGH);
    }
  });

  light.addEventListener('click', () => {
    light.classList.toggle('active');
    if(lightPin.value === HIGH) {
      lightPin.write(LOW);
    } else {
      lightPin.write(HIGH);
    }
  });
});