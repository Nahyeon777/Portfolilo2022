$(document).ready(function () {

    // tabmenu
    // designer-content
    $(".designer-content .tabmenu ul li").eq(0).addClass("on")
    $(".designer-content .tab-wrap .tab-content").eq(0).show();
    $(".designer-content .tab-wrap .tab-content").eq(1).hide();
    $(".designer-content .tab-wrap .tab-content").eq(2).hide();
    $(".designer-content .tab-wrap .tab-content").eq(3).hide();
    $(".designer-content .tab-wrap .tab-content").eq(4).hide();
    
    $(".designer-content .tabmenu ul li").click(function(){

        let i = $(this).index();
        $(".designer-content .tabmenu ul li").removeClass("on").eq(i).addClass("on")
    
        $(".designer-content .tab-wrap .tab-content").hide().eq(i).show();
    })

    // publisher-content
    $(".publisher-content .tabmenu ul li").eq(0).addClass("on")
    $(".publisher-content .tab-wrap .tab-content").eq(0).show();
    $(".publisher-content .tab-wrap .tab-content").eq(1).hide();
    $(".publisher-content .tab-wrap .tab-content").eq(2).hide();
    $(".publisher-content .tab-wrap .tab-content").eq(3).hide();
    $(".publisher-content .tab-wrap .tab-content").eq(4).hide();
    
    $(".publisher-content .tabmenu ul li").click(function(){

        let i = $(this).index();
        $(".publisher-content .tabmenu ul li").removeClass("on").eq(i).addClass("on")
    
        $(".publisher-content .tab-wrap .tab-content").hide().eq(i).show();
    })

    $('.variable-width').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        // autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover:true,
        draggable : true,
        dotsClass : "slick-dots",

        responsive: [
            {
                breakpoint : 767,
                settings : {
                    centerMode: true,
                }
            }
        ]
    });

    // modal
    $(".item img").click(function (e) { 
        e.preventDefault();


        $(".process").fadeIn();

        // 작품 제목 배열
        let title_h3 = [
            // 디자인 : 0~10
            "햇살채움 ; 양구아스파라거스",
            "Sori Nori ; 장난감 디자인",
            "소서 ; 본디 마음을 펼치다",
            "안녕하삼 ; 숙취해소제 로고",
            "CUTERY ; 개인수저통 디자인",
            "STEAM ; logo block",
            "A point ; 1인 가구 술 브랜드",
            "Turtle ; 라이프스타일 샵",
            "려원족발 ; 상세페이지 디자인",          
            "해우림 ;  상세페이지 디자인",
            "라바앤바바나(수정)",

            // 퍼블 : 11~15
            "SIDMOOL_Redesign",
            "STEAM_Redesign",
            "서울도서관_Redesign",
            "서세미스트리트 ; knit brand",
            "GROOMING"
        ]

        // 프로세스 배열
        let designer_content_img = [
            
            // 디자인 프로세스
            "../images/work/design/process/juice-process.jpg",
            "../images/work/design/process/sam.jpg",
            "../images/work/design/process/ex.png",
            "../images/work/design/process/ex.png",
            "../images/work/design/process/ex.png",
            "../images/work/design/process/ex.png",
            "../images/work/design/process/ex.png",
            "../images/work/design/process/ex.png",
            "../images/work/design/process/ex.png",
            "../images/work/design/process/ex.png",
            "../images/work/design/process/ex.png",

            // 퍼블 프로세스
            "../images/work/publisher/process/sidmool.jpg",
            "../images/work/design/process/ex.png",
            "../images/work/design/process/ex.png",
            "../images/work/design/process/ex.png",
            "../images/work/publisher/process/grooming.jpg",
        ]


        // --------------------------------------------------
        // 디자인 작업물
        // 햇살채움 아스파라거스
        $(".asparagus").click(function (e) { 
            e.preventDefault();

            $("#work-date").text("2022.08.10 ~ 2022.08.20") 
            $("#process-title").text(title_h3[0]) 
            $("#process").attr("src", designer_content_img[0])
        });

        // 소리노리
        $(".toy").click(function (e) { 
            e.preventDefault();

            $("#work-date").text("2021.03.10 ~ 2021.09.20")
            $("#process-title").text(title_h3[1])  
            $("#process").attr("src", designer_content_img[2])
        });

        // 소서
        $(".soseo").click(function (e) { 
            e.preventDefault();

            $("#work-date").text("2022.09.13 ~ 2022.09.16")
            $("#process-title").text(title_h3[2])  
            $("#process").attr("src", designer_content_img[2])
        });

        // 안녕하삼
        $(".sam").click(function (e) { 
            e.preventDefault();
            
            $("#work-date").text("2022.07.23 ~ 2022.07.26")
            $("#process-title").text(title_h3[3]) 
            $("#process").attr("src", designer_content_img[1])
        });

        // 커트러리
        $(".cutery").click(function (e) { 
            e.preventDefault();
            
            $("#work-date").text("2020.10.23 ~ 2020.12.10")
            $("#process-title").text(title_h3[4]) 
            $("#process").attr("src", designer_content_img[2])
        });

        // steam-block
        $(".steam-block").click(function (e) { 
            e.preventDefault();
            
            $("#work-date").text("2022.08.27 ~ 2022.08.28")
            $("#process-title").text(title_h3[5]) 
            $("#process").attr("src", designer_content_img[2])
        });

        // apoint
        $(".apoint").click(function (e) { 
            e.preventDefault();
            
            $("#work-date").text("2022.07.20 ~ 2022.07.26")
            $("#process-title").text(title_h3[6]) 
            $("#process").attr("src", designer_content_img[2])
        });

        // turtle
        $(".turtle").click(function (e) { 
            e.preventDefault();
            
            $("#work-date").text("2021.03.10 ~ 2021.10.11")
            $("#process-title").text(title_h3[7]) 
            $("#process").attr("src", designer_content_img[2])
        });

        // reowon
        $(".reowon").click(function (e) { 
            e.preventDefault();
            
            $("#work-date").text("2021.03.14 ~ 2021.04.14")
            $("#process-title").text(title_h3[8]) 
            $("#process").attr("src", designer_content_img[2])
        });

        // haeurim
        $(".haeurim").click(function (e) { 
            e.preventDefault();
            
            $("#work-date").text("2021.07.28 ~ 2021.08.25")
            $("#process-title").text(title_h3[9]) 
            $("#process").attr("src", designer_content_img[2])
        });

        // cury
        $(".cury").click(function (e) { 
            e.preventDefault();
            
            $("#work-date").text("2021.07.29 ~ 2021.08.05")
            $("#process-title").text(title_h3[10]) 
            $("#process").attr("src", designer_content_img[2])

            
        });

        // 퍼블 작업물
        // sidmool
        $(".sidmool").click(function (e) { 
            e.preventDefault();
            
            $("#origin a").attr("href", "https://www.sidmool.com/")
            $("#work-date").text("2022.07.22 ~ 2022.08.05")
            $("#contribution").text("디자인, 코딩 : 100%")
            $("#process-title").text(title_h3[11]) 
            $("#process").attr("src", designer_content_img[11])

            $("#origin a").text("Origin Site")
            $("#origin a").attr("href", "https://www.sidmool.com/")
            $("#redesign a").text("Redesign Site")
        });

        // steam
        $(".steam").click(function (e) { 
            e.preventDefault();
            
            $("#origin a").attr("href", "https://store.steampowered.com/")
            $("#work-date").text("2022.00.00 ~ 2022.00.00")
            $("#contribution").text("디자인, 코딩 : 100%")
            $("#process-title").text(title_h3[12]) 
            $("#process").attr("src", designer_content_img[12])

            $("#origin a").text("Origin Site")
            $("#origin a").attr("href", "https://store.steampowered.com/?l=koreana")
            $("#redesign a").text("Redesign Site")
            $("#redesign a").attr("href", "https://nahyeon777.github.io/Redesign_STEAM/")
        });

        // 서울도서관
        $(".library").click(function (e) { 
            e.preventDefault();
            
            $("#origin a").attr("href", "https://lib.seoul.go.kr/")
            $("#work-date").text("2022.10.23 ~ 2022.10.29")
            $("#contribution").text("디자인, 코딩 : 100%")
            $("#process-title").text(title_h3[13]) 
            $("#process").attr("src", designer_content_img[13])

            $("#origin a").text("Origin Site")
            $("#origin a").attr("href", "https://lib.seoul.go.kr/")
            $("#redesign a").text("Redesign Site")
            $("#redesign a").attr("href", "https://nahyeon777.github.io/Redesign_Seoul-Library/")
        });

        // seosemistreet
        $(".seosemistreet").click(function (e) { 
            e.preventDefault();
            
            $("#work-date").text("2022.00.00 ~ 2022.00.00")
            $("#contribution").text("디자인, 코딩 : 100%")
            $("#process-title").text(title_h3[14]) 
            $("#process").attr("src", designer_content_img[14])

            // web design 상단 메뉴 변경
            $("#origin a").text("Origin Site")
            $("#origin a").attr("href", "")
            $("#redesign a").text("Redesign Site")
        });
        // grooming
        $(".grooming, .app").click(function (e) { 
            e.preventDefault();
            
            $("#work-date").text("2022.08.10 ~ 2022.09.02")
            $("#contribution").text("디자인, 프로토타입 : 100%")
            $("#process-title").text(title_h3[15]) 
            $("#process").attr("src", designer_content_img[15])

            // app design 상단 메뉴 변경
            $("#origin a").text("Prototype")
            $("#origin a").attr("href", "https://xd.adobe.com/view/e4ad6924-fd92-409d-a548-d74ccff132f2-b1fe/")
            $("#redesign a").text("App")
        });

        
        // --------------------------------------------------

        let i = $(this).index();
        console.log(designer_content_img[i])

        $(".process").fadeIn();
        $(".process .process-wrap .process-content img").attr("src", designer_content_img[i] )

        });

        $("#close").click(function (e) { 
            e.preventDefault();
            $(".process").fadeOut();
        });
        
});