const Gpio = require('onoff').Gpio;
const acPin = new Gpio(4, 'out');

const light = document.querySelector('.light');
const ac = document.querySelector('.ac');

raspi.init(() => {
  
  ac.addEventListener('click', () => {
    ac.classList.toggle('active');
    if(acPin.readSync() === 1) {
      acPin.write(0);
    } else {
      acPin.write(1);
    }
  });

  /*light.addEventListener('click', () => {
    light.classList.toggle('active');
    if(lightPin.value === 1) {
      lightPin.write(0);
    } else {
      lightPin.write(1);
    }
  });*/
});