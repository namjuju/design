$(document).ready(function(){

    let window_w = $(window).width()
    let device_status = 'pc' //pc버전 or 모바일버전
    if(window_w > 640){
        device_status = 'pc'
    }else{
        device_status = 'mobile'
    }
    console.log(device_status)
    $(window).resize(function(){
        window_w = $(window).width()
        if(window_w > 640){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    })


	/* 메뉴에 마우스를 오버하면 header에 menu_open이라는 클래스를 추가
       메뉴에 마우스를 아웃하면 header에 menu_open이라는 클래스를 삭제*/

       $('.header .gnb').on('mouseenter focusin', function(){
            if(device_status == 'pc'){
                $(".header").addClass("menu_open");
            }
       })
       $('.header').on('mouseleave', function(){
            $(".header").removeClass("menu_open");
       })
       $('.header .gnb > ul > li:last-child > ul > li:last-child').on('focusout', function(){
            $(".header").removeClass("menu_open");
       })

       $('.header .gnb .gnb_open').on('click', function(){
            $(".header").addClass("menu_open");
       })
       $('.header .gnb .gnb_close').on('click',function(){
            $(".header").removeClass("menu_open");
       })
});/* $(document).ready */