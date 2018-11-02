import { Rubik } from './rubik.js';
// require('./rubik.js');
require('./rubik.css');

function kubikChangeSize() {
    kubikSize = +kubikSizeInput.value;
    kubik = new Rubik('rubik',kubikSize);
}

var kubikSizeInput = document.getElementById('rubik-size');
kubikSizeInput.onchange = kubikChangeSize.bind(this);

var kubikSize = +kubikSizeInput.value;
var kubik = new Rubik('rubik',kubikSize);
