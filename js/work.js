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
        autoplay: true,
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

        // ?????? ?????? ??????
        let title_h3 = [
            // ????????? : 0~10
            "???????????? ; ????????????????????????",
            "Sori Nori ; ????????? ?????????",
            "?????? ; ?????? ????????? ?????????",
            "???????????? ; ??????????????? ??????",
            "CUTERY ; ??????????????? ?????????",
            "STEAM ; logo block",
            "A point ; 1??? ?????? ??? ?????????",
            "Turtle ; ?????????????????? ???",
            "???????????? ; ??????????????? ?????????",          
            "????????? ;  ??????????????? ?????????",
            "??????????????????(??????)",

            // ?????? : 11~15
            "SIDMOOL_Redesign",
            "STEAM_Redesign",
            "???????????????_Redesign",
            "????????????????????? ; knit brand",
            "GROOMING"
        ]

        // ???????????? ??????
        let designer_content_img = [
            
            // ????????? ????????????
            "./images/work/design/process/juice-process.jpg",
            "./images/work/design/process/sam.jpg",
            "./images/work/design/process/ex.png",
            "./images/work/design/process/ex.png",
            "./images/work/design/process/ex.png",
            "./images/work/design/process/ex.png",
            "./images/work/design/process/ex.png",
            "./images/work/design/process/ex.png",
            "./images/work/design/process/ex.png",
            "./images/work/design/process/ex.png",
            "./images/work/design/process/ex.png",

            // ?????? ????????????
            "./images/work/publisher/process/sidmool.jpg",
            "./images/work/publisher/process/steam.jpg",
            "./images/work/publisher/process/seoul.jpg",
            "./images/work/design/process/ex.png",
            "./images/work/publisher/process/grooming.jpg",
        ]


        // --------------------------------------------------
        // ????????? ?????????
        // ???????????? ??????????????????
        $(".asparagus").click(function (e) { 
            e.preventDefault();

            $("#work-date").text("2022.08.10 ~ 2022.08.20") 
            $("#process-title").text(title_h3[0]) 
            $("#process").attr("src", designer_content_img[0])
        });

        // ????????????
        $(".toy").click(function (e) { 
            e.preventDefault();

            $("#work-date").text("2021.03.10 ~ 2021.09.20")
            $("#process-title").text(title_h3[1])  
            $("#process").attr("src", designer_content_img[2])
        });

        // ??????
        $(".soseo").click(function (e) { 
            e.preventDefault();

            $("#work-date").text("2022.09.13 ~ 2022.09.16")
            $("#process-title").text(title_h3[2])  
            $("#process").attr("src", designer_content_img[2])
        });

        // ????????????
        $(".sam").click(function (e) { 
            e.preventDefault();
            
            $("#work-date").text("2022.07.23 ~ 2022.07.26")
            $("#process-title").text(title_h3[3]) 
            $("#process").attr("src", designer_content_img[1])
        });

        // ????????????
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

        // ?????? ?????????
        // sidmool
        $(".sidmool").click(function (e) { 
            e.preventDefault();
            
            $("#origin a").attr("href", "https://www.sidmool.com/")
            $("#work-date").text("2022.07.22 ~ 2022.08.05")
            $("#contribution").text("?????????, ?????? : 100%")
            $("#process-title").text(title_h3[11]) 
            $("#process").attr("src", designer_content_img[11])

            $("#origin a").text("Origin Site")
            $("#origin a").attr("href", "https://www.sidmool.com/")
            $("#redesign a").text("Redesign Site")
            $("#redesign a").attr("href", "https://nahyeon777.github.io/Redesign_sidmool/")
        });

        // steam
        $(".steam").click(function (e) { 
            e.preventDefault();
            
            $("#origin a").attr("href", "https://store.steampowered.com/")
            $("#work-date").text("2022.10.14 ~ 2022.10.25")
            $("#contribution").text("?????????, ?????? : 100%")
            $("#process-title").text(title_h3[12]) 
            $("#process").attr("src", designer_content_img[12])

            $("#origin a").text("Origin Site")
            $("#origin a").attr("href", "https://store.steampowered.com/?l=koreana")
            $("#redesign a").text("Redesign Site")
            $("#redesign a").attr("href", "https://nahyeon777.github.io/Redesign_STEAM/")
        });

        // ???????????????
        $(".library").click(function (e) { 
            e.preventDefault();
            
            $("#origin a").attr("href", "https://lib.seoul.go.kr/")
            $("#work-date").text("2022.10.23 ~ 2022.10.29")
            $("#contribution").text("?????????, ?????? : 100%")
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
            $("#contribution").text("?????????, ?????? : 100%")
            $("#process-title").text(title_h3[14]) 
            $("#process").attr("src", designer_content_img[14])

            // web design ?????? ?????? ??????
            $("#origin a").text("Origin Site")
            $("#origin a").attr("href", "")
            $("#redesign a").text("Redesign Site")
        });
        // grooming
        $(".grooming, .app").click(function (e) { 
            e.preventDefault();
            
            $("#work-date").text("2022.08.10 ~ 2022.09.02")
            $("#contribution").text("?????????, ??????????????? : 100%")
            $("#process-title").text(title_h3[15]) 
            $("#process").attr("src", designer_content_img[15])

            // app design ?????? ?????? ??????
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