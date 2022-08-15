$(document).ready(function(){

	$('.side-btn').click(function(){
        $("#nav-icon1").toggleClass('open');
        $('#sideBar').toggleClass('open');
        $('#main').toggleClass('open');
    });

    if($(window).width() < 750) {
        $('#main').removeClass('open');
        $('#sideBar').removeClass('open');
        $('#nav-icon1').removeClass('open');
    } else {
        $('#main').addClass('open');
        $('#sideBar').addClass('open');
        $('#nav-icon1').addClass('open');
    };

    $('.btn').addClass('ripple');
    $('button').addClass('ripple');
});

// permutation function:

function permu(val, i) {
    let result;
    if (Number.isInteger(val) && Number.isInteger(i)) {
        if (val > 0 && i > 0 && val >= i) {
            result = val;
            for (let iter = 1; iter < i; iter++) {
                result *= (val - iter);
            }
        } else if (i === 0 || i === 0 && val === 0) {
            result = 1;
        } else {
            result = "Math Error (-_-)";
        }
    }
    else {
        result = "Math Error (-_-)";
    }
    console.log(result);
}

// factorial function:

function fact(int) {
    let result;
    if (Number.isInteger(int) && int >= 1) {
        result = int;
        for (let i = 1; i < int; i++) {
            result *= (int - i);
        };
    } else if (Number.isInteger(int) && int === 0) {
        result = 1;
    } else {
        result = "Math Error (*_*)"
    }
    console.log(result);
}