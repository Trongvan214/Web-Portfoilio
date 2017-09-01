$(document).ready(function(){
    if(window.location.hash == '') {
        var originHost = window.location.origin;
        var currentPath = window.location.pathname;
        window.location.assign(originHost+currentPath+'#home');
    }
    if(window.location.hash == '#portfolio' || window.location.hash == '#skill')  {
        $('#menu').addClass('dark-toggle');
    }
//    if(window.location.hash == '#about') {          //to be con...
//        $('#home h1').animate({
//            'right': '+=650px'
//        }, 1000);
//    }
    var prevColor;
    $('.loading').css('display', 'none'); //remove when loading
    //        setTimeout(loading, 300);
    $(document).click(function (event) {
        var clickOver = $(event.target);
        var opened = $(".media-button").hasClass("media-active");
        if (opened === true && !clickOver.hasClass("media-active")) {
            $(".media-button").click();
        }
    });
    $('.media-button').on('click', function(){
        $(this).toggleClass('media-active');
    })
    $('.toggle-button').on('click', function(){
        var hasDarkMode = $('#menu').hasClass('dark-toggle');
        if(!$('#menu').hasClass('active')){
            if(hasDarkMode) {
                $('#menu').removeClass('dark-toggle');
                prevColor = 'dark';
            }
            else {
                prevColor = 'light';
            }
            $('#menu').addClass('active');
        }
        else {
            if(prevColor == 'dark') {
                $('#menu').addClass('dark-toggle');
                prevColor = 'light';
            }
            $('#menu').removeClass('active');
        }
    });
    $('a[href^="#"]').on('click', function(){
        if((this.hash == '#home' || this.hash == '#about')) {
            $('#menu').removeClass('active').removeClass('dark-toggle');
        }
        else {
            $('#menu').removeClass('active').addClass('dark-toggle');   
        }
    });
    $('#home span').on('click', function(e){
        e.preventDefault();
        $('.toggle-button').click();
    });
});

function loading() {
    $('.stick').addClass('progress');
    setTimeout(function(){
        $('.loading').addClass('active'); 
    },2500);
    setTimeout(function(){
        $('.stick').removeClass('scatter');
        $('.full-bg').fadeIn();
    }, 3000);
    setTimeout(function(){
        $('.stick').css('overflow', 'hidden');
        $('.stick div').addClass('slide-out');
        $('.stick').addClass('show-text'); 
        setTimeout(function(){
            $('.stick').removeClass('show-text')
        }, 1100);
    }, 5400);
    setTimeout(function(){
        $('.loading').css('display', 'none'); 
    },7800);
}
