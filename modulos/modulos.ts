/// sera importado pelo system.js

//import {areaRetangulo} from './retangulo';
//import {areaCircuferencia} from './circuferencia';
import retangulo from './retangulo';
import {areaCircuferencia as circ} from './circuferencia';

console.log(retangulo(7,8));
console.log(circ(2));

//Apenas CommonJs
const {oi} = require('./novo')
console.log(oi('Ana'))