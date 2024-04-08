$(document).ready(function(){
  
    $('.header .header_main .gnb ul.depth1 > li').on('mouseenter focusin', function(){
        $('.header .header_main .gnb ul.depth1 > li').removeClass('sub_over')
        $(this).addClass('sub_over')
        $('.header').addClass('menu_over')
    })
    $('.header .header_main .gnb').on('mouseleave', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $('.header').removeClass('menu_over')
    })
    $('.header .menu .search').on('focusin', function(){
        $('.header .header_main .gnb ul.depth1 > li').removeClass('sub_over')
        $('.header').removeClass('menu_over')
    })

    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })

    $(".header .gnb ul.depth1 > li:has(.depth2) > a").on("click", function(e){
        e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
        if($(this).parent().hasClass('sub_open') == true){//sub_open있다면
            console.log('sub_open있음')
            $(this).parent().removeClass('sub_open')
            $(this).parent().find('ul.depth2').slideUp()
        }else{
            console.log('sub_open없음')
            $(this).parent().addClass('sub_open')
            $(this).parent().find('ul.depth2').slideDown()
        }
    });

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
    autoplay: {  /* 팝업 자동 실행 */
        delay: 6000,
        disableOnInteraction: true,
    },
    loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    
    pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.visual .paging', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
		    return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	},
    navigation: {  /* 이전, 다음 버튼 */
        nextEl: '.visual .next',  /* 다음 버튼의 클래스명 */
        prevEl: '.visual .prev',  
    },
});

$('.visual .ctrl_btn button.stop').on('click', function(){
    $(this).hide()
    $('.visual .visual_btn .ctrl_btn button.play').show()
    visual_swiper.autoplay.stop();  /* 일시정지 기능 */
})
$('.visual .ctrl_btn button.play').on('click', function(){
    $(this).hide()
    $('.visual .visual_btn .ctrl_btn button.stop').show()
    visual_swiper.autoplay.start();  /* 재생 기능 */
})

    $('.list .list_wrap > ul > li').on('click', function(){
        $('.list .list_wrap > ul > li').removeClass('active')
        $(this).addClass('active')
    })
})