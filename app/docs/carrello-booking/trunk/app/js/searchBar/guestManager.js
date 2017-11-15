'use strict';

var $ 	        = require('jquery');
var swissKnife  = require('../utils/swissKnife');

var guestManager = function(){

  var adultsCount = 0;
  var childsCount = 0;
  
  for ( var i = 1; i <= swissKnife.safeParseInt( $( '.numRooms > button.selected' ).val() ); i++ ) {
    adultsCount += swissKnife.safeParseInt( $( '.roomGuests.' + i +' > .numAdults button.selected' ).text() ) || 0;
    childsCount += swissKnife.safeParseInt( $( '.roomGuests.' + i +' > .numChildren button.selected' ).text() ) || 0;
  } //fine
  
  $( '.num-guests-adults', '#formSearch' ).empty().text( adultsCount );
  $( '.num-guests-childs', '#formSearch' ).empty().text( childsCount );

};


module.exports = guestManager;