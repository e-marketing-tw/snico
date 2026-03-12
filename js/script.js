function go_link(e) {
    var url = $(e).attr("data-url");
    $(url).show().siblings('div').hide();
}


function color_rwd() {
    $('.color_in_box').each(function () {
        var this_w = $(this).outerWidth();
        $(this).css('height', this_w);
    });
    var customize_color_h = $('.customize_active').outerWidth() * 2;
    $('.customize_color').css('height', customize_color_h);
}

$(window).resize(function () {
    color_rwd()
});

$(window).on("load", function (e) {

    //調整界面顏色
    $('.color_type_white').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.avater_flipbook').addClass('white_type').removeClass('blue_type').removeAttr('style');
    });

    $('.color_type_black').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.avater_flipbook').removeClass('white_type').removeClass('blue_type').removeAttr('style');
    });

    $('.color_type_blue').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.avater_flipbook').addClass('blue_type').removeClass('white_type').removeAttr('style');
    });

    $('.color_customize').click(function () {
        $('.customize_avater_box').fadeIn();
        color_rwd()
    });


    $('.color_in_box').click(function () {
        $(this).addClass('customize_active').siblings().removeClass('customize_active');
    });

    //取消自選
    $('.customize_out').click(function () {
        $('.customize_avater_box').fadeOut();
    });

    //確定自選
    $('.customize_in').click(function () {
        $('.customize_avater_box').fadeOut();
        $('.color_customize').addClass('active').siblings().removeClass('active');
        var customize_color = $('.customize_active').children('div').attr('data-color');
        $('.avater_flipbook').css('background',customize_color);
    });




    //右上選單
    $(".has_nav_submenu").click(function () {
        if ($(this).hasClass('open')) {
            $('.has_nav_submenu').removeClass('open');
            $('.nav_submenu').stop().slideUp();
        } else {
            $('.nav_submenu').stop().slideUp();
            $('.has_nav_submenu').removeClass('open');
            $(this).addClass('open').next('.nav_submenu').stop().slideDown();
        }
    });

    //右上選單滑入
    $('.bottom_right_nav').hover(function () {
        $(this).addClass('hover_in');
    }, function () {
        $(this).removeClass('hover_in');
    });

    $(".bottom_right_nav").click(function () {
        $(this).removeClass('hover_in');
    });

    //回選單
    $(".back_nav").click(function () {
        if ($('.flipbook_left_nav').hasClass('open_in')) {
            if ($('.type_submenu').hasClass('open_in')) {
                $('.flipbook_left_nav').removeClass('open_in');
                setTimeout(function () {
                    $('.type_submenu').removeClass('open_in');
                    $('.flipbook_left_nav').addClass('open_in');
                }, 501)
            }
        } else {
            if ($('.type_submenu').hasClass('open_in')) {
                $('.type_submenu').removeClass('open_in');
                setTimeout(function () {
                    $('.flipbook_left_nav').addClass('open_in');
                }, 100)
            } else {
                $('.flipbook_left_nav').addClass('open_in');
            }
        }
        return false;
    });
});