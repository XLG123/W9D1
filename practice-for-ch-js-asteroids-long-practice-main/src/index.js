console.log("Webpack is working!");

import MovingObject from './moving-object';

const canvas = document.getElementById('myCanvas');
canvas.width = 800;
canvas.height = 600;

window.ctx = canvas.getContext('2d');

window.circle = new MovingObject([250, 250], 25, 100, '#FF0');

circle.draw(ctx);

