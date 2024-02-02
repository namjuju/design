$(document).ready(function(){
	console.log('안녕하세요')
    /*브라우저에서 스크롤하면 header에 fixed라는 클래스를 줌*/
    /*
    1. 브라우저가 스크롤 된 정도를 표시한 값
       $(window).scrollTop()
    2. 스크롤 값이 0이라면 header에 fixed라는 클래스를 삭제
       스크롤 값이 0보다 크다면 header에 fixed라는 클래스를 준다. */
    $(window).scroll(function(){
        let scrolling = $(window).scrollTop()
        console.log(scrolling)

        /*조건문 - scrolling의 값이 0보다 크면*/
        if(scrolling > 0){
            //console.log('0보다크다')
            $(".header").addClass("fixed")
        }else{ //0일때 - 맨위에 있을때
            //console.log('0이다')
            $(".header").removeClass("fixed")
        }
    });
});