window.openRoomFlag	= true;



//window.jQuery = window.$ = require('jquery');

var config   		= require('./config');
var searchBar 		= require('./searchBar/searchBar');
var modalCarousel   = require('./utils/initModalCarousel');


require('./steps/step2');
require('./utils/initSelect2');
require('./utils/initModalCarousel');

searchBar.init();
modalCarousel.init();

//Esposizione metodi e variabili su scope globale
//

//Variabili
//
window.breakpoints 				= config.breakpoints;

//Metodi
//
window.exportModifyClick 		= function(){searchBar.exportModifyClick();}
window.exportModileShowBook		= function(){searchBar.exportModileShowBook();}
window.exportInitModalCarousel  = function(){modalCarousel.init();}
