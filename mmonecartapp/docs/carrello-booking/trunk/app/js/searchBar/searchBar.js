'use strict';

var $             	= require('jquery');

var config        	= require('../config');
var roomManager   	= require('./roomManager');
var guestManager  	= require('./guestManager');
var calendar    	  = require('./calendar');
var swissKnife    	= require('../utils/swissKnife');

    //Elementi del DOM
    //
var searchForm    = $('#formSearch'),
	mobileShowSear  = $('button.search-bar__mobile__show'),
	mobileHideBook  = searchForm.find('>b.cls'),
	searchBtn       = searchForm.find('button.search-btn'),
	guestWrapp      = searchForm.find('div.box.guests');


module.exports = {

  init: function(){

      if (searchForm.length > 0 ) {
      //Tasto visualizzazione su mobile
      mobileShowSear.click(function(){
        searchForm.slideDown('fast', function(){
          setTimeout(function(){$('.modify-btn').trigger('click');},200)
        });
      });

      mobileHideBook.click(function(){
        searchForm.slideUp('fast');
      });

      //Lancio ricerca
      searchBtn.click(function(){
        $(this).parents('form').submit();
        return false;
      });

      //Calendari
      calendar.initCalendar();

      // Num Guests
      this.numGuestsInit();
      this.initSearchModifyButton();
    }
    
  },

  numGuestsInit: function(){
	  
	if (typeof window.ABS_minAge === 'undefined') return;
    if (typeof window.ABS_maxAge === 'undefined') return;

  	var minAge 	 = window.ABS_minAge;
  	var maxAge = window.ABS_maxAge;
  	
    var hideTimerRoom = null;

    guestWrapp.on('click', function(event) {
      event.stopPropagation();
      var that = $( this );
      if ( hideTimerRoom ) { clearTimeout( hideTimerRoom ); }
      
      if ( ! that.hasClass( 'active' ) ) 
        roomManager.showRoomPanel();
      else 
        roomManager.hideRoomPanel();
      window.openRoomFlag = false;
    });

    $('html').click(function() {
    	roomManager.hideRoomPanel();
	});

    
    $( '.numGuests' ).on( 'mouseenter', function() {
      if ( hideTimerRoom ) {
        clearTimeout( hideTimerRoom );
      }
    });
    

    //scelta ospiti
    $( '.childrenAge' ).hide();
    $( '.numRooms button, .numAdults button, .numChildren button' ).on( 'click', function(event) {

      if (typeof window.openRoomFlag !== 'undefined' && !window.openRoomFlag) { 
        $('.buttonWrap').removeClass('start-modify').addClass('start-search');
      }

    	event.stopPropagation();
  		var that = $( this );
  		var parent = that.parents();
  		var val = parseInt(that.val());
  		var thatId = that.attr( 'id' );
  		var numRoom = thatId.split( '-' )[1];

      if(parent.hasClass('numRooms')){        
        $('.numGuests').removeClass('singleRoom').removeClass(function(i, c) {
          return (c.match (/(^|\s)multiRooms-\S+/g) || []).join(' ');
        });
        var boxGuestsAddRoomClass = (numRoom>1) ? 'multiRooms'+"-"+numRoom : 'singleRoom' ;
        $('.numGuests').addClass(boxGuestsAddRoomClass);
      }

      that.addClass( 'selected' );
      that.siblings( 'button.selected' ).removeClass( 'selected' );

      if ( parent.hasClass( 'numRooms' ) ) { //cambio camere
        $( 'input[name="bform[numRooms]"]' ).val( val );
        $( '.roomSelect span small' ).text( val );
        roomManager.initRoom();
        roomManager.moveRoomPanel(numRoom);
      }
      else if ( parent.hasClass( 'numAdults' ) ) { //cambio adulti
        guestManager();
        
        $( 'input[name="bform[reqRooms][' + numRoom + '][adults]"]' ).val( val );
      }
      else if ( parent.hasClass( 'numChildren' ) ) { //cambio bambini
        guestManager();
        
        // Assegniamo il valore selezionato al campo hidden
        $( 'input[name="bform[reqRooms][' + numRoom + '][child]"]' ).val( val );
        
        var myResults = '';

        if ( val === 0 ) {
          that.parents().siblings( '.childrenAge' ).hide();
          that.parents().siblings( '.childrenAge' ).children('div').empty();
        }
        else {
          that.parents().siblings( '.childrenAge' ).show();
          var i = val;

          for ( var k = 1; k <= i; k++ ) {
            var myInputName = 'bform[reqRooms][' + numRoom + '][childAge]['+ k +']';
            var myInputId = 'room_children_age-' + numRoom + '-' + k;
            myResults = myResults + 
              '<span><a href="javascript:;" class="plus">+</a><em id="label_'+ myInputId+'">' + minAge + '</em>' +
              '<input type="hidden" class="childcounter" name="' + myInputName + '" id="' + myInputId + '"value="' + minAge + '" />' + 
              '<a href="javascript:;" class="min">-</a></span>';
          } //fine for

          var divChildren = that.parents().siblings( '.childrenAge' ).children( 'div' ); 
          divChildren.html(myResults);
          
          // Select eta' bambini
          divChildren.find('span > a.plus').click(function(event) {
          	event.stopPropagation();
            $('.buttonWrap').removeClass('start-modify').addClass('start-search');
            var mySelf = $(this);
            var myVal = mySelf.siblings('.childcounter').val();

            if (myVal>=minAge && myVal<maxAge) {
              myVal =  swissKnife.safeParseInt(myVal) + 1;
              mySelf.siblings('.childcounter').val(myVal);
              mySelf.siblings('em').text(myVal);
            }
          });

          divChildren.find('span > a.min').click(function(event) {
          	event.stopPropagation();
            $('.buttonWrap').removeClass('start-modify').addClass('start-search');
            var mySelf = $(this);
            var myVal = mySelf.siblings('.childcounter').val();
            
            if (myVal>minAge && myVal<=maxAge) {     
              myVal =  swissKnife.safeParseInt(myVal) - 1;
              mySelf.siblings('.childcounter').val(myVal);
              mySelf.siblings('em').text(myVal);
            }
          });

        }
      }
    });
    // Mostro solo le camere opportune
    roomManager.initRoom();

    if (typeof window.ABS_bookedRooms !== 'undefined') {
    	$('#numRooms_button-'+window.ABS_bookedRooms).trigger('click');
    };

  },

	initSearchModifyButton: function(){

		if (typeof window.ABS_activeSearch === 'undefined') return;

		$('.modify-btn').click(function(event) {
			calendar.showCalendarIn();
			$('.buttonWrap').removeClass('start-modify').addClass('start-search');
			$('#block-click').removeClass('show');
		});

		//barra con una ricerca attiva
		if ( window.ABS_activeSearch ){
			$('.buttonWrap').addClass('start-modify');
			$('#block-click').addClass('show');
		}
		//barra senza ricerca attiva
		else{
			$('.buttonWrap').addClass('start-search');

			if(screen.width < config.breakpoints['sm']) {
				searchForm.slideDown('fast', function(){
					setTimeout(function(){
						$('.buttonWrap').removeClass('start-modify').addClass('start-search');
						$('#block-click').removeClass('show');
					},200)
				});
			}
		}

	},

  exportModileShowBook: function(){
    mobileShowSear.trigger('click');
  },

  exportModifyClick: function(){
    $('.modify-btn').trigger('click');
  }

};
