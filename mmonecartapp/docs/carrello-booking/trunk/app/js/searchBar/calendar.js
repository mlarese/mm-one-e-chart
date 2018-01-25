'use strict';

var $             = require('jquery');

var config        = require('../config');
var roomManager   = require('./roomManager');
var swissKnife    = require('../utils/swissKnife');

require('jquery-ui/datepicker');
require('../vendors/jquery-ui-i18n');

var lockedDays    = require('../dev/simulateLockedDays');

var searchForm      = $('#formSearch'),
	checkIn         = searchForm.find('input.input-checkin'),
	checkOut        = searchForm.find('input.input-checkout'),
	checkInWrapp    = searchForm.find('div.box.checkin'),
	checkOutWrapp   = searchForm.find('div.box.checkout'),
	guestInput      = searchForm.find('div.numGuests'),
	closeBtn      	= searchForm.find('>b.cls'),

	//ID e classi 
	//
	idDatepicker	 = 'ui-datepicker-div',
	dpChekhInClass   = 'DP-fisrt-day-checkIn',
	dpCheckOutClass  = 'DP-fisrt-day-checkOut',
	dpIntervalClass  = 'DP-book-interval',

	closeBtn      	 = searchForm.find(idDatepicker+'b.cls'),


	//Variabili di appoggio per la gestione dei datepicker
	//
	todayDate				= new Date(),																		//Data di oggi
	todayDateIn				= new Date(todayDate.getFullYear(),todayDate.getMonth(),todayDate.getDate() ),		//Data di oggi in altro formato
	tomorrowDateOut			= new Date(todayDate.getFullYear(),todayDate.getMonth(),todayDate.getDate()+1),		//Data di domani

	firstDayCheckinfound  	= false,	//Flag per determinare se è stata trovata una data checkIn valida
	firstDayCheckoutfound  	= false,	//Flag per determinare se è stata trovata una data checkOut valida
	checkInCurrentDate		= (typeof window.ABS_searchCheckin !== 'undefined')   ? window.ABS_searchCheckin : todayDateIn,			//Tiene traccia della data di checkIn corrente
	checkOutCurrentDate		= (typeof window.ABS_searchCheckout !== 'undefined')  ? window.ABS_searchCheckout : tomorrowDateOut,	//Tiene traccia della data di check0ut corrente
	checkOutFirstAvailable 	= false,

	tradDPCheckin   		= (typeof window.trad['dp-checkin-msg'] === 'string')     ? window.trad['dp-checkin-msg'] : "",		//Intestazione datepicker checkin
	tradDPCheckOut  		= (typeof window.trad['dp-checkout-msg'] === 'string')    ? window.trad['dp-checkout-msg'] : "",	//Intestazione datepicker checkout
	tradiso2        		= (typeof window.trad['iso2Lang'] === 'string')           ? window.trad['iso2Lang'] : "en-GB";		//Iso 2 della lingua corrente


//Funzioni di servizio, utilizzate con scope searchBar.js
//
function initDatepickers(msg, addCls){

	setTimeout(function(){
		$('#'+idDatepicker).removeClass(function(i, c) {
		  return (c.match (/(^|\s)DP-\S+/g) || []).join(' ');
		}).addClass(addCls).prepend(msg);
		swissKnife.addOverStatus('td', '#'+idDatepicker, 'DP-custom__td-hover');
	},0);

}

//Inizializzazione dei datepicker (diasbilitazione/abilitazione giorni)
//
function datePickerBeforeShowDay(date, what){

	var dateAnalized	= swissKnife.convertDateToString(date);		//Singolo giorno che sto analizzando
	var dayClass 		= '';										//Classe aggiuntiva da assegnare al giorno analizzato
	var showDayFlag 	= true;										//Determina se abilitare o no il girono analizzato

	if (typeof lockedDays[dateAnalized] !== 'undefined'){ 

		//Inizializzazione giorni datepicker checkin
		//
		if ( what == 'in') {

			if (parseInt(lockedDays[dateAnalized].notAllowCheckIn) == 1)
				showDayFlag = false;

			if (!firstDayCheckinfound && showDayFlag && date >= checkInCurrentDate){
				firstDayCheckinfound = true;
				dayClass = dpChekhInClass;
			}

			if ( date > checkInCurrentDate ) {
				if (date < checkOutCurrentDate)
            		dayClass = dpIntervalClass;
            	
            	if (date.getTime() == checkOutCurrentDate.getTime())
            		dayClass = dpCheckOutClass;

			}
		}

		//Inizializzazione giorni datepicker checkout
		//
		if ( what == 'out') {
			if (parseInt(lockedDays[dateAnalized].notAllowCheckOut) == 1)
				showDayFlag = false;

			if (!firstDayCheckoutfound && showDayFlag && date <= checkOutCurrentDate){
				firstDayCheckoutfound = true;
				dayClass =  dpCheckOutClass;
			}

			if ( date < checkOutCurrentDate ) {

				if (date > checkInCurrentDate)
            		dayClass = dpIntervalClass;
            	
            	if (date.getTime() == checkInCurrentDate.getTime())
            		dayClass = dpChekhInClass;

			}
		}

	}
	return [showDayFlag, dayClass,(showDayFlag) ? '': trad['dp-day-not-valid']];
}

function datePickerChangeCheckin(showCheckout){

	checkInCurrentDate			= checkIn.datepicker("getDate");
	checkOutFirstAvailable 		= false;

  	var	firstChekOut 			= new Date(checkInCurrentDate);
  		firstChekOut.setDate(firstChekOut.getDate() + 1);

	var checkInString  = swissKnife.convertDateToString(checkInCurrentDate);     

	checkOut.datepicker({
		dateFormat: config.dateFormat,
		numberOfMonths: 1,
		showOtherMonths: true,
		altFormat: config.dateFormat,
		nextText:'',
		prevText:'',
		minDate: firstChekOut,
		beforeShow: function() {
		  initDatepickers('<span class="DP-custom">'+tradDPCheckOut+'<b class="cls"></b></span>','DP-CO-cls');
		},
		onChangeMonthYear: function(){
		  initDatepickers('<span class="DP-custom">'+tradDPCheckOut+'<b class="cls"></b></span>','DP-CO-cls');
		},
		beforeShowDay: function(date){

			if (typeof lockedDays != 'undefined'){
				var dayClass 			= '';
				var showDayFlag 		= true;
				var dateAnalized  		= swissKnife.convertDateToString(date);


				if (typeof lockedDays[dateAnalized] !== 'undefined'){

					var date_chekin_minstate = new Date(checkInCurrentDate);

					if (typeof lockedDays[checkInString] != 'undefined'){
						date_chekin_minstate.setDate(date_chekin_minstate.getDate()+ parseInt((lockedDays[checkInString].minstay)));
					}
					else{
						date_chekin_minstate.setDate(date_chekin_minstate.getDate()+ 1);
					}
					
					if ((parseInt(lockedDays[dateAnalized].notAllowCheckOut) == 1) || ( date_chekin_minstate > date)){
						showDayFlag = false;
					}

					if ( date < checkOutCurrentDate ) {
						if (date >= firstChekOut)
                    		dayClass = dpIntervalClass;
                    	
                    	if (date.getTime() == checkInCurrentDate.getTime())
                    		dayClass = dpChekhInClass;
					}

					if ( checkOutFirstAvailable == false && showDayFlag){
						checkOutFirstAvailable = date;
					}
                    
				}
				return [showDayFlag, dayClass,(showDayFlag) ? '' : trad['dp-day-not-valid']];
			}
		},
		onSelect: function(){
			checkOutCurrentDate = $(this).datepicker("getDate");
			$('.buttonWrap').removeClass('start-modify').addClass('start-search');
			$('#block-click').removeClass('show');
			//roomManager.showRoomPanel();
		},
		afterShow: function(){
			setTimeout(function(){
		  		$('.cls',$('#'+idDatepicker)).click(function(event) {
					checkOut.datepicker('hide');
				});
			},100);
		}
	});
	
	if (showCheckout){
		setTimeout(function() {
			checkOut.datepicker('show');
		},1);
	}

}

$.extend( $.datepicker, {
	// Riferimento alla funzione originale per poterla chiamare come prima cosa
	_inlineDatepicker2: $.datepicker._updateDatepicker,

	// Sovrascriviamo il metodo
	_updateDatepicker: function( inst ) {
	// Richiamiamo l'originale
		if ( this._inlineDatepicker2 ) {
			this._inlineDatepicker2( inst );
		}
		// Aggiungiamo la chiamata alla nostra funzione
		var afterShow = $.datepicker._get( inst, 'afterShow' );

		if ( afterShow ) {
			afterShow.apply( inst, [inst] );
		}
	}
});

module.exports = {

	initCalendar: function(){
	    // Datepicker
	    $.datepicker.setDefaults( $.datepicker.regional[tradiso2] );

	    lockedDays = $.parseJSON(lockedDays);

	    // Checkin 
	    checkIn.datepicker({
	      dateFormat: config.dateFormat,
	      numberOfMonths: 1,
	      showOtherMonths: true,
	      altFormat: config.dateFormat,
	      nextText:'',
	      prevText:'',
	      minDate: todayDateIn,
	      beforeShow: function() {
	        initDatepickers('<span class="DP-custom">'+tradDPCheckin+'<b class="cls"></b></span>', 'DP-CI-cls');
	      },
	      onChangeMonthYear: function(){
	        initDatepickers('<span class="DP-custom">'+tradDPCheckin+'<b class="cls"></b></span>', 'DP-CI-cls');
	      },
	      beforeShowDay: function(date){
	        return datePickerBeforeShowDay(date, "in");
	      },
	      onSelect: function(){
	      	checkInCurrentDate = $(this).datepicker("getDate");
			guestInput.fadeOut( 'fast', function() { $( this ).addClass( 'hide' ); });
			var showCheckout = false;

	      	if ( checkInCurrentDate >= checkOutCurrentDate){
	      		checkOut.val("");
	      		$('.buttonWrap').removeClass('start-search').addClass('start-modify');
	      		showCheckout = true;
	      	}
	      	else {
				$('.buttonWrap').removeClass('start-modify').addClass('start-search');
				//$('#block-click').removeClass('show');
	      	}

	      	
	      	
	      	setTimeout(function(){
	      			checkOut.datepicker("destroy");
	      			datePickerChangeCheckin(showCheckout);
	      	},10);
	      }, 
	      afterShow: function(){
	      	setTimeout(function(){
		      	$('.cls',$('#'+idDatepicker)).click(function(event) {
					checkIn.datepicker('hide');

				});
	      	},100);
	      }
	    });

	    checkIn.datepicker("setDate", checkInCurrentDate); 

		checkInWrapp.on('click', function(){
	      checkIn.datepicker('show');
	      roomManager.hideRoomPanel();

	    });

	    // Checkout
	    checkOut.datepicker({
	      dateFormat: config.dateFormat,
	      numberOfMonths: 1,
	      showOtherMonths: true,
	      altFormat: config.dateFormat,
	      nextText:'',
	      prevText:'',
	      minDate: new Date(checkInCurrentDate.getFullYear(), checkInCurrentDate.getMonth(), checkInCurrentDate.getDate() + 1),
	      beforeShow: function() {
	        initDatepickers('<span class="DP-custom">'+tradDPCheckOut+'<b class="cls"></b></span>','DP-CO-cls');
	      },
	      onChangeMonthYear: function(){
	        initDatepickers('<span class="DP-custom">'+tradDPCheckOut+'<b class="cls"></b></span>','DP-CO-cls');
	      },
	      beforeShowDay: function(date){
	        return datePickerBeforeShowDay(date, "out");
	      },
	      onSelect: function(){
	      	checkOutCurrentDate = $(this).datepicker("getDate");
	      	$('.buttonWrap').removeClass('start-modify').addClass('start-search');
	      	//roomManager.showRoomPanel();
	      },
	      afterShow: function(){
	      	setTimeout(function(){
		      	$('.cls',$('#'+idDatepicker)).click(function(event) {
					checkOut.datepicker('hide');

				});
	      	},100);
	      }
	    });

	    checkOut.datepicker("setDate", checkOutCurrentDate);  

	    checkOutWrapp.on('click', function(){
	      checkOut.datepicker('show');
	      roomManager.hideRoomPanel();
	    });
	    

	    $('td', $('#'+idDatepicker)).hover(function() {
	      this.addClass('DP-custom__td-hover');
		    }, function() {
		      this.removeClass('DP-custom__td-hover');
		});

	},

	showCalendarIn: function(){
		checkInWrapp.trigger('click');
	},

}