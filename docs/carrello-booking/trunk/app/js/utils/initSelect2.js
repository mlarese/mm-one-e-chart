'use strict';

var $			            = require('jquery'),
	select2					= require('../../../node_modules/select2/dist/js/select2.full');

$('.ST2-opt__short_sel').select2({
	theme: "bootstrap",
	minimumResultsForSearch: -1,
	containerCssClass: "ST2-opt__treat-sel2" 
});

$('.ST3__lnzBox__select').select2({
	theme: "bootstrap",
	minimumResultsForSearch: -1,
	containerCssClass: "ST3__lnzBox__select" 
});

$('select').not('.ST2-opt__short_sel, .ST3__lnzBox__select').select2({
	theme: "bootstrap",
	minimumResultsForSearch: -1,
	containerCssClass: "base-select-custom" 
});


