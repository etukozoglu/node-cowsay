const cowsay = require('cowsay');
const information = require('./information');

console.log(cowsay.say({
	text:`Hello je suis ${information.nom} du campus de ${information.campus} !`,
	e: "oO",
	T: "U "


}));
