'use strict';

var lockedDays =  (typeof window.ABS_lockedDays !== 'undefined') ? window.ABS_lockedDays : '{}';

module.exports = lockedDays;
