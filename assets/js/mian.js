//图片轮播
$(function() {
    var timer = 0;
    var index = 0;
    var len = $('.carousel-image li').length;

    function run() {
        timer = setInterval(function() {
            $('.carousel-image li:eq(' + index + ')').stop().fadeOut(1000);
            $('.carousel-index li:eq(' + index + ')').stop().removeClass('active');
            index++;
            if (index > len - 1) {
                index = 0;
            }
            $('.carousel .carousel-image li:eq(' + index + ')').stop().fadeIn(1000);
            $('.carousel .carousel-index li:eq(' + index + ')').stop().addClass('active');

        }, 3000)
    }
    run();
    $('.carousel').mouseenter(function() {
        clearInterval(timer)
    }).mouseleave(function() {
        run();
    })
    $('.carousel-index li').mouseover(function() {
        $('.carousel-image li:eq(' + index + ')').stop().fadeOut(1000);
        $('.carousel-index li:eq(' + index + ')').stop().removeClass('active');
        index = $(this).index();
        $('.carousel .carousel-image li:eq(' + index + ')').stop().fadeIn(1000);
        $('.carousel .carousel-index li:eq(' + index + ')').stop().addClass('active');
    })
    $('.carousel-right').click(function() {
        $('.carousel-image li:eq(' + index + ')').stop().fadeOut(1000);
        $('.carousel-index li:eq(' + index + ')').stop().removeClass('active');
        index++;
        if (index > len - 1) {
            index = 0;
        }
        $('.carousel .carousel-image li:eq(' + index + ')').stop().fadeIn(1000);
        $('.carousel .carousel-index li:eq(' + index + ')').stop().addClass('active');
    })

    $('.carousel-left').click(function() {
        $('.carousel-image li:eq(' + index + ')').stop().fadeOut(1000);
        $('.carousel-index li:eq(' + index + ')').stop().removeClass('active');
        index--;
        if (index < 0) {
            index = len - 1;
        }
        $('.carousel .carousel-image li:eq(' + index + ')').stop().fadeIn(1000);
        $('.carousel .carousel-index li:eq(' + index + ')').stop().addClass('active');
    })


    var count = 0;
    var stimer = 0;

    function srun() {

        stimer = setInterval(function() {
            // $('.star-shop').animate({ marginLeft: -1226 * count }, 2000);


            count++;
            if (count > 1) {
                count = 0;
            }
            $('.star-shop').animate({ marginLeft: -1226 * count }, 2000);
        }, 4000)
    }
    srun();
    // count=0,第一行代码执行没有效果，count++=>count=1,第二行代码让移动到最左边

    // count=1,第一行代码执行没有效果，count++=>count=2=>count=1,底二行代码让移动到最右边
    $('.star-left,.star-right').mouseover(function() {
        clearInterval(stimer);

    }).mouseout(function() {
        srun();
    })
    $('.star-left').click(function() {
        $('.star-shop').animate({ marginLeft: -1226 }, 500);
    })

    $('.star-right').click(function() {
        $('.star-shop').animate({ marginLeft: 0 }, 500);

    })
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
    var xml = 0;
    $('.index>li').click(function() {
        $('.index li:eq(' + xml + ')').removeClass('active');

        xml = $(this).index();
        $('.content').animate({ left: -296 * xml }, 600)
        $('.index>li:eq(' + xml + ')').addClass('active');
    })


    var xml = 0;
    $('.index1>li').click(function() {
        $('.index1 li:eq(' + xml + ')').removeClass('active');

        xml = $(this).index();
        $('.content1').animate({ left: -296 * xml }, 600)
        $('.index1>li:eq(' + xml + ')').addClass('active');
    })

     
    $('.index2>li').click(function() {
        $('.index2 li:eq(' +  xml + ')').removeClass('active');

         xml = $(this).index();
        $('.content2').animate({ left: -296 *  xml }, 600)
        $('.index2>li:eq(' +  xml + ')').addClass('active');
    })
    
    $('.index3>li').click(function() {
        $('.index3 li:eq(' +  xml + ')').removeClass('active');

         xml = $(this).index();
        $('.content3').animate({ left: -296 *  xml }, 600)
        $('.index3>li:eq(' +  xml + ')').addClass('active');
    })
    $('.klw').mouseover(function() {

        $(this).children('div').css('display', 'block');
    }).mouseout(function() {

        $(this).children('div').css('display', 'none');
    }) 

    $(' .klw-right').click(function() {
        var index = $(this).siblings('ol').children('.active').index();

        index++;
        if (index > $(this).siblings('ol').children().length-1) {
            // 终止函数
            return false;
        }

        $(this).siblings('ol').children().removeClass('active').eq(index).addClass('active');
        $(this).siblings('ul').animate({left:-index*296},500);
    })

    $(' .klw-left').click(function() {
        var index = $(this).siblings('ol').children('.active').index();

        index--;
        if (index < 0) {
            // 终止函数
            return false;
        }

        $(this).siblings('ol').children().removeClass('active').eq(index).addClass('active');
        $(this).siblings('ul').animate({left:-index*296},500);
    })


   
    $('.carousel-menu li').mouseenter(function() {
        $(this).children('.carousel-btn').css('display', 'block');
    }).mouseleave(function() {
        $(this).children('.carousel-btn').css('display', 'none');
    })

    var ggl = 0;
    $('.desk-search li').mouseover(function() {
        $('.desk-search li:eq(' + ggl + ')').removeClass('active')
        $('.desk-pho:eq(' + ggl + ')').css('display', 'none');
        ggl = $(this).index();
        $('.desk-search li:eq(' + ggl + ')').addClass('active')
        $('.desk-pho:eq(' + ggl + ')').css('display', 'block');
    })

    $('.desk-pic').mouseenter(function() {
        $(this).animate({ top: -5 }, 100);
        $(this).css('box-shadow', '0 0 5px 5px  #ddd');
    }).mouseout(function() {
        $(this).animate({ top: 0 }, 100);
        $(this).css('box-shadow', '');
    })
    $('.desk-pho li').mouseenter(function() {
        $(this).animate({ top: -5 }, 100);
        $(this).css('box-shadow', '0 0 5px 5px   #ddd');
        $(this).children('.desk-loa').animate({ top: 225 }, 100);

    }).mouseleave(function() {
        $(this).children('.desk-loa').animate({ top: 305 }, 100);
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
    $('.elect-one li').mouseenter(function() {
        $(this).animate({ top: -5 }, 300);
        $(this).css('box-shadow', '0 0 5px 5px   #ddd');

    }).mouseleave(function() {

        $(this).animate({ top: 0 }, 100);
        $(this).css('box-shadow', '');

    })
    $('.vodio li').mouseenter(function() {
        $(this).animate({ top: -5 }, 100);
        $(this).css('box-shadow', '0 0 5px 5px   #ddd');
        $(this).children('span').css('background-color', '#ff6700');
    }).mouseleave(function() {
        $(this).animate({ top: 0 }, 100);
        $(this).css('box-shadow', '');
        $(this).children('span').css('background-color', '');
    })
   var ss;
        $('.input').focus(function() {
            $(this).siblings('.model').show();
            $('input').val('');
        }).blur(function() {
            $('input').val(ss);
            var that = $(this);
            setTimeout(function() {
                that.siblings('.model').hide();
            }, 300)
            // ;
        })
        $('li').click(function() {
            ss = $(this).text();
            console.log(ss);
            $('.input').val(ss);
            $(this).parent('.model').hide();
        })
        $('.exit').click(function() {
            $('.trans').hide();
             $('body').css('overflow-y','');
        })
        $('.hjt').click(function() {
            $('.trans').css('display', 'block');
            $('body').css('overflow-y','hidden');
        })
        var nmd=0;
        $('.login>span').click(function(){        
             $('.login>span:eq('+nmd+')').removeClass('active');
             $('.labelbox:eq('+nmd+')').css('display','none');
             nmd=$(this).index();
             $('.login>span:eq('+nmd+')').addClass('active');
             $('.labelbox:eq('+nmd+')').css('display','block');
        })
        $('.wsz').click(function(){
             $('.sccen').hide();
             $('body').css('overflow-y','');
        })
        $('.dll').click(function(){
             $('.sccen').show();
             $('body').css('overflow-y','hidden');
        })
       $('.fff').click(function(){
            var value1=$.trim($('.ace').val());
            var value2=$.trim($('.rrr').val())
            var reg1= /^(13[0-9]|14[579]|15[012356789]|17[135678]|18[0-9]|199)[0-9]{8}$/;
            var reg2=/^[0-9a-zA-Z_\.]{1,}@[a-zA-Z0-9]+\.[a-z]{2,5}(\.cn)?$/;
            var reg3= /^[a-zA-Z0-9]{6,14}$/;
            if(reg1.test(value1)||reg2.test(value1)){
                $('.pMsg').text('用户名正确');
                $('.pMsg').addClass('active');
                $('.pMsg').removeClass('error');
            }else{
                $('.pMsg').text('用户名不正确,请重新输入');
                $('.pMsg').removeClass('active');
                $('.pMsg').addClass('error');
            }
            if(value1==''){
                $('.pMsg').text('');
            }
            if(reg3.test(value2)){
               $('.eMsg').text('密码正确');  
               $('.eMsg').addClass('active');
               $('.eMsg').removeClass('error');
            }else{              
               $('.eMsg').text('密码不正确,请重新输入');
               $('.eMsg').removeClass('active');
               $('.eMsg').addClass('error');  
            }
            if(value2==''){
                $('.eMsg').text('');
            }
       }) 
})

window.onload = function() { //Ajax部分导航显示下拉框部分；
    var searchText = document.querySelector('.search-text');
    var nAV = document.querySelector('.nav-mi');
    var search = document.querySelector('.search-man')
    searchText.onfocus = function() {
        nAV.innerHTML = '';
        this.style.border = '1px solid red';
        nAV.style.display = 'block';
        search.style.borderLeft = '1px solid red';

        get('http://localhost/p-04/wafjh/php/1.php', function(data) {
            var content = '';
            data.forEach(function(value, key) {
                content += '<li><a href=" "><span>' + value.name + '</span><span>' + value.number + '</span></a></li>'
            })
            document.querySelector('.nav-mi').innerHTML += content;
        }, 'json')
    }
    searchText.onblur = function() {
        nAV.style.display = 'none';
        this.style.border = '';
        search.style.borderLeft = '';
    }

        var username = document.getElementById('ber');
        var uMsg = document.getElementById('reeg');
        var icon = document.querySelector('.mimi')
        username.onfocus = function() {

        }
        username.onblur = function() {
            var value = this.value.trim();
            var reg = /^(13[0-9]|14[579]|15[012356789]|17[135678]|18[0-9]|199)[0-9]{8}$/;
            var reg1 = /[\D]{1,11}/
            if (reg.test(value)) {
                uMsg.innerHTML = "恭喜您，手机号码可用";
                uMsg.className = 'success';
                // icon.style.display='block';
            } else if (username.innerHTML == "") {
                uMsg.innerHTML = "请输入手机号码";
                uMsg.className = 'active';
            }
            if (reg1.test(value)) {
                uMsg.innerHTML = "格式不正确";
                uMsg.className = 'active';
            }
        }  

}