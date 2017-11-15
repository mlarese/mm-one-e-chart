'use strict';

var $			            = require('jquery'),
	carousel 				= require('../vendors/bootstrap/carousel'),
	modal 					= require('../vendors/bootstrap/modal');

/* activate the carousel */

module.exports = {

	init:  function(){
		$("#modal-carousel").carousel({interval:false});

		/* change modal title when slide changes */
		$("#modal-carousel").on("slid.bs.carousel", function () {
		  $(".modal-title").html($(this).find(".active img").attr("title"));
		})

		/* when clicking a thumbnail */
		$(".gallery-modal").click(function(){

			var offTop = $(this).parents('.ST1-list__item, .ST2-item, .ST2-resume__show, .STSS__rooms__item').offset().top - 100;

			offTop = (window.parent !== window) ? offTop : 0;

		    var carImgCont		= $("#modal-carousel .carousel-inner");
		    var textCont 		= $(".modal-text");
		  
		    carImgCont.empty();  
		    textCont.empty();
		  
		  	var id 			= $(this).data('galRef');  
		    var repoImg 	= $("#modal-repo .item");
		    var repoImgCopy	= repoImg.filter(function() { 
							  	return $(this).data("galRef") == id;
							  }).clone();
		    var active 		= repoImgCopy.first();

		    var repoText	= $("#modal-repo .item-text");
		    var repoTextCopy= repoText.filter(function() { 
							  	return $(this).data("galRef") == id;
							  }).clone();
		  
		    active.addClass("active");
		    textCont.append(repoTextCopy);
		  	carImgCont.append(repoImgCopy);
		  	$('#modal-carousel .carousel-control').show();

		  	$('.modal-dialog').css('marginTop', offTop+'px');
		    // show the modal
		  	$("#modal-gallery").modal("show");

		 	if ( $('#modal-carousel .carousel-inner .item').length == 1){
		 		$('#modal-carousel .carousel-control').hide();
		 	}
		});
	}

}
