$(document).ready(function () {

    $("html *").attr("data-dark", "false")
    const dark_mode = localStorage.getItem("dark_mode")
    console.log(dark_mode)

    if(!dark_mode){ 
        // 다크모드 아닐 때
        $("html *").attr("data-dark", "false");
            // index-이미지
            $("#i").attr("src", "images/i.png")
            $("#word").attr("src", "images/word.png") 
            $("#job").text("I'm DESIGNER")

            // about
            $("#dot").attr("src", "images/aboutme/dot.png")
            $(".about-job").text("디자이너")
            $("#profile").attr("src", "images/aboutme/profile.png")
            $("#m-profile").attr("src", "images/aboutme/m-profile.png")
                // about-tool
                $("#photoshop").attr("src", "images/aboutme/photoshop.png")
                $("#illustrator").attr("src", "images/aboutme/illustrator.png")
                $("#xd").attr("src", "images/aboutme/xd.png")
                $("#aftereffect").attr("src", "images/aboutme/aftereffect.png")
                $("#premiere").attr("src", "images/aboutme/premiere.png")
                $("#rhino").attr("src", "images/aboutme/rhino.png")
                $("#keyshot").attr("src", "images/aboutme/keyshot.png")
                $("#blender").attr("src", "images/aboutme/blender.png")
                $("#twinmotion").attr("src", "images/aboutme/twinmotion.png")
                $("#visualstudio").attr("src", "images/aboutme/visual studio code.png")
                
            // work
            $(".designer-content").show();
            $(".publisher-content").hide();

            // contact
            $("#contactme").attr("src", "images/contact me_red.png")

    }else{
        // 다크모드일때
        $("html *").attr("data-dark", "true");

            // index-이미지
            $("#i").attr("src", "images/i-glass.png")        
            $("#word").attr("src", "images/word-yellow.png")        
            $("#job").text("I'm PUBLISHER")

            // about
            $("#dot").attr("src", "images/aboutme/dot-yellow.png")
            $(".about-job").text("퍼블리셔")
            $("#profile").attr("src", "images/aboutme/profile_p.png")
            $("#m-profile").attr("src", "images/aboutme/m_profile_p.png")
                // about-tool
                $("#photoshop").attr("src", "images/aboutme/photoshop-white.png")
                $("#illustrator").attr("src", "images/aboutme/illustrator-white.png")
                $("#xd").attr("src", "images/aboutme/xd-white.png")
                $("#aftereffect").attr("src", "images/aboutme/aftereffect-white.png")
                $("#premiere").attr("src", "images/aboutme/premiere-white.png")
                $("#rhino").attr("src", "images/aboutme/rhino-white.png")
                $("#keyshot").attr("src", "images/aboutme/keyshot-white.png")
                $("#blender").attr("src", "images/aboutme/blender-white.png")
                $("#twinmotion").attr("src", "images/aboutme/twinmotion-white.png")
                $("#visualstudio").attr("src", "images/aboutme/visual studio code-white.png")

            // work
            $(".publisher-content").show();
            $(".designer-content").hide();

            // contact
            $("#contactme").attr("src", "images/contact me_yellow.png")
    }

    // 클릭하면 다크모드 되는 거
    $("#dark").eq(0).click(function(){

        if($("html *").attr("data-dark") == "false"){
            // 다크모드일때
            $("html *").attr("data-dark", "true")
            localStorage.setItem("dark_mode", true)

            // index-이미지
            $("#i").attr("src", "images/i-glass.png")        
            $("#word").attr("src", "images/word-yellow.png")        
            $("#job").text("I'm PUBLISHER")           

            // about
            $("#dot").attr("src", "images/aboutme/dot-yellow.png")
            $(".about-job").text("퍼블리셔") 
            $("#profile").attr("src", "images/aboutme/profile_p.png")
            $("#m-profile").attr("src", "images/aboutme/m_profile_p.png")
                // about-tool
                $("#photoshop").attr("src", "images/aboutme/photoshop-white.png")
                $("#illustrator").attr("src", "images/aboutme/illustrator-white.png")
                $("#xd").attr("src", "images/aboutme/xd-white.png")
                $("#aftereffect").attr("src", "images/aboutme/aftereffect-white.png")
                $("#premiere").attr("src", "images/aboutme/premiere-white.png")
                $("#rhino").attr("src", "images/aboutme/rhino-white.png")
                $("#keyshot").attr("src", "images/aboutme/keyshot-white.png")
                $("#blender").attr("src", "images/aboutme/blender-white.png")
                $("#twinmotion").attr("src", "images/aboutme/twinmotion-white.png")
                $("#visualstudio").attr("src", "images/aboutme/visual studio code-white.png")

            // work
            $(".publisher-content").show();
            $(".designer-content").hide();

            // contact
            $("#contactme").attr("src", "images/contact me_yellow.png")

        }

        else{
            // 다크모드 아닐 때
            $("html *").attr("data-dark", "false")
            localStorage.removeItem("dark_mode", false)
            
            // index-이미지
            $("#i").attr("src", "images/i.png")
            $("#word").attr("src", "images/word.png") 
            $("#job").text("I'm DESIGNER")

            // about
            $("#dot").attr("src", "images/aboutme/dot.png")
            $(".about-job").text("디자이너")
            $("#profile").attr("src", "images/aboutme/profile.png")
            $("#m-profile").attr("src", "images/aboutme/m-profile.png")
                // about-tool
                $("#photoshop").attr("src", "images/aboutme/photoshop.png")
                $("#illustrator").attr("src", "images/aboutme/illustrator.png")
                $("#xd").attr("src", "images/aboutme/xd.png")
                $("#aftereffect").attr("src", "images/aboutme/aftereffect.png")
                $("#premiere").attr("src", "images/aboutme/premiere.png")
                $("#rhino").attr("src", "images/aboutme/rhino.png")
                $("#keyshot").attr("src", "images/aboutme/keyshot.png")
                $("#blender").attr("src", "images/aboutme/blender.png")
                $("#twinmotion").attr("src", "images/aboutme/twinmotion.png")
                $("#visualstudio").attr("src", "images/aboutme/visual studio code.png")
                
            // work
            $(".designer-content").show();
            $(".publisher-content").hide();

            // contact
            $("#contactme").attr("src", "images/contact me_red.png")
        }

        console.log(localStorage.getItem("dark_mode"))
    })

    // work job-tab클릭 -> 다크모드 되는 거 ???
    $("#p-tab").click(function(){
        $("html *").attr("data-dark", "true")
        localStorage.setItem("dark_mode", true)

        // index-이미지
        $("#i").attr("src", "images/i-glass.png")        
        $("#word").attr("src", "images/word-yellow.png")        
        $("#job").text("I'm PUBLISHER")           

        // about
        $("#dot").attr("src", "images/aboutme/dot-yellow.png")
        $(".about-job").text("퍼블리셔")
        $("#profile").attr("src", "images/aboutme/profile_p.png") 
        $("#m-profile").attr("src", "images/aboutme/m_profile_p.png")
            // about-tool
            $("#photoshop").attr("src", "images/aboutme/photoshop-white.png")
            $("#illustrator").attr("src", "images/aboutme/illustrator-white.png")
            $("#xd").attr("src", "images/aboutme/xd-white.png")
            $("#aftereffect").attr("src", "images/aboutme/aftereffect-white.png")
            $("#premiere").attr("src", "images/aboutme/premiere-white.png")
            $("#rhino").attr("src", "images/aboutme/rhino-white.png")
            $("#keyshot").attr("src", "images/aboutme/keyshot-white.png")
            $("#blender").attr("src", "images/aboutme/blender-white.png")
            $("#twinmotion").attr("src", "images/aboutme/twinmotion-white.png")
            $("#visualstudio").attr("src", "images/aboutme/visual studio code-white.png")

        // work
        $(".publisher-content").show();
        $(".designer-content").hide();

        // contact
        $("#contactme").attr("src", "images/contact me_yellow.png")
    })
    $("#d-tab").click(function(){
        $("html *").attr("data-dark", "false")
        localStorage.removeItem("dark_mode", false)

        // index-이미지
        $("#i").attr("src", "images/i.png")
        $("#word").attr("src", "images/word.png") 
        $("#job").text("I'm DESIGNER")

        // about
        $("#dot").attr("src", "images/aboutme/dot.png")
        $(".about-job").text("디자이너")
        $("#profile").attr("src", "images/aboutme/profile.png")
        $("#m-profile").attr("src", "images/aboutme/m-profile.png")
            // about-tool
            $("#photoshop").attr("src", "images/aboutme/photoshop.png")
            $("#illustrator").attr("src", "images/aboutme/illustrator.png")
            $("#xd").attr("src", "images/aboutme/xd.png")
            $("#aftereffect").attr("src", "images/aboutme/aftereffect.png")
            $("#premiere").attr("src", "images/aboutme/premiere.png")
            $("#rhino").attr("src", "images/aboutme/rhino.png")
            $("#keyshot").attr("src", "images/aboutme/keyshot.png")
            $("#blender").attr("src", "images/aboutme/blender.png")
            $("#twinmotion").attr("src", "images/aboutme/twinmotion.png")
            $("#visualstudio").attr("src", "images/aboutme/visual studio code.png")
            
        // work
        $(".designer-content").show();
        $(".publisher-content").hide();

        // contact
        $("#contactme").attr("src", "images/contact me_red.png")
    })

});