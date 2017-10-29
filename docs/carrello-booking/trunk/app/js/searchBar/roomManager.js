
var $               = require('jquery');
var guestManager    = require('./guestManager');
var swissKnife	    = require('../utils/swissKnife');

var searchForm      = $('#formSearch'),
    guestWrapp      = searchForm.find('div.box.guests'),
    guestInput      = searchForm.find('div.numGuests'),
    numRoomBtn      = searchForm.find('.numRooms > button'),
    closeBtn      	= searchForm.find('>b.cls'),
    searchLimitX    = (searchForm.length > 0) ? searchForm.offset().left + searchForm.width() : 0,
    guestPosX       = (searchForm.length > 0) ? guestWrapp.offset().left : 0;

module.exports = {


  initRoom: function(){  

      var obj = this;
      obj.reziselistener();
      obj.initChild();
      guestManager();

      closeBtn.click(function(event) {
      	obj.hideRoomPanel();
      });

      var maxNumRooms    = swissKnife.safeParseInt($('.numRooms button.last').val());
      var actualNumRooms = swissKnife.safeParseInt($('.numRooms button.selected').val());

      // Nascondo/elimino da selezionato + 1 fino a massimo
      for (var i = actualNumRooms + 1; i <= maxNumRooms; i++) {
        
        var roomGuests = $('.roomGuests.' + i);
        roomGuests.hide();

        // Tolgo gli input hidden relativi
        if ($('#formSearch > #bform_reqRooms_' + i + '_adults').length > 0) {
          $('#formSearch > #bform_reqRooms_' + i + '_adults').remove();
        }

        if ($('#formSearch > #bform_reqRooms_' + i + '_child').length > 0) {
          $('#formSearch > #bform_reqRooms_' + i + '_child').remove();
        }
        
        // Disabilito gli input hidden dei childage (invece di rimuoverli li disabilito visto che l'aggiunta e la gestione sono diversi)
        for (var j = 1; j < 10; j++) {
          if ($('#room_children_age-' + i + '-' + j).length > 0) {
            $('#room_children_age-' + i + '-' + j).prop('disabled', true);
          }
        }
      }
      
      // Aggiungo/mostro da 1 a selezionato
      for (var ii = 1; ii <= actualNumRooms; ii++) {
        $('.roomGuests.' + ii).show();
        
        // Aggiungo gli input hidden con i valori di default
        if ($('#formSearch > #bform_reqRooms_' + ii + '_adults').length === 0) {
          $('<input>').attr({
                type: 'hidden',
                id: 'bform_reqRooms_' + ii + '_adults',
                name: 'bform[reqRooms][' + ii + '][adults]',
                value: 2
            }).appendTo('#formSearch');
        }

        if ($('#formSearch > #bform_reqRooms_' + ii + '_child').length === 0) {
          $('<input>').attr({
                type: 'hidden',
                id: 'bform_reqRooms_' + ii + '_child',
                name: 'bform[reqRooms][' + ii + '][child]',
                value: 0
            }).appendTo('#formSearch');
        }
        
        // Riabilito gli input hidden dei childage
        for (var jj = 1; jj < 10; jj++) {
          if ($('#room_children_age-' + ii + '-' + jj).length > 0) {
            $('#room_children_age-' + ii + '-' + jj).prop('disabled', false);
          }
        }
      }

  },

  initChild: function(){

  	if (typeof window.ABS_bookedRooms === 'undefined') return;
    if (typeof window.ABS_Adults === 'undefined') return;
    if (typeof window.ABS_childrenAge === 'undefined') return;

  	var rooms 	 = window.ABS_bookedRooms;
  	var childAge = window.ABS_childrenAge;

  
  	for (var i = 1; i <= rooms; i++) {
      $('#room_adults-'+i+'-'+ABS_Adults[i]).trigger('click');
  		$('#room_children-'+i+'-'+(childAge[i].length-1)).trigger('click');

  		for (var j = 1; j < childAge[i].length; j++) {
  			$('#room_children_age-'+i+'-'+j).val(childAge[i][j]);    
            $('#label_room_children_age-'+i+'-'+j).text(childAge[i][j]);
  		}
  	}

  },

  moveRoomPanel: function(numRoom){

    searchLimitX    = $('#formSearch').offset().left + $('#formSearch').width();
    guestPosX       = $('div.box.guests').offset().left;

    var delta = 15;
    var gap   = (numRoom == 1) ? delta : '-'+(guestPosX + $('.numGuests ').width() - searchLimitX - delta);

    $('.numGuests').css('left', gap+'px');
  
  },

  reziselistener: function(){
    var obj = this;
    $( window ).resize(function() {
      obj.moveRoomPanel();
    });

  },

  hideRoomPanel: function(){
    guestWrapp.removeClass('active');
    guestInput.fadeOut( 'fast', function() { 
      $( this ).addClass( 'hide' ); 
    });
  },

  showRoomPanel: function(){
    guestWrapp.addClass('active');
    guestInput.fadeIn( 'fast', function() { 
      $( this ).removeClass( 'hide' ); 
    });
  }

};

