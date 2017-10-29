'use strict';

var $ 		= require('jquery');

module.exports = {

	safeParseInt: function(valueToParse) {
		return parseInt( valueToParse, 10 );
	},

	addOverStatus: function(el, scope, cls){

		$(el, $(scope)).hover(function() {
			$(this).addClass(cls);
		}, function() {
			$(this).removeClass(cls);
		});

	},

	convertDateToString: function(dateToConvert){

		var day     = dateToConvert.getDate();
		if (day<10) day = '0'+day; 
		var month   = dateToConvert.getMonth()+1;
		if (month<10) month='0'+month; 
		var year    = dateToConvert.getFullYear();  
		
		return  year+'-'+month+'-'+day;
	},

	convertDateToString_2: function(dateToConvert){

		var day     = dateToConvert.getDate();
		if (day<10) day='0'+day; 
		var month   = dateToConvert.getMonth()+1;
		if (month<10) month='0'+month; 
		var year    = dateToConvert.getFullYear();  
		
		return  day+'-'+month+'-'+year;
	},

	convertDateToStringAndAddDays: function( dateToConvert, days ) {
		var day = dateToConvert.getDate() + days;
		if (day<10) day='0'+day; 
		var month   = dateToConvert.getMonth()+1;
		if (month<10) month='0'+month; 
		var year    = dateToConvert.getFullYear();  
		
		//return  day+'-'+month+'-'+year;
		return  year+'-'+month+'-'+day;
	}

};
