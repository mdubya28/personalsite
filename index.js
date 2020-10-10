$(".experience-circle").click(function(){
        var clicked = $(this).attr("id");
        $(".expand-"+ clicked).slideToggle();

        if (!$(".experience-circle").hasClass('experience-circle-clicked')) {
                $(this).addClass("experience-circle-clicked");
        }
        else {
                $(this).removeClass("experience-circle-clicked");
        }      
});
        

  
