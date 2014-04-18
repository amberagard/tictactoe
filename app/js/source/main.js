(function() {
    'use strict';

    $(document).ready(initialize);


    var player = 1;

    function initialize() {
        $('#board').on('click', 'td.empty', select);
        // $('#board tr td:nth-child(1)').addClass('firstCol');
        // $('#board tr td:nth-child(2)').addClass('secondCol');
        // $('#board tr td:nth-child(3)').addClass('thirdCol');
        // $('#board tr:nth-child(1) td').addClass('firstRow');
        // $('#board tr:nth-child(2) td').addClass('secondRow');
        // $('#board tr:nth-child(3) td').addClass('thirdRow');

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

        if($(tdArray1[0]).hasClass('x') && $(tdArray1[1]).hasClass('x') && $(tdArray1[2]).hasClass('x') && $(tdArray1.length <= 3)) {
            alert('win');
        }
        if($(tdArray2[0]).hasClass('x') && $(tdArray2[1]).hasClass('x') && $(tdArray2[2]).hasClass('x')) {
            alert('win');
        }
        if($(tdArray3[0]).hasClass('x') && $(tdArray3[1]).hasClass('x') && $(tdArray3[2]).hasClass('x')) {
            alert('win');
        }
        if($(tdArray1[0]).hasClass('x') && $(tdArray2[0]).hasClass('x') && $(tdArray3[0]).hasClass('x')) {
            alert('win');
        }
        if($(tdArray1[1]).hasClass('x') && $(tdArray2[1]).hasClass('x') && $(tdArray3[1]).hasClass('x')) {
            alert('win');
        }
        if($(tdArray1[2]).hasClass('x') && $(tdArray2[2]).hasClass('x') && $(tdArray3[2]).hasClass('x')) {
            alert('win');
        }
        if($(tdArray1[0]).hasClass('x') && $(tdArray2[1]).hasClass('x') && $(tdArray3[2]).hasClass('x')) {
            alert('win');
        }
        if($(tdArray1[2]).hasClass('x') && $(tdArray2[1]).hasClass('x') && $(tdArray3[0]).hasClass('x')) {
            alert('win');
        }

    }


})();
