//图片轮播
$(function() {
    $('.cart').mouseenter(function() {
        console.log(11);
        // 每次移入的时候，清除以前的动画效果,动画效果执行之后会显示某一部分，通过hide()将多余的部分隐藏
        $('.cart').children('.cart-content').stop().hide();
        // 让对应的子级.item下拉
        $(this).children('.cart-content').slideDown(500);
    }).mouseleave(function() {
        $('.cart').children('.cart-content').slideUp(500);
        // $('.cart').children('.cart-content').stop().slideUp(100);
    })
    $('.cell-img').mouseenter(function() {
        $(this).animate({ top: -5 }, 100);
        $(this).css('box-shadow', '0 0 5px 5px   #ddd');

    }).mouseleave(function() {
        $(this).animate({ top: 0 }, 100);
        $(this).css('box-shadow', '');

    })

    $(' .laolu .sell-mi li').mouseenter(function() {
        $(this).animate({ top: -5 }, 100);
        $(this).css('box-shadow', '0 0 5px 5px   #ddd');

    }).mouseleave(function() {
        $(this).animate({ top: 0 }, 100);
        $(this).css('box-shadow', '');
    })


    $('.dfs .piao li').mouseenter(function() {
        $(this).animate({ top: -5 }, 100);
        $(this).css('box-shadow', '0 0 5px 5px   #ddd');

    }).mouseleave(function() {
        $(this).animate({ top: 0 }, 100);
        $(this).css('box-shadow', '');
    })

    $('.dh .star li').mouseenter(function() {
        $(this).animate({ top: -5 }, 100);
        $(this).css('box-shadow', '0 0 5px 5px   #ddd');

    }).mouseleave(function() {
        $(this).animate({ top: 0 }, 100);
        $(this).css('box-shadow', '');
    })


    $('.fjh .jbl').mouseenter(function() {
        $(this).animate({ top: -5 }, 100);
        $(this).css('box-shadow', '0 0 5px 5px   #ddd');

    }).mouseleave(function() {
        $(this).animate({ top: 0 }, 100);
        $(this).css('box-shadow', '');
    })

    $('.wait .phone').mouseenter(function() {
        $(this).animate({ top: -5 }, 100);
        $(this).css('box-shadow', '0 0 5px 5px   #ddd');

    }).mouseleave(function() {
        $(this).animate({ top: 0 }, 100);
        $(this).css('box-shadow', '');
    })
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
    function loadImg(){
         var sTop=$(window).scrollTop();
         var wHeight=$(window).height();

         $('img').each(function(){
             if($(this).offset().top<sTop+wHeight){
                 $(this).attr('src',$(this).attr('data-src'));
             }
         })
    }
    loadImg()

   $(window).scroll(function(){
      loadImg()
   })


});

var bool = true; //AJAX无限追加图片部分；
window.onscroll = function() {
    var dHeight = document.documentElement.scrollHeight;
    var wHeight = document.documentElement.clientHeight;
    var sHeight = document.body.scrollTop || document.documentElement.scrollTop;
    var h = dHeight - wHeight - sHeight;
    if (h < 534) {
        if (bool) {
            bool = false;
            get('http://localhost/p-04/wafjh/list.html/php/2.php', function(data) {
                var content = '';
                data.forEach(function(value, key) {
                    content += '<li><a href=""><img src="' + value.img + '"></a>';
                    content += '<div class="yu">';
                    content += '<p>' + value.he + '</p>';
                    content += '<p>' + value.wr + '</p>';
                    content += '<p>' + value.price + '<span>' + value.yu + '</span></p>';
                    content += '</div>';
                    content += '</li>';

                });
                document.querySelector('.slark-mi').innerHTML += content;
                bool = true;
            }, 'json')
        }
    }
}