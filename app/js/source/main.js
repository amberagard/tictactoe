(function() {
    'use strict';

    $(document).ready(initialize);

    var player = 1;

    function initialize() {
        $('#board').on('click', 'td.empty', select);
    }

    function select() {
        if(player === 1) {
            $(this).append('x');
            $(this).removeClass('empty');
            $(this).addClass('x');
        } else {
            $(this).append('o');
            $(this).removeClass('empty');
            $(this).addClass('o');
        }

        player *= -1;

        win();
    }

    function win() {
        var tdArray1 = $('tbody > tr:nth-child(1) > td');
        var tdArray2 = $('tbody > tr:nth-child(2) > td');
        var tdArray3 = $('tbody > tr:nth-child(3) > td');

        if($(tdArray1[0]).hasClass('x') && $(tdArray1[1]).hasClass('x') && $(tdArray1[2]).hasClass('x')) {
            tdArray1.addClass('win');
            alert('win');
            reset();
        } else if($(tdArray1[0]).hasClass('o') && $(tdArray1[1]).hasClass('o') && $(tdArray1[2]).hasClass('o')) {
            tdArray1.addClass('win');
            alert('win');
            reset();
        }

        if($(tdArray2[0]).hasClass('x') && $(tdArray2[1]).hasClass('x') && $(tdArray2[2]).hasClass('x')) {
            tdArray2.addClass('win');
            alert('win');
            reset();
        } else if($(tdArray2[0]).hasClass('o') && $(tdArray2[1]).hasClass('o') && $(tdArray2[2]).hasClass('o')) {
            tdArray2.addClass('win');
            alert('win');
            reset();
        }

        if($(tdArray3[0]).hasClass('x') && $(tdArray3[1]).hasClass('x') && $(tdArray3[2]).hasClass('x')) {
            tdArray3.addClass('win');
            alert('win');
            reset();
        } else if($(tdArray3[0]).hasClass('o') && $(tdArray3[1]).hasClass('o') && $(tdArray3[2]).hasClass('o')) {
            tdArray3.addClass('win');
            alert('win');
            reset();
        }

        if($(tdArray1[0]).hasClass('x') && $(tdArray2[0]).hasClass('x') && $(tdArray3[0]).hasClass('x')) {
            $(tdArray1[0]).addClass('win');
            $(tdArray2[0]).addClass('win');
            $(tdArray3[0]).addClass('win');
            alert('win');
            reset();
        } else if($(tdArray1[0]).hasClass('o') && $(tdArray2[0]).hasClass('o') && $(tdArray3[0]).hasClass('o')) {
            $(tdArray1[0]).addClass('win');
            $(tdArray2[0]).addClass('win');
            $(tdArray3[0]).addClass('win');
            alert('win');
            reset();
        }

        if($(tdArray1[1]).hasClass('x') && $(tdArray2[1]).hasClass('x') && $(tdArray3[1]).hasClass('x')) {
            $(tdArray1[1]).addClass('win');
            $(tdArray2[1]).addClass('win');
            $(tdArray3[1]).addClass('win');
            alert('win');
            reset();
        } else if($(tdArray1[1]).hasClass('o') && $(tdArray2[1]).hasClass('o') && $(tdArray3[1]).hasClass('o')) {
            $(tdArray1[1]).addClass('win');
            $(tdArray2[1]).addClass('win');
            $(tdArray3[1]).addClass('win');
            alert('win');
            reset();
        }

        if($(tdArray1[2]).hasClass('x') && $(tdArray2[2]).hasClass('x') && $(tdArray3[2]).hasClass('x')) {
            $(tdArray1[2]).addClass('win');
            $(tdArray2[2]).addClass('win');
            $(tdArray3[2]).addClass('win');
            alert('win');
            reset();
        } else if($(tdArray1[2]).hasClass('o') && $(tdArray2[2]).hasClass('o') && $(tdArray3[2]).hasClass('o')) {
            $(tdArray1[2]).addClass('win');
            $(tdArray2[2]).addClass('win');
            $(tdArray3[2]).addClass('win');
            alert('win');
            reset();
        }

        if($(tdArray1[0]).hasClass('x') && $(tdArray2[1]).hasClass('x') && $(tdArray3[2]).hasClass('x')) {
            $(tdArray1[0]).addClass('win');
            $(tdArray2[1]).addClass('win');
            $(tdArray3[2]).addClass('win');
            alert('win');
            reset();
        } else if($(tdArray1[0]).hasClass('o') && $(tdArray2[1]).hasClass('o') && $(tdArray3[2]).hasClass('o')) {
            $(tdArray1[0]).addClass('win');
            $(tdArray2[1]).addClass('win');
            $(tdArray3[2]).addClass('win');
            alert('win');
            reset();
        }

        if($(tdArray1[2]).hasClass('x') && $(tdArray2[1]).hasClass('x') && $(tdArray3[0]).hasClass('x')) {
            $(tdArray1[2]).addClass('win');
            $(tdArray2[1]).addClass('win');
            $(tdArray3[0]).addClass('win');
            alert('win');
            reset();
        } else if($(tdArray1[2]).hasClass('o') && $(tdArray2[1]).hasClass('o') && $(tdArray3[0]).hasClass('o')) {
            $(tdArray1[2]).addClass('win');
            $(tdArray2[1]).addClass('win');
            $(tdArray3[0]).addClass('win');
            alert('win');
            reset();
        }

        if($('.empty').length === 0) {
            alert('try again');
            reset();
        }
    }

    function reset() {
        $('#board  tr  td').html('').removeClass('x win').addClass('empty');
        $('#board  tr  td').html('').removeClass('o win').addClass('empty');
    }

})();
