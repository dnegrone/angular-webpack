import './styl/main.styl';
import icon from './img/icon.png';

const message = 'is great';
document.querySelector('#box').innerText = cow.say(`Webpack with Babel ${message}!`);

document.querySelector('#icon').innerHTML = `<img src="${icon}" />`;