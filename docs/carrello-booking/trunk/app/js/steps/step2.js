'use strict';

var $			            = require('jquery'),
	config        			= require('../config'),
	swissKnife    			= require('../utils/swissKnife'),
	collapse				= require('../vendors/bootstrap/collapse'),
	dropdown				= require('../vendors/bootstrap/dropdown'),
	slickSlider			    = require('../../../node_modules/slick-carousel/slick/slick.min');

var $priceGeneralWrapper	=	$('.ST2-opt'),
	$hideFullRateBtns		=	$priceGeneralWrapper.find('.ST2-opt__hide-full'),
	$showFullRateBtns		=	$priceGeneralWrapper.find("[data-toggle='collapse']"),
	$showAccDesc			= 	$('.STSS__accList').find('.STSS__accItem__desc__tgl'),
	$showModalAccDesc		= 	$('.modalDet').find('.modalDet__desc__tgl'),
	$slickSlider			= 	$('.ST2-book__slider'),
	$removeServ				= 	$('.STSS__roomsNew__item__ssr__remove');

$hideFullRateBtns.click(function(event) {
	var currentId = $(this).data('hide-full-id');
	$('#'+currentId).collapse("hide");
	$priceGeneralWrapper.find("[data-short-rate-id='" + currentId + "']").slideDown(400);
	$priceGeneralWrapper.find("[data-short-rate-title='#"+currentId+"']").show();
});

$showFullRateBtns.click(function(event) {
	$(this).parent().slideUp(400);
	$priceGeneralWrapper.find("[data-short-rate-title='"+$(this).data('target')+"']").hide();
});

$showAccDesc.click(function(){
	var $this = $(this);

	if (!$this.hasClass('collapsed'))
		$this.siblings('.STSS__accItem__desc__short').show(200);
	else
		$this.siblings('.STSS__accItem__desc__short').hide(200);
});

$showModalAccDesc.click(function(){
	var $this = $(this);

	if (!$this.hasClass('collapsed'))
		$this.siblings('.modalDet__desc__short').show(200);
	else
		$this.siblings('.modalDet__desc__short').hide(200);
});

if($slickSlider.children('div').length>4){
	$slickSlider.addClass('withSlider');
	$slickSlider.slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: false,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	      }
	    }
	   ]
	});
}

$removeServ.click(function() {
	$(this).parent().parent().remove();
});