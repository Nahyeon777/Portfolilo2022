$(document).ready(function () {

    // 네비게이션 여닫기
    $(".ham").click(function (e) { 
        $(this).toggleClass('on');
        // $(".nav").toggleClass('on');
        $(".menu").toggleClass('on');
    });

    // 마우스 메뉴
    $("html, body").contextmenu(function(e){
        e.preventDefault();
        // alert("우측 마우스를 사용할 수 없습니다.")
        let x = e.pageX;
        let y = e.pageY;
        console.log("가로:"+x, "세로:"+y)
        $(".mouse-menu").css("left", x+"px").show()
        $(".mouse-menu").css("top", y+"px").show()
        $("html, body").click(function (e) { 
            $(".mouse-menu").css("top", y+"px").hide()
        });
    })
});
