//图片轮播
$(function() {
    //购物车的子集下拉部分；
    $('.cart').mouseenter(function() {
        console.log(11);
        $('.cart').children('.cart-content').stop().hide();
        $(this).children('.cart-content').slideDown(500);
    }).mouseleave(function() {
        $('.cart').children('.cart-content').slideUp(500);

    })
    //上方导航下拉变成固定定位部分
    $(window).scroll(function() {
        var h = $(window).scrollTop();
        if (h > 327) {
            $('.top').css('position', 'fixed').css('top', 0);
            $('.top').slideDown(2000);
        } else if (h < 327) {
            $('.top').css('position', 'absolute').css('top', 262);
        }
    })
    //左侧图片的上下移动部分
    $(window).scroll(function() {
        var h = $(window).scrollTop();
        if (h < 327) {
            $('.xxmi-cent').css('position', 'relative').css('top', 0);
        } else if (h >= 327 && h < 900) {

            $('.xxmi-cent').css('position', 'fixed').css('top', 100);
        } else if (h > 900) {
            $('.xxmi-cent').css('position', 'relative').css('top', 590);
        }


    })
    $('.cha').click(function() {
        $('.pig').animate({ height: 0 }, 600);
    })
    //左侧轮播部分
    var xxmiIndex = 0;
    var timer = 0;
    var len = 2;

    function run() {
        timer = setInterval(function() {
            $('.xxmi-cent li:eq(' + xxmiIndex + ')').fadeOut(1000);
            $('.xxmi-bot li:eq(' + xxmiIndex + ')').removeClass('active')
            xxmiIndex++;
            if (xxmiIndex > len - 1) {

                xxmiIndex = 0;
            }
            $('.xxmi-cent li:eq(' + xxmiIndex + ')').fadeIn(1000);
            $('.xxmi-bot li:eq(' + xxmiIndex + ')').addClass('active');

        }, 5000);
    }
    run();

    $('.xxmi-bot li').mouseover(function() {
        clearInterval(timer);
        $('.xxmi-cent li:eq(' + xxmiIndex + ')').stop(true).fadeOut(1000);
        $('.xxmi-bot li:eq(' + xxmiIndex + ')').stop(true).removeClass('active');
        xxmiIndex = $(this).index();
        $('.xxmi-cent li:eq(' + xxmiIndex + ')').stop(true).fadeIn(1000);
        $('.xxmi-bot li:eq(' + xxmiIndex + ')').stop(true).addClass('active');

    }).mouseout(function() {
        run();
    })
    $('.xxmi-left,.xxmi-right').mouseover(function() {
        clearInterval(timer);

    }).mouseout(function() {
        run();
    })
    $('.xxmi-left').click(function() {
        clearInterval(timer);
        $('.xxmi-cent li').stop(true);
        $('.xxmi-cent li:eq(' + xxmiIndex + ')').fadeOut(1000);
        $('.xxmi-bot li:eq(' + xxmiIndex + ')').removeClass('active');
        xxmiIndex--;
        if (xxmiIndex < 0) {
            xxmiIndex = 1;
        }
        $('.xxmi-cent li:eq(' + xxmiIndex + ')').fadeIn(1000);
        $('.xxmi-bot li:eq(' + xxmiIndex + ')').addClass('active');
    })

    $('.xxmi-right').click(function() {
        clearInterval(timer);
        $('.xxmi-cent li').stop(true)
        $('.xxmi-cent li:eq(' + xxmiIndex + ')').fadeOut(1000);
        $('.xxmi-bot li:eq(' + xxmiIndex + ')').removeClass('active');
        xxmiIndex++;
        if (xxmiIndex > 1) {
            xxmiIndex = 0
        }
        $('.xxmi-cent li:eq(' + xxmiIndex + ')').fadeIn(1000);
        $('.xxmi-bot li:eq(' + xxmiIndex + ')').addClass('active');
    })
    //点击修改对应省份发生改变，并把它写入到div.laca中部分
    $('.loca-xyz').click(function() {
        $('.loca-one').show();
        $('.loca-one .loca-two:eq(0)').show();
        $('.loca-one .loca-two:eq(1)').hide();
        $('.loca-one .loca-ggl').hide();
    });
    $('.loca-three').click(function() {
        $('.loca-one').hide();
    })

    $('.loca-hand').click(function() {
        console.log(111);
        $('.loca-one .loca-two:eq(0)').hide();
        $('.loca-one .loca-two:eq(1)').show();
        $('.loca-one .loca-ggl').hide();
        console.log(111);
    })
    $('.loca-gglb').click(function() {
        $('.loca-one').hide();
    })

    var ttr;
    $('.loca-two>.bj>li').click(function() {
        var jjd = $(this).html();
        $('.loca-xxh span:eq(0)').html(jjd);
        $('.loca-ggl:eq(' + ttr + ')').css('display', 'none');
        ttr = $(this).index();
        $('.loca-ggl:eq(' + ttr + ')').css('display', 'block');
        $('.loca-two').hide();
    })

    $('.loca-ggl .bj li').click(function() {
        var tyu = $(this).html();
        $('.loca-xxh span:eq(1)').html(tyu);
        $('.loca-one').hide();

    })
    $('.loca-one .loca-two:eq(1) p').click(function() {
        console.log(111);
        $('.loca-one .loca-two:eq(0)').show();
        $('.loca-one .loca-two:eq(1)').hide()


    })
    $('.loca-ggl:eq(0) p').click(function() {
        $('.loca-ggl:eq(0)').hide();
        $('.loca-two:eq(0)').show();
    })
    $('.loca-ggl:eq(1) p').click(function() {
        $('.loca-ggl:eq(1)').hide();
        $('.loca-two:eq(0)').show();
    })
    $('.loca-ggl:eq(2) p').click(function() {
        $('.loca-ggl:eq(2)').hide();
        $('.loca-two:eq(0)').show();
    })
    var uul = 0;
    $('.chioce li').click(function() {
        $('.chioce li:eq(' + uul + ')').removeClass('active');
        $('.match-shop li:eq(' + uul + ')').removeClass('active')
        $('.Min2:eq(' + uul + ')').removeClass('active');
        uul = $(this).index();
        $('.chioce li:eq(' + uul + ')').addClass('active');
        $('.match-shop li:eq(' + uul + ')').addClass('active');
        $('.Min2:eq(' + uul + ')').addClass('active');
    })
    //点击追加价格部分；
    $('.urgent').click(function() {
        sum = parseInt($('.Min2:eq(' + uul + ') .jiang').html());
        console.log(333);
        $(this).toggleClass('active');
        $('.sfea').toggleClass('active');
        $('.max2 span').clone(true).appendTo($('.Min2:eq(0) li:first'));
        $('.max2 span').clone(true).appendTo($('.Min2:eq(1) li:first'));
        $('.max2 span').clone(true).appendTo($('.Min2:eq(2) li:first'));
        $('.Min2').animate({ height: 160 });
        console.log($('.jiang').html());
        console.log($('.count').html());
        //$('.jiang').html() = $('.jiang')+$('.count');
        sum += parseInt($('.count ').html());
        $('.jiang').html(sum);

    })
    //点击加入购物车部分的动画效果；
    $('.join').click(function() {
        var y = $(window).scrollTop();
        console.log($(window).scrollTop());
        if (y > 1600) {
            $('.gwc').children('.slb').animate({ top: 2000 }, 1000);
        } else if (y > 900 && y < 1600) {
            $('.gwc').children('.slb').animate({ top: 1300 }, 1000);
        } else if (y = 1600) {
            $('.gwc').children('.slb').animate({ top: 1600 }, 1000);

        } else if (y < 900) {
            $('.gwc').children('.slb').animate({ top: 1000 }, 1000);

        } else {
            $('.gwc').children('.slb').animate({ top: 400 }, 1000);
        }
        $('.gwc').show();
    })
    $('.slb .otm').click(function() {
        $('.gwc').hide();
        $('.gwc').children('.slb').animate({ top: -404 }, 500);
    })
    $('.match-shop li span.list1').click(function() {
        $('.total').removeClass('active')
        $(this).removeClass('active');
        $('.match li span.list2').addClass('active');
    })
    $('.match-shop li span.list2').click(function() {
        $('.total').addClass('active')
        $(this).removeClass('active');
        $('.match li span.list1').addClass('active');
    })
    $('.total li:eq(0)').click(function() {
        var sum = parseInt($('.Min2:eq(' + uul + ') .jiang').html());
        $(this).toggleClass('active');
        $('.circle').toggleClass('active');
        $('.zj .zh').clone(true).appendTo($('.Min2:eq(' + uul + ') li:first'))
        $('.zj .yi').clone(true).appendTo($('.Min2:eq(' + uul + ') li:first'));
        $('.Min2').animate({ height: 180 });
        sum += parseInt($('.yi ').html());
        $('.jiang').html(sum);
    })
    var io = 0;
    $('.zj>div').click(function() {
        console.log(333);
        $('.zj>div:eq(' + io + ')').removeClass('active');
        $('.total>p:eq(' + io + ')').removeClass('active')
        io = $(this).index();
        $('.zj>div:eq(' + io + ')').addClass('active');
        $('.total>p:eq(' + io + ')').addClass('active')


    })
    //导航栏目下拉部分
    $('.nav-menu').mouseenter(function() {
        $('.yinlu').stop(true).slideDown()
    }).mouseleave(function() {
        $('.yinlu').slideUp()
    })

    $('.yinlu').mouseenter(function() {
        $(this).stop();
    }).mouseleave(function() {
        $(this).slideUp();
    })
    var tte=0;

    $('.nav-menu li').mouseenter(function() {
        $('.yinlu .item:eq(' + tte + ')').removeClass('active');
        tte = $(this).index();
        $('.yinlu .item:eq(' + tte + ')').addClass('active');
    })
    $('.loca-one .local-two:eq(0) .wdw').focus(function() {
        $(this).siblings('.pro').css('display', 'none');

    })
})