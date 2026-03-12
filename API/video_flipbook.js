var link_url = location.href,
    myStr = link_url.indexOf("?n=", 0),
    length = link_url.length;
if (myStr > 0) {
    var n_id = link_url.substr(0, myStr),
        myStr2 = myStr + 3,
        // order_url = link_url.substr(myStr2, length),
        order = link_url.substr(myStr2, length) - 1;
    $('.flipbook_outbox').children('.flipbook_slider').eq(order).addClass('now_flipbook').siblings('.flipbook_slider').removeClass('now_flipbook');
    // $('.nav_submenu a').each(function (i) {  
    //     if (!$(this).hasClass('active')) {
    //         var mid = $(this).attr('href'),
    //             mid_url = mid + '?n=' + order_url;
    //         $(this).attr('href', mid_url)
    //     }
    // });
}
var ai_body = document.getElementsByTagName("body");
var ai_fixbtm = document.createElement('div');
ai_body[0].appendChild(ai_fixbtm);
ai_fixbtm.setAttribute("id", "draggable");
var add_top = "<div id='sjvid_box' class='sjvid_box'><div class='player_box' style='background-image: url(";
//固定AI頭像
var add_ai = ")'><div id='player'></div></div>";
var add_top_two = "<div class='player_now first_play'></div><div class='loader'><span></span><span></span><span></span><span></span></div><div class='sj_right_nav'><p class='sound'><img class='sound_off' src='API/icon/sound_off.png' alt><img class='sound_on' src='API/icon/sound_on.png' alt></p><p class='close_play'><img src='API/icon/close_icon.png' alt></p></div><div class='vid_nav'><p class='re_play'><img src='API/icon/re_play_icon.png' alt></p><div class='sj_lang_nav'><p class='flag_nav' data-id='tw'><img src='API/flag/cmn-TW.png' alt><span>tw</span></p></div><div class='sj_bottom_nav'><p class='sj_lang_close'><img src='API/icon/close_icon.png' alt></p><p>AI Language</p><div class='overflow_box'>";
//國家 系統有的AI語系要出現在這邊//
var add_center = "<div class='bottom_nav_box now_lang' id='cmn-TW'><a class='flag_lang' href='javascript:;' title='tw' data-url=''><img src='API/flag/cmn-TW.png' alt><p>TW</p></a></div><div class='bottom_nav_box' id='cmn-CN'><a class='flag_lang' href='javascript:;' title='ch' data-url=''><img src='API/flag/cmn-CN.png' alt><p>CH</p></a></div><div class='bottom_nav_box' id='en-US'><a class='flag_lang' href='javascript:;' title='us' data-url=''><img src='API/flag/en-US.png' alt><p>US</p></a></div><div class='bottom_nav_box' id='ja-JP'><a class='flag_lang' href='javascript:;' title='jp' data-url=''><img src='API/flag/ja-JP.png' alt><p>JP</p></a></div><div class='bottom_nav_box' id='es-ES'><a class='flag_lang' href='javascript:;' title='es' data-url=''><img src='API/flag/es-ES.png' alt><p>ES</p></a></div><div class='bottom_nav_box' id='fr-FR'><a class='flag_lang' href='javascript:;' title='fr' data-url=''><img src='API/flag/fr-FR.png' alt><p>FR</p></a></div><div class='bottom_nav_box' id='pt-PT'><a class='flag_lang' href='javascript:;' title='pt' data-url=''><img src='API/flag/pt-PT.png' alt><p>PT</p></a></div><div class='bottom_nav_box' id='de-DE'><a class='flag_lang' href='javascript:;' title='de' data-url=''><img src='API/flag/de-DE.png' alt><p>DE</p></a></div><div class='bottom_nav_box' id='tr-TR'><a class='flag_lang' href='javascript:;' title='tr' data-url=''><img src='API/flag/tr-TR.png' alt><p>TR</p></a></div><div class='bottom_nav_box' id='ar-SA'><a class='flag_lang' href='javascript:;' title='sa' data-url=''><img src='API/flag/ar-SA.png' alt><p>SA</p></a></div><div class='bottom_nav_box now_lang' id='ms-MY'><a class='flag_lang' href='javascript:;' title='my' data-url=''><img src='API/flag/ms-MY.png' alt><p>MY</p></a></div>";
var add_bottom = "</div></div></div><div class='ai_progress' onmouseup='AIplayVideo()'><div class='progress_bg'><div class='progress_bar'></div></div><div class='progress_btn'></div></div></div>";
var add_html = add_top + add_ai + add_top_two + add_center + add_bottom;
$('#draggable').html(add_html);
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var tag2 = document.createElement('script');
tag2.src = "API/jquery-ui.min.js";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
firstScriptTag.parentNode.insertBefore(tag2, firstScriptTag);
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'API/css/style-video.css';
document.getElementsByTagName('body')[0].appendChild(link);
var player;
var player_avater;
var player_in_out;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: '',
        playerVars: {
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            frameborder: 0,
            disablekb: 1,
            loop: 0,
            fs: 1,
            rel: 0,
            cc_load_policy: 0,
            iv_load_policy: 3,
            autohide: 0,
            playsinline: 1,
            enablejsapi: 1,
        },
        enablejsapi: 1,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player_avater = new YT.Player('player_avater', {
        videoId: '',
        playerVars: {
            autoplay: 1,
            controls: 1,
            showinfo: 0,
            modestbranding: 1,
            frameborder: 0,
            disablekb: 1,
            loop: 0,
            fs: 1,
            rel: 0,
            cc_load_policy: 0,
            iv_load_policy: 3,
            autohide: 0,
            playsinline: 1,
            enablejsapi: 1,
        },
        enablejsapi: 1,
        events: {
            'onStateChange': onPlayerStateChange_avater
        }
    });
    player_in_out = new YT.Player('player_in_out', {
        videoId: '',
        playerVars: {
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            frameborder: 0,
            disablekb: 1,
            loop: 0,
            fs: 0,
            rel: 0,
            cc_load_policy: 0,
            iv_load_policy: 3,
            autohide: 0,
            playsinline: 1,
            enablejsapi: 1,
        },
        enablejsapi: 1,
        events: {
            'onReady': onPlayerReady_in,
            'onStateChange': onPlayerStateChange_in
        }
    });
}
var a = false;
var b = false;
//判斷資料圖片輪播數字
function slider_th_rwd() {
    $(".avater_slider_box").each(function (i) {
        var th = $(this).attr('data-th'),
            table_length = parseInt(th) + 1;
        if (table_length < 10) {
            var th_text = '0' + table_length;
        } else {
            var th_text = table_length;
        }
        $(this).prevAll('.avater_date_th').children('.now_dot').text(th_text);
    });
}
function init() {
    setInterval(getJindu, 500)
}
function init_in() {
    setInterval(getJindu_in, 500)
}
function getJindu() {
    if (a) {
        var duration = player.getDuration() - .51;
        var now_time = player.getCurrentTime();
        var date_id = '#' + $('.area_point.now_avater_date').attr('data-id'),
            next_time = $(date_id).find('.now_slider').next('.avater_slider_in').attr('data-time'),
            play_time = $(date_id).find('.now_slider').attr('data-time'),
            prev_time = $(date_id).find('.now_slider').prev('.avater_slider_in').attr('data-time');
        if (prev_time) {
            var go_prev = Number(play_time);
            if (now_time < go_prev) {
                var table_length = $(date_id).find('.avater_slider_in').length,
                    th = $(date_id).find('.avater_slider_box').attr('data-th'),
                    dot_th = parseInt(th) - 1;
                if (parseInt(th) >= 0) {
                    var mov_w = '-' + dot_th * 100 + '%';
                    $(date_id).find('.avater_slider_box').children('.avater_slider_in:first-child').css('margin-left', mov_w);
                    $(date_id).find('.avater_slider_box').attr('data-th', dot_th);
                    $(date_id).find('.control_next').removeClass('scrol_disabled');
                    $(date_id).find('.avater_date_dot').children('p').eq(dot_th).addClass('active').siblings().removeClass('active');
                    if (dot_th < 1) {
                        $(this).addClass('scrol_disabled');
                    }
                }
                slider_th_rwd()
                $(date_id).find('.avater_slider_in').eq(dot_th).addClass('now_slider').siblings('.avater_slider_in').removeClass('now_slider');
                if ($(date_id).find('.pdt_ai_bottom').eq(dot_th).length) {
                    $(date_id).find('.pdt_ai_bottom').eq(dot_th).addClass('in').siblings('.pdt_ai_bottom').removeClass('in')
                    $('.pdt_ai_bottom').scrollTop(0);
                }
            } else {
                if (next_time) {
                    var go_time = Number(next_time);
                    var now_time2 = parseInt(now_time);
                    if (now_time2 == go_time) {
                        $('.now_date_avater').find('.now_slider .play_video').click();
                    }
                    if (now_time > go_time) {
                        var table_length = $(date_id).find('.avater_slider_in').length,
                            max_length = table_length - 1,
                            th = $(date_id).find('.avater_slider_box').attr('data-th'),
                            dot_th = parseInt(th) + 1;
                        if (parseInt(th) < table_length) {
                            var mov_w = '-' + dot_th * 100 + '%';
                            $(date_id).find('.avater_slider_box').children('.avater_slider_in:first-child').css('margin-left', mov_w);
                            $(date_id).find('.avater_slider_box').attr('data-th', dot_th);
                            $(date_id).find('.control_prev').removeClass('scrol_disabled');
                            $(date_id).find('.avater_date_dot').children('p').eq(dot_th).addClass('active').siblings().removeClass('active');
                            if (dot_th >= max_length) {
                                $(date_id).find('.control_next').addClass('scrol_disabled');
                            }
                        }
                        slider_th_rwd()
                        $(date_id).find('.now_slider').next('.avater_slider_in').addClass('now_slider').siblings('.avater_slider_in').removeClass('now_slider');
                        if ($(date_id).find('.pdt_ai_bottom').eq(dot_th).length) {
                            $(date_id).find('.pdt_ai_bottom').eq(dot_th).addClass('in').siblings('.pdt_ai_bottom').removeClass('in');
                            $('.pdt_ai_bottom').scrollTop(0);
                        }
                    }
                }
            }
        } else {
            if (next_time) {
                var go_time = Number(next_time);
                var now_time2 = parseInt(now_time);
                if (now_time2 == go_time) {
                    $('.now_date_avater').find('.now_slider .play_video').click();
                }
                if (now_time > go_time) {
                    var table_length = $(date_id).find('.avater_slider_in').length,
                        max_length = table_length - 1,
                        th = $(date_id).find('.avater_slider_box').attr('data-th'),
                        dot_th = parseInt(th) + 1;
                    if (parseInt(th) < table_length) {
                        var mov_w = '-' + dot_th * 100 + '%';
                        $(date_id).find('.avater_slider_box').children('.avater_slider_in:first-child').css('margin-left', mov_w);
                        $(date_id).find('.avater_slider_box').attr('data-th', dot_th);
                        $(date_id).find('.control_prev').removeClass('scrol_disabled');
                        $(date_id).find('.avater_date_dot').children('p').eq(dot_th).addClass('active').siblings().removeClass('active');
                        if (dot_th >= max_length) {
                            $(date_id).find('.control_next').addClass('scrol_disabled');
                        }
                    }
                    slider_th_rwd()
                    $(date_id).find('.now_slider').next('.avater_slider_in').addClass('now_slider').siblings('.avater_slider_in').removeClass('now_slider');
                    if ($(date_id).find('.pdt_ai_bottom').eq(dot_th).length) {
                        $(date_id).find('.pdt_ai_bottom').eq(dot_th).addClass('in').siblings('.pdt_ai_bottom').removeClass('in');
                        $('.pdt_ai_bottom').scrollTop(0);
                    }
                } else {
                    $(date_id).find('.control_prev').addClass('scrol_disabled');
                }
            }
        }
        if (now_time > duration) {
            player.pauseVideo();
            player.seekTo(0);
            $('.player_box, .player_now, .sj_right_nav').removeClass('playing');
            // if (play_time) {
                $(date_id).find('.now_slider .play_video').click();
            // }
            if ($('.now_date_avater').find('.avater_slider_in').eq(0).attr('data-time')) {
                $('.now_date_avater').find('.now_dot').text('01');
                $('.now_date_avater').find('.avater_slider_box').attr('data-th', '0');
                $('.now_date_avater').find('.avater_slider_box').children('.avater_slider_in:first-child').css('margin-left', '0');
                $('.now_date_avater').find('.avater_slider_in').eq(0).addClass('now_slider').siblings('.avater_slider_in').removeClass('now_slider');
                $('.now_date_avater').find('.pdt_ai_bottom').eq(0).addClass('in').siblings('.pdt_ai_bottom').removeClass('in');
                $('.now_date_avater').find('.avater_date_dot p').eq(0).addClass('active').siblings().removeClass('active');
                $('.pdt_ai_bottom').scrollTop(0);
                $('.now_date_avater').find('.control_prev').addClass('scrol_disabled');
                if ($('.now_date_avater').find('.avater_slider_in').length > 1) {
                    $('.now_date_avater').find('.control_next').removeClass('scrol_disabled');
                }
            }
            stopTimer()
        }
    } else {
        stopTimer()
    }
}
function getJindu_in() {
    if (b) {
        var duration = player_in_out.getDuration() - .51;
        var now_time = player_in_out.getCurrentTime();
        if (now_time > duration) {
            player_in_out.pauseVideo();
            player_in_out.seekTo(0);
            $('.player_box_in, .player_now_in, .sj_right_nav_in').removeClass('playing');
            stopTimer_in()
        }
    } else {
        stopTimer_in()
    }
}
function stopTimer() {
    a = false;
}
function startTimer() {
    a = true;
}
function stopTimer_in() {
    b = false;
}
function startTimer_in() {
    b = true;
}
function onPlayerReady_in(event) {
    init_in()
    player_in_out.addEventListener('onStateChange', function (state) {
        setInterval(function () {
            var duration = player_in_out.getDuration();
            var now_time = player_in_out.getCurrentTime();
            var bar_w = $('.progress_bg_in').innerWidth();
            var go_w = bar_w / duration * now_time;
            $('.progress_btn_in').css('left', go_w);
            $('.progress_bar_in').width(go_w);
        }, 500);
    });
}
function onPlayerReady(event) {
    init()
    player.addEventListener('onStateChange', function (state) {
        setInterval(function () {
            var duration = player.getDuration();
            var now_time = player.getCurrentTime();
            var bar_w = $('.progress_bg').innerWidth();
            var go_w = bar_w / duration * now_time;
            $('.progress_btn').css('left', go_w);
            $('.progress_bar').width(go_w);
        }, 500);
    });
}
$(function () {
    var tag = false,
        ox = 0,
        left = 0,
        bgleft = 0;
    $('.progress_btn').mousedown(function (e) {
        ox = e.pageX - left;
        tag = true;
    });
    $('.progress_btn_in').mousedown(function (e) {
        ox = e.pageX - left;
        tag = true;
    });
    $(document).mouseup(function () {
        tag = false;
    });
    $('.progress_bg').click(function (e) { //滑鼠點擊
        if (!tag) {
            AIpauseVideo()
            bgleft = $('.progress_bg').offset().left;
            left = e.pageX - bgleft;
            var bar_w = $('.progress_bg').innerWidth();
            if (left <= 0) {
                left = 0;
            } else if (left > bar_w) {
                left = bar_w;
            }
            var pausetime = player.getDuration();
            var new_time = left / bar_w * pausetime;
            player.seekTo(new_time);
            AIplayVideo()
        }
    });
    $('.progress_bg_in').click(function (e) { //滑鼠點擊
        if (!tag) {
            AIpauseVideo_in()
            bgleft = $('.progress_bg_in').offset().left;
            left = e.pageX - bgleft;
            var bar_w = $('.progress_bg_in').innerWidth();
            if (left <= 0) {
                left = 0;
            } else if (left > bar_w) {
                left = bar_w;
            }
            var pausetime = player_in_out.getDuration();
            var new_time = left / bar_w * pausetime;
            player_in_out.seekTo(new_time);
            AIplayVideo_in()
        }
    });
});
var done = false,
    loop = 0,
    state, end;
function getCookie(cookieName) {
    var name = cookieName + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
function onPlayerStateChange_avater(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
    }
    if (event.data == -1) {
        state = -1; //unstarted
    }
    if (event.data == 0) {
        state = 0; //ended
        player_avater.seekTo(0);
        player_avater.pauseVideo();
        player_avater.stopVideo();
        auto_next_slider()
    } else {
        end = 0;
    }
    if (event.data == 1) {
        state = 1; //playing
    }
    if (event.data == 2) {
        state = 2; //paused
        stopTimer()
    }
    if (event.data == 3) {
        state = 3; //buffering
    }
    if (event.data == 5) {
        state = 5; //video cued
    }
}
function avater_playt(e) {
    var vid = $(e).attr('data-vid');
    var myStr = vid.indexOf("?t=", 0),
        length = vid.length;
    if (myStr > 0) {
        var n_id = vid.substr(0, myStr),
            myStr2 = myStr + 3,
            time = vid.substr(myStr2, length);
        player_avater.loadVideoById(n_id, time);
    } else {
        player_avater.loadVideoById(vid, 0);
    }
	
	//點了ICON後，直接撥出聲音
    player_avater.unMute();
    player_avater.setVolume(50);
	
    AIpauseVideo()
    $(".player_now, .sj_right_nav").removeClass('playing');
}
function avaterstopVideo() {
    if (state) player_avater.stopVideo();
}
function avaterpauseVideo() {
    player_avater.pauseVideo();
}
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
    }
    if (event.data == -1) {
        state = -1; //unstarted
    }
    if (event.data == 0) {
        state = 0; //ended
        $('.player_box, .player_now, .sj_right_nav').removeClass('playing');
    } else {
        end = 0;
    }
    if (event.data == 1) {
        state = 1; //playing
        $('.player_box, .player_now, .sj_right_nav').addClass('playing');
        $('.first_play').removeClass('first_play');
        startTimer()
    }
    if (event.data == 2) {
        state = 2; //paused
        stopTimer()
    }
    if (event.data == 3) {
        state = 3; //buffering
    }
    if (event.data == 5) {
        state = 5; //video cued
    }
}
function AIstopVideo() {
    stopTimer()
    if (state) player.stopVideo();
}
function AIplayVideo() {
    player.playVideo();
    player.unMute();
}
function AIpauseVideo() {
    player.pauseVideo();
}
function AIallstop() {
    //    AIstopVideo()
    playt('')
    $('.now_play_point').removeClass('now_play_point');
    $('.sjvid_box').removeClass('show_in');
    $('.player_box, .sj_right_nav').removeClass('playing');
}
function playt(vid) {
    stopTimer()
    player.loadVideoById(vid, 0);
    $('.sjvid_box').addClass('show_in');
}
function no_addvid() {
    avaterstopVideo()
    $('.img_avater_box').show().next('.video_avater_box').hide();
    $('.in_avater').removeClass('videoplay_type');
    $('.now_play_point').removeClass('now_play_point');
    $('.sjvid_box').removeClass('show_in');
    $('.player_box, .sj_right_nav').removeClass('playing');
    AIallstop()
}
function addvid(e) {
    var str = $(e).attr('data-vid');
    $('.img_avater_box').show().next('.video_avater_box').hide();
    $('.in_avater').removeClass('videoplay_type');
    avaterstopVideo()
    $('.sj_bottom_nav').removeClass('first_load')
    var img = $(e).attr('data-img');
    i = 0
    const arr_img = img.split(",");
    $('.bottom_nav_box').hide();
    for (i = 0; i < 20; i++) {　
        var n_str = arr_img[i];
        if (n_str == undefined) {} else {
            var myStr = n_str.indexOf(":", 1),
                myStr2 = n_str.indexOf(":", 1) + 1,
                myStr3 = n_str.length,
                vid_lang = n_str.substr(0, myStr),
                img_url = n_str.substr(myStr2, myStr3),
                nav_id = '#' + vid_lang;
            $(nav_id).children('.flag_lang').attr("data-img", img_url);
        }
    }
    if ($('.avater_date_box').hasClass('show_in')) {
        $('.in_avater').removeClass('videoplay_type');
        $('.player_box').removeClass('playing');
        i = 0
        const arr = str.split(",");
        $('.bottom_nav_box').hide();
        for (i = 0; i < 20; i++) {　
            if (i == 0) {
                var myStr = str.indexOf(":", 1),
                    myStr2 = str.indexOf(":", 1) + 1,
                    myStr3 = str.indexOf(",", 1),
                    myStr4 = myStr3 - myStr2,
                    vid_lang = str.substr(0, myStr),
                    vid_id = str.substr(myStr2, myStr4),
                    nav_id = '#' + vid_lang;
                if (!$('.sj_bottom_nav').hasClass('first_load')) {
                    //                $('.bottom_nav_box').hide();
                    $(nav_id).show().addClass('has_lang').addClass('now_lang').siblings().removeClass('now_lang');
                    $('.sj_bottom_nav').addClass('first_load')
                } else {
                    $(nav_id).show().addClass('has_lang');
                }
                var now_img = $(".now_lang").children('.flag_lang').children('img').attr('src'),
                    now_lang = $(".now_lang").children('.flag_lang').attr('title');
                $(nav_id).children('.flag_lang').attr("data-url", vid_id);
                $('.flag_nav').children('img').attr("src", now_img);
                $('.flag_nav').children('span').text(now_lang);
                $('.flag_nav').attr("data-id", now_lang);
                //              playt(vid_id);
            } else {
                var n_str = arr[i];
                if (n_str == undefined) {} else {
                    var myStr = n_str.indexOf(":", 1),
                        myStr2 = n_str.indexOf(":", 1) + 1,
                        myStr3 = n_str.length,
                        vid_lang = n_str.substr(0, myStr),
                        vid_id = n_str.substr(myStr2, myStr3),
                        nav_id = '#' + vid_lang;
                    $(nav_id).show().addClass('has_lang');
                    $(nav_id).children('.flag_lang').attr("data-url", vid_id);
                }
            }
        }
        if (!$('.sj_bottom_nav').hasClass('cookie_load')) {
            var has_cookie = getCookie('ai_lang'),
                cookie_length = has_cookie.length;
            if (cookie_length > 0) {
                if ($(has_cookie).hasClass('has_lang')) {
                    $(has_cookie).addClass('now_lang').siblings().removeClass('now_lang')
                    var now_img = $(".now_lang").children('.flag_lang').children('img').attr('src'),
                        now_lang = $(".now_lang").children('.flag_lang').attr('title');
                    $('.flag_nav').children('img').attr("src", now_img);
                    $('.flag_nav').children('span').text(now_lang);
                    $('.flag_nav').attr("data-id", now_lang);
                }
            }
            $('.sj_bottom_nav').addClass('cookie_load');
        }
        var video_id = $('.now_lang').children('.flag_lang').attr('data-url'),
            vidoe_img = $('.now_lang').children('.flag_lang').attr('data-img');
        $('#sjvid_box').children('.player_box').css({
            'background-image': 'url(' + vidoe_img + ')'
        });
        setTimeout(function () {
            playt(video_id);
            time_lang();
        }, 301)
    } else {
        setTimeout(function () {
            $('.in_avater').removeClass('videoplay_type');
            $('.player_box').removeClass('playing');
            i = 0
            const arr = str.split(",");
            $('.bottom_nav_box').hide();
            for (i = 0; i < 20; i++) {　
                if (i == 0) {
                    var myStr = str.indexOf(":", 1),
                        myStr2 = str.indexOf(":", 1) + 1,
                        myStr3 = str.indexOf(",", 1),
                        myStr4 = myStr3 - myStr2,
                        vid_lang = str.substr(0, myStr),
                        vid_id = str.substr(myStr2, myStr4),
                        nav_id = '#' + vid_lang;
                    if (!$('.sj_bottom_nav').hasClass('first_load')) {
                        //                $('.bottom_nav_box').hide();
                        $(nav_id).show().addClass('has_lang').addClass('now_lang').siblings().removeClass('now_lang');
                        $('.sj_bottom_nav').addClass('first_load')
                    } else {
                        $(nav_id).show().addClass('has_lang');
                    }
                    var now_img = $(".now_lang").children('.flag_lang').children('img').attr('src'),
                        now_lang = $(".now_lang").children('.flag_lang').attr('title');
                    $(nav_id).children('.flag_lang').attr("data-url", vid_id);
                    $('.flag_nav').children('img').attr("src", now_img);
                    $('.flag_nav').children('span').text(now_lang);
                    $('.flag_nav').attr("data-id", now_lang);
                    //              playt(vid_id);
                } else {
                    var n_str = arr[i];
                    if (n_str == undefined) {} else {
                        var myStr = n_str.indexOf(":", 1),
                            myStr2 = n_str.indexOf(":", 1) + 1,
                            myStr3 = n_str.length,
                            vid_lang = n_str.substr(0, myStr),
                            vid_id = n_str.substr(myStr2, myStr3),
                            nav_id = '#' + vid_lang;
                        $(nav_id).show().addClass('has_lang');
                        $(nav_id).children('.flag_lang').attr("data-url", vid_id);
                    }
                }
            }
            if (!$('.sj_bottom_nav').hasClass('cookie_load')) {
                var has_cookie = getCookie('ai_lang'),
                    cookie_length = has_cookie.length;
                if (cookie_length > 0) {
                    if ($(has_cookie).hasClass('has_lang')) {
                        $(has_cookie).addClass('now_lang').siblings().removeClass('now_lang')
                        var now_img = $(".now_lang").children('.flag_lang').children('img').attr('src'),
                            now_lang = $(".now_lang").children('.flag_lang').attr('title');
                        $('.flag_nav').children('img').attr("src", now_img);
                        $('.flag_nav').children('span').text(now_lang);
                        $('.flag_nav').attr("data-id", now_lang);
                    }
                }
                $('.sj_bottom_nav').addClass('cookie_load');
            }
            var video_id = $('.now_lang').children('.flag_lang').attr('data-url'),
                vidoe_img = $('.now_lang').children('.flag_lang').attr('data-img');
            $('#sjvid_box').children('.player_box').css({
                'background-image': 'url(' + vidoe_img + ')'
            });
            setTimeout(function () {
                playt(video_id);
                time_lang();
            }, 301)
        }, 500);
    }
}
function onPlayerStateChange_in(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
    }
    if (event.data == -1) {
        state = -1; //unstarted
    }
    if (event.data == 0) {
        state = 0; //ended
        $('.player_box_in, .player_now_in, .sj_right_nav_in').removeClass('playing');
    } else {
        end = 0;
    }
    if (event.data == 1) {
        state = 1; //playing
        $('.player_box_in, .player_now_in, .sj_right_nav_in, .sjvid_avater').addClass('playing');
        startTimer_in()
    }
    if (event.data == 2) {
        state = 2; //paused
        stopTimer_in()
    }
    if (event.data == 3) {
        state = 3; //buffering
    }
    if (event.data == 5) {
        state = 5; //video cued
    }
}
function AIstopVideo_in() {
    stopTimer_in()
    if ($('#player_in_out').length>0 && state) player_in_out.stopVideo();
}
function AIplayVideo_in() {
    player_in_out.playVideo();
    player_in_out.unMute();
}
function AIpauseVideo_in() {
    if ($('#player_in_out').length>0 && state) player_in_out.pauseVideo();
}
function AIallstop_in() {
    AIstopVideo_in()
    $('.now_play_point').removeClass('now_play_point');
    $('.sjvid_box').removeClass('show_in');
    $('.player_box, .sj_right_nav').removeClass('playing');
}
function playt_in(vid) {
    stopTimer_in()
    player_in_out.loadVideoById(vid, 0);
}
function addvid_in() {
    var vid = $('.now_lang_in').children('.flag_lang_in').attr('data-url');
    playt_in(vid)
}
function open_link_date(e) {
    var hide_date = $(e).next('.link_hide_text').html();
    AIpauseVideo();
    avaterpauseVideo()
    $('.player_now, .sj_right_nav').removeClass('playing');
    $('.link_date_box').fadeIn().find('.in_date_box').html(hide_date);
}
function go_url(e) {
    $(".flipbook_avater, .open_avater_date").removeClass('now_avater_date');
    $('.avater_date_box').removeClass('show_in');
    $('.progress_btn, .progress_bar').removeAttr('style');
    AIallstop()
    avaterstopVideo()
    $('.sjvid_box, .player_now, .sj_right_nav').removeClass('playing');
    setTimeout(function () {
        $('.in_avater').removeClass('videoplay_type');
    }, 301)
    if ($('#sjvid_box_in').length > 0) {
        $('.sjvid_box_in, #draggable_in').removeClass('show_in');
        $('.player_box_in, .player_now_in, .sj_right_nav_in').removeClass('playing');
        AIallstop_in()
    }
    var go_url = $(e).attr('data-url');
    window.open(go_url);
    //第一層選單下拉
    $('.type_submenu').removeClass('open_in');
    $('#nav_'+$(e).attr('data-id')).addClass('go_url');
    setTimeout(function(){
        $('.go_url').parent().prev('p').addClass('now_avater_type');
    },800)
}
$('.close_link_date').click(function () {
    $('.link_date_box').fadeOut();
});
$(".re_play").click(function () {
    player.seekTo(0);
    AIplayVideo()
});
$(".re_play_in").click(function () {
    if ($('.sjvid_avater').hasClass('playing')) {
        player_in_out.seekTo(0);
        AIplayVideo_in()
    } else {
        addvid_in()
    }
});
$('.sound').click(function () {
    if ($(this).hasClass('first_play')) {
        $(this).removeClass('first_play');
        playt(video_id);
    }
});
$(".sound").click(function () {
    $(this).parent().next('.vid_nav').fadeIn(300);
    if ($(".player_now").hasClass('playing')) {
        $(".player_now").removeClass('playing');
        $('.sj_right_nav').removeClass('playing');
        AIpauseVideo()
    } else {
        $(".player_now").addClass('playing');
        $('.sj_right_nav').addClass('playing');
        AIplayVideo()
    }
});
$(".sound_in").click(function () {
    $(this).parent().next('.vid_nav').fadeIn(300);
    if ($(".player_now_in").hasClass('playing')) {
        $(".player_now_in").removeClass('playing');
        $('.sj_right_nav_in').removeClass('playing');
        AIpauseVideo_in()
    } else {
        if ($('.sjvid_avater').hasClass('playing')) {
            $(".player_now_in").addClass('playing');
            $('.sj_right_nav_in').addClass('playing');
            AIplayVideo_in()
        } else {
            addvid_in()
        }
    }
});
//$(".player_now").click(function () {
//    if ($(this).hasClass('first_play')) {
//        $(this).removeClass('first_play');
//        playt(video_id);
//    }
//    if ($(this).hasClass('playing')) {
//        $(this).removeClass('playing');
//        $('.sj_right_nav').removeClass('playing');
//        AIpauseVideo()
//    } else {
//        $(this).addClass('playing');
//        $('.sj_right_nav').addClass('playing');
//        AIplayVideo()
//    }
//});
$(".player_now").mousedown(function () {
    var flag = true;
    var stop;
    stop = setTimeout(function () { //down 1s，才运行。
        flag = false;
    }, 1000);
    $(".player_now").mouseup(function () { //鼠标up时，判断down了多久，不足一秒，不执行down的代码。
        if (flag) {
            if ($(this).hasClass('playing')) {
                $(this).removeClass('playing');
                $('.sj_right_nav').removeClass('playing');
                AIpauseVideo()
            } else {
                $(this).addClass('playing');
                $('.sj_right_nav').addClass('playing');
                AIplayVideo()
            }
        }
    });
});
//$(".player_now_in").click(function () {
//    if ($(this).hasClass('playing')) {
//        $(this).removeClass('playing');
//        $('.sj_right_nav_in').removeClass('playing');
//        AIpauseVideo_in()
//    } else {
//        if ($('.sjvid_avater').hasClass('playing')) {
//            $(this).addClass('playing');
//            $('.sj_right_nav_in').addClass('playing');
//            AIplayVideo_in()
//        } else {
//            addvid_in()
//
//        }
//    }
//});
$(".player_now_in").mousedown(function () {
    var flag = true;
    var stop;
    stop = setTimeout(function () { //down 1s，才运行。
        flag = false;
    }, 1000);
    $(".player_now_in").mouseup(function () { //鼠标up时，判断down了多久，不足一秒，不执行down的代码。
        if (flag) {
            if ($(this).hasClass('playing')) {
                $(this).removeClass('playing');
                $('.sj_right_nav_in').removeClass('playing');
                AIpauseVideo_in()
            } else {
                if ($('.sjvid_avater').hasClass('playing')) {
                    $(this).addClass('playing');
                    $('.sj_right_nav_in').addClass('playing');
                    AIplayVideo_in()
                } else {
                    addvid_in()
                }
            }
        }
    });
});
$(".sjvid_avater, .text_date_play").click(function () {
    if ($('.sjvid_avater').hasClass('playing')) {
        $('.sjvid_avater, .sj_right_nav_in').addClass('playing');
        AIplayVideo_in()
    } else {
        addvid_in()
    }
});
$(".close_chat").click(function () {
    $('#draggable_in').remove();
    $('.chat_nav_in').addClass('chat_out');
    $('.sjvid_avater_box').hide();
    $('.sjvid_avater').stop().fadeOut(300);
});
$("#sjvid_box .close_avater, #sjvid_box .close_play").click(function () {
    _ = $(this);
    AIallstop()
    $('.player_box, .player_now, .sj_right_nav').removeClass('playing');
    $('.progress_btn, .progress_bar').removeAttr('style');
});
$(".close_play_in").click(function () {
    $('.sjvid_box_in, #draggable_in').removeClass('show_in');
    $('.player_box_in, .player_now_in, .sj_right_nav_in').removeClass('playing');
    AIallstop_in()
});
$(".flag_lang").click(function () {
    $('.player_box').removeClass('playing');
    var now_img = $(this).children('img').attr('src'),
        now_lang = $(this).attr('title'),
        video_id = $(this).attr('data-url'),
        vidoe_img = $(this).attr('data-img');
    $('#sjvid_box').children('.player_box').css({
        'background-image': 'url(' + vidoe_img + ')'
    });
    $('.flag_nav').children('img').attr("src", now_img);
    $('.flag_nav').children('span').text(now_lang);
    $('.flag_nav').attr("data-id", now_lang);
    $(this).parent('.bottom_nav_box').addClass('now_lang').siblings().removeClass('now_lang');
    playt(video_id)
    var cookie_now = 'ai_lang=#' + now_lang + ';path=/'
    document.cookie = cookie_now;
    time_lang();
});
$(".flag_lang_in").click(function () {
    $('.player_box_in').removeClass('playing');
    var now_img = $(this).children('img').attr('src'),
        now_lang = $(this).attr('title'),
        video_id = $(this).attr('data-url'),
        now_text = '#text_' + now_lang,
        vidoe_img = $(this).attr('data-img');
    $('#sjvid_box_in').children('.player_box_in').css({
        'background-image': 'url(' + vidoe_img + ')'
    });
    $(now_text).addClass('now_lang_text').siblings('.date_lang').removeClass('now_lang_text');
    $('.flag_nav_in').children('img').attr("src", now_img);
    $('.flag_nav_in').children('span').text(now_lang);
    $('.flag_nav_in').attr("data-id", now_lang);
    $(this).parent('.bottom_nav_box_in').addClass('now_lang_in').siblings().removeClass('now_lang_in');
    playt_in(video_id)
    var cookie_now = 'ai_lang=#' + now_lang + ';path=/'
    document.cookie = cookie_now;
});
// $('.sj_lang_nav').click(function () {
//     $('.sj_bottom_nav').stop().slideToggle();
// });
// $('.sj_lang_close').click(function () {
//     $('.sj_bottom_nav').stop().slideUp();
// });
// $('.sj_lang_nav_in').click(function () {
//     $('.sj_bottom_nav_in').stop().slideToggle();
// });
// $('.sj_lang_close_in').click(function () {
//     $('.sj_bottom_nav_in').stop().slideUp();
// });
$('.chat_nav_in').click(function () {
    $(this).stop().toggleClass('chat_out');
    $('.sjvid_avater').stop().fadeToggle();
});
function flipbook_rwd() {
    var h_h = window.innerHeight;
    if ($('.flipbook_index_date').length > 0) {
        var nav_top2 = $('.flipbook_index_date').offset().top,
            nav_h2 = h_h - nav_top2;
        $('.flipbook_index_date').css('height', nav_h2);
    }
    if ($('.flipbook_type_date').length > 0) {
        var nav_top = $('.flipbook_type_date').offset().top,
            nav_h = h_h - nav_top;
        $('.flipbook_type_date').css('height', nav_h);
    }
}
function area_rwd() {
    $(".area_point").each(function (i) {
        var img_w = $(this).parent('map').prev('img').get(0).naturalWidth;
        var parent_w = $(this).parent('map').prev('img').innerWidth(),
            proportion = parent_w / img_w,
            coords = $(this).attr('data-coords');
        i = 0
        const arr = coords.split(",");
        var n_str_0 = arr[0] * proportion,
            n_str_1 = arr[1] * proportion,
            n_str_2 = arr[2] * proportion,
            n_str_3 = arr[3] * proportion,
            proportion_0 = Math.round(n_str_0),
            proportion_1 = Math.round(n_str_1),
            proportion_2 = Math.round(n_str_2),
            proportion_3 = Math.round(n_str_3),
            new_proportion = proportion_0 + ',' + proportion_1 + ',' + proportion_2 + ',' + proportion_3;
        $(this).attr('coords', new_proportion);
    });
    area_active()
}
function area_active() {
    if ($('.area_point').hasClass('now_avater_date')) {
        now_point=$('.area_point.now_avater_date');
        var active_coords = now_point.attr('coords');
        i = 0
        const arr = active_coords.split(",");
        var n_str_0 = arr[0],
            n_str_1 = arr[1],
            n_str_2 = arr[2],
            n_str_3 = arr[3],
            proportion_0 = Number(n_str_0),
            proportion_1 = Number(n_str_1),
            proportion_2 = Number(n_str_2),
            proportion_3 = Number(n_str_3),
            box_w = proportion_2 - proportion_0,
            box_h = proportion_3 - proportion_1;
        if (box_w > 0) {
            now_point.parent('map').next('.active_point').fadeIn().css('width', box_w).css('height', box_h).css('left', proportion_0).css('top', proportion_1);
            (now_point.data('point') == 'rect') ? $('.active_point').addClass('rect') : $('.active_point').removeClass('rect');
        }
    }
}
//判斷型錄左右移動案鈕出現
function control_show_rwd() {
    $(".now_flipbook").each(function (i) {
        $(this).stop().animate({
            scrollLeft: 0
        }, 1);
        var table_width = $(this).parent('.flipbook_outbox').outerWidth(),
            table_group_width = $(this).outerWidth();
        if (table_group_width > table_width) {
            $('.avater_right').removeClass('scrol_disabled');
            $('.avater_left').addClass('scrol_disabled');
        } else {
            $('.avater_right, .avater_left').addClass('scrol_disabled');
        }
    });
}
//判斷型錄資料左右RWD 
function control_nav_rwd() {
    $(".flipbook_outbox").each(function (i) {
        $(".flipbook_outbox").css('width', '');
        $('.flipbook_page').css('width', '');
        var all_w = $(this).outerWidth(),
            two_w = all_w / 2;
        (all_w % 2 == 1) && (all_w=all_w+1);
        $(this).css('width', all_w);
        $('.flipbook_page').css('width', two_w);
    });
    $(".avater_slider_box").each(function (i) {
        var proportion = $(this).attr('data-proportion'),
            table_width = $(this).outerWidth(),
            table_length = $(this).children('.avater_slider_in').length,
            table_group_width = table_width * table_length,
            move_left = proportion * table_group_width;
        $(this).stop().animate({
            scrollLeft: move_left
        }, 1);
    });
    $(".flipbook_outbox").each(function (i) {
        var proportion = $(this).attr('data-proportion'),
            table_group_width = $(this).find('.flipbook_slider.now_flipbook').outerWidth(),
            move_left = proportion * table_group_width;
        $(this).stop().animate({
            scrollLeft: move_left
        }, 1);
    });
}
$("[id^='avater_p']").each(function () {
    _ = $(this);
    _.find('.pdt_ai_bottom').eq(0).addClass('in')
})
//第二層選單展開
function flipbook_title(e) {
    var mid = location.href,
        myStr = mid.indexOf("?", 1);
    if (myStr) {
        var n_url = mid.substr(0, myStr);
        history.pushState('', '', n_url);
    }
    // $('.nav_submenu a').each(function (i) {  
    //     if (!$(this).hasClass('active')) {
    //         var mid = $(this).attr('href'),
    //             myStr2 = mid.indexOf("?", 1);
    //         if (myStr2) { 
    //            var n_url = mid.substr(0, myStr2); 
    //            $(this).attr('href', n_url)
    //         } else {
    //             $(this).attr('href', mid)
    //         }
    //     }
    // });
    if ($(e).hasClass('now_avater_type')) {
        $(e).removeClass('now_avater_type').next('.flipbook_submenu').stop().slideUp();
    } else {
        $(e).next('.flipbook_submenu').stop().slideDown().siblings('.flipbook_submenu').stop().slideUp();
        $(e).addClass('now_avater_type').siblings('.flipbook_title').removeClass('now_avater_type');
		//加上location_select() 就出現?n= 頁數
		setTimeout(function () {
            location_select()
        }, 100)
        //停止人頭
        $(".flipbook_avater, .open_avater_date").removeClass('now_avater_date');
        $('.avater_date_box').removeClass('show_in');
        $('.progress_btn, .progress_bar').removeAttr('style');
        AIallstop()
        avaterstopVideo()
        setTimeout(function () {
            $('.in_avater').removeClass('videoplay_type');
        }, 301)
        $('.active_point').hide();
        //更換型錄
        var date_name = $(e).attr('data-flipbook');
        $(date_name).addClass('now_flipbook').siblings('.flipbook_slider').removeClass('now_flipbook');
        if ($(date_name).hasClass('right_slider')) {
            var table_width = $(date_name).parent('.flipbook_outbox').outerWidth(),
                table_group_width = $(date_name).outerWidth(),
                mov_w = table_group_width - table_width;
            $('.flipbook_outbox').stop().animate({
                scrollLeft: mov_w
            }, 1);
            var proportion = mov_w / table_group_width;
            if (!proportion == 0) {
                $(date_name).parent('.flipbook_outbox').attr('data-proportion', proportion);
            } else {
                $(date_name).parent('.flipbook_outbox').attr('data-proportion', '0');
            }
            //更新左右輪播
            if (table_group_width > table_width) {
                $('.avater_left').removeClass('scrol_disabled');
                $('.avater_right').addClass('scrol_disabled');
            } else {
                $('.avater_right, .avater_left').addClass('scrol_disabled');
            }
        } else {
            $('.flipbook_outbox').stop().animate({
                scrollLeft: 0
            }, 1);
            //更新左右輪播
            control_show_rwd()
        }
        //更新型錄頁數 
        $('.now_flipbook_dot').text('1');
        $('.all_flipbook_dot').text($('.now_flipbook .flipbook_page').length/2);
        $('.avater_flipbook_dot').addClass('has_dot');
        //更新左右輪播
        area_rwd()
        _idx = $('.now_avater_type').index() / 2;
        $('.flipbook_type_date').stop().animate({
            scrollTop: ($('.now_avater_type').outerHeight() + 22) * _idx
        }, 500);
        return false;
    }
}
//三層選單選中機臺各特點
function flipbook_avater(e) {
	var date_name = $(e).attr('data-id');
	setTimeout(function () {
		var date_name_th = $(date_name).parents('.flipbook_page').attr('data-th');
		if ((date_name_th & 1) === 0) {
			if ($(date_name).parents('.flipbook_slider').hasClass('right_slider')) {
				var in_left = $(date_name).parents('.flipbook_page').offset().left;
			} else {
				var in_left = $(date_name).parents('.flipbook_page').prev('.flipbook_page').offset().left;
			}
		} else {
			if ($(date_name).parents('.flipbook_slider').hasClass('right_slider')) {
				var in_left = $(date_name).parents('.flipbook_page').prev('.flipbook_page').offset().left;
			} else {
				var in_left = $(date_name).parents('.flipbook_page').offset().left;
			}
		}
		var box_left = $(date_name).parents('.flipbook_outbox').offset().left,
			out_w = $(date_name).parents('.flipbook_outbox').outerWidth(),
			in_w = $(date_name).parents('.flipbook_slider.now_flipbook').outerWidth(),
			max_w = in_w - out_w,
			old_left = $('.flipbook_outbox').scrollLeft(),
			in_left2 = in_left + old_left,
			move_left = in_left2 - box_left;
		$('.flipbook_outbox').stop().animate({
			scrollLeft: move_left
		}, 500);
		var proportion = move_left / in_w;
		if (proportion == 0) {
			$(date_name).parents('.flipbook_outbox').attr('data-proportion', '1');
		} else {
			$(date_name).parents('.flipbook_outbox').attr('data-proportion', proportion);
		}
		$(date_name).parents('.flipbook_outbox').attr('data-proportion', proportion);
		if (move_left == 0) {
			$('.avater_right').removeClass('scrol_disabled');
			$('.avater_left').addClass('scrol_disabled');
			if (out_w == in_w) {
				$('.avater_right').addClass('scrol_disabled');
			}
		} else if (move_left >= max_w) {
			$('.avater_right').addClass('scrol_disabled');
			$('.avater_left').removeClass('scrol_disabled');
		} else {
			$('.avater_right, .avater_left').removeClass('scrol_disabled');
		}
		$(date_name).click();
	}, 40)
}
//側選單縮合
function left_nav_out(e) {
    if (window.innerWidth > 767) {
        if ($('.type_index').length < 1) {
            $(e).removeClass('open_in');
            $('.nav_tag_top').removeClass('open_in')
        }
    }
}
//側選單展開
function left_nav_in(e) {
    if (window.innerWidth > 767) {
        if ($('.type_index').length < 1) {
            $(e).addClass('open_in');
            $('.nav_tag_top').addClass('open_in')
        }
    }
}
//輪播AI跳時間
function ai_gotime(e) {
    var date_id = '#' + $('.area_point.now_avater_date').attr('data-id'),
        slider_th = $(date_id).find('.avater_date_dot').children('.active').html() - 1,
        date_time = $(date_id).find('.avater_slider_in').eq(slider_th).attr('data-time');
    if (date_time) {
        player.seekTo(date_time);
    }
}
function auto_next_slider() {
    if (!$('.now_date_avater').find('.control_prev').hasClass('scrol_disabled')) {
        if ($('.now_date_avater').find('.now_slider').attr('data-time')) {
            $('.open_img').click();
            AIplayVideo()
        }
    }
}
function time_lang() {
    var lang = $('.flag_nav').attr("data-id"),
        date_time = 'data-' + lang;
    if ($('.now_date_avater').find('.avater_slider_in').attr("data-time")) {
        $('.now_date_avater').find('.avater_slider_in').each(function (i) {
            var time = $(this).attr(date_time);
            $(this).attr("data-time", time)
        });
    }
}
function location_select() {
    var mid = location.href,
        idx = $('.flipbook_title.now_avater_type').index() / 2 + 1,
        mid_url = mid + '?n=' + idx;
    history.pushState('', '', mid_url);
    // $('.nav_submenu a').each(function (i) {
    //     if (!$(this).hasClass('active')) {
    //         var mid = $(this).attr('href'),
    //             idx = $('.flipbook_title.now_avater_type').index() / 2 + 1,
    //             mid_url = mid + '?n=' + idx;
    //         $(this).attr('href', mid_url)
    //     }
    // });
}
$(window).resize(function () {
    setTimeout(function () {
        control_nav_rwd()
        flipbook_rwd()
        area_rwd()
        top_nav()
    }, 100);
    (window.innerWidth<601) && ($('.avater_date_box.expand').removeClass('expand'),$('.icon.expand.full').removeClass('full'))
});
_mobile = !!navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i);
$(window).on("load", function (e) {
    if (window.innerWidth < 768) {
        $('.flipbook_outbox').addClass('zoom_in canmove');
        $('.zoom_avater').addClass('in').find('p').text($(".zoom_avater").data('in'))
    }
    
    // 展開本數
    _href=location.href;
    _num=_href.split('n=')[1]*2-2;
    $('.flipbook_type_date>div').eq(_num).click()

    if ($('#sjvid_box_in').length > 0) {
        var img = $('#sjvid_box_in').attr('data-opimg');
        i = 0
        const arr_img = img.split(",");
        $('.bottom_nav_box_in').hide();
        for (i = 0; i < 20; i++) {　
            var n_str = arr_img[i];
            if (n_str == undefined) {} else {
                var myStr = n_str.indexOf(":", 1),
                    myStr2 = n_str.indexOf(":", 1) + 1,
                    myStr3 = n_str.length,
                    vid_lang = n_str.substr(0, myStr),
                    img_url = n_str.substr(myStr2, myStr3),
                    nav_id = '#in_' + vid_lang;
                $(nav_id).children('.flag_lang_in').attr("data-img", img_url);
            }
        }
        var str = $('#sjvid_box_in').attr('data-opvideo');
        i = 0
        const arr = str.split(",");
        $('.bottom_nav_box_in').hide();
        for (i = 0; i < 20; i++) {　
            if (i == 0) {
                var myStr = str.indexOf(":", 1),
                    myStr2 = str.indexOf(":", 1) + 1,
                    myStr3 = str.indexOf(",", 1),
                    myStr4 = myStr3 - myStr2,
                    vid_lang = str.substr(0, myStr),
                    vid_id = str.substr(myStr2, myStr4),
                    nav_id = '#in_' + vid_lang;
                if (!$('.sj_bottom_nav_in').hasClass('first_load')) {
                    $(nav_id).show().addClass('has_lang_in').addClass('now_lang_in').siblings().removeClass('now_lang_in');
                    $('.sj_bottom_nav_in').addClass('first_load')
                } else {
                    $(nav_id).show().addClass('has_lang_in');
                }
                var now_img = $(".now_lang_in").children('.flag_lang_in').children('img').attr('src'),
                    now_lang = $(".now_lang_in").children('.flag_lang_in').attr('title');
                $(nav_id).children('.flag_lang_in').attr("data-url", vid_id);
                $('.flag_nav_in').children('img').attr("src", now_img);
                $('.flag_nav_in').children('span').text(now_lang);
                $('.flag_nav_in').attr("data-id", now_lang);
                //              playt(vid_id);
            } else {
                var n_str = arr[i];
                if (n_str == undefined) {
                } else {
                    var myStr = n_str.indexOf(":", 1),
                        myStr2 = n_str.indexOf(":", 1) + 1,
                        myStr3 = n_str.length,
                        vid_lang = n_str.substr(0, myStr),
                        vid_id = n_str.substr(myStr2, myStr3),
                        nav_id = '#in_' + vid_lang;
                    $(nav_id).show().addClass('has_lang_in');
                    $(nav_id).children('.flag_lang_in').attr("data-url", vid_id);
                }
            }
        }
        if (!$('.sj_bottom_nav_in').hasClass('cookie_load')) {
            var has_cookie = getCookie('ai_lang'),
                cookie_length = has_cookie.length;
            if (cookie_length > 0) {
                if ($(has_cookie).hasClass('has_lang_in')) {
                    $(has_cookie).addClass('now_lang_in').siblings().removeClass('now_lang_in')
                    var now_img = $(".now_lang_in").children('.flag_lang_in').children('img').attr('src'),
                        now_lang = $(".now_lang_in").children('.flag_lang_in').attr('title');
                    $('.flag_nav_in').children('img').attr("src", now_img);
                    $('.flag_nav_in').children('span').text(now_lang);
                    $('.flag_nav_in').attr("data-id", now_lang);
                }
            }
            $('.sj_bottom_nav_in').addClass('cookie_load');
        }
        var now_lang = '#text_' + $('.now_lang_in').children('.flag_lang_in').attr('title');
        $(now_lang).addClass('now_lang_text');
        var vidoe_img = $('.now_lang_in').children('.flag_lang_in').attr('data-img');
        $('#sjvid_box_in').children('.player_box_in').css({
            'background-image': 'url(' + vidoe_img + ')'
        });
        var video_id = $('.now_lang_in').children('.flag_lang_in').attr('data-url');
        opvid=$('#sjvid_box_in').attr('data-opvideo');
        if(typeof opvid != 'undefined' && typeof opvid != ''){
            $('.sjvid_box_in, #draggable_in').addClass('show_in');
        }
    }
    control_nav_rwd()
    flipbook_rwd()
    area_rwd()
    control_show_rwd()
    setTimeout(function () {
        $('.flipbook_left_nav').addClass('open_in');
    }, 500)
    timer = setTimeout(function () {
        $('.flipbook_left_nav').removeClass('open_in');
    }, 3000);
    //選單自動出現和隱藏 0720
    if(!_mobile && window.innerWidth>767){
        $('.avater_right_nav').addClass('active_in').children('.hide_right_nav').slideDown();
//        timer2 = setTimeout(function () {
//            $('.avater_right_nav').removeClass('active_in').children('.hide_right_nav').slideUp();
//        }, 3000);
    }
    //側選單展開
    $('.flipbook_left_nav').hover(function () {
        if ($('.type_index').length > 0) {
            if (window.innerWidth > 767) {
                $(this).addClass('open_in');
            }
            clearTimeout(timer);
        }
    }, function () {
        if ($('.type_index').length > 0) {
            if (window.innerWidth > 767) {
                $(this).removeClass('open_in');
            }
        }
    });
    
    _first=0;
    $(".nav_tag").click(function () {
        if (window.innerWidth < 768) {
            if ($(this).parent('.flipbook_left_nav').hasClass('open_in')) {
                $(this).parent('.flipbook_left_nav').removeClass('open_in');
            } else {
               $(this).parent('.flipbook_left_nav').addClass('open_in');
               if(_first==0){
                    _href=location.href;
                    if(_href.indexOf("?")<0){
                        $('.flipbook_type_date>div').eq(0).click()
                    }
                    _first=1;
                }
            }
        }
    });
    
    $(document).mouseup(function (e) {
        var _con = $('.flipbook_left_nav, .nav_tag, .back_nav, .in_avater');
        if (!_con.is(e.target) && _con.has(e.target).length === 0) {
            $('.flipbook_left_nav').removeClass('open_in');
        }
        var _con2 = $('.has_nav_submenu, .nav_submenu');
        if (!_con2.is(e.target) && _con2.has(e.target).length === 0) {
            $('.has_nav_submenu').removeClass('open');
            $('.nav_submenu').stop().slideUp();
        }
    });
    //右上選單(RWD) 0720
    $(".show_right_nav").click(function () {
        if ($(this).parent('.avater_right_nav').hasClass('active_in')) {
            $(this).parent('.avater_right_nav').removeClass('active_in');
            if (window.innerWidth < 768) {
                $(this).prev('.hide_right_nav').stop().slideUp();
            } else {
                $(this).prev('.hide_right_nav').css('display', 'none')
            }
        } else {
            $(this).parent('.avater_right_nav').addClass('active_in');
            if (window.innerWidth < 768) {
                $(this).prev('.hide_right_nav').stop().slideDown();
            } else {
                $(this).prev('.hide_right_nav').css('display', 'block')
            }
        }
    });
    //選中機臺各特點
    $(".open_avater_date").click(function () {
        if ($('#sjvid_box_in').length > 0) {
            $('.sjvid_box_in, #draggable_in').removeClass('show_in');
            $('.player_box_in, .player_now_in, .sj_right_nav_in').removeClass('playing');
            AIallstop_in()
        }
        clearTimeout(timer);
        var flipbook_now_th = $(this).parents('.flipbook_page').attr('data-th') / 2,
            flipbook_now = Math.ceil(flipbook_now_th);
        $('.now_flipbook_dot').text(flipbook_now);
        if (!$(this).hasClass('now_avater_date')) {
            $('[data-play^="2"]').removeAttr('data-play');
            $('[data-play^="1"]').attr('data-play', '2');
        }
        $(".flipbook_avater, .open_avater_date").removeClass('now_avater_date');
        var date_name = '#' + $(this).attr('data-id'),
            nav_name = '#nav_' + $(this).attr('data-id');
        $(date_name).addClass('now_date_avater').siblings().removeClass('now_date_avater');
        if ($(this).hasClass('now_avater_date')) {} else {
            //選單選中
            $(this).addClass('now_avater_date');
            //選中二層側選單
            $(nav_name).attr('data-play', '1');
            if (!$('.type_submenu').hasClass('open_in')) {
                if ($('.flipbook_left_nav').hasClass('open_in')) {
                    if ($('.type_index').length > 0) {
                        $('.flipbook_left_nav').removeClass('open_in');
                        $('.type_submenu').addClass('open_in');
                        setTimeout(function () {
                            $('.flipbook_left_nav').addClass('open_in');
                            $('.now_avater_type').removeClass('now_avater_type');
                            $(nav_name).addClass('now_avater_date').parents('.flipbook_submenu').prev('.flipbook_title').addClass('now_avater_type').siblings('.flipbook_title').removeClass('now_avater_type');
                            $(nav_name).parents('.flipbook_submenu').stop().slideDown().siblings('.flipbook_submenu').stop().slideUp();
                        }, 501);
                    } else {
                        $('.type_submenu').addClass('open_in');
                        $('.now_avater_type').removeClass('now_avater_type');
                        $(nav_name).addClass('now_avater_date').parents('.flipbook_submenu').prev('.flipbook_title').addClass('now_avater_type').siblings('.flipbook_title').removeClass('now_avater_type');
                        $(nav_name).parents('.flipbook_submenu').stop().slideDown().siblings('.flipbook_submenu').stop().slideUp();
                    }
                } else {
                    $('.type_submenu').addClass('open_in');
                    $('.now_avater_type').removeClass('now_avater_type');
                    $(nav_name).addClass('now_avater_date').parents('.flipbook_submenu').prev('.flipbook_title').addClass('now_avater_type').siblings('.flipbook_title').removeClass('now_avater_type');
                    $(nav_name).parents('.flipbook_submenu').stop().slideDown().siblings('.flipbook_submenu').stop().slideUp();
                }
            } else {
                $('.now_avater_type').removeClass('now_avater_type');
                $(nav_name).addClass('now_avater_date').parents('.flipbook_submenu').prev('.flipbook_title').addClass('now_avater_type').siblings('.flipbook_title').removeClass('now_avater_type');
                $(nav_name).parents('.flipbook_submenu').stop().slideDown().siblings('.flipbook_submenu').stop().slideUp();
            }
            //資料展開//
            $(".avater_slider_box").each(function (i) {
                $(this).children('.avater_slider_in').eq(0).addClass('now_slider').siblings().removeClass('now_slider');
                $(this).attr('data-th', '0');
                $(this).attr('data-proportion', '0');
                $(this).parent('.avater_date_img').nextAll('.avater_date_dot').children('p').eq(0).addClass('active').siblings().removeClass('active');
                $(this).prevAll('.avater_date_th').children('.now_dot').text('01');
                if ($(this).hasClass('has_slider')) {
                    $(this).next('.control_next').removeClass('scrol_disabled');
                    $(this).prev('.control_prev').addClass('scrol_disabled');
                }
                $(this).parents('.avater_date_img').nextAll('.pdt_ai_bottom').eq(0).addClass('in').siblings('.pdt_ai_bottom').removeClass('in')
                $(this).children('.avater_slider_in:first-child').css('margin-left', '0');
            });
            $('.active_point').hide();
            avaterstopVideo();
            area_active()
            if ($('.avater_date_box').hasClass('show_in')) {
                if ($(date_name).length > 0) {
                    $(date_name).show().siblings('div').hide();
                    $('.in_avater').removeClass('videoplay_type');
                    if ($(date_name).children('.avater_date_img').hasClass('only_video')) {
                        $('.open_img').addClass('hide_out');
                        setTimeout(function () {
                            $(date_name).find('.play_video').click();
                        }, 1);
                    } else {
                        $('.open_img').removeClass('hide_out');
                    }
                } else {
                    $('.avater_date_box').removeClass('show_in');
                    avaterstopVideo()
                }
            } else {
                if ($(date_name).length > 0) {
                    setTimeout(function () {
                        $('.avater_date_box').addClass('show_in');
                        $(date_name).show().siblings('div').hide();
                        $('.in_avater').removeClass('videoplay_type');
                        if ($(date_name).children('.avater_date_img').hasClass('only_video')) {
                            $('.open_img').addClass('hide_out');
                            setTimeout(function () {
                                $(date_name).find('.play_video').click();
                            }, 1);
                        } else {
                            $('.open_img').removeClass('hide_out');
                        }
                    }, 200);
                }
            }
            setTimeout(function () {
                if ($('.img_avater_box>div:visible .play_video').hasClass('active')) {
                    $('.play_video.active').click();
                    setTimeout(function () {
                        player_avater.pauseVideo()
                        player.playVideo()
                    }, 1000)
                }
            }, 300)
        }
        _dot=$(date_name).find('.avater_date_dot');
        _dot.html('');
        _dotL=$(date_name).find('.avater_slider_in').length;
        for(i=0;i<_dotL;i++){
            (i==0) ? _dot.append(`<p class="active">${i+1}</p>`) : _dot.append(`<p>${i+1}</p>`)
        }
        return false;
    });
    //關閉機臺特點視窗
    $(".close_avater_date").click(function () {
        (window.innerWidth<601) && $('html').css('overflow','');
        $(".flipbook_avater, .open_avater_date").removeClass('now_avater_date');
        $('.avater_date_box').removeClass('show_in');
        $('.progress_btn, .progress_bar').removeAttr('style');
        AIallstop()
        avaterstopVideo()
        setTimeout(function () {
            $('.in_avater').removeClass('videoplay_type');
        }, 301)
        $('.active_point').hide();
        return false;
    });
    //切換機臺影片模式
    $(".play_video").click(function () {
        $('.img_avater_box').hide().next('.video_avater_box').show();
        $('.in_avater').addClass('videoplay_type');
        var text_title = $(this).parents('.avater_date_img').prevAll('.avater_date_title').text();
        var date_title = $(this).parents('.avater_date_img').nextAll('.pdt_ai_bottom.in').html();
        $('.avater_video_title').text(text_title);
        $('.video_ai_bottom').html(date_title);
        return false;
    });
    //切換機臺影片模式
    $(".select_video").click(function () {
        $('.img_avater_box').hide().next('.video_avater_box').show();
        $('.in_avater').addClass('videoplay_type');
        var text_title = $(this).parents('.pdt_ai_bottom').prevAll('.avater_date_title').text();
        var date_title = $(this).parents('.pdt_ai_bottom.in').html();
        $('.avater_video_title').text(text_title);
        $('.video_ai_bottom').html(date_title);
        return false;
    });
    //切換機臺圖片模式
    $(".open_img").click(function () {
        $('.img_avater_box').show().next('.video_avater_box').hide();
        $('.in_avater').removeClass('videoplay_type');
        avaterstopVideo()
        if (!$('.now_date_avater').find('.control_prev').hasClass('scrol_disabled')) {
            if ($('.now_date_avater').find('.now_slider').attr('data-time')) {
                AIplayVideo()
            }
        } else {
            if (!$('.now_date_avater').find('.control_next').hasClass('scrol_disabled')) {
                if ($('.now_date_avater').find('.now_slider').attr('data-time')) {
                AIplayVideo()
            }
            }
        }
        return false;
    });
    //關閉人頭
    $(".close_avater").click(function () {
        $(".flipbook_avater, .open_avater_date").removeClass('now_avater_date');
        $('.avater_flipbook').removeClass('show_in');
        $('.flipbook_outbox').removeClass('zoom_in canmove');
        $('.flipbook_outbox').removeAttr('style');
        $('.avater_date_box').removeClass('show_in');
        opvid=$('#sjvid_box_in').attr('data-opvideo');
        if(typeof opvid != 'undefined' && typeof opvid != ''){
            $('.sjvid_box_in, #draggable_in').addClass('show_in');
        }
        $('.progress_btn, .progress_bar, .progress_btn_in, .progress_bar_in').removeAttr('style');
        AIallstop()
        avaterstopVideo()
        setTimeout(function () {
            $('.in_avater').removeClass('videoplay_type');
        }, 301)
        var mid = location.href,
            mid_url = mid.replace(/#/g, "");
        history.pushState('', '', mid_url)
        addvid_in()
        AIpauseVideo_in()
        return false;
    });
    //型錄PC移動
    $(".flipbook_outbox, .draggable_date_box").draggable();
    $("#draggable, #draggable_in").draggable();
    //加入型錄頁數 
    $('.all_flipbook_dot').text($('.now_flipbook .flipbook_page').length/2);
    $('.avater_flipbook_dot').addClass('has_dot');
    //型錄右移
    $('.avater_right').click(function () {
        if (!$(this).hasClass('moveing')) {
            $(this).addClass('moveing');
            var table_width = $(this).parent('.avater_bottom_nav').prev('.absolute_box').find('.flipbook_outbox').outerWidth(),
                length = $(this).parent('.avater_bottom_nav').prev('.absolute_box').find('.now_flipbook').find('.flipbook_page').length,
                table_group_width = $(this).parent('.avater_bottom_nav').prev('.absolute_box').find('.flipbook_slider.now_flipbook').outerWidth(),
                max_width = table_group_width - table_width - length,
                scroll_width = $(this).parent('.avater_bottom_nav').prev('.absolute_box').find('.flipbook_outbox').outerWidth(),
                left_width = $(this).parent('.avater_bottom_nav').prev('.absolute_box').find('.flipbook_outbox').scrollLeft();
            if (left_width < max_width) {
                var mov_w = left_width + scroll_width;
                var proportion = mov_w / table_group_width ;
                $(this).parent('.avater_bottom_nav').prev('.absolute_box').find('.flipbook_outbox').attr('data-proportion', proportion);
                $(this).parent('.avater_bottom_nav').prev('.absolute_box').find('.flipbook_outbox').stop().animate({
                    scrollLeft: mov_w
                }, 500);
                var flipbook_now = $('.now_flipbook_dot').text();
                if ($('.now_flipbook').hasClass('right_slider')) {
                    var new_flipbook_now = Number(flipbook_now) - 1;
                } else {
                    var new_flipbook_now = Number(flipbook_now) + 1;
                }
                $('.now_flipbook_dot').text(new_flipbook_now);
                if($('.flipbook_title').length != $('.flipbook_slider').length){
                    $('.flipbook_title').eq(new_flipbook_now-1).click()
                }
                if($('.flipbook_title').length != $('.flipbook_slider').length){
                    $('.flipbook_title').eq(new_flipbook_now-1).click()
                }
                $(this).prevAll('.avater_left').removeClass('scrol_disabled');
                if (mov_w >= max_width) {
                    $(this).addClass('scrol_disabled');
                }
            }
            setTimeout(function () {
                $('.avater_right').removeClass('moveing');
            }, 501)
        }
    });
    //型錄左移
    $('.avater_left').click(function () {
        if (!$(this).hasClass('moveing')) {
            $(this).addClass('moveing');
            var left_width = $(this).parent('.avater_bottom_nav').prev('.absolute_box').find('.flipbook_outbox').scrollLeft(),
                scroll_width = $(this).parent('.avater_bottom_nav').prev('.absolute_box').find('.flipbook_outbox').outerWidth(),
                table_group_width = $(this).parent('.avater_bottom_nav').prev('.absolute_box').find('.flipbook_slider.now_flipbook')[0].getBoundingClientRect().width;
            if (left_width > 1) {
                var mov_w = left_width - scroll_width;
                var proportion = mov_w / table_group_width;
                if (proportion > 0) {
                    $(this).parent('.avater_bottom_nav').prev('.absolute_box').find('.flipbook_outbox').attr('data-proportion', proportion);
                } else {
                    $(this).parent('.avater_bottom_nav').prev('.absolute_box').find('.flipbook_outbox').attr('data-proportion', '0');
                }
                $(this).parent('.avater_bottom_nav').prev('.absolute_box').find('.flipbook_outbox').stop().animate({
                    scrollLeft: mov_w
                }, 500);
                $(this).nextAll('.avater_right').removeClass('scrol_disabled');
                var flipbook_now = $('.now_flipbook_dot').text();
                if ($('.now_flipbook').hasClass('right_slider')) {
                    var new_flipbook_now = Number(flipbook_now) + 1;
                } else {
                    var new_flipbook_now = Number(flipbook_now) - 1;
                }
                $('.now_flipbook_dot').text(new_flipbook_now);
                if (mov_w < 1) {
                    $(this).addClass('scrol_disabled');
                }
            }
            setTimeout(function () {
                $('.avater_left').removeClass('moveing');
            }, 501)
        }
    });
    $('.control_next, .control_prev').addClass('scrol_disabled');
    //判斷資料圖片有無輪播
    $(".avater_slider_box").each(function (i) {
        var table_length = $(this).children('.avater_slider_in').length;
        $(this).children('.avater_slider_in').eq(0).addClass('now_slider');
        if (table_length < 10) {
            var th_text = '0' + table_length;
        } else {
            var th_text = table_length;
        }
        if (table_length > 1) {
            $(this).prevAll('.avater_date_th').children('.now_dot').text('01');
            $(this).prevAll('.avater_date_th').children('.all_dot').text(th_text);
            $(this).addClass('has_slider').next('.control_next').removeClass('scrol_disabled');
            $(this).prevAll('.avater_date_th').show();
            $(this).parent('.avater_date_img').nextAll('.avater_date_dot').show();
        }
    });
    //資料輪播dot
    $('.avater_date_dot p').click(function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active').siblings().removeClass('active');
            var table_length = $(this).parent('.avater_date_dot').prevAll('.avater_date_img').children('.avater_slider_box').children('.avater_slider_in').length,
                max_length = table_length - 1,
                th = $(this).text() - 1;
            $(this).parent('.avater_date_dot').prevAll('.avater_date_img').children('.avater_slider_box').attr('data-th', th);
            $(this).parent().prev('.avater_date_img').find('.avater_slider_in').eq(th).addClass('now_slider').siblings().removeClass('now_slider');
            if (th < 1) {
                $(this).parent('.avater_date_dot').prevAll('.avater_date_img').children('.control_prev').addClass('scrol_disabled');
                $(this).parent('.avater_date_dot').prevAll('.avater_date_img').children('.control_next').removeClass('scrol_disabled');
                $(this).parent('.avater_date_dot').prevAll('.avater_date_img').children('.avater_slider_box').children('.avater_slider_in:first-child').removeAttr('style');
            } else {
                var mov_w = '-' + th * 100 + '%';
                $(this).parent('.avater_date_dot').prevAll('.avater_date_img').children('.avater_slider_box').children('.avater_slider_in:first-child').css('margin-left', mov_w);
                $(this).parent('.avater_date_dot').prevAll('.avater_date_img').children('.control_prev').removeClass('scrol_disabled');
                $(this).parent('.avater_date_dot').prevAll('.avater_date_img').children('.control_next').removeClass('scrol_disabled');
                if (th >= max_length) {
                    $(this).parent('.avater_date_dot').prevAll('.avater_date_img').children('.control_next').addClass('scrol_disabled');
                }
            }
            if ($(this).parent().siblings('.pdt_ai_bottom').eq(th).length) {
                $(this).parent().siblings('.pdt_ai_bottom').eq(th).addClass('in').siblings('.pdt_ai_bottom').removeClass('in')
                $('.pdt_ai_bottom').scrollTop(0);
            }
        }
        slider_th_rwd()
        ai_gotime()
    });
    //資料圖片輪播右移
    $('.control_next').click(function () {
        if (!$(this).hasClass('moveing')) {
            $(this).addClass('moveing');
            var table_length = $(this).prev('.avater_slider_box').children('.avater_slider_in').length,
                max_length = table_length - 1,
                th = $(this).prev('.avater_slider_box').attr('data-th'),
                dot_th = parseInt(th) + 1;
            if (parseInt(th) < table_length) {
                var mov_w = '-' + dot_th * 100 + '%';
                $(this).prev('.avater_slider_box').children('.avater_slider_in:first-child').css('margin-left', mov_w);
                $(this).prev('.avater_slider_box').attr('data-th', dot_th);
                $(this).prev('.avater_slider_box').prev('.control_prev').removeClass('scrol_disabled');
                $(this).parent('.avater_date_img').next('.avater_date_dot').children('p').eq(dot_th).addClass('active').siblings().removeClass('active');
                if (dot_th >= max_length) {
                    $(this).addClass('scrol_disabled');
                }
            }
            slider_th_rwd()
            ai_gotime()
            setTimeout(function () {
                $('.control_next').removeClass('moveing');
            }, 501)
            $(this).prev('.avater_slider_box').children('.avater_slider_in').eq(dot_th).addClass('now_slider').siblings('.avater_slider_in').removeClass('now_slider');
            if ($(this).parent().siblings('.pdt_ai_bottom').eq(dot_th).length) {
                $(this).parent().siblings('.pdt_ai_bottom').eq(dot_th).addClass('in').siblings('.pdt_ai_bottom').removeClass('in')
                $('.pdt_ai_bottom').scrollTop(0);
            }
        }
    });
    //資料圖片輪播左移
    $('.control_prev').click(function () {
        if (!$(this).hasClass('moveing')) {
            $(this).addClass('moveing');
            var table_length = $(this).next('.avater_slider_box').children('.avater_slider_in').length,
                th = $(this).next('.avater_slider_box').attr('data-th'),
                dot_th = parseInt(th) - 1;
            if (parseInt(th) >= 0) {
                var mov_w = '-' + dot_th * 100 + '%';
                $(this).next('.avater_slider_box').children('.avater_slider_in:first-child').css('margin-left', mov_w);
                $(this).next('.avater_slider_box').attr('data-th', dot_th);
                $(this).next('.avater_slider_box').next('.control_next').removeClass('scrol_disabled');
                $(this).parent('.avater_date_img').nextAll('.avater_date_dot').children('p').eq(dot_th).addClass('active').siblings().removeClass('active');
                if (dot_th < 1) {
                    $(this).addClass('scrol_disabled');
                }
            }
            slider_th_rwd()
            ai_gotime()
            setTimeout(function () {
                $('.control_prev').removeClass('moveing');
            }, 501)
            $(this).next('.avater_slider_box').children('.avater_slider_in').eq(dot_th).addClass('now_slider').siblings('.avater_slider_in').removeClass('now_slider');
            if ($(this).parent().siblings('.pdt_ai_bottom').eq(dot_th).length) {
                $(this).parent().siblings('.pdt_ai_bottom').eq(dot_th).addClass('in').siblings('.pdt_ai_bottom').removeClass('in')
                $('.pdt_ai_bottom').scrollTop(0);
            }
        }
    });
    //資料燈箱全螢幕
    $('.in_avater .icon').click(function(){
        $(this).stop().toggleClass('full').siblings().removeClass('full')
        setTimeout(function () {
            control_nav_rwd()
        }, 100);
    })
    //資料燈箱全螢幕
    $(".expand").click(function () {
        $('.avater_date_box').stop().toggleClass('expand').removeClass('full');
        
        return false;
    });
    
    //資料燈箱縮放
    $(".fullscreen").click(function () {
        $('.avater_date_box').stop().toggleClass('full').removeClass('expand');
        return false;
    });
    //分享功能
    function share_url_in() {
        var now_url = location.href,
            share_title = '';
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            var whatsapp_url = 'https://api.whatsapp.com/send?text=';
        } else {
            var whatsapp_url = 'https://web.whatsapp.com/send?';
        }
        /*臉書*/
        $('.facebook').attr('href', 'https://www.facebook.com/share.php?u=' + now_url);
        /*推特*/
        $('.twitter').attr('href', 'http://twitter.com/home/?status=' + now_url);
        /*微博*/
        $('.weibo').attr('href', 'https://service.weibo.com/share/share.php?appkey=&title=' + share_title + '&url=' + now_url + '&searchPic=false&style=simple');
        /*LINE*/
        $('.line').attr('href', 'https://lineit.line.me/share/ui?url=' + now_url);
        /*Skype*/
        $('.skype').attr('href', 'https://web.skype.com/share?url=' + now_url);
        /*Whatsapp*/
        $('.whatsapp').attr('href', whatsapp_url + now_url);
        document.getElementById("linktext_in").value = window.location.href;
    }
    //分響複製網址
    $(".copy_box > .copy").click(function () {
        var now_url = location.href;
        var linktext = document.getElementById("linktext_in");
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            linktext.focus();
            linktext.select();
            document.execCommand('copy');
            $('.popup_avater').stop().addClass('show_in');
            setTimeout(function () {
                $('.popup_avater').stop().removeClass('show_in');
                return false;
            }, 2000)
        } else {
            linktext.focus();
            linktext.select();
            document.execCommand('copy');
            $('.popup_avater').stop().addClass('show_in');
            setTimeout(function () {
                $('.popup_avater').stop().removeClass('show_in');
                return false;
            }, 2000)
        }
    });
    $(".close_popup_avater").click(function () {
        $('.popup_avater').stop().removeClass('show_in');
        return false;
    });
    //放大型錄
    $(".zoom_avater").click(function () {
        $('.flipbook_outbox').stop().toggleClass('zoom_in canmove');
        $('.flipbook_outbox').removeAttr('style');
        all_w=$('.flipbook_outbox').width();
        (all_w % 2 == 1) && (all_w=all_w+1);
        $('.flipbook_outbox').css('width',all_w);
        _=$(this);
        if(!_.hasClass('in')){
            _.addClass('in').find('p').text(_.data('in'))
        }else{
            _.removeClass('in').find('p').text(_.data('zoom'))
        }
        return false;
    });
    //打開分享視窗
    $(".share_avater").click(function () {
        $('.share_avater_box').fadeIn();
        share_url_in()
        $('.avater_date_box').removeClass('show_in');
        $('.progress_btn, .progress_bar').removeAttr('style');
        AIallstop()
        avaterstopVideo()
        setTimeout(function () {
            $('.in_avater').removeClass('videoplay_type');
        }, 301)
        return false;
    });
    //打開選單
    $(".back_nav, .right_back_nav").click(function () {
        if ($('.flipbook_left_nav').hasClass('open_in')) {
            $('.flipbook_left_nav').removeClass('open_in');
        } else {
            $('.flipbook_left_nav').addClass('open_in');
        }
        return false;
    });
    //打開官網
    $(".go_website").click(function () {
        AIpauseVideo()
        avaterpauseVideo()
        if ($('#draggable_in').length > 0) {
            $(".player_now_in").removeClass('playing');
            $('.sj_right_nav_in').removeClass('playing');
            AIpauseVideo_in()
        }
    });
    //打開表單
    $(".contact_avater").click(function () {
        $('.contact_avater_box:not(.zoom_avater_box)').stop().fadeIn();
        $('.avater_date_box').removeClass('show_in');
        $('.progress_btn, .progress_bar').removeAttr('style');
        AIallstop()
        avaterstopVideo()
        setTimeout(function () {
            $('.in_avater').removeClass('videoplay_type');
        }, 301)
        return false;
    });
    //img fancybox
    $(".img-zoom").click(function () {
        _=$(this);
        _href=_.attr('data-href');
        _caption=_.attr('data-caption');
        $('.zoom_img').attr('src',_href);
        $('.zoom_img').attr('alt',_caption);
        $('.zoom_avater_box').stop().fadeIn();
    });
    //關閉彈跳視窗
    $(".close_avater_box").click(function () {
        $('.avater_in_box').stop().fadeOut();
        return false;
    });
    //手機手勢控制
    $('.flipbook_outbox').mousedown(function (e) {
        var _con = $('.open_avater_date, area');
        if (!_con.is(e.target) && _con.has(e.target).length === 0) {
            var _con = $('.open_avater_date');
            var flag = true;
            var stop;
            stop = setTimeout(function () {
                //down 1s，才运行。
                flag = false;
            }, 300);
            $('.flipbook_outbox').mouseup(function () {
                //鼠标up时，判断down了多久，不足一秒，不执行down的代码。
                if (flag == true) {
                    if ($('.flipbook_outbox').hasClass('zoom_in')) {
                        $('.flipbook_outbox').removeClass('zoom_in canmove');
                        $('.zoom_avater').removeClass('in').find('p').text($('.zoom_avater').data('zoom'))
                    } else {
                        $('.flipbook_outbox').removeAttr('style');
                        $('.flipbook_outbox').addClass('zoom_in canmove');
                        $('.zoom_avater').addClass('in').find('p').text($('.zoom_avater').data('in'))
                    }
                }
                all_w=$('.flipbook_outbox').width();
                (all_w % 2 == 1) && (all_w=all_w+1);
                $('.flipbook_outbox').css('width',all_w);
            });
        }
    });
    flipbook_outbox=$('.flipbook_outbox');
    flipbook_outbox.onmousedown = function (event) {
        if (!$('.flipbook_outbox').hasClass('canmove') && !$('.flipbook_outbox').hasClass('zoom_in')) {
            let shiftX = event.clientX;
            //初始位置
            function onMouseMove(event) {
                var e_left = event.pageX;
                //移動位置
                if (shiftX < e_left) {
                    //向右
                    var list = e_left - shiftX;
                    if (list > 50) {
                        $('.avater_left').click();
                        document.removeEventListener('mousemove', onMouseMove);
                        flipbook_outbox.onmouseup = null;
                    }
                } else {
                    //向左
                    var list = shiftX - e_left;
                    if (list > 50) {
                        $('.avater_right').click();
                        document.removeEventListener('mousemove', onMouseMove);
                        flipbook_outbox.onmouseup = null;
                    }
                }
            }
            // 在 mousemove 事件上移动圖片
            document.addEventListener('mousemove', onMouseMove);
            // 放圖片，并移除不需要的处理程序
            flipbook_outbox.onmouseup = function () {
                document.removeEventListener('mousemove', onMouseMove);
                flipbook_outbox.onmouseup = null;
            };
        }
    };
    var moveImg = document.querySelector('#flipbook_outbox');
    moveImg.addEventListener('touchstart', function (event) {
        // 手指放在屏幕上的时候
        var touches = event.touches;
        var events = touches[0];
        var events2 = touches[1];
        imgLeft = parseInt($('.flipbook_outbox').css('left'));
        imgTop = parseInt($('.flipbook_outbox').css('top'));
        x1 = events.pageX;
        y1 = events.pageY;
        if (events2) {
            one = false
            return;
        } else {
            one = true
        }
    });
    moveImg.addEventListener('touchmove', function (event) {
        var touches = event.touches;
        var events = touches[0];
        var events2 = touches[1];
        if (events2) {
            one = false
            return;
        } else {
            one = true
        }
        if (one == true) {
            // 手指移动过程
            // 错位控制,放缩未结束不允许移动位置
            event.preventDefault();
            x2 = events.pageX;
            y2 = events.pageY;
            if ($('.flipbook_outbox').hasClass('canmove')) {
                if (!$('.flipbook_outbox').hasClass('two_move')) {
                    $('.flipbook_outbox').css({
                        'top': imgTop + y2 - y1,
                        'left': imgLeft + x2 - x1
                    })
                }
            } else {
                if (x1 < x2) {
                    //向右
                    var list = x2 - x1;
                    if (list > 10) {
                        $('.avater_left').click();
                    }
                } else {
                    //向左
                    var list = x1 - x2;
                    if (list > 10) {
                        $('.avater_right').click();
                    }
                }
            }
        }
    });
    var moveDate = document.querySelector('#avater_date_box');
    moveDate.addEventListener('touchstart', function (event) {
        // 手指放在屏幕上的时候
        var touches = event.touches;
        var events = touches[0];
        var events2 = touches[1];
        imgLeft = parseInt($('.avater_date_box').css('left'));
        imgTop = parseInt($('.avater_date_box').css('top'));
        x1 = events.pageX;
        y1 = events.pageY;
        if (events2) {
            one = false
            return;
        } else {
            one = true
        }
    });
    moveDate.addEventListener('touchmove', function (event) {
        var touches = event.touches;
        var events = touches[0];
        var events2 = touches[1];
        if (events2) {
            one = false
            return;
        } else {
            one = true
        }
        if (one == true) {
            // 手指移动过程
            x2 = events.pageX;
            y2 = events.pageY;
            var _con = $('.pdt_ai_bottom'); // 设置目标区域
            if (!_con.is(event.target) && _con.has(event.target).length === 0) {
                event.preventDefault();
                $('.avater_date_box').css({
                    'top': imgTop + y2 - y1,
                    'left': imgLeft + x2 - x1
                })
            }
        }
    });
    var moveAi = document.querySelector('.player_now');
    moveAi.addEventListener('touchstart', function (event) {
        // 手指放在屏幕上的时候
        var touches = event.touches;
        var events = touches[0];
        var events2 = touches[1];
        imgLeft = parseInt($('#draggable').css('left'));
        imgTop = parseInt($('#draggable').css('top'));
        x1 = events.pageX;
        y1 = events.pageY;
        if (events2) {
            one = false
            return;
        } else {
            one = true
        }
    });
    moveAi.addEventListener('touchmove', function (event) {
        var touches = event.touches;
        var events = touches[0];
        var events2 = touches[1];
        if (events2) {
            one = false
            return;
        } else {
            one = true
        }
        if (one == true) {
            // 手指移动过程
            // 错位控制,放缩未结束不允许移动位置
            event.preventDefault();
            x2 = events.pageX;
            y2 = events.pageY;
            $('#draggable').css({
                'top': imgTop + y2 - y1,
                'left': imgLeft + x2 - x1,
                'bottom': 'auto',
            })
        }
    });
    if ($("#draggable_in").length > 0) {
        var moveAiIn = document.querySelector('.player_now_in');
        moveAiIn.addEventListener('touchstart', function (event) {
            // 手指放在屏幕上的时候
            var touches = event.touches;
            var events = touches[0];
            var events2 = touches[1];
            imgLeft = parseInt($('#draggable_in').css('left'));
            imgTop = parseInt($('#draggable_in').css('top'));
            x1 = events.pageX;
            y1 = events.pageY;
            if (events2) {
                one = false
                return;
            } else {
                one = true
            }
        });
        moveAiIn.addEventListener('touchmove', function (event) {
            var touches = event.touches;
            var events = touches[0];
            var events2 = touches[1];
            if (events2) {
                one = false
                return;
            } else {
                one = true
            }
            if (one == true) {
                // 手指移动过程
                // 错位控制,放缩未结束不允许移动位置
                event.preventDefault();
                x2 = events.pageX;
                y2 = events.pageY;
                $('#draggable_in').css({
                    'top': imgTop + y2 - y1,
                    'left': imgLeft + x2 - x1,
                    'bottom': 'auto',
                })
            }
        });
    }
    var eleImg = document.querySelector('#flipbook_outbox');
    var store = {
        scale: 1
    };
    // 缩放事件的处理
    eleImg.addEventListener('touchstart', function (event) {
        var touches = event.touches;
        var events = touches[0];
        var events2 = touches[1];
        if (events2) {
            event.preventDefault();
        }
        // 第一个触摸点的坐标
        store.pageX = events.pageX;
        store.pageY = events.pageY;
        store.moveable = true;
        if (events2) {
            store.pageX2 = events2.pageX;
            store.pageY2 = events2.pageY;
        }
        store.originScale = store.scale || 1;
    });
    document.addEventListener('touchmove', function (event) {
        if (!store.moveable) {
            return;
        }
        var touches = event.touches;
        var events = touches[0];
        var events2 = touches[1];
        // 双指移动
        if (events2) {
            event.preventDefault();
            $('.flipbook_outbox').addClass('two_move');
            // 第2个指头坐标在touchmove时候获取
            if (!store.pageX2) {
                store.pageX2 = events2.pageX;
            }
            if (!store.pageY2) {
                store.pageY2 = events2.pageY;
            }
            // 获取坐标之间的举例
            var getDistance = function (start, stop) {
                return Math.hypot(stop.x - start.x, stop.y - start.y);
            };
            // 双指缩放比例计算
            var zoom = getDistance({
                    x: events.pageX,
                    y: events.pageY
                }, {
                    x: events2.pageX,
                    y: events2.pageY
                }) /
                getDistance({
                    x: store.pageX,
                    y: store.pageY
                }, {
                    x: store.pageX2,
                    y: store.pageY2
                });
            // 应用在元素上的缩放比例
            var newScale = store.originScale * zoom;
            // 最大缩放比例限制
            if (newScale < 1) {
                newScale = 1;
            }
            if (newScale > 3) {
                newScale = 3;
            }
            // 记住使用的缩放值
            store.scale = newScale;
            // 图像应用缩放效果
            eleImg.style.transform = 'scale(' + newScale + ')';
            if (newScale > 1) {
                $('.flipbook_outbox').addClass('canmove');
                if (newScale > 3) {
                    $('.flipbook_outbox').removeClass('zoom_in');
                    $('.zoom_avater').removeClass('in').find('p').text($('.zoom_avater').data('zoom'))
                }
            } else {
                $('.flipbook_outbox').removeClass('canmove zoom_in');
                $('.flipbook_outbox').removeAttr('style');
                $('.zoom_avater').removeClass('in').find('p').text($('.zoom_avater').data('zoom'))
            }
        } else {
            $('.flipbook_outbox').removeClass('two_move');
        }
    });
    document.addEventListener('touchend', function () {
        store.moveable = false;
        delete store.pageX2;
        delete store.pageY2;
    });
    document.addEventListener('touchcancel', function () {
        store.moveable = false;
        delete store.pageX2;
        delete store.pageY2;
    });
    //第一層選單滑入
    $('.flipbook_index_date > p').hover(function () {
        $(this).addClass('hover_in');
    }, function () {
        $(this).removeClass('hover_in');
    });
    //第二層選單開
    $(".now_flipbook_type > a").click(function () {
        $('.type_submenu').addClass('open_in');
        $('.flipbook_left_nav').removeClass('open_in');
        setTimeout(function () {
            $('.flipbook_left_nav').addClass('open_in');
        }, 601)
        return false;
    });
    if ($('.now_flipbook').hasClass('right_slider')) {
        var table_width = $('.now_flipbook').parent('.flipbook_outbox').outerWidth(),
            table_group_width = $('.now_flipbook').outerWidth(),
            mov_w = table_group_width - table_width;
        $('.flipbook_outbox').stop().animate({
            scrollLeft: mov_w
        }, 1);
        var proportion = mov_w / table_group_width;
        if (!proportion == 0) {
            $('.now_flipbook').parent('.flipbook_outbox').attr('data-proportion', proportion);
        } else {
            $('.now_flipbook').parent('.flipbook_outbox').attr('data-proportion', '0');
        }
        //更新型錄頁數 
        $('.now_flipbook_dot').text('1');
        $('.all_flipbook_dot').text($('.now_flipbook .flipbook_page').length/2);
        $('.avater_flipbook_dot').addClass('has_dot');
        //更新左右輪播
        if (table_group_width > table_width) {
            $('.avater_left').removeClass('scrol_disabled');
            $('.avater_right').addClass('scrol_disabled');
        } else {
            $('.avater_right, .avater_left').addClass('scrol_disabled');
        }
    }
});
_href = $('.autoplay a').attr('href');
$('.open_avater_date').click(function(){
    if(typeof _href !='undefined' && _href!=''){
        _=$(this);
        _id=_.attr('id');
        myStr = _href.indexOf("?", 1);
        if (myStr) {
            var n_url = _href.substr(0, myStr);
        }
        if(myStr>0){
            $('.autoplay a').attr('href',n_url+'?id='+_id);
        }else{
            $('.autoplay a').attr('href',_href+'?id='+_id);
        }
    }
})
var avater_in_box=$('.avater_in_box');
avater_in_box.click(function (e) {
    console.log('click');
      var $class = $(e.target).attr('class');
      console.log($class);
      if ($class && $class.indexOf('avater_in_box') > -1) {
        avater_in_box.find('.close_avater_box').click();
      }
});
top_nav();
function top_nav(){
    if(window.innerWidth<641){
        $('.bottom_right_nav.right_back_nav').parent().hide()
    }else{
        $('.bottom_right_nav.right_back_nav').parent().show()
    }
}