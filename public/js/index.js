'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();
})

exports.users = require('./users');

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    console.log("Javascript connected!");

    // calculating margin-left to align it to center;
    var width = $('.justified').width();
    $('.justified').css('margin-left', '-' + (width / 2)+'px');

}

